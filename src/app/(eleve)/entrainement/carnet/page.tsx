import Link from "next/link";
import { getDb } from "@/db";
import { getReviewLog } from "@/server/reviewLog";
import { requireStudent } from "@/server/next";
import { updateReviewItemAction, startReviewAction } from "@/app/actions/student";
import { ActionForm, Submit } from "@/components/ActionForm";
import { CAUSE_LABELS, REVIEW_INTERVALS_DAYS, type ErrorCause } from "@/lib/spaced";
import { frDate } from "@/components/labels";

export const metadata = { title: "Carnet d'erreurs" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStudent();
  const log = await getReviewLog(getDb(), actor);
  const open = log.items.filter((i) => i.status === "open");
  const closed = log.items.filter((i) => i.status === "closed");
  return (
    <div className="container stack" style={{ maxWidth: 900 }}>
      <nav className="small"><Link href="/entrainement">S&apos;entraîner</Link> › Carnet d&apos;erreurs</nav>
      <h1>Carnet d&apos;erreurs</h1>
      <p className="muted">
        Chaque erreur revient à J+{REVIEW_INTERVALS_DAYS.join(", J+")}, sous une forme nouvelle. Réussir la même question ne suffit pas : la lacune se ferme sur une variante. Tu peux corriger la cause proposée.
      </p>
      {log.dueToday > 0 && (
        <ActionForm action={startReviewAction}>
          <Submit pendingText="Préparation…">Réviser maintenant ({log.dueToday})</Submit>
        </ActionForm>
      )}
      <p className="row small">
        <a className="btn small" href="/api/fiches?format=md">Exporter mes fiches (texte)</a>
        <a className="btn small ghost" href="/api/fiches?format=csv">Tableur (CSV)</a>
        <Link className="btn small ghost" href="/entrainement/cartes">Mes cartes</Link>
      </p>
      {open.length === 0 && <p className="notice ok">Aucune lacune ouverte. Les erreurs que tu feras apparaîtront ici avec leur règle à retenir.</p>}
      {(Object.keys(CAUSE_LABELS) as ErrorCause[]).map((cause) => {
        const group = open.filter((i) => i.cause === cause);
        if (!group.length) return null;
        return (
          <section key={cause} className="stack" aria-labelledby={`g-${cause}`}>
            <h2 id={`g-${cause}`} style={{ fontSize: "1.15rem", marginBottom: 0 }}>{CAUSE_LABELS[cause]} ({group.length})</h2>
            {group.map((i) => (
        <article key={i.id} className="card flat stack">
          <div className="row between">
            <h3 style={{ margin: 0, fontSize: "1.05rem" }}>{i.skillName}</h3>
            <span className="badge">Prochaine révision : {frDate(i.dueAt.toISOString())}</span>
          </div>
          <p className="rule">À retenir : {i.rule}</p>
          <p className="small muted">{i.examples.length} exemple(s) rencontré(s) · étape {Math.min(i.stage + 1, REVIEW_INTERVALS_DAYS.length)} sur {REVIEW_INTERVALS_DAYS.length}</p>
          {i.redirect && (
            <p className="notice warn">
              Plusieurs erreurs de suite sur cette notion : revois d&apos;abord le cours{i.lessonId ? <> (<Link href={`/apprendre/cours/${i.lessonId}`}>ouvrir</Link>)</> : null}, ou demande de l&apos;aide à un enseignant.
            </p>
          )}
          <form action={updateReviewItemAction} className="row">
            <input type="hidden" name="id" value={i.id} />
            <label htmlFor={`cause-${i.id}`} className="small" style={{ margin: 0 }}>Cause probable</label>
            <select id={`cause-${i.id}`} name="cause" defaultValue={i.cause} style={{ width: "auto", flex: 1, minWidth: 220 }}>
              {(Object.keys(CAUSE_LABELS) as ErrorCause[]).map((c) => <option key={c} value={c}>{CAUSE_LABELS[c]}</option>)}
            </select>
            <button className="btn small">Corriger</button>
            {i.causeEditedByUser && <span className="small muted">Corrigée par toi</span>}
          </form>
          <p className="row small" style={{ margin: 0 }}>
            {i.lessonId && <Link href={`/apprendre/cours/${i.lessonId}`}>Revoir le cours</Link>}
            <Link href={`/entrainement/cartes?${new URLSearchParams({ recto: i.skillName, verso: i.rule, matiere: i.subjectCode }).toString()}`}>En faire une carte</Link>
          </p>
        </article>
      ))}
          </section>
        );
      })}
      {closed.length > 0 && (
        <details className="card flat">
          <summary>Lacunes refermées ({closed.length})</summary>
          <ul>{closed.map((i) => <li key={i.id}>{i.skillName} : {i.rule}</li>)}</ul>
        </details>
      )}
    </div>
  );
}
