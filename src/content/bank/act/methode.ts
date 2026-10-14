// Enjeux contemporains : méthode de l'épreuve (act.methode).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.methode";
const q = maker(S);

export const ACT_METHODE: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Réussir l'épreuve d'enjeux contemporains",
      objectives: ["Gérer 40 questions en 30 minutes, soit environ 45 secondes par question", "Construire et réviser des fiches d'actualité efficaces", "Distinguer fait, déclaration, interprétation et incertitude", "Éliminer méthodiquement les distracteurs"],
      regle:
        "L'épreuve compte 40 questions à choix unique (une seule bonne réponse parmi quatre) en 30 minutes, soit 45 secondes par question. Elle porte sur l'actualité et les grands enjeux des dix mois précédant le concours, en huit rubriques : arts et médias, économie, institutions, relations internationales, société et environnement, sciences et santé, sport, technologie. Ce n'est pas un examen d'histoire : on attend des repères récents et les clés pour les comprendre.\n\nLe barème détaillé n'est pas encore confirmé pour 2027 : consulte le règlement officiel du concours avant l'épreuve. Si une réponse fausse ne retire aucun point, il faut répondre à toutes les questions. Dans tous les cas, mieux vaut trancher qu'épuiser son temps sur une seule question.\n\nSe préparer, c'est installer une routine : dix minutes par jour avec deux sources fiables et complémentaires (un quotidien ou une radio d'information, un site institutionnel comme l'Insee, vie-publique.fr ou Toute l'Europe), une fiche par fait important, des révisions espacées. Une bonne fiche contient cinq éléments : le fait, la date, les acteurs, un chiffre avec son unité, la conséquence.\n\nLire l'actualité, c'est aussi trier les énoncés. Un fait est vérifiable (« la BCE a relevé ses taux le 10 septembre 2026 »). Une déclaration rapporte ce que dit un acteur (« le gouvernement affirme ne pas augmenter l'impôt sur le revenu »). Une interprétation est une analyse discutable (« ce budget est trop optimiste »). Une incertitude porte sur ce qui n'est pas encore connu (le futur secrétaire général de l'ONU). Il faut aussi distinguer l'annonce d'une mesure, son vote et son entrée en vigueur.\n\nPoint d'actualité (vérifié le 14 octobre 2026) : pour les écrits du 7 avril 2027, la période couverte s'étend environ de juin 2026 à mars 2027. Les fiches d'actualité de CAP SESAME indiquent pour chaque événement le type de chaque affirmation.",
      formules:
        "40 questions · 30 minutes · 45 secondes par question · 4 propositions · 1 seule bonne réponse\nBarème : vérifier le règlement officiel · sans point négatif, toujours répondre\nFiche en 5 points : fait · date · acteurs · chiffre · conséquence\nRévisions espacées : J0 · J2 · J7 · J21\nFait (vérifiable) · déclaration (attribuée) · interprétation (discutable) · incertitude (inconnu)",
      methode:
        "1. Lire la question en entier et repérer le mot clé (qui, quand, combien, où).\n2. Formuler mentalement la réponse avant de lire les options.\n3. Éliminer les options impossibles (mauvaise année, mauvaise institution, mauvais ordre de grandeur).\n4. Entre deux options proches, chercher le détail qui distingue (date, unité, nationalité).\n5. Au-delà de 45 secondes, choisir la meilleure option restante et passer : aucune question ne doit rester sans réponse.",
      exemple:
        "Question : « Quel est le taux de dépôt de la BCE depuis le 16 septembre 2026 ? » Options : 2,25 % ; 2,50 % ; 2,65 % ; 3,75 %.\nDémarche : je sais que la BCE a relevé ses taux d'un quart de point. 2,25 % est le niveau de juin 2026, avant la hausse ; 2,65 % est un autre taux de la BCE (refinancement) ; 3,75 % est la borne basse de la Fed. Il reste 2,50 %. Temps utilisé : environ 20 secondes, grâce à l'élimination.",
      erreur:
        "✗ Laisser une question sans réponse quand l'erreur ne coûte rien → ✓ On répond toujours.\n✗ S'attarder deux minutes sur une question difficile → ✓ Au-delà de 45 secondes, on tranche et on avance.\n✗ Réviser l'actualité trois semaines avant l'épreuve → ✓ Installer une routine courte dès maintenant.\n✗ Mémoriser une opinion comme un fait → ✓ Noter qui parle et ce qui est vérifiable.\n✗ Confondre annonce et entrée en vigueur → ✓ Noter les deux dates.",
      approfondir:
        "Une fois par mois, fais une série de 40 questions mélangées en 30 minutes pour t'entraîner aux changements rapides de sujet. Repère tes rubriques faibles et rééquilibre tes lectures. Les distracteurs les plus fréquents sont l'année précédente, l'institution voisine, le finaliste battu et un chiffre proche : prépare-toi à les reconnaître. Les questions sur des événements postérieurs au 14 octobre 2026 (Goncourt 2026, COP31, résultats des élections américaines) devront être ajoutées à tes fiches au fil de l'eau.",
      cards: [
        ["Format de l'épreuve", "40 questions, 30 minutes, 4 propositions, une seule bonne réponse", false],
        ["Temps par question", "Environ 45 secondes", false],
        ["Fiche d'actualité en 5 points", "Fait, date, acteurs, chiffre, conséquence", false],
        ["Fait / interprétation", "Le fait est vérifiable ; l'interprétation est une analyse discutable", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-METH-001", "format", 1, "Combien de temps faut-il consacrer en moyenne à chaque question de l'épreuve d'enjeux contemporains ?", [
      ["Environ 45 secondes", true, "30 minutes pour 40 questions."],
      ["Environ 1 minute 30", false, "Erreur de calcul : ce rythme ne permettrait de traiter que 20 questions."],
      ["Environ 20 secondes", false, "Rythme trop rapide pour le format de l'épreuve."],
      ["Environ 3 minutes", false, "Rythme d'une épreuve à dossier, pas d'un QCM d'actualité."],
    ], "30 minutes = 1 800 secondes ; 1 800 / 40 = 45 secondes par question.", "Enjeux contemporains : environ 45 secondes par question.", ["L'épreuve dure 30 minutes.", "Elle compte 40 questions.", "Convertis en secondes puis divise."], { a: "formules" }),
    q("B-ACT-METH-002", "format", 1, "Tu hésites sur une question et le temps presse. Si une réponse fausse ne retire aucun point, quelle est la meilleure stratégie ?", [
      ["Choisir l'option la plus probable et passer à la suite", true, "Une réponse donnée peut rapporter des points, une absence jamais."],
      ["Laisser la question sans réponse pour éviter une pénalité", false, "Dans ce cas, il n'y a pas de pénalité : une absence vaut zéro, comme une erreur."],
      ["Relire l'énoncé trois fois avant de choisir", false, "Le temps perdu ne change pas l'hésitation et pénalise les questions suivantes."],
      ["Rester sur la question jusqu'à être certain", false, "Le temps perdu pénalise les questions suivantes."],
    ], "Si l'erreur ne coûte rien, une réponse fausse et une absence valent toutes deux zéro. Répondre au hasard entre quatre options donne une chance sur quatre, et une sur deux après élimination de deux options.", "Sans point négatif, on répond toujours.", ["Une erreur ne retire pas de points dans cette hypothèse.", "Une absence ne rapporte rien.", "Compare ce que rapporte chaque choix."], { a: "erreur" }),
    q("B-ACT-METH-003", "format", 2, "Sur quelle période porte l'actualité interrogée pour les écrits SESAME du 7 avril 2027 ?", [
      ["Environ les dix mois précédant l'épreuve, soit de juin 2026 à mars 2027", true, "Règle annoncée par le concours."],
      ["Uniquement le mois de mars 2027", false, "Période beaucoup trop courte."],
      ["Toute l'histoire depuis 1945", false, "L'épreuve n'est pas une épreuve d'histoire."],
      ["L'année civile 2026", false, "La période déborde sur le début de 2027 et ne commence pas en janvier."],
    ], "Le concours précise que l'épreuve porte sur l'actualité et les grands enjeux des dix mois précédents. Les clés de compréhension stables (institutions, organisations internationales) restent nécessaires pour comprendre cette actualité.", "L'épreuve couvre les dix mois précédant le concours.", ["La période est exprimée en mois.", "Elle se termine juste avant l'épreuve.", "Elle compte dix mois."]),
    q("B-ACT-METH-004", "fait-opinion", 2, "Laquelle de ces phrases énonce un fait vérifiable ?", [
      ["« La BCE a relevé ses taux directeurs de 0,25 point le 10 septembre 2026. »", true, "Décision datée, consultable sur le site de la BCE."],
      ["« Cette hausse des taux est une erreur qui va tuer la croissance. »", false, "C'est une interprétation, discutable."],
      ["« La BCE aurait dû agir beaucoup plus tôt. »", false, "C'est une opinion sur ce qu'il aurait fallu faire."],
      ["« Les ménages vont sûrement souffrir de cette décision. »", false, "C'est une prévision incertaine, pas un fait établi."],
    ], "Un fait est daté, précis et vérifiable auprès d'une source primaire. Les autres phrases expriment un jugement ou une anticipation.", "Un fait est vérifiable ; une opinion ou une prévision ne l'est pas.", ["Cherche la phrase qu'on peut vérifier dans une source officielle.", "Les jugements de valeur sont exclus.", "Les prévisions aussi."], { a: "regle" }),
    q("B-ACT-METH-005", "fait-opinion", 2, "« Le gouvernement affirme que le budget 2027 n'augmente pas l'impôt sur le revenu. » Comment classer cette phrase dans une fiche d'actualité ?", [
      ["Comme une déclaration attribuée à un acteur", true, "On rapporte ce que dit le gouvernement."],
      ["Comme un fait établi", false, "On ne vérifie pas ici le contenu, seulement que le gouvernement l'affirme."],
      ["Comme une interprétation de journaliste", false, "La phrase n'analyse pas, elle rapporte un propos."],
      ["Comme une incertitude", false, "Le propos a bien été tenu ; ce n'est pas un élément inconnu."],
    ], "Une déclaration rapporte la position d'un acteur, avec son nom. Il faut la noter comme telle : elle peut être confirmée, nuancée ou contredite par les faits.", "Déclaration = propos attribué à un acteur, distinct du fait.", ["La phrase contient le verbe « affirme ».", "Elle rapporte ce que dit quelqu'un.", "On note qui parle."], { a: "regle" }),
    q("B-ACT-METH-006", "fiches", 1, "Quels éléments une fiche d'actualité efficace doit-elle contenir ?", [
      ["Le fait, la date, les acteurs, un chiffre avec son unité et la conséquence", true, "Les cinq éléments qui permettent de répondre à une question précise."],
      ["Un long résumé de l'article sans date", false, "Trop vague pour répondre à une question factuelle."],
      ["Uniquement l'opinion personnelle de l'élève", false, "Une opinion ne permet pas de répondre au QCM."],
      ["Le titre de l'article et le nom du journal", false, "Insuffisant pour retrouver le contenu."],
    ], "Les questions du concours portent sur des noms, des dates, des lieux et des chiffres : la fiche doit les contenir, avec la conséquence pour donner du sens.", "Fiche en 5 points : fait, date, acteurs, chiffre, conséquence.", ["Pense aux questions qui tombent : qui, quand, combien.", "Il faut cinq éléments.", "Le dernier élément explique pourquoi c'est important."], { a: "formules" }),
    q("B-ACT-METH-007", "fiches", 2, "Quelle méthode de révision permet le mieux de retenir l'actualité sur dix mois ?", [
      ["Des rappels espacés (J0, J2, J7, J21) en se testant sans regarder la réponse", true, "La récupération active consolide la mémoire."],
      ["Relire toutes les fiches la veille du concours", false, "Le bachotage tardif ne permet pas de retenir dix mois d'actualité."],
      ["Accumuler des captures d'écran d'articles", false, "Sans reprise active, elles ne sont jamais mémorisées."],
      ["Lire un seul gros dossier en mars 2027", false, "Trop tard et trop passif."],
    ], "Se tester à intervalles croissants est la méthode la plus efficace pour la mémoire à long terme. Une série mensuelle de 40 questions en 30 minutes complète l'entraînement.", "Réviser par rappels espacés et tests actifs.", ["La mémoire se consolide quand on se teste.", "Les intervalles augmentent.", "J0, J2, J7…"], { a: "formules" }),
    q("B-ACT-METH-008", "pieges", 3, "Une question demande : « Quel pays a remporté la Coupe du monde 2026 ? » Lequel de ces distracteurs est le plus typique d'un QCM d'actualité ?", [
      ["L'Argentine, finaliste battue et tenante du titre précédent", true, "Le perdant de la finale est le distracteur favori."],
      ["Le Luxembourg", false, "Distracteur absurde, rarement utilisé."],
      ["Le Japon, pays hôte", false, "Le Japon n'était pas pays hôte en 2026."],
      ["L'Antarctique", false, "Ce n'est pas un pays."],
    ], "Les distracteurs efficaces sont plausibles : finaliste, vainqueur de l'édition précédente, pays hôte, demi-finaliste. Pour les éviter, il faut retenir le vainqueur ET le finaliste.", "Retenir vainqueur et finaliste : le finaliste est le piège classique.", ["Un bon distracteur est plausible.", "Pense à l'équipe battue en finale.", "C'est aussi la tenante du titre 2022."], { n: ["mondial-2026"], a: "approfondir" }),
    q("B-ACT-METH-009", "pieges", 3, "Une loi est votée par le Parlement en juillet, validée par le Conseil constitutionnel en août, puis promulguée. Dans une fiche, que faut-il noter pour éviter les pièges ?", [
      ["Les dates distinctes du vote, de la décision du Conseil constitutionnel et de l'entrée en application", true, "Chaque étape peut faire l'objet d'une question."],
      ["Uniquement la date du vote", false, "Une question peut porter sur la décision du Conseil constitutionnel."],
      ["Uniquement la date de promulgation", false, "On perd l'information sur le vote et le contrôle."],
      ["Aucune date : seul le sujet compte", false, "Les dates sont au cœur des questions d'actualité."],
    ], "Exemple : l'aide à mourir, adoptée le 15 juillet 2026 et validée par le Conseil constitutionnel le 14 août 2026. Annonce, vote, contrôle et entrée en vigueur sont des étapes distinctes.", "Distinguer annonce, vote, contrôle de constitutionnalité et entrée en vigueur.", ["Une loi passe par plusieurs étapes.", "Chacune a sa propre date.", "Le Conseil constitutionnel intervient entre le vote et la promulgation."], { n: ["aide-a-mourir"], a: "erreur" }),
    q("B-ACT-METH-010", "format", 2, "Tu bloques depuis une minute sur une question d'enjeux contemporains. Quel réflexe adopter ?", [
      ["Éliminer les options manifestement fausses, trancher et avancer", true, "Une minute dépasse déjà le rythme moyen de 45 secondes."],
      ["Recommencer la lecture de l'énoncé depuis le début", false, "Relire ne fait pas apparaître une connaissance absente et coûte du temps."],
      ["Attendre qu'un souvenir revienne", false, "Le chronomètre tourne pour les 39 autres questions."],
      ["Choisir systématiquement la réponse la plus longue", false, "Aucune règle ne place la bonne réponse dans l'option la plus longue."],
    ], "Avec 45 secondes par question, chaque question qui en prend le double coûte une question plus loin. L'élimination augmente la probabilité de bonne réponse sans perdre de temps.", "Au-delà de 45 secondes : éliminer, trancher, avancer.", ["Calcule le temps moyen par question.", "Une minute, c'est déjà trop.", "L'élimination améliore les chances sans coûter de temps."], { a: "methode" }),
  ],
};
