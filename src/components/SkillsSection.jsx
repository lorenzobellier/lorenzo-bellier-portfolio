import { useState, useEffect } from "react";
import { THEMES } from "../data/themes";
import { SHELVES } from "../data/skills";
import { SectionTitle } from "./UI";

function ScrollModal({ scroll, onClose }) {
  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div style={{ position:"fixed", inset:0, zIndex:200, display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }} onClick={onClose}>
      <div style={{ position:"absolute", inset:0, background:"rgba(0,0,0,0.88)", backdropFilter:"blur(14px)" }} />
      <div onClick={e => e.stopPropagation()}
        style={{ position:"relative", maxWidth:"460px", width:"100%", background:"linear-gradient(165deg,#1c0e00,#2e1800,#1c0e00)", border:`2px solid ${scroll.color}55`, borderRadius:"4px", boxShadow:`0 0 60px ${scroll.color}45`, animation:"scrollUnroll 0.4s cubic-bezier(0.34,1.56,0.64,1)", overflow:"hidden" }}>
        <div style={{ height:"16px", background:"linear-gradient(90deg,#3d2000,#6b3800,#4d2800,#6b3800,#3d2000)", borderBottom:`1px solid ${scroll.color}35`, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 12px" }}>
          <div style={{ display:"flex", gap:"4px" }}>{[...Array(5)].map((_,i) => <div key={i} style={{ width:"7px", height:"7px", borderRadius:"50%", background:`${scroll.color}70` }} />)}</div>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.58rem", color:`${scroll.color}55`, letterSpacing:"0.2em" }}>巻物</span>
          <div style={{ display:"flex", gap:"4px" }}>{[...Array(5)].map((_,i) => <div key={i} style={{ width:"7px", height:"7px", borderRadius:"50%", background:`${scroll.color}70` }} />)}</div>
        </div>
        <div style={{ padding:"26px 30px 22px", position:"relative" }}>
          {[...Array(9)].map((_,i) => <div key={i} style={{ position:"absolute", left:0, right:0, top:`${10+i*10}%`, height:"1px", background:`linear-gradient(90deg,transparent,${scroll.color}07,transparent)`, pointerEvents:"none" }} />)}
          <div style={{ position:"absolute", right:"14px", top:"50%", transform:"translateY(-50%)", fontSize:"5.5rem", fontFamily:"'Noto Serif JP',serif", color:`${scroll.color}06`, fontWeight:900, userSelect:"none", pointerEvents:"none" }}>技</div>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"16px", position:"relative", zIndex:1 }}>
            <span style={{ fontSize:"2rem", filter:`drop-shadow(0 0 10px ${scroll.color})` }}>{scroll.icon}</span>
            <div>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1.25rem", fontWeight:900, color:scroll.color }}>{scroll.name}</div>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", color:`${scroll.color}65`, letterSpacing:"0.18em" }}>Rang : {scroll.levelName}</div>
            </div>
          </div>
          <div style={{ marginBottom:"16px", position:"relative", zIndex:1 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:"5px" }}>
              <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.72rem", color:"#c8a87055" }}>Maîtrise</span>
              <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.72rem", color:scroll.color }}>{scroll.level}%</span>
            </div>
            <div style={{ height:"5px", background:"rgba(255,255,255,0.07)", borderRadius:"3px", overflow:"hidden" }}>
              <div style={{ height:"100%", width:`${scroll.level}%`, background:`linear-gradient(90deg,${scroll.color}70,${scroll.color})`, borderRadius:"3px", boxShadow:`0 0 8px ${scroll.color}` }} />
            </div>
          </div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.85rem", color:"#c8a870bb", lineHeight:1.85, marginBottom:"16px", position:"relative", zIndex:1 }}>{scroll.desc}</div>
          <div style={{ display:"flex", gap:"6px", flexWrap:"wrap", marginBottom:"20px", position:"relative", zIndex:1 }}>
            {scroll.tags.map(tag => <span key={tag} style={{ padding:"3px 9px", borderRadius:"3px", background:`${scroll.color}15`, border:`1px solid ${scroll.color}38`, color:scroll.color, fontSize:"0.7rem", fontFamily:"'Noto Serif JP',serif" }}>{tag}</span>)}
          </div>
          <button onClick={onClose} style={{ width:"100%", padding:"9px", background:"transparent", border:`1px solid ${scroll.color}35`, color:`${scroll.color}80`, fontFamily:"'Noto Serif JP',serif", fontSize:"0.77rem", borderRadius:"2px", cursor:"pointer", letterSpacing:"0.14em", transition:"all 0.3s" }}
            onMouseEnter={e=>{e.target.style.background=`${scroll.color}12`;e.target.style.color=scroll.color;}}
            onMouseLeave={e=>{e.target.style.background="transparent";e.target.style.color=`${scroll.color}80`;}}>
            ✕ Refermer le parchemin
          </button>
        </div>
        <div style={{ height:"14px", background:"linear-gradient(90deg,#3d2000,#6b3800,#4d2800,#6b3800,#3d2000)", borderTop:`1px solid ${scroll.color}35`, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.58rem", color:`${scroll.color}45`, letterSpacing:"0.3em" }}>• • • • •</span>
        </div>
      </div>
    </div>
  );
}

