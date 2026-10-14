import Link from "next/link";
import { and, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { questionVersions } from "@/db/schema";
import { getProfile } from "@/server/profile";
import { getPublishedConfig } from "@/server/sessionConfig";
import { listAttempts } from "@/server/attempts";
import { requireStudent } from "@/server/next";
import { ActionForm, Submit } from "@/components/ActionForm";
import { startExamAction } from "@/app/actions/student";
import { frDate, frDateTime } from "@/components/labels";

export const metadata = { title: "Concours blancs" };
export const dynamic = "force-dynamic";

export default async function Page({ searchParams }: { searchParams: Promise<{ epreuve?: string; tache?: string }> }) {
  const { epreuve, tache } = await searchParams;
  const actor = await requireStudent();
  const db = getDb();
  const profile = await getProfile(db, actor);
  const config = await getPublishedConfig(db, profile.examSessionCode);
  const published = await db.select({ subjectCode: questionVersions.subjectCode }).from(questionVersions).where(and(eq(questionVersions.status, "published")));
  const bank = new Map<string, number>();
  for (const q of published) bank.set(q.subjectCode, (bank.get(q.subjectCode) ?? 0) + 1);
  const past = (await listAttempts(db, actor)).filter((a) => a.kind === "exam_strict" || a.kind === "exam_pedagogic");
  const total = config.body.papers.reduce((a, p) => a + p.minutes, 0);
  const factor = profile.timeExtensionFactor;

  return (
    <div className="container stack" style={{ maxWidth: 960 }}>
      <h1>Concours blancs</h1>
      <p className="notice">
        <strong>Format de la session {config.code} (version {config.version}, vérifié le {frDate(config.verifiedAt, { day: "numeric", month: "long", year: "numeric" })})</strong>
        Écrits annoncés le {frDate(config.body.examDate, { day: "numeric", month: "long", year: "numeric" })}, à distance. {config.body.breaks} Une simulation ne remplace pas la session préparatoire officielle obligatoire.
      </p>
      {factor > 1 && <p className="notice warn">Aménagement de durée simulé : ×{factor} (réglable dans ton profil). L&apos;application ne déclare pas cet aménagement officiellement accordé.</p>}

      <section className="grid">
        {config.body.papers.map((p) => {
          const code = p.subject === "LV" ? `LV-${profile.secondLanguage}` : p.subject;
          const available = bank.get(code) ?? 0;
          const highlighted = epreuve === p.subject;
          return (
            <article key={p.subject} className={`card stack ${highlighted ? "hero-action" : "flat"}`}>
              <div>
                <h2 style={{ marginBottom: 4 }}>{p.label}</h2>
                <p className="muted small" style={{ margin: 0 }}>{p.questionCount} questions · {Math.ceil(p.minutes * factor)} min</p>
                <p className="small" style={{ margin: "4px 0 0" }}>{p.scoringNote}</p>
              </div>
              {available === 0 ? (
                <p className="notice warn small">Pas encore de sujet disponible pour cette épreuve.</p>
              ) : (
                <>
                  {available < p.questionCount && <p className="small muted">Banque de démonstration : simulation réduite à {Math.min(available, p.questionCount)} question(s), durée ajustée.</p>}
                  {p.subject === "DOC" && <p className="small muted">Dossier long : conseillé sur ordinateur (sur téléphone, documents et questions passent en onglets).</p>}
                  <ActionForm action={startExamAction} className="stack">
                    <input type="hidden" name="subject" value={p.subject} />
                    {highlighted && tache && <input type="hidden" name="task" value={tache} />}
                    <div className="radio-row">
                      <label className="radio-pill"><input type="radio" name="mode" value="strict" defaultChecked /><span>Strict</span></label>
                      <label className="radio-pill"><input type="radio" name="mode" value="pedagogic" /><span>Pédagogique</span></label>
                    </div>
                    <Submit className={highlighted ? "btn primary" : "btn"} pendingText="Préparation…">Lancer</Submit>
                  </ActionForm>
                </>
              )}
            </article>
          );
        })}
      </section>

      <section className="card stack">
        <h2>Concours complet</h2>
        <p>Les sept épreuves à la suite ({Math.ceil(total * factor)} minutes de travail au format officiel), avec une pause encadrée de {config.body.pauseMaxMinutes} minutes maximum entre deux parties. Avec la banque actuelle, les épreuves sont réduites.</p>
        <ActionForm action={startExamAction}>
          <input type="hidden" name="subject" value="FULL" />
          <input type="hidden" name="mode" value="strict" />
          <Submit pendingText="Préparation…">Lancer le concours complet (strict)</Submit>
        </ActionForm>
      </section>

      <section className="card flat">
        <h2>Modes</h2>
        <ul>
          <li><strong>Strict</strong> : temps calculé par le serveur, correction cachée jusqu&apos;à la fin, aucune aide, réponse tardive refusée.</li>
          <li><strong>Pédagogique</strong> : explications après chaque réponse, temps indicatif ; le résultat est identifié comme tel et n&apos;est pas comparé aux simulations strictes.</li>
        </ul>
      </section>

      {past.length > 0 && (
        <section className="card flat">
          <h2>Mes simulations</h2>
          <ul className="list-plain">
            {past.map((a) => (
              <li key={a.id} className="row between">
                <span>
                  <strong>{a.title}</strong> <span className="muted small">· {a.kind === "exam_strict" ? "strict" : "pédagogique"} · {frDateTime(a.startedAt)}</span>
                </span>
                {a.status === "in_progress" ? (
                  <Link className="btn small primary" href={`/seance/${a.id}`}>Reprendre</Link>
                ) : (
                  <Link className="btn small" href={`/seance/${a.id}/resultat`}>{a.score ? `${a.score.points} / ${a.score.maxPoints}` : "Résultat"}</Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
      <p className="small muted">Sources : {config.body.sources.map((s) => <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8 }}>[{s.id}] {s.label}</a>)}</p>
    </div>
  );
}
