// Exercices oraux d'allemand (LV-DE) : écoutes, lectures à voix haute, conversations. Textes originaux.
import type { LanguageExerciseDef } from "../helpers";

export const LANGUAGE_EXERCISES_DE: LanguageExerciseDef[] = [
  {
    exerciseId: "DE-LIS-001", subjectCode: "LV-DE", kind: "listening", title: "Durchsage am Bahnhof", level: "B1",
    text: "Achtung an Gleis sieben. Der ICE nach Hamburg, planmäßige Abfahrt vierzehn Uhr zweiunddreißig, fährt heute ausnahmsweise von Gleis neun ab. Grund dafür sind Bauarbeiten. Wir bitten um Ihr Verständnis.",
    transcriptByDefault: false,
    question: "Was ändert sich heute für den Zug nach Hamburg?",
    options: [
      { id: "a", text: "Er fährt von einem anderen Gleis ab.", correct: true, justification: "« fährt heute ausnahmsweise von Gleis neun ab »." },
      { id: "b", text: "Er hat zwanzig Minuten Verspätung.", correct: false, justification: "Aucun retard n'est annoncé : l'heure de départ reste 14 h 32." },
      { id: "c", text: "Er fährt nicht bis nach Hamburg.", correct: false, justification: "La destination reste Hambourg." },
    ],
  },
  {
    exerciseId: "DE-LIS-002", subjectCode: "LV-DE", kind: "listening", title: "Nachricht auf der Mailbox", level: "B1",
    text: "Hallo Tim, hier ist Sophie. Ich kann morgen leider nicht zur Lerngruppe kommen, weil ich einen Termin beim Zahnarzt habe. Könntest du mir danach deine Notizen schicken? Am Donnerstag bin ich wieder dabei. Danke dir und bis bald!",
    transcriptByDefault: false,
    question: "Warum kommt Sophie morgen nicht zur Lerngruppe?",
    options: [
      { id: "a", text: "Sie ist krank.", correct: false, justification: "Elle ne dit pas qu'elle est malade : elle a un rendez-vous." },
      { id: "b", text: "Sie hat einen Termin beim Zahnarzt.", correct: true, justification: "« weil ich einen Termin beim Zahnarzt habe »." },
      { id: "c", text: "Sie hat keine Lust mehr auf die Lerngruppe.", correct: false, justification: "Elle annonce qu'elle reviendra jeudi." },
    ],
  },
  {
    exerciseId: "DE-LIS-003", subjectCode: "LV-DE", kind: "listening", title: "Wirtschaftsmeldung im Radio", level: "B2",
    text: "Ein großer Hersteller von Haushaltsgeräten hat heute angekündigt, im nächsten Jahr dreihundert Stellen in Deutschland abzubauen. Ein Teil der Produktion soll ins Ausland verlagert werden, weil die Energiekosten hierzulande zu hoch seien. Die Gewerkschaft kritisiert die Entscheidung scharf und kündigt Proteste an.",
    transcriptByDefault: false,
    question: "Welchen Grund nennt das Unternehmen für seine Entscheidung?",
    options: [
      { id: "a", text: "Die Proteste der Gewerkschaft.", correct: false, justification: "Les protestations sont une réaction à la décision, pas sa cause." },
      { id: "b", text: "Zu wenige Kunden im Ausland.", correct: false, justification: "Rien n'est dit sur les clients." },
      { id: "c", text: "Die hohen Energiekosten in Deutschland.", correct: true, justification: "« weil die Energiekosten hierzulande zu hoch seien » (discours indirect, Konjunktiv I)." },
    ],
  },
  { exerciseId: "DE-READ-001", subjectCode: "LV-DE", kind: "read_aloud", title: "Nebensatz mit weil", level: "B1", text: "Ich lerne jeden Tag ein bisschen Deutsch, weil ich nach dem Abitur in Berlin studieren möchte.", transcriptByDefault: true },
  { exerciseId: "DE-READ-002", subjectCode: "LV-DE", kind: "read_aloud", title: "Konjunktiv II", level: "B1", text: "Wenn ich mehr Zeit hätte, würde ich öfter ins Theater gehen und viel mehr Bücher lesen.", transcriptByDefault: true },
  { exerciseId: "DE-READ-003", subjectCode: "LV-DE", kind: "read_aloud", title: "Wirtschaftswortschatz", level: "B2", text: "Obwohl das Unternehmen seinen Umsatz deutlich gesteigert hat, ist der Gewinn wegen der hohen Energiekosten gesunken.", transcriptByDefault: true },
  {
    exerciseId: "DE-CONV-001", subjectCode: "LV-DE", kind: "conversation", title: "Sich vorstellen", level: "B1", text: "Beantworte jede Frage laut in zwei oder drei Sätzen.", transcriptByDefault: true,
    prompts: ["Wie heißt du, und wo wohnst du?", "Was machst du gern in deiner Freizeit?", "Warum lernst du Deutsch?", "Was möchtest du nach dem Abitur machen?"],
    modelAnswer: "Beispiel: « Ich heiße Camille und wohne in Lyon. Ich lerne Deutsch, weil ich später an einer Wirtschaftshochschule studieren und vielleicht ein Praktikum in Deutschland machen möchte. »",
  },
  {
    exerciseId: "DE-CONV-002", subjectCode: "LV-DE", kind: "conversation", title: "Seine Meinung sagen", level: "B2", text: "Beantworte jede Frage laut. Begründe deine Meinung mit weil, denn oder deshalb.", transcriptByDefault: true,
    prompts: ["Sollten Handys in der Schule verboten werden? Warum oder warum nicht?", "Welche Vorteile und Nachteile hat die Arbeit im Homeoffice?", "Was tust du persönlich für die Umwelt?"],
    modelAnswer: "Beispiel: « Meiner Meinung nach sollte man Handys im Unterricht verbieten, weil die Schüler sich dann besser konzentrieren können. In den Pausen könnte man sie aber erlauben, denn sie sind auch nützlich. »",
  },
];
