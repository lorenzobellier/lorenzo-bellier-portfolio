import { THEMES } from "../data/themes";
import { SectionTitle } from "./UI";

const EPISODES = [
  { ep:"01", icon:"🐙", title:"GitHub Records",  titleKR:"깃허브 레코드", genre:"Tech Romance · Code",    tagline:"Là où le code prend vie. 6 projets, des dizaines de commits, une histoire en construction.", network:"github.com",   color:"#B04AFF", stars:4, rating:"9.2", thumbBg:"linear-gradient(135deg,#0d0020,#1e0040,#0a0015)", cardBg:"linear-gradient(180deg,#0d0020,#080010)", link:"https://github.com/LorenzoBellier" },
  { ep:"02", icon:"💼", title:"LinkedIn Story",   titleKR:"링크드인 스토리", genre:"Career Drama · Network", tagline:"Le profil qui raconte le parcours. Des connexions qui construisent l'avenir.",            network:"linkedin.com", color:"#00E5FF", stars:3, rating:"8.5", thumbBg:"linear-gradient(135deg,#000d1a,#001428,#000810)", cardBg:"linear-gradient(180deg,#000d1a,#00060f)", link:"https://www.linkedin.com/in/lorenzo-bellier-15a710353/" },
  { ep:"03", icon:"📧", title:"Message Direct",   titleKR:"직접 메시지",    genre:"Slice of Life · Contact", tagline:"Un mail, une opportunité. Recruteurs, collaborateurs — la porte est ouverte.",          network:"email",        color:"#FF6B9D", stars:5, rating:"10.0",thumbBg:"linear-gradient(135deg,#1a0010,#2d001f,#0f000b)", cardBg:"linear-gradient(180deg,#1a0010,#0f000b)", link:"mailto:lorenzobellier@gmail.com" },
  { ep:"04", icon:"📞", title:"Appel Direct",     titleKR:"직접 전화",      genre:"Action · Direct",         tagline:"Un appel, une opportunité. Disponible en journée pour échanger.",                       network:"06 11 67 41 50",color:"#FFD700", stars:5, rating:"∞",   thumbBg:"linear-gradient(135deg,#1a0800,#2d1000,#0f0500)", cardBg:"linear-gradient(180deg,#1a0800,#0f0500)", link:"tel:+33611674150" },
];

import { useState } from "react";

