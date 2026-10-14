// Français : pluriel des noms (simples, composés, étrangers, propres).
import { maker, type FrPart } from "./_util";

const Q = maker("fr.pluriel");

export const PLURIEL: FrPart = {
  skill: { id: "fr.pluriel", subjectCode: "FR", domain: "Orthographe", name: "Pluriel des noms", synonyms: ["pluriel", "noms composes", "al aux", "ail aux", "ou oux", "mots etrangers", "noms propres"] },
  lesson: {
    skillId: "fr.pluriel",
    title: "Le pluriel des noms simples et composés",
    objectives: ["Appliquer les pluriels en -aux, -oux et -eux", "Former le pluriel des noms composés selon la nature de leurs éléments", "Traiter les noms étrangers et les noms propres"],
    prerequisites: [],
    regle:
      "Règle générale : on ajoute un s (un livre, des livres). Les noms terminés par s, x ou z ne changent pas (un pays, des pays ; une voix, des voix ; un nez, des nez).\n\nNoms en -au, -eau, -eu : pluriel en x (des tuyaux, des bateaux, des cheveux), sauf landau, sarrau, bleu, pneu et émeu, qui prennent un s.\n\nNoms en -al : pluriel en -aux (un journal, des journaux), sauf bal, carnaval, chacal, festival, récital, régal et quelques autres, qui prennent un s.\n\nNoms en -ail : pluriel en s (des détails, des éventails), sauf bail, corail, émail, soupirail, travail, vantail et vitrail, qui font -aux.\n\nNoms en -ou : pluriel en s (des clous, des trous), sauf sept noms qui prennent un x : bijou, caillou, chou, genou, hibou, joujou, pou.\n\nPluriels doubles : aïeul (aïeux = les ancêtres ; aïeuls = les grands-parents), ciel (cieux au sens religieux ou poétique ; ciels en peinture ou pour un climat), œil (yeux ; œils dans des composés comme œils-de-bœuf).\n\nNoms composés : seuls les noms et les adjectifs peuvent prendre la marque du pluriel ; les verbes, adverbes, prépositions et préfixes restent invariables. Ainsi : nom + adjectif, les deux varient (des coffres-forts) ; nom + nom en apposition, les deux varient (des choux-fleurs) ; nom + complément, seul le premier nom varie (des chefs-d'œuvre, des arcs-en-ciel) ; mot invariable + nom, seul le nom varie (des arrière-pensées, des haut-parleurs). Le sens guide toujours : des timbres-poste (pour la poste), des années-lumière.\n\nNoms étrangers : francisés, ils suivent la règle française (des scénarios, des agendas, des alibis). Noms propres : les noms de famille restent invariables (les Martin), sauf certaines dynasties illustres (les Bourbons).",
    formules:
      "-au, -eau, -eu → -x ; exceptions en s : landau, sarrau, bleu, pneu, émeu\n-al → -aux ; exceptions en s : bal, carnaval, chacal, festival, récital, régal\n-ail → -ails ; exceptions en -aux : bail, corail, émail, soupirail, travail, vantail, vitrail\n-ou → -ous ; exceptions en x : bijou, caillou, chou, genou, hibou, joujou, pou\nComposés : nom et adjectif variables ; verbe, adverbe, préposition invariables\nNom + de + nom : seul le premier varie (des chefs-d'œuvre, des pommes de terre)\nNoms de famille : invariables (les Durand)",
    methode:
      "1. Nom simple : regarde sa terminaison (-al, -ail, -ou, -au, -eu) et vérifie la liste d'exceptions.\n2. Nom composé : identifie la nature de chaque élément.\n3. Mets au pluriel seulement les noms et les adjectifs.\n4. Vérifie par le sens : « des timbres-poste » = des timbres pour la poste, la poste reste au singulier.",
    exemple:
      "Pluriel de « porte-fenêtre » : porte est ici un nom (une porte qui est aussi une fenêtre) et fenêtre un nom en apposition : des portes-fenêtres.\nPluriel de « timbre-poste » : timbre est le nom principal, poste est un complément (un timbre pour la poste) : des timbres-poste.\nPluriel de « vitrail » : exception en -ail : des vitraux.",
    erreur:
      "✗ « Des festivaux » → ✓ des festivals (exception en -al)\n✗ « Des verroux » → ✓ des verrous (seuls sept noms en -ou prennent un x)\n✗ « Des chef-d'œuvres » → ✓ des chefs-d'œuvre (le premier nom varie, le complément non)\n✗ « Des hauts-parleurs » → ✓ des haut-parleurs (haut est adverbe : il parle haut)\n✗ « Les Martins viennent dîner » → ✓ les Martin : un nom de famille reste invariable",
    approfondir:
      "Les rectifications orthographiques de 1990 simplifient le pluriel des composés verbe + nom (un compte-goutte, des compte-gouttes ; un sèche-cheveu, des sèche-cheveux). Les deux orthographes sont admises : le concours évite donc d'en faire une question piège, mais il est bon de connaître la règle.\n\nPour les mots latins, l'usage est désormais le pluriel français (des maximums, des minimums, des référendums) ; les pluriels latins (des maxima) restent admis dans les textes techniques.\n\nAstuce : apprends les sept noms en -ou par une phrase (« Viens mon chou, mon bijou, mon joujou, sur mes genoux, jeter des cailloux à ce hibou plein de poux »). Trente secondes d'effort pour une question sûre.",
    cards: [
      ["Les sept noms en -ou qui prennent un x", "bijou, caillou, chou, genou, hibou, joujou, pou", false],
      ["Pluriel de « festival »", "festivals (exception en -al)", true],
      ["Pluriel de « vitrail »", "vitraux (exception en -ail)", true],
      ["Nom composé : quels éléments varient ?", "Seuls les noms et les adjectifs", false],
    ],
  },
  questions: [
    Q("B-FR-PLU-001", "fr.pluriel.simple", 1, "Quel est le pluriel de « vitrail » ?", [
      ["vitraux", true, "Vitrail fait partie des sept noms en -ail qui font -aux."],
      ["vitrails", false, "Règle générale des noms en -ail, mais vitrail est une exception."],
      ["vitrals", false, "Confusion avec les exceptions en -al."],
      ["vitraus", false, "Le pluriel en -au prend un x, pas un s."],
    ], "Les noms en -ail prennent un s, sauf bail, corail, émail, soupirail, travail, vantail et vitrail : des vitraux.", "Vitrail fait vitraux.", [
      "Le mot se termine par -ail.", "La règle générale est -ails, mais il y a sept exceptions.", "Pense aux vitraux d'une cathédrale.",
    ]),
    Q("B-FR-PLU-002", "fr.pluriel.simple", 1, "Complétez : « Les ___ de musique du village attirent chaque été des milliers de visiteurs. »", [
      ["festivals", true, "Festival fait partie des exceptions en -al qui prennent un s."],
      ["festivaux", false, "Application de la règle générale en -aux à une exception."],
      ["festivales", false, "Le nom est masculin et ne prend pas de e."],
      ["festivails", false, "Confusion avec la terminaison -ail."],
    ], "Les noms en -al font leur pluriel en -aux, sauf bal, carnaval, chacal, festival, récital, régal et quelques autres : des festivals.", "Festival, bal, carnaval, récital : pluriel en s.", [
      "Le mot se termine par -al.", "Existe-t-il des exceptions à la règle en -aux ?", "Pense à « des bals » et « des carnavals ».",
    ]),
    Q("B-FR-PLU-003", "fr.pluriel.simple", 2, "Quelle série ne contient que des pluriels corrects ?", [
      ["des genoux, des clous, des trous", true, "Genou est l'une des sept exceptions en x ; clou et trou suivent la règle."],
      ["des bijous, des fous, des cous", false, "Bijou fait partie des exceptions : des bijoux."],
      ["des choux, des écrous, des verroux", false, "Verrou suit la règle générale : des verrous."],
      ["des poux, des hiboux, des matoux", false, "Matou suit la règle générale : des matous."],
    ], "Seuls bijou, caillou, chou, genou, hibou, joujou et pou prennent un x au pluriel. Tous les autres noms en -ou prennent un s.", "Noms en -ou : s, sauf les sept exceptions en x.", [
      "Récite la liste des sept noms en -ou qui prennent un x.", "Vérifie chaque mot de chaque série.", "Verrou, matou et bijou sont des pièges.",
    ], { a: "formules" }),
    Q("B-FR-PLU-004", "fr.pluriel.simple", 2, "Lequel de ces noms fait son pluriel en -s et non en -x ?", [
      ["landau", true, "Landau est une exception : des landaus."],
      ["tuyau", false, "Règle générale des noms en -au : des tuyaux."],
      ["cheveu", false, "Règle générale des noms en -eu : des cheveux."],
      ["noyau", false, "Règle générale des noms en -au : des noyaux."],
    ], "Les noms en -au, -eau, -eu prennent un x, sauf landau, sarrau, bleu, pneu et émeu.", "Landau, sarrau, bleu, pneu, émeu : pluriel en s.", [
      "Tous ces mots se terminent par -au ou -eu.", "La règle générale est le x.", "Cherche le mot qui figure dans la courte liste d'exceptions.",
    ]),
    Q("B-FR-PLU-005", "fr.pluriel.compose", 2, "Quel est le pluriel de « chef-d'œuvre » ?", [
      ["chefs-d'œuvre", true, "Nom + complément introduit par de : seul le premier nom varie."],
      ["chef-d'œuvres", false, "C'est le chef qui est multiplié, pas l'œuvre."],
      ["chefs-d'œuvres", false, "Le complément « d'œuvre » reste invariable."],
      ["chef-d'œuvre", false, "Le nom composé doit prendre la marque du pluriel."],
    ], "Dans un composé nom + préposition + nom, seul le premier nom prend la marque du pluriel : des chefs-d'œuvre (des chefs, des sommets de l'œuvre).", "Nom + de + nom : seul le premier nom varie.", [
      "Quels sont les éléments du nom composé ?", "Un nom est complément de l'autre.", "Seul le nom principal varie.",
    ]),
    Q("B-FR-PLU-006", "fr.pluriel.compose", 2, "Complétez : « Après l'orage, deux ___ se sont dessinés au-dessus du lac. »", [
      ["arcs-en-ciel", true, "Seul le premier nom varie : des arcs dans le ciel."],
      ["arc-en-ciels", false, "C'est l'arc qui est multiplié, pas le ciel."],
      ["arcs-en-ciels", false, "Le complément « en ciel » reste invariable."],
      ["arcs-en-cieux", false, "Le complément reste au singulier, et cieux a un sens religieux."],
    ], "Arc-en-ciel est formé d'un nom et d'un complément prépositionnel : seul « arc » varie, des arcs-en-ciel.", "Nom + préposition + nom : seul le premier varie.", [
      "Repère la préposition dans le nom composé.", "Ce qui suit la préposition est un complément.", "Seul le nom noyau prend un s.",
    ]),
    Q("B-FR-PLU-007", "fr.pluriel.compose", 1, "Quel est le pluriel de « coffre-fort » ?", [
      ["coffres-forts", true, "Nom + adjectif : les deux éléments varient."],
      ["coffre-forts", false, "Le nom « coffre » doit aussi varier."],
      ["coffres-fort", false, "L'adjectif « fort » s'accorde avec le nom."],
      ["coffre-fort", false, "Le nom composé doit prendre la marque du pluriel."],
    ], "Un nom composé d'un nom et d'un adjectif met les deux au pluriel : des coffres-forts, comme des basses-cours.", "Nom + adjectif : les deux varient.", [
      "Quelle est la nature de chaque élément ?", "Un nom et un adjectif peuvent tous deux varier.", "Il faut deux s.",
    ]),
    Q("B-FR-PLU-008", "fr.pluriel.compose", 3, "Quel est le pluriel de « haut-parleur » ?", [
      ["haut-parleurs", true, "Haut est ici un adverbe (parler haut) : invariable."],
      ["hauts-parleurs", false, "On a pris « haut » pour un adjectif ; il est adverbe."],
      ["haut-parleur", false, "Le nom « parleur » doit varier."],
      ["hauts-parleur", false, "Les accords sont inversés."],
    ], "Un haut-parleur « parle haut » : haut est un adverbe, donc invariable. Seul le nom varie : des haut-parleurs.", "Adverbe + nom : seul le nom varie.", [
      "Que signifie « haut » dans ce mot ?", "Le haut-parleur parle haut : haut modifie un verbe.", "Un adverbe ne varie jamais.",
    ], { a: "erreur", r: true }),
    Q("B-FR-PLU-009", "fr.pluriel.compose", 2, "Quel est le pluriel de « chou-fleur » ?", [
      ["choux-fleurs", true, "Deux noms en apposition : les deux varient, et chou prend un x."],
      ["chou-fleurs", false, "Le premier nom doit aussi varier."],
      ["choux-fleur", false, "Le second nom, en apposition, varie aussi."],
      ["chous-fleurs", false, "Chou fait partie des sept noms en -ou qui prennent un x."],
    ], "Un chou-fleur est un chou qui ressemble à une fleur : les deux noms sont en apposition et varient. Chou prend un x : des choux-fleurs.", "Nom + nom en apposition : les deux varient.", [
      "Les deux éléments sont des noms.", "L'un est-il complément de l'autre ou en apposition ?", "N'oublie pas l'exception des noms en -ou.",
    ]),
    Q("B-FR-PLU-010", "fr.pluriel.simple", 1, "Quel est le pluriel de « travail » au sens d'ouvrage ou de chantier ?", [
      ["travaux", true, "Travail fait partie des exceptions en -ail qui font -aux."],
      ["travails", false, "Forme réservée au dispositif servant à immobiliser les animaux, pas au sens d'ouvrage."],
      ["travals", false, "Forme inexistante."],
      ["travaus", false, "Le pluriel en -au prend un x."],
    ], "Au sens courant, travail fait travaux. La forme rare travails désigne surtout l'appareil du maréchal-ferrant.", "Travail fait travaux.", [
      "Le mot se termine par -ail.", "Est-il dans la liste des sept exceptions ?", "Pense aux « travaux publics ».",
    ]),
    Q("B-FR-PLU-011", "fr.pluriel.compose", 2, "Quel est le pluriel de « arrière-pensée » ?", [
      ["arrière-pensées", true, "Arrière est ici un adverbe : invariable ; seul le nom varie."],
      ["arrières-pensées", false, "« Arrière » n'est pas un nom ici : il ne varie pas."],
      ["arrière-pensée", false, "Le nom « pensée » doit prendre la marque du pluriel."],
      ["arrières-pensée", false, "Les accords sont inversés."],
    ], "Dans les composés en arrière-, avant-, haut-, le premier élément est invariable : des arrière-pensées, des avant-gardes.", "Mot invariable + nom : seul le nom varie.", [
      "Quelle est la nature de « arrière » ici ?", "Comme « avant » dans « avant-garde », il ne varie pas.", "Seul le nom prend un s.",
    ]),
    Q("B-FR-PLU-012", "fr.pluriel.double", 3, "Complétez : « Les ___ de ce peintre paysagiste sont toujours tourmentés. » (ciel, au sens de ciel représenté)", [
      ["ciels", true, "En peinture, le pluriel de ciel est ciels."],
      ["cieux", false, "Cieux s'emploie au sens religieux ou poétique."],
      ["ciel", false, "Le nom doit prendre la marque du pluriel."],
      ["cieus", false, "Forme inexistante."],
    ], "Ciel a deux pluriels : cieux (sens religieux, poétique : les cieux) et ciels (sens technique : les ciels d'un tableau, des ciels de lit, des ciels changeants).", "Ciel : cieux au sens religieux, ciels en peinture.", [
      "Ce nom a deux pluriels différents.", "Le pluriel dépend du sens.", "On parle ici de représentation picturale.",
    ], { a: "approfondir", r: true }),
    Q("B-FR-PLU-013", "fr.pluriel.double", 3, "Complétez : « Ses ___ avaient quitté les Alpes au XVIIe siècle. » (aïeul, au sens d'ancêtres)", [
      ["aïeux", true, "Au sens d'ancêtres, aïeul fait aïeux."],
      ["aïeuls", false, "Aïeuls désigne les grands-parents, pas les ancêtres lointains."],
      ["aïeus", false, "Forme inexistante."],
      ["aïeaux", false, "Forme inexistante, calquée sur les noms en -eau."],
    ], "Aïeul a deux pluriels : aïeuls (les grands-parents) et aïeux (les ancêtres). Il s'agit ici d'ancêtres du XVIIe siècle : aïeux.", "Aïeux = ancêtres ; aïeuls = grands-parents.", [
      "Ce nom a deux pluriels.", "L'un désigne les grands-parents, l'autre les ancêtres.", "Des personnes du XVIIe siècle sont des ancêtres.",
    ], { r: true }),
    Q("B-FR-PLU-014", "fr.pluriel.propre", 2, "Complétez : « Les ___ viennent dîner dimanche avec leurs enfants. » (nom de famille Martin)", [
      ["Martin", true, "Un nom de famille reste invariable."],
      ["Martins", false, "Les noms de famille ordinaires ne prennent pas de s."],
      ["Martin's", false, "Calque de l'anglais : le français ne marque ni le pluriel ni la famille par une apostrophe."],
      ["Martines", false, "Confusion avec un prénom féminin."],
    ], "Les noms de famille restent invariables : les Martin, les Durand. Seules quelques dynasties illustres prennent un s (les Bourbons).", "Nom de famille : invariable.", [
      "Il s'agit d'un nom propre de famille.", "Ces noms suivent-ils la règle du pluriel des noms communs ?", "Seules quelques familles royales prennent un s.",
    ]),
    Q("B-FR-PLU-015", "fr.pluriel.etranger", 1, "Complétez : « Les deux suspects ont fourni des ___ solides aux enquêteurs. »", [
      ["alibis", true, "Mot latin francisé : il suit la règle générale et prend un s."],
      ["alibi", false, "Un mot étranger entré dans l'usage français prend la marque du pluriel."],
      ["alibies", false, "Le nom est masculin : pas de e."],
      ["alibix", false, "Le x n'est réservé qu'à certaines terminaisons (-au, -eu, -ou)."],
    ], "Les mots d'origine étrangère francisés prennent un s au pluriel : des alibis, des agendas, des scénarios.", "Mot étranger francisé : pluriel en s.", [
      "Ce mot vient du latin.", "Il est entré dans l'usage courant.", "Il suit alors la règle générale.",
    ]),
  ],
};
