import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { getDb } from "@/db";
import { studyPlans } from "@/db/schema";
import { computePlan, ensurePlan } from "@/server/plan";
import { requireStudent } from "@/server/next";
import { applyPlanAction, revertPlanAction } from "@/app/actions/student";
import { TASK_LABELS, frDate } from "@/components/labels";
import { sumMinutesByDate } from "@/lib/planner";
import type { PlanTask } from "@/db/schema";

export const metadata = { title: "Calendrier" };
export const dynamic = "force-dynamic";

function byDate(tasks: PlanTask[]) {
  const m = new Map<string, PlanTask[]>();
  for (const t of tasks) m.set(t.date, [...(m.get(t.date) ?? []), t]);
  return [...m.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export default async function Page({ searchParams }: { searchParams: Promise<{ apercu?: string; applique?: string; annule?: string }> }) {
  const sp = await searchParams;
  const actor = await requireStudent();
  const db = getDb();
  const { plan, sessionPassed } = await ensurePlan(db, actor.id);
  const versions = await db.select({ id: studyPlans.id, version: studyPlans.version }).from(studyPlans).where(eq(studyPlans.userId, actor.id)).orderBy(desc(studyPlans.version));
  const preview = sp.apercu ? await computePlan(db, actor.id) : null;
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="container stack" style={{ maxWidth: 900 }}>
      <div className="row between">
        <h1 style={{ margin: 0 }}>Calendrier</h1>
        <div className="row">
          <Link className="btn small" href="/calendrier?apercu=1">Recalculer le plan</Link>
          <Link className="btn small ghost" href="/profil">Mes disponibilités</Link>
        </div>
      </div>
      {sp.applique && <p className="notice ok" role="status">Nouveau plan appliqué. Les activités déjà faites sont conservées.</p>}
      {sp.annule && <p className="notice ok" role="status">Retour à la version précédente du plan.</p>}
      {sessionPassed && <p className="notice warn">La date de ta session est passée. <Link href="/profil#session">Choisis une nouvelle session.</Link></p>}

      {preview && preview.status === "ok" && plan && (
        <section className="card hero-action stack">
          <h2>Aperçu du nouveau plan</h2>
          <ul>{preview.rationale.map((r) => <li key={r}>{r}</li>)}</ul>
          <div className="table-wrap">
            <table className="data">
              <thead><tr><th>Jour</th><th>Plan actuel</th><th>Nouveau plan</th></tr></thead>
              <tbody>
                {[...new Set([...sumMinutesByDate(plan.tasks).keys(), ...sumMinutesByDate(preview.tasks).keys()])].filter((d) => d >= today).sort().map((d) => (
                  <tr key={d}>
                    <td>{frDate(d, { weekday: "short", day: "numeric", month: "short" })}</td>
                    <td>{sumMinutesByDate(plan.tasks).get(d) ?? 0} min</td>
                    <td>{sumMinutesByDate(preview.tasks).get(d) ?? 0} min · {preview.tasks.filter((t) => t.date === d).map((t) => TASK_LABELS[t.kind]).join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="row">
            <form action={applyPlanAction}><button className="btn primary">Appliquer ce plan</button></form>
            <Link className="btn" href="/calendrier">Garder le plan actuel</Link>
          </div>
        </section>
      )}

      {plan && (
        <>
          <section className="card flat">
            <p className="small muted">Plan version {plan.version}.</p>
            <ul className="small">{plan.rationale.map((r) => <li key={r}>{r}</li>)}</ul>
            {versions.length > 1 && (
              <form action={revertPlanAction}><button className="btn small ghost">Revenir à la version précédente</button></form>
            )}
          </section>
          {byDate(plan.tasks).filter(([d]) => d >= today).map(([d, tasks]) => (
            <section key={d} className="card flat">
              <h2 style={{ fontSize: "1.05rem" }}>
                {frDate(d)} {d === today && <span className="badge accent">Aujourd&apos;hui</span>} <span className="muted small">· {tasks.reduce((a, t) => a + t.minutes, 0)} min</span>
              </h2>
              <ul className="list-plain">
                {tasks.map((t) => (
                  <li key={t.id} className="task">
                    <div>
                      <strong>{t.done ? "✓ " : ""}{TASK_LABELS[t.kind]}</strong>
                      <div className="meta">{t.minutes} min · {t.reason}</div>
                    </div>
                    {t.done && <span className="badge ok">Fait</span>}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          {plan.tasks.filter((t) => t.date >= today).length === 0 && <p className="notice">Aucune activité prévue : vérifie tes disponibilités dans ton profil.</p>}
        </>
      )}
    </div>
  );
}
