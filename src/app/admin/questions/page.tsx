import Link from "next/link";
import { getDb } from "@/db";
import { listContent } from "@/server/editorialAdmin";
import { requireStaff } from "@/server/next";
import { STATUS_LABELS, type ContentStatus } from "@/lib/editorial";
import type { questionVersions } from "@/db/schema";

export const metadata = { title: "Questions" };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ statut?: string }> }) {
  const { statut } = await searchParams;
  const actor = await requireStaff();
  const status = statut && statut in STATUS_LABELS ? (statut as ContentStatus) : undefined;
  const rows = (await listContent(getDb(), actor, "question", status)) as (typeof questionVersions.$inferSelect)[];
  return (
    <div className="stack">
      <div className="row between">
        <h1 style={{ margin: 0 }}>Questions</h1>
        <Link className="btn primary small" href="/admin/questions/nouvelle">Nouvelle question</Link>
      </div>
      <nav className="row" aria-label="Filtrer par statut">
        <Link className={`btn small ${!status ? "primary" : ""}`} href="/admin/questions">Toutes</Link>
        {(Object.keys(STATUS_LABELS) as ContentStatus[]).map((s) => (
          <Link key={s} className={`btn small ${status === s ? "primary" : ""}`} href={`/admin/questions?statut=${s}`}>{STATUS_LABELS[s]}</Link>
        ))}
      </nav>
      <div className="table-wrap">
        <table className="data">
          <thead><tr><th>Identifiant</th><th>Version</th><th>Matière</th><th>Énoncé</th><th>Origine</th><th>Statut</th></tr></thead>
          <tbody>
            {rows.map((q) => (
              <tr key={q.id}>
                <td><Link href={`/admin/questions/${q.id}`}>{q.questionId}</Link></td>
                <td>v{q.version}</td>
                <td>{q.subjectCode}</td>
                <td className="small">{q.stem.slice(0, 80)}{q.stem.length > 80 ? "…" : ""}</td>
                <td>{q.origin === "ai" ? "Proposition IA" : q.origin === "official_authorized" ? "Officielle autorisée" : "Humaine"}</td>
                <td><span className="badge">{STATUS_LABELS[q.status]}</span>{q.reserved ? " · réservée" : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 && <p className="notice">Aucune question dans ce statut.</p>}
    </div>
  );
}
