import Link from "next/link";
import { getDb } from "@/db";
import { getToday } from "@/server/plan";
import { inProgressAttempts } from "@/server/attempts";
import { getReviewLog } from "@/server/reviewLog";
import { requireStudent } from "@/server/next";
import { ActionForm, Submit } from "@/components/ActionForm";
import { startTaskAction, startDiagnosticAction, deferDiagnosticAction } from "@/app/actions/student";
import { TASK_LABELS, frDate } from "@/components/labels";
import type { PlanTask } from "@/db/schema";

export const metadata = { title: "Aujourd'hui" };
export const dynamic = "force-dynamic";

function TaskLaunch({ task, primary }: { task: PlanTask; primary?: boolean }) {
  return (
    <ActionForm action={startTaskAction}>
      <input type="hidden" name="task" value={task.id} />
      {primary && task.kind === "practice" && (
        <fieldset style={{ border: "none", padding: 0, marginBottom: 12 }}>
          <legend className="small muted" style={{ padding: 0 }}>Durée de la séance</legend>
          <div className="radio-row">
            <label className="radio-pill"><input type="radio" name="size" value="short" /><span>Courte · 5 questions</span></label>
            <label className="radio-pill"><input type="radio" name="size" value="normal" defaultChecked /><span>Normale · 10</span></label>
            <label className="radio-pill"><input type="radio" name="size" value="long" /><span>Longue · 15</span></label>
          </div>
        </fieldset>
      )}
      <Submit className={primary ? "btn primary" : "btn small"} pendingText="Préparation…">
        {primary ? "Commencer" : "Faire plutôt ceci"}
      </Submit>
    </ActionForm>
  );
}

export default async function Page() {
  const actor = await requireStudent();
  const db = getDb();
  const [today, running, log] = await Promise.all([getToday(db, actor), inProgressAttempts(db, actor), getReviewLog(db, actor)]);
  const diagRunning = running.find((r) => r.kind === "diagnostic");
  const otherRunning = running.filter((r) => r.kind !== "diagnostic");
  const greeting = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", timeZone: "Europe/Paris" }).format(new Date());

  return (
    <div className="container stack" style={{ maxWidth: 820 }}>
      <div>
        <p className="eyebrow">{greeting}</p>
        <h1>Aujourd&apos;hui</h1>
      </div>

      {today.note && <p className="notice ok" role="status">{today.note}</p>}

      {today.sessionPassed && (
        <section className="card">
          <h2>La date de ta session est passée</h2>
          <p>Choisis une nouvelle session dans ton profil : ton plan sera recalculé, tes résultats sont conservés.</p>
          <Link className="btn primary" href="/profil#session">Choisir une session</Link>
        </section>
      )}

      {otherRunning.map((r) => (
        <section key={r.id} className="card row between">
          <div>
            <p className="eyebrow">Séance en cours</p>
            <h2 style={{ marginBottom: 4 }}>{r.title}</h2>
            <p className="muted small" style={{ margin: 0 }}>{r.answered} réponse(s) enregistrée(s) sur {r.total}</p>
          </div>
          <Link className="btn primary" href={`/seance/${r.id}`}>Reprendre</Link>
        </section>
      ))}

      {(today.diagnosticPending || diagRunning) && (
        <section className="card hero-action stack">
          <p className="eyebrow">Première étape conseillée</p>
          <h2>{diagRunning ? "Reprendre ton diagnostic" : "Diagnostic d'orientation"}</h2>
          <p>
            {diagRunning
              ? `Tu en es à ${diagRunning.answered} réponse(s) sur ${diagRunning.total}. Tu reprends exactement là où tu t'étais arrêté.`
              : "Environ 15 questions sur toutes les épreuves, 15 à 25 minutes, interrompable. Il donne une estimation provisoire, pas un niveau définitif."}
          </p>
          <div className="row">
            {diagRunning ? (
              <Link className="btn primary" href={`/seance/${diagRunning.id}`}>Reprendre le diagnostic</Link>
            ) : (
              <ActionForm action={startDiagnosticAction}>
                <Submit pendingText="Préparation…">Commencer le diagnostic</Submit>
              </ActionForm>
            )}
            {!diagRunning && (
              <form action={deferDiagnosticAction}>
                <button className="btn">Plus tard, commencer directement</button>
              </form>
            )}
          </div>
        </section>
      )}

      {today.main ? (
        <section className={`card stack ${today.diagnosticPending ? "" : "hero-action"}`} aria-labelledby="main-action">
          <p className="eyebrow">{today.diagnosticPending ? "Ou directement" : "Ton action principale"} · {today.main.minutes} min</p>
          <h2 id="main-action">
            {TASK_LABELS[today.main.kind]}
            {today.main.skillId && today.skillName[today.main.skillId] ? ` : ${today.skillName[today.main.skillId]}` : ""}
          </h2>
          <p><strong>Pourquoi : </strong>{today.main.reason}</p>
          <TaskLaunch task={today.main} primary />
          {today.others.length > 0 && (
            <details>
              <summary>Remplacer par une autre activité</summary>
              <ul className="list-plain">
                {today.others.map((t) => (
                  <li key={t.id} className="task">
                    <div>
                      <strong>{TASK_LABELS[t.kind]}{t.skillId && today.skillName[t.skillId] ? ` : ${today.skillName[t.skillId]}` : ""}</strong>
                      <div className="meta">{t.minutes} min · {t.reason}</div>
                    </div>
                    <TaskLaunch task={t} />
                  </li>
                ))}
              </ul>
              <p className="small"><Link href="/entrainement">Choisir librement une matière ou une notion</Link></p>
            </details>
          )}
        </section>
      ) : (
        !today.sessionPassed && (
          <section className="card stack">
            <h2>{today.totalToday > 0 ? "Journée terminée, bravo !" : "Pas de travail prévu aujourd'hui"}</h2>
            <p className="muted">
              {today.totalToday > 0
                ? `Tu as terminé les ${today.totalToday} activités prévues.`
                : "Ton plan respecte tes disponibilités : aucune activité n'est prévue ce jour-là."}
              {today.next && ` Prochaine activité : ${frDate(today.next.date)}.`}
            </p>
            <div className="row">
              <Link className="btn" href="/entrainement">Faire une série libre</Link>
              <Link className="btn ghost" href="/calendrier">Voir mon calendrier</Link>
            </div>
          </section>
        )
      )}

      <section className="grid">
        <div className="card flat">
          <p className="eyebrow">Progression du jour</p>
          <p className="big-number">{today.doneToday} / {today.totalToday}</p>
          <p className="muted small">activités terminées · {today.minutesToday} min prévues</p>
          <Link href="/calendrier" className="small">Voir la semaine</Link>
        </div>
        <div className="card flat">
          <p className="eyebrow">Carnet d&apos;erreurs</p>
          <p className="big-number">{log.dueToday}</p>
          <p className="muted small">révision(s) à faire aujourd&apos;hui{log.backlog > 0 ? `, ${log.backlog} étalée(s) sur les jours suivants` : ""}</p>
          <Link href="/entrainement/carnet" className="small">Ouvrir le carnet</Link>
        </div>
      </section>
    </div>
  );
}
