import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getDb } from "@/db";
import { getResult } from "@/server/attempts";
import { requireStudent } from "@/server/next";
import { AppError } from "@/server/errors";
import { KIND_LABELS } from "@/server/progress";
import { getReviewLog } from "@/server/reviewLog";
import { DocumentPane } from "@/components/DocumentPane";
import { STATUS_TEXT } from "@/components/QuestionView";
import { frDate, frDateTime } from "@/components/labels";
import { toTwenty } from "@/lib/scoring";

export const metadata = { title: "Résultat" };
export const dynamic = "force-dynamic";

const KEYS = ["A", "B", "C", "D", "E"];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const actor = await requireStudent();
  const db = getDb();
  const r = await getResult(db, actor, id).catch((e) => {
    if (e instanceof AppError && e.code === "not_finished") redirect(`/seance/${id}`);
    if (e instanceof AppError && e.status === 404) notFound();
    throw e;
  });
  const log = await getReviewLog(db, actor);
  const score = r.score;
  const pct = score && score.maxPoints ? Math.round((score.points / score.maxPoints) * 100) : 0;
  const ok = r.items.filter((i) => i.status === "correct");
  const ko = r.items.filter((i) => i.status !== "correct");
  const newItems = log.items.filter((i) => i.examples.some((e) => e.attemptId === r.id) && i.status === "open");
  const isExam = r.kind === "exam_strict" || r.kind === "exam_pedagogic";
  const fast = r.items.filter((i) => i.fast).length;
  const familiar = r.items.filter((i) => i.familiar).length;

  return (
    <div className="container stack" style={{ maxWidth: 900 }}>
      <div>
        <p className="eyebrow">{KIND_LABELS[r.kind]}{r.status === "expired" ? " · temps écoulé" : ""}</p>
        <h1>{r.title}</h1>
      </div>

      <section className="card stack">
        <div className="stat-grid">
          <div className="stat"><div className="label">Score</div><div className="value">{score ? `${score.points} / ${score.maxPoints}` : "—"}</div><div className="small muted">{pct} % {isExam && score ? `· ${toTwenty(score.points, score.maxPoints)} / 20` : ""}</div></div>
          <div className="stat"><div className="label">Réponses justes</div><div className="value">{ok.length}</div><div className="small muted">sur {r.items.length} questions</div></div>
          <div className="stat"><div className="label">Non traitées</div><div className="value">{r.items.filter((i) => i.status === "unanswered").length}</div></div>
          <div className="stat"><div className="label">Aidées (indices)</div><div className="value">{r.items.filter((i) => i.hintsUsed > 0).length}</div></div>
        </div>
        <p className="small muted">
          Conditions : {KIND_LABELS[r.kind]}, commencée le {frDateTime(r.startedAt)}, {r.items.length} questions
          {r.configVersion ? `, configuration de session ${r.configVersion}` : ""}
          {r.extensionFactor > 1 ? `, aménagement de durée simulé ×${r.extensionFactor} (non officiel)` : ""}
          {r.sections?.some((s) => s.reducedFrom) ? ", simulation réduite (banque de démonstration)" : ""}. Ce résultat n&apos;est pas mélangé avec les autres types de séances.
        </p>
        {(fast > 0 || familiar > 0) && (
          <p className="notice small">
            {fast > 0 && `${fast} réponse(s) très rapide(s) : données possiblement peu représentatives. `}
            {familiar > 0 && `${familiar} question(s) déjà rencontrée(s) : une partie du score peut venir de la familiarité avec le sujet.`}
          </p>
        )}
        {r.sections && r.sections.length > 1 && score && (
          <div className="table-wrap">
            <table className="data">
              <thead><tr><th>Épreuve</th><th>Points</th><th>Répondues</th><th>Barème</th></tr></thead>
              <tbody>
                {((score.details.bySection as { label: string; points: number; maxPoints: number; answered: number; total: number; rule: string }[]) ?? []).map((s) => (
                  <tr key={s.label}><td>{s.label}</td><td>{s.points} / {s.maxPoints}</td><td>{s.answered} / {s.total}</td><td>{s.rule === "doc_partial" ? "Points partiels (analyse documentaire)" : "1 point par bonne réponse"}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {r.scoreHistory.length > 1 && (
          <details open>
            <summary>Ce score a été recalculé</summary>
            <ul>
              {r.scoreHistory.map((s) => (
                <li key={s.id}>Version {s.version} ({frDateTime(s.createdAt)}) : {s.points} / {s.maxPoints}. {s.reason}</li>
              ))}
            </ul>
          </details>
        )}
      </section>

      {!isExam && (
        <section className="grid two">
          <div className="card flat">
            <h2>Ce qui est compris</h2>
            {ok.length ? <ul>{[...new Set(ok.map((i) => i.rule))].map((rule) => <li key={rule}>{rule}</li>)}</ul> : <p className="muted">Pas encore de réussite sur cette série : c&apos;est normal au début, le carnet va t&apos;aider.</p>}
          </div>
          <div className="card flat">
            <h2>Ce qui reste à revoir</h2>
            {newItems.length ? (
              <ul>
                {newItems.map((i) => (
                  <li key={i.id}><strong>{i.skillName}</strong> : {i.rule} <span className="small muted">(révision le {frDate(i.dueAt.toISOString())})</span>{i.redirect ? " (revoir le cours d'abord)" : ""}</li>
                ))}
              </ul>
            ) : (
              <p className="muted">Rien de nouveau dans ton carnet d&apos;erreurs.</p>
            )}
          </div>
        </section>
      )}

      <div className="row">
        <Link className="btn primary" href="/aujourdhui">Prochaine étape</Link>
        <Link className="btn" href="/entrainement/carnet">Carnet d&apos;erreurs</Link>
        <Link className="btn ghost" href="/progres">Mes progrès</Link>
      </div>

      {r.documents.map((d) => (
        <details key={d.id} className="card flat">
          <summary>Relire le dossier : {d.title}</summary>
          <DocumentPane title={d.title} documents={d.documents} />
        </details>
      ))}

      <section className="stack">
        <h2>Corrections détaillées</h2>
        {[...ko, ...ok].sort((a, b) => a.index - b.index).map((i) => (
          <article key={i.id} className="card flat stack" aria-labelledby={`q-${i.id}`}>
            <div className="row between">
              <h3 id={`q-${i.id}`} style={{ margin: 0 }}>Question {i.index + 1}</h3>
              <span className={`badge ${i.status === "correct" ? "ok" : i.status === "partial" ? "warn" : "ko"}`}>
                {i.status === "correct" ? "✓ " : i.status === "partial" ? "½ " : "✗ "}
                {STATUS_TEXT[i.status]} · {i.points} / {i.maxPoints}
              </span>
            </div>
            <div className="row small">
              {i.hintsUsed > 0 && <span className="badge">Aidée ({i.hintsUsed} indice(s))</span>}
              {i.fast && <span className="badge warn">Réponse très rapide</span>}
              {i.familiar && <span className="badge">Déjà rencontrée</span>}
              {i.withdrawn && <span className="badge ko">Question retirée</span>}
              <span className="muted">{i.questionId} v{i.version}</span>
            </div>
            <p className="question-stem" style={{ fontSize: "1rem" }}>{i.stem}</p>
            <ul className="options">
              {i.options.map((o, k) => {
                const sel = i.selected.includes(o.id);
                return (
                  <li key={o.id} className={`option ${o.correct ? "correct" : sel ? "wrong" : ""}`}>
                    <span className="key" aria-hidden="true">{KEYS[k]}</span>
                    <span style={{ flex: 1 }}>
                      {o.text}
                      <span className="justif">{o.justification}</span>
                    </span>
                    <span className="verdict">{o.correct && sel ? "✓ Ta réponse, correcte" : o.correct ? "✓ Bonne réponse" : sel ? "✗ Ta réponse" : ""}</span>
                  </li>
                );
              })}
            </ul>
            <div className={`correction ${i.status === "correct" ? "ok" : "ko"}`}>
              <p>{i.explanation}</p>
              <p className="rule">À retenir : {i.rule}</p>
              <Link className="small" href={`/apprendre/cours/L-${i.skillIds[0]}${i.lessonAnchor ? `#${i.lessonAnchor}` : ""}`}>Revoir le passage du cours</Link>
            </div>
          </article>
        ))}
      </section>
      <p className="small muted">Identifiant à communiquer au support en cas de problème : <code>{id}</code></p>
    </div>
  );
}
