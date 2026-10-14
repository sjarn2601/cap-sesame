// Compétences digitales : recherche et évaluation de l'information (dig.info).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.info";

export const DIG_INFO: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Rechercher et évaluer l'information",
      objectives: ["Formuler une requête précise avec les opérateurs", "Évaluer la fiabilité d'une source", "Vérifier une image ou une information virale", "Distinguer désinformation et mésinformation"],
      regle:
        "Un moteur de recherche (Google, Bing, Qwant, DuckDuckGo, Ecosia…) ne lit pas le web en direct : des robots parcourent les pages, les indexent, puis un algorithme classe les résultats selon des centaines de critères (pertinence, popularité, fraîcheur, localisation, historique). Être premier ne veut donc pas dire être vrai. Les résultats marqués « Sponsorisé » sont des annonces payées.\n\nLes opérateurs affinent une requête : les guillemets imposent une expression exacte, le signe moins exclut un mot, site: limite la recherche à un site ou à un domaine (site:gouv.fr), filetype: impose un type de fichier (filetype:pdf), OR (en majuscules) accepte l'un ou l'autre de deux mots. Les moteurs ne tiennent pas compte des majuscules dans les mots-clés.\n\nÉvaluer une source, c'est répondre à cinq questions. Qui publie ? (auteur identifié, page « À propos », mentions légales, que tout éditeur professionnel doit afficher). Quand ? (date de publication et de mise à jour). D'où viennent les données ? (source primaire citée, lien vers l'étude d'origine). Pourquoi ? (informer, vendre, convaincre, divertir : un site parodique invente volontairement). Est-ce confirmé ailleurs ? (recoupement par des sources indépendantes, pas des sites qui reprennent la même dépêche).\n\nVérifier un contenu viral : recherche d'image inversée (Google Lens, Bing Visual Search, TinEye) pour retrouver la première publication d'une image ; examen de l'URL ; consultation des rubriques de vérification des médias (AFP Factuel, Les Décodeurs).\n\nVocabulaire : la désinformation est une information fausse diffusée volontairement pour tromper ; la mésinformation est une information fausse partagée de bonne foi ; la malinformation est une information vraie utilisée pour nuire. La bulle de filtres désigne l'enfermement produit par les algorithmes de recommandation ; le biais de confirmation est notre tendance personnelle à croire ce qui conforte nos idées.",
      formules:
        "\"expression exacte\" → les mots dans cet ordre\nmot1 -mot2 → exclut les pages contenant mot2\nsite:insee.fr chômage → seulement les pages du site insee.fr\nfiletype:pdf rapport → seulement des fichiers PDF\nfrance OR belgique → l'un ou l'autre (OR en majuscules)\nSource primaire = l'origine de la donnée (étude, institut, texte de loi) ; source secondaire = ce qui la rapporte",
      methode:
        "1. Qui ? Chercher l'auteur, la page « À propos », les mentions légales.\n2. Quand ? Repérer la date de publication et de mise à jour.\n3. D'où ? Remonter à la source primaire des chiffres ou des citations.\n4. Pourquoi ? Identifier l'intention : informer, vendre, militer, parodier.\n5. Confirmé ? Recouper avec au moins deux sources indépendantes.\n6. Pour une image : recherche inversée, puis comparer date et lieu annoncés.",
      exemple:
        "Une publication affirme : « Selon une étude, 70 % des lycéens dorment moins de 6 heures ». Étape 1 : aucune étude n'est nommée, l'auteur est un compte anonyme. Étape 2 : on cherche \"lycéens\" sommeil étude filetype:pdf, puis site:sante.gouv.fr sommeil adolescents. Étape 3 : on trouve l'enquête d'origine, qui porte sur les nuits de semaine et donne un chiffre différent. Conclusion : le chiffre viral est déformé ; on cite l'étude d'origine, pas la publication.\n\nAutre cas : une photo d'incendie « prise hier » est soumise à une recherche inversée. Elle apparaît dans un article de 2021 sur un autre pays : elle est sortie de son contexte.",
      erreur:
        "✗ Croire le premier résultat parce qu'il est en tête → ✓ Le classement est algorithmique ou payé ; il faut évaluer la source.\n✗ Prendre deux sites qui publient le même texte pour deux confirmations → ✓ Vérifier qu'ils ne reprennent pas la même dépêche ; il faut des sources indépendantes.\n✗ Écrire -site:exemple.fr pour chercher sur un site → ✓ site:exemple.fr limite au site ; le signe moins exclut.\n✗ Juger une image vraie parce qu'elle est nette → ✓ Vérifier sa date et son contexte d'origine par recherche inversée.\n✗ Confondre bulle de filtres et biais de confirmation → ✓ La bulle vient de l'algorithme, le biais vient de nous.",
      approfondir:
        "Au concours, une question sur les opérateurs se traite en 20 secondes si tu as retenu le tableau : garde ton temps pour les questions de tableur ou d'algorithme. Pour une question d'évaluation de source, élimine d'abord tous les critères d'apparence (popularité, nombre de partages, design, rang dans les résultats) : ils ne prouvent rien. Le bon critère parle presque toujours d'auteur, de date, de source primaire ou de recoupement. Lien : l'URL elle-même est un indice (voir le cours sur le web : le vrai nom de domaine se lit juste avant l'extension).",
      cards: [
        ["Limiter une recherche à un site", "site:nomdedomaine (ex. site:cnil.fr)", false],
        ["Chercher seulement des PDF", "filetype:pdf", false],
        ["Désinformation", "Information fausse diffusée volontairement pour tromper", true],
        ["Mésinformation", "Information fausse partagée de bonne foi", true],
        ["Vérifier l'origine d'une image", "Recherche d'image inversée (Lens, TinEye…)", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-INFO-001", S, "dig.info.operateurs", 1, "Tu veux des informations sur les bourses de lycée, mais uniquement sur le site service-public.fr. Quelle requête tapes-tu ?", [
      ["bourse lycée site:service-public.fr", true, "L'opérateur site: limite les résultats aux pages de ce site."],
      ["bourse lycée -service-public.fr", false, "Le signe moins exclut un terme : c'est l'inverse de l'effet voulu."],
      ["bourse lycée filetype:service-public.fr", false, "filetype: impose un type de fichier (pdf, docx…), pas un site."],
      ["bourse lycée \"service-public.fr\"", false, "Les guillemets cherchent ce texte dans les pages, sans limiter la recherche au site."],
    ], "L'opérateur site: suivi d'un nom de domaine restreint la recherche à ce site. Il se combine avec les mots-clés : bourse lycée site:service-public.fr.", "site:domaine limite la recherche à un site.", {
      hints: ["Il existe un opérateur dédié à la restriction par site.", "Cet opérateur s'écrit avec deux-points, sans espace, avant le nom de domaine.", "Écarte le signe moins (exclusion) et filetype (type de fichier)."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-INFO-002", S, "dig.info.operateurs", 1, "Pour un exposé, tu cherches des rapports officiels sur la sobriété numérique publiés au format PDF. Quelle requête est la plus adaptée ?", [
      ["sobriété numérique filetype:pdf", true, "filetype:pdf ne renvoie que des documents PDF contenant ces mots."],
      ["sobriété numérique -pdf", false, "Le signe moins exclut les pages contenant « pdf »."],
      ["sobriété numérique site:pdf", false, "site: attend un nom de domaine, pas un format."],
      ["\"sobriété numérique pdf\"", false, "Les guillemets exigent cette suite exacte de trois mots, rarement écrite ainsi."],
    ], "filetype: (ou ext: sur certains moteurs) filtre par extension de fichier. Les rapports institutionnels étant souvent en PDF, c'est l'opérateur le plus efficace ici.", "filetype:extension filtre par type de fichier.", {
      hints: ["Tu veux filtrer par type de fichier, pas par mot.", "L'opérateur porte le nom anglais de « type de fichier ».", "Il s'écrit filetype: suivi de l'extension."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-INFO-003", S, "dig.info.operateurs", 2, "Que renvoie la requête : télétravail (France OR Belgique) ?", [
      ["Les pages qui contiennent « télétravail » et au moins l'un des mots « France » ou « Belgique »", true, "OR en majuscules accepte l'un ou l'autre des deux termes, ou les deux."],
      ["Les pages qui contiennent « télétravail », « France » et « Belgique » à la fois", false, "Confusion entre OR (l'un ou l'autre) et ET (tous les mots)."],
      ["Les pages sur le télétravail qui ne parlent ni de la France ni de la Belgique", false, "Confusion avec l'exclusion, obtenue par le signe moins."],
      ["Les pages contenant l'expression exacte « France OR Belgique »", false, "Sans guillemets, OR en majuscules est interprété comme un opérateur."],
    ], "Par défaut, un moteur cherche tous les mots (ET implicite). OR, écrit en majuscules, élargit la recherche à l'un ou l'autre terme. Ici, « télétravail » reste obligatoire.", "OR (en majuscules) = l'un ou l'autre ; espace = tous les mots.", {
      hints: ["OR est un opérateur logique.", "En français, OR signifie « ou » ; l'espace entre les mots vaut « et ».", "Télétravail est exigé ; parmi France et Belgique, un seul suffit."],
    }),
    q("B-DIG-INFO-004", S, "dig.info.source", 1, "Sur le site d'une entreprise ou d'un média en ligne, quelle rubrique permet le plus sûrement d'identifier l'éditeur responsable de la publication ?", [
      ["Les mentions légales", true, "Tout éditeur professionnel doit y indiquer son identité et ses coordonnées."],
      ["Le fil des commentaires", false, "Les commentaires viennent des lecteurs, pas de l'éditeur."],
      ["Le nombre d'abonnés affiché", false, "L'audience n'identifie personne."],
      ["La politique de cookies", false, "Elle décrit les traceurs, pas qui édite le site."],
    ], "La loi pour la confiance dans l'économie numérique impose aux éditeurs professionnels d'afficher des mentions légales (dénomination, adresse, directeur de publication, hébergeur). Leur absence est un signal d'alerte.", "Pour savoir qui parle : mentions légales et page « À propos ».", {
      hints: ["La première question à se poser est « Qui publie ? ».", "Une rubrique obligatoire en bas de page donne l'identité de l'éditeur.", "Son nom contient le mot « légales »."],
    }),
    q("B-DIG-INFO-005", S, "dig.info.source", 2, "Un blog affirme : « Selon l'Insee, le taux de chômage a baissé de 0,3 point ce trimestre ». Quelle vérification est la plus solide ?", [
      ["Consulter directement la publication de l'Insee sur ce trimestre", true, "Remonter à la source primaire permet de vérifier le chiffre et son contexte."],
      ["Vérifier que d'autres blogs donnent le même chiffre", false, "Ils peuvent tous recopier la même erreur : ce ne sont pas des sources indépendantes."],
      ["Lire les commentaires sous l'article", false, "Des avis de lecteurs ne valent pas vérification."],
      ["Regarder si l'article est bien classé dans le moteur de recherche", false, "Le classement ne garantit pas l'exactitude."],
    ], "Quand un contenu cite une source, on va lire la source elle-même : ici la publication de l'Insee. On vérifie le chiffre, la période et le champ (France entière ? métropole ?).", "Toujours remonter à la source primaire d'un chiffre.", {
      hints: ["Distingue source primaire et source secondaire.", "Qui a produit le chiffre à l'origine ?", "La vérification la plus directe consiste à lire le producteur de la donnée."],
      lessonAnchor: "methode",
    }),
    q("B-DIG-INFO-006", S, "dig.info.source", 3, "Deux sites d'information publient la même nouvelle, avec exactement les mêmes phrases. Que peux-tu en conclure ?", [
      ["Rien de décisif : ils reprennent sans doute la même source, il faut une confirmation indépendante", true, "Un texte identique signale une source commune (dépêche, communiqué), pas deux vérifications."],
      ["L'information est confirmée, puisque deux sources la donnent", false, "Deux reprises d'un même texte ne sont pas deux sources indépendantes."],
      ["L'information est forcément fausse", false, "Reprendre une dépêche est courant et ne rend pas l'information fausse."],
      ["Le site le plus ancien a forcément raison", false, "L'ancienneté d'un site ne prouve pas l'exactitude d'un article."],
    ], "Recouper, c'est confronter des sources qui ont vérifié séparément. Des textes identiques viennent souvent d'une même dépêche d'agence ou d'un même communiqué : on cherche une source qui a enquêté de son côté, ou la source d'origine.", "Recoupement = sources indépendantes, pas copies d'un même texte.", {
      hints: ["Qu'est-ce qu'un recoupement valable ?", "Pourquoi deux textes seraient-ils identiques mot pour mot ?", "Une dépêche reprise deux fois reste une seule source."],
      lessonAnchor: "erreur",
      reserved: true,
    }),
    q("B-DIG-INFO-007", S, "dig.info.verif", 2, "Une photo d'inondation circule, présentée comme prise hier à Lyon. Une recherche d'image inversée montre qu'elle a été publiée en 2019 dans un article sur un autre pays. Que conclus-tu ?", [
      ["L'image est sortie de son contexte : elle ne montre pas l'événement annoncé", true, "Une image publiée en 2019 ne peut pas avoir été prise hier."],
      ["L'image est authentique, puisqu'elle existe dans un article de presse", false, "Elle est authentique pour 2019, pas pour l'événement d'hier."],
      ["La recherche inversée s'est trompée de photo", false, "Une correspondance avec une publication datée est précisément l'information utile."],
      ["L'image a forcément été créée par une IA", false, "Rien ne l'indique : elle a simplement été réutilisée."],
    ], "La recherche inversée retrouve les publications antérieures d'une image. Une date antérieure à l'événement prouve un détournement de contexte, procédé de désinformation très fréquent.", "Une image antérieure à l'événement annoncé est détournée.", {
      hints: ["Compare la date annoncée et la date trouvée.", "Une photo peut-elle être publiée avant d'avoir été prise ?", "Le problème ne vient pas de l'image elle-même mais de la légende."],
      lessonAnchor: "exemple",
    }),
    q("B-DIG-INFO-008", S, "dig.info.moteur", 1, "Dans la page de résultats d'un moteur, les premiers liens portent la mention « Sponsorisé ». Qu'est-ce que cela signifie ?", [
      ["Ce sont des annonces payées par des annonceurs", true, "La mention signale une publicité, distincte des résultats naturels."],
      ["Ce sont les sites les plus fiables sur le sujet", false, "Payer pour apparaître ne garantit aucune fiabilité."],
      ["Ce sont des pages vérifiées par le moteur", false, "La mention signale un paiement, pas une vérification de l'exactitude du contenu."],
      ["Ce sont les pages les plus visitées", false, "La position d'une annonce dépend surtout d'enchères, pas de l'audience."],
    ], "Les moteurs se financent par la publicité : les liens « Sponsorisé » sont achetés. Les résultats naturels, eux, sont classés par l'algorithme. Aucun des deux classements n'est une garantie de fiabilité.", "« Sponsorisé » = publicité payée.", {
      hints: ["Comment un moteur gratuit gagne-t-il de l'argent ?", "Le mot « sponsor » renvoie à un financement.", "Ces liens sont achetés."],
    }),
    q("B-DIG-INFO-009", S, "dig.info.desinfo", 2, "Sur un réseau social, l'algorithme te propose surtout des contenus proches de ceux que tu as déjà aimés, si bien que tu ne vois presque plus d'avis contraires. Comment appelle-t-on ce phénomène ?", [
      ["La bulle de filtres", true, "C'est l'enfermement produit par la personnalisation algorithmique."],
      ["Le biais de confirmation", false, "Le biais de confirmation est une tendance psychologique personnelle, pas l'effet de l'algorithme."],
      ["L'infobésité", false, "L'infobésité désigne l'excès d'informations, pas leur uniformité."],
      ["La mésinformation", false, "La mésinformation est le partage de bonne foi d'une information fausse."],
    ], "La bulle de filtres (Eli Pariser, 2011) est créée par les algorithmes de recommandation qui sélectionnent ce qui ressemble à nos goûts. Elle renforce le biais de confirmation mais ne se confond pas avec lui.", "Bulle de filtres = algorithme ; biais de confirmation = psychologie.", {
      hints: ["Qui sélectionne les contenus ici : toi ou la plateforme ?", "Le phénomène vient de la personnalisation algorithmique.", "Son nom évoque un enfermement dans une sphère."],
    }),
    q("B-DIG-INFO-010", S, "dig.info.desinfo", 3, "Ta tante partage sur une messagerie un faux remède contre la grippe, persuadée de rendre service à ses proches. Comment qualifier ce partage ?", [
      ["De la mésinformation", true, "L'information est fausse mais partagée de bonne foi, sans intention de tromper."],
      ["De la désinformation", false, "La désinformation suppose l'intention de tromper, absente ici."],
      ["De la malinformation", false, "La malinformation utilise une information vraie pour nuire."],
      ["De la satire", false, "La satire est une parodie assumée, pas une croyance sincère."],
    ], "Ce qui distingue désinformation et mésinformation, c'est l'intention : le créateur du faux remède fait peut-être de la désinformation, mais ta tante, qui y croit, relaie de la mésinformation.", "Désinformation = intention de tromper ; mésinformation = bonne foi.", {
      hints: ["Le critère décisif est l'intention de la personne qui partage.", "Ta tante croit l'information vraie.", "Le terme commence par « més- »."],
      reserved: true,
    }),
  ],
};
