// Français : orthographe lexicale (consonnes doubles, accents, mots difficiles, trait d'union).
import { maker, type FrPart } from "./_util";

const Q = maker("fr.lexique");

export const LEXIQUE: FrPart = {
  skill: { id: "fr.lexique", subjectCode: "FR", domain: "Orthographe", name: "Orthographe lexicale", synonyms: ["orthographe d'usage", "consonnes doubles", "accent", "trait d'union", "adverbes en ment", "mots difficiles", "amment emment"] },
  lesson: {
    skillId: "fr.lexique",
    title: "L'orthographe lexicale : les mots qui piègent",
    objectives: ["Former les adverbes en -amment et -emment", "Utiliser la famille d'un mot pour retrouver une consonne double ou un accent", "Placer correctement le trait d'union", "Mémoriser les mots fréquemment mal orthographiés"],
    prerequisites: [],
    regle:
      "L'orthographe lexicale (ou d'usage) concerne la forme des mots eux-mêmes, indépendamment de la phrase. Elle se travaille par familles et par listes.\n\nAdverbes en -ment. On les forme sur le féminin de l'adjectif : lent → lentement, heureux → heureusement. Deux séries régulières : les adjectifs en -ant donnent -amment (courant → couramment, brillant → brillamment), ceux en -ent donnent -emment (patient → patiemment, évident → évidemment, prudent → prudemment). Les deux se prononcent « a-ment ». Exceptions : lentement, présentement, véhémentement.\n\nLa famille du mot. Elle explique souvent une lettre muette ou un accent. L'accent circonflexe remplace fréquemment un s disparu qui réapparaît dans un dérivé : forêt → forestier, hôpital → hospitalier, fenêtre → défenestrer, fête → festin. Les consonnes doubles ne se conservent pas toujours dans la famille : honneur mais honorer et honorable ; rationnel mais rationalité ; donner mais donateur et donation. Méfie-toi donc des raisonnements trop rapides et retiens les paires.\n\nMots souvent fautifs. Dilemme (deux m, pas de n), occurrence (deux c, deux r), connexion, exorbitant (pas de h), dysfonctionnement (dys-, préfixe grec du « mauvais »), langage (pas de u), néanmoins, parmi (sans s), malgré, hormis, apercevoir (un seul p), appeler et applaudir (deux p), rythme, abri, bizarre, quatre-vingts.\n\nTrait d'union. Il lie le verbe et le pronom sujet inversé (viendra-t-il, dit-elle), le verbe et ses pronoms à l'impératif (donne-le-moi), les éléments de certains adverbes et locutions (peut-être, c'est-à-dire, au-dessus, là-bas, vis-à-vis), le pronom et « même » (eux-mêmes), les démonstratifs en -ci et -là (celui-ci, ce jour-là). Peut-être (adverbe = probablement) s'écrit avec un trait d'union ; peut être (verbe pouvoir + être) sans trait d'union. En revanche : tout à fait, quelque chose, en tout cas, au fur et à mesure, s'écrivent sans trait d'union.",
    formules:
      "-ant → -amment : couramment, brillamment, puissamment, méchamment\n-ent → -emment : patiemment, évidemment, prudemment, récemment, fréquemment\nCirconflexe et s disparu : forêt/forestier, hôpital/hospitalier, bête/bestial, fête/festif\nhonneur, honorer ; rationnel, rationalité ; donner, donation\nDilemme, occurrence, connexion, exorbitant, dysfonctionnement, langage, néanmoins, parmi, apercevoir\nPeut-être = probablement ; peut être = verbe pouvoir + être\nViendra-t-il : le t euphonique est entouré de deux traits d'union, sans apostrophe",
    methode:
      "1. Repère la zone qui change entre les options : une consonne double, un accent, un h, un trait d'union.\n2. Cherche un mot de la même famille que tu sais écrire (forêt → forestier).\n3. Pour un adverbe en -ment, retrouve l'adjectif de départ et sa terminaison (-ant ou -ent).\n4. Pour peut-être, remplace par « probablement » : si la phrase garde son sens, trait d'union.\n5. Si aucune règle ne s'applique, appuie-toi sur ta liste de mots appris.",
    exemple:
      "« Il a répondu (évident) trop vite. » L'adjectif de départ est évident, en -ent : l'adverbe est évidemment, avec -emment.\n\n« Le colis (peut être / peut-être) livré demain. » Remplace par « probablement » : « le colis probablement livré demain » n'a pas de sens, car il manque le verbe. C'est le verbe pouvoir suivi de l'infinitif être : peut être, sans trait d'union.",
    erreur:
      "✗ « Dilemne » → ✓ dilemme (deux m, pas de n)\n✗ « Exhorbitant » → ✓ exorbitant (de orbite : qui sort de l'orbite)\n✗ « Courament », « patiamment » → ✓ couramment (courant), patiemment (patient)\n✗ « Viendra-t'il ? » → ✓ viendra-t-il ? (le t n'est pas une élision)\n✗ « Language » → ✓ langage (l'anglais language a un u, pas le français)\n✗ « Honnorer » → ✓ honorer, malgré honneur",
    approfondir:
      "Les rectifications orthographiques de 1990 autorisent la suppression du circonflexe sur i et u (connaitre, aout) sauf dans les terminaisons verbales et quand il distingue deux mots (dû, mûr, sûr, jeûne). Elles autorisent aussi « évènement » à côté d'« événement ». Les deux graphies étant admises, une question sérieuse ne portera pas sur ces mots : concentre-toi sur les accents sur a, e et o, qui ne changent pas.\n\nTache (salissure) et tâche (travail) sont distingués par le circonflexe ; de même mur et mûr, sur et sûr, du et dû.\n\nConseil de travail : tiens une liste personnelle de vingt mots que tu écris mal, et relis-la chaque semaine. C'est la méthode la plus rentable pour cette compétence, qui ne se raisonne pas toujours.",
    cards: [
      ["Adverbe de « patient »", "patiemment (-ent → -emment)", true],
      ["Adverbe de « courant »", "couramment (-ant → -amment)", true],
      ["peut-être ou peut être ?", "peut-être = probablement ; peut être = pouvoir + être", false],
      ["dilemme", "deux m, pas de n", false],
      ["Pourquoi forêt prend-il un circonflexe ?", "Il remplace un s disparu, visible dans forestier", false],
    ],
  },
  questions: [
    Q("B-FR-LEX-001", "fr.lexique.mots", 1, "Lequel de ces noms, souvent fautif dans les copies, est correctement orthographié ?", [
      ["dilemme", true, "Deux m, sans n."],
      ["dilemne", false, "Confusion avec la finale de « hymne »."],
      ["dillemme", false, "Un seul l."],
      ["dilème", false, "Il faut deux m et pas d'accent."],
    ], "Dilemme vient du grec di- (deux) et lêmma (proposition) : deux m, aucun n.", "On écrit dilemme.", [
      "Le mot vient du grec lêmma.", "Combien de l ? Combien de m ?", "Il n'y a pas de n.",
    ]),
    Q("B-FR-LEX-002", "fr.lexique.adverbe", 1, "Complétez : « Elle parle ___ trois langues étrangères. » (adverbe formé sur « courant »)", [
      ["couramment", true, "Adjectif en -ant : adverbe en -amment."],
      ["courament", false, "Oubli du second m."],
      ["couremment", false, "La terminaison -emment correspond aux adjectifs en -ent."],
      ["courramment", false, "Courant ne prend qu'un r."],
    ], "Courant se termine par -ant : l'adverbe se termine par -amment, couramment.", "-ant → -amment ; -ent → -emment.", [
      "Quel est l'adjectif de départ ?", "Il se termine par -ant ou -ent ?", "-ant donne -amment.",
    ]),
    Q("B-FR-LEX-003", "fr.lexique.adverbe", 2, "Complétez : « Il a attendu ___ son tour au guichet. » (adverbe formé sur « patient »)", [
      ["patiemment", true, "Adjectif en -ent : adverbe en -emment."],
      ["patiamment", false, "La terminaison -amment correspond aux adjectifs en -ant."],
      ["patiement", false, "Il faut deux m et un e après le i : -emment."],
      ["patiemmant", false, "La terminaison des adverbes est -ment."],
    ], "Patient se termine par -ent : l'adverbe est patiemment, prononcé « pa-sia-ment ».", "-ent → -emment : patiemment, prudemment, évidemment.", [
      "Quel est l'adjectif de départ ?", "Il se termine par -ent.", "-ent donne -emment, même si l'on entend « a ».",
    ], { a: "formules" }),
    Q("B-FR-LEX-004", "fr.lexique.famille", 2, "Quelle série de mots de la famille d'« honneur » est correctement orthographiée ?", [
      ["honneur, honorer, honorable", true, "Honneur a deux n, mais honorer et honorable n'en ont qu'un."],
      ["honneur, honnorer, honorable", false, "Honorer ne prend qu'un n."],
      ["honeur, honorer, honorable", false, "Honneur prend deux n."],
      ["honneur, honorer, honnorable", false, "Honorable ne prend qu'un n."],
    ], "La famille ne conserve pas toujours la consonne double : honneur (deux n), honorer, honorable, honoraire (un n).", "Honneur, mais honorer et honorable.", [
      "Le nom et le verbe ont-ils la même consonne double ?", "Honneur prend deux n.", "Ses dérivés n'en prennent qu'un.",
    ]),
    Q("B-FR-LEX-005", "fr.lexique.mots", 2, "Complétez : « Ce prix est ___ : personne ne pourra payer une telle somme. »", [
      ["exorbitant", true, "Formé sur orbite : sans h."],
      ["exhorbitant", false, "Faute très fréquente : il n'y a pas de h (confusion avec exhorter)."],
      ["exorbitent", false, "Le mot se termine par -ant."],
      ["exorbitans", false, "Au singulier, l'adjectif se termine par -t."],
    ], "Exorbitant signifie « qui sort de l'orbite », d'où le sens d'excessif. Il n'y a pas de h.", "On écrit exorbitant, sans h.", [
      "De quel mot simple vient ce mot ?", "Il vient d'orbite.", "Orbite ne prend pas de h.",
    ]),
    Q("B-FR-LEX-006", "fr.lexique.trait", 1, "Complétez : « Il viendra ___ demain, mais rien n'est encore sûr. »", [
      ["peut-être", true, "Adverbe signifiant « probablement » : trait d'union."],
      ["peut être", false, "Sans trait d'union, c'est le verbe pouvoir suivi de être ; ici il manque le sens verbal."],
      ["peu-être", false, "Peut vient du verbe pouvoir et garde son t."],
      ["peut-êtres", false, "Un adverbe ne prend pas de s."],
    ], "On peut remplacer par « probablement » : il viendra probablement demain. C'est l'adverbe peut-être, avec un trait d'union.", "peut-être = probablement.", [
      "Remplace le blanc par « probablement ».", "La phrase garde-t-elle son sens ?", "L'adverbe s'écrit avec un trait d'union.",
    ]),
    Q("B-FR-LEX-007", "fr.lexique.trait", 2, "Complétez : « Ce colis ne ___ livré avant lundi, à cause de la grève. »", [
      ["peut être", true, "Verbe pouvoir + infinitif être (forme passive) : pas de trait d'union."],
      ["peut-être", false, "L'adverbe ne convient pas : la phrase n'aurait plus de verbe conjugué."],
      ["peu être", false, "Peu est un adverbe de quantité, sans rapport."],
      ["peux être", false, "Le sujet « ce colis » est à la 3e personne : peut."],
    ], "Remplace par « pouvait être » : ce colis ne pouvait être livré. La phrase reste correcte : c'est le verbe pouvoir suivi de l'infinitif être, sans trait d'union.", "peut être = pouvoir + être.", [
      "Cherche le verbe conjugué de la phrase.", "Remplace par « pouvait être ».", "Sans le verbe pouvoir, la phrase n'aurait plus de verbe.",
    ], { a: "exemple" }),
    Q("B-FR-LEX-008", "fr.lexique.trait", 1, "Quelle forme interrogative est correctement écrite ?", [
      ["Viendra-t-il demain ?", true, "Le t euphonique est entouré de deux traits d'union."],
      ["Viendra-t'il demain ?", false, "Le t n'est pas une élision : pas d'apostrophe."],
      ["Viendra t-il demain ?", false, "Il manque le trait d'union entre le verbe et le t."],
      ["Viendra-il demain ?", false, "Le t euphonique est obligatoire entre deux voyelles."],
    ], "Entre un verbe terminé par une voyelle et un pronom commençant par une voyelle, on intercale un t euphonique encadré par deux traits d'union : viendra-t-il, a-t-elle.", "Verbe-t-il : deux traits d'union, pas d'apostrophe.", [
      "Le verbe se termine par une voyelle.", "Un t est ajouté pour la prononciation.", "Ce t n'est pas une lettre élidée.",
    ], { a: "erreur" }),
    Q("B-FR-LEX-009", "fr.lexique.accent", 2, "Complétez : « Le gardien a repéré une ___ d'encre sur la première page du registre. »", [
      ["tache", true, "Tache, sans accent, désigne une salissure."],
      ["tâche", false, "Tâche, avec un circonflexe, désigne un travail à accomplir."],
      ["tâches", false, "Pluriel et mauvais sens : il s'agit d'une salissure."],
      ["taches", false, "Le déterminant « une » impose le singulier."],
    ], "Une tache (sans accent) est une salissure ; une tâche (avec accent) est un travail. Ici, une tache d'encre.", "tache = salissure ; tâche = travail.", [
      "Le mot désigne-t-il un travail ou une salissure ?", "L'accent circonflexe distingue les deux mots.", "La salissure n'a pas d'accent.",
    ]),
    Q("B-FR-LEX-010", "fr.lexique.mots", 2, "Dans cette liste, quel mot comporte une faute d'orthographe ?", [
      ["occurence", true, "Il faut deux r : occurrence."],
      ["connexion", false, "Orthographe correcte : avec un x."],
      ["personnalité", false, "Orthographe correcte : deux n comme personne."],
      ["rationnel", false, "Orthographe correcte : deux n."],
    ], "Occurrence prend deux c et deux r. Connexion (avec x), personnalité et rationnel (deux n) sont corrects.", "On écrit occurrence : deux c, deux r.", [
      "Une seule forme est fautive.", "Compte les consonnes doubles de chaque mot.", "Occurrence vient de occurrere, avec deux r.",
    ]),
    Q("B-FR-LEX-011", "fr.lexique.mots", 1, "Complétez : « Il cherchait ses mots : son ___ restait pauvre et imprécis. »", [
      ["langage", true, "Orthographe française : sans u."],
      ["language", false, "Graphie anglaise : le français n'a pas de u."],
      ["langague", false, "Forme inexistante."],
      ["langaje", false, "Le son « je » s'écrit ici avec g."],
    ], "Le français écrit langage, sans u ; l'anglais language en prend un. La confusion vient de la langue anglaise.", "On écrit langage.", [
      "Pense au mot anglais voisin.", "Le français diffère d'une lettre.", "Il n'y a pas de u.",
    ]),
    Q("B-FR-LEX-012", "fr.lexique.mots", 2, "Complétez : « Après plusieurs mois, le service a enfin corrigé ce ___ informatique. »", [
      ["dysfonctionnement", true, "Préfixe dys- (mauvais) et deux n dans fonctionnement."],
      ["dysfonctionnemant", false, "Le suffixe nominal s'écrit -ment, avec un e."],
      ["dysfonctionement", false, "Fonctionnement prend deux n."],
      ["dysfonctionnemment", false, "Confusion avec les adverbes en -emment : le nom se termine par -ment."],
    ], "Dysfonctionnement est formé du préfixe grec dys- (difficulté, mauvais état) et de fonctionnement, qui prend deux n.", "On écrit dysfonctionnement.", [
      "Le préfixe vient du grec.", "Pense à dyslexie.", "Fonctionnement garde ses deux n.",
    ]),
    Q("B-FR-LEX-013", "fr.lexique.mots", 1, "Complétez : « Il est arrivé en retard ; ___, il n'a rien manqué d'important. »", [
      ["néanmoins", true, "Orthographe correcte : néan- puis -moins."],
      ["néamoins", false, "Il manque le n de néan-."],
      ["néanmoin", false, "Le mot se termine par -moins."],
      ["néenmoins", false, "Le mot commence par néan-."],
    ], "Néanmoins s'écrit avec néan- (comme néant) et se termine par -moins, avec un s.", "On écrit néanmoins.", [
      "Le mot est formé avec « moins ».", "Son début rappelle le mot « néant ».", "Néan + moins.",
    ]),
    Q("B-FR-LEX-014", "fr.lexique.accent", 3, "Quel adjectif dérivé de « forêt » est correctement orthographié ?", [
      ["forestier", true, "Le s disparu de forêt réapparaît dans le dérivé, sans accent."],
      ["forêstier", false, "L'accent circonflexe et le s ne coexistent pas : le circonflexe remplace le s."],
      ["forrestier", false, "Forêt ne prend qu'un r."],
      ["foretier", false, "Il faut le s qui réapparaît dans la famille."],
    ], "L'accent circonflexe de forêt remplace un s de l'ancien français (forest). Ce s réapparaît dans forestier, et le circonflexe disparaît.", "Circonflexe = s disparu, qui réapparaît dans les dérivés.", [
      "Pourquoi forêt a-t-il un accent circonflexe ?", "Cet accent remplace une lettre disparue.", "La lettre réapparaît dans le dérivé.",
    ], { a: "regle", r: true }),
    Q("B-FR-LEX-015", "fr.lexique.mots", 2, "Lequel de ces verbes est correctement orthographié à l'infinitif ?", [
      ["apercevoir", true, "Un seul p."],
      ["appercevoir", false, "Apercevoir ne prend qu'un p, contrairement à appeler."],
      ["apeler", false, "Appeler prend deux p."],
      ["aplaudir", false, "Applaudir prend deux p."],
    ], "Apercevoir n'a qu'un p ; appeler et applaudir en prennent deux. Aucune règle simple ne les distingue : il faut les mémoriser.", "Apercevoir (un p), appeler et applaudir (deux p).", [
      "Les verbes en ap- n'ont pas tous deux p.", "Vérifie chaque verbe séparément.", "Le verbe de la vue n'en prend qu'un.",
    ], { r: true }),
  ],
};
