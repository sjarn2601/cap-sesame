// Enjeux contemporains : économie et finance (act.eco).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.eco";
const q = maker(S);

export const ACT_ECO: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Notions économiques et conjoncture 2026",
      objectives: ["Définir inflation, PIB, chômage, déficit et dette", "Expliquer le rôle des banques centrales et des taux directeurs", "Lire un chiffre économique avec sa source, son unité et sa période", "Retenir les chiffres clés de la France et de la zone euro en 2026"],
      regle:
        "L'inflation est la hausse générale et durable des prix. En France, l'Insee la mesure par l'indice des prix à la consommation (IPC) ; l'indice harmonisé (IPCH) permet la comparaison européenne. Le PIB mesure la valeur ajoutée produite sur le territoire pendant une période ; sa variation en volume (hors effet des prix) est la croissance. Deux trimestres consécutifs de baisse du PIB constituent une récession technique. Le chômage au sens du BIT concerne les personnes sans emploi, disponibles et en recherche active.\n\nLe déficit public est l'écart entre les dépenses et les recettes des administrations publiques au cours d'une année ; la dette publique est le stock accumulé des emprunts. Les deux s'expriment en pourcentage du PIB. La balance commerciale compare exportations et importations de biens. Un droit de douane est une taxe sur les importations.\n\nLes banques centrales fixent des taux directeurs. La BCE vise une inflation de 2 % à moyen terme dans la zone euro ; la Réserve fédérale américaine (Fed) a un double mandat, prix et emploi. Relever les taux renchérit le crédit et freine la demande, donc l'inflation ; les baisser soutient l'activité.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Selon l'Insee, le PIB a progressé de 0,8 % en 2025 ; en 2026, il recule de 0,2 % au premier trimestre puis stagne au deuxième (0,0 %). Le chômage atteint 8,3 % au deuxième trimestre 2026. Le déficit public 2025 s'élève à 5,1 % du PIB et la dette à 115,7 % du PIB ; le projet de budget 2027 vise 5 % de déficit après 5,4 % attendus en 2026. Le choc pétrolier lié à la guerre avec l'Iran a porté l'inflation à 3,0 % en France et à 3,8 % dans la zone euro en septembre 2026 (estimations provisoires). La BCE a relevé ses taux le 11 juin puis le 10 septembre 2026 (taux de dépôt à 2,25 %, puis 2,50 %), la Fed le 16 septembre (3,75 %-4 %) sous la présidence de Kevin Warsh, en fonctions depuis le 22 mai 2026. Le Nobel d'économie 2026 récompense Robert E. Hall et Michael Woodford pour leurs travaux sur la stabilisation macroéconomique.",
      formules:
        "Taux de variation = (valeur d'arrivée - valeur de départ) / valeur de départ × 100\nPouvoir d'achat ≈ variation du revenu - variation des prix (approximation pour de petits taux)\nRécession technique : 2 trimestres consécutifs de baisse du PIB\nFrance 2025 : croissance 0,8 % · déficit 5,1 % du PIB · dette 115,7 % du PIB\nFrance 2026 : PIB T1 -0,2 %, T2 0,0 % · chômage T2 8,3 % · inflation septembre 3,0 %\nBCE : taux de dépôt 2,50 % (depuis le 16 septembre 2026) · Fed : 3,75 %-4 %",
      methode:
        "1. Identifier l'indicateur : flux (PIB, déficit) ou stock (dette) ?\n2. Repérer l'unité : pourcentage du PIB, milliards d'euros, points de pourcentage.\n3. Repérer le périmètre : France ou zone euro, trimestre ou année, provisoire ou définitif.\n4. Pour une décision monétaire, préciser l'institution, le taux concerné et le sens.",
      exemple:
        "Question : « La France est-elle en récession technique au milieu de 2026 ? »\nRaisonnement : la récession technique suppose deux trimestres consécutifs de baisse du PIB. Or le PIB recule de 0,2 % au premier trimestre puis est stable (0,0 %) au deuxième. Il n'y a qu'un trimestre de baisse : la France n'est pas en récession technique, même si l'activité est à l'arrêt.",
      erreur:
        "✗ Confondre déficit et dette → ✓ Le déficit est un flux annuel, la dette un stock.\n✗ Dire que la dette dépasse 3 % du PIB → ✓ 3 % est le plafond de déficit ; la dette française dépasse 115 % du PIB.\n✗ Croire qu'une hausse des taux sert à relancer l'économie → ✓ Elle freine la demande pour combattre l'inflation.\n✗ Mélanger IPC (France, Insee) et IPCH (comparaison européenne) : 3,0 % et 3,4 % pour la France en septembre 2026.",
      approfondir:
        "Un chiffre se mémorise avec un point de comparaison : 5,1 % de déficit, c'est plus de 1,7 fois le plafond de 3 %. Méfie-toi des distracteurs à quelques dixièmes près (5,1 % ou 5,4 %) : rattache chacun à son année. Lien avec act.geo : les chocs géopolitiques passent par le prix de l'énergie. Lien avec act.entreprise : la revalorisation automatique du SMIC suit l'inflation.",
      cards: [
        ["Déficit public de la France en 2025 (Insee)", "5,1 % du PIB", false],
        ["Dette publique de la France fin 2025 (Insee)", "115,7 % du PIB", false],
        ["Taux de dépôt de la BCE après le 10 septembre 2026", "2,50 % (hausse de 0,25 point)", false],
        ["Récession technique", "Deux trimestres consécutifs de baisse du PIB", true],
        ["Président de la Fed depuis mai 2026", "Kevin Warsh", true],
      ],
    },
  ],
  questions: [
    q("B-ACT-ECO-001", "dette-deficit", 1, "Selon l'Insee, à combien s'élevait le déficit public de la France en 2025 ?", [
      ["5,1 % du PIB", true, "Soit 152,5 milliards d'euros."],
      ["5,8 % du PIB", false, "C'était le déficit de 2024."],
      ["3 % du PIB", false, "C'est le plafond européen, que la France dépasse largement."],
      ["115,7 % du PIB", false, "C'est le niveau de la dette, pas du déficit."],
    ], "Les comptes publiés par l'Insee en mars puis mai 2026 donnent un déficit de 5,1 % du PIB en 2025, après 5,8 % en 2024. La dette atteint 115,7 % du PIB.", "Déficit 2025 : 5,1 % du PIB ; dette fin 2025 : 115,7 % du PIB.", ["Le déficit a baissé par rapport à 2024.", "Il reste nettement au-dessus de 3 %.", "Il est légèrement supérieur à 5 %."], { n: ["budget-2027"], a: "formules" }),
    q("B-ACT-ECO-002", "dette-deficit", 2, "Quelle est la différence entre déficit public et dette publique ?", [
      ["Le déficit est l'écart annuel entre dépenses et recettes publiques ; la dette est le stock des emprunts accumulés", true, "Flux d'un côté, stock de l'autre."],
      ["Le déficit concerne l'État, la dette concerne les ménages", false, "Les deux concernent les administrations publiques."],
      ["Ce sont deux synonymes", false, "Les ordres de grandeur (5 % et 115 % du PIB) montrent qu'ils diffèrent."],
      ["La dette est annuelle, le déficit est cumulé", false, "Inversion des deux notions."],
    ], "Chaque année de déficit oblige à emprunter, ce qui augmente la dette. En 2025, le déficit est de 5,1 % du PIB, la dette de 115,7 % du PIB.", "Déficit = flux annuel ; dette = stock accumulé.", ["L'un se mesure sur une année, l'autre à une date.", "Les déficits successifs alimentent l'autre grandeur.", "Flux contre stock."], { a: "erreur" }),
    q("B-ACT-ECO-003", "bce", 1, "Quelle décision la BCE a-t-elle prise le 10 septembre 2026 ?", [
      ["Elle a relevé ses trois taux directeurs de 0,25 point", true, "Taux de dépôt porté à 2,50 %."],
      ["Elle a abaissé ses taux de 0,25 point", false, "Sens inverse : la hausse vise l'inflation."],
      ["Elle a maintenu ses taux inchangés", false, "Une hausse a bien été décidée."],
      ["Elle a relevé ses taux de 1 point", false, "L'ampleur est de 25 points de base."],
    ], "Face à une inflation tirée par l'énergie (3,8 % dans la zone euro en septembre), la BCE relève de 25 points de base ses taux : dépôt 2,50 %, refinancement 2,65 %, prêt marginal 2,90 %, à compter du 16 septembre 2026.", "BCE, septembre 2026 : +0,25 point, taux de dépôt à 2,50 %.", ["L'inflation de la zone euro dépasse nettement 2 %.", "Pour freiner l'inflation, la banque centrale renchérit le crédit.", "Le mouvement est d'un quart de point."], { n: ["bce-septembre-2026"] }),
    q("B-ACT-ECO-004", "bce", 2, "Après la décision de septembre 2026, à quel niveau se situe le taux de la facilité de dépôt de la BCE ?", [
      ["2,50 %", true, "Applicable depuis le 16 septembre 2026."],
      ["2,25 %", false, "Niveau fixé en juin 2026, avant la hausse de septembre."],
      ["2,65 %", false, "C'est le taux des opérations principales de refinancement."],
      ["3,75 %", false, "Borne basse de la fourchette de la Fed américaine."],
    ], "La BCE a trois taux : dépôt (2,50 %), refinancement (2,65 %) et prêt marginal (2,90 %). Le taux de dépôt est celui qui pilote aujourd'hui les taux du marché monétaire.", "Taux de dépôt de la BCE : 2,50 % depuis le 16 septembre 2026.", ["La BCE a trois taux directeurs.", "Le taux de dépôt est le plus bas des trois.", "Il a été relevé d'un quart de point."], { n: ["bce-septembre-2026"], a: "formules" }),
    q("B-ACT-ECO-005", "inflation", 1, "Selon l'estimation provisoire de l'Insee, quel est le taux d'inflation en France en septembre 2026 sur un an ?", [
      ["3,0 %", true, "Après 2,4 % en août 2026."],
      ["3,8 %", false, "C'est l'estimation pour l'ensemble de la zone euro (Eurostat)."],
      ["2,4 %", false, "C'était le taux d'août 2026."],
      ["21,2 %", false, "C'est la hausse des prix de l'énergie seulement."],
    ], "L'IPC progresse de 3,0 % sur un an en septembre 2026, porté par l'énergie (+21,2 %) et les produits frais. L'indice harmonisé (IPCH) atteint 3,4 %.", "Inflation France, septembre 2026 : 3,0 % (IPC, provisoire).", ["Le chiffre français est inférieur à celui de la zone euro.", "Il a augmenté par rapport à août.", "C'est un nombre rond."], { n: ["inflation-septembre-2026"] }),
    q("B-ACT-ECO-006", "inflation", 2, "Quelle composante explique principalement la hausse de l'inflation en France et dans la zone euro à l'automne 2026 ?", [
      ["L'énergie", true, "Hausse de 21,2 % sur un an en France en septembre 2026."],
      ["Les produits manufacturés", false, "Leurs prix baissent légèrement sur un an."],
      ["Le tabac", false, "Hausse modérée (3,3 %) et poids faible."],
      ["Les loyers", false, "Composante peu dynamique, non citée comme moteur."],
    ], "Le blocage du détroit d'Ormuz fait flamber les produits pétroliers et le gaz : l'énergie augmente de 21,2 % sur un an en France et de 18,8 % dans la zone euro en septembre 2026.", "L'inflation de 2026 est d'abord une inflation énergétique.", ["Pense au conflit au Moyen-Orient.", "Un détroit stratégique a été bloqué.", "Carburants et gaz."], { n: ["inflation-septembre-2026", "guerre-iran-ormuz"] }),
    q("B-ACT-ECO-007", "croissance", 3, "Le PIB français recule de 0,2 % au premier trimestre 2026 puis est stable (0,0 %) au deuxième. Que peut-on en conclure ?", [
      ["La France n'est pas en récession technique, faute de deux trimestres consécutifs de baisse", true, "Un seul trimestre de recul."],
      ["La France est en récession technique", false, "Il faudrait deux baisses consécutives."],
      ["La croissance du premier semestre est positive", false, "Une baisse suivie d'une stagnation ne donne pas un semestre positif."],
      ["Le chômage a forcément baissé", false, "Le chômage est au contraire monté à 8,3 %."],
    ], "La récession technique se définit par deux trimestres consécutifs de baisse du PIB. Ici : -0,2 % puis 0,0 %. L'activité stagne mais la définition n'est pas remplie.", "Récession technique = deux trimestres consécutifs de baisse du PIB.", ["Rappelle la définition de la récession technique.", "Compte les trimestres de baisse.", "0,0 % n'est pas une baisse."], { n: ["croissance-chomage-2026"], a: "exemple", r: true }),
    q("B-ACT-ECO-008", "chomage", 1, "Quel est le taux de chômage au sens du BIT en France au deuxième trimestre 2026, selon l'Insee ?", [
      ["8,3 %", true, "En hausse de 0,2 point sur un trimestre."],
      ["7,4 %", false, "Niveau proche de celui de 2024, dépassé depuis."],
      ["19,8 %", false, "C'est le taux moyen des 15-24 ans en 2025."],
      ["5 %", false, "Ordre de grandeur du plein emploi, loin de la situation française."],
    ], "Publié le 7 août 2026, le taux de chômage BIT atteint 8,3 % de la population active en France (hors Mayotte), en hausse de 0,7 point sur un an.", "Chômage BIT, deuxième trimestre 2026 : 8,3 %.", ["Le chômage a augmenté en 2026.", "Il dépasse 8 %.", "La hausse est de 0,2 point sur un trimestre."], { n: ["croissance-chomage-2026"] }),
    q("B-ACT-ECO-009", "budget", 2, "Quel objectif de déficit public le projet de loi de finances pour 2027 fixe-t-il pour l'année 2027 ?", [
      ["5 % du PIB", true, "Après 5,4 % attendus en 2026."],
      ["3 % du PIB", false, "Plafond européen, que la France ne vise pas avant plusieurs années."],
      ["5,4 % du PIB", false, "C'est la prévision pour 2026."],
      ["6,5 % du PIB", false, "Niveau évoqué par le gouvernement en l'absence de mesures."],
    ], "Présenté le 1er octobre 2026, le PLF 2027 prévoit un effort d'environ 54 milliards d'euros pour ramener le déficit à 5 % du PIB en 2027, avec une croissance prévue de 1 %.", "PLF 2027 : déficit visé de 5 % du PIB, effort de 54 milliards d'euros.", ["L'objectif est un nombre rond.", "Il est inférieur à la prévision de 2026.", "Il reste supérieur au plafond européen."], { n: ["budget-2027"] }),
    q("B-ACT-ECO-010", "fed", 1, "Qui préside la Réserve fédérale américaine (Fed) depuis le 22 mai 2026 ?", [
      ["Kevin Warsh", true, "Nommé par Donald Trump, confirmé par le Sénat le 13 mai 2026."],
      ["Jerome Powell", false, "Son mandat de président s'est achevé en mai 2026."],
      ["Janet Yellen", false, "Présidente de la Fed de 2014 à 2018."],
      ["Scott Bessent", false, "Secrétaire au Trésor, pas président de la Fed."],
    ], "Kevin Warsh, ancien gouverneur de la Fed, a succédé à Jerome Powell. Le 16 septembre 2026, la Fed a relevé sa fourchette de taux à 3,75 %-4 %, première hausse depuis 2023.", "Kevin Warsh préside la Fed depuis le 22 mai 2026.", ["Il a succédé à Jerome Powell.", "Il a été nommé par Donald Trump.", "Son prénom est Kevin."], { n: ["fed-2026"] }),
    q("B-ACT-ECO-011", "nobel", 1, "À qui le prix d'économie en mémoire d'Alfred Nobel 2026 a-t-il été attribué ?", [
      ["Robert E. Hall et Michael Woodford", true, "Pour leurs travaux sur les fondements de la stabilisation macroéconomique."],
      ["Joel Mokyr, Philippe Aghion et Peter Howitt", false, "Lauréats 2025, pour la croissance tirée par l'innovation."],
      ["Daron Acemoglu, Simon Johnson et James Robinson", false, "Lauréats 2024, pour le rôle des institutions."],
      ["Esther Duflo et Abhijit Banerjee", false, "Lauréats 2019 avec Michael Kremer."],
    ], "Le 12 octobre 2026, la Banque de Suède récompense les Américains Robert E. Hall (Stanford) et Michael Woodford (Columbia), dont les travaux ont amélioré les modèles utilisés par les banques centrales pour stabiliser l'économie.", "Nobel d'économie 2026 : Robert E. Hall et Michael Woodford.", ["Deux économistes américains.", "Leurs travaux portent sur la politique de stabilisation.", "L'un enseigne à Stanford, l'autre à Columbia."], { n: ["nobel-paix-economie-2026"] }),
    q("B-ACT-ECO-012", "pouvoir-achat", 2, "Sur un an, ton salaire augmente de 2,4 % alors que les prix augmentent de 3,0 %. Que devient ton pouvoir d'achat ?", [
      ["Il baisse d'environ 0,6 %", true, "1,024 / 1,030 ≈ 0,994."],
      ["Il augmente de 2,4 %", false, "Oubli de la hausse des prix."],
      ["Il augmente de 0,6 %", false, "Erreur de signe : les prix montent plus vite que le salaire."],
      ["Il baisse de 5,4 %", false, "Addition des deux taux au lieu d'une comparaison."],
    ], "Le pouvoir d'achat évolue comme le rapport salaire / prix : 1,024 / 1,030 ≈ 0,9942, soit une baisse d'environ 0,6 %. L'approximation 2,4 - 3,0 = -0,6 point fonctionne pour de petits taux.", "Pouvoir d'achat : variation du revenu rapportée à celle des prix.", ["Compare la hausse du salaire à celle des prix.", "Le rapport des coefficients multiplicateurs donne la réponse.", "Les prix montent plus vite que le salaire de 0,6 point."], { a: "formules" }),
    q("B-ACT-ECO-013", "douanes", 1, "Qu'est-ce qu'un droit de douane ?", [
      ["Une taxe prélevée sur un bien importé", true, "Elle renchérit le produit étranger sur le marché national."],
      ["Une subvention versée aux exportateurs", false, "Il s'agit d'une aide, pas d'une taxe sur les importations."],
      ["Un quota limitant la quantité importée", false, "Le quota est une barrière quantitative, non tarifaire."],
      ["Un impôt sur les bénéfices des multinationales", false, "Confusion avec l'impôt sur les sociétés."],
    ], "Le droit de douane est un instrument protectionniste tarifaire : il augmente le prix des importations pour protéger la production nationale ou faire pression sur un partenaire. En 2026, la Cour suprême américaine a invalidé les droits imposés au titre d'une loi d'urgence.", "Droit de douane : taxe sur les importations (barrière tarifaire).", ["Il s'applique à la frontière.", "Il concerne les produits venant de l'étranger.", "C'est une barrière tarifaire, pas quantitative."], { n: ["douanes-cour-supreme"] }),
    q("B-ACT-ECO-014", "croissance", 1, "Selon l'Insee, quelle a été la croissance du PIB de la France en volume en 2025 ?", [
      ["0,8 %", true, "Après 1,5 % en 2024."],
      ["1,5 %", false, "C'était la croissance de 2024 (hors correction des jours ouvrés)."],
      ["-0,2 %", false, "C'est la variation du premier trimestre 2026."],
      ["2,5 %", false, "Taux jamais atteint récemment par la France."],
    ], "Les comptes de la Nation publiés le 29 mai 2026 indiquent une croissance de 0,8 % en 2025, en net ralentissement par rapport à 2024.", "PIB 2025 : +0,8 % en volume.", ["La croissance a ralenti par rapport à 2024.", "Elle est inférieure à 1 %.", "Elle est positive."], { n: ["croissance-chomage-2026"] }),
    q("B-ACT-ECO-015", "bce", 2, "Quel est l'objectif principal de la politique monétaire de la BCE, tel qu'elle le définit ?", [
      ["Une inflation de 2 % à moyen terme dans la zone euro", true, "Objectif symétrique adopté en 2021."],
      ["Le plein emploi dans chaque État membre", false, "C'est un objectif secondaire, et la Fed a un double mandat, pas la BCE."],
      ["Un déficit public inférieur à 3 % du PIB", false, "Critère budgétaire, qui ne relève pas de la BCE."],
      ["Une inflation nulle", false, "Une inflation nulle exposerait au risque de déflation."],
    ], "Le traité confie à la BCE la stabilité des prix ; elle la traduit par une cible de 2 % d'inflation à moyen terme, symétrique : un écart à la hausse ou à la baisse est également indésirable.", "BCE : stabilité des prix, cible de 2 % à moyen terme.", ["La stabilité des prix est le mandat prioritaire.", "La cible n'est pas zéro.", "Elle est inscrite dans la stratégie de 2021."], { a: "regle" }),
  ],
};
