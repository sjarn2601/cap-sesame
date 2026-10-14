import Link from "next/link";
import { getDb } from "@/db";
import { subjects } from "@/db/schema";
import { asc } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function Home() {
  const subs = await getDb().select().from(subjects).orderBy(asc(subjects.position));
  const open = subs.filter((s) => s.open);
  const closed = subs.filter((s) => !s.open);
  return (
    <div className="container stack">
      <section className="card hero-action" style={{ padding: 28 }}>
        <p className="eyebrow">Concours SESAME, session 2027</p>
        <h1>Chaque jour, tu sais quoi travailler, combien de temps et pourquoi.</h1>
        <p className="muted" style={{ maxWidth: 680 }}>
          Un diagnostic court, des séances adaptées à ton emploi du temps, des corrections qui expliquent chaque option, un carnet d&apos;erreurs qui revient au bon moment et des
          concours blancs chronométrés.
        </p>
        <div className="row">
          <Link className="btn primary" href="/inscription">Créer un compte gratuit</Link>
          <Link className="btn" href="/demo">Essayer sans compte</Link>
        </div>
      </section>

      <section className="grid">
        <div className="card flat">
          <h2>Comment ça marche</h2>
          <ol>
            <li>Diagnostic d&apos;orientation de 15 à 25 minutes, interrompable.</li>
            <li>Un plan qui respecte le temps que tu indiques.</li>
            <li>Des séances courtes avec correction détaillée.</li>
            <li>Tes erreurs reviennent à J+1, J+3, J+7 puis J+21.</li>
            <li>Des concours blancs chronométrés côté serveur.</li>
          </ol>
        </div>
        <div className="card flat">
          <h2>Matières couvertes</h2>
          <ul>
            {open.map((s) => (
              <li key={s.code}>{s.name}</li>
            ))}
          </ul>
          <p className="small muted">
            Langues pas encore ouvertes : {closed.map((s) => s.name).join(", ")}. Elles seront ajoutées après relecture d&apos;un parcours complet par un relecteur de la langue.
          </p>
        </div>
        <div className="card flat">
          <h2>Limites connues</h2>
          <ul className="small">
            <li>Banque de démonstration : quelques dizaines de questions originales, pas encore la banque complète.</li>
            <li>Les modalités 2027 affichées reprennent le site officiel au 14 octobre 2026 ; le règlement complet n&apos;est pas encore publié.</li>
            <li>Une simulation ne remplace pas la session préparatoire officielle obligatoire.</li>
            <li>Les inscriptions officielles se font sur les plateformes du concours : aucun identifiant Parcoursup ou mySESAME n&apos;est demandé ici.</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <p className="eyebrow">Exemple de correction</p>
        <h2>Un prix passe de 50 € à 60 €. Quelle est sa variation ?</h2>
        <div className="correction ok">
          <p>
            <strong>+20 %</strong> : (60 − 50) / 50 = 0,2. On divise toujours l&apos;écart par la <em>valeur de départ</em>.
          </p>
          <p className="small">
            Pourquoi pas +16,7 % ? C&apos;est l&apos;erreur de division par la valeur finale. Pourquoi pas +10 % ? C&apos;est l&apos;écart en euros confondu avec un pourcentage.
          </p>
          <p className="rule">À retenir : une variation en pourcentage se calcule par rapport à la valeur de départ.</p>
        </div>
      </section>
    </div>
  );
}
