// de.ordre : place du verbe.
import { L, Q } from "./common";

export const lessonOrdre = L({
  skillId: "de.ordre",
  title: "La place du verbe",
  objectives: ["Placer le verbe conjugué en deuxième position dans une principale", "Rejeter le verbe conjugué en fin de subordonnée", "Construire une infinitive avec zu et um… zu"],
  regle:
    "La phrase allemande est construite autour du verbe. Retiens trois positions.\n\nPrincipale déclarative : le verbe conjugué est en deuxième position (V2). Le premier élément peut être le sujet ou n'importe quel complément ; si ce n'est pas le sujet, celui-ci passe juste après le verbe (inversion) : Morgen fahre ich nach Köln. Les éléments non conjugués (infinitif, participe, particule séparable) vont à la fin : Ich habe gestern lange gearbeitet. Ich will morgen früh aufstehen.\n\nSubordonnée : après dass, weil, obwohl, wenn, als, ob, damit, bevor, nachdem, et après un mot interrogatif dans une question indirecte (wo, wann, warum…), le verbe conjugué va à la toute fin : …, weil ich morgen arbeiten muss. …, dass er die Prüfung bestanden hat. Le verbe conjugué se place après l'infinitif ou le participe. Une particule séparable se recolle au verbe : …, wenn der Zug ankommt.\n\nSubordonnée en tête : elle compte comme premier élément. Le verbe de la principale suit donc immédiatement la virgule : Wenn ich Zeit habe, gehe ich ins Kino. On obtient le schéma « verbe, verbe ».\n\nQuestions : question fermée, verbe en première position (Kommst du mit?) ; question ouverte, mot interrogatif puis verbe (Wann beginnt der Kurs?).\n\nInfinitive : zu se place juste devant l'infinitif, à la fin du groupe : Ich habe vergessen, dir das Buch zu geben. Avec un verbe séparable, zu s'intercale : anzurufen. Le but s'exprime avec um… zu quand le sujet est le même : Er spart, um ein Auto zu kaufen. Avec deux sujets différents, on emploie damit (voir les connecteurs).\n\nLes coordonnants und, aber, oder, denn, sondern ne comptent pas comme premier élément : … denn ich bin müde (sujet puis verbe).",
  formules:
    "Principale : [élément 1] + verbe conjugué + sujet/compléments + [infinitif, participe, particule]\nSubordonnée : conjonction + sujet + compléments + [infinitif, participe] + verbe conjugué\nSubordonnée en tête : Weil es regnet, bleiben wir zu Hause. (verbe, verbe)\nInfinitive : …, compléments + zu + infinitif · séparable : an|zu|rufen\nBut : um + compléments + zu + infinitif (même sujet)\nQuestion indirecte : Ich weiß nicht, wann der Zug ankommt.\nCoordonnants (position 0) : und, aber, oder, denn, sondern",
  methode:
    "1. Encadre tous les verbes de la phrase et repère le verbe conjugué.\n2. Repère le mot qui ouvre la proposition : coordonnant, conjonction de subordination, mot interrogatif ou complément.\n3. Principale : verbe conjugué en position 2, le reste du groupe verbal à la fin.\n4. Subordonnée : verbe conjugué en dernier, après l'infinitif ou le participe.\n5. Si une subordonnée ouvre la phrase, commence la principale par le verbe conjugué.",
  exemple:
    "« Ich glaube, dass sie morgen nicht kommen kann. » Dass est une conjonction de subordination : le verbe conjugué kann va en dernier, après l'infinitif kommen.\n\n« Obwohl er krank war, ist er zur Arbeit gegangen. » La subordonnée occupe la première place ; la principale commence donc par le verbe conjugué ist, suivi du sujet er, et le participe gegangen termine la phrase.",
  erreur:
    "✗ Morgen ich fahre nach Berlin. → ✓ Morgen fahre ich nach Berlin (V2 et inversion).\n✗ …, weil ich bin krank. → ✓ …, weil ich krank bin (verbe en fin de subordonnée).\n✗ Wenn ich Zeit habe, ich gehe ins Kino. → ✓ Wenn ich Zeit habe, gehe ich ins Kino.\n✗ …, dass er kann nicht kommen. → ✓ …, dass er nicht kommen kann.\n✗ für ein Auto zu kaufen (calque de « pour ») → ✓ um ein Auto zu kaufen.\n✗ zu anrufen → ✓ anzurufen.",
  approfondir:
    "Méthode éclair pour le concours : dans une question d'ordre des mots, les quatre options contiennent les mêmes mots. Ne lis pas tout : cherche seulement où est le verbe conjugué. Principale, il doit être en deuxième position ; subordonnée, en dernier. Tu élimines souvent trois options en dix secondes.\n\nCas limite : avec deux infinitifs (parfait d'un modal), le verbe conjugué d'une subordonnée se place avant eux : …, dass sie nicht hat kommen dürfen. C'est rare au concours, mais c'est la seule exception à la règle du verbe final.\n\nÀ l'oral, beaucoup de germanophones disent « weil ich bin müde ». Cette construction reste fautive à l'écrit : au concours, le verbe va en fin de proposition après weil.",
  cards: [
    ["Place du verbe conjugué en principale", "Deuxième position (V2)", false],
    ["Place du verbe conjugué en subordonnée", "En dernière position", false],
    ["Subordonnée en tête de phrase", "La principale commence par le verbe : Wenn …, gehe ich …", false],
    ["Infinitive d'un verbe séparable", "zu entre particule et verbe : anzurufen, aufzustehen", false],
    ["Pour + infinitif (même sujet)", "um … zu + infinitif", true],
  ],
});

