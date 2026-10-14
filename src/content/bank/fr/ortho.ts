// Français : homophones grammaticaux.
import { maker, type FrPart } from "./_util";

const Q = maker("fr.ortho");

export const ORTHO: FrPart = {
  skill: { id: "fr.ortho", subjectCode: "FR", domain: "Orthographe", name: "Homophones grammaticaux", synonyms: ["homophone", "a ou a", "quant quand", "s'est c'est", "leur leurs", "plutot plus tot", "davantage", "ces ses"] },
  lesson: {
    skillId: "fr.ortho",
    title: "Les homophones grammaticaux : le test de substitution",
    objectives: ["Distinguer les homophones grammaticaux par substitution", "Identifier la nature du mot (verbe, préposition, déterminant, pronom)", "Écrire sans hésiter plutôt, davantage, quant à"],
    prerequisites: [],
    regle:
      "Deux homophones se prononcent de la même façon mais n'ont ni la même nature ni la même orthographe. L'oreille ne t'aide pas : il faut remplacer le mot par un autre qui, lui, ne se prononce pas pareil. Si la phrase reste correcte, tu as identifié le mot.\n\nVerbe ou pas verbe. « A » est le verbe avoir : il se remplace par « avait » ; « à » est une préposition. « Est » se remplace par « était » ; « et » par « et puis ». « Peut » (pouvoir) se remplace par « pouvait » ; « peu » est un adverbe de quantité (contraire de beaucoup).\n\nDéterminant ou pronom. « Ces » se remplace par « ces… -là » (démonstratif) ; « ses » par « les siens » (possessif). « Ce » est un démonstratif (ce livre, ce que) ; « se » est un pronom réfléchi devant un verbe (il se lève → je me lève). « Leur » devant un verbe est un pronom, toujours invariable (je leur parle = je lui parle) ; devant un nom, c'est un déterminant possessif qui s'accorde (leurs livres).\n\nMots soudés et mots séparés. « C'est » = cela est ; « s'est » = se + est, devant un participe (il s'est trompé → je me suis trompé). « Qu'elle » = que + elle (se remplace par qu'il) ; « quelle » est un déterminant ou un pronom interrogatif ou exclamatif. « S'en » = se + en (s'en aller) ; « sans » = préposition de privation. « Où » marque le lieu ou le temps ; « ou » se remplace par « ou bien ».\n\nQuand, quant, qu'en. « Quand » indique le temps (lorsque) ; « quant à » signifie « en ce qui concerne » ; « qu'en » = que + en (qu'en penses-tu ?).\n\nPlutôt, plus tôt. « Plutôt » (de préférence, assez) s'écrit en un mot ; « plus tôt » s'oppose à « plus tard ».\n\nDavantage, d'avantage. « Davantage » (plus, encore plus) est un adverbe ; « d'avantage » est la préposition « de » suivie du nom « avantage » et se remplace par « d'intérêt » ou « de bénéfice ».",
    formules:
      "a → avait ; à → préposition\nest → était ; et → et puis\nces → ces…-là ; ses → les siens\nce → cela ou ce…-là ; se → me, te (devant un verbe)\nc'est → cela est ; s'est → me suis\nleur + verbe → lui (invariable) ; leur(s) + nom → déterminant accordé\npeut → pouvait ; peu → beaucoup (contraire)\nqu'elle → qu'il ; quelle → quel\ns'en → m'en ; sans → avec (contraire)\nou → ou bien ; où → lieu ou temps\nquand → lorsque ; quant à → en ce qui concerne ; qu'en → que + en\nplutôt → de préférence ; plus tôt ↔ plus tard\ndavantage → plus ; d'avantage → d'intérêt\nla → article ou pronom ; l'a → l'avait ; là → lieu (ici)",
    methode:
      "1. Regarde ce qui varie entre les options : c'est l'homophone testé.\n2. Identifie le mot qui suit : un nom, un verbe, un participe ?\n3. Fais la substitution correspondante (avait, était, les siens, me suis, lui, pouvait…).\n4. Si la phrase reste correcte, garde cette orthographe ; sinon, prends l'autre.\n5. Quand il y a deux blancs, traite-les séparément : les options croisées sont faites pour piéger les lectures rapides.",
    exemple:
      "« Elle ne ___ souvient plus : ___ dommage. » Premier blanc : devant le verbe « souvient », on peut dire « je me souviens » : c'est le pronom « se ». Second blanc : « cela est dommage » : c'est « c'est ».\n\n« Les voisins sont venus ; je ___ ai prêté ___ échelle. » Devant le verbe « ai prêté », on peut dire « je lui ai prêté » : pronom « leur », invariable. Devant le nom singulier « échelle » : déterminant « leur ». Réponse : leur / leur.",
    erreur:
      "✗ « Quand à moi » → ✓ quant à moi (en ce qui me concerne)\n✗ « Je leurs ai dit » → ✓ je leur ai dit : le pronom leur ne prend jamais de s\n✗ « Il faut travailler d'avantage » → ✓ davantage (= plus)\n✗ « Il est arrivé plutôt que prévu » → ✓ plus tôt que prévu (opposé à plus tard)\n✗ « Il c'est trompé » → ✓ il s'est trompé (je me suis trompé)\n✗ « Je pense quelle viendra » → ✓ qu'elle viendra (qu'il viendra)",
    approfondir:
      "Autres paires utiles : « ni » (négation, ni… ni) et « n'y » (ne + y : il n'y va pas) ; « si » et « s'y » (il s'y rend) ; « dans » et « d'en » (il vient d'en parler) ; « on » et « on n' » : après « on », vérifie s'il y a une négation en remplaçant par « il » (on n'a rien vu → il n'a rien vu).\n\nCensé (supposé) et sensé (qui a du bon sens) sont aussi des homophones, mais lexicaux : ils relèvent du vocabulaire.\n\nGestion du temps : ces questions sont les plus rapides de l'épreuve. Une substitution prend trois secondes ; ne t'en prive jamais, même quand la réponse te paraît évidente.",
    cards: [
      ["leur ou leurs devant un verbe ?", "leur, toujours invariable (= lui)", false],
      ["plutôt / plus tôt", "plutôt = de préférence ; plus tôt ↔ plus tard", false],
      ["davantage / d'avantage", "davantage = plus ; d'avantage = d'intérêt", false],
      ["qu'elle / quelle", "Si on peut dire « qu'il », on écrit qu'elle", false],
      ["s'en / sans", "s'en = se + en (m'en) ; sans ↔ avec", false],
    ],
  },
  questions: [
    Q("B-FR-HOM-001", "fr.ortho.ou", 1, "Complétez : « Veux-tu du thé ___ du café pour accompagner le dessert ? »", [
      ["ou", true, "Conjonction de choix : on peut dire « ou bien »."],
      ["où", false, "Où indique un lieu ou un moment, pas un choix."],
      ["houe", false, "Nom d'un outil de jardinage."],
      ["oû", false, "Forme inexistante."],
    ], "« Ou » marque une alternative et peut être remplacé par « ou bien » : du thé ou bien du café.", "ou = ou bien ; où = lieu ou temps.", [
      "La phrase propose un choix.", "Essaie de remplacer par « ou bien ».", "Le mot de lieu a un accent grave.",
    ]),
    Q("B-FR-HOM-002", "fr.ortho.cese", 1, "Complétez : « Elle ___ souvient encore de son premier voyage en train. »", [
      ["se", true, "Pronom réfléchi devant le verbe : je me souviens."],
      ["ce", false, "Démonstratif : il ne se place pas devant un verbe conjugué de cette façon."],
      ["ceux", false, "Pronom démonstratif pluriel, sans rapport."],
      ["ses", false, "Déterminant possessif, qui précède un nom."],
    ], "Devant un verbe pronominal (se souvenir), on écrit le pronom réfléchi « se ». Test : je me souviens, tu te souviens.", "se devant un verbe pronominal (me, te).", [
      "Quel mot suit le blanc ?", "C'est un verbe : se souvenir.", "Conjugue-le à la 1re personne.",
    ]),
    Q("B-FR-HOM-003", "fr.ortho.leur", 1, "Complétez : « Avant de partir, les élèves ont rangé ___ affaires. »", [
      ["leurs", true, "Déterminant possessif devant un nom pluriel : accord."],
      ["leur", false, "Devant un nom pluriel, le déterminant prend un s."],
      ["l'heure", false, "Nom « heure » précédé de l'article, sans rapport."],
      ["leures", false, "Forme inexistante."],
    ], "Devant un nom, « leur » est un déterminant possessif qui s'accorde en nombre : leurs affaires (chacun en a plusieurs).", "leur(s) + nom : déterminant qui s'accorde.", [
      "Le mot qui suit est-il un nom ou un verbe ?", "C'est un nom pluriel.", "Le déterminant possessif s'accorde.",
    ]),
    Q("B-FR-HOM-004", "fr.ortho.leur", 2, "Complétez : « Les enfants n'arrivaient pas à dormir ; je ___ ai raconté une histoire. »", [
      ["leur", true, "Pronom personnel devant un verbe (= lui) : toujours invariable."],
      ["leurs", false, "Le pronom leur ne prend jamais de s."],
      ["l'heure", false, "Nom « heure », sans rapport."],
      ["leure", false, "Forme inexistante."],
    ], "Devant un verbe, « leur » est un pronom : on peut le remplacer par « lui » (je lui ai raconté). Ce pronom est invariable.", "leur + verbe = pronom invariable.", [
      "Le mot qui suit est-il un nom ou un verbe ?", "Remplace par « lui ».", "Le pronom leur ne s'accorde jamais.",
    ], { a: "erreur" }),
    Q("B-FR-HOM-005", "fr.ortho.peu", 1, "Complétez : « Il ne ___ pas venir ce soir : il est malade. »", [
      ["peut", true, "Verbe pouvoir : on peut dire « il ne pouvait pas »."],
      ["peu", false, "Adverbe de quantité, contraire de beaucoup."],
      ["peux", false, "Forme des 1re et 2e personnes : le sujet est « il »."],
      ["peuh", false, "Interjection de dédain."],
    ], "Test : « il ne pouvait pas venir ». La phrase reste correcte : il s'agit du verbe pouvoir à la 3e personne, peut.", "peut = pouvait ; peu = pas beaucoup.", [
      "Le mot est-il un verbe ?", "Remplace par « pouvait ».", "Choisis la forme de la 3e personne.",
    ]),
    Q("B-FR-HOM-006", "fr.ortho.quelle", 2, "Complétez : « Je crois ___ a raison, mais ___ décision prendra-t-elle ? »", [
      ["qu'elle / quelle", true, "Qu'elle = qu'il (que + elle) ; quelle = déterminant interrogatif devant un nom."],
      ["quelle / qu'elle", false, "Ordre inversé : le premier blanc précède un verbe, le second un nom."],
      ["qu'elle / qu'elle", false, "Devant le nom « décision », il faut le déterminant interrogatif."],
      ["quelle / quelle", false, "Devant le verbe « a », il faut que + elle."],
    ], "Premier blanc : « je crois qu'il a raison » fonctionne, donc qu'elle. Second blanc : devant le nom « décision », déterminant interrogatif féminin, quelle.", "qu'elle → qu'il ; quelle → quel.", [
      "Traite chaque blanc séparément.", "Essaie de remplacer par « qu'il » puis par « quel ».", "Devant un nom, il faut un déterminant.",
    ]),
    Q("B-FR-HOM-007", "fr.ortho.sen", 2, "Complétez : « Dès que la cloche sonne, il ___ va sans attendre ses amis. »", [
      ["s'en", true, "Verbe s'en aller : se + en (je m'en vais)."],
      ["sans", false, "Préposition de privation : elle ne se place pas devant un verbe conjugué."],
      ["c'en", false, "Ce + en, comme dans « c'en est trop »."],
      ["sens", false, "Nom ou verbe sentir, sans rapport."],
    ], "S'en aller : test « je m'en vais ». Le pronom réfléchi « se » est suivi de « en » : il s'en va.", "s'en = se + en (m'en, t'en).", [
      "Quel verbe suit le blanc ?", "Ce verbe est pronominal : s'en aller.", "Conjugue-le à la 1re personne.",
    ]),
    Q("B-FR-HOM-008", "fr.ortho.davantage", 1, "Complétez : « Pour réussir le concours, tu devras travailler ___ . »", [
      ["davantage", true, "Adverbe signifiant « plus »."],
      ["d'avantage", false, "De + nom avantage : le sens serait « d'intérêt », absurde ici."],
      ["d'avantages", false, "Nom pluriel précédé de « de », sans rapport avec le sens."],
      ["davantages", false, "Un adverbe ne prend pas de s."],
    ], "Travailler plus : c'est l'adverbe « davantage », en un mot et invariable.", "davantage = plus.", [
      "Le mot complète un verbe.", "Peut-on le remplacer par « plus » ?", "L'adverbe s'écrit en un mot.",
    ]),
    Q("B-FR-HOM-009", "fr.ortho.plutot", 2, "Complétez : « Si tu étais parti ___ , tu n'aurais pas raté ton train. »", [
      ["plus tôt", true, "Opposé à « plus tard » : il fallait partir avant."],
      ["plutôt", false, "Plutôt signifie « de préférence », sans rapport avec le moment."],
      ["plu tôt", false, "Forme inexistante."],
      ["plutot", false, "Forme sans accent, et de toute façon le sens est temporel."],
    ], "Le sens est temporel : on peut opposer « parti plus tôt » à « parti plus tard ». Il faut donc plus tôt, en deux mots.", "plus tôt ↔ plus tard ; plutôt = de préférence.", [
      "Le mot exprime-t-il une préférence ou un moment ?", "Essaie de remplacer par « plus tard ».", "Le sens est temporel.",
    ], { r: true }),
    Q("B-FR-HOM-010", "fr.ortho.plutot", 1, "Complétez : « Ne prends pas le bus aux heures de pointe ; prends ___ le métro. »", [
      ["plutôt", true, "Adverbe de préférence : de préférence le métro."],
      ["plus tôt", false, "Plus tôt s'oppose à plus tard ; ici on exprime une préférence."],
      ["plutôt que", false, "Locution comparative qui exige un second terme."],
      ["plus-tôt", false, "Forme inexistante."],
    ], "« Prends de préférence le métro » : c'est l'adverbe « plutôt », en un mot.", "plutôt = de préférence.", [
      "La phrase exprime-t-elle un moment ou un choix ?", "Remplace par « de préférence ».", "L'adverbe de préférence s'écrit en un mot.",
    ]),
    Q("B-FR-HOM-011", "fr.ortho.quand", 2, "Complétez : « ___ penses-tu ? ___ à moi, j'ai encore des doutes. »", [
      ["Qu'en / Quant", true, "Qu'en = que + en (que penses-tu de cela ?) ; quant à = en ce qui concerne."],
      ["Quand / Quant", false, "Quand indique le moment ; ici on demande un avis sur quelque chose."],
      ["Qu'en / Quand", false, "Quant à moi = en ce qui me concerne, avec un t."],
      ["Quant / Qu'en", false, "Ordre inversé."],
    ], "« Que penses-tu de cela ? » → qu'en penses-tu. « En ce qui me concerne » → quant à moi.", "qu'en = que + en ; quant à = en ce qui concerne.", [
      "Traite les deux blancs séparément.", "Le premier : « que penses-tu de cela ? ».", "Le second : « en ce qui me concerne ».",
    ]),
    Q("B-FR-HOM-012", "fr.ortho.cesses", 2, "Complétez : « ___ livres-là appartiennent à Marie : ce sont ___ romans préférés. »", [
      ["Ces / ses", true, "Ces…-là : démonstratif ; ses = les siens, possessif."],
      ["Ses / ces", false, "Ordre inversé : le premier est démonstratif (avec -là)."],
      ["Ces / ces", false, "Les romans préférés de Marie : c'est un possessif."],
      ["Ses / ses", false, "« Livres-là » impose le démonstratif."],
    ], "Le suffixe « -là » signale un démonstratif : ces livres-là. Les romans préférés de Marie sont les siens : ses romans.", "ces = ceux-là ; ses = les siens.", [
      "Repère le suffixe « -là » dans le premier blanc.", "À qui sont les romans du second blanc ?", "Possession → ses ; désignation → ces.",
    ]),
    Q("B-FR-HOM-013", "fr.ortho.cest", 2, "Complétez : « ___ un plaisir de te revoir ; il ___ beaucoup amusé hier soir. »", [
      ["C'est / s'est", true, "Cela est un plaisir ; il s'est amusé (je me suis amusé)."],
      ["S'est / c'est", false, "Ordre inversé."],
      ["C'est / c'est", false, "Devant le participe d'un verbe pronominal, il faut s'est."],
      ["Sait / s'est", false, "Sait est le verbe savoir, sans rapport avec le premier blanc."],
    ], "Premier blanc : « cela est un plaisir » → c'est. Second blanc : s'amuser, pronominal ; « je me suis amusé » → il s'est amusé.", "c'est = cela est ; s'est = se + est.", [
      "Remplace le premier blanc par « cela est ».", "Le second précède un participe passé.", "Conjugue « s'amuser » à la 1re personne.",
    ], { r: true }),
    Q("B-FR-HOM-014", "fr.ortho.la", 3, "Complétez : « Cette lettre, il ___ lue hier ; elle est encore ___ , sur son bureau. »", [
      ["l'a / là", true, "L'a = l'avait (pronom + avoir) ; là = adverbe de lieu."],
      ["la / là", false, "Devant un participe passé, il faut l'auxiliaire : il l'a lue."],
      ["l'a / la", false, "Le second blanc désigne un lieu : là, avec un accent."],
      ["là / l'a", false, "Ordre inversé."],
    ], "« Il l'avait lue » fonctionne : pronom l' + verbe avoir, l'a. Le second blanc indique un lieu (ici) : là.", "l'a → l'avait ; là → ici ; la → article ou pronom.", [
      "Le premier blanc précède un participe passé.", "Remplace par « l'avait ».", "Le second indique un lieu.",
    ], { a: "formules", r: true }),
  ],
};
