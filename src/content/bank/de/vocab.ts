// de.vocab : faux-amis et vocabulaire de l'actualité, de l'économie et des études.
import { L, Q } from "./common";

export const lessonVocab = L({
  skillId: "de.vocab",
  title: "Faux-amis et vocabulaire utile",
  objectives: ["Éviter les faux-amis allemand-français et allemand-anglais", "Maîtriser le vocabulaire des études, du travail et de l'économie", "Comprendre les mots clés de l'actualité"],
  regle:
    "Les mots qui ressemblent au français ou à l'anglais sont ceux qui trompent le plus sous pression. Un faux ami se neutralise en l'apprenant dans une phrase contrastive.\n\nFaux-amis avec le français :\n– der Chef = le patron, le supérieur (le chef cuisinier : der Koch).\n– das Gymnasium = l'établissement secondaire qui mène à l'Abitur (la salle de sport : die Turnhalle ; le club de sport : das Fitnessstudio).\n– die Kommode = la commode (meuble) ; « commode » (pratique) se dit praktisch ou bequem.\n– also = donc (« aussi » se dit auch).\n– eventuell = peut-être, le cas échéant (pas « finalement » : schließlich, endlich).\n– sensibel = sensible, émotif ; vernünftig = raisonnable (piège de l'anglais sensible).\n– die Note = la note scolaire ; die Notiz = la note prise par écrit.\n– bekommen = recevoir, obtenir (pas « devenir » comme l'anglais become ; devenir = werden).\n– das Abitur bestehen = réussir le bac ; eine Prüfung machen, ablegen = passer un examen.\n– eigentlich = en fait, à vrai dire ; aktuell = actuel, d'actualité.\n– die Bewerbung = la candidature ; sich bewerben um = postuler.\n– die Ausbildung = la formation professionnelle ; die Bildung = l'éducation, l'instruction ; die Erziehung = l'éducation donnée par les parents.\n\nVocabulaire de l'économie : das Unternehmen (l'entreprise), der Umsatz (le chiffre d'affaires), der Gewinn (le bénéfice), der Verlust (la perte), die Kosten (les coûts, pluriel), die Arbeitslosigkeit (le chômage), die Inflation, die Preise steigen (les prix augmentent), die Steuer (l'impôt), der Arbeitnehmer (le salarié), der Arbeitgeber (l'employeur), die Stelle (le poste), das Gehalt (le salaire).\n\nVocabulaire des études : das Studium, die Hochschule, die Universität, das Fach (la matière), das Praktikum (le stage), die Prüfung, bestehen / durchfallen (réussir / échouer).\n\nActualité : die Regierung (le gouvernement), die Wahl (l'élection), die Umwelt (l'environnement), der Klimawandel, die Energiewende (la transition énergétique), die Gesellschaft (la société).",
  formules:
    "der Chef = le patron · der Koch = le cuisinier\ndas Gymnasium = établissement secondaire menant à l'Abitur · die Turnhalle = gymnase\nalso = donc · auch = aussi\neventuell = peut-être · schließlich = finalement\nbekommen = recevoir · werden = devenir\nvernünftig = raisonnable · sensibel = sensible\nbestehen = réussir (un examen) · durchfallen = échouer\nUmsatz = chiffre d'affaires · Gewinn = bénéfice · Verlust = perte",
  methode:
    "1. Si un mot ressemble au français ou à l'anglais, méfie-toi : vérifie le sens dans le contexte.\n2. Cherche dans la phrase un indice de sens (cause, contraste, définition).\n3. Élimine les mots qui ne vont pas avec le contexte, même s'ils sont « bien allemands ».\n4. Vérifie le genre si les options diffèrent par l'article.",
  exemple:
    "« Ich habe zum Geburtstag ein Fahrrad bekommen. » Bekommen ne signifie pas « devenir » : j'ai reçu un vélo pour mon anniversaire.\n\n« Das Unternehmen steigert seinen Umsatz, aber nicht seinen Gewinn. » L'entreprise augmente son chiffre d'affaires, mais pas son bénéfice : les coûts ont aussi augmenté.",
  erreur:
    "✗ Ich bekomme Arzt (je deviens médecin). → ✓ Ich werde Arzt.\n✗ Ich gehe ins Gymnasium, um Sport zu machen. → ✓ Ich gehe ins Fitnessstudio.\n✗ also = aussi → ✓ also = donc ; aussi = auch.\n✗ eventuell = finalement → ✓ eventuell = peut-être.\n✗ Ich habe das Abitur bestanden (pour « je l'ai passé », sans résultat). → ✓ Ich habe das Abitur gemacht ; bestanden = réussi.\n✗ Sie ist sehr sensibel (pour « raisonnable »). → ✓ Sie ist sehr vernünftig.",
  approfondir:
    "Méthode recommandée pour ton niveau : cinq faux-amis par semaine, chacun dans deux phrases opposées (« Mein Chef ist streng. Der Koch macht eine Suppe. »). C'est plus efficace qu'une liste de cinquante mots.\n\nLes questions de vocabulaire sont rapides au concours : soit tu sais, soit tu ne sais pas. Ne dépasse pas 30 secondes ; garde le temps pour la compréhension.\n\nLien : beaucoup de mots économiques apparaissent dans les textes de compréhension. Connaître Umsatz, Gewinn, Stelle ou Arbeitslosigkeit évite les contresens sur le sens global.",
  cards: [
    ["bekommen", "recevoir, obtenir (≠ devenir : werden)", true],
    ["das Gymnasium", "établissement secondaire qui mène à l'Abitur", false],
    ["eventuell", "peut-être, le cas échéant", true],
    ["also", "donc", true],
    ["der Umsatz / der Gewinn", "le chiffre d'affaires / le bénéfice", false],
    ["vernünftig", "raisonnable", true],
  ],
});

