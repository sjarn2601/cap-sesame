import Link from "next/link";
import { requireStudent } from "@/server/next";
import { StudentNav } from "@/components/StudentNav";
import { LogoutButton } from "@/components/LogoutButton";

export default async function StudentLayout({ children }: { children: React.ReactNode }) {
  await requireStudent();
  return (
    <>
      <header className="topbar">
        <div className="container wide inner">
          <Link href="/aujourdhui" className="brand">
            <span className="brand-mark" aria-hidden="true">CS</span>
            <span>CAP SESAME</span>
          </Link>
          <StudentNav variant="top" />
          <LogoutButton />
        </div>
      </header>
      <main id="contenu">{children}</main>
      <StudentNav variant="bottom" />
      <footer className="footer">
        <div className="container wide row between">
          <span>Préparation indépendante. Une simulation ne remplace pas la session préparatoire officielle obligatoire.</span>
          <span className="row">
            <Link href="/oraux">Oraux</Link>
            <Link href="/profil">Profil</Link>
            <Link href="/aide">Aide et raccourcis</Link>
            <Link href="/confidentialite">Données personnelles</Link>
          </span>
        </div>
      </footer>
    </>
  );
}
