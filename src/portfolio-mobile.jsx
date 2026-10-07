import { useState } from "react";
import { THEMES } from "./data/themes";
import { PROJECTS } from "./data/projects";
import { DIPLOMAS } from "./data/diplomas";
import { SHELVES } from "./data/skills";
import { VEILLE } from "./data/veille";
import { BTS_OVERVIEW, BTS_OPTIONS, BTS_BLOCKS, BTS_EXAMS, BTS_TRAINING } from "./data/bts";
import { EPREUVE_IDENTITY, COMPETENCES_REFERENTIEL, TABLEAU_SYNTHESE_FILE, BTS_SITUATIONS, BTS_CHECKLIST } from "./data/epreuve";
import portrait from "./assets/portrait.png";

// ─── NAV BURGER ───────────────────────────────────────────────────────────────
function BurgerNav({ theme, t, setTheme }) {
  const [open, setOpen] = useState(false);

  const links = [
    { id:"home",     label:"🏠 Accueil" },
    { id:"about",    label:"👤 À Propos" },
    { id:"diplomes", label:"📚 Diplômes" },
    { id:"skills",   label:"📜 Compétences" },
    { id:"projets",  label:"⚔️ Projets" },
    { id:"bts",      label:"📋 Dossier BTS" },
    { id:"veille",   label:"🃏 Veille" },
    { id:"contact",  label:"✉️ Contact" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <header style={{
        position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: "480px", zIndex: 1000,
        background: "rgba(0,0,0,0.90)", backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${t.color}28`,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 18px",
      }}>
        <div onClick={() => scrollTo("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "1.4rem", filter: `drop-shadow(0 0 8px ${t.color})` }}>{t.kanji}</span>
          <span style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "0.9rem", fontWeight: 700, color: t.color }}>Lorenzo Bellier</span>
        </div>
        <button
          onClick={() => setOpen(!open)}
          style={{ background: "transparent", border: `1.5px solid ${t.color}60`, borderRadius: "8px", padding: "6px 10px", cursor: "pointer", display: "flex", flexDirection: "column", gap: "4px" }}>
          {[0,1,2].map(i => (
            <div key={i} style={{
              width: "20px", height: "2px", background: t.color, borderRadius: "2px",
              transition: "all 0.3s",
              transform: open && i===0 ? "rotate(45deg) translate(4px,4px)"
                       : open && i===1 ? "scaleX(0)"
                       : open && i===2 ? "rotate(-45deg) translate(4px,-4px)"
                       : "none",
            }} />
          ))}
        </button>
      </header>

      {/* Dropdown menu */}
      <div style={{
        position: "fixed", top: "53px", left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: "480px", zIndex: 999,
        background: "rgba(0,0,0,0.96)", backdropFilter: "blur(20px)",
        borderBottom: open ? `1px solid ${t.color}28` : "none",
        maxHeight: open ? "400px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ padding: "10px 0" }}>
          {links.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "13px 22px", background: "transparent", border: "none",
                color: "#ffffffcc", fontFamily: "'Noto Serif JP',serif", fontSize: "0.92rem",
                cursor: "pointer", borderLeft: `3px solid transparent`,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = t.color; e.currentTarget.style.borderLeftColor = t.color; e.currentTarget.style.background = `${t.color}10`; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#ffffffcc"; e.currentTarget.style.borderLeftColor = "transparent"; e.currentTarget.style.background = "transparent"; }}>
              {label}
            </button>
          ))}
          {/* Theme switcher inside menu */}
          <div style={{ padding: "10px 22px 14px", borderTop: `1px solid ${t.color}18`, marginTop: "6px" }}>
            <div style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "0.65rem", color: `${t.color}80`, letterSpacing: "0.2em", marginBottom: "10px" }}>THÈME</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {Object.entries(THEMES).map(([key, th]) => (
                <button key={key} onClick={() => { setTheme(key); setOpen(false); }}
                  style={{
                    padding: "5px 12px", borderRadius: "16px",
                    border: `1.5px solid ${key === theme ? th.color : th.color+"44"}`,
                    background: key === theme ? `${th.color}22` : "transparent",
                    color: th.color, fontSize: "0.72rem", cursor: "pointer",
                    fontFamily: "'Noto Serif JP',serif", fontWeight: key === theme ? 700 : 400,
                  }}>{th.particles?.[0]} {th.sub}</button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay to close menu */}
      {open && <div onClick={() => setOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 998 }} />}
    </>
  );
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────
function Section({ id, children, bg }) {
  return (
    <section id={id} style={{ padding: "44px 18px", background: bg || "transparent" }}>
      {children}
    </section>
  );
}

function SectionTitle({ text, color }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <h2 style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "1.4rem", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "0.04em" }}>
        {text}<span style={{ color }}>  /</span>
      </h2>
      <div style={{ width: "36px", height: "2px", background: color, marginTop: "7px", borderRadius: "2px" }} />
    </div>
  );
}

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
function MobileContactForm({ t }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Merci de remplir le nom, l'email et le message.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(form.subject.trim() || `Contact via portfolio — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n—\nNom : ${form.name}\nEmail : ${form.email}`);
    window.location.href = `mailto:lorenzobellier@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldStyle = {
    width: "100%", padding: "12px 14px", borderRadius: "8px",
    background: "rgba(0,0,0,0.4)", border: `1.5px solid ${t.color}30`,
    color: "#fff", fontSize: "0.85rem", outline: "none", boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block", fontSize: "0.65rem", textTransform: "uppercase",
    letterSpacing: "0.1em", color: `${t.color}90`, marginBottom: "6px", fontWeight: 700,
  };

  return (
    <div style={{
      marginTop: "14px", borderRadius: "12px", padding: "18px 16px",
      background: `${t.color}0a`, border: `1.5px solid ${t.color}35`,
    }}>
      <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff", marginBottom: "6px" }}>✉️ Écris-moi un message</div>
      <p style={{ fontSize: "0.76rem", color: "#ffffff90", lineHeight: 1.6, marginBottom: "16px" }}>
        Ça ouvrira ton appli mail avec tout prérempli.
      </p>
      {sent ? (
        <div style={{ padding: "14px", borderRadius: "8px", background: `${t.color}18`, border: `1px solid ${t.color}50`, color: t.color, fontSize: "0.8rem" }}>
          ✦ Ton appli mail devrait s'ouvrir. Sinon écris à lorenzobellier@gmail.com
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <label style={labelStyle}>Nom *</label>
            <input type="text" value={form.name} onChange={handleChange("name")} placeholder="Ton nom" style={fieldStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input type="email" value={form.email} onChange={handleChange("email")} placeholder="ton@email.com" style={fieldStyle} />
          </div>
          <div>
            <label style={labelStyle}>Sujet</label>
            <input type="text" value={form.subject} onChange={handleChange("subject")} placeholder="Objet du message" style={fieldStyle} />
          </div>
          <div>
            <label style={labelStyle}>Message *</label>
            <textarea rows={4} value={form.message} onChange={handleChange("message")} placeholder="Ton message..." style={{ ...fieldStyle, resize: "vertical" }} />
          </div>
          {error && <div style={{ fontSize: "0.72rem", color: "#FF6B6B" }}>{error}</div>}
          <button type="submit" style={{
            padding: "12px", borderRadius: "10px", border: `1.5px solid ${t.color}`,
            background: `${t.color}20`, color: t.color, fontSize: "0.85rem", fontWeight: 700, cursor: "pointer",
          }}>
            Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
}

// ─── SKILL BADGE (remplace les barres %) ─────────────────────────────────────
function SkillBadge({ skill }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "10px 14px", borderRadius: "10px",
      background: "rgba(255,255,255,0.04)", border: `1px solid ${skill.color}30`,
      marginBottom: "8px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "1.1rem" }}>{skill.icon}</span>
        <span style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "0.85rem", color: "#ffffffdd" }}>{skill.name}</span>
      </div>
      <span style={{
        fontFamily: "'Noto Serif JP',serif", fontSize: "0.62rem", fontWeight: 700,
        color: skill.levelColor || skill.color,
        background: `${skill.levelColor || skill.color}18`,
        border: `1px solid ${skill.levelColor || skill.color}40`,
        padding: "3px 10px", borderRadius: "6px",
      }}>{skill.levelName}</span>
    </div>
  );
}

// ─── APP PRINCIPALE ───────────────────────────────────────────────────────────
export default function PortfolioMobile({ theme = "japon", setTheme = () => {} }) {
  const t = THEMES[theme];

  // Âge calculé dynamiquement
  const age = Math.floor((new Date() - new Date("2006-07-31")) / (365.25 * 24 * 60 * 60 * 1000));

  return (
    <div style={{
      minHeight: "100vh", background: t.bg, color: "#fff",
      fontFamily: "'Noto Serif JP',serif",
      maxWidth: "480px", margin: "0 auto",
      position: "relative", paddingBottom: "30px", paddingTop: "53px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background:${t.bg}; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>

      <BurgerNav theme={theme} t={t} setTheme={setTheme} />

      {/* ── HERO ── */}
      <Section id="home">
        <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
          <div style={{
            width: "110px", height: "110px", borderRadius: "50%",
            margin: "0 auto 18px", border: `3px solid ${t.color}`,
            overflow: "hidden", boxShadow: `0 0 24px ${t.color}55`,
          }}>
            <img src={portrait} alt="Lorenzo" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
          </div>
          <h1 style={{ fontSize: "2.2rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "8px" }}>
            Lorenzo<br /><span style={{ color: t.color }}>Bellier</span>
          </h1>
          <p style={{ color: `${t.color}cc`, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "10px" }}>
            {age} ans · Paris · BTS SIO SISR
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px", padding: "4px 14px", borderRadius: "20px", background: "#00ff8818", border: "1px solid #00ff8840" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00ff88", animation: "blink 1.5s infinite" }} />
            <span style={{ fontSize: "0.7rem", color: "#00ff88cc" }}>Cherche alternance 1 sem / 1 sem</span>
          </div>
          <p style={{ color: "#ffffff99", fontSize: "0.82rem", lineHeight: 1.7, maxWidth: "320px", margin: "0 auto 20px" }}>
            Étudiant en BTS SIO SISR, passionné par la cybersécurité, les réseaux et les cultures asiatiques.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "10px 20px", borderRadius: "24px", background: t.color, border: "none", color: "#000", fontWeight: 700, fontSize: "0.8rem", fontFamily: "'Noto Serif JP',serif", cursor: "pointer" }}>
              Compétences 📜
            </button>
            <button onClick={() => document.getElementById("projets")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "10px 20px", borderRadius: "24px", background: "transparent", border: `1.5px solid ${t.color}`, color: t.color, fontSize: "0.8rem", fontFamily: "'Noto Serif JP',serif", cursor: "pointer" }}>
              Projets ⚔️
            </button>
          </div>
        </div>
      </Section>

      {/* ── À PROPOS ── */}
      <Section id="about" bg={`${t.color}08`}>
        <SectionTitle text="À Propos" color={t.color} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { icon: "🎓", label: "Formation", val: "BTS SIO SISR — My Digital School, Paris (2025–2027)" },
            { icon: "🔍", label: "Objectif", val: "Alternance cybersécurité / réseau / sysadmin" },
            { icon: "🏢", label: "Stage", val: "Développeur Web — VANDJI CONSULTING (Mai–Août 2026)" },
            { icon: "📍", label: "Lieu", val: "Paris, Île-de-France" },
            { icon: "📖", label: "Passions", val: "Manga, anime VO, K-drama, manhwa, light novels, donghua" },
            { icon: "🐉", label: "Projet", val: "Apprendre le japonais · Voyager en Asie 🇯🇵 🇰🇷" },
          ].map(({ icon, label, val }) => (
            <div key={label} style={{ background: "rgba(255,255,255,0.05)", borderRadius: "12px", padding: "13px 15px", border: `1px solid ${t.color}22` }}>
              <div style={{ fontSize: "0.68rem", color: `${t.color}bb`, textTransform: "uppercase", marginBottom: "4px", letterSpacing: "0.1em" }}>{icon} {label}</div>
              <div style={{ color: "#ffffffdd", fontSize: "0.86rem", lineHeight: 1.5 }}>{val}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DIPLÔMES ── */}
      <Section id="diplomes">
        <SectionTitle text="Diplômes" color={t.color} />
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {DIPLOMAS.map((d) => (
            <div key={d.mangaTitle} style={{
              background: "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "16px",
              border: `1px solid ${d.stripColor}33`, borderLeft: `3px solid ${d.stripColor}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.4rem" }}>{d.coverSymbolBig}</span>
                <span style={{ fontSize: "0.7rem", color: d.stripColor, background: `${d.stripColor}18`, padding: "3px 10px", borderRadius: "10px", border: `1px solid ${d.stripColor}30` }}>
                  {d.mangaStatus}
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", marginBottom: "3px" }}>{d.full || d.mangaTitle}</div>
              <div style={{ color: `${d.stripColor}99`, fontSize: "0.73rem", marginBottom: "6px" }}>{d.school} · {d.mangaVol}</div>
              <div style={{ color: "#ffffff88", fontSize: "0.79rem", lineHeight: 1.6 }}>{d.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPÉTENCES ── */}
      <Section id="skills" bg={`${t.color}06`}>
        <SectionTitle text="Compétences" color={t.color} />
        {SHELVES.map(shelf => (
          <div key={shelf.category} style={{ marginBottom: "24px" }}>
            <div style={{ color: shelf.color, fontSize: "0.78rem", fontWeight: 700, marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {shelf.icon} {shelf.category}
            </div>
            {shelf.scrolls.map(s => (
              <SkillBadge key={s.id} skill={s} />
            ))}
          </div>
        ))}
      </Section>

      {/* ── PROJETS ── */}
      <Section id="projets">
        <SectionTitle text="Projets" color={t.color} />
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {PROJECTS.map((p) => (
            <div key={p.name} style={{
              background: p.coverBg || "rgba(255,255,255,0.04)", borderRadius: "14px", padding: "16px",
              border: `1px solid ${p.coverAccent}44`,
              position: "relative",
            }}>
              {p.isFeatured && (
                <div style={{ position: "absolute", top: "12px", right: "12px", padding: "2px 10px", borderRadius: "4px", background: `${p.coverAccent}30`, border: `1px solid ${p.coverAccent}60`, fontSize: "0.6rem", color: p.coverAccent, fontWeight: 700 }}>
                  🏢 STAGE
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{p.albumTitle}</div>
                  <div style={{ fontSize: "0.65rem", color: `${p.coverAccent}aa` }}>{p.albumSub}</div>
                </div>
              </div>
              <p style={{ color: "#ffffffaa", fontSize: "0.79rem", lineHeight: 1.6, marginBottom: "10px" }}>{p.desc}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{ padding: "2px 9px", borderRadius: "10px", fontSize: "0.67rem", border: `1px solid ${p.coverAccent}44`, color: p.coverAccent, background: `${p.coverAccent}12` }}>{tag}</span>
                ))}
              </div>
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ display:"inline-block", marginTop:"12px", color:p.coverAccent, fontSize:"0.76rem", fontWeight:700, textDecoration:"none" }}>{p.linkLabel || "Voir le dépôt GitHub →"}</a>
              {p.proofLinks?.map(proof => <a key={proof.href} href={proof.href} target="_blank" rel="noopener noreferrer" style={{ display:"block", marginTop:"8px", color:`${p.coverAccent}bb`, fontSize:"0.72rem", textDecoration:"none" }}>📎 {proof.label} →</a>)}
            </div>
          ))}
        </div>
      </Section>
      
      {/* ── DOSSIER BTS ── */}
      <Section id="bts" bg={`${t.color}06`}>
        <SectionTitle text="Dossier BTS SIO" color={t.color} />
        <p style={{ color:"#ffffffaa", fontSize:"0.8rem", lineHeight:1.65, marginBottom:"16px" }}>Les éléments « À joindre » correspondent à tes documents réels ou signés : ils ne doivent pas être inventés.</p>
        <div style={{ display:"grid", gap:"8px", marginBottom:"20px" }}>{Object.entries(BTS_IDENTITY).map(([label,value]) => <div key={label} style={{ padding:"10px", border:`1px solid ${t.color}30`, borderRadius:"9px" }}><div style={{ color:t.color, fontSize:".6rem", textTransform:"uppercase" }}>{label}</div><div style={{ fontSize:".82rem", marginTop:"3px" }}>{value}</div></div>)}</div>
        {BTS_SITUATIONS.map(s => <div key={s.id} style={{ padding:"14px", border:`1px solid ${t.color}35`, borderRadius:"12px", marginBottom:"12px", background:"rgba(0,0,0,.2)" }}><div style={{ color:"#fff", fontWeight:700, fontSize:".9rem" }}>{s.title}</div><div style={{ color:t.color, fontSize:".68rem", margin:"5px 0 10px" }}>{s.period}</div><div style={{ color:"#ffffffbb", fontSize:".76rem", lineHeight:1.6 }}>{s.context}</div><div style={{ color:t.color, fontSize:".72rem", fontWeight:700, marginTop:"12px" }}>Preuves à associer</div>{s.evidence.map(x => <div key={x} style={{ color:"#ffffffaa", fontSize:".72rem", marginTop:"5px" }}>• {x}</div>)}</div>)}
        <div style={{ color:t.color, fontSize:".78rem", fontWeight:700, margin:"18px 0 8px" }}>Contrôle avant dépôt</div>{BTS_CHECKLIST.map(([item,status]) => <div key={item} style={{ display:"flex", justifyContent:"space-between", gap:"10px", borderBottom:`1px solid ${t.color}22`, padding:"9px 0", fontSize:".72rem" }}><span style={{ color:"#ffffffbb" }}>{item}</span><span style={{ color:t.color, whiteSpace:"nowrap" }}>{status}</span></div>)}
      </Section>

      {/* ── VEILLE ── */}
      <Section id="veille" bg={`${t.color}06`}>
        <SectionTitle text="Veille Informatique" color={t.color} />
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {VEILLE.map((v) => (
            <div key={v.id} style={{
              background: `linear-gradient(135deg,${v.color}08,${v.color}14)`,
              borderRadius: "14px", padding: "16px",
              border: `1px solid ${v.color}40`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <span style={{ fontSize: "1.5rem", filter: `drop-shadow(0 0 8px ${v.color})` }}>{v.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.88rem" }}>{v.title}</div>
                  <div style={{ fontSize: "0.62rem", color: `${v.rarityColor}`, fontWeight: 700, letterSpacing: "0.1em" }}>{v.rarity} · {v.subtitle}</div>
                </div>
              </div>
              <div style={{ fontSize: "0.72rem", color: `${v.color}cc`, marginBottom: "10px", padding: "6px 10px", background: `${v.color}10`, borderRadius: "6px" }}>
                📊 {v.stat}
              </div>
              <div style={{ fontSize: "0.76rem", color: "#ffffffbb", lineHeight: 1.6, marginBottom: "10px" }}>{v.synthesis}</div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {v.sources.map(s => (
                  <span key={s} style={{ padding: "2px 8px", borderRadius: "8px", fontSize: "0.62rem", border: `1px solid ${v.color}35`, color: v.color, background: `${v.color}10` }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact">
        <SectionTitle text="Contact" color={t.color} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { icon: "📧", label: "Email", val: "lorenzobellier@gmail.com", href: "mailto:lorenzobellier@gmail.com", color: "#FF6B9D" },
            { icon: "🐙", label: "GitHub", val: "github.com/LorenzoBellier", href: "https://github.com/LorenzoBellier", color: "#B04AFF" },
            { icon: "💼", label: "LinkedIn", val: "Lorenzo Bellier", href: "https://www.linkedin.com/in/LorenzoBellier", color: "#00E5FF" },
            { icon: "📞", label: "Téléphone", val: "06 11 67 41 50", href: "tel:+33611674150", color: "#FFD700" },
          ].map(({ icon, label, val, href, color }) => (
            <a key={label} href={href}
              target={href.startsWith("mailto") || href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              style={{
                background: `${color}0a`, borderRadius: "12px", padding: "14px 16px",
                border: `1.5px solid ${color}35`, display: "flex", alignItems: "center",
                gap: "14px", textDecoration: "none",
              }}>
              <span style={{ fontSize: "1.4rem", filter: `drop-shadow(0 0 8px ${color})` }}>{icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ color: `${color}99`, fontSize: "0.67rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "2px" }}>{label}</div>
                <div style={{ color: "#ffffffdd", fontSize: "0.84rem", fontWeight: 700 }}>{val}</div>
              </div>
              <span style={{ color: `${color}60`, fontSize: "1rem" }}>→</span>
            </a>
          ))}
        </div>
        <MobileContactForm t={t} />
      </Section>
    </div>
  );
}
