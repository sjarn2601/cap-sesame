import Link from "next/link";
import { getDb } from "@/db";
import { listContent } from "@/server/editorialAdmin";
import { requireStaff } from "@/server/next";
import { transitionAction } from "@/app/actions/admin";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { NEXT } from "@/components/editorialNext";
import { STATUS_LABELS } from "@/lib/editorial";
import { frDate } from "@/components/labels";
import type { lessonVersions, newsItems } from "@/db/schema";

export const metadata = { title: "Cours et actualités" };
export const dynamic = "force-dynamic";

function Transitions({ type, id, status }: { type: "lesson" | "news"; id: string; status: keyof typeof NEXT }) {
  return (
    <div className="stack" style={{ gap: 6 }}>
      {NEXT[status].map((t) => (
        <AdminForm key={t.to} action={transitionAction} className="row">
          <input type="hidden" name="type" value={type} />
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="to" value={t.to} />
          {t.needsReason && <input type="text" name="reason" placeholder="Motif" aria-label={`Motif : ${t.label}`} style={{ minWidth: 140 }} />}
          <AdminSubmit className={`btn small ${t.danger ? "danger" : ""}`}>{t.label}</AdminSubmit>
        </AdminForm>
      ))}
    </div>
  );
}

export default async function Page({ searchParams }: { searchParams: Promise<{ onglet?: string }> }) {
  const { onglet } = await searchParams;
  const actor = await requireStaff();
  const db = getDb();
  const news = onglet === "actualites";
  const rows = news
    ? ((await listContent(db, actor, "news")) as (typeof newsItems.$inferSelect)[])
    : ((await listContent(db, actor, "lesson")) as (typeof lessonVersions.$inferSelect)[]);
  const staleBefore = new Date(Date.now() - 30 * 86_400_000).toISOString().slice(0, 10);

  return (
    <div className="stack">
      <h1 style={{ margin: 0 }}>Cours et actualités</h1>
      <nav className="row" aria-label="Type de contenu">
        <Link className={`btn small ${!news ? "primary" : ""}`} href="/admin/contenus">Cours</Link>
        <Link className={`btn small ${news ? "primary" : ""}`} href="/admin/contenus?onglet=actualites">Actualités</Link>
      </nav>
      <p className="small muted">Mêmes règles que les questions : relecture par une autre personne, droits établis avant publication, motif pour tout retrait. Une actualité sans source ne peut pas être validée.</p>
      <div className="table-wrap">
        <table className="data">
          <thead>
            {news ? (
              <tr><th>Titre</th><th>Date</th><th>Sources</th><th>Vérifiée le</th><th>Statut</th><th>Actions</th></tr>
            ) : (
              <tr><th>Cours</th><th>Version</th><th>Notion</th><th>Titre</th><th>Statut</th><th>Actions</th></tr>
            )}
          </thead>
          <tbody>
            {news
              ? (rows as (typeof newsItems.$inferSelect)[]).map((n) => (
                  <tr key={n.id}>
                    <td>{n.title}</td>
                    <td>{frDate(n.eventDate)}</td>
                    <td>{n.sources.length}</td>
                    <td>{frDate(n.lastVerifiedAt)}{n.status === "published" && n.lastVerifiedAt < staleBefore ? <span className="badge warn"> à revérifier</span> : null}</td>
                    <td><span className="badge">{STATUS_LABELS[n.status]}</span>{n.isDemo ? " · démo" : ""}</td>
                    <td><Transitions type="news" id={n.id} status={n.status} /></td>
                  </tr>
                ))
              : (rows as (typeof lessonVersions.$inferSelect)[]).map((l) => (
                  <tr key={l.id}>
                    <td>{l.lessonId}</td>
                    <td>v{l.version}</td>
                    <td>{l.skillId}</td>
                    <td>{l.title}</td>
                    <td><span className="badge">{STATUS_LABELS[l.status]}</span>{l.isDemo ? " · démo" : ""}</td>
                    <td><Transitions type="lesson" id={l.id} status={l.status} /></td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 && <p className="notice">Aucun contenu.</p>}
    </div>
  );
}
