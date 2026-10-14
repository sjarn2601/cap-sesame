// de.k2 : Konjunktiv II (hypothèse, politesse) et reconnaissance du Konjunktiv I.
import { L, Q } from "./common";

export const lessonK2 = L({
  skillId: "de.k2",
  title: "Konjunktiv II et Konjunktiv I",
  objectives: ["Former le Konjunktiv II présent et passé", "Exprimer une hypothèse irréelle, un souhait, un conseil et une demande polie", "Reconnaître le Konjunktiv I du discours indirect"],
  prerequisites: ["de.conj", "de.modaux"],
  regle:
    "Le Konjunktiv II correspond au conditionnel français, et aussi à l'imparfait ou au plus-que-parfait après « si ».\n\nPrésent. Forme générale : würde + infinitif en fin de proposition : Ich würde gern reisen. Pour quelques verbes très courants, on emploie la forme propre, issue du prétérit avec inflexion : sein → wäre, haben → hätte, werden → würde, et les modaux könnte, müsste, dürfte, sollte, wollte, möchte. On dit ich wäre, ich hätte, ich könnte plutôt que ich würde sein, ich würde haben.\n\nHypothèse irréelle. Les deux propositions sont au Konjunktiv II, contrairement au français (« si j'avais… je ferais ») : Wenn ich mehr Zeit hätte, würde ich ein Instrument lernen. La subordonnée en wenn suit l'ordre habituel : verbe à la fin, puis la principale commence par le verbe.\n\nPassé (irréel du passé) : hätte ou wäre + participe passé. On choisit hätte ou wäre comme au parfait (haben ou sein) : Wenn ich das gewusst hätte, hätte ich dir geholfen. Wenn du früher gekommen wärst, hättest du ihn gesehen. Würde ne s'emploie pas avec un participe dans ce cas.\n\nAutres emplois : souhait (Wenn ich doch mehr Geld hätte! Ich wäre gern Pilot.), conseil (An deiner Stelle würde ich… ; Du solltest mehr schlafen.), demande polie (Könnten Sie mir helfen? Würden Sie das Fenster schließen? Ich hätte gern einen Kaffee.), proposition (Es wäre schön, wenn du kämest ou wenn du kommen könntest).\n\nKonjunktiv I : à reconnaître seulement. Il sert au discours indirect, surtout dans la presse : Der Minister sagte, er sei zufrieden und habe keine Zweifel. Formes repères : er sei (sein), er habe (haben), er könne, er müsse, er werde, er komme. Le journaliste rapporte des propos sans les prendre à son compte. Si la forme du Konjunktiv I est identique à l'indicatif (sie haben), on la remplace par le Konjunktiv II (sie hätten).",
  formules:
    "würde + infinitif : ich würde, du würdest, er würde, wir würden, ihr würdet, sie würden\nsein → wäre, wärst, wäre, wären, wärt, wären\nhaben → hätte, hättest, hätte, hätten, hättet, hätten\nkönnen → könnte · müssen → müsste · dürfen → dürfte · sollen → sollte · mögen → möchte\nIrréel présent : Wenn ich … hätte/wäre/würde, würde ich …\nIrréel passé : Wenn ich … gewusst hätte, hätte ich … geholfen\nKonjunktiv I : er sei, er habe, er könne, er werde, er komme",
  methode:
    "1. Identifie la valeur : hypothèse sur le présent, hypothèse sur le passé, souhait, conseil ou politesse.\n2. Présent : wäre, hätte ou modal au Konjunktiv II ; sinon würde + infinitif.\n3. Passé : hätte ou wäre (selon l'auxiliaire du parfait) + participe.\n4. Mets le Konjunktiv II dans les deux propositions d'une hypothèse.\n5. Pour une 3e personne sans -t (er sei, er habe, er könne), pense au Konjunktiv I du discours indirect.",
  exemple:
    "« Wenn ich mehr Zeit ___, würde ich ein Instrument lernen. » Hypothèse sur le présent ; le verbe manquant est haben : hätte. Les deux propositions sont au Konjunktiv II.\n\n« Wenn du früher gekommen ___, hättest du ihn gesehen. » Hypothèse sur le passé ; kommen forme son parfait avec sein : wärst.",
  erreur:
    "✗ Wenn ich reich würde sein → ✓ Wenn ich reich wäre.\n✗ Wenn ich Zeit habe, würde ich kommen (mélange). → ✓ Wenn ich Zeit hätte, würde ich kommen.\n✗ Wenn ich das gewusst hätte, würde ich dir geholfen. → ✓ …, hätte ich dir geholfen.\n✗ Wenn du früher gekommen hättest → ✓ Wenn du früher gekommen wärst (kommen → sein).\n✗ Konnten Sie mir helfen? (prétérit) → ✓ Könnten Sie mir helfen?\n✗ würde confondu avec wurde → ✓ würde = conditionnel ; wurde = prétérit de werden.",
  approfondir:
    "Repère visuel : l'inflexion fait la différence. war/wäre, hatte/hätte, konnte/könnte, wurde/würde. Au concours, deux options ne diffèrent souvent que par ces deux points : lis lentement.\n\nVariante à connaître : la subordonnée sans wenn, verbe en tête : Hätte ich mehr Zeit, würde ich reisen. Fréquent à l'écrit.\n\nDiscours indirect : dans un texte de presse, une suite de formes en sei, habe, könne signale que l'auteur rapporte les propos de quelqu'un. Utile pour les questions de compréhension : ce n'est pas l'avis du journaliste.",
  cards: [
    ["Konjunktiv II de sein et haben", "wäre, hätte", false],
    ["Si j'étais riche, je voyagerais", "Wenn ich reich wäre, würde ich reisen.", true],
    ["Irréel du passé", "hätte ou wäre + participe passé", false],
    ["Demande polie", "Könnten Sie … ? Würden Sie … ? Ich hätte gern …", false],
    ["er sei, er habe", "Konjunktiv I : discours indirect", false],
  ],
});

