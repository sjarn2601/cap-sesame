// Français : figures de style, tonalités, versification.
import { maker, type FrPart } from "./_util";

const Q = maker("fr.style");

export const STYLE: FrPart = {
  skill: { id: "fr.style", subjectCode: "FR", domain: "Culture de la langue", name: "Figures de style et versification", synonyms: ["figure de style", "metaphore", "comparaison", "litote", "oxymore", "hyperbole", "registre", "tonalite", "versification", "alexandrin", "rimes"] },
  lesson: {
    skillId: "fr.style",
    title: "Figures de style, tonalités et versification",
    objectives: ["Identifier les principales figures de style", "Reconnaître une tonalité dominante", "Compter les syllabes d'un vers et nommer la disposition des rimes"],
    prerequisites: ["fr.sens"],
    regle:
      "Figures d'analogie. La comparaison rapproche deux éléments à l'aide d'un outil (comme, tel, pareil à, semblable à, ressembler) : il est fort comme un roc. La métaphore fait le même rapprochement sans outil : cet homme est un roc. Prolongée sur plusieurs phrases, elle devient une métaphore filée. La personnification prête des traits humains à une chose ou un animal ; l'allégorie représente une idée abstraite sous une forme concrète (la Mort avec sa faux).\n\nFigures de substitution. La métonymie désigne une chose par une autre qui lui est liée (boire un verre : le contenant pour le contenu ; toute la salle applaudit : le lieu pour les personnes). La périphrase remplace un mot par une expression qui le définit (l'astre du jour pour le soleil).\n\nFigures d'opposition. L'antithèse oppose deux termes dans une même phrase (riche en promesses, pauvre en actes). L'oxymore unit deux termes contradictoires dans un même groupe (une obscure clarté). Le chiasme croise deux groupes selon la structure ABBA (manger pour vivre / vivre pour manger).\n\nFigures d'insistance et d'atténuation. L'hyperbole exagère (je meurs de faim) ; la gradation range des termes par intensité croissante ; l'anaphore répète un mot en tête de phrases ou de vers ; l'accumulation juxtapose de nombreux termes. La litote dit moins pour suggérer plus (je ne te hais point = je t'aime) ; l'euphémisme atténue une réalité pénible (il s'est éteint = il est mort). L'antiphrase dit le contraire de ce qu'on pense, par ironie.\n\nFigures de son. L'allitération répète une consonne ; l'assonance répète une voyelle.\n\nTonalités : lyrique (expression des sentiments personnels), épique (exploits héroïques, amplification), tragique (fatalité, mort inévitable), pathétique (émouvoir par la souffrance), comique (faire rire), satirique (critiquer en ridiculisant), polémique (attaquer avec virulence), didactique (enseigner), fantastique (hésitation entre naturel et surnaturel).\n\nVersification. On compte les syllabes : le e muet se prononce devant une consonne et s'élide devant une voyelle ou en fin de vers. Alexandrin : 12 syllabes ; décasyllabe : 10 ; octosyllabe : 8. Rimes plates (AABB), croisées (ABAB), embrassées (ABBA). Le sonnet régulier compte quatorze vers : deux quatrains puis deux tercets.",
    formules:
      "Comparaison : avec outil (comme, tel, pareil à) ; métaphore : sans outil\nMétonymie : contenant pour contenu, lieu pour personnes, auteur pour œuvre\nPériphrase : l'astre du jour = le soleil ; la ville lumière = Paris\nAntithèse : opposition dans la phrase ; oxymore : opposition dans un même groupe\nChiasme : ABBA\nLitote : dire moins pour suggérer plus ; euphémisme : adoucir une réalité pénible\nAllitération : consonne répétée ; assonance : voyelle répétée\nAlexandrin 12, décasyllabe 10, octosyllabe 8\nRimes plates AABB, croisées ABAB, embrassées ABBA\nSonnet : 2 quatrains + 2 tercets",
    methode:
      "1. Cherche d'abord un outil de comparaison : s'il y en a un, c'est une comparaison.\n2. Repère deux termes contraires : dans un même groupe (oxymore) ou dans deux parties de la phrase (antithèse) ?\n3. Repère une répétition : sons (allitération, assonance), mots en tête (anaphore), structure croisée (chiasme).\n4. Compare ce qui est dit et ce qui est voulu : moins (litote), plus (hyperbole), adouci (euphémisme), inverse (antiphrase).\n5. Pour compter un vers, découpe syllabe par syllabe en prononçant les e muets suivis d'une consonne.",
    exemple:
      "« Cette obscure clarté qui tombe des étoiles » (Corneille, Le Cid). Obscure et clarté sont contraires et réunis dans le même groupe nominal : oxymore. On compte en élidant le e de « cette » devant la voyelle de « obscure » : Cet (1) tobs (2) cu (3) re (4) clar (5) té (6) qui (7) tom (8) be (9) des (10) é (11) toiles (12). Douze syllabes : c'est un alexandrin. Le e de « obscure » et celui de « tombe » comptent, car ils précèdent une consonne ; le e final de « étoiles » ne compte pas.",
    erreur:
      "✗ Appeler métaphore une image introduite par « comme » → ✓ c'est une comparaison\n✗ Confondre oxymore et antithèse → ✓ l'oxymore réunit les contraires dans un seul groupe de mots\n✗ Confondre litote et euphémisme → ✓ la litote renforce en disant moins, l'euphémisme adoucit\n✗ Oublier de compter le e muet devant une consonne → ✓ « ca-res-se-les » : le e de caresse compte\n✗ Compter le e muet final du vers → ✓ il ne se prononce pas",
    approfondir:
      "Une même phrase peut contenir plusieurs figures ; le concours demande alors la figure dominante, celle que l'énoncé met en valeur. Lis la question : on te demande parfois le procédé sonore, parfois l'image.\n\nLa diérèse prononce en deux syllabes deux voyelles qui en forment d'ordinaire une seule (li-on), souvent pour mettre un mot en valeur ; la synérèse fait l'inverse.\n\nCe chapitre aide aussi pour la culture littéraire : la litote de Chimène, l'oxymore de Corneille et l'allitération en s de Racine sont des classiques qu'il est utile de connaître par cœur.",
    cards: [
      ["Comparaison / métaphore", "Avec outil (comme) / sans outil", false],
      ["Oxymore", "Deux termes contraires dans un même groupe : une obscure clarté", true],
      ["Litote", "Dire moins pour suggérer plus : « Va, je ne te hais point »", true],
      ["Chiasme", "Structure croisée ABBA : manger pour vivre, vivre pour manger", true],
      ["Rimes embrassées", "ABBA", true],
    ],
  },
  questions: [
    Q("B-FR-STY-001", "fr.style.figure", 1, "Quelle figure Chimène emploie-t-elle en disant à Rodrigue « Va, je ne te hais point » (Corneille, Le Cid) ?", [
      ["une litote", true, "Elle dit moins (je ne te hais point) pour faire entendre plus (je t'aime)."],
      ["un euphémisme", false, "L'euphémisme adoucit une réalité pénible ; ici, la formule suggère un sentiment fort."],
      ["une hyperbole", false, "L'hyperbole exagère, c'est l'inverse."],
      ["une antithèse", false, "Aucune opposition entre deux termes."],
    ], "La litote atténue l'expression pour renforcer le sens : par pudeur, Chimène avoue son amour en disant seulement qu'elle ne hait pas Rodrigue.", "Litote : dire moins pour suggérer plus.", [
      "Chimène dit-elle plus ou moins qu'elle ne pense ?", "Elle dit moins.", "Le but est de suggérer un sentiment fort.",
    ]),
    Q("B-FR-STY-002", "fr.style.figure", 1, "Quelle figure de style reconnaît-on dans « Cette obscure clarté qui tombe des étoiles » (Corneille) ?", [
      ["un oxymore", true, "Obscure et clarté, termes contraires, sont réunis dans un même groupe."],
      ["une antithèse", false, "L'antithèse oppose deux termes dans deux parties de phrase, non dans un même groupe."],
      ["une comparaison", false, "Il n'y a aucun outil de comparaison."],
      ["une allitération", false, "Ce n'est pas la répétition d'une consonne qui frappe ici."],
    ], "L'oxymore associe deux mots de sens opposés dans un même groupe nominal : obscure clarté.", "Oxymore : deux contraires dans un même groupe de mots.", [
      "Cherche deux mots de sens opposés.", "Sont-ils dans le même groupe nominal ?", "Oui : obscure qualifie directement clarté.",
    ]),
    Q("B-FR-STY-003", "fr.style.figure", 2, "Quel procédé domine dans le vers de Racine « Pour qui sont ces serpents qui sifflent sur vos têtes ? » (Andromaque) ?", [
      ["une allitération en s", true, "Le son s, répété, imite le sifflement des serpents."],
      ["une assonance en i", false, "Le i revient, mais c'est la consonne s qui domine et imite le sifflement."],
      ["une anaphore", false, "Aucun mot n'est répété en tête de vers ou de phrase."],
      ["une litote", false, "Aucune atténuation."],
    ], "Les sons s (sont, ces, serpents, sifflent, sur) se répètent : c'est une allitération, qui fait entendre le sifflement des serpents (harmonie imitative).", "Allitération : répétition d'une consonne.", [
      "Lis le vers à voix basse.", "Quel son revient le plus ?", "C'est une consonne : la figure porte un nom précis.",
    ]),
    Q("B-FR-STY-004", "fr.style.figure", 1, "Quelle figure relie les deux vers de Verlaine « Il pleure dans mon cœur / Comme il pleut sur la ville » ?", [
      ["une comparaison", true, "L'outil « comme » rapproche la tristesse et la pluie."],
      ["une métaphore", false, "La métaphore n'a pas d'outil de comparaison ; ici, il y a « comme »."],
      ["une personnification", false, "Le cœur n'est pas présenté comme une personne."],
      ["un oxymore", false, "Aucun terme contradictoire."],
    ], "La présence de l'outil « comme » signale une comparaison : la tristesse du poète est rapprochée de la pluie sur la ville.", "Comparaison : présence d'un outil (comme, tel…).", [
      "Repère un mot qui rapproche deux éléments.", "Ce mot est « comme ».", "Avec un outil, ce n'est pas une métaphore.",
    ]),
    Q("B-FR-STY-005", "fr.style.figure", 2, "Quelle figure reconnaît-on dans le vers de Hugo « Cette faucille d'or dans le champ des étoiles » (Booz endormi), qui désigne la lune ?", [
      ["une métaphore", true, "La lune est assimilée à une faucille, et le ciel à un champ, sans outil de comparaison."],
      ["une comparaison", false, "Il n'y a aucun outil de comparaison."],
      ["une litote", false, "Aucune atténuation."],
      ["un chiasme", false, "Aucune structure croisée."],
    ], "Le croissant de lune est désigné par l'image d'une faucille d'or, le ciel étoilé par celle d'un champ : c'est une métaphore, sans outil.", "Métaphore : rapprochement sans outil.", [
      "Le vers désigne la lune.", "Par quelle image ?", "Y a-t-il un « comme » ?",
    ]),
    Q("B-FR-STY-006", "fr.style.figure", 2, "Quelle figure structure la phrase de Molière « il faut manger pour vivre, et non pas vivre pour manger » (L'Avare) ?", [
      ["un chiasme", true, "Les termes se croisent selon la structure ABBA : manger, vivre / vivre, manger."],
      ["une anaphore", false, "Aucun mot n'est répété en tête de groupe."],
      ["une gradation", false, "Aucune progression d'intensité."],
      ["un oxymore", false, "Aucun terme contradictoire dans un même groupe."],
    ], "Les deux mots manger et vivre reviennent dans l'ordre inverse : la structure en croix (ABBA) est un chiasme.", "Chiasme : structure ABBA.", [
      "Repère les mots répétés.", "Dans quel ordre reviennent-ils ?", "L'ordre est inversé : A B / B A.",
    ], { r: true }),
    Q("B-FR-STY-007", "fr.style.figure", 1, "Quelle figure contient la phrase « Je t'ai attendu des siècles devant ce cinéma ! » ?", [
      ["une hyperbole", true, "Exagération évidente de la durée."],
      ["une litote", false, "La litote dit moins ; ici, on dit beaucoup plus."],
      ["un euphémisme", false, "Aucune atténuation."],
      ["une métonymie", false, "Aucun mot n'en remplace un autre par association."],
    ], "Des siècles pour une attente de quelques minutes : l'exagération volontaire est une hyperbole.", "Hyperbole : exagération.", [
      "La durée est-elle réaliste ?", "Elle est très exagérée.", "La figure d'exagération porte un nom précis.",
    ]),
    Q("B-FR-STY-008", "fr.style.figure", 2, "Quelle figure contient la phrase « Après une longue maladie, il s'est éteint dans la nuit » ?", [
      ["un euphémisme", true, "« S'éteindre » adoucit l'annonce d'une mort."],
      ["une hyperbole", false, "Aucune exagération."],
      ["une antithèse", false, "Aucune opposition."],
      ["un oxymore", false, "Aucun terme contradictoire."],
    ], "Dire « il s'est éteint » au lieu de « il est mort » atténue une réalité pénible : c'est un euphémisme.", "Euphémisme : atténuer une réalité pénible.", [
      "Que veut dire « il s'est éteint » ?", "Il est mort.", "Pourquoi ne pas le dire directement ?",
    ]),
    Q("B-FR-STY-009", "fr.style.figure", 2, "Quelle figure contient la phrase « Toute la salle s'est levée pour applaudir » ?", [
      ["une métonymie", true, "La salle (le lieu) désigne les spectateurs qui s'y trouvent."],
      ["une comparaison", false, "Aucun outil de comparaison."],
      ["un oxymore", false, "Aucun terme contradictoire."],
      ["une anaphore", false, "Aucune répétition."],
    ], "Le lieu (la salle) est mis pour les personnes qu'il contient : c'est une métonymie, comme dans « boire un verre ».", "Métonymie : désigner une chose par une autre qui lui est liée.", [
      "Une salle peut-elle se lever ?", "Ce sont les personnes qui se lèvent.", "Le lieu remplace ceux qui l'occupent.",
    ]),
    Q("B-FR-STY-010", "fr.style.versification", 1, "Quelle est la forme d'un sonnet régulier ?", [
      ["deux quatrains suivis de deux tercets", true, "Quatorze vers : 4 + 4 + 3 + 3."],
      ["trois quatrains suivis d'un distique", false, "Forme du sonnet anglais (élisabéthain), pas du sonnet régulier français."],
      ["quatre quatrains", false, "Seize vers : ce n'est pas un sonnet."],
      ["deux tercets suivis de deux quatrains", false, "Ordre inversé."],
    ], "Le sonnet régulier, venu d'Italie et fixé en France au XVIe siècle, compte quatorze vers : deux quatrains puis deux tercets.", "Sonnet : 2 quatrains + 2 tercets = 14 vers.", [
      "Un sonnet compte quatorze vers.", "Il commence par des strophes de quatre vers.", "Il se termine par des strophes de trois vers.",
    ]),
    Q("B-FR-STY-011", "fr.style.versification", 1, "Comment appelle-t-on des rimes disposées selon le schéma ABBA ?", [
      ["des rimes embrassées", true, "Les rimes B sont « embrassées » par les rimes A."],
      ["des rimes croisées", false, "Schéma ABAB."],
      ["des rimes plates", false, "Schéma AABB."],
      ["des rimes riches", false, "La richesse décrit le nombre de sons communs, pas la disposition."],
    ], "Plates : AABB ; croisées : ABAB ; embrassées : ABBA.", "Rimes embrassées = ABBA.", [
      "Visualise le schéma A B B A.", "Les deux B sont entourés par les A.", "Les A « serrent dans leurs bras » les B.",
    ], { a: "formules" }),
    Q("B-FR-STY-012", "fr.style.versification", 3, "Combien de syllabes compte le vers « Le vent du soir caresse les vieux murs » ?", [
      ["dix : c'est un décasyllabe", true, "Le / vent / du / soir / ca / res / se / les / vieux / murs : le e de « caresse » compte devant une consonne."],
      ["neuf", false, "Oubli du e muet de « caresse », qui se prononce devant la consonne de « les »."],
      ["huit : c'est un octosyllabe", false, "Plusieurs syllabes oubliées."],
      ["douze : c'est un alexandrin", false, "Syllabes ajoutées : aucun mot ne compte deux syllabes de plus."],
    ], "On compte : Le (1) vent (2) du (3) soir (4) ca (5) res (6) se (7) les (8) vieux (9) murs (10). Le e final de « caresse » est suivi d'une consonne : il se prononce et compte.", "Le e muet compte devant une consonne, pas devant une voyelle ni en fin de vers.", [
      "Découpe le vers syllabe par syllabe.", "Le e de « caresse » est-il suivi d'une consonne ou d'une voyelle ?", "Devant une consonne, il compte.",
    ], { a: "erreur", r: true }),
    Q("B-FR-STY-013", "fr.style.tonalite", 2, "Quelle tonalité domine dans un texte qui cherche à faire rire en ridiculisant les défauts d'une société ?", [
      ["satirique", true, "La satire critique en ridiculisant."],
      ["lyrique", false, "Expression des sentiments personnels."],
      ["épique", false, "Récit d'exploits héroïques, amplifiés."],
      ["tragique", false, "Fatalité et mort inévitable."],
    ], "La tonalité satirique vise une cible (mœurs, institutions, groupes) et la critique par le ridicule.", "Satirique : critiquer en faisant rire.", [
      "Le texte critique et fait rire.", "Il vise les défauts d'une société.", "Pense aux satires de Boileau.",
    ]),
    Q("B-FR-STY-014", "fr.style.figure", 1, "Quelle figure remplace « le soleil » par « l'astre du jour » ?", [
      ["une périphrase", true, "Une expression de plusieurs mots désigne une réalité qu'un seul mot suffirait à nommer."],
      ["une métaphore", false, "Il n'y a pas d'image : l'expression définit le soleil."],
      ["une hyperbole", false, "Aucune exagération."],
      ["une litote", false, "Aucune atténuation."],
    ], "La périphrase désigne une chose par une expression qui en décrit une caractéristique : l'astre du jour (le soleil), la capitale des Gaules (Lyon).", "Périphrase : groupe de mots à la place d'un mot.", [
      "Combien de mots remplacent « le soleil » ?", "L'expression décrit le soleil.", "La figure qui « fait le tour » d'un mot.",
    ]),
  ],
};
