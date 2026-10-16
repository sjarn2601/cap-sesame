import { LibraryApp } from "./LibraryApp";
import { OfflineApp } from "./OfflineApp";

export const metadata = { title: "Hors ligne" };

// Page statique : mise en cache par le service worker, elle s'ouvre sans réseau et lit la bibliothèque copiée sur l'appareil.
export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="container wide inner">
          <a href="/hors-ligne" className="brand">
            <span className="brand-mark" aria-hidden="true">CS</span>
            <span>CAP SESAME</span>
          </a>
          <a href="/aujourdhui" className="btn small">Version en ligne</a>
        </div>
      </header>
      <main id="contenu" data-offline-app="">
        <div className="container stack">
          <LibraryApp />
          <details className="small">
            <summary>Anciennes séries et cours téléchargés un par un</summary>
            <div className="stack" style={{ marginTop: 12 }}>
              <OfflineApp />
            </div>
          </details>
        </div>
      </main>
    </>
  );
}
