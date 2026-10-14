// de.connecteurs : conjonctions de coordination, de subordination et adverbes de liaison.
import { L, Q } from "./common";

export const lessonConnecteurs = L({
  skillId: "de.connecteurs",
  title: "Connecteurs et conjonctions",
  objectives: ["Classer un connecteur selon l'ordre des mots qu'il impose", "Choisir le connecteur adapté au sens (cause, conséquence, concession, but, temps)", "Distinguer als, wenn, wann et ob, wenn"],
  prerequisites: ["de.ordre"],
  regle:
    "Un connecteur se choisit deux fois : pour son sens et pour l'ordre des mots qu'il impose. Trois familles.\n\nCoordonnants (position 0, ordre normal sujet + verbe) : und, aber, oder, denn (car), sondern (mais après une négation). Ich bleibe zu Hause, denn ich bin müde.\n\nSubordonnants (verbe conjugué en fin) : weil, da (parce que), dass, ob (si = est-ce que), wenn (si, quand répété ou futur), als (quand, fait unique au passé), obwohl (bien que), damit (pour que, sujets différents), bevor, nachdem, während (pendant que), seit, bis, sodass. …, weil ich müde bin.\n\nAdverbes de liaison (ils occupent la position 1 : inversion verbe + sujet) : deshalb, deswegen, darum, daher (c'est pourquoi), trotzdem (quand même, pourtant), dann (ensuite), außerdem (en outre), sonst (sinon). Es regnet, deshalb nehmen wir das Auto.\n\nSens à ne pas confondre :\n– Cause : weil / da (subordonnée) ; denn (coordination). Conséquence : deshalb (adverbe).\n– Concession : obwohl (subordonnée) ; trotzdem (adverbe, dans la proposition qui suit) ; trotz (préposition + génitif).\n– But : damit (deux sujets) ; um … zu (même sujet).\n– Quand : als pour un fait unique dans le passé (Als ich zehn war) ; wenn pour le présent, le futur ou une répétition (Immer wenn …, Wenn ich fertig bin) ; wann pour une question, directe ou indirecte (Wann kommst du? Ich weiß nicht, wann er kommt).\n– Si : ob pour une question indirecte (Ich weiß nicht, ob er kommt) ; wenn ou falls pour une condition (Wenn es regnet, …).\n– Mais : aber ajoute une restriction ; sondern corrige après une négation (nicht …, sondern …).\n– Corrélatifs : entweder … oder (soit … soit), weder … noch (ni … ni), sowohl … als auch (à la fois … et), nicht nur … sondern auch, zwar … aber.",
  formules:
    "Position 0 (sujet + verbe) : und, aber, oder, denn, sondern\nVerbe en fin : weil, da, dass, ob, wenn, als, obwohl, damit, bevor, nachdem, während, bis\nInversion (verbe + sujet) : deshalb, deswegen, darum, trotzdem, dann, außerdem, sonst\nals = quand (une fois, passé) · wenn = quand (répétition, présent, futur) ou si (condition) · wann = quand (question)\nob = si (question indirecte) · wenn/falls = si (condition)\nentweder … oder · weder … noch · sowohl … als auch · nicht nur … sondern auch",
  methode:
    "1. Identifie le rapport logique entre les deux propositions : cause, conséquence, opposition, but, temps.\n2. Regarde l'ordre des mots après le blanc : sujet + verbe (coordonnant), verbe + sujet (adverbe), verbe en fin (subordonnant).\n3. Élimine les connecteurs dont le sens ou la syntaxe ne colle pas.\n4. Pour « quand » et « si », applique les tests als/wenn/wann et ob/wenn.",
  exemple:
    "« Sie war krank, ___ ist sie zur Arbeit gegangen. » Rapport : opposition (malade, pourtant au travail). Après le blanc : ist sie, verbe + sujet → adverbe. Adverbe de concession : trotzdem.\n\n« ___ ich zehn Jahre alt war, sind wir umgezogen. » Fait unique dans le passé : als.",
  erreur:
    "✗ …, weil ich bin müde. → ✓ …, weil ich müde bin (ou : denn ich bin müde).\n✗ Es regnet, deshalb wir nehmen das Auto. → ✓ deshalb nehmen wir das Auto.\n✗ Wenn ich zehn war, … (fait unique passé) → ✓ Als ich zehn war, …\n✗ Ich weiß nicht, wenn er kommt (si = est-ce que). → ✓ Ich weiß nicht, ob er kommt.\n✗ Nicht mein Handy, aber das von Paul. → ✓ Nicht mein Handy, sondern das von Paul.\n✗ Ich erkläre es, um du verstehst. → ✓ Ich erkläre es, damit du es verstehst.",
  approfondir:
    "Astuce de vitesse : au concours, l'ordre des mots après le blanc est souvent la clé. Verbe + sujet juste après : seul un adverbe (deshalb, trotzdem…) convient. Sujet + verbe conjugué : coordonnant. Verbe rejeté à la fin : subordonnant. Tu élimines ainsi deux options avant même de réfléchir au sens.\n\nNuance utile : obwohl et trotzdem expriment la même idée de concession mais dans des propositions différentes : Obwohl sie krank war, ging sie arbeiten = Sie war krank, trotzdem ging sie arbeiten.\n\nCes connecteurs servent aussi en compréhension : deshalb, also, daher annoncent une conclusion ; aber, doch, jedoch une opposition, souvent l'idée principale de l'auteur.",
  cards: [
    ["Connecteurs suivis de l'inversion", "deshalb, deswegen, darum, trotzdem, dann, außerdem", false],
    ["als / wenn", "als : fait unique passé · wenn : répétition, présent, futur", false],
    ["ob / wenn", "ob : si interrogatif · wenn : si conditionnel", false],
    ["sondern", "Mais (correction après une négation)", false],
    ["Pour que (sujets différents)", "damit + verbe en fin", true],
  ],
});

