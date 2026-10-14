// Français : choix du mode et concordance des temps.
import { maker, type FrPart } from "./_util";

const Q = maker("fr.modes");

export const MODES: FrPart = {
  skill: { id: "fr.modes", subjectCode: "FR", domain: "Conjugaison", name: "Choix du mode et concordance des temps", synonyms: ["mode", "subjonctif", "indicatif", "apres que", "bien que", "avant que", "concordance des temps", "systeme hypothetique"] },
  lesson: {
    skillId: "fr.modes",
    title: "Indicatif ou subjonctif ? Le mode après les conjonctions et la concordance des temps",
    objectives: ["Choisir le mode imposé par une conjonction ou un verbe", "Construire une phrase hypothétique correcte", "Appliquer la concordance des temps après un verbe au passé"],
    prerequisites: ["fr.conj"],
    regle:
      "Le principe : l'indicatif présente un fait comme réel ; le subjonctif présente une action envisagée, voulue, crainte ou admise sans être posée comme réelle.\n\nSubjonctif après les conjonctions de concession (bien que, quoique, encore que), de but (pour que, afin que, de peur que, de crainte que), de condition (à condition que, pourvu que, à moins que) et de temps antérieur (avant que, jusqu'à ce que, en attendant que), ainsi qu'après sans que.\n\nIndicatif après les conjonctions de temps qui posent un fait accompli ou simultané : après que, dès que, lorsque, pendant que, depuis que. « Après que » se construit avec l'indicatif, car l'action est réalisée : après qu'il est parti. C'est la faute la plus testée. Indicatif aussi après parce que, puisque, alors que, tandis que, si bien que.\n\nAprès un verbe : subjonctif après les verbes de volonté, d'ordre, de souhait, de crainte, de doute et de sentiment (vouloir que, souhaiter que, craindre que, douter que, être content que), après il faut que, il est possible que, il semble que. Indicatif après les verbes de certitude, de déclaration et d'opinion à la forme affirmative (savoir que, dire que, penser que, croire que, être sûr que, il me semble que, il est probable que) et après espérer que. À la forme négative ou interrogative, l'opinion passe au subjonctif : je ne pense pas qu'il ait raison.\n\nSystème hypothétique : si + présent → futur ; si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé. Jamais de futur ni de conditionnel après « si » de condition.\n\nConcordance des temps : quand le verbe principal est au passé, la subordonnée à l'indicatif se met à l'imparfait (simultanéité), au plus-que-parfait (antériorité) ou au conditionnel présent, qui sert de futur dans le passé (postériorité) : il a dit qu'il viendrait.",
    formules:
      "Bien que, quoique, pour que, afin que, avant que, sans que, à moins que, pourvu que, jusqu'à ce que → subjonctif\nAprès que, dès que, lorsque, pendant que, parce que, puisque, alors que → indicatif\nIl faut que, vouloir que, douter que, craindre que, il semble que → subjonctif\nEspérer que, penser que, il me semble que, il est probable que → indicatif\nNe pas penser que, ne pas croire que → subjonctif\nSi + présent → futur ; si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé\nPrincipale au passé : simultanéité → imparfait ; antériorité → plus-que-parfait ; postériorité → conditionnel",
    methode:
      "1. Repère le mot déclencheur : conjonction ou verbe de la principale.\n2. Demande-toi si le fait est posé comme réel (indicatif) ou seulement envisagé (subjonctif).\n3. Pour « si », regarde le temps du verbe qui suit et déduis le temps de la principale.\n4. Si la principale est au passé, déplace les temps : présent → imparfait, futur → conditionnel.\n5. Vérifie la forme : beaucoup de verbes ont la même forme à l'indicatif et au subjonctif (il chante) ; les questions utilisent donc des verbes comme être, avoir, faire, pouvoir, savoir, venir.",
    exemple:
      "« Après que le jury (rendre) son verdict, la salle se vida. » Après que pose un fait accompli : indicatif. Le fait est antérieur à un passé simple : passé antérieur. Réponse : après que le jury eut rendu son verdict (et surtout pas « ait rendu », qui est un subjonctif). Au présent, on écrira de même : après que le jury a rendu son verdict, la salle se vide.\n\n« Elle m'a promis qu'elle (venir) le lendemain. » Principale au passé, action postérieure : conditionnel présent, futur dans le passé. Réponse : qu'elle viendrait.",
    erreur:
      "✗ « Après qu'il soit parti » → ✓ après qu'il est parti (ou était parti) : indicatif\n✗ « Si j'aurais su » → ✓ si j'avais su : jamais de conditionnel après si de condition\n✗ « Bien qu'il est malade » → ✓ bien qu'il soit malade\n✗ « J'espère qu'il vienne » → ✓ j'espère qu'il viendra\n✗ « Il a dit qu'il viendra demain » dans un récit au passé → ✓ qu'il viendrait le lendemain",
    approfondir:
      "De sorte que, de façon que, de manière que changent de mode selon le sens : conséquence réelle, indicatif (il a parlé fort, de sorte que tout le monde l'a entendu) ; but visé, subjonctif (parle fort, de sorte que tout le monde t'entende).\n\nLe superlatif et les expressions comme « le seul qui », « le premier qui » sont souvent suivis du subjonctif (c'est le meilleur film que j'aie vu), mais l'indicatif reste possible pour un fait constaté : ces cas ne font pas de bonnes questions de concours.\n\nAstuce de vitesse : quand la phrase utilise un verbe dont les deux modes se ressemblent à l'oral, le concours propose soit/est, ait/a, fasse/fait, puisse/peut, sache/sait, vienne/vient. Repère la paire, puis le déclencheur : la réponse tombe en dix secondes.",
    cards: [
      ["Après que + ?", "Indicatif : après qu'il est parti", false],
      ["Avant que + ?", "Subjonctif : avant qu'il parte", false],
      ["Espérer que + ?", "Indicatif (souvent futur) : j'espère qu'il viendra", false],
      ["Si + imparfait → ?", "Conditionnel présent : si j'avais le temps, je lirais", false],
      ["Il a dit qu'il (venir) le lendemain", "viendrait : le conditionnel sert de futur dans le passé", false],
    ],
  },
  questions: [
    Q("B-FR-MOD-001", "fr.modes.conjonction", 2, "Complétez : « Après que tu ___ ton repas, tu pourras sortir jouer. »", [
      ["auras terminé", true, "Après que + indicatif ; fait antérieur à un futur : futur antérieur."],
      ["aies terminé", false, "Subjonctif fautif : après que exprime un fait accompli et se construit avec l'indicatif."],
      ["aurais terminé", false, "Conditionnel : aucune hypothèse n'est exprimée."],
      ["avais terminé", false, "Plus-que-parfait : il marque l'antériorité par rapport à un passé, pas à un futur."],
    ], "« Après que » introduit un fait présenté comme accompli : indicatif. L'action est antérieure à « tu pourras » (futur) : on emploie le futur antérieur, tu auras terminé.", "Après que + indicatif.", [
      "Quel mode suit « après que » ?", "L'action de la subordonnée a lieu avant celle de la principale.", "La principale est au futur : quel temps marque l'antériorité ?",
    ]),
    Q("B-FR-MOD-002", "fr.modes.conjonction", 1, "Complétez : « Rentrons vite avant qu'il ___ . » (pleuvoir)", [
      ["pleuve", true, "Avant que se construit avec le subjonctif."],
      ["pleut", false, "Indicatif présent : l'action n'est pas encore réalisée."],
      ["pleuvra", false, "Futur de l'indicatif : fautif après avant que."],
      ["pleuvrait", false, "Conditionnel : fautif après avant que."],
    ], "« Avant que » présente une action qui n'a pas encore eu lieu : subjonctif, qu'il pleuve.", "Avant que + subjonctif (et après que + indicatif).", [
      "L'action de pleuvoir a-t-elle déjà eu lieu ?", "Une action seulement envisagée appelle quel mode ?", "Avant que est l'inverse d'après que pour le mode.",
    ]),
    Q("B-FR-MOD-003", "fr.modes.verbe", 2, "Complétez : « J'espère que tu ___ ton train demain matin. » (prendre)", [
      ["prendras", true, "Espérer que, à la forme affirmative, se construit avec l'indicatif."],
      ["prennes", false, "Subjonctif : confusion avec souhaiter que."],
      ["prendrais", false, "Conditionnel : la principale est au présent et aucune condition n'est exprimée."],
      ["prisses", false, "Subjonctif imparfait, fautif ici."],
    ], "Contrairement à souhaiter que, espérer que est suivi de l'indicatif : j'espère que tu prendras ton train.", "Espérer que + indicatif ; souhaiter que + subjonctif.", [
      "Quel verbe introduit la subordonnée ?", "Espérer et souhaiter ont-ils la même construction ?", "Espérer présente l'action comme attendue : indicatif.",
    ], { a: "formules" }),
    Q("B-FR-MOD-004", "fr.modes.conjonction", 1, "Complétez : « Il a quitté la maison sans que ses parents le ___ . » (savoir)", [
      ["sachent", true, "Sans que impose le subjonctif."],
      ["savent", false, "Indicatif : fautif après sans que."],
      ["sauront", false, "Futur de l'indicatif : fautif après sans que."],
      ["sachant", false, "Participe présent : il faut un verbe conjugué."],
    ], "« Sans que » présente un fait qui ne se produit pas : subjonctif. Savoir fait au subjonctif qu'ils sachent.", "Sans que + subjonctif.", [
      "Quelle conjonction introduit la subordonnée ?", "Le fait (que les parents sachent) est-il réel ?", "Pense au subjonctif irrégulier de savoir.",
    ]),
    Q("B-FR-MOD-005", "fr.modes.conjonction", 1, "Complétez : « Quoiqu'elle ___ épuisée, elle a terminé la course. » (être)", [
      ["soit", true, "Quoique, conjonction de concession, impose le subjonctif."],
      ["est", false, "Indicatif : fautif après quoique."],
      ["était", false, "Imparfait de l'indicatif : fautif après quoique."],
      ["serait", false, "Conditionnel : fautif après quoique."],
    ], "Quoique et bien que expriment la concession et se construisent avec le subjonctif : quoiqu'elle soit épuisée.", "Quoique + subjonctif.", [
      "Quoique exprime une opposition admise : la concession.", "Les conjonctions de concession appellent quel mode ?", "Le subjonctif de être est irrégulier.",
    ]),
    Q("B-FR-MOD-006", "fr.modes.concordance", 3, "Complétez : « Ce jour-là, Paul nous assura qu'il ___ le lendemain. » (revenir)", [
      ["reviendrait", true, "Principale au passé, action postérieure : conditionnel présent, futur dans le passé."],
      ["reviendra", false, "Le futur ne convient pas avec une principale au passé et « le lendemain »."],
      ["revienne", false, "Subjonctif : assurer que se construit avec l'indicatif."],
      ["reviendrais", false, "Terminaison de la 1re ou 2e personne : le sujet est « il »."],
    ], "Assurer que se construit avec l'indicatif. Comme la principale est au passé simple et que l'action est postérieure, on emploie le conditionnel présent à valeur de futur dans le passé : il reviendrait.", "Futur dans le passé : conditionnel présent.", [
      "À quel temps est le verbe principal ?", "L'action de revenir est-elle antérieure ou postérieure ?", "Quel temps sert de futur dans un récit au passé ?",
    ], { a: "exemple" }),
    Q("B-FR-MOD-007", "fr.modes.verbe", 2, "Complétez : « Je ne pense pas qu'il ___ raison sur ce point. » (avoir)", [
      ["ait", true, "Penser à la forme négative : subjonctif."],
      ["a", false, "Indicatif : correct après « je pense que », mais pas à la forme négative."],
      ["ai", false, "Forme de la 1re personne de l'indicatif."],
      ["aie", false, "Forme de la 1re personne du subjonctif : le sujet est « il »."],
    ], "« Je pense qu'il a raison » (affirmatif, indicatif) devient « je ne pense pas qu'il ait raison » (négatif, subjonctif) : le fait n'est plus présenté comme réel.", "Penser, croire : indicatif à l'affirmatif, subjonctif au négatif.", [
      "Le verbe principal est à la forme négative.", "Que devient le mode après un verbe d'opinion nié ?", "Choisis la bonne personne du subjonctif.",
    ]),
    Q("B-FR-MOD-008", "fr.modes.verbe", 3, "Complétez : « Il me semble que ce projet ___ déjà bien avancé. » (être)", [
      ["est", true, "Il me semble que, à la forme affirmative, est suivi de l'indicatif."],
      ["soit", false, "Confusion avec il semble que (sans pronom), qui se construit d'ordinaire avec le subjonctif."],
      ["sois", false, "Forme de la 2e personne du subjonctif."],
      ["fût", false, "Subjonctif imparfait : mode et temps fautifs."],
    ], "« Il me semble que » exprime une opinion assez ferme et se construit avec l'indicatif, comme « je crois que ». En revanche, « il semble que », sans pronom, est le plus souvent suivi du subjonctif.", "Il me semble que + indicatif ; il semble que + subjonctif.", [
      "Repère le pronom « me » dans la locution.", "« Il me semble que » équivaut à « je crois que ».", "Je crois que + indicatif.",
    ], { r: true }),
    Q("B-FR-MOD-009", "fr.modes.hypothese", 2, "Complétez : « Si tu ___ plus tôt, tu aurais vu le début du spectacle. » (arriver)", [
      ["étais arrivé", true, "Principale au conditionnel passé : si + plus-que-parfait."],
      ["serais arrivé", false, "Jamais de conditionnel après si de condition."],
      ["sois arrivé", false, "Subjonctif fautif après si."],
      ["es arrivé", false, "Passé composé : ne correspond pas à un conditionnel passé dans la principale."],
    ], "Hypothèse non réalisée dans le passé : si + plus-que-parfait, principale au conditionnel passé. Si tu étais arrivé plus tôt, tu aurais vu…", "Si + plus-que-parfait → conditionnel passé.", [
      "À quel temps est la principale ?", "Le conditionnel est interdit après si.", "Quel temps de l'indicatif correspond au conditionnel passé ?",
    ], { a: "erreur" }),
    Q("B-FR-MOD-010", "fr.modes.conjonction", 2, "Complétez : « Nous resterons à l'abri jusqu'à ce que l'orage ___ . » (passer, temps composé)", [
      ["soit passé", true, "Jusqu'à ce que impose le subjonctif ; ici, subjonctif passé."],
      ["est passé", false, "Indicatif : fautif après jusqu'à ce que."],
      ["sera passé", false, "Futur antérieur de l'indicatif : fautif après jusqu'à ce que."],
      ["serait passé", false, "Conditionnel : fautif après jusqu'à ce que."],
    ], "Jusqu'à ce que présente un terme envisagé, pas encore atteint : subjonctif. Le subjonctif passé exprime l'action accomplie : jusqu'à ce que l'orage soit passé.", "Jusqu'à ce que + subjonctif.", [
      "La fin de l'orage est-elle déjà réalisée ?", "Jusqu'à ce que ressemble à avant que.", "Choisis la forme composée du subjonctif.",
    ], { r: true }),
    Q("B-FR-MOD-011", "fr.modes.conjonction", 1, "Complétez : « Parle plus fort afin que le dernier rang t'___ . » (entendre)", [
      ["entende", true, "Afin que exprime le but : subjonctif."],
      ["entend", false, "Indicatif : fautif après une conjonction de but."],
      ["entendra", false, "Futur de l'indicatif : fautif après afin que."],
      ["entendrait", false, "Conditionnel : fautif après afin que."],
    ], "Les conjonctions de but (pour que, afin que) présentent un résultat visé, non encore réel : subjonctif, qu'il entende.", "Pour que, afin que + subjonctif.", [
      "Quel rapport logique exprime afin que ?", "Un but est-il un fait réel ?", "Le but appelle le subjonctif.",
    ]),
    Q("B-FR-MOD-012", "fr.modes.conjonction", 3, "Quelle phrase respecte le mode imposé par la conjonction ?", [
      ["Je te prête mon livre pourvu que tu me le rendes.", true, "Pourvu que (condition) se construit avec le subjonctif."],
      ["Je partirai à moins qu'il pleut.", false, "À moins que exige le subjonctif : à moins qu'il pleuve."],
      ["Elle travaille pendant que tu dormes.", false, "Pendant que pose un fait réel : indicatif, pendant que tu dors."],
      ["Dès qu'il soit arrivé, appelle-moi.", false, "Dès que exige l'indicatif : dès qu'il sera arrivé."],
    ], "Pourvu que et à moins que (condition) appellent le subjonctif ; pendant que et dès que (temps réel) appellent l'indicatif.", "Conditions et buts : subjonctif ; temps réalisé ou simultané : indicatif.", [
      "Classe chaque conjonction : temps, condition ou but.", "Les conjonctions de temps réel prennent l'indicatif.", "Vérifie le mode dans chaque phrase.",
    ], { a: "formules", r: true }),
    Q("B-FR-MOD-013", "fr.modes.conjonction", 2, "Complétez : « Bien qu'ils ___ tout leur possible, ils ont échoué. » (faire, temps composé)", [
      ["aient fait", true, "Bien que + subjonctif ; fait accompli : subjonctif passé."],
      ["ont fait", false, "Indicatif passé composé : fautif après bien que."],
      ["avaient fait", false, "Plus-que-parfait de l'indicatif : fautif après bien que."],
      ["auraient fait", false, "Conditionnel passé : fautif après bien que."],
    ], "Bien que impose le subjonctif, même quand le fait est réel. Le fait est accompli et antérieur : subjonctif passé, qu'ils aient fait.", "Bien que + subjonctif, même pour un fait passé.", [
      "Quel mode suit bien que ?", "Le fait est accompli : il faut une forme composée.", "Auxiliaire avoir au subjonctif + participe.",
    ]),
  ],
};
