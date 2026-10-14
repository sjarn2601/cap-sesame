"use client";
import { useActionState } from "react";
import { mfaAction } from "@/app/actions/auth";

export function MfaForm() {
  const [state, action, pending] = useActionState(mfaAction, undefined);
  return (
    <form action={action} className="stack">
      {state?.message && <p className="notice ko" role="alert">{state.message}</p>}
      <div className="field">
        <label htmlFor="code">Code à 6 chiffres</label>
        <input id="code" name="code" type="text" inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} required autoFocus />
      </div>
      <button className="btn primary block" disabled={pending}>Vérifier</button>
    </form>
  );
}
