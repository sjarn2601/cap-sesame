"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/** Enregistre le service worker et signale la perte de connexion. */
export function PwaClient() {
  const [offline, setOffline] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const enabled = process.env.NODE_ENV === "production" || process.env.NEXT_PUBLIC_SW === "1";
    if (enabled && "serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => {});
    const update = () => setOffline(!navigator.onLine);
    update();
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);
  // Sans réseau, le service worker sert le mode hors ligne à la place de la page demandée : pas de bandeau dessus.
  if (!offline || path === "/hors-ligne" || (typeof document !== "undefined" && document.querySelector("[data-offline-app]"))) return null;
  return (
    <div className="offline-banner" role="status">
      Hors connexion. <a href="/hors-ligne">Ouvrir le mode hors ligne</a>
    </div>
  );
}