const S = "de.vocab";

export const questionsVocab = [
  Q("B-DE-VOC-001", S, "de.vocab.fauxamis", 1, "Was bedeutet: «Ich habe zum Geburtstag ein Fahrrad bekommen.»?", [
    ["J'ai reçu un vélo pour mon anniversaire.", true, "Bekommen = recevoir."],
    ["Je suis devenu un vélo pour mon anniversaire.", false, "Calque de l'anglais become ; devenir se dit werden."],
    ["J'ai acheté un vélo pour mon anniversaire.", false, "Acheter se dit kaufen."],
    ["J'ai offert un vélo pour mon anniversaire.", false, "Offrir se dit schenken."],
  ], "Bekommen est un faux ami de l'anglais become : il signifie recevoir, obtenir.", "bekommen = recevoir ; werden = devenir.", [
    "Méfie-toi de la ressemblance avec l'anglais.",
    "Que fait-on d'un cadeau d'anniversaire ?",
    "Synonyme : erhalten.",
  ]),
  Q("B-DE-VOC-002", S, "de.vocab.fauxamis", 1, "Was ist ein «Gymnasium» in Deutschland?", [
    ["Eine Schule, die zum Abitur führt.", true, "Das Gymnasium est l'établissement secondaire général."],
    ["Eine Halle für den Sportunterricht.", false, "Le gymnase se dit die Turnhalle."],
    ["Eine Universität für Sportwissenschaften.", false, "Une université se dit Universität ou Hochschule."],
    ["Ein privates Fitnessstudio.", false, "Calque du français « gymnase » au sens de salle de sport."],
  ], "Das Gymnasium est le type d'école secondaire qui prépare à l'Abitur. Le gymnase français se dit die Turnhalle.", "das Gymnasium = établissement secondaire général ; die Turnhalle = gymnase.", [
    "C'est un faux ami.",
    "Pense à l'Abitur.",
    "Un type d'école.",
  ]),
  Q("B-DE-VOC-003", S, "de.vocab.fauxamis", 2, "Wie sagt man «Cette application est très commode (pratique)» auf Deutsch?", [
    ["Diese App ist sehr praktisch.", true, "Commode (pratique) = praktisch."],
    ["Diese App ist sehr Kommode.", false, "Die Kommode est un meuble, et un nom ne peut pas être attribut ainsi."],
    ["Diese App ist sehr kommerziell.", false, "Kommerziell = commercial."],
    ["Diese App ist sehr komisch.", false, "Komisch = bizarre ou drôle."],
  ], "L'adjectif français « commode » se traduit par praktisch ou bequem. Die Kommode désigne seulement le meuble.", "commode (adjectif) = praktisch ; die Kommode = le meuble.", [
    "Kommode est un nom en allemand.",
    "Cherche un adjectif signifiant « pratique ».",
    "Un mot transparent… pour « pratique ».",
  ]),
  Q("B-DE-VOC-004", S, "de.vocab.fauxamis", 2, "Was bedeutet «also» in diesem Satz: «Der letzte Bus ist schon weg, also gehen wir zu Fuß.»?", [
    ["donc", true, "Also introduit une conséquence."],
    ["aussi", false, "Calque de l'anglais also ; aussi se dit auch."],
    ["alors que", false, "Opposition : sens contraire de la phrase."],
    ["pourtant", false, "Concession : il n'y a pas d'opposition ici."],
  ], "Le bus est parti, donc on marche : also exprime la conséquence. Remarque l'inversion (gehen wir), comme après deshalb.", "also = donc ; auch = aussi.", [
    "Quel rapport entre le bus parti et la marche ?",
    "C'est une conséquence.",
    "Ne te fie pas à l'anglais.",
  ]),
  Q("B-DE-VOC-005", S, "de.vocab.fauxamis", 2, "Was bedeutet: «Ich komme eventuell etwas später.»?", [
    ["Je viendrai peut-être un peu plus tard.", true, "Eventuell = peut-être, éventuellement."],
    ["Je viendrai finalement un peu plus tard.", false, "Calque de l'anglais eventually ; finalement = schließlich."],
    ["Je viendrai certainement un peu plus tard.", false, "Certainement = sicher, bestimmt."],
    ["Je viendrai exceptionnellement un peu plus tard.", false, "Exceptionnellement = ausnahmsweise."],
  ], "Eventuell exprime une possibilité : peut-être, le cas échéant.", "eventuell = peut-être ; schließlich = finalement.", [
    "Possibilité ou certitude ?",
    "Faux ami de l'anglais eventually.",
    "Synonyme : vielleicht.",
  ]),
  Q("B-DE-VOC-006", S, "de.vocab.fauxamis", 2, "Wie sagt man «Ma sœur est très raisonnable, elle ne dépense jamais trop» auf Deutsch?", [
    ["Meine Schwester ist sehr vernünftig, sie gibt nie zu viel aus.", true, "Raisonnable = vernünftig."],
    ["Meine Schwester ist sehr sensibel, sie gibt nie zu viel aus.", false, "Sensibel = sensible, émotif (piège de l'anglais sensible)."],
    ["Meine Schwester ist sehr empfindlich, sie gibt nie zu viel aus.", false, "Empfindlich = susceptible, fragile."],
    ["Meine Schwester ist sehr vermutlich, sie gibt nie zu viel aus.", false, "Vermutlich = probablement (adverbe)."],
  ], "Raisonnable se dit vernünftig (de die Vernunft, la raison). Sensibel correspond au français « sensible ».", "vernünftig = raisonnable ; sensibel = sensible.", [
    "Cherche le mot lié à « la raison » (die Vernunft).",
    "Attention au piège de l'anglais sensible.",
    "vernünft…",
  ], { reserved: true }),
  Q("B-DE-VOC-007", S, "de.vocab.mots", 2, "Was bedeutet «eigentlich» in diesem Satz: «Eigentlich wollte ich heute lernen, aber dann kam mein Freund vorbei.»?", [
    ["en fait, à vrai dire", true, "Eigentlich signale une intention contrariée."],
    ["actuellement", false, "Actuellement = zurzeit, momentan."],
    ["évidemment", false, "Évidemment = natürlich, selbstverständlich."],
    ["finalement", false, "Finalement = schließlich, endlich."],
  ], "Eigentlich marque ce qui était prévu ou ce qui est vrai au fond, souvent avant un aber : en fait, à vrai dire.", "eigentlich = en fait, à vrai dire.", [
    "Regarde le aber qui suit.",
    "L'intention initiale n'a pas été réalisée.",
    "En réalité…",
  ]),
  Q("B-DE-VOC-008", S, "de.vocab.economie", 2, "Ergänzen Sie: «Das Unternehmen hat dieses Jahr einen hohen ___ gemacht: Es hat viel mehr eingenommen als ausgegeben.»", [
    ["Gewinn", true, "Gewinn = bénéfice, différence entre recettes et dépenses."],
    ["Verlust", false, "Verlust = perte : contresens."],
    ["Umsatz", false, "Umsatz = chiffre d'affaires : il ne tient pas compte des dépenses."],
    ["Kosten", false, "Kosten = coûts, nom pluriel (einen hohen impossible)."],
  ], "Recettes supérieures aux dépenses : c'est un bénéfice, der Gewinn.", "Umsatz = chiffre d'affaires ; Gewinn = bénéfice ; Verlust = perte.", [
    "Mehr eingenommen als ausgegeben : que reste-t-il ?",
    "Le contraire de Verlust.",
    "Le bénéfice.",
  ]),
  Q("B-DE-VOC-009", S, "de.vocab.etudes", 1, "Was ist eine «Bewerbung»?", [
    ["une candidature à un emploi ou à une formation", true, "Die Bewerbung = la candidature (sich bewerben = postuler)."],
    ["une évaluation scolaire", false, "Une évaluation = eine Bewertung."],
    ["un mouvement de protestation", false, "Confusion avec die Bewegung (le mouvement)."],
    ["une entreprise", false, "Une entreprise = ein Unternehmen, eine Firma."],
  ], "Die Bewerbung vient de sich bewerben (postuler) : c'est la candidature, avec Lebenslauf (CV) et Anschreiben (lettre de motivation).", "die Bewerbung = la candidature.", [
    "Le verbe est sich bewerben.",
    "On l'envoie à une entreprise ou une école.",
    "CV + lettre de motivation.",
  ]),
  Q("B-DE-VOC-010", S, "de.vocab.actualite", 2, "Ergänzen Sie: «Wegen der hohen ___ können sich viele Familien weniger leisten: Die Preise steigen schneller als die Löhne.»", [
    ["Inflation", true, "Hausse générale des prix : die Inflation."],
    ["Arbeitslosigkeit", false, "Le chômage ne correspond pas à la hausse des prix décrite."],
    ["Steuererklärung", false, "Déclaration d'impôts : sans rapport avec les prix."],
    ["Ausbildung", false, "Formation professionnelle : hors sujet."],
  ], "Die Preise steigen schneller als die Löhne : les prix augmentent, c'est l'inflation, qui réduit le pouvoir d'achat.", "die Inflation = hausse générale des prix ; die Löhne = les salaires.", [
    "Quel phénomène est décrit après les deux-points ?",
    "Les prix augmentent.",
    "Mot transparent.",
  ]),
  Q("B-DE-VOC-011", S, "de.vocab.etudes", 2, "Was bedeutet: «Er hat das Abitur bestanden.»?", [
    ["Il a réussi le bac.", true, "Bestehen (une épreuve) = réussir."],
    ["Il a passé le bac, sans qu'on sache s'il l'a eu.", false, "Passer un examen = eine Prüfung machen ou ablegen."],
    ["Il a raté le bac.", false, "Échouer = durchfallen."],
    ["Il a préparé le bac.", false, "Préparer = sich vorbereiten auf."],
  ], "Eine Prüfung bestehen signifie la réussir. Le français « passer un examen » se dit eine Prüfung machen ou ablegen.", "bestehen = réussir ; durchfallen = échouer.", [
    "Bestehen n'est pas « passer ».",
    "C'est le contraire de durchfallen.",
    "Résultat positif.",
  ]),
  Q("B-DE-VOC-012", S, "de.vocab.etudes", 3, "Welches Wort passt? «Nach dem Abitur möchte ich keine Universität besuchen, sondern eine ___ als Bankkaufmann machen.»", [
    ["Ausbildung", true, "Die Ausbildung = la formation professionnelle (en alternance)."],
    ["Bildung", false, "Die Bildung = l'éducation, l'instruction en général."],
    ["Erziehung", false, "Die Erziehung = l'éducation donnée par les parents."],
    ["Einbildung", false, "Die Einbildung = l'imagination, la prétention."],
  ], "Une formation pour un métier (Bankkaufmann) se dit Ausbildung. Bildung et Erziehung sont des notions générales.", "Ausbildung = formation professionnelle ; Bildung = éducation ; Erziehung = éducation parentale.", [
    "Il s'agit d'apprendre un métier.",
    "Les quatre mots contiennent -bildung ou proche.",
    "Formation professionnelle.",
  ], { reserved: true }),
  Q("B-DE-VOC-013", S, "de.vocab.fauxamis", 2, "Welches Wort passt? «In diesem Restaurant arbeiten drei ___: Sie bereiten alle Gerichte frisch zu.»", [
    ["Köche", true, "Der Koch, die Köche = cuisinier(s)."],
    ["Chefs", false, "Der Chef = le patron, le supérieur, pas le cuisinier."],
    ["Kocher", false, "Der Kocher = le réchaud, un appareil."],
    ["Küchen", false, "Die Küche = la cuisine (pièce ou art culinaire)."],
  ], "Ceux qui préparent les plats sont des cuisiniers : der Koch, pluriel die Köche. Der Chef désigne le patron.", "der Koch = le cuisinier ; der Chef = le patron.", [
    "Qui prépare les plats ?",
    "Chef est un faux ami.",
    "Pluriel de der Koch.",
  ]),
];
