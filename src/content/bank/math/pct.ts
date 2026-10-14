// MATH · Pourcentages : proportions, évolutions, coefficients multiplicateurs, points de pourcentage.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.pct";
const m = maker(S);

export const PCT: PartieMath = {
  skill: competence(S, "Proportions", "Pourcentages et évolutions", ["pourcentage", "taux", "evolution", "variation", "points de pourcentage", "hausse", "baisse", "coefficient multiplicateur", "evolution reciproque", "taux moyen"]),
  lesson: {
    skillId: S,
    title: "Pourcentages : proportions, évolutions successives et réciproques",
    objectives: ["Calculer une proportion et un taux d'évolution", "Enchaîner et inverser des évolutions avec les coefficients multiplicateurs", "Distinguer points de pourcentage et pourcentage", "Calculer un pourcentage de pourcentage et un taux moyen"],
    prerequisites: ["math.prop"],
    regle:
      "Proportion : la part d'une sous-population A dans une population E vaut effectif de A / effectif de E. Prendre t % d'une quantité, c'est la multiplier par t/100.\n\nTaux d'évolution : t = (valeur finale − valeur initiale) / valeur initiale. On divise toujours par la valeur de départ. Le résultat, multiplié par 100, s'exprime en pourcentage ; il est positif pour une hausse, négatif pour une baisse.\n\nCoefficient multiplicateur : une hausse de t % revient à multiplier par CM = 1 + t/100 ; une baisse de t % à multiplier par 1 − t/100. +8 % donne CM = 1,08 ; −15 % donne CM = 0,85. Réciproquement, CM = 1,32 signifie +32 % et CM = 0,7 signifie −30 %.\n\nÉvolutions successives : on multiplie les coefficients, on n'additionne jamais les taux. +10 % puis +10 % donne 1,1 × 1,1 = 1,21, soit +21 %.\n\nÉvolution réciproque : pour revenir à la valeur de départ après une évolution de coefficient CM, on multiplie par 1/CM. Après +25 %, il faut 1/1,25 = 0,8, soit −20 %, et non −25 %. Pour retrouver une valeur avant hausse, on divise par le coefficient.\n\nPoints de pourcentage : quand une grandeur est elle-même un taux, la différence simple entre deux taux s'exprime en points. Un taux qui passe de 10 % à 12 % gagne 2 points, ce qui représente une hausse relative de 20 %.\n\nPourcentage de pourcentage : 30 % de 40 %, c'est 0,3 × 0,4 = 0,12 = 12 %. Quand une population est divisée en groupes, la proportion globale est la moyenne des proportions de chaque groupe, pondérée par la taille des groupes.\n\nTaux moyen : si une grandeur est multipliée par CM en n périodes, le coefficient moyen par période est la racine n-ième de CM, soit CM^(1/n).",
    formules:
      "Taux d'évolution = (V_finale − V_initiale) / V_initiale\nCM d'une hausse de t % : 1 + t/100 ; d'une baisse : 1 − t/100\nÉvolutions successives : CM global = CM₁ × CM₂ × …\nÉvolution réciproque : CM' = 1 / CM\nValeur initiale = valeur finale / CM\nTaux moyen sur n périodes : CM^(1/n) − 1\nÉcart entre deux taux : en points de pourcentage",
    methode:
      "1. Repère la valeur de référence (la base) : c'est elle qui est au dénominateur.\n2. Traduis chaque évolution en coefficient multiplicateur.\n3. Multiplie les coefficients, ou divise pour remonter le temps.\n4. Retraduis le coefficient final en taux : CM − 1.\n5. En cas de doute, raisonne sur une base 100.",
    exemple:
      "Un prix augmente de 30 %, puis baisse de 30 %. Base 100 : 100 → 130 → 130 × 0,7 = 91. Évolution globale : −9 % (CM global 1,3 × 0,7 = 0,91).\n\nAprès une remise de 20 %, un article coûte 64 €. Prix initial : 64 / 0,8 = 80 €. Erreur classique : 64 × 1,2 = 76,80 €, car les 20 % portent sur le prix initial et non sur le prix remisé.\n\nUn taux de réussite passe de 40 % à 50 % : +10 points, soit une hausse relative de 10/40 = 25 %.",
    erreur:
      "✗ Additionner des taux successifs (+10 % puis +20 % = +30 %) → ✓ multiplier les coefficients : 1,1 × 1,2 = 1,32, soit +32 %\n✗ Compenser une hausse de t % par une baisse de t % → ✓ multiplier par 1/CM\n✗ Retrouver un prix avant hausse en retirant t % du prix final → ✓ diviser par le coefficient\n✗ Diviser par la valeur finale pour un taux d'évolution → ✓ diviser par la valeur initiale\n✗ Confondre +2 points et +2 % → ✓ points = écart absolu entre deux taux",
    approfondir:
      "Shrinkflation : si la quantité baisse de 10 % à prix constant, le prix au kilo est multiplié par 1/0,9 ≈ 1,111, soit une hausse d'environ 11,1 % et non de 10 %.\n\nPour les petits taux, la somme est une bonne approximation : +2 % puis +3 % ≈ +5 % (exactement +5,06 %). Mais pour des taux de 20 % ou 30 %, l'écart devient important : méfie-toi des distracteurs construits sur cette approximation.\n\nGestion du temps : la base 100 règle presque tout en moins d'une minute. Garde la calculatrice pour les puissances (taux composés) et les racines (taux moyen).",
    cards: [
      ["CM d'une baisse de 15 %", "0,85", true],
      ["Baisse qui annule une hausse de 25 %", "−20 % (1/1,25 = 0,8)", true],
      ["+10 % puis −10 %", "1,1 × 0,9 = 0,99, soit −1 %", false],
      ["Taux passant de 20 % à 25 %", "+5 points, soit +25 % en relatif", false],
      ["Taux moyen sur 2 ans pour +44 %", "√1,44 = 1,2, soit +20 % par an", false],
    ],
  },
  questions: [
    m("B-MATH-PCT-001", "appliquer", 1, "Un manteau affiché 140 € bénéficie d'une remise de 35 %. Quel est son nouveau prix ?", [
      ["91 €", true, "140 × 0,65 = 91 €."],
      ["105 €", false, "35 € retirés au lieu de 35 % : 140 − 35."],
      ["49 €", false, "C'est le montant de la remise (35 % de 140), pas le prix payé."],
      ["189 €", false, "Hausse de 35 % appliquée au lieu d'une baisse : 140 × 1,35."],
    ], "Une baisse de 35 % correspond au coefficient 0,65. Prix remisé : 140 × 0,65 = 91 €. Vérification : la remise vaut 140 × 0,35 = 49 €, et 140 − 49 = 91 €.", "Baisser de t %, c'est multiplier par 1 − t/100.", [
      "Quel coefficient multiplicateur correspond à −35 % ?",
      "1 − 0,35 = 0,65.",
      "Multiplie 140 par 0,65.",
    ], "formules"),
    m("B-MATH-PCT-002", "taux", 1, "Le nombre d'abonnés d'une newsletter passe de 2 400 à 3 000. Quel est le taux d'évolution ?", [
      ["+25 %", true, "(3 000 − 2 400) / 2 400 = 600 / 2 400 = 0,25."],
      ["+20 %", false, "Division par la valeur finale (600 / 3 000) au lieu de la valeur initiale."],
      ["+0,25 %", false, "Le taux 0,25 n'a pas été multiplié par 100."],
      ["+125 %", false, "Le coefficient multiplicateur 1,25 a été lu comme un taux."],
    ], "Taux = (3 000 − 2 400) / 2 400 = 600 / 2 400 = 0,25 = +25 %. Contrôle : 2 400 × 1,25 = 3 000.", "Le taux d'évolution se calcule en divisant l'écart par la valeur initiale.", [
      "Quelle est la valeur de référence : celle de départ ou celle d'arrivée ?",
      "L'écart vaut 600 abonnés.",
      "Divise 600 par 2 400 et convertis en pourcentage.",
    ], "erreur"),
    m("B-MATH-PCT-003", "successives", 2, "Un loyer augmente de 5 % deux années de suite, puis baisse de 8 % la troisième année. Quelle est son évolution globale sur les trois ans, à 0,01 point près ?", [
      ["+1,43 %", true, "1,05² × 0,92 = 1,1025 × 0,92 = 1,0143."],
      ["+2 %", false, "Taux additionnés : 5 + 5 − 8."],
      ["+10,25 %", false, "La baisse de la troisième année a été oubliée : 1,05² = 1,1025."],
      ["+1,2 %", false, "Les deux hausses ont été additionnées (+10 %) avant d'appliquer la baisse : 1,10 × 0,92."],
    ], "Coefficient global : 1,05 × 1,05 × 0,92 = 1,1025 × 0,92 = 1,0143. Le loyer augmente donc de 1,43 %. Base 100 : 100 → 105 → 110,25 → 101,43.", "Des évolutions successives se combinent en multipliant les coefficients.", [
      "Traduis chaque évolution par un coefficient multiplicateur.",
      "Calcule 1,05 × 1,05 × 0,92.",
      "Retranche 1 au coefficient global et convertis en pourcentage.",
    ], "formules"),
    m("B-MATH-PCT-004", "reciproque", 2, "Le prix d'une action a augmenté de 60 %. Quelle baisse le ramènerait exactement à sa valeur de départ ?", [
      ["−37,5 %", true, "1/1,6 = 0,625, soit une baisse de 37,5 %."],
      ["−60 %", false, "Même taux appliqué en sens inverse : 1,6 × 0,4 = 0,64, on ne revient pas au départ."],
      ["−40 %", false, "Calcul de 1 − 0,6 : le taux a été confondu avec un coefficient."],
      ["−62,5 %", false, "Le coefficient 0,625 a été lu comme le taux de baisse."],
    ], "Base 100 : après +60 %, l'action vaut 160. Pour revenir à 100, il faut perdre 60 sur 160, soit 60/160 = 37,5 %. Par les coefficients : 1/1,6 = 0,625 = 1 − 0,375.", "L'évolution réciproque d'un coefficient CM a pour coefficient 1/CM.", [
      "Raisonne sur une base 100 : combien vaut l'action après la hausse ?",
      "Pour revenir de 160 à 100, quelle perte faut-il ?",
      "Rapporte cette perte à 160, la nouvelle base.",
    ], "regle"),
    m("B-MATH-PCT-005", "points", 2, "Dans une région, le taux de chômage passe de 8 % à 6 % en un an. Quelle affirmation est exacte ?", [
      ["Il baisse de 2 points, soit une baisse relative de 25 %.", true, "8 − 6 = 2 points, et 2/8 = 25 %."],
      ["Il baisse de 2 %.", false, "Confusion entre points de pourcentage et pourcentage."],
      ["Il baisse de 2 points, soit une baisse relative de 33 %.", false, "Écart rapporté au taux final (2/6) au lieu du taux initial."],
      ["Il baisse de 25 points.", false, "La variation relative a été exprimée en points."],
    ], "L'écart entre deux taux s'exprime en points : 8 % − 6 % = 2 points. La variation relative du taux est (6 − 8)/8 = −0,25, soit −25 %.", "L'écart entre deux pourcentages se mesure en points ; la variation relative se calcule par rapport au taux initial.", [
      "La grandeur étudiée est elle-même un pourcentage.",
      "Différence simple : 8 − 6 ; comment l'appelle-t-on ?",
      "Pour la variation relative, divise l'écart par 8.",
    ], "regle"),
    m("B-MATH-PCT-006", "reciproque", 2, "Un paquet de biscuits passe de 400 g à 360 g, son prix restant inchangé. De combien augmente le prix au kilogramme, à 0,1 % près ?", [
      ["+11,1 %", true, "Prix au kg multiplié par 400/360 ≈ 1,111."],
      ["+10 %", false, "La baisse de quantité (−10 %) a été reportée telle quelle sur le prix au kilo."],
      ["−10 %", false, "Sens inversé : moins de produit pour le même prix renchérit le kilogramme."],
      ["+9,1 %", false, "Écart de 40 g rapporté à 440 g : mauvaise base."],
    ], "La quantité est multipliée par 0,9. À prix constant, le prix au kilo est multiplié par 1/0,9 = 400/360 ≈ 1,111, soit une hausse d'environ 11,1 %. Exemple : à 3,60 €, on passe de 9 €/kg à 10 €/kg.", "Si la quantité est multipliée par k à prix constant, le prix unitaire est multiplié par 1/k.", [
      "Le prix au kilo vaut prix / masse.",
      "La masse est multipliée par 0,9 ; que devient le prix au kilo ?",
      "Calcule 1/0,9.",
    ], "approfondir", false),
    m("B-MATH-PCT-007", "pctdepct", 3, "Dans une école, 40 % des étudiants suivent le parcours finance, dont 35 % sont internes. Parmi les autres étudiants, 20 % sont internes. Quel pourcentage de l'ensemble des étudiants est interne ?", [
      ["26 %", true, "0,40 × 0,35 + 0,60 × 0,20 = 0,14 + 0,12 = 0,26."],
      ["27,5 %", false, "Moyenne simple de 35 % et 20 %, sans tenir compte de la taille des groupes."],
      ["55 %", false, "Pourcentages additionnés : ils ne portent pas sur la même population."],
      ["14 %", false, "Seuls les internes du parcours finance ont été comptés."],
    ], "Sur 100 étudiants : 40 en finance, dont 35 % internes, soit 14 ; 60 autres, dont 20 % internes, soit 12. Total : 26 internes sur 100, soit 26 %.", "Une proportion globale est la moyenne des proportions de chaque groupe, pondérée par la taille des groupes.", [
      "Raisonne sur 100 étudiants.",
      "Combien d'étudiants en finance, et combien d'internes parmi eux ?",
      "Fais de même pour les 60 autres, puis additionne.",
    ], "regle", true),
    m("B-MATH-PCT-008", "reciproque", 2, "Après une hausse de 12 %, un abonnement mensuel coûte 44,80 €. Combien coûtait-il avant la hausse ?", [
      ["40 €", true, "44,80 ÷ 1,12 = 40 €."],
      ["39,42 €", false, "12 % retirés au prix final : 44,80 × 0,88."],
      ["32,80 €", false, "12 € retirés au lieu de 12 %."],
      ["50,18 €", false, "Hausse appliquée une seconde fois : 44,80 × 1,12."],
    ], "Prix final = prix initial × 1,12. Donc prix initial = 44,80 / 1,12 = 40 €. Contrôle : 40 × 1,12 = 44,80 €.", "Pour retrouver une valeur avant évolution, on divise par le coefficient multiplicateur.", [
      "Écris la relation entre l'ancien prix, le coefficient et le nouveau prix.",
      "Le coefficient vaut 1,12.",
      "Divise 44,80 par 1,12.",
    ], "exemple"),
    m("B-MATH-PCT-009", "moyen", 3, "Le chiffre d'affaires d'une start-up a augmenté de 21 % en deux ans. Quel est le taux annuel moyen d'augmentation ?", [
      ["10 %", true, "√1,21 = 1,1, soit +10 % par an."],
      ["10,5 %", false, "Taux divisé par 2 : les hausses se composent, elles ne s'additionnent pas."],
      ["4,6 %", false, "Racine carrée de 21 au lieu de 1,21."],
      ["110 %", false, "Le coefficient moyen 1,1 a été lu comme un taux."],
    ], "Si t est le taux annuel moyen, (1 + t)² = 1,21, donc 1 + t = √1,21 = 1,1 et t = 10 %. Contrôle : 1,1 × 1,1 = 1,21.", "Le taux moyen sur n périodes s'obtient par la racine n-ième du coefficient global.", [
      "Deux hausses identiques de t % donnent un coefficient (1 + t)².",
      "Résous (1 + t)² = 1,21.",
      "√1,21 = 1,1.",
    ], "formules", true),
    m("B-MATH-PCT-010", "proportion", 1, "Sur 250 candidats à un concours, 185 sont déclarés admissibles. Quel pourcentage des candidats est admissible ?", [
      ["74 %", true, "185 / 250 = 0,74."],
      ["65 %", false, "250 − 185 = 65 est le nombre de non-admissibles, pas un pourcentage."],
      ["135,1 %", false, "Rapport inversé : 250 / 185 ; une proportion ne dépasse pas 100 %."],
      ["26 %", false, "C'est le pourcentage de candidats non admissibles."],
    ], "Proportion = 185 / 250 = 0,74 = 74 %. Astuce : 250 × 4 = 1 000, donc 185/250 = 740/1 000.", "Une proportion se calcule en divisant l'effectif de la partie par l'effectif total.", [
      "Quelle est la population de référence ?",
      "Divise 185 par 250.",
      "Multiplie numérateur et dénominateur par 4 pour obtenir des millièmes.",
    ]),
  ],
};
