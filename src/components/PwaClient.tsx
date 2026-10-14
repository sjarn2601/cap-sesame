"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
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
  if (!offline || path === "/hors-ligne") return null;
  return (
    <div className="offline-banner" role="status">
      Hors connexion. <Link href="/hors-ligne">Ouvrir mes contenus téléchargés</Link>
    </div>
  );
}
