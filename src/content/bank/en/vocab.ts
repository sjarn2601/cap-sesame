import { E, type EnPart } from "./common";

const S = "en.vocab";

export const VOCAB: EnPart = {
  lesson: {
    skillId: S,
    title: "Faux-amis et confusions fréquentes",
    objectives: ["Éviter les faux-amis les plus fréquents", "Distinguer borrow / lend, rent / hire, say / tell", "Choisir entre make et do"],
    regle:
      "Un faux-ami ressemble à un mot français mais n'a pas le même sens. Au concours, il apparaît comme distracteur : l'option qui « sonne français » est souvent la mauvaise.\n\n" +
      "Faux-amis majeurs : actually = en fait (actuellement = currently, at the moment) ; eventually = finalement, à la longue (éventuellement = possibly) ; library = bibliothèque (librairie = bookshop) ; sensible = raisonnable, sensé (sensible = sensitive) ; achieve = réaliser, atteindre (achever = finish, complete) ; control = maîtriser, diriger (contrôler, vérifier = check) ; attend = assister à (attendre = wait for) ; pass an exam = réussir (passer un examen = take ou sit an exam) ; resume = reprendre (résumer = summarise) ; lecture = cours magistral, conférence (lecture = reading) ; deception = tromperie (déception = disappointment) ; support = soutenir (supporter = put up with, stand) ; propose = proposer formellement (un plan, une motion) ou demander en mariage (dans la conversation courante, proposer une idée se dit plutôt suggest) ; injury = blessure (injure = insult).\n\n" +
      "Paires à ne pas confondre. Borrow = emprunter (borrow something from someone) ; lend = prêter (lend someone something). Rent = louer (logement, voiture) ; hire = louer pour une courte durée en anglais britannique, mais surtout embaucher. Say / tell : voir le discours indirect ; tell + personne (tell me the time).\n\n" +
      "Make ou do ? Do pour les tâches, le travail, les activités en général : do homework, do the shopping, do a job, do business, do research, do your best, do someone a favour. Make pour la création, le résultat, les décisions : make a mistake, make a decision, make progress, make money, make a profit, make an effort, make a phone call, make a plan.",
    formules:
      "actually = en fait ; currently = actuellement\n" +
      "eventually = finalement ; possibly = éventuellement\n" +
      "library = bibliothèque ; bookshop = librairie\n" +
      "sensible = raisonnable ; sensitive = sensible\n" +
      "achieve = atteindre, réaliser ; finish = achever\n" +
      "control = maîtriser ; check = contrôler, vérifier\n" +
      "pass an exam = réussir ; take / sit an exam = passer\n" +
      "borrow from = emprunter ; lend to = prêter\n" +
      "do : homework, a job, research, the shopping, business\n" +
      "make : a mistake, a decision, progress, money, an effort",
    methode:
      "1. Si une option ressemble beaucoup à un mot français, méfie-toi : vérifie son sens réel.\n" +
      "2. Traduis la phrase dans ta tête, puis cherche le mot anglais qui correspond au sens, pas à la forme.\n" +
      "3. Pour borrow / lend : qui donne ? Celui qui donne lend, celui qui reçoit borrow.\n" +
      "4. Pour make / do : création ou résultat → make ; tâche ou activité → do.",
    exemple:
      "« Could you ___ me your notes? I missed the lecture. » La personne qui parle va recevoir les notes ; l'autre donne. Celui qui donne prête : lend me your notes. Borrow est un calque de « emprunter » mal placé. Remarque aussi lecture, qui signifie ici cours magistral.\n\n" +
      "« Il a passé son examen hier (on ne connaît pas le résultat) » se traduit He took (ou sat) his exam yesterday. He passed his exam signifierait qu'il l'a réussi.",
    erreur:
      "✗ Actually, I live in Lyon (pour « actuellement ») → ✓ Currently, I live in Lyon\n" +
      "✗ Can you borrow me your pen? → ✓ Can you lend me your pen?\n" +
      "✗ I passed my exam but I failed it → ✓ I took my exam but I failed it\n" +
      "✗ She is very sensible to criticism → ✓ She is very sensitive to criticism\n" +
      "✗ I did a mistake → ✓ I made a mistake\n" +
      "✗ The teacher controlled our homework → ✓ The teacher checked our homework",
    approfondir:
      "Certains mots sont de faux-amis partiels : formation (en anglais, surtout une formation géologique ou militaire ; une formation professionnelle = training), experience (expérience vécue ; une expérience scientifique = an experiment).\n\n" +
      "Fais une liste personnelle des faux-amis que tu as déjà confondus et relis-la avant chaque entraînement : ce sont toujours les mêmes qui piègent.\n\n" +
      "Gestion du temps : une question de faux-ami se règle en quelques secondes si tu connais la liste. Si tu ne la connais pas, ne perds pas de temps : élimine l'option la plus « française » et choisis parmi les autres.",
    cards: [
      ["Actuellement", "currently, at the moment (jamais actually)", true],
      ["Librairie", "bookshop (library = bibliothèque)", true],
      ["Prêter / emprunter", "lend / borrow", true],
      ["Passer un examen (sans le résultat)", "take / sit an exam", true],
      ["Faire une erreur", "make a mistake", true],
      ["Éventuellement", "possibly (eventually = finalement)", true],
    ],
  },
  questions: [
    E("B-EN-VOC-101", S, "en.voc.false", 1, "Complete the sentence: « I'm going to the ___ to borrow a few novels for the holidays. »", [
      ["library", true, "Library = bibliothèque, où l'on emprunte des livres."],
      ["bookshop", false, "Bookshop = librairie : on y achète des livres, on ne les emprunte pas."],
      ["bookcase", false, "Bookcase = étagère, bibliothèque au sens de meuble."],
      ["librairy", false, "Mot inexistant, mélange de library et de librairie."],
    ], "On emprunte des livres dans une bibliothèque : library. Une librairie se dit bookshop (ou bookstore).", "library = bibliothèque ; bookshop = librairie.", [
      "Où emprunte-t-on des livres ?",
      "Attention au faux-ami avec librairie.",
      "Library ne vend pas de livres.",
    ]),
    E("B-EN-VOC-102", S, "en.voc.false", 2, "Choose the best translation: « Actuellement, je travaille à Lyon. »", [
      ["I am currently working in Lyon.", true, "Currently = actuellement."],
      ["I am actually working in Lyon.", false, "Actually signifie « en fait », faux-ami de actuellement."],
      ["I am eventually working in Lyon.", false, "Eventually signifie « finalement »."],
      ["I am possibly working in Lyon.", false, "Possibly signifie « peut-être, éventuellement »."],
    ], "Actuellement se traduit par currently ou at the moment. Actually est un faux-ami : il signifie en fait.", "currently = actuellement ; actually = en fait.", [
      "Lequel de ces adverbes ressemble à actuellement ?",
      "C'est justement le faux-ami.",
      "Cherche l'adverbe qui signifie « en ce moment ».",
    ], { a: "erreur" }),
    E("B-EN-VOC-103", S, "en.voc.false", 2, "In the sentence « After months of negotiations, they eventually reached an agreement », « eventually » means:", [
      ["finalement", true, "Eventually = finalement, au bout du compte."],
      ["éventuellement", false, "Faux-ami : éventuellement se dit possibly."],
      ["actuellement", false, "Actuellement se dit currently."],
      ["évidemment", false, "Évidemment se dit obviously."],
    ], "« Après des mois de négociations, ils ont finalement trouvé un accord » : eventually exprime l'aboutissement.", "eventually = finalement ; possibly = éventuellement.", [
      "After months of negotiations : que suggère cette durée ?",
      "Eventually ressemble à un mot français : méfiance.",
      "L'idée est celle d'un aboutissement.",
    ]),
    E("B-EN-VOC-104", S, "en.voc.borrow", 2, "Complete the sentence: « Could you ___ me your notes? I missed yesterday's lecture. »", [
      ["lend", true, "Lend = prêter : l'autre donne ses notes au locuteur."],
      ["borrow", false, "Borrow signifie emprunter ; on dirait Could I borrow your notes?"],
      ["rent", false, "Rent signifie louer contre paiement."],
      ["hire", false, "Hire signifie embaucher ou louer, pas prêter."],
    ], "Le locuteur demande à l'autre de lui prêter ses notes : lend me your notes.", "lend somebody something = prêter ; borrow something from somebody = emprunter.", [
      "Qui donne les notes ?",
      "Celui qui donne prête.",
      "Prêter se dit lend.",
    ], { a: "exemple" }),
    E("B-EN-VOC-105", S, "en.voc.borrow", 1, "Complete the sentence: « Can I ___ your pen for a minute? Mine has run out of ink. »", [
      ["borrow", true, "Borrow = emprunter : le locuteur va recevoir le stylo."],
      ["lend", false, "Lend signifie prêter ; on dirait Can you lend me your pen?"],
      ["rent", false, "Rent signifie louer contre paiement."],
      ["hire", false, "Hire signifie embaucher ou louer."],
    ], "Avec Can I, c'est le locuteur qui reçoit : il emprunte, borrow.", "Can I borrow…? / Can you lend me…?", [
      "Le sujet est I : qui reçoit le stylo ?",
      "Celui qui reçoit emprunte.",
      "Emprunter se dit borrow.",
    ]),
    E("B-EN-VOC-106", S, "en.voc.makedo", 2, "Complete the sentence: « She ___ a lot of spelling mistakes in her last essay. »", [
      ["made", true, "Make a mistake."],
      ["did", false, "Calque de « faire des fautes » : on ne dit pas do a mistake."],
      ["took", false, "Take ne se combine pas avec mistake."],
      ["put", false, "Put ne se combine pas avec mistake dans ce sens."],
    ], "La collocation fixe est make a mistake.", "make a mistake, make a decision, make progress.", [
      "Make ou do ?",
      "Mistake fait partie d'une collocation fixe.",
      "Une erreur est un résultat : make.",
    ]),
    E("B-EN-VOC-107", S, "en.voc.makedo", 1, "Complete the sentence: « I have to ___ my homework before dinner, or my parents will be angry. »", [
      ["do", true, "Do homework : les tâches se construisent avec do."],
      ["make", false, "Make s'emploie pour la création ou le résultat, pas pour les devoirs."],
      ["take", false, "Take ne se combine pas avec homework."],
      ["pass", false, "Pass ne se combine pas avec homework."],
    ], "Les tâches et le travail se construisent avec do : do homework, do the shopping.", "do + tâche, travail ; make + résultat, création.", [
      "Les devoirs sont-ils une création ou une tâche ?",
      "Les tâches se construisent avec un verbe précis.",
      "Do homework.",
    ], { a: "formules" }),
    E("B-EN-VOC-108", S, "en.voc.false", 2, "In the sentence « She achieved her ambition of becoming a surgeon », « achieved » means:", [
      ["réalisé", true, "Achieve = réaliser, atteindre (un objectif, une ambition)."],
      ["achevé", false, "Faux-ami : achever se dit finish ou complete."],
      ["acheté", false, "Acheter se dit buy."],
      ["abandonné", false, "Abandonner se dit give up."],
    ], "Elle a réalisé son ambition de devenir chirurgienne : achieve = réaliser, atteindre.", "achieve = réaliser, atteindre ; finish = achever.", [
      "On achieve une ambition : que lui fait-on ?",
      "Achieve ressemble à un mot français : méfiance.",
      "On atteint un objectif.",
    ]),
    E("B-EN-VOC-109", S, "en.voc.false", 3, "Choose the best translation: « Il a passé son examen hier ; il aura les résultats lundi. »", [
      ["He took his exam yesterday; he'll get the results on Monday.", true, "Take an exam = passer un examen, sans préjuger du résultat."],
      ["He passed his exam yesterday; he'll get the results on Monday.", false, "Pass an exam signifie réussir : incohérent avec des résultats encore inconnus."],
      ["He spent his exam yesterday; he'll get the results on Monday.", false, "Spend s'emploie pour le temps ou l'argent, pas pour un examen."],
      ["He past his exam yesterday; he'll get the results on Monday.", false, "Past n'est pas un verbe : erreur d'orthographe sur passed."],
    ], "Passer un examen sans en connaître le résultat : take (ou sit) an exam. Pass an exam = le réussir.", "take / sit an exam = passer ; pass an exam = réussir.", [
      "Connaît-on déjà le résultat ?",
      "Pass est un faux-ami dans ce contexte.",
      "Le verbe neutre est take.",
    ], { r: true }),
    E("B-EN-VOC-110", S, "en.voc.false", 2, "Choose the best translation: « Le professeur a contrôlé nos devoirs. »", [
      ["The teacher checked our homework.", true, "Check = vérifier, contrôler."],
      ["The teacher controlled our homework.", false, "Control signifie maîtriser, diriger, pas vérifier."],
      ["The teacher mastered our homework.", false, "Master signifie maîtriser une compétence."],
      ["The teacher commanded our homework.", false, "Command signifie commander, ordonner."],
    ], "Contrôler au sens de vérifier se dit check. Control signifie avoir la maîtrise de quelque chose (control prices, control a company).", "check = vérifier ; control = maîtriser, diriger.", [
      "Que fait le professeur avec les devoirs ?",
      "Contrôler = vérifier ici.",
      "Control est un faux-ami.",
    ]),
    E("B-EN-VOC-111", S, "en.voc.false", 3, "Complete the sentence: « Be careful what you say to him; he's very ___ about his weight. »", [
      ["sensitive", true, "Sensitive = sensible, susceptible."],
      ["sensible", false, "Faux-ami : sensible signifie raisonnable."],
      ["sensibility", false, "Nom (sensibilité), alors qu'il faut un adjectif."],
      ["sensational", false, "Sensational signifie sensationnel."],
    ], "Être susceptible sur un sujet : sensitive about. Sensible signifie raisonnable.", "sensitive = sensible ; sensible = raisonnable.", [
      "Il faut un adjectif.",
      "Le sens est « susceptible ».",
      "Sensible est le faux-ami.",
    ], { r: true }),
    E("B-EN-VOC-112", S, "en.voc.saytell", 1, "Complete the question: « Excuse me, could you ___ me the time, please? »", [
      ["tell", true, "Tell somebody the time : dire l'heure à quelqu'un."],
      ["say", false, "Say n'a pas de complément de personne direct."],
      ["speak", false, "Speak ne se construit pas avec une personne + the time."],
      ["talk", false, "Talk ne se construit pas avec une personne + the time."],
    ], "Tell est suivi de la personne : tell me the time. C'est aussi une collocation fixe.", "tell somebody something ; tell the time, tell the truth.", [
      "Quel mot suit le blanc ?",
      "Un seul verbe accepte la personne juste après.",
      "Tell the time est une expression fixe.",
    ]),
  ],
};
