"use client";
import { createContext, startTransition, useActionState, useContext } from "react";
import type { AdminState } from "@/app/actions/admin";

const Pending = createContext(false);

export function AdminForm({ action, children, className, showReport }: { action: (s: AdminState, f: FormData) => Promise<AdminState>; children: React.ReactNode; className?: string; showReport?: boolean }) {
  const [state, formAction, pending] = useActionState(action, undefined);
  return (
    <Pending.Provider value={pending}>
    <form
      className={className}
      // Soumission manuelle : React ne vide pas le formulaire, la saisie (lot JSON, motif) reste visible après une erreur.
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget, (e.nativeEvent as SubmitEvent).submitter);
        startTransition(() => formAction(data));
      }}
    >
      {state?.message && <p className={`notice ${state.ok ? "ok" : "ko"}`} role={state.ok ? "status" : "alert"} style={{ marginBottom: 12 }}>{state.message}</p>}
      {children}
      {showReport && state?.report && (
        <div className="table-wrap" style={{ marginTop: 12 }}>
          <table className="data">
            <thead><tr><th>#</th><th>Identifiant</th><th>Erreurs</th><th>Avertissements</th></tr></thead>
            <tbody>
              {state.report.map((r) => (
                <tr key={r.index}><td>{r.index + 1}</td><td>{r.questionId ?? "?"}</td><td>{r.errors.join(" ; ") || "✓"}</td><td>{r.warnings.join(" ; ")}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </form>
    </Pending.Provider>
  );
}

export function AdminSubmit({ children, className = "btn primary", name, value }: { children: React.ReactNode; className?: string; name?: string; value?: string }) {
  const pending = useContext(Pending);
  return <button className={className} disabled={pending} name={name} value={value}>{pending ? "…" : children}</button>;
}
