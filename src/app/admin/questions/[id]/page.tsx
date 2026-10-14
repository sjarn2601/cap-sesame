import Link from "next/link";
import { notFound } from "next/navigation";
import { getDb } from "@/db";
import { getQuestionForReview } from "@/server/editorialAdmin";
import { requireStaff } from "@/server/next";
import { AppError } from "@/server/errors";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { transitionAction, neutralizeAction } from "@/app/actions/admin";
import { STATUS_LABELS, type ContentStatus } from "@/lib/editorial";
import { frDateTime } from "@/components/labels";
import { NEXT } from "@/components/editorialNext";

export const dynamic = "force-dynamic";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const actor = await requireStaff();
  const data = await getQuestionForReview(getDb(), actor, id).catch((e) => {
    if (e instanceof AppError && e.status === 404) notFound();
    throw e;
  });
  const { q, issues, history, versions, responsesCount } = data;
  return (
    <div className="stack" style={{ maxWidth: 960 }}>
      <nav className="small"><Link href="/admin/questions">Questions</Link> › {q.questionId}</nav>
      <div className="row between">
        <h1 style={{ margin: 0 }}>{q.questionId} · v{q.version}</h1>
        <span className="badge accent">{STATUS_LABELS[q.status]}</span>
      </div>
      <p className="small muted">
        {q.subjectCode} · compétences {q.skillIds.join(", ")} · famille {q.familyId} · difficulté {q.difficulty} · {q.timeSec} s · origine {q.origin === "ai" ? "proposition IA (relecture humaine obligatoire)" : q.origin} · droits {q.rightsCleared ? "établis" : "NON établis"} · {responsesCount} réponse(s) enregistrée(s)
      </p>
      {issues.length > 0 && (
        <section className="notice ko">
          <strong>Contrôles automatiques</strong>
          <ul style={{ margin: 0 }}>{issues.map((i) => <li key={i.code + i.message}>{i.blocking ? "Bloquant : " : "Avertissement : "}{i.message}</li>)}</ul>
        </section>
      )}
      <section className="card stack">
        <p className="question-stem">{q.stem}</p>
        <ul className="options">
          {q.options.map((o) => (
            <li key={o.id} className={`option ${o.correct ? "correct" : ""}`}>
              <span className="key">{o.id.toUpperCase()}</span>
              <span style={{ flex: 1 }}>{o.text}<span className="justif">{o.justification || "⚠ justification manquante"}</span></span>
              {o.correct && <span className="verdict">✓ attendue</span>}
            </li>
          ))}
        </ul>
        <div className="correction"><p>{q.explanation}</p><p className="rule">Règle : {q.rule}</p></div>
        {q.hints.length > 0 && <p className="small">Indices : {q.hints.join(" → ")}</p>}
        <p className="small muted">Références : {q.references.join(" ; ") || "aucune"}</p>
      </section>

      <section className="card stack">
        <h2>Cycle éditorial</h2>
        <p className="small muted">Un auteur ne valide pas sa propre production. Toute suspension ou tout retrait exige un motif.</p>
        {NEXT[q.status].map((t) => (
          <AdminForm key={t.to} action={transitionAction} className="row">
            <input type="hidden" name="type" value="question" />
            <input type="hidden" name="id" value={q.id} />
            <input type="hidden" name="to" value={t.to} />
            {t.needsReason && <input type="text" name="reason" placeholder="Motif" aria-label={`Motif : ${t.label}`} style={{ flex: 1, minWidth: 200 }} />}
            <AdminSubmit className={`btn ${t.danger ? "danger" : "primary"}`}>{t.label}</AdminSubmit>
          </AdminForm>
        ))}
      </section>

      {(q.status === "suspended" || q.status === "retired") && responsesCount > 0 && (
        <AdminForm action={neutralizeAction} className="card stack">
          <h2>Traiter les résultats concernés</h2>
          <p>Neutraliser la question dans toutes les tentatives terminées : une nouvelle version de score est ajoutée (avant/après, motif), l&apos;ancienne reste visible par l&apos;élève.</p>
          <input type="hidden" name="id" value={q.id} />
          <label htmlFor="nreason">Motif communiqué aux élèves</label>
          <input id="nreason" type="text" name="reason" required minLength={5} />
          <div><AdminSubmit className="btn danger">Neutraliser et recalculer</AdminSubmit></div>
        </AdminForm>
      )}

      <section className="card flat">
        <h2>Versions</h2>
        <ul>{versions.map((v) => <li key={v.id}><Link href={`/admin/questions/${v.id}`}>v{v.version}</Link> · {STATUS_LABELS[v.status]}</li>)}</ul>
        <h2>Historique</h2>
        <ul className="small">{history.map((h) => <li key={h.id}>{frDateTime(h.createdAt)} · {STATUS_LABELS[h.fromStatus as ContentStatus]} → {STATUS_LABELS[h.toStatus as ContentStatus]}{h.reason ? ` · ${h.reason}` : ""}</li>)}</ul>
      </section>
    </div>
  );
}
