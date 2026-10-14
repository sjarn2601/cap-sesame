"use client";
import { useActionState, useState } from "react";
import Link from "next/link";
import { registerAction } from "@/app/actions/auth";

export function RegisterForm({ languages }: { languages: { code: string; name: string; open: boolean }[] }) {
  const [state, action, pending] = useActionState(registerAction, undefined);
  const [age, setAge] = useState(state?.values?.consentAge ?? "");
  const closed = languages.filter((l) => !l.open);
  return (
    <form action={action} className="stack">
      {state?.message && <p className="notice ko" role="alert">{state.message}</p>}
      <div className="field">
        <label htmlFor="email">Adresse électronique</label>
        <input id="email" name="email" type="email" autoComplete="email" required defaultValue={state?.values?.email} />
      </div>
      <div className="field">
        <label htmlFor="password">
          Mot de passe <span className="hint">(10 caractères minimum)</span>
        </label>
        <input id="password" name="password" type="password" autoComplete="new-password" minLength={10} required />
      </div>
      <div className="field">
        <label htmlFor="password2">Confirmer le mot de passe</label>
        <input id="password2" name="password2" type="password" autoComplete="new-password" minLength={10} required />
      </div>
      <div className="field">
        <label htmlFor="session">Session visée</label>
        <select id="session" name="session" defaultValue="2027" disabled>
          <option value="2027">Concours SESAME 2027 (écrits annoncés le 7 avril 2027)</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="secondLanguage">Seconde langue étrangère</label>
        <select id="secondLanguage" name="secondLanguage" required defaultValue={state?.values?.secondLanguage ?? ""}>
          <option value="" disabled>Choisir…</option>
          {languages.map((l) => (
            <option key={l.code} value={l.code} disabled={!l.open}>
              {l.name}
              {l.open ? "" : " (pas encore ouverte)"}
            </option>
          ))}
        </select>
        {closed.length > 0 && (
          <p className="hint">Avant de t&apos;inscrire : {closed.map((l) => l.name).join(", ")} ne sont pas encore couvertes. L&apos;interface traduite ne suffit pas, chaque langue attend la validation d&apos;un parcours complet.</p>
        )}
      </div>
      <fieldset>
        <legend>Ton âge</legend>
        <div className="radio-row">
          <label className="radio-pill">
            <input type="radio" name="consentAge" value="15_plus" checked={age === "15_plus"} onChange={() => setAge("15_plus")} required />
            <span>15 ans ou plus</span>
          </label>
          <label className="radio-pill">
            <input type="radio" name="consentAge" value="under_15_with_parent" checked={age === "under_15_with_parent"} onChange={() => setAge("under_15_with_parent")} />
            <span>Moins de 15 ans</span>
          </label>
        </div>
        {age === "under_15_with_parent" && (
          <label style={{ fontWeight: 400, marginTop: 12, display: "flex", gap: 8 }}>
            <input type="checkbox" name="parentConsent" /> Un titulaire de l&apos;autorité parentale a pris connaissance du service et donne son accord, en plus du mien.
          </label>
        )}
      </fieldset>
      <label style={{ fontWeight: 400, display: "flex", gap: 8 }}>
        <input type="checkbox" name="terms" required /> J&apos;ai lu les <Link href="/confidentialite" target="_blank">informations sur mes données</Link> et les conditions d&apos;utilisation.
      </label>
      <button className="btn primary block" disabled={pending}>{pending ? "Création…" : "Créer mon compte"}</button>
    </form>
  );
}
