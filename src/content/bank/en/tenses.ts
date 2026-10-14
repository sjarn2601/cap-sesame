import { E, type EnPart } from "./common";

const S = "en.tenses";

export const TENSES: EnPart = {
  lesson: {
    skillId: S,
    title: "Les temps verbaux en anglais",
    objectives: ["Choisir entre prétérit et present perfect", "Employer for, since et ago sans calque", "Situer une action avec le past perfect", "Exprimer le futur selon le sens visé"],
    regle:
      "En anglais, le temps ne se choisit pas d'après le verbe français, mais d'après la relation entre l'action et le moment où l'on parle. Repère toujours d'abord le marqueur de temps.\n\n" +
      "Présent simple : habitude, vérité générale, état (I work in Lyon. Water boils at 100 °C). Présent en be + -ing : action en cours au moment où l'on parle ou situation temporaire (Look, it's snowing). Les verbes d'état (know, understand, believe, want, like, belong, need, mean) ne se mettent normalement pas en -ing : I understand, et non I am understanding.\n\n" +
      "Prétérit : action terminée, coupée du présent, souvent datée (yesterday, last year, in 2019, three days ago, when I was a child). Present perfect (have + participe passé) : lien avec le présent, bilan, expérience, conséquence visible, ou durée qui se poursuit avec for (durée) et since (point de départ). Le français dit « j'habite ici depuis 2020 » au présent ; l'anglais exige I have lived (ou have been living) here since 2020. Ago se place après la durée et va avec le prétérit : I met her two years ago.\n\n" +
      "Present perfect en be + -ing (have been working) : activité qui dure jusqu'à maintenant, souvent avec How long. Past continuous (was working) : action en cours dans le passé, interrompue par un prétérit. Past perfect (had + participe) : action antérieure à un autre repère passé (When I arrived, the train had left). Past perfect en -ing (had been working) : durée avant ce repère.\n\n" +
      "Futur : will (décision sur le moment, prévision, promesse), be going to (intention déjà prise, prévision fondée sur un indice), présent en -ing (rendez-vous organisé), will be + -ing (action en cours à un moment futur), will have + participe (action achevée avant un repère futur, by + date). Après when, as soon as, until, before, after, once, on n'emploie pas will : I'll call you when I arrive.\n\n" +
      "It's the first time + present perfect : It's the first time I have flown.",
    formules:
      "Present simple : I work / she works / do you work?\n" +
      "Present continuous : I am working / she is working\n" +
      "Preterite : I worked / I went / did you go?\n" +
      "Present perfect : I have worked / she has gone\n" +
      "Present perfect continuous : I have been working\n" +
      "Past continuous : I was working\n" +
      "Past perfect : I had worked ; past perfect continuous : I had been working\n" +
      "Future : will work / am going to work / will be working / will have worked\n" +
      "for + durée (for ten years) ; since + point de départ (since 2019, since I was ten)\n" +
      "durée + ago + prétérit (three years ago)\n" +
      "when / as soon as / until + présent pour un sens futur",
    methode:
      "1. Souligne le marqueur de temps (yesterday, since, for, ago, by the time, when, now).\n" +
      "2. Demande-toi : l'action est-elle terminée et datée, reliée au présent, en cours, ou antérieure à un autre passé ?\n" +
      "3. Élimine les formes mal construites (has went, did went, am understanding).\n" +
      "4. Relis la phrase complète : la forme choisie doit être cohérente avec toute la phrase, pas seulement avec le verbe voisin.",
    exemple:
      "Phrase : « I ___ in this company for ten years and I still love it. »\n" +
      "Marqueur : for ten years, et « I still love it » montre que la situation continue. Le français dirait « je travaille ici depuis dix ans », mais l'anglais exige le present perfect : I have worked ou I have been working. I am working est un calque ; I worked suggère que c'est fini, ce qui contredit « still ».\n\n" +
      "Phrase : « When we got to the cinema, the film ___ . » Deux actions passées : le film a commencé avant notre arrivée. On prend le past perfect : had already started.",
    erreur:
      "✗ I live in Paris since 2020 → ✓ I have lived in Paris since 2020\n" +
      "✗ I have seen him yesterday → ✓ I saw him yesterday\n" +
      "✗ Since three years → ✓ For three years\n" +
      "✗ I will call you when I will arrive → ✓ I will call you when I arrive\n" +
      "✗ I am knowing the answer → ✓ I know the answer\n" +
      "✗ It's the first time I eat sushi → ✓ It's the first time I have eaten sushi",
    approfondir:
      "En américain courant, on entend « Did you eat yet? » au lieu de « Have you eaten yet? » ; au concours, privilégie la règle britannique, qui reste correcte partout.\n\n" +
      "Astuce de rapidité : un marqueur de date passée (yesterday, last, ago, in 2015) élimine immédiatement le present perfect ; for ou since + durée qui court jusqu'à maintenant éliminent le présent simple et le prétérit pour le verbe principal (I have known her since 2020).\n\n" +
      "Gestion du temps : ces questions doivent se traiter en moins de 30 secondes. Si deux formes restent possibles, cherche un deuxième indice dans la phrase (still, already, by the time).",
    cards: [
      ["J'habite ici depuis 2020", "I have lived here since 2020", true],
      ["for / since", "for + durée (for two years) ; since + point de départ (since 2024)", false],
      ["Il y a trois ans (prétérit)", "three years ago : I met her three years ago", true],
      ["Action antérieure à un repère passé", "Past perfect : had + participe passé", false],
      ["Futur après when / as soon as", "Présent simple : when I arrive", false],
    ],
  },
  questions: [
    E("B-EN-TEN-001", S, "en.ten.preterite", 1, "Complete the sentence: « We ___ the contract last Tuesday. »", [
      ["signed", true, "Prétérit : action terminée et datée (last Tuesday)."],
      ["have signed", false, "Present perfect impossible avec une date passée précise comme last Tuesday."],
      ["sign", false, "Le présent simple ne convient pas à un repère passé."],
      ["are signing", false, "Le présent en -ing décrit une action en cours ou prévue, pas un fait daté du passé."],
    ], "Last Tuesday situe l'action dans un passé coupé du présent : on emploie le prétérit, signed.", "Date passée précise (last, yesterday, ago, in 2019) → prétérit.", [
      "Repère le marqueur de temps de la phrase.",
      "Last Tuesday est-il relié au présent ou coupé de lui ?",
      "Un repère passé daté exclut le present perfect.",
    ]),
    E("B-EN-TEN-002", S, "en.ten.forsince", 1, "Complete the sentence: « She moved to Dublin three years ___. »", [
      ["ago", true, "Durée + ago avec le prétérit : il y a trois ans."],
      ["for", false, "For introduit une durée qui se poursuit, avec le present perfect, et se place avant la durée."],
      ["since", false, "Since introduit un point de départ (since 2023), pas une durée."],
      ["during", false, "During se place avant un nom (during the summer), jamais après une durée."],
    ], "« Il y a trois ans » se dit three years ago ; le verbe est au prétérit (moved).", "Durée + ago = il y a ; toujours avec le prétérit.", [
      "Cherche l'équivalent de « il y a » en anglais.",
      "Ce mot se place après la durée.",
      "Le verbe moved est au prétérit, ce qui va avec ce mot.",
    ]),
    E("B-EN-TEN-003", S, "en.ten.forsince", 1, "Complete the sentence: « I haven't seen my cousins ___ Christmas. »", [
      ["since", true, "Since + point de départ (Christmas), avec le present perfect."],
      ["for", false, "For se construit avec une durée (for three weeks), pas avec une date."],
      ["from", false, "From s'emploie avec to ou until (from May to June), pas seul avec le present perfect."],
      ["ago", false, "Ago suit une durée et va avec le prétérit."],
    ], "Christmas est un point de départ : since Christmas. Le verbe est déjà au present perfect (haven't seen).", "since + point de départ ; for + durée.", [
      "Christmas est-il une durée ou un moment précis ?",
      "Un point de départ se construit avec un mot précis.",
      "C'est le mot qui correspond à « depuis » devant une date.",
    ]),
    E("B-EN-TEN-004", S, "en.ten.ppcont", 2, "Complete the sentence: « I ___ for this company for ten years, and I still enjoy it. »", [
      ["have been working", true, "Present perfect continu : activité commencée il y a dix ans et toujours en cours."],
      ["am working", false, "Calque du français « je travaille depuis » : le présent est impossible avec for + durée jusqu'à maintenant."],
      ["work", false, "Le présent simple ne peut pas exprimer une durée qui court jusqu'au présent."],
      ["was working", false, "Le past continuous situe l'action dans le passé, ce qui contredit « I still enjoy it »."],
    ], "For ten years + « still » : la situation dure jusqu'à maintenant. L'anglais exige le present perfect, ici dans sa forme continue : have been working.", "Durée qui continue jusqu'au présent → present perfect (simple ou continu), jamais le présent.", [
      "Le français dirait « je travaille depuis dix ans ». L'anglais utilise-t-il le même temps ?",
      "For + durée jusqu'à maintenant appelle have + participe.",
      "Seule une forme commence par have.",
    ], { a: "erreur" }),
    E("B-EN-TEN-005", S, "en.ten.pastperfect", 2, "Complete the sentence: « When I arrived at the station, the train ___. »", [
      ["had already left", true, "Past perfect : le départ du train est antérieur à mon arrivée, elle-même passée."],
      ["has already left", false, "Le present perfect est relié au présent ; ici le repère est passé (arrived)."],
      ["have already left", false, "Erreur d'accord : the train est singulier, et le temps serait de toute façon inadapté."],
      ["is already leaving", false, "Le présent ne peut pas suivre un récit au prétérit."],
    ], "Deux actions passées : le train part, puis j'arrive. L'action la plus ancienne se met au past perfect : had already left.", "Action antérieure à un repère passé → had + participe passé.", [
      "Combien d'actions passées y a-t-il dans la phrase ?",
      "Laquelle a eu lieu en premier ?",
      "L'action la plus ancienne prend had.",
    ]),
    E("B-EN-TEN-006", S, "en.ten.present", 1, "Complete the sentence: « Look! It ___ again. Take an umbrella. »", [
      ["is raining", true, "Présent en -ing : action en cours au moment où l'on parle (Look!)."],
      ["rains", false, "Le présent simple exprime une habitude ou une généralité, pas ce qui se passe maintenant."],
      ["rained", false, "Prétérit incohérent avec Look! et l'impératif qui suit."],
      ["has rain", false, "Forme incorrecte : le present perfect exige le participe rained."],
    ], "Look! signale une action en train de se dérouler : on emploie be + -ing, it is raining.", "Action en cours maintenant → be + V-ing.", [
      "Que signale l'interjection Look! ?",
      "L'action est-elle habituelle ou en train de se produire ?",
      "Une action en cours se construit avec be + -ing.",
    ]),
    E("B-EN-TEN-007", S, "en.ten.present", 2, "Complete the sentence: « I ___ what you mean, but I disagree. »", [
      ["understand", true, "Understand est un verbe d'état : présent simple."],
      ["am understanding", false, "Les verbes d'état (understand, know, believe) ne se mettent pas à la forme en -ing."],
      ["understands", false, "Erreur d'accord : le -s ne s'emploie qu'à la 3e personne du singulier."],
      ["have understand", false, "Forme incorrecte : le present perfect exige le participe understood."],
    ], "Understand exprime un état mental, pas une activité : il reste au présent simple, même pour ce qui est vrai en ce moment.", "Verbes d'état (know, understand, want, believe, mean) : pas de -ing.", [
      "Understand décrit-il une action ou un état ?",
      "Certains verbes refusent la forme en -ing.",
      "Avec I, pas de -s au présent simple.",
    ]),
    E("B-EN-TEN-008", S, "en.ten.future", 2, "Complete the sentence: « I'll send you the file as soon as I ___ the results. »", [
      ["get", true, "Après as soon as, le futur s'exprime par le présent simple."],
      ["will get", false, "Calque du français « dès que j'aurai » : pas de will après as soon as, when, until."],
      ["would get", false, "Le conditionnel ne convient pas à une action future certaine."],
      ["am going to get", false, "Be going to ne s'emploie pas non plus dans une subordonnée de temps."],
    ], "Dans une subordonnée de temps (when, as soon as, until, before, once), l'anglais emploie le présent pour parler du futur : as soon as I get.", "when / as soon as / until + présent, même pour un sens futur.", [
      "Le français mettrait ici un futur. L'anglais fait-il de même après as soon as ?",
      "Les subordonnées de temps refusent will.",
      "Choisis la forme la plus simple du verbe.",
    ], { a: "erreur" }),
    E("B-EN-TEN-009", S, "en.ten.ppcont", 2, "Complete the dialogue: « How long ___ English? » « Since primary school. »", [
      ["have you been learning", true, "How long + present perfect continu : durée jusqu'à maintenant (since primary school)."],
      ["are you learning", false, "Calque de « depuis combien de temps apprends-tu » : le présent est impossible ici."],
      ["do you learn", false, "Le présent simple ne peut pas mesurer une durée jusqu'au présent."],
      ["you have been learning", false, "Ordre des mots incorrect : dans une question, l'auxiliaire précède le sujet."],
    ], "La réponse « Since primary school » montre une durée qui continue. Question : How long have you been learning English?", "How long… ? pour une durée jusqu'à maintenant → present perfect, auxiliaire avant le sujet.", [
      "La réponse commence par since : qu'est-ce que cela implique pour le temps ?",
      "Il faut have + participe ou have been + -ing.",
      "Vérifie aussi l'ordre auxiliaire-sujet dans la question.",
    ]),
    E("B-EN-TEN-010", S, "en.ten.future", 2, "Complete the sentence: « This time tomorrow, I ___ on a beach in Crete. »", [
      ["will be lying", true, "Futur en -ing : action en cours à un moment précis du futur."],
      ["will lying", false, "Forme incorrecte : will est suivi de la base verbale ou de be + -ing."],
      ["would be lying", false, "Le conditionnel suppose une hypothèse, absente ici."],
      ["am lie", false, "Forme incorrecte : be ne se combine pas avec la base verbale."],
    ], "This time tomorrow désigne un moment futur où l'action sera en cours : will be + V-ing, will be lying.", "Action en cours à un moment futur précis → will be + V-ing.", [
      "This time tomorrow : moment passé, présent ou futur ?",
      "L'action sera-t-elle ponctuelle ou en cours à ce moment-là ?",
      "Combine will et la forme en -ing.",
    ], { a: "formules" }),
    E("B-EN-TEN-011", S, "en.ten.pastperfect", 3, "Complete the sentence: « She was exhausted because she ___ all night. »", [
      ["had been studying", true, "Past perfect continu : activité qui a duré avant un repère passé (was exhausted)."],
      ["has been studying", false, "Le present perfect est relié au présent ; ici tout le récit est au passé."],
      ["was studied", false, "Forme passive : elle n'a pas été étudiée."],
      ["had studying", false, "Forme incorrecte : il manque been."],
    ], "Le repère est passé (was exhausted) et la cause est une activité prolongée encore antérieure : had been studying.", "Durée antérieure à un repère passé → had been + V-ing.", [
      "Le repère principal est-il au présent ou au passé ?",
      "L'action « étudier » précède ce repère et dure.",
      "Il faut had + been + -ing.",
    ], { r: true }),
    E("B-EN-TEN-012", S, "en.ten.firsttime", 3, "Complete the sentence: « It's the first time I ___ sushi, and I love it. »", [
      ["have eaten", true, "It's the first time + present perfect."],
      ["eat", false, "Calque de « c'est la première fois que je mange » : le présent est impossible."],
      ["am eating", false, "Calque également : la structure exige le present perfect."],
      ["ate", false, "Le prétérit s'emploierait avec It was the first time…, pas avec It's."],
    ], "Après It's the first time, l'anglais emploie le present perfect : It's the first time I have eaten sushi.", "It's the first time + present perfect ; It was the first time + past perfect.", [
      "La structure It's the first time impose un temps fixe.",
      "Ce temps fait le bilan d'une expérience jusqu'à maintenant.",
      "Have + participe passé.",
    ], { a: "erreur", r: true }),
  ],
};
