// MATH · Équations et inéquations du premier degré, mise en équation.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.eq";
const m = maker(S);

export const EQ: PartieMath = {
  skill: competence(S, "Algèbre", "Équations et inéquations du premier degré", ["equation", "inconnue", "resoudre", "mise en equation", "inequation", "premier degre", "probleme"]),
  lesson: {
    skillId: S,
    title: "Équations et inéquations du premier degré, mise en équation",
    objectives: ["Résoudre une équation du premier degré, y compris avec parenthèses et fractions", "Résoudre une inéquation en gérant le changement de sens", "Traduire un problème concret en équation"],
    prerequisites: ["math.calc"],
    regle:
      "Une équation reste équivalente quand on ajoute ou soustrait le même nombre aux deux membres, ou quand on les multiplie ou divise par un même nombre non nul. Le but est d'isoler l'inconnue : on développe, on regroupe les termes en x d'un côté et les nombres de l'autre, puis on divise par le coefficient de x.\n\nAvec des fractions, on multiplie les deux membres par un dénominateur commun pour les faire disparaître. Avec deux fractions égales a/b = c/d, on peut faire le produit en croix : ad = bc.\n\nUne inéquation se résout comme une équation, avec une règle supplémentaire : quand on multiplie ou divise les deux membres par un nombre négatif, le sens de l'inégalité change. −2x > 6 donne x < −3. L'ensemble des solutions est un intervalle, pas une valeur unique.\n\nMise en équation, en quatre temps : choisir l'inconnue et l'écrire en toutes lettres (« x = nombre d'enfants ») ; traduire chaque phrase de l'énoncé en relation ; résoudre ; vérifier dans l'énoncé de départ et répondre à la question posée (parfois ce n'est pas x lui-même, mais 2x ou x + 12).\n\nComparaison d'offres : une offre « fixe + prix unitaire » s'écrit a + bx. Pour savoir quand une offre devient moins chère qu'une autre, on résout l'inéquation correspondante. Le seuil d'égalité se trouve en résolvant l'équation.",
    formules:
      "a + x = b ⇔ x = b − a\nax = b ⇔ x = b/a (a ≠ 0)\na/b = c/d ⇔ ad = bc (b, d ≠ 0)\nk(a + b) = ka + kb\nInéquation : diviser par un négatif inverse le sens\nTarif affine : coût = partie fixe + prix unitaire × quantité",
    methode:
      "1. Nomme l'inconnue précisément, avec son unité.\n2. Traduis l'énoncé en une seule équation.\n3. Développe, regroupe les x à gauche et les nombres à droite.\n4. Divise par le coefficient de x (attention au sens si c'est une inéquation et que le coefficient est négatif).\n5. Vérifie en remplaçant dans l'énoncé et relis la question posée.",
    exemple:
      "Résoudre 3(x − 4) = x + 10. On développe : 3x − 12 = x + 10. On regroupe : 3x − x = 10 + 12, donc 2x = 22 et x = 11. Vérification : 3 × 7 = 21 et 11 + 10 = 21.\n\nUn club propose 40 € d'adhésion plus 6 € par séance, ou 10 € par séance sans adhésion. La formule avec adhésion est moins chère quand 40 + 6x < 10x, soit 40 < 4x, x > 10 : à partir de 11 séances.",
    erreur:
      "✗ Oublier de distribuer à tous les termes : 4(x − 3) = 4x − 3 → ✓ 4(x − 3) = 4x − 12\n✗ Changer de membre sans changer le signe → ✓ un terme qui traverse le signe = change de signe\n✗ Garder le sens de l'inégalité en divisant par −3 → ✓ inverser le sens\n✗ Répondre x alors que la question porte sur une autre grandeur → ✓ relire la question après la résolution\n✗ Diviser au lieu de multiplier pour éliminer un dénominateur (x/3 = 6 donne x = 2) → ✓ x = 18",
    approfondir:
      "Dans un QCU, tu peux souvent tester les quatre propositions dans l'équation : c'est rapide quand les nombres sont simples et cela évite toute erreur de signe. Mais résoudre reste plus sûr quand plusieurs options sont proches.\n\nProblèmes de rencontre : deux mobiles qui vont l'un vers l'autre se rapprochent à la somme de leurs vitesses ; s'ils vont dans le même sens, à la différence de leurs vitesses.\n\nGestion du temps : la mise en équation est la partie difficile. Écris l'équation en une ligne avant de calculer ; si elle ne vient pas en trente secondes, passe et reviens au second passage.",
    cards: [
      ["Diviser une inéquation par −2", "Le sens de l'inégalité change", false],
      ["a/b = c/d", "ad = bc (produit en croix)", false],
      ["Première étape d'une mise en équation", "Nommer l'inconnue avec son unité", false],
      ["Deux mobiles face à face", "Ils se rapprochent à la somme de leurs vitesses", false],
    ],
  },
  questions: [
    m("B-MATH-EQ-001", "lin", 1, "Résoudre l'équation 4(x − 3) = 2x + 6.", [
      ["x = 9", true, "4x − 12 = 2x + 6, donc 2x = 18 et x = 9."],
      ["x = 4,5", false, "Distribution incomplète : 4x − 3 = 2x + 6."],
      ["x = −3", false, "Erreur de signe en changeant de membre : 2x = 6 − 12."],
      ["x = 3", false, "2x passé à gauche avec le mauvais signe : 6x = 18."],
    ], "On développe : 4x − 12 = 2x + 6. On regroupe : 4x − 2x = 6 + 12, soit 2x = 18, x = 9. Vérification : 4 × 6 = 24 et 2 × 9 + 6 = 24.", "On développe, on regroupe les x d'un côté, puis on divise par le coefficient de x.", [
      "Commence par développer 4(x − 3).",
      "Regroupe les termes en x à gauche et les nombres à droite.",
      "Tu dois obtenir 2x = 18.",
    ], "erreur"),
    m("B-MATH-EQ-002", "lin", 1, "Résoudre l'équation x/3 + 5 = 11.", [
      ["x = 18", true, "x/3 = 6, donc x = 18."],
      ["x = 2", false, "Division par 3 au lieu d'une multiplication : 6 ÷ 3."],
      ["x = 48", false, "5 ajouté au lieu d'être soustrait : x/3 = 16."],
      ["x = 6", false, "Arrêt à x/3 = 6 : il faut encore multiplier par 3."],
    ], "x/3 + 5 = 11 ⇔ x/3 = 6 ⇔ x = 18. Vérification : 18/3 + 5 = 6 + 5 = 11.", "Pour éliminer un dénominateur, on multiplie les deux membres par ce dénominateur.", [
      "Isole d'abord x/3.",
      "x/3 = 6 : par quoi multiplier pour obtenir x ?",
      "Vérifie en remplaçant x dans l'équation de départ.",
    ]),
    m("B-MATH-EQ-003", "probleme", 2, "Dans un parc de loisirs, l'entrée coûte 14 € par adulte et 9 € par enfant. Un groupe de 3 adultes et des enfants paie 141 €. Combien d'enfants compte le groupe ?", [
      ["11", true, "3 × 14 + 9x = 141, donc 9x = 99 et x = 11."],
      ["15", false, "141 ÷ 9 ≈ 15,7 : les adultes n'ont pas été retirés."],
      ["14", false, "Un seul adulte compté : (141 − 14)/9 ≈ 14,1."],
      ["6", false, "Division par 14 + 9 = 23, comme si chaque enfant était accompagné d'un adulte."],
    ], "Soit x le nombre d'enfants. 3 × 14 + 9x = 141, soit 42 + 9x = 141, 9x = 99, x = 11. Vérification : 42 + 99 = 141.", "Un total « partie fixe + prix unitaire × quantité » se traduit par une équation du premier degré.", [
      "Appelle x le nombre d'enfants et écris le prix total.",
      "Les 3 adultes paient 42 €.",
      "Résous 42 + 9x = 141.",
    ], "methode"),
    m("B-MATH-EQ-004", "ineq", 2, "Résoudre l'inéquation −3x + 7 > 19.", [
      ["x < −4", true, "−3x > 12, puis division par −3 qui inverse le sens : x < −4."],
      ["x > −4", false, "Le sens n'a pas été inversé lors de la division par −3."],
      ["x < 4", false, "Erreur de signe : 12 divisé par −3 donne −4, pas 4."],
      ["x > 4", false, "Double erreur : signe du quotient et sens de l'inégalité."],
    ], "−3x + 7 > 19 ⇔ −3x > 12 ⇔ x < −4 (division par −3, négatif, donc changement de sens). Test : x = −5 donne 15 + 7 = 22 > 19 ; x = 0 donne 7, qui n'est pas supérieur à 19.", "Multiplier ou diviser une inéquation par un nombre négatif inverse le sens de l'inégalité.", [
      "Isole d'abord le terme −3x.",
      "Tu dois diviser par −3 : que devient le sens de l'inégalité ?",
      "Teste une valeur, par exemple x = −5, pour contrôler.",
    ], "regle"),
    m("B-MATH-EQ-005", "probleme", 2, "Paul a aujourd'hui trois fois l'âge de sa fille. Dans 12 ans, il aura le double de l'âge qu'elle aura alors. Quel âge a sa fille aujourd'hui ?", [
      ["12 ans", true, "3x + 12 = 2(x + 12) donne x = 12."],
      ["36 ans", false, "C'est l'âge actuel de Paul, pas celui de sa fille."],
      ["24 ans", false, "Les 12 ans ont été ajoutés à la fille mais pas au père : 3x = 2(x + 12)."],
      ["48 ans", false, "C'est l'âge de Paul dans 12 ans."],
    ], "Soit x l'âge de la fille. Paul a 3x ans. Dans 12 ans : 3x + 12 = 2(x + 12), donc 3x + 12 = 2x + 24 et x = 12. Vérification : aujourd'hui 12 et 36 ; dans 12 ans 24 et 48, et 48 = 2 × 24.", "Dans un problème d'âges, on ajoute le même nombre d'années à chaque personne.", [
      "Appelle x l'âge de la fille ; quel est celui de Paul ?",
      "Dans 12 ans, chacun a 12 ans de plus.",
      "Résous 3x + 12 = 2(x + 12).",
    ], "methode"),
    m("B-MATH-EQ-006", "ineq", 2, "Un forfait A coûte 20 € par mois plus 0,10 € par minute ; un forfait B coûte 0,35 € par minute sans abonnement. Au-delà de combien de minutes par mois le forfait A devient-il moins cher ?", [
      ["Au-delà de 80 minutes", true, "20 + 0,10x < 0,35x ⇔ 20 < 0,25x ⇔ x > 80."],
      ["Au-delà de 57 minutes", false, "Le prix à la minute de A a été oublié : 20 ÷ 0,35 ≈ 57."],
      ["Au-delà de 200 minutes", false, "Seul le forfait A a été considéré : 20 ÷ 0,10."],
      ["Au-delà de 44 minutes", false, "Prix à la minute additionnés au lieu d'être soustraits : 20 ÷ 0,45 ≈ 44."],
    ], "A est moins cher quand 20 + 0,10x < 0,35x, soit 20 < 0,25x, x > 80. Vérification à 80 min : A = 20 + 8 = 28 € et B = 0,35 × 80 = 28 €. Au-delà, A l'emporte.", "Pour comparer deux tarifs, on écrit l'inéquation entre leurs expressions et on cherche le seuil d'égalité.", [
      "Écris le coût de chaque forfait pour x minutes.",
      "Résous 20 + 0,10x < 0,35x.",
      "L'écart de prix par minute vaut 0,25 € : combien de minutes pour compenser 20 € ?",
    ], "exemple"),
    m("B-MATH-EQ-007", "lin", 3, "Résoudre l'équation (2x − 5)/3 = (x + 1)/2.", [
      ["x = 13", true, "2(2x − 5) = 3(x + 1), donc 4x − 10 = 3x + 3 et x = 13."],
      ["x = 11", false, "Distribution incomplète à droite : 3(x + 1) écrit 3x + 1."],
      ["x = 8", false, "Distribution incomplète à gauche : 2(2x − 5) écrit 4x − 5."],
      ["x = 6", false, "Dénominateurs ignorés : 2x − 5 = x + 1."],
    ], "Produit en croix : 2(2x − 5) = 3(x + 1), soit 4x − 10 = 3x + 3, donc x = 13. Vérification : (26 − 5)/3 = 7 et (13 + 1)/2 = 7.", "Pour deux fractions égales, le produit en croix fait disparaître les dénominateurs ; on distribue ensuite à tous les termes.", [
      "Utilise le produit en croix.",
      "Développe 2(2x − 5) et 3(x + 1) entièrement.",
      "Tu dois obtenir 4x − 10 = 3x + 3.",
    ], "formules"),
    m("B-MATH-EQ-008", "probleme", 3, "Deux trains partent à 9 h de deux villes distantes de 360 km et roulent l'un vers l'autre, à 100 km/h et 140 km/h. À quelle heure se croisent-ils ?", [
      ["10 h 30", true, "Ils se rapprochent à 240 km/h : 360/240 = 1,5 h."],
      ["10 h 50", false, "1,5 h lu comme 1 h 50 min."],
      ["18 h", false, "Vitesses soustraites (40 km/h) : c'est le cas de deux trains roulant dans le même sens."],
      ["12 h", false, "Moyenne des vitesses (120 km/h) utilisée comme si un seul train parcourait 360 km."],
    ], "Au bout de t heures, les trains ont parcouru 100t + 140t = 240t km. Ils se croisent quand 240t = 360, soit t = 1,5 h = 1 h 30 min. Heure : 9 h + 1 h 30 = 10 h 30. Contrôle : 150 km + 210 km = 360 km.", "Deux mobiles qui vont l'un vers l'autre se rapprochent à la somme de leurs vitesses.", [
      "Quelle distance les deux trains parcourent-ils ensemble en une heure ?",
      "Résous 240t = 360.",
      "Convertis 1,5 h en heures et minutes, puis ajoute à 9 h.",
    ], "approfondir", true),
    m("B-MATH-EQ-009", "probleme", 2, "Un vendeur perçoit un salaire fixe de 1 450 € plus une commission de 4 % sur ses ventes. Ce mois-ci, il a touché 2 130 €. Quel est le montant de ses ventes ?", [
      ["17 000 €", true, "0,04x = 2 130 − 1 450 = 680, donc x = 17 000 €."],
      ["170 €", false, "680 divisé par 4 au lieu de 0,04."],
      ["53 250 €", false, "Le salaire fixe n'a pas été retiré : 2 130 ÷ 0,04."],
      ["27,20 €", false, "Multiplication 680 × 0,04 au lieu d'une division."],
    ], "Soit x le montant des ventes. 1 450 + 0,04x = 2 130, donc 0,04x = 680 et x = 680/0,04 = 17 000 €. Vérification : 4 % de 17 000 = 680 €.", "Isoler une inconnue multipliée par un taux : on divise par ce taux écrit en décimal.", [
      "Écris le salaire en fonction du montant x des ventes.",
      "La commission vaut 2 130 − 1 450 = 680 €.",
      "680 représente 4 % de x : divise par 0,04.",
    ]),
    m("B-MATH-EQ-010", "lin", 1, "Résoudre l'équation 7 − 2x = 3x − 8.", [
      ["x = 3", true, "15 = 5x, donc x = 3."],
      ["x = −3", false, "Erreur de signe en regroupant les nombres : −15 = 5x."],
      ["x = 15", false, "Oubli de la division par le coefficient 5."],
      ["x = −0,2", false, "Nombres regroupés sans changer le signe de −8 : 5x = −1."],
    ], "7 − 2x = 3x − 8 ⇔ 7 + 8 = 3x + 2x ⇔ 15 = 5x ⇔ x = 3. Vérification : 7 − 6 = 1 et 9 − 8 = 1.", "Un terme qui change de membre change de signe.", [
      "Regroupe les x d'un côté, les nombres de l'autre.",
      "−2x passe à droite en +2x, −8 passe à gauche en +8.",
      "Tu obtiens 15 = 5x.",
    ]),
  ],
};
