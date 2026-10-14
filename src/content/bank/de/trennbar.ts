// de.trennbar : verbes à particule et verbes à préposition.
import { L, Q } from "./common";

export const lessonTrennbar = L({
  skillId: "de.trennbar",
  title: "Verbes à particule et verbes à préposition",
  objectives: ["Séparer et placer la particule d'un verbe séparable", "Former participe et infinitif avec zu des verbes séparables et inséparables", "Employer les verbes à préposition et leurs adverbes en da- et wo-"],
  prerequisites: ["de.ordre", "de.prep"],
  regle:
    "Verbes séparables. La particule est accentuée et a souvent un sens propre : an, auf, aus, ein, mit, vor, zu, zurück, weg, fern… Dans une principale au présent ou au prétérit, la particule se détache et va en fin de proposition : Der Zug kommt um acht Uhr an. Ich rufe dich morgen an. Dans une subordonnée, le verbe se recolle en dernière position : …, wenn der Zug ankommt. Participe : ge- entre la particule et le verbe (angekommen, aufgestanden, eingekauft). Infinitive : zu entre la particule et le verbe (anzurufen, mitzukommen).\n\nVerbes inséparables. Les préfixes be-, emp-, ent-, er-, ge-, miss-, ver-, zer- ne sont jamais accentués et ne se séparent jamais : Ich verstehe dich. Le participe ne prend pas ge- : verstanden, bekommen, erklärt, vergessen. Infinitive : zu devant le verbe entier (zu verstehen).\n\nQuelques préfixes (über, unter, um, durch, wieder) sont séparables ou inséparables selon le sens : übersetzen (traduire, inséparable) : Sie hat den Text übersetzt ; übersetzen (faire passer sur l'autre rive, séparable) : Die Fähre hat uns übergesetzt.\n\nVerbes à préposition. Beaucoup de verbes imposent une préposition et un cas, à apprendre ensemble : warten auf + accusatif, sich freuen auf + accusatif (événement à venir), sich freuen über + accusatif (ce qui arrive ou est arrivé), denken an + accusatif, sich interessieren für, sich erinnern an, teilnehmen an + datif, Angst haben vor + datif, sprechen über / mit, sich kümmern um, abhängen von, bitten um.\n\nPour reprendre une chose (pas une personne), on remplace préposition + pronom par da(r) + préposition : Ich denke an die Prüfung → Ich denke daran. Pour poser la question : wo(r) + préposition : Worauf wartest du? Wofür interessierst du dich? Le r s'ajoute devant une voyelle (darauf, woran). Pour une personne, on garde préposition + pronom : An wen denkst du? Ich denke an ihn.",
  formules:
    "Séparables : ankommen, anrufen, aufstehen, einkaufen, fernsehen, mitkommen, teilnehmen, zurückkommen\nParticipe : an|ge|rufen · infinitive : an|zu|rufen\nInséparables (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) : verstanden, bekommen, erklärt, vergessen · zu verstehen\nwarten auf (A) · sich freuen auf (A, avenir) / über (A, présent ou passé) · denken an (A) · sich erinnern an (A) · sich interessieren für (A) · teilnehmen an (D) · Angst haben vor (D) · sich kümmern um (A)\nChose : daran, darauf, dafür, davon · question : woran, worauf, wofür, wovon\nPersonne : an wen? an ihn · auf wen? auf sie",
  methode:
    "1. Repère le préfixe du verbe : séparable (accentué, mot autonome) ou inséparable (be-, ver-, er-…) ?\n2. Principale : particule en fin de proposition ; subordonnée : verbe soudé en fin.\n3. Participe : ge- au milieu pour un séparable, pas de ge- pour un inséparable.\n4. Verbe à préposition : retrouve la préposition apprise avec le verbe, puis le cas qu'elle impose.\n5. Pour reprendre une chose, utilise da(r)- ; pour une question, wo(r)- ; pour une personne, préposition + pronom.",
  exemple:
    "« Hast du deine Oma schon ___? (anrufen) » Parfait d'un verbe séparable : ge- entre la particule et le radical : angerufen.\n\n« Freust du dich auf die Ferien? – Ja, ich freue mich sehr ___. » On reprend une chose (die Ferien) introduite par auf : darauf.",
  erreur:
    "✗ Der Zug ankommt um acht. → ✓ Der Zug kommt um acht an.\n✗ geanrufen, geverstanden → ✓ angerufen, verstanden.\n✗ zu anrufen → ✓ anzurufen.\n✗ Ich warte für dich (calque de l'anglais « wait for »). → ✓ Ich warte auf dich.\n✗ Ich denke an es. → ✓ Ich denke daran.\n✗ Für was interessierst du dich? (familier) → ✓ Wofür interessierst du dich?",
  approfondir:
    "Repère sonore : dans un verbe séparable, l'accent tombe sur la particule (ANrufen) ; dans un inséparable, sur le radical (verSTEhen). C'est la clé des verbes ambigus comme übersetzen ou umfahren.\n\nAstuce mémoire : apprends chaque verbe à préposition dans une mini-phrase à toi : « Ich freue mich auf das Abitur… na ja. » Une phrase vécue se retrouve bien plus vite qu'une liste.\n\nLien : sich freuen auf ou über, c'est la même logique que le choix entre futur et passé. Au concours, cherche l'indicateur de temps (bald, nächste Woche ou gestern) pour trancher.",
  cards: [
    ["Participe de anrufen", "angerufen", false],
    ["Préfixes inséparables", "be-, emp-, ent-, er-, ge-, miss-, ver-, zer- (pas de ge- au participe)", false],
    ["sich freuen auf / über", "auf : événement à venir · über : ce qui arrive ou est arrivé", false],
    ["Attendre quelqu'un", "auf jemanden warten", true],
    ["Reprendre « an die Prüfung »", "daran", false],
  ],
});

