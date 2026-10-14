import { E, skill, type EnPart } from "./common";

const S = "en.determiners";

export const DETERMINERS: EnPart = {
  skill: skill(S, "Grammaire", "Articles et quantifieurs", ["article", "a", "an", "the", "zero article", "much", "many", "few", "little", "some", "any", "each", "every", "denombrable", "indenombrable", "countable", "uncountable"]),
  lesson: {
    skillId: S,
    title: "Articles, dénombrables et quantifieurs",
    objectives: ["Choisir entre a, an, the et l'absence d'article", "Reconnaître les noms indénombrables", "Employer much, many, few, little, some, any, each et every"],
    regle:
      "Un / une se dit a devant un son consonne et an devant un son voyelle : a university (son « you »), a European country, an hour (h muet), an MBA. Contrairement au français, on met a devant un nom de métier : She is an engineer.\n\n" +
      "The désigne quelque chose de précis, déjà connu ou unique : the sun, the report I sent you. L'article zéro s'emploie pour les généralités avec un pluriel ou un indénombrable : Unemployment has fallen. Students need sleep. Life is short. Le français met « le, la, les » dans ces cas, d'où le calque fréquent « the unemployment ». Pas d'article non plus devant les repas, les langues, la plupart des pays, et dans by bus, by car, at school, in bed. Mais the United States, the United Kingdom, the Netherlands.\n\n" +
      "Dénombrables et indénombrables : certains noms sont indénombrables en anglais alors qu'ils se comptent en français. Ils ne prennent ni a ni pluriel : information, advice, news (singulier), furniture, luggage, baggage, equipment, research, homework, evidence, progress, knowledge, travel. Pour en compter un : a piece of advice, an item of news.\n\n" +
      "Quantifieurs. Many, a few, few + dénombrable pluriel ; much, a little, little + indénombrable. A lot of convient aux deux. A few / a little = un peu, quelques (idée positive) ; few / little = peu (idée négative, insuffisant). Some en phrase affirmative et dans les offres ou demandes polies ; any en phrase négative et interrogative.\n\n" +
      "Each (chaque, pris un par un) et every (tous sans exception) sont suivis d'un nom singulier. Seul each admet of : each of the students ; on ne dit jamais « every of ».",
    formules:
      "a + son consonne : a university, a one-way ticket\n" +
      "an + son voyelle : an hour, an honest man, an MBA\n" +
      "a / an devant un métier : She is a lawyer\n" +
      "généralité : pas d'article (Life, Unemployment, Students)\n" +
      "indénombrables : information, advice, news, furniture, luggage, equipment, research, homework, evidence, progress\n" +
      "many / a few / few + pluriel ; much / a little / little + indénombrable\n" +
      "a few / a little = quelques, un peu ; few / little = peu\n" +
      "each / every + singulier ; each of the + pluriel",
    methode:
      "1. Le nom est-il dénombrable ou indénombrable en anglais ? (information, advice, luggage : indénombrables.)\n" +
      "2. Le sens est-il général ou précis ? Général : pas d'article.\n" +
      "3. Pour un quantifieur, croise dénombrable / indénombrable et sens positif / négatif.\n" +
      "4. Pour a ou an, prononce le mot suivant : c'est le son qui compte, pas la lettre.",
    exemple:
      "« Very ___ people came to the meeting, so we cancelled it. » People est un pluriel dénombrable : few ou many. Le contexte (on a annulé) indique un nombre insuffisant : few, renforcé par very. Little irait avec un indénombrable.\n\n" +
      "« Could you give me ___ about the course? » Information est indénombrable : ni an information, ni informations. Réponse : some information.",
    erreur:
      "✗ She is engineer → ✓ She is an engineer\n" +
      "✗ The unemployment is rising → ✓ Unemployment is rising\n" +
      "✗ an information, informations → ✓ some information, a piece of information\n" +
      "✗ an advice → ✓ some advice, a piece of advice\n" +
      "✗ much people → ✓ many people\n" +
      "✗ every of the students → ✓ each of the students",
    approfondir:
      "Ne confonds pas a little (un peu, suffisant) et little (peu, pas assez) : I have a little time = j'ai un peu de temps ; I have little time = je n'ai guère de temps.\n\n" +
      "Less + indénombrable, fewer + pluriel en anglais soigné : less money, fewer mistakes.\n\n" +
      "Gestion du temps : mémorise la liste des indénombrables pièges ; elle suffit à résoudre la moitié des questions de ce type en quelques secondes.",
    cards: [
      ["Un conseil", "a piece of advice (advice est indénombrable)", true],
      ["Elle est avocate", "She is a lawyer", true],
      ["few / a few", "peu (négatif) / quelques (positif)", false],
      ["Le chômage baisse", "Unemployment is falling (pas d'article)", true],
      ["Combien de bagages ?", "How much luggage?", true],
    ],
  },
  questions: [
    E("B-EN-DET-001", S, "en.det.articles", 1, "Complete the sentence: « After her degree, my sister became ___ engineer. »", [
      ["an", true, "Article indéfini obligatoire devant un métier, an devant un son voyelle."],
      ["a", false, "A devant un son voyelle (engineer) est incorrect."],
      ["no article", false, "Calque du français « elle est devenue ingénieure » : l'anglais exige l'article."],
      ["some", false, "Some ne s'emploie pas devant un nom singulier dénombrable de métier."],
    ], "L'anglais met un article indéfini devant un métier ; engineer commence par un son voyelle : an engineer.", "a / an + métier ; an devant un son voyelle.", [
      "Le français met-il un article devant un métier après devenir ?",
      "L'anglais, lui, en exige un.",
      "Engineer commence par un son voyelle.",
    ]),
    E("B-EN-DET-002", S, "en.det.articles", 2, "Choose the correct sentence about the job market.", [
      ["Unemployment has fallen this year.", true, "Notion générale : pas d'article."],
      ["The unemployment has fallen this year.", false, "Calque du français « le chômage » : pas de the pour une notion générale."],
      ["An unemployment has fallen this year.", false, "Unemployment est indénombrable : pas de an."],
      ["A unemployment has fallen this year.", false, "Ni a ni an devant un indénombrable."],
    ], "Unemployment désigne une notion générale et indénombrable : l'anglais n'emploie aucun article.", "Généralité avec un indénombrable ou un pluriel : article zéro.", [
      "Le chômage est-il pris dans un sens général ou précis ?",
      "Le français met « le », l'anglais non.",
      "Notion générale : pas d'article.",
    ], { a: "erreur" }),
    E("B-EN-DET-003", S, "en.det.articles", 1, "Complete the sentence: « I usually go to work ___ bus, but today I walked. »", [
      ["by", true, "By + moyen de transport, sans article."],
      ["by the", false, "Pas d'article dans la locution by bus."],
      ["with the", false, "Calque de « avec le bus »."],
      ["with", false, "With ne s'emploie pas pour un moyen de transport."],
    ], "Moyen de transport : by + nom sans article (by bus, by car, by train).", "by bus / by car / by plane : sans article.", [
      "Quel mot introduit un moyen de transport ?",
      "Cette locution n'a pas d'article.",
      "By + nom seul.",
    ]),
    E("B-EN-DET-004", S, "en.det.uncountable", 2, "Complete the sentence: « Could you give me ___ about the summer programme? »", [
      ["some information", true, "Information est indénombrable : some information."],
      ["an information", false, "Information est indénombrable : pas d'article a / an."],
      ["some informations", false, "Information ne prend jamais de -s."],
      ["many informations", false, "Many et le pluriel sont impossibles avec un indénombrable."],
    ], "Information est indénombrable en anglais : ni an, ni -s. On dit some information ou a piece of information.", "information, advice, news, luggage : indénombrables.", [
      "Information est-il dénombrable en anglais ?",
      "Un indénombrable n'a ni a ni pluriel.",
      "Il reste une seule option correcte.",
    ], { a: "exemple" }),
    E("B-EN-DET-005", S, "en.det.uncountable", 2, "Complete the sentence: « Before the interview, my tutor gave me ___ advice. »", [
      ["a piece of", true, "Advice est indénombrable : a piece of advice."],
      ["an", false, "Advice est indénombrable : pas de an."],
      ["a", false, "Advice est indénombrable : pas de a."],
      ["many", false, "Many s'emploie avec un pluriel dénombrable."],
    ], "Pour compter un indénombrable comme advice, on passe par a piece of.", "Un conseil = a piece of advice.", [
      "Advice se compte-t-il en anglais ?",
      "Comment isoler une unité d'un indénombrable ?",
      "Utilise l'expression « un morceau de ».",
    ]),
    E("B-EN-DET-006", S, "en.det.quantifiers", 1, "Complete the sentence: « I don't have ___ money left after paying the rent. »", [
      ["much", true, "Much + indénombrable dans une phrase négative."],
      ["many", false, "Many s'emploie avec un pluriel dénombrable ; money est indénombrable."],
      ["a few", false, "A few s'emploie avec un pluriel dénombrable."],
      ["few", false, "Few s'emploie avec un pluriel dénombrable."],
    ], "Money est indénombrable : much (ou any) dans une phrase négative.", "much + indénombrable ; many + pluriel.", [
      "Money est-il dénombrable ?",
      "Indénombrable : much ou little.",
      "La phrase est négative.",
    ]),
    E("B-EN-DET-007", S, "en.det.quantifiers", 2, "Complete the sentence: « Very ___ people came to the meeting, so we cancelled it. »", [
      ["few", true, "Few + pluriel : peu, nombre insuffisant."],
      ["little", false, "Little s'emploie avec un indénombrable ; people est un pluriel."],
      ["less", false, "Less s'emploie avec un indénombrable ; on dirait fewer people."],
      ["much", false, "Much s'emploie avec un indénombrable."],
    ], "People est un pluriel dénombrable ; le sens est négatif (on a annulé) : very few people.", "few + pluriel = peu ; little + indénombrable = peu.", [
      "People est-il pluriel ?",
      "Le sens est-il positif ou négatif ?",
      "Peu + pluriel.",
    ], { a: "exemple" }),
    E("B-EN-DET-008", S, "en.det.quantifiers", 2, "Complete the sentence: « I've got ___ friends in Montreal, so I won't feel lonely there. »", [
      ["a few", true, "A few + pluriel : quelques, idée positive."],
      ["few", false, "Few signifie « peu, pas assez », ce qui contredit « I won't feel lonely »."],
      ["a little", false, "A little s'emploie avec un indénombrable."],
      ["little", false, "Little s'emploie avec un indénombrable et a un sens négatif."],
    ], "Friends est pluriel et le sens est positif (je ne serai pas seul) : a few friends.", "a few = quelques (positif) ; few = peu (négatif).", [
      "Friends est-il dénombrable ?",
      "Le sens de la phrase est-il positif ou négatif ?",
      "Quantité positive avec un pluriel.",
    ], { a: "approfondir" }),
    E("B-EN-DET-009", S, "en.det.someany", 1, "Complete the question: « Is there ___ milk left in the fridge? »", [
      ["any", true, "Any dans une question avec un indénombrable."],
      ["many", false, "Many s'emploie avec un pluriel ; milk est indénombrable."],
      ["a few", false, "A few s'emploie avec un pluriel."],
      ["few", false, "Few s'emploie avec un pluriel."],
    ], "Question neutre portant sur un indénombrable : any milk.", "any : questions et négations ; some : affirmations et offres.", [
      "Milk est-il dénombrable ?",
      "La phrase est une question.",
      "Le déterminant des questions neutres.",
    ]),
    E("B-EN-DET-010", S, "en.det.each", 2, "Complete the sentence: « ___ of the students received a certificate at the end of the course. »", [
      ["Each", true, "Each of the + pluriel : chacun des."],
      ["Every", false, "Every n'est jamais suivi de of."],
      ["Whole", false, "Whole s'emploie avec the + singulier (the whole class), pas avec of the students."],
      ["Much", false, "Much s'emploie avec un indénombrable."],
    ], "Seul each se construit avec of : each of the students.", "each of the + pluriel ; every + singulier, jamais every of.", [
      "Le blanc est suivi de of the students.",
      "Each et every : lequel accepte of ?",
      "Every of n'existe pas.",
    ], { a: "formules" }),
    E("B-EN-DET-011", S, "en.det.uncountable", 3, "Complete the question: « How ___ luggage are you taking on the plane? »", [
      ["much", true, "Luggage est indénombrable : how much."],
      ["many", false, "Calque de « combien de bagages » : luggage est indénombrable."],
      ["a lot", false, "How a lot n'existe pas."],
      ["few", false, "How few est incorrect ici et few s'emploie avec un pluriel."],
    ], "Luggage (comme baggage) est indénombrable en anglais : how much luggage.", "luggage, furniture, equipment : indénombrables → much.", [
      "Le français met « bagages » au pluriel. Et l'anglais ?",
      "Luggage est indénombrable.",
      "Indénombrable : how much.",
    ], { r: true }),
    E("B-EN-DET-012", S, "en.det.articles", 3, "Complete the sentence: « She has ___ hour to finish the test, so she needs ___ useful strategy. »", [
      ["an / a", true, "An hour (h muet, son voyelle) ; a useful (son « you », consonne)."],
      ["a / an", false, "Inversion : c'est le son, pas la lettre, qui décide."],
      ["an / an", false, "Useful commence par un son consonne : a useful."],
      ["a / a", false, "Hour commence par un son voyelle (h muet) : an hour."],
    ], "Le choix entre a et an dépend du son : hour se prononce avec un h muet (an), useful commence par le son « you » (a).", "a / an : on écoute le son, pas la lettre.", [
      "Prononce hour et useful à voix haute.",
      "Le h de hour se prononce-t-il ?",
      "Useful commence par le son « you ».",
    ], { r: true }),
  ],
};
