import { useState } from "react";
import { THEMES } from "../data/themes";
import { EPREUVE_IDENTITY, COMPETENCES_REFERENTIEL, TABLEAU_SYNTHESE_FILE, BTS_SITUATIONS, BTS_CHECKLIST } from "../data/epreuve";
import { SectionTitle } from "./UI";

const statusColor = { "À faire":"#ff6b6b", "À joindre":"#ffb86b", "En cours":"#ffd700", "À préparer":"#00e5ff" };

export default function EpreuveSection({ theme }) {
  const t = THEMES[theme];
  const [openComp, setOpenComp] = useState(null);

  return (
    <div style={{ minHeight:"100vh", padding:"120px 40px 80px", maxWidth:"1100px", margin:"0 auto" }}>
      <SectionTitle text="Épreuve E5 / E6 · 証" kanji="証" theme={theme} />
      <p style={{ color:"#ffffffaa", lineHeight:1.8, maxWidth:"800px", margin:"22px 0 10px" }}>
        L'épreuve <strong style={{ color:t.color }}>E5</strong> (orale, coeff. 4) évalue les compétences du socle commun à partir d'un tableau de synthèse listant mes réalisations professionnelles.
        L'épreuve <strong style={{ color:t.color }}>E6</strong> (pratique et orale, coeff. 4) porte sur l'option SISR : administration des systèmes et des réseaux. Les mentions « À joindre » signalent les documents
        personnels ou signés qui ne peuvent pas être remplacés par le site.
      </p>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))", gap:"12px", margin:"26px 0 40px" }}>
        {Object.entries(EPREUVE_IDENTITY).map(([label,value]) => (
          <div key={label} style={{ padding:"14px", border:`1px solid ${t.color}35`, borderRadius:"10px", background:`${t.color}08` }}>
            <div style={{ color:t.color, fontSize:".68rem", textTransform:"uppercase", letterSpacing:".12em" }}>{label}</div>
            <div style={{ color:"#fff", marginTop:"5px" }}>{value}</div>
          </div>
        ))}
      </div>

      <h2 style={{ color:t.color, fontSize:"1.15rem", marginBottom:"14px" }}>Référentiel de compétences</h2>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))", gap:"12px", marginBottom:"40px" }}>
        {COMPETENCES_REFERENTIEL.map(c => {
          const open = openComp === c.id;
          return (
            <div key={c.id} onClick={() => setOpenComp(open ? null : c.id)} style={{ padding:"16px 18px", border:`1px solid ${t.color}30`, borderRadius:"12px", background:"rgba(0,0,0,.2)", cursor:"pointer" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div style={{ color:"#fff", fontWeight:700, fontSize:".85rem" }}>{c.title}</div>
                <span style={{ color:t.color, fontSize:".8rem", transform:open?"rotate(180deg)":"none", transition:"transform .2s" }}>▾</span>
              </div>
              {open && (
                <div style={{ marginTop:"10px" }}>
                  {c.items.map(it => <div key={it} style={{ color:"#ffffffaa", fontSize:".76rem", marginTop:"6px", lineHeight:1.5 }}>▸ {it}</div>)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h2 style={{ color:t.color, fontSize:"1.15rem", marginBottom:"14px" }}>Tableau de synthèse</h2>
      <a href={TABLEAU_SYNTHESE_FILE.href} target="_blank" rel="noopener noreferrer"
        style={{ display:"inline-flex", alignItems:"center", gap:"10px", padding:"16px 22px", borderRadius:"14px", border:`1px solid ${t.color}45`, background:`${t.color}0c`, textDecoration:"none", marginBottom:"40px" }}>
        <span style={{ fontSize:"1.6rem" }}>📊</span>
        <div>
          <div style={{ color:"#fff", fontWeight:700, fontSize:".9rem" }}>{TABLEAU_SYNTHESE_FILE.label}</div>
          <div style={{ color:t.color, fontSize:".78rem", marginTop:"2px" }}>Télécharger le fichier Excel (Annexe VI) →</div>
        </div>
      </a>

      <h2 style={{ color:t.color, fontSize:"1.15rem" }}>Fiches de situation</h2>
      <div style={{ display:"grid", gap:"20px", marginTop:"14px", marginBottom:"40px" }}>
        {BTS_SITUATIONS.map(s => (
          <article key={s.id} style={{ padding:"24px", border:`1px solid ${t.color}30`, borderRadius:"14px", background:"rgba(0,0,0,.25)" }}>
            <h3 style={{ color:"#fff", margin:"0 0 8px" }}>{s.title}</h3>
            <div style={{ color:t.color, fontSize:".8rem", marginBottom:"16px" }}>{s.period}</div>
            {[["Contexte",s.context],["Besoin de départ",s.need],["Rôle personnel",s.role],["Résultats",s.results]].map(([label,value]) => (
              <div key={label} style={{ marginTop:"11px", color:"#ffffffbb", lineHeight:1.65 }}><strong style={{ color:t.color }}>{label} : </strong>{value}</div>
            ))}
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))", gap:"18px", marginTop:"20px" }}>
              <div>
                <strong style={{ color:t.color }}>Compétences visées</strong>
                {s.skills.map(x => <div key={x} style={{ color:"#ffffffbb", marginTop:"7px", fontSize:".88rem" }}>• {x}</div>)}
              </div>
              <div>
                <strong style={{ color:t.color }}>Preuves à associer</strong>
                {s.evidence.map(x => <div key={x} style={{ color:"#ffffffbb", marginTop:"7px", fontSize:".88rem" }}>• {x}</div>)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <h2 style={{ color:t.color, fontSize:"1.15rem", marginTop:"34px" }}>Contrôle avant dépôt</h2>
      <div style={{ overflowX:"auto", marginTop:"14px" }}>
        <table style={{ width:"100%", borderCollapse:"collapse", color:"#ffffffcc", fontSize:".9rem" }}>
          <tbody>
            {BTS_CHECKLIST.map(([item,status]) => (
              <tr key={item} style={{ borderBottom:`1px solid ${t.color}22` }}>
                <td style={{ padding:"13px 8px" }}>{item}</td>
                <td style={{ padding:"13px 8px", color:statusColor[status], whiteSpace:"nowrap" }}>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
