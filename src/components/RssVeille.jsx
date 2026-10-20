import { useCallback, useEffect, useMemo, useState } from "react";

const FEEDS = [
  { name: "CERT-FR", category: "Alertes françaises", url: "https://www.cert.ssi.gouv.fr/feed/", color: "#FF6B9D" },
  { name: "ANSSI", category: "Cybersécurité", url: "https://www.ssi.gouv.fr/feed/", color: "#CC77FF" },
  { name: "The Hacker News", category: "Cyber actualités", url: "https://feeds.feedburner.com/TheHackersNews", color: "#00E5FF" },
  { name: "BleepingComputer", category: "Menaces & vulnérabilités", url: "https://www.bleepingcomputer.com/feed/", color: "#00FFB3" },
];
// Les relais publics peuvent être limités ou indisponibles. On essaie d'abord
// un convertisseur RSS→JSON, puis deux relais CORS en secours.
const PROXIES = [
  (url) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url) => `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
];

async function loadViaRss2Json(feed) {
  const endpoint = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feed.url)}`;
  const response = await fetch(endpoint, { signal: AbortSignal.timeout(12000) });
  if (!response.ok) throw new Error(`RSS2JSON HTTP ${response.status}`);
  const data = await response.json();
  if (data.status !== "ok" || !Array.isArray(data.items)) throw new Error(data.message || "Conversion RSS indisponible");
  const articles = data.items.map((item) => ({
    title: item.title || "Article sans titre",
    link: item.link || "",
    date: item.pubDate || item.isoDate || "",
    description: (item.description || item.content || "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").trim(),
    source: feed.name,
    category: feed.category,
    color: feed.color,
  })).filter((item) => item.link && /^https?:\/\//i.test(item.link));
  if (!articles.length) throw new Error("Aucun article retourné");
  return articles;
}

function textOf(node, selector) {
  const found = node.querySelector(selector);
  return found?.textContent?.trim() || "";
}

