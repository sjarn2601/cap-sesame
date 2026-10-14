import Link from "next/link";
import { requireStaff } from "@/server/next";
import { logoutAction } from "@/app/actions/auth";

const LINKS = [
  ["/admin", "Tableau de bord"],
  ["/admin/questions", "Questions"],
  ["/admin/contenus", "Cours et actualités"],
  ["/admin/import", "Import par lots"],
  ["/admin/signalements", "Signalements"],
  ["/admin/sessions", "Sessions"],
  ["/admin/support", "Support"],
];

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const actor = await requireStaff();
  return (
    <>
      <header className="topbar">
        <div className="container wide inner admin-inner">
          <Link href="/admin" className="brand"><span className="brand-mark" aria-hidden="true">CS</span> Administration</Link>
          <nav className="mainnav adminnav" aria-label="Administration" style={{ display: "flex" }}>
            {LINKS.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <span className="small muted">{actor.email} · {actor.role}</span>
          <form action={logoutAction}><button className="btn ghost small">Déconnexion</button></form>
        </div>
      </header>
      <main id="contenu"><div className="container wide">{children}</div></main>
    </>
  );
}
