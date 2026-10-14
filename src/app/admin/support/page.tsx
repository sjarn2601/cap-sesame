import { requireStaff } from "@/server/next";
import { SupportForm } from "./SupportForm";

export const metadata = { title: "Support" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStaff();
  return (
    <div className="stack" style={{ maxWidth: 760 }}>
      <h1 style={{ margin: 0 }}>Support</h1>
      <p className="small muted">
        Vue limitée au diagnostic technique d&apos;une tentative : horodatages, synchronisation et versions de score. Aucun contenu de réponse ni donnée de profil n&apos;est affiché.
        Chaque consultation est journalisée.
      </p>
      {actor.role === "support" || actor.role === "admin" ? <SupportForm /> : <p className="notice">Réservé aux rôles support et administrateur.</p>}
    </div>
  );
}