function ContactForm({ theme }) {
  const t = THEMES[theme];
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Merci de remplir au moins le nom, l'email et le message.");
      return;
    }
    setError("");
    const subject = encodeURIComponent(form.subject.trim() || `Contact via portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n—\nNom : ${form.name}\nEmail : ${form.email}`
    );
    window.location.href = `mailto:lorenzobellier@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const fieldStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "6px",
    background: "rgba(0,0,0,0.4)",
    border: `1px solid ${t.color}30`,
    color: "#fff",
    fontFamily: "'Noto Serif JP',serif",
    fontSize: "0.85rem",
    outline: "none",
    transition: "border 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'Noto Serif JP',serif",
    fontSize: "0.65rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: `${t.color}80`,
    marginBottom: "6px",
  };

  return (
    <div style={{ marginTop: "56px", position: "relative", borderRadius: "10px", overflow: "hidden",
      border: `1px solid ${t.color}25`, background: "linear-gradient(180deg,rgba(0,0,0,0.45),rgba(0,0,0,0.65))",
      backdropFilter: "blur(10px)", padding: "32px 32px 28px" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: `linear-gradient(90deg,transparent,${t.color},transparent)` }} />
      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "6px" }}>
        <span style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "0.6rem", color: `${t.color}70`, letterSpacing: "0.2em" }}>EP. BONUS</span>
        <span style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "1.1rem", fontWeight: 900, color: "#fff" }}>Écris-moi un message</span>
      </div>
      <p style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "0.78rem", color: "#ffffff60", lineHeight: 1.7, marginBottom: "22px" }}>
        Une question, une opportunité d'alternance, une envie de collaborer ? Remplis le formulaire, ça ouvrira ton client mail avec tout déjà prérempli.
      </p>

      {sent ? (
        <div style={{ padding: "18px 20px", borderRadius: "8px", background: `${t.color}12`, border: `1px solid ${t.color}40`,
          fontFamily: "'Noto Serif JP',serif", fontSize: "0.82rem", color: t.color, display: "flex", alignItems: "center", gap: "10px" }}>
          ✦ Ton client mail devrait s'ouvrir. Si rien ne se passe, écris directement à lorenzobellier@gmail.com
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Nom *</label>
              <input type="text" value={form.name} onChange={handleChange("name")}
                onFocus={e => { e.target.style.border = `1px solid ${t.color}`; e.target.style.boxShadow = `0 0 0 3px ${t.color}18`; }}
                onBlur={e => { e.target.style.border = `1px solid ${t.color}30`; e.target.style.boxShadow = "none"; }}
                placeholder="Ton nom" style={fieldStyle} />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input type="email" value={form.email} onChange={handleChange("email")}
                onFocus={e => { e.target.style.border = `1px solid ${t.color}`; e.target.style.boxShadow = `0 0 0 3px ${t.color}18`; }}
                onBlur={e => { e.target.style.border = `1px solid ${t.color}30`; e.target.style.boxShadow = "none"; }}
                placeholder="ton@email.com" style={fieldStyle} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Sujet</label>
            <input type="text" value={form.subject} onChange={handleChange("subject")}
              onFocus={e => { e.target.style.border = `1px solid ${t.color}`; e.target.style.boxShadow = `0 0 0 3px ${t.color}18`; }}
              onBlur={e => { e.target.style.border = `1px solid ${t.color}30`; e.target.style.boxShadow = "none"; }}
              placeholder="Objet du message" style={fieldStyle} />
          </div>
          <div>
            <label style={labelStyle}>Message *</label>
            <textarea rows={5} value={form.message} onChange={handleChange("message")}
              onFocus={e => { e.target.style.border = `1px solid ${t.color}`; e.target.style.boxShadow = `0 0 0 3px ${t.color}18`; }}
              onBlur={e => { e.target.style.border = `1px solid ${t.color}30`; e.target.style.boxShadow = "none"; }}
              placeholder="Ton message..." style={{ ...fieldStyle, resize: "vertical", fontFamily: "'Noto Serif JP',serif" }} />
          </div>
          {error && (
            <div style={{ fontFamily: "'Noto Serif JP',serif", fontSize: "0.72rem", color: "#FF6B6B" }}>{error}</div>
          )}
          <button type="submit" style={{
            alignSelf: "flex-start", padding: "11px 26px", borderRadius: "20px", border: `1px solid ${t.color}`,
            background: `${t.color}18`, color: t.color, fontFamily: "'Noto Serif JP',serif", fontSize: "0.82rem",
            fontWeight: 700, letterSpacing: "0.05em", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = `${t.color}30`; e.currentTarget.style.boxShadow = `0 0 20px ${t.color}50`; }}
            onMouseLeave={e => { e.currentTarget.style.background = `${t.color}18`; e.currentTarget.style.boxShadow = "none"; }}>
            ✉ Envoyer le message
          </button>
        </form>
      )}
    </div>
  );
}

function EpisodeCard({ ep }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position:"relative", borderRadius:"8px", overflow:"hidden", border:`2px solid ${hov ? ep.color : ep.color+"30"}`,
        boxShadow: hov ? `0 0 28px ${ep.color}55,0 8px 32px rgba(0,0,0,0.6)` : "0 4px 16px rgba(0,0,0,0.4)",
        transform: hov ? "translateY(-8px) scale(1.03)" : "scale(1)",
        transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)", background:ep.cardBg, display:"flex", flexDirection:"column" }}>
      <div style={{ position:"relative", height:"160px", overflow:"hidden", background:ep.thumbBg, flexShrink:0 }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,transparent 40%,rgba(0,0,0,0.7) 100%)", zIndex:2, pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"10px", left:"10px", zIndex:4, background:"rgba(0,0,0,0.75)", border:`1px solid ${ep.color}60`, borderRadius:"4px", padding:"2px 8px" }}>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.6rem", color:ep.color, letterSpacing:"0.15em", fontWeight:700 }}>EP.{ep.ep}</span>
        </div>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform: hov ? "translate(-50%,-60%) scale(1.15)" : "translate(-50%,-50%)", fontSize:"3.8rem", filter:`drop-shadow(0 0 16px ${ep.color})`, zIndex:3, transition:"transform 0.3s" }}>{ep.icon}</div>
        <div style={{ position:"absolute", bottom:"8px", right:"8px", zIndex:4, background:`${ep.color}25`, border:`1px solid ${ep.color}50`, borderRadius:"3px", padding:"2px 7px" }}>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.52rem", color:`${ep.color}cc` }}>{ep.network}</span>
        </div>
        {hov && (
          <a href={ep.link} target={ep.link.startsWith("mailto") || ep.link.startsWith("tel") ? "_self" : "_blank"} rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", zIndex:5, background:"rgba(0,0,0,0.25)", textDecoration:"none" }}>
            <div style={{ width:"52px", height:"52px", borderRadius:"50%", border:`2px solid ${ep.color}`, background:ep.color, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", boxShadow:`0 0 24px ${ep.color}80` }}>▶</div>
          </a>
        )}
      </div>
      <div style={{ padding:"14px", flex:1, display:"flex", flexDirection:"column", gap:"6px" }}>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.65rem", color:`${ep.color}70`, letterSpacing:"0.18em", textTransform:"uppercase" }}>{ep.genre}</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1rem", fontWeight:900, color:"#fff", lineHeight:1.2 }}>{ep.title}</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", color:`${ep.color}90` }}>{ep.titleKR}</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.76rem", color:"#ffffff60", lineHeight:1.6, flex:1 }}>{ep.tagline}</div>
        <div style={{ display:"flex", alignItems:"center", gap:"6px", marginTop:"4px" }}>
          <div style={{ display:"flex", gap:"2px" }}>
            {[...Array(5)].map((_,i) => <span key={i} style={{ fontSize:"0.65rem", color: i<ep.stars ? ep.color : `${ep.color}25` }}>★</span>)}
          </div>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${ep.color}70` }}>{ep.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection({ theme }) {
  const t = THEMES[theme];
  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1060px", margin:"0 auto" }}>
      <SectionTitle text="Contact · 드라마" kanji="縁" theme={theme} />
      <div style={{ display:"flex", alignItems:"center", gap:"14px", marginTop:"18px", marginBottom:"44px", padding:"12px 20px", background:"rgba(0,0,0,0.4)", borderRadius:"8px", border:`1px solid ${t.color}20`, backdropFilter:"blur(10px)" }}>
        <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#00ff88", boxShadow:"0 0 8px #00ff88", animation:"blink 1.5s ease-in-out infinite", flexShrink:0 }} />
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.72rem", color:`${t.color}80`, letterSpacing:"0.2em", textTransform:"uppercase" }}>DISPONIBLE · Cherche alternance · Paris & Île-de-France</span>
        <div style={{ marginLeft:"auto", display:"flex", gap:"10px" }}>
          {["🎬","⭐","🔔"].map((e,i) => <span key={i} style={{ fontSize:"0.9rem", opacity:0.6 }}>{e}</span>)}
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"18px" }}>
        {EPISODES.map((ep, i) => <EpisodeCard key={i} ep={ep} />)}
      </div>

      <ContactForm theme={theme} />

      <div style={{ marginTop:"56px", textAlign:"center", padding:"24px", borderTop:`1px solid ${t.color}15` }}>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", color:`${t.color}40`, letterSpacing:"0.3em", marginBottom:"10px" }}>— Générique de fin —</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1.1rem", color:`${t.color}25`, letterSpacing:"0.5em" }}>日 韓 中 漫</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.65rem", color:`${t.color}25`, marginTop:"8px", letterSpacing:"0.15em" }}>Lorenzo Bellier · Paris {new Date().getFullYear()}</div>
      </div>
    </div>
  );
}
