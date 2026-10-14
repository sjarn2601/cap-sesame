import { E, skill, type EnPart } from "./common";

const S = "en.phrasal";

export const PHRASAL: EnPart = {
  skill: skill(S, "Vocabulaire", "Phrasal verbs", ["phrasal verbs", "verbes a particule", "put off", "turn down", "lay off", "look after", "run out of", "set up"]),
  lesson: {
    skillId: S,
    title: "Les phrasal verbs les plus fréquents",
    objectives: ["Reconnaître le sens des phrasal verbs courants et professionnels", "Placer correctement le complément", "Distinguer les phrasal verbs construits sur le même verbe"],
    prerequisites: ["en.prep"],
    regle:
      "Un phrasal verb associe un verbe et une particule (up, down, off, out, in, on, over, after…) ; le sens de l'ensemble est souvent impossible à deviner à partir des deux mots. Put off ne veut pas dire « mettre dehors » mais « reporter ». Il faut donc les apprendre comme des mots à part entière, en contexte.\n\n" +
      "Place du complément. Avec la plupart des phrasal verbs transitifs, le nom peut se placer avant ou après la particule : turn off the light ou turn the light off. Mais un pronom se place obligatoirement entre le verbe et la particule : turn it off, jamais « turn off it ». Certains verbes sont inséparables : look after the children, look after them ; look for, run into, get over.\n\n" +
      "Verbes à trois éléments : put up with (supporter), run out of (être à court de), look forward to (attendre avec impatience), get on with (bien s'entendre avec), come up with (trouver une idée), catch up with (rattraper).\n\n" +
      "Au concours, les phrasal verbs sont souvent présentés en série sur un même verbe : turn down (refuser), turn up (arriver, se présenter), turn out (se révéler), turn off (éteindre). Lis la phrase entière et cherche le sens attendu avant de regarder les particules.\n\n" +
      "Monde professionnel : set up (créer, fonder), lay off (licencier pour raisons économiques), take over (racheter, prendre le contrôle), carry out (réaliser, mener), fill in (remplir un formulaire), call off (annuler), put off (reporter), take on (embaucher, accepter une tâche), point out (souligner), figure out (comprendre), find out (découvrir).",
    formules:
      "put off = reporter ; call off = annuler\n" +
      "put up with = supporter, tolérer\n" +
      "turn down = refuser ; turn up = arriver ; turn out = se révéler\n" +
      "look after = s'occuper de ; look for = chercher ; look up = chercher (dans un dictionnaire)\n" +
      "run out of = être à court de\n" +
      "set up = créer, fonder ; take over = racheter, reprendre\n" +
      "lay off = licencier ; take on = embaucher\n" +
      "fill in = remplir (un formulaire) ; carry out = mener, réaliser\n" +
      "take off = enlever, décoller ; give up = abandonner\n" +
      "pronom entre verbe et particule : turn it off, look it up",
    methode:
      "1. Lis toute la phrase et formule en français le sens attendu (reporter, refuser, s'occuper de…).\n" +
      "2. Compare ensuite les particules proposées : elles ont souvent un sens de base (off = arrêt, départ ; up = achèvement, création ; out = sortie, fin).\n" +
      "3. Vérifie la construction : préposition finale éventuelle (run out of), place du pronom.\n" +
      "4. Relis la phrase complète avec ton choix.",
    exemple:
      "« She ___ the job offer because the salary was too low. » Sens attendu : elle a refusé. Parmi turned down, turned up, turned off, turned out, seul turned down signifie refuser.\n\n" +
      "« If you don't know a word, look it up in a dictionary. » Chercher une information dans un ouvrage : look up. Le pronom it se place entre look et up.",
    erreur:
      "✗ Turn off it → ✓ Turn it off\n" +
      "✗ They put up the meeting until Monday (pour reporter) → ✓ They put off the meeting\n" +
      "✗ I can't support this noise → ✓ I can't put up with this noise\n" +
      "✗ We have run out coffee → ✓ We have run out of coffee\n" +
      "✗ Fill up the form → ✓ Fill in (ou fill out) the form",
    approfondir:
      "Fill in est britannique, fill out américain : les deux sont corrects pour un formulaire. Fill up signifie remplir un récipient ou un réservoir.\n\n" +
      "Beaucoup de phrasal verbs ont un équivalent latin plus soutenu : postpone (put off), cancel (call off), tolerate (put up with), establish (set up), discover (find out). Connaître les deux aide à repérer les synonymes en compréhension.\n\n" +
      "Gestion du temps : si tu hésites entre deux particules, choisis celle qui correspond à l'image de base (off = arrêt, out = fin, up = création) et passe à la suite.",
    cards: [
      ["Reporter une réunion", "put off a meeting", true],
      ["Supporter, tolérer", "put up with", true],
      ["Refuser une offre", "turn down an offer", true],
      ["Licencier (raisons économiques)", "lay off", true],
      ["Être à court de", "run out of", true],
      ["Créer une entreprise", "set up a company", true],
    ],
  },
  questions: [
    E("B-EN-PHR-001", S, "en.phr.work", 1, "Complete the sentence: « Could you ___ this registration form and send it back by Friday? »", [
      ["fill in", true, "Fill in a form : remplir un formulaire."],
      ["fill up", false, "Fill up signifie remplir un récipient ou un réservoir."],
      ["fill on", false, "Fill on n'existe pas."],
      ["fill at", false, "Fill at n'existe pas."],
    ], "Remplir un formulaire : fill in (britannique) ou fill out (américain).", "fill in a form ; fill up the tank.", [
      "Que fait-on d'un formulaire ?",
      "Fill up concerne un récipient.",
      "La particule de « remplir les cases ».",
    ]),
    E("B-EN-PHR-002", S, "en.phr.daily", 1, "Complete the sentence: « Please ___ your shoes before you come into the house. »", [
      ["take off", true, "Take off : enlever (un vêtement, des chaussures)."],
      ["take out", false, "Take out signifie sortir quelque chose d'un contenant."],
      ["take up", false, "Take up signifie commencer une activité ou occuper de la place."],
      ["take over", false, "Take over signifie reprendre, racheter."],
    ], "Enlever un vêtement ou des chaussures : take off.", "take off = enlever ; put on = mettre.", [
      "On demande d'enlever ses chaussures.",
      "Off évoque l'idée de séparation.",
      "Le contraire de put on.",
    ]),
    E("B-EN-PHR-003", S, "en.phr.work", 2, "Complete the sentence: « Because of falling sales, the factory had to ___ 200 workers. »", [
      ["lay off", true, "Lay off : licencier pour raisons économiques."],
      ["lay down", false, "Lay down signifie poser ou établir (des règles)."],
      ["lay out", false, "Lay out signifie disposer, présenter."],
      ["lay by", false, "Lay by signifie mettre de côté, sans rapport avec un licenciement."],
    ], "La baisse des ventes entraîne des licenciements économiques : lay off.", "lay off = licencier (raisons économiques) ; layoffs = licenciements.", [
      "Quelle conséquence de la baisse des ventes ?",
      "Il s'agit de supprimer des emplois.",
      "Off évoque l'arrêt, la séparation.",
    ]),
    E("B-EN-PHR-004", S, "en.phr.work", 2, "Complete the sentence: « The meeting has been ___ until next week because the director is ill. »", [
      ["put off", true, "Put off : reporter."],
      ["put out", false, "Put out signifie éteindre (un feu)."],
      ["put up", false, "Put up signifie installer, héberger ou augmenter."],
      ["put on", false, "Put on signifie mettre (un vêtement) ou organiser un spectacle."],
    ], "Until next week indique un report : put off (= postpone).", "put off = postpone = reporter.", [
      "Until next week : la réunion est-elle annulée ou reportée ?",
      "On cherche « reporter ».",
      "Off : la réunion est écartée pour le moment.",
    ]),
    E("B-EN-PHR-005", S, "en.phr.daily", 2, "Complete the sentence: « I can't ___ this noise any longer; I'm going to complain. »", [
      ["put up with", true, "Put up with : supporter, tolérer."],
      ["put off", false, "Put off signifie reporter."],
      ["get up", false, "Get up signifie se lever."],
      ["keep up with", false, "Keep up with signifie suivre le rythme, pas tolérer."],
    ], "Je vais me plaindre parce que je ne supporte plus le bruit : put up with.", "put up with = tolerate = supporter.", [
      "Que ressent le locuteur face au bruit ?",
      "Le français dirait « supporter ». Attention, support est un faux-ami.",
      "Un phrasal verb à trois éléments.",
    ], { a: "erreur" }),
    E("B-EN-PHR-006", S, "en.phr.turn", 2, "Complete the sentence: « She ___ the job offer because the salary was too low. »", [
      ["turned down", true, "Turn down : refuser."],
      ["turned up", false, "Turn up signifie arriver, se présenter."],
      ["turned off", false, "Turn off signifie éteindre."],
      ["turned out", false, "Turn out signifie se révéler."],
    ], "Un salaire trop bas conduit à refuser l'offre : turned down.", "turn down = refuser ; turn up = arriver ; turn out = se révéler.", [
      "Qu'a-t-elle fait de l'offre ?",
      "On cherche « refuser ».",
      "La particule de la baisse.",
    ], { a: "exemple" }),
    E("B-EN-PHR-007", S, "en.phr.turn", 3, "Complete the sentence: « Everyone believed the rumour, but it ___ that it was completely false. »", [
      ["turned out", true, "It turned out that… : il s'est avéré que."],
      ["turned up", false, "Turn up signifie arriver, se présenter."],
      ["turned off", false, "Turn off signifie éteindre."],
      ["found out", false, "Find out exige un sujet humain : we found out that."],
    ], "« Il s'est avéré que » : it turned out that.", "It turned out that… = il s'est avéré que.", [
      "On cherche « il s'est avéré que ».",
      "Le sujet est un it impersonnel.",
      "Out évoque le résultat final.",
    ], { r: true }),
    E("B-EN-PHR-008", S, "en.phr.daily", 1, "Complete the sentence: « We've ___ milk; could you buy some on your way home? »", [
      ["run out of", true, "Run out of : ne plus avoir de, être à court de."],
      ["run into", false, "Run into signifie rencontrer par hasard ou heurter."],
      ["run over", false, "Run over signifie renverser (en voiture) ou dépasser."],
      ["run away", false, "Run away signifie s'enfuir."],
    ], "Il faut racheter du lait parce qu'il n'y en a plus : run out of.", "run out of = être à court de.", [
      "Pourquoi faut-il acheter du lait ?",
      "On n'en a plus.",
      "Un phrasal verb à trois éléments.",
    ]),
    E("B-EN-PHR-009", S, "en.phr.look", 1, "Complete the sentence: « Can you ___ the children while I'm at the job interview? »", [
      ["look after", true, "Look after : s'occuper de, garder."],
      ["look for", false, "Look for signifie chercher."],
      ["look up", false, "Look up signifie chercher une information."],
      ["look into", false, "Look into signifie examiner, enquêter sur."],
    ], "Garder les enfants pendant une absence : look after.", "look after = s'occuper de ; look for = chercher.", [
      "Que faut-il faire des enfants ?",
      "On cherche « s'occuper de ».",
      "After : derrière, à la suite, comme on veille sur quelqu'un.",
    ]),
    E("B-EN-PHR-010", S, "en.phr.look", 2, "Complete the sentence: « If you don't know a word, ___ it ___ in the dictionary. »", [
      ["look / up", true, "Look something up : chercher une information dans un ouvrage."],
      ["look / for", false, "Look for est inséparable et ne s'emploie pas pour un dictionnaire."],
      ["search / up", false, "Search up n'est pas standard."],
      ["find / out", false, "Find out s'emploie pour découvrir un fait, pas un mot dans un dictionnaire."],
    ], "Chercher un mot dans un dictionnaire : look it up, pronom entre le verbe et la particule.", "look something up ; pronom entre verbe et particule.", [
      "On cherche une information dans un ouvrage.",
      "Le pronom it est entre les deux éléments.",
      "La particule de l'achèvement.",
    ], { a: "formules" }),
    E("B-EN-PHR-011", S, "en.phr.work", 2, "Complete the sentence: « After graduating, they plan to ___ their own start-up in Lyon. »", [
      ["set up", true, "Set up : créer, fonder."],
      ["set off", false, "Set off signifie partir (en voyage) ou déclencher."],
      ["set back", false, "Set back signifie retarder."],
      ["set out", false, "Set out signifie partir ou exposer, pas créer une entreprise."],
    ], "Créer une entreprise : set up a company.", "set up = créer, fonder.", [
      "Que vont-ils faire de leur start-up ?",
      "On cherche « créer ».",
      "Up : construction, mise en place.",
    ]),
    E("B-EN-PHR-012", S, "en.phr.work", 3, "Complete the sentence: « Last year, our main competitor was ___ by a large Chinese group, which now owns all its shares. »", [
      ["taken over", true, "Take over : racheter, prendre le contrôle."],
      ["taken off", false, "Take off signifie décoller ou enlever."],
      ["taken up", false, "Take up signifie commencer une activité ou occuper."],
      ["taken out", false, "Take out signifie sortir ou retirer."],
    ], "Une entreprise rachetée par un groupe : was taken over (passif de take over).", "take over = racheter ; a takeover = un rachat.", [
      "Que fait un grand groupe d'un concurrent ?",
      "On cherche « racheter ».",
      "Over : par-dessus, prise de contrôle.",
    ], { r: true }),
  ],
};
