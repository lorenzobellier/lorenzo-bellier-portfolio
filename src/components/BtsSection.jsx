import { THEMES } from "../data/themes";
import { BTS_OVERVIEW, BTS_OPTIONS, BTS_BLOCKS, BTS_EXAMS, BTS_TRAINING } from "../data/bts";
import { SectionTitle } from "./UI";

export default function BtsSection({ theme }) {
  const t = THEMES[theme];
  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1100px", margin:"0 auto" }}>
      <SectionTitle text="Le BTS SIO · 情報" kanji="情" theme={theme} />
      <p style={{ color:"#ffffffaa", lineHeight:1.8, maxWidth:"800px", margin:"22px 0 10px" }}>{BTS_OVERVIEW.desc}</p>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"12px", margin:"26px 0 40px" }}>
        {[["Diplôme",BTS_OVERVIEW.title],["Niveau",BTS_OVERVIEW.level],["Durée",BTS_OVERVIEW.duration],["Codes RNCP",BTS_OVERVIEW.rncp]].map(([label,value]) => (
          <div key={label} style={{ padding:"14px", border:`1px solid ${t.color}35`, borderRadius:"10px", background:`${t.color}08` }}>
            <div style={{ color:t.color, fontSize:".68rem", textTransform:"uppercase", letterSpacing:".12em" }}>{label}</div>
            <div style={{ color:"#fff", marginTop:"5px", fontSize:".88rem", lineHeight:1.5 }}>{value}</div>
          </div>
        ))}
      </div>

      <h2 style={{ color:t.color, fontSize:"1.15rem" }}>Deux options</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"18px", marginTop:"14px", marginBottom:"40px" }}>
        {BTS_OPTIONS.map(o => (
          <div key={o.code} style={{ padding:"22px", border:`1px solid ${o.current ? t.color : t.color+"25"}`, borderRadius:"14px", background:o.current ? `${t.color}10` : "rgba(0,0,0,.2)", position:"relative" }}>
            {o.current && <div style={{ position:"absolute", top:"-11px", left:"18px", padding:"2px 12px", borderRadius:"10px", background:t.color, color:"#000", fontSize:".68rem", fontWeight:900 }}>MON OPTION</div>}
            <div style={{ color:o.current ? t.color : "#fff", fontWeight:900, fontSize:"1.05rem" }}>{o.code}</div>
            <div style={{ color:"#ffffffcc", fontSize:".82rem", marginBottom:"10px" }}>{o.name}</div>
            <p style={{ color:"#ffffffaa", fontSize:".85rem", lineHeight:1.65, marginBottom:"14px" }}>{o.desc}</p>
            <div style={{ display:"flex", gap:"6px", flexWrap:"wrap" }}>
              {o.metiers.map(m => <span key={m} style={{ padding:"3px 10px", borderRadius:"10px", fontSize:".68rem", border:`1px solid ${t.color}35`, color:t.color, background:`${t.color}10` }}>{m}</span>)}
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ color:t.color, fontSize:"1.15rem" }}>Blocs de compétences</h2>
      <div style={{ display:"grid", gap:"14px", marginTop:"14px", marginBottom:"40px" }}>
        {BTS_BLOCKS.map(b => (
          <div key={b.id} style={{ padding:"18px 22px", border:`1px solid ${t.color}25`, borderRadius:"12px", background:"rgba(0,0,0,.2)", opacity:b.id==="bloc2-slam"?0.55:1 }}>
            <div style={{ color:"#fff", fontWeight:700, fontSize:".92rem", marginBottom:"6px" }}>
              {b.title} {b.common && <span style={{ color:t.color, fontSize:".65rem", fontWeight:400 }}>· commun aux deux options</span>}
            </div>
            <div style={{ color:"#ffffffaa", fontSize:".82rem", lineHeight:1.6 }}>{b.desc}</div>
          </div>
        ))}
      </div>

      <h2 style={{ color:t.color, fontSize:"1.15rem" }}>Les épreuves de l'examen</h2>
      <div style={{ overflowX:"auto", marginTop:"14px", marginBottom:"40px" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", color:"#ffffffcc", fontSize:".85rem", minWidth:"640px" }}>
          <thead>
            <tr style={{ borderBottom:`2px solid ${t.color}45` }}>
              {["Épreuve","Intitulé","Coeff.","Durée","Forme"].map(h => <th key={h} style={{ textAlign:"left", padding:"10px 8px", color:t.color, fontSize:".72rem", textTransform:"uppercase", letterSpacing:".08em" }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {BTS_EXAMS.map(e => (
              <tr key={e.code} style={{ borderBottom:`1px solid ${t.color}18`, background:e.highlight?`${t.color}08`:"transparent" }}>
                <td style={{ padding:"11px 8px", fontWeight:700, color:e.highlight?t.color:"#fff" }}>{e.code}</td>
                <td style={{ padding:"11px 8px" }}>{e.title}</td>
                <td style={{ padding:"11px 8px" }}>{e.coeff}</td>
                <td style={{ padding:"11px 8px", whiteSpace:"nowrap" }}>{e.duree}</td>
                <td style={{ padding:"11px 8px" }}>{e.forme}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ color:"#ffffff70", fontSize:".78rem", marginTop:"-28px", marginBottom:"40px" }}>✦ E5 et E6, en surbrillance, sont détaillées dans la page « Épreuve E5/E6 ».</p>

      <h2 style={{ color:t.color, fontSize:"1.15rem" }}>Mon parcours</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"12px", marginTop:"14px" }}>
        {[["École",BTS_TRAINING.school],["Option",BTS_TRAINING.option],["Période",BTS_TRAINING.period],["Rythme",BTS_TRAINING.rhythm]].map(([label,value]) => (
          <div key={label} style={{ padding:"14px", border:`1px solid ${t.color}35`, borderRadius:"10px", background:`${t.color}08` }}>
            <div style={{ color:t.color, fontSize:".68rem", textTransform:"uppercase", letterSpacing:".12em" }}>{label}</div>
            <div style={{ color:"#fff", marginTop:"5px", fontSize:".85rem", lineHeight:1.5 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
