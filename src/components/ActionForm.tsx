"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import type { ActionState } from "@/app/actions/student";

export function ActionForm({ action, children, className, style }: { action: (s: ActionState, f: FormData) => Promise<ActionState>; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  const [state, formAction] = useActionState(action, undefined);
  return (
    <form action={formAction} className={className} style={style}>
      {state?.message && (
        <p className={`notice ${state.ok ? "ok" : "ko"}`} role={state.ok ? "status" : "alert"} style={{ marginBottom: 12 }}>
          {state.message}
        </p>
      )}
      {children}
    </form>
  );
}

export function Submit({ children, className = "btn primary", pendingText = "Chargement…", name, value }: { children: React.ReactNode; className?: string; pendingText?: string; name?: string; value?: string }) {
  const { pending } = useFormStatus();
  return (
    <button className={className} disabled={pending} aria-busy={pending} name={name} value={value}>
      {pending ? pendingText : children}
    </button>
  );
}
