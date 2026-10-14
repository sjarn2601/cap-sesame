// Compétences digitales : fichiers, formats, images, compression et unités (dig.formats).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.formats";

export const DIG_FORMATS: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Information et données", name: "Fichiers, formats et unités", synonyms: ["format de fichier", "extension", "format ouvert", "image vectorielle", "image matricielle", "compression", "jpeg", "png", "octet", "mega octet", "resolution", "pixel", "poids d un fichier"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Formats de fichiers, images, compression et unités",
      objectives: ["Choisir un format selon l'usage", "Distinguer image matricielle et vectorielle", "Distinguer compression avec et sans perte", "Convertir des unités de stockage et calculer un poids"],
      regle:
        "Extensions et formats. L'extension (.odt, .pdf, .png…) indique le format, c'est-à-dire la façon dont les données sont organisées dans le fichier. Renommer l'extension ne convertit pas le fichier : il faut l'exporter ou le convertir avec un logiciel. Un format ouvert a des spécifications techniques publiques, utilisables librement par tout logiciel (ODT, ODS, ODP de la suite OpenDocument, PDF, CSV, TXT, HTML, PNG, SVG) : interopérabilité et lecture à long terme facilitées. Un format propriétaire dépend d'un éditeur qui en contrôle la spécification (PSD de Photoshop, par exemple).\n\nUsages courants : DOCX ou ODT pour un texte à modifier ; PDF pour une version finale à la mise en page figée ; XLSX ou ODS pour un classeur avec formules ; CSV pour des données brutes en texte (une ligne par enregistrement, valeurs séparées par des points-virgules ou des virgules, sans formules ni mise en forme).\n\nImages. Une image matricielle (ou bitmap) est une grille de pixels : JPEG, PNG, GIF, WebP. Agrandie, elle se pixellise. Une image vectorielle est décrite par des formes géométriques (points, courbes, couleurs) : SVG. Elle s'agrandit sans perte, d'où son usage pour les logos, pictogrammes et schémas ; une photographie est toujours matricielle. JPEG convient aux photos ; PNG aux captures d'écran et aux logos avec transparence.\n\nCompression. Sans perte : le fichier d'origine est reconstitué exactement (ZIP, PNG, FLAC). Avec perte : on supprime des informations peu perceptibles pour gagner beaucoup de place (JPEG, MP3, MP4) ; la perte est définitive et s'aggrave à chaque réenregistrement.\n\nUnités. Un bit vaut 0 ou 1 ; un octet = 8 bits. Dans le Système international, 1 ko = 1 000 octets, 1 Mo = 1 000 ko, 1 Go = 1 000 Mo, 1 To = 1 000 Go. Les préfixes binaires (1 Kio = 1 024 octets) expliquent qu'un disque de 1 To affiche environ 931 Gio. Les débits s'expriment en bits par seconde (Mbit/s), les tailles de fichiers en octets : il faut multiplier ou diviser par 8.\n\nPoids d'une image. Définition = nombre de pixels (largeur × hauteur). En couleurs 24 bits, chaque pixel occupe 3 octets : poids non compressé = largeur × hauteur × 3 octets. La résolution est la densité de pixels à l'impression, en pixels par pouce (ppp ou dpi ; 1 pouce = 2,54 cm) : 300 ppp pour une impression de qualité. Taille imprimée = nombre de pixels ÷ résolution.",
      formules:
        "1 octet = 8 bits\n1 ko = 1 000 o · 1 Mo = 1 000 ko · 1 Go = 1 000 Mo · 1 To = 1 000 Go\n1 Kio = 1 024 o (préfixes binaires : Kio, Mio, Gio, Tio)\nDébit (bit/s) → octets/s : diviser par 8 · taille en octets → bits : multiplier par 8\nPoids brut d'une image 24 bits = largeur × hauteur × 3 octets\nTaille imprimée (pouces) = pixels ÷ ppp · 1 pouce = 2,54 cm\nSans perte : ZIP, PNG, FLAC · Avec perte : JPEG, MP3, MP4\nMatriciel : JPEG, PNG, GIF, WebP · Vectoriel : SVG",
      methode:
        "1. Pour un calcul d'unités, tout convertir dans la même unité (souvent Mo) avant de comparer.\n2. Pour un téléchargement : convertir la taille en bits (× 8), puis diviser par le débit en bit/s.\n3. Pour un poids d'image : multiplier largeur × hauteur × octets par pixel.\n4. Pour un choix de format : se demander si le fichier doit être modifié, affiché à l'identique, agrandi, ou échangé entre logiciels.",
      exemple:
        "Téléchargement : un fichier de 500 Mo avec une connexion à 80 Mbit/s. 500 Mo = 500 × 8 = 4 000 Mbit. Durée théorique = 4 000 ÷ 80 = 50 secondes (en pratique un peu plus).\n\nImage : une photo de 2 000 × 1 500 pixels en couleurs 24 bits. Nombre de pixels : 3 000 000. Poids brut : 3 000 000 × 3 = 9 000 000 octets, soit 9 Mo. Enregistrée en JPEG, elle pèsera souvent moins de 1 Mo, au prix d'une légère perte. Imprimée à 300 ppp : 2 000 ÷ 300 ≈ 6,7 pouces, soit environ 17 cm de large.",
      erreur:
        "✗ Renommer photo.png en photo.jpg pour la convertir → ✓ Exporter ou convertir avec un logiciel ; l'extension seule ne change pas le contenu.\n✗ Confondre Mbit/s et Mo/s → ✓ Un octet vaut 8 bits : 80 Mbit/s = 10 Mo/s.\n✗ Agrandir un logo JPEG pour une banderole → ✓ Utiliser une version vectorielle (SVG).\n✗ Réenregistrer plusieurs fois un JPEG retouché → ✓ Travailler sur un original sans perte et exporter en JPEG à la fin.\n✗ Oublier le facteur 3 dans le poids d'une image couleur → ✓ 24 bits = 3 octets par pixel.",
      approfondir:
        "Au concours, sans calculatrice, les nombres sont choisis ronds : écris les puissances de 1 000 (k = 10³, M = 10⁶, G = 10⁹, T = 10¹²) et simplifie. Lis bien l'énoncé : s'il précise 1 Go = 1 024 Mo, applique cette convention. Pour un choix de format, la question de fond est toujours l'usage : modifier (format source), diffuser à l'identique (PDF), échanger des données (CSV), agrandir sans perte (vectoriel), alléger une photo (JPEG). Lien : la sobriété numérique passe aussi par des fichiers moins lourds (images compressées, vidéos en définition adaptée).",
      cards: [
        ["1 octet", "8 bits", true],
        ["Image qui s'agrandit sans pixellisation", "Image vectorielle (SVG)", false],
        ["Compression avec perte : exemples", "JPEG, MP3, MP4", false],
        ["Poids brut d'une image couleur 24 bits", "Largeur × hauteur × 3 octets", false],
        ["Format ouvert", "Format aux spécifications publiques, utilisable librement par tout logiciel", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-FORMATS-001", S, "dig.formats.unites", 1, "Lequel de ces volumes de données est le plus grand ?", [
      ["2 To", true, "2 To = 2 000 Go, le plus grand des quatre."],
      ["1 500 Go", false, "1 500 Go = 1,5 To, moins que 2 To."],
      ["900 000 Mo", false, "900 000 Mo = 900 Go seulement."],
      ["3 000 000 ko", false, "3 000 000 ko = 3 000 Mo = 3 Go seulement."],
    ], "On convertit tout en Go : 2 To = 2 000 Go ; 1 500 Go ; 900 000 Mo = 900 Go ; 3 000 000 ko = 3 Go. Le plus grand est 2 To.", "Ko < Mo < Go < To, avec un facteur 1 000 entre deux unités.", {
      hints: ["Convertis tout dans la même unité.", "Chaque unité vaut 1 000 fois la précédente.", "Exprime chaque volume en Go."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-FORMATS-002", S, "dig.formats.unites", 2, "Une carte mémoire de 32 Go reçoit des photos de 4 Mo chacune. En prenant 1 Go = 1 000 Mo, combien de photos peut-elle contenir au maximum ?", [
      ["8 000", true, "32 Go = 32 000 Mo ; 32 000 ÷ 4 = 8 000."],
      ["800", false, "Erreur d'un facteur 10 dans la conversion."],
      ["128", false, "Multiplication 32 × 4 au lieu d'une division après conversion."],
      ["80 000", false, "Erreur d'un facteur 10 dans l'autre sens."],
    ], "On convertit la capacité dans l'unité du fichier : 32 Go = 32 000 Mo. On divise par le poids d'une photo : 32 000 ÷ 4 = 8 000 photos (un peu moins en pratique à cause du système de fichiers).", "Convertir dans la même unité, puis diviser capacité par poids.", {
      hints: ["Exprime la capacité de la carte en Mo.", "32 Go = 32 000 Mo.", "Divise par 4."],
    }),
    q("B-DIG-FORMATS-003", S, "dig.formats.unites", 3, "Ta connexion affiche un débit de 80 Mbit/s. En théorie, combien de temps faut-il pour télécharger un fichier de 500 Mo ?", [
      ["50 secondes", true, "500 Mo = 4 000 Mbit ; 4 000 ÷ 80 = 50 s."],
      ["6,25 secondes", false, "Oubli de la conversion octets → bits (× 8)."],
      ["400 secondes", false, "Le facteur 8 a été appliqué deux fois."],
      ["50 minutes", false, "Le calcul est juste mais l'unité de temps est fausse."],
    ], "Le débit est en bits par seconde, la taille en octets. On convertit : 500 Mo × 8 = 4 000 Mbit. Durée = 4 000 ÷ 80 = 50 secondes. Équivalent : 80 Mbit/s = 10 Mo/s, et 500 ÷ 10 = 50 s.", "Débit en bits, taille en octets : facteur 8.", {
      hints: ["Le débit est en bits, la taille en octets.", "Un octet vaut 8 bits : convertis 500 Mo en Mbit.", "Divise 4 000 Mbit par 80 Mbit/s."],
      lessonAnchor: "exemple",
      reserved: true,
    }),
    q("B-DIG-FORMATS-004", S, "dig.formats.image", 1, "Le logo du lycée doit être imprimé aussi bien sur une carte de visite que sur une banderole de 3 mètres, sans perte de qualité. Quel type d'image faut-il utiliser ?", [
      ["Une image vectorielle, au format SVG par exemple", true, "Décrite par des formes géométriques, elle se redimensionne sans perte."],
      ["Une image JPEG très compressée", false, "Une image matricielle agrandie se pixellise, et la compression ajoute des défauts."],
      ["Une capture d'écran du logo en PNG", false, "Une capture est matricielle : à 3 mètres, les pixels seront visibles."],
      ["Une image GIF animée", false, "Le GIF est matriciel et limité à 256 couleurs."],
    ], "L'image vectorielle est recalculée à chaque taille d'affichage : elle reste nette quelle que soit la taille. C'est le format adapté aux logos, pictogrammes et schémas.", "Agrandir sans perte = image vectorielle.", {
      hints: ["Que se passe-t-il quand on agrandit une grille de pixels ?", "Un type d'image est décrit par des formes mathématiques.", "Son format le plus connu est SVG."],
    }),
    q("B-DIG-FORMATS-005", S, "dig.formats.compression", 2, "Lequel de ces formats utilise une compression avec perte ?", [
      ["JPEG", true, "Il supprime des détails peu visibles pour alléger les photos."],
      ["PNG", false, "PNG compresse sans perte."],
      ["ZIP", false, "ZIP restitue les fichiers à l'identique : compression sans perte."],
      ["FLAC", false, "FLAC est un format audio compressé sans perte."],
    ], "La compression avec perte (JPEG, MP3, MP4) gagne beaucoup de place en supprimant définitivement des informations jugées peu perceptibles. La compression sans perte (ZIP, PNG, FLAC) permet de retrouver exactement l'original.", "Avec perte : JPEG, MP3, MP4 ; sans perte : ZIP, PNG, FLAC.", {
      hints: ["Avec perte = on ne peut pas retrouver l'original exact.", "Pense aux formats de photos des appareils numériques.", "Trois des propositions sont réversibles."],
    }),
    q("B-DIG-FORMATS-006", S, "dig.formats.compression", 1, "Tu compresses un rapport au format ZIP pour l'envoyer, puis ton destinataire le décompresse. Que récupère-t-il ?", [
      ["Un fichier strictement identique à l'original", true, "ZIP est une compression sans perte."],
      ["Un fichier légèrement dégradé, comme une photo JPEG", false, "Confusion avec la compression avec perte."],
      ["Uniquement le texte, sans la mise en forme", false, "ZIP conserve le fichier entier, octet par octet."],
      ["Un fichier converti au format PDF", false, "La compression ne change pas le format du fichier."],
    ], "Une archive ZIP regroupe et compresse des fichiers sans perte : à la décompression, chaque fichier est reconstitué à l'identique. Le gain est important pour du texte, faible pour des fichiers déjà compressés (JPEG, MP4).", "ZIP = compression sans perte : on retrouve l'original exact.", {
      hints: ["ZIP fait-il partie des compressions avec ou sans perte ?", "Un document texte ne peut pas perdre d'information sans être abîmé.", "La décompression restitue l'original."],
    }),
    q("B-DIG-FORMATS-007", S, "dig.formats.poids", 3, "Une image mesure 2 000 × 1 500 pixels ; chaque pixel est codé sur 24 bits. Quel est son poids sans compression ?", [
      ["9 Mo", true, "3 000 000 pixels × 3 octets = 9 000 000 octets = 9 Mo."],
      ["3 Mo", false, "Oubli des 3 octets par pixel : on a compté 1 octet par pixel."],
      ["72 Mo", false, "Les 24 bits ont été comptés comme 24 octets par pixel ; 72 millions de bits valent 9 Mo."],
      ["3 500 octets", false, "Largeur et hauteur ont été additionnées au lieu d'être multipliées."],
    ], "Nombre de pixels : 2 000 × 1 500 = 3 000 000. 24 bits = 3 octets par pixel. Poids : 3 000 000 × 3 = 9 000 000 octets = 9 Mo.", "Poids brut = largeur × hauteur × octets par pixel.", {
      hints: ["Commence par le nombre total de pixels.", "Convertis 24 bits en octets.", "Multiplie 3 000 000 par 3."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-FORMATS-008", S, "dig.formats.image", 2, "Tu dois fournir pour un site web un logo sur fond transparent, sans perte de qualité. Quel format choisis-tu ?", [
      ["PNG", true, "Il gère la transparence et compresse sans perte."],
      ["JPEG", false, "JPEG ne gère pas la transparence et compresse avec perte."],
      ["DOCX", false, "C'est un format de traitement de texte, pas d'image."],
      ["MP3", false, "C'est un format audio."],
    ], "PNG est le format matriciel de référence pour les logos, captures d'écran et illustrations à aplats de couleurs : compression sans perte et canal de transparence. Le SVG serait aussi possible si le logo existe en version vectorielle.", "Transparence sans perte en image matricielle = PNG.", {
      hints: ["Deux critères : transparence et absence de perte.", "JPEG échoue sur les deux critères.", "Le format adapté est aussi celui des captures d'écran."],
    }),
    q("B-DIG-FORMATS-009", S, "dig.formats.poids", 3, "Une photo de 1 800 × 1 200 pixels est imprimée à 300 pixels par pouce (1 pouce = 2,54 cm). Quelle est la taille de l'impression ?", [
      ["Environ 15 cm × 10 cm", true, "1 800 ÷ 300 = 6 pouces ≈ 15,2 cm ; 1 200 ÷ 300 = 4 pouces ≈ 10,2 cm."],
      ["6 cm × 4 cm", false, "Les pouces ont été pris pour des centimètres."],
      ["Environ 63 cm × 42 cm", false, "Calcul fait avec 72 ppp, résolution d'écran, au lieu de 300."],
      ["18 cm × 12 cm", false, "Division par 100 sans tenir compte de la résolution ni de la conversion."],
    ], "Taille en pouces = pixels ÷ résolution : 6 × 4 pouces. Conversion : 6 × 2,54 ≈ 15,2 cm et 4 × 2,54 ≈ 10,2 cm. C'est un format photo classique.", "Taille imprimée = pixels ÷ ppp, puis × 2,54 pour des cm.", {
      hints: ["Divise le nombre de pixels par la résolution.", "Tu obtiens des pouces : 6 et 4.", "Multiplie par 2,54 pour passer en centimètres."],
    }),
    q("B-DIG-FORMATS-010", S, "dig.formats.ouvert", 2, "Qu'est-ce qu'un format de fichier ouvert ?", [
      ["Un format dont les spécifications techniques sont publiques et utilisables librement", true, "Tout logiciel peut le lire et l'écrire, ce qui garantit l'interopérabilité."],
      ["Un format que l'on peut ouvrir sans mot de passe", false, "Confusion entre « ouvert » et « non protégé »."],
      ["Un format modifiable par tous les utilisateurs d'un réseau", false, "Les droits de modification relèvent du partage, pas du format."],
      ["Un format gratuit uniquement sur le site de son éditeur", false, "Un format ouvert ne dépend pas d'un éditeur unique."],
    ], "Un format ouvert est documenté publiquement et sans restriction d'usage (ODT, PDF, CSV, PNG, SVG, HTML). Il évite la dépendance à un logiciel et assure la lecture des fichiers à long terme.", "Format ouvert = spécifications publiques et libres d'usage.", {
      hints: ["« Ouvert » ne parle pas de sécurité.", "Il s'agit de la documentation technique du format.", "Tout développeur peut le mettre en œuvre."],
      reserved: true,
    }),
    q("B-DIG-FORMATS-011", S, "dig.formats.ouvert", 1, "Quel est le format ouvert utilisé par défaut par LibreOffice Writer pour enregistrer un texte ?", [
      ["ODT", true, "OpenDocument Text, format ouvert normalisé ISO."],
      ["ODS", false, "ODS est le format OpenDocument des classeurs (Calc)."],
      ["PSD", false, "PSD est le format propriétaire de Photoshop."],
      ["MP4", false, "MP4 est un format vidéo."],
    ], "La suite OpenDocument comprend ODT (texte), ODS (classeur) et ODP (présentation). LibreOffice les utilise par défaut et sait aussi exporter en DOCX ou en PDF.", "ODT texte, ODS classeur, ODP présentation.", {
      hints: ["Les formats natifs de LibreOffice commencent par OD.", "La dernière lettre indique le type de document.", "T comme texte."],
    }),
    q("B-DIG-FORMATS-012", S, "dig.formats.extension", 2, "Un site exige une image au format JPEG. Tu renommes ton fichier photo.png en photo.jpg. Qu'as-tu fait ?", [
      ["Tu as seulement changé le nom : le contenu reste au format PNG", true, "Renommer ne convertit pas ; il faut exporter en JPEG avec un logiciel."],
      ["Tu as converti l'image en JPEG", false, "L'extension n'est qu'une étiquette : les données internes n'ont pas changé."],
      ["Tu as compressé l'image avec perte", false, "Aucune donnée de l'image n'a été modifiée."],
      ["Tu as rendu l'image vectorielle", false, "Ni PNG ni JPEG ne sont des formats vectoriels."],
    ], "L'extension aide le système à choisir le logiciel d'ouverture, mais le format est déterminé par l'organisation des données. Pour convertir, on ouvre l'image dans un éditeur et on l'exporte en JPEG.", "Renommer l'extension ne convertit pas un fichier.", {
      hints: ["Qu'est-ce qu'une extension ?", "Le contenu du fichier a-t-il été réécrit ?", "Seule une exportation convertit les données."],
      lessonAnchor: "erreur",
    }),
  ],
};