const S = "de.trennbar";

export const questionsTrennbar = [
  Q("B-DE-TRE-001", S, "de.trennbar.place", 1, "Sie lesen die Anzeigetafel am Bahnhof. Welcher Satz ist richtig?", [
    ["Der Zug aus München kommt um acht Uhr an.", true, "Principale : la particule an se détache et va en fin de proposition."],
    ["Der Zug aus München ankommt um acht Uhr.", false, "La particule ne reste pas collée au verbe conjugué en principale."],
    ["Der Zug aus München kommt an um acht Uhr.", false, "La particule doit fermer la proposition, après les compléments."],
    ["Der Zug aus München an kommt um acht Uhr.", false, "Particule placée avant le verbe : ordre impossible."],
  ], "Ankommen est séparable. Dans une principale au présent, le verbe conjugué kommt est en position 2 et la particule an ferme la proposition.", "Principale : verbe conjugué en position 2, particule en dernière position.", [
    "Ankommen est-il séparable ?",
    "Où va la particule dans une principale ?",
    "Tout à la fin de la phrase.",
  ]),
  Q("B-DE-TRE-002", S, "de.trennbar.participe", 2, "Ergänzen Sie: «Hast du deine Großmutter zum Geburtstag schon ___?» (anrufen)", [
    ["angerufen", true, "Verbe séparable : ge- entre la particule et le participe du verbe de base (gerufen)."],
    ["geanrufen", false, "ge- doit se placer après la particule."],
    ["anrufen", false, "Infinitif : après hast, il faut un participe."],
    ["angeruft", false, "Rufen est un verbe fort : participe en -en."],
  ], "Anrufen est séparable et rufen est fort (gerufen). Le participe insère ge- après la particule : angerufen.", "Participe d'un séparable : particule + ge + participe du verbe simple.", [
    "Anrufen est séparable.",
    "Quel est le participe de rufen ?",
    "an + gerufen.",
  ]),
  Q("B-DE-TRE-003", S, "de.trennbar.participe", 2, "Ergänzen Sie: «Entschuldigung, ich habe Ihre Frage leider nicht ___.»", [
    ["verstanden", true, "Préfixe inséparable ver- : participe sans ge-."],
    ["geverstanden", false, "Les verbes à préfixe inséparable ne prennent pas ge-."],
    ["verstehen", false, "Infinitif : il faut un participe après habe."],
    ["verstandet", false, "Verstehen est fort : participe en -en."],
  ], "Ver- est un préfixe inséparable : le participe ne prend pas ge-. Stehen est fort (gestanden), d'où verstanden.", "be-, ver-, er-, ent-… : participe sans ge-.", [
    "Ver- est-il séparable ?",
    "Les inséparables n'ajoutent pas de ge-.",
    "Même radical que gestanden.",
  ]),
  Q("B-DE-TRE-004", S, "de.trennbar.prepositions", 1, "Ergänzen Sie: «Wir warten schon seit zwanzig Minuten ___ den Bus.»", [
    ["auf", true, "warten auf + accusatif."],
    ["für", false, "Calque de l'anglais « wait for »."],
    ["nach", false, "Nach est suivi du datif et ne s'emploie pas avec warten."],
    ["an", false, "Préposition de denken, pas de warten."],
  ], "Attendre quelqu'un ou quelque chose se dit warten auf + accusatif : auf den Bus warten.", "warten auf + accusatif.", [
    "Ce verbe impose une préposition fixe.",
    "Ne pense ni au français ni à l'anglais.",
    "La même préposition que dans sich freuen … die Ferien.",
  ]),
  Q("B-DE-TRE-005", S, "de.trennbar.prepositions", 2, "Ergänzen Sie: «Ich freue mich schon sehr ___ die Sommerferien nächsten Monat.»", [
    ["auf", true, "Événement à venir (nächsten Monat) : sich freuen auf."],
    ["über", false, "Sich freuen über porte sur ce qui arrive ou est arrivé."],
    ["für", false, "Sich freuen für jemanden = se réjouir pour quelqu'un, pas d'un événement."],
    ["an", false, "Préposition de denken an ou sich erinnern an."],
  ], "Les vacances sont le mois prochain : on s'en réjouit à l'avance, donc sich freuen auf + accusatif.", "sich freuen auf (avenir) ≠ sich freuen über (présent ou passé).", [
    "L'événement est-il passé ou à venir ?",
    "Nächsten Monat indique l'avenir.",
    "Même préposition que warten …",
  ], { anchor: "formules" }),
  Q("B-DE-TRE-006", S, "de.trennbar.prepositions", 2, "Ergänzen Sie: «Denkst du noch ___ unser Gespräch von letzter Woche?»", [
    ["an", true, "denken an + accusatif."],
    ["für", false, "Für ne s'emploie pas avec denken."],
    ["auf", false, "Préposition de warten ou sich freuen, pas de denken."],
    ["mit", false, "Mit impose le datif (unserem) et ne s'emploie pas avec denken."],
  ], "Penser à quelque chose ou à quelqu'un se dit denken an + accusatif : an unser Gespräch.", "denken an + accusatif.", [
    "Penser à : quelle préposition en allemand ?",
    "La même que sich erinnern …",
    "Deux lettres.",
  ]),
  Q("B-DE-TRE-007", S, "de.trennbar.da", 3, "Ergänzen Sie: «Hast du an das Geschenk für Papa gedacht?» – «Ja, natürlich habe ich ___ gedacht.»", [
    ["daran", true, "Reprise d'une chose après denken an : da + r + an."],
    ["an es", false, "Préposition + pronom pour une chose : fautif, on emploie da-."],
    ["an ihn", false, "Préposition + pronom : réservé aux personnes."],
    ["darauf", false, "Mauvaise préposition : denken se construit avec an."],
  ], "Pour reprendre une chose introduite par une préposition, on forme da + préposition, avec un r de liaison devant une voyelle : an → daran.", "Chose : da(r) + préposition ; personne : préposition + pronom.", [
    "Le complément est-il une personne ou une chose ?",
    "Pour une chose, on utilise un adverbe en da-.",
    "da + r + préposition de denken.",
  ], { reserved: true }),
  Q("B-DE-TRE-008", S, "de.trennbar.zu", 2, "Ergänzen Sie: «Vergiss nicht, die Tür ___, wenn du gehst!»", [
    ["abzuschließen", true, "Séparable : zu s'intercale entre la particule et le verbe."],
    ["zu abschließen", false, "Avec un séparable, zu se place après la particule."],
    ["abschließen zu", false, "Zu ne se place jamais après l'infinitif."],
    ["abzuschließt", false, "Après zu, il faut l'infinitif, pas une forme conjuguée."],
  ], "Vergessen + infinitive avec zu. Abschließen est séparable : zu s'intercale, en un seul mot : abzuschließen.", "Infinitive d'un séparable : particule + zu + verbe, en un mot.", [
    "Vergessen est suivi d'une infinitive avec zu.",
    "Abschließen est séparable.",
    "zu au milieu, en un seul mot.",
  ]),
  Q("B-DE-TRE-009", S, "de.trennbar.da", 3, "Ergänzen Sie: «___ interessierst du dich am meisten?» – «Für Wirtschaft und Politik.»", [
    ["Wofür", true, "Question sur une chose avec sich interessieren für : wo + für."],
    ["Worauf", false, "Mauvaise préposition : sich interessieren se construit avec für."],
    ["Wovon", false, "Mauvaise préposition : von ne s'emploie pas avec sich interessieren."],
    ["Für wen", false, "Für wen porte sur une personne ; la réponse est une chose."],
  ], "Sich interessieren für + accusatif. La réponse est une chose : la question se forme avec wo + für, wofür.", "Question sur une chose : wo(r) + préposition ; sur une personne : préposition + wen/wem.", [
    "Quelle préposition accompagne sich interessieren ?",
    "La réponse désigne-t-elle une personne ?",
    "wo + préposition.",
  ]),
  Q("B-DE-TRE-010", S, "de.trennbar.ambigus", 2, "Ergänzen Sie: «Sie hat den Artikel aus dem Englischen ins Deutsche ___.» (= traduire)", [
    ["übersetzt", true, "Übersetzen (traduire) est inséparable : participe sans ge-."],
    ["übergesetzt", false, "Participe du verbe séparable übersetzen (faire traverser une rivière)."],
    ["geübersetzt", false, "Les verbes inséparables ne prennent jamais ge-."],
    ["übersetzen", false, "Infinitif : il faut un participe."],
  ], "Übersetzen au sens de traduire est inséparable (accent sur -setz-) : participe übersetzt. Le séparable übersetzen (passer sur l'autre rive) donne übergesetzt.", "über- inséparable : participe sans ge- (übersetzt).", [
    "Le sens est « traduire ».",
    "Dans ce sens, le préfixe über- ne se sépare pas.",
    "Inséparable : pas de ge-.",
  ], { reserved: true }),
  Q("B-DE-TRE-011", S, "de.trennbar.prepositions", 2, "Ergänzen Sie: «Nächste Woche nehme ich ___ einem Debattierwettbewerb teil.»", [
    ["an", true, "teilnehmen an + datif."],
    ["auf", false, "Préposition de warten ou sich freuen ; teilnehmen se construit avec an."],
    ["in", false, "Calque de l'anglais « take part in »."],
    ["zu", false, "Zu ne s'emploie pas avec teilnehmen."],
  ], "Participer à quelque chose : an etwas (datif) teilnehmen. La particule teil ferme la proposition.", "an + datif teilnehmen.", [
    "Teilnehmen impose une préposition.",
    "Le groupe einem Wettbewerb est au datif.",
    "Même préposition que denken …",
  ]),
];
