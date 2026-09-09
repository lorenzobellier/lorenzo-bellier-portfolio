import { BTS_CHECKLIST, BTS_IDENTITY, BTS_SITUATIONS } from "../data/btsPortfolio";
import { THEMES } from "../data/themes";
import { SectionTitle } from "./UI";

const statusColor = { "À faire":"#ff6b6b", "À joindre":"#ffb86b", "En cours":"#ffd700", "À préparer":"#00e5ff" };

export default function BtsPortfolioSection({ theme }) {
  const t = THEMES[theme];
  return <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1100px", margin:"0 auto" }}>
    <SectionTitle text="Dossier BTS SIO · preuves & situations" kanji="証" theme={theme} />
    <p style={{ color:"#ffffffaa", lineHeight:1.8, maxWidth:"800px", margin:"22px 0 28px" }}>Cette rubrique structure le dossier attendu par le jury. Les mentions « À joindre » signalent volontairement les documents personnels ou signés qui ne peuvent pas être remplacés par le site.</p>
    <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"12px", marginBottom:"30px" }}>{Object.entries(BTS_IDENTITY).map(([label,value]) => <div key={label} style={{ padding:"14px", border:`1px solid ${t.color}35`, borderRadius:"10px", background:`${t.color}08` }}><div style={{ color:t.color, fontSize:".68rem", textTransform:"uppercase", letterSpacing:".12em" }}>{label}</div><div style={{ color:"#fff", marginTop:"5px" }}>{value}</div></div>)}</div>
    <h2 style={{ color:t.color, fontSize:"1.15rem" }}>Situations professionnelles</h2>
    <div style={{ display:"grid", gap:"20px", marginTop:"14px" }}>{BTS_SITUATIONS.map(s => <article key={s.id} style={{ padding:"24px", border:`1px solid ${t.color}30`, borderRadius:"14px", background:"rgba(0,0,0,.25)" }}><h3 style={{ color:"#fff", margin:"0 0 8px" }}>{s.title}</h3><div style={{ color:t.color, fontSize:".8rem", marginBottom:"16px" }}>{s.period}</div>{[["Contexte",s.context],["Besoin de départ",s.need],["Rôle personnel",s.role],["Résultats",s.results]].map(([label,value]) => <div key={label} style={{ marginTop:"11px", color:"#ffffffbb", lineHeight:1.65 }}><strong style={{ color:t.color }}>{label} : </strong>{value}</div>)}<div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"18px", marginTop:"20px" }}><div><strong style={{ color:t.color }}>Compétences visées</strong>{s.skills.map(x => <div key={x} style={{ color:"#ffffffbb", marginTop:"7px", fontSize:".88rem" }}>• {x}</div>)}</div><div><strong style={{ color:t.color }}>Preuves à associer</strong>{s.evidence.map(x => <div key={x} style={{ color:"#ffffffbb", marginTop:"7px", fontSize:".88rem" }}>• {x}</div>)}</div></div></article>)}</div>
    <h2 style={{ color:t.color, fontSize:"1.15rem", marginTop:"34px" }}>Contrôle avant dépôt</h2>
    <div style={{ overflowX:"auto", marginTop:"14px" }}><table style={{ width:"100%", borderCollapse:"collapse", color:"#ffffffcc", fontSize:".9rem" }}><tbody>{BTS_CHECKLIST.map(([item,status]) => <tr key={item} style={{ borderBottom:`1px solid ${t.color}22` }}><td style={{ padding:"13px 8px" }}>{item}</td><td style={{ padding:"13px 8px", color:statusColor[status], whiteSpace:"nowrap" }}>{status}</td></tr>)}</tbody></table></div>
  </div>;
}
