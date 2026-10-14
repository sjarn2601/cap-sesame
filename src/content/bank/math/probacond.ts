// MATH · Probabilités conditionnelles : arbres pondérés, tableaux, tirages avec et sans remise.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.probacond";
const m = maker(S);

export const PROBACOND: PartieMath = {
  skill: competence(S, "Probabilités", "Probabilités conditionnelles et arbres", ["probabilite conditionnelle", "sachant", "arbre pondere", "probabilites totales", "tableau a double entree", "tirage sans remise", "tirage avec remise", "bayes", "intersection"]),
  lesson: {
    skillId: S,
    title: "Probabilités conditionnelles, arbres pondérés et tableaux croisés",
    objectives: ["Calculer une probabilité conditionnelle à partir d'un tableau ou d'un arbre", "Appliquer la formule des probabilités totales", "Inverser un conditionnement", "Distinguer tirages avec et sans remise"],
    prerequisites: ["math.proba"],
    regle:
      "Probabilité conditionnelle : la probabilité de B sachant A, notée P_A(B) ou P(B | A), est la probabilité de B quand on sait que A est réalisé. P_A(B) = P(A ∩ B)/P(A). On restreint l'univers aux seuls cas où A est réalisé.\n\nDans un tableau à double entrée (effectifs croisés), P_A(B) se lit directement : effectif de « A et B » divisé par l'effectif total de la ligne ou de la colonne A. La question à se poser : « parmi qui ? ». Le dénominateur est la sous-population connue.\n\nArbre pondéré : sur chaque branche du premier niveau, on écrit P(A) ; sur les branches du second niveau, les probabilités conditionnelles P_A(B). Règles : la somme des branches issues d'un même nœud vaut 1 ; la probabilité d'un chemin est le produit des probabilités le long du chemin, P(A ∩ B) = P(A) × P_A(B).\n\nProbabilités totales : si A et non A forment une partition, P(B) = P(A ∩ B) + P(non A ∩ B). On additionne tous les chemins qui mènent à B.\n\nInverser le conditionnement : l'arbre donne P_A(B), mais on demande souvent P_B(A). On calcule P_B(A) = P(A ∩ B)/P(B), avec P(B) obtenue par les probabilités totales. Les deux sont en général très différentes : la probabilité d'être malade sachant que le test est positif peut être faible même si le test est fiable, quand la maladie est rare.\n\nTirages : avec remise, la composition de l'urne ne change pas et les tirages sont indépendants. Sans remise, le deuxième tirage dépend du premier : on diminue de 1 le nombre de boules de la couleur tirée et le total. Pour « une de chaque couleur », il y a deux ordres possibles, à additionner.",
    formules:
      "P_A(B) = P(A ∩ B)/P(A)\nP(A ∩ B) = P(A) × P_A(B)\nProbabilités totales : P(B) = P(A) × P_A(B) + P(non A) × P_(non A)(B)\nInversion : P_B(A) = P(A) × P_A(B)/P(B)\nSans remise : (a/n) × ((a − 1)/(n − 1)) pour deux boules de la même couleur\nAvec remise : (a/n)²",
    methode:
      "1. Repère la ou les informations « sachant que » : ce sont des probabilités conditionnelles.\n2. Construis l'arbre (premier niveau : la cause ; second : la conséquence) ou le tableau.\n3. Calcule les chemins utiles en multipliant.\n4. Additionne les chemins qui mènent à l'événement cherché.\n5. Pour une question « sachant B », divise le chemin favorable par P(B).",
    exemple:
      "Dans une entreprise, 30 % des salariés sont cadres. 60 % des cadres et 20 % des non-cadres utilisent le train. P(train) = 0,3 × 0,6 + 0,7 × 0,2 = 0,18 + 0,14 = 0,32. Sachant qu'un salarié prend le train, la probabilité qu'il soit cadre vaut 0,18/0,32 = 0,5625, soit environ 56 %.\n\nUrne de 4 blanches et 2 noires, deux tirages sans remise : P(deux blanches) = 4/6 × 3/5 = 12/30 = 2/5. Avec remise : (4/6)² = 4/9.",
    erreur:
      "✗ Confondre P_A(B) et P_B(A) → ✓ identifier la sous-population connue (le « sachant »)\n✗ Confondre P_A(B) et P(A ∩ B) → ✓ P(A ∩ B) = P(A) × P_A(B)\n✗ Garder le même dénominateur au deuxième tirage sans remise → ✓ retirer la boule tirée du total\n✗ N'oublier qu'un ordre pour « une boule de chaque couleur » → ✓ additionner les deux chemins\n✗ Faire la moyenne des taux conditionnels pour P(B) → ✓ pondérer par P(A) et P(non A)",
    approfondir:
      "Raisonner sur une population fictive de 1 000 ou 10 000 personnes rend les probabilités conditionnelles très concrètes : avec une maladie touchant 1 % des gens, sur 10 000 personnes, 100 sont malades ; un test positif à 95 % chez les malades en repère 95, mais ses 5 % de faux positifs chez les 9 900 non-malades en ajoutent 495.\n\nUn tableau à double entrée et un arbre portent la même information : sache passer de l'un à l'autre.\n\nGestion du temps : dessine l'arbre dès la lecture, même au brouillon mental ; la plupart des questions se résolvent avec deux multiplications et une addition.",
    cards: [
      ["P_A(B)", "P(A ∩ B)/P(A)", false],
      ["Probabilité d'un chemin dans un arbre", "Produit des probabilités le long du chemin", false],
      ["Probabilités totales", "Somme des chemins qui mènent à l'événement", false],
      ["Deux rouges sans remise (r rouges sur n)", "(r/n) × ((r − 1)/(n − 1))", false],
      ["P_B(A) à partir d'un arbre", "Chemin A puis B divisé par P(B)", false],
    ],
  },
  questions: [
    m("B-MATH-PCOND-001", "totales", 2, "Une usine fabrique 60 % de ses pièces sur la machine A et 40 % sur la machine B. 2 % des pièces de A et 5 % des pièces de B sont défectueuses. Quelle est la probabilité qu'une pièce prise au hasard soit défectueuse ?", [
      ["0,032", true, "0,6 × 0,02 + 0,4 × 0,05 = 0,012 + 0,02 = 0,032."],
      ["0,035", false, "Moyenne simple des taux de défaut, sans pondérer par la production."],
      ["0,07", false, "Taux de défaut additionnés."],
      ["0,012", false, "Seul le chemin de la machine A a été compté."],
    ], "Probabilités totales : P(D) = P(A) × P_A(D) + P(B) × P_B(D) = 0,6 × 0,02 + 0,4 × 0,05 = 0,012 + 0,02 = 0,032, soit 3,2 %.", "P(D) s'obtient en additionnant les probabilités de tous les chemins qui mènent à D.", [
      "Construis l'arbre : machine, puis défectueuse ou non.",
      "Calcule les deux chemins qui mènent à « défectueuse ».",
      "Additionne 0,6 × 0,02 et 0,4 × 0,05.",
    ], "formules"),
    m("B-MATH-PCOND-002", "bayes", 3, "Un épicier achète 70 % de ses œufs au fournisseur X et 30 % au fournisseur Y. 1 % des œufs de X et 4 % de ceux de Y arrivent cassés. Il trouve un œuf cassé. Quelle est la probabilité, au centième près, qu'il provienne de Y ?", [
      ["0,63", true, "P(Y ∩ C)/P(C) = 0,012/0,019 ≈ 0,63."],
      ["0,04", false, "C'est P_Y(C), la probabilité d'être cassé sachant Y : conditionnement inversé."],
      ["0,3", false, "C'est P(Y), sans tenir compte de l'information « cassé »."],
      ["0,012", false, "C'est P(Y ∩ C), non divisée par P(C)."],
    ], "P(Y ∩ C) = 0,3 × 0,04 = 0,012. P(X ∩ C) = 0,7 × 0,01 = 0,007. P(C) = 0,019. P_C(Y) = 0,012/0,019 ≈ 0,63. Près de deux œufs cassés sur trois viennent de Y, qui ne fournit pourtant que 30 % des œufs.", "P_C(Y) = P(Y ∩ C)/P(C) : on divise le chemin favorable par la probabilité totale de C.", [
      "On sait que l'œuf est cassé : quel est le nouveau dénominateur ?",
      "Calcule P(Y ∩ C), puis P(C) par les probabilités totales.",
      "Divise 0,012 par 0,019.",
    ], "regle"),
    m("B-MATH-PCOND-003", "tableau", 2, "Sur 200 clients d'une boutique, 120 sont des femmes, dont 30 achètent en ligne, et 80 sont des hommes, dont 50 achètent en ligne. On choisit au hasard un client qui achète en ligne. Quelle est la probabilité que ce soit une femme ?", [
      ["0,375", true, "30 femmes parmi les 80 acheteurs en ligne : 30/80."],
      ["0,25", false, "C'est la proportion d'acheteurs en ligne parmi les femmes (30/120) : conditionnement inversé."],
      ["0,15", false, "C'est la probabilité « femme et en ligne » sur tous les clients (30/200)."],
      ["0,6", false, "C'est la proportion de femmes parmi tous les clients (120/200)."],
    ], "La population de référence est celle des acheteurs en ligne : 30 + 50 = 80. Parmi eux, 30 femmes. P = 30/80 = 0,375.", "Dans un tableau croisé, P_A(B) = effectif de A et B / effectif de A.", [
      "« On choisit un client qui achète en ligne » : quelle est la population de référence ?",
      "Combien de clients achètent en ligne au total ?",
      "Divise le nombre de femmes acheteuses en ligne par 80.",
    ], "regle"),
    m("B-MATH-PCOND-004", "tirages", 2, "Une urne contient 5 boules rouges et 3 boules noires. On tire successivement deux boules sans remise. Quelle est la probabilité d'obtenir deux boules rouges ?", [
      ["5/14", true, "5/8 × 4/7 = 20/56 = 5/14."],
      ["25/64", false, "Calcul avec remise : 5/8 × 5/8."],
      ["5/16", false, "Le total n'a pas été diminué au second tirage : 5/8 × 4/8."],
      ["5/8", false, "Un seul tirage a été pris en compte."],
    ], "Premier tirage : 5 rouges sur 8. Sans remise, il reste 4 rouges sur 7. P = 5/8 × 4/7 = 20/56 = 5/14 ≈ 0,357.", "Sans remise, on retire la boule tirée : le numérateur et le dénominateur diminuent de 1.", [
      "Quelle est la probabilité d'une rouge au premier tirage ?",
      "Après ce tirage, combien reste-t-il de rouges et de boules ?",
      "Multiplie 5/8 par 4/7.",
    ], "exemple", true),
    m("B-MATH-PCOND-005", "arbre", 2, "Il pleut un jour sur trois. Quand il pleut, Léo prend le bus avec une probabilité de 0,8 ; sinon, avec une probabilité de 0,3. Quelle est la probabilité qu'un jour donné, il pleuve et que Léo prenne le bus ?", [
      ["4/15", true, "1/3 × 0,8 = 0,8/3 = 4/15."],
      ["0,8", false, "C'est la probabilité de prendre le bus sachant qu'il pleut, pas celle de « pluie et bus »."],
      ["7/15", false, "C'est la probabilité totale de prendre le bus (4/15 + 2/3 × 0,3)."],
      ["1/3", false, "C'est la probabilité qu'il pleuve, sans tenir compte du bus."],
    ], "P(pluie ∩ bus) = P(pluie) × P_pluie(bus) = 1/3 × 0,8 = 4/15 ≈ 0,27.", "P(A ∩ B) = P(A) × P_A(B) : on multiplie le long d'un chemin de l'arbre.", [
      "Dessine l'arbre : pluie ou non, puis bus ou non.",
      "Le chemin « pluie puis bus » est un produit.",
      "Calcule 1/3 × 0,8.",
    ], "formules"),
    m("B-MATH-PCOND-006", "formule", 2, "On sait que P(A) = 0,5, P(B) = 0,3 et P(A ∩ B) = 0,1. Que vaut la probabilité de A sachant B ?", [
      ["1/3", true, "P_B(A) = P(A ∩ B)/P(B) = 0,1/0,3 = 1/3."],
      ["0,2", false, "Division par P(A) : c'est P_A(B), le conditionnement inverse."],
      ["0,15", false, "Produit P(A) × P(B), valable seulement si A et B étaient indépendants."],
      ["0,1", false, "C'est P(A ∩ B), non divisée par P(B)."],
    ], "P_B(A) = P(A ∩ B)/P(B) = 0,1/0,3 = 1/3 ≈ 0,33. On divise par la probabilité de l'événement qui suit « sachant ».", "P_B(A) = P(A ∩ B)/P(B) : on divise par la probabilité de la condition.", [
      "Quelle formule définit P_B(A) ?",
      "Le dénominateur est la probabilité de B.",
      "Calcule 0,1/0,3.",
    ], "formules"),
    m("B-MATH-PCOND-007", "bayes", 3, "Une maladie touche 1 % d'une population. Un test est positif chez 95 % des malades et chez 5 % des personnes non malades. Une personne a un test positif. Quelle est, environ, la probabilité qu'elle soit malade ?", [
      ["16 %", true, "0,0095/(0,0095 + 0,0495) ≈ 0,161."],
      ["95 %", false, "C'est la probabilité d'un test positif sachant malade : conditionnement inversé."],
      ["5,9 %", false, "C'est la probabilité qu'un test soit positif, P(T)."],
      ["0,95 %", false, "C'est la probabilité « malade et positif », non divisée par P(T)."],
    ], "Sur 10 000 personnes : 100 malades, dont 95 testés positifs ; 9 900 non malades, dont 495 positifs. Parmi les 590 positifs, 95 sont malades : 95/590 ≈ 0,161, soit environ 16 %. Par les formules : P(M ∩ T) = 0,01 × 0,95 = 0,0095 ; P(T) = 0,0095 + 0,99 × 0,05 = 0,059.", "P_T(M) = P(M ∩ T)/P(T) ; quand la maladie est rare, les faux positifs pèsent lourd.", [
      "Raisonne sur 10 000 personnes.",
      "Compte les positifs malades et les positifs non malades.",
      "Divise 95 par le nombre total de positifs.",
    ], "approfondir", true),
    m("B-MATH-PCOND-008", "tirages", 2, "Une urne contient 3 boules blanches et 2 boules noires. On tire successivement deux boules avec remise. Quelle est la probabilité d'obtenir une boule de chaque couleur ?", [
      ["0,48", true, "2 × 3/5 × 2/5 = 12/25 = 0,48."],
      ["0,24", false, "Un seul ordre (blanche puis noire) a été compté."],
      ["0,6", false, "Calcul sans remise : 2 × 3/5 × 2/4."],
      ["0,3", false, "Calcul sans remise et un seul ordre : 3/5 × 2/4."],
    ], "Deux chemins : blanche puis noire (3/5 × 2/5 = 0,24) et noire puis blanche (2/5 × 3/5 = 0,24). Total : 0,48.", "« Une de chaque » : on additionne les deux ordres possibles.", [
      "Combien d'ordres possibles pour obtenir une blanche et une noire ?",
      "Avec remise, la composition de l'urne ne change pas.",
      "Additionne 3/5 × 2/5 et 2/5 × 3/5.",
    ], "erreur"),
    m("B-MATH-PCOND-009", "tableau", 1, "Une entreprise de 300 salariés compte 60 cadres, dont 40 en télétravail, et 240 non-cadres, dont 60 en télétravail. On choisit un salarié au hasard. Quelle est la probabilité qu'il soit en télétravail ?", [
      ["1/3", true, "(40 + 60)/300 = 100/300 = 1/3."],
      ["2/3", false, "C'est la proportion de télétravailleurs parmi les cadres (40/60)."],
      ["1/4", false, "C'est la proportion de télétravailleurs parmi les non-cadres (60/240)."],
      ["2/15", false, "Seuls les cadres en télétravail ont été comptés (40/300)."],
    ], "Télétravailleurs : 40 + 60 = 100 sur 300 salariés. P = 100/300 = 1/3.", "Une probabilité non conditionnelle se calcule sur l'effectif total.", [
      "Aucune condition : la population de référence est l'ensemble des salariés.",
      "Additionne les télétravailleurs des deux catégories.",
      "Divise 100 par 300.",
    ]),
    m("B-MATH-PCOND-010", "formule", 1, "On sait que P(A) = 0,6 et que la probabilité de B sachant A vaut 0,25. Que vaut P(A ∩ B) ?", [
      ["0,15", true, "P(A ∩ B) = P(A) × P_A(B) = 0,6 × 0,25 = 0,15."],
      ["0,85", false, "Probabilités additionnées."],
      ["0,42", false, "Division 0,25/0,6 au lieu d'une multiplication."],
      ["0,35", false, "Soustraction 0,6 − 0,25."],
    ], "P(A ∩ B) = P(A) × P_A(B) = 0,6 × 0,25 = 0,15.", "P(A ∩ B) = P(A) × P_A(B).", [
      "Pense au chemin A puis B dans un arbre.",
      "On multiplie le long du chemin.",
      "Calcule 0,6 × 0,25.",
    ], "formules"),
  ],
};
