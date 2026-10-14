import Link from "next/link";
import { getActor } from "@/server/next";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const actor = await getActor();
  return (
    <>
      <header className="topbar">
        <div className="container inner">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">CS</span> CAP SESAME
          </Link>
          <div style={{ flex: 1 }} />
          {actor ? (
            <Link className="btn primary small" href={actor.role === "student" ? "/aujourdhui" : "/admin"}>
              Mon espace
            </Link>
          ) : (
            <div className="row">
              <Link className="btn ghost small" href="/connexion">Connexion</Link>
              <Link className="btn primary small" href="/inscription">Créer un compte</Link>
            </div>
          )}
        </div>
      </header>
      <main id="contenu">{children}</main>
      <footer className="footer">
        <div className="container row between">
          <span>CAP SESAME : préparation indépendante, sans lien avec l'organisation officielle du concours.</span>
          <span className="row">
            <Link href="/confidentialite">Données personnelles</Link>
            <Link href="/aide">Aide</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
