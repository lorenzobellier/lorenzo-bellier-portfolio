import { useState } from "react";
import { THEMES } from "../data/themes";
import { SectionTitle } from "./UI";
import portrait from "../assets/portrait.jpg";

export default function AboutSection({ theme }) {
  const t = THEMES[theme];
  const [panelOpen, setPanelOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { icon:"⚔️", title:"La voie du guerrier",  text:"19 ans, Paris. Bac SIO SISR à My Digital School. Cherche une alternance pour forger ses compétences en cyber & réseau.", color:THEMES.japon.color, detail:"Actuellement en 1ère année de Bac SIO SISR à My Digital School. Rythme alterné : une semaine école, une semaine à la maison. Recherche active d'une alternance en cybersécurité ou réseau en Île-de-France." },
    { icon:"📖", title:"L'Otaku codeur",        text:"Mangas, manhwa, manhua, novels, anime VO, donghua... Immersion totale dans les cultures asiatiques.", color:THEMES.manga.color, detail:"Consommation quotidienne de contenu asiatique en VO et ENG sub. Mangas, manhwa (coréen), manhua (chinois), light novels, anime VO, donghua (animation chinoise), K-drama, J-drama." },
    { icon:"🐉", title:"Ambition Dragon",       text:"Objectif : vivre et travailler en Asie. Japonais en apprentissage actif.", color:THEMES.chine.color, detail:"Plan en 3 étapes : maîtriser le japonais d'abord (objectif principal), puis le coréen et enfin le chinois. Ambition de partir étudier en Asie si possible." },
    { icon:"🛡️", title:"Red & Blue Team",       text:"Cybersécurité comme futur métier. Linux, réseau, scripts bash. Niveau Genin — progression constante.", color:THEMES.coree.color, detail:"Intérêt fort pour les deux côtés : Red Team (offensif) et Blue Team (défensif). Pratique via projets GitHub : linux-admin-basics, network-security-lab, incident-response-simulation." },
  ];

  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1100px", margin:"0 auto" }}>
      <SectionTitle text="À propos" kanji="私" theme={theme} />

      <div style={{ display:"grid", gridTemplateColumns:"340px 1fr", gap:"40px", marginTop:"50px", alignItems:"start" }}>

        {/* Portrait */}
        <div style={{ position:"relative", display:"flex", flexDirection:"column", alignItems:"center" }}>
          <div onClick={() => setPanelOpen(!panelOpen)}
            style={{ position:"relative", width:"300px", cursor:"pointer", filter:panelOpen?`drop-shadow(0 0 30px ${t.color})`:`drop-shadow(0 0 12px ${t.color}40)`, transition:"all 0.4s", transform:panelOpen?"scale(1.02)":"scale(1)" }}>
            <div style={{ height:"22px", background:"linear-gradient(90deg,#3d1f00,#8b5a00,#c8920a,#8b5a00,#3d1f00)", borderRadius:"3px 3px 0 0", border:"1px solid #c8920a60", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.6rem", color:"#ffd700aa", letterSpacing:"0.4em" }}>仙 道 · 武 林</span>
            </div>
            <div style={{ position:"relative", overflow:"hidden", borderLeft:"3px solid #8b5a0080", borderRight:"3px solid #8b5a0080" }}>
              <img src={portrait} alt="Portrait xianxia" style={{ width:"100%", display:"block", objectFit:"cover", objectPosition:"top", height:"380px", filter:"saturate(1.1) contrast(1.05)" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.5) 100%)", pointerEvents:"none" }} />
              <div style={{ position:"absolute", right:"8px", top:"10px", fontFamily:"'Noto Serif JP',serif", fontSize:"2.8rem", fontWeight:900, color:`${t.color}25`, lineHeight:1, userSelect:"none", pointerEvents:"none" }}>道</div>
              <div style={{ position:"absolute", bottom:"12px", left:"10px", width:"36px", height:"36px", background:"rgba(180,0,0,0.75)", borderRadius:"3px", display:"flex", alignItems:"center", justifyContent:"center", border:"1px solid #ff4444aa" }}>
                <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.75rem", color:"#fff", fontWeight:900 }}>印</span>
              </div>
              {!panelOpen && (
                <div style={{ position:"absolute", bottom:"12px", right:"10px", fontFamily:"'Noto Serif JP',serif", fontSize:"0.65rem", color:`${t.color}cc`, background:"rgba(0,0,0,0.65)", padding:"3px 8px", borderRadius:"3px", border:`1px solid ${t.color}50`, animation:"blink 2s ease-in-out infinite" }}>
                  Cliquer ▼
                </div>
              )}
            </div>
            <div style={{ height:"22px", background:"linear-gradient(90deg,#3d1f00,#8b5a00,#c8920a,#8b5a00,#3d1f00)", borderRadius:"0 0 3px 3px", border:"1px solid #c8920a60", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.62rem", color:"#ffd70090", letterSpacing:"0.2em" }}>Lorenzo Bellier · 修仙者</span>
            </div>
          </div>

          {/* Slide-down panel */}
          <div style={{ width:"300px", overflow:"hidden", maxHeight:panelOpen?"500px":"0px", transition:"max-height 0.5s cubic-bezier(0.4,0,0.2,1)", background:"linear-gradient(180deg,#1c0a00,#251200)", borderLeft:"3px solid #8b5a0080", borderRight:"3px solid #8b5a0080" }}>
            <div style={{ padding:"20px 18px", borderTop:`2px solid ${t.color}40` }}>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"1rem", fontWeight:900, color:t.color, marginBottom:"14px" }}>Lorenzo Bellier</div>
              {[
                { label:"Âge",       val:"19 ans",                icon:"🎂" },
                { label:"Ville",     val:"Paris, France",          icon:"🗼" },
                { label:"Formation", val:"Bac SIO SISR",           icon:"🎓" },
                { label:"École",     val:"My Digital School",      icon:"🏫" },
                { label:"Statut",    val:"Cherche alternance",     icon:"🔍" },
                { label:"Objectif",  val:"Cybersécurité + Asie",   icon:"🐉" },
              ].map((item,i) => (
                <div key={i} style={{ display:"flex", gap:"8px", alignItems:"center", marginBottom:"8px", padding:"6px 10px", borderRadius:"6px", background:`${t.color}06`, border:`1px solid ${t.color}18` }}>
                  <span style={{ fontSize:"0.9rem" }}>{item.icon}</span>
                  <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.72rem", color:`${t.color}80`, minWidth:"70px" }}>{item.label}</span>
                  <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.78rem", color:"#ffffffaa" }}>{item.val}</span>
                </div>
              ))}
              <div style={{ marginTop:"12px", padding:"10px", borderRadius:"6px", background:"rgba(255,215,0,0.06)", border:"1px solid rgba(255,215,0,0.2)", fontFamily:"'Noto Serif JP',serif", fontSize:"0.75rem", color:"#ffd70090", fontStyle:"italic", lineHeight:1.8 }}>
                "La théorie sans pratique, c'est un cultivateur sans Qi."
              </div>
            </div>
          </div>
          {panelOpen && (
            <div style={{ width:"300px", height:"18px", background:"linear-gradient(90deg,#3d1f00,#8b5a00,#c8920a,#8b5a00,#3d1f00)", borderRadius:"0 0 3px 3px", border:"1px solid #c8920a60", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }} onClick={() => setPanelOpen(false)}>
              <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.6rem", color:"#ffd700aa", letterSpacing:"0.3em" }}>▲ Fermer</span>
            </div>
          )}
        </div>

        {/* Cards */}
        <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
          {cards.map((c,i) => (
            <div key={i} onClick={() => setActiveCard(activeCard===i?null:i)}
              style={{ padding:"18px 22px", borderRadius:"12px", border:`1px solid ${c.color}${activeCard===i?"55":"25"}`, background:activeCard===i?`${c.color}10`:`${c.color}06`, backdropFilter:"blur(10px)", cursor:"pointer", transition:"all 0.3s" }}
              onMouseEnter={e=>{e.currentTarget.style.border=`1px solid ${c.color}50`;e.currentTarget.style.transform="translateX(5px)";}}
              onMouseLeave={e=>{e.currentTarget.style.border=`1px solid ${c.color}${activeCard===i?"55":"25"}`;e.currentTarget.style.transform="translateX(0)";}}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <span style={{ fontSize:"1.4rem" }}>{c.icon}</span>
                  <span style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.9rem", fontWeight:700, color:c.color }}>{c.title}</span>
                </div>
                <span style={{ color:c.color, fontSize:"0.75rem", transition:"transform 0.3s", display:"inline-block", transform:activeCard===i?"rotate(180deg)":"rotate(0deg)" }}>▼</span>
              </div>
              <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"0.8rem", color:"#ffffff60", lineHeight:1.7, marginTop:"6px" }}>{c.text}</div>
              {activeCard===i && (
                <div style={{ marginTop:"12px", paddingTop:"12px", borderTop:`1px solid ${c.color}25`, fontFamily:"'Noto Serif JP',serif", fontSize:"0.82rem", color:"#ffffffaa", lineHeight:1.85, animation:"fadeIn 0.3s ease" }}>
                  {c.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
