import Link from "next/link";
import { getDb } from "@/db";
import { getProfile } from "@/server/profile";
import { requireStudent } from "@/server/next";
import { getCatalog } from "@/server/catalog";
import { ActionForm, Submit } from "@/components/ActionForm";
import { startDiagnosticAction } from "@/app/actions/student";

export const metadata = { title: "Diagnostic" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStudent();
  const db = getDb();
  const profile = await getProfile(db, actor);
  const catalog = await getCatalog(db, actor);
  const done = !!profile.diagnosticState.completedAt;
  return (
    <div className="container stack">
      <h1>Diagnostic</h1>
      <section className="card stack">
        <h2>{done ? "Refaire un diagnostic d'orientation" : "Diagnostic d'orientation"}</h2>
        <p>Deux questions par épreuve, 15 à 25 minutes. Tu peux t&apos;arrêter à tout moment et reprendre plus tard. On note ta réponse, sa durée, ta confiance et l&apos;usage d&apos;indices.</p>
        <p className="small muted">Un diagnostic court donne une estimation provisoire, jamais un niveau définitif.</p>
        {done && <p><Link href={`/diagnostic/${profile.diagnosticState.attemptId}/bilan`}>Revoir mon dernier bilan</Link></p>}
        <ActionForm action={startDiagnosticAction} className="stack">
          <label style={{ fontWeight: 400, display: "flex", gap: 8 }}>
            <input type="checkbox" name="advanced" /> Je suis à l&apos;aise : proposez-moi un test plus exigeant
          </label>
          <div><Submit pendingText="Préparation…">{profile.diagnosticState.attemptId && !done ? "Reprendre" : "Commencer"}</Submit></div>
        </ActionForm>
      </section>
      <section className="card flat stack">
        <h2>Consolider une matière</h2>
        <p className="muted">Six questions de familles différentes pour préciser l&apos;estimation d&apos;une matière.</p>
        <div className="row">
          {catalog.filter((s) => s.code !== "DOC").map((s) => (
            <ActionForm key={s.code} action={startDiagnosticAction}>
              <input type="hidden" name="subject" value={s.code} />
              <Submit className="btn small" pendingText="…">{s.name}</Submit>
            </ActionForm>
          ))}
        </div>
      </section>
    </div>
  );
}
