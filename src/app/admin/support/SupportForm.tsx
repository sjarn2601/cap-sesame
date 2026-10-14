"use client";
import { useActionState } from "react";
import { supportLookupAction } from "@/app/actions/admin";
import { AdminSubmit } from "@/components/AdminForm";

const fmt = (d: Date | string | null) => (d ? new Intl.DateTimeFormat("fr-FR", { dateStyle: "short", timeStyle: "medium", timeZone: "Europe/Paris" }).format(new Date(d)) : "—");

export function SupportForm() {
  const [state, action] = useActionState(supportLookupAction, undefined);
  const r = state?.result;
  return (
    <div className="stack">
      <form action={action} className="card stack">
        <label htmlFor="attemptId">Identifiant de tentative (communiqué par l&apos;élève depuis son écran de résultat)</label>
        <input id="attemptId" name="attemptId" required pattern="[0-9a-fA-F\-]{36}" placeholder="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
        <div><AdminSubmit>Consulter</AdminSubmit></div>
        {state?.message && <p className="notice ko" role="alert">{state.message}</p>}
      </form>
      {r && (
        <section className="card stack" aria-live="polite">
          <h2>Tentative</h2>
          <dl className="kv">
            <dt>Type</dt><dd>{r.kind}</dd>
            <dt>Statut</dt><dd>{r.status}</dd>
            <dt>Début</dt><dd>{fmt(r.startedAt)}</dd>
            <dt>Échéance serveur</dt><dd>{fmt(r.deadlineAt)}</dd>
            <dt>Clôture</dt><dd>{fmt(r.finalizedAt)}</dd>
            <dt>Réponses reçues</dt><dd>{r.responses} / {r.questionCount}</dd>
            <dt>Dernière réponse reçue</dt><dd>{fmt(r.lastResponseAt)}</dd>
            <dt>Réponses non confirmées</dt><dd>{r.pendingSync}</dd>
          </dl>
          <h3>Versions de score</h3>
          {r.scores.length === 0 ? <p className="muted">Pas encore de score.</p> : (
            <ul>{r.scores.map((s) => <li key={s.version}>v{s.version} · {s.points}/{s.maxPoints} · {s.reason ?? "calcul initial"} · {fmt(s.at)}</li>)}</ul>
          )}
        </section>
      )}
    </div>
  );
}