const S = "de.ordre";

export const questionsOrdre = [
  Q("B-DE-ORD-001", S, "de.ordre.v2", 1, "Sie erzählen von Ihren Plänen für morgen. Welcher Satz ist richtig?", [
    ["Morgen fahre ich mit meinen Eltern nach Berlin.", true, "Verbe conjugué en deuxième position, sujet juste après (inversion)."],
    ["Morgen ich fahre mit meinen Eltern nach Berlin.", false, "Calque du français : le verbe arrive en troisième position."],
    ["Morgen ich mit meinen Eltern nach Berlin fahre.", false, "Ordre de subordonnée dans une principale."],
    ["Fahre morgen ich mit meinen Eltern nach Berlin.", false, "Verbe en première position : construction de question ou d'impératif."],
  ], "Dans une principale déclarative, le verbe conjugué occupe la deuxième place. Morgen est le premier élément, donc fahre vient ensuite et le sujet ich passe après le verbe.", "Principale : verbe conjugué en position 2, même après un complément.", [
    "Combien d'éléments précèdent le verbe ?",
    "Morgen occupe déjà la première place.",
    "Verbe juste après Morgen, puis le sujet.",
  ]),
  Q("B-DE-ORD-002", S, "de.ordre.subordonnee", 1, "Ergänzen Sie: «Ich bleibe heute zu Hause, weil ___.»", [
    ["ich krank bin", true, "Weil introduit une subordonnée : verbe conjugué en dernière position."],
    ["ich krank ist", false, "Verbe bien placé mais mal conjugué : ich bin."],
    ["bin ich krank", false, "Inversion de principale : impossible après une conjonction de subordination."],
    ["krank ich bin", false, "Le sujet doit suivre directement la conjonction."],
  ], "Weil est une conjonction de subordination : sujet juste après weil, verbe conjugué à la fin. …, weil ich krank bin.", "weil, dass, obwohl, wenn… : verbe conjugué en fin de proposition.", [
    "Weil est-il un coordonnant ou un subordonnant ?",
    "Dans une subordonnée, où va le verbe conjugué ?",
    "Sujet, attribut, puis verbe.",
  ]),
  Q("B-DE-ORD-003", S, "de.ordre.subordonnee", 2, "Ergänzen Sie: «Sie hat mir geschrieben, dass sie morgen ___.»", [
    ["nicht kommen kann", true, "Verbe conjugué kann en dernier, après l'infinitif."],
    ["kann nicht kommen", false, "Ordre de principale après dass."],
    ["nicht kann kommen", false, "Le verbe conjugué doit suivre l'infinitif, pas le précéder."],
    ["kommen nicht kann", false, "Nicht se place devant le groupe verbal, pas entre les verbes."],
  ], "Après dass, tout le groupe verbal va à la fin, avec le verbe conjugué en toute dernière position : nicht kommen kann.", "Subordonnée avec modal : … infinitif + modal conjugué.", [
    "Dass rejette le verbe conjugué à la fin.",
    "Il y a deux verbes : lequel est conjugué ?",
    "Infinitif d'abord, modal conjugué en dernier.",
  ], { reserved: true }),
  Q("B-DE-ORD-004", S, "de.ordre.inversion", 2, "Ergänzen Sie: «Wenn ich am Wochenende Zeit habe, ___.»", [
    ["gehe ich ins Kino", true, "La subordonnée compte comme premier élément : le verbe suit immédiatement."],
    ["ich gehe ins Kino", false, "Calque du français : le verbe serait en troisième position."],
    ["ich ins Kino gehe", false, "Ordre de subordonnée dans la principale."],
    ["ins Kino ich gehe", false, "Aucun ordre allemand ne place ainsi sujet et verbe."],
  ], "La subordonnée en tête occupe la première position de la phrase. Le verbe conjugué de la principale vient donc juste après la virgule, suivi du sujet : gehe ich ins Kino.", "Subordonnée en tête : « verbe, verbe » de part et d'autre de la virgule.", [
    "Que représente la subordonnée pour la principale ?",
    "Elle occupe la première position.",
    "La principale commence par son verbe conjugué.",
  ], { anchor: "formules" }),
  Q("B-DE-ORD-005", S, "de.ordre.infinitive", 2, "Ergänzen Sie: «Entschuldigung, ich habe vergessen, ___.»", [
    ["dir das Buch zu geben", true, "Zu + infinitif à la fin du groupe infinitif."],
    ["zu geben dir das Buch", false, "Ordre français : l'infinitif doit terminer le groupe."],
    ["dir zu geben das Buch", false, "Le COD doit précéder zu + infinitif."],
    ["dir das Buch geben zu", false, "Zu se place devant l'infinitif, pas après."],
  ], "Dans une infinitive, zu + infinitif ferme le groupe et les compléments le précèdent : dir das Buch zu geben.", "Infinitive : compléments + zu + infinitif en dernier.", [
    "Où se trouve l'infinitif dans un groupe infinitif allemand ?",
    "Les compléments viennent avant.",
    "zu juste devant l'infinitif, en fin de groupe.",
  ]),
  Q("B-DE-ORD-006", S, "de.ordre.infinitive", 2, "Ergänzen Sie: «Mein Bruder arbeitet in den Ferien, ___.»", [
    ["um ein Auto zu kaufen", true, "But avec le même sujet : um … zu + infinitif en fin de groupe."],
    ["um zu kaufen ein Auto", false, "L'infinitif doit être à la fin du groupe."],
    ["für ein Auto zu kaufen", false, "Calque de « pour » : für est une préposition, pas un introducteur d'infinitive."],
    ["um ein Auto kaufen", false, "Oubli de zu dans la construction um … zu."],
  ], "Le but, avec le même sujet que la principale, s'exprime par um … zu + infinitif, l'infinitif en dernier : um ein Auto zu kaufen.", "Pour + infinitif = um … zu + infinitif.", [
    "Comment exprime-t-on le but avec un infinitif ?",
    "Deux mots encadrent le groupe infinitif.",
    "um au début, zu + infinitif à la fin.",
  ]),
  Q("B-DE-ORD-007", S, "de.ordre.subordonnee", 3, "Ergänzen Sie: «Ich weiß noch nicht, ob mein Freund die Prüfung ___.»", [
    ["bestanden hat", true, "Subordonnée au parfait : participe puis auxiliaire conjugué en dernier."],
    ["hat bestanden", false, "Ordre de principale après ob."],
    ["bestanden ist", false, "Bestehen forme son parfait avec haben."],
    ["haben bestanden", false, "Auxiliaire mal conjugué (sujet singulier) et mal placé."],
  ], "Ob introduit une question indirecte : verbe conjugué à la fin. Au parfait, l'auxiliaire conjugué (hat, car bestehen se conjugue avec haben) suit le participe : bestanden hat.", "Subordonnée au parfait : … participe + auxiliaire conjugué.", [
    "Ob est une conjonction de subordination.",
    "Bestehen se conjugue avec haben ou sein ?",
    "Participe, puis auxiliaire conjugué au singulier.",
  ], { reserved: true }),
  Q("B-DE-ORD-008", S, "de.ordre.inversion", 3, "Sie erklären, warum Sie heute nicht ausgehen. Welcher Satz ist richtig?", [
    ["Weil es stark regnet, bleiben wir heute zu Hause.", true, "Subordonnée correcte (verbe final) puis principale qui commence par le verbe."],
    ["Weil es stark regnet, wir bleiben heute zu Hause.", false, "La principale doit commencer par le verbe conjugué."],
    ["Weil regnet es stark, bleiben wir heute zu Hause.", false, "Inversion fautive dans la subordonnée : le verbe doit être à la fin."],
    ["Weil es stark regnet, wir heute zu Hause bleiben.", false, "Ordre de subordonnée dans la principale."],
  ], "Deux règles à vérifier : dans la subordonnée, regnet est en fin ; la subordonnée occupe la première place, donc la principale commence par bleiben.", "Weil …, verbe + sujet : schéma « verbe, verbe ».", [
    "Vérifie d'abord la subordonnée, puis la principale.",
    "Où va le verbe après weil ? Que se passe-t-il après la virgule ?",
    "Verbe final dans la subordonnée, verbe en tête de la principale.",
  ]),
  Q("B-DE-ORD-009", S, "de.ordre.indirecte", 2, "Ergänzen Sie: «Entschuldigung, können Sie mir sagen, wo ___?»", [
    ["der Bahnhof ist", true, "Question indirecte : sujet puis verbe conjugué à la fin."],
    ["ist der Bahnhof", false, "Ordre de question directe : impossible dans une question indirecte."],
    ["es ist der Bahnhof", false, "Calque du français « où c'est » ; le verbe n'est pas en fin."],
    ["der Bahnhof es ist", false, "Pronom es inutile : Bahnhof est déjà le sujet."],
  ], "Un mot interrogatif qui introduit une question indirecte (wo, wann, warum, wie) fonctionne comme une conjonction de subordination : verbe conjugué en dernier. …, wo der Bahnhof ist.", "Question indirecte : mot interrogatif + sujet + … + verbe conjugué.", [
    "La question est-elle directe ou indirecte ?",
    "Une question indirecte suit l'ordre de la subordonnée.",
    "Le verbe ist termine la phrase.",
  ]),
  Q("B-DE-ORD-010", S, "de.ordre.questions", 1, "Welche Frage ist richtig?", [
    ["Wann beginnt der Deutschkurs?", true, "Mot interrogatif, puis verbe conjugué, puis sujet."],
    ["Wann der Deutschkurs beginnt?", false, "Ordre de question indirecte dans une question directe."],
    ["Wann der Deutschkurs beginnt er?", false, "Calque de « Quand le cours commence-t-il ? » : pronom de reprise impossible."],
    ["Der Deutschkurs wann beginnt?", false, "Le mot interrogatif doit ouvrir la question."],
  ], "Dans une question ouverte, le mot interrogatif occupe la première place et le verbe conjugué la deuxième : Wann beginnt der Deutschkurs?", "Question ouverte : W-Wort + verbe + sujet.", [
    "Que trouve-t-on en première position d'une question ouverte ?",
    "Le verbe garde sa deuxième place.",
    "Wann, puis le verbe, puis le sujet.",
  ]),
  Q("B-DE-ORD-011", S, "de.ordre.subordonnee", 2, "Ergänzen Sie: «Ich finde es gut, dass ___.»", [
    ["du dich für Politik interessierst", true, "Sujet, pronom réfléchi, compléments, verbe conjugué à la fin."],
    ["du interessierst dich für Politik", false, "Ordre de principale après dass."],
    ["interessierst du dich für Politik", false, "Ordre de question : impossible après dass."],
    ["du dich für Politik interessiert", false, "Verbe bien placé mais mal conjugué : du interessierst."],
  ], "Après dass, verbe conjugué à la fin, le pronom réfléchi suit le sujet : dass du dich für Politik interessierst. Attention aussi à l'accord : du → -st.", "Subordonnée : verbe conjugué en dernier, correctement accordé.", [
    "Dass impose une place au verbe.",
    "Vérifie aussi la terminaison du verbe avec du.",
    "Verbe en -st à la toute fin.",
  ]),
];
