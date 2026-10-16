"use client";
import { useEffect } from "react";
import { refreshLibrary, syncAnswers } from "@/lib/offlineLibraryStore";
import { swCommand } from "@/lib/offlineStore";

/** Garde la bibliothèque hors ligne à jour et envoie les réponses faites sans réseau, en arrière-plan. */
export function OfflineSync() {
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      if (cancelled || !navigator.onLine) return;
      await syncAnswers().catch(() => {});
      const r = await refreshLibrary().catch(() => null);
      if (r?.updated) await swCommand({ type: "refresh-shell" }, 60_000).catch(() => {});
    };
    const t = setTimeout(run, 1500);
    window.addEventListener("online", run);
    return () => {
      cancelled = true;
      clearTimeout(t);
      window.removeEventListener("online", run);
    };
  }, []);
  return null;
}
