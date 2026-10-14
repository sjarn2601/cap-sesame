// MATH · Statistiques descriptives : moyennes, médiane, quartiles, dispersion, lecture de données.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.stats";
const m = maker(S);

export const STATS: PartieMath = {
  skill: competence(S, "Statistiques", "Statistiques descriptives", ["moyenne", "moyenne ponderee", "mediane", "quartile", "etendue", "ecart type", "variance", "effectif", "frequence", "diagramme"]),
  lesson: {
    skillId: S,
    title: "Statistiques : moyennes, médiane, quartiles et dispersion",
    objectives: ["Calculer une moyenne simple ou pondérée et l'utiliser à l'envers", "Déterminer médiane et quartiles d'une série", "Mesurer la dispersion : étendue, écart interquartile, écart-type", "Lire un tableau d'effectifs ou un diagramme"],
    prerequisites: ["math.calc"],
    regle:
      "Moyenne pondérée : on multiplie chaque valeur par son coefficient (ou son effectif), on additionne, puis on divise par la somme des coefficients. La moyenne de deux groupes n'est pas la moyenne des deux moyennes : il faut pondérer par les effectifs. Utilisée à l'envers, la formule donne une valeur manquante : somme totale = moyenne × effectif total.\n\nMédiane : on range les valeurs dans l'ordre croissant. Avec n valeurs, si n est impair, la médiane est la valeur de rang (n + 1)/2 ; si n est pair, c'est la moyenne des valeurs de rangs n/2 et n/2 + 1. La médiane partage la série en deux moitiés et n'est pas sensible aux valeurs extrêmes, contrairement à la moyenne.\n\nQuartiles (définition du lycée) : Q1 est la plus petite valeur de la série telle qu'au moins 25 % des valeurs lui sont inférieures ou égales ; Q3, la plus petite valeur telle qu'au moins 75 % des valeurs lui sont inférieures ou égales. En pratique, Q1 est la valeur de rang n/4 arrondi à l'entier supérieur, Q3 celle de rang 3n/4 arrondi à l'entier supérieur.\n\nDispersion : l'étendue vaut maximum − minimum ; l'écart interquartile vaut Q3 − Q1 et concerne la moitié centrale des valeurs. La variance est la moyenne des carrés des écarts à la moyenne ; l'écart-type est la racine carrée de la variance. Plus il est grand, plus les valeurs sont dispersées autour de la moyenne.\n\nTableau d'effectifs : la fréquence d'une valeur vaut son effectif divisé par l'effectif total. Les effectifs cumulés croissants permettent de trouver rapidement la médiane et les quartiles. Dans un diagramme circulaire, l'angle d'un secteur vaut fréquence × 360°.",
    formules:
      "Moyenne pondérée = Σ(nᵢ × xᵢ) / Σnᵢ\nSomme des valeurs = moyenne × effectif\nMédiane : rang (n + 1)/2 si n impair ; moyenne des rangs n/2 et n/2 + 1 si n pair\nQ1 : rang n/4 arrondi au-dessus ; Q3 : rang 3n/4 arrondi au-dessus\nÉtendue = max − min ; écart interquartile = Q3 − Q1\nVariance = moyenne des (xᵢ − x̄)² ; écart-type = √variance\nAngle d'un secteur = fréquence × 360°",
    methode:
      "1. Range les valeurs dans l'ordre croissant (indispensable pour médiane et quartiles).\n2. Compte l'effectif total n.\n3. Calcule les rangs utiles (médiane, Q1, Q3) avant de chercher les valeurs.\n4. Pour une moyenne, vérifie les poids : effectifs, coefficients ou tailles de groupes.\n5. Contrôle : la moyenne est comprise entre le minimum et le maximum.",
    exemple:
      "Notes d'un élève : 14 (coefficient 3), 9 (coefficient 2) et 11 (coefficient 1). Moyenne : (42 + 18 + 11)/6 = 71/6 ≈ 11,83.\n\nSérie de 8 temps rangés : 4, 6, 7, 9, 10, 12, 15, 20. Médiane : moyenne des 4e et 5e valeurs, (9 + 10)/2 = 9,5. Q1 : rang 8/4 = 2, donc Q1 = 6. Q3 : rang 6, donc Q3 = 12. Écart interquartile : 6.\n\nSérie 2, 4, 6, 8 : moyenne 5, écarts −3, −1, 1, 3, carrés 9, 1, 1, 9, variance 20/4 = 5, écart-type √5 ≈ 2,24.",
    erreur:
      "✗ Prendre la valeur du milieu sans ranger la série → ✓ trier d'abord par ordre croissant\n✗ Faire la moyenne des moyennes de deux groupes de tailles différentes → ✓ pondérer par les effectifs\n✗ Confondre le rang d'une valeur et la valeur elle-même → ✓ le rang dit où chercher, la série donne la valeur\n✗ Diviser par le nombre de valeurs distinctes dans un tableau d'effectifs → ✓ diviser par l'effectif total\n✗ Oublier la racine carrée de la variance → ✓ écart-type = √variance",
    approfondir:
      "Effet d'une transformation : si on ajoute 2 points à toutes les notes, la moyenne et la médiane augmentent de 2, mais l'écart-type et l'étendue ne changent pas. Si on multiplie toutes les valeurs par 1,1, toutes ces grandeurs sont multipliées par 1,1.\n\nCorriger une valeur fausse : la nouvelle somme vaut l'ancienne somme moins la valeur fausse plus la valeur juste ; on redivise ensuite par l'effectif.\n\nGestion du temps : dans un tableau d'effectifs, écris tout de suite la colonne des effectifs cumulés. Elle donne médiane et quartiles en quelques secondes.",
    cards: [
      ["Moyenne de deux groupes", "Pondérée par les effectifs : (n₁m₁ + n₂m₂)/(n₁ + n₂)", false],
      ["Médiane d'une série de 10 valeurs", "Moyenne des 5e et 6e valeurs rangées", false],
      ["Rang de Q1 pour n = 11", "11/4 = 2,75, arrondi à 3 : 3e valeur", false],
      ["Écart-type", "Racine carrée de la variance", true],
      ["Angle d'un secteur de 30 %", "0,3 × 360° = 108°", false],
    ],
  },
  questions: [
    m("B-MATH-STAT-001", "moyenne", 1, "Un élève obtient 12 en mathématiques (coefficient 2), 15 en économie (coefficient 3) et 9 en histoire (coefficient 1). Quelle est sa moyenne ?", [
      ["13", true, "(24 + 45 + 9)/6 = 78/6 = 13."],
      ["12", false, "Moyenne simple (12 + 15 + 9)/3, sans les coefficients."],
      ["26", false, "Division par le nombre de matières (3) au lieu de la somme des coefficients (6)."],
      ["15,6", false, "Somme des coefficients incomplète : 78 divisé par 5."],
    ], "Somme pondérée : 12 × 2 + 15 × 3 + 9 × 1 = 24 + 45 + 9 = 78. Somme des coefficients : 6. Moyenne : 78/6 = 13. Contrôle : 13 est entre 9 et 15, plus proche de 15 qui a le plus gros coefficient.", "Moyenne pondérée = somme des valeurs × coefficients / somme des coefficients.", [
      "Chaque note compte autant de fois que son coefficient.",
      "Calcule 12 × 2 + 15 × 3 + 9 × 1.",
      "Divise par 2 + 3 + 1.",
    ], "formules"),
    m("B-MATH-STAT-002", "mediane", 1, "Six salariés ont mis les temps suivants pour venir au travail (en minutes) : 12, 7, 15, 9, 20, 11. Quelle est la médiane de cette série ?", [
      ["11,5 min", true, "Série rangée : 7, 9, 11, 12, 15, 20 ; médiane (11 + 12)/2 = 11,5."],
      ["12 min", false, "Valeurs centrales prises sans ranger la série : (15 + 9)/2."],
      ["12,3 min", false, "C'est la moyenne (74/6 ≈ 12,3), pas la médiane."],
      ["11 min", false, "Seule la 3e valeur a été retenue : avec 6 valeurs, il faut la moyenne des 3e et 4e."],
    ], "On range : 7, 9, 11, 12, 15, 20. Avec 6 valeurs (nombre pair), la médiane est la moyenne des 3e et 4e valeurs : (11 + 12)/2 = 11,5 min.", "La médiane se lit sur la série rangée ; avec un effectif pair, c'est la moyenne des deux valeurs centrales.", [
      "Commence par ranger les valeurs dans l'ordre croissant.",
      "Avec 6 valeurs, quelles sont les deux valeurs centrales ?",
      "Fais la moyenne des 3e et 4e valeurs.",
    ], "erreur"),
    m("B-MATH-STAT-003", "moyenne", 2, "Après quatre contrôles, Inès a une moyenne de 11. Quelle note doit-elle obtenir au cinquième contrôle, de même coefficient, pour que sa moyenne atteigne 12 ?", [
      ["16", true, "Il faut un total de 5 × 12 = 60 points ; elle en a 4 × 11 = 44 ; il manque 16."],
      ["13", false, "Raisonnement « il manque un point, donc 12 + 1 » : le nouveau contrôle doit relever quatre notes."],
      ["4", false, "Division par 4 au lieu de 5 : (44 + x)/4 = 12."],
      ["12", false, "Obtenir 12 ne fait pas passer la moyenne de 11 à 12 : elle monterait seulement à 11,2."],
    ], "Total actuel : 4 × 11 = 44 points. Pour une moyenne de 12 sur cinq contrôles, il faut 5 × 12 = 60 points. Note nécessaire : 60 − 44 = 16. Contrôle : (44 + 16)/5 = 12.", "Somme des valeurs = moyenne × effectif : c'est la clé des moyennes « à l'envers ».", [
      "Traduis la moyenne actuelle en total de points.",
      "Quel total faut-il après cinq contrôles pour une moyenne de 12 ?",
      "La note cherchée est la différence entre ces deux totaux.",
    ], "formules"),
    m("B-MATH-STAT-004", "quartiles", 2, "Voici une série rangée de 11 valeurs : 3, 5, 6, 8, 9, 10, 12, 13, 15, 18, 21. Quel est son écart interquartile ?", [
      ["9", true, "Q1 = 6 (3e valeur) et Q3 = 15 (9e valeur) : 15 − 6 = 9."],
      ["18", false, "C'est l'étendue (21 − 3), pas l'écart interquartile."],
      ["8", false, "Rangs arrondis à l'inférieur : 2e et 8e valeurs (13 − 5)."],
      ["5,5", false, "Écart entre les rangs (8,25 − 2,75) et non entre les valeurs."],
    ], "n = 11. Q1 : 11/4 = 2,75, arrondi à 3, donc Q1 est la 3e valeur : 6. Q3 : 3 × 11/4 = 8,25, arrondi à 9, donc Q3 est la 9e valeur : 15. Écart interquartile : 15 − 6 = 9.", "Q1 et Q3 sont les valeurs de rangs n/4 et 3n/4 arrondis à l'entier supérieur ; l'écart interquartile vaut Q3 − Q1.", [
      "Calcule les rangs n/4 et 3n/4 avec n = 11.",
      "Arrondis ces rangs à l'entier supérieur : 3 et 9.",
      "Lis les 3e et 9e valeurs et fais la différence.",
    ], "formules", false),
    m("B-MATH-STAT-005", "effectifs", 2, "Dans un immeuble, on a relevé le nombre d'enfants par foyer : 6 foyers sans enfant, 8 avec 1 enfant, 6 avec 2 enfants, 3 avec 3 enfants et 2 avec 4 enfants. Quel est le nombre moyen d'enfants par foyer ?", [
      ["1,48", true, "37 enfants pour 25 foyers : 37/25 = 1,48."],
      ["2", false, "Moyenne des valeurs 0, 1, 2, 3, 4 sans tenir compte des effectifs."],
      ["7,4", false, "Division par le nombre de valeurs distinctes (5) au lieu du nombre de foyers (25)."],
      ["5", false, "Moyenne des effectifs (25/5) : ce n'est pas un nombre d'enfants."],
    ], "Nombre total d'enfants : 0 × 6 + 1 × 8 + 2 × 6 + 3 × 3 + 4 × 2 = 0 + 8 + 12 + 9 + 8 = 37. Nombre de foyers : 6 + 8 + 6 + 3 + 2 = 25. Moyenne : 37/25 = 1,48.", "Dans un tableau d'effectifs, la moyenne vaut Σ(effectif × valeur) / effectif total.", [
      "Chaque valeur compte autant de fois que son effectif.",
      "Calcule le nombre total d'enfants, puis le nombre total de foyers.",
      "Divise 37 par 25.",
    ]),
    m("B-MATH-STAT-006", "mediane", 2, "Les notes d'un groupe de 20 étudiants se répartissent ainsi : 8 (3 étudiants), 10 (7 étudiants), 12 (4 étudiants), 14 (4 étudiants), 16 (2 étudiants). Quelle est la note médiane ?", [
      ["11", true, "10e note = 10 et 11e note = 12 : médiane (10 + 12)/2 = 11."],
      ["10", false, "C'est le mode (note la plus fréquente), pas la médiane."],
      ["11,5", false, "C'est la moyenne (230/20), pas la médiane."],
      ["12", false, "Valeur placée au milieu du tableau, sans tenir compte des effectifs."],
    ], "Effectifs cumulés : 3 (note 8), 10 (note 10), 14 (note 12), 18, 20. Avec 20 notes, la médiane est la moyenne des 10e et 11e notes. La 10e note vaut 10, la 11e vaut 12 : médiane = 11.", "Avec un tableau d'effectifs, on repère les rangs centraux grâce aux effectifs cumulés.", [
      "Avec 20 valeurs, quels sont les rangs centraux ?",
      "Calcule les effectifs cumulés : 3, 10, 14…",
      "La 10e note est la dernière note 10 ; la 11e est la première note 12.",
    ], "methode"),
    m("B-MATH-STAT-007", "dispersion", 1, "Les températures minimales relevées pendant six jours sont : −4 °C, 3 °C, 7 °C, −2 °C, 12 °C, 5 °C. Quelle est l'étendue de cette série ?", [
      ["16 °C", true, "12 − (−4) = 16 °C."],
      ["8 °C", false, "Signe négatif ignoré : 12 − 4."],
      ["3,5 °C", false, "C'est la moyenne (21/6), pas l'étendue."],
      ["14 °C", false, "Mauvais minimum : 12 − (−2) ; le minimum est −4."],
    ], "Étendue = maximum − minimum = 12 − (−4) = 12 + 4 = 16 °C.", "Étendue = valeur maximale − valeur minimale ; soustraire un négatif revient à ajouter.", [
      "Repère la plus grande et la plus petite valeur.",
      "Le minimum est négatif.",
      "Calcule 12 − (−4).",
    ]),
    m("B-MATH-STAT-008", "moyenne", 3, "Dans une promotion de 50 étudiants, la moyenne générale est 10,5. Les 20 étudiants du groupe A ont 12 de moyenne. Quelle est la moyenne des 30 étudiants du groupe B ?", [
      ["9,5", true, "(50 × 10,5 − 20 × 12)/30 = (525 − 240)/30 = 9,5."],
      ["9", false, "Moyenne des moyennes appliquée à l'envers : (12 + x)/2 = 10,5."],
      ["14,25", false, "Total du groupe B divisé par 20 au lieu de 30."],
      ["5,7", false, "Total du groupe B divisé par l'effectif de toute la promotion (50)."],
    ], "Total de la promotion : 50 × 10,5 = 525 points. Total du groupe A : 20 × 12 = 240. Total du groupe B : 525 − 240 = 285, réparti sur 30 étudiants : 285/30 = 9,5. Contrôle : (240 + 285)/50 = 10,5.", "La moyenne d'un groupe se retrouve à partir des totaux : total = moyenne × effectif.", [
      "Transforme chaque moyenne en total de points.",
      "Total de la promotion moins total du groupe A.",
      "Divise le total du groupe B par 30.",
    ], "regle"),
    m("B-MATH-STAT-009", "lecture", 1, "Dans un diagramme circulaire représentant un budget, le poste « logement » correspond à 27 % du total. Quel est l'angle de son secteur ?", [
      ["97,2°", true, "0,27 × 360 = 97,2°."],
      ["27°", false, "Le pourcentage a été pris pour un angle."],
      ["48,6°", false, "Calcul sur 180° au lieu de 360°."],
      ["13,3°", false, "Division 360 ÷ 27 au lieu d'une multiplication."],
    ], "Le disque entier (100 %) correspond à 360°. Angle = 0,27 × 360 = 97,2°. Contrôle : un quart (25 %) vaut 90°, 27 % un peu plus.", "Angle d'un secteur = fréquence × 360°.", [
      "À quel angle correspond 100 % ?",
      "Multiplie la fréquence par 360°.",
      "25 % correspond à 90° : ton résultat doit être un peu au-dessus.",
    ], "formules"),
    m("B-MATH-STAT-010", "moyenne", 3, "Une série de 8 valeurs a pour moyenne 14. On s'aperçoit qu'une valeur saisie 25 vaut en réalité 5. Quelle est la moyenne corrigée ?", [
      ["11,5", true, "(8 × 14 − 25 + 5)/8 = 92/8 = 11,5."],
      ["13,1", false, "Somme corrigée divisée par 7 au lieu de 8 : 92/7 ≈ 13,1."],
      ["12,4", false, "La valeur fausse a été supprimée sans être remplacée : 87/7 ≈ 12,4."],
      ["9,5", false, "Moyenne de l'ancienne moyenne et de la valeur juste : (14 + 5)/2."],
    ], "Somme initiale : 8 × 14 = 112. Somme corrigée : 112 − 25 + 5 = 92. Moyenne corrigée : 92/8 = 11,5. Raccourci : la somme baisse de 20, donc la moyenne baisse de 20/8 = 2,5.", "Pour corriger une moyenne, on corrige la somme puis on redivise par le même effectif.", [
      "Retrouve la somme des 8 valeurs.",
      "Remplace 25 par 5 dans cette somme.",
      "Divise la nouvelle somme par 8.",
    ], "approfondir", true),
    m("B-MATH-STAT-011", "dispersion", 2, "Quel est l'écart-type de la série 1, 2, 6, 11 (chaque valeur apparaissant une fois), arrondi au centième ?", [
      ["3,94", true, "Moyenne 5 ; carrés des écarts 16, 9, 1, 36 ; variance 62/4 = 15,5 ; écart-type √15,5 ≈ 3,94."],
      ["15,5", false, "C'est la variance : il manque la racine carrée."],
      ["3,5", false, "Moyenne des écarts en valeur absolue (4 + 3 + 1 + 6)/4 : ce n'est pas l'écart-type."],
      ["62", false, "Somme des carrés des écarts, non divisée par l'effectif."],
    ], "Moyenne : (1 + 2 + 6 + 11)/4 = 5. Écarts à la moyenne : −4, −3, 1, 6. Carrés : 16, 9, 1, 36, de somme 62. Variance : 62/4 = 15,5. Écart-type : √15,5 ≈ 3,94.", "Écart-type = racine carrée de la moyenne des carrés des écarts à la moyenne.", [
      "Commence par calculer la moyenne.",
      "Calcule les carrés des écarts à la moyenne, puis leur moyenne.",
      "Prends la racine carrée de la variance.",
    ], "exemple"),
  ],
};
