// Compétences digitales : algorithmique en pseudo-code et logique booléenne (dig.algo).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.algo";

export const DIG_ALGO: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Lire et exécuter un algorithme en pseudo-code",
      objectives: ["Suivre l'évolution des variables avec un tableau de suivi", "Compter les passages dans une boucle Pour ou Tant que", "Évaluer une condition et une expression booléenne", "Reconnaître ce que calcule un algorithme"],
      regle:
        "Variables et affectation. Une variable est une case nommée qui contient une valeur (nombre, texte, booléen VRAI/FAUX, tableau). L'affectation x ← x + 1 se lit « x reçoit x + 1 » : on calcule d'abord la partie droite avec la valeur actuelle, puis on remplace l'ancienne valeur. Les instructions s'exécutent dans l'ordre, une par une : après a ← b, l'ancienne valeur de a est perdue.\n\nOpérations utiles. a mod b donne le reste de la division entière de a par b (17 mod 5 = 2) ; un nombre n est pair si n mod 2 = 0. a div b (ou quotient entier) donne le quotient entier (17 div 5 = 3).\n\nConditions. Si condition alors … sinon … : la condition est évaluée une seule fois, avec les valeurs du moment, et une seule branche est exécutée. Dans une suite de « sinon si », on s'arrête à la première condition vraie.\n\nBoucles. Pour i allant de a à b : la boucle s'exécute b − a + 1 fois (bornes incluses), i prenant les valeurs a, a + 1, …, b. Tant que condition : on teste la condition avant chaque passage ; on s'arrête dès qu'elle est fausse. Si la condition ne devient jamais fausse, la boucle est infinie. Répéter n fois : exactement n passages.\n\nTableaux. Un tableau T regroupe plusieurs valeurs repérées par leur indice. Dans ce cours, les indices commencent à 0 : T[0] est le premier élément, et un tableau de 5 éléments va de T[0] à T[4]. L'énoncé précise toujours la convention : lis-la.\n\nLogique booléenne. ET est vrai seulement si les deux conditions sont vraies ; OU est vrai si au moins une l'est ; NON inverse la valeur. Priorité : NON, puis ET, puis OU (en cas de doute, les parenthèses tranchent). Lois de De Morgan : NON(a ET b) = (NON a) OU (NON b) ; NON(a OU b) = (NON a) ET (NON b).\n\nTableau de suivi. On trace une colonne par variable (et une pour la condition), une ligne par étape. C'est la méthode la plus sûre au concours : elle évite d'oublier un passage ou d'utiliser une valeur périmée.",
      formules:
        "x ← expression : calculer à droite, puis ranger dans x\nPour i allant de a à b : b − a + 1 passages\nTant que C : test avant chaque passage, arrêt dès que C est faux\na mod b = reste · a div b = quotient entier · n pair ⇔ n mod 2 = 0\nET : vrai si tout est vrai · OU : vrai si au moins un est vrai · NON : inverse\nNON(a ET b) = NON a OU NON b · NON(a OU b) = NON a ET NON b\nPriorité : NON > ET > OU",
      methode:
        "1. Écrire la valeur initiale de chaque variable sur une ligne.\n2. Pour chaque passage dans la boucle, ajouter une ligne : valeur de l'indice, puis nouvelles valeurs des variables dans l'ordre des instructions.\n3. Pour un Tant que, tester la condition avant chaque nouvelle ligne.\n4. S'arrêter quand la boucle se termine et lire la valeur demandée.\n5. Contrôler : nombre de lignes = nombre de passages attendu.",
      exemple:
        "Algorithme : a ← 1 ; b ← 1 ; Pour k allant de 1 à 4 : c ← a + b ; a ← b ; b ← c. Fin : afficher b.\nTableau de suivi (k ; c ; a ; b) : départ (– ; – ; 1 ; 1) ; k = 1 (2 ; 1 ; 2) ; k = 2 (3 ; 2 ; 3) ; k = 3 (5 ; 3 ; 5) ; k = 4 (8 ; 5 ; 8). Quatre lignes pour quatre passages : l'algorithme affiche 8 (ce sont les termes de la suite de Fibonacci).\n\nBoucle Tant que : r ← 17 ; q ← 0 ; Tant que r ≥ 5 : r ← r − 5 ; q ← q + 1. Suivi : (17 ; 0) → (12 ; 1) → (7 ; 2) → (2 ; 3). Le test 2 ≥ 5 est faux : on s'arrête avec q = 3 et r = 2, c'est-à-dire le quotient et le reste de 17 par 5.",
      erreur:
        "✗ Croire que a ← b ; b ← a échange les valeurs → ✓ Après a ← b, l'ancienne valeur de a est perdue ; il faut une variable temporaire.\n✗ Compter b − a passages pour « Pour i de a à b » → ✓ Bornes incluses : b − a + 1 passages.\n✗ Faire un passage de plus dans un Tant que → ✓ Tester la condition avant chaque passage.\n✗ Confondre l'indice et la valeur d'un élément de tableau → ✓ T[i] est la valeur, i est la position.\n✗ Penser que NON(a ET b) = NON a ET NON b → ✓ De Morgan : le ET devient OU.",
      approfondir:
        "Sans brouillon papier le jour de l'épreuve, garde un tableau de suivi mental très court : seules les variables qui changent. Pour reconnaître ce que fait un algorithme, teste-le sur une petite valeur : s'il donne 1, 2, 6, 24, c'est une factorielle ; 1, 4, 9, 16, des carrés. Méfie-toi des comparaisons strictes (> ou ≥) dans les recherches de maximum : elles décident quelle position est retenue en cas d'égalité. Lien avec le tableur : la fonction SI et les fonctions ET, OU suivent exactement la même logique.",
      cards: [
        ["Nombre de passages de « Pour i allant de 2 à 9 »", "8 passages (9 − 2 + 1)", false],
        ["17 mod 5", "2 (reste de la division entière)", false],
        ["NON(a ET b)", "(NON a) OU (NON b)", true],
        ["Quand un Tant que s'arrête-t-il ?", "Dès que sa condition, testée avant chaque passage, est fausse", false],
        ["Échanger a et b", "temp ← a ; a ← b ; b ← temp", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-ALGO-001", S, "dig.algo.affectation", 2, "a ← 3\nb ← 5\na ← b\nb ← a\nQuelles sont les valeurs finales de a et de b ?", [
      ["a = 5 et b = 5", true, "Après a ← b, a vaut 5 ; puis b ← a recopie ce 5 dans b."],
      ["a = 5 et b = 3", false, "Croire que ces deux lignes échangent les valeurs : l'ancienne valeur 3 a été écrasée."],
      ["a = 3 et b = 5", false, "Les affectations ont été ignorées."],
      ["a = 3 et b = 3", false, "Les instructions ont été lues dans le mauvais ordre."],
    ], "On exécute ligne par ligne : a = 3, b = 5 ; a ← b donne a = 5 ; b ← a donne b = 5. Pour échanger réellement, il faut une variable temporaire : t ← a ; a ← b ; b ← t.", "Une affectation écrase l'ancienne valeur de la variable.", {
      hints: ["Exécute les lignes dans l'ordre, sans anticiper.", "Après la troisième ligne, que vaut a ?", "La quatrième ligne recopie la nouvelle valeur de a dans b."],
      lessonAnchor: "erreur",
    }),
    q("B-DIG-ALGO-002", S, "dig.algo.boucle", 1, "compteur ← 0\nPour i allant de 3 à 7 :\n    compteur ← compteur + 1\nQuelle est la valeur finale de compteur ?", [
      ["5", true, "i prend les valeurs 3, 4, 5, 6, 7 : cinq passages."],
      ["4", false, "Calcul 7 − 3 sans compter les deux bornes."],
      ["7", false, "C'est la dernière valeur de i, pas le nombre de passages."],
      ["25", false, "C'est la somme des valeurs de i, pas le nombre de passages."],
    ], "Une boucle « Pour i allant de a à b » fait b − a + 1 passages, bornes incluses : 7 − 3 + 1 = 5. Le compteur augmente de 1 à chaque passage.", "Pour i de a à b : b − a + 1 passages.", {
      hints: ["Écris toutes les valeurs prises par i.", "Les deux bornes sont incluses.", "Compte les valeurs de 3 à 7."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-ALGO-003", S, "dig.algo.tantque", 2, "n ← 1\nTant que n < 50 :\n    n ← n × 3\nAfficher n\nQuelle valeur est affichée ?", [
      ["81", true, "n vaut 1, 3, 9, 27, 81 ; le test 81 < 50 est faux, la boucle s'arrête."],
      ["27", false, "Arrêt prématuré : 27 < 50 est vrai, il faut encore un passage."],
      ["50", false, "La valeur 50 sert de seuil, n ne la prend jamais."],
      ["243", false, "Un passage de trop : la condition est testée avant chaque passage."],
    ], "On teste la condition avant chaque passage : 1 < 50 (n = 3), 3 < 50 (n = 9), 9 < 50 (n = 27), 27 < 50 (n = 81), 81 < 50 faux : arrêt. On affiche 81, première valeur qui dépasse le seuil.", "Tant que : on teste avant chaque passage et on s'arrête dès que c'est faux.", {
      hints: ["Fais un tableau de suivi des valeurs de n.", "Teste n < 50 avant chaque multiplication.", "La boucle s'arrête à la première valeur qui n'est plus inférieure à 50."],
    }),
    q("B-DIG-ALGO-004", S, "dig.algo.condition", 2, "s ← 0\nPour i allant de 1 à 10 :\n    Si i mod 2 = 0 alors\n        s ← s + i\nAfficher s\nQuelle valeur est affichée ?", [
      ["30", true, "Seuls les nombres pairs sont ajoutés : 2 + 4 + 6 + 8 + 10 = 30."],
      ["25", false, "Ce sont les nombres impairs qui ont été additionnés."],
      ["55", false, "La condition a été ignorée : somme de 1 à 10."],
      ["5", false, "C'est le nombre de valeurs paires, pas leur somme."],
    ], "i mod 2 = 0 signifie que i est pair. La boucle additionne donc les nombres pairs de 1 à 10 : 2 + 4 + 6 + 8 + 10 = 30.", "n mod 2 = 0 ⇔ n est pair.", {
      hints: ["Que signifie i mod 2 = 0 ?", "Le reste de la division par 2 est nul pour les nombres pairs.", "Additionne les nombres pairs de 1 à 10."],
    }),
    q("B-DIG-ALGO-005", S, "dig.algo.tableau", 3, "T est un tableau dont les indices commencent à 0 : T = [4, 9, 2, 9, 7].\np ← 0\nPour i allant de 1 à 4 :\n    Si T[i] > T[p] alors\n        p ← i\nAfficher p\nQuelle valeur est affichée ?", [
      ["1", true, "T[1] = 9 dépasse T[0] = 4 ; ensuite aucune valeur n'est strictement supérieure à 9."],
      ["3", false, "Avec la comparaison stricte, le second 9 (indice 3) ne remplace pas le premier."],
      ["9", false, "C'est la valeur maximale, alors que l'algorithme affiche sa position."],
      ["2", false, "Position du premier maximum comptée à partir de 1, contrairement à la convention de l'énoncé."],
    ], "p garde la position du plus grand élément rencontré. i = 1 : 9 > 4, p = 1. i = 2 : 2 > 9 faux. i = 3 : 9 > 9 faux (comparaison stricte). i = 4 : 7 > 9 faux. On affiche 1. Avec ≥, on aurait obtenu 3.", "Distinguer indice et valeur ; > strict garde la première occurrence du maximum.", {
      hints: ["p contient une position, pas une valeur.", "Attention à la comparaison stricte quand deux valeurs sont égales.", "Les indices commencent à 0 : T[1] est le deuxième élément."],
      reserved: true,
    }),
    q("B-DIG-ALGO-006", S, "dig.algo.booleen", 1, "La variable x vaut 7. Quelle est la valeur de l'expression (x > 5) ET (x < 7) ?", [
      ["FAUX", true, "x > 5 est vrai, mais x < 7 est faux : ET exige les deux."],
      ["VRAI", false, "x < 7 est faux pour x = 7 : l'inégalité est stricte."],
      ["7", false, "Une expression booléenne vaut VRAI ou FAUX, pas un nombre."],
      ["On ne peut pas savoir", false, "La valeur de x est connue : on peut évaluer chaque condition."],
    ], "On évalue chaque condition : 7 > 5 est VRAI ; 7 < 7 est FAUX (inégalité stricte). VRAI ET FAUX donne FAUX.", "ET est vrai seulement si toutes les conditions sont vraies.", {
      hints: ["Évalue séparément les deux comparaisons.", "7 < 7 : l'inégalité est stricte.", "Une seule condition fausse suffit à rendre ET faux."],
    }),
    q("B-DIG-ALGO-007", S, "dig.algo.booleen", 3, "Quelle expression est toujours équivalente à NON(a ET b) ?", [
      ["(NON a) OU (NON b)", true, "Loi de De Morgan : la négation d'un ET devient un OU des négations."],
      ["(NON a) ET (NON b)", false, "Erreur classique : on a nié chaque terme sans transformer ET en OU."],
      ["a OU b", false, "Les négations ont disparu."],
      ["NON a ET b", false, "Seul a a été nié, et le ET n'a pas été transformé."],
    ], "NON(a ET b) est vrai dès qu'au moins l'une des deux conditions est fausse, c'est-à-dire (NON a) OU (NON b). Vérification avec a = VRAI, b = FAUX : NON(FAUX) = VRAI et (FAUX) OU (VRAI) = VRAI.", "De Morgan : NON(a ET b) = NON a OU NON b.", {
      hints: ["Quand NON(a ET b) est-il vrai ?", "Il suffit qu'une des deux conditions soit fausse.", "« Au moins une » se traduit par OU."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-ALGO-008", S, "dig.algo.booleen", 2, "a vaut FAUX et b vaut VRAI. Que vaut NON(a OU b) ?", [
      ["FAUX", true, "a OU b vaut VRAI, et NON(VRAI) vaut FAUX."],
      ["VRAI", false, "La négation a été appliquée à a seulement, ou oubliée."],
      ["VRAI si a est évalué en premier", false, "L'ordre d'évaluation ne change pas le résultat d'un OU."],
      ["Impossible à déterminer", false, "Les deux valeurs sont connues."],
    ], "On calcule d'abord la parenthèse : FAUX OU VRAI = VRAI (au moins un vrai). Puis NON(VRAI) = FAUX. Par De Morgan : (NON a) ET (NON b) = VRAI ET FAUX = FAUX.", "Calculer la parenthèse avant d'appliquer NON.", {
      hints: ["Commence par l'intérieur de la parenthèse.", "a OU b est vrai dès qu'un des deux est vrai.", "NON inverse le résultat."],
    }),
    q("B-DIG-ALGO-009", S, "dig.algo.suivi", 2, "a ← 1\nb ← 1\nPour k allant de 1 à 4 :\n    c ← a + b\n    a ← b\n    b ← c\nQuelle est la valeur de b à la fin ?", [
      ["8", true, "b vaut successivement 2, 3, 5, 8."],
      ["5", false, "Seulement trois passages ont été comptés."],
      ["13", false, "Un passage de trop dans la boucle."],
      ["4", false, "C'est la dernière valeur de k, pas celle de b."],
    ], "Tableau de suivi (c, a, b) : k = 1 → (2, 1, 2) ; k = 2 → (3, 2, 3) ; k = 3 → (5, 3, 5) ; k = 4 → (8, 5, 8). On reconnaît la suite de Fibonacci.", "Un tableau de suivi : une ligne par passage, une colonne par variable.", {
      hints: ["Fais un tableau avec les colonnes c, a, b.", "À chaque passage, calcule c avec les anciennes valeurs, puis décale.", "Quatre passages : b vaut 2, puis 3, puis 5, puis…"],
      lessonAnchor: "exemple",
    }),
    q("B-DIG-ALGO-010", S, "dig.algo.condition", 1, "note ← 13\nSi note ≥ 16 alors mention ← \"Très bien\"\nSinon si note ≥ 14 alors mention ← \"Bien\"\nSinon si note ≥ 12 alors mention ← \"Assez bien\"\nSinon mention ← \"Aucune\"\nQuelle est la valeur de mention ?", [
      ["Assez bien", true, "13 ≥ 16 et 13 ≥ 14 sont faux ; 13 ≥ 12 est vrai."],
      ["Bien", false, "13 n'est pas supérieur ou égal à 14."],
      ["Aucune", false, "La branche « sinon » finale n'est atteinte que si toutes les conditions sont fausses."],
      ["Très bien", false, "13 n'est pas supérieur ou égal à 16."],
    ], "Dans une suite de « sinon si », on teste les conditions dans l'ordre et on exécute seulement la première vraie : ici note ≥ 12.", "Sinon si : seule la première condition vraie est exécutée.", {
      hints: ["Teste les conditions dans l'ordre.", "Arrête-toi à la première condition vraie.", "13 est entre 12 et 14."],
    }),
    q("B-DIG-ALGO-011", S, "dig.algo.tantque", 3, "i ← 10\nTant que i ≠ 0 :\n    i ← i − 3\nQue se passe-t-il quand on exécute cet algorithme ?", [
      ["La boucle ne s'arrête jamais", true, "i vaut 10, 7, 4, 1, −2, −5… et n'est jamais égal à 0."],
      ["La boucle s'arrête quand i vaut 1", false, "1 ≠ 0 est vrai : la boucle continue."],
      ["La boucle s'arrête quand i vaut 0, après 4 passages", false, "10 n'est pas un multiple de 3 : i saute la valeur 0."],
      ["La boucle ne s'exécute pas du tout", false, "10 ≠ 0 est vrai dès le départ."],
    ], "La condition i ≠ 0 ne devient fausse que si i vaut exactement 0. En retirant 3 à partir de 10, on obtient 1 puis −2 : on passe à côté de 0, et la boucle est infinie. Une condition i > 0 aurait permis l'arrêt.", "Un Tant que dont la condition ne devient jamais fausse est une boucle infinie.", {
      hints: ["Écris les valeurs successives de i.", "La condition n'est fausse que pour i = 0 exactement.", "10 est-il un multiple de 3 ?"],
    }),
    q("B-DIG-ALGO-012", S, "dig.algo.reconnaitre", 2, "r ← 1\nPour i allant de 1 à 5 :\n    r ← r × i\nQue vaut r une fois la boucle terminée ?", [
      ["120", true, "r = 1 × 2 × 3 × 4 × 5 = 120 (factorielle de 5)."],
      ["15", false, "Addition au lieu de multiplication : 1 + 2 + 3 + 4 + 5."],
      ["24", false, "La boucle a été arrêtée à 4 : 4! = 24."],
      ["720", false, "Un passage de trop : 6! = 720."],
    ], "r vaut successivement 1, 2, 6, 24, 120. L'algorithme calcule le produit des entiers de 1 à 5, c'est-à-dire 5! (factorielle de 5).", "Accumulation multiplicative : on part de 1, pas de 0.", {
      hints: ["Suis r à chaque passage.", "r est multiplié par 1, puis 2, puis 3…", "1, 2, 6, 24, puis ?"],
    }),
    q("B-DIG-ALGO-013", S, "dig.algo.tantque", 2, "r ← 17\nq ← 0\nTant que r ≥ 5 :\n    r ← r − 5\n    q ← q + 1\nQuelles sont les valeurs finales de q et r ?", [
      ["q = 3 et r = 2", true, "r passe de 17 à 12, 7 puis 2 ; q compte trois soustractions."],
      ["q = 4 et r = −3", false, "Un passage de trop : 2 ≥ 5 est faux, la boucle s'arrête."],
      ["q = 2 et r = 7", false, "Arrêt prématuré : 7 ≥ 5 est vrai, il reste un passage."],
      ["q = 3 et r = 17", false, "r est modifié à chaque passage."],
    ], "L'algorithme soustrait 5 tant que c'est possible et compte les soustractions : il calcule le quotient (3) et le reste (2) de la division euclidienne de 17 par 5. Contrôle : 3 × 5 + 2 = 17.", "Soustractions successives = division euclidienne (quotient et reste).", {
      hints: ["Suis r et q à chaque passage.", "Teste r ≥ 5 avant chaque soustraction.", "Vérifie : q × 5 + r doit redonner 17."],
      reserved: true,
    }),
  ],
};
