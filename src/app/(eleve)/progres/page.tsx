import Link from "next/link";
import { getDb } from "@/db";
import { getProgress, KIND_LABELS } from "@/server/progress";
import { requireStudent } from "@/server/next";
import { SeriesChart } from "@/components/SeriesChart";
import { frDate } from "@/components/labels";

export const metadata = { title: "Progrès" };
export const dynamic = "force-dynamic";

const ORDER = ["exam_strict", "exam_pedagogic", "practice", "review", "diagnostic"];

export default async function Page() {
  const actor = await requireStudent();
  const { series, bySubject, weekly } = await getProgress(getDb(), actor);
  const kinds = ORDER.filter((k) => series[k]?.length);
  return (
    <div className="container stack" style={{ maxWidth: 960 }}>
      <h1>Progrès</h1>

      <section className="card stack">
        <h2>Bilan de la semaine</h2>
        <p className="muted small">{weekly.answeredThisWeek} réponse(s) cette semaine.</p>
        <div className="grid">
          <div>
            <h3>Ce qui progresse</h3>
            {weekly.progressing.length ? <ul>{weekly.progressing.map((p) => <li key={p}>{p}</li>)}</ul> : <p className="muted small">Pas encore assez de données pour comparer deux semaines.</p>}
          </div>
          <div>
            <h3>Ce qui bloque</h3>
            {weekly.blocking.length ? <ul>{weekly.blocking.map((p) => <li key={p}>{p}</li>)}</ul> : <p className="muted small">Rien de bloquant repéré.</p>}
          </div>
          <div>
            <h3>Ce qu&apos;il faut faire ensuite</h3>
            {weekly.next.length ? <ul>{weekly.next.map((p, i) => <li key={i}>{p}</li>)}</ul> : <p className="muted small">Ton plan est à jour.</p>}
          </div>
        </div>
        <p className="small"><a href="/api/export?format=csv">Exporter mes résultats (CSV)</a></p>
      </section>

      <section className="stack">
        <h2>Compétences</h2>
        {bySubject.length === 0 && <p className="notice">Tes compétences apparaîtront après tes premières réponses.</p>}
        {bySubject.map((s) => (
          <div key={s.code} className="card flat">
            <h3>{s.name}</h3>
            <ul className="list-plain">
              {s.skills.map((k) => (
                <li key={k.id} className="row between">
                  <Link href={`/progres/competence/${k.id}`}>{k.name}</Link>
                  <span className="row small">
                    <span className={`badge ${k.status === "probable" ? "ok" : k.status === "fragile" ? "ko" : k.status === "in_progress" ? "accent" : ""}`}>{k.label}</span>
                    <span className="muted">{k.score !== null ? `score ${Math.round(k.score * 100)} / 100 · ` : ""}{k.autonomousAttempts} rép. autonomes · {k.families} familles · {k.distinctDays} jour(s)</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p className="small muted">« Maîtrise probable » demande au moins 8 réponses autonomes, 3 familles de questions et 2 jours différents. Les réponses aidées et les simulations pédagogiques ne comptent pas.</p>
      </section>

      <section className="stack">
        <h2>Résultats par type de séance</h2>
        <p className="small muted">Chaque type est présenté séparément : un entraînement aidé, une révision et un concours strict ne sont jamais moyennés ensemble.</p>
        {kinds.length === 0 && <p className="notice">Aucune séance terminée pour l&apos;instant.</p>}
        {kinds.map((k) => (
          <div key={k} className="card flat stack">
            <h3>{KIND_LABELS[k]} ({series[k].length})</h3>
            <SeriesChart points={series[k].slice(-12)} label={`Pourcentage de réussite, ${KIND_LABELS[k]}`} />
            <details>
              <summary>Voir le détail sous forme de tableau</summary>
              <div className="table-wrap">
                <table className="data">
                  <thead><tr><th>Date</th><th>Séance</th><th>Réussite</th><th>Répondues</th></tr></thead>
                  <tbody>
                    {series[k].map((p) => (
                      <tr key={p.attemptId}>
                        <td>{frDate(p.date, { day: "numeric", month: "short" })}</td>
                        <td><Link href={`/seance/${p.attemptId}/resultat`}>{p.title}</Link></td>
                        <td>{p.pct} %</td>
                        <td>{p.answered} / {p.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        ))}
      </section>
      <section className="card flat">
        <h2>Projection par programme</h2>
        <p className="muted">Les coefficients des programmes pour 2027 ne sont pas encore sourcés : aucune note pondérée n&apos;est calculée, pour ne pas afficher un score inventé. Le dossier et l&apos;oral, qui comptent aussi, ne sont pas mesurés ici.</p>
      </section>
    </div>
  );
}
