// Espagnol : subjonctif, impératif, pronoms personnels.
import type { BankQuestion, LessonDef } from "../helpers";
import { Q } from "./q";

export const LESSONS_VERBES2: LessonDef[] = [
  {
    skillId: "es.subj",
    title: "Le subjonctif présent et imparfait",
    objectives: ["Former le subjonctif présent et imparfait", "Reconnaître les déclencheurs du subjonctif", "Appliquer la concordance des temps et la structure si + imparfait du subjonctif"],
    prerequisites: ["es.presente", "es.pasados"],
    regle:
      "Formation du présent : on part de la 1re personne du présent de l'indicatif, on retire -o et on inverse la voyelle : -ar → -e, -er et -ir → -a. Hablo → hable ; como → coma ; tengo → tenga ; hago → haga ; conozco → conozca ; digo → diga. Irréguliers à connaître : ser (sea), ir (vaya), estar (esté), dar (dé), saber (sepa), haber (haya), ver (vea). Les diphtongues suivent le présent (piense, pensemos ; pueda, podamos) ; les verbes en -ir ferment leur voyelle à nosotros et vosotros : pidamos, durmamos, sintamos.\n\n" +
      "Formation de l'imparfait : 3e personne du pluriel de l'indefinido, on remplace -ron par -ra ou -se : tuvieron → tuviera / tuviese ; fueron → fuera ; dijeron → dijera ; pidieron → pidiera. Accent à nosotros : tuviéramos.\n\n" +
      "Emplois principaux :\n" +
      "– Futur dans une subordonnée de temps : cuando, en cuanto, hasta que, antes de que + subjonctif quand l'action est à venir. Cuando llegues, te llamaré (jamais cuando llegarás).\n" +
      "– But : para que + subjonctif quand les sujets diffèrent (Te lo explico para que lo entiendas) ; para + infinitif si le sujet est le même.\n" +
      "– Souhait : ojalá + subjonctif présent (souhait réalisable) ou imparfait (souhait peu probable).\n" +
      "– Volonté, ordre, demande, interdiction : querer que, pedir que, decir que (ordre), prohibir que.\n" +
      "– Sentiment et jugement : me alegra que, siento que, temo que, es importante que, es necesario que.\n" +
      "– Opinion niée : no creo que, no pienso que + subjonctif (mais creo que + indicatif).\n" +
      "– Aunque + subjonctif = même si (hypothèse) ; aunque + indicatif = bien que (fait réel).\n" +
      "– Condition : siempre que, con tal de que, en caso de que + subjonctif.\n\n" +
      "Concordance : si le verbe principal est au présent, au futur ou à l'impératif, la subordonnée est au subjonctif présent (Quiero que vengas) ; s'il est au passé ou au conditionnel, elle passe à l'imparfait du subjonctif (Quería que vinieras ; Me gustaría que vinieras).\n\n" +
      "Hypothèse : si + imparfait du subjonctif → conditionnel. Si tuviera tiempo, viajaría más. Après si, jamais de conditionnel ni de subjonctif présent.",
    formules:
      "Hablar : hable, hables, hable, hablemos, habléis, hablen\n" +
      "Tener : tenga, tengas, tenga, tengamos, tengáis, tengan\n" +
      "Ser : sea… ; Ir : vaya… ; Estar : esté… ; Saber : sepa… ; Haber : haya…\n" +
      "Pedir : pida, pidas, pida, pidamos, pidáis, pidan\n" +
      "Imparfait : tener → tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran\n" +
      "Hacer → hiciera ; poder → pudiera ; ser / ir → fuera ; decir → dijera\n" +
      "Concordance : présent / futur → subj. présent ; passé / conditionnel → subj. imparfait\n" +
      "Si + subj. imparfait → conditionnel",
    methode:
      "1. Cherche le déclencheur : cuando + futur, para que, ojalá, verbe de volonté ou de sentiment, no creo que, aunque (hypothèse), si.\n" +
      "2. Regarde le temps du verbe principal pour choisir présent ou imparfait du subjonctif.\n" +
      "3. Forme le verbe à partir de la 1re personne du présent ou de la 3e du pluriel de l'indefinido.\n" +
      "4. Élimine d'office le futur et le conditionnel après cuando et si.",
    exemple:
      "Completa : « Mi madre me pidió que ___ (volver) antes de medianoche. »\n" +
      "Déclencheur : pedir que (demande) → subjonctif. Verbe principal au passé (pidió) → imparfait du subjonctif.\n" +
      "Volver : volvieron → volviera. Réponse : me pidió que volviera.\n\n" +
      "Completa : « Si ___ (ganar) la lotería, compraría una casa en la playa. »\n" +
      "Si + hypothèse peu probable avec un conditionnel dans la principale → imparfait du subjonctif : ganara.",
    erreur:
      "✗ Cuando llegarás, te llamaré → ✓ Cuando llegues, te llamaré.\n" +
      "✗ Si tendría dinero, viajaría → ✓ Si tuviera dinero, viajaría.\n" +
      "✗ Quiero que vienes → ✓ Quiero que vengas.\n" +
      "✗ No creo que tiene razón → ✓ No creo que tenga razón.\n" +
      "✗ Me pidió que venga (pour une demande passée close) → ✓ Me pidió que viniera.",
    approfondir:
      "Les formes en -ra et en -se de l'imparfait du subjonctif sont équivalentes dans presque tous les cas : tuviera = tuviese. Au concours, une seule des deux figure généralement parmi les choix.\n\n" +
      "Cuando suivi d'une habitude ou d'un fait passé garde l'indicatif : Cuando llego a casa, ceno (habitude) ; Cuando llegué, cené (passé). Seul le futur déclenche le subjonctif.\n\n" +
      "Conseil de temps : face à un blanc après que, identifie d'abord le verbe principal ; la moitié des distracteurs tombe immédiatement.",
    cards: [
      ["Cuando + action future", "cuando + subjonctif présent : cuando llegues", false],
      ["Si j'avais le temps, je viendrais", "Si tuviera tiempo, vendría.", true],
      ["Imparfait du subjonctif : base", "3e personne du pluriel de l'indefinido (-ron → -ra)", false],
      ["No creo que…", "+ subjonctif : no creo que sea verdad", false],
      ["Aunque + subjonctif", "même si (hypothèse)", true],
    ],
  },
  {
    skillId: "es.imperatif",
    title: "L'impératif et l'enclise des pronoms",
    objectives: ["Former l'impératif affirmatif à toutes les personnes", "Exprimer la défense avec no + subjonctif", "Placer et accentuer les pronoms enclitiques", "Vouvoyer avec usted et ustedes"],
    prerequisites: ["es.presente", "es.subj"],
    regle:
      "Tú : l'impératif affirmatif reprend la 3e personne du singulier du présent : habla, come, vive, piensa, vuelve. Huit formes irrégulières : di (decir), haz (hacer), ve (ir), pon (poner), sal (salir), sé (ser), ten (tener), ven (venir).\n\n" +
      "Vosotros : on remplace le -r de l'infinitif par -d : hablad, comed, id, venid.\n\n" +
      "Usted, ustedes et nosotros : on emprunte le subjonctif présent : hable usted, coman ustedes, tenga, vengan, hablemos, vamos (ir fait vamos à l'affirmatif, vayamos au négatif).\n\n" +
      "Vouvoiement : l'espagnol vouvoie avec usted (singulier) et ustedes (pluriel), qui se conjuguent à la 3e personne. Pase usted ; Siéntense, por favor. En Amérique latine, ustedes sert aussi de pluriel familier.\n\n" +
      "Défense (impératif négatif) : toujours no + subjonctif présent, à toutes les personnes : no hables, no comáis, no salga usted, no vengan.\n\n" +
      "Place des pronoms : à l'affirmatif, ils se soudent à la fin du verbe (enclise) ; au négatif, ils se placent devant. Dímelo / No me lo digas ; Siéntate / No te sientes. Le COI précède le COD, et le, les devient se devant lo, la, los, las : Dáselo.\n\n" +
      "Accent écrit : l'enclise ajoute des syllabes ; on garde l'accent tonique à sa place et on l'écrit si le mot devient esdrújulo : compra → cómpralo, di → dímelo, siente → siéntese.\n\n" +
      "Chutes de lettres : à nosotros, le -s tombe devant nos (sentemos → sentémonos, vamos → vámonos) et devant se (digamos + se lo → digámoselo) ; à vosotros, le -d tombe devant os (sentad → sentaos, levantad → levantaos), sauf idos.",
    formules:
      "Hablar : habla (tú), hable (usted), hablemos, hablad, hablen (ustedes)\n" +
      "Tú irréguliers : di, haz, ve, pon, sal, sé, ten, ven\n" +
      "Négatif : no hables, no hable, no hablemos, no habléis, no hablen\n" +
      "Sentarse : siéntate, siéntese, sentémonos, sentaos, siéntense\n" +
      "Pronoms : affirmatif → enclise (dímelo) ; négatif → avant (no me lo digas)\n" +
      "le / les + lo / la → se lo / se la : dáselo",
    methode:
      "1. Repère la personne (tú, usted, vosotros, ustedes, nosotros) et l'affirmation ou la négation.\n" +
      "2. Négation ou usted/ustedes/nosotros → subjonctif présent.\n" +
      "3. Tú affirmatif → 3e personne du présent ou l'une des huit formes irrégulières.\n" +
      "4. Place les pronoms (après à l'affirmatif, avant au négatif), puis vérifie l'accent écrit.",
    exemple:
      "Transforme en phrase négative : « Dámelo » (tú).\n" +
      "Négation → subjonctif présent : des → no me lo des.\n" +
      "Les pronoms repassent devant le verbe et l'accent écrit disparaît.\n\n" +
      "Vouvoie : « Siéntate » → usted.\n" +
      "Usted → subjonctif : siente ; pronom réfléchi se en enclise ; accent sur sién- : Siéntese.",
    erreur:
      "✗ No dímelo / No dime → ✓ No me lo digas (défense = no + subjonctif, pronoms avant).\n" +
      "✗ Dame lo → ✓ Dámelo (enclise en un seul mot, avec accent).\n" +
      "✗ Hacé (tú) → ✓ Haz.\n" +
      "✗ Sentémosnos → ✓ Sentémonos.\n" +
      "✗ Sentaros (écrit) → ✓ Sentaos.",
    approfondir:
      "La forme vos (voseo), courante en Argentine, en Uruguay et en Amérique centrale, a son propre impératif accentué sur la finale : hablá, comé, decí. Elle n'est pas attendue au concours mais peut apparaître dans un texte.\n\n" +
      "L'infinitif s'emploie aussi pour les consignes écrites (No fumar, Leer el texto). Au concours, vérifie toujours si l'énoncé précise la personne : c'est elle qui décide du mode.",
    cards: [
      ["Impératif de hacer (tú)", "haz", true],
      ["Impératif de decir (tú)", "di", true],
      ["Défense (tú) : no + …", "subjonctif présent : no vengas", false],
      ["« Asseyez-vous » (usted)", "Siéntese", true],
      ["« Donne-le-lui »", "Dáselo", true],
    ],
  },
  {
    skillId: "es.pronoms",
    title: "Les pronoms personnels compléments",
    objectives: ["Choisir entre pronom COD et COI", "Placer et combiner deux pronoms", "Employer les pronoms après préposition"],
    regle:
      "Pronoms compléments directs (COD) : me, te, lo / la, nos, os, los / las. Pronoms indirects (COI) : me, te, le, nos, os, les. Lo et la, los et las s'accordent avec le nom remplacé : ¿Tienes las entradas? — Sí, las tengo. Le et les remplacent le destinataire, quel que soit son genre : Le escribo a mi abuela.\n\n" +
      "La norme admet le pour un COD masculin singulier de personne (A Juan le vi ayer, à côté de Lo vi ayer) : c'est le leísmo admis. En revanche, los pour un COI (loísmo) et la pour un COI féminin (laísmo) sont fautifs.\n\n" +
      "Place : le pronom se met devant un verbe conjugué (Lo veo). Il se soude à la fin d'un infinitif, d'un gérondif ou d'un impératif affirmatif (verlo, viéndolo, míralo). Avec une périphrase, deux places sont possibles : Lo quiero ver = Quiero verlo ; Lo estoy leyendo = Estoy leyéndolo. Jamais entre l'auxiliaire et le participe.\n\n" +
      "Double pronom : le COI précède toujours le COD (Me lo das). Le et les deviennent se devant lo, la, los, las : Le doy el libro → Se lo doy. Comme se peut renvoyer à plusieurs personnes, on précise souvent avec a él, a ella, a usted.\n\n" +
      "Redoublement : quand le COI est un nom placé après le verbe, on ajoute généralement le pronom : Le di el libro a María. Quand le complément est placé avant le verbe, le pronom est obligatoire : A mis abuelos les escribo cada mes ; Las cartas, las escribo yo.\n\n" +
      "Après une préposition, on emploie les formes toniques mí, ti, él, ella, usted, nosotros, vosotros, ellos, ellas : para mí, sin ti, de él. Avec con : conmigo, contigo, consigo. Après entre, según, excepto, incluso, on emploie yo et tú : entre tú y yo, según tú.\n\n" +
      "Pronom réfléchi : me, te, se, nos, os, se (Me levanto ; Se acuestan tarde).",
    formules:
      "COD : me, te, lo / la, nos, os, los / las\n" +
      "COI : me, te, le, nos, os, les\n" +
      "Double pronom : COI + COD ; le / les + lo / la / los / las → se lo, se la, se los, se las\n" +
      "Après préposition : mí, ti, él, ella, usted, nosotros, vosotros, ellos, ellas, ustedes\n" +
      "Con + mí → conmigo ; con + ti → contigo ; con + sí → consigo\n" +
      "Entre tú y yo ; según tú",
    methode:
      "1. Identifie le nom remplacé : chose ou personne qui subit l'action (COD) ou destinataire (COI) ?\n" +
      "2. Accorde lo / la / los / las en genre et en nombre.\n" +
      "3. Deux pronoms : COI avant COD, le / les → se.\n" +
      "4. Place : devant le verbe conjugué, soudé à l'infinitif, au gérondif et à l'impératif affirmatif ; ajoute l'accent écrit si nécessaire.",
    exemple:
      "Completa : « ¿Le has devuelto el dinero a tu hermano? — Sí, ya ___ he devuelto. »\n" +
      "COI : a tu hermano → le ; COD : el dinero → lo. Le devant lo devient se.\n" +
      "Réponse : Sí, ya se lo he devuelto.",
    erreur:
      "✗ Le lo doy → ✓ Se lo doy.\n" +
      "✗ A mis padres los escribo → ✓ A mis padres les escribo (COI).\n" +
      "✗ Con mí, con ti → ✓ Conmigo, contigo.\n" +
      "✗ Para mi (sans accent) → ✓ Para mí (pronom tonique).\n" +
      "✗ Estoy lo leyendo → ✓ Lo estoy leyendo ou Estoy leyéndolo.",
    approfondir:
      "Le se des doubles pronoms ne doit pas être confondu avec le réfléchi : Se lo dije (je le lui ai dit) ≠ Se lava (il se lave).\n\n" +
      "Quand un gérondif ou un infinitif reçoit deux pronoms, l'accent écrit apparaît presque toujours : dárselo, explicándoselo.\n\n" +
      "Au concours, ces questions sont rapides : dessine mentalement la flèche « qui reçoit quoi ? » avant de lire les options.",
    cards: [
      ["Le + lo", "se lo : se lo doy", false],
      ["Avec moi / avec toi", "conmigo / contigo", true],
      ["Ordre des pronoms", "COI avant COD : me lo, se la", false],
      ["Entre toi et moi", "entre tú y yo", true],
    ],
  },
];

