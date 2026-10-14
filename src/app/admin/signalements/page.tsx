import Link from "next/link";
import { inArray } from "drizzle-orm";
import { getDb } from "@/db";
import { listReports } from "@/server/editorialAdmin";
import { requireStaff } from "@/server/next";
import { resolveReportAction } from "@/app/actions/admin";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { frDateTime } from "@/components/labels";
import { lessonVersions, questionVersions } from "@/db/schema";

export const metadata = { title: "Signalements" };
export const dynamic = "force-dynamic";

const REPORT_STATUS: Record<string, string> = { open: "À traiter", accepted: "Accepté", rejected: "Rejeté" };

export default async function Page() {
  const actor = await requireStaff();
  if (actor.role !== "reviewer" && actor.role !== "admin") {
    return <p className="notice">Les signalements sont traités par les relecteurs et administrateurs.</p>;
  }
  const db = getDb();
  const reports = await listReports(db, actor);
  const qIds = reports.filter((r) => r.contentType === "question").map((r) => r.contentVersionId);
  const lIds = reports.filter((r) => r.contentType === "lesson").map((r) => r.contentVersionId);
  const qs = qIds.length ? await db.select({ id: questionVersions.id, label: questionVersions.questionId, version: questionVersions.version }).from(questionVersions).where(inArray(questionVersions.id, qIds)) : [];
  const ls = lIds.length ? await db.select({ id: lessonVersions.id, label: lessonVersions.title, version: lessonVersions.version }).from(lessonVersions).where(inArray(lessonVersions.id, lIds)) : [];
  const labels = new Map([...qs, ...ls].map((x) => [x.id, `${x.label} (v${x.version})`]));
  const open = reports.filter((r) => r.status === "open");
  const done = reports.filter((r) => r.status !== "open");

  return (
    <div className="stack">
      <h1 style={{ margin: 0 }}>Signalements</h1>
      <p className="small muted">Une erreur avérée se corrige par une nouvelle version ; si des résultats sont touchés, suspendre la question puis la neutraliser depuis sa fiche.</p>
      <h2>À traiter ({open.length})</h2>
      {open.length === 0 && <p className="notice ok">Aucun signalement en attente.</p>}
      {open.map((r) => (
        <article key={r.id} className="card stack">
          <p className="eyebrow">{r.contentType === "question" ? "Question" : "Cours"} · {frDateTime(r.createdAt)}</p>
          <p style={{ margin: 0 }}>
            {r.contentType === "question" ? <Link href={`/admin/questions/${r.contentVersionId}`}>{labels.get(r.contentVersionId) ?? "Question"}</Link> : labels.get(r.contentVersionId) ?? "Cours"}
          </p>
          <blockquote style={{ margin: 0 }}>{r.message}</blockquote>
          <AdminForm action={resolveReportAction} className="stack">
            <input type="hidden" name="id" value={r.id} />
            <label htmlFor={`res-${r.id}`}>Suite donnée (visible dans l&apos;historique)</label>
            <input id={`res-${r.id}`} type="text" name="resolution" required />
            <div className="row">
              <AdminSubmit name="decision" value="accepted">Accepter</AdminSubmit>
              <AdminSubmit name="decision" value="rejected" className="btn">Rejeter</AdminSubmit>
            </div>
          </AdminForm>
        </article>
      ))}
      {done.length > 0 && (
        <>
          <h2>Traités</h2>
          <div className="table-wrap">
            <table className="data">
              <thead><tr><th>Date</th><th>Contenu</th><th>Message</th><th>Décision</th><th>Suite</th></tr></thead>
              <tbody>
                {done.map((r) => (
                  <tr key={r.id}><td>{frDateTime(r.createdAt)}</td><td>{labels.get(r.contentVersionId) ?? r.contentType}</td><td className="small">{r.message}</td><td>{REPORT_STATUS[r.status]}</td><td className="small">{r.resolution}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
