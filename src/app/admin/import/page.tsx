import { requireStaff } from "@/server/next";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { batchAction, cancelBatchAction } from "@/app/actions/admin";

export const metadata = { title: "Import par lots" };

export default async function Page() {
  await requireStaff();
  return (
    <div className="stack" style={{ maxWidth: 1000 }}>
      <h1>Import par lots</h1>
      <p className="muted">Collez un tableau JSON de questions (même schéma que la création unitaire). La validation à blanc n&apos;écrit rien. Un lot invalide n&apos;est jamais appliqué partiellement sans votre accord explicite, et les questions importées entrent en brouillon : le catalogue public n&apos;est pas touché.</p>
      <AdminForm action={batchAction} className="card stack" showReport>
        <label htmlFor="json">Lot (JSON)</label>
        <textarea id="json" name="json" rows={16} placeholder='[{"questionId": "…", …}]' style={{ fontFamily: "var(--mono)", fontSize: "0.85rem" }} />
        <div className="row">
          <AdminSubmit name="mode" value="dry" className="btn">Validation à blanc</AdminSubmit>
          <AdminSubmit name="mode" value="all">Importer (tout ou rien)</AdminSubmit>
          <AdminSubmit name="mode" value="partial" className="btn danger">Importer seulement les questions valides</AdminSubmit>
        </div>
      </AdminForm>
      <AdminForm action={cancelBatchAction} className="card stack">
        <h2>Annuler un lot</h2>
        <p className="small muted">Supprimé s&apos;il n&apos;est référencé par aucun résultat, sinon retiré proprement.</p>
        <div className="row">
          <input type="text" name="batchId" placeholder="B-2026-10-14-xxxxxxxx" aria-label="Identifiant du lot" style={{ flex: 1 }} required />
          <AdminSubmit className="btn danger">Annuler le lot</AdminSubmit>
        </div>
      </AdminForm>
    </div>
  );
}
