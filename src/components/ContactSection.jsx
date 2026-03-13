import { useState } from "react";
import { THEMES } from "../data/themes";
import { SectionTitle } from "./UI";

function DramaCard({ ep, onClick, isSelected }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position:"relative", cursor:"pointer", borderRadius:"8px", overflow:"hidden", border:`2px solid ${isSelected||hov?ep.color:ep.color+"30"}`, boxShadow:hov||isSelected?`0 0 28px ${ep.color}55,0 8px 32px rgba(0,0,0,0.6)`:"0 4px 16px rgba(0,0,0,0.4)", transform:hov?"translateY(-8px) scale(1.03)":isSelected?"scale(1.02)":"scale(1)", transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)", background:ep.cardBg, minHeight:"280px", display:"flex", flexDirection:"column" }}>
      <div style={{ position:"relative", height:"160px", overflow:"hidden", background:ep.thumbBg, flexShrink:0 }}>
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at center,transparent 40%,rgba(0,0,0,0.7) 100%)", zIndex:2, pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"10px", left:"10px", zIndex:4, background:"rgba(0,0,0,0.75)", border:`1px solid ${ep.color}60`, borderRadius:"4px", padding:"2px 8px" }}>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.6rem", color:ep.color, letterSpacing:"0.15em", fontWeight:700 }}>EP.{ep.ep}</span>
        </div>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:hov?"translate(-50%,-50%) scale(1.15)":"translate(-50%,-50%)", fontSize:"3.8rem", filter:`drop-shadow(0 0 16px ${ep.color})`, zIndex:3, transition:"transform 0.3s" }}>{ep.icon}</div>
        <div style={{ position:"absolute", bottom:"8px", right:"8px", zIndex:4, background:`${ep.color}25`, border:`1px solid ${ep.color}50`, borderRadius:"3px", padding:"2px 7px" }}>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.52rem", color:`${ep.color}cc` }}>{ep.network}</span>
        </div>
        {hov && (
          <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", zIndex:5, background:"rgba(0,0,0,0.25)" }}>
            <div style={{ width:"46px", height:"46px", borderRadius:"50%", border:`2px solid ${ep.color}`, background:`${ep.color}25`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.1rem", backdropFilter:"blur(4px)" }}>▶</div>
          </div>
        )}
      </div>
      <div style={{ padding:"14px", flex:1, display:"flex", flexDirection:"column", gap:"6px" }}>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.65rem", color:`${ep.color}70`, letterSpacing:"0.18em", textTransform:"uppercase" }}>{ep.genre}</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1rem", fontWeight:900, color:"#fff", lineHeight:1.2 }}>{ep.title}</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", color:`${ep.color}90` }}>{ep.titleKR}</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.76rem", color:"#ffffff60", lineHeight:1.6, flex:1 }}>{ep.tagline}</div>
        <div style={{ display:"flex", alignItems:"center", gap:"6px", marginTop:"4px" }}>
          <div style={{ display:"flex", gap:"2px" }}>
            {[...Array(5)].map((_,i) => <span key={i} style={{ fontSize:"0.65rem", color:i<ep.stars?ep.color:`${ep.color}25` }}>★</span>)}
          </div>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${ep.color}70` }}>{ep.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default function ContactSection({ theme }) {
  const t = THEMES[theme];
  const [selectedEp, setSelectedEp] = useState(null);

  const episodes = [
    { ep:"01", icon:"🐙", title:"GitHub Records", titleKR:"깃허브 레코드", genre:"Tech Romance · Code", tagline:"Là où le code prend vie. 5 projets, des dizaines de commits, une histoire en construction.", network:"github.com", color:"#B04AFF", stars:4, rating:"9.2", thumbBg:"linear-gradient(135deg,#0d0020,#1e0040,#0a0015)", cardBg:"linear-gradient(180deg,#0d0020,#080010)", action:"🔗 github.com/LorenzoBellier", link:"https://github.com/LorenzoBellier" },
    { ep:"02", icon:"💼", title:"LinkedIn Story", titleKR:"링크드인 스토리", genre:"Career Drama · Network", tagline:"Le profil qui raconte le parcours. Des connexions qui construisent l'avenir.", network:"linkedin.com", color:"#00E5FF", stars:3, rating:"8.5", thumbBg:"linear-gradient(135deg,#000d1a,#001428,#000810)", cardBg:"linear-gradient(180deg,#000d1a,#00060f)", action:"🔗 Lorenzo Bellier", link:"https://linkedin.com" },
    { ep:"03", icon:"📧", title:"Message Direct", titleKR:"직접 메시지", genre:"Slice of Life · Contact", tagline:"Un mail, une opportunité. Recruteurs, collaborateurs — la porte est ouverte.", network:"email", color:"#FF6B9D", stars:5, rating:"10.0", thumbBg:"linear-gradient(135deg,#1a0010,#2d001f,#0f000b)", cardBg:"linear-gradient(180deg,#1a0010,#0f000b)", action:"✉️ contact@lorenzobellier.fr", link:"mailto:contact@lorenzobellier.fr" },
    { ep:"04", icon:"🗼", title:"Paris → Tokyo", titleKR:"파리에서 도쿄까지", genre:"Adventure · Dream", tagline:"Paris aujourd'hui, Tokyo demain. Le voyage vers l'Asie a commencé.", network:"FR 🇫🇷 → JP 🇯🇵", color:"#FFD700", stars:5, rating:"∞", thumbBg:"linear-gradient(135deg,#1a0800,#2d1000,#0f0500)", cardBg:"linear-gradient(180deg,#1a0800,#0f0500)", action:"📍 Paris, Île-de-France", link:"#" },
  ];

  const active = selectedEp !== null ? episodes[selectedEp] : null;

  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1060px", margin:"0 auto" }}>
      <SectionTitle text="Contact · 드라마" kanji="縁" theme={theme} />

      <div style={{ display:"flex", alignItems:"center", gap:"14px", marginTop:"18px", marginBottom:"44px", padding:"12px 20px", background:"rgba(0,0,0,0.4)", borderRadius:"8px", border:`1px solid ${t.color}20`, backdropFilter:"blur(10px)" }}>
        <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#ff3333", animation:"blink 1.5s ease-in-out infinite" }} />
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.72rem", color:`${t.color}80`, letterSpacing:"0.2em", textTransform:"uppercase" }}>EN DIRECT · Lorenzo Bellier · Cherche alternance · Paris</span>
        <div style={{ marginLeft:"auto", display:"flex", gap:"10px" }}>
          {["🎬","⭐","🔔"].map((e,i) => <span key={i} style={{ fontSize:"0.9rem", opacity:0.6 }}>{e}</span>)}
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"18px" }}>
        {episodes.map((ep, i) => (
          <DramaCard key={i} ep={ep} isSelected={selectedEp===i} onClick={() => setSelectedEp(selectedEp===i?null:i)} />
        ))}
      </div>

      <div style={{ overflow:"hidden", maxHeight:active?"400px":"0px", transition:"max-height 0.5s cubic-bezier(0.4,0,0.2,1)", marginTop:"4px" }}>
        {active && (
          <div style={{ padding:"28px 32px", background:`linear-gradient(135deg,${active.thumbBg})`, border:`1px solid ${active.color}35`, borderRadius:"0 0 12px 12px", animation:"fadeIn 0.35s ease" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:"24px", alignItems:"start" }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                  <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${active.color}60`, border:`1px solid ${active.color}30`, padding:"2px 9px", borderRadius:"3px", letterSpacing:"0.15em" }}>ÉPISODE {active.ep}</span>
                  <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${active.color}60` }}>{active.genre}</span>
                </div>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1.3rem", fontWeight:900, color:active.color, marginBottom:"4px", textShadow:`0 0 14px ${active.color}50` }}>{active.title}</div>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.75rem", color:`${active.color}70`, marginBottom:"14px" }}>{active.titleKR}</div>
                <p style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.85rem", color:"#ffffffaa", lineHeight:1.8, marginBottom:"16px" }}>{active.tagline}</p>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.82rem", color:active.color, padding:"8px 14px", background:`${active.color}10`, border:`1px solid ${active.color}30`, borderRadius:"6px", display:"inline-block" }}>{active.action}</div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", gap:"10px", minWidth:"160px" }}>
                <a href={active.link} target="_blank" rel="noopener noreferrer"
                  style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px", padding:"12px 20px", borderRadius:"8px", background:active.color, color:"#000", fontFamily:"'Noto Serif JP',serif", fontSize:"0.82rem", fontWeight:700, textDecoration:"none", letterSpacing:"0.08em", boxShadow:`0 0 20px ${active.color}50`, transition:"all 0.3s" }}
                  onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";}}
                  onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
                  ▶ Ouvrir
                </a>
                <button onClick={() => setSelectedEp(null)}
                  style={{ padding:"10px 20px", borderRadius:"8px", background:"transparent", border:`1px solid ${active.color}40`, color:`${active.color}80`, fontFamily:"'Noto Serif JP',serif", fontSize:"0.78rem", cursor:"pointer", transition:"all 0.3s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background=`${active.color}12`;}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}>
                  ✕ Fermer
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop:"40px", textAlign:"center", padding:"24px", borderTop:`1px solid ${t.color}15` }}>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", color:`${t.color}40`, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:"10px" }}>— Générique de fin —</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1.1rem", color:`${t.color}30`, letterSpacing:"0.5em" }}>日 韓 中 漫</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.65rem", color:`${t.color}25`, marginTop:"8px", letterSpacing:"0.15em" }}>Lorenzo Bellier · Paris {new Date().getFullYear()} · All rights reserved</div>
      </div>
    </div>
  );
}
