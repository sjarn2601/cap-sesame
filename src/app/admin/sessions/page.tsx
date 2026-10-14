import { desc } from "drizzle-orm";
import { getDb } from "@/db";
import { examSessionConfigs, users } from "@/db/schema";
import { requireStaff } from "@/server/next";
import { approveConfigAction, configDraftAction } from "@/app/actions/admin";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { frDate, frDateTime } from "@/components/labels";

export const metadata = { title: "Sessions" };
export const dynamic = "force-dynamic";

const CONFIG_STATUS: Record<string, string> = { draft: "Brouillon", pending_second_approval: "1 validation sur 2", published: "Publiée", archived: "Archivée" };

const show = (v: unknown) => (v === undefined ? "∅" : JSON.stringify(v));

export default async function Page() {
  const actor = await requireStaff();
  const db = getDb();
  const configs = await db.select().from(examSessionConfigs).orderBy(examSessionConfigs.code, desc(examSessionConfigs.version));
  const people = new Map((await db.select({ id: users.id, email: users.email }).from(users)).map((u) => [u.id, u.email]));
  const canEdit = actor.role === "admin" || actor.role === "reviewer";
  const latest = configs.find((c) => c.status === "published") ?? configs[0];

  return (
    <div className="stack">
      <h1 style={{ margin: 0 }}>Configuration des sessions</h1>
      <p className="small muted">
        Dates, épreuves, durées et coefficients sont versionnés. Une version n&apos;est publiée qu&apos;après deux validations par deux personnes distinctes, différentes de son auteur.
        Les épreuves déjà commencées gardent la version avec laquelle elles ont démarré.
      </p>

      {configs.map((c) => (
        <article key={c.id} className="card stack">
          <div className="row between">
            <h2 style={{ margin: 0 }}>{c.code} · v{c.version}</h2>
            <span className={`badge ${c.status === "published" ? "ok" : ""}`}>{CONFIG_STATUS[c.status] ?? c.status}</span>
          </div>
          <p className="small muted" style={{ margin: 0 }}>
            Concours le {frDate(c.body.examDate)} · {c.body.papers.length} épreuve(s) · informations vérifiées le {frDate(c.verifiedAt)}
            <br />Créée par {people.get(c.createdBy ?? "") ?? "?"} le {frDateTime(c.createdAt)}
            {c.firstApprovedBy && <> · 1re validation : {people.get(c.firstApprovedBy)}</>}
            {c.secondApprovedBy && <> · 2e validation : {people.get(c.secondApprovedBy)}</>}
          </p>
          {c.diffFromPrevious.length > 0 && (
            <details>
              <summary>{c.diffFromPrevious.length} différence(s) avec la version précédente</summary>
              <div className="table-wrap">
                <table className="data">
                  <thead><tr><th>Champ</th><th>Avant</th><th>Après</th></tr></thead>
                  <tbody>{c.diffFromPrevious.map((d) => <tr key={d.path}><td><code>{d.path}</code></td><td className="small">{show(d.before)}</td><td className="small">{show(d.after)}</td></tr>)}</tbody>
                </table>
              </div>
            </details>
          )}
          {canEdit && (c.status === "draft" || c.status === "pending_second_approval") && (
            <AdminForm action={approveConfigAction} className="row">
              <input type="hidden" name="id" value={c.id} />
              <AdminSubmit>{c.status === "draft" ? "Valider (1re validation)" : "Valider et publier (2e validation)"}</AdminSubmit>
            </AdminForm>
          )}
        </article>
      ))}

      {canEdit && latest && (
        <AdminForm action={configDraftAction} className="card stack">
          <h2>Préparer une nouvelle version</h2>
          <p className="small muted">Le contenu est prérempli avec la version publiée. Modifie le JSON puis enregistre : un brouillon est créé avec la liste des différences.</p>
          <div className="grid">
            <div>
              <label htmlFor="code">Code de session</label>
              <input id="code" type="text" name="code" defaultValue={latest.code} required />
            </div>
            <div>
              <label htmlFor="verifiedAt">Informations vérifiées le</label>
              <input id="verifiedAt" name="verifiedAt" type="date" defaultValue={new Date().toISOString().slice(0, 10)} required />
            </div>
          </div>
          <label htmlFor="json">Configuration (JSON)</label>
          <textarea id="json" name="json" rows={18} defaultValue={JSON.stringify(latest.body, null, 2)} style={{ fontFamily: "var(--mono, monospace)", fontSize: 13 }} />
          <div><AdminSubmit>Créer le brouillon</AdminSubmit></div>
        </AdminForm>
      )}
    </div>
  );
}
