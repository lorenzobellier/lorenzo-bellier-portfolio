import { useState } from "react";
// Import des vraies données
import { THEMES } from "./data/themes";
import { PROJECTS } from "./data/projects";
import { DIPLOMAS } from "./data/diplomas";
import { SHELVES } from "./data/skills";

// ─── PORTRAIT ─────────────────────────────────────────────────────────────────
// On garde ton chemin local
import portrait from "./assets/portrait.jpg";
const PORTRAIT_IMG = portrait;

// ─── COMPOSANTS REUTILISABLES (TON VISUEL) ────────────────────────────────────
function ThemePicker({ theme, setTheme }) {
  return (
    <div style={{ display:"flex", gap:"8px", flexWrap:"wrap", justifyContent:"center", padding:"12px 0" }}>
      {Object.entries(THEMES).map(([key, th]) => (
        <button key={key} onClick={() => setTheme(key)}
          style={{
            padding:"6px 14px", borderRadius:"20px", border:`1.5px solid ${key===theme ? th.color : th.color+"44"}`,
            background: key===theme ? `${th.color}22` : "transparent",
            color: th.color, fontSize:"0.75rem", cursor:"pointer",
            fontFamily:"'Noto Serif JP',serif", fontWeight: key===theme ? 700 : 400,
            transition:"all 0.2s",
          }}>{th.particles?.[0] || "✨"} {th.sub}</button>
      ))}
    </div>
  );
}

function Section({ id, children, bg }) {
  return (
    <section id={id} style={{ padding:"48px 20px", background: bg || "transparent" }}>
      {children}
    </section>
  );
}

function SectionTitle({ text, color }) {
  return (
    <div style={{ marginBottom:"28px" }}>
      <h2 style={{
        fontFamily:"'Noto Serif JP',serif", fontSize:"1.5rem", fontWeight:900,
        color:"#fff", margin:0, letterSpacing:"0.04em"
      }}>
        {text}<span style={{ color }}>  /</span>
      </h2>
      <div style={{ width:"40px", height:"2px", background:color, marginTop:"8px", borderRadius:"2px" }} />
    </div>
  );
}

function SkillBar({ skill, color }) {
  return (
    <div style={{ marginBottom:"12px" }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"4px" }}>
        <span style={{ color:"#fff", fontSize:"0.82rem", fontFamily:"'Noto Serif JP',serif" }}>
          {skill.icon} {skill.name}
        </span>
        <span style={{ color, fontSize:"0.78rem", fontFamily:"'Noto Serif JP',serif" }}>{skill.level}%</span>
      </div>
      <div style={{ height:"5px", background:"rgba(255,255,255,0.1)", borderRadius:"3px", overflow:"hidden" }}>
        <div style={{
          width:`${skill.level}%`, height:"100%",
          background:`linear-gradient(90deg,${color},${color}88)`,
          borderRadius:"3px", transition:"width 0.6s ease"
        }} />
      </div>
    </div>
  );
}

