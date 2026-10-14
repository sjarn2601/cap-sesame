// MATH · Systèmes de deux équations à deux inconnues et problèmes associés.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.sys";
const m = maker(S);

export const SYS: PartieMath = {
  skill: competence(S, "Algèbre", "Systèmes à deux inconnues", ["systeme", "deux inconnues", "substitution", "combinaison", "elimination", "probleme a deux inconnues"]),
  lesson: {
    skillId: S,
    title: "Systèmes de deux équations à deux inconnues",
    objectives: ["Résoudre un système 2 × 2 par substitution ou par combinaison", "Mettre en équation un problème à deux inconnues", "Vérifier une solution dans les deux équations"],
    prerequisites: ["math.eq"],
    regle:
      "Un système de deux équations à deux inconnues x et y cherche le couple (x ; y) qui vérifie les deux équations en même temps. Graphiquement, c'est le point d'intersection de deux droites : il y a une solution unique si les droites sont sécantes, aucune si elles sont parallèles, une infinité si elles sont confondues.\n\nMéthode par substitution : on exprime une inconnue en fonction de l'autre dans l'une des équations (de préférence celle où une inconnue a le coefficient 1), puis on remplace dans l'autre équation. On obtient une équation à une seule inconnue.\n\nMéthode par combinaison : on multiplie les équations par des nombres bien choisis pour que les coefficients d'une inconnue deviennent opposés (ou égaux), puis on additionne (ou on soustrait) les équations membre à membre. Une inconnue disparaît.\n\nCas très fréquent : on connaît la somme S et la différence D de deux nombres. Le plus grand vaut (S + D)/2 et le plus petit (S − D)/2.\n\nProblèmes à deux inconnues : billets adultes et enfants, pièces de deux valeurs, mélanges, bonnes et mauvaises réponses. Il y a presque toujours une équation « de quantité » (x + y = nombre total) et une équation « de valeur » (prix × quantités = montant total). En remplaçant y par total − x, on se ramène à une seule équation.\n\nToujours vérifier la solution dans les deux équations : une solution qui n'en vérifie qu'une est fausse. Dans un QCU, ce test permet aussi d'éliminer rapidement les mauvaises propositions.",
    formules:
      "Substitution : y = … puis remplacer dans l'autre équation\nCombinaison : L1 + L2 ou L1 − L2 pour éliminer une inconnue\nSomme S et différence D : grand = (S + D)/2 ; petit = (S − D)/2\nProblème type : x + y = N et ax + by = M\nAvec y = N − x : ax + b(N − x) = M",
    methode:
      "1. Nomme les deux inconnues avec leur unité.\n2. Écris l'équation de quantité et l'équation de valeur.\n3. Choisis la méthode : substitution si une inconnue a le coefficient 1, combinaison sinon.\n4. Résous l'équation à une inconnue, puis déduis l'autre.\n5. Vérifie dans les deux équations et relis ce que demande la question.",
    exemple:
      "Au cinéma, une place adulte coûte 9 € et une place enfant 6 €. Un groupe de 10 personnes paie 75 €. Soit a le nombre d'adultes et e le nombre d'enfants : a + e = 10 et 9a + 6e = 75. Substitution : e = 10 − a, donc 9a + 60 − 6a = 75, 3a = 15, a = 5 et e = 5. Vérification : 45 + 30 = 75.\n\nCombinaison : 3x + 2y = 16 et x − 2y = 0. En additionnant : 4x = 16, x = 4, puis 4 − 2y = 0 donne y = 2.",
    erreur:
      "✗ Répondre la valeur de x alors que la question demande y → ✓ relire la question avant de cocher\n✗ Ne vérifier la solution que dans une équation → ✓ tester le couple dans les deux\n✗ Oublier de multiplier tous les termes d'une équation lors d'une combinaison → ✓ multiplier chaque terme, y compris le second membre\n✗ Remplacer y par N − x sans parenthèses : b × N − x → ✓ b(N − x) = bN − bx\n✗ Inverser x et y dans la réponse finale → ✓ écrire « x = …, y = … » en toutes lettres",
    approfondir:
      "Raccourci « tout le monde au même prix » : si les 10 personnes étaient des enfants, le groupe paierait 60 € ; il paie 15 € de plus, et chaque adulte coûte 3 € de plus qu'un enfant, donc il y a 15/3 = 5 adultes. Ce raisonnement de fausse supposition est souvent le plus rapide.\n\nDans un QCU, si les options sont des couples, teste-les dans l'équation la plus simple puis dans l'autre : souvent une seule option passe les deux tests.\n\nGestion du temps : un système bien posé se résout en moins d'une minute. La difficulté est dans la mise en équation, qu'il faut écrire proprement d'abord.",
    cards: [
      ["Somme 50, différence 12 : le plus grand ?", "(50 + 12)/2 = 31", false],
      ["Système 2 × 2 sans solution", "Droites parallèles distinctes (coefficients de x et y proportionnels, équations non équivalentes)", false],
      ["Substitution", "Isoler une inconnue puis la remplacer dans l'autre équation", false],
      ["Combinaison", "Additionner ou soustraire les équations pour éliminer une inconnue", false],
    ],
  },
  questions: [
    m("B-MATH-SYS-001", "resol", 1, "Résoudre le système : x + y = 10 et x − y = 4.", [
      ["x = 7 et y = 3", true, "En additionnant : 2x = 14, x = 7, puis y = 10 − 7 = 3."],
      ["x = 3 et y = 7", false, "Valeurs de x et y inversées : 3 − 7 = −4, pas 4."],
      ["x = 14 et y = −4", false, "Oubli de la division par 2 : 2x = 14 a été lu x = 14."],
      ["x = 7 et y = −3", false, "Erreur de signe en calculant y : y = 4 − 7."],
    ], "En additionnant les deux équations : 2x = 14, donc x = 7. Puis y = 10 − 7 = 3. Vérification : 7 + 3 = 10 et 7 − 3 = 4.", "Quand on connaît la somme et la différence, on additionne les équations pour éliminer y.", [
      "Additionne les deux équations membre à membre.",
      "Tu obtiens 2x = 14.",
      "Remplace x dans x + y = 10 pour trouver y.",
    ], "formules"),
    m("B-MATH-SYS-002", "probleme", 2, "Au cinéma, une place adulte coûte 7 € et une place enfant 4,50 €. Une famille achète 12 places pour 66,50 €. Combien d'adultes compte-t-elle ?", [
      ["5", true, "7a + 4,5(12 − a) = 66,5 donne 2,5a = 12,5, soit a = 5."],
      ["7", false, "C'est le nombre d'enfants, pas d'adultes."],
      ["9,5", false, "Total divisé par le prix adulte (66,5/7), comme s'il n'y avait que des adultes."],
      ["6", false, "Répartition à parts égales supposée sans calcul (12 ÷ 2)."],
    ], "Soit a le nombre d'adultes : 12 − a enfants. 7a + 4,5(12 − a) = 66,5, soit 7a + 54 − 4,5a = 66,5, 2,5a = 12,5, a = 5. Vérification : 5 × 7 + 7 × 4,5 = 35 + 31,5 = 66,5 €.", "Problème à deux inconnues : une équation de quantité, une équation de valeur, puis substitution.", [
      "Écris l'équation des quantités et celle des prix.",
      "Remplace le nombre d'enfants par 12 − a.",
      "Résous 2,5a = 12,5.",
    ], "approfondir"),
    m("B-MATH-SYS-003", "probleme", 2, "Au comptoir d'une boulangerie, 2 cafés et 3 croissants coûtent 6,10 €, tandis que 3 cafés et 1 croissant coûtent 5,30 €. Quel est le prix d'un croissant ?", [
      ["1,10 €", true, "Café 1,40 € et croissant 1,10 € vérifient les deux équations."],
      ["1,40 €", false, "C'est le prix d'un café."],
      ["1,22 €", false, "Prix moyen d'un article dans le premier achat : 6,10/5."],
      ["0,80 €", false, "Différence des deux équations (c − 2k = −0,80) lue comme le prix d'un croissant."],
    ], "Soit c le prix d'un café et k celui d'un croissant : 2c + 3k = 6,10 et 3c + k = 5,30. De la seconde : k = 5,30 − 3c. Dans la première : 2c + 15,90 − 9c = 6,10, donc 7c = 9,80, c = 1,40 €, puis k = 5,30 − 4,20 = 1,10 €. Vérification : 2,80 + 3,30 = 6,10.", "On isole l'inconnue de coefficient 1 puis on substitue.", [
      "Pose c le prix d'un café et k celui d'un croissant.",
      "Dans la seconde équation, k = 5,30 − 3c.",
      "Remplace dans la première : tu trouves c = 1,40 €.",
    ], "regle"),
    m("B-MATH-SYS-004", "somdiff", 1, "La somme de deux nombres vaut 85 et leur différence vaut 23. Quel est le plus grand des deux ?", [
      ["54", true, "(85 + 23)/2 = 54."],
      ["31", false, "C'est le plus petit : (85 − 23)/2."],
      ["62", false, "Différence 85 − 23 non divisée par 2."],
      ["108", false, "Somme 85 + 23 non divisée par 2."],
    ], "Si x est le plus grand et y le plus petit : x + y = 85 et x − y = 23. En additionnant : 2x = 108, x = 54, puis y = 31. Vérification : 54 + 31 = 85 et 54 − 31 = 23.", "Avec une somme S et une différence D, le plus grand vaut (S + D)/2.", [
      "Écris les deux équations avec x le plus grand.",
      "Additionne-les.",
      "Divise 108 par 2.",
    ], "formules"),
    m("B-MATH-SYS-005", "probleme", 3, "Un commerçant a vendu 40 kg de thé de deux qualités, l'une à 30 €/kg et l'autre à 45 €/kg, pour une recette totale de 1 455 €. Combien de kilogrammes de thé à 45 €/kg a-t-il vendus ?", [
      ["17 kg", true, "30x + 45(40 − x) = 1 455 donne x = 23 kg à 30 €, donc 17 kg à 45 €."],
      ["23 kg", false, "C'est la masse de thé à 30 €/kg."],
      ["20 kg", false, "Partage moitié-moitié supposé : la recette serait alors 1 500 €."],
      ["32,3 kg", false, "Recette divisée par 45 (1 455/45 ≈ 32,3), comme si tout était du thé cher."],
    ], "Soit x la masse à 30 €/kg et 40 − x celle à 45 €/kg. 30x + 45(40 − x) = 1 455, soit 1 800 − 15x = 1 455, 15x = 345, x = 23. Thé à 45 € : 40 − 23 = 17 kg. Vérification : 23 × 30 + 17 × 45 = 690 + 765 = 1 455 €.", "Avec y = total − x, un problème à deux inconnues devient une équation à une inconnue.", [
      "Appelle x la masse d'une des deux qualités et exprime l'autre.",
      "Écris l'équation de la recette.",
      "Attention : la question porte sur le thé à 45 €/kg.",
    ], "methode", true),
    m("B-MATH-SYS-006", "resol", 2, "Résoudre le système : y = 2x − 1 et 3x + 2y = 19.", [
      ["x = 3 et y = 5", true, "3x + 2(2x − 1) = 19 donne 7x = 21, x = 3, puis y = 5."],
      ["x = 5 et y = 3", false, "Valeurs inversées : y = 2 × 5 − 1 = 9, pas 3."],
      ["x = 17/7 et y = 27/7", false, "Erreur de signe en développant : 2(2x − 1) écrit 4x + 2."],
      ["x = 3 et y = 7", false, "Erreur sur y : 2 × 3 + 1 au lieu de 2 × 3 − 1."],
    ], "Substitution : 3x + 2(2x − 1) = 19, soit 3x + 4x − 2 = 19, 7x = 21, x = 3. Puis y = 2 × 3 − 1 = 5. Vérification : 9 + 10 = 19.", "Quand une équation donne directement y en fonction de x, on substitue dans l'autre.", [
      "La première équation donne déjà y en fonction de x.",
      "Remplace y par 2x − 1 dans la seconde, avec des parenthèses.",
      "Tu obtiens 7x = 21.",
    ]),
    m("B-MATH-SYS-007", "probleme", 3, "Dans un jeu télévisé de 40 questions, une bonne réponse rapporte 3 points et une mauvaise en retire 1. Un candidat a répondu à toutes les questions et totalise 72 points. Combien de bonnes réponses a-t-il données ?", [
      ["28", true, "3b − (40 − b) = 72 donne 4b = 112, b = 28."],
      ["24", false, "Points négatifs ignorés : 72 ÷ 3."],
      ["12", false, "C'est le nombre de mauvaises réponses."],
      ["37", false, "Les mauvaises réponses comptées comme 40 au lieu de 40 − b : 3b − 40 = 72 donne b ≈ 37,3, arrondi à 37."],
    ], "Soit b le nombre de bonnes réponses : 40 − b mauvaises. Score : 3b − (40 − b) = 72, soit 4b − 40 = 72, 4b = 112, b = 28. Vérification : 28 × 3 − 12 = 84 − 12 = 72.", "Avec deux catégories qui se partagent un total, on exprime l'une en fonction de l'autre.", [
      "Si b est le nombre de bonnes réponses, combien de mauvaises ?",
      "Écris le score : 3b − (40 − b).",
      "Résous 4b − 40 = 72.",
    ], "methode", true),
    m("B-MATH-SYS-008", "probleme", 2, "Un atelier fabrique des chaises (2 h de montage chacune) et des tables (5 h chacune). En une semaine, il a produit 120 meubles en 330 heures de montage. Combien de tables a-t-il produites ?", [
      ["30", true, "2(120 − t) + 5t = 330 donne 3t = 90, t = 30."],
      ["90", false, "C'est le nombre de chaises."],
      ["66", false, "Heures divisées par 5 (330/5), comme si l'atelier n'avait fait que des tables."],
      ["47", false, "Heures divisées par 2 + 5 = 7 (330/7 ≈ 47)."],
    ], "Soit t le nombre de tables et 120 − t celui des chaises. 2(120 − t) + 5t = 330, soit 240 + 3t = 330, t = 30. Vérification : 90 chaises × 2 h + 30 tables × 5 h = 180 + 150 = 330 h.", "Fausse supposition : si tout était des chaises, 240 h ; chaque table ajoute 3 h ; 90 h de plus donnent 30 tables.", [
      "Écris une équation des quantités et une équation des heures.",
      "Remplace le nombre de chaises par 120 − t.",
      "Ou raisonne : 120 chaises prendraient 240 h, chaque table ajoute 3 h.",
    ], "approfondir"),
    m("B-MATH-SYS-009", "probleme", 2, "Une tirelire contient 32 pièces, uniquement des pièces de 1 € et de 2 €, pour un total de 47 €. Combien contient-elle de pièces de 2 € ?", [
      ["15", true, "x + y = 32 et x + 2y = 47 : en soustrayant, y = 15."],
      ["17", false, "C'est le nombre de pièces de 1 €."],
      ["23,5", false, "Montant divisé par 2 (47/2) : impossible pour un nombre de pièces."],
      ["16", false, "Répartition à parts égales supposée (32/2)."],
    ], "Soit x le nombre de pièces de 1 € et y celui de 2 €. x + y = 32 et x + 2y = 47. En soustrayant : y = 15, puis x = 17. Vérification : 17 + 30 = 47 €.", "La différence entre l'équation de valeur et l'équation de quantité isole directement une inconnue.", [
      "Écris l'équation du nombre de pièces et celle du montant.",
      "Soustrais la première équation de la seconde.",
      "Il reste y = 47 − 32.",
    ], "regle"),
    m("B-MATH-SYS-010", "resol", 1, "Quel couple est solution du système 2x + y = 11 et x + y = 7 ?", [
      ["x = 4 et y = 3", true, "8 + 3 = 11 et 4 + 3 = 7 : les deux équations sont vérifiées."],
      ["x = 3 et y = 4", false, "x et y inversés : 6 + 4 = 10, pas 11."],
      ["x = 2 et y = 5", false, "Vérifie seulement la seconde équation : 4 + 5 = 9, pas 11."],
      ["x = 5 et y = 1", false, "Vérifie seulement la première équation : 5 + 1 = 6, pas 7."],
    ], "En soustrayant la seconde équation de la première : x = 4. Puis y = 7 − 4 = 3. Vérification : 2 × 4 + 3 = 11 et 4 + 3 = 7.", "Une solution d'un système doit vérifier les deux équations à la fois.", [
      "Teste chaque couple dans les deux équations.",
      "Ou soustrais les deux équations membre à membre.",
      "Tu obtiens x = 4.",
    ], "erreur"),
  ],
};
