// MATH · Probabilités élémentaires : équiprobabilité, contraire, union, indépendance, gain moyen.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.proba";
const m = maker(S);

export const PROBA: PartieMath = {
  skill: competence(S, "Probabilités", "Probabilités élémentaires", ["probabilite", "hasard", "de", "urne", "evenement contraire", "equiprobabilite", "independance", "au moins un", "esperance", "gain moyen"]),
  lesson: {
    skillId: S,
    title: "Probabilités : équiprobabilité, contraire, union et indépendance",
    objectives: ["Calculer une probabilité en situation d'équiprobabilité", "Utiliser l'événement contraire, notamment pour « au moins un »", "Calculer la probabilité d'une union", "Combiner des épreuves indépendantes et calculer un gain moyen"],
    prerequisites: ["math.calc"],
    regle:
      "Équiprobabilité : quand toutes les issues ont la même chance, P(A) = nombre d'issues favorables / nombre d'issues possibles. Une probabilité est toujours comprise entre 0 et 1 : un résultat supérieur à 1 signale une erreur.\n\nAttention aux issues qui ne sont pas équiprobables : avec deux dés, les sommes de 2 à 12 n'ont pas la même probabilité. Il faut raisonner sur les 36 couples (dé 1 ; dé 2), qui eux sont équiprobables. La somme 7 est obtenue par 6 couples, la somme 2 par un seul.\n\nÉvénement contraire : P(non A) = 1 − P(A). « Au moins un » se calcule presque toujours par le contraire « aucun » : P(au moins un succès) = 1 − P(aucun succès).\n\nUnion : P(A ou B) = P(A) + P(B) − P(A et B). On retire l'intersection parce qu'elle a été comptée deux fois. Si A et B sont incompatibles (ils ne peuvent pas se produire ensemble), P(A et B) = 0 et les probabilités s'additionnent.\n\nIndépendance : deux événements sont indépendants quand la réalisation de l'un ne change pas la probabilité de l'autre (deux lancers de dé, deux tirages avec remise). Alors P(A et B) = P(A) × P(B). Ne confonds pas indépendants et incompatibles : deux événements incompatibles de probabilités non nulles ne sont jamais indépendants.\n\nRépétition d'épreuves indépendantes : si chaque épreuve réussit avec la probabilité p, la probabilité de n échecs consécutifs vaut (1 − p)ⁿ, donc celle d'au moins un succès vaut 1 − (1 − p)ⁿ.\n\nGain moyen (espérance) : on multiplie chaque gain possible par sa probabilité, on additionne, et on retire la mise si elle est payée dans tous les cas. Un jeu est défavorable au joueur quand son gain moyen est négatif.",
    formules:
      "P(A) = cas favorables / cas possibles (équiprobabilité)\n0 ≤ P(A) ≤ 1\nP(non A) = 1 − P(A)\nP(A ∪ B) = P(A) + P(B) − P(A ∩ B)\nIndépendance : P(A ∩ B) = P(A) × P(B)\nP(au moins un succès en n essais) = 1 − (1 − p)ⁿ\nGain moyen = Σ gain × probabilité",
    methode:
      "1. Décris l'expérience et l'ensemble des issues équiprobables (couples, cartes, boules).\n2. Traduis l'événement en mots simples : « et », « ou », « au moins un », « aucun ».\n3. « Au moins un » : passe par le contraire.\n4. « Et » avec indépendance : multiplie ; « ou » : additionne puis retire l'intersection.\n5. Vérifie que le résultat est entre 0 et 1.",
    exemple:
      "Dans un jeu de 52 cartes, P(as ou pique) = 4/52 + 13/52 − 1/52 = 16/52 = 4/13, car l'as de pique est compté deux fois.\n\nUne alarme se déclenche à tort avec la probabilité 0,2 chaque nuit, indépendamment. Probabilité d'au moins une fausse alerte en 3 nuits : 1 − 0,8³ = 1 − 0,512 = 0,488.",
    erreur:
      "✗ Additionner les probabilités pour « au moins un » (0,3 + 0,3 + 0,3) → ✓ 1 − 0,7³\n✗ Oublier de retirer l'intersection dans « A ou B » → ✓ P(A) + P(B) − P(A ∩ B)\n✗ Considérer les sommes de deux dés comme équiprobables → ✓ raisonner sur les 36 couples\n✗ Confondre indépendants et incompatibles → ✓ indépendants : produit ; incompatibles : intersection vide\n✗ Oublier la mise dans un gain moyen → ✓ retirer la mise payée à chaque partie",
    approfondir:
      "Un arbre ou un tableau à double entrée rend visibles toutes les issues : avec deux dés, le tableau 6 × 6 règle toutes les questions de somme ou de produit.\n\nRéflexe d'ordre de grandeur : la probabilité d'au moins un succès augmente avec le nombre d'essais mais ne dépasse jamais 1. Un résultat comme 1,2 trahit une addition abusive.\n\nGestion du temps : la plupart de ces questions demandent moins d'une minute si l'on écrit d'abord la formule utile en une ligne.",
    cards: [
      ["P(non A)", "1 − P(A)", false],
      ["P(A ∪ B)", "P(A) + P(B) − P(A ∩ B)", false],
      ["A et B indépendants", "P(A ∩ B) = P(A) × P(B)", false],
      ["P(somme 7 avec deux dés)", "6/36 = 1/6", true],
      ["Au moins un succès en n essais", "1 − (1 − p)ⁿ", false],
    ],
  },
  questions: [
    m("B-MATH-PROBA-001", "union", 2, "On tire une carte au hasard dans un jeu de 32 cartes (4 couleurs de 8 cartes, dont un roi par couleur). Quelle est la probabilité d'obtenir un roi ou un cœur ?", [
      ["11/32", true, "4 rois + 8 cœurs − 1 roi de cœur compté deux fois = 11 cartes."],
      ["3/8", false, "12/32 : le roi de cœur a été compté deux fois."],
      ["1/32", false, "C'est la probabilité d'obtenir le roi de cœur (roi et cœur)."],
      ["1/8", false, "C'est la probabilité d'obtenir un roi seulement (4/32)."],
    ], "P(roi ou cœur) = P(roi) + P(cœur) − P(roi de cœur) = 4/32 + 8/32 − 1/32 = 11/32.", "P(A ou B) = P(A) + P(B) − P(A et B).", [
      "Combien de rois et combien de cœurs dans le jeu ?",
      "Une carte est à la fois roi et cœur.",
      "Calcule 4 + 8 − 1 cartes favorables sur 32.",
    ], "formules"),
    m("B-MATH-PROBA-002", "contraire", 2, "Un basketteur réussit chaque lancer franc avec une probabilité de 0,7, indépendamment des autres. Il tente deux lancers. Quelle est la probabilité qu'il en réussisse au moins un ?", [
      ["0,91", true, "1 − 0,3 × 0,3 = 1 − 0,09 = 0,91."],
      ["0,49", false, "C'est la probabilité de réussir les deux lancers (0,7 × 0,7)."],
      ["0,42", false, "C'est la probabilité d'en réussir exactement un (2 × 0,7 × 0,3)."],
      ["0,3", false, "C'est la probabilité de manquer un lancer donné."],
    ], "Contraire de « au moins un réussi » : « les deux manqués », de probabilité 0,3 × 0,3 = 0,09. Donc P = 1 − 0,09 = 0,91. Contrôle : 0,49 + 0,42 = 0,91.", "« Au moins un » se calcule par 1 − P(aucun).", [
      "Quel est le contraire de « au moins un réussi » ?",
      "La probabilité de manquer un lancer est 0,3.",
      "Calcule 1 − 0,3².",
    ], "regle"),
    m("B-MATH-PROBA-003", "equiprob", 2, "On lance deux dés équilibrés à six faces. Quelle est la probabilité que la somme des deux faces soit égale à 7 ?", [
      ["1/6", true, "6 couples sur 36 : (1;6), (2;5), (3;4), (4;3), (5;2), (6;1)."],
      ["1/11", false, "Les 11 sommes possibles (2 à 12) ont été supposées équiprobables."],
      ["1/12", false, "Seules les paires non ordonnées ont été comptées : 3 sur 36."],
      ["7/36", false, "La somme visée a été prise pour le nombre de cas favorables."],
    ], "Les 36 couples (dé 1 ; dé 2) sont équiprobables. La somme 7 est obtenue par 6 couples. P = 6/36 = 1/6.", "Avec deux dés, on raisonne sur les 36 couples ordonnés, qui sont équiprobables.", [
      "Les sommes ne sont pas équiprobables : raisonne sur les couples.",
      "Combien de couples (a ; b) vérifient a + b = 7 ?",
      "Divise ce nombre par 36.",
    ], "exemple"),
    m("B-MATH-PROBA-004", "equiprob", 1, "Une urne contient 4 boules rouges, 6 boules vertes et 5 boules jaunes. On tire une boule au hasard. Quelle est la probabilité qu'elle ne soit pas verte ?", [
      ["3/5", true, "9 boules non vertes sur 15 : 9/15 = 3/5."],
      ["2/5", false, "C'est la probabilité d'obtenir une verte (6/15)."],
      ["2/3", false, "Deux couleurs sur trois : les couleurs ne sont pas équiprobables, les boules si."],
      ["4/15", false, "Seules les boules rouges ont été comptées."],
    ], "Il y a 15 boules, dont 6 vertes. P(verte) = 6/15 = 2/5, donc P(non verte) = 1 − 2/5 = 3/5. Ou directement : 4 + 5 = 9 boules non vertes, 9/15 = 3/5.", "P(non A) = 1 − P(A) ; on compte les boules, pas les couleurs.", [
      "Combien de boules au total ?",
      "Compte les boules qui ne sont pas vertes.",
      "Ou calcule 1 − P(verte).",
    ]),
    m("B-MATH-PROBA-005", "indep", 1, "On lance un dé équilibré à six faces et une pièce équilibrée. Quelle est la probabilité d'obtenir 6 et pile ?", [
      ["1/12", true, "Épreuves indépendantes : 1/6 × 1/2 = 1/12."],
      ["2/3", false, "Probabilités additionnées (1/6 + 1/2) au lieu d'être multipliées."],
      ["1/8", false, "Une issue sur 6 + 2 = 8 : les issues de l'expérience sont 12 couples."],
      ["1/6", false, "La pièce a été ignorée."],
    ], "Le dé et la pièce sont indépendants : P(6 et pile) = P(6) × P(pile) = 1/6 × 1/2 = 1/12. Il y a bien 12 couples équiprobables (face ; côté), dont un seul favorable.", "Pour deux épreuves indépendantes, P(A et B) = P(A) × P(B).", [
      "Les deux épreuves s'influencent-elles ?",
      "Multiplie les probabilités de chaque événement.",
      "Contrôle : combien de couples (dé ; pièce) possibles ?",
    ]),
    m("B-MATH-PROBA-006", "contraire", 2, "Chaque ampoule d'un lustre a une probabilité de 0,15 de tomber en panne dans l'année, indépendamment des autres. Le lustre compte 4 ampoules. Quelle est la probabilité qu'au moins une ampoule tombe en panne dans l'année, au millième près ?", [
      ["0,478", true, "1 − 0,85⁴ ≈ 1 − 0,522 = 0,478."],
      ["0,6", false, "Probabilités additionnées (4 × 0,15) : on compte plusieurs fois les cas de pannes multiples."],
      ["0,0005", false, "C'est environ la probabilité que les quatre tombent en panne (0,15⁴)."],
      ["0,368", false, "C'est la probabilité qu'exactement une ampoule tombe en panne (4 × 0,15 × 0,85³)."],
    ], "Contraire : « aucune panne », de probabilité 0,85⁴ ≈ 0,522. P(au moins une panne) = 1 − 0,522 ≈ 0,478.", "P(au moins un succès en n essais indépendants) = 1 − (1 − p)ⁿ.", [
      "Passe par l'événement contraire.",
      "Probabilité qu'une ampoule fonctionne toute l'année : 0,85.",
      "Calcule 1 − 0,85⁴.",
    ], "formules"),
    m("B-MATH-PROBA-007", "esperance", 2, "Un jeu coûte 2 € par partie. On lance un dé équilibré : si l'on obtient 6, on reçoit 10 € ; sinon, on ne reçoit rien. Quel est le gain moyen du joueur par partie ?", [
      ["−0,33 €", true, "10 × 1/6 − 2 ≈ 1,67 − 2 = −0,33 €."],
      ["1,67 €", false, "La mise de 2 € n'a pas été retirée."],
      ["1,33 €", false, "La mise n'a été retirée qu'en cas de victoire : (10 − 2)/6."],
      ["8 €", false, "Gain net d'une partie gagnée, sans tenir compte de la probabilité de gagner."],
    ], "En moyenne, le joueur reçoit 10 × 1/6 ≈ 1,67 € par partie, mais il paie toujours 2 €. Gain moyen : 1,67 − 2 ≈ −0,33 €. Le jeu est défavorable au joueur.", "Gain moyen = somme des gains pondérés par leurs probabilités, moins la mise payée à chaque partie.", [
      "Combien le joueur reçoit-il en moyenne par partie ?",
      "10 € avec probabilité 1/6.",
      "N'oublie pas la mise de 2 €, payée à chaque partie.",
    ], "regle"),
    m("B-MATH-PROBA-008", "equiprob", 3, "On compose au hasard un code de 4 chiffres, chaque chiffre étant choisi entre 0 et 9 (répétitions possibles). Quelle est la probabilité que les 4 chiffres soient tous différents ?", [
      ["0,504", true, "10 × 9 × 8 × 7 / 10⁴ = 5 040/10 000."],
      ["0,021", false, "Combinaisons C(10, 4) = 210 au lieu des arrangements : l'ordre compte dans un code."],
      ["0,6561", false, "0,9⁴ : la probabilité 0,9 a été appliquée à chacun des 4 chiffres au lieu de 10/10 × 9/10 × 8/10 × 7/10."],
      ["0,496", false, "C'est la probabilité qu'au moins deux chiffres soient égaux (événement contraire)."],
    ], "Nombre de codes : 10⁴ = 10 000. Codes à chiffres distincts : 10 × 9 × 8 × 7 = 5 040. P = 5 040/10 000 = 0,504.", "Cas favorables et cas possibles se dénombrent avec le même modèle (ici, des suites ordonnées).", [
      "Combien de codes possibles au total ?",
      "Pour des chiffres distincts : 10 choix, puis 9, puis 8, puis 7.",
      "Divise 5 040 par 10 000.",
    ], "approfondir", true),
    m("B-MATH-PROBA-009", "equiprob", 1, "Dans un lycée de 800 élèves, 240 pratiquent un sport collectif. On interroge un élève au hasard. Quelle est la probabilité qu'il ne pratique pas de sport collectif ?", [
      ["0,7", true, "560/800 = 0,7."],
      ["0,3", false, "C'est la probabilité qu'il pratique un sport collectif (240/800)."],
      ["0,24", false, "240 rapporté à 1 000 au lieu de 800."],
      ["0,56", false, "560 rapporté à 1 000 au lieu de 800."],
    ], "Élèves sans sport collectif : 800 − 240 = 560. P = 560/800 = 0,7. Ou : 1 − 240/800 = 1 − 0,3 = 0,7.", "P(non A) = 1 − P(A).", [
      "Combien d'élèves ne pratiquent pas de sport collectif ?",
      "Divise par l'effectif total, 800.",
      "Ou calcule 1 − 240/800.",
    ]),
    m("B-MATH-PROBA-010", "indep", 3, "Deux événements vérifient P(A) = 0,4, P(B) = 0,5 et P(A ∪ B) = 0,7. Que peut-on dire de A et B ?", [
      ["Ils sont indépendants, car P(A ∩ B) = 0,2 = P(A) × P(B).", true, "P(A ∩ B) = 0,4 + 0,5 − 0,7 = 0,2 et 0,4 × 0,5 = 0,2."],
      ["Ils ne sont pas indépendants, car P(A) + P(B) ≠ P(A ∪ B).", false, "Confusion avec l'incompatibilité : P(A) + P(B) = P(A ∪ B) caractérise des événements incompatibles."],
      ["Ils sont incompatibles, car P(A ∪ B) < 1.", false, "Des événements incompatibles vérifient P(A ∩ B) = 0 ; ici P(A ∩ B) = 0,2."],
      ["On ne peut pas conclure sans connaître P(A ∩ B).", false, "P(A ∩ B) se déduit de la formule de l'union."],
    ], "Formule de l'union : P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0,4 + 0,5 − 0,7 = 0,2. Or P(A) × P(B) = 0,4 × 0,5 = 0,2. Les deux valeurs sont égales : A et B sont indépendants. Ils ne sont pas incompatibles puisque P(A ∩ B) ≠ 0.", "A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B).", [
      "Retrouve P(A ∩ B) grâce à la formule de l'union.",
      "Compare P(A ∩ B) avec P(A) × P(B).",
      "Indépendant (produit) et incompatible (intersection vide) sont deux notions différentes.",
    ], "erreur", true),
  ],
};