const S = "de.k2";

export const questionsK2 = [
  Q("B-DE-K2-001", S, "de.k2.present", 1, "Ergänzen Sie: «Wenn ich reich ___, würde ich um die Welt reisen.»", [
    ["wäre", true, "Konjunktiv II de sein : hypothèse irréelle sur le présent."],
    ["war", false, "Prétérit (calque de l'imparfait français « si j'étais »)."],
    ["bin", false, "Indicatif présent : la condition serait réelle, incohérent avec würde."],
    ["würde", false, "Il manquerait sein ; on emploie wäre pour sein."],
  ], "Hypothèse irréelle : Konjunktiv II dans les deux propositions. Pour sein, on utilise la forme propre wäre.", "Wenn + Konjunktiv II, Konjunktiv II : Wenn ich reich wäre, würde ich …", [
    "Hypothèse réelle ou irréelle ?",
    "Le verbe sous-entendu est sein.",
    "Prétérit de sein + inflexion + e.",
  ]),
  Q("B-DE-K2-002", S, "de.k2.present", 2, "Ergänzen Sie: «Wenn ich mehr Zeit hätte, ___ ich ein Instrument lernen.»", [
    ["würde", true, "Konjunktiv II : würde + infinitif (lernen) dans la principale."],
    ["werde", false, "Futur de l'indicatif : incompatible avec une hypothèse irréelle."],
    ["wurde", false, "Prétérit de werden, sans inflexion."],
    ["wäre", false, "Wäre + infinitif n'existe pas."],
  ], "La condition est au Konjunktiv II (hätte). La principale aussi : würde + infinitif lernen en fin de proposition.", "Principale de l'irréel : würde + infinitif.", [
    "Les deux propositions sont au même mode.",
    "lernen est à l'infinitif : quel auxiliaire ?",
    "Forme de werden avec inflexion.",
  ]),
  Q("B-DE-K2-003", S, "de.k2.politesse", 1, "Ergänzen Sie (demande polie): «___ Sie mir bitte sagen, wie spät es ist?»", [
    ["Könnten", true, "Konjunktiv II de können, forme de politesse avec Sie."],
    ["Konnten", false, "Prétérit : « Pouviez-vous » au sens passé."],
    ["Könntet", false, "Forme de ihr ; le vouvoiement Sie prend la forme du pluriel en -en."],
    ["Könnte", false, "Forme du singulier ; Sie demande -en."],
  ], "La demande polie se fait au Konjunktiv II. Avec Sie (vouvoiement), on conjugue comme sie pluriel : Könnten Sie … ?", "Politesse : Könnten Sie … ? Würden Sie … ?", [
    "Quel mode exprime la politesse ?",
    "Attention à l'inflexion.",
    "Sie : terminaison -en.",
  ]),
  Q("B-DE-K2-004", S, "de.k2.politesse", 2, "Ergänzen Sie (im Café): «Ich ___ gern ein Stück Apfelkuchen und einen Tee, bitte.»", [
    ["hätte", true, "Konjunktiv II de haben : commande polie (Ich hätte gern …)."],
    ["hatte", false, "Prétérit : « j'avais »."],
    ["hätten", false, "Forme du pluriel ; le sujet est ich."],
    ["hättet", false, "Forme de ihr."],
  ], "Pour commander poliment : Ich hätte gern … (Konjunktiv II de haben). Avec ich : hätte.", "Ich hätte gern … = je voudrais (poli).", [
    "Quelle est la formule de commande polie ?",
    "Konjunktiv II de haben.",
    "Avec ich : forme en -e.",
  ]),
  Q("B-DE-K2-005", S, "de.k2.passe", 2, "Ergänzen Sie: «Wenn du früher gekommen ___, hättest du ihn noch gesehen.»", [
    ["wärst", true, "Irréel du passé : kommen forme son parfait avec sein, donc wärst + participe."],
    ["hättest", false, "Kommen se conjugue avec sein au parfait, pas avec haben."],
    ["warst", false, "Prétérit de l'indicatif : il manque le Konjunktiv."],
    ["würdest", false, "Würde ne s'emploie pas avec un participe pour l'irréel du passé."],
  ], "Irréel du passé : hätte ou wäre + participe. Kommen fait son parfait avec sein (ich bin gekommen) : wärst gekommen.", "Irréel du passé : même auxiliaire qu'au parfait, au Konjunktiv II.", [
    "L'hypothèse porte-t-elle sur le présent ou le passé ?",
    "Au parfait, kommen prend haben ou sein ?",
    "Konjunktiv II de sein, 2e personne.",
  ], { anchor: "exemple" }),
  Q("B-DE-K2-006", S, "de.k2.passe", 3, "Ergänzen Sie: «Wenn ich das gewusst hätte, ___ ich dir natürlich geholfen.»", [
    ["hätte", true, "Irréel du passé dans la principale : hätte + participe (helfen → haben)."],
    ["würde", false, "Würde + participe seul est impossible."],
    ["wäre", false, "Helfen forme son parfait avec haben."],
    ["habe", false, "Indicatif : incohérent avec l'hypothèse irréelle."],
  ], "Les deux propositions portent sur le passé : hätte/wäre + participe. Helfen se conjugue avec haben : hätte ich dir geholfen.", "Irréel du passé : Wenn … gewusst hätte, hätte ich … geholfen.", [
    "Regarde le participe geholfen.",
    "Helfen se conjugue avec haben.",
    "Konjunktiv II de haben, 1re personne.",
  ], { reserved: true }),
  Q("B-DE-K2-007", S, "de.k2.conseil", 2, "Ergänzen Sie: «Du bist ständig müde. An deiner Stelle ___ ich früher ins Bett gehen.»", [
    ["würde", true, "Conseil : würde + infinitif (« à ta place, j'irais »)."],
    ["werde", false, "Futur : « j'irai », pas un conseil hypothétique."],
    ["wurde", false, "Prétérit de werden, sans inflexion."],
    ["wäre", false, "Wäre + infinitif n'existe pas."],
  ], "An deiner Stelle (à ta place) introduit une situation irréelle : Konjunktiv II, würde + infinitif.", "Conseil : An deiner Stelle würde ich … / Du solltest …", [
    "« À ta place » : situation réelle ?",
    "Il faut un Konjunktiv II avec l'infinitif gehen.",
    "würde.",
  ]),
  Q("B-DE-K2-008", S, "de.k2.souhait", 2, "Ergänzen Sie: «Ich habe nur zehn Euro. Wenn ich doch nur mehr Geld ___!»", [
    ["hätte", true, "Souhait irréel : Konjunktiv II de haben, verbe à la fin."],
    ["habe", false, "Indicatif : ne traduit pas le souhait irréel."],
    ["hatte", false, "Prétérit de l'indicatif : sans inflexion."],
    ["wäre", false, "Mauvais verbe : on « a » de l'argent."],
  ], "Un souhait irréel s'exprime avec Wenn … doch (nur) + Konjunktiv II, verbe en fin : Wenn ich doch nur mehr Geld hätte!", "Souhait irréel : Wenn … doch nur + Konjunktiv II !", [
    "Le souhait est-il réalisé ?",
    "Le verbe est « avoir ».",
    "Konjunktiv II de haben.",
  ]),
  Q("B-DE-K2-009", S, "de.k2.konjunktiv1", 3, "In einem Zeitungsartikel steht: «Der Minister sagte, er sei mit dem Ergebnis zufrieden.» Welche Funktion hat die Form «sei»?", [
    ["Sie markiert die indirekte Rede (Konjunktiv I).", true, "Sei est le Konjunktiv I de sein : propos rapportés."],
    ["Sie drückt eine irreale Bedingung aus (Konjunktiv II).", false, "Le Konjunktiv II de sein est wäre."],
    ["Sie ist ein Imperativ.", false, "L'impératif sei s'adresse à du, sans sujet er."],
    ["Sie bezeichnet eine Handlung in der Zukunft.", false, "Le futur se forme avec werden + infinitif."],
  ], "Après sagte, la forme er sei est le Konjunktiv I : le journaliste rapporte les paroles du ministre sans les reprendre à son compte.", "Konjunktiv I (er sei, er habe, er könne) = discours indirect.", [
    "Qui parle vraiment dans cette phrase ?",
    "Sei n'est pas wäre.",
    "Forme typique des propos rapportés dans la presse.",
  ], { reserved: true }),
  Q("B-DE-K2-010", S, "de.k2.politesse", 2, "Ergänzen Sie: «Es ___ schön, wenn du am Samstag zu meiner Party kommen könntest.»", [
    ["wäre", true, "Proposition au Konjunktiv II, en accord avec könntest."],
    ["war", false, "Prétérit de l'indicatif : la fête n'a pas encore eu lieu."],
    ["würde", false, "Il manquerait l'infinitif sein."],
    ["hätte", false, "Mauvais verbe : es ist schön, donc sein."],
  ], "La subordonnée est au Konjunktiv II (könntest) : la principale aussi. Konjunktiv II de sein : es wäre schön.", "Es wäre schön, wenn … : invitation polie.", [
    "Quel mode est employé dans la subordonnée ?",
    "Le verbe de la principale est sein.",
    "Konjunktiv II de sein.",
  ]),
  Q("B-DE-K2-011", S, "de.k2.present", 3, "Sie hatten ein Picknick geplant, aber es regnet. Welcher Satz ist richtig?", [
    ["Wenn es nicht regnen würde, könnten wir draußen essen.", true, "Konjunktiv II dans les deux propositions, ordre des mots correct."],
    ["Wenn es nicht regnen würde, können wir draußen essen.", false, "Principale à l'indicatif : mélange de modes."],
    ["Wenn es nicht würde regnen, könnten wir draußen essen.", false, "Le verbe conjugué würde doit être à la fin de la subordonnée."],
    ["Wenn es nicht regnen würde, wir könnten draußen essen.", false, "Après la subordonnée, la principale commence par le verbe."],
  ], "Trois points : Konjunktiv II des deux côtés (würde, könnten), verbe conjugué en fin de subordonnée (regnen würde), principale ouverte par le verbe (könnten wir).", "Irréel : mode, place du verbe et inversion à vérifier ensemble.", [
    "Vérifie le mode de chaque proposition.",
    "Puis la place des verbes conjugués.",
    "« verbe, verbe » de part et d'autre de la virgule.",
  ]),
];
