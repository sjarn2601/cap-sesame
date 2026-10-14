// MATH · Dénombrement : principe multiplicatif, permutations, arrangements, combinaisons.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.denombrement";
const m = maker(S);

export const DENOMBREMENT: PartieMath = {
  skill: competence(S, "Probabilités", "Dénombrement", ["denombrement", "principe multiplicatif", "factorielle", "permutation", "arrangement", "combinaison", "coefficient binomial", "anagramme", "code"]),
  lesson: {
    skillId: S,
    title: "Dénombrement : principe multiplicatif, arrangements et combinaisons",
    objectives: ["Appliquer le principe multiplicatif", "Distinguer listes avec ou sans répétition, ordonnées ou non", "Calculer factorielles, arrangements et combinaisons simples"],
    prerequisites: ["math.calc"],
    regle:
      "Principe multiplicatif : si un choix se fait en plusieurs étapes indépendantes, avec n₁ possibilités pour la première, n₂ pour la deuxième, etc., le nombre total de possibilités est n₁ × n₂ × … On additionne seulement quand on choisit entre des cas qui s'excluent (« soit… soit… »).\n\nListes avec répétition (p-uplets) : choisir p éléments dans un ensemble de n, dans l'ordre, avec répétition possible, donne nᵖ possibilités. Exemple : un code de 4 chiffres, 10⁴ = 10 000 codes.\n\nPermutations : ranger n objets distincts dans un ordre donne n! = n × (n − 1) × … × 2 × 1 possibilités. 3! = 6, 4! = 24, 5! = 120, 6! = 720. Si certains objets sont identiques (lettres répétées d'un mot), on divise par la factorielle du nombre de répétitions de chacun.\n\nArrangements : choisir p éléments distincts parmi n, dans l'ordre (un podium, un bureau avec président et trésorier), donne n × (n − 1) × … × (n − p + 1) possibilités : on multiplie p facteurs décroissants à partir de n.\n\nCombinaisons : choisir p éléments distincts parmi n, sans ordre (une équipe, une main de cartes, une délégation sans rôle), donne C(n, p) = arrangements / p! possibilités. C(n, 2) = n(n − 1)/2 ; C(n, p) = C(n, n − p).\n\nLa question décisive : l'ordre compte-t-il ? Si échanger deux éléments donne un résultat différent (premier et deuxième d'une course), c'est un arrangement ; sinon (deux délégués de même rôle), une combinaison. Et la répétition est-elle possible ? Un même chiffre peut se répéter dans un code, mais une même personne ne peut pas occuper deux places.\n\nQuand le choix se fait en deux groupes (2 femmes parmi 6 et 2 hommes parmi 5), on multiplie les nombres de choix de chaque groupe.",
    formules:
      "Principe multiplicatif : n₁ × n₂ × …\nListes avec répétition : nᵖ\nPermutations : n!\nArrangements : n × (n − 1) × … × (n − p + 1)\nCombinaisons : C(n, p) = arrangements / p!\nC(n, 2) = n(n − 1)/2\nAnagrammes avec répétitions : n!/(k₁! × k₂! × …)",
    methode:
      "1. Décompose le choix en étapes successives.\n2. Pour chaque étape, compte les possibilités en tenant compte des choix déjà faits.\n3. Demande-toi si l'ordre compte : si non, divise par p!.\n4. Demande-toi si la répétition est autorisée.\n5. Contrôle sur un petit cas que tu peux énumérer à la main.",
    exemple:
      "Un bureau de 3 personnes (président, secrétaire, trésorier) parmi 8 adhérents : l'ordre compte (les rôles diffèrent), 8 × 7 × 6 = 336 bureaux. Une délégation de 3 personnes sans rôle parmi les 8 : 336/3! = 336/6 = 56 délégations.\n\nAnagrammes de RADAR : 5 lettres dont deux R et deux A : 5!/(2! × 2!) = 120/4 = 30.",
    erreur:
      "✗ Additionner les possibilités de chaque étape → ✓ multiplier (principe multiplicatif)\n✗ Utiliser un arrangement quand l'ordre ne compte pas → ✓ diviser par p!\n✗ Compter chaque poignée de main deux fois → ✓ C(n, 2) = n(n − 1)/2\n✗ Oublier les lettres répétées dans les anagrammes → ✓ diviser par les factorielles des répétitions\n✗ Interdire la répétition dans un code ou une plaque → ✓ relire l'énoncé : chiffres et lettres peuvent se répéter",
    approfondir:
      "Contraintes : traite d'abord la position la plus contrainte. Pour un code de 4 chiffres qui ne commence pas par 0, on a 9 choix pour le premier chiffre puis 10 pour chacun des autres : 9 × 10³ = 9 000.\n\nDénombrement et probabilités : en situation d'équiprobabilité, une probabilité est un quotient de deux dénombrements faits avec le même modèle (ordonné ou non).\n\nGestion du temps : les nombres grossissent vite. Ne calcule une factorielle complète que si nécessaire ; simplifie d'abord les quotients, par exemple 10!/7! = 10 × 9 × 8.",
    cards: [
      ["5!", "120", true],
      ["Ordre important, sans répétition", "Arrangement : n × (n − 1) × … (p facteurs)", false],
      ["Ordre sans importance", "Combinaison : arrangement divisé par p!", false],
      ["C(n, 2)", "n(n − 1)/2", false],
      ["Code de p symboles parmi n, répétitions permises", "nᵖ", false],
    ],
  },
  questions: [
    m("B-MATH-DENOM-001", "multiplicatif", 1, "Un restaurant propose 3 entrées, 4 plats et 2 desserts. Combien de menus différents « entrée + plat + dessert » peut-on composer ?", [
      ["24", true, "3 × 4 × 2 = 24."],
      ["9", false, "Nombres de choix additionnés au lieu d'être multipliés."],
      ["12", false, "Le choix du dessert a été oublié : 3 × 4."],
      ["14", false, "Mélange de produit et de somme : 3 × 4 + 2."],
    ], "Pour chacune des 3 entrées, 4 plats possibles, et pour chaque couple, 2 desserts : 3 × 4 × 2 = 24 menus.", "Principe multiplicatif : on multiplie les nombres de choix de chaque étape.", [
      "Le menu se compose en trois étapes indépendantes.",
      "Pour chaque entrée, combien de plats ?",
      "Multiplie les trois nombres de choix.",
    ]),
    m("B-MATH-DENOM-002", "liste", 2, "Un identifiant est formé de 2 lettres (parmi 26) suivies de 3 chiffres (parmi 10), les répétitions étant autorisées. Combien d'identifiants différents peut-on former ?", [
      ["676 000", true, "26 × 26 × 10 × 10 × 10 = 676 000."],
      ["650 000", false, "Les deux lettres ont été supposées distinctes : 26 × 25 × 1 000."],
      ["82", false, "Nombres de choix additionnés : 26 + 26 + 10 + 10 + 10."],
      ["468 000", false, "Aucune répétition permise : 26 × 25 × 10 × 9 × 8."],
    ], "Chaque position est choisie indépendamment : 26² × 10³ = 676 × 1 000 = 676 000.", "Liste avec répétition : on multiplie le nombre de choix de chaque position.", [
      "Les répétitions sont autorisées : chaque position a le même nombre de choix.",
      "26 choix pour chaque lettre, 10 pour chaque chiffre.",
      "Calcule 26² × 10³.",
    ], "erreur"),
    m("B-MATH-DENOM-003", "arrangement", 2, "Dix chevaux prennent le départ d'une course. Combien y a-t-il d'arrivées possibles pour les trois premières places, dans l'ordre ?", [
      ["720", true, "10 × 9 × 8 = 720."],
      ["120", false, "Combinaisons C(10, 3) : l'ordre des trois premiers compte ici."],
      ["1 000", false, "10³ : un même cheval ne peut pas occuper deux places."],
      ["30", false, "10 × 3 : ce n'est pas un dénombrement de listes."],
    ], "10 choix pour le premier, 9 pour le deuxième, 8 pour le troisième : 10 × 9 × 8 = 720 arrivées ordonnées.", "Choix ordonné sans répétition : arrangement, n × (n − 1) × … sur p facteurs.", [
      "L'ordre des trois premiers compte-t-il ?",
      "Un cheval peut-il occuper deux places ?",
      "Calcule 10 × 9 × 8.",
    ], "formules"),
    m("B-MATH-DENOM-004", "combinaison", 2, "Une classe de 12 élèves doit désigner 3 délégués qui ont tous le même rôle. Combien de groupes de délégués sont possibles ?", [
      ["220", true, "C(12, 3) = 12 × 11 × 10 / 6 = 220."],
      ["1 320", false, "Arrangement 12 × 11 × 10 : l'ordre ne compte pas ici, il faut diviser par 3!."],
      ["36", false, "12 × 3 : ce n'est pas un dénombrement de groupes."],
      ["1 728", false, "12³ : avec répétition et ordre, deux erreurs."],
    ], "Choix sans ordre : 12 × 11 × 10 = 1 320 listes ordonnées, chaque groupe étant compté 3! = 6 fois. Nombre de groupes : 1 320/6 = 220.", "Quand l'ordre ne compte pas, C(n, p) = arrangements / p!.", [
      "Les trois délégués ont le même rôle : l'ordre compte-t-il ?",
      "Compte d'abord les listes ordonnées, 12 × 11 × 10.",
      "Divise par 3! = 6.",
    ], "regle"),
    m("B-MATH-DENOM-005", "combinaison", 2, "Lors d'une réunion, 20 personnes se serrent la main, chacune une seule fois avec chacune des autres. Combien de poignées de main sont échangées ?", [
      ["190", true, "C(20, 2) = 20 × 19/2 = 190."],
      ["380", false, "Chaque poignée de main comptée deux fois : 20 × 19."],
      ["400", false, "20² : chaque personne serrerait sa propre main, et les doublons sont comptés."],
      ["19", false, "C'est le nombre de poignées de main d'une seule personne."],
    ], "Chacun serre 19 mains : 20 × 19 = 380, mais chaque poignée concerne deux personnes et a été comptée deux fois. Total : 380/2 = 190.", "Le nombre de paires dans un groupe de n vaut n(n − 1)/2.", [
      "Combien de mains chaque personne serre-t-elle ?",
      "20 × 19 compte chaque poignée deux fois.",
      "Divise par 2.",
    ], "erreur", true),
    m("B-MATH-DENOM-006", "permutation", 3, "Combien de mots (ayant un sens ou non) peut-on former en utilisant une fois chacune des lettres du mot BALLE ?", [
      ["60", true, "5!/2! = 120/2 = 60, les deux L étant identiques."],
      ["120", false, "5! : les deux L ont été traités comme des lettres distinctes."],
      ["24", false, "4! : la lettre répétée a été supprimée au lieu d'être prise en compte."],
      ["30", false, "Division par 2! × 2! : une seule lettre est répétée."],
    ], "Avec 5 lettres distinctes, on aurait 5! = 120 mots. Échanger les deux L ne change pas le mot : chaque mot est compté 2! = 2 fois. Total : 60.", "Anagrammes : n! divisé par la factorielle du nombre de répétitions de chaque lettre.", [
      "Combien de lettres, et lesquelles sont répétées ?",
      "Sans répétition, on aurait 5! mots.",
      "Divise par 2! pour les deux L.",
    ], "exemple"),
    m("B-MATH-DENOM-007", "contrainte", 2, "Combien existe-t-il de codes de 4 chiffres (de 0 à 9, répétitions autorisées) qui ne commencent pas par 0 ?", [
      ["9 000", true, "9 × 10 × 10 × 10 = 9 000."],
      ["10 000", false, "La contrainte sur le premier chiffre a été oubliée."],
      ["6 561", false, "Le 0 a été interdit partout : 9⁴."],
      ["4 536", false, "Répétitions interdites à tort : 9 × 9 × 8 × 7."],
    ], "Premier chiffre : 9 choix (1 à 9). Chacun des trois autres : 10 choix. Total : 9 × 10³ = 9 000. Contrôle : 10 000 codes moins les 1 000 qui commencent par 0.", "On traite d'abord la position soumise à une contrainte, puis on multiplie.", [
      "Quelle position est soumise à une contrainte ?",
      "Combien de choix pour le premier chiffre, puis pour les autres ?",
      "Ou retire de 10 000 les codes commençant par 0.",
    ], "approfondir"),
    m("B-MATH-DENOM-008", "combinaison", 3, "On forme un comité de 4 personnes comprenant exactement 2 femmes choisies parmi 6 et 2 hommes choisis parmi 5. Combien de comités différents sont possibles ?", [
      ["150", true, "C(6, 2) × C(5, 2) = 15 × 10 = 150."],
      ["25", false, "Les nombres de choix des deux groupes ont été additionnés (15 + 10)."],
      ["330", false, "C(11, 4) : la contrainte « 2 femmes et 2 hommes » a été ignorée."],
      ["600", false, "Arrangements 6 × 5 et 5 × 4 : l'ordre ne compte pas dans un comité."],
    ], "Choix des femmes : C(6, 2) = 15. Choix des hommes : C(5, 2) = 10. Chaque choix de femmes se combine avec chaque choix d'hommes : 15 × 10 = 150 comités.", "Quand un choix se fait dans deux groupes, on multiplie les nombres de choix de chaque groupe.", [
      "Sépare le choix des femmes et celui des hommes.",
      "Calcule C(6, 2) et C(5, 2).",
      "Multiplie les deux résultats.",
    ], "methode", true),
    m("B-MATH-DENOM-009", "liste", 1, "Un mot de passe est formé de 3 lettres minuscules (parmi 26), répétitions autorisées. Combien de mots de passe différents existe-t-il ?", [
      ["17 576", true, "26³ = 17 576."],
      ["78", false, "26 × 3 : le principe multiplicatif n'a pas été appliqué."],
      ["15 600", false, "Répétitions interdites à tort : 26 × 25 × 24."],
      ["2 600", false, "C(26, 3) : l'ordre compte dans un mot de passe et les répétitions sont permises."],
    ], "Chaque position a 26 choix, indépendamment des autres : 26 × 26 × 26 = 17 576.", "Liste de p éléments parmi n avec répétition : nᵖ.", [
      "Les lettres peuvent-elles se répéter ?",
      "Combien de choix pour chaque position ?",
      "Calcule 26³.",
    ], "formules"),
    m("B-MATH-DENOM-010", "permutation", 1, "Cinq amis se placent côte à côte sur une photo. Combien d'ordres différents sont possibles ?", [
      ["120", true, "5! = 5 × 4 × 3 × 2 × 1 = 120."],
      ["25", false, "5 × 5 : chaque ami ne peut occuper qu'une place."],
      ["15", false, "Somme 5 + 4 + 3 + 2 + 1 au lieu du produit."],
      ["3 125", false, "5⁵ : répétitions comptées, comme si un ami pouvait figurer plusieurs fois."],
    ], "5 choix pour la première place, 4 pour la deuxième, 3, 2 puis 1 : 5! = 120 ordres.", "Ranger n objets distincts : n! possibilités.", [
      "Combien de choix pour la première place, puis pour la deuxième ?",
      "Le nombre de choix diminue de 1 à chaque place.",
      "Calcule 5!.",
    ]),
  ],
};
