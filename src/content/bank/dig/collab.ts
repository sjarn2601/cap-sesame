// Compétences digitales : communication et collaboration (dig.collab).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.collab";

export const DIG_COLLAB: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Communication et collaboration", name: "Collaborer et communiquer en ligne", synonyms: ["partage", "droits d acces", "coedition", "historique des versions", "visioconference", "agenda partage", "messagerie", "synchrone", "asynchrone", "travail collaboratif", "cloud"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Travailler à plusieurs : partage, coédition et communication",
      objectives: ["Choisir les bons droits de partage", "Coéditer un document et restaurer une version", "Choisir un canal de communication adapté", "Organiser une réunion en ligne"],
      prerequisites: ["dig.web"],
      regle:
        "Partage et droits. Un document en ligne (Google Docs, Microsoft 365, Nextcloud, ENT…) se partage avec trois niveaux de droits : lecteur (consulter), commentateur (consulter et annoter sans modifier le texte), éditeur (modifier). Le propriétaire peut accorder, modifier ou retirer ces droits à tout moment. On partage soit avec des personnes nommées (leur compte), soit par un lien ; un lien « toute personne disposant du lien » donne accès à quiconque l'obtient, même s'il a été transféré : à éviter pour un document confidentiel ou contenant des données personnelles. Principe du moindre privilège : n'accorder que les droits nécessaires, et les retirer quand ils ne le sont plus.\n\nCoédition et versions. Plusieurs personnes peuvent modifier le même document en même temps ; chacune voit les autres curseurs. On évite ainsi les copies envoyées par courriel (« rapport_v3_final_Lea.docx ») et les versions contradictoires. L'historique des versions enregistre automatiquement les états successifs : on voit qui a modifié quoi et on peut restaurer une version antérieure. Le mode suggestion propose des modifications que l'auteur accepte ou refuse ; les commentaires permettent de discuter d'un passage.\n\nCommunication. Synchrone : les interlocuteurs sont présents en même temps (appel, visioconférence, réunion). Asynchrone : chacun répond quand il le peut (courriel, forum, commentaires). La messagerie instantanée d'équipe (canaux par projet) convient aux échanges courts ; le courriel aux messages formels, aux personnes extérieures et aux traces écrites. Courriel professionnel : objet précis, formule d'appel et de politesse, message bref, pièces jointes légères (au-delà de quelques dizaines de Mo, on envoie un lien de partage). Le droit à la déconnexion protège les salariés hors de leur temps de travail.\n\nVisioconférence. On teste micro et caméra, on coupe son micro quand on ne parle pas, on lève la main virtuelle pour prendre la parole. Avant de partager son écran, on ferme ce qui est privé et on coupe les notifications, ou on ne partage qu'une fenêtre. Enregistrer une réunion suppose d'en informer les participants au préalable : leur image et leur voix sont des données personnelles.\n\nAgenda partagé. Il montre les disponibilités des collègues (sans forcément le détail de leurs rendez-vous), permet d'envoyer une invitation avec lien de visioconférence et d'accepter ou refuser. Il évite les longs échanges de courriels pour trouver un créneau.",
      formules:
        "Lecteur : consulter · Commentateur : annoter · Éditeur : modifier\nLien « toute personne disposant du lien » = accès à quiconque possède le lien\nMoindre privilège : juste les droits nécessaires, retirés quand ils ne le sont plus\nHistorique des versions : voir qui a modifié quoi, restaurer un état antérieur\nSynchrone : appel, visioconférence · Asynchrone : courriel, forum, commentaires\nGros fichier : lien de partage plutôt que pièce jointe",
      methode:
        "1. Qui doit accéder au document ? Des personnes précises ou un public large ?\n2. Que doivent-elles faire : lire, commenter, modifier ?\n3. Partager avec ces personnes nommément, avec le droit minimal nécessaire.\n4. Travailler dans un document unique ; utiliser commentaires et suggestions pour discuter.\n5. En cas d'erreur, restaurer une version depuis l'historique.\n6. En fin de projet, retirer les accès devenus inutiles.",
      exemple:
        "Cinq élèves préparent un dossier pour un concours. Sarah crée le document en ligne et le partage avec ses quatre camarades en éditeurs, et avec leur professeure en commentatrice : elle peut annoter sans toucher au texte. Chaque élève rédige sa partie en même temps que les autres. Mardi, Noé efface par erreur une page entière ; Sarah ouvre l'historique des versions et restaure l'état de lundi soir. Pour fixer une réunion, elle regarde les disponibilités dans l'agenda partagé et envoie une invitation avec un lien de visioconférence. Le dossier final, exporté en PDF, est déposé sur la plateforme du concours.",
      erreur:
        "✗ S'envoyer des copies du même fichier par courriel → ✓ Coéditer un document unique en ligne.\n✗ Partager un document sensible avec « toute personne disposant du lien » → ✓ Partager avec des personnes nommées.\n✗ Donner le droit de modification à un relecteur → ✓ Le droit commentateur suffit.\n✗ Refaire tout le travail perdu après une mauvaise manipulation → ✓ Restaurer une version antérieure.\n✗ Enregistrer une visioconférence sans prévenir → ✓ Informer les participants avant de lancer l'enregistrement.\n✗ Joindre une vidéo de 2 Go à un courriel → ✓ Envoyer un lien de partage.",
      approfondir:
        "Les questions de collaboration testent surtout le bon outil pour la bonne situation. Pose-toi trois questions : faut-il une réponse immédiate (synchrone) ou différée (asynchrone) ? Qui doit pouvoir faire quoi (droits) ? Comment revenir en arrière (versions) ? La bonne réponse respecte presque toujours le principe du moindre privilège et la protection des données des autres. Lien : partage et CCI répondent à la même logique de confidentialité ; l'enregistrement d'une visioconférence relève du RGPD et du droit à l'image.",
      cards: [
        ["Droit pour annoter sans modifier", "Commentateur", false],
        ["Revenir à l'état d'hier d'un document partagé", "Historique des versions", false],
        ["Communication asynchrone : exemple", "Courriel, forum, commentaires", false],
        ["Principe du moindre privilège", "N'accorder que les droits nécessaires", true],
        ["Envoyer un fichier très lourd", "Lien de partage plutôt que pièce jointe", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-COLLAB-001", S, "dig.collab.droits", 2, "Tu partages ton exposé en ligne avec ta professeure. Elle doit pouvoir annoter le texte, mais pas le modifier. Quel droit lui donnes-tu ?", [
      ["Commentateur", true, "Il permet d'ajouter des commentaires sans changer le texte."],
      ["Éditeur", false, "L'éditeur peut modifier le texte : c'est plus que nécessaire."],
      ["Lecteur", false, "Le lecteur peut seulement consulter, sans annoter."],
      ["Propriétaire", false, "Transférer la propriété lui donnerait le contrôle total du document."],
    ], "On accorde le droit minimal qui permet la tâche : annoter sans modifier correspond au rôle de commentateur. C'est le principe du moindre privilège.", "Annoter sans modifier = commentateur.", {
      hints: ["Liste les trois niveaux de droits.", "Elle doit faire plus que lire, moins que modifier.", "Le rôle porte le nom de ce qu'elle va faire."],
    }),
    q("B-DIG-COLLAB-002", S, "dig.collab.versions", 1, "Dans un document partagé, un camarade a effacé par erreur la moitié de votre travail. Comment le récupérer le plus simplement ?", [
      ["Restaurer une version antérieure grâce à l'historique des versions", true, "L'historique conserve les états successifs du document."],
      ["Tout réécrire de mémoire", false, "Long et inutile : l'outil conserve les anciennes versions."],
      ["Supprimer le document et en créer un nouveau", false, "On perdrait aussi l'historique."],
      ["Appuyer sur Ctrl+Z sur ton propre ordinateur", false, "Ctrl+Z annule tes propres actions récentes, pas celles d'un autre utilisateur."],
    ], "Les documents en ligne enregistrent automatiquement leurs versions, avec l'auteur et l'heure de chaque modification. On choisit l'état d'avant l'erreur et on le restaure.", "Erreur dans un document partagé = historique des versions.", {
      hints: ["Les documents en ligne gardent une mémoire des modifications.", "Cette mémoire est consultable par date.", "On peut y choisir un état antérieur et le rétablir."],
    }),
    q("B-DIG-COLLAB-003", S, "dig.collab.droits", 3, "Tu partages un tableau contenant les numéros de téléphone des membres de ton club avec le réglage « Toute personne disposant du lien peut modifier ». Quel est le risque principal ?", [
      ["Toute personne qui obtient le lien, même transféré, peut lire et modifier ces données", true, "Le lien devient la seule protection : s'il circule, l'accès circule."],
      ["Seuls les membres du club pourront ouvrir le document", false, "Ce réglage ne vérifie pas l'identité des personnes."],
      ["Le document sera supprimé au bout de 24 heures", false, "Aucun réglage de partage n'a cet effet."],
      ["Personne ne pourra modifier le tableau", false, "Au contraire, tout détenteur du lien peut le modifier."],
    ], "Un lien ouvert ne contrôle pas qui l'utilise. Pour des données personnelles, on partage avec des personnes nommées, en lecture seule si possible, conformément au principe du moindre privilège.", "Données sensibles : partage nominatif, pas lien ouvert.", {
      hints: ["Qui peut posséder un lien ?", "Un lien se transfère en un clic.", "Le réglage ne vérifie pas l'identité de la personne."],
      reserved: true,
    }),
    q("B-DIG-COLLAB-004", S, "dig.collab.coedition", 1, "Cinq élèves rédigent ensemble un rapport. Quelle organisation évite le mieux les versions contradictoires ?", [
      ["Travailler tous dans un même document en ligne, coédité", true, "Il n'existe qu'une seule version, à jour pour tous."],
      ["S'envoyer le fichier en pièce jointe après chaque modification", false, "Les copies se multiplient et divergent."],
      ["Écrire chacun dans son fichier, puis tout copier-coller la veille", false, "Fusion tardive, risquée et sans relecture commune."],
      ["Désigner une personne qui retape les parties des autres", false, "Lent, source d'erreurs, et personne d'autre ne voit l'état du travail."],
    ], "La coédition en ligne permet de modifier simultanément un document unique ; l'historique des versions garde la trace de chaque contribution.", "Travail à plusieurs = document unique coédité.", {
      hints: ["Le problème vient de la multiplication des copies.", "Il faut une seule version de référence.", "Tous les membres y travaillent en même temps."],
    }),
    q("B-DIG-COLLAB-005", S, "dig.collab.communication", 1, "Lequel de ces outils correspond à une communication asynchrone ?", [
      ["Le courriel", true, "Le destinataire répond quand il le souhaite."],
      ["La visioconférence", false, "Les participants sont connectés au même moment : communication synchrone."],
      ["L'appel téléphonique", false, "Les deux interlocuteurs échangent en direct : synchrone."],
      ["La réunion en présentiel", false, "Tout le monde est présent en même temps : synchrone."],
    ], "Synchrone : présence simultanée (appel, visioconférence, réunion). Asynchrone : réponse différée (courriel, forum, commentaires dans un document).", "Asynchrone = réponse différée.", {
      hints: ["« Synchrone » signifie « en même temps ».", "Asynchrone : pas besoin d'être présent au même moment.", "Un seul outil permet de répondre plus tard."],
    }),
    q("B-DIG-COLLAB-006", S, "dig.collab.visio", 2, "Tu vas partager ton écran pendant une visioconférence avec un client. Quelle précaution prends-tu ?", [
      ["Fermer ce qui est privé et couper les notifications, ou ne partager que la fenêtre utile", true, "Tout ce qui s'affiche à l'écran devient visible des participants."],
      ["Couper ta caméra", false, "La caméra ne change rien à ce que montre le partage d'écran."],
      ["Augmenter le volume de ton micro", false, "Sans rapport avec la confidentialité de l'écran."],
      ["Passer ton navigateur en navigation privée", false, "Les onglets et notifications restent visibles à l'écran."],
    ], "Un partage d'écran peut révéler des messages, des onglets ou des documents confidentiels. On prépare son écran à l'avance, on active le mode « ne pas déranger » et on choisit de partager une seule fenêtre.", "Partage d'écran : préparer l'écran, couper les notifications.", {
      hints: ["Que voient les participants pendant un partage d'écran ?", "Une notification peut s'afficher à tout moment.", "Il est possible de partager une seule fenêtre."],
    }),
    q("B-DIG-COLLAB-007", S, "dig.collab.visio", 3, "Tu animes une visioconférence de groupe et veux l'enregistrer pour la revoir ensuite. Que dois-tu faire ?", [
      ["Informer les participants avant de lancer l'enregistrement", true, "Leur image et leur voix sont des données personnelles : ils doivent être informés, et pouvoir couper caméra ou micro."],
      ["Rien, puisque tu es l'organisateur", false, "Organiser la réunion ne dispense pas d'informer les personnes enregistrées."],
      ["Les prévenir après la réunion en leur envoyant la vidéo", false, "L'information doit précéder l'enregistrement."],
      ["Enregistrer seulement le son, ce qui ne pose aucune question", false, "La voix est aussi une donnée personnelle."],
    ], "Un enregistrement capte l'image et la voix des participants, qui sont des données personnelles. Les outils de visioconférence affichent d'ailleurs un signal d'enregistrement. On annonce l'enregistrement, son but et sa durée de conservation avant de commencer.", "Enregistrer une réunion : informer les participants avant.", {
      hints: ["Que capte un enregistrement ?", "L'image et la voix sont des données personnelles.", "L'information doit venir avant, pas après."],
      lessonAnchor: "erreur",
    }),
    q("B-DIG-COLLAB-008", S, "dig.collab.agenda", 2, "Tu dois fixer une réunion d'une heure avec six collègues cette semaine. Quelle méthode est la plus efficace ?", [
      ["Consulter leurs disponibilités dans l'agenda partagé, puis envoyer une invitation", true, "On trouve directement un créneau commun et chacun répond à l'invitation."],
      ["Écrire à chacun séparément pour lui demander ses disponibilités", false, "Six conversations parallèles, difficiles à recouper."],
      ["Fixer une heure au hasard et attendre les refus", false, "On risque de multiplier les reports."],
      ["Lancer une visioconférence immédiate avec tous", false, "Rien ne garantit qu'ils soient disponibles maintenant."],
    ], "L'agenda partagé montre les créneaux libres et occupés de chacun. L'invitation inscrit la réunion dans les agendas, avec le lieu ou le lien de visioconférence, et chacun peut accepter ou refuser.", "Trouver un créneau commun = agenda partagé + invitation.", {
      hints: ["Un outil montre déjà les disponibilités de tous.", "Il permet aussi d'envoyer une invitation.", "Évite les échanges de messages un par un."],
    }),
    q("B-DIG-COLLAB-009", S, "dig.collab.communication", 2, "Tu dois transmettre une vidéo de 2 Go à un partenaire. Quelle solution choisis-tu ?", [
      ["La déposer sur un espace de stockage partagé et lui envoyer un lien", true, "Les messageries limitent la taille des pièces jointes à quelques dizaines de Mo."],
      ["La joindre directement à un courriel", false, "La pièce jointe dépassera la limite des serveurs de messagerie."],
      ["La découper en cent courriels successifs", false, "Fastidieux pour toi comme pour le destinataire."],
      ["La compresser en ZIP pour la rendre dix fois plus légère", false, "Une vidéo est déjà compressée : le ZIP ne la réduit presque pas."],
    ], "Les messageries limitent généralement les pièces jointes à quelques dizaines de Mo. Pour un gros fichier, on utilise un espace de stockage en ligne ou un service de transfert, et on envoie un lien, si possible protégé et limité dans le temps.", "Gros fichier = lien de partage, pas pièce jointe.", {
      hints: ["Les pièces jointes ont une taille maximale.", "2 Go dépasse largement cette limite.", "On transmet un lien vers le fichier."],
    }),
    q("B-DIG-COLLAB-010", S, "dig.collab.droits", 2, "Un stagiaire a quitté l'entreprise il y a un mois. Il a toujours accès en modification aux dossiers partagés de l'équipe. Que faut-il faire ?", [
      ["Retirer ses droits d'accès aux dossiers partagés", true, "Les droits doivent être retirés dès qu'ils ne sont plus nécessaires."],
      ["Lui passer les droits en lecture seule, par politesse", false, "Il n'a plus besoin d'aucun accès : la lecture expose encore les données."],
      ["Rien, puisqu'il connaît déjà les documents", false, "Il pourrait encore modifier ou supprimer des documents."],
      ["Changer le nom des dossiers", false, "Renommer ne retire aucun droit d'accès."],
    ], "Le principe du moindre privilège vaut aussi dans le temps : un accès qui n'est plus justifié est un risque (erreur, malveillance, compte piraté). On fait régulièrement le point sur les personnes ayant accès aux documents.", "Retirer les accès devenus inutiles.", {
      hints: ["A-t-il encore besoin de ces documents ?", "Un accès inutile est un risque.", "La solution concerne les droits, pas les noms des dossiers."],
    }),
    q("B-DIG-COLLAB-011", S, "dig.collab.coedition", 2, "Dans un document en ligne rédigé par une camarade, tu veux proposer des corrections qu'elle pourra accepter ou refuser une à une. Quel mode utilises-tu ?", [
      ["Le mode suggestion", true, "Tes modifications apparaissent comme des propositions à valider."],
      ["Le mode lecture", false, "Il ne permet aucune modification ni proposition."],
      ["La modification directe du texte", false, "Elle s'applique sans validation de l'autrice."],
      ["L'export du document en PDF", false, "On ne peut plus proposer de corrections dans le document en ligne."],
    ], "Le mode suggestion (équivalent en ligne du suivi des modifications) affiche chaque proposition en couleur ; l'autrice l'accepte ou la refuse. Il faut au moins le droit de commentateur pour suggérer.", "Proposer sans imposer = mode suggestion.", {
      hints: ["Ta camarade doit garder la décision.", "C'est l'équivalent en ligne du suivi des modifications.", "Le mode porte le nom de ce que tu fais : proposer."],
      reserved: true,
    }),
  ],
};
