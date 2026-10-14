// Compétences digitales : données personnelles, RGPD, cookies et traces (dig.rgpd).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.rgpd";

export const DIG_RGPD: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Protection", name: "Données personnelles et RGPD", synonyms: ["rgpd", "cnil", "donnees personnelles", "cookies", "consentement", "traces numeriques", "empreinte numerique", "confidentialite", "droit d acces", "droit a l oubli"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Protéger ses données personnelles : RGPD, cookies et traces",
      objectives: ["Reconnaître une donnée personnelle", "Citer et exercer ses droits RGPD", "Analyser un bandeau cookies", "Maîtriser ses traces et ses paramètres de confidentialité"],
      prerequisites: ["dig.secu"],
      regle:
        "Une donnée personnelle est toute information qui se rapporte à une personne physique identifiée ou identifiable, directement ou indirectement : nom, photo, voix, numéro de téléphone, adresse IP, identifiant de cookie, géolocalisation. Une statistique vraiment anonyme (agrégée, sans possibilité de retrouver quelqu'un) n'en est pas une. Certaines données sont dites sensibles (santé, opinions politiques, convictions religieuses, origine ethnique, orientation sexuelle, données biométriques et génétiques, appartenance syndicale) : leur traitement est interdit sauf exceptions.\n\nLe RGPD (règlement européen applicable depuis le 25 mai 2018) s'impose aux organismes établis dans l'Union, ainsi qu'à ceux qui, depuis l'étranger, proposent des biens ou des services à des personnes situées dans l'Union ou suivent leur comportement. Principes clés : finalité déterminée, minimisation (ne collecter que le nécessaire), exactitude, durée de conservation limitée, sécurité, transparence. Tout traitement repose sur une base légale, par exemple le consentement, l'exécution d'un contrat ou une obligation légale.\n\nLe consentement doit être libre, spécifique, éclairé et univoque (un acte positif clair : pas de case précochée). On peut le retirer à tout moment, aussi facilement qu'on l'a donné. En France, un mineur peut consentir seul à partir de 15 ans pour les services en ligne ; en dessous, il faut aussi l'accord d'un titulaire de l'autorité parentale.\n\nTes droits : accès (savoir quelles données sont détenues et en obtenir copie), rectification, effacement (« droit à l'oubli »), opposition, limitation, portabilité (récupérer ses données dans un format réutilisable), et droit de ne pas subir une décision entièrement automatisée. L'organisme répond en principe sous un mois. Sans réponse satisfaisante, on saisit la CNIL (Commission nationale de l'informatique et des libertés), autorité administrative indépendante qui contrôle et peut sanctionner jusqu'à 20 millions d'euros ou 4 % du chiffre d'affaires annuel mondial (le montant le plus élevé étant retenu). Une fuite de données présentant un risque pour les personnes doit lui être notifiée dans les 72 heures.\n\nCookies et traceurs : le consentement est requis avant le dépôt, sauf pour les traceurs strictement nécessaires (panier, connexion, mémorisation du choix, certaines mesures d'audience). Refuser doit être aussi simple qu'accepter ; continuer à naviguer ne vaut pas accord. La CNIL juge qu'une conservation du choix pendant environ 6 mois est une bonne pratique ; elle cite 13 mois comme durée de vie raisonnable pour un traceur de mesure d'audience.\n\nTraces numériques : actives quand tu les laisses volontairement (publication, commentaire, avis), passives quand elles sont enregistrées à ton insu (adresse IP, historique, géolocalisation, métadonnées). Leur ensemble forme ton empreinte numérique. Les paramètres de confidentialité (profil privé, audience des publications, autorisations des applications) permettent de la limiter.",
      formules:
        "RGPD : applicable depuis le 25 mai 2018 · sanction maximale 20 M€ ou 4 % du CA mondial\nConsentement : libre, spécifique, éclairé, univoque, retirable\nMajorité numérique en France pour le consentement : 15 ans\nDroits : accès · rectification · effacement · opposition · limitation · portabilité\nRéponse de l'organisme : 1 mois (prolongeable de 2 mois si complexe)\nFuite de données à risque : notification à la CNIL sous 72 h\nCookies : refuser aussi simple qu'accepter · choix conservé ≈ 6 mois (bonne pratique)",
      methode:
        "1. Identifier la donnée : permet-elle, seule ou combinée, de retrouver une personne ?\n2. Identifier la situation : que veut faire la personne (savoir, corriger, supprimer, récupérer, refuser) ?\n3. Associer le droit : savoir → accès ; corriger → rectification ; supprimer → effacement ; récupérer → portabilité ; refuser → opposition.\n4. Écrire à l'organisme (souvent à son délégué à la protection des données) ; sans réponse après un mois, saisir la CNIL.",
      exemple:
        "Léa, 17 ans, a quitté une salle de sport il y a deux ans et reçoit encore ses offres. Elle veut d'abord savoir ce que la salle conserve sur elle : droit d'accès. Elle découvre que sa date de naissance est fausse : droit de rectification. Elle veut ne plus recevoir de prospection : droit d'opposition, puis éventuellement d'effacement, puisque la finalité (son abonnement) a disparu. Elle écrit au service indiqué dans la politique de confidentialité. Sans réponse au bout d'un mois, elle dépose une plainte en ligne auprès de la CNIL.\n\nBandeau cookies : un site affiche un gros bouton « Tout accepter » et seulement un petit lien gris « Personnaliser ». Le refus n'est pas aussi simple que l'acceptation : le bandeau n'est pas conforme aux exigences de la CNIL.",
      erreur:
        "✗ Croire qu'une adresse IP n'est pas une donnée personnelle → ✓ Elle permet d'identifier indirectement un abonné : c'en est une.\n✗ Penser que continuer à naviguer vaut consentement aux cookies → ✓ Il faut un acte positif clair ; le silence ne vaut pas accord.\n✗ Confondre la CNIL avec un service de police → ✓ C'est une autorité administrative indépendante qui protège les données ; pour un contenu illicite on utilise Pharos.\n✗ Confondre accès et portabilité → ✓ L'accès permet de savoir et d'obtenir une copie ; la portabilité permet de réutiliser ses données chez un autre service.\n✗ Croire que tous les cookies exigent un consentement → ✓ Les traceurs strictement nécessaires en sont dispensés.",
      approfondir:
        "Retiens les droits par des verbes : savoir, corriger, effacer, s'opposer, limiter, emporter. Au concours, l'énoncé décrit presque toujours ce que la personne veut faire : traduis ce verbe en droit. Pour les cookies, le critère de conformité à retenir est la symétrie : accepter et refuser au même niveau, avec la même facilité. Le RGPD est un règlement européen (directement applicable dans tous les États), complété en France par la loi Informatique et Libertés de 1978. Le droit au déréférencement permet de demander à un moteur de recherche de ne plus associer un résultat à ton nom, sans que la page d'origine disparaisse.",
      cards: [
        ["Récupérer ses données pour les transférer à un autre service", "Droit à la portabilité", false],
        ["Âge du consentement numérique en France", "15 ans", false],
        ["Délai de notification d'une fuite de données à la CNIL", "72 heures", false],
        ["Trace passive", "Trace enregistrée à ton insu (adresse IP, géolocalisation, historique)", true],
        ["Cookie exempté de consentement", "Traceur strictement nécessaire (panier, connexion, mémorisation du choix)", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-RGPD-001", S, "dig.rgpd.donnee", 1, "Parmi ces informations, laquelle n'est PAS une donnée personnelle au sens du RGPD ?", [
      ["Le nombre total d'élèves inscrits dans un lycée de 1 200 élèves", true, "C'est une statistique agrégée qui ne permet d'identifier personne."],
      ["L'adresse IP de l'ordinateur d'un élève", false, "Elle permet d'identifier indirectement l'abonné : c'est une donnée personnelle."],
      ["La photo d'un élève sur le site du lycée", false, "Une image permet d'identifier directement la personne."],
      ["Le numéro de téléphone portable d'un élève", false, "Il se rattache à une personne identifiable."],
    ], "Une donnée est personnelle si elle permet d'identifier une personne, directement (nom, photo) ou indirectement (numéro, adresse IP, identifiant). Un total agrégé et anonyme ne permet de retrouver personne.", "Personnelle = permet d'identifier quelqu'un, même indirectement.", {
      hints: ["Pour chaque proposition, demande-toi si elle mène à une personne précise.", "L'identification peut être indirecte (un numéro, une adresse).", "Une seule proposition est un chiffre global sans personne derrière."],
    }),
    q("B-DIG-RGPD-002", S, "dig.rgpd.droits", 1, "Tu veux savoir quelles informations une enseigne de vêtements conserve sur toi depuis ton inscription à son programme de fidélité. Quel droit exerces-tu ?", [
      ["Le droit d'accès", true, "Il permet de savoir quelles données sont détenues et d'en obtenir une copie."],
      ["Le droit à la portabilité", false, "La portabilité sert à récupérer ses données pour les réutiliser ailleurs."],
      ["Le droit de rectification", false, "Il sert à corriger une donnée inexacte, pas à la connaître."],
      ["Le droit d'opposition", false, "Il sert à refuser un traitement, par exemple la prospection."],
    ], "Le droit d'accès est le point de départ : il permet de connaître les données traitées, leur finalité, leurs destinataires et leur durée de conservation. Les autres droits (corriger, effacer, s'opposer) s'exercent souvent ensuite.", "Savoir ce qu'on détient sur moi = droit d'accès.", {
      hints: ["Quel verbe décrit ton besoin : savoir, corriger, supprimer, récupérer ?", "Tu veux seulement savoir.", "Le droit porte le nom de ce que tu demandes : y accéder."],
      lessonAnchor: "methode",
    }),
    q("B-DIG-RGPD-003", S, "dig.rgpd.droits", 2, "Tu quittes une plateforme de musique pour une autre et veux récupérer tes playlists et ton historique d'écoute dans un format réutilisable par le nouveau service. Quel droit invoques-tu ?", [
      ["Le droit à la portabilité", true, "Il permet de recevoir ses données dans un format structuré et lisible par machine, pour les transmettre à un autre service."],
      ["Le droit d'accès", false, "L'accès donne une copie pour s'informer ; la portabilité vise la réutilisation chez un autre service."],
      ["Le droit à l'effacement", false, "L'effacement supprime les données, il ne les transfère pas."],
      ["Le droit de limitation", false, "La limitation gèle temporairement un traitement contesté."],
    ], "La portabilité, créée par le RGPD, favorise le changement de service : les données fournies par l'utilisateur sont remises dans un format courant (CSV, JSON…) ou transmises directement au nouveau service.", "Emporter ses données ailleurs = droit à la portabilité.", {
      hints: ["Le but est de changer de service sans tout perdre.", "Le droit concerne le transport des données.", "Son nom évoque ce qu'on peut porter avec soi."],
    }),
    q("B-DIG-RGPD-004", S, "dig.rgpd.cnil", 1, "Tu as demandé à un site de supprimer ton compte et tes données il y a trois mois, sans aucune réponse. Auprès de quelle autorité peux-tu déposer une plainte ?", [
      ["La CNIL", true, "Elle est chargée de faire respecter le RGPD en France et reçoit les plaintes en ligne."],
      ["L'ANSSI", false, "L'ANSSI protège la sécurité des systèmes d'information de l'État et des opérateurs, elle ne traite pas les plaintes RGPD."],
      ["Pharos", false, "Pharos reçoit les signalements de contenus illicites en ligne."],
      ["L'Arcom", false, "L'Arcom régule l'audiovisuel et certaines plateformes, pas l'exercice des droits RGPD."],
    ], "L'organisme doit répondre en principe sous un mois. Passé ce délai, la CNIL peut être saisie par une plainte en ligne ; elle peut contrôler l'organisme et le sanctionner.", "Droits RGPD non respectés : plainte auprès de la CNIL.", {
      hints: ["Quelle autorité est spécialisée dans les données personnelles ?", "Son nom contient « informatique et libertés ».", "Les autres organismes traitent de cybersécurité, de contenus illicites ou d'audiovisuel."],
    }),
    q("B-DIG-RGPD-005", S, "dig.rgpd.cookies", 2, "Un site affiche un bandeau avec un grand bouton « Tout accepter » et, en petit en dessous, un lien gris « Paramétrer mes choix ». Qu'en penser ?", [
      ["Le bandeau n'est pas conforme : refuser doit être aussi simple qu'accepter", true, "La CNIL exige une symétrie entre acceptation et refus."],
      ["Le bandeau est conforme, puisqu'il permet de paramétrer", false, "Imposer plusieurs clics pour refuser, contre un seul pour accepter, n'est pas conforme."],
      ["Le bandeau est conforme, car les cookies sont toujours obligatoires", false, "Seuls les traceurs strictement nécessaires sont dispensés de consentement."],
      ["Le bandeau est inutile : continuer à naviguer vaut accord", false, "La simple poursuite de la navigation ne constitue pas un consentement valable."],
    ], "Le consentement doit être libre : un refus plus difficile que l'acceptation pousse à accepter. Les recommandations de la CNIL demandent donc un bouton « Tout refuser » de même niveau que « Tout accepter ».", "Cookies : refuser doit être aussi simple qu'accepter.", {
      hints: ["Compare l'effort pour accepter et pour refuser.", "Un consentement doit être libre.", "La CNIL exige la symétrie des choix."],
      lessonAnchor: "exemple",
    }),
    q("B-DIG-RGPD-006", S, "dig.rgpd.cookies", 2, "Lequel de ces traceurs un site marchand peut-il déposer sans demander ton consentement ?", [
      ["Le cookie qui mémorise le contenu de ton panier", true, "Il est strictement nécessaire au service que tu demandes."],
      ["Le cookie qui suit ta navigation pour afficher des publicités ciblées", false, "La publicité ciblée exige un consentement préalable."],
      ["Le traceur d'un réseau social qui enregistre les pages que tu visites", false, "Ce suivi exige un consentement préalable."],
      ["Le cookie qui établit ton profil de consommateur pour le revendre", false, "Le profilage commercial exige un consentement préalable."],
    ], "Les traceurs strictement nécessaires à un service expressément demandé (panier, authentification, mémorisation du choix sur les cookies, certaines mesures d'audience limitées) sont dispensés de consentement. Tous les autres en exigent un.", "Seuls les traceurs strictement nécessaires échappent au consentement.", {
      hints: ["Quel cookie est indispensable au fonctionnement de la boutique ?", "Sans lui, tu ne pourrais pas passer commande.", "Les cookies publicitaires et de profilage exigent toujours un accord."],
    }),
    q("B-DIG-RGPD-007", S, "dig.rgpd.traces", 1, "Parmi ces traces numériques, laquelle est une trace passive ?", [
      ["L'adresse IP enregistrée par un site lors de ta visite", true, "Elle est collectée automatiquement, sans action volontaire de ta part."],
      ["Un commentaire que tu publies sous une vidéo", false, "Tu le publies volontairement : c'est une trace active."],
      ["La photo de profil que tu choisis", false, "Tu la mets en ligne toi-même : trace active."],
      ["Un avis que tu rédiges sur un restaurant", false, "Rédiger un avis est un acte volontaire : trace active."],
    ], "Les traces actives sont celles que tu laisses volontairement ; les traces passives sont enregistrées à ton insu (adresse IP, géolocalisation, historique, cookies, métadonnées). Les deux forment ton empreinte numérique.", "Active = je publie ; passive = on enregistre à mon insu.", {
      hints: ["Distingue ce que tu fais volontairement et ce qui est enregistré automatiquement.", "Trois propositions décrivent une publication volontaire.", "La trace passive ne demande aucune action consciente de ta part."],
    }),
    q("B-DIG-RGPD-008", S, "dig.rgpd.consentement", 3, "En France, à partir de quel âge un mineur peut-il consentir seul au traitement de ses données par un service en ligne, lorsque ce traitement repose sur le consentement ?", [
      ["15 ans", true, "La loi Informatique et Libertés a fixé ce seuil en 2018."],
      ["13 ans", false, "C'est le seuil le plus bas autorisé par le RGPD, et l'âge minimal de nombreux réseaux sociaux, mais la France ne l'a pas retenu."],
      ["16 ans", false, "C'est le seuil par défaut du RGPD, que la France a abaissé."],
      ["18 ans", false, "La majorité civile n'est pas le seuil retenu pour le consentement numérique."],
    ], "Le RGPD fixe le seuil à 16 ans mais permet aux États de le descendre jusqu'à 13 ans. La France a choisi 15 ans ; en dessous, le consentement doit être donné conjointement par le mineur et un titulaire de l'autorité parentale.", "Consentement numérique seul : 15 ans en France.", {
      hints: ["Le RGPD laisse chaque État choisir entre 13 et 16 ans.", "La France n'a retenu ni le minimum ni le seuil par défaut.", "C'est l'âge de la fin du collège."],
      reserved: true,
      lessonAnchor: "formules",
    }),
    q("B-DIG-RGPD-009", S, "dig.rgpd.consentement", 2, "Selon le RGPD, quelles qualités doit réunir un consentement valable ?", [
      ["Libre, spécifique, éclairé et univoque", true, "Ce sont les quatre conditions posées par le règlement."],
      ["Écrit, signé, daté et définitif", false, "Le consentement peut être donné par un clic et doit pouvoir être retiré."],
      ["Implicite, global, permanent et gratuit", false, "Un consentement implicite ou global n'est justement pas valable."],
      ["Donné une seule fois pour tous les services d'une entreprise", false, "Le consentement doit être spécifique à chaque finalité."],
    ], "Libre : sans contrainte ; spécifique : pour une finalité précise ; éclairé : après une information claire ; univoque : par un acte positif (pas de case précochée). Il est retirable à tout moment, aussi simplement qu'il a été donné.", "Consentement : libre, spécifique, éclairé, univoque, et retirable.", {
      hints: ["Pense aux conditions qui rendent un accord sincère.", "L'accord doit porter sur un usage précis, après information.", "Une case précochée ne suffit pas : il faut un acte clair."],
    }),
    q("B-DIG-RGPD-010", S, "dig.rgpd.principes", 2, "Pour s'inscrire à la lettre d'information d'un club de sport, un formulaire exige le nom, l'adresse électronique, le numéro de sécurité sociale et la religion. Quel principe du RGPD est méconnu ?", [
      ["La minimisation des données", true, "On ne doit collecter que les données nécessaires à la finalité : un courriel suffit pour envoyer une lettre d'information."],
      ["Le droit à la portabilité", false, "C'est un droit de la personne, pas un principe de collecte."],
      ["L'exactitude des données", false, "Rien n'indique que les données seraient inexactes."],
      ["La notification des fuites sous 72 heures", false, "Il ne s'agit pas d'une fuite de données."],
    ], "La minimisation impose des données adéquates, pertinentes et limitées à ce qui est nécessaire. Ici, la religion est en plus une donnée sensible, dont le traitement est interdit sauf exceptions.", "Minimisation : ne collecter que le nécessaire pour la finalité.", {
      hints: ["De quoi un club a-t-il besoin pour envoyer une lettre d'information ?", "Certaines données demandées n'ont aucun lien avec ce but.", "Le principe concerné consiste à réduire la collecte au minimum."],
      reserved: true,
    }),
    q("B-DIG-RGPD-011", S, "dig.rgpd.confidentialite", 1, "Tu installes une application de lampe de poche. Elle demande l'accès à tes contacts et à ta localisation. Que fais-tu ?", [
      ["Tu refuses ces autorisations, inutiles au fonctionnement d'une lampe", true, "On n'accorde que les autorisations nécessaires au service rendu."],
      ["Tu acceptes, car toute application en a besoin", false, "Une lampe n'a besoin ni de tes contacts ni de ta position."],
      ["Tu acceptes puis tu désinstalles l'application le lendemain", false, "Les données peuvent avoir été collectées dès l'acceptation."],
      ["Tu acceptes si l'application est gratuite", false, "La gratuité est souvent financée par la collecte de données, raison de plus pour se méfier."],
    ], "Les autorisations des applications (micro, caméra, contacts, localisation) se gèrent dans les paramètres du téléphone. Une demande sans rapport avec le service est un signal de collecte abusive.", "N'accorder à une application que les autorisations utiles à son service.", {
      hints: ["De quoi une lampe a-t-elle besoin pour fonctionner ?", "Compare les autorisations demandées et le service rendu.", "Le bon réflexe est la minimisation, côté utilisateur."],
    }),
    q("B-DIG-RGPD-012", S, "dig.rgpd.droits", 3, "Un moteur de recherche affiche, quand on tape ton nom, un article ancien qui te porte préjudice. Tu veux qu'il n'apparaisse plus dans les résultats associés à ton nom. Que demandes-tu, et à qui ?", [
      ["Le déréférencement, au moteur de recherche", true, "Le moteur peut retirer le lien des résultats associés à ton nom, sans que l'article disparaisse."],
      ["La rectification, au moteur de recherche", false, "La rectification corrige une donnée inexacte ; elle ne retire pas un lien."],
      ["La portabilité, au site qui a publié l'article", false, "La portabilité sert à transférer ses données vers un autre service."],
      ["Une plainte, directement à Pharos", false, "Pharos traite les contenus illicites, pas les demandes de déréférencement."],
    ], "Le droit au déréférencement, déclinaison du droit à l'effacement, s'exerce auprès du moteur via un formulaire. En cas de refus, on peut saisir la CNIL. Pour supprimer l'article lui-même, il faut s'adresser au site qui le publie.", "Retirer un lien des résultats liés à son nom = déréférencement, auprès du moteur.", {
      hints: ["Tu ne vises pas l'article lui-même, mais son apparition dans les résultats.", "C'est le moteur qui produit la liste des résultats.", "Le droit porte un nom proche de « référencement »."],
      lessonAnchor: "approfondir",
    }),
  ],
};
