"use client";
import { startTransition } from "react";
import { logoutAction } from "@/app/actions/auth";
import { clearOfflineData } from "@/lib/offlineStore";

/** Déconnexion : les contenus hors connexion de l'élève sont effacés de l'appareil avant de quitter. */
export function LogoutButton({ className = "btn ghost small" }: { className?: string }) {
  return (
    <form
      action={logoutAction}
      onSubmit={async (e) => {
        e.preventDefault();
        await clearOfflineData();
        startTransition(() => logoutAction());
      }}
    >
      <button className={className}>Déconnexion</button>
    </form>
  );
}
