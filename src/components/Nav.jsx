import { useState } from "react";
import { THEMES } from "../data/themes";

export function Nav({ active, setSection }) {
  const t = THEMES[active];
  const [hov, setHov] = useState(null);
  return (
    <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 28px", background:"rgba(0,0,0,0.82)", backdropFilter:"blur(20px)", borderBottom:`1px solid ${t.color}22` }}>
      <div onClick={() => setSection("home")} style={{ cursor:"pointer", display:"flex", alignItems:"center", gap:"10px" }}>
        <span style={{ fontSize:"1.7rem", filter:`drop-shadow(0 0 10px ${t.color})` }}>{t.kanji}</span>
        <div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.95rem", color:t.color, letterSpacing:"0.12em", fontWeight:700 }}>Lorenzo Bellier</div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.6rem", color:`${t.color}60`, letterSpacing:"0.2em", textTransform:"uppercase" }}>Portfolio</div>
        </div>
      </div>
      <div style={{ display:"flex", gap:"5px", flexWrap:"wrap", justifyContent:"flex-end" }}>
        {[["home","Accueil"],["about","À Propos"],["diplomes","Diplômes"],["skills","Compétences"],["projets","Projets"],["contact","Contact"]].map(([s,label]) => (
          <button key={s} onClick={() => setSection(s)}
            onMouseEnter={() => setHov(s)} onMouseLeave={() => setHov(null)}
            style={{ background:hov===s?`${t.color}20`:"transparent", border:`1px solid ${hov===s?t.color:t.color+"30"}`, color:t.color, padding:"5px 11px", borderRadius:"20px", cursor:"pointer", fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", letterSpacing:"0.08em", textTransform:"uppercase", transition:"all 0.25s" }}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export function ThemeSwitcher({ active, setActive }) {
  return (
    <div style={{ position:"fixed", right:"12px", top:"50%", transform:"translateY(-50%)", zIndex:100, display:"flex", flexDirection:"column", gap:"7px" }}>
      {Object.entries(THEMES).map(([key,t]) => (
        <button key={key} onClick={() => setActive(key)} title={t.sub}
          style={{ width:active===key?"44px":"34px", height:active===key?"44px":"34px", borderRadius:"50%", border:`2px solid ${active===key?t.color:t.color+"28"}`, background:active===key?`${t.color}20`:"rgba(0,0,0,0.65)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:active===key?"1.05rem":"0.82rem", boxShadow:active===key?`0 0 20px ${t.color}`:"none", transition:"all 0.3s", backdropFilter:"blur(10px)" }}>
          {t.particles[0]}
        </button>
      ))}
    </div>
  );
}
