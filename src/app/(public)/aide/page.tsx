export const metadata = { title: "Aide" };

export default function Page() {
  return (
    <div className="container stack">
      <h1>Aide</h1>
      <section className="card flat">
        <h2>Raccourcis clavier pendant une séance</h2>
        <ul>
          <li><span className="kbd">1</span> à <span className="kbd">5</span> ou <span className="kbd">A</span> à <span className="kbd">E</span> : choisir une option</li>
          <li><span className="kbd">Entrée</span> : valider ou passer à la question suivante</li>
          <li><span className="kbd">I</span> : demander un indice (hors concours blanc strict)</li>
          <li><span className="kbd">←</span> <span className="kbd">→</span> : question précédente ou suivante (concours blancs)</li>
          <li><span className="kbd">Tab</span> : parcourir les boutons ; le focus est toujours visible</li>
        </ul>
      </section>
      <section className="card flat">
        <h2>Parcours tactile</h2>
        <p>Sur téléphone, la barre du bas donne accès en un geste à Aujourd&apos;hui, Apprendre, S&apos;entraîner, Concours blancs et Progrès. L&apos;action du jour s&apos;ouvre depuis le gros bouton d&apos;Aujourd&apos;hui.</p>
      </section>
      <section className="card flat">
        <h2>Reprendre une séance</h2>
        <p>Chaque réponse est enregistrée dès qu&apos;elle est confirmée. Si tu fermes la page, ta séance réapparaît sur Aujourd&apos;hui avec un bouton « Reprendre ».</p>
      </section>
      <section className="card flat">
        <h2>Concours blancs</h2>
        <p>Le temps est calculé par le serveur : changer l&apos;horloge de ton appareil ne prolonge pas l&apos;épreuve. En mode strict, la correction n&apos;apparaît qu&apos;à la fin et aucune aide n&apos;est disponible.</p>
      </section>
      <section className="card flat">
        <h2>Contester une question</h2>
        <p>Après chaque correction, le bouton « Signaler une ambiguïté » transmet ton message à un responsable pédagogique. Si la question est retirée, ton score est recalculé et l&apos;ancien reste visible dans l&apos;historique.</p>
      </section>
    </div>
  );
}
