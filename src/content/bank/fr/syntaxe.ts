// Français : syntaxe et impropriétés (pléonasmes, barbarismes, solécismes, constructions).
import { maker, type FrPart } from "./_util";

const Q = maker("fr.syntaxe");

export const SYNTAXE: FrPart = {
  skill: { id: "fr.syntaxe", subjectCode: "FR", domain: "Grammaire", name: "Syntaxe et impropriétés", synonyms: ["pleonasme", "barbarisme", "solecisme", "anglicisme", "malgre que", "se rappeler de", "pallier", "dont", "negation", "phrase correcte"] },
  lesson: {
    skillId: "fr.syntaxe",
    title: "Syntaxe : repérer la phrase incorrecte",
    objectives: ["Repérer pléonasmes, barbarismes, solécismes et anglicismes", "Construire correctement les verbes et les pronoms relatifs", "Éviter le participe mal rattaché et les fautes de négation"],
    prerequisites: [],
    regle:
      "Les questions de syntaxe demandent souvent de trouver la seule phrase correcte, ou la seule fautive. Il faut connaître les quatre grandes familles de fautes.\n\nLe pléonasme répète inutilement une idée : monter en haut, sortir dehors, collaborer ensemble, s'entraider mutuellement, prévoir à l'avance, au jour d'aujourd'hui, puis ensuite, voire même, comme par exemple, reculer en arrière.\n\nLe barbarisme est un mot déformé ou inexistant : rénumérer pour rémunérer, aréoport pour aéroport, infractus pour infarctus.\n\nLe solécisme est une construction fautive avec des mots corrects. Les plus testés : « malgré que » (à remplacer par bien que, ou malgré + nom), « se rappeler de quelque chose » (on se rappelle quelque chose, on se souvient de quelque chose), « pallier à » (on pallie quelque chose, sans préposition), « aller au coiffeur » (chez le coiffeur), « c'est de cela dont il s'agit » (c'est de cela qu'il s'agit, ou c'est cela dont il s'agit), « le livre que je t'ai parlé » (dont je t'ai parlé), « je me demande qu'est-ce qu'il fait » (ce qu'il fait).\n\nL'anglicisme calque une tournure anglaise : « faire du sens » (avoir du sens), « définitivement » au sens de « certainement », « supporter une équipe » (la soutenir).\n\nLe pronom relatif dépend de la construction du verbe : parler de → dont ; penser à → auquel, à laquelle ; compter sur → sur lequel. « Dont » contient déjà « de » : il ne faut pas reprendre ce « de » par « en » ou par une autre préposition.\n\nLe participe ou le gérondif placé en tête de phrase doit avoir le même sujet que le verbe principal. « En sortant, la pluie nous a surpris » est fautif : ce n'est pas la pluie qui sort.\n\nNégation. À l'écrit, « ne » est obligatoire. Avec personne, rien, aucun, jamais, nulle part, ni… ni, on n'ajoute pas « pas » : aucun élève n'est venu.",
    formules:
      "Se rappeler quelque chose ; se souvenir de quelque chose\nPallier un manque (sans à)\nBien que + subjonctif, ou malgré + nom (pas malgré que)\nAller chez le coiffeur, chez le médecin\nParler de → dont ; penser à → auquel ; compter sur → sur lequel\nC'est de cela qu'il s'agit ; c'est cela dont il s'agit\nJe me demande ce qu'il fait (pas qu'est-ce que)\nAucun, personne, rien + ne, sans pas\nPléonasmes : monter en haut, sortir dehors, prévoir à l'avance, collaborer ensemble, s'entraider mutuellement",
    methode:
      "1. Si la question demande la phrase correcte, cherche une faute dans chaque option et élimine.\n2. Vérifie d'abord les constructions de verbes (préposition ou non).\n3. Vérifie ensuite les pronoms relatifs (dont, que, auquel).\n4. Vérifie l'accord entre le participe en tête de phrase et le sujet.\n5. Repère les mots qui se répètent par le sens (pléonasme).\n6. La phrase qui reste est la bonne ; ne cherche pas de faute imaginaire.",
    exemple:
      "Quelle phrase est correcte ?\na) Je me rappelle de cette soirée. Faux : se rappeler est transitif direct.\nb) C'est l'ami dont je t'en ai parlé. Faux : dont et en font double emploi.\nc) Malgré qu'il soit tard, je reste. Faux : malgré que est à éviter, on dit bien que.\nd) Je me souviens de cette soirée. Correct : se souvenir de.\nRéponse : d.",
    erreur:
      "✗ « Je m'en rappelle » → ✓ je me le rappelle, ou je m'en souviens\n✗ « Pallier au manque » → ✓ pallier le manque\n✗ « Malgré qu'il pleuve » → ✓ bien qu'il pleuve, ou malgré la pluie\n✗ « C'est de ça dont je parle » → ✓ c'est de ça que je parle\n✗ « Arrivé à la gare, le train était parti » → ✓ quand je suis arrivé à la gare, le train était parti\n✗ « Personne n'est pas venu » → ✓ personne n'est venu",
    approfondir:
      "« Malgré que » n'est admis par l'Académie que dans la vieille tournure « malgré que j'en aie » (malgré moi). Des écrivains l'ont employé au sens de « bien que », mais la norme scolaire et l'Académie le condamnent : au concours, considère-le comme fautif.\n\nL'Académie déconseille aussi « débuter quelque chose » (on commence une réunion ; la réunion débute), « se baser sur » (se fonder sur) et « solutionner » (résoudre). L'usage courant hésite : ces tournures sont rarement la seule faute d'une phrase, mais mieux vaut les éviter dans tes propres écrits.\n\nGestion du temps : les questions « quelle phrase est correcte » prennent plus de temps que les autres. Lis les quatre phrases une seule fois, en t'arrêtant sur les zones sensibles (préposition, relatif, négation, participe initial).",
    cards: [
      ["Se rappeler de quelque chose ?", "Non : se rappeler quelque chose ; se souvenir de quelque chose", false],
      ["Pallier à un manque ?", "Non : pallier un manque", false],
      ["Malgré que + subjonctif ?", "À éviter : bien que + subjonctif, ou malgré + nom", false],
      ["Pléonasme", "Répétition inutile d'une idée : monter en haut, prévoir à l'avance", true],
      ["Barbarisme", "Mot déformé ou inexistant : rénumérer pour rémunérer", true],
    ],
  },
  questions: [
    Q("B-FR-SYN-001", "fr.syntaxe.pleonasme", 1, "Quelle phrase ne contient aucun pléonasme ?", [
      ["Il faut prévoir un plan de secours.", true, "Prévoir contient déjà l'idée d'avance ; ici il n'est pas redoublé."],
      ["Les deux associés collaborent ensemble depuis dix ans.", false, "Collaborer contient déjà l'idée d'ensemble."],
      ["Nous allons monter en haut de la tour.", false, "On ne peut monter qu'en haut : pléonasme."],
      ["Au jour d'aujourd'hui, le problème reste entier.", false, "Aujourd'hui contient déjà « au jour d'hui »."],
    ], "Collaborer ensemble, monter en haut et au jour d'aujourd'hui répètent une idée déjà contenue dans le mot. « Prévoir un plan » est correct ; « prévoir à l'avance » serait pléonastique.", "Pléonasme : répétition inutile d'une idée.", [
      "Cherche les répétitions de sens.", "Que signifie « collaborer » ? « monter » ?", "Une seule phrase n'ajoute rien d'inutile.",
    ]),
    Q("B-FR-SYN-002", "fr.syntaxe.construction", 3, "Quelle est la forme correcte de la phrase « Malgré qu'il pleuve, nous sortirons » ?", [
      ["Bien qu'il pleuve, nous sortirons.", true, "Bien que + subjonctif est la construction correcte."],
      ["Malgré qu'il pleut, nous sortirons.", false, "Le mode change, mais « malgré que » reste fautif."],
      ["Malgré qu'il pleuvrait, nous sortirons.", false, "Malgré que reste fautif, et le conditionnel aussi."],
      ["Malgré qu'il pleuve, nous sortirons.", false, "Phrase de départ : « malgré que » est condamné par l'Académie au sens de « bien que »."],
    ], "« Malgré » est une préposition qui se construit avec un nom (malgré la pluie). Pour introduire une proposition, on emploie bien que ou quoique + subjonctif.", "Malgré + nom ; bien que + subjonctif.", [
      "Malgré est une préposition.", "Une préposition introduit un nom, pas une proposition.", "Quelle conjonction de concession convient ?",
    ], { a: "approfondir" }),
    Q("B-FR-SYN-003", "fr.syntaxe.construction", 2, "Complétez : « Je me rappelle ___ vacances en Bretagne avec nostalgie. »", [
      ["nos", true, "Se rappeler est transitif direct : se rappeler quelque chose."],
      ["de nos", false, "Confusion avec se souvenir de."],
      ["à nos", false, "Aucune préposition n'est attendue."],
      ["sur nos", false, "Aucune préposition n'est attendue."],
    ], "On se rappelle quelque chose (sans préposition) ; on se souvient de quelque chose. « Je me rappelle nos vacances. »", "Se rappeler quelque chose ; se souvenir de quelque chose.", [
      "Le verbe est se rappeler, pas se souvenir.", "Se rappeler se construit-il avec « de » ?", "Il est transitif direct.",
    ]),
    Q("B-FR-SYN-004", "fr.syntaxe.construction", 2, "Complétez : « Cette mesure vise à ___ manque de personnel dans les hôpitaux. »", [
      ["pallier le", true, "Pallier est transitif direct : pallier quelque chose."],
      ["pallier au", false, "Pallier ne se construit pas avec à."],
      ["palier au", false, "Palier est un nom (palier d'escalier), et la construction est fautive."],
      ["pallier à ce", false, "Construction fautive avec à."],
    ], "Pallier (atténuer, compenser provisoirement) est transitif direct : on pallie un manque, une insuffisance.", "Pallier un manque, sans préposition.", [
      "Pallier est-il suivi d'une préposition ?", "Pense à « compenser un manque ».", "Le verbe est transitif direct.",
    ], { a: "formules" }),
    Q("B-FR-SYN-005", "fr.syntaxe.relatif", 1, "Quelle phrase emploie correctement le pronom relatif ?", [
      ["Voici le livre dont je t'ai parlé.", true, "Parler de quelque chose → dont."],
      ["Voici le livre que je t'ai parlé.", false, "Parler de : il faut dont, pas que."],
      ["Voici le livre dont je t'en ai parlé.", false, "Dont contient déjà « de » : en fait double emploi."],
      ["Voici le livre où je t'ai parlé.", false, "Où exprime le lieu ou le temps."],
    ], "Le verbe parler se construit avec de : le relatif est dont. Il ne faut pas reprendre ce complément par en.", "Verbe + de → dont, sans en.", [
      "Quelle préposition suit « parler » ?", "Quel relatif contient « de » ?", "Ne répète pas le complément.",
    ]),
    Q("B-FR-SYN-006", "fr.syntaxe.relatif", 3, "Complétez : « C'est de ce projet ___ il est question dans la réunion de demain. »", [
      ["qu'", true, "Dans la tournure c'est… que, le « de » est déjà exprimé : on emploie que."],
      ["dont", false, "Double emploi : « de ce projet » et « dont » contiennent tous deux la préposition de."],
      ["duquel", false, "Même double emploi de la préposition de."],
      ["où", false, "Où exprime le lieu ou le temps."],
    ], "On peut dire « c'est ce projet dont il est question » ou « c'est de ce projet qu'il est question ». Mais pas « c'est de ce projet dont », qui exprime deux fois de.", "C'est de cela qu'il s'agit ; c'est cela dont il s'agit.", [
      "La préposition « de » figure déjà avant « ce projet ».", "Dont contient aussi « de ».", "Il faut un relatif sans préposition.",
    ], { a: "erreur", r: true }),
    Q("B-FR-SYN-007", "fr.syntaxe.participe", 3, "Quelle phrase évite le participe ou le gérondif mal rattaché ?", [
      ["En sortant du cinéma, nous avons croisé nos voisins.", true, "Le sujet « nous » fait bien l'action de sortir."],
      ["En sortant du cinéma, la pluie nous a surpris.", false, "Le gérondif se rapporte grammaticalement à « la pluie », qui ne sort pas du cinéma."],
      ["Arrivé à la gare, le train était déjà parti.", false, "Le participe se rapporte grammaticalement au « train », alors que c'est le voyageur qui arrive à la gare."],
      ["Fatiguée par le voyage, la chambre lui parut accueillante.", false, "Le participe se rapporte à « la chambre », qui n'est pas fatiguée."],
    ], "Un participe ou un gérondif placé en tête de phrase se rapporte au sujet du verbe principal. Il faut donc que ce sujet soit celui qui fait l'action.", "Participe en tête de phrase : même sujet que le verbe principal.", [
      "Pour chaque phrase, demande-toi qui fait l'action du participe.", "Compare avec le sujet du verbe principal.", "Une seule phrase a le même sujet pour les deux.",
    ]),
    Q("B-FR-SYN-008", "fr.syntaxe.negation", 1, "Quelle phrase respecte la négation de la langue écrite ?", [
      ["Aucun candidat n'a terminé l'épreuve.", true, "Aucun + ne, sans pas."],
      ["Aucun candidat n'a pas terminé l'épreuve.", false, "Aucun remplace pas : les deux ensemble forment une double négation fautive."],
      ["Aucun candidat a terminé l'épreuve.", false, "Le ne est obligatoire à l'écrit."],
      ["Pas aucun candidat n'a terminé l'épreuve.", false, "Construction fautive et familière."],
    ], "Avec aucun, personne, rien ou jamais, la négation se forme avec ne seul : aucun candidat n'a terminé.", "Aucun, personne, rien : ne sans pas.", [
      "Quel mot porte déjà la négation ?", "Aucun remplace-t-il pas ?", "Le ne reste obligatoire à l'écrit.",
    ]),
    Q("B-FR-SYN-009", "fr.syntaxe.construction", 2, "Quelle phrase construit correctement l'interrogation indirecte ?", [
      ["Je me demande ce qu'il pense de ce projet.", true, "Interrogation indirecte : ce que, sans inversion."],
      ["Je me demande qu'est-ce qu'il pense de ce projet.", false, "Qu'est-ce que appartient à l'interrogation directe."],
      ["Je me demande qu'est-ce qu'il en pense de ce projet.", false, "Qu'est-ce que et double reprise par en : deux fautes."],
      ["Je me demande que pense-t-il de ce projet.", false, "Pas d'inversion du sujet dans l'interrogation indirecte."],
    ], "Dans l'interrogation indirecte, « qu'est-ce que » devient « ce que », et l'on n'inverse pas le sujet : je me demande ce qu'il pense.", "Interrogation indirecte : ce que, sans inversion.", [
      "La question dépend du verbe « se demander ».", "Elle n'a pas de point d'interrogation.", "« Qu'est-ce que » devient « ce que ».",
    ]),
    Q("B-FR-SYN-010", "fr.syntaxe.anglicisme", 2, "Quelle expression est un calque fautif de l'anglais ?", [
      ["faire du sens", true, "Calque de « to make sense » ; on dit avoir du sens."],
      ["avoir du sens", false, "Expression française correcte."],
      ["prendre une décision", false, "Expression française correcte."],
      ["tenir compte de", false, "Expression française correcte."],
    ], "« Faire du sens » traduit mot à mot l'anglais to make sense. En français, on dit « avoir du sens » ou « être logique ».", "Avoir du sens, pas faire du sens.", [
      "Une seule expression vient de l'anglais.", "Pense à « to make sense ».", "En français, une idée a du sens : on ne le fait pas.",
    ]),
    Q("B-FR-SYN-011", "fr.syntaxe.barbarisme", 1, "Complétez : « Ce travail sera ___ au tarif horaire habituel. »", [
      ["rémunéré", true, "Du latin remunerari : ré-mu-né-ré."],
      ["rénuméré", false, "Barbarisme par inversion du m et du n (influence de « numéro »)."],
      ["rémunérer", false, "Infinitif à la place du participe passé."],
      ["rémuneré", false, "Accent aigu manquant sur le e."],
    ], "Rémunérer vient du latin munus, muneris (présent, charge) : le m précède le n. Rénumérer est un barbarisme courant.", "On écrit rémunérer : m puis n.", [
      "Ce verbe n'a rien à voir avec les numéros.", "Il vient du latin munus.", "Le m vient avant le n.",
    ]),
    Q("B-FR-SYN-012", "fr.syntaxe.pleonasme", 2, "Quelle phrase contient un pléonasme ?", [
      ["Il faut s'entraider mutuellement avant l'examen.", true, "S'entraider contient déjà l'idée de réciprocité."],
      ["Il faut s'entraider avant l'examen.", false, "Phrase correcte."],
      ["Ils se sont aidés avant l'examen.", false, "Phrase correcte : aucune idée n'est répétée."],
      ["Il faut réviser régulièrement avant l'examen.", false, "Aucune répétition de sens."],
    ], "Le préfixe entre- marque déjà la réciprocité : s'entraider mutuellement est un pléonasme.", "S'entraider, s'entretuer : réciprocité déjà exprimée.", [
      "Cherche une idée exprimée deux fois.", "Que signifie le préfixe entre- ?", "Il marque déjà la réciprocité.",
    ], { r: true }),
    Q("B-FR-SYN-013", "fr.syntaxe.construction", 1, "Complétez : « Avant la cérémonie, nous irons ___ pour une coupe. »", [
      ["chez le coiffeur", true, "On va chez une personne, à un lieu."],
      ["au coiffeur", false, "Solécisme : à s'emploie devant un lieu, pas devant une personne."],
      ["à le coiffeur", false, "La contraction est obligatoire, et la construction reste fautive."],
      ["vers le coiffeur", false, "Vers indique une direction, pas une destination atteinte."],
    ], "On va à un lieu (au salon de coiffure) et chez une personne (chez le coiffeur, chez le médecin).", "Aller chez une personne, à un lieu.", [
      "Le coiffeur est-il un lieu ou une personne ?", "Quelle préposition s'emploie devant une personne ?", "Pense à « chez le médecin ».",
    ]),
  ],
};
