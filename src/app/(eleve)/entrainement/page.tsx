import Link from "next/link";
import { getDb } from "@/db";
import { getCatalog } from "@/server/catalog";
import { getReviewLog } from "@/server/reviewLog";
import { requireStudent } from "@/server/next";
import { ActionForm, Submit } from "@/components/ActionForm";
import { startPracticeAction, startReviewAction, startExamAction } from "@/app/actions/student";

export const metadata = { title: "S'entraîner" };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ notion?: string }> }) {
  const { notion } = await searchParams;
  const actor = await requireStudent();
  const db = getDb();
  const [catalog, log] = await Promise.all([getCatalog(db, actor), getReviewLog(db, actor)]);
  const practicable = catalog.filter((s) => s.code !== "DOC");
  return (
    <div className="container stack">
      <h1>S&apos;entraîner</h1>

      <ActionForm action={startPracticeAction} className="card stack">
        <h2>Série libre</h2>
        <p className="muted small" style={{ marginTop: -6 }}>Questions choisies selon ta maîtrise : points faibles et consolidation.</p>
        <div className="grid two">
          <div className="field">
            <label htmlFor="subject">Matière</label>
            <select id="subject" name="subject" defaultValue={notion ? practicable.find((s) => s.skills.some((k) => k.id === notion))?.code : ""}>
              <option value="">Toutes les matières</option>
              {practicable.map((s) => <option key={s.code} value={s.code}>{s.name}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="skill">Notion <span className="hint">(facultatif)</span></label>
            <select id="skill" name="skill" defaultValue={notion ?? ""}>
              <option value="">Toutes les notions</option>
              {practicable.map((s) => (
                <optgroup key={s.code} label={s.name}>
                  {s.skills.filter((k) => k.questionCount > 0).map((k) => <option key={k.id} value={k.id}>{k.name}</option>)}
                </optgroup>
              ))}
            </select>
          </div>
        </div>
        <fieldset>
          <legend className="small muted">Durée</legend>
          <div className="radio-row segmented" style={{ display: "inline-flex" }}>
            <label className="radio-pill"><input type="radio" name="size" value="short" /><span>5 questions</span></label>
            <label className="radio-pill"><input type="radio" name="size" value="normal" defaultChecked /><span>10</span></label>
            <label className="radio-pill"><input type="radio" name="size" value="long" /><span>15</span></label>
          </div>
        </fieldset>
        <div><Submit pendingText="Préparation…">Commencer la série</Submit></div>
      </ActionForm>

      <section className="card row between">
        <div>
          <h2 style={{ marginBottom: 2 }}>Carnet d&apos;erreurs</h2>
          <p className="muted small" style={{ margin: 0 }}>
            {log.dueToday ? `${log.dueToday} révision(s) à faire aujourd'hui.` : "Aucune révision due aujourd'hui."}
            {log.backlog > 0 && ` ${log.backlog} autre(s) ensuite.`}
          </p>
        </div>
        <div className="row">
          {log.dueToday > 0 && (
            <ActionForm action={startReviewAction}>
              <Submit className="btn" pendingText="Préparation…">Réviser</Submit>
            </ActionForm>
          )}
          <Link href="/entrainement/carnet" className="btn small ghost">Carnet</Link>
          <Link href="/entrainement/cartes" className="btn small ghost">Mes cartes</Link>
        </div>
      </section>

      {catalog.some((s) => s.code === "DOC") && (
        <ActionForm action={startExamAction} className="card stack">
          <h2>Analyse documentaire guidée</h2>
          <p className="muted small" style={{ marginTop: -6 }}>Un dossier complet, sans chronomètre, corrigé question par question. Conseillé sur ordinateur.</p>
          <input type="hidden" name="subject" value="DOC" />
          <input type="hidden" name="mode" value="pedagogic" />
          <div><Submit className="btn" pendingText="Préparation…">Ouvrir un dossier</Submit></div>
        </ActionForm>
      )}
      <section className="card stack">
        <h2 style={{ margin: 0 }}>Sans réseau</h2>
        <p className="small muted" style={{ margin: 0 }}>Tous les cours et toutes les questions d&apos;entraînement sont copiés sur ton appareil. Dans le train ou sans connexion, l&apos;appli ouvre le mode hors ligne ; tes réponses arrivent sur ton compte au retour du réseau.</p>
        <div><a className="btn" href="/hors-ligne">Ouvrir le mode hors ligne</a></div>
      </section>
    </div>
  );
}
