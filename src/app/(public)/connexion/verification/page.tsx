import { redirect } from "next/navigation";
import { getActor } from "@/server/next";
import { MfaForm } from "./MfaForm";

export const metadata = { title: "Vérification" };

export default async function Page() {
  const actor = await getActor();
  if (!actor) redirect("/connexion");
  if (actor.role === "student") redirect("/aujourdhui");
  if (actor.mfaVerified) redirect("/admin");
  return (
    <div className="container">
      <div className="card stack">
        <h1>Authentification renforcée</h1>
        <p className="muted">Les comptes de l&apos;équipe exigent un code à usage unique issu de votre application d&apos;authentification.</p>
        <MfaForm />
      </div>
    </div>
  );
}
