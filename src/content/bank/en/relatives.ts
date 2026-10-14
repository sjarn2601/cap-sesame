import { E, skill, type EnPart } from "./common";

const S = "en.relatives";

export const RELATIVES: EnPart = {
  skill: skill(S, "Grammaire", "Pronoms relatifs", ["relative", "relatif", "who", "which", "that", "whose", "what", "whom", "where", "when"]),
  lesson: {
    skillId: S,
    title: "Les pronoms relatifs",
    objectives: ["Choisir entre who, which, that, whose et what", "Distinguer relative déterminative et relative explicative", "Employer where, when et whom"],
    regle:
      "Le pronom relatif dépend de l'antécédent (le mot qu'il reprend) et de sa fonction dans la relative.\n\n" +
      "Who : antécédent humain (The woman who lives next door). Which : antécédent non humain (The laptop which I bought). That : humain ou non humain, uniquement dans une relative déterminative. Whose : possession, pour les personnes comme pour les choses (The student whose project won ; a company whose profits rose) ; attention à l'homophone who's = who is. Whom : forme complément de who, soutenue, obligatoire juste après une préposition (the person to whom you should write).\n\n" +
      "Relative déterminative : elle est indispensable pour identifier l'antécédent, sans virgules. The students who passed will receive a certificate (seulement ceux qui ont réussi). Le pronom complément peut y être omis : The book (that) I'm reading.\n\n" +
      "Relative explicative : elle ajoute une information accessoire, entre virgules. My brother, who lives in Leeds, is a nurse. Dans ce cas, that est interdit et le pronom ne peut jamais être omis.\n\n" +
      "Which peut reprendre toute une proposition, après une virgule : He failed the exam, which surprised everyone (ce qui).\n\n" +
      "What signifie « ce que, ce qui » et n'a pas d'antécédent : What I need is sleep. On ne dit jamais « the thing what » ni « everything what » : après all, everything, something, on emploie that ou rien.\n\n" +
      "Where (lieu) et when (moment) remplacent une préposition + which : the hotel where we stayed (= in which we stayed), the day when we met. Attention : where ne peut pas être complément d'objet d'un verbe transitif. The city which I visited (visit something), mais the city where I lived.",
    formules:
      "who : personne, sujet ou complément\n" +
      "whom : personne, après une préposition (soutenu)\n" +
      "which : chose ou animal ; reprend une proposition après une virgule (ce qui)\n" +
      "that : personne ou chose, relative déterminative seulement\n" +
      "whose + nom : possession (dont le, dont la)\n" +
      "what : ce que, ce qui (pas d'antécédent)\n" +
      "where : lieu (= in / at which) ; when : moment\n" +
      "virgules = relative explicative = pas de that, pas d'omission",
    methode:
      "1. Repère l'antécédent : personne, chose, lieu, moment, ou aucun ?\n" +
      "2. Vérifie s'il y a des virgules : si oui, that est exclu.\n" +
      "3. Regarde ce qui suit le blanc : un nom sans article signale souvent whose ; un sujet + verbe complet après un lieu signale where.\n" +
      "4. Pas d'antécédent et sens de « ce que » : what.",
    exemple:
      "« Paris, ___ I visited last spring, was crowded. » Antécédent : une ville. Virgules : relative explicative, donc pas de that. Le verbe visit est transitif et attend un complément d'objet : il faut un pronom objet, which, et non where. Réponse : which.\n\n" +
      "« That's the student ___ project won the prize. » Après le blanc vient directement un nom (project) : c'est son projet, idée de possession, whose.",
    erreur:
      "✗ The man which called you → ✓ The man who called you\n" +
      "✗ My sister, that lives in Rome, is a doctor → ✓ My sister, who lives in Rome, is a doctor\n" +
      "✗ The thing what I need → ✓ What I need / The thing (that) I need\n" +
      "✗ The girl who's father is a pilot → ✓ The girl whose father is a pilot\n" +
      "✗ The city where I visited → ✓ The city (which) I visited",
    approfondir:
      "Dans une relative déterminative, la préposition peut être rejetée à la fin, ce qui est plus courant à l'oral : the person (who) you should write to. La forme soutenue place la préposition devant whom ou which : the person to whom you should write.\n\n" +
      "Lien avec la ponctuation : en anglais, la virgule change le sens. The employees, who were tired, went home (tous) ; the employees who were tired went home (seulement certains).\n\n" +
      "Gestion du temps : commence par regarder les virgules et le mot après le blanc : ces deux indices règlent la plupart des questions.",
    cards: [
      ["Dont le projet (possession)", "whose project", true],
      ["Ce dont j'ai besoin", "What I need", true],
      ["Relative entre virgules", "Pas de that, pas d'omission du pronom", false],
      ["La personne à qui écrire (soutenu)", "the person to whom you should write", true],
    ],
  },
  questions: [
    E("B-EN-REL-001", S, "en.rel.choice", 1, "Complete the sentence: « The woman ___ lives next door is an airline pilot. »", [
      ["who", true, "Who : antécédent humain, sujet de la relative."],
      ["which", false, "Which s'emploie pour les choses, pas pour une personne."],
      ["whose", false, "Whose exprime la possession et doit être suivi d'un nom."],
      ["what", false, "What n'a pas d'antécédent ; ici l'antécédent est the woman."],
    ], "Antécédent humain (the woman), pronom sujet : who (that serait aussi possible).", "Personne → who ; chose → which.", [
      "Quel est l'antécédent ?",
      "C'est une personne.",
      "Le pronom relatif des personnes.",
    ]),
    E("B-EN-REL-002", S, "en.rel.choice", 1, "Complete the sentence: « This is the laptop ___ I bought last week. »", [
      ["which", true, "Which : antécédent non humain."],
      ["who", false, "Who ne reprend que des personnes."],
      ["whose", false, "Whose doit être suivi d'un nom possédé."],
      ["what", false, "What n'a pas d'antécédent ; ici l'antécédent est the laptop."],
    ], "Antécédent non humain : which (ou that, ou omission).", "Chose → which / that.", [
      "Quel est l'antécédent ?",
      "Est-ce une personne ou un objet ?",
      "Le pronom des choses.",
    ]),
    E("B-EN-REL-003", S, "en.rel.choice", 1, "Complete the question: « Is this the bus ___ goes to the airport? »", [
      ["that", true, "That : relative déterminative, antécédent non humain."],
      ["who", false, "Who ne reprend pas un objet comme un bus."],
      ["where", false, "Where reprend un lieu complément ; ici le pronom est sujet du verbe goes."],
      ["what", false, "What n'a pas d'antécédent."],
    ], "Le bus est sujet du verbe goes, dans une relative déterminative : that (ou which).", "That convient aux personnes comme aux choses, sans virgules.", [
      "L'antécédent est-il humain ?",
      "Le pronom est sujet du verbe qui suit.",
      "Pas de virgules : that est possible.",
    ]),
    E("B-EN-REL-004", S, "en.rel.whose", 2, "Complete the sentence: « That's the student ___ project won the innovation prize. »", [
      ["whose", true, "Whose + nom : possession (son projet)."],
      ["who's", false, "Who's = who is : « who is project » n'a pas de sens."],
      ["who", false, "Who ne peut pas être suivi directement d'un nom possédé."],
      ["which", false, "Which ne reprend pas une personne et n'exprime pas la possession."],
    ], "Le blanc est suivi d'un nom sans article (project) : c'est le projet de l'étudiant, idée de possession, whose.", "Antécédent + whose + nom = dont le / dont la.", [
      "Qu'est-ce qui suit directement le blanc ?",
      "Le projet appartient à l'étudiant.",
      "Le relatif de la possession.",
    ], { a: "methode" }),
    E("B-EN-REL-005", S, "en.rel.what", 2, "Complete the sentence: « ___ I need right now is a good night's sleep. »", [
      ["What", true, "What = ce que, sans antécédent."],
      ["That", false, "That relatif exige un antécédent."],
      ["Which", false, "Which exige un antécédent ou reprend une proposition précédente."],
      ["The thing what", false, "Calque de « la chose que » : what ne suit jamais un antécédent."],
    ], "Il n'y a pas d'antécédent ; le sens est « ce dont j'ai besoin » : What I need.", "Ce que, ce qui (sans antécédent) → what.", [
      "Y a-t-il un antécédent avant le blanc ?",
      "Traduis : « ___ j'ai besoin, c'est… ».",
      "Le relatif sans antécédent.",
    ], { a: "erreur" }),
    E("B-EN-REL-006", S, "en.rel.nondefining", 2, "Complete the sentence: « My brother, ___ lives in Leeds, works as a nurse. »", [
      ["who", true, "Relative explicative entre virgules avec antécédent humain : who."],
      ["that", false, "That est interdit dans une relative entre virgules."],
      ["which", false, "Which ne reprend pas une personne."],
      ["whom", false, "Whom est un complément ; ici le pronom est sujet de lives."],
    ], "Virgules = relative explicative : that est exclu. Antécédent humain et sujet : who.", "Relative entre virgules : who / which, jamais that.", [
      "Remarque les virgules.",
      "Quel pronom est interdit entre virgules ?",
      "L'antécédent est une personne et le pronom est sujet.",
    ]),
    E("B-EN-REL-007", S, "en.rel.nondefining", 3, "Complete the sentence: « Lisbon, ___ I visited last spring, was crowded with tourists. »", [
      ["which", true, "Visit est transitif : il faut un pronom objet, which, et les virgules excluent that."],
      ["that", false, "That est interdit dans une relative explicative entre virgules."],
      ["where", false, "Piège : visit attend un complément d'objet (visit a city), pas un complément de lieu."],
      ["what", false, "What n'a pas d'antécédent ; ici l'antécédent est Lisbon."],
    ], "Lisbonne est le complément d'objet de visited (I visited Lisbon) : pronom objet which. Where conviendrait avec un verbe comme live ou stay (where I lived).", "Lieu complément d'objet → which ; lieu complément de lieu → where.", [
      "Le verbe visit se construit-il avec ou sans préposition ?",
      "Le pronom est-il objet ou complément de lieu ?",
      "Les virgules éliminent un autre candidat.",
    ], { a: "exemple", r: true }),
    E("B-EN-REL-008", S, "en.rel.where", 2, "Complete the sentence: « The hotel ___ we stayed was right next to the beach. »", [
      ["where", true, "Where = in which : complément de lieu de stay."],
      ["which", false, "Which seul est incorrect : stay exige une préposition (stay in a hotel)."],
      ["that", false, "That seul est incorrect pour la même raison."],
      ["what", false, "What n'a pas d'antécédent."],
    ], "On reste dans un hôtel (stay in) : le relatif doit contenir l'idée de lieu, where (ou in which).", "Lieu complément de lieu → where = in / at which.", [
      "Comment se construit stay avec un lieu ?",
      "Il faut une préposition ou un relatif de lieu.",
      "Le relatif qui contient « dans lequel ».",
    ]),
    E("B-EN-REL-009", S, "en.rel.where", 1, "Complete the sentence: « I'll always remember the day ___ we first met. »", [
      ["when", true, "When reprend un antécédent de temps (the day)."],
      ["where", false, "Where reprend un lieu, pas un moment."],
      ["which", false, "Which seul est incorrect : il faudrait on which."],
      ["what", false, "What n'a pas d'antécédent."],
    ], "Antécédent de temps (the day) : when (= on which).", "Moment → when ; lieu → where.", [
      "L'antécédent est-il un lieu ou un moment ?",
      "Le relatif doit contenir l'idée de « où » temporel.",
      "Le relatif de temps.",
    ]),
    E("B-EN-REL-010", S, "en.rel.whom", 2, "Complete the sentence: « The person to ___ you should send your CV is Ms Patel. »", [
      ["whom", true, "Après une préposition, le relatif des personnes est whom."],
      ["who", false, "Who ne s'emploie pas directement après une préposition."],
      ["which", false, "Which ne reprend pas une personne."],
      ["whose", false, "Whose exige un nom après lui."],
    ], "La préposition to précède le blanc et l'antécédent est humain : to whom.", "Préposition + relatif humain → whom.", [
      "Quel mot précède le blanc ?",
      "Après une préposition, who change de forme.",
      "C'est la forme complément de who.",
    ], { a: "formules" }),
    E("B-EN-REL-011", S, "en.rel.which", 3, "Complete the sentence: « He failed the driving test twice, ___ surprised everyone. »", [
      ["which", true, "Which après une virgule reprend toute la proposition (ce qui)."],
      ["what", false, "Calque de « ce qui » : what n'a pas d'antécédent et ne reprend pas une proposition."],
      ["that", false, "That est interdit après une virgule."],
      ["who", false, "Who ne reprend pas un fait."],
    ], "Ce qui a surpris tout le monde, c'est le fait d'avoir échoué : which reprend la proposition entière.", "Reprise d'une proposition entière (ce qui) → , which.", [
      "Qu'est-ce qui a surpris tout le monde ?",
      "Le pronom reprend un fait, pas un nom.",
      "Après une virgule, which joue ce rôle.",
    ], { r: true }),
  ],
};
