import { useState } from "react";
import { THEMES } from "../data/themes";
import { VEILLE } from "../data/veille";
import { SectionTitle } from "./UI";

function VeilleCard({ v, isFlipped, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} onClick={onClick}
      style={{ width:"200px", minHeight:"290px", cursor:"pointer", perspective:"1000px",
        transform: hov && !isFlipped ? "translateY(-8px) scale(1.03)" : "none",
        transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1)", position:"relative" }}>
      <div style={{ width:"100%", minHeight:"290px", transformStyle:"preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        transition:"transform 0.6s cubic-bezier(0.4,0,0.2,1)", position:"relative" }}>
        {/* FRONT */}
        <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden",
          background:`linear-gradient(160deg,#0d0018,#1a0030,${v.color}18)`,
          border:`2px solid ${v.color}70`, borderRadius:"12px", padding:"12px",
          display:"flex", flexDirection:"column", gap:"8px", minHeight:"290px",
          boxShadow: hov ? `0 0 30px ${v.color}50` : `0 0 10px ${v.color}20` }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.48rem", fontWeight:900, color:v.rarityColor, letterSpacing:"0.15em", padding:"2px 7px", borderRadius:"3px", background:`${v.rarityColor}18`, border:`1px solid ${v.rarityColor}40` }}>{v.rarity}</span>
            <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.5rem", color:`${v.color}cc` }}>{v.subtitle}</span>
          </div>
          <div style={{ height:"100px", borderRadius:"8px", background:`linear-gradient(135deg,${v.color}12,${v.color}25)`, border:`1px solid ${v.color}30`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", fontSize:"5rem", fontFamily:"'Noto Serif JP',serif", fontWeight:900, color:`${v.color}12`, bottom:"-10px", right:"-5px", lineHeight:1 }}>{v.kanji}</div>
            <span style={{ fontSize:"3rem", filter:`drop-shadow(0 0 18px ${v.color})`, zIndex:1 }}>{v.icon}</span>
          </div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.85rem", fontWeight:900, color:v.color, lineHeight:1.3 }}>{v.title}</div>
          <div style={{ padding:"6px 8px", borderRadius:"6px", background:`${v.color}10`, border:`1px solid ${v.color}25`, fontFamily:"'Noto Serif JP',serif", fontSize:"0.55rem", color:`${v.color}cc`, lineHeight:1.5 }}>📊 {v.stat}</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"4px" }}>
            {v.tools.map(t => <span key={t} style={{ padding:"2px 6px", borderRadius:"3px", background:`${v.color}15`, border:`1px solid ${v.color}30`, color:v.color, fontSize:"0.5rem", fontFamily:"'Noto Serif JP',serif" }}>{t}</span>)}
          </div>
          <div style={{ textAlign:"center", fontFamily:"'Noto Serif JP',serif", fontSize:"0.48rem", color:`${v.color}70`, marginTop:"auto" }}>↩ Cliquer pour retourner</div>
        </div>
        {/* BACK */}
        <div style={{ position:"absolute", inset:0, backfaceVisibility:"hidden", transform:"rotateY(180deg)",
          background:`linear-gradient(160deg,#0a0020,#150035,${v.color}12)`,
          border:`2px solid ${v.color}70`, borderRadius:"12px", padding:"12px",
          display:"flex", flexDirection:"column", gap:"7px", minHeight:"290px", overflowY:"auto",
          boxShadow:`0 0 30px ${v.color}40` }}>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", fontWeight:900, color:v.color }}>📰 ARTICLES LUS</div>
          {v.articles.map((a, i) => (
            <div key={i} style={{ padding:"5px 7px", borderRadius:"5px", background:`${v.color}08`, border:`1px solid ${v.color}20` }}>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.54rem", color:"#ffffffdd", lineHeight:1.4, marginBottom:"2px" }}>{a.title}</div>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.47rem", color:`${v.color}cc` }}>{a.source}</span>
                <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.47rem", color:`${v.color}80`, padding:"1px 5px", borderRadius:"2px", background:`${v.color}15` }}>{a.tag}</span>
              </div>
            </div>
          ))}
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", fontWeight:900, color:v.color, marginTop:"4px" }}>💡 SYNTHÈSE</div>
          <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.53rem", color:"#ffffffcc", lineHeight:1.6, padding:"6px 8px", borderRadius:"5px", background:`${v.color}08`, border:`1px solid ${v.color}20` }}>{v.synthesis}</div>
          <div style={{ textAlign:"center", fontFamily:"'Noto Serif JP',serif", fontSize:"0.48rem", color:`${v.color}70`, marginTop:"auto" }}>↩ Retourner</div>
        </div>
      </div>
    </div>
  );
}

export default function VeilleSection({ theme }) {
  const t = THEMES[theme];
  const [flipped, setFlipped] = useState({});
  const toggle = id => setFlipped(f => ({ ...f, [id]: !f[id] }));
  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1100px", margin:"0 auto" }}>
      <SectionTitle text="Veille Informatique · 情報収集" kanji="報" theme={theme} />
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:`${t.color}cc`, marginTop:"10px", marginBottom:"50px", letterSpacing:"0.1em" }}>
        ✦ Cliquez sur une carte pour la retourner · 4 thématiques surveillées
      </div>
      <div style={{ marginBottom:"20px", padding:"12px 16px", borderRadius:"8px", border:`1px solid ${t.color}35`, color:"#ffffffaa", fontSize:"0.78rem", lineHeight:1.6 }}>
        Avant l'oral, ajoutez pour chaque article son lien direct, sa date de publication, sa date de consultation et une courte analyse personnelle.
      </div>
      <div style={{ background:"linear-gradient(180deg,#08001a,#12002a)", border:`1px solid ${t.color}15`, borderRadius:"16px", padding:"40px 32px 32px", position:"relative", boxShadow:"inset 0 -6px 20px rgba(0,0,0,0.6)" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"10px", background:"linear-gradient(90deg,#1a0040,#3d0080,#2d0060,#3d0080,#1a0040)", borderRadius:"16px 16px 0 0" }} />
        <div style={{ position:"absolute", top:"10px", left:0, right:0, height:"20px", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:`${t.color}cc`, letterSpacing:"0.4em" }}>VEILLE INFORMATIQUE · BTS SIO SISR · 2025</span>
        </div>
        <div style={{ display:"flex", gap:"24px", flexWrap:"wrap", justifyContent:"center", paddingTop:"20px" }}>
          {VEILLE.map(v => <VeilleCard key={v.id} v={v} isFlipped={!!flipped[v.id]} onClick={() => toggle(v.id)} />)}
        </div>
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"12px", background:"linear-gradient(90deg,#1a0040,#3d0080,#2d0060,#3d0080,#1a0040)", borderRadius:"0 0 16px 16px", borderTop:"2px solid rgba(150,100,255,0.15)" }} />
      </div>
      <div style={{ marginTop:"28px", padding:"20px 26px", borderRadius:"12px", border:`2px dashed ${t.color}30`, background:`${t.color}04`, display:"flex", flexWrap:"wrap", gap:"12px", alignItems:"center" }}>
        <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.78rem", color:t.color, fontWeight:700 }}>📡 Sources :</span>
        {["ANSSI","CERT-FR","ENISA","OWASP","Kaspersky","The Verge","McKinsey","APEC"].map(s => (
          <span key={s} style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.7rem", color:"#ffffffcc", padding:"3px 10px", borderRadius:"4px", background:`${t.color}10`, border:`1px solid ${t.color}25` }}>{s}</span>
        ))}
      </div>
    </div>
  );
}
