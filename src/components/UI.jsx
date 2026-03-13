import { THEMES } from "../data/themes";

export function SectionTitle({ text, kanji, theme }) {
  const t = THEMES[theme];
  return (
    <div style={{ position:"relative", paddingTop:"20px" }}>
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"clamp(4rem,12vw,9rem)", fontWeight:900, color:`${t.color}05`, position:"absolute", top:"-20px", left:"-10px", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>{kanji}</div>
      <div style={{ fontFamily:"'Noto Serif JP',serif", fontSize:"clamp(1.8rem,4vw,2.4rem)", fontWeight:900, color:"#fff", position:"relative", zIndex:1, letterSpacing:"0.05em" }}>
        {text}<span style={{ color:t.color }}> /</span>
      </div>
      <div style={{ width:"60px", height:"3px", background:`linear-gradient(90deg,${t.color},transparent)`, marginTop:"10px", borderRadius:"2px" }} />
    </div>
  );
}

export function Particles({ theme }) {
  const t = THEMES[theme];
  return (
    <div style={{ position:"fixed", inset:0, pointerEvents:"none", zIndex:0, overflow:"hidden" }}>
      {t.particles.map((p,i) => (
        <div key={i} style={{ position:"absolute", left:`${8+i*14}%`, top:"-60px", fontSize:`${14+(i%3)*6}px`, opacity:0.09, animation:`floatDown ${9+i*1.5}s linear infinite`, animationDelay:`${i*1.3}s`, filter:`drop-shadow(0 0 8px ${t.color})` }}>{p}</div>
      ))}
    </div>
  );
}
