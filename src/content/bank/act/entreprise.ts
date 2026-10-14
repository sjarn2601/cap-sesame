// Enjeux contemporains : entreprises, marchés et travail (act.entreprise).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.entreprise";
const q = maker(S);

export const ACT_ENTREPRISE: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Entreprises, marchés financiers et travail",
      objectives: ["Définir les notions de bourse : action, capitalisation, introduction en bourse, OPA", "Connaître les catégories d'entreprises et le CAC 40", "Expliquer le SMIC et son mécanisme de revalorisation", "Retenir les grandes opérations d'entreprises de 2026"],
      prerequisites: ["act.eco"],
      regle:
        "Une action est un titre de propriété d'une part du capital d'une société ; elle donne droit à un dividende (part des bénéfices distribuée) et, en principe, au vote en assemblée générale. La capitalisation boursière est le cours de l'action multiplié par le nombre d'actions. Une introduction en bourse (en anglais IPO) est la première mise en vente des actions d'une entreprise sur un marché. Une offre publique d'achat (OPA) est une proposition faite à tous les actionnaires d'une société cotée de racheter leurs titres à un prix fixé, en numéraire ; une offre publique d'échange (OPE) les paie en actions.\n\nLe CAC 40 est l'indice phare de la Bourse de Paris (Euronext) : il suit 40 grandes valeurs. En France, on distingue les microentreprises (moins de 10 salariés), les PME (moins de 250 salariés et un chiffre d'affaires d'au plus 50 millions d'euros), les ETI (entreprises de taille intermédiaire, moins de 5 000 salariés) et les grandes entreprises.\n\nLe SMIC (salaire minimum interprofessionnel de croissance) est le salaire horaire en dessous duquel il est interdit de rémunérer un salarié. Il est revalorisé chaque 1er janvier et, en cours d'année, automatiquement dès que l'indice des prix a augmenté d'au moins 2 % depuis la dernière revalorisation.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Le SMIC a été revalorisé de 2,41 % au 1er juin 2026, à 12,31 euros brut de l'heure (1 867,02 euros brut par mois pour 35 heures). Le 12 juin 2026, SpaceX a fait ses débuts au Nasdaq au terme de la plus grande introduction en bourse de l'histoire. Le 5 octobre 2026, Schneider Electric a annoncé le rachat de l'éditeur américain de logiciels industriels PTC pour 22,6 milliards de dollars. En octobre 2025, Nvidia était devenue la première entreprise à dépasser 5 000 milliards de dollars de capitalisation. Le taux de chômage atteint 8,3 % au deuxième trimestre 2026.",
      formules:
        "Capitalisation boursière = cours de l'action × nombre d'actions\nPME : < 250 salariés et CA ≤ 50 M€ · ETI : < 5 000 salariés\nSMIC au 1er juin 2026 : 12,31 € brut de l'heure · 1 867,02 € brut par mois (35 h)\nRevalorisation automatique du SMIC : hausse des prix ≥ 2 % depuis la dernière revalorisation\nOPA = rachat contre de l'argent · OPE = rachat contre des actions",
      methode:
        "1. Identifier l'opération : introduction en bourse, acquisition, OPA, fusion, levée de fonds.\n2. Noter l'acheteur, la cible, le montant et la devise.\n3. Distinguer l'annonce de l'opération et sa finalisation (autorisations de la concurrence).\n4. Pour un salaire, préciser brut ou net, horaire ou mensuel.",
      exemple:
        "Question : « Une entreprise compte 200 millions d'actions cotées 50 euros. Quelle est sa capitalisation ? »\nCalcul : 200 000 000 × 50 = 10 milliards d'euros. Si le cours monte de 10 %, la capitalisation passe à 11 milliards d'euros, sans que l'entreprise ait reçu le moindre euro : seule une augmentation de capital ou une introduction en bourse lui apporte des fonds nouveaux.",
      erreur:
        "✗ Croire que la capitalisation est le chiffre d'affaires → ✓ C'est la valeur de marché des actions.\n✗ Confondre annonce d'un rachat et rachat effectif → ✓ Schneider Electric a annoncé un accord ; la finalisation dépend des autorisations.\n✗ Dire que le SMIC est un salaire mensuel net fixé une fois par an → ✓ C'est un taux horaire brut, revalorisé au 1er janvier et parfois en cours d'année.\n✗ Confondre Nasdaq (bourse américaine) et Euronext (bourse de Paris).",
      approfondir:
        "Pour une question chiffrée sur une entreprise, retiens l'ordre de grandeur et la devise : 22,6 milliards de dollars, pas d'euros. Les entreprises citées au concours sont souvent celles qui battent un record (plus grande introduction en bourse, première capitalisation à un seuil). Lien avec act.tech : la valorisation des entreprises de l'IA et de l'espace domine les marchés.",
      cards: [
        ["Capitalisation boursière", "Cours de l'action × nombre d'actions", true],
        ["SMIC horaire brut au 1er juin 2026", "12,31 euros", false],
        ["Plus grande introduction en bourse de l'histoire (juin 2026)", "SpaceX, au Nasdaq", false],
        ["Rachat annoncé par Schneider Electric en octobre 2026", "PTC, éditeur américain de logiciels industriels, 22,6 milliards de dollars", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-ENTR-001", "bourse", 1, "Qu'est-ce que la capitalisation boursière d'une entreprise ?", [
      ["Le cours de son action multiplié par le nombre d'actions", true, "C'est sa valeur aux yeux du marché."],
      ["Son chiffre d'affaires annuel", false, "Confusion avec le montant des ventes."],
      ["Le bénéfice distribué aux actionnaires", false, "C'est le dividende."],
      ["Le total de ses dettes bancaires", false, "Confusion avec l'endettement."],
    ], "La capitalisation mesure la valeur de marché des fonds propres : nombre d'actions × cours. Elle varie chaque jour avec le cours.", "Capitalisation = cours × nombre d'actions.", ["Il s'agit d'une valeur boursière.", "Elle dépend du cours de l'action.", "Multiplie par le nombre de titres."], { a: "formules" }),
    q("B-ACT-ENTR-002", "bourse", 2, "Une entreprise cotée compte 200 millions d'actions au cours de 50 euros. Quelle est sa capitalisation boursière ?", [
      ["10 milliards d'euros", true, "200 000 000 × 50 = 10 000 000 000."],
      ["1 milliard d'euros", false, "Erreur d'un facteur 10 dans le calcul."],
      ["250 millions d'euros", false, "Addition au lieu d'une multiplication."],
      ["4 millions d'euros", false, "Division au lieu d'une multiplication."],
    ], "200 millions × 50 euros = 10 000 millions d'euros, soit 10 milliards d'euros.", "Capitalisation = cours × nombre d'actions ; attention aux ordres de grandeur.", ["Applique la formule de la capitalisation.", "200 millions × 50.", "100 × 100 millions = 10 milliards."], { a: "exemple" }),
    q("B-ACT-ENTR-003", "bourse", 1, "Comment appelle-t-on la première mise en vente des actions d'une entreprise sur un marché boursier ?", [
      ["Une introduction en bourse", true, "En anglais, IPO (initial public offering)."],
      ["Une offre publique d'achat", false, "L'OPA vise une société déjà cotée."],
      ["Un rachat d'actions", false, "L'entreprise rachète alors ses propres titres."],
      ["Une liquidation judiciaire", false, "Procédure de fin de vie d'une entreprise en faillite."],
    ], "L'introduction en bourse permet à une entreprise de lever des fonds et à ses actionnaires historiques de vendre une partie de leurs titres. SpaceX a réalisé en juin 2026 la plus grande de l'histoire.", "Introduction en bourse (IPO) : première cotation des actions d'une entreprise.", ["L'entreprise n'était pas cotée auparavant.", "En anglais : IPO.", "Le terme évoque une « entrée » sur le marché."], { n: ["spacex-bourse"] }),
    q("B-ACT-ENTR-004", "actu-marches", 1, "Quelle entreprise a réalisé en juin 2026 la plus grande introduction en bourse de l'histoire ?", [
      ["SpaceX", true, "Première cotation au Nasdaq le 12 juin 2026."],
      ["Saudi Aramco", false, "Détentrice de l'ancien record, en 2019."],
      ["OpenAI", false, "Elle n'est pas cotée en bourse."],
      ["Tesla", false, "Cotée depuis 2010."],
    ], "SpaceX, l'entreprise spatiale d'Elon Musk, a fait ses débuts au Nasdaq sous le symbole SPCX ; l'action a gagné environ 19 % le premier jour.", "SpaceX : plus grande introduction en bourse de l'histoire (juin 2026, Nasdaq).", ["L'entreprise appartient à Elon Musk.", "Elle fabrique des fusées et exploite Starlink.", "Ce n'est pas Tesla, déjà cotée."], { n: ["spacex-bourse"] }),
    q("B-ACT-ENTR-005", "actu-marches", 2, "Quelle entreprise est devenue, en octobre 2025, la première à dépasser 5 000 milliards de dollars de capitalisation boursière ?", [
      ["Nvidia", true, "Fabricant de puces indispensables à l'IA."],
      ["Apple", false, "Elle a été la première à franchir 1 000, 2 000 et 3 000 milliards, pas 5 000."],
      ["Microsoft", false, "Elle n'a pas atteint ce seuil la première."],
      ["Saudi Aramco", false, "Sa capitalisation est bien inférieure."],
    ], "Le 29 octobre 2025, Nvidia a franchi les 5 000 milliards de dollars, portée par la demande de processeurs graphiques pour l'intelligence artificielle.", "Nvidia : première capitalisation au-delà de 5 000 milliards de dollars (octobre 2025).", ["L'entreprise profite du boom de l'IA.", "Elle conçoit des processeurs graphiques.", "Son patron est Jensen Huang."], { n: ["spacex-bourse"], r: true }),
    q("B-ACT-ENTR-006", "actu-entreprises", 1, "Quelle cible le groupe français Schneider Electric a-t-il annoncé vouloir racheter en octobre 2026 ?", [
      ["PTC, éditeur américain de logiciels industriels", true, "Pour 22,6 milliards de dollars."],
      ["Siemens, conglomérat allemand", false, "Concurrent de Schneider, non concerné."],
      ["Dassault Systèmes, éditeur français", false, "Autre éditeur de logiciels, non concerné."],
      ["Legrand, fabricant français de matériel électrique", false, "Concurrent français, non concerné."],
    ], "Le 5 octobre 2026, Schneider Electric annonce un accord pour acquérir PTC (Boston) pour 22,6 milliards de dollars, la plus grande opération de son histoire. La finalisation dépend des autorités de la concurrence.", "Schneider Electric : rachat annoncé de PTC pour 22,6 milliards de dollars (octobre 2026).", ["La cible est américaine.", "Elle édite des logiciels pour l'industrie.", "Son nom tient en trois lettres."], { n: ["schneider-ptc"] }),
    q("B-ACT-ENTR-007", "smic", 1, "Pourquoi le SMIC a-t-il été revalorisé au 1er juin 2026, en dehors de la date habituelle du 1er janvier ?", [
      ["Parce que les prix avaient augmenté d'au moins 2 % depuis la dernière revalorisation", true, "Mécanisme automatique prévu par le code du travail."],
      ["À la suite d'un référendum", false, "Aucun référendum n'a porté sur le SMIC."],
      ["Parce que le Parlement a voté une loi spéciale", false, "La hausse est automatique, sans loi."],
      ["Parce que la BCE l'a imposé", false, "La BCE ne fixe pas les salaires."],
    ], "Le SMIC est indexé : dès que l'indice des prix progresse d'au moins 2 % depuis la dernière revalorisation, il augmente automatiquement. Ce seuil a été franchi en mai 2026 : hausse de 2,41 % au 1er juin.", "SMIC : revalorisation automatique en cours d'année si l'inflation dépasse 2 % depuis la dernière hausse.", ["Le SMIC est protégé contre l'inflation.", "Un seuil de hausse des prix déclenche une revalorisation.", "Ce seuil est de 2 %."], { n: ["smic-juin-2026"] }),
    q("B-ACT-ENTR-008", "smic", 2, "Quel est le montant horaire brut du SMIC depuis le 1er juin 2026 ?", [
      ["12,31 euros", true, "Après 12,02 euros au 1er janvier 2026."],
      ["12,02 euros", false, "Montant en vigueur du 1er janvier au 31 mai 2026."],
      ["11,88 euros", false, "Montant de 2025."],
      ["9,56 euros", false, "Montant applicable à Mayotte."],
    ], "Le SMIC horaire brut passe de 12,02 à 12,31 euros (+2,41 %), soit 1 867,02 euros brut par mois pour 35 heures hebdomadaires.", "SMIC au 1er juin 2026 : 12,31 euros brut de l'heure.", ["Le montant a augmenté de 2,41 %.", "Il dépasse 12 euros.", "12,02 × 1,0241 ≈ ?"], { n: ["smic-juin-2026"], a: "formules" }),
    q("B-ACT-ENTR-009", "categories", 2, "En France, quelle définition correspond à une PME ?", [
      ["Moins de 250 salariés et un chiffre d'affaires annuel d'au plus 50 millions d'euros (ou un bilan d'au plus 43 millions)", true, "Définition statistique issue de la loi de modernisation de l'économie de 2008."],
      ["Moins de 10 salariés", false, "C'est une microentreprise."],
      ["Moins de 5 000 salariés", false, "C'est le plafond des entreprises de taille intermédiaire (ETI)."],
      ["Toute entreprise non cotée en bourse", false, "Des entreprises non cotées peuvent être très grandes."],
    ], "Microentreprise : moins de 10 salariés ; PME : moins de 250 salariés et CA ≤ 50 M€ ou bilan ≤ 43 M€ ; ETI : moins de 5 000 salariés ; au-delà, grande entreprise.", "PME : moins de 250 salariés, CA ≤ 50 M€.", ["Il existe quatre catégories d'entreprises.", "La microentreprise est la plus petite.", "Le seuil de salariés des PME est de 250."], { a: "formules" }),
    q("B-ACT-ENTR-010", "bourse", 2, "Qu'est-ce qu'une offre publique d'achat (OPA) ?", [
      ["Une proposition faite à tous les actionnaires d'une société cotée de racheter leurs titres à un prix fixé, payé en numéraire", true, "Elle vise souvent la prise de contrôle."],
      ["Une offre de titres payés en actions de l'acheteur", false, "C'est une offre publique d'échange (OPE)."],
      ["La première cotation d'une entreprise", false, "C'est une introduction en bourse."],
      ["Une subvention publique accordée à une entreprise", false, "« Publique » désigne ici l'offre faite au marché, pas l'État."],
    ], "L'OPA est encadrée en France par l'Autorité des marchés financiers. L'acheteur propose un prix généralement supérieur au cours (prime) pour convaincre les actionnaires d'apporter leurs titres.", "OPA : rachat des titres contre de l'argent ; OPE : contre des actions.", ["« Publique » renvoie aux actionnaires du marché.", "L'acheteur paie en argent.", "Si l'acheteur paie en actions, on parle d'échange."], { a: "formules" }),
    q("B-ACT-ENTR-011", "bourse", 1, "Combien de valeurs l'indice CAC 40 de la Bourse de Paris suit-il ?", [
      ["40", true, "Le nombre figure dans le nom de l'indice."],
      ["100", false, "C'est le SBF 120 qui suit 120 valeurs."],
      ["30", false, "Confusion avec le Dow Jones américain, qui suit 30 valeurs."],
      ["500", false, "Confusion avec l'indice américain S&P 500."],
    ], "Le CAC 40 est calculé par Euronext à partir des 40 plus grandes capitalisations flottantes de la place de Paris, comme Schneider Electric.", "CAC 40 : 40 valeurs de la Bourse de Paris (Euronext).", ["La réponse est dans le nom.", "C'est l'indice de la place de Paris.", "Compare avec S&P 500 et SBF 120."]),
    q("B-ACT-ENTR-012", "travail", 3, "Une revalorisation automatique du SMIC en cours d'année montre que :", [
      ["Le salaire minimum est indexé sur l'inflation pour protéger le pouvoir d'achat des bas salaires", true, "Mécanisme déclenché en mai 2026."],
      ["Tous les salaires augmentent automatiquement du même pourcentage", false, "Seul le SMIC est indexé ; les autres salaires se négocient."],
      ["L'inflation a été nulle depuis janvier", false, "C'est l'inverse : elle a dépassé 2 %."],
      ["Le chômage a baissé", false, "Aucun lien direct : le chômage a même augmenté à 8,3 %."],
    ], "L'indexation vise le pouvoir d'achat des salariés au SMIC ; elle augmente le coût du travail peu qualifié pour les employeurs. Les autres salaires dépendent des négociations de branche et d'entreprise.", "Seul le SMIC est indexé automatiquement ; les autres salaires sont négociés.", ["Le mécanisme ne concerne qu'un salaire.", "Il réagit à la hausse des prix.", "Les autres salaires ne suivent pas mécaniquement."], { n: ["smic-juin-2026"], a: "erreur" }),
  ],
};
