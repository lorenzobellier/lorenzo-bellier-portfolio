import { useState, useEffect } from "react";
import { THEMES } from "../data/themes";

export default function HomeSection({ theme, setSection }) {
  const t = THEMES[theme];
  const [typed, setTyped] = useState("");
  const full = "Futur expert en cybersécurité · Otaku passionné · En route pour Tokyo 🗼";

  useEffect(() => {
    let i = 0; setTyped("");
    const iv = setInterval(() => {
      if (i < full.length) { setTyped(full.slice(0, ++i)); } else clearInterval(iv);
    }, 45);
    return () => clearInterval(iv);
  }, [theme]);

  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center", padding:"100px 24px 60px", position:"relative" }}>
      <div style={{ position:"absolute", fontSize:"clamp(160px,32vw,360px)", fontFamily:"'Noto Serif JP',serif", color:`${t.color}cc`, fontWeight:900, top:"50%", left:"50%", transform:"translate(-50%,-50%)", userSelect:"none", pointerEvents:"none", lineHeight:1, opacity:0.2 }}>{t.kanji}</div>
 
      <div style={{ width:"86px", height:"86px", borderRadius:"50%", border:`3px solid ${t.color}`, background:`radial-gradient(circle,${t.color}25,#000)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"2rem", marginBottom:"24px", boxShadow:`0 0 35px ${t.glow},0 0 70px ${t.glow}`, position:"relative", zIndex:1, animation:"avatarPulse 3s ease-in-out infinite" }}>
        {t.particles[0]}
      </div>

      {/* Name with glitch */}
      <div style={{ position:"relative", zIndex:1, marginBottom:"6px" }}>
        <div style={{ fontSize:"clamp(2rem,6vw,4.2rem)", fontFamily:"'Noto Serif JP',serif", fontWeight:900, color:"#fff", letterSpacing:"0.04em", textShadow:`0 0 30px ${t.color}30` }}>
          Lorenzo <span style={{ color:t.color, textShadow:`0 0 20px ${t.color},0 0 50px ${t.color}40` }}>Bellier</span>
        </div>
        <div style={{ position:"absolute", top:"2px", left:"2px", fontSize:"clamp(2rem,6vw,4.2rem)", fontFamily:"'Noto Serif JP',serif", fontWeight:900, color:"#ff0040", opacity:0.18, zIndex:-1, filter:"blur(1px)", animation:"glitch 4s infinite", userSelect:"none", pointerEvents:"none" }}>
          Lorenzo Bellier
        </div>
      </div>

      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"clamp(0.7rem,1.7vw,0.92rem)", color:`${t.color}75`, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:"20px", zIndex:1 }}>
        19 ans · Paris · Bac SIO SISR · Futur cyber-ninja 🥷
      </div>

      <div style={{ maxWidth:"540px", fontFamily:"'Noto Serif JP',serif", fontSize:"0.88rem", color:"#ffffff65", lineHeight:1.9, minHeight:"50px", zIndex:1, marginBottom:"36px" }}>
        {typed}<span style={{ color:t.color, animation:"blink 1s step-end infinite" }}>|</span>
      </div>

      <div style={{ display:"flex", gap:"11px", flexWrap:"wrap", justifyContent:"center", zIndex:1 }}>
        {[{label:"Bibliothèque 📜", s:"skills", solid:true},{label:"Mes projets ⚔️", s:"projets", solid:false}].map(({label,s,solid}) => (
          <button key={s} onClick={() => setSection(s)}
            style={{ padding:"11px 24px", borderRadius:"30px", border:`2px solid ${t.color}`, background:solid?t.color:"transparent", color:solid?"#000":t.color, fontFamily:"'Noto Serif JP',serif", fontSize:"0.87rem", fontWeight:solid?700:400, cursor:"pointer", letterSpacing:"0.08em", transition:"all 0.3s", boxShadow:solid?`0 0 22px ${t.glow}`:"none" }}
            onMouseEnter={e=>{e.target.style.transform="translateY(-3px) scale(1.03)";e.target.style.boxShadow=`0 10px 28px ${t.glow}`;}}
            onMouseLeave={e=>{e.target.style.transform="translateY(0) scale(1)";e.target.style.boxShadow=solid?`0 0 22px ${t.glow}`:"none";}}>
            {label}
          </button>
        ))}
      </div>

      <div style={{ display:"flex", gap:"7px", marginTop:"42px", flexWrap:"wrap", justifyContent:"center", zIndex:1 }}>
        {Object.entries(THEMES).map(([key,th]) => (
          <span key={key} style={{ padding:"3px 11px", borderRadius:"20px", border:`1px solid ${th.color}28`, color:th.color, fontSize:"0.68rem", fontFamily:"'Noto Serif JP',serif", letterSpacing:"0.1em", background:`${th.color}10` }}>
            {th.name} {th.particles[0]}
          </span>
        ))}
      </div>
    </div>
  );
}
