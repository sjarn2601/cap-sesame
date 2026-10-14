// Français : expressions idiomatiques, locutions et proverbes.
import { maker, type FrPart } from "./_util";

const Q = maker("fr.expressions");

export const EXPRESSIONS: FrPart = {
  skill: { id: "fr.expressions", subjectCode: "FR", domain: "Vocabulaire", name: "Expressions et locutions", synonyms: ["expression", "locution", "idiomatique", "sens figure", "proverbe", "expression figee"] },
  lesson: {
    skillId: "fr.expressions",
    title: "Expressions idiomatiques, locutions et proverbes",
    objectives: ["Donner le sens figuré d'une expression courante", "Compléter une expression figée sans la déformer", "Éviter les contresens fréquents sur certaines expressions"],
    prerequisites: ["fr.sens"],
    regle:
      "Une expression idiomatique (ou locution figée) est un groupe de mots dont le sens global ne se déduit pas du sens de chaque mot. « Tomber des nues » ne veut pas dire tomber du ciel, mais être stupéfait. On ne peut ni changer ses mots ni les réordonner : « tomber des nuages » est une déformation.\n\nLe sens vient souvent d'un usage ancien ou d'un mot disparu. « Avoir maille à partir avec quelqu'un » vient de la maille, petite pièce de monnaie, et de partir, au sens ancien de partager : se disputer pour une somme impossible à partager, d'où avoir un différend. « Être aux abois » vient de la chasse : le cerf aux abois est cerné par les chiens qui aboient, d'où une situation désespérée. « Se mettre martel en tête » vient de martel, marteau : se tourmenter, se faire du souci. « Tenir le haut du pavé » rappelle que le haut de la rue, près des maisons, était plus propre : occuper le premier rang.\n\nExpressions à connaître : faire chou blanc (échouer), ménager la chèvre et le chou (ménager deux camps opposés), avoir voix au chapitre (avoir le droit de donner son avis), battre la campagne (au figuré : divaguer), un coup d'épée dans l'eau (une action inutile), rester lettre morte (ne pas être appliqué), prendre des vessies pour des lanternes (se tromper grossièrement), monter sur ses grands chevaux (s'emporter avec arrogance), à bâtons rompus (de manière décousue), tirer son épingle du jeu (se dégager habilement d'une situation difficile), défrayer la chronique (faire beaucoup parler de soi), mettre la puce à l'oreille (éveiller les soupçons).\n\nContresens fréquents. « Faire long feu » signifie échouer, rater son effet (comme une charge qui brûle trop lentement) ; « ne pas faire long feu » signifie ne pas durer.\n\nProverbes : qui sème le vent récolte la tempête ; il ne faut pas vendre la peau de l'ours avant de l'avoir tué ; pierre qui roule n'amasse pas mousse ; la nuit porte conseil ; qui trop embrasse mal étreint.",
    formules:
      "avoir maille à partir avec quelqu'un = avoir un différend avec lui\nfaire chou blanc = échouer\nménager la chèvre et le chou = ménager deux camps opposés\navoir voix au chapitre = avoir le droit de donner son avis\ntomber des nues = être stupéfait\nêtre aux abois = être dans une situation désespérée\nse mettre martel en tête = se faire du souci\ntenir le haut du pavé = occuper le premier rang\nfaire long feu = échouer ; ne pas faire long feu = ne pas durer\nrester lettre morte = ne pas être appliqué\nun coup d'épée dans l'eau = une action inutile\nprendre des vessies pour des lanternes = se tromper grossièrement",
    methode:
      "1. Ne lis pas l'expression au pied de la lettre : le sens littéral est presque toujours un piège parmi les options.\n2. Cherche le contexte d'emploi : dans quelle situation dit-on cette phrase ?\n3. Pense à l'origine (chasse, monnaie, vie rurale) si tu la connais.\n4. Pour une expression à compléter, refuse les variantes approximatives : la forme est figée.\n5. Vérifie que le sens choisi peut remplacer l'expression dans une phrase.",
    exemple:
      "« Que signifie “avoir voix au chapitre” ? » Le chapitre était l'assemblée des chanoines ou des moines. Y avoir voix, c'était pouvoir y voter. D'où le sens : avoir le droit de donner son avis. Les options « chanter dans une chorale » ou « écrire un livre » jouent sur le sens littéral des mots voix et chapitre : elles sont fausses.\n\n« Complétez : rester lettre ___ . » La forme figée est « lettre morte » : un texte qui n'est pas appliqué est comme sans vie.",
    erreur:
      "✗ « Le projet a fait long feu », compris comme « il a duré longtemps » → ✓ il a échoué\n✗ « Tomber des nuages » → ✓ tomber des nues\n✗ Choisir le sens littéral (« partir en voyage » pour avoir maille à partir) → ✓ chercher le sens figuré",
    approfondir:
      "Beaucoup d'expressions gardent des mots disparus de la langue courante : maille (monnaie), partir (partager), martel (marteau), nues (nuages). Les repérer aide à ne pas tomber dans le piège du sens littéral.\n\nLes fables de La Fontaine ont fourni de nombreuses expressions : la part du lion, tirer les marrons du feu, le pot de terre contre le pot de fer. Connaître la fable donne le sens.\n\nGestion du temps : ces questions se savent ou ne se savent pas. Réponds en quelques secondes, sans t'attarder : le temps gagné servira aux questions de syntaxe.",
    cards: [
      ["Avoir maille à partir avec quelqu'un", "Avoir un différend avec lui", true],
      ["Faire long feu", "Échouer, rater son effet (et non durer longtemps)", true],
      ["Être aux abois", "Être dans une situation désespérée", true],
      ["Faire chou blanc", "Échouer, ne rien obtenir", true],
      ["Avoir voix au chapitre", "Avoir le droit de donner son avis", true],
    ],
  },
  questions: [
    Q("B-FR-EXP-001", "fr.expressions.sens", 3, "Que signifie « avoir maille à partir avec quelqu'un » ?", [
      ["Avoir un différend avec lui", true, "Partir signifiait partager ; la maille était une petite monnaie impossible à partager."],
      ["Partir en voyage avec lui", false, "Lecture littérale du verbe partir, au sens moderne."],
      ["Lui emprunter de l'argent", false, "La maille évoque l'argent, mais l'expression parle de dispute."],
      ["Tricoter avec lui", false, "Lecture littérale du mot maille."],
    ], "La maille était la plus petite pièce de monnaie ; partir signifiait partager. Se disputer une maille, c'est se quereller : avoir un différend avec quelqu'un.", "Avoir maille à partir = avoir un différend.", [
      "Le verbe partir a ici un sens ancien.", "Il signifiait partager.", "Partager une pièce minuscule crée une dispute.",
    ]),
    Q("B-FR-EXP-002", "fr.expressions.sens", 1, "Que signifie « faire chou blanc » ?", [
      ["Échouer, ne rien obtenir", true, "Le chasseur ou le joueur revient bredouille."],
      ["Cuisiner un plat simple", false, "Lecture littérale."],
      ["Avoir très peur", false, "Confusion avec « être blanc comme un linge »."],
      ["Se rendre sans combattre", false, "Confusion avec le drapeau blanc."],
    ], "Faire chou blanc signifie échouer, revenir sans résultat.", "Faire chou blanc = échouer.", [
      "L'expression n'a aucun rapport avec la cuisine.", "Elle s'emploie après une recherche infructueuse.", "Le résultat est nul.",
    ]),
    Q("B-FR-EXP-003", "fr.expressions.forme", 1, "Complétez : « Quand on lui a annoncé la nouvelle, il est tombé des ___ . »", [
      ["nues", true, "Forme figée : tomber des nues, être stupéfait."],
      ["nuages", false, "Déformation moderne de l'expression figée."],
      ["nus", false, "Homophone sans rapport."],
      ["nuits", false, "Mot sans rapport."],
    ], "Les nues sont, en langue ancienne, les nuages. L'expression figée est « tomber des nues » : être extrêmement surpris.", "Tomber des nues = être stupéfait.", [
      "L'expression exprime une grande surprise.", "Le mot est ancien et désigne les nuages.", "La forme est figée : on ne la modernise pas.",
    ]),
    Q("B-FR-EXP-004", "fr.expressions.sens", 2, "Que signifie « ménager la chèvre et le chou » ?", [
      ["Ménager deux camps opposés pour ne froisser personne", true, "Le passeur doit transporter la chèvre sans qu'elle mange le chou."],
      ["Hésiter sans fin entre deux choix", false, "Proche, mais l'expression parle de satisfaire deux intérêts opposés, pas d'indécision."],
      ["Élever des animaux et cultiver un potager", false, "Lecture littérale."],
      ["Faire des économies sur la nourriture", false, "Lecture littérale de ménager."],
    ], "L'expression vient d'une énigme de passeur : transporter une chèvre et un chou sans que l'une mange l'autre. Elle signifie ménager des intérêts contradictoires.", "Ménager la chèvre et le chou = satisfaire deux camps opposés.", [
      "La chèvre mange le chou : leurs intérêts s'opposent.", "Il faut les préserver tous les deux.", "On cherche à ne mécontenter personne.",
    ]),
    Q("B-FR-EXP-005", "fr.expressions.sens", 1, "Que signifie « avoir voix au chapitre » ?", [
      ["Avoir le droit de donner son avis", true, "Le chapitre était une assemblée où l'on votait."],
      ["Chanter dans une chorale", false, "Lecture littérale du mot voix."],
      ["Écrire un livre", false, "Lecture littérale du mot chapitre."],
      ["Parler trop fort", false, "Sans rapport."],
    ], "Le chapitre était l'assemblée des chanoines ou des moines. Y avoir voix, c'était y voter : l'expression signifie avoir le droit de s'exprimer dans une décision.", "Avoir voix au chapitre = avoir son mot à dire.", [
      "Le chapitre est ici une assemblée.", "Avoir voix dans une assemblée, c'est y voter.", "Le sens est d'être consulté.",
    ], { a: "exemple" }),
    Q("B-FR-EXP-006", "fr.expressions.proverbe", 1, "Complétez le proverbe : « Qui sème le vent ___ . »", [
      ["récolte la tempête", true, "Forme exacte du proverbe."],
      ["récolte l'orage", false, "Déformation du proverbe."],
      ["craint la pluie", false, "Invention sans rapport."],
      ["n'amasse pas mousse", false, "Fin d'un autre proverbe : pierre qui roule n'amasse pas mousse."],
    ], "« Qui sème le vent récolte la tempête » : celui qui provoque le désordre en subira des conséquences plus graves.", "Qui sème le vent récolte la tempête.", [
      "Le proverbe oppose une cause légère et une conséquence violente.", "Le second terme est un phénomène plus fort que le vent.", "Le verbe est « récolte ».",
    ]),
    Q("B-FR-EXP-007", "fr.expressions.sens", 2, "Dans « Le malade, brûlant de fièvre, battait la campagne », que signifie « battre la campagne » ?", [
      ["Divaguer, déraisonner", true, "Sens figuré : l'esprit erre sans ordre."],
      ["Parcourir la région en tous sens", false, "Sens propre, qui ne convient pas à un malade alité."],
      ["Frapper le sol avec un bâton", false, "Lecture littérale."],
      ["Remporter une victoire militaire", false, "Confusion avec battre l'ennemi."],
    ], "Au sens propre, battre la campagne, c'est la parcourir pour chercher quelqu'un. Au sens figuré, c'est divaguer : l'esprit vagabonde comme un chasseur dans les champs.", "Battre la campagne (figuré) = divaguer.", [
      "Le contexte parle d'un malade fiévreux.", "Il ne peut pas parcourir la région.", "C'est son esprit qui erre.",
    ]),
    Q("B-FR-EXP-008", "fr.expressions.contresens", 3, "Que signifie « faire long feu » dans « Le projet de réforme a fait long feu » ?", [
      ["Échouer, ne pas atteindre son but", true, "Une charge qui brûle trop lentement rate son tir."],
      ["Durer longtemps", false, "Contresens très fréquent : c'est « ne pas faire long feu » qui parle de durée (ne pas durer)."],
      ["S'enflammer rapidement", false, "Lecture littérale du mot feu."],
      ["Coûter très cher", false, "Sans rapport."],
    ], "Une arme fait long feu quand la poudre brûle trop lentement et que le coup ne part pas. D'où le sens : échouer, rater son effet. « Ne pas faire long feu » signifie, lui, ne pas durer.", "Faire long feu = échouer ; ne pas faire long feu = ne pas durer.", [
      "L'expression vient des armes à feu.", "Que se passe-t-il si la poudre brûle trop lentement ?", "Le coup ne part pas.",
    ], { a: "erreur", r: true }),
    Q("B-FR-EXP-009", "fr.expressions.forme", 2, "Complétez : « Cette réforme, jamais appliquée, est restée lettre ___ . »", [
      ["morte", true, "Rester lettre morte : ne pas être appliqué."],
      ["close", false, "Forme inexistante : l'expression figée n'admet pas d'autre adjectif que « morte »."],
      ["ouverte", false, "Une lettre ouverte est un texte public, sans rapport."],
      ["blanche", false, "Confusion avec « chou blanc » ou « carte blanche »."],
    ], "Un texte resté lettre morte est sans effet, comme sans vie : il n'est pas appliqué.", "Rester lettre morte = ne pas être appliqué.", [
      "Le texte n'a eu aucun effet.", "Il est comme sans vie.", "L'adjectif évoque la fin de la vie.",
    ]),
    Q("B-FR-EXP-010", "fr.expressions.sens", 2, "Que signifie « tenir le haut du pavé » ?", [
      ["Occuper le premier rang, dominer", true, "Le haut de la rue, plus propre, était réservé aux personnes importantes."],
      ["Marcher au milieu de la chaussée", false, "Lecture littérale, et inexacte."],
      ["Être sans domicile", false, "Confusion avec « être sur le pavé »."],
      ["Manifester dans la rue", false, "Confusion avec « battre le pavé »."],
    ], "Dans les rues anciennes, le haut du pavé, près des murs, était à l'abri des eaux sales du caniveau central. On le laissait aux personnes de rang élevé.", "Tenir le haut du pavé = occuper le premier rang.", [
      "Le haut du pavé était la meilleure place dans la rue.", "Qui l'occupait ?", "Les personnes de rang élevé.",
    ]),
    Q("B-FR-EXP-011", "fr.expressions.sens", 2, "Que signifie « se mettre martel en tête » ?", [
      ["Se faire du souci, se tourmenter", true, "Martel signifie marteau : l'inquiétude frappe comme un marteau."],
      ["S'obstiner dans une idée", false, "Confusion avec « avoir une idée en tête »."],
      ["Avoir une migraine", false, "Lecture littérale."],
      ["Se battre violemment", false, "Confusion avec le sens de marteau comme arme."],
    ], "Martel est l'ancienne forme de marteau. Se mettre martel en tête, c'est avoir une inquiétude qui cogne sans cesse : se tourmenter.", "Se mettre martel en tête = s'inquiéter.", [
      "Martel est la forme ancienne d'un outil.", "C'est le marteau.", "L'idée frappe sans cesse : c'est une inquiétude.",
    ], { r: true }),
    Q("B-FR-EXP-012", "fr.expressions.sens", 1, "Que signifie « un coup d'épée dans l'eau » ?", [
      ["Une action inutile, sans effet", true, "Frapper l'eau ne laisse aucune trace."],
      ["Une attaque surprise", false, "Sans rapport avec le sens figuré."],
      ["Un geste élégant", false, "Sans rapport."],
      ["Une trahison", false, "Confusion avec « coup de poignard dans le dos »."],
    ], "Un coup d'épée dans l'eau ne produit aucun effet : l'expression désigne une démarche vaine.", "Coup d'épée dans l'eau = action inutile.", [
      "Que laisse une épée qui frappe l'eau ?", "Aucune trace.", "L'action est donc sans effet.",
    ]),
    Q("B-FR-EXP-013", "fr.expressions.sens", 2, "Quelle expression signifie « être dans une situation désespérée » ?", [
      ["être aux abois", true, "Image du cerf cerné par les chiens qui aboient."],
      ["être aux anges", false, "Signifie être ravi, très heureux."],
      ["être sur le qui-vive", false, "Signifie être sur ses gardes."],
      ["être dans ses petits souliers", false, "Signifie être mal à l'aise, embarrassé."],
    ], "Être aux abois vient de la chasse à courre : le cerf est cerné par les chiens qui aboient. Il est dans une situation désespérée.", "Être aux abois = être acculé.", [
      "L'expression vient de la chasse.", "Le gibier est encerclé par la meute.", "Les chiens aboient.",
    ], { r: true }),
    Q("B-FR-EXP-014", "fr.expressions.sens", 2, "Que signifie « prendre des vessies pour des lanternes » ?", [
      ["Se tromper grossièrement", true, "Confondre une vessie gonflée et une lanterne : erreur grossière."],
      ["Éclairer un lieu sombre", false, "Lecture littérale de lanterne."],
      ["Faire des promesses intenables", false, "Confusion avec « promettre monts et merveilles »."],
      ["Gaspiller son argent", false, "Sans rapport."],
    ], "Une vessie gonflée et séchée pouvait ressembler à une lanterne, mais n'éclaire pas. Les confondre, c'est se tromper lourdement.", "Prendre des vessies pour des lanternes = se tromper grossièrement.", [
      "Deux objets vaguement semblables sont confondus.", "L'un éclaire, l'autre non.", "C'est une erreur grossière.",
    ]),
  ],
};
