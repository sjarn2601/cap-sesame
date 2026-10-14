import { getDb } from "@/db";
import { estimationReport } from "@/server/estimation";
import { requireStaff } from "@/server/next";
import { MASTERY_LABELS, type MasteryStatus } from "@/lib/mastery";
import { AdminForm, AdminSubmit } from "@/components/AdminForm";
import { estimationModeAction } from "@/app/actions/admin";

export const metadata = { title: "Estimation" };
export const dynamic = "force-dynamic";

const label = (s: string) => MASTERY_LABELS[s as MasteryStatus] ?? "Non calculé";

export default async function Page() {
  const actor = await requireStaff();
  const r = await estimationReport(getDb(), actor);
  const statuses = ["insufficient", "fragile", "in_progress", "probable"];
  return (
    <div className="stack">
      <h1>Estimation de maîtrise</h1>
      <section className="card flat stack">
        <h2>Système actif</h2>
        <p>
          <strong>{r.mode === "simple" ? "Système simple (règles explicables)" : "Estimation probabiliste (expérimentale)"}</strong> pilote la sélection des questions.
          Les deux sont calculés en permanence ; changer de système est réversible et journalisé. Les réponses aidées ne comptent dans aucun des deux.
        </p>
        <p className="small muted">Versions : simple {r.versions.simple} · probabiliste {r.versions.probabilistic}</p>
        {actor.role === "admin" && (
          <AdminForm action={estimationModeAction} className="row">
            <input type="hidden" name="mode" value={r.mode === "simple" ? "probabilistic" : "simple"} />
            <AdminSubmit className="btn">{r.mode === "simple" ? "Passer à l'estimation probabiliste" : "Revenir au système simple"}</AdminSubmit>
          </AdminForm>
        )}
      </section>
      <section className="card flat stack">
        <h2>Comparaison</h2>
        <p>
          {r.snapshots} estimation(s) élève × notion ; {r.comparable} comparable(s) (les deux systèmes concluent).
          {r.agreement !== null ? ` Accord : ${Math.round(r.agreement * 100)} %.` : " Pas encore assez de données pour comparer."}
        </p>
        <div className="table-wrap">
          <table className="data">
            <thead><tr><th>Simple ↓ / probabiliste →</th>{[...statuses, "absent"].map((s) => <th key={s}>{label(s)}</th>)}</tr></thead>
            <tbody>
              {statuses.map((a) => (
                <tr key={a}><th>{label(a)}</th>{[...statuses, "absent"].map((b) => <td key={b}>{r.matrix[a]?.[b] ?? 0}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="card flat stack">
        <h2>Analyse de difficulté</h2>
        <p className="small muted">Questions avec au moins 20 réponses autonomes : {r.questionsWithData}. Un écart entre difficulté annoncée et réussite observée appelle une relecture.</p>
        {r.flags.length === 0 ? <p className="muted">Aucun écart signalé.</p> : (
          <ul>{r.flags.map((q) => <li key={q.id}><a href={`/admin/questions/${q.id}`}>{q.questionId} v{q.version}</a> : difficulté {q.difficulty}, {Math.round(q.rate * 100)} % de réussite sur {q.autonomous} réponses, {q.flag}.</li>)}</ul>
        )}
      </section>
    </div>
  );
}
