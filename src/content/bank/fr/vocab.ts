// Français : paronymes.
import { maker, type FrPart } from "./_util";

const Q = maker("fr.vocab");

export const VOCAB: FrPart = {
  skill: { id: "fr.vocab", subjectCode: "FR", domain: "Vocabulaire", name: "Paronymes", synonyms: ["paronyme", "vocabulaire", "mot juste", "eminent imminent", "conjecture conjoncture", "effraction infraction"] },
  lesson: {
    skillId: "fr.vocab",
    title: "Les paronymes : choisir le mot juste",
    objectives: ["Distinguer les paronymes les plus fréquents", "Utiliser le contexte et l'étymologie pour choisir le mot juste", "Mémoriser les couples par une phrase de contraste"],
    prerequisites: [],
    regle:
      "Les paronymes sont des mots de forme et de son voisins, mais de sens différents. L'erreur consiste à employer l'un pour l'autre : elle passe à l'oral et se voit à l'écrit. Le concours propose en général le bon mot, son paronyme, et deux mots plus éloignés.\n\nLa méthode tient en deux temps. D'abord, reformule le sens attendu par la phrase avec tes propres mots (« sur le point d'arriver », « une hypothèse »). Ensuite, cherche quel mot a exactement ce sens, et méfie-toi de celui qui te vient en premier parce qu'il est plus courant.\n\nL'étymologie aide souvent. Le préfixe in- ou im- signifie « dans » ou marque la négation ; é- ou ex- signifie « hors de ». Une éruption sort (un volcan entre en éruption) ; une irruption entre (on fait irruption dans une pièce). On émigre en quittant son pays, on immigre en entrant dans un autre. Une effraction est une entrée par force (fraction = cassure) ; une infraction est une violation d'une règle.\n\nCouples à connaître : imminent (sur le point d'arriver) / éminent (remarquable) ; conjecture (hypothèse) / conjoncture (situation d'ensemble à un moment donné) ; prodige (enfant surdoué, chose extraordinaire) / prodigue (qui dépense sans compter) ; collision (choc) / collusion (entente secrète) ; allusion (évocation indirecte) / illusion (erreur de perception) ; acception (sens d'un mot) / acceptation (fait d'accepter) ; inclinaison (état de ce qui penche) / inclination (penchant, goût) ; recouvrer (retrouver, récupérer) / recouvrir (couvrir à nouveau) ; perpétrer (commettre un crime) / perpétuer (faire durer) ; prolifique (qui produit beaucoup) / prolixe (trop long, bavard) ; opportun (qui vient à propos) / importun (qui dérange) ; original (nouveau, singulier) / originel (des origines) ; partial (qui prend parti) / partiel (incomplet) ; infliger (imposer une peine) / affliger (attrister).",
    formules:
      "imminent = sur le point d'arriver ; éminent = remarquable\nconjecture = hypothèse ; conjoncture = situation à un moment donné\nprodige = merveille, enfant surdoué ; prodigue = dépensier\neffraction = entrée par force ; infraction = violation d'une règle\ncollision = choc ; collusion = entente secrète\néruption = sortie brusque ; irruption = entrée brusque\nacception = sens d'un mot ; acceptation = fait d'accepter\ninclinaison = pente ; inclination = penchant\nrecouvrer = récupérer ; recouvrir = couvrir de nouveau\nperpétrer = commettre ; perpétuer = faire durer\nprolifique = fécond ; prolixe = trop long\nopportun = qui vient à propos ; importun = qui dérange\noriginel = des origines ; original = nouveau\npartial = qui prend parti ; partiel = incomplet",
    methode:
      "1. Lis la phrase et reformule le sens attendu en quelques mots simples.\n2. Repère parmi les options le couple de paronymes (deux mots presque identiques).\n3. Décompose les mots : préfixe (in-, é-, ex-) et racine.\n4. Choisis le mot dont le sens correspond exactement, pas le plus courant.\n5. Vérifie en remettant le mot dans la phrase.",
    exemple:
      "« Les enquêteurs n'en sont qu'au stade des (conjectures / conjonctures). » Reformulation : ils ne font que des hypothèses. Conjecture signifie hypothèse ; conjoncture désigne une situation, surtout économique. Réponse : conjectures.\n\n« Le pays a (recouvré / recouvert) son indépendance. » Reformulation : il l'a retrouvée. Recouvrer signifie récupérer ; recouvrir signifie couvrir. Réponse : recouvré.",
    erreur:
      "✗ « Une infraction dans la maison » → ✓ une effraction (entrée par force) ; une infraction est une faute contre une règle\n✗ « Il a recouvert la vue » → ✓ il a recouvré la vue\n✗ « L'inclination de la route » → ✓ l'inclinaison de la route ; l'inclination est un penchant\n✗ « Un auteur prolixe » pour dire qu'il publie beaucoup → ✓ prolifique ; prolixe signifie trop bavard\n✗ « Le péché original » → ✓ le péché originel",
    approfondir:
      "Certains paronymes forment des expressions figées : faire irruption, entrer en éruption, péché originel, l'enfant prodigue (personnage de la parabole biblique, qui dilapide son héritage), un enfant prodige. Apprendre l'expression entière évite l'hésitation.\n\nLes homophones lexicaux (censé / sensé, conte / compte / comte, voie / voix) sont voisins des paronymes : ils se prononcent exactement de la même façon. On les traite avec la même méthode du sens.\n\nConseil de mémorisation : pour chaque couple, écris une seule phrase qui contient les deux mots (« Ce fils prodigue n'était pas un enfant prodige »). La phrase de contraste se retient mieux que deux définitions séparées.",
    cards: [
      ["Conjecture / conjoncture", "Conjecture = hypothèse ; conjoncture = situation à un moment donné", false],
      ["Effraction / infraction", "Effraction = entrée par force ; infraction = violation d'une règle", false],
      ["Prodige / prodigue", "Prodige = merveille ; prodigue = qui dépense sans compter", false],
      ["Recouvrer", "Récupérer, retrouver (recouvrer la santé)", true],
      ["Prolixe", "Trop long, trop bavard", true],
    ],
  },
  questions: [
    Q("B-FR-PAR-001", "fr.vocab.paronyme", 1, "Complétez : « Les économistes s'inquiètent de la ___ actuelle, marquée par une forte inflation. »", [
      ["conjoncture", true, "Situation d'ensemble, notamment économique, à un moment donné."],
      ["conjecture", false, "Paronyme : une conjecture est une hypothèse."],
      ["conjonction", false, "Rencontre ou mot de liaison grammatical, sans rapport."],
      ["conjuration", false, "Complot, sans rapport."],
    ], "La conjoncture désigne l'état d'une situation, souvent économique, à un moment donné. La conjecture est une supposition.", "Conjoncture = situation ; conjecture = hypothèse.", [
      "Le mot désigne une situation ou une hypothèse ?", "On parle d'inflation : il s'agit d'économie.", "Le terme économique contient un n après conj-o.",
    ]),
    Q("B-FR-PAR-002", "fr.vocab.paronyme", 1, "Complétez : « Les cambrioleurs sont entrés par ___ en forçant la porte de service. »", [
      ["effraction", true, "Bris de clôture ou de serrure pour entrer."],
      ["infraction", false, "Paronyme : violation d'une loi ou d'un règlement."],
      ["réfraction", false, "Déviation de la lumière, terme de physique."],
      ["fraction", false, "Partie d'un tout, sans rapport."],
    ], "L'effraction est le fait de forcer une fermeture pour entrer. L'infraction est la violation d'une règle (une infraction au Code de la route).", "Effraction = entrée par force ; infraction = faute contre une règle.", [
      "La phrase décrit une entrée par la force.", "Lequel des deux paronymes désigne cette action ?", "L'autre désigne une faute contre une règle.",
    ]),
    Q("B-FR-PAR-003", "fr.vocab.paronyme", 2, "Complétez : « Ce fils ___ dilapidait sans compter l'héritage familial. »", [
      ["prodigue", true, "Qui dépense sans mesure."],
      ["prodige", false, "Paronyme : un enfant prodige est exceptionnellement doué."],
      ["prodigieux", false, "Extraordinaire : ne dit pas qu'il dépense."],
      ["prodigué", false, "Participe passé de prodiguer, qui ne qualifie pas une personne."],
    ], "Prodigue qualifie une personne qui dépense sans compter (l'enfant prodigue de la parabole). Prodige désigne une merveille ou un enfant surdoué.", "Prodigue = dépensier ; prodige = merveille.", [
      "Le contexte parle d'argent dépensé.", "Lequel des deux mots évoque la dépense ?", "Pense à la parabole de « l'enfant prodigue ».",
    ]),
    Q("B-FR-PAR-004", "fr.vocab.paronyme", 2, "Complétez : « L'enquête a révélé une ___ entre deux entreprises pour fixer les prix. »", [
      ["collusion", true, "Entente secrète au détriment d'un tiers."],
      ["collision", false, "Paronyme : choc entre deux corps."],
      ["collation", false, "Léger repas, sans rapport."],
      ["conclusion", false, "Fin d'un raisonnement, sans rapport."],
    ], "Une collusion est une entente secrète et illicite. Une collision est un choc entre deux véhicules ou deux corps.", "Collusion = entente secrète ; collision = choc.", [
      "Les entreprises s'entendent-elles ou se heurtent-elles ?", "Elles s'entendent pour fixer les prix.", "L'entente secrète se dit avec un u.",
    ]),
    Q("B-FR-PAR-005", "fr.vocab.paronyme", 1, "Complétez : « Les manifestants ont fait ___ dans la salle du conseil municipal. »", [
      ["irruption", true, "Entrée brusque et inattendue."],
      ["éruption", false, "Paronyme : sortie brusque (volcan, boutons)."],
      ["interruption", false, "Arrêt d'une action : on ne « fait » pas interruption."],
      ["inruption", false, "Forme inexistante."],
    ], "Faire irruption, c'est entrer brusquement (préfixe in- devenu ir-, « dans »). L'éruption est une sortie violente (préfixe é-, « hors de »).", "Irruption = entrée ; éruption = sortie.", [
      "Les manifestants entrent ou sortent ?", "Quel préfixe signifie « dans » ?", "L'expression figée est « faire … ».",
    ], { a: "methode" }),
    Q("B-FR-PAR-006", "fr.vocab.paronyme", 3, "Complétez : « Après un long hiver, il a enfin ___ la santé. »", [
      ["recouvré", true, "Recouvrer signifie récupérer, retrouver."],
      ["recouvert", false, "Participe de recouvrir (couvrir de nouveau) : contresens."],
      ["recouvri", false, "Forme inexistante."],
      ["recouvrit", false, "Passé simple de recouvrir, mal employé après l'auxiliaire."],
    ], "Recouvrer (participe recouvré) signifie rentrer en possession de quelque chose : recouvrer la santé, la liberté, une créance. Recouvrir (participe recouvert) signifie couvrir.", "Recouvrer la santé ; recouvrir un meuble.", [
      "Le sens attendu est « retrouver ».", "Deux verbes voisins : recouvrer et recouvrir.", "Le participe de recouvrer se termine en -é.",
    ], { a: "exemple" }),
    Q("B-FR-PAR-007", "fr.vocab.paronyme", 2, "Complétez : « D'après l'enquête, le vol a été ___ dans la nuit du 12 mars. »", [
      ["perpétré", true, "Perpétrer signifie commettre (un crime, un délit)."],
      ["perpétué", false, "Paronyme : perpétuer signifie faire durer."],
      ["perpétuel", false, "Adjectif signifiant « sans fin », sans rapport."],
      ["pénétré", false, "Pénétrer signifie entrer, sans rapport avec un crime commis."],
    ], "Perpétrer, c'est accomplir un acte criminel. Perpétuer, c'est faire durer (perpétuer une tradition).", "Perpétrer un crime ; perpétuer une tradition.", [
      "Le sens attendu est « commettre ».", "Deux verbes en perpét- s'opposent.", "Celui du crime contient « -tr- ».",
    ]),
    Q("B-FR-PAR-008", "fr.vocab.paronyme", 1, "Complétez : « Ce juge est trop ___ : il favorise toujours la même partie. »", [
      ["partial", true, "Qui prend parti, qui manque d'objectivité."],
      ["partiel", false, "Paronyme : incomplet, qui ne porte que sur une partie."],
      ["partiaux", false, "Pluriel, alors que le sujet est singulier."],
      ["parcial", false, "Orthographe fautive."],
    ], "Partial (de parti) qualifie celui qui prend parti ; partiel (de partie) signifie incomplet.", "Partial = qui prend parti ; partiel = incomplet.", [
      "Le juge manque-t-il d'objectivité ou de complétude ?", "Il prend parti.", "Le mot vient de « parti ».",
    ]),
    Q("B-FR-PAR-009", "fr.vocab.paronyme", 2, "Complétez : « L'___ de la tour de Pise attire chaque année des millions de touristes. »", [
      ["inclinaison", true, "État de ce qui est penché."],
      ["inclination", false, "Paronyme : penchant, goût pour quelque chose ou quelqu'un."],
      ["inclinaision", false, "Orthographe fautive."],
      ["déclinaison", false, "Terme de grammaire ou d'astronomie, sans rapport."],
    ], "L'inclinaison désigne une pente physique ; l'inclination, un penchant moral ou affectif (avoir de l'inclination pour la musique).", "Inclinaison = pente ; inclination = penchant.", [
      "Il s'agit d'une pente physique.", "Deux mots voisins : -aison et -ation.", "Le penchant affectif est l'autre.",
    ]),
    Q("B-FR-PAR-010", "fr.vocab.paronyme", 3, "Complétez : « Dans quelle ___ prends-tu ce mot : au sens propre ou au sens figuré ? »", [
      ["acception", true, "Sens particulier dans lequel on prend un mot."],
      ["acceptation", false, "Paronyme : fait d'accepter."],
      ["exception", false, "Cas qui échappe à la règle, sans rapport."],
      ["acceptance", false, "Anglicisme inexistant en français courant."],
    ], "L'acception est l'un des sens d'un mot (dans toutes les acceptions du terme). L'acceptation est le fait d'accepter (l'acceptation d'une offre).", "Acception = sens d'un mot ; acceptation = fait d'accepter.", [
      "La phrase parle du sens d'un mot.", "Deux mots voisins : acception et acceptation.", "Le plus court désigne le sens.",
    ], { r: true }),
    Q("B-FR-PAR-011", "fr.vocab.paronyme", 2, "Complétez : « Ce romancier ___ publie trois livres par an. »", [
      ["prolifique", true, "Qui produit beaucoup d'œuvres."],
      ["prolixe", false, "Paronyme : qui parle ou écrit trop longuement."],
      ["prolétaire", false, "Membre de la classe ouvrière, sans rapport."],
      ["prophylactique", false, "Qui prévient une maladie, sans rapport."],
    ], "Prolifique signifie fécond, qui produit beaucoup. Prolixe signifie diffus, trop long dans l'expression.", "Prolifique = qui produit beaucoup ; prolixe = trop bavard.", [
      "La phrase insiste sur la quantité de livres publiés.", "Lequel des deux mots signifie « fécond » ?", "L'autre signifie « trop long ».",
    ]),
    Q("B-FR-PAR-012", "fr.vocab.paronyme", 2, "Complétez : « Cette aide fut ___ : elle arrivait au meilleur moment. »", [
      ["opportune", true, "Qui vient à propos, au bon moment."],
      ["importune", false, "Paronyme : qui dérange, qui ennuie."],
      ["opportuniste", false, "Qui profite des circonstances, se dit d'une personne."],
      ["inopportune", false, "Antonyme : qui ne vient pas au bon moment."],
    ], "Opportun signifie « qui vient à propos » ; importun signifie « qui dérange ». Inopportun est le contraire d'opportun.", "Opportun = à propos ; importun = gênant.", [
      "Le contexte indique « au meilleur moment ».", "Quel mot signifie « qui vient à propos » ?", "Attention à son antonyme et à son paronyme.",
    ]),
    Q("B-FR-PAR-013", "fr.vocab.paronyme", 3, "Complétez : « Dans le récit biblique, le péché ___ est celui d'Adam et Ève. »", [
      ["originel", true, "Qui remonte à l'origine : le péché originel."],
      ["original", false, "Paronyme : nouveau, singulier ou premier exemplaire (un original)."],
      ["originaire", false, "Qui vient d'un lieu (originaire de Lyon), sans rapport."],
      ["originale", false, "Forme féminine, alors que « péché » est masculin, et mauvais sens."],
    ], "Originel signifie « qui date de l'origine » (le péché originel, le sens originel d'un mot). Original signifie « nouveau, singulier » ou désigne le premier exemplaire.", "Originel = des origines ; original = nouveau.", [
      "Le mot renvoie au tout début de l'histoire humaine.", "Deux adjectifs voisins : -el et -al.", "L'expression figée est « le péché … ».",
    ], { r: true }),
  ],
};
