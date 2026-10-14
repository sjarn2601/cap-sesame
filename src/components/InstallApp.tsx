"use client";
import { useEffect, useState } from "react";

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

/** Proposer l'installation sur l'écran d'accueil (Android : bouton ; iPhone : marche à suivre). */
export function InstallApp({ compact }: { compact?: boolean }) {
  const [evt, setEvt] = useState<InstallEvent | null>(null);
  const [standalone, setStandalone] = useState(true);
  const [ios, setIos] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setStandalone(window.matchMedia("(display-mode: standalone)").matches || (navigator as { standalone?: boolean }).standalone === true);
    setIos(/iphone|ipad|ipod/i.test(navigator.userAgent));
    try {
      setDismissed(localStorage.getItem("sesame.install.dismissed") === "1");
    } catch {}
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setEvt(e as InstallEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (standalone || (!evt && !ios) || (compact && dismissed)) return null;
  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem("sesame.install.dismissed", "1");
    } catch {}
  };

  return (
    <section className={`card ${compact ? "flat" : ""} stack install-card`} aria-labelledby="install-title">
      <h2 id="install-title" style={{ margin: 0 }}>Installer CAP SESAME sur ton téléphone</h2>
      {evt ? (
        <p style={{ margin: 0 }}>Une icône sur ton écran d&apos;accueil, l&apos;appli en plein écran, et tes contenus téléchargés disponibles sans réseau.</p>
      ) : (
        <p style={{ margin: 0 }}>
          Sur iPhone : touche <strong>Partager</strong> <span aria-hidden="true">⬆︎</span> dans Safari, puis <strong>Sur l&apos;écran d&apos;accueil</strong>.
        </p>
      )}
      <div className="row">
        {evt && (
          <button
            className="btn primary"
            onClick={async () => {
              await evt.prompt();
              await evt.userChoice;
              setEvt(null);
            }}
          >
            Installer
          </button>
        )}
        {compact && <button className="btn ghost" onClick={dismiss}>Plus tard</button>}
      </div>
    </section>
  );
}
