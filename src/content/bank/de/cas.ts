// de.cas : les quatre cas, articles, possessifs, kein, pronoms personnels.
import { L, Q } from "./common";

export const lessonCas = L({
  skillId: "de.cas",
  title: "Les quatre cas et la déclinaison",
  objectives: ["Identifier la fonction d'un groupe nominal", "Décliner articles, possessifs et kein", "Choisir le bon pronom personnel"],
  regle:
    "En allemand, la fonction d'un groupe nominal se lit dans sa terminaison, pas dans sa place. Quatre cas : le nominatif (sujet et attribut du sujet), l'accusatif (COD et après certaines prépositions), le datif (COI, « à qui ? », et après certaines prépositions), le génitif (complément du nom, « de qui ? »).\n\nC'est l'article qui porte le cas. Retiens d'abord le masculin, qui change à chaque cas : der, den, dem, des. Le féminin et le neutre ne changent qu'au datif et au génitif. Au pluriel, le datif ajoute -n au nom, sauf si le pluriel finit déjà par -n ou par -s : mit den Kindern, mit den Frauen, mit den Autos.\n\nL'article indéfini (ein), la négation kein et les possessifs (mein, dein, sein, ihr, unser, euer, Ihr) prennent les mêmes terminaisons que l'article défini, sauf à trois endroits où ils n'ont aucune terminaison : nominatif masculin, nominatif neutre et accusatif neutre (ein Mann, ein Kind, mein Buch).\n\nLe possessif dépend du possesseur : sein pour un possesseur masculin ou neutre, ihr pour un possesseur féminin ou pluriel. Sa terminaison, elle, dépend du nom possédé : Anna besucht ihren Vater.\n\nCertains verbes imposent le datif alors que le français emploie un COD : helfen, danken, gratulieren, folgen, gefallen, gehören, antworten. Ich helfe dir, das Kleid gefällt ihr.\n\nUne petite famille de noms masculins, dits faibles, prennent -n ou -en à tous les cas sauf au nominatif singulier : der Junge, den Jungen ; der Nachbar, dem Nachbarn ; der Herr, den Herrn ; der Kollege, der Student, der Mensch.\n\nPronoms personnels : ich, mich, mir ; du, dich, dir ; er, ihn, ihm ; sie, sie, ihr ; es, es, ihm ; wir, uns, uns ; ihr, euch, euch ; sie et Sie, sie et Sie, ihnen et Ihnen.",
  formules:
    "Défini : masc der, den, dem, des · fém die, die, der, der · neutre das, das, dem, des · pluriel die, die, den (+n), der\nIndéfini : masc ein, einen, einem, eines · fém eine, eine, einer, einer · neutre ein, ein, einem, eines\nkein et possessifs : comme ein, avec un pluriel keine, keine, keinen (+n), keiner\nPronoms : mich, dich, ihn, sie, es, uns, euch, sie (accusatif) · mir, dir, ihm, ihr, ihm, uns, euch, ihnen (datif)\nVerbes + datif : helfen, danken, gefallen, gehören, gratulieren, folgen, antworten, schmecken\nQuestions : wer (nominatif), wen (accusatif), wem (datif), wessen (génitif)",
  methode:
    "1. Trouve le verbe conjugué et le sujet (nominatif).\n2. Cherche le déclencheur du groupe à compléter : préposition, verbe à datif, complément du nom.\n3. Si rien de tout cela : COD, donc accusatif ; « à qui ? », donc datif.\n4. Vérifie le genre et le nombre du nom (der Tisch, die Lampe, das Fenster).\n5. Choisis la terminaison dans le tableau, puis relis le groupe à voix basse.",
  exemple:
    "« Ich schenke ___ Schwester ein Fahrrad. » Sujet : ich. Objet donné : ein Fahrrad (accusatif neutre, sans terminaison). La personne qui reçoit répond à « à qui ? » : datif. Schwester est féminin : meiner Schwester.\n\n« Kennst du den Mann von ___ Nachbarin? » La préposition von impose le datif, féminin : von meiner Nachbarin. Au génitif écrit, on dirait aussi : der Mann meiner Nachbarin.",
  erreur:
    "✗ Ich helfe dich. → ✓ Ich helfe dir (helfen + datif).\n✗ Ich habe kein Bruder. → ✓ Ich habe keinen Bruder (accusatif masculin).\n✗ Anna besucht seine Eltern (pour les parents d'Anna). → ✓ Anna besucht ihre Eltern.\n✗ mit den Kinder → ✓ mit den Kindern (datif pluriel en -n).\n✗ Ich frage den Nachbar. → ✓ Ich frage den Nachbarn (masculin faible).\n✗ Wer gehört das? → ✓ Wem gehört das? (gehören + datif).",
  approfondir:
    "Astuce de vitesse : au concours, regarde d'abord la ou les options en -m et en -n. Un masculin singulier au datif finit toujours en -m (dem, einem, meinem), un masculin à l'accusatif toujours en -n (den, einen, keinen). Si le nom est féminin, -m est impossible. Ces deux réflexes éliminent souvent deux options en cinq secondes.\n\nLien avec la déclinaison de l'adjectif : l'adjectif reprend la marque du cas quand l'article ne la montre pas (ein guter Wein, mit kaltem Wasser). Maîtriser les articles, c'est déjà maîtriser la moitié de l'adjectif.",
  cards: [
    ["Article défini masculin aux quatre cas", "der, den, dem, des", false],
    ["Trois cas où ein et les possessifs n'ont pas de terminaison", "Nominatif masculin, nominatif neutre, accusatif neutre", false],
    ["Verbes courants suivis du datif", "helfen, danken, gefallen, gehören, gratulieren, folgen, antworten", false],
    ["Datif pluriel", "den + nom en -n : mit den Freunden", false],
    ["sein ou ihr ?", "Selon le possesseur : sein (masculin, neutre), ihr (féminin, pluriel)", false],
  ],
});

