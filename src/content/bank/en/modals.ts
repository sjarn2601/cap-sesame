import { E, skill, type EnPart } from "./common";

const S = "en.modals";

export const MODALS: EnPart = {
  skill: skill(S, "Grammaire", "Modaux et leurs nuances", ["modal", "modaux", "must", "have to", "mustnt", "neednt", "should", "may", "might", "could", "can"]),
  lesson: {
    skillId: S,
    title: "Les modaux et leurs nuances",
    objectives: ["Distinguer obligation, interdiction et absence d'obligation", "Exprimer la probabilité et la déduction", "Employer les modaux au passé (modal + have + participe)"],
    prerequisites: ["en.tenses"],
    regle:
      "Les modaux (can, could, may, might, must, shall, should, will, would) sont suivis de la base verbale sans to, ne prennent jamais de -s à la 3e personne et forment seuls leur négation et leur question : she can swim, she can't swim, can she swim? Exceptions à connaître : ought to, have to et need to se construisent avec to.\n\n" +
      "Obligation : must (obligation ressentie par celui qui parle, ou règle écrite) et have to (obligation extérieure, règlement, nécessité). Must n'a pas de forme passée : on emploie had to (I had to work yesterday). Pour le futur, must convient (I must call her tomorrow), mais will have to s'impose pour une obligation future extérieure ou après un autre auxiliaire.\n\n" +
      "Le piège majeur est à la forme négative. Mustn't = interdiction (il ne faut pas). Don't have to et needn't = absence d'obligation (ce n'est pas la peine). You mustn't park here : c'est interdit. You don't have to come : tu n'es pas obligé.\n\n" +
      "Conseil : should (ou ought to) + base verbale : You should rest.\n\n" +
      "Capacité et permission : can, au passé could (She could read at five). Permission polie : could, may.\n\n" +
      "Probabilité, du plus sûr au moins sûr : must (déduction quasi certaine), should (attente logique), may, might, could (possibilité), can't (impossibilité certaine). Attention : le contraire de must en déduction est can't, pas mustn't. He must be tired / That can't be true.\n\n" +
      "Les modaux au passé se construisent avec have + participe passé. Must have done : déduction sur le passé (It must have rained). Can't have done : impossibilité passée. Should have done : reproche ou regret (tu aurais dû). Could have done : possibilité non réalisée. Might have done : hypothèse sur le passé. Needn't have done : action faite mais inutile.",
    formules:
      "modal + base verbale sans to : she must go, he can swim\n" +
      "must / have to : obligation\n" +
      "mustn't : interdiction\n" +
      "don't have to / needn't : absence d'obligation\n" +
      "should / ought to : conseil\n" +
      "must : déduction certaine ; can't : impossibilité\n" +
      "may / might / could : possibilité\n" +
      "must have + participe : déduction sur le passé\n" +
      "should have + participe : reproche, regret\n" +
      "could have + participe : possibilité non réalisée\n" +
      "needn't have + participe : action faite mais inutile",
    methode:
      "1. Identifie la valeur attendue : obligation, interdiction, conseil, capacité, probabilité.\n" +
      "2. Si c'est une probabilité, situe-la : présent (must be) ou passé (must have been).\n" +
      "3. Élimine les formes impossibles : must to, can to, musts, did must.\n" +
      "4. Vérifie la logique avec la suite de la phrase (it's forbidden, it's optional, I'm not sure).",
    exemple:
      "« We ___ wear a uniform at my school, but most students do. »\n" +
      "La suite (most students do) montre que l'uniforme est facultatif : on cherche l'absence d'obligation, don't have to. Mustn't voudrait dire que c'est interdit, ce que contredit la suite.\n\n" +
      "« The streets are wet. It ___ during the night. » Déduction sur un fait passé à partir d'un indice : must have rained.",
    erreur:
      "✗ You mustn't come if you're busy (pour « tu n'es pas obligé ») → ✓ You don't have to come\n" +
      "✗ He must to leave → ✓ He must leave\n" +
      "✗ She cans drive → ✓ She can drive\n" +
      "✗ I musted work yesterday → ✓ I had to work yesterday\n" +
      "✗ That mustn't be true (déduction) → ✓ That can't be true\n" +
      "✗ You should told me → ✓ You should have told me",
    approfondir:
      "Needn't have done et didn't need to do ne disent pas la même chose : We needn't have hurried signifie qu'on s'est dépêché pour rien ; We didn't need to hurry ne précise pas forcément si on s'est dépêché.\n\n" +
      "Be able to remplace can aux temps où can n'existe pas : I will be able to come, I have never been able to swim.\n\n" +
      "Gestion du temps : lis la fin de la phrase avant les options. Elle contient presque toujours l'indice décisif (forbidden, optional, I'm sure, I'm not sure).",
    cards: [
      ["Mustn't", "Interdiction : you mustn't smoke here", false],
      ["Tu n'es pas obligé de venir", "You don't have to come / You needn't come", true],
      ["Contraire de must (déduction)", "can't : that can't be true", false],
      ["Tu aurais dû me le dire", "You should have told me", true],
      ["Il a dû pleuvoir (déduction)", "It must have rained", true],
    ],
  },
  questions: [
    E("B-EN-MOD-001", S, "en.mod.obligation", 1, "Complete the sentence: « You ___ smoke in the hospital: it's strictly forbidden. »", [
      ["mustn't", true, "Mustn't exprime l'interdiction."],
      ["don't have to", false, "Don't have to signifie « pas obligé », pas « interdit »."],
      ["needn't", false, "Needn't signifie « ce n'est pas la peine », pas une interdiction."],
      ["have to", false, "Have to impose une obligation, contraire du sens voulu."],
    ], "« Strictly forbidden » : on cherche l'interdiction, qui s'exprime par mustn't.", "mustn't = interdiction ; don't have to = absence d'obligation.", [
      "Quel est le sens de la fin de la phrase ?",
      "On cherche une interdiction.",
      "Un seul modal négatif exprime l'interdit.",
    ]),
    E("B-EN-MOD-002", S, "en.mod.obligation", 2, "Complete the sentence: « Tomorrow is a public holiday, so we ___ get up early. »", [
      ["don't have to", true, "Absence d'obligation : ce n'est pas nécessaire."],
      ["mustn't", false, "Calque de « il ne faut pas » : mustn't signifierait que se lever tôt est interdit."],
      ["haven't to", false, "Forme non standard : have to fait sa négation avec do."],
      ["don't must", false, "Must ne se combine jamais avec do."],
    ], "Un jour férié rend le réveil matinal inutile, pas interdit : don't have to.", "Pas obligé = don't have to / needn't.", [
      "Se lever tôt est-il interdit ou simplement inutile ?",
      "Cherche l'absence d'obligation.",
      "Have to fait sa négation avec l'auxiliaire do.",
    ], { a: "erreur" }),
    E("B-EN-MOD-003", S, "en.mod.obligation", 3, "Complete the sentence: « Students ___ wear a uniform at my school, but most of them do. »", [
      ["don't have to", true, "Absence d'obligation : l'uniforme est facultatif, et pourtant la plupart le portent."],
      ["mustn't", false, "Mustn't signifierait que l'uniforme est interdit, ce que contredit « most of them do »."],
      ["needn't to", false, "Needn't, employé comme modal, se construit sans to."],
      ["haven't got", false, "Il manque to : haven't got to wear."],
    ], "La suite (but most of them do) montre que l'uniforme n'est pas interdit mais facultatif : don't have to.", "Facultatif = don't have to ; interdit = mustn't.", [
      "Lis la fin de la phrase.",
      "Si la plupart le portent, est-ce interdit ?",
      "On cherche une absence d'obligation bien construite.",
    ], { a: "exemple" }),
    E("B-EN-MOD-004", S, "en.mod.advice", 1, "Complete the sentence: « You look exhausted. You ___ go to bed earlier. »", [
      ["should", true, "Should + base verbale : conseil."],
      ["should to", false, "Should n'est jamais suivi de to."],
      ["must to", false, "Must n'est jamais suivi de to."],
      ["ought", false, "Ought se construit avec to : ought to go."],
    ], "On donne un conseil : should + base verbale, You should go to bed earlier.", "Conseil : should / ought to + base verbale.", [
      "Quelle intention exprime la phrase ?",
      "Les modaux sont suivis de la base verbale.",
      "Élimine les formes avec ou sans to mal placé.",
    ]),
    E("B-EN-MOD-005", S, "en.mod.ability", 1, "Complete the sentence: « When she was five, she ___ already read and write. »", [
      ["could", true, "Could : capacité dans le passé."],
      ["can", false, "Can renvoie au présent, incohérent avec « when she was five »."],
      ["must", false, "Must exprime l'obligation ou la déduction, pas la capacité."],
      ["may", false, "May exprime la permission ou la possibilité, pas la capacité passée."],
    ], "Capacité dans le passé : could.", "Capacité passée : could ou was able to.", [
      "Le repère de temps est-il présent ou passé ?",
      "On parle d'une capacité.",
      "C'est le prétérit de can.",
    ]),
    E("B-EN-MOD-006", S, "en.mod.probability", 1, "Complete the sentence: « It ___ rain this afternoon, but I'm not sure. »", [
      ["might", true, "Might : possibilité incertaine, cohérente avec « I'm not sure »."],
      ["must", false, "Must exprime une déduction quasi certaine, contredite par « I'm not sure »."],
      ["will", false, "Will présente le fait comme sûr, ce qui contredit la fin de la phrase."],
      ["might to", false, "Might n'est jamais suivi de to."],
    ], "« I'm not sure » impose une simple possibilité : might (ou may).", "Possibilité incertaine : may / might / could.", [
      "Le locuteur est-il sûr de lui ?",
      "Cherche un modal de faible probabilité.",
      "Les modaux se construisent sans to.",
    ]),
    E("B-EN-MOD-007", S, "en.mod.probability", 2, "Complete the sentence: « He has been working for fourteen hours; he ___ be exhausted. »", [
      ["must", true, "Must : déduction logique quasi certaine."],
      ["can't", false, "Can't exprime l'impossibilité, contraire de ce que suggèrent quatorze heures de travail."],
      ["mustn't", false, "Mustn't exprime l'interdiction, jamais la déduction."],
      ["needn't", false, "Needn't exprime l'absence de nécessité, sans rapport avec une déduction."],
    ], "Indice (14 heures de travail) et conclusion presque sûre : must be exhausted.", "Déduction certaine : must ; impossibilité : can't.", [
      "Le locuteur tire une conclusion d'un indice.",
      "La conclusion est-elle probable ou impossible ?",
      "Le modal de la déduction affirmative.",
    ]),
    E("B-EN-MOD-008", S, "en.mod.probability", 2, "Complete the sentence: « That ___ be Paul at the door: he's in Tokyo this week. »", [
      ["can't", true, "Can't : impossibilité logique."],
      ["mustn't", false, "Calque de « ça ne doit pas être » : mustn't exprime l'interdiction, pas la déduction."],
      ["must", false, "Must affirmerait que c'est sûrement Paul, ce que contredit son séjour à Tokyo."],
      ["doesn't have to", false, "Doesn't have to exprime l'absence d'obligation, sans rapport avec une déduction."],
    ], "Paul est à Tokyo : il est impossible que ce soit lui. L'impossibilité se dit can't.", "Le contraire de must (déduction) est can't, pas mustn't.", [
      "Est-il possible que ce soit Paul ?",
      "On cherche une impossibilité logique.",
      "Le contraire de must en déduction n'est pas mustn't.",
    ], { a: "erreur" }),
    E("B-EN-MOD-009", S, "en.mod.perfect", 2, "Complete the sentence: « You ___ me you were ill; I would have helped you. »", [
      ["should have told", true, "Should have + participe : reproche sur le passé (tu aurais dû)."],
      ["must have told", false, "Must have exprime une déduction sur le passé, pas un reproche."],
      ["should tell", false, "Should + base verbale est un conseil au présent ou au futur."],
      ["should told", false, "Forme incorrecte : un modal est suivi de la base verbale ou de have + participe."],
    ], "Le reproche porte sur un fait passé : should have + participe passé, You should have told me.", "Reproche, regret : should have + participe passé.", [
      "Le reproche porte-t-il sur le présent ou le passé ?",
      "Un modal au passé se construit avec have.",
      "Should + have + participe passé.",
    ], { a: "formules" }),
    E("B-EN-MOD-010", S, "en.mod.perfect", 3, "Complete the sentence: « The streets are wet. It ___ during the night. »", [
      ["must have rained", true, "Must have + participe : déduction sur un fait passé."],
      ["must rain", false, "Must + base verbale porte sur le présent, pas sur la nuit passée."],
      ["should have rained", false, "Should have exprime un regret ou une attente non réalisée, pas une déduction à partir d'un indice."],
      ["can't have rained", false, "Can't have exprime l'impossibilité, contredite par les rues mouillées."],
    ], "Indice présent (rues mouillées), événement passé (pendant la nuit), conclusion quasi certaine : must have rained.", "Déduction sur le passé : must have + participe passé.", [
      "Quel indice le locuteur observe-t-il ?",
      "La déduction porte sur la nuit passée.",
      "Must + have + participe passé.",
    ], { r: true }),
    E("B-EN-MOD-011", S, "en.mod.perfect", 3, "Complete the sentence: « We ___ booked a table: the restaurant was almost empty. »", [
      ["needn't have", true, "Needn't have + participe : on a réservé, mais c'était inutile."],
      ["needn't to have", false, "Needn't, employé comme modal, n'est jamais suivi de to."],
      ["couldn't have", false, "Couldn't have exprimerait une impossibilité, ce qui n'a pas de sens ici."],
      ["ought have", false, "Forme incorrecte : ought se construit avec to (ought to have)."],
    ], "La réservation a été faite mais s'est révélée inutile (restaurant presque vide) : needn't have booked.", "Action faite mais inutile : needn't have + participe passé.", [
      "La réservation a-t-elle servi à quelque chose ?",
      "Cherche l'idée d'action inutile dans le passé.",
      "Need + not + have + participe.",
    ], { a: "approfondir", r: true }),
  ],
};
