import { useState } from "react";
import { THEMES } from "../data/themes";
import { DIPLOMAS } from "../data/diplomas";
import { SectionTitle } from "./UI";

function MangaCover({ d, isActive, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display:"flex", flexDirection:"row", cursor:"pointer", transform:hov?"translateY(-12px) rotate(-1.5deg)":"translateY(0) rotate(0deg)", transition:"transform 0.35s cubic-bezier(0.34,1.56,0.64,1)", filter:hov?`drop-shadow(0 20px 28px ${d.stripColor}55)`:isActive?`drop-shadow(0 12px 18px ${d.stripColor}40)`:`drop-shadow(2px 4px 12px rgba(0,0,0,0.6))` }}>
      {/* Spine */}
      <div style={{ width:"28px", minHeight:"200px", background:d.spineColor, borderRadius:"2px 0 0 2px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-between", padding:"8px 0", borderLeft:`1px solid ${d.stripColor}60`, borderTop:`1px solid ${d.stripColor}40`, borderBottom:`1px solid ${d.stripColor}40`, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", left:"4px", top:0, bottom:0, width:"3px", background:"rgba(255,255,255,0.08)", borderRadius:"2px" }} />
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.55rem", color:"rgba(255,255,255,0.9)", fontWeight:900, writingMode:"vertical-rl", letterSpacing:"0.15em", textShadow:`0 0 6px ${d.stripColor}` }}>{d.mangaTitle}</span>
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.5rem", color:"rgba(255,255,255,0.55)", writingMode:"vertical-rl", letterSpacing:"0.1em" }}>{d.mangaVol}</span>
      </div>
      {/* Cover */}
      <div style={{ width:"130px", minHeight:"200px", background:d.coverTop, borderRadius:"0 3px 3px 0", position:"relative", overflow:"hidden", border:`1px solid ${d.stripColor}35`, borderLeft:"none" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`radial-gradient(circle,${d.stripColor}18 1px,transparent 1px)`, backgroundSize:"8px 8px", zIndex:1, pointerEvents:"none" }} />
        <div style={{ position:"absolute", inset:0, background:`conic-gradient(from 0deg,transparent 85%,${d.stripColor}08 87%,transparent 89%)`, zIndex:1, pointerEvents:"none", animation:hov?"spinSlow 8s linear infinite":"none" }} />
        <div style={{ position:"absolute", bottom:"-14px", right:"-8px", fontFamily:"'Noto Serif JP',serif", fontSize:"5.5rem", fontWeight:900, color:`${d.stripColor}12`, lineHeight:1, userSelect:"none", pointerEvents:"none", zIndex:2 }}>{d.coverKanji}</div>
        <div style={{ position:"absolute", top:"38%", left:"50%", transform:"translate(-50%,-50%)", zIndex:3 }}>
          {[...Array(8)].map((_,i) => <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:"45px", height:"1.5px", background:`linear-gradient(90deg,${d.stripColor}60,transparent)`, transformOrigin:"left center", transform:`rotate(${i*45}deg) translateY(-50%)`, zIndex:2 }} />)}
          <div style={{ position:"relative", zIndex:3, fontSize:"2.6rem", filter:`drop-shadow(0 0 12px ${d.stripColor})`, textAlign:"center" }}>{d.coverSymbolBig}</div>
        </div>
        <div style={{ position:"absolute", top:0, left:0, right:0, padding:"6px 7px", background:"linear-gradient(180deg,rgba(0,0,0,0.85),transparent)", zIndex:4 }}>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.65rem", fontWeight:900, color:d.stripColor, letterSpacing:"0.1em", textShadow:`0 0 8px ${d.stripColor}` }}>{d.mangaTitle}</div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.5rem", color:`${d.stripColor}80` }}>{d.mangaSubtitle}</div>
        </div>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"7px 7px 5px", background:"linear-gradient(0deg,rgba(0,0,0,0.9),transparent)", zIndex:4 }}>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.55rem", color:"rgba(255,255,255,0.6)", marginBottom:"2px" }}>{d.mangaGenre}</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.52rem", color:`${d.stripColor}80` }}>{d.mangaVol}</span>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.5rem", fontWeight:700, color:d.status==="current"?"#FFD700":d.status==="partial"?"#FF6B9D":"#00FFB3", border:`1px solid ${d.status==="current"?"#FFD70060":d.status==="partial"?"#FF6B9D60":"#00FFB360"}`, padding:"1px 5px", borderRadius:"3px", background:d.status==="current"?"#FFD70015":d.status==="partial"?"#FF6B9D15":"#00FFB315" }}>
              {d.mangaStatus}
            </span>
          </div>
        </div>
        {hov && <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg,${d.stripColor}08,transparent,${d.stripColor}06)`, zIndex:5, pointerEvents:"none" }} />}
      </div>
    </div>
  );
}

export default function DiplomasSection({ theme }) {
  const t = THEMES[theme];
  const [openManga, setOpenManga] = useState(null);
  const active = openManga !== null ? DIPLOMAS[openManga] : null;

  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1000px", margin:"0 auto" }}>
      <SectionTitle text="Bibliothèque Manga · 学歴" kanji="学" theme={theme} />
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:`${t.color}65`, marginTop:"10px", marginBottom:"50px", letterSpacing:"0.1em" }}>
        ✦ Cliquez sur un tome pour lire le synopsis · {DIPLOMAS.length} tomes dans la collection
      </div>

      <div style={{ position:"relative", background:"linear-gradient(180deg,#100800,#1a0e00)", border:`1px solid ${t.color}18`, borderRadius:"10px", padding:"32px 36px 28px", boxShadow:"inset 0 -8px 24px rgba(0,0,0,0.7)" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"12px", background:"linear-gradient(90deg,#2d1600,#6b3800,#4d2800,#6b3800,#2d1600)", borderRadius:"10px 10px 0 0", borderBottom:"2px solid rgba(200,150,60,0.2)" }} />
        {[20,40,60,80].map(pct => <div key={pct} style={{ position:"absolute", top:"12px", bottom:"12px", left:`${pct}%`, width:"1px", background:"rgba(100,50,0,0.15)" }} />)}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"14px", background:"linear-gradient(90deg,#2d1600,#6b3800,#4d2800,#6b3800,#2d1600)", borderRadius:"0 0 10px 10px", borderTop:"3px solid rgba(200,150,60,0.25)" }} />
        <div style={{ display:"flex", gap:"8px", alignItems:"flex-end", justifyContent:"center", paddingTop:"8px", paddingBottom:"8px", flexWrap:"wrap" }}>
          {DIPLOMAS.map((d,i) => (
            <MangaCover key={i} d={d} isActive={openManga===i} onClick={() => setOpenManga(openManga===i?null:i)} />
          ))}
          <div style={{ width:"18px", height:"160px", background:"linear-gradient(180deg,#4a3000,#2a1800)", borderRadius:"2px", border:"1px solid rgba(200,150,60,0.25)", marginLeft:"4px", alignSelf:"flex-end" }} />
        </div>
      </div>

      <div style={{ overflow:"hidden", maxHeight:active?"600px":"0px", transition:"max-height 0.55s cubic-bezier(0.4,0,0.2,1)", marginTop:"2px" }}>
        {active && (
          <div style={{ background:`linear-gradient(135deg,${active.coverTop})`, border:`1px solid ${active.stripColor}35`, borderRadius:"0 0 10px 10px", padding:"28px 32px", animation:"fadeIn 0.35s ease" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"32px" }}>
              <div style={{ borderRight:`1px solid ${active.stripColor}18`, paddingRight:"28px" }}>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${active.stripColor}55`, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:"10px" }}>📖 {active.mangaGenre} · {active.mangaChapters}</div>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1.4rem", fontWeight:900, color:active.stripColor, marginBottom:"4px", textShadow:`0 0 15px ${active.stripColor}50` }}>{active.mangaTitle}</div>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.75rem", color:`${active.stripColor}70`, letterSpacing:"0.15em", marginBottom:"16px" }}>{active.mangaSubtitle}</div>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.82rem", color:"#ffffffaa", lineHeight:1.9, marginBottom:"16px" }}>{active.desc}</div>
                <div style={{ padding:"10px 14px", borderRadius:"6px", background:`${active.stripColor}08`, border:`1px solid ${active.stripColor}25`, fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:`${active.stripColor}cc`, fontStyle:"italic", lineHeight:1.8 }}>{active.synopsis}</div>
              </div>
              <div>
                <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${active.stripColor}55`, letterSpacing:"0.3em", textTransform:"uppercase", marginBottom:"12px" }}>📋 Fiche technique</div>
                {[{ label:"Titre complet", val:active.full }, { label:"École", val:active.school }, { label:"Volume", val:active.mangaVol }, { label:"Statut", val:active.mangaStatus }].map((row,ri) => (
                  <div key={ri} style={{ display:"flex", gap:"10px", marginBottom:"10px", padding:"8px 12px", borderRadius:"6px", background:`${active.stripColor}06`, border:`1px solid ${active.stripColor}18` }}>
                    <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", color:`${active.stripColor}70`, minWidth:"90px" }}>{row.label}</span>
                    <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.78rem", color:"#ffffffaa", lineHeight:1.5 }}>{row.val}</span>
                  </div>
                ))}
                {active.status==="partial" && <div style={{ marginTop:"12px", padding:"10px 14px", borderRadius:"6px", background:"rgba(255,107,0,0.07)", border:"1px solid rgba(255,107,0,0.25)", color:"#FFB347", fontSize:"0.78rem", fontFamily:"'Noto Serif JP',serif", lineHeight:1.7 }}>💡 Arc interrompu mais acquis réinvestis dans le Bac SIO actuel.</div>}
                {active.status==="current" && <div style={{ marginTop:"12px", padding:"10px 14px", borderRadius:"6px", background:`${active.stripColor}08`, border:`1px solid ${active.stripColor}28`, color:active.stripColor, fontSize:"0.78rem", fontFamily:"'Noto Serif JP',serif", lineHeight:1.7 }}>🎯 Arc en cours — recherche active d'alternance. La suite s'écrit maintenant.</div>}
              </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginTop:"28px", padding:"20px 26px", borderRadius:"12px", border:`2px dashed ${t.color}30`, background:`${t.color}04`, textAlign:"center" }}>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.95rem", color:t.color, marginBottom:"5px" }}>🔍 En recherche d'alternance</div>
        <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:"#ffffff50", lineHeight:1.8 }}>Bac SIO SISR · Cybersécurité / Réseau / Sysadmin · Paris & Île-de-France / Rouen</div>
      </div>
    </div>
  );
}
