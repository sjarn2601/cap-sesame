// MATH · Logique et raisonnement : suites logiques, implication, négation, ensembles, énigmes.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.logique";
const m = maker(S);

export const LOGIQUE: PartieMath = {
  skill: competence(S, "Logique", "Logique et raisonnement", ["logique", "raisonnement", "suite logique", "implication", "reciproque", "contraposee", "negation", "ensembles", "diagramme de venn", "enigme", "contre-exemple"]),
  lesson: {
    skillId: S,
    title: "Logique et raisonnement : suites, implications, négations et ensembles",
    objectives: ["Trouver la règle d'une suite logique de nombres", "Distinguer implication, réciproque et contraposée", "Nier correctement une phrase avec « tous » ou « au moins un »", "Résoudre un problème d'ensembles ou une énigme par élimination"],
    prerequisites: ["math.calc"],
    regle:
      "Suites logiques de nombres : calcule d'abord les écarts entre termes consécutifs. S'ils sont constants, la suite est arithmétique ; s'ils forment eux-mêmes une suite simple (2, 4, 6…), continue cette suite d'écarts. Sinon, regarde les rapports (×2, ×3), les carrés et les cubes (1, 4, 9, 16…), les produits n(n + 1), ou une alternance de deux opérations (×2 puis −3). Vérifie toujours la règle sur tous les termes donnés, pas seulement les deux premiers.\n\nImplication « si P, alors Q » : elle est fausse uniquement quand P est vraie et Q fausse. Sa réciproque est « si Q, alors P » : elle peut être fausse même quand l'implication est vraie. Sa contraposée est « si non Q, alors non P » : elle est toujours équivalente à l'implication. De « si P alors Q » et « non Q », on déduit « non P ». En revanche, de « Q », on ne peut rien déduire sur P.\n\nContre-exemple : pour montrer qu'une affirmation générale (« tout nombre pair est multiple de 6 ») est fausse, un seul contre-exemple suffit (4).\n\nNégation : la négation de « tous les éléments vérifient P » est « au moins un élément ne vérifie pas P ». La négation de « il existe un élément qui vérifie P » est « aucun élément ne vérifie P ». La négation de « A et B » est « non A ou non B » ; celle de « A ou B » est « non A et non B ».\n\nEnsembles : |A ∪ B| = |A| + |B| − |A ∩ B|. Les éléments qui ne sont dans aucun des deux ensembles valent total − |A ∪ B|. Un diagramme de Venn, rempli en partant de l'intersection, résout la plupart des problèmes.\n\nÉnigmes : liste les possibilités dans un tableau et élimine celles qui contredisent une information. Pour les énigmes de menteurs, fais une hypothèse (« A dit vrai ») et cherche une contradiction.",
    formules:
      "Implication P ⇒ Q fausse seulement si P vraie et Q fausse\nContraposée : non Q ⇒ non P (équivalente)\nRéciproque : Q ⇒ P (pas forcément vraie)\nNon (tous P) = au moins un non P\nNon (A et B) = non A ou non B ; non (A ou B) = non A et non B\n|A ∪ B| = |A| + |B| − |A ∩ B|\nAucun des deux = total − |A ∪ B|",
    methode:
      "1. Suites : écris les écarts, puis les rapports, puis cherche une alternance.\n2. Vérifie la règle sur chaque terme donné avant de prolonger.\n3. Implications : traduis en « si… alors… » et repère ce qui est connu.\n4. Ensembles : remplis le diagramme en partant de l'intersection.\n5. Énigmes : tableau des possibilités, élimination, vérification finale.",
    exemple:
      "Suite 1, 3, 7, 15, 31 : écarts 2, 4, 8, 16, qui doublent. Le prochain écart est 32 : terme suivant 63. Règle équivalente : chaque terme vaut le double du précédent plus 1.\n\n« Si un produit est en promotion, il porte une étiquette rouge. » Ce produit n'a pas d'étiquette rouge : il n'est pas en promotion (contraposée). Ce produit a une étiquette rouge : on ne peut pas conclure, car la réciproque n'est pas garantie.",
    erreur:
      "✗ Nier « tous ont réussi » par « aucun n'a réussi » → ✓ « au moins un n'a pas réussi »\n✗ Croire qu'une implication vraie a une réciproque vraie → ✓ chercher un contre-exemple\n✗ Additionner les effectifs de deux ensembles sans retirer l'intersection → ✓ |A| + |B| − |A ∩ B|\n✗ Valider une règle de suite sur deux termes seulement → ✓ la vérifier sur tous les termes\n✗ Déduire P de Q à partir de « si P alors Q » → ✓ seule la contraposée est équivalente",
    approfondir:
      "Le raisonnement logique est au cœur de l'épreuve de mathématiques : lecture rigoureuse des énoncés, contre-exemples, traduction d'une phrase en relation.\n\nPour une suite, si aucune règle n'apparaît en vingt secondes, teste les options : la bonne est la seule qui prolonge naturellement une régularité vérifiée sur tous les termes.\n\nGestion du temps : une énigme se résout souvent en partant de l'information la plus contraignante (celle qui exclut le plus de cas).",
    cards: [
      ["Contraposée de « si P alors Q »", "Si non Q, alors non P", false],
      ["Négation de « tous les clients ont payé »", "Au moins un client n'a pas payé", false],
      ["|A ∪ B|", "|A| + |B| − |A ∩ B|", false],
      ["Réfuter une affirmation générale", "Un seul contre-exemple suffit", false],
      ["Suite 2, 6, 12, 20, 30", "Écarts 4, 6, 8, 10 : terme suivant 42", false],
    ],
  },
  questions: [
    m("B-MATH-LOG-001", "suite", 1, "Quel nombre prolonge logiquement la suite 2, 6, 12, 20, 30, … ?", [
      ["42", true, "Écarts 4, 6, 8, 10, puis 12 : 30 + 12 = 42."],
      ["40", false, "Le dernier écart (10) a été répété au lieu d'augmenter de 2."],
      ["44", false, "Écart augmenté de 4 au lieu de 2 : 30 + 14."],
      ["60", false, "Doublement du dernier terme : la suite n'est pas géométrique (6/2 ≠ 12/6)."],
    ], "Les écarts successifs sont 4, 6, 8, 10 : ils augmentent de 2. Le suivant est 12, donc 30 + 12 = 42. Autre lecture : n(n + 1) pour n = 1 à 6, et 6 × 7 = 42.", "Dans une suite logique, on étudie d'abord les écarts entre termes consécutifs.", [
      "Calcule les écarts entre termes consécutifs.",
      "Les écarts sont 4, 6, 8, 10 : quelle est leur régularité ?",
      "Ajoute l'écart suivant au dernier terme.",
    ], "methode"),
    m("B-MATH-LOG-002", "suite", 2, "Quel nombre prolonge logiquement la suite 3, 5, 9, 17, 33, … ?", [
      ["65", true, "Chaque terme vaut le double du précédent moins 1 : 2 × 33 − 1 = 65."],
      ["49", false, "Le dernier écart (+16) a été répété ; or les écarts doublent : 2, 4, 8, 16, 32."],
      ["66", false, "Doublement simple : la règle est « double moins 1 »."],
      ["64", false, "Les termes valent 2ⁿ + 1 ; le +1 a été oublié."],
    ], "Écarts : 2, 4, 8, 16 ; ils doublent, le suivant est 32 : 33 + 32 = 65. Règle équivalente : uₙ₊₁ = 2uₙ − 1 (2 × 33 − 1 = 65), ou uₙ = 2ⁿ + 1.", "Quand les écarts forment une suite géométrique, on prolonge la suite des écarts.", [
      "Calcule les écarts : 2, 4, 8, 16.",
      "Quelle est la régularité de ces écarts ?",
      "Ajoute l'écart suivant, 32.",
    ], "exemple"),
    m("B-MATH-LOG-003", "negation", 2, "Quelle est la négation de la phrase « Tous les clients ont payé par carte » ?", [
      ["Au moins un client n'a pas payé par carte.", true, "Nier « tous » revient à affirmer « au moins un ne… pas »."],
      ["Aucun client n'a payé par carte.", false, "C'est le contraire extrême, pas la négation : il suffit qu'un seul client ait payé autrement."],
      ["Un seul client n'a pas payé par carte.", false, "Trop restrictif : la négation est vraie aussi si plusieurs clients n'ont pas payé par carte."],
      ["Au moins un client a payé par carte.", false, "Cette phrase est compatible avec la phrase de départ : ce n'est pas sa négation."],
    ], "La phrase « tous ont payé par carte » est fausse dès qu'un client a payé autrement. Sa négation est donc « au moins un client n'a pas payé par carte ». « Aucun » est beaucoup plus fort.", "La négation de « tous vérifient P » est « au moins un ne vérifie pas P ».", [
      "Dans quel cas la phrase de départ est-elle fausse ?",
      "Il suffit d'un seul contre-exemple.",
      "Cherche la phrase vraie exactement quand la phrase de départ est fausse.",
    ], "formules"),
    m("B-MATH-LOG-004", "implication", 1, "Quelle est la contraposée de « S'il pleut, alors le match est annulé » ?", [
      ["Si le match n'est pas annulé, alors il ne pleut pas.", true, "Contraposée : si non Q, alors non P ; elle est équivalente à l'implication."],
      ["Si le match est annulé, alors il pleut.", false, "C'est la réciproque (si Q alors P), qui n'est pas équivalente : le match peut être annulé pour une autre raison."],
      ["S'il ne pleut pas, alors le match n'est pas annulé.", false, "C'est l'implication « si non P alors non Q », équivalente à la réciproque et non à la phrase de départ."],
      ["S'il pleut, alors le match n'est pas annulé.", false, "Cette phrase contredit la phrase de départ."],
    ], "La contraposée de « si P alors Q » est « si non Q alors non P ». Ici : si le match n'est pas annulé, alors il ne pleut pas. Elle est vraie exactement quand la phrase de départ l'est.", "Une implication et sa contraposée sont équivalentes ; la réciproque ne l'est pas.", [
      "Identifie P (« il pleut ») et Q (« le match est annulé »).",
      "La contraposée nie les deux propositions et les échange.",
      "Écris « si non Q, alors non P ».",
    ], "regle"),
    m("B-MATH-LOG-005", "implication", 2, "On admet l'affirmation « Si un entier est multiple de 6, alors il est pair ». Laquelle de ces phrases est exacte ?", [
      ["La réciproque est fausse : 4 est pair sans être multiple de 6.", true, "4 est un contre-exemple à « si pair, alors multiple de 6 »."],
      ["La réciproque est vraie : tout entier pair est multiple de 6.", false, "Un contre-exemple suffit à la réfuter : 2, 4, 8, 10…"],
      ["La contraposée est fausse : un entier impair peut être multiple de 6.", false, "Un multiple de 6 vaut 2 × 3k : il est toujours pair. La contraposée est vraie, comme l'implication."],
      ["L'implication est fausse : 12 est multiple de 6 sans être pair.", false, "12 est pair : ce n'est pas un contre-exemple."],
    ], "L'implication est vraie car 6k = 2 × 3k est pair. Sa contraposée (« si un entier est impair, il n'est pas multiple de 6 ») est donc vraie aussi. La réciproque (« si un entier est pair, il est multiple de 6 ») est fausse : 4 est pair mais pas multiple de 6.", "Un seul contre-exemple suffit pour montrer qu'une affirmation générale est fausse.", [
      "Écris la réciproque : « si un entier est pair, alors… ».",
      "Cherche un petit entier pair qui ne soit pas multiple de 6.",
      "La contraposée a toujours la même valeur de vérité que l'implication.",
    ], "regle"),
    m("B-MATH-LOG-006", "ensembles", 2, "Dans un groupe de 40 étudiants, 25 parlent anglais, 18 parlent espagnol et 7 ne parlent aucune de ces deux langues. Combien parlent les deux langues ?", [
      ["10", true, "33 parlent au moins une langue ; 25 + 18 − 33 = 10."],
      ["3", false, "Les 7 étudiants qui ne parlent aucune des deux langues ont été oubliés : 25 + 18 − 40."],
      ["33", false, "C'est le nombre d'étudiants qui parlent au moins une des deux langues."],
      ["15", false, "C'est le nombre d'étudiants qui parlent anglais sans parler espagnol."],
    ], "Au moins une langue : 40 − 7 = 33. Or |A ∪ E| = |A| + |E| − |A ∩ E|, donc 33 = 25 + 18 − |A ∩ E| et |A ∩ E| = 10. Contrôle : 15 anglais seul + 8 espagnol seul + 10 les deux + 7 aucun = 40.", "|A ∩ B| = |A| + |B| − |A ∪ B|, avec |A ∪ B| = total − aucun.", [
      "Combien d'étudiants parlent au moins une des deux langues ?",
      "Utilise |A ∪ B| = |A| + |B| − |A ∩ B|.",
      "Résous 33 = 43 − |A ∩ B|.",
    ], "formules", true),
    m("B-MATH-LOG-007", "enigme", 3, "Ali, Béa et Chloé pratiquent chacun un sport différent parmi le tennis, le judo et la natation. Ali ne fait ni tennis ni judo. Béa ne fait pas de tennis. Quel sport pratique Béa ?", [
      ["Le judo", true, "Ali fait de la natation ; Béa ne fait ni tennis ni natation, donc du judo."],
      ["Le tennis", false, "Contredit l'énoncé : Béa ne fait pas de tennis."],
      ["La natation", false, "La natation est déjà pratiquée par Ali, et les sports sont différents."],
      ["On ne peut pas le déterminer", false, "Les informations suffisent : une seule répartition est possible."],
    ], "Ali ne fait ni tennis ni judo : il fait de la natation. Béa ne fait pas de tennis, et la natation est prise : elle fait du judo. Chloé fait donc du tennis. Cette répartition respecte toutes les informations.", "Dans une énigme, on part de l'information la plus contraignante et on élimine.", [
      "Quelle personne a le moins de possibilités ?",
      "Ali ne peut faire qu'un seul sport.",
      "Une fois Ali placé, que reste-t-il à Béa ?",
    ], "methode"),
    m("B-MATH-LOG-008", "raisonnement", 1, "Le produit de deux entiers naturels consécutifs non nuls (par exemple 4 × 5) est toujours :", [
      ["pair", true, "Parmi deux entiers consécutifs, l'un est pair : le produit est pair."],
      ["impair", false, "Contre-exemple : 2 × 3 = 6."],
      ["un multiple de 3", false, "Contre-exemple : 1 × 2 = 2."],
      ["un carré parfait", false, "Contre-exemple : 2 × 3 = 6."],
    ], "Deux entiers consécutifs sont l'un pair, l'autre impair. Un produit dont un facteur est pair est pair. Les autres propositions tombent sur un contre-exemple : 1 × 2 = 2 n'est ni impair, ni multiple de 3, ni un carré.", "Pour réfuter « toujours », un contre-exemple suffit ; pour le prouver, il faut un argument général.", [
      "Teste quelques exemples : 1 × 2, 2 × 3, 3 × 4.",
      "Parmi deux entiers consécutifs, combien sont pairs ?",
      "Un produit dont un facteur est pair est…",
    ]),
    m("B-MATH-LOG-009", "enigme", 3, "Sur une île, chaque habitant est soit un « sincère » qui dit toujours la vérité, soit un « menteur » qui ment toujours. L'habitant A déclare : « B et moi sommes tous les deux menteurs. » Que peut-on en déduire ?", [
      ["A est menteur et B est sincère.", true, "Si A était sincère, sa phrase le rendrait menteur : contradiction. Donc A ment, et ils ne sont pas tous deux menteurs : B est sincère."],
      ["A et B sont tous les deux menteurs.", false, "Dans ce cas, la phrase de A serait vraie, ce qui est impossible pour un menteur."],
      ["A est sincère et B est menteur.", false, "Un sincère ne peut pas affirmer qu'il est menteur."],
      ["A et B sont tous les deux sincères.", false, "A affirmerait alors une fausseté (« nous sommes menteurs »), ce qui est impossible pour un sincère."],
    ], "Hypothèse 1 : A est sincère. Sa phrase est vraie, donc A est menteur : contradiction. Donc A est menteur, et sa phrase est fausse : il est faux que A et B sont tous les deux menteurs. Comme A est menteur, B est sincère.", "Dans une énigme de menteurs, on fait une hypothèse et on cherche une contradiction.", [
      "Suppose que A dit la vérité : que se passe-t-il ?",
      "A est donc menteur, et sa phrase est fausse.",
      "« Tous les deux menteurs » est faux alors que A est menteur : qu'en déduis-tu pour B ?",
    ], "approfondir", true),
    m("B-MATH-LOG-010", "suite", 2, "Quel nombre prolonge logiquement la suite 5, 10, 8, 16, 14, … ?", [
      ["28", true, "Alternance « ×2 » puis « −2 » : après 14 vient 14 × 2 = 28."],
      ["12", false, "La soustraction de 2 a été répétée au lieu d'alterner avec le doublement."],
      ["32", false, "Le terme 16 a été doublé au lieu du dernier terme, 14."],
      ["42", false, "Multiplication par 3 : la règle alterne ×2 et −2."],
    ], "Les passages successifs sont ×2 (5 → 10), −2 (10 → 8), ×2 (8 → 16), −2 (16 → 14). L'étape suivante est ×2 : 14 × 2 = 28.", "Quand les écarts ne sont pas réguliers, cherche une alternance de deux opérations.", [
      "Compare chaque terme au précédent : addition ou multiplication ?",
      "Les opérations alternent : ×2, −2, ×2, −2.",
      "Applique l'opération suivante à 14.",
    ], "methode"),
  ],
};
