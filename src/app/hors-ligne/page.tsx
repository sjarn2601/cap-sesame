import Link from "next/link";
import { OfflineApp } from "./OfflineApp";

export const metadata = { title: "Hors connexion" };

// Page statique : mise en cache par le service worker, elle s'ouvre sans réseau.
export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="container wide inner">
          <Link href="/aujourdhui" className="brand">
            <span className="brand-mark" aria-hidden="true">CS</span>
            <span>CAP SESAME</span>
          </Link>
        </div>
      </header>
      <main id="contenu">
        <div className="container stack">
          <div>
            <p className="eyebrow">Mode hors connexion</p>
            <h1>Mes contenus téléchargés</h1>
          </div>
          <section className="card flat stack" aria-labelledby="dispo">
            <h2 id="dispo" style={{ margin: 0 }}>Ce qui marche sans réseau</h2>
            <ul className="small" style={{ margin: 0 }}>
              <li><strong>Disponible :</strong> les cours et les séries libres que tu as téléchargés.</li>
              <li><strong>Avec réseau seulement :</strong> diagnostic, concours blancs (le temps est tenu par le serveur), révisions du carnet, plan du jour, progrès.</li>
              <li>Tes réponses restent sur cet appareil jusqu&apos;au retour du réseau, puis sont envoyées une seule fois. Elles sont effacées à la déconnexion.</li>
            </ul>
          </section>
          <OfflineApp />
        </div>
      </main>
    </>
  );
}
