import { E, type EnPart } from "./common";

const S = "en.prep";

export const PREP: EnPart = {
  lesson: {
    skillId: S,
    title: "Les prépositions : temps, lieu et constructions fixes",
    objectives: ["Choisir in, on, at pour le temps et le lieu", "Mémoriser les adjectifs et verbes à préposition fixe", "Éviter les calques des prépositions françaises"],
    regle:
      "Les prépositions anglaises ne se traduisent pas mot à mot : elles s'apprennent avec le mot qu'elles accompagnent.\n\n" +
      "Temps. At + heure ou moment précis : at 6 p.m., at noon, at night, at the weekend (britannique), at Christmas, at the end of the meeting. On + jour ou date : on Monday, on 14 March, on my birthday, on Monday morning. In + mois, année, saison, siècle, partie de la journée : in May, in 2026, in winter, in the morning. Pas de préposition devant next, last, this, every : next week, last year.\n\n" +
      "Lieu. At + point, adresse, lieu d'activité : at the bus stop, at university, at work, at home. In + espace fermé, ville, pays : in the kitchen, in London, in Spain. On + surface, étage, moyen de transport collectif : on the table, on the second floor, on the train. Arrive in + ville ou pays, arrive at + bâtiment ou point précis (at reste possible pour une ville vue comme simple étape d'un trajet : the train arrives at York at 10) ; jamais arrive to.\n\n" +
      "Constructions fixes à connaître. Adjectifs : good at, bad at, interested in, responsible for, proud of, afraid of, keen on, married to, different from, similar to, aware of, kind of you (c'est gentil de ta part). Verbes : depend on, rely on, listen to, reply to, wait for, look for, look after, apply for, pay for, believe in, agree with, consist of, insist on, succeed in. Noms : a reason for, an increase in, a solution to, the key to.\n\n" +
      "Attention aux deux sens de at the end / in the end : at the end of something = à la fin de ; in the end = finalement.",
    formules:
      "at + heure : at 9 a.m., at night, at the weekend (GB)\n" +
      "on + jour, date : on Friday, on 3 May, on New Year's Day\n" +
      "in + mois, année, saison : in July, in 2027, in summer\n" +
      "pas de préposition : next week, last year, this morning\n" +
      "arrive in + ville / pays ; arrive at + bâtiment\n" +
      "good at, interested in, responsible for, proud of, married to\n" +
      "depend on, rely on, listen to, reply to, wait for, apply for\n" +
      "at the end of = à la fin de ; in the end = finalement\n" +
      "it's kind of you to… = c'est gentil de ta part de…",
    methode:
      "1. Identifie le type de complément : heure, jour, mois, lieu, ou construction d'un adjectif ou d'un verbe.\n" +
      "2. Pour le temps : du plus précis (at) au plus large (in), on au milieu pour les jours.\n" +
      "3. Pour une construction fixe, rappelle-toi l'expression entière (interested in) plutôt que de traduire.\n" +
      "4. Méfie-toi de la préposition française : elle mène souvent au mauvais choix (de → of, en → in).",
    exemple:
      "« She has been responsible ___ the project since January. » Le français dit « responsable de », d'où le réflexe of. Mais l'anglais emploie responsible for. Réponse : for.\n\n" +
      "« We arrived ___ London at midnight. » Arrive ne se construit jamais avec to ; devant une ville, on emploie in : arrived in London.",
    erreur:
      "✗ good in maths → ✓ good at maths\n" +
      "✗ interested by → ✓ interested in\n" +
      "✗ responsible of → ✓ responsible for\n" +
      "✗ married with → ✓ married to\n" +
      "✗ arrive to London → ✓ arrive in London\n" +
      "✗ on the next week → ✓ next week",
    approfondir:
      "Les Américains disent on the weekend, les Britanniques at the weekend : les deux sont corrects, et le concours ne les oppose pas.\n\n" +
      "In time (à temps, avec de la marge) et on time (à l'heure, ponctuel) ne sont pas synonymes : The train left on time ; we arrived in time to get a seat.\n\n" +
      "Gestion du temps : tiens un carnet de constructions fixes sous forme de phrases complètes et relis-le chaque semaine. Une construction fixe se reconnaît en une seconde si elle est mémorisée, et ne se devine pas sinon.",
    cards: [
      ["Responsable de", "responsible for", true],
      ["Bon en maths", "good at maths", true],
      ["Marié à", "married to", true],
      ["at the end / in the end", "à la fin de / finalement", false],
      ["at / on / in (temps)", "heure / jour, date / mois, année, saison", false],
    ],
  },
  questions: [
    E("B-EN-PREP-101", S, "en.prep.time", 1, "Complete the sentence: « Her birthday is ___ 14 March, so we'll celebrate it at the weekend. »", [
      ["on", true, "On + date précise."],
      ["in", false, "In s'emploie avec un mois seul ou une année, pas avec une date complète."],
      ["at", false, "At s'emploie avec une heure ou un moment précis de la journée."],
      ["to", false, "To n'introduit pas une date."],
    ], "Une date précise (jour + mois) prend on : on 14 March.", "on + jour ou date ; in + mois seul.", [
      "Le complément est-il une heure, une date ou un mois ?",
      "C'est une date précise.",
      "Les jours et les dates prennent la même préposition.",
    ]),
    E("B-EN-PREP-102", S, "en.prep.time", 1, "Complete the sentence: « The museum is closed ___ night. »", [
      ["at", true, "At night : expression fixe."],
      ["in", false, "In night est impossible : on dit at night (in the night, avec l'article, a un autre emploi : pendant la nuit)."],
      ["on", false, "On s'emploie avec les jours et les dates."],
      ["the", false, "Un article seul ne peut pas introduire le complément de temps."],
    ], "On dit in the morning, in the evening, mais at night.", "at night (mais in the morning / afternoon / evening).", [
      "C'est une expression figée.",
      "Night fait exception aux autres parties de la journée.",
      "La préposition des moments précis.",
    ], { a: "formules" }),
    E("B-EN-PREP-103", S, "en.prep.time", 1, "Complete the sentence: « We usually go skiing in the Alps ___ winter. »", [
      ["in", true, "In + saison."],
      ["on", false, "On s'emploie avec les jours et les dates."],
      ["at", false, "At s'emploie avec une heure ou un moment précis."],
      ["by", false, "By signifie « au plus tard », sans rapport avec une saison."],
    ], "Les saisons, comme les mois et les années, prennent in : in winter.", "in + saison, mois, année.", [
      "Le complément est-il une heure, un jour ou une saison ?",
      "C'est une période longue.",
      "La préposition des périodes longues.",
    ]),
    E("B-EN-PREP-104", S, "en.prep.place", 2, "Complete the sentence: « After a twelve-hour flight, we finally arrived ___ Japan. »", [
      ["in", true, "Arrive in + ville ou pays."],
      ["to", false, "Calque de « arriver à » : arrive ne se construit jamais avec to."],
      ["at", false, "Arrive at s'emploie pour un bâtiment ou un point précis (at the airport), pas pour un pays."],
      ["on", false, "On ne s'emploie pas pour un pays."],
    ], "Arrive se construit avec in devant une ville ou un pays, at devant un bâtiment : arrived in Japan.", "arrive in + ville / pays ; arrive at + lieu précis ; jamais arrive to.", [
      "Arrive se construit-il avec to ?",
      "Japan est un pays.",
      "Ville ou pays : in.",
    ], { a: "exemple" }),
    E("B-EN-PREP-105", S, "en.prep.adj", 2, "Complete the sentence: « My cousin is very good ___ maths, but she hates history. »", [
      ["at", true, "Good at : être bon en."],
      ["of", false, "Good of s'emploie dans it's good of you (c'est gentil de ta part), pas pour une compétence."],
      ["for", false, "Good for signifie « bon pour (la santé) »."],
      ["on", false, "Préposition incorrecte après good."],
    ], "Les compétences se construisent avec good at, bad at.", "good at / bad at + matière ou activité.", [
      "Le français dit « bon en ». L'anglais aussi ?",
      "C'est une construction fixe.",
      "La même préposition que pour une heure.",
    ], { a: "erreur" }),
    E("B-EN-PREP-106", S, "en.prep.adj", 1, "Complete the sentence: « I've always been interested ___ marketing and consumer behaviour. »", [
      ["in", true, "Interested in."],
      ["by", false, "Calque de « intéressé par »."],
      ["for", false, "Préposition incorrecte après interested."],
      ["about", false, "Préposition incorrecte après interested."],
    ], "La construction fixe est interested in.", "be interested in + nom ou V-ing.", [
      "Le français dit « intéressé par ».",
      "L'anglais utilise une autre préposition.",
      "La même que dans « in the morning ».",
    ]),
    E("B-EN-PREP-107", S, "en.prep.adj", 3, "Complete the sentence: « She has been responsible ___ the project since January. »", [
      ["for", true, "Responsible for."],
      ["of", false, "Calque de « responsable de »."],
      ["about", false, "Préposition incorrecte après responsible."],
      ["with", false, "Préposition incorrecte après responsible."],
    ], "Responsible se construit avec for : responsible for the project.", "responsible for.", [
      "Le français dit « responsable de ».",
      "L'anglais n'utilise pas of ici.",
      "La préposition de « pour ».",
    ], { a: "exemple", r: true }),
    E("B-EN-PREP-108", S, "en.prep.adj", 2, "Complete the sentence: « He has been married ___ a doctor for ten years. »", [
      ["to", true, "Married to."],
      ["with", false, "Calque de « marié avec »."],
      ["at", false, "Préposition incorrecte après married."],
      ["by", false, "Préposition incorrecte après married."],
    ], "On est married to someone (mais on get married, sans préposition, quand on se marie).", "be married to somebody.", [
      "Le français dit « marié avec ».",
      "L'anglais emploie une autre préposition.",
      "La préposition de la destination.",
    ]),
    E("B-EN-PREP-109", S, "en.prep.time", 2, "Complete the sentence: « The final decision was announced ___ the end of the meeting. »", [
      ["at", true, "At the end of = à la fin de."],
      ["in", false, "In the end signifie « finalement » et ne se construit pas avec of."],
      ["on", false, "Préposition incorrecte avec the end of."],
      ["to", false, "Préposition incorrecte avec the end of."],
    ], "« À la fin de la réunion » : at the end of the meeting.", "at the end of = à la fin de ; in the end = finalement.", [
      "On cherche « à la fin de ».",
      "In the end a un autre sens.",
      "La préposition d'un moment précis.",
    ], { a: "approfondir" }),
    E("B-EN-PREP-110", S, "en.prep.verb", 2, "Complete the sentence: « Please reply ___ this email by Friday. »", [
      ["to", true, "Reply to something / somebody."],
      ["at", false, "Préposition incorrecte : reply se construit avec to."],
      ["on", false, "Préposition incorrecte après reply."],
      ["for", false, "Préposition incorrecte après reply."],
    ], "Reply se construit avec to : reply to an email. Answer, en revanche, est direct : answer an email.", "reply to ; answer sans préposition.", [
      "Reply est-il transitif direct ?",
      "Il exige une préposition.",
      "La préposition de la direction.",
    ]),
    E("B-EN-PREP-111", S, "en.prep.adj", 3, "Complete the sentence: « It's very kind ___ you to help me move. »", [
      ["of", true, "It's kind of you : c'est gentil de ta part."],
      ["from", false, "Calque de « de ta part »."],
      ["for", false, "For you ne s'emploie pas pour juger le comportement de quelqu'un."],
      ["to", false, "Kind to signifie « gentil envers », sans la structure it's… to do."],
    ], "Pour juger l'attitude de quelqu'un : it's kind / nice / generous of you to + base verbale.", "It's kind of you to…", [
      "On juge le comportement de la personne.",
      "La structure est it's + adjectif + ___ you + to.",
      "La préposition est of.",
    ], { r: true }),
  ],
};
