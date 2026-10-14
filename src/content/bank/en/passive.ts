import { E, skill, type EnPart } from "./common";

const S = "en.passive";

export const PASSIVE: EnPart = {
  skill: skill(S, "Grammaire", "Voix passive et causatif", ["passive", "passif", "voix passive", "causative", "have something done", "it is said that", "be + participe"]),
  lesson: {
    skillId: S,
    title: "La voix passive et la forme causative",
    objectives: ["Construire le passif à tous les temps", "Employer have / get something done", "Utiliser les tournures it is said that et he is said to"],
    prerequisites: ["en.tenses"],
    regle:
      "Le passif met en avant celui qui subit l'action. Il se construit avec be, conjugué au temps voulu, suivi du participe passé du verbe : The bridge was built in 1932. L'agent, s'il est utile, est introduit par by : The novel was written by a young author.\n\n" +
      "C'est be qui porte le temps : is built (présent), is being built (présent en -ing), was built (prétérit), has been built (present perfect), had been built (past perfect), will be built (futur), must be built (modal). Le participe passé, lui, ne change jamais. Vérifie l'accord de be avec le sujet : The results were published.\n\n" +
      "L'anglais emploie le passif beaucoup plus que le français, qui préfère souvent « on » : « On parle anglais ici » se dit English is spoken here.\n\n" +
      "Les verbes à deux compléments (give, send, offer, show, tell) ont deux passifs possibles ; le plus naturel prend la personne comme sujet : She was given a prize (on lui a donné un prix).\n\n" +
      "Forme causative : have (ou get, plus familier) + objet + participe passé signifie « faire faire » par quelqu'un d'autre. I had my car repaired = j'ai fait réparer ma voiture. She is having her flat painted. Ne pas confondre avec make + objet + base verbale (forcer quelqu'un à faire) : They made him wait.\n\n" +
      "Opinion générale ou rumeur : It is said / believed / thought that + proposition, ou sujet + is said / believed + to + base verbale (ou to have + participe pour un fait passé). It is said that he is rich = He is said to be rich. Calque à éviter : He says to be rich.",
    formules:
      "be (au temps voulu) + participe passé\n" +
      "présent : is / are built ; en -ing : is being built\n" +
      "prétérit : was / were built ; en -ing : was being built\n" +
      "present perfect : has / have been built\n" +
      "past perfect : had been built\n" +
      "futur : will be built ; modal : must / can / should be built\n" +
      "agent : by + nom\n" +
      "causatif : have / get + objet + participe passé (I had my hair cut)\n" +
      "It is said that + proposition ; He is said to be / to have been",
    methode:
      "1. Le sujet fait-il l'action ou la subit-il ? S'il la subit, il faut le passif.\n" +
      "2. Repère le temps imposé par le contexte (yesterday, at the moment, next week, by the time).\n" +
      "3. Conjugue be à ce temps, accordé avec le sujet, puis ajoute le participe passé.\n" +
      "4. Pour « faire faire », pense have + objet + participe passé.",
    exemple:
      "« A new campus ___ at the moment. » Le campus ne construit rien : il est construit (passif). At the moment impose le présent en -ing. On conjugue be à ce temps (is being) puis on ajoute le participe : is being built.\n\n" +
      "« I ___ my hair cut yesterday. » Je ne me suis pas coupé les cheveux moi-même : forme causative au prétérit, I had my hair cut.",
    erreur:
      "✗ The museum built in 1890 → ✓ The museum was built in 1890\n" +
      "✗ A new road is building → ✓ A new road is being built\n" +
      "✗ I cut my hair at the hairdresser's → ✓ I had my hair cut\n" +
      "✗ The form must be complete in ink → ✓ The form must be completed in ink\n" +
      "✗ He says to be very rich → ✓ He is said to be very rich",
    approfondir:
      "Get + participe passé s'emploie aussi comme passif familier pour un événement subi : He got fired, They got married.\n\n" +
      "On ne met pas au passif les verbes sans complément d'objet (arrive, happen, die) : on ne dit pas « it was happened ».\n\n" +
      "Gestion du temps : dans une question de passif, regarde d'abord si le participe passé est présent dans chaque option. Les options sans participe sont souvent éliminées en deux secondes.",
    cards: [
      ["On parle anglais ici", "English is spoken here", true],
      ["Passif en cours", "is being + participe : the road is being repaired", false],
      ["J'ai fait réparer mon vélo", "I had my bike repaired", true],
      ["On dit qu'il est riche", "He is said to be rich / It is said that he is rich", true],
    ],
  },
  questions: [
    E("B-EN-PASS-001", S, "en.pass.tenses", 1, "Complete the sentence: « The Golden Gate Bridge ___ in the 1930s. »", [
      ["was built", true, "Passif au prétérit : be au prétérit + participe passé."],
      ["built", false, "Voix active : le pont n'a rien construit lui-même."],
      ["has been built", false, "Le present perfect ne s'emploie pas avec une période passée datée (in the 1930s)."],
      ["is built", false, "Le présent ne convient pas à un fait daté du passé."],
    ], "Le pont subit l'action (passif) et le repère est passé et daté : was built.", "Passif = be au temps voulu + participe passé.", [
      "Le pont fait-il l'action ou la subit-il ?",
      "Le repère de temps est passé et daté.",
      "Be au prétérit + participe passé.",
    ]),
    E("B-EN-PASS-002", S, "en.pass.tenses", 1, "Complete the sentence: « Many different languages ___ in India. »", [
      ["are spoken", true, "Passif au présent, accordé avec le sujet pluriel."],
      ["speak", false, "Voix active : les langues ne parlent pas."],
      ["are speaking", false, "Voix active en -ing : ce sont les langues qui parleraient."],
      ["is spoken", false, "Erreur d'accord : languages est pluriel."],
    ], "Les langues sont parlées (passif), vérité générale (présent) et sujet pluriel : are spoken.", "Passif présent : am / is / are + participe passé.", [
      "Le sujet fait-il l'action ?",
      "C'est une vérité générale.",
      "Accorde be avec un sujet pluriel.",
    ]),
    E("B-EN-PASS-003", S, "en.pass.tenses", 2, "Complete the sentence: « A new campus ___ at the moment, so the old buildings are overcrowded. »", [
      ["is being built", true, "Passif au présent en -ing : action en cours subie par le sujet."],
      ["is building", false, "Voix active : le campus ne construit rien."],
      ["has been building", false, "Voix active et temps inadapté."],
      ["is built", false, "Passif au présent simple : il manque l'idée d'action en cours (at the moment)."],
    ], "Passif + action en cours : is being + participe passé, is being built.", "Passif en cours : am / is / are being + participe passé.", [
      "Le campus fait-il l'action ?",
      "At the moment impose une forme en -ing.",
      "Combine is being et le participe.",
    ], { a: "exemple" }),
    E("B-EN-PASS-004", S, "en.pass.tenses", 1, "Complete the sentence: « The exam results ___ next Monday. »", [
      ["will be published", true, "Passif au futur : will be + participe passé."],
      ["will publish", false, "Voix active : les résultats ne publient rien."],
      ["are publishing", false, "Voix active en -ing : sens absurde."],
      ["will published", false, "Forme incorrecte : il manque be."],
    ], "Les résultats subissent l'action, à un moment futur : will be published.", "Passif futur : will be + participe passé.", [
      "Qui publie les résultats ?",
      "Next Monday impose le futur.",
      "Will + be + participe.",
    ]),
    E("B-EN-PASS-005", S, "en.pass.tenses", 2, "Complete the sentence: « Two suspects ___ by the police yesterday evening. »", [
      ["were arrested", true, "Passif au prétérit, accordé avec un sujet pluriel."],
      ["have been arrested", false, "Le present perfect est incompatible avec yesterday evening."],
      ["arrested", false, "Voix active : les suspects n'ont arrêté personne, by the police signale le passif."],
      ["was arrested", false, "Erreur d'accord : two suspects est pluriel."],
    ], "By the police signale le passif ; yesterday impose le prétérit ; le sujet est pluriel : were arrested.", "By + agent = passif ; accorde be avec le sujet.", [
      "Que signale by the police ?",
      "Yesterday evening impose quel temps ?",
      "Attention à l'accord de be.",
    ]),
    E("B-EN-PASS-006", S, "en.pass.tenses", 2, "Complete the sentence: « This application form must ___ in black ink. »", [
      ["be completed", true, "Passif après un modal : modal + be + participe passé."],
      ["completed", false, "Après un modal, il faut la base verbale : be est obligatoire."],
      ["be completing", false, "Voix active en -ing : le formulaire ne remplit rien."],
      ["being completed", false, "Un modal est suivi de la base verbale, pas d'une forme en -ing."],
    ], "Le formulaire est rempli (passif). Après must, on met be puis le participe : must be completed.", "Passif avec modal : modal + be + participe passé.", [
      "Le formulaire remplit-il quelque chose ?",
      "Après un modal, quelle forme verbale ?",
      "Modal + be + participe.",
    ], { a: "formules" }),
    E("B-EN-PASS-007", S, "en.pass.causative", 2, "Complete the sentence: « I ___ my hair cut at a new salon yesterday. »", [
      ["had", true, "Have + objet + participe passé : faire faire par quelqu'un."],
      ["made", false, "Make se construit avec la base verbale (make someone do) et signifie forcer."],
      ["did", false, "Do ne forme pas de causatif."],
      ["was", false, "I was my hair cut n'a pas de sens grammatical."],
    ], "Le coiffeur coupe, pas moi : forme causative have + objet + participe, ici au prétérit, I had my hair cut.", "Faire faire : have / get + objet + participe passé.", [
      "Est-ce le locuteur qui se coupe les cheveux ?",
      "On cherche l'idée de « faire faire ».",
      "Le verbe causatif est suivi de l'objet puis du participe.",
    ]),
    E("B-EN-PASS-008", S, "en.pass.causative", 2, "Complete the sentence: « She is having her flat ___ before she moves in. »", [
      ["painted", true, "Causatif : have + objet + participe passé."],
      ["paint", false, "La base verbale suit make ou let, pas have dans ce sens."],
      ["to paint", false, "Have dans ce sens n'est pas suivi de to."],
      ["painting", false, "Le -ing donnerait l'idée que l'appartement peint lui-même."],
    ], "Elle fait peindre son appartement : have + objet + participe passé, having her flat painted.", "have something done : le participe passé suit l'objet.", [
      "Qui peint l'appartement ?",
      "C'est une forme causative.",
      "Après l'objet, le participe passé.",
    ]),
    E("B-EN-PASS-009", S, "en.pass.said", 3, "Complete the sentence: « The new CEO ___ to be very demanding. »", [
      ["is said", true, "Sujet + is said to + base verbale : on dit qu'il est exigeant."],
      ["says", false, "Calque de « on dit » : He says to be signifierait que lui-même le dit, et la construction est incorrecte."],
      ["is saying", false, "Forme active en -ing : incorrecte avec to be ici."],
      ["said", false, "Voix active au prétérit : incorrect avec to be."],
    ], "« On dit que le nouveau PDG est exigeant » : It is said that he is… ou The new CEO is said to be…", "Rumeur : sujet + is said / believed / thought + to + base verbale.", [
      "Qui dit cela : le PDG ou les gens en général ?",
      "Il faut une tournure passive de say.",
      "Be + said + to.",
    ], { r: true }),
    E("B-EN-PASS-010", S, "en.pass.tenses", 3, "Complete the sentence: « By the time the board met, the report ___. »", [
      ["had been finished", true, "Passif au past perfect : achevé avant un repère passé."],
      ["had finished", false, "Voix active : le rapport ne termine rien."],
      ["has been finished", false, "Le present perfect ne convient pas à un repère passé (met)."],
      ["was finishing", false, "Voix active en -ing : sens absurde."],
    ], "Le rapport subit l'action, achevée avant la réunion passée : had been finished.", "Passif past perfect : had been + participe passé.", [
      "Le rapport fait-il l'action ?",
      "L'action est antérieure à un repère passé.",
      "Had been + participe.",
    ], { r: true }),
    E("B-EN-PASS-011", S, "en.pass.tenses", 2, "Complete the sentence: « At the end of the ceremony, the winners ___ a trophy. »", [
      ["were given", true, "Passif de give avec la personne comme sujet : on leur a donné un trophée."],
      ["were give", false, "Forme incorrecte : le passif exige le participe passé given."],
      ["have been give", false, "Forme incorrecte : participe given manquant."],
      ["was given", false, "Erreur d'accord : the winners est pluriel."],
    ], "Avec give, la personne qui reçoit devient sujet du passif : the winners were given a trophy.", "Verbes à deux compléments : la personne devient sujet (She was given a prize).", [
      "Qui reçoit le trophée ?",
      "Give au passif garde l'objet a trophy.",
      "Be au prétérit pluriel + participe passé.",
    ]),
  ],
};
