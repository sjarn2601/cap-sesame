import { E, skill, type EnPart } from "./common";

const S = "en.numbers";

export const NUMBERS: EnPart = {
  skill: skill(S, "Vocabulaire", "Dates, nombres, heures et monnaie", ["numbers", "nombres", "dates", "years", "fractions", "decimals", "decimales", "time", "heure", "money", "billion", "million"]),
  lesson: {
    skillId: S,
    title: "Dates, nombres, heures et monnaie",
    objectives: ["Lire et écrire les années, les dates et les ordinaux", "Lire décimales, fractions et grands nombres", "Dire l'heure et les sommes d'argent"],
    regle:
      "Années : on les lit par paires de chiffres. 1984 = nineteen eighty-four ; 1905 = nineteen oh five ; 2000 = (the year) two thousand ; 2008 = two thousand and eight ; 2026 = twenty twenty-six ou two thousand and twenty-six.\n\n" +
      "Dates : en anglais britannique, on écrit 14 March 2027 ou 14th March et on lit the fourteenth of March. En américain, on écrit March 14, 2027 et on lit March fourteenth. La notation 3/5/2027 se lit donc 3 mai au Royaume-Uni mais 5 mars aux États-Unis. Ordinaux : first (1st), second (2nd), third (3rd), puis -th (4th, 11th, 12th, 13th), mais 21st, 22nd, 23rd, 31st. Siècles : the 19th century = the nineteenth century.\n\n" +
      "Grands nombres : en britannique, and après hundred : 350 = three hundred and fifty. Hundred, thousand, million, billion ne prennent pas de -s après un nombre (three million people) ; on dit millions of seulement sans nombre précis (millions of people). Attention : a billion = un milliard (10 puissance 9) ; le « billion » français (10 puissance 12) se dit a trillion. Séparateurs : l'anglais écrit 1,000,000 avec des virgules et met un point pour les décimales.\n\n" +
      "Décimales : 2.5 = two point five ; 0.75 = zero point seven five (ou nought point seven five, point seven five) : on lit les chiffres après le point un par un. Pourcentages : 12% = twelve per cent (GB), percent (US).\n\n" +
      "Fractions : 1/2 = a half ; 1/3 = a third ; 1/4 = a quarter ; 3/4 = three quarters ; 2/3 = two thirds (le dénominateur prend -s quand le numérateur dépasse 1).\n\n" +
      "Heures : 8:30 = half past eight ; 2:45 = a quarter to three ; 7:15 = a quarter past seven ; 10:50 = ten to eleven. On utilise past jusqu'à la demie, to après. a.m. = le matin, p.m. = l'après-midi et le soir.\n\n" +
      "Monnaie : £4.50 = four pounds fifty ; $2.99 = two dollars ninety-nine ; €3m = three million euros. Le symbole s'écrit avant le nombre mais se lit après.",
    formules:
      "1984 = nineteen eighty-four ; 2008 = two thousand and eight\n" +
      "14 March (GB) = the fourteenth of March ; March 14 (US) = March fourteenth\n" +
      "1st, 2nd, 3rd, 4th… 21st, 22nd, 23rd, 31st\n" +
      "350 = three hundred and fifty (GB)\n" +
      "three million (sans -s) ; millions of people\n" +
      "a billion = un milliard ; a trillion = mille milliards\n" +
      "2.5 = two point five ; 0.75 = zero point seven five\n" +
      "1/2 a half ; 1/4 a quarter ; 3/4 three quarters ; 2/3 two thirds\n" +
      "8:30 half past eight ; 2:45 a quarter to three\n" +
      "£4.50 = four pounds fifty",
    methode:
      "1. Identifie le type : année, date, ordinal, décimale, fraction, heure, monnaie.\n" +
      "2. Applique la règle de lecture correspondante sans passer par le français.\n" +
      "3. Vérifie les pièges : pas de -s à million, point et non virgule pour les décimales, billion = milliard.\n" +
      "4. Pour une date chiffrée, repère si le contexte est britannique (jour d'abord) ou américain (mois d'abord).",
    exemple:
      "« 2,5 millions d'euros » s'écrit en anglais 2.5 million euros : point décimal à la place de la virgule, million sans -s parce qu'il suit un nombre, et pas de of. On lit two point five million euros.\n\n" +
      "« 14:45 » se dit dans la langue courante a quarter to three (in the afternoon) : on compte ce qu'il manque pour arriver à 15 h.",
    erreur:
      "✗ two point twenty-five (2.25) → ✓ two point two five\n" +
      "✗ three millions people → ✓ three million people\n" +
      "✗ 1.5 billion = 1,5 billion en français → ✓ 1.5 billion = 1,5 milliard\n" +
      "✗ three hundreds → ✓ three hundred\n" +
      "✗ the 22th → ✓ the 22nd\n" +
      "✗ three less a quarter → ✓ a quarter to three",
    approfondir:
      "Au téléphone et pour les numéros, on lit chiffre par chiffre et 0 se dit « oh » : 0207 = oh two oh seven. Double chiffre : double five (GB).\n\n" +
      "En sport, zéro se dit nil (GB) : two nil. Au tennis : love.\n\n" +
      "Gestion du temps : ces questions sont de pures connaissances. Entraîne-toi à lire à voix haute des chiffres d'un article économique : c'est l'exercice le plus efficace.",
    cards: [
      ["1,5 milliard", "1.5 billion", true],
      ["3/4", "three quarters", false],
      ["14:45", "a quarter to three", false],
      ["0.75", "zero point seven five", false],
      ["Le 22 juin (GB)", "the twenty-second of June (22nd June)", true],
    ],
  },
  questions: [
    E("B-EN-NUM-001", S, "en.num.dates", 1, "How do you usually say the year 1984?", [
      ["nineteen eighty-four", true, "Les années se lisent par paires de chiffres."],
      ["one thousand nine hundred eighty-four", false, "Lecture d'un nombre, pas d'une année."],
      ["nineteen eight four", false, "Forme incorrecte : la seconde paire se lit comme un nombre, eighty-four."],
      ["one nine eight four", false, "Lecture chiffre par chiffre, réservée aux numéros de téléphone."],
    ], "Une année se lit par paires : 19 / 84, nineteen eighty-four.", "Années : par paires de chiffres (nineteen eighty-four).", [
      "Une année se lit-elle comme un nombre ordinaire ?",
      "On découpe en deux paires.",
      "19 et 84.",
    ]),
    E("B-EN-NUM-002", S, "en.num.dates", 2, "In British English, the date written « 3/5/2027 » is read:", [
      ["the third of May twenty twenty-seven", true, "En britannique, le jour vient en premier : 3 mai."],
      ["March the fifth twenty twenty-seven", false, "Lecture américaine (mois en premier), pas britannique."],
      ["the three of May twenty twenty-seven", false, "Il faut l'ordinal third, pas le cardinal three."],
      ["the third of March twenty twenty-seven", false, "Le 5 n'est pas le jour ; c'est le mois de mai."],
    ], "Au Royaume-Uni : jour / mois / année. 3/5 = 3 mai, lu avec un ordinal : the third of May.", "GB : jour/mois ; US : mois/jour ; on lit le jour avec un ordinal.", [
      "Dans quel ordre le Royaume-Uni écrit-il les dates ?",
      "Le premier nombre est le jour.",
      "Le jour se lit avec un ordinal.",
    ], { a: "regle" }),
    E("B-EN-NUM-003", S, "en.num.dates", 1, "Choose the correct way to write « le 22 juin »:", [
      ["June 22nd", true, "22 se termine par 2 : suffixe -nd."],
      ["June 22th", false, "Les nombres finissant par 2 (sauf 12) prennent -nd."],
      ["June 22st", false, "-st est réservé aux nombres finissant par 1 (sauf 11)."],
      ["June 22rd", false, "-rd est réservé aux nombres finissant par 3 (sauf 13)."],
    ], "Ordinaux : 1st, 2nd, 3rd, puis -th, sauf 21st, 22nd, 23rd, 31st. Donc 22nd.", "…1 → -st, …2 → -nd, …3 → -rd (sauf 11, 12, 13) ; sinon -th.", [
      "Quel est le dernier chiffre de 22 ?",
      "Pense à second.",
      "Second → -nd.",
    ], { a: "formules" }),
    E("B-EN-NUM-004", S, "en.num.big", 2, "How do you write « 2,5 millions d'euros » in English?", [
      ["2.5 million euros", true, "Point décimal, million sans -s ni of après un nombre."],
      ["2,5 millions euros", false, "Virgule décimale française et -s fautif."],
      ["2.5 millions euros", false, "Million ne prend pas de -s après un nombre."],
      ["2.5 millions of euros", false, "Pas de -s ni de of après un nombre précis."],
    ], "En anglais : point décimal, et million invariable après un nombre : 2.5 million euros.", "Après un nombre : million, hundred, thousand restent invariables.", [
      "Quel signe sépare les décimales en anglais ?",
      "Million prend-il un -s après un nombre ?",
      "Et faut-il of ?",
    ], { a: "exemple" }),
    E("B-EN-NUM-005", S, "en.num.decimals", 2, "How is « 0.75 » read?", [
      ["zero point seven five", true, "Après le point, on lit les chiffres un par un."],
      ["zero point seventy-five", false, "Erreur classique : les décimales se lisent chiffre par chiffre."],
      ["zero comma seven five", false, "L'anglais utilise un point, pas une virgule."],
      ["zero comma seventy-five", false, "Deux erreurs : virgule et lecture en nombre."],
    ], "0.75 se lit zero point seven five (ou point seven five, nought point seven five).", "Décimales : point + chiffres un par un.", [
      "Quel signe sépare la partie entière ?",
      "Comment lit-on les chiffres après ce signe ?",
      "Un par un.",
    ], { a: "erreur" }),
    E("B-EN-NUM-006", S, "en.num.fractions", 2, "How do you say the fraction 3/4?", [
      ["three quarters", true, "3/4 = three quarters."],
      ["three fourth", false, "Il manque le -s : le dénominateur se met au pluriel quand le numérateur dépasse 1."],
      ["three on four", false, "Calque de « trois sur quatre »."],
      ["third four", false, "Inversion et forme incorrecte."],
    ], "1/4 = a quarter, 3/4 = three quarters (le dénominateur prend -s).", "Fractions : numérateur cardinal + dénominateur ordinal (+ -s si plus de 1).", [
      "Comment dit-on 1/4 ?",
      "Il y en a trois.",
      "Le dénominateur prend la marque du pluriel.",
    ]),
    E("B-EN-NUM-007", S, "en.num.big", 1, "How do you read « 3,000,000 people »?", [
      ["three million people", true, "Million invariable après un nombre."],
      ["three millions people", false, "Million ne prend pas de -s après un nombre."],
      ["three millions of people", false, "Ni -s ni of après un nombre précis."],
      ["three million of people", false, "Pas de of après un nombre précis."],
    ], "Après un nombre précis, million reste invariable et se construit sans of : three million people.", "three million people ; millions of people (sans nombre).", [
      "Million prend-il un -s ici ?",
      "Faut-il of après un nombre précis ?",
      "Ni l'un ni l'autre.",
    ]),
    E("B-EN-NUM-008", S, "en.num.big", 2, "How do you say « 350 » in British English?", [
      ["three hundred and fifty", true, "En britannique : and après hundred."],
      ["three hundreds and fifty", false, "Hundred ne prend pas de -s après un nombre."],
      ["three hundreds fifty", false, "Hundred invariable, et and manque en britannique."],
      ["thirty-five hundred", false, "Thirty-five hundred = 3 500."],
    ], "350 = three hundred and fifty en anglais britannique (three hundred fifty en américain).", "hundred invariable ; and avant les dizaines (GB).", [
      "Hundred prend-il un -s ?",
      "Le britannique ajoute un petit mot.",
      "Three hundred + and + fifty.",
    ]),
    E("B-EN-NUM-009", S, "en.num.time", 2, "In everyday British English, how do you say the time « 14:45 »?", [
      ["a quarter to three", true, "Après la demie, on compte ce qui manque avant l'heure suivante."],
      ["three less a quarter", false, "Calque de « trois heures moins le quart »."],
      ["a quarter past two", false, "A quarter past two = 14 h 15."],
      ["a quarter to two", false, "A quarter to two = 13 h 45."],
    ], "14:45 = trois heures moins le quart : a quarter to three.", "past jusqu'à la demie ; to ensuite.", [
      "On est avant ou après la demie ?",
      "Après la demie, on utilise to.",
      "Il manque un quart d'heure avant 15 h.",
    ], { a: "exemple" }),
    E("B-EN-NUM-010", S, "en.num.time", 1, "How do you say the time « 8:30 » in standard English?", [
      ["half past eight", true, "8:30 = half past eight."],
      ["eight and a half", false, "Se dit d'une quantité (huit et demi), pas d'une heure."],
      ["half to eight", false, "Forme inexistante en anglais."],
      ["half past nine", false, "Half past nine = 9 h 30."],
    ], "La demie se dit half past + heure écoulée : half past eight.", "8:30 = half past eight.", [
      "La demie se construit avec past ou to ?",
      "On part de l'heure écoulée.",
      "Huit heures passées d'une demi-heure.",
    ]),
    E("B-EN-NUM-011", S, "en.num.money", 2, "How do you read the price « £4.50 »?", [
      ["four pounds fifty", true, "Livres puis pence, sans lire le point."],
      ["four fifty pounds", false, "Ordre incorrect : pounds suit la partie en livres."],
      ["four point fifty pounds", false, "On ne lit pas le point dans une somme d'argent."],
      ["fifty pounds four", false, "Ordre absurde."],
    ], "Le symbole s'écrit avant mais se lit après les livres : four pounds fifty.", "£4.50 = four pounds fifty ; $2.99 = two dollars ninety-nine.", [
      "Le symbole £ se lit-il avant ou après le nombre ?",
      "On ne lit pas le point.",
      "Livres, puis pence.",
    ], { r: true }),
    E("B-EN-NUM-012", S, "en.num.big", 3, "A report says that a company is worth « 1.5 billion dollars ». In French, this means:", [
      ["1,5 milliard de dollars", true, "Billion = milliard (10 puissance 9)."],
      ["1,5 billion de dollars", false, "Le billion français vaut mille milliards : c'est un trillion en anglais."],
      ["1,5 million de dollars", false, "Million se dit million en anglais."],
      ["15 milliards de dollars", false, "Erreur de lecture du point décimal."],
    ], "L'anglais billion correspond au milliard français. Point décimal : 1.5 = 1,5.", "billion = milliard ; trillion = billion français (mille milliards).", [
      "Billion est un faux-ami.",
      "Combien de zéros dans un billion anglais ?",
      "Neuf zéros : le milliard.",
    ], { r: true }),
  ],
};
