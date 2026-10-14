// de.modaux : verbes de modalité.
import { L, Q } from "./common";

export const lessonModaux = L({
  skillId: "de.modaux",
  title: "Les verbes de modalité",
  objectives: ["Conjuguer les six modaux au présent et au prétérit", "Choisir le modal qui correspond au sens", "Distinguer nicht müssen et nicht dürfen"],
  prerequisites: ["de.ordre"],
  regle:
    "Six verbes de modalité, chacun avec un sens précis.\n– können : pouvoir (capacité, possibilité), savoir faire : Ich kann schwimmen.\n– dürfen : avoir le droit, être autorisé : Hier darf man parken.\n– müssen : devoir (nécessité, obligation) : Ich muss morgen früh aufstehen.\n– sollen : devoir selon la volonté d'un autre (consigne, conseil, rumeur) : Der Arzt sagt, ich soll mehr schlafen.\n– wollen : vouloir (intention ferme) : Ich will Ärztin werden.\n– mögen : aimer (surtout avec un nom) : Ich mag Schokolade. Sa forme möchte (Konjunktiv II) exprime un souhait poli : Ich möchte einen Tee.\n\nPrésent : le singulier est irrégulier et la 1re et la 3e personne sont identiques et sans terminaison : ich kann, du kannst, er kann ; ich muss, er muss ; ich darf, er darf ; ich will, er will ; ich soll, er soll ; ich mag, er mag. Le pluriel est régulier : wir können, ihr könnt, sie können.\n\nConstruction : le modal est conjugué (position 2 en principale, dernière position en subordonnée) et l'infinitif sans zu va à la fin : Ich kann heute nicht kommen. …, weil ich heute nicht kommen kann.\n\nPrétérit, sans inflexion : konnte, durfte, musste, sollte, wollte, mochte. C'est le temps habituel des modaux au passé, même à l'oral. Au parfait, avec un infinitif, le participe est remplacé par un second infinitif : Ich habe arbeiten müssen (et non gemusst). Dans une subordonnée, l'auxiliaire se place alors devant les deux infinitifs : …, weil ich habe arbeiten müssen.\n\nNégation, piège majeur pour un francophone : nicht müssen signifie « ne pas être obligé » (= nicht brauchen zu), tandis que nicht dürfen signifie « ne pas avoir le droit », donc « il ne faut pas ». Du musst nicht kommen = tu n'es pas obligé de venir. Du darfst nicht kommen = tu n'as pas le droit de venir.",
  formules:
    "können : kann, kannst, kann, können, könnt, können · prét. konnte\ndürfen : darf, darfst, darf, dürfen, dürft, dürfen · prét. durfte\nmüssen : muss, musst, muss, müssen, müsst, müssen · prét. musste\nsollen : soll, sollst, soll, sollen, sollt, sollen · prét. sollte\nwollen : will, willst, will, wollen, wollt, wollen · prét. wollte\nmögen : mag, magst, mag, mögen, mögt, mögen · prét. mochte · souhait : möchte, möchtest, möchte, möchten, möchtet, möchten\nnicht müssen = pas obligé (= nicht brauchen zu) · nicht dürfen = interdit",
  methode:
    "1. Lis le contexte pour identifier la nuance : capacité, permission, obligation, consigne d'autrui, volonté, goût ou souhait.\n2. Si la phrase est négative, demande-toi : interdiction (nicht dürfen) ou absence d'obligation (nicht müssen) ?\n3. Conjugue : singulier irrégulier, 1re = 3e personne sans -t.\n4. Place le modal conjugué et l'infinitif sans zu à la fin.\n5. Au passé, utilise le prétérit sans inflexion (konnte, musste).",
  exemple:
    "« Morgen ist Feiertag, wir ___ nicht in die Schule gehen. » C'est un jour férié : on n'est pas obligé d'aller à l'école. Absence d'obligation → nicht müssen : wir müssen nicht in die Schule gehen (ou : wir brauchen nicht in die Schule zu gehen).\n\n« Im Museum ___ man nicht fotografieren. » C'est une interdiction → nicht dürfen : man darf nicht fotografieren.",
  erreur:
    "✗ Du musst nicht rauchen (pour « il ne faut pas fumer »). → ✓ Du darfst nicht rauchen.\n✗ er kannt, er willt → ✓ er kann, er will (pas de -t à la 3e personne).\n✗ Ich kann zu schwimmen. → ✓ Ich kann schwimmen (infinitif sans zu).\n✗ Ich habe arbeiten gemusst. → ✓ Ich habe arbeiten müssen.\n✗ Gestern könnte ich nicht kommen (passé). → ✓ Gestern konnte ich nicht kommen (könnte = conditionnel).\n✗ Ich will einen Kaffee, bitte (au café, trop direct). → ✓ Ich möchte einen Kaffee, bitte.",
  approfondir:
    "Sollen est le modal le plus fin : il exprime une volonté extérieure (Ich soll dich grüßen = on m'a chargé de te saluer), et au Konjunktiv II un conseil (Du solltest mehr schlafen = tu devrais). Retiens : müssen = nécessité, sollen = quelqu'un le veut.\n\nAstuce de vitesse : pour une question de sens, traduis mentalement le modal en français avec précision (« avoir le droit », « être obligé », « on me demande de ») plutôt que par « devoir » ou « pouvoir », trop vagues.\n\nLien avec le Konjunktiv II : könnte, dürfte, müsste, sollte, möchte servent à la politesse et au conseil (voir de.k2).",
  cards: [
    ["nicht müssen", "Ne pas être obligé (= nicht brauchen zu)", false],
    ["nicht dürfen", "Ne pas avoir le droit, il ne faut pas", false],
    ["sollen", "Devoir selon la volonté d'un autre (consigne, conseil)", false],
    ["Prétérit des modaux", "konnte, durfte, musste, sollte, wollte, mochte (sans inflexion)", false],
    ["Je voudrais (poli)", "Ich möchte …", true],
  ],
});

