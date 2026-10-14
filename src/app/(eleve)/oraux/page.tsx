import { getDb } from "@/db";
import { getProfile } from "@/server/profile";
import { getPublishedConfig } from "@/server/sessionConfig";
import { requireStudent } from "@/server/next";
import { frDate } from "@/components/labels";

export const metadata = { title: "Oraux" };
export const dynamic = "force-dynamic";

export default async function Page() {
  const actor = await requireStudent();
  const db = getDb();
  const config = await getPublishedConfig(db, (await getProfile(db, actor)).examSessionCode);
  const s2 = config.body.sources.find((s) => s.id === "S2");
  const fmt = { day: "numeric", month: "long", year: "numeric" } as const;
  return (
    <div className="container stack" style={{ maxWidth: 820 }}>
      <h1>Oraux</h1>
      <section className="card stack">
        <p>
          Les oraux sont propres à chaque école. Période annoncée pour {config.code} : du {frDate(config.body.oralPeriod.from, fmt)} au {frDate(config.body.oralPeriod.to, fmt)}. La note de dossier participe à l&apos;admissibilité.
        </p>
        {s2 && <p><a href={s2.url} target="_blank" rel="noopener noreferrer">Consulter la page officielle des épreuves orales</a></p>}
      </section>
      <section className="card flat stack">
        <h2>Bientôt dans CAP SESAME</h2>
        <p>La préparation orale arrive dans la prochaine version : fiches de programme sourcées par école, construction de ton dossier personnel (expériences, engagements, intérêts) et simulations d&apos;entretien textuelles ou vocales, sans caméra obligatoire.</p>
        <p className="muted small">D&apos;ici là, concentre-toi sur les écrits : ce sont eux qui ouvrent l&apos;admissibilité.</p>
      </section>
    </div>
  );
}
