import { E, skill, type EnPart } from "./common";

const S = "en.reported";

export const REPORTED: EnPart = {
  skill: skill(S, "Grammaire", "Discours indirect et questions indirectes", ["reported speech", "discours indirect", "indirect question", "say", "tell", "ask", "backshift", "concordance des temps"]),
  lesson: {
    skillId: S,
    title: "Le discours indirect et les questions indirectes",
    objectives: ["Distinguer say, tell et ask", "Appliquer la concordance des temps", "Construire une question indirecte sans inversion"],
    prerequisites: ["en.tenses"],
    regle:
      "Le discours indirect rapporte des paroles sans les citer mot pour mot : She said that she was tired. Trois points sont testés : le verbe introducteur, les temps et l'ordre des mots.\n\n" +
      "Say ou tell ? Tell est toujours suivi de la personne à qui l'on parle : She told me (that)… Say ne prend pas de complément de personne direct : She said (that)… ou She said to me… On ne dit jamais « she said me ». Expressions figées avec tell : tell the truth, tell a lie, tell a story, tell the time. Pour un ordre ou une demande : tell / ask + personne + to + base verbale (He told us to wait). À la forme négative : not to (The guide told us not to touch the paintings). Suggest ne se construit pas avec personne + to : on dit suggested that we leave ou suggested leaving.\n\n" +
      "Concordance des temps : si le verbe introducteur est au passé, les temps reculent d'un cran. Présent → prétérit (« I am busy » → she said she was busy). Prétérit et present perfect → past perfect (« I saw it » → he said he had seen it). Will → would, can → could, may → might, must → had to. Les repères changent aussi : tomorrow → the next day, yesterday → the day before, here → there, this → that, ago → before. Si le fait est encore vrai, le recul est facultatif, mais c'est la forme reculée qu'on attend au concours.\n\n" +
      "Questions indirectes : l'ordre redevient celui d'une affirmation (sujet + verbe), sans auxiliaire do et sans point d'interrogation. « Where do you live? » → He asked me where I lived. « Is the shop open? » → She asked if (ou whether) the shop was open. La même règle vaut après Can you tell me…, Do you know…, I wonder… : Can you tell me where the station is?",
    formules:
      "say (that) + proposition ; say something to somebody\n" +
      "tell somebody (that) + proposition\n" +
      "tell / ask somebody (not) to do something\n" +
      "présent → prétérit ; prétérit / present perfect → past perfect\n" +
      "will → would ; can → could ; may → might ; must → had to\n" +
      "tomorrow → the next day ; yesterday → the day before ; ago → before\n" +
      "question ouverte : asked + mot interrogatif + sujet + verbe\n" +
      "question fermée : asked + if / whether + sujet + verbe",
    methode:
      "1. Choisis le verbe introducteur : une personne juste après ? tell. Pas de personne ? say.\n" +
      "2. Si le verbe introducteur est au passé, recule chaque temps d'un cran.\n" +
      "3. Dans une question indirecte, remets le sujet avant le verbe et supprime do / does / did.\n" +
      "4. Pour un ordre, utilise to + base verbale (ou not to).",
    exemple:
      "« Where do you live? » he asked. On rapporte au passé : he asked me where… L'ordre redevient sujet + verbe, do disparaît, le présent recule au prétérit : He asked me where I lived.\n\n" +
      "« I will call you tomorrow », she said. → She said (that) she would call me the next day : will devient would, tomorrow devient the next day.",
    erreur:
      "✗ She said me that she was tired → ✓ She told me that she was tired\n" +
      "✗ He told that he was busy → ✓ He said that he was busy\n" +
      "✗ Can you tell me where is the station? → ✓ Can you tell me where the station is?\n" +
      "✗ She asked me where did I live → ✓ She asked me where I lived\n" +
      "✗ He told us don't touch → ✓ He told us not to touch\n" +
      "✗ She suggested me to leave → ✓ She suggested that I leave / suggested leaving",
    approfondir:
      "Whether et if sont interchangeables dans une question indirecte fermée, mais seul whether s'emploie avant or not en début de groupe et après une préposition : It depends on whether he comes.\n\n" +
      "Explain fonctionne comme say : explain something to somebody, jamais « explain me ».\n\n" +
      "Gestion du temps : les erreurs d'ordre des mots (where is the station) sont repérables en deux secondes ; commence par elles pour éliminer.",
    cards: [
      ["Il m'a dit que…", "He told me that… (jamais « he said me »)", true],
      ["Dis-moi où est la gare (indirect)", "Can you tell me where the station is?", true],
      ["Concordance : will", "would (She said she would come)", false],
      ["Il nous a dit de ne pas toucher", "He told us not to touch", true],
    ],
  },
  questions: [
    E("B-EN-REP-001", S, "en.rep.saytell", 1, "Complete the sentence: « She ___ me that she was moving to Canada. »", [
      ["told", true, "Tell est suivi de la personne : told me."],
      ["said", false, "Say ne prend pas de complément de personne direct : on ne dit pas « said me »."],
      ["spoke", false, "Speak ne se construit pas avec une personne + that."],
      ["talked", false, "Talk ne se construit pas avec une personne + that."],
    ], "Le complément de personne (me) suit directement le verbe : seul tell le permet.", "tell + personne ; say sans personne (ou say to + personne).", [
      "Quel mot suit directement le blanc ?",
      "Un seul de ces verbes accepte une personne juste après.",
      "C'est le verbe de « raconter, dire à ».",
    ]),
    E("B-EN-REP-002", S, "en.rep.saytell", 1, "Complete the sentence: « After the match, the coach ___ that he was proud of the team. »", [
      ["said", true, "Say + that sans complément de personne."],
      ["told", false, "Tell exige une personne juste après : told us that…"],
      ["said us", false, "Say n'admet pas de complément de personne direct."],
      ["talked", false, "Talk ne s'emploie pas avec that pour rapporter des paroles."],
    ], "Pas de personne après le verbe : on emploie say, the coach said that…", "Pas de destinataire après le verbe → say.", [
      "Y a-t-il une personne après le blanc ?",
      "Tell exige toujours un destinataire.",
      "L'autre verbe de parole s'impose.",
    ]),
    E("B-EN-REP-003", S, "en.rep.backshift", 1, "Report the sentence: « I am exhausted », Julia said. → Julia said that she ___ exhausted.", [
      ["was", true, "Concordance des temps : le présent devient prétérit."],
      ["were", false, "Erreur d'accord : avec she, le prétérit de be est was."],
      ["will be", false, "Will introduit un futur absent de la phrase d'origine."],
      ["has been", false, "Le présent ne devient pas present perfect au discours indirect."],
    ], "Le verbe introducteur est au passé (said) : am recule au prétérit, was.", "Discours indirect : présent → prétérit.", [
      "À quel temps est le verbe introducteur ?",
      "Les temps reculent d'un cran.",
      "Le présent devient prétérit, accordé avec she.",
    ]),
    E("B-EN-REP-004", S, "en.rep.backshift", 2, "Report the sentence: « I saw the documentary », Tom said. → Tom said that he ___ the documentary.", [
      ["had seen", true, "Le prétérit recule au past perfect."],
      ["has seen", false, "Le present perfect ne s'emploie pas après un verbe introducteur passé."],
      ["have seen", false, "Erreur d'accord et de temps."],
      ["sees", false, "Le présent ne correspond pas à un fait passé rapporté."],
    ], "Saw (prétérit) recule d'un cran au discours indirect : had seen.", "Prétérit ou present perfect → past perfect au discours indirect.", [
      "Quel est le temps du verbe d'origine ?",
      "Le prétérit recule encore d'un cran.",
      "Had + participe passé.",
    ], { a: "formules" }),
    E("B-EN-REP-005", S, "en.rep.backshift", 3, "Report the sentence: « I will call you tomorrow », she said. → She said that she ___ me the next day.", [
      ["would call", true, "Will devient would au discours indirect."],
      ["will call", false, "Will ne se maintient pas après un verbe introducteur passé avec the next day."],
      ["would called", false, "Would est suivi de la base verbale."],
      ["called", false, "Le prétérit fait perdre l'idée de futur dans le passé."],
    ], "Will recule en would ; tomorrow devient the next day : she would call me the next day.", "Will → would ; tomorrow → the next day.", [
      "Comment recule will ?",
      "Repère the next day, signe de discours indirect au passé.",
      "Would + base verbale.",
    ], { a: "exemple" }),
    E("B-EN-REP-006", S, "en.rep.questions", 2, "Choose the correct question: « Excuse me, can you tell me where ___? »", [
      ["the station is", true, "Question indirecte : sujet + verbe, sans inversion."],
      ["is the station", false, "Ordre de la question directe : impossible après can you tell me."],
      ["the station is it", false, "Pronom en trop."],
      ["does the station is", false, "Construction incorrecte : do ne s'emploie pas avec be."],
    ], "Après can you tell me, la question devient indirecte : ordre sujet + verbe, where the station is.", "Question indirecte : mot interrogatif + sujet + verbe.", [
      "La question principale est can you tell me.",
      "La seconde partie est une question indirecte.",
      "Ordre d'une phrase affirmative.",
    ], { a: "erreur" }),
    E("B-EN-REP-007", S, "en.rep.questions", 2, "Complete the sentence: « She asked me ___ I had finished the report. »", [
      ["whether", true, "Whether (ou if) introduit une question indirecte fermée."],
      ["that", false, "That introduit une affirmation rapportée, pas une question."],
      ["what", false, "What exige un complément manquant ; ici la phrase est complète."],
      ["did", false, "Pas d'auxiliaire do dans une question indirecte."],
    ], "La question d'origine est fermée (Have you finished the report?) : on la rapporte avec whether ou if.", "Question fermée rapportée : ask + if / whether + sujet + verbe.", [
      "La question d'origine attend-elle oui ou non ?",
      "Ce type de question se rapporte avec un mot particulier.",
      "C'est l'équivalent de « si ».",
    ]),
    E("B-EN-REP-008", S, "en.rep.questions", 2, "Report the question: « Where do you live? » he asked. → He asked me where ___.", [
      ["I lived", true, "Ordre sujet + verbe, présent reculé au prétérit, do supprimé."],
      ["did I live", false, "L'inversion de la question directe disparaît au discours indirect."],
      ["do I live", false, "Inversion et temps non reculé : deux erreurs."],
      ["I did live", false, "Pas d'auxiliaire do dans une question indirecte, sauf insistance."],
    ], "On supprime do, on remet le sujet avant le verbe et on recule le temps : where I lived.", "Question indirecte : pas de do, pas d'inversion.", [
      "Que devient l'auxiliaire do ?",
      "Quel est l'ordre sujet-verbe ?",
      "Le présent recule au prétérit.",
    ]),
    E("B-EN-REP-009", S, "en.rep.questions", 3, "Complete the sentence: « The new intern asked me what time ___. »", [
      ["the meeting started", true, "Question indirecte : sujet + verbe au prétérit (concordance)."],
      ["did the meeting start", false, "Ordre de question directe avec did : impossible au discours indirect."],
      ["does the meeting start", false, "Ordre de question directe et temps non reculé."],
      ["started the meeting", false, "Inversion sujet-verbe incorrecte."],
    ], "La question indirecte suit l'ordre affirmatif et le temps recule : what time the meeting started.", "Discours indirect : sujet + verbe, temps reculé.", [
      "Asked introduit une question indirecte.",
      "L'ordre redevient sujet + verbe.",
      "Le verbe recule au prétérit.",
    ], { r: true }),
    E("B-EN-REP-010", S, "en.rep.orders", 2, "Report the order: « Don't touch the screen », the guide told us. → The guide told us ___ the screen.", [
      ["not to touch", true, "Ordre négatif rapporté : tell + personne + not to + base verbale."],
      ["don't touch", false, "L'impératif ne se conserve pas au discours indirect."],
      ["not touching", false, "Tell + personne n'est pas suivi de -ing."],
      ["that not touch", false, "Construction incorrecte."],
    ], "Un ordre rapporté se construit avec to + base verbale ; à la forme négative, not se place avant to : not to touch.", "tell / ask somebody (not) to do.", [
      "La phrase d'origine est un ordre.",
      "Un ordre rapporté utilise l'infinitif.",
      "La négation se place avant to.",
    ]),
    E("B-EN-REP-011", S, "en.rep.orders", 3, "Complete the sentence: « The manager ___ us to submit our reports by Friday. »", [
      ["told", true, "Tell + personne + to + base verbale."],
      ["said", false, "Say n'admet pas de complément de personne direct ni la structure personne + to."],
      ["explained", false, "Explain n'admet pas de complément de personne direct : on ne dit pas « explained us »."],
      ["suggested", false, "Suggest ne se construit pas avec personne + to : suggested that we submit."],
    ], "Seul tell admet la structure verbe + personne + to + base verbale parmi ces options.", "tell / ask / order somebody to do ; jamais say / explain / suggest somebody to do.", [
      "Le verbe est suivi de us puis de to.",
      "Quels verbes acceptent une personne juste après ?",
      "Say, explain et suggest ne l'acceptent pas.",
    ], { r: true }),
  ],
};