const S = "de.modaux";

export const questionsModaux = [
  Q("B-DE-MOD-001", S, "de.modaux.sens", 1, "Ergänzen Sie: «Hier ___ man nicht rauchen. Das ist im ganzen Bahnhof verboten.»", [
    ["darf", true, "Interdiction : nicht dürfen."],
    ["muss", false, "Nicht müssen = ne pas être obligé : contresens."],
    ["will", false, "Wollen exprime la volonté, pas l'interdiction."],
    ["mag", false, "Mögen exprime le goût, pas l'interdiction."],
  ], "La phrase suivante parle d'une interdiction (verboten). Pour dire qu'on n'a pas le droit : nicht dürfen. Hier darf man nicht rauchen.", "Interdiction = nicht dürfen.", [
    "Que signifie verboten ?",
    "Quel modal exprime la permission ?",
    "dürfen, 3e personne avec man.",
  ]),
  Q("B-DE-MOD-002", S, "de.modaux.negation", 2, "Ergänzen Sie: «Morgen ist Sonntag, ich ___ nicht früh aufstehen.»", [
    ["muss", true, "Absence d'obligation : nicht müssen."],
    ["darf", false, "Nicht dürfen = interdiction : contresens."],
    ["musst", false, "Forme de la 2e personne ; le sujet est ich."],
    ["müss", false, "Forme inexistante : le singulier perd l'inflexion."],
  ], "Le dimanche, on n'est pas obligé de se lever tôt : absence d'obligation, nicht müssen. Ich muss nicht früh aufstehen.", "nicht müssen = pas obligé ; nicht dürfen = interdit.", [
    "Est-ce une interdiction ou une absence d'obligation ?",
    "Le dimanche, rien n'oblige à se lever tôt.",
    "müssen à la 1re personne du singulier.",
  ], { anchor: "erreur" }),
  Q("B-DE-MOD-003", S, "de.modaux.conjugaison", 1, "Ergänzen Sie: «Mein kleiner Bruder ___ schon sehr gut Gitarre spielen.»", [
    ["kann", true, "3e personne de können : sans terminaison, sans inflexion."],
    ["könnt", false, "Forme de ihr."],
    ["kannt", false, "Les modaux ne prennent pas de -t à la 3e personne du singulier."],
    ["können", false, "Forme du pluriel ou infinitif."],
  ], "Au singulier, les modaux sont irréguliers et la 3e personne est identique à la 1re : ich kann, er kann.", "Modaux : 1re et 3e personne du singulier identiques, sans -t.", [
    "Quel modal exprime la capacité ?",
    "Au singulier, le radical change.",
    "Même forme que ich ….",
  ], { anchor: "formules" }),
  Q("B-DE-MOD-004", S, "de.modaux.conjugaison", 2, "Ergänzen Sie: «Meine Eltern ___ im Sommer gern nach Italien fahren.»", [
    ["möchten", true, "Souhait, sujet pluriel : sie möchten."],
    ["möchtet", false, "Forme de ihr."],
    ["möchte", false, "Forme du singulier ; le sujet est pluriel."],
    ["möchtest", false, "Forme de du."],
  ], "Möchte exprime un souhait. Le sujet meine Eltern est pluriel : sie möchten.", "möchte, möchtest, möchte, möchten, möchtet, möchten.", [
    "Le sujet est-il singulier ou pluriel ?",
    "Meine Eltern = sie.",
    "Forme en -en.",
  ]),
  Q("B-DE-MOD-005", S, "de.modaux.negation", 2, "Was bedeutet: «Du musst heute nicht kommen.»?", [
    ["Du brauchst heute nicht zu kommen.", true, "Nicht müssen = nicht brauchen zu : absence d'obligation."],
    ["Du darfst heute nicht kommen.", false, "Interdiction : sens beaucoup plus fort."],
    ["Du sollst heute kommen.", false, "Phrase affirmative : on te demande de venir."],
    ["Du kannst heute nicht kommen.", false, "Impossibilité : ce n'est pas le sens de nicht müssen."],
  ], "Nicht müssen exprime l'absence d'obligation : tu n'es pas obligé de venir. L'équivalent est nicht brauchen zu + infinitif.", "nicht müssen = nicht brauchen zu.", [
    "Nicht müssen n'exprime pas une interdiction.",
    "Quelle tournure signifie « ne pas avoir besoin de » ?",
    "brauchen, avec nicht et zu.",
  ]),
  Q("B-DE-MOD-006", S, "de.modaux.parfait", 3, "Sie erzählen von Ihrem gestrigen Arbeitstag. Welcher Satz ist richtig?", [
    ["Gestern habe ich bis neun Uhr abends arbeiten müssen.", true, "Parfait d'un modal avec infinitif : double infinitif (Ersatzinfinitiv)."],
    ["Gestern habe ich bis neun Uhr abends arbeiten gemusst.", false, "Participe gemusst impossible quand le modal a un infinitif."],
    ["Gestern ich habe bis neun Uhr abends arbeiten müssen.", false, "Verbe conjugué en troisième position."],
    ["Gestern habe ich bis neun Uhr abends müssen arbeiten.", false, "L'infinitif du verbe principal précède le modal."],
  ], "Au parfait, un modal accompagné d'un infinitif ne prend pas son participe : on emploie l'infinitif (double infinitif). Ordre : habe … arbeiten müssen.", "Parfait d'un modal + infinitif : haben … infinitif + modal à l'infinitif.", [
    "Regarde la forme du modal à la fin.",
    "Avec un infinitif, le modal au parfait reste à l'infinitif.",
    "… arbeiten müssen.",
  ], { reserved: true }),
  Q("B-DE-MOD-007", S, "de.modaux.preterit", 2, "Ergänzen Sie: «Letzte Woche ___ ich nicht zur Party gehen, weil ich krank war.»", [
    ["konnte", true, "Prétérit de können, sans inflexion : fait passé."],
    ["könnte", false, "Konjunktiv II (« je pourrais ») : hypothèse, pas fait passé."],
    ["kann", false, "Présent : incompatible avec letzte Woche."],
    ["konnten", false, "Forme du pluriel ; le sujet est ich."],
  ], "Letzte Woche et war situent l'action dans le passé. Prétérit de können : konnte, sans Umlaut. Könnte, avec Umlaut, est le conditionnel.", "Prétérit des modaux sans inflexion : konnte ; könnte = conditionnel.", [
    "À quel temps est la phrase ?",
    "Le prétérit des modaux perd l'inflexion.",
    "konn- + te.",
  ]),
  Q("B-DE-MOD-008", S, "de.modaux.negation", 2, "Welcher Satz bedeutet: «Il est interdit de copier sur le voisin»?", [
    ["Man darf nicht vom Nachbarn abschreiben.", true, "Nicht dürfen = interdiction."],
    ["Man muss nicht vom Nachbarn abschreiben.", false, "Nicht müssen = pas d'obligation : contresens."],
    ["Man braucht nicht vom Nachbarn abzuschreiben.", false, "Nicht brauchen zu = pas besoin : contresens."],
    ["Man mag nicht vom Nachbarn abschreiben.", false, "Mögen exprime le goût."],
  ], "Une interdiction s'exprime par nicht dürfen. Nicht müssen et nicht brauchen zu signifient seulement qu'il n'y a pas d'obligation.", "Interdiction : nicht dürfen.", [
    "Interdit ou facultatif ?",
    "Quel modal exprime la permission ?",
    "Sa négation exprime l'interdiction.",
  ], { anchor: "exemple" }),
  Q("B-DE-MOD-009", S, "de.modaux.conjugaison", 1, "Ergänzen Sie: «Ich ___ keine Tomaten, aber ich esse gern Gurken.»", [
    ["mag", true, "Mögen (aimer) à la 1re personne : ich mag."],
    ["mage", false, "Les modaux ne prennent pas de -e à la 1re personne."],
    ["mögt", false, "Forme de ihr."],
    ["magst", false, "Forme de du."],
  ], "Mögen exprime le goût. Au singulier : ich mag, du magst, er mag.", "mögen : ich mag, du magst, er mag.", [
    "Quel modal exprime le goût ?",
    "Le singulier est irrégulier.",
    "1re personne sans terminaison.",
  ]),
  Q("B-DE-MOD-010", S, "de.modaux.conjugaison", 2, "Ergänzen Sie: «Was ___ ihr am Wochenende machen? Habt ihr schon einen Plan?»", [
    ["wollt", true, "Wollen, 2e personne du pluriel : ihr wollt."],
    ["wollen", false, "Forme de wir ou sie."],
    ["willst", false, "Forme de du."],
    ["will", false, "Forme de ich ou er."],
  ], "Le sujet est ihr (habt ihr). Wollen au pluriel est régulier : ihr wollt.", "wollen : will, willst, will, wollen, wollt, wollen.", [
    "Quel est le sujet ?",
    "Au pluriel, le radical redevient woll-.",
    "Terminaison de ihr : -t.",
  ]),
  Q("B-DE-MOD-011", S, "de.modaux.parfait", 3, "Ergänzen Sie: «Sie hat mir erzählt, dass sie als Kind abends nicht allein ___.»", [
    ["hat ausgehen dürfen", true, "Subordonnée avec double infinitif : l'auxiliaire conjugué précède les deux infinitifs."],
    ["ausgehen dürfen hat", false, "Avec un double infinitif, l'auxiliaire ne va pas en dernier."],
    ["ausgehen gedurft hat", false, "Participe gedurft impossible avec un infinitif."],
    ["hat ausgehen gedurft", false, "Participe gedurft impossible avec un infinitif."],
  ], "Parfait d'un modal avec infinitif : double infinitif (ausgehen dürfen). Dans une subordonnée, c'est la seule exception à la règle du verbe final : l'auxiliaire conjugué se place devant les deux infinitifs.", "Subordonnée + double infinitif : …, dass sie nicht hat ausgehen dürfen.", [
    "Au parfait, quelle forme prend un modal accompagné d'un infinitif ?",
    "Avec deux infinitifs, l'auxiliaire change de place.",
    "Auxiliaire d'abord, puis les deux infinitifs.",
  ], { anchor: "regle", reserved: true }),
];
