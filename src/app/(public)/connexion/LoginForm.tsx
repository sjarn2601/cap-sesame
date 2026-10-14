"use client";
import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, undefined);
  return (
    <form action={action} className="stack" noValidate>
      {state?.message && (
        <p className="notice ko" role="alert">
          {state.message}
        </p>
      )}
      <div className="field">
        <label htmlFor="email">Adresse électronique</label>
        <input id="email" name="email" type="email" autoComplete="email" required defaultValue={state?.values?.email} />
      </div>
      <div className="field">
        <label htmlFor="password">Mot de passe</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required />
      </div>
      <button className="btn primary block" disabled={pending}>
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
