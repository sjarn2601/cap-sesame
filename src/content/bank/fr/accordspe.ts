// Français : accords particuliers (tout, même, quel que, demi, nu, couleurs, numéraux).
import { maker, type FrPart } from "./_util";

const Q = maker("fr.accordspe");

export const ACCORDSPE: FrPart = {
  skill: { id: "fr.accordspe", subjectCode: "FR", domain: "Grammaire", name: "Accords particuliers", synonyms: ["tout", "meme", "quel que", "quelque", "demi", "nu", "adjectif de couleur", "vingt", "cent", "numeraux"] },
  lesson: {
    skillId: "fr.accordspe",
    title: "Les accords particuliers",
    objectives: ["Distinguer l'emploi adverbial (invariable) de l'emploi adjectival (variable)", "Accorder tout, même, quel que et quelque", "Écrire correctement demi, nu, les couleurs et les nombres"],
    prerequisites: ["fr.accord"],
    regle:
      "La plupart des mots de cette fiche obéissent au même principe : adjectif ou déterminant, ils s'accordent ; adverbe, ils restent invariables.\n\nTout. Déterminant ou pronom, il s'accorde : tous les jours, toutes les filles, ils sont tous là. Adverbe (au sens de « tout à fait, entièrement »), il est invariable : ils sont tout émus. Exception d'oreille : devant un adjectif féminin commençant par une consonne ou un h aspiré, l'adverbe s'accorde (elle est toute petite, elles sont toutes honteuses), mais pas devant une voyelle ou un h muet (elles sont tout heureuses).\n\nMême. Adjectif (identité ou insistance), il s'accorde : les mêmes erreurs, elles-mêmes. Adverbe (au sens de « aussi, y compris »), il est invariable : même les enfants ont ri.\n\nQuel que, quelque. « Quel que » s'écrit en deux mots devant le verbe être (ou pouvoir être) au subjonctif, et « quel » s'accorde avec le sujet : quelles que soient tes raisons. « Quelque » en un mot s'accorde devant un nom (quelques amis) mais reste invariable devant un adjectif (quelque habiles qu'ils soient) ou un nombre au sens d'environ (quelque deux cents personnes).\n\nDemi, nu, mi, semi. Placés devant le nom et liés par un trait d'union, ils sont invariables : une demi-heure, nu-pieds, à mi-voix. Après le nom, demi s'accorde en genre seulement (deux heures et demie) et nu s'accorde normalement (pieds nus). À demi devant un adjectif reste invariable.\n\nCouleurs. Un adjectif de couleur simple s'accorde (des robes vertes). Un nom employé comme couleur reste invariable (des yeux marron, des rubans orange), sauf rose, mauve, fauve, écarlate, pourpre et incarnat, qui s'accordent. Une couleur composée reste invariable (des vestes bleu foncé, des écharpes vert pomme).\n\nVingt et cent prennent un s quand ils sont multipliés et terminent le nombre : quatre-vingts, trois cents ; mais quatre-vingt-deux, trois cent dix, trois cent mille. Mille est toujours invariable ; million et milliard sont des noms et s'accordent (deux cents millions).",
    formules:
      "Tout + adjectif féminin à consonne ou h aspiré → toute(s) : toute petite, toutes honteuses\nTout + adjectif à voyelle ou h muet → tout : tout émue, tout heureuses\nMême après un pronom → trait d'union et accord : eux-mêmes, elles-mêmes\nQuel(le)(s) que + être au subjonctif → accord avec le sujet\nQuelque + adjectif ou nombre → invariable\nDemi-, mi-, semi-, nu- devant le nom → invariables\n… et demie → accord en genre seulement\nCouleur = nom (marron, orange, crème, olive) → invariable, sauf rose, mauve, fauve, écarlate, pourpre, incarnat\nCouleur composée (bleu clair, vert bouteille) → invariable\nVingt et cent : s si multipliés ET en fin de nombre ; mille : toujours invariable",
    methode:
      "1. Identifie la nature du mot : devant un nom (déterminant ou adjectif) ou devant un adjectif ou un adverbe (adverbe).\n2. Si c'est un adverbe, il est invariable, sauf « tout » devant un féminin à consonne.\n3. Pour quelque ou quel que, regarde le mot qui suit : un verbe être → quel que ; un nom → quelque(s) ; un adjectif → quelque.\n4. Pour une couleur, demande-toi si le mot est un nom (une orange, un marron) ou s'il est accompagné d'un autre mot.\n5. Pour un nombre, vérifie si vingt ou cent est multiplié et s'il termine le nombre.",
    exemple:
      "Phrase : « Quelles que soient les difficultés, elles sont restées tout attentives et toutes concentrées. »\nQuelles que : devant « soient », accord avec le sujet « les difficultés ».\nTout attentives : adverbe devant un adjectif à voyelle, invariable.\nToutes concentrées : adverbe devant un adjectif féminin à consonne, accord d'oreille.\n\nNombre 280 : deux cent quatre-vingts. Cent est suivi d'un autre nombre (invariable) ; vingt est multiplié et termine le nombre (s).",
    erreur:
      "✗ « Elles sont toutes émues » pour dire « très émues » → ✓ tout émues : devant une voyelle, l'adverbe reste invariable\n✗ « Quelque soient tes raisons » → ✓ quelles que soient tes raisons\n✗ « Une demie-heure » → ✓ une demi-heure ; mais « une heure et demie »\n✗ « Des chaussures marrons » → ✓ des chaussures marron (nom de fruit employé comme couleur)\n✗ « Quatre-vingts-dix » ou « deux cents trois » → ✓ quatre-vingt-dix, deux cent trois\n✗ « Trois cents mille » → ✓ trois cent mille, car mille est un adjectif numéral",
    approfondir:
      "Possible reste invariable après « le plus de », « le moins de » ou « le mieux » quand il se rapporte au pronom impersonnel sous-entendu : faites le moins de fautes possible (qu'il est possible de faire). Il s'accorde quand il qualifie directement le nom : toutes les solutions possibles.\n\nTout autre : variable au sens de « n'importe quel autre » (toute autre proposition sera refusée), invariable au sens de « complètement différent » (c'est une tout autre affaire).\n\nLes rectifications de 1990 autorisent les traits d'union entre tous les éléments d'un nombre (deux-cent-trois), mais elles ne changent pas la règle du s de vingt et cent.\n\nAstuce de vitesse : quand les options ne diffèrent que par un s ou un e, la question teste presque toujours l'opposition adverbe invariable / adjectif variable. Pose-toi d'abord cette question.",
    cards: [
      ["Elles sont (tout) étonnées", "tout : adverbe devant une voyelle, invariable", false],
      ["Elles sont (tout) surprises", "toutes : adverbe devant un féminin commençant par une consonne", false],
      ["Quel que / quelque", "Quel que + être au subjonctif (accord) ; quelque + nom (accord), + adjectif ou nombre (invariable)", false],
      ["Des yeux (marron)", "marron : nom employé comme couleur, invariable", false],
      ["Quatre-vingts / quatre-vingt-trois", "Vingt prend un s s'il est multiplié et termine le nombre", false],
    ],
  },
  questions: [
    Q("B-FR-ACS-001", "fr.accordspe.tout", 3, "Complétez, « tout » ayant ici le sens de « très » : « À la fin du film, les spectatrices étaient ___ émues. »", [
      ["tout", true, "Adverbe (= très) devant un adjectif commençant par une voyelle : invariable."],
      ["toutes", false, "L'accord de l'adverbe ne se fait que devant un féminin commençant par une consonne ou un h aspiré."],
      ["toute", false, "Accord au singulier, alors que le sujet est pluriel, et adverbe ici invariable."],
      ["tous", false, "Accord au masculin pluriel, impossible avec un adjectif féminin."],
    ], "« Tout » signifie ici « très, entièrement » : c'est un adverbe. Devant « émues », qui commence par une voyelle, il reste invariable : tout émues.", "Tout adverbe est invariable, sauf devant un féminin à consonne ou h aspiré.", [
      "« Tout » a-t-il ici le sens de « entièrement » ?", "C'est donc un adverbe.", "Regarde la première lettre de l'adjectif qui suit.",
    ]),
    Q("B-FR-ACS-002", "fr.accordspe.tout", 2, "Complétez : « Après l'averse, les fillettes sont rentrées ___ trempées. »", [
      ["toutes", true, "Adverbe devant un adjectif féminin commençant par une consonne : accord d'oreille."],
      ["tout", false, "L'invariabilité ne vaut que devant une voyelle ou un h muet."],
      ["toute", false, "Accord en genre sans accord en nombre : incohérent."],
      ["tous", false, "Accord au masculin, alors que l'adjectif est féminin."],
    ], "Adverbe au sens de « complètement », mais placé devant un adjectif féminin commençant par une consonne (trempées) : il s'accorde, toutes trempées.", "Tout adverbe s'accorde devant un adjectif féminin à consonne : toutes trempées.", [
      "« Tout » signifie ici « complètement ».", "Quelle est la règle d'exception de l'adverbe « tout » ?", "« Trempées » est féminin et commence par une consonne.",
    ], { a: "formules" }),
    Q("B-FR-ACS-003", "fr.accordspe.quelque", 2, "Complétez : « ___ que soient tes hésitations, inscris-toi avant vendredi. »", [
      ["Quelles", true, "Quel que + être au subjonctif : « quel » s'accorde avec le sujet « tes hésitations »."],
      ["Quelle", false, "Accord au singulier, alors que le sujet est pluriel."],
      ["Quelque", false, "Confusion avec « quelque » en un mot, qui ne s'emploie pas devant le verbe être."],
      ["Quelques", false, "Confusion avec le déterminant « quelques », qui précède un nom."],
    ], "Devant le verbe être au subjonctif, on écrit « quel que » en deux mots, et « quel » s'accorde avec le sujet du verbe (tes hésitations, féminin pluriel) : quelles que soient.", "Quel que + être : accord de « quel » avec le sujet.", [
      "Quel mot suit directement le blanc et « que » ?", "Devant le verbe être, on écrit en deux mots.", "Accorde avec le sujet placé après le verbe.",
    ]),
    Q("B-FR-ACS-004", "fr.accordspe.quelque", 1, "Complétez : « Pour son anniversaire, il a invité ___ collègues du service. »", [
      ["quelques", true, "Déterminant devant un nom pluriel (= plusieurs) : accord."],
      ["quelque", false, "Quelque devant un nom pluriel au sens de « plusieurs » prend un s."],
      ["quels que", false, "Quel que ne s'emploie que devant le verbe être au subjonctif."],
      ["quelle que", false, "Même confusion avec la locution concessive."],
    ], "Devant un nom, « quelque » est un déterminant qui s'accorde : quelques collègues (plusieurs collègues).", "Quelque + nom pluriel : quelques.", [
      "Le mot qui suit est-il un nom, un adjectif ou un verbe ?", "C'est un nom pluriel.", "Le sens est « plusieurs ».",
    ]),
    Q("B-FR-ACS-005", "fr.accordspe.demi", 1, "Complétez : « Nous avons attendu deux heures et ___ sous la pluie. »", [
      ["demie", true, "Après le nom, demi s'accorde en genre (heure est féminin) mais pas en nombre."],
      ["demi", false, "Invariable seulement devant le nom (une demi-heure)."],
      ["demies", false, "Après le nom, demi s'accorde en genre seulement, jamais en nombre."],
      ["demis", false, "Accord au masculin pluriel, doublement fautif."],
    ], "Placé après le nom, « demi » s'accorde en genre avec ce nom, mais reste au singulier : deux heures et demie (= et une demie).", "Nom + et demi : accord en genre seulement.", [
      "« Demi » est-il placé avant ou après le nom ?", "Après le nom, il s'accorde partiellement.", "« Heure » est féminin ; le nombre ne compte pas.",
    ]),
    Q("B-FR-ACS-006", "fr.accordspe.couleur", 2, "Complétez : « Pour l'hiver, elle a acheté des chaussettes ___ . »", [
      ["marron", true, "Nom de fruit employé comme couleur : invariable."],
      ["marrons", false, "Les noms employés comme adjectifs de couleur restent invariables."],
      ["marronnes", false, "Le nom « marron » n'a pas de féminin comme couleur."],
      ["marronne", false, "Forme inexistante pour la couleur."],
    ], "« Marron » est d'abord un nom (le fruit). Employé pour désigner une couleur, il reste invariable : des chaussettes marron, comme des rubans orange.", "Nom employé comme couleur : invariable (sauf rose, mauve, fauve, écarlate, pourpre, incarnat).", [
      "« Marron » est-il d'abord un adjectif ou un nom ?", "C'est le nom d'un fruit.", "Les noms de couleur restent invariables, avec six exceptions.",
    ]),
    Q("B-FR-ACS-007", "fr.accordspe.couleur", 3, "Quel groupe nominal est correctement accordé ?", [
      ["des écharpes vert pomme", true, "Couleur composée de deux mots : invariable."],
      ["des yeux bleus clair", false, "Couleur composée : tout reste invariable, il faut bleu clair."],
      ["des vestes oranges", false, "Orange est un nom employé comme couleur : invariable."],
      ["des cheveux châtain", false, "Châtain est un véritable adjectif : il s'accorde, châtains."],
    ], "Vert pomme est une couleur composée : invariable. Bleu clair aussi (des yeux bleu clair). Orange est un nom : invariable. Châtain est un adjectif de couleur : il s'accorde.", "Couleur composée ou nom de couleur : invariable ; adjectif de couleur simple : accord.", [
      "Classe chaque couleur : adjectif simple, nom ou composé.", "Les composés et les noms restent invariables.", "Châtain est un adjectif, pas un nom.",
    ], { a: "formules", r: true }),
    Q("B-FR-ACS-008", "fr.accordspe.nombre", 1, "Complétez en lettres le nombre 80 : « La facture s'élève à ___ euros. »", [
      ["quatre-vingts", true, "Vingt est multiplié par quatre et termine le nombre : s."],
      ["quatre-vingt", false, "Oubli du s : vingt termine ici le nombre."],
      ["quatres-vingts", false, "Quatre est invariable."],
      ["quatres-vingt", false, "Quatre ne prend jamais de s, et vingt en prend un ici."],
    ], "Vingt prend un s quand il est multiplié (quatre fois vingt) et qu'il n'est suivi d'aucun autre nombre : quatre-vingts euros. Mais quatre-vingt-cinq euros.", "Vingt et cent multipliés et en fin de nombre : s.", [
      "Vingt est-il multiplié ?", "Est-il suivi d'un autre nombre ?", "Aucun nombre ne suit : il prend la marque du pluriel.",
    ]),
    Q("B-FR-ACS-009", "fr.accordspe.nombre", 3, "Comment s'écrit en lettres le nombre 300 400 ?", [
      ["trois cent mille quatre cents", true, "Cent suivi de mille : invariable ; le second cent termine le nombre : s."],
      ["trois cents mille quatre cents", false, "Cent suivi de l'adjectif numéral mille ne prend pas de s."],
      ["trois cent milles quatre cent", false, "Mille est invariable, et le dernier cent termine le nombre."],
      ["trois cents mille quatre cent", false, "Les deux règles sont inversées."],
    ], "Le premier « cent » est suivi de « mille », adjectif numéral : invariable (trois cent mille). Le second « cent » est multiplié et termine le nombre : quatre cents. Mille ne prend jamais de s.", "Cent est invariable devant mille, mais variable devant million ou milliard, qui sont des noms.", [
      "Repère chaque « cent » et ce qui le suit.", "« Mille » est un adjectif numéral, toujours invariable.", "Un cent suivi d'un autre nombre reste invariable.",
    ], { a: "erreur" }),
    Q("B-FR-ACS-010", "fr.accordspe.demi", 2, "Complétez : « Les enfants couraient ___ dans le jardin. »", [
      ["nu-pieds", true, "Nu placé devant le nom, avec trait d'union : invariable."],
      ["nus-pieds", false, "Placé devant le nom, nu reste invariable."],
      ["nu-pied", false, "Le nom « pieds » garde son pluriel."],
      ["nus pieds", false, "Ordre « nu + nom » : trait d'union et invariabilité de nu ; sinon on écrit pieds nus."],
    ], "Devant le nom, « nu » est invariable et joint par un trait d'union : nu-pieds, nu-tête. Après le nom, il s'accorde : pieds nus.", "Nu devant le nom : invariable avec trait d'union ; après : accord.", [
      "« Nu » est-il avant ou après le nom ?", "Avant le nom, il fonctionne comme demi.", "Pense à « une demi-heure ».",
    ]),
    Q("B-FR-ACS-011", "fr.accordspe.meme", 1, "Complétez : « Ces chercheuses ont ___ conçu le protocole qu'elles testent. »", [
      ["elles-mêmes", true, "Même après un pronom personnel : trait d'union et accord en nombre."],
      ["elles-même", false, "Même s'accorde avec le pronom pluriel."],
      ["elle-mêmes", false, "Le pronom aussi doit être au pluriel."],
      ["elles même", false, "Le trait d'union est obligatoire entre le pronom et même."],
    ], "Joint à un pronom personnel, « même » est adjectif : il s'accorde et se lie par un trait d'union, elles-mêmes.", "Pronom + même : trait d'union et accord (eux-mêmes, elles-mêmes).", [
      "« Même » renforce ici un pronom.", "Il s'accorde alors avec ce pronom.", "N'oublie pas le trait d'union.",
    ]),
    Q("B-FR-ACS-012", "fr.accordspe.meme", 2, "Quelle phrase emploie correctement le mot « même » ?", [
      ["Même les plus sceptiques ont fini par applaudir.", true, "Adverbe au sens de « y compris » : invariable."],
      ["Mêmes les plus sceptiques ont fini par applaudir.", false, "Placé devant le déterminant au sens de « y compris », même est adverbe et invariable."],
      ["Ce sont les même arguments qu'hier.", false, "Adjectif d'identité entre le déterminant et le nom : il s'accorde, les mêmes arguments."],
      ["Elles l'ont reconnu elles-même.", false, "Après un pronom pluriel, il faut elles-mêmes."],
    ], "Même est adverbe (invariable) quand il signifie « y compris, aussi » et précède le déterminant ; il est adjectif (variable) entre le déterminant et le nom, ou après un pronom.", "Même adverbe (= y compris) : invariable ; même adjectif : accord.", [
      "Dans chaque phrase, « même » signifie-t-il « y compris » ou « identique » ?", "Au sens de « y compris », il est adverbe.", "Entre « les » et un nom, il est adjectif.",
    ]),
    Q("B-FR-ACS-013", "fr.accordspe.demi", 2, "Complétez : « Les volets sont restés ___ toute la journée. »", [
      ["à demi fermés", true, "À demi est une locution adverbiale invariable ; le participe s'accorde avec « volets »."],
      ["à demis fermés", false, "La locution adverbiale « à demi » est invariable."],
      ["à demie fermés", false, "Aucun nom féminin ne justifie « demie »."],
      ["à demi fermé", false, "Le participe « fermés » s'accorde avec le sujet « les volets »."],
    ], "« À demi » modifie un adjectif ou un participe : c'est un adverbe, invariable. Le participe, lui, s'accorde avec le sujet « les volets » : à demi fermés.", "À demi + adjectif : à demi invariable, adjectif accordé.", [
      "« À demi » modifie quel mot ?", "Un mot qui modifie un adjectif est un adverbe.", "Le participe qui suit s'accorde, lui, avec le sujet.",
    ], { r: true }),
  ],
};