function parseFeed(xml, feed) {
  const doc = new DOMParser().parseFromString(xml, "text/xml");
  if (doc.querySelector("parsererror")) throw new Error("Flux RSS illisible");
  const entries = [...doc.querySelectorAll("item")].map((item) => ({
    title: textOf(item, "title") || "Article sans titre",
    link: textOf(item, "link") || textOf(item, "guid"),
    date: textOf(item, "pubDate") || textOf(item, "date"),
    description: textOf(item, "description").replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").trim(),
    source: feed.name,
    category: feed.category,
    color: feed.color,
  }));
  const atomEntries = [...doc.querySelectorAll("entry")].map((item) => {
    const link = item.querySelector('link[rel="alternate"]') || item.querySelector("link");
    return {
      title: textOf(item, "title") || "Article sans titre",
      link: link?.getAttribute("href") || "",
      date: textOf(item, "published") || textOf(item, "updated"),
      description: textOf(item, "summary").replace(/<[^>]*>/g, " ").trim(),
      source: feed.name,
      category: feed.category,
      color: feed.color,
    };
  });
  return [...entries, ...atomEntries].filter((item) => item.link && /^https?:\/\//i.test(item.link));
}

async function loadFeed(feed) {
  let lastError;
  try {
    return await loadViaRss2Json(feed);
  } catch (error) {
    lastError = error;
  }
  for (const proxy of PROXIES) {
    try {
      const response = await fetch(proxy(feed.url), { signal: AbortSignal.timeout(12000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const xml = await response.text();
      const articles = parseFeed(xml, feed);
      if (articles.length) return articles;
      throw new Error("Aucun article dans ce flux");
    } catch (error) { lastError = error; }
  }
  throw lastError || new Error("Flux indisponible");
}

export default function RssVeille({ theme }) {
  const accent = theme === "light" ? "#6D28D9" : "#CC77FF";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);
  const [filter, setFilter] = useState("Toutes les sources");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(async () => {
    setLoading(true);
    const results = await Promise.all(FEEDS.map(async (feed) => {
      try { return { feed, articles: await loadFeed(feed) }; }
      catch (error) { return { feed, error: error?.message || "Erreur réseau" }; }
    }));
    // Si une source échoue temporairement, conserver ses derniers articles en mémoire
    // plutôt que de vider toute la veille à chaque actualisation.
    setArticles((previous) => {
      const successfulSources = new Set(results.filter((result) => result.articles).map((result) => result.feed.name));
      const fresh = results.flatMap((result) => result.articles || []);
      const stale = previous.filter((article) => !successfulSources.has(article.source));
      return [...fresh, ...stale].sort((a, b) => (Date.parse(b.date) || 0) - (Date.parse(a.date) || 0));
    });
    setErrors(results.filter((result) => result.error).map((result) => result.feed.name));
    setLastUpdated(new Date());
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh, refreshKey]);
  useEffect(() => {
    const timer = window.setInterval(() => setRefreshKey((key) => key + 1), 15 * 60 * 1000);
    return () => window.clearInterval(timer);
  }, []);

  const visibleArticles = useMemo(() => {
    const filtered = filter === "Toutes les sources" ? articles : articles.filter((a) => a.source === filter);
    return filtered.slice(0, 32);
  }, [articles, filter]);

  const dateLabel = (value) => {
    const date = Date.parse(value);
    return date ? new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium", timeStyle: "short" }).format(date) : "Date non précisée";
  };

  return (
    <section aria-label="Flux RSS de veille intensive" style={{ marginTop: 42, padding: "24px", borderRadius: 14, border: `1px solid ${accent}45`, background: "linear-gradient(160deg,rgba(20,0,40,.96),rgba(5,0,18,.98))", boxShadow: `0 0 32px ${accent}10` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap", marginBottom: 20 }}>
        <div>
          <div style={{ fontFamily: "'Noto Serif JP',serif", color: accent, fontSize: ".7rem", letterSpacing: ".2em", marginBottom: 8 }}>📡 VEILLE EN CONTINU</div>
          <h3 style={{ color: "#fff", fontFamily: "'Noto Serif JP',serif", fontSize: "1.25rem", marginBottom: 7 }}>Flux RSS · Cybersécurité</h3>
          <p style={{ color: "#ffffff9c", fontSize: ".78rem", lineHeight: 1.6, maxWidth: 650 }}>Actualités issues de sources spécialisées. Les flux sont rechargés à l’ouverture et automatiquement toutes les 15 minutes tant que cette page reste ouverte.</p>
        </div>
        <button type="button" onClick={() => setRefreshKey((key) => key + 1)} disabled={loading} style={{ border: `1px solid ${accent}80`, borderRadius: 7, background: `${accent}18`, color: "#fff", padding: "10px 14px", cursor: loading ? "wait" : "pointer", fontSize: ".78rem", whiteSpace: "nowrap" }}>
          {loading ? "⟳ Chargement…" : "↻ Actualiser"}
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
        {["Toutes les sources", ...FEEDS.map((feed) => feed.name)].map((name) => (
          <button type="button" key={name} onClick={() => setFilter(name)} aria-pressed={filter === name} style={{ border: `1px solid ${filter === name ? accent : `${accent}35`}`, borderRadius: 20, padding: "6px 11px", background: filter === name ? `${accent}30` : "transparent", color: filter === name ? "#fff" : "#ffffffa8", cursor: "pointer", fontSize: ".7rem" }}>{name}</button>
        ))}
      </div>

      {errors.length > 0 && <p role="status" style={{ color: "#ffd28a", fontSize: ".72rem", lineHeight: 1.6, marginBottom: 14 }}>Certaines sources ne répondent pas : {errors.join(", ")}. Une autre méthode de récupération a été essayée ; les articles déjà chargés sont conservés si possible. Vérifie la connexion ou réessaie plus tard.</p>}
      {loading && articles.length === 0 && <p style={{ color: "#ffffffa8", padding: "24px 0", fontSize: ".85rem" }}>Connexion aux sources RSS…</p>}
      {!loading && visibleArticles.length === 0 && <div style={{ color: "#ffffffa8", padding: "24px 0", fontSize: ".85rem", lineHeight: 1.7 }}>{errors.length === FEEDS.length ? "Les flux ne sont pas accessibles pour le moment. Réessaie plus tard ou ouvre directement une source ci-dessous." : "Aucun article disponible pour ce filtre."}</div>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))", gap: 12 }}>
        {visibleArticles.map((article, index) => (
          <article key={`${article.source}-${article.link}-${index}`} style={{ padding: 15, borderRadius: 9, border: `1px solid ${article.color}35`, background: "rgba(255,255,255,.025)", display: "flex", flexDirection: "column", minHeight: 150 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center", marginBottom: 10 }}>
              <span style={{ color: article.color, fontSize: ".68rem", fontWeight: 700 }}>{article.source}</span>
              <span style={{ color: "#ffffff70", fontSize: ".63rem", textAlign: "right" }}>{dateLabel(article.date)}</span>
            </div>
            <h4 style={{ color: "#fff", fontSize: ".88rem", lineHeight: 1.5, marginBottom: 9 }}>{article.title}</h4>
            {article.description && <p style={{ color: "#ffffff9c", fontSize: ".72rem", lineHeight: 1.6, marginBottom: 14 }}>{article.description.replace(/\s+/g, " ").slice(0, 180)}{article.description.length > 180 ? "…" : ""}</p>}
            <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ color: article.color, fontSize: ".74rem", textDecoration: "none", marginTop: "auto", paddingTop: 8 }}>Lire l’article ↗</a>
          </article>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, marginTop: 18, paddingTop: 13, borderTop: "1px solid #ffffff14", color: "#ffffff70", fontSize: ".68rem" }}>
        <span>{articles.length} article(s) récupéré(s) · affichage limité aux 32 plus récents</span>
        <span>{lastUpdated ? `Dernière tentative : ${lastUpdated.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}` : "En attente"}</span>
      </div>
      <p style={{ color: "#ffffff60", fontSize: ".66rem", lineHeight: 1.6, marginTop: 12 }}>Sources directes : {FEEDS.map((feed, i) => <span key={feed.name}>{i > 0 ? " · " : ""}<a href={feed.url} target="_blank" rel="noopener noreferrer" style={{ color: "#ffffffa8" }}>{feed.name}</a></span>)}. Un convertisseur RSS→JSON est essayé en premier, puis des relais CORS en secours ; leur disponibilité dépend de services tiers.</p>
    </section>
  );
}