export const QUESTIONS_VERBES2: BankQuestion[] = [
  // ---------- es.subj ----------
  Q("B-ES-SUBJ-001", "es.subj", "es.subj.cuando", 2, "Completa la frase : « Cuando ___ (llegar, tú) a Madrid, llámame. »", [
    ["llegues", true, "Cuando + action future → subjonctif présent."],
    ["llegarás", false, "Calque du français « quand tu arriveras » : le futur est exclu après cuando."],
    ["llegarías", false, "Conditionnel : jamais après cuando."],
    ["llegaras", false, "Imparfait du subjonctif : la principale est un impératif présent."],
  ], "L'arrivée est à venir : cuando + subjonctif présent. Llegar → llegue (gu devant e) → llegues.", "Cuando + futur → subjonctif présent.", [
    "L'action introduite par cuando a-t-elle déjà eu lieu ?",
    "Le français met un futur, l'espagnol non.",
    "Forme le subjonctif présent en gardant le son [g].",
  ]),
  Q("B-ES-SUBJ-002", "es.subj", "es.subj.but", 2, "Completa la frase : « Te lo explico otra vez para que lo ___ (entender) bien. »", [
    ["entiendas", true, "Para que + subjonctif présent, avec diphtongue."],
    ["entiendes", false, "Indicatif : para que impose le subjonctif."],
    ["entendieras", false, "Imparfait : la principale est au présent."],
    ["entendas", false, "Oubli de la diphtongue (entiendo → entienda)."],
  ], "But avec deux sujets différents → para que + subjonctif. Principale au présent → subjonctif présent : entienda, entiendas.", "Para que + subjonctif.", [
    "Para que exprime le but.",
    "Le verbe principal est au présent.",
    "Entender diphtongue à la 2e personne du singulier.",
  ]),
  Q("B-ES-SUBJ-003", "es.subj", "es.subj.souhait", 1, "Completa la frase : « Ojalá ___ (hacer) buen tiempo el fin de semana. »", [
    ["haga", true, "Ojalá + subjonctif présent (souhait réalisable)."],
    ["hace", false, "Indicatif : ojalá impose le subjonctif."],
    ["hará", false, "Futur : ojalá se construit avec le subjonctif."],
    ["hago", false, "Indicatif, 1re personne."],
  ], "Ojalá exprime un souhait et se construit toujours avec le subjonctif. Hacer → hago → haga.", "Ojalá + subjonctif.", [
    "Ojalá exprime un souhait.",
    "Quel mode exige-t-il ?",
    "Pars de la 1re personne du présent de hacer.",
  ]),
  Q("B-ES-SUBJ-004", "es.subj", "es.subj.volonte", 1, "Completa la frase : « Mis padres quieren que ___ (yo, estudiar) Medicina. »", [
    ["estudie", true, "Querer que + subjonctif présent."],
    ["estudio", false, "Indicatif : un verbe de volonté impose le subjonctif."],
    ["estudiar", false, "L'infinitif n'est possible que si le sujet est le même."],
    ["estudiara", false, "Imparfait : la principale est au présent."],
  ], "Volonté avec deux sujets différents (mis padres / yo) → que + subjonctif. Principale au présent → subjonctif présent.", "Verbe de volonté + que + subjonctif.", [
    "Le verbe principal exprime une volonté.",
    "Les deux sujets sont différents.",
    "Verbe en -ar : la voyelle devient e.",
  ]),
  Q("B-ES-SUBJ-005", "es.subj", "es.subj.si", 2, "Completa la frase : « Si ___ (tener) más tiempo, aprendería japonés. »", [
    ["tuviera", true, "Si + imparfait du subjonctif → conditionnel."],
    ["tendría", false, "Calque fautif : jamais de conditionnel après si."],
    ["tenga", false, "Si n'est jamais suivi du subjonctif présent."],
    ["tenía", false, "Calque de l'imparfait français : l'espagnol exige le subjonctif."],
  ], "Hypothèse avec conditionnel dans la principale (aprendería) → si + imparfait du subjonctif. Tener → tuvieron → tuviera.", "Si + imparfait du subjonctif, conditionnel.", [
    "La principale est au conditionnel.",
    "Le français dirait « si j'avais », mais l'espagnol change de mode.",
    "Pars de tuvieron.",
  ]),
  Q("B-ES-SUBJ-006", "es.subj", "es.subj.concordance", 2, "Completa la frase : « Aquella noche mi madre me prohibió que ___ (salir) con mis amigos. »", [
    ["saliera", true, "Principale au passé → imparfait du subjonctif."],
    ["salga", false, "Concordance non respectée : la défense est passée et close."],
    ["salía", false, "Indicatif : prohibir que impose le subjonctif."],
    ["saldría", false, "Conditionnel : prohibir que impose le subjonctif."],
  ], "Prohibir que + subjonctif ; verbe principal au passé (prohibió) → imparfait du subjonctif : salieron → saliera.", "Principale au passé → subjonctif imparfait.", [
    "Le verbe principal exprime une interdiction.",
    "À quel temps est-il ?",
    "Pars de la 3e personne du pluriel de l'indefinido de salir.",
  ], { anchor: "exemple" }),
  Q("B-ES-SUBJ-007", "es.subj", "es.subj.opinion", 2, "Completa la frase : « No creo que Pablo ___ razón en este asunto. »", [
    ["tenga", true, "Opinion niée → subjonctif."],
    ["tiene", false, "L'indicatif suit creo que à la forme affirmative seulement."],
    ["tendrá", false, "Futur : no creo que impose le subjonctif."],
    ["tengo", false, "Indicatif, 1re personne."],
  ], "Creer à la forme négative fait passer la subordonnée au subjonctif : no creo que tenga. Comparer : creo que tiene razón.", "No creo que + subjonctif ; creo que + indicatif.", [
    "Le verbe d'opinion est à la forme négative.",
    "La négation change le mode de la subordonnée.",
    "Tener → tengo → …",
  ]),
  Q("B-ES-SUBJ-008", "es.subj", "es.subj.sentiment", 3, "Completa la frase : « Me alegra mucho que ___ (vosotros, poder) venir a mi boda. »", [
    ["podáis", true, "Sentiment + que → subjonctif présent ; pas de diphtongue à vosotros."],
    ["podéis", false, "Indicatif : un verbe de sentiment impose le subjonctif."],
    ["puedáis", false, "Diphtongue à tort : vosotros ne diphtongue pas."],
    ["pudisteis", false, "Passé simple de l'indicatif."],
  ], "Me alegra que exprime un sentiment → subjonctif. Poder → pueda, mais vosotros ne diphtongue pas : podáis.", "Verbe de sentiment + que + subjonctif.", [
    "Alegrar exprime un sentiment.",
    "Il faut un subjonctif présent.",
    "Vosotros garde la voyelle de l'infinitif.",
  ], { reserved: true }),
  Q("B-ES-SUBJ-009", "es.subj", "es.subj.aunque", 3, "Completa la frase (sens : même s'il pleut demain) : « Aunque ___ mañana, iremos a la playa. »", [
    ["llueva", true, "Aunque + subjonctif = même si (hypothèse)."],
    ["llueve", false, "Aunque + indicatif présenterait la pluie comme un fait réel."],
    ["lloverá", false, "Futur : l'hypothèse se marque par le subjonctif."],
    ["lloviera", false, "Imparfait : il appellerait un conditionnel dans la principale."],
  ], "La pluie de demain est une hypothèse : aunque + subjonctif présent, en concordance avec le futur iremos. Llover → llueve → llueva.", "Aunque + subjonctif = même si.", [
    "Le sens indiqué est hypothétique.",
    "Aunque change de sens selon le mode.",
    "Llover diphtongue.",
  ], { reserved: true }),
  Q("B-ES-SUBJ-010", "es.subj", "es.subj.cuando", 2, "Completa la frase : « Saldremos en cuanto ___ (dejar) de llover. »", [
    ["deje", true, "En cuanto + action future → subjonctif présent."],
    ["deja", false, "L'indicatif présent exprimerait une habitude."],
    ["dejará", false, "Futur : exclu après en cuanto."],
    ["dejaría", false, "Conditionnel : exclu après en cuanto."],
  ], "En cuanto (dès que) fonctionne comme cuando : action future → subjonctif présent. Dejar → deje.", "Cuando, en cuanto, hasta que + futur → subjonctif.", [
    "En cuanto signifie « dès que ».",
    "La pluie va cesser dans le futur.",
    "Même règle que pour cuando.",
  ]),

  // ---------- es.imperatif ----------
  Q("B-ES-IMP-001", "es.imperatif", "es.imperatif.tu", 1, "Completa la frase (tú) : « ___ la verdad, por favor. » (decir)", [
    ["Di", true, "Impératif irrégulier de decir à tú."],
    ["Dice", false, "Régularisation fautive : decir fait di."],
    ["Diga", false, "Forme de usted, pas de tú."],
    ["Dí", false, "Monosyllabe : pas d'accent écrit."],
  ], "Decir fait partie des huit impératifs irréguliers de tú : di, haz, ve, pon, sal, sé, ten, ven.", "Decir → di (tú).", [
    "La personne demandée est tú.",
    "Decir a un impératif irrégulier.",
    "La forme est un monosyllabe sans accent.",
  ], { anchor: "formules" }),
  Q("B-ES-IMP-002", "es.imperatif", "es.imperatif.negatif", 1, "Completa la frase (tú) : « No ___ la ventana, hace frío. » (abrir)", [
    ["abras", true, "Défense = no + subjonctif présent."],
    ["abre", false, "Calque de l'impératif affirmatif."],
    ["abriste", false, "Passé simple de l'indicatif : une défense exige le subjonctif présent."],
    ["abrir", false, "L'infinitif ne sert pas à donner une défense à une personne."],
  ], "À toutes les personnes, l'impératif négatif se forme avec no + subjonctif présent : no abras.", "Défense → no + subjonctif présent.", [
    "La phrase est négative.",
    "L'impératif négatif emprunte un autre mode.",
    "Verbe en -ir : la voyelle devient a.",
  ]),
  Q("B-ES-IMP-003", "es.imperatif", "es.imperatif.usted", 2, "Completa la frase (usted) : « ___, por favor; el doctor llegará enseguida. » (sentarse)", [
    ["Siéntese", true, "Subjonctif (siente) + se en enclise, accent écrit."],
    ["Sientése", false, "L'accent tonique reste sur sien-."],
    ["Siéntate", false, "Forme de tú."],
    ["Siéntase", false, "Forme de sentirse (se sentir), pas de sentarse."],
  ], "Usted → subjonctif présent : siente ; pronom réfléchi se soudé ; le mot devient esdrújulo : Siéntese.", "Usted → subjonctif + enclise (siéntese).", [
    "Usted se conjugue avec le subjonctif présent.",
    "Le pronom réfléchi de usted est se.",
    "L'accent tonique ne se déplace pas.",
  ]),
  Q("B-ES-IMP-004", "es.imperatif", "es.imperatif.enclise", 2, "Traduis à l'impératif (tú) : « Donne-le-moi. »", [
    ["Dámelo", true, "Enclise : COI + COD soudés, accent écrit."],
    ["Dálome", false, "Ordre inversé : COI avant COD."],
    ["Dame lo", false, "Les pronoms enclitiques forment un seul mot."],
    ["Me lo da", false, "Pronoms avant le verbe : forme non impérative."],
  ], "À l'affirmatif, les pronoms se soudent au verbe, COI avant COD : da + me + lo = dámelo, avec accent.", "Impératif affirmatif : verbe + COI + COD en un mot.", [
    "Deux pronoms : lequel vient en premier ?",
    "À l'affirmatif, ils se placent après le verbe.",
    "Pense à l'accent écrit.",
  ]),
  Q("B-ES-IMP-005", "es.imperatif", "es.imperatif.usted", 2, "Completa la frase (ustedes) : « ___ sus pasaportes antes de embarcar. » (preparar)", [
    ["Preparen", true, "Ustedes → subjonctif présent."],
    ["Preparan", false, "Indicatif présent."],
    ["Preparad", false, "Forme de vosotros."],
    ["Prepare", false, "Forme de usted (singulier)."],
  ], "Ustedes emprunte le subjonctif présent : preparar → preparen.", "Ustedes → subjonctif présent (-en / -an).", [
    "Ustedes est un vouvoiement pluriel.",
    "Il se conjugue avec le subjonctif.",
    "Verbe en -ar : la voyelle devient e.",
  ]),
  Q("B-ES-IMP-006", "es.imperatif", "es.imperatif.vosotros", 3, "Completa la frase (vosotros) : « Niños, ___ ya, que es muy tarde. » (acostarse)", [
    ["acostaos", true, "Le -d de acostad tombe devant os."],
    ["acostaros", false, "Infinitif employé à tort : forme non admise par la norme écrite."],
    ["acostados", false, "Participe : pas un impératif."],
    ["acuéstense", false, "Forme de ustedes, pas de vosotros."],
  ], "Vosotros : acostad ; devant os, le -d tombe : acostaos.", "Vosotros + os : -d tombe (sentaos, acostaos).", [
    "Forme d'abord l'impératif de vosotros.",
    "Ajoute le pronom réfléchi de vosotros.",
    "Une lettre disparaît à la jonction.",
  ], { reserved: true }),
  Q("B-ES-IMP-007", "es.imperatif", "es.imperatif.negatif", 2, "Completa la frase (tú) : « No me ___ más mentiras. » (contar)", [
    ["cuentes", true, "No + subjonctif présent, avec diphtongue."],
    ["cuentas", false, "Indicatif."],
    ["contes", false, "Oubli de la diphtongue."],
    ["cuenta", false, "Impératif affirmatif."],
  ], "Défense : no + subjonctif présent. Contar diphtongue : cuento → cuente → cuentes.", "No + subjonctif présent, diphtongue conservée.", [
    "Impératif négatif.",
    "Contar diphtongue au singulier.",
    "Verbe en -ar : la voyelle devient e.",
  ]),
  Q("B-ES-IMP-008", "es.imperatif", "es.imperatif.tu", 1, "Completa la frase (tú) : « ___ aquí ahora mismo. » (venir)", [
    ["Ven", true, "Impératif irrégulier de venir."],
    ["Viene", false, "Régularisation : venir fait ven."],
    ["Vén", false, "Monosyllabe : pas d'accent écrit."],
    ["Venga", false, "Forme de usted."],
  ], "Venir fait ven à l'impératif de tú.", "Venir → ven ; tener → ten ; poner → pon.", [
    "Personne : tú.",
    "Venir fait partie des huit impératifs irréguliers.",
    "Monosyllabe sans accent.",
  ]),
  Q("B-ES-IMP-009", "es.imperatif", "es.imperatif.negatif", 2, "Transforma en frase negativa : « Cómpralo. »", [
    ["No lo compres.", true, "No + subjonctif, pronom devant le verbe."],
    ["No cómpralo.", false, "La négation ne se construit pas sur l'impératif affirmatif."],
    ["No lo compras.", false, "Indicatif."],
    ["No cómpreslo.", false, "Au négatif, le pronom passe devant le verbe."],
  ], "Négatif : no + subjonctif (compres), et le pronom se place avant le verbe : No lo compres.", "Défense : no + pronom + subjonctif.", [
    "Change le mode du verbe.",
    "Où se place le pronom à la forme négative ?",
    "L'accent écrit disparaît.",
  ], { anchor: "exemple" }),
  Q("B-ES-IMP-010", "es.imperatif", "es.imperatif.nosotros", 3, "Completa la frase (nosotros) : « ___ , que va a empezar la película. » (sentarse)", [
    ["Sentémonos", true, "Subjonctif (sentemos) + nos : le -s tombe."],
    ["Sentémosnos", false, "Le -s final tombe devant nos."],
    ["Sentamonos", false, "Indicatif et accent manquant."],
    ["Nos sentemos", false, "À l'affirmatif, le pronom se soude au verbe."],
  ], "Nosotros → subjonctif présent (sentemos) ; devant nos, le -s tombe et l'accent apparaît : sentémonos.", "Nosotros + nos : -mos → -monos (sentémonos).", [
    "Nosotros emprunte le subjonctif.",
    "Le pronom se soude à l'affirmatif.",
    "Une lettre disparaît devant nos.",
  ]),

  // ---------- es.pronoms ----------
  Q("B-ES-PRON-001", "es.pronoms", "es.pronoms.cod", 1, "Completa la frase : « ¿Has visto mis gafas? — Sí, ___ he visto en la cocina. »", [
    ["las", true, "COD féminin pluriel (las gafas)."],
    ["les", false, "Les est un COI."],
    ["los", false, "Gafas est féminin."],
    ["la", false, "Gafas est pluriel."],
  ], "Gafas est un nom féminin pluriel, COD de ver → las.", "COD : lo / la / los / las accordés au nom.", [
    "Que remplace le pronom ?",
    "Gafas est féminin pluriel.",
    "C'est un complément direct.",
  ]),
  Q("B-ES-PRON-002", "es.pronoms", "es.pronoms.double", 2, "Completa la frase : « Quiero regalarle un libro a mi hermana. » → « Quiero regalár___ . »", [
    ["selo", true, "Le + lo → se lo, soudés à l'infinitif."],
    ["lelo", false, "Le devient se devant lo."],
    ["sela", false, "Libro est masculin."],
    ["melo", false, "Le destinataire est la sœur, pas moi."],
  ], "COI (a mi hermana) = le ; COD (un libro) = lo. Le + lo → se lo : regalárselo.", "Le / les + lo / la → se lo / se la.", [
    "Identifie le COI et le COD.",
    "Le COI vient en premier.",
    "Le et lo ne peuvent pas se suivre.",
  ]),
  Q("B-ES-PRON-003", "es.pronoms", "es.pronoms.preposition", 1, "Completa la frase : « ¿Quieres venir al cine ___ esta noche? » (avec moi)", [
    ["conmigo", true, "Con + mí → conmigo."],
    ["con mí", false, "Forme inexistante : con + mí se soude."],
    ["con me", false, "Me n'est pas un pronom après préposition."],
    ["comigo", false, "Orthographe : conmigo."],
  ], "Con fusionne avec mí et ti : conmigo, contigo.", "Avec moi = conmigo.", [
    "Avec une préposition, on utilise une forme tonique.",
    "Con a une forme soudée avec mí.",
    "Elle commence par con-.",
  ]),
  Q("B-ES-PRON-004", "es.pronoms", "es.pronoms.preposition", 1, "Completa la frase : « Este regalo es para ___ . » (moi)", [
    ["mí", true, "Pronom tonique après préposition, avec accent."],
    ["mi", false, "Sans accent, mi est un possessif."],
    ["me", false, "Me ne s'emploie pas après une préposition."],
    ["yo", false, "Yo ne s'emploie après une préposition qu'avec entre, según, excepto."],
  ], "Après para, on emploie la forme tonique mí, accentuée pour la distinguer du possessif mi.", "Para mí (accent) ≠ mi casa.", [
    "Après une préposition, forme tonique.",
    "Distingue le pronom du possessif.",
    "L'accent écrit fait la différence.",
  ], { anchor: "formules" }),
  Q("B-ES-PRON-005", "es.pronoms", "es.pronoms.double", 2, "Traduis : « Je les leur ai donnés. » (les documents, à mes collègues)", [
    ["Se los di.", true, "Les + los → se los."],
    ["Les los di.", false, "Les devient se devant los."],
    ["Los les di.", false, "Ordre inversé et absence de se."],
    ["Se les di.", false, "Les reprend le COD au lieu de los."],
  ], "COI (a mis colegas) = les ; COD (los documentos) = los. Les + los → se los : Se los di.", "Double pronom : COI (se) + COD.", [
    "Deux pronoms : destinataire et objet.",
    "COI avant COD.",
    "Les ne peut pas précéder los.",
  ]),
  Q("B-ES-PRON-006", "es.pronoms", "es.pronoms.place", 3, "Elige la frase correcta (pronombre con estar + gerundio).", [
    ["Estoy escribiéndolas ahora mismo.", true, "Enclise au gérondif avec accent écrit."],
    ["Estoy las escribiendo ahora mismo.", false, "Le pronom ne s'intercale pas entre estar et le gérondif."],
    ["Estoy escribiendolas ahora mismo.", false, "Il manque l'accent écrit."],
    ["Las estoy escribiéndolas ahora mismo.", false, "Pronom répété deux fois."],
  ], "Avec estar + gérondif, le pronom se place devant estar (Las estoy escribiendo) ou se soude au gérondif avec accent (escribiéndolas).", "Pronom avant la périphrase ou soudé au gérondif, jamais entre les deux.", [
    "Vérifie la place du pronom.",
    "Deux places sont possibles, pas trois.",
    "Un gérondif + pronom devient esdrújulo.",
  ], { anchor: "erreur" }),
  Q("B-ES-PRON-007", "es.pronoms", "es.pronoms.coi", 2, "Completa la frase : « A mis abuelos ___ escribo una carta cada mes. »", [
    ["les", true, "COI pluriel (a mis abuelos)."],
    ["los", false, "Loísmo : los est un COD."],
    ["se", false, "Se ne s'emploie pour le COI que devant lo, la, los, las."],
    ["las", false, "Laísmo et genre fautif."],
  ], "Les grands-parents reçoivent la lettre : COI. Placé avant le verbe, le complément est repris par le pronom : A mis abuelos les escribo.", "Destinataire → le / les.", [
    "Les grands-parents sont-ils l'objet ou le destinataire ?",
    "Le complément placé en tête est repris par un pronom.",
    "Pronom indirect pluriel.",
  ]),
  Q("B-ES-PRON-008", "es.pronoms", "es.pronoms.reflechi", 1, "Completa la frase : « Mis amigos siempre ___ acuestan muy tarde. »", [
    ["se", true, "Pronom réfléchi de la 3e personne."],
    ["les", false, "COI : le verbe est pronominal."],
    ["los", false, "COD : le verbe est pronominal."],
    ["nos", false, "Première personne : le sujet est mis amigos."],
  ], "Acostarse est pronominal ; à la 3e personne du pluriel, le réfléchi est se.", "Réfléchi : me, te, se, nos, os, se.", [
    "Le verbe est acostarse.",
    "Le pronom renvoie au sujet.",
    "Sujet à la 3e personne du pluriel.",
  ]),
  Q("B-ES-PRON-009", "es.pronoms", "es.pronoms.preposition", 3, "Completa la frase : « Entre tú y ___ , esta idea no me convence nada. »", [
    ["yo", true, "Après entre, on emploie yo et tú."],
    ["mí", false, "Entre fait exception : pas de forme tonique."],
    ["me", false, "Me n'est jamais après une préposition."],
    ["conmigo", false, "Conmigo ne s'emploie qu'avec con."],
  ], "Entre, según, excepto et incluso se construisent avec yo et tú : entre tú y yo.", "Entre tú y yo.", [
    "La préposition est entre.",
    "C'est une exception à la règle des formes toniques.",
    "Le premier pronom de la phrase donne la piste.",
  ], { reserved: true }),
  Q("B-ES-PRON-010", "es.pronoms", "es.pronoms.double", 2, "Completa la frase : « ¿Le has dado las llaves a Pedro? — Sí, ya ___ he dado. »", [
    ["se las", true, "Le + las → se las."],
    ["le las", false, "Le devient se devant las."],
    ["se los", false, "Llaves est féminin."],
    ["las le", false, "Ordre inversé : COI avant COD."],
  ], "COI (a Pedro) = le ; COD (las llaves) = las. Le + las → se las, devant l'auxiliaire : se las he dado.", "Le + la(s) → se la(s).", [
    "Identifie COI et COD.",
    "Llaves est féminin pluriel.",
    "Le se transforme devant un autre pronom de 3e personne.",
  ], { anchor: "exemple" }),
];
