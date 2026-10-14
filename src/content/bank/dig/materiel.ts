// Compétences digitales : environnement numérique, matériel et fichiers (dig.materiel).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.materiel";

export const DIG_MATERIEL: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Environnement numérique", name: "Matériel, système et organisation des fichiers", synonyms: ["processeur", "memoire vive", "ram", "stockage", "ssd", "systeme d exploitation", "pilote", "peripherique", "arborescence", "chemin", "dossier", "logiciel libre"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Matériel, système d'exploitation et organisation des fichiers",
      objectives: ["Distinguer processeur, mémoire vive et stockage", "Expliquer le rôle du système d'exploitation et des pilotes", "Classer les périphériques", "Lire et écrire un chemin d'accès"],
      regle:
        "Composants. Le processeur (CPU) exécute les instructions des programmes ; sa puissance dépend notamment de son nombre de cœurs et de sa fréquence (en GHz). La mémoire vive (RAM) contient les programmes et documents en cours d'utilisation : elle est rapide mais volatile, c'est-à-dire qu'elle s'efface quand l'appareil s'éteint. Le stockage (SSD ou disque dur) conserve durablement le système, les logiciels et les fichiers enregistrés. Un SSD, sans pièce mobile, est bien plus rapide et résistant aux chocs qu'un disque dur à plateaux. D'où le réflexe : un document non enregistré n'existe qu'en mémoire vive, et une coupure le fait disparaître.\n\nSystème d'exploitation. C'est le logiciel principal (Windows, macOS, Linux, Android, iOS) : il gère le matériel, la mémoire, les fichiers et les utilisateurs, et permet de lancer les applications. Un pilote (driver) est un petit logiciel qui permet au système de dialoguer avec un matériel précis (imprimante, carte graphique). Un logiciel libre (Linux, LibreOffice, Firefox, VLC) peut être utilisé, étudié, modifié et redistribué : « libre » renvoie à ces libertés, pas au prix.\n\nPériphériques. Entrée : ils envoient des informations à l'ordinateur (clavier, souris, micro, webcam, scanner). Sortie : ils restituent des informations (écran, imprimante, haut-parleurs). Entrée-sortie : écran tactile, casque avec micro. Les supports externes (clé USB, disque dur externe) servent au stockage.\n\nArborescence. Les fichiers sont rangés dans des dossiers, eux-mêmes imbriqués, à partir d'une racine (C:\\ sous Windows, / sous Linux et macOS). Un chemin absolu part de la racine : /home/lea/Documents/Stage/bilan.pdf, ou C:\\Users\\Lea\\Documents\\bilan.pdf (Windows utilise la barre oblique inversée). Un chemin relatif part du dossier où l'on se trouve : images/logo.png désigne un sous-dossier, ../ remonte au dossier parent.\n\nBonnes pratiques de rangement : une arborescence peu profonde et logique, des noms explicites sans espaces ni accents, des dates au format AAAA-MM-JJ en tête de nom pour que l'ordre alphabétique soit aussi l'ordre chronologique.\n\nDépannage simple : enregistrer son travail, redémarrer, vérifier branchements et connexion, mettre à jour le système et les pilotes, consulter le message d'erreur exact avant de chercher une solution.",
      formules:
        "Processeur = calcule · Mémoire vive = travail en cours, volatile · Stockage = conservation durable\nSystème d'exploitation : Windows, macOS, Linux, Android, iOS\nPilote = logiciel qui fait dialoguer le système avec un matériel\nEntrée : clavier, souris, micro, webcam, scanner · Sortie : écran, imprimante, haut-parleurs\nChemin absolu : depuis la racine (/ ou C:\\) · Chemin relatif : depuis le dossier courant\n.. = dossier parent · . = dossier courant\nNom de fichier triable : AAAA-MM-JJ_sujet.ext",
      methode:
        "1. Pour un chemin relatif, partir du dossier qui contient le fichier de départ.\n2. Chaque ../ fait remonter d'un niveau.\n3. Chaque nom de dossier suivi de / fait descendre d'un niveau.\n4. Écrire le chemin absolu obtenu depuis la racine et vérifier qu'il existe dans l'arborescence.",
      exemple:
        "Arborescence d'un site : /site/index.html, /site/cours/page.html, /site/images/logo.png. Dans page.html, le chemin relatif vers le logo est ../images/logo.png : on part de /site/cours, ../ remonte à /site, puis on descend dans images. Depuis index.html (dans /site), le même logo s'écrit images/logo.png.\n\nPanne de courant : Hugo tape son devoir depuis une heure sans l'enregistrer. Le texte n'est qu'en mémoire vive ; à la coupure, tout est perdu, sauf récupération automatique éventuelle. Le fichier enregistré (sur le SSD) aurait survécu.",
      erreur:
        "✗ Confondre mémoire vive et espace de stockage (« mon ordinateur a 512 Go de mémoire ») → ✓ 512 Go est la capacité de stockage ; la mémoire vive fait souvent 8 à 32 Go.\n✗ Croire que Word ou Chrome sont des systèmes d'exploitation → ✓ Ce sont des applications qui fonctionnent sur un système.\n✗ Croire que « libre » veut dire « gratuit » → ✓ Libre = libertés d'utiliser, étudier, modifier, redistribuer.\n✗ Lire ../ comme « dossier enfant » → ✓ ../ remonte au dossier parent.\n✗ Nommer ses fichiers « final », « final2 », « vraiment-final » → ✓ Nom explicite et date AAAA-MM-JJ.",
      approfondir:
        "Pour retenir les rôles, pense à un bureau : le processeur est la personne qui travaille, la mémoire vive est la table de travail (rapide, mais débarrassée chaque soir), le stockage est l'armoire (durable, plus lente à ouvrir). Plus de mémoire vive permet d'ouvrir plus de choses à la fois ; plus de stockage permet de conserver plus de fichiers. Les chemins relatifs reviennent dans les questions sur les sites web et les liens entre fichiers : dessine l'arbre au brouillon mental, niveau par niveau. Lien : l'URL d'une page contient elle aussi un chemin de dossiers sur le serveur.",
      cards: [
        ["Mémoire volatile", "Mémoire vive (RAM) : effacée à l'extinction", false],
        ["Rôle d'un pilote", "Faire dialoguer le système d'exploitation avec un matériel", false],
        ["../ dans un chemin", "Remonter au dossier parent", false],
        ["Micro, clavier, webcam", "Périphériques d'entrée", false],
        ["Logiciel libre", "Logiciel que l'on peut utiliser, étudier, modifier et redistribuer", true],
      ],
    },
  ],
  questions: [
    q("B-DIG-MATERIEL-001", S, "dig.materiel.memoire", 2, "Une coupure de courant éteint ton ordinateur alors que tu tapais un texte depuis une heure sans l'enregistrer. Pourquoi ce texte est-il perdu ?", [
      ["Il n'était qu'en mémoire vive, qui s'efface quand l'appareil s'éteint", true, "La mémoire vive est volatile : sans enregistrement sur le stockage, rien n'est conservé."],
      ["Le processeur a supprimé le fichier pour se protéger", false, "Le processeur exécute des instructions, il ne décide pas de supprimer des fichiers."],
      ["Le disque dur s'efface à chaque coupure de courant", false, "Le stockage conserve les données sans alimentation : c'est son rôle."],
      ["Le système d'exploitation supprime les textes de plus d'une heure", false, "Aucun système ne fonctionne ainsi."],
    ], "Un document en cours de rédaction se trouve dans la mémoire vive. Enregistrer, c'est l'écrire sur le stockage (SSD, disque dur, cloud), qui conserve les données même éteint. D'où l'intérêt d'enregistrer souvent (Ctrl+S) et de l'enregistrement automatique.", "Mémoire vive = volatile ; stockage = durable.", {
      hints: ["Où se trouve un document tant qu'il n'est pas enregistré ?", "Une mémoire s'efface sans alimentation.", "Enregistrer = écrire sur le stockage durable."],
    }),
    q("B-DIG-MATERIEL-002", S, "dig.materiel.peripherique", 1, "Lequel de ces matériels est un périphérique d'entrée ?", [
      ["Un microphone", true, "Il envoie le son capté vers l'ordinateur."],
      ["Une imprimante", false, "Elle restitue des documents : périphérique de sortie."],
      ["Des haut-parleurs", false, "Ils restituent le son : périphérique de sortie."],
      ["Un vidéoprojecteur", false, "Il affiche l'image : périphérique de sortie."],
    ], "Un périphérique d'entrée transmet des informations à l'ordinateur (clavier, souris, micro, webcam, scanner) ; un périphérique de sortie les restitue (écran, imprimante, haut-parleurs, vidéoprojecteur).", "Entrée = vers l'ordinateur ; sortie = depuis l'ordinateur.", {
      hints: ["Dans quel sens circule l'information ?", "Un périphérique d'entrée capte quelque chose.", "Trois propositions restituent une information."],
    }),
    q("B-DIG-MATERIEL-003", S, "dig.materiel.systeme", 2, "Tu branches une imprimante neuve, mais l'ordinateur ne la reconnaît pas. Quelle est la cause la plus probable à vérifier en premier, une fois le câble contrôlé ?", [
      ["Le pilote de l'imprimante n'est pas installé", true, "Sans pilote, le système ne sait pas dialoguer avec ce matériel."],
      ["La mémoire vive est pleine de documents", false, "Cela ne bloque pas la reconnaissance d'un matériel."],
      ["Le navigateur web n'est pas à jour", false, "Le navigateur n'intervient pas dans la reconnaissance d'une imprimante."],
      ["Le processeur n'est pas assez puissant pour imprimer", false, "N'importe quel processeur actuel suffit pour piloter une imprimante."],
    ], "Le pilote traduit les commandes du système d'exploitation en instructions comprises par le matériel. Il s'installe souvent automatiquement, sinon depuis le site du fabricant.", "Matériel non reconnu : vérifier le pilote.", {
      hints: ["Le système d'exploitation doit « parler » à l'imprimante.", "Un petit logiciel sert d'intermédiaire.", "Il se télécharge sur le site du fabricant."],
    }),
    q("B-DIG-MATERIEL-004", S, "dig.materiel.systeme", 1, "Lequel de ces logiciels n'est PAS un système d'exploitation ?", [
      ["LibreOffice", true, "C'est une suite bureautique, qui fonctionne sur un système d'exploitation."],
      ["Linux", false, "Linux est un système d'exploitation libre."],
      ["Android", false, "Android est le système d'exploitation de nombreux smartphones."],
      ["macOS", false, "macOS est le système d'exploitation des ordinateurs Apple."],
    ], "Le système d'exploitation gère le matériel et permet de lancer les applications. Les applications (LibreOffice, un navigateur, un jeu) s'exécutent par-dessus.", "Système d'exploitation ≠ application.", {
      hints: ["Distingue le logiciel principal et les applications.", "Trois propositions équipent des ordinateurs ou des téléphones.", "L'intrus sert à écrire des textes et des tableaux."],
    }),
    q("B-DIG-MATERIEL-005", S, "dig.materiel.chemin", 3, "Le fichier page.html se trouve dans le dossier /site/cours. Il affiche une image avec le chemin relatif ../images/logo.png. Quel est le chemin absolu de cette image ?", [
      ["/site/images/logo.png", true, "On part de /site/cours ; ../ remonte à /site ; on descend dans images."],
      ["/site/cours/images/logo.png", false, "Le ../ a été ignoré : il fait remonter d'un niveau."],
      ["/images/logo.png", false, "On est remonté de deux niveaux au lieu d'un."],
      ["/site/cours/../logo.png", false, "Le dossier images a été oublié."],
    ], "Un chemin relatif se lit à partir du dossier du fichier de départ, ici /site/cours. ../ désigne le dossier parent, /site. On y descend dans images pour trouver logo.png : /site/images/logo.png.", "../ = dossier parent ; un chemin relatif part du dossier courant.", {
      hints: ["Pars du dossier qui contient page.html.", "../ fait remonter d'un niveau.", "Depuis /site, descends dans images."],
      lessonAnchor: "methode",
      reserved: true,
    }),
    q("B-DIG-MATERIEL-006", S, "dig.materiel.chemin", 2, "Sous Linux, le fichier bilan.pdf est rangé dans le dossier Stage, lui-même placé dans Documents, dans le dossier personnel /home/lea. Quel est son chemin absolu ?", [
      ["/home/lea/Documents/Stage/bilan.pdf", true, "Le chemin part de la racine et descend dossier par dossier."],
      ["Stage/bilan.pdf", false, "C'est un chemin relatif, valable seulement depuis Documents."],
      ["/home/lea/Stage/Documents/bilan.pdf", false, "L'ordre des dossiers est inversé."],
      ["/bilan.pdf", false, "Ce chemin désigne un fichier placé directement à la racine."],
    ], "Un chemin absolu part de la racine (/) et énumère les dossiers du plus général au plus particulier : /home, puis lea, puis Documents, puis Stage, enfin le fichier.", "Chemin absolu = de la racine au fichier, du général au particulier.", {
      hints: ["Un chemin absolu commence par la racine.", "Les dossiers s'écrivent du plus englobant au plus précis.", "Stage est à l'intérieur de Documents."],
    }),
    q("B-DIG-MATERIEL-007", S, "dig.materiel.composant", 1, "Quel composant d'un ordinateur exécute les instructions des programmes ?", [
      ["Le processeur", true, "Le processeur (CPU) réalise les calculs et exécute les instructions."],
      ["La mémoire vive", false, "Elle contient les programmes en cours, mais ne les exécute pas."],
      ["Le SSD", false, "Il stocke durablement les données."],
      ["La carte réseau", false, "Elle gère la connexion au réseau."],
    ], "Le processeur est le « cerveau » qui exécute les instructions. La mémoire vive lui fournit rapidement les données en cours ; le stockage les conserve durablement.", "Processeur = exécution ; mémoire vive = travail en cours ; stockage = conservation.", {
      hints: ["Cherche le composant qui calcule.", "On l'appelle aussi CPU.", "Sa vitesse s'exprime en GHz."],
    }),
    q("B-DIG-MATERIEL-008", S, "dig.materiel.composant", 2, "Quel est le principal avantage d'un SSD par rapport à un disque dur à plateaux ?", [
      ["Il est beaucoup plus rapide et, sans pièce mobile, résiste mieux aux chocs", true, "Le SSD utilise de la mémoire flash, sans plateau ni tête de lecture."],
      ["Il garde les données en mémoire vive", false, "Un SSD est un support de stockage durable, pas de la mémoire vive."],
      ["Il remplace le processeur", false, "Stockage et calcul sont deux fonctions différentes."],
      ["Il offre toujours plus de capacité pour le même prix", false, "C'est souvent l'inverse : le disque dur reste moins cher par gigaoctet."],
    ], "Le SSD (mémoire flash) accélère fortement le démarrage et l'ouverture des logiciels, et résiste aux chocs. Le disque dur classique reste intéressant pour stocker de grands volumes à moindre coût.", "SSD = rapide et sans pièce mobile ; disque dur = moins cher au Go.", {
      hints: ["Pense à la technologie : mémoire flash contre plateaux tournants.", "Sans pièce mobile, que gagne-t-on ?", "Deux avantages : vitesse et solidité."],
    }),
    q("B-DIG-MATERIEL-009", S, "dig.materiel.rangement", 2, "Tu veux que tes comptes rendus se classent automatiquement dans l'ordre chronologique quand ils sont triés par nom. Quel nom de fichier choisis-tu ?", [
      ["2026-03-05_compte-rendu.odt", true, "Le format AAAA-MM-JJ fait coïncider ordre alphabétique et ordre chronologique."],
      ["05-03-2026_compte-rendu.odt", false, "Trié par nom, le 5 de chaque mois passerait avant le 6 de n'importe quel mois."],
      ["compte rendu mars.odt", false, "Plusieurs comptes rendus du même mois auraient le même nom, et les mois se trient par ordre alphabétique."],
      ["compte-rendu-final-v2.odt", false, "Le nom ne contient aucune date exploitable."],
    ], "Avec l'année d'abord, puis le mois et le jour sur deux chiffres, le tri alphabétique est aussi chronologique. On évite espaces et accents pour la compatibilité entre systèmes.", "Date en tête au format AAAA-MM-JJ.", {
      hints: ["Comment l'ordinateur trie-t-il des noms ?", "Il compare les caractères de gauche à droite.", "Il faut donc commencer par l'unité la plus grande : l'année."],
    }),
    q("B-DIG-MATERIEL-010", S, "dig.materiel.memoire", 2, "Ton ordinateur a 16 Go de mémoire vive et un SSD de 512 Go. Tu installes un logiciel de 2 Go. Où le logiciel est-il installé ?", [
      ["Sur le SSD, l'espace de stockage", true, "L'installation écrit durablement les fichiers du logiciel sur le stockage."],
      ["Dans la mémoire vive", false, "La mémoire vive ne conserve rien après extinction ; le logiciel n'y est chargé que pendant son utilisation."],
      ["Dans le processeur", false, "Le processeur exécute les instructions, il ne stocke pas les logiciels."],
      ["Sur le pilote", false, "Un pilote est un logiciel, pas un emplacement de stockage."],
    ], "Installer, c'est copier durablement les fichiers sur le stockage (ici le SSD). Au lancement, le système charge le programme en mémoire vive pour que le processeur l'exécute.", "Installer = stockage ; lancer = mémoire vive.", {
      hints: ["Le logiciel doit-il survivre à l'extinction ?", "Quel composant conserve les données durablement ?", "La mémoire vive ne sert qu'à l'exécution."],
      lessonAnchor: "erreur",
    }),
    q("B-DIG-MATERIEL-011", S, "dig.materiel.systeme", 3, "Quelle affirmation sur un logiciel libre, comme Linux ou LibreOffice, est exacte ?", [
      ["Son code source peut être étudié, modifié et redistribué selon sa licence", true, "C'est la définition du logiciel libre."],
      ["Libre signifie seulement qu'il est gratuit", false, "Un logiciel gratuit peut être fermé ; « libre » renvoie aux libertés d'usage."],
      ["Il est forcément moins sûr qu'un logiciel payant", false, "Rien ne l'établit : son code ouvert peut au contraire être audité par tous."],
      ["Il n'a aucune licence", false, "Il est diffusé sous une licence qui garantit ces libertés (GPL, MPL…)."],
    ], "Un logiciel libre garantit quatre libertés : l'utiliser, étudier son fonctionnement (code source accessible), le modifier et le redistribuer. Il est souvent gratuit, mais ce n'est pas ce qui le définit ; un logiciel gratuit mais fermé (gratuiciel) n'est pas libre.", "Libre = libertés, pas gratuité.", {
      hints: ["Le mot « libre » ne parle pas d'argent.", "Pense à ce qu'on peut faire avec le code source.", "Utiliser, étudier, modifier, redistribuer."],
      reserved: true,
    }),
  ],
};
