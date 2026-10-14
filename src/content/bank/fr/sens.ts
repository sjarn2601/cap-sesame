// Français : sens des mots (synonymes, antonymes, mots rares, polysémie, registres).
import { maker, type FrPart } from "./_util";

const Q = maker("fr.sens");

export const SENS: FrPart = {
  skill: { id: "fr.sens", subjectCode: "FR", domain: "Vocabulaire", name: "Sens des mots et registres", synonyms: ["synonyme", "antonyme", "definition", "mot rare", "polysemie", "registre de langue", "soutenu", "familier"] },
  lesson: {
    skillId: "fr.sens",
    title: "Le sens des mots : synonymes, antonymes, polysémie et registres",
    objectives: ["Trouver le synonyme ou l'antonyme d'un mot en contexte", "Définir des mots soutenus fréquents", "Distinguer sens propre et sens figuré", "Identifier le registre d'un mot"],
    prerequisites: ["fr.vocab"],
    regle:
      "Un synonyme a un sens proche, rarement identique : il doit pouvoir remplacer le mot dans la phrase donnée sans en changer le sens. C'est donc toujours le contexte qui décide. Dans « une affaire délicate », délicate signifie épineuse, difficile ; dans « un parfum délicat », il signifie raffiné.\n\nUn antonyme a un sens contraire : concis s'oppose à prolixe, éphémère à pérenne. Méfie-toi des options qui sont des synonymes déguisés : le concours les place exprès parmi les antonymes proposés.\n\nLa polysémie est le fait qu'un mot ait plusieurs sens. Le sens propre est le sens premier, concret ; le sens figuré en dérive par image (cuisiner un plat / cuisiner un suspect, c'est-à-dire l'interroger avec insistance).\n\nLes registres de langue classent les mots selon la situation : familier (bouquin, bagnole, fouiner), courant (livre, voiture, chercher), soutenu (ouvrage, s'enquérir, naguère). Un mot soutenu n'est pas forcément rare ; il appartient à l'écrit soigné.\n\nMots soutenus fréquents au concours : abscons (obscur, difficile à comprendre), fallacieux (trompeur), laconique (bref, qui use de peu de mots), obsolète (périmé, dépassé), pusillanime (qui manque de courage), sinécure (emploi rémunéré qui demande peu de travail), vilipender (dénigrer, traiter avec mépris), vétuste (abîmé par le temps), péremptoire (tranchant, qui n'admet pas de réplique), velléitaire (qui a des intentions sans passer à l'acte), ubuesque (absurde et grotesque), prolixe (trop bavard), pérenne (durable), éphémère (de courte durée).\n\nNe confonds pas les homophones lexicaux : censé (supposé) et sensé (raisonnable), voire (et même) et voir (percevoir), près de (proche de) et prêt à (disposé à).",
    formules:
      "abscons = obscur, difficile à comprendre\nfallacieux = trompeur\nlaconique = bref, concis\nobsolète = périmé, dépassé\npusillanime = peureux, timoré (contraire : courageux)\nsinécure = emploi rémunéré sans grand travail\nvilipender = dénigrer, dire du mal publiquement\nvétuste = détérioré par le temps\npéremptoire = tranchant, sans réplique\nvelléitaire = qui veut sans agir\nsensé = raisonnable ; censé = supposé\nRegistres : bouquin (familier) / livre (courant) / ouvrage (soutenu)",
    methode:
      "1. Lis la phrase entière : le contexte fixe le sens du mot.\n2. Formule mentalement une définition simple avant de regarder les options.\n3. Remplace le mot par chaque option : la phrase garde-t-elle exactement son sens ?\n4. Pour un antonyme, élimine d'abord les synonymes déguisés.\n5. Pour un mot inconnu, cherche une racine ou un mot de la même famille (laconique vient de Laconie, la région de Sparte, dont les habitants étaient réputés brefs).",
    exemple:
      "« Son argument était fallacieux. » Définition : qui cherche à tromper. Options : trompeur, fatigant, prétentieux, faillible. Fatigant et prétentieux n'ont aucun rapport ; faillible (qui peut se tromper) ressemble par la forme mais qualifie une personne qui se trompe, pas un argument qui trompe. Réponse : trompeur.\n\n« Quel est le registre de “bagnole” ? » Le mot courant est voiture ; un écrit soigné dirait plutôt automobile. Bagnole relève du registre familier.",
    erreur:
      "✗ Choisir le mot qui ressemble par le son (fallacieux / faillible) → ✓ vérifier le sens par substitution dans la phrase\n✗ Prendre un synonyme pour un antonyme (prolixe / bavard) → ✓ éliminer d'abord les synonymes\n✗ Donner le sens propre quand la phrase emploie le sens figuré → ✓ relire la phrase pour voir si le mot est employé comme une image\n✗ « Il est sensé arriver à 8 h » → ✓ censé (supposé) ; sensé signifie raisonnable",
    approfondir:
      "Beaucoup de mots soutenus s'expliquent par le latin ou le grec : obsolète (obsoletus, usé), pusillanime (pusillus, tout petit, et animus, l'esprit), sinécure (sine cura, sans souci), pérenne (perennis, qui dure toute l'année). Retenir la racine permet de deviner les mots de la même famille.\n\nL'ironie peut inverser le sens d'un mot (« Quel beau temps ! » sous la pluie). Dans une question de sens en contexte, regarde toujours le ton de la phrase.\n\nGestion du temps : une question de définition se tranche en quinze secondes si tu connais le mot. Si tu ne le connais pas, élimine les options sans rapport, choisis parmi les restantes et passe : il n'y a pas de point négatif.",
    cards: [
      ["Fallacieux", "Trompeur", true],
      ["Laconique", "Qui s'exprime en peu de mots", true],
      ["Abscons", "Obscur, difficile à comprendre", true],
      ["Sinécure", "Emploi rémunéré qui demande peu de travail", true],
      ["Sensé / censé", "Sensé = raisonnable ; censé = supposé", false],
    ],
  },
  questions: [
    Q("B-FR-SENS-001", "fr.sens.synonyme", 2, "Quel est le synonyme le plus proche de « fallacieux » ?", [
      ["trompeur", true, "Fallacieux qualifie ce qui cherche à tromper."],
      ["faillible", false, "Ressemblance de forme : faillible signifie « qui peut se tromper »."],
      ["prétentieux", false, "Sans rapport de sens."],
      ["fatigant", false, "Sans rapport de sens."],
    ], "Un argument fallacieux est un argument trompeur, qui a l'apparence de la vérité. Le mot vient du latin fallax, trompeur.", "Fallacieux = trompeur.", [
      "Pense à un « argument fallacieux ».", "Un tel argument induit en erreur.", "Le latin fallax signifie trompeur.",
    ]),
    Q("B-FR-SENS-002", "fr.sens.antonyme", 2, "Quel est l'antonyme de « prolixe » ?", [
      ["concis", true, "Concis : qui dit beaucoup en peu de mots, le contraire de prolixe."],
      ["bavard", false, "Synonyme, et non antonyme."],
      ["fécond", false, "Confusion avec prolifique."],
      ["confus", false, "Un texte peut être confus et bref : ce n'est pas le contraire de prolixe."],
    ], "Prolixe signifie « trop long, diffus ». Son contraire est concis (ou laconique, bref).", "Prolixe ↔ concis.", [
      "Que signifie prolixe ?", "Un discours prolixe est trop long.", "Cherche le mot qui signifie « bref et dense ».",
    ]),
    Q("B-FR-SENS-003", "fr.sens.definition", 3, "Que signifie le verbe « vilipender » ?", [
      ["Dénigrer publiquement, traiter avec mépris", true, "Vilipender quelqu'un, c'est le présenter comme vil."],
      ["Voler de petites sommes", false, "Confusion avec chaparder."],
      ["Gaspiller son argent", false, "Confusion avec dilapider."],
      ["Hésiter longuement", false, "Confusion avec tergiverser."],
    ], "Vilipender (de vil, sans valeur) signifie traiter quelqu'un comme méprisable, le dénigrer publiquement.", "Vilipender = dénigrer.", [
      "Le mot contient l'adjectif « vil ».", "Vil signifie méprisable.", "Le verbe veut donc dire « rendre méprisable par la parole ».",
    ]),
    Q("B-FR-SENS-004", "fr.sens.definition", 1, "Que signifie l'adjectif « laconique » ?", [
      ["Qui s'exprime en peu de mots", true, "Une réponse laconique est brève."],
      ["Triste et mélancolique", false, "Confusion avec lacrymal ou élégiaque."],
      ["Qui concerne les lacs", false, "Rapprochement erroné avec le mot lac."],
      ["Nonchalant, indolent", false, "Confusion avec apathique."],
    ], "Laconique vient de Laconie, région de Sparte, dont les habitants étaient réputés pour leur brièveté.", "Laconique = bref, concis.", [
      "Pense à « une réponse laconique ».", "Une telle réponse tient en quelques mots.", "Le mot vient du nom de la région de Sparte.",
    ]),
    Q("B-FR-SENS-005", "fr.sens.synonyme", 2, "Dans « Cette affaire est délicate », quel mot peut remplacer « délicate » sans changer le sens ?", [
      ["épineuse", true, "Délicate signifie ici difficile à traiter."],
      ["raffinée", false, "Sens de délicat dans « un parfum délicat », pas dans cette phrase."],
      ["fragile", false, "Sens de délicat pour un objet, pas pour une affaire."],
      ["savoureuse", false, "Sens gustatif, sans rapport."],
    ], "Délicat est polysémique : raffiné (un mets délicat), fragile (une santé délicate), difficile (une affaire délicate). Pour une affaire, le sens est « difficile, embarrassante » : épineuse.", "Un synonyme se choisit en contexte.", [
      "Délicat a plusieurs sens.", "De quoi parle-t-on dans la phrase ?", "Une affaire délicate est difficile à régler.",
    ]),
    Q("B-FR-SENS-006", "fr.sens.registre", 1, "Lequel de ces verbes, tous liés à la recherche d'information, relève du registre soutenu ?", [
      ["s'enquérir", true, "Verbe de l'écrit soigné : s'enquérir de la santé de quelqu'un."],
      ["se renseigner", false, "Registre courant."],
      ["fouiner", false, "Registre familier."],
      ["demander", false, "Registre courant."],
    ], "S'enquérir appartient au registre soutenu ; se renseigner et demander au registre courant ; fouiner au registre familier.", "Registres : fouiner (familier), se renseigner (courant), s'enquérir (soutenu).", [
      "Classe chaque verbe : familier, courant ou soutenu.", "Lequel emploierait-on surtout à l'écrit soigné ?", "Il se construit avec « de » : … de la santé de quelqu'un.",
    ]),
    Q("B-FR-SENS-007", "fr.sens.registre", 1, "À quel registre de langue appartient le mot « bouquin » ?", [
      ["familier", true, "Bouquin est la variante familière de livre."],
      ["courant", false, "Le mot courant est livre."],
      ["soutenu", false, "Le mot soutenu serait ouvrage ou volume."],
      ["technique", false, "Bouquin n'appartient à aucun vocabulaire spécialisé."],
    ], "Livre est courant, ouvrage est soutenu, bouquin est familier.", "Bouquin (familier), livre (courant), ouvrage (soutenu).", [
      "Quel est le mot courant équivalent ?", "Bouquin s'emploie-t-il dans une lettre officielle ?", "C'est un mot de la conversation détendue.",
    ]),
    Q("B-FR-SENS-008", "fr.sens.polysemie", 1, "Dans quelle phrase le verbe « cuisiner » est-il employé au sens figuré ?", [
      ["Les policiers ont cuisiné le suspect pendant des heures.", true, "Cuisiner quelqu'un, c'est l'interroger avec insistance : sens figuré et familier."],
      ["Mon frère cuisine un gratin pour ce soir.", false, "Sens propre : préparer un plat."],
      ["Elle aime cuisiner les légumes de saison.", false, "Sens propre."],
      ["Nous avons cuisiné ensemble tout l'après-midi.", false, "Sens propre."],
    ], "Au sens propre, cuisiner signifie préparer des aliments. Au sens figuré (familier), cuisiner quelqu'un, c'est le presser de questions pour obtenir des aveux.", "Sens figuré : le mot est pris comme une image.", [
      "Dans trois phrases, on prépare de la nourriture.", "Dans la quatrième, l'objet du verbe n'est pas un aliment.", "On ne cuisine pas un suspect au sens propre.",
    ]),
    Q("B-FR-SENS-009", "fr.sens.definition", 1, "Que signifie l'adjectif « obsolète » ?", [
      ["Périmé, dépassé", true, "Un logiciel obsolète n'est plus à jour."],
      ["Obligatoire", false, "Rapprochement erroné par le début du mot."],
      ["Obscur", false, "Rapprochement erroné par le début du mot."],
      ["Très ancien et précieux", false, "Obsolète est péjoratif : il n'implique aucune valeur."],
    ], "Obsolète (du latin obsoletus, usé) qualifie ce qui est tombé en désuétude, ce qui n'est plus adapté.", "Obsolète = dépassé.", [
      "Pense à « un matériel obsolète ».", "Ce matériel n'est plus utilisé.", "Le mot latin signifie « usé ».",
    ]),
    Q("B-FR-SENS-010", "fr.sens.synonyme", 2, "Quel mot est un synonyme d'« abscons » ?", [
      ["obscur", true, "Abscons qualifie ce qui est difficile à comprendre."],
      ["absent", false, "Rapprochement de forme, sans rapport de sens."],
      ["abrupt", false, "Escarpé ou brusque, sans rapport."],
      ["absurde", false, "Contraire à la raison : un texte peut être abscons sans être absurde."],
    ], "Abscons (du latin absconsus, caché) qualifie un texte ou un discours difficile à comprendre : obscur, hermétique.", "Abscons = obscur, hermétique.", [
      "Pense à « un discours abscons ».", "Un tel discours est difficile à suivre.", "Le latin absconsus signifie caché.",
    ]),
    Q("B-FR-SENS-011", "fr.sens.definition", 3, "Que désigne une « sinécure » ?", [
      ["Un emploi rémunéré qui demande peu de travail", true, "Du latin sine cura, sans souci."],
      ["Un traitement médical de longue durée", false, "Rapprochement erroné avec le mot cure."],
      ["Une cérémonie religieuse", false, "Sans rapport."],
      ["Une plainte sans fondement", false, "Sans rapport."],
    ], "Sinécure vient du latin sine cura (sans souci). On dit souvent : « ce n'est pas une sinécure » pour une tâche difficile.", "Sinécure = poste facile et rémunéré.", [
      "Pense à l'expression « ce n'est pas une sinécure ».", "Elle s'emploie pour une tâche pénible.", "Le latin sine cura signifie « sans souci ».",
    ], { r: true }),
    Q("B-FR-SENS-012", "fr.sens.antonyme", 3, "Quel est l'antonyme de « pusillanime » ?", [
      ["audacieux", true, "Pusillanime signifie qui manque de courage : l'audacieux est son contraire."],
      ["peureux", false, "Synonyme et non antonyme."],
      ["mesquin", false, "Sens voisin de petitesse, mais pas contraire."],
      ["unanime", false, "Ressemblance de terminaison, sans rapport."],
    ], "Pusillanime (du latin pusillus, tout petit, et animus, esprit) qualifie quelqu'un de timoré, qui manque de courage. Antonymes : audacieux, courageux, hardi.", "Pusillanime ↔ audacieux.", [
      "Que signifie pusillanime ?", "Le mot évoque une âme petite, craintive.", "Cherche le contraire de « craintif ».",
    ], { r: true }),
    Q("B-FR-SENS-013", "fr.sens.definition", 2, "Que signifie l'adjectif « vétuste » dans « un immeuble vétuste » ?", [
      ["Abîmé par le temps, en mauvais état", true, "Vétuste qualifie ce qui est détérioré par l'âge."],
      ["Ancien et prestigieux", false, "Vétuste est péjoratif : il ne suggère aucun prestige."],
      ["Très vaste", false, "Rapprochement de forme avec vaste."],
      ["Récemment rénové", false, "Contresens."],
    ], "Vétuste (du latin vetustus, vieux) signifie détérioré par le temps : un immeuble vétuste doit être rénové.", "Vétuste = dégradé par l'âge.", [
      "Le mot a une valeur positive ou négative ?", "Il est négatif.", "Un immeuble vétuste a besoin de travaux.",
    ], { r: true }),
    Q("B-FR-SENS-014", "fr.sens.homophone", 2, "Complétez : « Tu es ___ rendre ton dossier avant vendredi midi. »", [
      ["censé", true, "Censé signifie supposé, tenu de."],
      ["sensé", false, "Homophone : sensé signifie raisonnable, qui a du bon sens."],
      ["sensée", false, "Homophone au féminin, de mauvais sens."],
      ["sencé", false, "Forme inexistante."],
    ], "Être censé faire quelque chose, c'est être supposé le faire. Sensé qualifie une personne ou une idée raisonnable.", "Censé = supposé ; sensé = raisonnable.", [
      "Le sens attendu est « supposé ».", "Deux mots se prononcent de la même façon.", "Celui qui signifie « raisonnable » vient de « sens ».",
    ], { a: "erreur" }),
  ],
};
