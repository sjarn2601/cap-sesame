// Compétences digitales : traitement de texte, diaporama et raccourcis (dig.texte).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.texte";

export const DIG_TEXTE: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Création de contenus", name: "Traitement de texte et présentation", synonyms: ["traitement de texte", "word", "writer", "styles", "table des matieres", "en tete", "revision", "suivi des modifications", "diaporama", "powerpoint", "raccourcis clavier", "pdf"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Bureautique : structurer, réviser et présenter un document",
      objectives: ["Structurer un long document avec les styles", "Réviser un document à plusieurs", "Concevoir un diaporama efficace", "Utiliser les raccourcis clavier courants"],
      regle:
        "Styles. Un style est un ensemble de mises en forme nommé (Normal, Titre 1, Titre 2…). Appliquer Titre 1 à un titre, plutôt que le mettre en gras et en taille 16 à la main, présente trois avantages : modifier le style change d'un coup tous les titres concernés ; le volet de navigation affiche le plan du document ; la table des matières se génère automatiquement. Titre 1 sert aux parties, Titre 2 aux sous-parties, et ainsi de suite.\n\nTable des matières. Elle s'insère à partir des titres stylés (Références > Table des matières dans Word ; Insertion > Table des matières et index dans LibreOffice Writer). En général, elle ne se met pas à jour seule : après une modification, on clique sur « Mettre à jour la table ». Un titre absent de la table est presque toujours un titre sans style de titre.\n\nMise en page. L'en-tête et le pied de page se répètent sur chaque page (nom, titre, numéro de page inséré comme champ automatique). Pour commencer une nouvelle page, on insère un saut de page (Ctrl+Entrée) au lieu d'enchaîner des retours à la ligne qui se décalent à la moindre modification. Le saut de section permet de changer d'orientation ou d'en-tête pour une partie du document. L'espace insécable (Ctrl+Maj+Espace) empêche qu'un nombre et son unité (20 %, 15 €) soient séparés en fin de ligne.\n\nRévision. Le suivi des modifications (onglet Révision dans Word, menu Édition dans LibreOffice) enregistre chaque ajout ou suppression, avec son auteur ; le destinataire accepte ou refuse chaque modification. Les commentaires, placés dans la marge, posent une question ou font une remarque sans modifier le texte.\n\nDiaporama. Le masque des diapositives définit la police, les couleurs, le logo et la disposition de toutes les diapositives : on le modifie une fois pour tout le diaporama. Le mode présentateur affiche à l'orateur ses notes, la diapositive suivante et le chronomètre, tandis que le public ne voit que la diapositive. Bonnes pratiques : une idée par diapositive, peu de texte, une police lisible de loin, des contrastes forts.\n\nExport PDF. Le PDF fige la mise en page (polices, images, pagination) : on l'utilise pour diffuser une version finale (CV, rapport) qui doit s'afficher à l'identique partout. On conserve le fichier source (DOCX, ODT) pour continuer à le modifier.",
      formules:
        "Ctrl+C copier · Ctrl+X couper · Ctrl+V coller\nCtrl+Z annuler · Ctrl+Y rétablir\nCtrl+S enregistrer · Ctrl+P imprimer · Ctrl+A tout sélectionner\nCtrl+F rechercher · Ctrl+H rechercher et remplacer\nCtrl+Entrée saut de page · Ctrl+Maj+Espace espace insécable\nF5 lancer le diaporama depuis le début · Alt+Tab changer de fenêtre\nSur Mac, Cmd remplace Ctrl",
      methode:
        "1. Saisir le texte sans mise en forme manuelle.\n2. Appliquer les styles : Titre 1 pour les parties, Titre 2 pour les sous-parties, Normal pour le corps.\n3. Ajuster l'apparence en modifiant les styles, pas chaque paragraphe.\n4. Insérer en-tête, pied de page et numéros de page.\n5. Générer la table des matières, puis la mettre à jour avant chaque envoi.\n6. Pour une relecture à plusieurs : suivi des modifications et commentaires.\n7. Exporter la version finale en PDF.",
      exemple:
        "Inès rédige un rapport de stage de 25 pages. Elle applique Titre 1 à ses quatre parties et Titre 2 aux sous-parties, puis insère la table des matières en page 2. Sa tutrice relit le document avec le suivi des modifications activé : ses corrections apparaissent en couleur, ses questions en commentaires. Inès accepte la plupart des corrections, en refuse une, répond aux commentaires, ajoute une partie, puis met à jour la table des matières : la nouvelle partie y apparaît avec son numéro de page. Elle exporte enfin le rapport en PDF pour l'envoyer à l'école.",
      erreur:
        "✗ Mettre les titres en gras et en grande taille à la main → ✓ Appliquer les styles de titre, seuls pris en compte par la table des matières.\n✗ Taper des retours à la ligne jusqu'à la page suivante → ✓ Insérer un saut de page (Ctrl+Entrée).\n✗ Corriger directement le texte d'un camarade sans trace → ✓ Activer le suivi des modifications pour qu'il accepte ou refuse.\n✗ Modifier les 40 diapositives une par une → ✓ Modifier le masque des diapositives.\n✗ Envoyer un CV en DOCX → ✓ L'exporter en PDF pour figer la mise en page.\n✗ Confondre transition et animation → ✓ La transition relie deux diapositives, l'animation agit dans une diapositive.",
      approfondir:
        "Les questions de bureautique portent rarement sur le nom exact d'un menu, qui varie selon les logiciels, mais sur la bonne fonctionnalité : réponds en pensant « quel outil fait cela automatiquement ? ». Si une proposition décrit un travail manuel et répétitif (retouches une par une, retours à la ligne, copier-coller sur chaque page), elle est presque toujours fausse. Les raccourcis Ctrl+C, X, V, Z, S, F, A et P sont communs à la plupart des logiciels sous Windows et Linux ; sur Mac, la touche Cmd remplace Ctrl. Lien avec la collaboration : le suivi des modifications sert aux échanges de fichiers ; dans un document partagé en ligne, on utilise plutôt le mode suggestion et l'historique des versions.",
      cards: [
        ["Annuler la dernière action", "Ctrl+Z", true],
        ["Générer une table des matières automatique", "Appliquer les styles de titre, puis insérer la table", false],
        ["Changer le logo de toutes les diapositives d'un coup", "Modifier le masque des diapositives", false],
        ["Voir ses notes sans que le public les voie", "Mode présentateur", false],
        ["Insérer un saut de page", "Ctrl+Entrée", true],
      ],
    },
  ],
  questions: [
    q("B-DIG-TEXTE-001", S, "dig.texte.raccourci", 1, "Tu viens d'effacer par erreur un paragraphe entier. Quel raccourci clavier permet d'annuler cette action ?", [
      ["Ctrl+Z", true, "Ctrl+Z annule la dernière action."],
      ["Ctrl+Y", false, "Ctrl+Y rétablit une action annulée : c'est l'inverse."],
      ["Ctrl+S", false, "Ctrl+S enregistre le document tel quel, erreur comprise."],
      ["Ctrl+X", false, "Ctrl+X coupe la sélection."],
    ], "Ctrl+Z annule la dernière action (et les précédentes si on répète). Ctrl+Y rétablit ce qui vient d'être annulé. Sur Mac, Cmd remplace Ctrl.", "Ctrl+Z annuler, Ctrl+Y rétablir.", {
      hints: ["C'est l'un des raccourcis les plus utilisés.", "Ce n'est ni copier, ni coller, ni enregistrer.", "La touche est la dernière lettre de l'alphabet."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-TEXTE-002", S, "dig.texte.styles", 2, "Pourquoi appliquer le style « Titre 1 » à tes titres plutôt que de les mettre en gras, taille 16, à la main ?", [
      ["Pour pouvoir générer une table des matières et modifier tous les titres d'un coup", true, "Le style est reconnu par le logiciel : il structure le document."],
      ["Parce que le gras manuel est interdit dans un document professionnel", false, "Le gras n'est pas interdit ; il ne structure simplement pas le document."],
      ["Pour réduire la taille du fichier de moitié", false, "Le choix entre style et mise en forme manuelle n'a pas cet effet."],
      ["Parce que la mise en forme manuelle disparaît à l'impression", false, "Elle s'imprime normalement."],
    ], "Un style de titre donne au texte un rôle (niveau de titre) en plus d'une apparence. La table des matières, le volet de navigation et la numérotation des titres s'appuient sur ce rôle ; modifier le style met à jour tous les titres.", "Styles de titre = structure du document + modification globale.", {
      hints: ["Qu'est-ce que le logiciel « comprend » d'un style de titre ?", "Pense à ce qui se génère automatiquement à partir des titres.", "Deux bénéfices : table des matières et changement global."],
    }),
    q("B-DIG-TEXTE-003", S, "dig.texte.tdm", 2, "Tu as inséré une table des matières automatique, puis ajouté une nouvelle partie avec le style Titre 1. La table ne la montre pas. Que fais-tu ?", [
      ["Tu mets à jour la table des matières", true, "La table ne se recalcule pas seule : il faut la mettre à jour."],
      ["Tu tapes le titre et son numéro de page dans la table", false, "Une saisie manuelle serait fausse dès la prochaine modification."],
      ["Tu supprimes la table et tu en fais une à la main", false, "On perd l'automatisme et les numéros de page exacts."],
      ["Tu mets le titre en gras pour qu'il apparaisse", false, "Le gras n'a aucun effet sur la table des matières."],
    ], "La table des matières est un champ calculé à un instant donné. Après tout ajout ou déplacement de titre, on utilise « Mettre à jour la table » (clic droit sur la table). Si un titre n'apparaît toujours pas, c'est qu'il n'a pas de style de titre.", "Table des matières : la mettre à jour après chaque modification.", {
      hints: ["La table est-elle recalculée en permanence ?", "Elle a été construite avant l'ajout de la partie.", "Il existe une commande pour la recalculer."],
    }),
    q("B-DIG-TEXTE-004", S, "dig.texte.miseenpage", 1, "Tu veux que ton nom et le titre de ton dossier apparaissent en haut de chaque page. Où les places-tu ?", [
      ["Dans l'en-tête", true, "Le contenu de l'en-tête se répète automatiquement sur chaque page."],
      ["Dans la première ligne de chaque page, recopiée à la main", false, "Tout se décalerait à la moindre modification du texte."],
      ["Dans une note de bas de page", false, "Une note commente un passage précis, elle ne se répète pas."],
      ["Dans un commentaire", false, "Un commentaire est une annotation de relecture, il ne s'imprime pas en haut des pages."],
    ], "L'en-tête (en haut) et le pied de page (en bas) se répètent sur chaque page ; on y place le nom, le titre, la date ou le numéro de page sous forme de champ automatique.", "Information répétée en haut de chaque page = en-tête.", {
      hints: ["Cherche une zone qui se répète automatiquement.", "Elle se situe en haut de la page.", "Son nom contient le mot « tête »."],
    }),
    q("B-DIG-TEXTE-005", S, "dig.texte.miseenpage", 2, "Tu veux que chaque partie de ton rapport commence en haut d'une nouvelle page, même si tu modifies le texte ensuite. Quelle méthode est la plus fiable ?", [
      ["Insérer un saut de page avant chaque partie", true, "Le saut de page force le début d'une nouvelle page quelle que soit la longueur du texte précédent."],
      ["Appuyer sur Entrée jusqu'au bas de la page", false, "Le moindre ajout de texte décale tout et casse la mise en page."],
      ["Réduire la taille de police de la partie précédente", false, "Cela ne garantit rien et dégrade la lisibilité."],
      ["Exporter chaque partie dans un fichier séparé", false, "On perd l'unité du document et sa table des matières."],
    ], "Le saut de page (Ctrl+Entrée) est une instruction : « la suite commence page suivante ». Les retours à la ligne successifs, eux, se déplacent avec le texte.", "Nouvelle page = saut de page, jamais une série de retours à la ligne.", {
      hints: ["Que se passe-t-il si tu ajoutes une ligne au-dessus de retours à la ligne successifs ?", "Il faut une instruction de mise en page, pas des lignes vides.", "Raccourci : Ctrl+Entrée."],
      lessonAnchor: "erreur",
    }),
    q("B-DIG-TEXTE-006", S, "dig.texte.revision", 2, "Tu relis le rapport d'un camarade et veux qu'il voie chacune de tes corrections et puisse l'accepter ou la refuser. Que fais-tu ?", [
      ["Tu actives le suivi des modifications avant de corriger", true, "Chaque ajout ou suppression est enregistré et peut être accepté ou refusé."],
      ["Tu corriges directement, puis tu lui envoies le fichier", false, "Il ne pourra pas savoir ce qui a changé."],
      ["Tu exportes le rapport en PDF et tu le corriges", false, "Le PDF n'est pas fait pour la révision du texte source."],
      ["Tu réécris le rapport dans un nouveau document", false, "Il faudrait comparer les deux versions ligne par ligne."],
    ], "Le suivi des modifications affiche les ajouts et les suppressions en couleur, avec leur auteur. L'auteur du document accepte ou refuse chaque modification. Les commentaires complètent l'outil pour poser des questions sans modifier le texte.", "Corriger le texte d'un autre = suivi des modifications.", {
      hints: ["Ton camarade doit garder la décision finale.", "Il existe un mode qui enregistre chaque changement.", "Il se trouve dans l'onglet Révision de Word."],
    }),
    q("B-DIG-TEXTE-007", S, "dig.texte.pdf", 1, "Tu envoies ton CV à un recruteur et veux qu'il s'affiche exactement avec ta mise en page, quel que soit son ordinateur. Dans quel format l'envoies-tu ?", [
      ["PDF", true, "Le PDF fige la mise en page, les polices et les images."],
      ["DOCX", false, "L'affichage peut varier selon le logiciel et les polices installées."],
      ["TXT", false, "Le texte brut perd toute mise en forme."],
      ["CSV", false, "C'est un format de données tabulaires, pas de document mis en page."],
    ], "Le PDF est conçu pour qu'un document s'affiche et s'imprime à l'identique partout. On garde le fichier source (DOCX ou ODT) pour les futures modifications.", "Version finale à diffuser = PDF.", {
      hints: ["Tu ne veux pas que le recruteur modifie ou déforme le document.", "Un format fige la mise en page.", "Ce format est lisible par tous les navigateurs."],
    }),
    q("B-DIG-TEXTE-008", S, "dig.texte.diaporama", 3, "Ton diaporama compte 40 diapositives. Tu veux changer la police de tous les titres et ajouter le logo du lycée sur chacune, en une seule opération. Que modifies-tu ?", [
      ["Le masque des diapositives", true, "Il définit la mise en forme commune à toutes les diapositives."],
      ["Chaque diapositive, une par une", false, "C'est long et source d'oublis : c'est justement ce que le masque évite."],
      ["Les transitions entre diapositives", false, "Les transitions concernent le passage d'une diapositive à l'autre."],
      ["Le mode présentateur", false, "Il sert à afficher les notes pendant la présentation."],
    ], "Le masque (ou modèle) des diapositives contient la police, les couleurs, les éléments fixes (logo, pied de page) et les dispositions. Toute modification du masque s'applique à toutes les diapositives qui en dépendent.", "Modification commune à toutes les diapositives = masque.", {
      hints: ["Cherche un outil qui agit sur toutes les diapositives à la fois.", "Il joue le même rôle que les styles en traitement de texte.", "Son nom évoque un modèle placé derrière les diapositives."],
      reserved: true,
    }),
    q("B-DIG-TEXTE-009", S, "dig.texte.diaporama", 2, "Pendant ton oral, tu veux voir tes notes et la diapositive suivante sur l'écran de ton ordinateur, tandis que le public ne voit que la diapositive en cours. Quelle fonction utilises-tu ?", [
      ["Le mode présentateur", true, "Il sépare l'affichage de l'orateur et celui du public."],
      ["Le mode plan", false, "Il affiche le texte des diapositives pour les rédiger, pas pour présenter."],
      ["L'export en PDF", false, "Le PDF ne montre pas les notes à l'orateur seul."],
      ["Le masque des diapositives", false, "Le masque gère la mise en forme commune, pas l'affichage pendant l'oral."],
    ], "Avec deux écrans (ordinateur et vidéoprojecteur), le mode présentateur affiche au public la diapositive et à l'orateur ses notes, la diapositive suivante et le temps écoulé.", "Notes visibles par l'orateur seul = mode présentateur.", {
      hints: ["Deux affichages différents pour deux publics.", "Le mode est conçu pour la personne qui parle.", "Son nom désigne la personne qui présente."],
    }),
    q("B-DIG-TEXTE-010", S, "dig.texte.raccourci", 1, "Dans un document de 60 pages, tu dois remplacer partout « Groupe Durand » par « Durand et Fils ». Quelle fonction est la plus efficace ?", [
      ["Rechercher et remplacer (Ctrl+H)", true, "Elle remplace toutes les occurrences en une seule opération."],
      ["Rechercher (Ctrl+F) puis retaper chaque occurrence", false, "Possible mais lent, avec un risque d'oubli."],
      ["Le correcteur orthographique", false, "Il corrige l'orthographe, pas un nom par un autre."],
      ["Tout sélectionner (Ctrl+A) puis retaper le texte", false, "Tu effacerais tout le document."],
    ], "Rechercher et remplacer traite toutes les occurrences, avec la possibilité de les valider une à une. On vérifie ensuite le nombre de remplacements annoncé.", "Modifier un mot partout = Rechercher et remplacer (Ctrl+H).", {
      hints: ["Tu cherches un outil qui agit sur toutes les occurrences.", "Il combine deux actions.", "Son raccourci est proche de Ctrl+F."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-TEXTE-011", S, "dig.texte.miseenpage", 3, "Dans ton rapport, « 20 » se retrouve en fin de ligne et « % » au début de la ligne suivante. Comment l'éviter durablement ?", [
      ["Remplacer l'espace entre « 20 » et « % » par une espace insécable", true, "L'espace insécable interdit le passage à la ligne entre les deux éléments."],
      ["Mettre « 20 % » en gras", false, "Une mise en forme ne change rien aux règles de coupure de ligne."],
      ["Ajouter un retour à la ligne avant « 20 »", false, "Le retour se décalera dès que le texte changera."],
      ["Réduire la taille de la police du paragraphe", false, "Cela déplace le problème sans le résoudre."],
    ], "L'espace insécable (Ctrl+Maj+Espace dans Word et Writer) relie deux éléments qui ne doivent pas être séparés : nombre et unité, initiale et nom, « M. » et le nom. Les logiciels l'insèrent souvent seuls devant : ; ! ? en français.", "Nombre et unité inséparables = espace insécable.", {
      hints: ["Le problème vient de l'espace entre les deux éléments.", "Il existe une espace spéciale qui interdit la coupure.", "Son nom signifie « qu'on ne peut pas couper »."],
    }),
  ],
};
