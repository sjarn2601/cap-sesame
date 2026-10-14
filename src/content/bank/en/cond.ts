import { E, skill, type EnPart } from "./common";

const S = "en.cond";

export const COND: EnPart = {
  skill: skill(S, "Grammaire", "Conditionnels et souhaits", ["conditional", "conditionnel", "if", "wish", "if only", "unless", "as long as", "hypothese"]),
  lesson: {
    skillId: S,
    title: "Les conditionnels, wish et if only",
    objectives: ["Construire les quatre types de phrases en if", "Exprimer un regret avec wish et if only", "Employer unless, as long as et provided that"],
    prerequisites: ["en.tenses"],
    regle:
      "Une phrase conditionnelle associe une subordonnée en if (la condition) et une principale (la conséquence). Le temps de chaque partie dépend du degré de réalité de la situation. Règle d'or, comme en français : jamais de will ni de would directement après if.\n\n" +
      "Type 0 (vérité générale) : if + présent, présent. If you heat ice, it melts.\n\n" +
      "Type 1 (situation possible, futur réel) : if + présent, will + base verbale. If it rains tomorrow, we will stay at home. Le français dit aussi « s'il pleut », mais l'erreur « if it will rain » est fréquente.\n\n" +
      "Type 2 (situation imaginaire au présent ou peu probable) : if + prétérit, would + base verbale. If I had more time, I would learn Japanese. Avec be, l'anglais soigné emploie were à toutes les personnes : If I were you, I would accept.\n\n" +
      "Type 3 (passé irréel, regret) : if + past perfect, would have + participe passé. If they had left earlier, they would have caught the train.\n\n" +
      "Conditionnel mixte : condition passée, conséquence présente. If she had taken that job, she would be in London now.\n\n" +
      "Wish et if only expriment un regret. Regret sur le présent : wish + prétérit (I wish I knew). Regret sur le passé : wish + past perfect (I wish I had listened). Agacement ou souhait de changement chez quelqu'un d'autre : wish + would (I wish you would stop talking). If only fonctionne de la même façon, avec plus d'intensité.\n\n" +
      "Unless = if… not (sauf si) : You won't pass unless you revise. As long as, provided (that), on condition that = à condition que, suivis du présent pour un sens futur. En registre soutenu, on peut supprimer if et inverser : Had I known (= If I had known), Were I in your position, Should you need help.",
    formules:
      "Type 0 : if + présent → présent\n" +
      "Type 1 : if + présent → will + base verbale\n" +
      "Type 2 : if + prétérit (were) → would / could / might + base verbale\n" +
      "Type 3 : if + past perfect → would have + participe passé\n" +
      "Mixte : if + past perfect → would + base verbale (conséquence présente)\n" +
      "wish / if only + prétérit : regret présent\n" +
      "wish / if only + past perfect : regret passé\n" +
      "wish + somebody + would : souhait que l'autre change\n" +
      "unless = if not ; as long as / provided that = à condition que\n" +
      "Inversion : Had I known… ; Were I you… ; Should you need…",
    methode:
      "1. Repère la partie déjà donnée (condition ou conséquence) et son temps.\n" +
      "2. Déduis le type : présent + will (type 1), prétérit + would (type 2), past perfect + would have (type 3).\n" +
      "3. Cherche un indice de moment : now, tomorrow, last year. Un mélange passé-présent signale un conditionnel mixte.\n" +
      "4. Vérifie qu'aucun will ou would ne suit if.",
    exemple:
      "« If she ___ that job in London, she would be living in England now. »\n" +
      "La principale (would be living… now) porte sur le présent. Mais la décision (accepter le poste) appartient au passé. On a donc un conditionnel mixte : if + past perfect, had accepted.\n\n" +
      "« I wish I ___ to the conference last week. » Regret sur un fait passé (last week) : wish + past perfect, I wish I had gone.",
    erreur:
      "✗ If it will rain, we will stay → ✓ If it rains, we will stay\n" +
      "✗ If I would have time, I would come → ✓ If I had time, I would come\n" +
      "✗ If I would have known → ✓ If I had known\n" +
      "✗ I wish I know → ✓ I wish I knew\n" +
      "✗ I wish I would be taller → ✓ I wish I were taller\n" +
      "✗ Unless you don't hurry → ✓ Unless you hurry",
    approfondir:
      "If I was you s'entend souvent à l'oral, mais au concours, choisis If I were you si les deux sont proposés : c'est la forme attendue.\n\n" +
      "Unless contient déjà la négation : unless you don't serait une double négation. Pour vérifier, remplace unless par if… not.\n\n" +
      "Gestion du temps : la question se règle souvent en lisant seulement l'autre moitié de la phrase. Would have dans la principale appelle had + participe dans la subordonnée, sans autre réflexion.",
    cards: [
      ["Type 2", "If + prétérit, would + base verbale : If I had time, I would travel", false],
      ["Type 3", "If + past perfect, would have + participe : If I had known, I would have come", false],
      ["Je regrette de ne pas savoir conduire", "I wish I knew how to drive", true],
      ["Unless", "if… not (sauf si) : sans négation après lui", false],
      ["Si j'avais su (inversion)", "Had I known", true],
    ],
  },
  questions: [
    E("B-EN-COND-001", S, "en.cond.type1", 1, "Complete the sentence: « If it ___ tomorrow, we will stay at home. »", [
      ["rains", true, "Type 1 : if + présent, will + base verbale."],
      ["will rain", false, "Will ne s'emploie pas après if dans une condition."],
      ["would rain", false, "Would ne s'emploie pas après if et ne va pas avec will dans la principale."],
      ["rained", false, "Le prétérit après if appellerait would dans la principale (type 2)."],
    ], "La principale contient will : c'est un conditionnel de type 1, donc if + présent simple, it rains.", "Type 1 : if + présent → will + base verbale.", [
      "Regarde le temps de la principale.",
      "Will dans la principale signale le type 1.",
      "Après if, le verbe reste au présent simple.",
    ]),
    E("B-EN-COND-002", S, "en.cond.type1", 1, "Complete the sentence: « If the train is late again, I ___ a complaint. »", [
      ["will make", true, "Type 1 : la condition au présent appelle will dans la principale."],
      ["would have made", false, "Would have + participe appartient au type 3, avec if + past perfect."],
      ["made", false, "Le prétérit ne peut pas exprimer une conséquence future."],
      ["would made", false, "Forme incorrecte : would est suivi de la base verbale."],
    ], "Condition au présent (is late) portant sur l'avenir : la conséquence se met au futur, I will make a complaint.", "If + présent → will + base verbale.", [
      "À quel temps est la condition ?",
      "Ce temps correspond au type 1.",
      "La principale prend will + base verbale.",
    ]),
    E("B-EN-COND-003", S, "en.cond.type2", 2, "Complete the sentence: « If I ___ more free time, I would learn Japanese. »", [
      ["had", true, "Type 2 : if + prétérit, would + base verbale."],
      ["have", false, "Le présent après if appellerait will (type 1), pas would."],
      ["would have", false, "Calque du conditionnel français : jamais de would après if."],
      ["had had", false, "Le past perfect correspond au type 3, avec would have dans la principale."],
    ], "La principale est au conditionnel (would learn) : la situation est imaginaire au présent. Après if, on met le prétérit : If I had more free time.", "Type 2 : if + prétérit → would + base verbale.", [
      "Quel auxiliaire la principale contient-elle ?",
      "Would + base verbale correspond à un type précis.",
      "Ce type demande le prétérit après if.",
    ]),
    E("B-EN-COND-004", S, "en.cond.type2", 2, "Complete the sentence: « If I ___ you, I would accept their offer. »", [
      ["were", true, "If I were you : prétérit de be à valeur d'irréel, forme attendue à toutes les personnes."],
      ["am", false, "Le présent ne convient pas : je ne suis pas toi, la situation est imaginaire."],
      ["would be", false, "Jamais de would après if."],
      ["will be", false, "Jamais de will après if, et la situation est irréelle."],
    ], "Situation impossible au présent : type 2 avec be, donc were à toutes les personnes en anglais standard : If I were you, I would…", "Irréel avec be → were : If I were you.", [
      "La situation est-elle réelle ou imaginaire ?",
      "La principale est au conditionnel en would.",
      "Be prend une forme particulière dans l'irréel.",
    ]),
    E("B-EN-COND-005", S, "en.cond.type3", 2, "Complete the sentence: « If they had left earlier, they ___ the flight. »", [
      ["would have caught", true, "Type 3 : if + past perfect, would have + participe passé."],
      ["would catch", false, "Would + base verbale correspond au type 2 et à une conséquence présente."],
      ["will have caught", false, "Will ne convient pas à un passé irréel."],
      ["had caught", false, "Le past perfect ne s'emploie pas dans la principale d'un type 3."],
    ], "La condition est au past perfect (had left) : on parle d'un passé qui n'a pas eu lieu. La conséquence se met au conditionnel passé : would have caught.", "Type 3 : if + had + participe → would have + participe.", [
      "À quel temps est la condition ?",
      "Had left signale un passé irréel.",
      "La conséquence prend would have + participe.",
    ]),
    E("B-EN-COND-006", S, "en.cond.wish", 2, "Complete the sentence: « I wish I ___ how to drive; I have to take the bus everywhere. »", [
      ["knew", true, "Wish + prétérit : regret portant sur le présent."],
      ["know", false, "Le présent ne s'emploie pas après wish pour un regret."],
      ["will know", false, "Will ne s'emploie pas après wish pour un regret présent."],
      ["would know", false, "Wish + would s'emploie pour souhaiter qu'un autre change, pas avec le même sujet ni avec know."],
    ], "Je ne sais pas conduire aujourd'hui et je le regrette : wish + prétérit, I wish I knew.", "Regret présent : wish / if only + prétérit.", [
      "Le regret porte-t-il sur le présent ou le passé ?",
      "Après wish, on recule d'un temps.",
      "Le présent devient prétérit.",
    ], { a: "formules" }),
    E("B-EN-COND-007", S, "en.cond.wish", 3, "Complete the sentence: « I wish I ___ to the conference last week; everyone says it was great. »", [
      ["had gone", true, "Wish + past perfect : regret sur un fait passé (last week)."],
      ["have gone", false, "Le present perfect ne s'emploie pas après wish."],
      ["would go", false, "Wish + would exprime un souhait de changement, pas un regret passé."],
      ["will go", false, "Will est incompatible avec un regret et avec last week."],
    ], "Last week situe le fait dans le passé : le regret s'exprime avec wish + past perfect, I wish I had gone.", "Regret passé : wish / if only + had + participe passé.", [
      "Le regret porte-t-il sur le présent ou sur le passé ?",
      "Pour un passé, on recule jusqu'au past perfect.",
      "Had + participe passé.",
    ]),
    E("B-EN-COND-008", S, "en.cond.wish", 2, "Complete the sentence: « If only you ___ me earlier! Now it's too late to change the booking. »", [
      ["had told", true, "If only + past perfect : regret sur un fait passé."],
      ["have told", false, "Le present perfect ne s'emploie pas après if only."],
      ["would tell", false, "If only + would vise un changement à venir, incompatible avec « now it's too late »."],
      ["will tell", false, "Will est impossible après if only."],
    ], "« Now it's too late » montre que l'occasion est passée : if only + past perfect, If only you had told me earlier!", "If only + past perfect = regret passé.", [
      "If only fonctionne comme wish.",
      "L'action manquée est-elle passée ou future ?",
      "Il faut had + participe passé.",
    ]),
    E("B-EN-COND-009", S, "en.cond.unless", 2, "Complete the sentence logically: « You won't pass the exam ___ you revise regularly. »", [
      ["unless", true, "Unless = if… not : tu ne réussiras pas si tu ne révises pas."],
      ["if", false, "Avec if, la phrase dirait que réviser empêche de réussir : sens absurde."],
      ["except", false, "Except est une préposition (sauf) et ne relie pas deux propositions dans ce sens."],
      ["without", false, "Without se construit avec un nom ou un -ing (without revising), pas avec une proposition."],
    ], "Le sens attendu est « sauf si tu révises » : unless you revise. Unless contient déjà la négation.", "Unless = if… not ; pas de négation après unless.", [
      "Traduis la phrase en français pour en saisir la logique.",
      "Il faut l'équivalent de « à moins que, sauf si ».",
      "Ce mot contient déjà une négation.",
    ]),
    E("B-EN-COND-010", S, "en.cond.unless", 2, "Complete the sentence: « As long as you ___ the deadline, you can organise your work as you like. »", [
      ["meet", true, "As long as + présent, même pour un sens futur."],
      ["will meet", false, "As long as fonctionne comme if : pas de will après."],
      ["would meet", false, "Pas de would après une conjonction de condition."],
      ["met", false, "Le prétérit correspondrait à une hypothèse irréelle, absente ici (you can)."],
    ], "As long as (à condition que) suit la règle de if : présent simple pour une condition future réelle.", "as long as / provided that + présent.", [
      "As long as joue le même rôle que if.",
      "La principale est au présent (can) : condition réelle.",
      "Pas de will après la conjonction.",
    ], { r: true }),
    E("B-EN-COND-011", S, "en.cond.mixed", 3, "Complete the sentence: « If she had accepted that job in London, she ___ in England now. »", [
      ["would be living", true, "Conditionnel mixte : condition passée, conséquence présente (now)."],
      ["would have lived", false, "Would have + participe vise une conséquence passée, contredite par now."],
      ["will live", false, "Will ne convient pas à une situation irréelle."],
      ["had lived", false, "Le past perfect ne s'emploie pas dans la principale."],
    ], "La condition porte sur le passé (had accepted) mais la conséquence sur le présent (now) : would + base verbale, ici would be living.", "Mixte : if + past perfect → would + base verbale (conséquence présente).", [
      "Repère le mot now.",
      "La condition est passée, la conséquence présente.",
      "La principale prend would + base verbale (ou be + -ing).",
    ], { a: "exemple" }),
    E("B-EN-COND-012", S, "en.cond.inversion", 3, "Complete the sentence: « ___ I known about the strike, I would have taken a taxi. »", [
      ["Had", true, "Inversion soutenue : Had I known = If I had known."],
      ["If", false, "If I known est incorrect : il manque had."],
      ["Have", false, "Have I known est une question au present perfect, sans valeur conditionnelle."],
      ["Would", false, "Would ne s'emploie jamais dans la condition."],
    ], "La principale est au type 3 (would have taken). La condition serait If I had known ; sans if, on inverse : Had I known.", "Had + sujet + participe = If + sujet + had + participe.", [
      "La principale indique un type 3.",
      "Le type 3 demande had + participe dans la condition.",
      "Sans if, l'auxiliaire passe devant le sujet.",
    ], { r: true }),
  ],
};
