// MATH · Calcul numérique : priorités, fractions, puissances, racines, ordres de grandeur.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.calc";
const m = maker(S);

export const CALC: PartieMath = {
  skill: competence(S, "Calcul", "Calcul numérique : fractions, puissances, racines", ["priorite", "operations", "fraction", "calcul mental", "puissance", "racine carree", "notation scientifique", "ordre de grandeur"]),
  lesson: {
    skillId: S,
    title: "Calcul numérique : fractions, puissances, racines, ordres de grandeur",
    objectives: ["Appliquer les priorités opératoires sans hésiter", "Calculer avec des fractions, des puissances et des racines", "Estimer un ordre de grandeur pour contrôler un résultat"],
    regle:
      "Priorités opératoires : on calcule d'abord ce qui est entre parenthèses, puis les puissances, puis les multiplications et divisions, enfin les additions et soustractions. À priorité égale, on avance de gauche à droite. Attention : −3² vaut −9 (la puissance porte sur 3 seulement), alors que (−3)² vaut 9.\n\nFractions : pour additionner ou soustraire, on réduit au même dénominateur, puis on additionne les numérateurs. Pour multiplier, on multiplie numérateurs entre eux et dénominateurs entre eux. Pour diviser par une fraction, on multiplie par son inverse. Prendre « les 2/3 de » une quantité, c'est la multiplier par 2/3 ; prendre « les 2/3 des 3/5 », c'est multiplier les deux fractions. Pour comparer des fractions, on les met au même dénominateur ou on les convertit en décimaux.\n\nPuissances : pour un même nombre a, on additionne les exposants dans un produit, on les soustrait dans un quotient, on les multiplie pour une puissance de puissance. a⁰ = 1 (pour a non nul) et a⁻ⁿ = 1/aⁿ. Un nombre en notation scientifique s'écrit a × 10ⁿ avec 1 ≤ a < 10.\n\nRacines carrées : √(ab) = √a × √b et √(a/b) = √a / √b, mais √(a + b) n'est pas égal à √a + √b. Pour simplifier une racine, on fait apparaître le plus grand carré parfait : √72 = √(36 × 2) = 6√2.\n\nOrdre de grandeur : avant de valider un résultat de calculatrice, arrondis chaque donnée à un chiffre significatif et refais le calcul de tête. Une erreur de virgule ou de puissance de 10 se repère immédiatement.",
    formules:
      "Ordre : parenthèses, puissances, × et ÷, + et −\na/b + c/d = (ad + bc)/(bd)\n(a/b) × (c/d) = (ac)/(bd)\n(a/b) ÷ (c/d) = (a/b) × (d/c)\naᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ / aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ\na⁰ = 1 ; a⁻ⁿ = 1/aⁿ\n√(a × b) = √a × √b ; (√a)² = a pour a ≥ 0\nCarrés utiles : 11² = 121, 12² = 144, 13² = 169, 15² = 225, 25² = 625",
    methode:
      "1. Repère la structure du calcul : quelle opération est faite en dernier ?\n2. Traite les puissances et les parenthèses avant tout le reste.\n3. Avec des fractions, simplifie le plus tôt possible.\n4. Avec des puissances de 10, regroupe d'un côté les nombres, de l'autre les puissances.\n5. Estime l'ordre de grandeur et compare avec les options avant de valider.",
    exemple:
      "Calculer (3/4 − 1/6) ÷ 7/12.\nOn réduit au dénominateur 12 : 3/4 = 9/12 et 1/6 = 2/12, donc 3/4 − 1/6 = 7/12.\nDiviser par 7/12 revient à multiplier par 12/7 : (7/12) × (12/7) = 1.\n\nCalculer (6 × 10⁵) × (4 × 10⁻²).\nOn regroupe : 6 × 4 = 24 et 10⁵ × 10⁻² = 10³. Résultat : 24 × 10³ = 2,4 × 10⁴. Contrôle : 600 000 × 0,04 = 24 000.",
    erreur:
      "✗ 2/3 + 1/4 = 3/7 → ✓ réduire au même dénominateur : 8/12 + 3/12 = 11/12\n✗ −4² = 16 → ✓ −4² = −16 ; seul (−4)² vaut 16\n✗ √9 + √16 = √25 → ✓ √9 + √16 = 3 + 4 = 7, alors que √25 = 5\n✗ 10³ × 10⁴ = 10¹² → ✓ on additionne les exposants : 10⁷\n✗ 2⁰ = 0 → ✓ tout nombre non nul à la puissance 0 vaut 1",
    approfondir:
      "Astuces de calcul mental : multiplier par 25, c'est multiplier par 100 puis diviser par 4 ; multiplier par 5, c'est multiplier par 10 puis diviser par 2 ; 99 × 37 = 100 × 37 − 37.\n\nLa calculatrice de la plateforme ne t'évite pas les erreurs de saisie. Annonce mentalement une fourchette avant de taper : si tu attends « environ 2 millions » et que l'écran affiche 186 200, une puissance de 10 a été perdue.\n\nGestion du temps : un calcul pur doit prendre moins d'une minute. Garde les deux minutes de moyenne pour les problèmes rédigés.",
    cards: [
      ["(a/b) ÷ (c/d)", "(a/b) × (d/c) : on multiplie par l'inverse", false],
      ["aᵐ × aⁿ", "aᵐ⁺ⁿ (on additionne les exposants)", false],
      ["−3² et (−3)²", "−9 et 9", false],
      ["√72 simplifiée", "6√2", true],
      ["Multiplier par 25 de tête", "Multiplier par 100 puis diviser par 4", false],
    ],
  },
  questions: [
    m("B-MATH-CALC-001", "prio", 1, "Calculer 18 − 6 × 2 + 3².", [
      ["15", true, "6 × 2 = 12 et 3² = 9, puis 18 − 12 + 9 = 15."],
      ["33", false, "Calcul de gauche à droite sans priorité : (18 − 6) × 2 + 9."],
      ["12", false, "3² confondu avec 3 × 2 = 6 : 18 − 12 + 6."],
      ["−48", false, "Parenthèses imaginaires : 18 − 6 × (2 + 9)."],
    ], "La puissance d'abord : 3² = 9. Puis la multiplication : 6 × 2 = 12. Enfin, de gauche à droite : 18 − 12 = 6, puis 6 + 9 = 15.", "Puissances, puis × et ÷, puis + et − de gauche à droite.", [
      "Quelles opérations sont prioritaires sur l'addition et la soustraction ?",
      "Calcule séparément 3² et 6 × 2.",
      "Il reste 18 − 12 + 9, à effectuer de gauche à droite.",
    ], "formules"),
    m("B-MATH-CALC-002", "frac", 1, "Lors d'une succession, Léa reçoit 1/3 du patrimoine et Hugo 1/4 ; le reste va à une association. Quelle fraction du patrimoine reçoit l'association ?", [
      ["5/12", true, "1/3 + 1/4 = 4/12 + 3/12 = 7/12, et 1 − 7/12 = 5/12."],
      ["5/7", false, "Fractions additionnées terme à terme : 1/3 + 1/4 pris pour 2/7, puis 1 − 2/7."],
      ["7/12", false, "C'est la part totale de Léa et Hugo, pas celle de l'association."],
      ["1/12", false, "Soustraction 1/3 − 1/4 au lieu de retirer les deux parts du total."],
    ], "Part des deux héritiers : 1/3 + 1/4 = 4/12 + 3/12 = 7/12. L'association reçoit le reste : 12/12 − 7/12 = 5/12. Contrôle : 5/12 ≈ 0,42, plausible car Léa et Hugo prennent un peu plus de la moitié.", "Le reste d'un tout, c'est 1 moins la somme des parts, calculée au même dénominateur.", [
      "Le patrimoine entier correspond à la fraction 1.",
      "Additionne d'abord 1/3 et 1/4 en les écrivant sur 12.",
      "Les deux héritiers reçoivent 7/12 ; que reste-t-il ?",
    ]),
    m("B-MATH-CALC-003", "frac", 2, "Dans un lycée, les 3/5 des élèves sont des filles et les 2/3 de ces filles pratiquent un sport en club. Quelle fraction de l'ensemble des élèves sont des filles pratiquant un sport en club ?", [
      ["2/5", true, "« Les 2/3 des 3/5 » : 2/3 × 3/5 = 6/15 = 2/5."],
      ["5/8", false, "Numérateurs et dénominateurs additionnés : (3 + 2)/(5 + 3)."],
      ["19/15", false, "Fractions additionnées au lieu d'être multipliées ; un résultat supérieur à 1 est impossible ici."],
      ["9/10", false, "Division 3/5 ÷ 2/3 au lieu d'une multiplication."],
    ], "Prendre une fraction d'une fraction revient à multiplier : 2/3 × 3/5 = 6/15 = 2/5. Sur 100 élèves : 60 filles, dont 2/3, soit 40 sportives, c'est-à-dire 40/100 = 2/5.", "« Les a/b de c/d » se calcule par le produit (a/b) × (c/d).", [
      "« Les 2/3 de » se traduit par une multiplication.",
      "Calcule 2/3 × 3/5 et simplifie.",
      "Vérifie sur 100 élèves : combien de filles, puis combien de sportives ?",
    ], "regle", false),
    m("B-MATH-CALC-004", "puiss", 2, "Écrire 10⁴ × 10⁻⁷ / 10⁻² sous la forme d'une seule puissance de 10.", [
      ["10⁻¹", true, "Exposant : 4 + (−7) − (−2) = −1."],
      ["10⁻⁵", false, "Division par 10⁻² traitée comme une multiplication : 4 − 7 − 2."],
      ["10¹⁴", false, "Exposants multipliés puis divisés : 4 × (−7) / (−2)."],
      ["10⁻³", false, "Oubli du dénominateur : seulement 4 + (−7)."],
    ], "Au numérateur : 10⁴ × 10⁻⁷ = 10⁴⁻⁷ = 10⁻³. Diviser par 10⁻² revient à soustraire −2, donc à ajouter 2 à l'exposant : 10⁻³⁺² = 10⁻¹ = 0,1.", "Produit : on additionne les exposants ; quotient : on soustrait celui du dénominateur.", [
      "Rappelle-toi les règles aᵐ × aⁿ et aᵐ / aⁿ.",
      "Calcule d'abord l'exposant du numérateur : 4 + (−7).",
      "Soustraire −2, c'est ajouter 2.",
    ], "formules"),
    m("B-MATH-CALC-005", "sci", 2, "Un centre de données enregistre 2,5 × 10⁹ octets par jour. Quelle quantité de données enregistre-t-il en 4 000 jours ?", [
      ["1 × 10¹³ octets", true, "2,5 × 4 = 10 et 10⁹ × 10³ = 10¹² : 10 × 10¹² = 10¹³."],
      ["1 × 10¹² octets", false, "Le facteur 10 issu de 2,5 × 4 n'a pas été reporté dans la puissance."],
      ["6,5 × 10¹² octets", false, "Mantisses additionnées (2,5 + 4) au lieu d'être multipliées."],
      ["1 × 10²⁸ octets", false, "Exposants multipliés (9 × 3 = 27) au lieu d'être additionnés."],
    ], "4 000 = 4 × 10³. On regroupe : (2,5 × 4) × (10⁹ × 10³) = 10 × 10¹² = 10¹³ octets. Contrôle : 2,5 milliards × 4 000 = 10 000 milliards, soit 10¹³.", "En notation scientifique, on multiplie les nombres entre eux et on additionne les exposants, puis on réajuste pour avoir 1 ≤ a < 10.", [
      "Écris 4 000 sous forme scientifique.",
      "Multiplie 2,5 par 4, puis 10⁹ par 10³.",
      "Le résultat 10 × 10¹² doit être réécrit avec une seule puissance de 10.",
    ], "regle", true),
    m("B-MATH-CALC-006", "racine", 2, "Simplifier √72 + √18.", [
      ["9√2", true, "√72 = 6√2 et √18 = 3√2, d'où 9√2."],
      ["3√10", false, "Racines additionnées sous un même radical : √(72 + 18) = √90 = 3√10."],
      ["15√2", false, "√18 écrit 9√2 au lieu de 3√2 : la racine de 9 a été oubliée."],
      ["39√2", false, "√72 écrit 36√2 : la racine de 36 a été oubliée."],
    ], "On fait apparaître des carrés parfaits : 72 = 36 × 2 donc √72 = 6√2 ; 18 = 9 × 2 donc √18 = 3√2. Somme : 6√2 + 3√2 = 9√2 ≈ 12,7. Contrôle : √72 ≈ 8,5 et √18 ≈ 4,2.", "√(a²b) = a√b ; on n'additionne jamais deux nombres sous une même racine.", [
      "Cherche le plus grand carré parfait qui divise 72, puis 18.",
      "72 = 36 × 2 et 18 = 9 × 2.",
      "Tu obtiens deux multiples de √2 : additionne les coefficients.",
    ], "erreur"),
    m("B-MATH-CALC-007", "mental", 1, "Sans poser l'opération, calculer 25 × 48.", [
      ["1 200", true, "25 × 48 = 25 × 4 × 12 = 100 × 12 = 1 200."],
      ["1 000", false, "Distributivité incomplète : 20 × 48 + 5 × 8 (oubli de 5 × 40)."],
      ["1 248", false, "25 × 50 − 2 : on a retiré 2 au lieu de 25 × 2 = 50."],
      ["1 150", false, "25 × 50 − 2 × 50 : on a retiré 100 au lieu de 50."],
    ], "48 = 4 × 12 et 25 × 4 = 100, donc 25 × 48 = 100 × 12 = 1 200. Autre voie : 48 × 100 ÷ 4 = 4 800 ÷ 4 = 1 200.", "Multiplier par 25 revient à multiplier par 100 puis diviser par 4.", [
      "25 × 4 donne un nombre très simple.",
      "Décompose 48 en 4 × 12.",
      "Il reste à calculer 100 × 12.",
    ], "approfondir"),
    m("B-MATH-CALC-008", "ordre", 3, "Une marque vend 3,8 millions de stylos par an au prix unitaire de 0,49 €. Quel est l'ordre de grandeur de son chiffre d'affaires annuel ?", [
      ["Environ 1,9 million d'euros", true, "3 800 000 × 0,49 ≈ 1 862 000 €, soit environ 1,9 million."],
      ["Environ 19 millions d'euros", false, "Erreur d'une puissance de 10 : 0,49 lu comme 4,9."],
      ["Environ 190 000 €", false, "Erreur d'une puissance de 10 dans l'autre sens : 3,8 millions lu comme 380 000."],
      ["Environ 7,8 millions d'euros", false, "Division 3,8 ÷ 0,49 au lieu d'une multiplication."],
    ], "Estimation : 0,49 € ≈ 0,5 €, donc le chiffre d'affaires vaut environ la moitié de 3,8 millions, soit 1,9 million d'euros. Le calcul exact donne 3 800 000 × 0,49 = 1 862 000 €.", "Arrondir chaque donnée avant de calculer donne un ordre de grandeur qui élimine les erreurs de virgule.", [
      "Chiffre d'affaires = quantité × prix unitaire.",
      "0,49 € est très proche de 0,50 €.",
      "Prendre la moitié de 3,8 millions.",
    ], "approfondir"),
    m("B-MATH-CALC-009", "frac", 2, "Quel est le plus grand des nombres suivants ?", [
      ["2/3", true, "2/3 ≈ 0,667, la plus grande des quatre valeurs."],
      ["11/18", false, "11/18 ≈ 0,611 : un numérateur plus grand ne suffit pas à faire une fraction plus grande."],
      ["5/8", false, "5/8 = 0,625, inférieur à 2/3 ≈ 0,667."],
      ["7/12", false, "7/12 ≈ 0,583 : c'est la plus petite des quatre."],
    ], "Au dénominateur commun 72 : 5/8 = 45/72, 7/12 = 42/72, 2/3 = 48/72, 11/18 = 44/72. La plus grande est 2/3. En décimal : 0,625 ; 0,583 ; 0,667 ; 0,611.", "Pour comparer des fractions, on les met au même dénominateur ou on les convertit en décimaux.", [
      "Compare les fractions en décimal, ou sur un même dénominateur.",
      "72 est un multiple commun de 8, 12, 3 et 18.",
      "Calcule les numérateurs sur 72 : 45, 42, 48 et 44.",
    ], "regle"),
    m("B-MATH-CALC-010", "puiss", 2, "Calculer (−3)² − 3² + 2⁰.", [
      ["1", true, "(−3)² = 9, 3² = 9 et 2⁰ = 1 : 9 − 9 + 1 = 1."],
      ["−17", false, "(−3)² lu comme −9 : −9 − 9 + 1."],
      ["0", false, "2⁰ pris égal à 0 au lieu de 1."],
      ["2", false, "2⁰ confondu avec 2¹ = 2."],
    ], "(−3)² = (−3) × (−3) = 9 ; 3² = 9 ; 2⁰ = 1 (tout nombre non nul à la puissance 0 vaut 1). Donc 9 − 9 + 1 = 1.", "(−a)² = a² et a⁰ = 1 pour tout a non nul.", [
      "Le carré d'un nombre négatif est positif.",
      "Que vaut un nombre non nul à la puissance 0 ?",
      "Il reste 9 − 9 + 1.",
    ], "erreur"),
  ],
};
