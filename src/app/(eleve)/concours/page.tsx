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
    <div className="container stack">
      <h1>Concours blancs</h1>
      <p className="muted" style={{ marginTop: 0 }}>
        Écrits le {frDate(config.body.examDate, { day: "numeric", month: "long", year: "numeric" })}, à distance. Choisis une épreuve, ou le concours complet.
      </p>
      {factor > 1 && <p className="notice warn">Aménagement de durée simulé : ×{factor} (réglable dans ton profil). L&apos;application ne déclare pas cet aménagement officiellement accordé.</p>}

      <section className="grid">
        {config.body.papers.map((p) => {
          const code = p.subject === "LV" ? `LV-${profile.secondLanguage}` : p.subject;
          const available = bank.get(code) ?? 0;
          const highlighted = epreuve === p.subject;
          return (
            <article key={p.subject} className={`card stack ${highlighted ? "hero-action" : ""}`}>
              <div>
                <h2 style={{ marginBottom: 2 }}>{p.label}</h2>
                <p className="muted small" style={{ margin: 0 }}>{p.questionCount} questions · {Math.ceil(p.minutes * factor)} min{p.subject === "DOC" ? " · conseillé sur ordinateur" : ""}</p>
              </div>
              {available === 0 ? (
                <p className="small muted">Pas encore de sujet disponible pour cette épreuve.</p>
              ) : (
                <ActionForm action={startExamAction} className="row between">
                  <input type="hidden" name="subject" value={p.subject} />
                  {highlighted && tache && <input type="hidden" name="task" value={tache} />}
                  <div className="radio-row segmented" role="radiogroup" aria-label={`Mode pour ${p.label}`}>
                    <label className="radio-pill"><input type="radio" name="mode" value="strict" defaultChecked /><span>Strict</span></label>
                    <label className="radio-pill"><input type="radio" name="mode" value="pedagogic" /><span>Pédagogique</span></label>
                  </div>
                  <Submit className={highlighted ? "btn primary" : "btn"} pendingText="Préparation…">Lancer</Submit>
                </ActionForm>
              )}
              {available > 0 && available < p.questionCount && <p className="small muted" style={{ margin: 0 }}>Simulation réduite à {available} question(s), durée ajustée.</p>}
            </article>
          );
        })}
      </section>

      <section className="card stack">
        <h2>Concours complet</h2>
        <p className="muted" style={{ margin: 0 }}>Les sept épreuves à la suite, {Math.ceil(total * factor)} minutes de travail, avec une pause de {config.body.pauseMaxMinutes} minutes maximum entre deux parties.</p>
        <ActionForm action={startExamAction}>
          <input type="hidden" name="subject" value="FULL" />
          <input type="hidden" name="mode" value="strict" />
          <Submit className="btn primary" pendingText="Préparation…">Lancer le concours complet (strict)</Submit>
        </ActionForm>
      </section>

      {past.length > 0 && (
        <section className="stack">
          <h2>Mes simulations</h2>
          <ul className="rows">
            {past.map((a) => (
              <li key={a.id}>
                <span className="grow">
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
      <details className="small muted">
        <summary>Modes, format officiel et sources</summary>
        <ul>
          <li><strong>Strict</strong> : temps calculé par le serveur, correction cachée jusqu&apos;à la fin, aucune aide, réponse tardive refusée.</li>
          <li><strong>Pédagogique</strong> : explications après chaque réponse, temps indicatif ; le résultat n&apos;est pas comparé aux simulations strictes.</li>
        </ul>
        <p>
          Format de la session {config.code} (version {config.version}, vérifié le {frDate(config.verifiedAt, { day: "numeric", month: "long", year: "numeric" })}). {config.body.breaks} Une simulation ne remplace pas la session préparatoire officielle obligatoire.
        </p>
        <p>Sources : {config.body.sources.map((s) => <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8 }}>[{s.id}] {s.label}</a>)}</p>
      </details>
    </div>
  );
}
