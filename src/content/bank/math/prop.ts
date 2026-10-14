// MATH · Proportionnalité : règle de trois, échelles, partages proportionnels, mélanges.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.prop";
const m = maker(S);

export const PROP: PartieMath = {
  skill: competence(S, "Proportions", "Proportionnalité, échelles, partages et mélanges", ["regle de trois", "produit en croix", "echelle", "proportion", "partage proportionnel", "melange", "concentration", "inversement proportionnel"]),
  lesson: {
    skillId: S,
    title: "Proportionnalité : règle de trois, échelles, partages et mélanges",
    objectives: ["Reconnaître une situation de proportionnalité, directe ou inverse", "Calculer une quatrième proportionnelle et utiliser une échelle", "Effectuer un partage proportionnel", "Calculer la teneur d'un mélange"],
    prerequisites: ["math.calc"],
    regle:
      "Deux grandeurs sont proportionnelles quand on passe de l'une à l'autre en multipliant toujours par le même nombre, le coefficient de proportionnalité. Doubler l'une double l'autre. Pour trouver une valeur manquante, passe par l'unité (« 1 kg coûte… ») ou utilise le produit en croix.\n\nToutes les situations ne sont pas proportionnelles : un tarif avec une part fixe (abonnement + prix à l'unité) ne l'est pas. Certaines grandeurs sont inversement proportionnelles : leur produit est constant. Avec deux fois plus d'ouvriers au même rythme, un chantier dure deux fois moins longtemps (ouvriers × jours = constante).\n\nÉchelle : sur un plan à l'échelle 1/n, une longueur réelle est n fois plus grande que sur le plan, dans la même unité. Échelle = distance sur le plan / distance réelle, les deux dans la même unité. Les aires sont multipliées par n², les volumes par n³.\n\nPartage proportionnel : pour partager une somme S proportionnellement à des poids a, b, c, on calcule la somme des poids a + b + c ; chacun reçoit S × (son poids) / (somme des poids). Contrôle : les parts additionnées redonnent S.\n\nMélanges : la teneur d'un mélange (prix moyen au kilo, pourcentage de sucre, degré d'alcool) est une moyenne pondérée par les quantités. On additionne les quantités de « substance » (sucre, euros…) et on divise par la quantité totale. La teneur du mélange est toujours comprise entre les teneurs des ingrédients, plus proche de celle de l'ingrédient le plus abondant.",
    formules:
      "Quatrième proportionnelle : a/b = c/x ⇔ x = b × c / a\nInverse proportionnalité : x₁ × y₁ = x₂ × y₂\nÉchelle 1/n : réel = plan × n (même unité)\nAires à l'échelle 1/n : réel = plan × n²\nPart de A = S × a / (a + b + c)\nTeneur d'un mélange = (q₁t₁ + q₂t₂) / (q₁ + q₂)",
    methode:
      "1. Demande-toi si la situation est proportionnelle, inversement proportionnelle ou ni l'un ni l'autre.\n2. Écris les grandeurs dans un petit tableau à deux lignes, avec les unités.\n3. Mets toutes les données dans la même unité avant de calculer.\n4. Passe par l'unité ou par le produit en croix.\n5. Contrôle : sens de variation logique et ordre de grandeur.",
    exemple:
      "Partage proportionnel. Deux associés ont apporté 8 000 € et 12 000 €. Ils partagent 5 000 € de bénéfice proportionnellement aux apports. Somme des apports : 20 000 €. Premier associé : 5 000 × 8 000 / 20 000 = 2 000 € ; second : 5 000 × 12 000 / 20 000 = 3 000 €. Contrôle : 2 000 + 3 000 = 5 000.\n\nMélange. On mélange 4 L de jus à 10 % de sucre et 1 L de sirop à 60 %. Sucre : 0,4 + 0,6 = 1 L de sucre pour 5 L, soit une teneur de 20 %. Elle est bien entre 10 % et 60 %, plus proche de 10 % car le jus est majoritaire.",
    erreur:
      "✗ Raisonner de façon additive (« 2 kg de plus, donc 2 € de plus ») → ✓ multiplier par le coefficient de proportionnalité\n✗ Faire la moyenne simple de deux teneurs → ✓ pondérer par les quantités mélangées\n✗ Appliquer l'échelle à des aires comme à des longueurs → ✓ multiplier les aires par n²\n✗ Traiter « plus d'ouvriers » comme une proportionnalité directe → ✓ reconnaître une proportionnalité inverse (produit constant)\n✗ Oublier de convertir km, m et cm avant d'écrire une échelle → ✓ tout mettre dans la même unité",
    approfondir:
      "Pour les échelles, retiens : 1/25 000 signifie 1 cm pour 250 m, et 1/100 000 signifie 1 cm pour 1 km. Il suffit alors de compter.\n\nPour un mélange dont on cherche une quantité, pose l'équation « quantité totale de substance = teneur visée × quantité totale ». Méthode rapide : les quantités sont inversement proportionnelles aux écarts à la teneur visée.\n\nGestion du temps : la plupart de ces exercices se règlent en moins d'une minute avec le passage par l'unité. Si les nombres sont lourds, utilise la calculatrice de la plateforme, mais estime d'abord le résultat.",
    cards: [
      ["Échelle 1/50 000 : 1 cm sur la carte =", "500 m dans la réalité", true],
      ["Produit en croix", "a/b = c/x ⇒ x = b × c / a", false],
      ["Proportionnalité inverse", "Le produit des deux grandeurs reste constant", false],
      ["Teneur d'un mélange", "Moyenne des teneurs pondérée par les quantités", false],
      ["Aires à l'échelle 1/n", "Multipliées par n²", false],
    ],
  },
  questions: [
    m("B-MATH-PROP-001", "unite", 1, "Au marché, 5 kg de pommes coûtent 13,50 €. Combien coûtent 7 kg de ces pommes ?", [
      ["18,90 €", true, "1 kg coûte 13,50 ÷ 5 = 2,70 €, donc 7 kg coûtent 7 × 2,70 = 18,90 €."],
      ["15,50 €", false, "Raisonnement additif : 2 kg de plus ne font pas 2 € de plus."],
      ["9,64 €", false, "Rapport inversé : 13,50 × 5/7 au lieu de 13,50 × 7/5."],
      ["2,70 €", false, "C'est le prix d'un seul kilogramme, pas celui de 7 kg."],
    ], "Prix au kilo : 13,50 ÷ 5 = 2,70 €. Pour 7 kg : 7 × 2,70 = 18,90 €. Contrôle : 7 kg, c'est un peu moins d'une fois et demie 5 kg, et 18,90 est un peu moins de 1,5 × 13,50 = 20,25.", "Dans une situation proportionnelle, on passe par l'unité puis on multiplie.", [
      "Le prix est proportionnel à la masse.",
      "Calcule le prix d'un kilogramme.",
      "Multiplie ce prix au kilo par 7.",
    ]),
    m("B-MATH-PROP-002", "echelle", 1, "Sur un plan d'appartement à l'échelle 1/200, une chambre mesure 2,4 cm de large. Quelle est sa largeur réelle ?", [
      ["4,8 m", true, "2,4 × 200 = 480 cm, soit 4,8 m."],
      ["48 m", false, "Erreur de conversion : 480 cm divisés par 10 au lieu de 100."],
      ["0,48 m", false, "Erreur de conversion : 480 cm divisés par 1 000 au lieu de 100."],
      ["0,83 m", false, "Division 200 ÷ 2,4 ≈ 83 cm au lieu d'une multiplication."],
    ], "À l'échelle 1/200, la réalité est 200 fois plus grande que le plan : 2,4 × 200 = 480 cm = 4,8 m. Une largeur de chambre de 4,8 m est plausible.", "Échelle 1/n : longueur réelle = longueur sur le plan × n, dans la même unité.", [
      "Que signifie 1/200 : 1 cm sur le plan représente combien en réalité ?",
      "Multiplie 2,4 cm par 200.",
      "Convertis 480 cm en mètres.",
    ], "formules"),
    m("B-MATH-PROP-003", "echelle", 2, "Deux villages distants de 36 km sont séparés de 14,4 cm sur une carte. Quelle est l'échelle de la carte ?", [
      ["1/250 000", true, "36 km = 3 600 000 cm et 3 600 000 ÷ 14,4 = 250 000."],
      ["1/25 000", false, "Conversion de 36 km en 360 000 cm : un zéro de moins."],
      ["1/2 500 000", false, "Conversion de 36 km en 36 000 000 cm : un zéro de trop."],
      ["1/2 500", false, "36 km convertis en mètres (36 000) puis divisés par 14,4 cm : unités différentes."],
    ], "On met tout en centimètres : 36 km = 36 000 m = 3 600 000 cm. Échelle = 14,4 / 3 600 000 = 1/250 000. Contrôle : à cette échelle, 1 cm représente 2,5 km, et 14,4 × 2,5 = 36 km.", "Une échelle se calcule avec les deux longueurs exprimées dans la même unité.", [
      "Échelle = distance sur la carte / distance réelle.",
      "Convertis 36 km en centimètres : 1 km = 100 000 cm.",
      "Divise 3 600 000 par 14,4.",
    ], "erreur"),
    m("B-MATH-PROP-004", "partage", 2, "Trois associés ont apporté 12 000 €, 18 000 € et 30 000 € à leur entreprise. Ils se partagent un bénéfice de 45 000 € proportionnellement à leurs apports. Combien reçoit le deuxième associé ?", [
      ["13 500 €", true, "45 000 × 18 000 / 60 000 = 45 000 × 0,3 = 13 500 €."],
      ["15 000 €", false, "Partage en trois parts égales, sans tenir compte des apports."],
      ["22 500 €", false, "C'est la part du troisième associé (30 000 / 60 000 = 50 %)."],
      ["9 000 €", false, "C'est la part du premier associé (12 000 / 60 000 = 20 %)."],
    ], "Total des apports : 12 000 + 18 000 + 30 000 = 60 000 €. Le deuxième a apporté 18 000 / 60 000 = 30 % du capital ; il reçoit 30 % de 45 000, soit 13 500 €. Contrôle : 9 000 + 13 500 + 22 500 = 45 000.", "Dans un partage proportionnel, chaque part vaut total × poids / somme des poids.", [
      "Calcule d'abord la somme des apports.",
      "Quelle fraction du capital représente l'apport du deuxième associé ?",
      "Applique cette fraction (30 %) au bénéfice.",
    ], "exemple"),
    m("B-MATH-PROP-005", "melange", 2, "On mélange 3 L de sirop dilué contenant 20 % de sucre et 2 L de sirop contenant 45 % de sucre. Quel est le pourcentage de sucre du mélange ?", [
      ["30 %", true, "Sucre : 0,6 + 0,9 = 1,5 L pour 5 L, soit 30 %."],
      ["32,5 %", false, "Moyenne simple (20 + 45)/2, sans tenir compte des volumes."],
      ["65 %", false, "Pourcentages additionnés : impossible, le mélange ne peut pas dépasser 45 %."],
      ["35 %", false, "Pondération inversée : 3 L associés à 45 % et 2 L à 20 %."],
    ], "Quantité de sucre : 3 × 0,20 = 0,6 L et 2 × 0,45 = 0,9 L, soit 1,5 L dans 5 L de mélange. Teneur : 1,5 / 5 = 0,30 = 30 %. Contrôle : 30 % est entre 20 % et 45 %, plus près de 20 % car ce sirop est majoritaire.", "La teneur d'un mélange est la moyenne des teneurs pondérée par les quantités.", [
      "Calcule la quantité de sucre apportée par chaque sirop.",
      "3 × 0,20 et 2 × 0,45 : additionne.",
      "Divise la quantité de sucre par le volume total de 5 L.",
    ], "exemple"),
    m("B-MATH-PROP-006", "unite", 1, "Une imprimante imprime 42 pages en 3 min 30 s. À ce rythme, combien de pages imprime-t-elle en 10 minutes ?", [
      ["120", true, "3 min 30 s = 3,5 min ; 42 ÷ 3,5 = 12 pages par minute ; 12 × 10 = 120."],
      ["127", false, "3 min 30 s lu comme 3,3 min : 42 ÷ 3,3 × 10 ≈ 127."],
      ["140", false, "Les 30 secondes ont été oubliées : 42 ÷ 3 × 10."],
      ["105", false, "Durée arrondie à 4 minutes : 42 ÷ 4 × 10."],
    ], "Il faut d'abord convertir : 3 min 30 s = 3,5 min. Débit : 42 ÷ 3,5 = 12 pages par minute. En 10 minutes : 120 pages.", "Une durée en minutes et secondes se convertit en décimal avant tout calcul (30 s = 0,5 min).", [
      "Convertis 3 min 30 s en minutes décimales.",
      "Combien de pages par minute ?",
      "Multiplie le nombre de pages par minute par 10.",
    ]),
    m("B-MATH-PROP-007", "inverse", 2, "Six ouvriers mettent 15 jours pour réaliser un chantier. Combien de jours mettraient neuf ouvriers travaillant au même rythme ?", [
      ["10 jours", true, "6 × 15 = 90 jours de travail ; 90 ÷ 9 = 10 jours."],
      ["22,5 jours", false, "Proportionnalité directe appliquée à tort : plus d'ouvriers ne rallonge pas le chantier."],
      ["12 jours", false, "Raisonnement additif : 3 ouvriers de plus, 3 jours de moins."],
      ["7,5 jours", false, "Passer de 6 à 9 ouvriers a été traité comme un doublement de l'effectif."],
    ], "Le travail total vaut 6 × 15 = 90 journées de travail. Avec 9 ouvriers : 90 ÷ 9 = 10 jours. Contrôle : 1,5 fois plus d'ouvriers, donc 1,5 fois moins de temps : 15 ÷ 1,5 = 10.", "Pour deux grandeurs inversement proportionnelles, le produit reste constant.", [
      "Plus il y a d'ouvriers, plus le chantier est court : est-ce une proportionnalité directe ?",
      "Calcule le nombre total de journées de travail.",
      "Partage ces 90 journées entre 9 ouvriers.",
    ], "erreur"),
    m("B-MATH-PROP-008", "melange", 3, "Un torréfacteur mélange 2 kg d'arabica à 24 €/kg avec du robusta à 15 €/kg. Quelle masse de robusta doit-il ajouter pour obtenir un mélange à 18 €/kg ?", [
      ["4 kg", true, "48 + 15x = 18(2 + x) donne 3x = 12, soit x = 4."],
      ["1 kg", false, "Rapport des écarts inversé : 2 × (18 − 15)/(24 − 18)."],
      ["16 kg", false, "Oubli des 2 kg d'arabica dans le total : 48 + 15x = 18x."],
      ["6 kg", false, "L'écart de prix 24 − 18 = 6 a été pris pour une masse."],
    ], "Valeur du mélange : 2 × 24 + 15x = 48 + 15x. Elle doit valoir 18 × (2 + x) = 36 + 18x. Donc 48 − 36 = 18x − 15x, 12 = 3x, x = 4 kg. Contrôle : 2 × 24 + 4 × 15 = 108 € pour 6 kg, soit 18 €/kg.", "Dans un mélange, la valeur totale des ingrédients égale le prix visé multiplié par la masse totale.", [
      "Appelle x la masse de robusta et exprime la valeur totale du mélange.",
      "Le mélange de 2 + x kg doit valoir 18 € le kilo.",
      "Résous 48 + 15x = 36 + 18x.",
    ], "approfondir", true),
    m("B-MATH-PROP-009", "ratio", 2, "Dans un club de 36 adhérents, le rapport du nombre de filles au nombre de garçons est 4/5. Combien y a-t-il de filles ?", [
      ["16", true, "4 + 5 = 9 parts ; une part vaut 36 ÷ 9 = 4 ; filles : 4 × 4 = 16."],
      ["20", false, "C'est le nombre de garçons (5 parts)."],
      ["29", false, "36 × 4/5 ≈ 28,8 : le rapport 4/5 a été pris pour la proportion de filles dans le total."],
      ["9", false, "36 ÷ 4 : le rapport a été mal interprété."],
    ], "Un rapport 4/5 signifie 4 filles pour 5 garçons, soit 9 parts. 36 ÷ 9 = 4 adhérents par part. Filles : 4 × 4 = 16 ; garçons : 5 × 4 = 20. Contrôle : 16/20 = 4/5 et 16 + 20 = 36.", "Un rapport a/b entre deux groupes partage le total en a + b parts égales.", [
      "Le rapport 4/5 compare les filles aux garçons, pas au total.",
      "Combien de parts compte le club au total ?",
      "Une part vaut 36 ÷ 9.",
    ]),
    m("B-MATH-PROP-010", "echelle", 3, "Sur un plan cadastral à l'échelle 1/500, un terrain occupe une surface de 12 cm². Quelle est l'aire réelle du terrain ?", [
      ["300 m²", true, "12 × 500² = 3 000 000 cm² = 300 m²."],
      ["0,6 m²", false, "Échelle appliquée une seule fois : 12 × 500 = 6 000 cm²."],
      ["3 000 m²", false, "Conversion erronée : 1 m² = 10 000 cm², pas 1 000."],
      ["30 m²", false, "Conversion erronée : division par 100 000 au lieu de 10 000."],
    ], "Les longueurs sont multipliées par 500, donc les aires par 500² = 250 000. Aire réelle : 12 × 250 000 = 3 000 000 cm². Comme 1 m² = 10 000 cm², cela fait 300 m². Contrôle : un rectangle de 3 cm × 4 cm représente 15 m × 20 m = 300 m².", "À l'échelle 1/n, les aires sont multipliées par n².", [
      "Une échelle s'applique aux longueurs : que devient-elle pour une aire ?",
      "Multiplie 12 cm² par 500².",
      "Convertis en m² : 1 m² = 10 000 cm².",
    ], "formules"),
  ],
};
