// Français : accord du participe passé.
import { maker, type FrPart } from "./_util";

const Q = maker("fr.accord");

export const ACCORD: FrPart = {
  skill: { id: "fr.accord", subjectCode: "FR", domain: "Grammaire", name: "Accord du participe passé", synonyms: ["participe passe", "accord", "cod", "pronominal", "fait infinitif", "auxiliaire avoir", "auxiliaire etre"] },
  lesson: {
    skillId: "fr.accord",
    title: "L'accord du participe passé",
    objectives: ["Identifier l'auxiliaire et la place du COD", "Accorder le participe des verbes pronominaux", "Traiter les cas particuliers : infinitif, « en », verbes impersonnels, « fait »"],
    prerequisites: [],
    regle:
      "Le participe passé suit trois régimes, selon qu'il est employé seul, avec être ou avec avoir.\n\nEmployé sans auxiliaire, il se comporte comme un adjectif et s'accorde avec le nom auquel il se rapporte : des copies corrigées, une porte entrouverte.\n\nAvec l'auxiliaire être, il s'accorde en genre et en nombre avec le sujet : elles sont parties, la décision a été prise.\n\nAvec l'auxiliaire avoir, il ne s'accorde jamais avec le sujet. Il s'accorde avec le complément d'objet direct (COD) seulement si ce COD est placé avant le verbe. Le COD placé avant est presque toujours un pronom relatif « que », un pronom personnel (le, la, les, l', me, te, nous, vous) ou un groupe interrogatif (quelles villes as-tu visitées ?). Si le COD est après le verbe, ou s'il n'y en a pas, le participe reste invariable.\n\nPour les verbes pronominaux, deux cas. Les verbes essentiellement pronominaux, qui n'existent qu'à la forme pronominale (s'enfuir, s'évanouir, se souvenir, s'apercevoir de), s'accordent avec le sujet. Pour les autres, remplace être par avoir et cherche le COD : si « se » est COD, accord (elles se sont lavées) ; si « se » est COI (se parler, se sourire, se succéder, se nuire, se mentir, se plaire, se ressembler), invariable ; si le COD est placé après le verbe, invariable (elles se sont lavé les mains).\n\nSuivi d'un infinitif, le participe s'accorde avec le COD placé avant si ce COD fait l'action de l'infinitif : les chanteuses que j'ai entendues chanter (ce sont elles qui chantent), mais la chanson que j'ai entendu chanter (la chanson ne chante pas). « Fait » suivi d'un infinitif est toujours invariable.\n\nEnfin, le participe reste invariable quand le COD est le pronom « en » (des fraises, j'en ai cueilli) et avec les verbes impersonnels (les orages qu'il a fait, les efforts qu'il a fallu).",
    formules:
      "Sans auxiliaire → accord avec le nom (comme un adjectif)\nÊtre → accord avec le sujet\nAvoir → accord avec le COD seulement s'il est placé avant\nPronominal : essentiellement pronominal → accord avec le sujet\nPronominal : « se » COD → accord ; « se » COI → invariable\nCOD placé avant + infinitif → accord si le COD fait l'action de l'infinitif\nFait + infinitif → toujours invariable\nCOD « en » → invariable\nVerbe impersonnel (falloir, faire chaud, y avoir) → invariable\nVerbes à « se » COI fréquents : se parler, se sourire, se succéder, se nuire, se mentir, se plaire, se ressembler, se rendre compte",
    methode:
      "1. Repère l'auxiliaire : rien, être ou avoir.\n2. Être (verbe non pronominal) : accorde avec le sujet et arrête-toi.\n3. Avoir : pose la question « qui ? » ou « quoi ? » après le participe pour trouver le COD.\n4. Le COD est-il placé avant le verbe ? Si oui, accorde avec lui (remonte au nom repris par « que » ou « les »).\n5. Pronominal : remplace être par avoir (« elles ont parlé à qui ? à elles ») pour savoir si « se » est COD ou COI.\n6. Infinitif après le participe : demande-toi qui fait l'action de l'infinitif.",
    exemple:
      "Phrase : « Les lettres qu'elles se sont écrites ont été perdues. »\nÉtape 1 : « se sont écrites » est un verbe pronominal. On remplace : elles ont écrit quoi ? « qu' », qui reprend « les lettres ». Le COD est placé avant : accord au féminin pluriel, écrites.\nÉtape 2 : « ont été perdues » est un passif (auxiliaire être) : accord avec le sujet « les lettres ».\n\nPhrase : « Elles se sont écrit pendant dix ans. »\nOn remplace : elles ont écrit à qui ? à elles. « Se » est COI et il n'y a pas de COD : participe invariable.",
    erreur:
      "✗ Accorder avec le sujet quand l'auxiliaire est avoir (« elles ont mangées ») → ✓ avec avoir, le sujet ne commande jamais l'accord\n✗ Accorder tout participe pronominal avec le sujet (« elles se sont parlées ») → ✓ se parler, c'est parler à soi : « se » est COI, donc parlé\n✗ Accorder « fait » devant un infinitif (« la robe qu'elle s'est faite faire ») → ✓ fait + infinitif reste invariable\n✗ Accorder avec « en » (« des pommes, j'en ai mangées ») → ✓ en COD : invariable\n✗ Accorder un verbe impersonnel (« la chaleur qu'il a faite ») → ✓ il a fait, invariable",
    approfondir:
      "Pour les verbes coûter, valoir, peser, courir et vivre, distingue le sens propre et le sens figuré. Au sens propre, le complément indique une mesure et n'est pas un COD : les dix euros que ce livre m'a coûté. Au sens figuré, c'est un vrai COD : les efforts que ce concours m'a coûtés.\n\nLaissé suivi d'un infinitif : la réforme de 1990 recommande l'invariabilité, comme pour fait ; l'accord traditionnel reste admis. Au concours, une question bien posée n'en fera pas l'unique difficulté.\n\nGestion du temps : la plupart des questions se règlent en dix secondes avec la méthode. Garde les verbes pronominaux et les infinitifs pour une relecture mentale, ce sont eux qui piègent.",
    cards: [
      ["Avoir + participe passé", "Accord avec le COD seulement s'il est placé avant le verbe", false],
      ["Elles se sont (parler) toute la soirée", "parlé : se parler = parler à soi, « se » est COI", false],
      ["Fait + infinitif", "Toujours invariable : la maison qu'ils ont fait construire", false],
      ["Des cerises, j'en ai (manger)", "mangé : le COD « en » n'entraîne pas d'accord", false],
      ["Les musiciens que j'ai (entendre) jouer", "entendus : ce sont les musiciens qui jouent", false],
    ],
  },
  questions: [
    Q("B-FR-ACC-001", "fr.accord.avoir", 1, "Complétez : « Les décisions que la directrice a ___ ont surpris toute l'équipe. »", [
      ["prises", true, "Le COD « que » reprend « les décisions » (féminin pluriel) et il est placé avant avoir : accord."],
      ["pris", false, "Oubli de l'accord avec le COD placé avant l'auxiliaire."],
      ["prise", false, "Accord au singulier, alors que « que » reprend un nom pluriel."],
      ["prit", false, "Confusion avec le passé simple du verbe prendre."],
    ], "« A pris quoi ? » → « que », mis pour « les décisions », placé avant l'auxiliaire avoir. Le participe s'accorde donc au féminin pluriel : prises. Le second participe, « surpris », a son COD « toute l'équipe » placé après : il reste invariable.", "Avec avoir, accord avec le COD placé avant le verbe.", [
      "Quel est l'auxiliaire du verbe ?", "Cherche le COD : la directrice a pris quoi ?", "« Que » reprend « les décisions » et se trouve avant le verbe.",
    ]),
    Q("B-FR-ACC-002", "fr.accord.avoir", 1, "Complétez : « Ces sculptures, je les ai longuement ___ au musée de Lyon. »", [
      ["admirées", true, "Le pronom COD « les » reprend « ces sculptures » et précède l'auxiliaire : accord au féminin pluriel."],
      ["admiré", false, "Oubli de l'accord avec le pronom COD placé avant."],
      ["admirés", false, "Accord au masculin, alors que « sculptures » est féminin."],
      ["admirée", false, "Accord au singulier, alors que « les » est pluriel."],
    ], "« J'ai admiré quoi ? » → « les », mis pour « ces sculptures », placé avant avoir. Accord au féminin pluriel : admirées.", "Le pronom COD le, la, les placé avant avoir commande l'accord.", [
      "Avec avoir, l'accord dépend du COD.", "Quel pronom est placé juste avant « ai » ?", "« Les » reprend un nom féminin pluriel.",
    ]),
    Q("B-FR-ACC-003", "fr.accord.etre", 1, "Complétez : « Malgré la pluie, Léa et sa mère sont ___ très tôt ce matin. »", [
      ["parties", true, "Auxiliaire être : accord avec le sujet « Léa et sa mère », féminin pluriel."],
      ["parti", false, "Oubli de l'accord avec le sujet, obligatoire avec être."],
      ["partis", false, "Accord au masculin, alors que les deux sujets sont féminins."],
      ["partie", false, "Accord au singulier, alors que le sujet est double."],
    ], "Avec être, le participe s'accorde avec le sujet. Deux sujets féminins coordonnés donnent un féminin pluriel : parties.", "Avec être, accord avec le sujet.", [
      "Quel est l'auxiliaire ?", "Avec être, on regarde le sujet.", "Le sujet compte deux personnes de sexe féminin.",
    ]),
    Q("B-FR-ACC-004", "fr.accord.pronominal", 2, "Complétez : « Après la dispute, les deux sœurs se sont ___ pendant des heures. »", [
      ["parlé", true, "On parle à quelqu'un : « se » est COI et il n'y a pas de COD, donc pas d'accord."],
      ["parlées", false, "Accord fautif avec le sujet : « se » n'est pas COD."],
      ["parlés", false, "Accord au masculin pluriel, doublement fautif."],
      ["parlée", false, "Accord au singulier sans justification."],
    ], "Remplace être par avoir : « elles ont parlé à qui ? à elles-mêmes ». « Se » est complément d'objet indirect ; aucun COD n'est placé avant. Le participe reste invariable : parlé.", "Se parler, se sourire, se succéder : « se » est COI, participe invariable.", [
      "C'est un verbe pronominal : cherche la fonction de « se ».", "On parle quelqu'un ou à quelqu'un ?", "« Se » est COI, il n'y a aucun COD.",
    ]),
    Q("B-FR-ACC-005", "fr.accord.pronominal", 2, "Complétez : « Les prisonnières se sont ___ par la fenêtre de la cour. »", [
      ["enfuies", true, "S'enfuir est essentiellement pronominal : accord avec le sujet féminin pluriel."],
      ["enfui", false, "Les verbes essentiellement pronominaux s'accordent avec le sujet."],
      ["enfuis", false, "Accord au masculin, alors que le sujet est féminin."],
      ["enfuie", false, "Accord au singulier, alors que le sujet est pluriel."],
    ], "« Enfuir » n'existe pas sans « se » : le verbe est essentiellement pronominal, et son participe s'accorde avec le sujet, « les prisonnières » : enfuies.", "Verbe essentiellement pronominal : accord avec le sujet.", [
      "Le verbe « enfuir » existe-t-il sans « se » ?", "Pour ces verbes, la règle est simple : on regarde le sujet.", "Le sujet est féminin pluriel.",
    ]),
    Q("B-FR-ACC-006", "fr.accord.infinitif", 3, "Complétez : « Les musiciens que nous avons ___ jouer hier soir étaient remarquables. »", [
      ["entendus", true, "Le COD « que » (les musiciens) fait l'action de jouer : accord."],
      ["entendu", false, "On garde l'invariable quand le COD ne fait pas l'action de l'infinitif, ce qui n'est pas le cas ici."],
      ["entendues", false, "Accord au féminin, alors que « musiciens » est masculin."],
      ["entendue", false, "Accord au singulier, alors que « que » reprend un pluriel."],
    ], "Participe suivi d'un infinitif : on se demande qui fait l'action de l'infinitif. Ce sont les musiciens qui jouent : le COD « que », placé avant, est l'agent de l'infinitif, donc accord : entendus. Comparer : « les morceaux que nous avons entendu jouer » (les morceaux ne jouent pas).", "Participe + infinitif : accord si le COD placé avant fait l'action de l'infinitif.", [
      "Le participe est suivi d'un infinitif.", "Qui fait l'action de « jouer » ?", "Les musiciens jouent eux-mêmes : le COD placé avant est l'agent de l'infinitif.",
    ], { a: "formules" }),
    Q("B-FR-ACC-007", "fr.accord.infinitif", 2, "Complétez : « La maison qu'ils ont ___ construire domine toute la vallée. »", [
      ["fait", true, "Fait suivi d'un infinitif est toujours invariable."],
      ["faite", false, "Accord fautif : « fait » devant un infinitif ne s'accorde jamais."],
      ["faits", false, "Accord avec le sujet, interdit avec avoir."],
      ["faites", false, "Accord fautif au féminin pluriel."],
    ], "« Fait » suivi d'un infinitif forme avec lui un bloc : le participe reste invariable, même si un COD est placé avant (la maison qu'ils ont fait construire).", "Fait + infinitif : toujours invariable.", [
      "Le participe est suivi d'un infinitif.", "Il s'agit du verbe « faire ».", "Pour « faire » devant un infinitif, la règle ne connaît pas d'exception.",
    ], { a: "erreur" }),
    Q("B-FR-ACC-008", "fr.accord.cas", 2, "Complétez : « Des champignons, nous en avons ___ toute la matinée dans le bois. »", [
      ["cueilli", true, "Le COD est le pronom « en » : le participe reste invariable."],
      ["cueillis", false, "Accord fautif avec « champignons », repris par « en »."],
      ["cueillies", false, "Accord au féminin, sans aucune justification."],
      ["cueillie", false, "Accord au féminin singulier, sans justification."],
    ], "« Nous avons cueilli quoi ? » → « en » (des champignons). Le pronom « en » est neutre et partitif : il n'entraîne pas l'accord du participe. On écrit cueilli.", "Quand le COD est « en », le participe reste invariable.", [
      "Quel pronom reprend « des champignons » ?", "Ce pronom est-il « les » ou « en » ?", "Le pronom « en » n'entraîne pas l'accord.",
    ]),
    Q("B-FR-ACC-009", "fr.accord.cas", 2, "Complétez : « Tu n'imagines pas les efforts qu'il a ___ pour finir à temps. »", [
      ["fallu", true, "Falloir est un verbe impersonnel : son participe est toujours invariable."],
      ["fallus", false, "Accord fautif : « qu' » n'est pas COD d'un verbe impersonnel."],
      ["fallues", false, "Accord fautif, et au mauvais genre."],
      ["fallue", false, "Accord fautif au féminin singulier."],
    ], "« Il a fallu » est impersonnel : « il » ne représente rien et le complément n'est pas un COD. Le participe des verbes impersonnels reste invariable : les efforts qu'il a fallu.", "Verbe impersonnel : participe invariable.", [
      "Que représente le « il » de « il a fallu » ?", "Ce « il » ne désigne personne : le verbe est impersonnel.", "Les verbes impersonnels ne s'accordent jamais.",
    ], { r: true }),
    Q("B-FR-ACC-010", "fr.accord.pronominal", 2, "Complétez : « Elles se sont ___ une pause bien méritée après l'examen. »", [
      ["accordé", true, "Le COD « une pause » est placé après le verbe : pas d'accord."],
      ["accordées", false, "Accord fautif avec le sujet ; « se » est ici COI (accorder à soi)."],
      ["accordés", false, "Accord au masculin pluriel, sans justification."],
      ["accordée", false, "Accord avec « une pause », alors que ce COD est placé après."],
    ], "Remplace être par avoir : « elles ont accordé quoi ? une pause, à qui ? à elles ». « Se » est COI et le COD « une pause » suit le verbe : participe invariable.", "Pronominal suivi de son COD : participe invariable.", [
      "Cherche le COD du verbe « accorder ».", "Ce COD est-il avant ou après le participe ?", "« Une pause » est après : « se » n'est que COI.",
    ]),
    Q("B-FR-ACC-011", "fr.accord.pronominal", 3, "Complétez : « Les vacances qu'ils se sont ___ cet été ont été trop courtes. »", [
      ["offertes", true, "Le COD « qu' » (les vacances, féminin pluriel) est placé avant : accord."],
      ["offert", false, "On a vu « se » COI, mais on a oublié le COD « qu' » placé avant."],
      ["offerts", false, "Accord avec le sujet « ils », fautif pour ce verbe pronominal."],
      ["offerte", false, "Accord au singulier, alors que « vacances » est pluriel."],
    ], "« Ils ont offert quoi ? » → « qu' », mis pour « les vacances », placé avant ; « se » est seulement COI (à eux). Le participe s'accorde avec ce COD : offertes.", "Pronominal : accord avec le COD s'il est placé avant, jamais avec un « se » COI.", [
      "Remplace « se sont » par « ont ».", "Ils ont offert quoi ? Où est ce mot ?", "« Qu' » reprend « les vacances » et précède le verbe.",
    ], { a: "exemple", r: true }),
    Q("B-FR-ACC-012", "fr.accord.pronominal", 3, "Parmi ces phrases construites sur des verbes pronominaux, laquelle est correctement accordée ?", [
      ["Les orages se sont succédé toute la nuit.", true, "Succéder à : « se » est COI, participe invariable."],
      ["Elles se sont souries en se croisant.", false, "Sourire à quelqu'un : « se » est COI, il faut souri."],
      ["Ils se sont aperçu de leur erreur trop tard.", false, "S'apercevoir de est essentiellement pronominal : il faut aperçus."],
      ["Elles se sont menties pendant des années.", false, "Mentir à quelqu'un : « se » est COI, il faut menti."],
    ], "Succéder, sourire et mentir se construisent avec « à » : « se » est COI et le participe reste invariable (succédé, souri, menti). S'apercevoir de, en revanche, est essentiellement pronominal et s'accorde avec le sujet (aperçus).", "Distinguer « se » COI (invariable) et verbe essentiellement pronominal (accord avec le sujet).", [
      "Pour chaque verbe, demande-toi s'il se construit avec « à ».", "Succéder, sourire et mentir : à quelqu'un.", "S'apercevoir n'existe qu'avec « se » au sens de remarquer.",
    ], { a: "erreur" }),
    Q("B-FR-ACC-013", "fr.accord.cas", 3, "Complétez : « Je ne regrette pas les efforts que ce concours m'a ___. »", [
      ["coûtés", true, "Au sens figuré, coûter a un vrai COD (« que », les efforts) placé avant : accord."],
      ["coûté", false, "Invariable seulement au sens propre, quand le complément exprime un prix."],
      ["coûtées", false, "Accord au féminin, alors que « efforts » est masculin."],
      ["coûtée", false, "Accord au féminin singulier, sans justification."],
    ], "Au sens propre (prix), coûter n'a pas de COD : les cent euros que ce livre m'a coûté. Au sens figuré (causer, exiger), le complément est un vrai COD : « que », mis pour « les efforts », placé avant, d'où l'accord coûtés.", "Coûter, valoir, peser : accord au sens figuré seulement.", [
      "Coûter est-il employé ici au sens de prix ?", "Au sens figuré, « que » est un vrai COD.", "Ce COD placé avant reprend un nom masculin pluriel.",
    ], { a: "approfondir" }),
  ],
};
