import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getDb } from "@/db";
import { diagnosticReport } from "@/server/progress";
import { ensurePlan } from "@/server/plan";
import { requireStudent } from "@/server/next";
import { AppError } from "@/server/errors";
import { ActionForm, Submit } from "@/components/ActionForm";
import { startDiagnosticAction } from "@/app/actions/student";
import { TASK_LABELS } from "@/components/labels";

export const metadata = { title: "Bilan du diagnostic" };
export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const actor = await requireStudent();
  const db = getDb();
  await ensurePlan(db, actor.id);
  const r = await diagnosticReport(db, actor, id).catch((e) => {
    if (e instanceof AppError && e.status === 404) notFound();
    throw e;
  });
  if (!r.complete) redirect(`/seance/${id}`);
  return (
    <div className="container stack">
      <h1>Bilan du diagnostic</h1>
      <p className="notice">
        <strong>Estimation provisoire</strong>
        Avec deux questions par épreuve, l&apos;incertitude reste élevée : ce bilan oriente tes premières séances, il ne fixe pas ton niveau.
      </p>
      <section className="grid two">
        <div className="card flat">
          <h2>Forces probables</h2>
          {r.strengths.length ? <ul>{r.strengths.map((s) => <li key={s}>{s}</li>)}</ul> : <p className="muted">Pas encore assez de réponses sûres pour conclure.</p>}
        </div>
        <div className="card flat">
          <h2>Lacunes probables</h2>
          {r.gaps.length ? <ul>{r.gaps.map((s) => <li key={s}>{s}</li>)}</ul> : <p className="muted">Aucune lacune nette détectée.</p>}
        </div>
      </section>
      <section className="card flat">
        <h2>Détail par épreuve</h2>
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Épreuve</th><th>Réussies</th><th>Incertitude</th><th>Remarques</th><th></th></tr></thead>
            <tbody>
              {r.subjectsReport.map((s) => (
                <tr key={s.code}>
                  <td>{s.name}</td>
                  <td>{s.ok} / {s.total}{s.total < s.planned ? ` (${s.planned - s.total} sans réponse)` : ""}</td>
                  <td>{s.uncertainty}</td>
                  <td className="small">{[s.aided ? `${s.aided} aidée(s)` : "", s.lowConfidence ? `${s.lowConfidence} juste(s) au hasard` : ""].filter(Boolean).join(", ") || "—"}</td>
                  <td>
                    {(s.needsMore || s.uncertainty === "élevée") && s.code !== "DOC" && (
                      <ActionForm action={startDiagnosticAction}>
                        <input type="hidden" name="subject" value={s.code} />
                        <Submit className="btn small" pendingText="…">Compléter</Submit>
                      </ActionForm>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="card hero-action stack">
        <h2>Tes trois premières actions</h2>
        <ol>
          {r.actions.map((t) => <li key={t.id}><strong>{TASK_LABELS[t.kind]}</strong> ({t.minutes} min) : {t.reason}</li>)}
        </ol>
        <div className="row">
          <Link className="btn primary" href="/aujourdhui">Commencer</Link>
          <Link className="btn" href={`/seance/${id}/resultat`}>Voir les corrections</Link>
        </div>
      </section>
    </div>
  );
}
