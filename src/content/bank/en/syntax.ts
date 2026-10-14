import { E, skill, type EnPart } from "./common";

const S = "en.syntax";

export const SYNTAX: EnPart = {
  skill: skill(S, "Grammaire", "Syntaxe, questions et connecteurs", ["syntax", "syntaxe", "word order", "question tag", "inversion", "so such", "too enough", "linking words", "connecteurs", "although", "despite", "however", "whereas"]),
  lesson: {
    skillId: S,
    title: "Ordre des mots, question tags, inversions et connecteurs",
    objectives: ["Construire une question et un question tag", "Employer l'inversion après never, rarely, seldom", "Distinguer so / such et too / enough", "Choisir le bon connecteur logique"],
    prerequisites: ["en.tenses"],
    regle:
      "Ordre des mots. Affirmation : sujet + verbe + complément, sans séparer le verbe de son complément. Les adverbes de fréquence (always, often, never, usually) se placent avant le verbe lexical mais après be : She always arrives on time ; she is always late. Question : auxiliaire + sujet + verbe ; avec un verbe simple, on ajoute do, does, did, et le verbe reste à la base : Where does your brother work? Quand le mot interrogatif est sujet, pas de do : Who broke the window?\n\n" +
      "Question tags : on reprend l'auxiliaire de la phrase (ou do), à la forme inverse, avec un pronom. She works in a bank, doesn't she? You haven't seen my keys, have you? Cas particuliers : I am… aren't I? ; Let's… shall we?\n\n" +
      "Inversion après un adverbe négatif ou restrictif placé en tête (never, rarely, seldom, hardly, not only, at no time) : on inverse comme dans une question. Never have I seen such a sunset. Rarely has the government faced such criticism. Not only did she win, but she also broke the record.\n\n" +
      "So / such : so + adjectif ou adverbe (so boring) ; such + (a) + adjectif + nom (such a boring film, such good news). Too / enough : too + adjectif (trop) ; adjectif + enough (assez), enough se place après l'adjectif mais avant le nom (old enough, enough money).\n\n" +
      "Connecteurs. Concession : although / even though + proposition (although it rained) ; despite / in spite of + nom ou -ing (despite the rain, despite being tired), jamais « despite of ». However (cependant) relie deux phrases, avec ponctuation : It was cheap. However, it broke. Opposition : whereas, while (alors que). Cause : because + proposition, because of + nom. Conséquence : so (donc), therefore (par conséquent). Condition : unless (sauf si). But : in order to, so that.",
    formules:
      "question : (mot interrogatif) + auxiliaire + sujet + base verbale\n" +
      "tag : auxiliaire inversé + pronom (doesn't she? / have you?)\n" +
      "I am…, aren't I? ; Let's…, shall we?\n" +
      "Never / Rarely / Seldom + auxiliaire + sujet + verbe\n" +
      "so + adjectif ; such (a) + adjectif + nom\n" +
      "too + adjectif ; adjectif + enough ; enough + nom\n" +
      "although + proposition ; despite / in spite of + nom ou -ing\n" +
      "however : en début de phrase, suivi d'une virgule\n" +
      "whereas / while : opposition entre deux faits\n" +
      "because + proposition ; because of + nom",
    methode:
      "1. Regarde ce qui suit le blanc : une proposition (sujet + verbe) ou un nom ?\n" +
      "2. Proposition → although, because, whereas ; nom ou -ing → despite, because of.\n" +
      "3. Adverbe négatif en tête de phrase → cherche l'inversion auxiliaire + sujet.\n" +
      "4. Pour un tag, repère l'auxiliaire de la phrase et inverse la polarité.",
    exemple:
      "« ___ the rain, the match went ahead. » Le blanc est suivi d'un nom (the rain), pas d'une proposition : despite ou in spite of. Although exigerait un sujet et un verbe (although it was raining). Despite of n'existe pas.\n\n" +
      "« Rarely ___ such a strong reaction from the public. » Rarely en tête de phrase impose l'inversion : Rarely has the government faced…",
    erreur:
      "✗ Where your brother works? → ✓ Where does your brother work?\n" +
      "✗ She works here, isn't it? → ✓ She works here, doesn't she?\n" +
      "✗ Never I have seen → ✓ Never have I seen\n" +
      "✗ It was so a boring film → ✓ It was such a boring film\n" +
      "✗ He isn't enough old → ✓ He isn't old enough\n" +
      "✗ Despite of the rain / Although the rain → ✓ Despite the rain",
    approfondir:
      "Isn't it? ne remplace pas tous les tags comme « n'est-ce pas ? » : il ne convient qu'après une phrase avec it is.\n\n" +
      "In spite of et despite sont synonymes ; in spite of garde of, despite jamais.\n\n" +
      "Gestion du temps : pour les connecteurs, regarde uniquement la nature du mot qui suit le blanc (nom ou proposition) : cela élimine la moitié des options sans même traduire.",
    cards: [
      ["Malgré la pluie", "Despite the rain / In spite of the rain", true],
      ["Bien qu'il pleuve", "Although it is raining", true],
      ["Jamais je n'ai vu (inversion)", "Never have I seen", true],
      ["un film si ennuyeux", "such a boring film", true],
      ["Assez âgé", "old enough", true],
    ],
  },
  questions: [
    E("B-EN-SYN-001", S, "en.syn.tags", 1, "Complete the sentence: « Your sister works in a bank, ___? »", [
      ["doesn't she", true, "Présent simple affirmatif : tag avec doesn't + pronom."],
      ["isn't she", false, "La phrase ne contient pas be : il faut reprendre do."],
      ["isn't it", false, "Calque de « n'est-ce pas » : le tag reprend l'auxiliaire et le sujet."],
      ["does she", false, "Phrase affirmative : le tag doit être négatif."],
    ], "Works (présent simple, 3e personne) → auxiliaire does ; phrase affirmative → tag négatif : doesn't she?", "Tag = auxiliaire de la phrase, polarité inverse, pronom sujet.", [
      "Quel auxiliaire se cache derrière works ?",
      "La phrase est affirmative.",
      "Le tag est négatif, avec le pronom she.",
    ]),
    E("B-EN-SYN-002", S, "en.syn.tags", 2, "Complete the sentence: « You haven't seen my car keys, ___? »", [
      ["have you", true, "Phrase négative au present perfect : tag positif avec have."],
      ["haven't you", false, "Phrase négative : le tag doit être positif."],
      ["did you", false, "L'auxiliaire de la phrase est have, pas did."],
      ["do you", false, "L'auxiliaire de la phrase est have, pas do."],
    ], "Haven't seen → auxiliaire have, phrase négative → tag positif : have you?", "Phrase négative → tag positif.", [
      "Quel est l'auxiliaire de la phrase ?",
      "La phrase est-elle positive ou négative ?",
      "Inverse la polarité.",
    ]),
    E("B-EN-SYN-003", S, "en.syn.order", 1, "Choose the correct question.", [
      ["Where does your brother work?", true, "Mot interrogatif + does + sujet + base verbale."],
      ["Where your brother works?", false, "Calque de la question française familière : il manque l'auxiliaire."],
      ["Where works your brother?", false, "L'inversion directe du verbe lexical est impossible en anglais moderne."],
      ["Where does your brother works?", false, "Après does, le verbe reste à la base : work."],
    ], "Question au présent simple : Where + does + sujet + base verbale.", "Question : auxiliaire + sujet + base verbale.", [
      "Une question au présent simple a besoin d'un auxiliaire.",
      "Lequel, à la 3e personne ?",
      "Après does, le verbe perd son -s.",
    ], { a: "erreur" }),
    E("B-EN-SYN-004", S, "en.syn.order", 2, "Choose the grammatically correct sentence about punctuality.", [
      ["She always arrives on time.", true, "Adverbe de fréquence avant le verbe lexical."],
      ["She arrives always on time.", false, "Calque du français : l'adverbe ne se place pas entre le verbe et son complément."],
      ["Always she arrives on time.", false, "Always ne se place pas en tête dans une phrase affirmative neutre."],
      ["She always arrive on time.", false, "Oubli du -s de la 3e personne."],
    ], "Always se place avant le verbe lexical (mais après be) : She always arrives.", "Adverbe de fréquence : avant le verbe lexical, après be.", [
      "Où se place un adverbe de fréquence ?",
      "Il ne sépare pas le verbe de son complément.",
      "Vérifie aussi l'accord du verbe.",
    ]),
    E("B-EN-SYN-005", S, "en.syn.inversion", 2, "Complete the sentence: « Never ___ such a beautiful sunset. »", [
      ["have I seen", true, "Never en tête : inversion auxiliaire + sujet."],
      ["I have seen", false, "Ordre normal impossible après never en tête de phrase."],
      ["I saw", false, "Ordre normal impossible après never en tête de phrase."],
      ["have seen I", false, "Le sujet se place entre l'auxiliaire et le participe."],
    ], "Un adverbe négatif en tête impose l'ordre interrogatif : Never have I seen.", "Never / Rarely / Seldom en tête → auxiliaire + sujet + verbe.", [
      "Quel mot ouvre la phrase ?",
      "Il entraîne une inversion.",
      "Ordre de question : auxiliaire + sujet + participe.",
    ], { a: "formules" }),
    E("B-EN-SYN-006", S, "en.syn.inversion", 3, "Complete the sentence: « Rarely ___ such a strong reaction from the public. »", [
      ["has the government faced", true, "Rarely en tête : inversion auxiliaire + sujet."],
      ["the government has faced", false, "Ordre normal impossible après rarely en tête."],
      ["has faced the government", false, "Le sujet doit suivre l'auxiliaire, pas le participe."],
      ["did the government faced", false, "Après did, le verbe reste à la base."],
    ], "Rarely en tête de phrase déclenche l'inversion : Rarely has the government faced…", "Adverbe restrictif en tête → inversion comme dans une question.", [
      "Quel adverbe ouvre la phrase ?",
      "Il fonctionne comme never.",
      "Auxiliaire + sujet + participe.",
    ], { a: "exemple", r: true }),
    E("B-EN-SYN-007", S, "en.syn.sosuch", 2, "Complete the sentence: « It was ___ a boring film that I fell asleep. »", [
      ["such", true, "Such + a + adjectif + nom."],
      ["so", false, "So se place devant un adjectif seul (so boring), pas devant a + nom."],
      ["too", false, "Too ne se construit pas avec a + adjectif + nom ni avec that."],
      ["very", false, "Very ne se construit pas avec a… that pour exprimer la conséquence."],
    ], "Devant a + adjectif + nom, on emploie such : such a boring film that…", "so + adjectif ; such (a) + adjectif + nom.", [
      "Que suit le blanc : un adjectif seul ou a + nom ?",
      "So et such ne se placent pas devant les mêmes groupes.",
      "Devant un article : such.",
    ]),
    E("B-EN-SYN-008", S, "en.syn.tooenough", 1, "Complete the sentence: « He isn't ___ to vote; he's only sixteen. »", [
      ["old enough", true, "Adjectif + enough."],
      ["enough old", false, "Enough se place après l'adjectif."],
      ["too old", false, "Sens contraire : il est trop jeune, pas trop vieux."],
      ["so old", false, "So old to vote n'est pas une construction correcte."],
    ], "Il n'a pas l'âge suffisant : old enough, enough se plaçant après l'adjectif.", "adjectif + enough ; enough + nom.", [
      "On veut dire « assez âgé ».",
      "Où se place enough par rapport à l'adjectif ?",
      "Après l'adjectif.",
    ]),
    E("B-EN-SYN-009", S, "en.syn.tooenough", 2, "Complete the sentence: « The coffee was ___ hot to drink, so I waited five minutes. »", [
      ["too", true, "Too + adjectif + to : trop… pour."],
      ["enough", false, "Enough se place après l'adjectif et le sens serait inverse."],
      ["such", false, "Such ne s'emploie pas devant un adjectif seul."],
      ["much", false, "Much ne modifie pas un adjectif simple."],
    ], "Il a attendu parce que le café était trop chaud : too hot to drink.", "too + adjectif + to + base verbale = trop… pour.", [
      "Pourquoi le locuteur a-t-il attendu ?",
      "On veut dire « trop chaud pour ».",
      "Too + adjectif.",
    ]),
    E("B-EN-SYN-010", S, "en.syn.linking", 2, "Complete the sentence: « ___ the heavy rain, the match went ahead as planned. »", [
      ["Despite", true, "Despite + nom."],
      ["Although", false, "Although est suivi d'une proposition (sujet + verbe), pas d'un nom seul."],
      ["Despite of", false, "Despite ne prend jamais of."],
      ["However", false, "However relie deux phrases et ne se place pas devant un nom."],
    ], "Le blanc est suivi d'un nom (the heavy rain) : despite (ou in spite of).", "despite / in spite of + nom ; although + proposition.", [
      "Qu'est-ce qui suit le blanc : un nom ou une proposition ?",
      "Un nom seul exclut although.",
      "Attention à la préposition en trop.",
    ], { a: "exemple" }),
    E("B-EN-SYN-011", S, "en.syn.linking", 1, "Complete the sentence: « ___ she was exhausted, she finished the report before midnight. »", [
      ["Although", true, "Although + proposition (sujet + verbe)."],
      ["Despite", false, "Despite se construit avec un nom ou un -ing, pas avec une proposition."],
      ["In spite of", false, "In spite of se construit avec un nom ou un -ing."],
      ["However", false, "However ne peut pas introduire une subordonnée suivie d'une principale."],
    ], "Le blanc est suivi d'une proposition complète (she was exhausted) : although.", "although / even though + sujet + verbe.", [
      "Qu'est-ce qui suit le blanc ?",
      "Une proposition complète avec sujet et verbe.",
      "Le connecteur de concession qui accepte une proposition.",
    ]),
    E("B-EN-SYN-012", S, "en.syn.linking", 3, "Complete the sentence: « My sister loves big cities, ___ I prefer the peace of the countryside. »", [
      ["whereas", true, "Whereas : opposition entre deux faits, au sein de la même phrase."],
      ["however", false, "However relie deux phrases distinctes (point ou point-virgule), pas deux propositions séparées par une virgule."],
      ["despite", false, "Despite se construit avec un nom, pas avec une proposition."],
      ["unless", false, "Unless exprime une condition (sauf si), pas une opposition."],
    ], "On oppose deux préférences dans une même phrase : whereas (ou while).", "whereas / while = alors que (opposition) ; however entre deux phrases.", [
      "Quelle relation entre les deux propositions ?",
      "Il s'agit d'une opposition.",
      "Le connecteur doit relier deux propositions dans la même phrase.",
    ], { r: true }),
  ],
};
