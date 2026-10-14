// Compétences digitales : droit et citoyenneté numérique (dig.droit).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.droit";

export const DIG_DROIT: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Protection", name: "Droit et citoyenneté numérique", synonyms: ["droit d auteur", "creative commons", "licence", "droit a l image", "identite numerique", "e reputation", "cyberharcelement", "3018", "netiquette", "domaine public"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Droit d'auteur, droit à l'image et citoyenneté numérique",
      objectives: ["Réutiliser une œuvre en respectant sa licence", "Appliquer le droit à l'image", "Gérer son identité et son e-réputation", "Réagir face au cyberharcèlement"],
      prerequisites: ["dig.rgpd"],
      regle:
        "Droit d'auteur. Toute œuvre originale est protégée dès sa création, sans dépôt ni mention « © » obligatoires. Une image trouvée sur internet n'est donc pas libre par défaut. L'auteur a des droits moraux (paternité, respect de l'œuvre), perpétuels, et des droits patrimoniaux (autoriser la reproduction et la diffusion) qui durent en règle générale 70 ans après sa mort ; l'œuvre entre ensuite dans le domaine public. Exceptions utiles : la courte citation (entre guillemets, avec l'auteur et la source), la copie privée, la parodie, l'exception pédagogique.\n\nLicences Creative Commons. L'auteur autorise à l'avance certains usages. BY : citer l'auteur (présent dans les six licences). NC : pas d'usage commercial. ND : pas de modification, l'œuvre se partage telle quelle. SA : les versions modifiées doivent être partagées sous la même licence. Les six licences combinent ces éléments (BY, BY-SA, BY-ND, BY-NC, BY-NC-SA, BY-NC-ND). CC0 permet à l'auteur de renoncer à ses droits autant que la loi le permet.\n\nDroit à l'image. Toute personne peut s'opposer à la diffusion de son image lorsqu'elle est reconnaissable (respect de la vie privée, article 9 du Code civil). Publier la photo d'un ami nécessite son accord ; pour un mineur, celui de ses parents aussi. Exceptions : foule non centrée sur une personne, événement d'actualité, personnalité publique dans l'exercice de sa fonction.\n\nIdentité numérique et e-réputation. Ton identité numérique est l'ensemble des informations te concernant en ligne : profils, publications, traces, mais aussi ce que d'autres publient sur toi. L'e-réputation est l'image que les autres s'en font. Créer un faux profil au nom d'autrui pour troubler sa tranquillité ou porter atteinte à son honneur est une usurpation d'identité, délit puni d'un an d'emprisonnement et de 15 000 € d'amende (article 226-4-1 du Code pénal).\n\nCyberharcèlement. Messages, moqueries, rumeurs ou diffusions d'images répétés en ligne sont un délit. Le harcèlement en meute (« raid ») est puni même si chaque participant n'a écrit qu'un message. Réflexes : ne pas répondre, faire des captures d'écran (date, pseudo, adresse de la page), bloquer et signaler à la plateforme, en parler à un adulte de confiance, appeler le 3018 (numéro national gratuit, anonyme et confidentiel contre le harcèlement et les violences numériques, 7 jours sur 7 de 9 h à 23 h, aussi en application), porter plainte.\n\nNétiquette : règles de savoir-vivre en ligne. Écrire en majuscules revient à crier ; on ne transfère pas un message privé sans accord ; chaque espace a ses règles.",
      formules:
        "Droits patrimoniaux : en règle générale, 70 ans après la mort de l'auteur, puis domaine public\nBY = citer l'auteur · NC = pas d'usage commercial · ND = pas de modification · SA = même licence pour les dérivés\nCC0 = renonciation de l'auteur à ses droits\nCourte citation : guillemets + auteur + source\nUsurpation d'identité numérique : 1 an et 15 000 € d'amende\n3018 : numéro national contre le (cyber)harcèlement, gratuit, anonyme, confidentiel",
      methode:
        "1. L'œuvre a-t-elle une licence ? Sans licence, on demande l'autorisation (ou on se limite à la courte citation).\n2. Lire chaque élément de la licence : BY (citer), NC (usage commercial ?), ND (modification ?), SA (même licence ?).\n3. Vérifier que l'usage envisagé respecte tous les éléments à la fois.\n4. S'il y a des personnes reconnaissables : obtenir leur accord avant publication.",
      exemple:
        "Ton association veut illustrer l'affiche de son concert payant. Photo A : CC BY-NC. L'affiche annonce un événement payant : usage commercial, interdit. Photo B : CC BY-SA. Usage commercial autorisé ; tu la recadres et ajoutes du texte (modification permise) ; tu dois citer l'auteur et diffuser l'affiche sous CC BY-SA. Photo C : CC BY-ND. Usage commercial autorisé, mais ajouter du texte sur la photo est une modification : interdit. Seule la photo B convient.\n\nUne élève reçoit chaque soir des messages humiliants de plusieurs comptes. Elle ne répond pas, fait des captures d'écran, bloque et signale les comptes, en parle à ses parents et appelle le 3018, qui peut l'aider à faire retirer les contenus. Avec ses parents, elle porte plainte en apportant les captures.",
      erreur:
        "✗ Croire qu'une image sans « © » est libre de droits → ✓ La protection existe dès la création ; il faut une licence ou une autorisation.\n✗ Citer l'auteur suffit pour tout faire → ✓ Il faut aussi respecter NC, ND et SA.\n✗ Modifier une œuvre ND en citant l'auteur → ✓ ND interdit toute modification, même créditée.\n✗ Penser qu'un seul message dans un harcèlement collectif ne compte pas → ✓ Le raid numérique est puni même pour un message unique.\n✗ Supprimer les messages de harcèlement pour ne plus les voir → ✓ Les conserver en captures : ce sont des preuves.",
      approfondir:
        "Pour aller vite sur une question de licence, transforme chaque sigle en interdiction ou obligation, puis teste l'usage décrit : est-il commercial ? y a-t-il modification ? la nouvelle version est-elle partagée ? ND et SA ne peuvent jamais figurer ensemble (SA ne concerne que les œuvres modifiées, que ND interdit). Le domaine public court à partir du 1er janvier qui suit les 70 ans. Lien avec le RGPD : le droit à l'image et la protection des données se complètent ; une photo d'une personne identifiable est aussi une donnée personnelle.",
      cards: [
        ["Licence CC : sigle NC", "Pas d'utilisation commerciale", false],
        ["Licence CC : sigle ND", "Pas de modification (pas d'œuvre dérivée)", false],
        ["Licence CC : sigle SA", "Partage des modifications sous la même licence", false],
        ["Durée des droits patrimoniaux (règle générale)", "70 ans après la mort de l'auteur", false],
        ["Numéro national contre le cyberharcèlement", "3018", true],
      ],
    },
  ],
  questions: [
    q("B-DIG-DROIT-001", S, "dig.droit.auteur", 1, "Pour illustrer ton blog, tu trouves une belle photo grâce à un moteur de recherche d'images. Aucune licence n'est indiquée. Peux-tu la publier ?", [
      ["Non, sauf autorisation de son auteur : elle est protégée par le droit d'auteur", true, "Une œuvre est protégée dès sa création, même sans mention particulière."],
      ["Oui, puisqu'elle est accessible publiquement sur internet", false, "Être en ligne ne signifie pas être libre de droits."],
      ["Oui, à condition de la recadrer", false, "La modifier sans autorisation porte en plus atteinte au respect de l'œuvre."],
      ["Oui, si ton blog n'a pas de publicité", false, "L'absence de profit ne supprime pas le droit d'auteur."],
    ], "Le droit d'auteur protège une œuvre dès sa création, sans formalité. Sans licence explicite (Creative Commons par exemple) ni accord de l'auteur, la publication est une contrefaçon. On cherche plutôt une image sous licence libre ou dans le domaine public.", "En ligne ne veut pas dire libre de droits.", {
      hints: ["Quand une œuvre est-elle protégée par le droit d'auteur ?", "Aucune formalité n'est nécessaire pour être protégé.", "Sans licence ni autorisation, la réutilisation n'est pas permise."],
    }),
    q("B-DIG-DROIT-002", S, "dig.droit.licence", 3, "Une illustration est publiée sous licence CC BY-NC-ND. Quel usage est permis ?", [
      ["La reproduire telle quelle dans un exposé de classe, en citant l'auteur", true, "Usage non commercial, sans modification et avec attribution : les trois conditions sont respectées."],
      ["La recolorer pour ton exposé, en citant l'auteur", false, "ND interdit toute modification, même créditée."],
      ["L'imprimer sur des tee-shirts vendus, en citant l'auteur", false, "NC interdit l'usage commercial."],
      ["La partager telle quelle sur ton blog sans nommer l'auteur", false, "BY impose de citer l'auteur."],
    ], "On décompose : BY (citer), NC (pas d'usage commercial), ND (pas de modification). L'usage doit respecter les trois. C'est la plus restrictive des six licences Creative Commons.", "Une licence CC se respecte élément par élément : BY, NC, ND, SA.", {
      hints: ["Traduis chaque sigle en obligation ou interdiction.", "BY : citer ; NC : non commercial ; ND : pas de modification.", "Cherche l'usage qui respecte les trois conditions en même temps."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-DROIT-003", S, "dig.droit.licence", 2, "Tu modifies une carte publiée sous licence CC BY-SA pour l'intégrer à un dossier que tu mets en ligne. Que dois-tu faire ?", [
      ["Citer l'auteur et diffuser ta version sous la même licence CC BY-SA", true, "BY impose l'attribution, SA impose de partager l'œuvre dérivée dans les mêmes conditions."],
      ["Citer l'auteur, puis choisir librement la licence de ta version", false, "SA oblige à reprendre la même licence pour l'œuvre modifiée."],
      ["Rien de particulier, puisque la modification est autorisée", false, "La modification est autorisée sous conditions : attribution et même licence."],
      ["Demander une autorisation écrite à l'auteur avant toute modification", false, "La licence accorde déjà cette autorisation à l'avance."],
    ], "SA (Share Alike, partage dans les mêmes conditions) est la clause « virale » : toute œuvre dérivée est diffusée sous la même licence. C'est le modèle de Wikipédia.", "SA : l'œuvre modifiée garde la même licence.", {
      hints: ["Que signifient BY et SA ?", "SA signifie « partage dans les mêmes conditions ».", "Deux obligations : citer et conserver la licence."],
    }),
    q("B-DIG-DROIT-004", S, "dig.droit.auteur", 1, "En France, en règle générale, quand une œuvre entre-t-elle dans le domaine public ?", [
      ["70 ans après la mort de son auteur", true, "Les droits patrimoniaux courent pendant la vie de l'auteur et 70 ans après sa mort."],
      ["70 ans après sa création", false, "Le point de départ est la mort de l'auteur, pas la création de l'œuvre."],
      ["Dès la mort de son auteur", false, "Les héritiers conservent les droits patrimoniaux pendant 70 ans."],
      ["50 ans après sa première publication", false, "Ni la durée ni le point de départ ne sont les bons."],
    ], "Les droits patrimoniaux durent toute la vie de l'auteur puis 70 ans à compter du 1er janvier suivant sa mort (avec quelques exceptions historiques). Les droits moraux, eux, sont perpétuels : même dans le domaine public, on cite l'auteur.", "Domaine public : 70 ans après la mort de l'auteur, en règle générale.", {
      hints: ["Le point de départ est un événement de la vie de l'auteur.", "Les héritiers profitent des droits pendant plusieurs décennies.", "La durée est de sept décennies."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-DROIT-005", S, "dig.droit.image", 2, "Tu as pris en photo, en gros plan, une amie pendant une soirée. Tu veux la publier sur ton compte public. Que dois-tu faire ?", [
      ["Lui demander son accord avant de publier", true, "Elle est reconnaissable : le droit à l'image impose son autorisation."],
      ["Publier, puisque c'est toi qui as pris la photo", false, "Être l'auteur de la photo ne donne pas de droit sur l'image de la personne."],
      ["Publier, puis retirer la photo seulement si elle se plaint", false, "L'accord doit être obtenu avant la diffusion."],
      ["Publier sans l'identifier dans la légende", false, "Elle reste reconnaissable sur un gros plan."],
    ], "Toute personne reconnaissable peut s'opposer à la diffusion de son image. Le photographe a un droit d'auteur sur la photo, mais la personne photographiée garde un droit sur son image. Pour une mineure, l'accord des parents est aussi requis.", "Personne reconnaissable : son accord avant toute publication.", {
      hints: ["Quel droit protège la personne photographiée ?", "Le gros plan la rend reconnaissable.", "L'autorisation se demande avant, pas après."],
    }),
    q("B-DIG-DROIT-006", S, "dig.droit.auteur", 2, "Dans ton exposé mis en ligne, tu veux reprendre deux phrases d'un article de presse. Comment respecter le droit d'auteur ?", [
      ["Les mettre entre guillemets en indiquant l'auteur et la source", true, "C'est le cadre de l'exception de courte citation."],
      ["Les reformuler légèrement sans citer la source", false, "Une reprise déguisée sans source reste un plagiat."],
      ["Les copier sans guillemets, puisque le passage est court", false, "La brièveté ne dispense pas d'indiquer qu'il s'agit d'une citation et d'où elle vient."],
      ["Les insérer sous forme de capture d'écran, sans autre mention", false, "Changer de format ne change rien : il faut toujours signaler l'emprunt, l'auteur et la source."],
    ], "La courte citation est permise sans autorisation, à condition d'être brève, justifiée par ton propos (analyse, critique, illustration), et accompagnée du nom de l'auteur et de la source, entre guillemets.", "Courte citation : guillemets, auteur, source.", {
      hints: ["Il existe une exception au droit d'auteur pour les extraits brefs.", "Elle impose de signaler l'emprunt.", "Trois éléments : guillemets, auteur, source."],
    }),
    q("B-DIG-DROIT-007", S, "dig.droit.identite", 2, "Quelle affirmation sur ton identité numérique est exacte ?", [
      ["Elle comprend aussi ce que d'autres personnes publient sur toi", true, "Photos où tu es identifié, commentaires et articles te concernant en font partie."],
      ["Elle se limite aux comptes que tu as créés toi-même", false, "Ce que les autres publient sur toi en fait aussi partie."],
      ["Elle disparaît quand tu supprimes ton compte principal", false, "Copies, captures et mentions par d'autres subsistent."],
      ["Elle est la même chose que ton adresse IP", false, "L'adresse IP n'est qu'une trace technique parmi d'autres."],
    ], "L'identité numérique rassemble tout ce qui te concerne en ligne : profils, publications, traces, mentions par des tiers. L'e-réputation est l'image que les autres s'en font. On la surveille en tapant régulièrement son nom dans un moteur.", "Identité numérique = ce que je publie + ce que les autres publient sur moi + mes traces.", {
      hints: ["Qui peut publier des informations te concernant ?", "Pense aux photos où tes amis t'identifient.", "Ton identité numérique dépasse tes propres comptes."],
    }),
    q("B-DIG-DROIT-008", S, "dig.droit.harcelement", 2, "Une élève reçoit chaque jour des messages humiliants de plusieurs comptes sur un réseau social. Quel conseil est le plus adapté ?", [
      ["Faire des captures d'écran, bloquer et signaler les comptes, en parler et appeler le 3018", true, "On conserve les preuves, on se protège et on se fait aider."],
      ["Répondre fermement à chaque message pour dissuader les auteurs", false, "Répondre alimente souvent le harcèlement."],
      ["Supprimer tous les messages pour ne plus les voir", false, "On détruit les preuves utiles au signalement et à la plainte."],
      ["Attendre que cela cesse de lui-même", false, "Le harcèlement s'aggrave souvent sans intervention."],
    ], "Les captures d'écran (avec date, pseudo et adresse de la page) servent de preuves. Le 3018, gratuit, anonyme et confidentiel, conseille et peut obtenir le retrait rapide de contenus. Une plainte reste possible : le cyberharcèlement est un délit.", "Cyberharcèlement : preuves, blocage, signalement, 3018, plainte.", {
      hints: ["Que faut-il garder avant toute chose ?", "Il existe un numéro national gratuit et anonyme.", "Le bon conseil combine preuves, signalement et aide extérieure."],
      lessonAnchor: "exemple",
    }),
    q("B-DIG-DROIT-009", S, "dig.droit.harcelement", 3, "Une publication visant une camarade a déjà reçu des dizaines de commentaires moqueurs. Tu y ajoutes un seul commentaire du même ton. Que risques-tu au regard de la loi ?", [
      ["Des poursuites pour harcèlement, même pour un seul message, car tu participes à un harcèlement collectif", true, "Le harcèlement « en meute » est puni même si chaque auteur n'a agi qu'une fois."],
      ["Rien, car le harcèlement suppose que la même personne agisse plusieurs fois", false, "La loi vise aussi les propos répétés par plusieurs personnes qui savent participer à une répétition."],
      ["Rien, car un commentaire sur un réseau social relève de la liberté d'expression", false, "La liberté d'expression ne couvre pas le harcèlement."],
      ["Seulement la suppression de ton commentaire par la plateforme", false, "La sanction peut aussi être pénale, au-delà de la modération."],
    ], "Depuis 2018, le Code pénal punit les propos imposés à une victime par plusieurs personnes, de façon concertée ou non, dès lors que chacune sait que ses propos s'ajoutent à une répétition. Un commentaire isolé peut donc suffire.", "Raid numérique : un seul message peut constituer du harcèlement.", {
      hints: ["Le harcèlement suppose une répétition, mais de qui ?", "La loi prend en compte les actions de plusieurs personnes.", "Ton commentaire s'ajoute sciemment à des dizaines d'autres."],
      reserved: true,
      lessonAnchor: "erreur",
    }),
    q("B-DIG-DROIT-010", S, "dig.droit.netiquette", 1, "Sur un forum ou dans un courriel, écrire tout un message en MAJUSCULES est généralement perçu comme :", [
      ["le fait de crier", true, "C'est une règle de nétiquette largement partagée."],
      ["une marque de politesse", false, "C'est perçu comme agressif, pas poli."],
      ["un moyen de rendre le message plus lisible", false, "Un texte entièrement en majuscules se lit au contraire plus difficilement."],
      ["une obligation pour les messages importants", false, "Aucune règle ne l'impose ; on utilise plutôt un objet clair."],
    ], "La nétiquette rassemble les règles de savoir-vivre en ligne : pas de majuscules continues, un objet clair, pas de transfert de message privé sans accord, respect des règles de chaque espace.", "Majuscules continues = crier.", {
      hints: ["Pense à la façon dont le ton passe à l'écrit.", "Les majuscules donnent une impression de volume.", "C'est l'équivalent écrit d'élever la voix."],
    }),
    q("B-DIG-DROIT-011", S, "dig.droit.identite", 2, "Quelqu'un a créé un compte avec ton nom et tes photos et publie des messages en se faisant passer pour toi. De quoi s'agit-il et que fais-tu ?", [
      ["D'une usurpation d'identité, délit : tu signales le compte à la plateforme et tu peux porter plainte", true, "Se faire passer pour autrui en ligne afin de nuire est puni d'un an de prison et 15 000 € d'amende."],
      ["D'une simple parodie autorisée : tu ne peux rien faire", false, "Une parodie doit être identifiable comme telle ; ici on se fait passer pour toi."],
      ["D'un problème de droit d'auteur seulement : tu demandes des droits sur tes photos", false, "Le cœur du problème est l'usurpation d'identité, pas la rémunération."],
      ["D'une fuite de données : tu dois prévenir la CNIL sous 72 heures", false, "La notification sous 72 heures incombe aux organismes victimes d'une fuite, pas aux particuliers."],
    ], "L'usurpation d'identité, y compris sur un réseau de communication en ligne, est un délit. On rassemble des captures, on signale le faux profil à la plateforme (formulaire dédié) et on peut porter plainte.", "Faux profil à ton nom = usurpation d'identité : signaler et porter plainte.", {
      hints: ["Quelqu'un se fait passer pour toi.", "La loi punit le fait d'utiliser l'identité d'autrui pour nuire.", "Deux actions : signalement à la plateforme et plainte."],
      reserved: true,
    }),
  ],
};
