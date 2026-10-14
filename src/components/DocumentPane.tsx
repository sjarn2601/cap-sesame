"use client";
// Dossier documentaire : numérotation stable des documents et paragraphes, tableaux lisibles, graphiques avec lecture textuelle.
import type { DocumentItem } from "@/db/schema";

export function DocumentPane({ title, documents, highlights, onToggleHighlight }: { title: string; documents: DocumentItem[]; highlights?: Set<string>; onToggleHighlight?: (key: string) => void }) {
  return (
    <div>
      <h2 style={{ fontSize: "1.1rem" }}>{title}</h2>
      {onToggleHighlight && <p className="small muted">Mode apprentissage : clique sur un paragraphe pour le surligner.</p>}
      {documents.map((d) => (
        <article key={d.num} className="doc" id={`doc-${d.num}`} aria-labelledby={`doc-${d.num}-t`}>
          <h3 id={`doc-${d.num}-t`}>
            <span className="badge accent">Document {d.num}</span> {d.title}
          </h3>
          {d.paragraphs?.map((p, i) => {
            const key = `${d.num}.${i + 1}`;
            const on = highlights?.has(key);
            const body = on ? <mark>{p}</mark> : p;
            return (
              <div key={key} className="para" id={`doc-${d.num}-p${i + 1}`}>
                <span className="num" aria-label={`Paragraphe ${i + 1}`}>§{i + 1}</span>
                {onToggleHighlight ? (
                  <p role="button" tabIndex={0} aria-pressed={!!on} onClick={() => onToggleHighlight(key)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onToggleHighlight(key))} style={{ cursor: "pointer" }}>
                    {body}
                  </p>
                ) : (
                  <p>{body}</p>
                )}
              </div>
            );
          })}
          {d.table && (
            <div className="table-wrap">
              <table className="data">
                <caption className="small muted" style={{ captionSide: "bottom", textAlign: "left", paddingTop: 6 }}>{d.caption}</caption>
                <thead>
                  <tr>{d.table.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {d.table.rows.map((r) => (
                    <tr key={r[0]}>
                      {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {d.chart && (
            <figure style={{ margin: 0 }}>
              <div className="barchart" role="img" aria-label={`${d.chart.label} : ${d.chart.points.map((p) => `${p.x} ${p.y} ${d.chart!.unit}`).join(", ")}`}>
                {d.chart.points.map((p) => (
                  <div className="bar" key={p.x}>
                    <span>{p.x}</span>
                    <span className="track"><span className="fill" style={{ display: "block", width: `${Math.min(100, p.y)}%` }} /></span>
                    <span>{p.y} {d.chart!.unit}</span>
                  </div>
                ))}
              </div>
              <figcaption className="small muted" style={{ marginTop: 6 }}>{d.caption}</figcaption>
            </figure>
          )}
          <p className="small muted">Source : {d.reference}</p>
        </article>
      ))}
    </div>
  );
}
