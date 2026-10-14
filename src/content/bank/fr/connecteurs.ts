// Français : connecteurs logiques et rapports logiques.
import { maker, type FrPart } from "./_util";

const Q = maker("fr.connecteurs");

export const CONNECTEURS: FrPart = {
  skill: { id: "fr.connecteurs", subjectCode: "FR", domain: "Expression", name: "Connecteurs et rapports logiques", synonyms: ["connecteur logique", "cause", "consequence", "concession", "opposition", "but", "condition", "mots de liaison"] },
  lesson: {
    skillId: "fr.connecteurs",
    title: "Les connecteurs logiques : cause, conséquence, concession, opposition, but",
    objectives: ["Identifier le rapport logique entre deux propositions", "Choisir le connecteur adapté au sens et à la construction", "Distinguer concession et opposition"],
    prerequisites: ["fr.modes"],
    regle:
      "Un connecteur logique indique la relation entre deux idées. Pour le choisir, il faut d'abord nommer cette relation, puis vérifier la construction (le mode, ou un nom après une préposition).\n\nLa cause répond à « pourquoi ? » : car, parce que, puisque (cause connue de l'interlocuteur), comme (en tête de phrase), étant donné que, en effet (qui introduit une explication) ; avec un nom : à cause de (cause négative), grâce à (cause positive), faute de (manque).\n\nLa conséquence indique le résultat : donc, ainsi, c'est pourquoi, par conséquent, si bien que, de sorte que (+ indicatif), si… que, tant… que, au point que.\n\nLa concession admet un fait mais affirme qu'il n'empêche pas l'autre : bien que, quoique (+ subjonctif), même si (+ indicatif), pourtant, cependant, néanmoins, toutefois, certes… mais, malgré (+ nom). C'est une cause qui ne produit pas l'effet attendu : il pleut, pourtant il sort.\n\nL'opposition met deux faits en contraste sans lien de cause : mais, alors que, tandis que, en revanche, au contraire, à l'inverse. Il aime la mer, alors que sa sœur préfère la montagne.\n\nLe but indique l'objectif visé : pour, afin de (+ infinitif), pour que, afin que (+ subjonctif), de peur que, de crainte que (but à éviter, + subjonctif).\n\nLa condition : si (+ indicatif), à condition que, pourvu que, à moins que (+ subjonctif), au cas où (+ conditionnel), en cas de (+ nom).\n\nL'addition : de plus, en outre, par ailleurs, d'ailleurs. L'illustration : par exemple, ainsi, notamment.\n\nAttention aux constructions : afin de et pour se construisent avec un infinitif quand le sujet est le même ; afin que et pour que, avec une proposition au subjonctif quand les sujets diffèrent.",
    formules:
      "Cause : car, parce que, puisque, comme, en effet, grâce à, à cause de, faute de\nConséquence : donc, ainsi, c'est pourquoi, par conséquent, si bien que, si… que, tant… que\nConcession : bien que, quoique (+ subj.), même si, pourtant, cependant, néanmoins, toutefois, certes… mais, malgré\nOpposition : mais, alors que, tandis que, en revanche, au contraire, à l'inverse\nBut : pour, afin de (+ inf.), pour que, afin que, de peur que (+ subj.)\nCondition : si (+ ind.), à condition que, pourvu que, à moins que (+ subj.), au cas où (+ cond.)",
    methode:
      "1. Lis les deux propositions sans le connecteur.\n2. Pose la question : la seconde explique-t-elle la première (cause), en découle-t-elle (conséquence), la contredit-elle malgré un lien attendu (concession), ou s'y oppose-t-elle simplement (opposition) ?\n3. Choisis le connecteur de ce rapport.\n4. Vérifie la construction : nom, infinitif, indicatif, subjonctif ou conditionnel.\n5. Relis la phrase complète.",
    exemple:
      "« Il a beaucoup révisé, ___ il a échoué. » On attendait la réussite : le résultat contredit une cause. C'est une concession. Connecteurs possibles : pourtant, cependant, néanmoins. Pas « donc » (conséquence), ni « car » (cause).\n\n« La rivière a débordé, ___ il a plu toute la semaine. » La seconde proposition explique la première : cause. Connecteur : car (ou parce que).",
    erreur:
      "✗ Confondre concession et opposition → ✓ la concession suppose un lien attendu qui ne se réalise pas ; l'opposition compare deux faits\n✗ « Afin qu'il réussisse » quand le sujet est le même → ✓ afin de réussir\n✗ « Au cas où il pleut » → ✓ au cas où il pleuvrait (conditionnel)\n✗ « Grâce à la tempête, le match est annulé » → ✓ à cause de la tempête (grâce à marque une cause positive)\n✗ « Puisque » pour une cause inconnue de l'interlocuteur → ✓ parce que",
    approfondir:
      "« Par contre » est admis par l'Académie, mais elle recommande « en revanche » dans un style soutenu. Ce n'est pas une faute, mais au concours, entre les deux, privilégie en revanche.\n\nCertains connecteurs changent de sens selon le contexte : ainsi peut introduire une conséquence (il a triché, ainsi il a été exclu) ou un exemple (certains métaux, ainsi le fer, rouillent). Tandis que exprime soit la simultanéité (il lit tandis qu'elle dort), soit l'opposition. Le concours évite ces ambiguïtés ; si une question les contient, lis bien le contexte.\n\nCe chapitre sert aussi en analyse documentaire : repérer les connecteurs d'un texte permet d'en dégager rapidement la thèse (souvent après « mais », « pourtant », « en réalité »).",
    cards: [
      ["Concession", "Un fait n'empêche pas l'autre : bien que, pourtant, néanmoins", true],
      ["Opposition", "Deux faits en contraste : alors que, en revanche, au contraire", true],
      ["Au cas où + ?", "Conditionnel : au cas où il pleuvrait", false],
      ["Afin de / afin que", "Afin de + infinitif (même sujet) ; afin que + subjonctif (sujets différents)", false],
    ],
  },
  questions: [
    Q("B-FR-CON-001", "fr.connecteurs.rapport", 1, "Quel rapport logique exprime la phrase « Il a échoué faute de préparation » ?", [
      ["la cause", true, "Faute de introduit la raison de l'échec (un manque)."],
      ["la conséquence", false, "La préparation manquante n'est pas un résultat mais une raison."],
      ["le but", false, "Aucun objectif n'est exprimé."],
      ["la concession", false, "Aucune opposition à un résultat attendu."],
    ], "Faute de + nom exprime une cause : le manque de quelque chose explique le fait.", "Faute de, grâce à, à cause de : cause.", [
      "Pourquoi a-t-il échoué ?", "Le groupe introduit par « faute de » répond à cette question.", "Il donne la raison.",
    ]),
    Q("B-FR-CON-002", "fr.connecteurs.choix", 1, "Complétez : « Les routes étaient verglacées, ___ le match a été reporté. »", [
      ["si bien que", true, "Conséquence suivie de l'indicatif."],
      ["bien que", false, "Concession, qui exigerait de plus le subjonctif."],
      ["alors que", false, "Opposition : le report n'est pas opposé au verglas, il en découle."],
      ["afin que", false, "But, qui exigerait le subjonctif."],
    ], "Le report du match découle du verglas : c'est une conséquence. Si bien que introduit une conséquence et se construit avec l'indicatif.", "Si bien que : conséquence + indicatif.", [
      "Le report est-il la cause ou le résultat du verglas ?", "C'est le résultat.", "Cherche le connecteur de conséquence.",
    ]),
    Q("B-FR-CON-003", "fr.connecteurs.choix", 1, "Complétez : « ___ il ait beaucoup révisé, il a raté son oral. »", [
      ["Bien qu'", true, "Concession + subjonctif (ait)."],
      ["Parce qu'", false, "Cause, avec l'indicatif ; et le sens est contradictoire."],
      ["Puisqu'", false, "Cause connue, avec l'indicatif."],
      ["Dès qu'", false, "Temps, avec l'indicatif."],
    ], "Les révisions auraient dû mener à la réussite : c'est une concession. Le subjonctif « ait » confirme : bien que.", "Bien que : concession + subjonctif.", [
      "Le résultat contredit-il ce qu'on attendait ?", "Oui : c'est une concession.", "Le verbe est au subjonctif.",
    ]),
    Q("B-FR-CON-004", "fr.connecteurs.classement", 1, "Lequel de ces connecteurs exprime la concession ?", [
      ["néanmoins", true, "Néanmoins signifie « malgré cela »."],
      ["en effet", false, "Introduit une explication (cause)."],
      ["par conséquent", false, "Introduit une conséquence."],
      ["afin de", false, "Introduit un but."],
    ], "Néanmoins, pourtant, cependant, toutefois marquent la concession : un fait est admis mais n'empêche pas l'autre.", "Néanmoins, pourtant, cependant, toutefois : concession.", [
      "Remplace chaque connecteur par « malgré cela ».", "Lequel garde le sens ?", "C'est un adverbe en -moins.",
    ]),
    Q("B-FR-CON-005", "fr.connecteurs.rapport", 2, "Quel rapport logique exprime « Je te le répète de peur que tu ne l'oublies » ?", [
      ["le but", true, "De peur que exprime un but à éviter."],
      ["la cause", false, "La peur semble une cause, mais la locution vise un résultat à empêcher."],
      ["la conséquence", false, "L'oubli n'est pas un résultat obtenu."],
      ["la condition", false, "Aucune condition n'est posée."],
    ], "De peur que et de crainte que expriment un but négatif : on agit pour éviter quelque chose. Le « ne » qui suit est un ne explétif, sans valeur négative.", "De peur que : but à éviter + subjonctif.", [
      "Pourquoi répète-t-on ? Pour obtenir ou éviter quelque chose ?", "Pour éviter l'oubli.", "Éviter un résultat, c'est encore viser un but.",
    ]),
    Q("B-FR-CON-006", "fr.connecteurs.choix", 2, "Complétez : « Le premier candidat est très expérimenté ; le second, ___ , apporte un regard neuf. »", [
      ["en revanche", true, "Opposition entre deux profils."],
      ["en effet", false, "Introduirait une explication."],
      ["donc", false, "Introduirait une conséquence."],
      ["car", false, "Introduirait une cause."],
    ], "Les deux candidats sont mis en contraste : c'est une opposition. En revanche (ou au contraire, à l'inverse) convient.", "En revanche : opposition.", [
      "Les deux candidats ont-ils des profils semblables ?", "Ils sont mis en contraste.", "Cherche le connecteur d'opposition.",
    ]),
    Q("B-FR-CON-007", "fr.connecteurs.choix", 1, "Complétez : « ___ tu connais déjà la réponse, pourquoi me la demandes-tu ? »", [
      ["Puisque", true, "Cause connue des deux interlocuteurs, avec l'indicatif."],
      ["Pour que", false, "But, avec le subjonctif."],
      ["Afin que", false, "But, avec le subjonctif."],
      ["Bien que", false, "Concession, avec le subjonctif."],
    ], "Puisque introduit une cause présentée comme évidente pour l'interlocuteur. Le verbe à l'indicatif (connais) élimine pour que, afin que et bien que.", "Puisque : cause connue + indicatif.", [
      "Le verbe « connais » est-il au subjonctif ?", "Non, à l'indicatif.", "Le fait est connu des deux personnes.",
    ]),
    Q("B-FR-CON-008", "fr.connecteurs.rapport", 2, "Dans « Certes, ce film est long ; il reste pourtant passionnant », quel est le mouvement du raisonnement ?", [
      ["Une concession : on admet un point, puis on le dépasse", true, "Certes… pourtant est la structure type de la concession."],
      ["Une cause suivie de sa conséquence", false, "La longueur ne cause pas l'intérêt du film."],
      ["Une hypothèse suivie de sa condition", false, "Aucune hypothèse n'est formulée."],
      ["Une comparaison entre deux films", false, "Il n'est question que d'un seul film."],
    ], "Certes introduit l'argument admis (le film est long), pourtant le dépasse (il reste passionnant). C'est le mouvement de la concession.", "Certes… mais / pourtant : concession.", [
      "Que fait l'auteur avec « certes » ?", "Il admet un défaut.", "Puis il affirme que ce défaut n'empêche pas l'intérêt.",
    ]),
    Q("B-FR-CON-009", "fr.connecteurs.rapport", 2, "Quelle phrase exprime une conséquence ?", [
      ["Il a tant plu que la rivière a débordé.", true, "Tant… que : intensité et conséquence."],
      ["Il a plu, mais la rivière n'a pas débordé.", false, "Opposition."],
      ["La rivière a débordé parce qu'il a plu.", false, "Cause."],
      ["Bien qu'il ait plu, la rivière n'a pas débordé.", false, "Concession."],
    ], "Tant… que, si… que, tellement… que expriment une conséquence liée à une intensité.", "Si… que, tant… que : conséquence.", [
      "Classe chaque phrase par son connecteur.", "Parce que : cause ; bien que : concession.", "Tant… que introduit un résultat.",
    ]),
    Q("B-FR-CON-010", "fr.connecteurs.choix", 3, "Complétez : « Prends un parapluie ___ il pleuvrait cet après-midi. »", [
      ["au cas où", true, "Au cas où se construit avec le conditionnel."],
      ["à condition qu'", false, "À condition que exige le subjonctif."],
      ["s'", false, "Si de condition n'admet pas le conditionnel."],
      ["bien qu'", false, "Concession, avec le subjonctif, et sens inadapté."],
    ], "Le verbe est au conditionnel (pleuvrait). Seule la locution au cas où se construit avec le conditionnel. Si et à condition que sont exclus par le mode.", "Au cas où + conditionnel.", [
      "À quel mode est « pleuvrait » ?", "Quelle locution de condition accepte ce mode ?", "Si n'est jamais suivi du conditionnel.",
    ], { a: "erreur", r: true }),
    Q("B-FR-CON-011", "fr.connecteurs.classement", 1, "Quel connecteur peut remplacer « toutefois » sans changer le sens ?", [
      ["cependant", true, "Les deux expriment la concession."],
      ["donc", false, "Conséquence."],
      ["en effet", false, "Explication."],
      ["ainsi", false, "Conséquence ou exemple."],
    ], "Toutefois, cependant, néanmoins et pourtant sont des connecteurs de concession interchangeables dans la plupart des contextes.", "Toutefois = cependant = néanmoins.", [
      "Quel rapport exprime toutefois ?", "C'est la concession.", "Cherche un autre connecteur de concession.",
    ]),
    Q("B-FR-CON-012", "fr.connecteurs.rapport", 2, "Quel rapport logique exprime « Il dépense sans compter, alors que sa sœur économise chaque euro » ?", [
      ["l'opposition", true, "Alors que met en contraste deux comportements."],
      ["la cause", false, "Le comportement de la sœur n'explique pas celui du frère."],
      ["la conséquence", false, "Aucun fait ne découle de l'autre."],
      ["le but", false, "Aucun objectif n'est exprimé."],
    ], "Alors que compare ici deux attitudes contraires sans lien de cause : c'est une opposition.", "Alors que (contraste) : opposition.", [
      "Les deux faits sont-ils liés par une cause ?", "Non, ils sont simplement comparés.", "Deux attitudes contraires : opposition.",
    ]),
    Q("B-FR-CON-013", "fr.connecteurs.choix", 2, "Complétez : « Elle a travaillé tout l'été ___ financer son voyage en Asie. »", [
      ["afin de", true, "But, suivi d'un infinitif car le sujet est le même."],
      ["afin qu'", false, "Afin que exige un verbe conjugué au subjonctif."],
      ["de sorte", false, "Locution incomplète : de sorte que + proposition."],
      ["à cause de", false, "Cause, alors que la phrase exprime un objectif."],
    ], "Le voyage est l'objectif : c'est un but. Comme le sujet de financer est le même que celui de travailler, on emploie afin de + infinitif.", "Même sujet : afin de + infinitif.", [
      "Le voyage est-il une cause ou un objectif ?", "C'est un objectif.", "Le verbe qui suit est à l'infinitif.",
    ], { r: true }),
    Q("B-FR-CON-014", "fr.connecteurs.classement", 2, "Quel connecteur introduit une explication ou une justification de ce qui précède ?", [
      ["en effet", true, "En effet introduit la preuve ou la raison de l'affirmation précédente."],
      ["en revanche", false, "Opposition."],
      ["pourtant", false, "Concession."],
      ["par conséquent", false, "Conséquence."],
    ], "« Le projet est fragile. En effet, son financement n'est pas assuré. » En effet introduit une justification.", "En effet : explication, justification.", [
      "Quel connecteur répond à « pourquoi ? » ?", "Il confirme ce qui vient d'être dit.", "Il est formé avec le mot « effet ».",
    ]),
  ],
};