function ScrollItem({ scroll, onOpen }) {
  const [hov, setHov] = useState(false);
  const dots = Math.ceil(scroll.level / 20);
  return (
    <div onClick={onOpen} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position:"relative", width:"82px", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:"5px", transform:hov?"translateY(-9px) scale(1.06)":"translateY(0) scale(1)", transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)" }}>
      <div style={{ width:"62px", height:"9px", background:`linear-gradient(90deg,${scroll.color}35,${scroll.color}70,${scroll.color}35)`, borderRadius:"3px 3px 1px 1px", border:`1px solid ${scroll.color}55`, boxShadow:hov?`0 0 10px ${scroll.color}`:"none", transition:"all 0.3s" }} />
      <div style={{ width:"62px", height:"75px", background:hov?`linear-gradient(180deg,${scroll.color}15,${scroll.color}25,${scroll.color}15)`:"linear-gradient(180deg,#2d1600,#3a1c00,#2d1600)", border:`1px solid ${scroll.color}${hov?"55":"28"}`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"6px", position:"relative", overflow:"hidden", boxShadow:hov?`0 0 20px ${scroll.color}40`:"inset 0 2px 8px rgba(0,0,0,0.4)", transition:"all 0.3s" }}>
        {[...Array(5)].map((_,i) => <div key={i} style={{ position:"absolute", left:"6px", right:"6px", top:`${12+i*16}%`, height:"1px", background:`${scroll.color}12`, pointerEvents:"none" }} />)}
        <span style={{ fontSize:"1.2rem", filter:hov?`drop-shadow(0 0 8px ${scroll.color})`:"none", transition:"all 0.3s", zIndex:1 }}>{scroll.icon}</span>
        <div style={{ display:"flex", gap:"3px", zIndex:1 }}>
          {[...Array(5)].map((_,i) => <div key={i} style={{ width:"5px", height:"5px", borderRadius:"50%", background:i<dots?scroll.color:`${scroll.color}22`, transition:"all 0.3s" }} />)}
        </div>
      </div>
      <div style={{ width:"62px", height:"9px", background:`linear-gradient(90deg,${scroll.color}35,${scroll.color}70,${scroll.color}35)`, borderRadius:"1px 1px 3px 3px", border:`1px solid ${scroll.color}55`, boxShadow:hov?`0 0 10px ${scroll.color}`:"none", transition:"all 0.3s" }} />
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.65rem", color:hov?scroll.color:"#c8a87065", textAlign:"center", lineHeight:1.3, transition:"color 0.3s", maxWidth:"76px" }}>{scroll.name}</div>
      {hov && <div style={{ position:"absolute", bottom:"-6px", left:"50%", transform:"translateX(-50%)", width:"36px", height:"5px", background:scroll.color, borderRadius:"50%", filter:"blur(5px)", opacity:0.45 }} />}
    </div>
  );
}

export default function SkillsSection({ theme }) {
  const t = THEMES[theme];
  const [openScroll, setOpenScroll] = useState(null);
  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1080px", margin:"0 auto" }}>
      <SectionTitle text="Bibliothèque · 図書館" kanji="書" theme={theme} />
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:`${t.color}65`, marginTop:"10px", marginBottom:"44px", letterSpacing:"0.1em" }}>
        ✦ Cliquez sur un parchemin pour l'ouvrir · Rangés par étage et discipline
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:"44px" }}>
        {SHELVES.map((shelf, si) => (
          <div key={si}>
            <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"14px" }}>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1.3rem", fontWeight:900, color:`${shelf.color}28` }}>{shelf.floorJP}</div>
              <div style={{ flex:1, height:"1px", background:`linear-gradient(90deg,${shelf.color}38,transparent)` }} />
              <span style={{ fontSize:"1.1rem" }}>{shelf.icon}</span>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.9rem", fontWeight:700, color:shelf.color, letterSpacing:"0.1em" }}>{shelf.floor} — {shelf.category}</div>
              <div style={{ flex:1, height:"1px", background:`linear-gradient(270deg,${shelf.color}38,transparent)` }} />
            </div>
            <div style={{ position:"relative", background:"linear-gradient(180deg,#1a0d00,#231200)", border:`1px solid ${shelf.color}18`, borderRadius:"7px", padding:"18px 22px 22px", boxShadow:"inset 0 -4px 12px rgba(0,0,0,0.5)" }}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:"7px", background:"linear-gradient(90deg,#3d1f00,#6b3800,#4d2500,#6b3800,#3d1f00)", borderRadius:"7px 7px 0 0" }} />
              <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"9px", background:"linear-gradient(90deg,#2d1600,#5a3000,#3d2000,#5a3000,#2d1600)", borderRadius:"0 0 7px 7px" }} />
              <div style={{ display:"flex", gap:"10px", flexWrap:"wrap", padding:"4px 0" }}>
                {shelf.scrolls.map(scroll => (
                  <ScrollItem key={scroll.id} scroll={scroll} onOpen={() => setOpenScroll(scroll)} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {openScroll && <ScrollModal scroll={openScroll} onClose={() => setOpenScroll(null)} />}
    </div>
  );
}