const S = "de.cas";

export const questionsCas = [
  Q("B-DE-CAS-001", S, "de.cas.datif", 1, "Ergänzen Sie: «Ich schenke ___ Bruder zum Geburtstag ein Buch.»", [
    ["meinem", true, "Datif masculin : le frère reçoit le cadeau (« à qui ? »)."],
    ["meinen", false, "Accusatif masculin : c'est le livre, pas le frère, qui est COD."],
    ["mein", false, "Forme sans terminaison du nominatif masculin."],
    ["meines", false, "Génitif : aucun complément du nom ici."],
  ], "Schenken construit deux compléments : la chose offerte à l'accusatif (ein Buch) et la personne qui reçoit au datif. Bruder est masculin, donc meinem Bruder.", "Avec schenken, geben, zeigen : la personne au datif, la chose à l'accusatif.", [
    "Qui reçoit le livre ?",
    "La personne qui reçoit répond à « à qui ? » : quel cas ?",
    "Datif masculin : la terminaison est -em.",
  ]),
  Q("B-DE-CAS-002", S, "de.cas.accusatif", 1, "Ergänzen Sie: «Hast du heute ___ Lehrer schon gesehen?»", [
    ["den", true, "Accusatif masculin : le professeur est le COD de sehen."],
    ["dem", false, "Datif : sehen se construit avec un COD, donc l'accusatif."],
    ["der", false, "Nominatif masculin : le sujet est du."],
    ["des", false, "Génitif : il n'y a pas de complément du nom."],
  ], "Le sujet est du ; Lehrer est le COD de sehen. Accusatif masculin : den Lehrer.", "Le COD se met à l'accusatif ; au masculin, der devient den.", [
    "Quel est le sujet de la phrase ?",
    "Lehrer est-il sujet, COD ou COI ?",
    "COD masculin : la forme change, finale en -n.",
  ]),
  Q("B-DE-CAS-003", S, "de.cas.genitif", 2, "Ergänzen Sie: «Das rote Auto vor dem Haus ist das Auto ___ Nachbarin.»", [
    ["meiner", true, "Génitif féminin : complément du nom Auto (« la voiture de ma voisine »)."],
    ["meine", false, "Nominatif ou accusatif féminin, pas le cas du complément du nom."],
    ["meinem", false, "Datif masculin ou neutre ; Nachbarin est féminin."],
    ["meinen", false, "Accusatif masculin ; ne convient ni au genre ni au cas."],
  ], "Le groupe complète le nom Auto : génitif. Au féminin, le génitif est identique au datif : meiner Nachbarin.", "Complément du nom = génitif ; au féminin : der, einer, meiner.", [
    "Le groupe complète un autre nom.",
    "Ce cas s'appelle le génitif : quel est le genre de Nachbarin ?",
    "Génitif féminin : même terminaison qu'au datif féminin.",
  ]),
  Q("B-DE-CAS-004", S, "de.cas.pronoms", 2, "Ergänzen Sie: «Kannst du ___ bitte helfen? Ich schaffe das nicht allein.»", [
    ["mir", true, "Datif : helfen se construit avec le datif."],
    ["mich", false, "Calque du français « m'aider » : l'accusatif est fautif avec helfen."],
    ["ich", false, "Nominatif : le sujet est du."],
    ["mein", false, "Possessif : il faut un pronom personnel."],
  ], "Helfen fait partie des verbes qui régissent le datif, alors que le français emploie un COD. Pronom de la première personne au datif : mir.", "helfen, danken, gefallen, gehören, antworten + datif.", [
    "Quel cas impose le verbe helfen ?",
    "Ne te fie pas au français « m'aider ».",
    "Première personne au datif : m…",
  ]),
  Q("B-DE-CAS-005", S, "de.cas.kein", 2, "Ergänzen Sie: «Wir haben leider ___ Zeit für einen Kaffee, der Zug fährt gleich.»", [
    ["keine", true, "Accusatif féminin de kein : Zeit est féminin et COD de haben."],
    ["keinen", false, "Accusatif masculin ; Zeit est féminin."],
    ["keiner", false, "Datif ou génitif féminin ; ici, COD."],
    ["kein", false, "Forme sans terminaison du nominatif masculin ou neutre ; Zeit est féminin."],
  ], "Pour nier un nom sans article ou avec ein, on emploie kein. Die Zeit est féminin, COD de haben : keine Zeit.", "Nom sans article ou avec ein → kein, décliné comme ein.", [
    "Comment nie-t-on un nom sans article ?",
    "Zeit est-il masculin, féminin ou neutre ?",
    "Accusatif féminin de kein : comme eine.",
  ]),
  Q("B-DE-CAS-006", S, "de.cas.pronoms", 2, "Ergänzen Sie: «Lisa hat den Mantel anprobiert. Er gefällt ___ sehr gut.»", [
    ["ihr", true, "Datif féminin : gefallen se construit avec le datif (« il lui plaît »)."],
    ["sie", false, "Accusatif féminin : fautif avec gefallen."],
    ["ihn", false, "Accusatif masculin : ni le bon cas ni la bonne personne."],
    ["ihm", false, "Datif masculin : la personne est Lisa."],
  ], "Avec gefallen, la chose qui plaît est le sujet (er = der Mantel) et la personne est au datif. Lisa est féminin : ihr.", "jemandem gefallen : la personne au datif.", [
    "Qui est le sujet de gefällt ?",
    "La personne à qui le manteau plaît est au datif.",
    "Datif féminin de sie : la forme ressemble à un possessif.",
  ]),
  Q("B-DE-CAS-007", S, "de.cas.faibles", 3, "Ergänzen Sie: «Kennst du ___ schon? Er wohnt seit einem Jahr neben uns.»", [
    ["unseren Nachbarn", true, "Accusatif masculin et nom faible en -n : den Nachbarn."],
    ["unseren Nachbar", false, "Oubli du -n du masculin faible Nachbar."],
    ["unserem Nachbarn", false, "Datif : kennen se construit avec un COD."],
    ["unser Nachbar", false, "Nominatif : le sujet est du."],
  ], "Kennen prend un COD : accusatif masculin, unseren. Nachbar est un masculin faible : il prend -n à tous les cas sauf au nominatif singulier, donc unseren Nachbarn.", "Masculins faibles (Nachbar, Kollege, Junge, Herr, Student) : -n ou -en hors nominatif singulier.", [
    "Deux choses à vérifier : l'article et le nom lui-même.",
    "Nachbar fait partie des masculins dits faibles.",
    "Accusatif masculin ; le nom prend aussi un -n.",
  ], { reserved: true }),
  Q("B-DE-CAS-008", S, "de.cas.interrogatifs", 1, "Welche Antwort ist richtig? «___ gehört dieses Handy?» – «Meiner Schwester.»", [
    ["Wem", true, "Datif : gehören se construit avec le datif, comme la réponse meiner Schwester."],
    ["Wen", false, "Accusatif : gehören n'a pas de COD."],
    ["Wer", false, "Nominatif : le sujet est dieses Handy."],
    ["Wessen", false, "Génitif : la réponse meiner Schwester est un datif."],
  ], "La réponse « Meiner Schwester » est au datif, car gehören régit le datif. Le pronom interrogatif au datif est wem.", "wer, wen, wem, wessen : nominatif, accusatif, datif, génitif.", [
    "Regarde le cas de la réponse.",
    "gehören se construit avec quel cas ?",
    "Interrogatif au datif : il finit comme dem.",
  ], { anchor: "formules" }),
  Q("B-DE-CAS-009", S, "de.cas.datif", 2, "Ergänzen Sie: «Die Lehrerin erklärt ___ Schülern die neue Aufgabe.»", [
    ["den", true, "Datif pluriel : Schülern porte d'ailleurs le -n du datif pluriel."],
    ["die", false, "Nominatif ou accusatif pluriel : die Aufgabe est déjà le COD."],
    ["der", false, "Génitif pluriel : pas de complément du nom."],
    ["dem", false, "Datif singulier ; Schülern est au pluriel."],
  ], "On explique quelque chose (accusatif : die neue Aufgabe) à quelqu'un (datif). Au pluriel, l'article datif est den et le nom prend -n : den Schülern.", "Datif pluriel : den + nom en -n.", [
    "Qui reçoit l'explication ?",
    "Schülern est-il au singulier ou au pluriel ?",
    "Datif pluriel : l'article ressemble à l'accusatif masculin.",
  ]),
  Q("B-DE-CAS-010", S, "de.cas.kein", 3, "Paul ist Einzelkind. Welcher Satz ist richtig?", [
    ["Er hat keinen Bruder und keine Schwester.", true, "Deux COD de haben à l'accusatif : keinen (masculin), keine (féminin)."],
    ["Er hat kein Bruder und keine Schwester.", false, "Kein sans terminaison : forme du nominatif, pas de l'accusatif masculin."],
    ["Er hat keinen Bruder und keinen Schwester.", false, "Schwester est féminin : keine, pas keinen."],
    ["Er hat keinem Bruder und keiner Schwester.", false, "Formes du datif : haben prend un COD à l'accusatif."],
  ], "Haben se construit avec un COD : accusatif. Bruder est masculin (keinen), Schwester féminin (keine).", "kein se décline comme ein : keinen à l'accusatif masculin.", [
    "Quel cas suit le verbe haben ?",
    "Vérifie le genre de chaque nom.",
    "Accusatif masculin en -en, accusatif féminin en -e.",
  ], { reserved: true }),
  Q("B-DE-CAS-011", S, "de.cas.possessifs", 2, "Ergänzen Sie: «Anna besucht am Wochenende ___ Großeltern in Hamburg.»", [
    ["ihre", true, "Possesseur féminin (Anna) → ihr- ; Großeltern, pluriel, COD → ihre."],
    ["seine", false, "Calque du français « ses » : sein renvoie à un possesseur masculin."],
    ["ihren", false, "Terminaison du datif pluriel ; besuchen prend un COD."],
    ["ihrer", false, "Terminaison du génitif ou du datif ; ici, accusatif pluriel."],
  ], "Le possessif dépend du possesseur : Anna est féminin, donc ihr-. La terminaison dépend du nom possédé : Großeltern, pluriel, COD de besuchen, accusatif pluriel : ihre.", "sein ou ihr selon le possesseur ; terminaison selon le nom possédé.", [
    "À qui sont les grands-parents ?",
    "Possesseur féminin : ihr-. Reste la terminaison.",
    "Accusatif pluriel : comme die.",
  ]),
];
