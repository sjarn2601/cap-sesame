import Link from "next/link";
import { cohortPercentile, getProjection, weeklyText } from "@/server/projection";
import { ShareText } from "@/components/ShareText";
import { getDb } from "@/db";
import { getProgress, KIND_LABELS } from "@/server/progress";
import { requireStudent } from "@/server/next";
import { SeriesChart } from "@/components/SeriesChart";
import { frDate } from "@/components/labels";

export const metadata = { title: "Progrès" };
export const dynamic = "force-dynamic";

const ORDER = ["exam_strict", "exam_pedagogic", "practice", "review", "diagnostic"];

export default async function Page({ searchParams }: { searchParams: Promise<{ programme?: string }> }) {
  const { programme } = await searchParams;
  const actor = await requireStudent();
  const db = getDb();
  const { series, bySubject, weekly } = await getProgress(db, actor);
  const [proj, rank] = await Promise.all([getProjection(db, actor, programme), cohortPercentile(db, actor)]);
  const kinds = ORDER.filter((k) => series[k]?.length);
  return (
    <div className="container stack">
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
        <p className="row small">
          <a href="/api/bilan">Télécharger ce bilan</a>
          <ShareText text={weeklyText(weekly)} title="Mon bilan CAP SESAME" label="Partager ce bilan" />
          <a href="/api/export?format=csv">Exporter mes résultats (CSV)</a>
        </p>
      </section>

      <section className="card stack" aria-labelledby="proj-title">
        <h2 id="proj-title">Projection par programme</h2>
        <p className="small muted">Ni note officielle ni probabilité d&apos;admission. Session {proj.sessionCode}, configuration version {proj.configVersion} vérifiée le {proj.verifiedAt}.</p>
        {proj.programs.length > 1 && (
          <nav className="row" aria-label="Programme">
            {proj.programs.map((p) => <Link key={p} className={`btn small ${p === proj.program ? "primary" : ""}`} href={`/progres?programme=${encodeURIComponent(p)}`}>{p}</Link>)}
          </nav>
        )}
        {!proj.available ? (
          <p className="notice">{proj.reason}</p>
        ) : (
          <p>
            {proj.partial !== null ? <><strong>{String(proj.partial).replace(".", ",")} / 20</strong> sur les composantes disponibles ({Math.round(proj.coverage * 100)} % du poids total).</> : "Aucune composante encore mesurée."}
            {proj.missing.length > 0 && <> Manquent : {proj.missing.join(", ")}.</>}
          </p>
        )}
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Composante</th><th>Coefficient</th><th>Dernier blanc strict</th></tr></thead>
            <tbody>
              {proj.components.map((c) => (
                <tr key={c.key}>
                  <td>{c.label}</td>
                  <td>{c.weight ?? "non publié"}</td>
                  <td>{c.score20 !== null ? `${String(c.score20).replace(".", ",")} / 20 (${c.date})` : c.key === "DOSSIER" || c.key === "ORAL" ? "non mesuré ici" : "pas encore"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="small">
          {rank.shown
            ? <>Sur ton dernier concours blanc complet, tu fais mieux que {rank.percentile} % d&apos;un groupe de {rank.n} élèves ({rank.period}). {rank.bias}</>
            : <span className="muted">{rank.reason}</span>}
        </p>
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
    </div>
  );
}