// ─── APP PRINCIPALE ───────────────────────────────────────────────────────────
export default function PortfolioMobile() {
  const [theme, setTheme] = useState("japon");
  const t = THEMES[theme];

  const navLinks = [
    { id:"home",     label:"🏠" },
    { id:"about",    label:"👤" },
    { id:"diplomes", label:"📚" },
    { id:"skills",   label:"📜" },
    { id:"projets",  label:"⚔️" },
    { id:"contact",  label:"✉️" },
  ];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });
  };

  return (
    <div style={{
      minHeight:"100vh",
      background: t.bg,
      color:"#fff",
      fontFamily:"'Noto Serif JP',serif",
      maxWidth:"480px",
      margin:"0 auto",
      position:"relative",
      paddingBottom:"70px",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;700;900&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        body { background:${t.bg}; }
      `}</style>

      {/* ── HERO ── */}
      <Section id="home">
        <ThemePicker theme={theme} setTheme={setTheme} />

        <div style={{ textAlign:"center", padding:"24px 0 16px" }}>
          <div style={{
            width:"110px", height:"110px", borderRadius:"50%",
            margin:"0 auto 20px",
            border:`3px solid ${t.color}`,
            overflow:"hidden",
            boxShadow:`0 0 24px ${t.color}55`,
          }}>
            <img src={PORTRAIT_IMG} alt="Lorenzo" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>

          <h1 style={{ fontSize:"2.2rem", fontWeight:900, lineHeight:1.1, marginBottom:"8px" }}>
            Lorenzo<br/><span style={{ color:t.color }}>Bellier</span>
          </h1>

          <p style={{ color:`${t.color}cc`, fontSize:"0.78rem", letterSpacing:"0.15em", textTransform:"uppercase", marginBottom:"12px" }}>
            19 ans · Paris · BTS SIO SISR
          </p>
          <p style={{ color:"#ffffff99", fontSize:"0.82rem", lineHeight:1.7, maxWidth:"320px", margin:"0 auto 20px" }}>
            Futur expert en cybersécurité · Otaku passionné · En route pour Tokyo 🗼
          </p>

          <div style={{ display:"flex", gap:"10px", justifyContent:"center" }}>
            <button onClick={() => scrollTo("skills")} style={{ padding:"10px 20px", borderRadius:"24px", background:t.color, border:"none", color:"#000", fontWeight:700, fontSize:"0.8rem", fontFamily:"'Noto Serif JP',serif" }}>
              Compétences 📜
            </button>
            <button onClick={() => scrollTo("projets")} style={{ padding:"10px 20px", borderRadius:"24px", background:"transparent", border:`1.5px solid ${t.color}`, color:t.color, fontSize:"0.8rem", fontFamily:"'Noto Serif JP',serif" }}>
              Projets ⚔️
            </button>
          </div>
        </div>
      </Section>

      {/* ── À PROPOS (Statique comme demandé) ── */}
      <Section id="about" bg={`${t.color}08`}>
        <SectionTitle text="À Propos" color={t.color} />
        <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
          {[
            { icon:"🎓", label:"Formation", val:"BTS SIO SISR — My Digital School, Paris" },
            { icon:"🔍", label:"Objectif", val:"Alternance en cybersécurité / réseau" },
            { icon:"🗾", label:"Passions", val:"Manga, anime VO, K-drama, manhwa, donghua" },
            { icon:"🗺️", label:"Projet", val:"Voyager au Japon 🇯🇵 et en Corée 🇰🇷" },
          ].map(({icon,label,val}) => (
            <div key={label} style={{ background:"rgba(255,255,255,0.05)", borderRadius:"12px", padding:"14px 16px", border:`1px solid ${t.color}22` }}>
              <div style={{ fontSize:"0.7rem", color:`${t.color}bb`, textTransform:"uppercase", marginBottom:"4px" }}>{icon} {label}</div>
              <div style={{ color:"#ffffffdd", fontSize:"0.87rem" }}>{val}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── DIPLÔMES (Données de diplomas.js) ── */}
      <Section id="diplomes">
        <SectionTitle text="Diplômes" color={t.color} />
        <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
          {DIPLOMAS.map((d) => (
            <div key={d.mangaTitle} style={{
              background:"rgba(255,255,255,0.04)", borderRadius:"14px", padding:"16px",
              border:`1px solid ${d.color}33`,
              borderLeft:`3px solid ${d.color}`,
            }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"6px" }}>
                <div style={{ fontSize:"1.4rem" }}>{d.icon}</div>
                <span style={{ fontSize:"0.72rem", color:d.color, background:`${d.color}18`, padding:"3px 10px", borderRadius:"10px" }}>
                  {d.mangaStatus}
                </span>
              </div>
              <div style={{ fontWeight:700, fontSize:"0.92rem" }}>{d.mangaTitle}</div>
              <div style={{ color:`${d.color}99`, fontSize:"0.73rem" }}>{d.school}</div>
              <div style={{ color:"#ffffff88", fontSize:"0.8rem", marginTop:"6px" }}>{d.desc}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── COMPÉTENCES (Données de skills.js) ── */}
      <Section id="skills" bg={`${t.color}06`}>
        <SectionTitle text="Compétences" color={t.color} />
        {SHELVES.map(shelf => (
          <div key={shelf.category} style={{ marginBottom:"24px" }}>
            <div style={{ color:shelf.color, fontSize:"0.8rem", fontWeight:700, marginBottom:"12px", textTransform:"uppercase" }}>
              {shelf.icon} {shelf.category}
            </div>
            {shelf.scrolls.map(s => (
              <SkillBar key={s.name} skill={s} color={t.color} />
            ))}
          </div>
        ))}
      </Section>

      {/* ── PROJETS (Données de projects.js) ── */}
      <Section id="projets">
        <SectionTitle text="Projets GitHub" color={t.color} />
        <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
          {PROJECTS.map((p) => (
            <div key={p.albumTitle} style={{
              background: p.coverBg || "rgba(255,255,255,0.04)", borderRadius:"14px", padding:"16px",
              border:`1px solid ${p.coverAccent}44`,
            }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"6px" }}>
                <span style={{ fontSize:"1.3rem" }}>{p.icon}</span>
                <span style={{ fontWeight:700, fontSize:"0.87rem" }}>{p.albumTitle}</span>
              </div>
              <p style={{ color:"#ffffffaa", fontSize:"0.8rem", marginBottom:"8px" }}>{p.desc}</p>
              <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    padding:"2px 10px", borderRadius:"10px", fontSize:"0.68rem",
                    border:`1px solid ${p.coverAccent}44`, color:p.coverAccent, background:`${p.coverAccent}12`,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact" bg={`${t.color}06`}>
        <SectionTitle text="Contact" color={t.color} />
        <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
          {[
            { icon:"🐙", label:"GitHub", val:"github.com/LorenzoBellier", href:"https://github.com/LorenzoBellier" },
            { icon:"💼", label:"LinkedIn", val:"linkedin.com/in/lorenzo-bellier", href:"https://linkedin.com/in/lorenzo-bellier" },
            { icon:"📧", label:"Email", val:"contact@lorenzobellier.fr", href:"mailto:contact@lorenzobellier.fr" },
          ].map(({icon,label,val,href}) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={{
              background:"rgba(255,255,255,0.04)", borderRadius:"12px", padding:"14px 16px",
              border:`1px solid ${t.color}22`, display:"flex", alignItems:"center", gap:"14px", textDecoration:"none"
            }}>
              <span style={{ fontSize:"1.3rem" }}>{icon}</span>
              <div>
                <div style={{ color:`${t.color}bb`, fontSize:"0.68rem" }}>{label}</div>
                <div style={{ color:"#ffffffdd", fontSize:"0.83rem" }}>{val}</div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* ── NAV BOTTOM ── */}
      <nav style={{
        position:"fixed", bottom:0, left:"50%", transform:"translateX(-50%)",
        width:"100%", maxWidth:"480px",
        background:"rgba(0,0,0,0.88)", backdropFilter:"blur(20px)",
        borderTop:`1px solid ${t.color}28`,
        display:"flex", justifyContent:"space-around", padding:"10px 0",
        zIndex:999,
      }}>
        {navLinks.map(({id,label}) => (
          <button key={id} onClick={() => scrollTo(id)}
            style={{ background:"transparent", border:"none", color:t.color, fontSize:"1.25rem", cursor:"pointer" }}>
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}