const S = "de.connecteurs";

export const questionsConnecteurs = [
  Q("B-DE-CON-001", S, "de.connecteurs.syntaxe", 1, "Ergänzen Sie: «Ich bleibe heute Abend zu Hause, ___ ich bin sehr müde.»", [
    ["denn", true, "Coordonnant de cause : ordre normal sujet + verbe (ich bin)."],
    ["da", false, "Da (parce que) est un subordonnant : il faudrait da ich sehr müde bin."],
    ["deshalb", false, "Deshalb exprime la conséquence et impose l'inversion."],
    ["obwohl", false, "Concession : contresens, et verbe en fin."],
  ], "Après le blanc, l'ordre est sujet + verbe : il faut un coordonnant. Le rapport est une cause : denn.", "denn = car (ordre normal) ; weil = parce que (verbe en fin).", [
    "Regarde l'ordre des mots après le blanc.",
    "Sujet puis verbe : quel type de connecteur ?",
    "Coordonnant de cause.",
  ]),
  Q("B-DE-CON-002", S, "de.connecteurs.syntaxe", 2, "Ergänzen Sie: «Es regnet seit dem Morgen, ___ nehmen wir heute das Auto.»", [
    ["deshalb", true, "Conséquence ; adverbe en position 1 suivi de l'inversion (nehmen wir)."],
    ["denn", false, "Cause, et ordre normal : il faudrait denn wir nehmen."],
    ["weil", false, "Cause, et verbe en fin."],
    ["trotzdem", false, "Concession : contresens, la pluie justifie l'auto."],
  ], "La pluie est la cause, prendre la voiture la conséquence. Après le blanc : verbe + sujet → adverbe. Deshalb.", "deshalb (c'est pourquoi) + inversion.", [
    "Quel rapport logique entre la pluie et l'auto ?",
    "Après le blanc, verbe puis sujet.",
    "Adverbe de conséquence.",
  ]),
  Q("B-DE-CON-003", S, "de.connecteurs.concession", 2, "Ergänzen Sie: «___ er wochenlang gelernt hat, hat er die Prüfung nicht bestanden.»", [
    ["Obwohl", true, "Concession, subordonnant : verbe en fin (gelernt hat)."],
    ["Weil", false, "Cause : contresens (il a échoué parce qu'il a travaillé)."],
    ["Trotzdem", false, "Adverbe : il ne peut pas introduire une subordonnée à verbe final."],
    ["Denn", false, "Coordonnant : il ne peut pas ouvrir la phrase avec une subordonnée."],
  ], "Il a beaucoup travaillé et pourtant échoué : concession. La proposition a son verbe à la fin : conjonction de subordination obwohl.", "obwohl (bien que) + verbe en fin.", [
    "Quel rapport logique ?",
    "La proposition a son verbe à la fin.",
    "Subordonnant de concession.",
  ]),
  Q("B-DE-CON-004", S, "de.connecteurs.concession", 2, "Ergänzen Sie: «Sie hatte hohes Fieber, ___ ist sie zur Arbeit gegangen.»", [
    ["trotzdem", true, "Concession, adverbe suivi de l'inversion (ist sie)."],
    ["obwohl", false, "Subordonnant : il faudrait le verbe en fin."],
    ["deshalb", false, "Conséquence : contresens."],
    ["denn", false, "Cause, et ordre sujet + verbe."],
  ], "Malade et pourtant au travail : concession. Après le blanc, verbe + sujet : adverbe. Trotzdem.", "trotzdem (quand même) + inversion.", [
    "La fièvre explique-t-elle le travail ?",
    "Opposition : quel adverbe ?",
    "Il ressemble à la préposition « malgré ».",
  ], { anchor: "exemple" }),
  Q("B-DE-CON-005", S, "de.connecteurs.temps", 2, "Ergänzen Sie: «___ ich zehn Jahre alt war, sind wir von Lyon nach Leipzig umgezogen.»", [
    ["Als", true, "Fait unique dans le passé : als."],
    ["Wenn", false, "Wenn s'emploie pour la répétition ou le présent/futur."],
    ["Wann", false, "Wann est interrogatif."],
    ["Ob", false, "Ob signifie « si » interrogatif."],
  ], "Avoir dix ans et déménager : un fait unique dans le passé. Quand = als.", "Fait unique passé : als.", [
    "Combien de fois l'action a-t-elle eu lieu ?",
    "Une seule fois, dans le passé.",
    "Le « quand » du passé unique.",
  ]),
  Q("B-DE-CON-006", S, "de.connecteurs.temps", 2, "Ergänzen Sie: «Immer ___ ich nach Berlin fahre, besuche ich meine Tante.»", [
    ["wenn", true, "Répétition (immer) : wenn."],
    ["als", false, "Als est réservé à un fait unique passé."],
    ["wann", false, "Wann est interrogatif."],
    ["ob", false, "Ob signifie « si » interrogatif."],
  ], "Immer marque la répétition, au présent : wenn.", "Répétition ou présent : wenn.", [
    "Que signale immer ?",
    "Action répétée.",
    "Le « quand » de l'habitude.",
  ]),
  Q("B-DE-CON-007", S, "de.connecteurs.si", 2, "Ergänzen Sie: «Ich weiß noch nicht, ___ mein Bruder morgen zum Fest kommt.»", [
    ["ob", true, "Question indirecte fermée (est-ce qu'il vient ?) : ob."],
    ["wenn", false, "Calque de « si » : wenn exprime une condition."],
    ["als", false, "Als : fait unique passé."],
    ["denn", false, "Coordonnant de cause, verbe non final."],
  ], "« Je ne sais pas si… » = est-ce qu'il vient ? Question indirecte : ob, verbe en fin.", "si interrogatif = ob ; si conditionnel = wenn.", [
    "Ce « si » pose-t-il une condition ou une question ?",
    "Question indirecte.",
    "Deux lettres.",
  ]),
  Q("B-DE-CON-008", S, "de.connecteurs.sondern", 1, "Ergänzen Sie: «Das ist nicht mein Handy, ___ das von meinem Bruder.»", [
    ["sondern", true, "Correction après une négation : sondern."],
    ["aber", false, "Aber ajoute une restriction, il ne corrige pas une négation."],
    ["oder", false, "Alternative : contresens."],
    ["sonst", false, "Sonst signifie « sinon »."],
  ], "Nicht …, sondern … : on nie un élément et on le remplace par un autre.", "nicht …, sondern … (non pas …, mais …).", [
    "La première partie contient une négation.",
    "On remplace une information par une autre.",
    "Mais correctif.",
  ]),
  Q("B-DE-CON-009", S, "de.connecteurs.but", 3, "Ergänzen Sie: «Ich erkläre es dir noch einmal, ___ du es endlich verstehst.»", [
    ["damit", true, "But avec deux sujets différents (ich, du) : damit + verbe en fin."],
    ["um", false, "Um … zu exige le même sujet et un infinitif."],
    ["ob", false, "Ob introduit une question indirecte (« si »), pas un but."],
    ["denn", false, "Cause, et ordre sujet + verbe non final."],
  ], "Le but concerne un autre sujet (du) : on ne peut pas employer um … zu. Damit + verbe conjugué en fin.", "But : damit (sujets différents), um … zu (même sujet).", [
    "Exprime-t-on une cause ou un but ?",
    "Le sujet de la seconde proposition est-il le même ?",
    "Pour que = …",
  ], { reserved: true }),
  Q("B-DE-CON-010", S, "de.connecteurs.temps", 3, "Ergänzen Sie: «Weißt du, ___ der Film heute beginnt? Um acht oder um halb neun?»", [
    ["wann", true, "Question indirecte sur le moment : wann."],
    ["als", false, "Als n'introduit pas de question."],
    ["wenn", false, "Wenn n'introduit pas de question indirecte."],
    ["wo", false, "Wo porte sur le lieu ; la suite parle d'heures."],
  ], "La question porte sur l'heure (um acht oder um halb neun) : question indirecte avec wann.", "Question sur le moment, directe ou indirecte : wann.", [
    "Que cherche-t-on à savoir ?",
    "C'est une question, même indirecte.",
    "Le « quand » interrogatif.",
  ], { reserved: true }),
  Q("B-DE-CON-011", S, "de.connecteurs.correlatifs", 2, "Ergänzen Sie: «Am Wochenende können wir ___ ins Kino gehen oder zu Hause einen Film schauen.»", [
    ["entweder", true, "Entweder … oder : soit … soit."],
    ["weder", false, "Weder va avec noch (ni … ni)."],
    ["sowohl", false, "Sowohl va avec als auch."],
    ["zwar", false, "Zwar va avec aber."],
  ], "Le second élément est introduit par oder : la paire est entweder … oder.", "entweder … oder · weder … noch · sowohl … als auch · zwar … aber.", [
    "Regarde le second connecteur : oder.",
    "Quel mot forme une paire avec oder ?",
    "Soit … soit.",
  ], { anchor: "formules" }),
];
