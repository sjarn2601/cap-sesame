// MATH · Suites arithmétiques et géométriques, intérêts simples et composés, sommes.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.suites";
const m = maker(S);

export const SUITES: PartieMath = {
  skill: competence(S, "Fonctions", "Suites, intérêts simples et composés", ["suite", "suite arithmetique", "suite geometrique", "raison", "terme general", "somme des termes", "interets simples", "interets composes", "capital", "placement"]),
  lesson: {
    skillId: S,
    title: "Suites arithmétiques et géométriques, intérêts simples et composés",
    objectives: ["Reconnaître une suite arithmétique ou géométrique et trouver sa raison", "Calculer un terme de rang n et la somme de termes consécutifs", "Modéliser un placement à intérêts simples ou composés", "Déterminer un seuil par essais successifs"],
    prerequisites: ["math.pct"],
    regle:
      "Suite arithmétique : on passe d'un terme au suivant en ajoutant toujours le même nombre r, la raison. uₙ₊₁ = uₙ + r. Terme général : uₙ = u₀ + n × r, ou uₙ = u₁ + (n − 1) × r si la suite commence à u₁. Entre deux termes quelconques : uₙ = uₚ + (n − p) × r. Elle modélise une croissance linéaire : même augmentation en valeur à chaque étape.\n\nSuite géométrique : on passe d'un terme au suivant en multipliant toujours par le même nombre q, la raison. vₙ₊₁ = vₙ × q. Terme général : vₙ = v₀ × qⁿ, ou vₙ = v₁ × qⁿ⁻¹. Elle modélise une évolution à taux constant : une hausse de t % par période correspond à q = 1 + t/100.\n\nIntérêts simples : les intérêts sont calculés chaque année sur le capital initial seulement. Après n années, Cₙ = C₀ × (1 + n × t) : c'est une suite arithmétique de raison C₀ × t.\n\nIntérêts composés : les intérêts de chaque année s'ajoutent au capital et produisent à leur tour des intérêts. Après n années, Cₙ = C₀ × (1 + t)ⁿ : c'est une suite géométrique de raison 1 + t. À taux égal, les intérêts composés rapportent plus que les intérêts simples dès la deuxième année.\n\nSommes : pour une suite arithmétique, la somme de termes consécutifs vaut nombre de termes × (premier terme + dernier terme)/2. Pour une suite géométrique de raison q ≠ 1, la somme des n premiers termes vaut premier terme × (1 − qⁿ)/(1 − q). Cas particulier utile : 1 + 2 + … + n = n(n + 1)/2.\n\nAttention au décompte des termes : de u₀ à uₙ, il y a n + 1 termes ; de u₁ à uₙ, il y en a n.",
    formules:
      "Arithmétique : uₙ = u₀ + n × r ; uₙ = uₚ + (n − p) × r\nGéométrique : vₙ = v₀ × qⁿ ; vₙ = vₚ × qⁿ⁻ᵖ\nIntérêts simples : Cₙ = C₀(1 + nt)\nIntérêts composés : Cₙ = C₀(1 + t)ⁿ\nSomme arithmétique = nombre de termes × (premier + dernier)/2\nSomme géométrique = premier × (1 − qⁿ)/(1 − q)\n1 + 2 + … + n = n(n + 1)/2",
    methode:
      "1. Repère le type d'évolution : même ajout (arithmétique) ou même pourcentage (géométrique).\n2. Note le premier terme et son indice (u₀ ou u₁).\n3. Écris le terme général adapté à cet indice de départ.\n4. Pour une somme, compte précisément le nombre de termes.\n5. Pour un seuil, teste deux valeurs de n consécutives à la calculatrice.",
    exemple:
      "Un abonnement coûte 30 € la première année puis augmente de 2 € par an. Le prix de la 8e année est u₈ = 30 + 7 × 2 = 44 €. Le total payé sur 8 ans vaut 8 × (30 + 44)/2 = 296 €.\n\n5 000 € placés à 3 % composés pendant 4 ans deviennent 5 000 × 1,03⁴ ≈ 5 627,54 €. À intérêts simples, on aurait 5 000 × (1 + 4 × 0,03) = 5 600 €.",
    erreur:
      "✗ u₁₀ = u₀ + 9r quand la suite commence à u₀ → ✓ u₁₀ = u₀ + 10r\n✗ Additionner les pourcentages pour des intérêts composés (5 ans à 4 % = +20 %) → ✓ 1,04⁵ ≈ 1,2167, soit +21,67 %\n✗ Confondre la valeur de la 10e année avec le total des 10 années → ✓ une somme n'est pas un terme\n✗ Trouver q par une différence entre termes → ✓ q est un quotient : v₂/v₁\n✗ Arrondir à l'entier inférieur un seuil « dépasser » → ✓ prendre le premier entier n qui vérifie la condition",
    approfondir:
      "Règle de 72 : un capital placé à t % composés double en environ 72/t années (à 6 %, environ 12 ans). Elle permet d'éliminer très vite des options aberrantes.\n\nUne suite géométrique de raison q > 1 finit toujours par dépasser une suite arithmétique croissante, même si elle part plus bas : c'est la force des intérêts composés sur le long terme.\n\nGestion du temps : pour un seuil, pas besoin de logarithme. Estime n, puis calcule deux puissances consécutives avec la calculatrice de la plateforme.",
    cards: [
      ["Terme général arithmétique (départ u₀)", "uₙ = u₀ + n × r", false],
      ["Terme général géométrique (départ v₀)", "vₙ = v₀ × qⁿ", false],
      ["Intérêts composés", "Cₙ = C₀ × (1 + t)ⁿ", false],
      ["Somme de termes arithmétiques", "Nombre de termes × (premier + dernier)/2", false],
      ["Règle de 72", "Doublement en environ 72/t années", false],
    ],
  },
  questions: [
    m("B-MATH-SUITE-001", "arith", 1, "Une suite arithmétique a pour premier terme u₀ = 5 et pour raison 3. Que vaut u₂₀ ?", [
      ["65", true, "u₂₀ = 5 + 20 × 3 = 65."],
      ["62", false, "Décalage d'indice : 5 + 19 × 3, comme si la suite commençait à u₁."],
      ["60", false, "Premier terme oublié : 20 × 3."],
      ["68", false, "Décalage d'indice dans l'autre sens : 5 + 21 × 3."],
    ], "Avec un départ à u₀, uₙ = u₀ + n × r, donc u₂₀ = 5 + 20 × 3 = 65.", "Pour une suite arithmétique qui commence à u₀, uₙ = u₀ + n × r.", [
      "Quelle formule donne uₙ en fonction de u₀ ?",
      "De u₀ à u₂₀, combien de fois ajoute-t-on la raison ?",
      "Calcule 5 + 20 × 3.",
    ], "erreur"),
    m("B-MATH-SUITE-002", "geom", 1, "Une population de bactéries double toutes les heures. Elle compte 500 bactéries au départ. Combien en compte-t-elle au bout de 6 heures ?", [
      ["32 000", true, "500 × 2⁶ = 500 × 64 = 32 000."],
      ["3 000", false, "Multiplication par 6 au lieu de 2⁶ : croissance linéaire supposée."],
      ["16 000", false, "Une heure de moins : 500 × 2⁵."],
      ["3 500", false, "500 bactéries ajoutées chaque heure : suite arithmétique au lieu de géométrique."],
    ], "Doubler chaque heure, c'est multiplier par 2 : suite géométrique de raison 2. Après 6 heures : 500 × 2⁶ = 500 × 64 = 32 000.", "Une quantité multipliée par q à chaque période vaut v₀ × qⁿ après n périodes.", [
      "Doubler, c'est multiplier par combien ?",
      "La population est multipliée 6 fois par 2.",
      "Calcule 2⁶ puis multiplie par 500.",
    ]),
    m("B-MATH-SUITE-003", "interets", 2, "On place 1 000 € à intérêts composés au taux annuel de 4 %. De quelle somme dispose-t-on au bout de 5 ans, au centime près ?", [
      ["1 216,65 €", true, "1 000 × 1,04⁵ ≈ 1 216,65 €."],
      ["1 200,00 €", false, "Intérêts simples : 5 × 40 € ajoutés au capital."],
      ["1 169,86 €", false, "Une année de moins : 1 000 × 1,04⁴."],
      ["1 265,32 €", false, "Une année de trop : 1 000 × 1,04⁶."],
    ], "À intérêts composés : C₅ = 1 000 × 1,04⁵. 1,04² = 1,0816 ; 1,04⁴ ≈ 1,16986 ; 1,04⁵ ≈ 1,21665. Capital : 1 216,65 €.", "À intérêts composés, Cₙ = C₀ × (1 + t)ⁿ.", [
      "Chaque année, le capital est multiplié par 1,04.",
      "Après 5 ans, il est multiplié par 1,04⁵.",
      "Calcule 1 000 × 1,04⁵ à la calculatrice.",
    ], "formules"),
    m("B-MATH-SUITE-004", "interets", 2, "On place 2 500 € à intérêts simples au taux annuel de 3 %. De quelle somme dispose-t-on au bout de 8 ans ?", [
      ["3 100 €", true, "2 500 × (1 + 8 × 0,03) = 2 500 × 1,24 = 3 100 €."],
      ["3 166,93 €", false, "Intérêts composés : 2 500 × 1,03⁸."],
      ["600 €", false, "Ce sont les intérêts seuls, sans le capital."],
      ["2 575 €", false, "Une seule année d'intérêts : 2 500 × 1,03."],
    ], "Intérêts annuels : 3 % de 2 500 = 75 €. Sur 8 ans : 600 €. Capital final : 2 500 + 600 = 3 100 €.", "À intérêts simples, Cₙ = C₀ × (1 + n × t) : les intérêts sont les mêmes chaque année.", [
      "À intérêts simples, l'intérêt annuel est calculé sur le capital initial.",
      "Un an d'intérêts : 75 €.",
      "Ajoute 8 × 75 € au capital.",
    ], "regle"),
    m("B-MATH-SUITE-005", "somme", 2, "Un étudiant épargne 50 € le premier mois, puis 10 € de plus chaque mois suivant (60 €, 70 €…). Combien a-t-il épargné au total au bout de 12 mois ?", [
      ["1 260 €", true, "Dernier versement 50 + 11 × 10 = 160 € ; somme 12 × (50 + 160)/2 = 1 260 €."],
      ["160 €", false, "C'est le versement du 12e mois, pas le total."],
      ["600 €", false, "Augmentation mensuelle oubliée : 12 × 50."],
      ["1 320 €", false, "Dernier versement mal calculé : 50 + 12 × 10 = 170 €."],
    ], "Les versements forment une suite arithmétique de premier terme 50 et de raison 10. Le 12e vaut 50 + 11 × 10 = 160 €. Somme : 12 × (50 + 160)/2 = 12 × 105 = 1 260 €.", "Somme de termes arithmétiques = nombre de termes × (premier + dernier)/2.", [
      "Les versements forment une suite arithmétique.",
      "Calcule le 12e versement : 11 augmentations après le premier.",
      "Applique nombre de termes × (premier + dernier)/2.",
    ], "exemple"),
    m("B-MATH-SUITE-006", "somme", 3, "Une usine produit 2 000 pièces la première année, puis sa production augmente de 5 % par an. Quelle est sa production cumulée sur les 10 premières années, arrondie à l'unité ?", [
      ["25 156 pièces", true, "2 000 × (1,05¹⁰ − 1)/0,05 ≈ 25 156."],
      ["3 103 pièces", false, "C'est la production de la 10e année seulement (2 000 × 1,05⁹)."],
      ["20 000 pièces", false, "Hausse annuelle oubliée : 10 × 2 000."],
      ["24 500 pièces", false, "Hausse de 100 pièces par an (5 % de 2 000) : modèle arithmétique au lieu de géométrique."],
    ], "Productions : 2 000, 2 000 × 1,05, …, 2 000 × 1,05⁹ : suite géométrique de raison 1,05, 10 termes. Somme : 2 000 × (1 − 1,05¹⁰)/(1 − 1,05) = 2 000 × (1,62889 − 1)/0,05 ≈ 25 156 pièces.", "Somme de n termes géométriques = premier × (1 − qⁿ)/(1 − q).", [
      "Les productions annuelles forment une suite géométrique.",
      "Premier terme 2 000, raison 1,05, 10 termes.",
      "Applique premier × (qⁿ − 1)/(q − 1).",
    ], "formules", true),
    m("B-MATH-SUITE-007", "seuil", 2, "Un salaire de 1 500 € augmente de 3 % par an. Au bout de combien d'années dépassera-t-il pour la première fois 2 000 € ?", [
      ["10 ans", true, "1 500 × 1,03⁹ ≈ 1 957 € et 1 500 × 1,03¹⁰ ≈ 2 016 €."],
      ["9 ans", false, "Après 9 ans, 1 957 € : le seuil n'est pas encore atteint (arrondi à l'inférieur)."],
      ["12 ans", false, "Hausse de 45 € par an (3 % de 1 500) : modèle linéaire, 500/45 ≈ 11,1 arrondi à 12."],
      ["11 ans", false, "Modèle linéaire et arrondi à l'inférieur : 500/45 ≈ 11,1."],
    ], "Le salaire après n années vaut 1 500 × 1,03ⁿ. 1,03⁹ ≈ 1,3048, soit 1 957 € ; 1,03¹⁰ ≈ 1,3439, soit 2 016 €. Le seuil est franchi la 10e année.", "Pour un seuil, on cherche le premier n qui vérifie la condition, en testant deux valeurs consécutives.", [
      "Écris le salaire après n années.",
      "Il faut 1,03ⁿ > 2 000/1 500 ≈ 1,333.",
      "Teste n = 9 et n = 10.",
    ], "methode"),
    m("B-MATH-SUITE-008", "arith", 1, "Une suite arithmétique vérifie u₃ = 14 et u₇ = 30. Quelle est sa raison ?", [
      ["4", true, "(30 − 14)/(7 − 3) = 16/4 = 4."],
      ["16", false, "Écart entre les termes non divisé par le nombre de pas."],
      ["3,2", false, "Division par 5 : on a compté les termes au lieu des pas entre eux."],
      ["5,33", false, "Division par 3 : nombre de pas mal compté."],
    ], "u₇ = u₃ + 4r, donc 30 = 14 + 4r, 4r = 16, r = 4. Contrôle : 14, 18, 22, 26, 30.", "Entre uₚ et uₙ, il y a n − p pas : r = (uₙ − uₚ)/(n − p).", [
      "Combien de fois ajoute-t-on la raison pour passer de u₃ à u₇ ?",
      "u₇ − u₃ = 16.",
      "Divise 16 par le nombre de pas.",
    ], "formules"),
    m("B-MATH-SUITE-009", "geom", 2, "Une suite géométrique de termes positifs vérifie v₁ = 3 et v₄ = 81. Quelle est sa raison ?", [
      ["3", true, "v₄ = v₁ × q³, donc q³ = 27 et q = 3."],
      ["26", false, "Raisonnement arithmétique : (81 − 3)/3."],
      ["27", false, "q³ = 27 lu comme q = 27 : la racine cubique a été oubliée."],
      ["9", false, "Racine carrée de 81 : le nombre de pas (3) n'a pas été pris en compte."],
    ], "Pour passer de v₁ à v₄, on multiplie 3 fois par q : 81 = 3 × q³, q³ = 27, q = 3. Contrôle : 3, 9, 27, 81.", "Dans une suite géométrique, vₙ = vₚ × qⁿ⁻ᵖ.", [
      "Combien de multiplications par q entre v₁ et v₄ ?",
      "81 = 3 × q³.",
      "Quel nombre a pour cube 27 ?",
    ]),
    m("B-MATH-SUITE-010", "comparaison", 3, "Deux offres d'emploi : l'offre A propose 1 000 € de prime la première année, puis 60 € de plus chaque année ; l'offre B propose 1 000 € la première année, puis une hausse de 5 % par an. La 10e année, de combien la prime B dépasse-t-elle la prime A, au centime près ?", [
      ["11,33 €", true, "B : 1 000 × 1,05⁹ ≈ 1 551,33 € ; A : 1 000 + 9 × 60 = 1 540 €."],
      ["28,89 €", false, "Dix hausses comptées au lieu de neuf pour les deux offres."],
      ["−48,67 €", false, "Dix hausses pour A (1 600 €) mais neuf pour B."],
      ["1 551,33 €", false, "C'est la prime B elle-même, pas l'écart."],
    ], "La 10e année correspond à 9 évolutions après la première. A : 1 000 + 9 × 60 = 1 540 €. B : 1 000 × 1,05⁹ ≈ 1 551,33 €. Écart : 1 551,33 − 1 540 = 11,33 €.", "La n-ième année d'une suite qui démarre à l'année 1 correspond à n − 1 évolutions.", [
      "Combien d'augmentations entre la 1re et la 10e année ?",
      "Calcule la prime A (arithmétique) et la prime B (géométrique).",
      "Fais la différence B − A.",
    ], "erreur", true),
  ],
};
