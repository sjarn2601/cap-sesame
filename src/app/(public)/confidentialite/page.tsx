export const metadata = { title: "Données personnelles" };

const ROWS = [
  ["Compte et connexion", "Exécution du service", "Adresse électronique, mot de passe chiffré (scrypt), dates de connexion", "Durée du compte ; alerte après 24 mois d'inactivité puis suppression après le délai annoncé"],
  ["Préparation et résultats", "Exécution du service", "Profil facultatif, réponses, durées, scores, carnet d'erreurs, plan", "Durée du compte ; export et suppression à tout moment"],
  ["Consentement (moins de 15 ans)", "Consentement conjoint de l'élève et d'un titulaire de l'autorité parentale, lorsque le traitement repose sur le consentement", "Trace du consentement et version du texte", "Durée du compte"],
  ["Sécurité et journaux techniques", "Intérêt légitime (sécurité du service)", "Événements techniques sans contenu privé ; actions sensibles de l'équipe", "90 jours pour les journaux techniques"],
];

export default function Page() {
  return (
    <div className="container stack" style={{ maxWidth: 860 }}>
      <h1>Tes données personnelles</h1>
      <p className="notice warn">
        <strong>Version de démonstration</strong>
        Ces informations décrivent le fonctionnement prévu. Les mécanismes juridiques (bases légales, durées, sous-traitants) doivent être validés avant toute ouverture au public.
      </p>
      <div className="table-wrap">
        <table className="data">
          <caption className="sr-only">Finalités, bases légales, données et durées de conservation</caption>
          <thead>
            <tr><th>Pourquoi</th><th>Sur quelle base</th><th>Quelles données</th><th>Combien de temps</th></tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r[0]}>{r.map((c, i) => <td key={i}>{c}</td>)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <h2>Ce que nous ne faisons pas</h2>
      <ul>
        <li>Aucune publicité ciblée, aucune revente de résultats.</li>
        <li>Aucun identifiant Parcoursup ou mySESAME n&apos;est demandé.</li>
        <li>Aucun envoi de tes données à un fournisseur d&apos;intelligence artificielle dans cette version.</li>
        <li>Les aménagements sont saisis comme besoins pratiques, sans diagnostic médical.</li>
      </ul>
      <h2>Tes droits</h2>
      <p>Depuis ton profil, tu peux exporter toutes tes données (JSON ou CSV) et supprimer ton compte. La suppression est suivie jusqu&apos;à sa clôture.</p>
      <p className="small muted">Références : CNIL, recueillir le consentement ; consentement parental des moins de 15 ans.</p>
    </div>
  );
}
