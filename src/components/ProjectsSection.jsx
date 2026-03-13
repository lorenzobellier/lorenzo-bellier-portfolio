import { useState } from "react";
import { THEMES } from "../data/themes";
import { PROJECTS } from "../data/projects";
import { SectionTitle } from "./UI";

function AlbumCard({ p, isActive, onClick }) {
  const [hov, setHov] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleClick = () => {
    setSpin(true);
    setTimeout(() => setSpin(false), 600);
    onClick();
  };

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0", cursor:"pointer" }}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={handleClick}>
      <div style={{ width:"180px", height:"180px", position:"relative", transform:hov?"translateY(-10px) rotate(-2deg)":spin?"rotate(8deg)":"translateY(0) rotate(0deg)", transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)", filter:hov?`drop-shadow(0 18px 30px ${p.coverAccent}60)`:`drop-shadow(0 6px 14px ${p.coverAccent}20)` }}>
        <div style={{ width:"180px", height:"180px", background:p.coverBg, border:`2px solid ${p.coverAccent}50`, borderRadius:"4px", position:"relative", overflow:"hidden" }}>
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg,transparent 30%,${p.coverAccent}15 50%,transparent 70%)`, animation:hov?"shimmer 1.2s ease-in-out infinite":"none", zIndex:2, pointerEvents:"none" }} />
          <div style={{ position:"absolute", inset:0, background:`repeating-linear-gradient(45deg,transparent,transparent 18px,${p.coverAccent}06 18px,${p.coverAccent}06 20px)`, zIndex:1 }} />
          <div style={{ position:"absolute", fontSize:"7rem", fontFamily:"'Noto Serif JP',serif", fontWeight:900, color:`${p.coverAccent}12`, bottom:"-10px", right:"-10px", lineHeight:1, userSelect:"none", zIndex:1 }}>{p.coverKanji}</div>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-58%)", fontSize:"3.5rem", filter:`drop-shadow(0 0 14px ${p.coverAccent})`, zIndex:3 }}>{p.coverSymbol}</div>
          <div style={{ position:"absolute", bottom:"10px", left:0, right:0, textAlign:"center", zIndex:3 }}>
            <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1rem", fontWeight:900, color:p.coverAccent, letterSpacing:"0.15em", textShadow:`0 0 10px ${p.coverAccent}` }}>{p.albumTitle}</div>
          </div>
          <div style={{ position:"absolute", top:0, left:0, right:0, height:"24px", background:`linear-gradient(90deg,${p.coverAccent}30,${p.coverAccent}60,${p.coverAccent}30)`, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 8px", zIndex:3 }}>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.55rem", color:p.coverAccent, letterSpacing:"0.2em", fontWeight:700 }}>{p.groupName}</span>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.52rem", color:`${p.coverAccent}90` }}>{p.albumSub}</span>
          </div>
        </div>
        <div style={{ position:"absolute", bottom:"-8px", left:"50%", width:"140px", height:"140px", borderRadius:"50%", background:`conic-gradient(${p.coverAccent}20,${p.coverAccent}08,${p.coverAccent}30,${p.coverAccent}06,${p.coverAccent}20)`, border:`1px solid ${p.coverAccent}40`, zIndex:-1, transition:"transform 0.3s", transform:hov?"translateX(-50%) translateY(6px)":"translateX(-50%)" }}>
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"20px", height:"20px", borderRadius:"50%", background:"#000", border:`1px solid ${p.coverAccent}60` }} />
        </div>
        {hov && (
          <div style={{ position:"absolute", top:"-8px", right:"-8px", width:"32px", height:"32px", borderRadius:"50%", background:`conic-gradient(${p.coverAccent},#fff,${p.coverAccent},#fff,${p.coverAccent})`, display:"flex", alignItems:"center", justifyContent:"center", zIndex:4, animation:"spinSlow 2s linear infinite" }}>
            <div style={{ width:"22px", height:"22px", borderRadius:"50%", background:"#111", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.6rem" }}>✦</div>
          </div>
        )}
      </div>
      <div style={{ width:"180px", height:"22px", background:"linear-gradient(90deg,#111,#1a1a1a,#111)", borderLeft:`2px solid ${p.coverAccent}40`, borderRight:`2px solid ${p.coverAccent}40`, borderBottom:`1px solid ${p.coverAccent}30`, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 8px" }}>
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.55rem", color:`${p.coverAccent}70` }}>{p.year}</span>
        <div style={{ display:"flex", gap:"1px" }}>
          {[3,1,4,1,5,9,2,6,5,3,5,8].map((w,i) => <div key={i} style={{ width:`${w*0.7}px`, height:"10px", background:`${p.coverAccent}${40+i*3}` }} />)}
        </div>
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.5rem", color:`${p.coverAccent}50` }}>KR</span>
      </div>
    </div>
  );
}

export default function ProjectsSection({ theme }) {
  const t = THEMES[theme];
  const [activeAlbum, setActiveAlbum] = useState(null);
  const active = activeAlbum !== null ? PROJECTS[activeAlbum] : null;

  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1100px", margin:"0 auto" }}>
      <SectionTitle text="Discographie · 디스코그래피" kanji="楽" theme={theme} />
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:`${t.color}65`, marginTop:"10px", marginBottom:"50px", letterSpacing:"0.1em" }}>
        ✦ Cliquez sur un album pour voir les détails · {PROJECTS.length} projets disponibles
      </div>

      <div style={{ background:"linear-gradient(180deg,#0d0600,#160a00)", border:`1px solid ${t.color}15`, borderRadius:"12px", padding:"40px 32px 28px", position:"relative", boxShadow:"inset 0 -6px 20px rgba(0,0,0,0.6)" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"10px", background:"linear-gradient(90deg,#2d1600,#5a3000,#4a2800,#5a3000,#2d1600)", borderRadius:"12px 12px 0 0" }} />
        <div style={{ position:"absolute", top:"10px", left:0, right:0, height:"20px", background:`linear-gradient(90deg,transparent,${t.color}10,transparent)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${t.color}50`, letterSpacing:"0.4em", textTransform:"uppercase" }}>L.Bellier · GitHub Records · 2024</span>
        </div>
        <div style={{ display:"flex", gap:"24px", flexWrap:"wrap", justifyContent:"center", paddingTop:"16px", paddingBottom:"16px" }}>
          {PROJECTS.map((p, i) => (
            <AlbumCard key={i} p={p} isActive={activeAlbum===i} onClick={() => setActiveAlbum(activeAlbum===i?null:i)} />
          ))}
        </div>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"12px", background:"linear-gradient(90deg,#2d1600,#5a3000,#4a2800,#5a3000,#2d1600)", borderRadius:"0 0 12px 12px" }} />
      </div>

      <div style={{ overflow:"hidden", maxHeight:active?"500px":"0px", transition:"max-height 0.5s cubic-bezier(0.4,0,0.2,1)", marginTop:"4px" }}>
        {active && (
          <div style={{ padding:"28px 32px", background:`linear-gradient(135deg,${active.coverBg})`, border:`1px solid ${active.coverAccent}35`, borderRadius:"0 0 12px 12px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"28px", animation:"fadeIn 0.35s ease" }}>
            <div>
              <div style={{ display:"flex", alignItems:"baseline", gap:"12px", marginBottom:"6px" }}>
                <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1.5rem", fontWeight:900, color:active.coverAccent }}>{active.albumTitle}</span>
                <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.75rem", color:`${active.coverAccent}70` }}>{active.albumSub} · {active.year}</span>
              </div>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.78rem", color:`${active.coverAccent}80`, letterSpacing:"0.15em", marginBottom:"14px", textTransform:"uppercase" }}>🐙 {active.name}</div>
              <p style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.86rem", color:"#ffffffaa", lineHeight:1.8, marginBottom:"16px" }}>{active.desc}</p>
              <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginBottom:"16px" }}>
                {active.tags.map(tag => <span key={tag} style={{ padding:"3px 10px", borderRadius:"12px", background:`${active.coverAccent}18`, border:`1px solid ${active.coverAccent}40`, color:active.coverAccent, fontSize:"0.71rem", fontFamily:"'Noto Serif JP',serif" }}>{tag}</span>)}
              </div>
              <a href={active.link} target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-flex", alignItems:"center", gap:"6px", padding:"9px 18px", borderRadius:"20px", border:`1px solid ${active.coverAccent}`, color:active.coverAccent, fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", textDecoration:"none", background:`${active.coverAccent}12` }}>
                🐙 Voir sur GitHub →
              </a>
            </div>
            <div>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.75rem", color:`${active.coverAccent}70`, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:"14px" }}>🎵 Tracklist</div>
              <div style={{ display:"flex", flexDirection:"column", gap:"6px" }}>
                {active.tracks.map((track, ti) => (
                  <div key={ti} style={{ display:"flex", alignItems:"center", gap:"12px", padding:"8px 12px", borderRadius:"6px", background:`${active.coverAccent}06`, border:`1px solid ${active.coverAccent}18`, transition:"all 0.2s" }}
                    onMouseEnter={e=>{e.currentTarget.style.background=`${active.coverAccent}14`;e.currentTarget.style.border=`1px solid ${active.coverAccent}35`;}}
                    onMouseLeave={e=>{e.currentTarget.style.background=`${active.coverAccent}06`;e.currentTarget.style.border=`1px solid ${active.coverAccent}18`;}}>
                    <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.68rem", color:`${active.coverAccent}50`, minWidth:"16px" }}>{String(ti+1).padStart(2,'0')}</span>
                    <div style={{ flex:1, height:"1px", background:`${active.coverAccent}20` }} />
                    <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:"#ffffffaa" }}>{track}</span>
                    <span style={{ fontSize:"0.7rem" }}>▶</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
