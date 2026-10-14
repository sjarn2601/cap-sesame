import { E, skill, type EnPart } from "./common";

const S = "en.reading";

const T = (text: string, question: string) => `Read the text and answer the question.\n\n${text}\n\n${question}`;

export const READING: EnPart = {
  skill: skill(S, "Compréhension", "Compréhension de textes courts", ["reading", "comprehension", "texte", "article", "email", "courriel", "main idea", "idee principale", "inference"]),
  lesson: {
    skillId: S,
    title: "Comprendre un texte court en temps limité",
    objectives: ["Repérer l'idée principale d'un article ou d'un courriel", "Retrouver un détail précis sans tout relire", "Identifier le référent d'un pronom et faire une inférence prudente"],
    prerequisites: ["en.vocab", "en.syntax"],
    regle:
      "Les questions de compréhension portent sur un texte court (article de presse, courriel, annonce) de 80 à 150 mots, suivi d'une question. Elles demandent plus de temps qu'une question de grammaire : environ 1 min à 1 min 30. Il faut donc une lecture efficace.\n\n" +
      "Types de questions. Idée principale (What is the text mainly about? What is the purpose of the email?) : la réponse résume tout le texte, pas un détail. Détail (According to the text, when / how many / why…?) : la réponse se trouve dans une phrase précise, souvent reformulée. Affirmation vraie ou fausse (Which statement is true / NOT mentioned?) : chaque option doit être vérifiée dans le texte. Référent (What does « it » refer to?) : le pronom renvoie le plus souvent au nom du même genre et du même nombre mentionné juste avant. Inférence (What can be inferred?) : la réponse n'est pas écrite mot pour mot mais découle logiquement du texte, sans ajout d'opinion personnelle.\n\n" +
      "Les pièges des options. L'option qui reprend des mots exacts du texte n'est pas forcément la bonne : les concepteurs reprennent volontiers un mot du texte dans une option fausse. À l'inverse, la bonne réponse est souvent une reformulation (synonymes, tournure différente). Méfie-toi aussi des options trop absolues (always, never, all, only) quand le texte nuance (some, may, most), et des options vraies dans la réalité mais absentes du texte.\n\n" +
      "Mots de liaison à repérer : however, but, although (changement de direction), so, therefore, as a result (conséquence), for instance (exemple), in fact, actually (correction ou précision).",
    formules:
      "main idea : la réponse couvre tout le texte\n" +
      "detail : la réponse est dans une phrase précise, reformulée\n" +
      "NOT mentioned / false : vérifier chaque option\n" +
      "refer to : chercher le nom juste avant le pronom (genre, nombre)\n" +
      "infer : conclusion logique, sans opinion personnelle\n" +
      "signaux : however, but (contraste) ; so, as a result (conséquence)\n" +
      "options absolues (always, never, all) : souvent fausses",
    methode:
      "1. Lis d'abord la question, puis survole les options : tu sais ce que tu cherches.\n" +
      "2. Lis le texte une fois en entier, à bon rythme, en repérant les mots de liaison.\n" +
      "3. Retrouve le passage qui répond et compare-le avec chaque option.\n" +
      "4. Élimine les options contredites, absentes du texte ou trop absolues.\n" +
      "5. Choisis l'option qui reformule le texte, pas celle qui en recopie un mot.",
    exemple:
      "Texte : « The library will extend its opening hours during the exam period. From 2 to 20 May, it will stay open until midnight. However, the cafeteria will keep its usual hours. »\n" +
      "Question : What will change in May? La réponse est « the library will close later ». Une option « the cafeteria will open until midnight » reprend des mots du texte mais est contredite par however. Une option « the library will open earlier » n'est pas dans le texte.",
    erreur:
      "✗ Choisir l'option qui recopie un mot du texte → ✓ Vérifier que le sens de l'option correspond au passage\n" +
      "✗ Répondre avec ses connaissances générales → ✓ Répondre uniquement d'après le texte\n" +
      "✗ Prendre un détail pour l'idée principale → ✓ Chercher la réponse qui couvre tout le texte\n" +
      "✗ Ignorer however et but → ✓ S'arrêter sur chaque changement de direction\n" +
      "✗ Relire tout le texte pour chaque option → ✓ Localiser le passage utile, puis comparer",
    approfondir:
      "Dans un courriel, l'objet (Subject) et la première et la dernière phrase donnent généralement le but du message. Dans un article, le titre et la première phrase donnent l'idée principale.\n\n" +
      "Lien avec le vocabulaire : les reformulations jouent souvent sur les synonymes (postpone / put off, staff / employees, rise / increase). Un bon vocabulaire fait gagner du temps ici.\n\n" +
      "Gestion du temps : n'accorde pas plus d'une minute et demie à une question de texte. Si deux options restent, choisis la plus prudente et passe à la suite.",
    cards: [
      ["Question « main idea »", "La réponse couvre tout le texte, pas un détail", false],
      ["Option qui recopie un mot du texte", "Piège fréquent : vérifier le sens", false],
      ["However, but", "Signalent un contraste : la suite nuance ce qui précède", false],
      ["Inference", "Conclusion logique tirée du texte, sans opinion personnelle", false],
    ],
  },
  questions: [
    E("B-EN-READ-001", S, "en.read.purpose", 2, T(
      "Subject: New hybrid working policy\n\n" +
      "Dear colleagues,\n\n" +
      "Following last month's staff survey, the management team has decided to update our working arrangements. From 1 September, all employees will be able to work from home up to two days a week, instead of one at present. Team meetings will take place on Tuesdays, when everyone is expected to be in the office. Employees who wish to work remotely on a given day must inform their manager by Friday of the previous week. Please note that the new policy does not apply to staff working at the reception desk or in the warehouse, whose presence on site remains necessary. If you have any questions, the HR department will hold an information session next Thursday.\n\n" +
      "Best regards,\nHelen Price, HR Director",
      "What is the main purpose of this email?"), [
      ["To announce that employees will be allowed more days of remote work", true, "C'est l'objet du courriel : passage d'un à deux jours de télétravail par semaine."],
      ["To ask employees to fill in a staff survey", false, "L'enquête a déjà eu lieu (last month's staff survey)."],
      ["To announce that the reception desk will close on Tuesdays", false, "Détail déformé : l'accueil est exclu de la mesure, il ne ferme pas."],
      ["To invite employees to a team meeting next Thursday", false, "Jeudi, c'est une séance d'information RH, et ce n'est pas le but principal du message."],
    ], "L'objet (New hybrid working policy) et la phrase centrale (up to two days a week, instead of one) donnent le but : annoncer plus de télétravail. Les autres options déforment des détails.", "But d'un courriel : objet + phrase principale, pas un détail.", [
      "Lis l'objet du courriel.",
      "Quelle décision est annoncée dans la phrase la plus importante ?",
      "Les autres options reprennent des détails déformés.",
    ], { t: 75, a: "methode" }),
    E("B-EN-READ-002", S, "en.read.detail", 2, T(
      "Car-free Sundays in Brennford\n\n" +
      "Since last spring, the historic centre of Brennford has been closed to private cars every first Sunday of the month. Buses, taxis and delivery vans can still enter the area, but only before 10 a.m. Local shopkeepers were worried at first that they would lose customers. However, a report published by the city council shows that their sales actually increased by 6% on car-free days, as more families came to walk and cycle in the streets. The council now plans to extend the scheme to every Sunday from next year, although some residents complain that parking in neighbouring districts has become more difficult.",
      "According to the text, what happened to shop sales on car-free days?"), [
      ["They rose.", true, "Sales actually increased by 6% : les ventes ont augmenté."],
      ["They fell, as shopkeepers had feared.", false, "Contredit par however et actually : les craintes ne se sont pas réalisées."],
      ["They stayed exactly the same.", false, "Le texte indique une hausse de 6 %."],
      ["They doubled thanks to families.", false, "Exagération : 6 % n'est pas un doublement."],
    ], "Le passage clé : « their sales actually increased by 6% ». However signale que les craintes initiales ont été démenties. Actually signifie « en fait », pas « actuellement ».", "Un détail se retrouve dans une phrase précise ; however annonce un démenti.", [
      "Cherche le mot sales dans le texte.",
      "Quel mot de liaison précède cette phrase ?",
      "Increased by 6% : hausse, mais modérée.",
    ], { t: 75 }),
    E("B-EN-READ-003", S, "en.read.reference", 2, T(
      "Exam season at the university library\n\n" +
      "During the exam period, from 2 to 20 May, the main library will stay open until midnight from Monday to Saturday. Students will need their student card to enter after 8 p.m. Group study rooms can be booked online for up to three hours a day; they are very popular, so students are advised to reserve them at least a week in advance. The library café, however, will keep its normal hours and close at 6 p.m. Finally, the library reminds students that food is not allowed in the reading rooms, although water bottles are accepted.",
      "In the text, what does « they » refer to in « they are very popular »?"), [
      ["the group study rooms", true, "They reprend le dernier nom pluriel de la phrase : group study rooms."],
      ["the students", false, "Students apparaît ensuite comme sujet distinct (so students are advised) : ce ne sont pas eux qui sont populaires."],
      ["the exams", false, "Les examens ne sont pas mentionnés dans cette phrase."],
      ["the water bottles", false, "Les bouteilles sont mentionnées plus loin, dans une autre phrase."],
    ], "They suit directement « Group study rooms can be booked online… » : ce sont les salles qui sont très demandées, d'où le conseil de réserver tôt.", "Un pronom reprend en général le nom de même nombre le plus proche avant lui.", [
      "They est un pronom pluriel.",
      "Cherche le nom pluriel juste avant.",
      "Qu'est-ce qu'on conseille de réserver à l'avance ?",
    ], { t: 75, a: "formules" }),
    E("B-EN-READ-004", S, "en.read.notmentioned", 3, T(
      "From waste to resource\n\n" +
      "Founded in 2021 by two engineering students, Second Roast collects used coffee grounds from about 150 cafés in the city. The start-up dries them and turns them into fuel logs for wood burners, as well as a natural fertiliser sold to local gardeners. According to its founders, coffee grounds release less smoke than wood when burned and would otherwise end up in landfill, where they produce methane. The company, which now employs twelve people, recently raised £800,000 from investors. It hopes to open a second site in another city next year, but it admits that transport costs remain its main challenge.",
      "Which of the following is NOT mentioned in the text?"), [
      ["The price of the fuel logs", true, "Le texte ne donne aucun prix pour les bûches."],
      ["The number of cafés supplying the company", false, "Mentionné : about 150 cafés."],
      ["The amount of money raised from investors", false, "Mentionné : £800,000."],
      ["The company's main difficulty", false, "Mentionné : transport costs remain its main challenge."],
    ], "Il faut vérifier chaque option : nombre de cafés (150), fonds levés (800 000 £), principale difficulté (coûts de transport) sont cités. Le prix des bûches ne l'est pas.", "Question NOT mentioned : vérifier chaque option dans le texte.", [
      "La question demande ce qui est absent.",
      "Vérifie chaque option une par une.",
      "Le texte donne-t-il un prix de vente ?",
    ], { t: 75, r: true }),
    E("B-EN-READ-005", S, "en.read.detail", 2, T(
      "Subject: Your flight FL2317 – delay\n\n" +
      "Dear Ms Laurent,\n\n" +
      "We are sorry to inform you that your flight from London to Lisbon on 12 July was delayed by four hours because of a technical problem. Under our compensation policy, passengers whose flight arrives more than three hours late are entitled to compensation of up to €400. To claim it, please complete the online form on our website within 30 days and attach a copy of your boarding pass. Please do not send original documents by post. Our customer service team will process your request within six weeks. We apologise again for the inconvenience.\n\n" +
      "Kind regards,\nCustomer Relations",
      "What must Ms Laurent do to receive compensation?"), [
      ["Fill in a form online and include a copy of her boarding pass", true, "Complete the online form… and attach a copy of your boarding pass."],
      ["Post her original boarding pass to customer service", false, "Contredit : do not send original documents by post."],
      ["Wait six weeks before making a claim", false, "Six semaines est le délai de traitement, pas un délai d'attente avant la demande."],
      ["Call customer service within three hours", false, "Three hours est le seuil de retard, sans lien avec un appel."],
    ], "La démarche figure dans la phrase « To claim it, please complete the online form… and attach a copy of your boarding pass ». Les autres options détournent des chiffres du texte.", "Détail : retrouver la phrase exacte ; se méfier des chiffres réemployés.", [
      "Cherche l'expression To claim it.",
      "Que doit-elle remplir et joindre ?",
      "Attention aux chiffres du texte réutilisés dans les options.",
    ], { t: 75 }),
    E("B-EN-READ-006", S, "en.read.inference", 3, T(
      "Screens and sleep\n\n" +
      "A recent study of 2,000 teenagers suggests that using a smartphone in bed may cost young people up to an hour of sleep per night. Researchers found that pupils who kept their phone in their bedroom fell asleep later and woke up more often than those who left it in another room. Interestingly, the effect was smaller among pupils who switched their phone to silent mode, but it did not disappear. The authors recommend that families set a « screen curfew » one hour before bedtime. They admit, however, that the study shows a link, not a proof of cause and effect, and that further research is needed.",
      "What can be inferred from the text?"), [
      ["Keeping a phone out of the bedroom may help teenagers sleep better.", true, "Inférence prudente fondée sur la comparaison entre les deux groupes d'élèves."],
      ["Silent mode completely solves the problem.", false, "Contredit : the effect was smaller… but it did not disappear."],
      ["The study proves that smartphones cause sleep problems.", false, "Contredit : a link, not a proof of cause and effect."],
      ["Most teenagers sleep less than six hours a night.", false, "Aucune donnée de ce type dans le texte."],
    ], "Ceux qui laissent leur téléphone dans une autre pièce dorment mieux : on peut en déduire, avec prudence (may), que l'éloigner aide. Les options absolues (completely, proves) sont démenties par le texte.", "Inférence : conclusion prudente fondée sur le texte ; se méfier des options absolues.", [
      "Compare les deux groupes d'élèves décrits.",
      "Repère les nuances : may, smaller, not a proof.",
      "Écarte les options trop absolues.",
    ], { t: 75, a: "regle" }),
    E("B-EN-READ-007", S, "en.read.detail", 2, T(
      "Summer internship – Digital Marketing Assistant\n\n" +
      "Greenleaf Travel, a fast-growing travel agency based in Edinburgh, is looking for a marketing intern for ten weeks from mid-June. You will help our team create content for our social media accounts, analyse the results of online campaigns and organise a customer survey. Applicants should be studying business, marketing or communication and have a good level of written English. A second European language would be an advantage but is not essential. The internship is paid £1,500 per month and includes two days of remote work per week. To apply, send your CV and a short cover letter by email before 15 April.",
      "Which statement about the internship is true?"), [
      ["Speaking another European language is useful but not required.", true, "Reformulation de : would be an advantage but is not essential."],
      ["Applicants must speak a second European language.", false, "Contredit : not essential."],
      ["The internship is unpaid but includes remote work.", false, "Contredit : paid £1,500 per month."],
      ["The internship lasts ten months.", false, "Le stage dure dix semaines (ten weeks)."],
    ], "La phrase « A second European language would be an advantage but is not essential » est reformulée dans la bonne réponse (useful but not required).", "La bonne option reformule souvent le texte avec des synonymes.", [
      "Vérifie chaque option dans l'annonce.",
      "Cherche la phrase sur les langues.",
      "Essential = required.",
    ], { t: 75 }),
    E("B-EN-READ-008", S, "en.read.mainidea", 2, T(
      "Four-day week: a trial that lasted\n\n" +
      "Eighteen months ago, a software company in Leeds allowed its 90 employees to work four days a week for the same salary, as long as they reached their objectives. The managers expected the trial to last six months. Instead, they have decided to make it permanent. Productivity, measured by the number of projects delivered on time, has remained stable, while sick days have fallen by a third. The company also says it has found it easier to recruit developers in a very competitive market. Not everything has been simple, though: some customers complained at first that they could not reach the company on Fridays, so a small team now works on a rotating basis.",
      "What is the text mainly about?"), [
      ["A company that has kept a four-day week because the results were positive", true, "Idée principale : essai prolongé et rendu permanent grâce à des résultats favorables."],
      ["The difficulty of recruiting software developers in Leeds", false, "Détail secondaire du texte, pas son sujet principal."],
      ["Customers who complained about a company's opening hours", false, "Détail limité à la fin du texte."],
      ["A company that cut salaries to reduce working time", false, "Contredit : for the same salary."],
    ], "Le titre et la plupart des phrases portent sur la semaine de quatre jours, désormais permanente, et ses effets positifs. Recrutement et plaintes de clients sont des détails.", "Idée principale : ce qui couvre l'ensemble du texte, souvent annoncé par le titre.", [
      "Lis le titre et la première phrase.",
      "Quelle décision est prise au milieu du texte ?",
      "Écarte les détails qui n'occupent qu'une phrase.",
    ], { t: 75 }),
    E("B-EN-READ-009", S, "en.read.detail", 3, T(
      "Too many visitors?\n\n" +
      "Lindenau, a lakeside village of fewer than 800 inhabitants in the Alps, welcomes up to 10,000 tourists on some summer days. Many of them come on day trips by coach, stay for less than two hours and spend very little money locally. To reduce congestion, the authorities have limited the number of coaches to 50 a day, and coach companies must now book a time slot in advance. Visitors arriving by car or train are not affected. Some residents would like to go further and introduce an entry fee, as some famous cities have done, but the mayor fears that it would damage the village's image.",
      "According to the text, which measure has already been introduced?"), [
      ["A daily limit on coaches, which must book in advance", true, "Limited the number of coaches to 50 a day… must now book a time slot."],
      ["An entry fee for all visitors", false, "Ce n'est qu'une proposition de certains habitants, que le maire redoute."],
      ["A ban on visitors arriving by car", false, "Contredit : visitors arriving by car or train are not affected."],
      ["A limit of two hours per visit", false, "Deux heures est la durée moyenne observée, pas une règle."],
    ], "Seule la limitation des autocars (50 par jour, réservation obligatoire) est en vigueur. Le droit d'entrée n'est qu'un souhait (would like to) et le maire y est réticent.", "Distinguer ce qui est fait (have limited) de ce qui est envisagé (would like to).", [
      "Repère les verbes au present perfect et au présent.",
      "Would like to signale un projet, pas une mesure.",
      "Seule une option correspond à une mesure en vigueur.",
    ], { t: 75, r: true }),
    E("B-EN-READ-010", S, "en.read.vocab", 2, T(
      "Subject: Change to our meeting\n\n" +
      "Hi Tom,\n\n" +
      "I'm afraid I have to put off our meeting on Wednesday. The client from Madrid has just asked to see our whole team on the same afternoon, and I can't miss it since I'm in charge of the account. Would Friday morning suit you instead? I'm free from 9 to 11. If that doesn't work for you, we could also have a quick video call on Thursday evening. In the meantime, could you send me the latest version of the budget? I'd like to go through it before we talk.\n\n" +
      "Thanks for your understanding,\nSarah",
      "In this email, « put off » is closest in meaning to:"), [
      ["postpone", true, "Put off = reporter : Sarah propose une autre date."],
      ["cancel", false, "Annuler définitivement : contredit par la proposition de vendredi."],
      ["organise", false, "Elle n'organise pas la réunion, elle la décale."],
      ["attend", false, "Attend = assister à, sans rapport avec put off."],
    ], "Sarah ne supprime pas la réunion : elle propose vendredi ou jeudi soir. Put off signifie donc reporter, postpone.", "put off = postpone (reporter) ; call off = cancel (annuler).", [
      "La réunion est-elle supprimée ou déplacée ?",
      "Sarah propose une nouvelle date.",
      "Cherche le synonyme de reporter.",
    ], { t: 75, a: "approfondir" }),
  ],
};
