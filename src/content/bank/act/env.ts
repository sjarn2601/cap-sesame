// Enjeux contemporains : environnement et énergie (act.env).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.env";
const q = maker(S);

export const ACT_ENV: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Climat, énergie et environnement",
      objectives: ["Situer les COP, le GIEC et l'accord de Paris", "Connaître les objectifs climatiques de l'UE et de la France", "Décrire le mix énergétique français et la PPE", "Retenir les rendez-vous climatiques de 2026"],
      regle:
        "La convention-cadre des Nations unies sur les changements climatiques (CCNUCC, adoptée au sommet de la Terre de Rio en 1992) réunit chaque année ses parties lors d'une COP (conférence des parties). Le protocole de Kyoto (1997) imposait des réductions aux seuls pays industrialisés ; l'accord de Paris (COP21, 2015) engage tous les pays à contenir le réchauffement nettement en dessous de 2 °C, en poursuivant l'effort pour 1,5 °C, grâce à des contributions déterminées au niveau national (CDN) révisées tous les cinq ans. Le protocole de Montréal (1987), lui, protège la couche d'ozone.\n\nLe GIEC, créé en 1988 par l'Organisation météorologique mondiale et le Programme des Nations unies pour l'environnement, évalue l'état des connaissances scientifiques ; il ne prend aucune décision politique. Le dioxyde de carbone issu des énergies fossiles est le premier gaz à effet de serre d'origine humaine ; le méthane vient ensuite.\n\nL'Union européenne vise la neutralité climatique en 2050, -55 % d'émissions nettes en 2030 et, depuis 2026, -90 % en 2040 par rapport à 1990. En France, la production d'électricité est très décarbonée : le nucléaire en fournit environ les deux tiers. La programmation pluriannuelle de l'énergie (PPE) fixe la trajectoire énergétique par décret.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Selon Copernicus, 2025 a été la troisième année la plus chaude jamais mesurée, derrière 2024 et 2023. La COP30 de Belém (Brésil, novembre 2025) s'est conclue sans engagement clair de sortie des énergies fossiles mais avec un objectif de triplement du financement de l'adaptation d'ici 2035. La COP31 aura lieu à Antalya (Turquie) du 9 au 20 novembre 2026 : la Turquie la préside, l'Australie conduit les négociations. La troisième PPE, adoptée par décret publié au Journal officiel le 13 février 2026, fixe la trajectoire jusqu'en 2035 : environ 60 % d'énergie décarbonée dans la consommation en 2030, six réacteurs EPR2, 15 GW d'éolien en mer en 2035. Le choc pétrolier de 2026 relance le débat sur la dépendance aux hydrocarbures importés.",
      formules:
        "CCNUCC : Rio 1992 · Kyoto : 1997 · Paris : COP21, 2015 · Montréal (ozone) : 1987\nGIEC : 1988, OMM + PNUE, évalue sans décider\nCOP30 : Belém (Brésil), 2025 · COP31 : Antalya (Turquie), 9-20 novembre 2026\nUE : -55 % en 2030, -90 % en 2040, neutralité en 2050 (base 1990)\nPPE3 (décret publié le 13 février 2026) : horizon 2035, 60 % d'énergie décarbonée en 2030, 6 EPR2\nNucléaire : environ 2/3 de la production d'électricité en France",
      methode:
        "1. Identifier l'accord : ozone (Montréal) ou climat (Kyoto, Paris).\n2. Pour une COP : numéro, ville, pays, année ; vérifier que le numéro correspond (COP21 = 2015, donc COP31 = 2026 avec la pause de 2020).\n3. Pour un objectif chiffré : horizon (2030, 2040, 2050), année de référence (1990) et périmètre (UE ou France).\n4. Distinguer production d'électricité et consommation d'énergie finale.",
      exemple:
        "Question : « Quelle part de sa consommation d'énergie la France veut-elle couvrir par des énergies décarbonées en 2030 selon la PPE3 ? »\nRaisonnement : ne pas confondre avec la part du nucléaire dans l'électricité (environ deux tiers). La consommation d'énergie inclut les carburants et le chauffage, encore très fossiles : la PPE3 vise environ 60 % d'énergie décarbonée en 2030.",
      erreur:
        "✗ Associer le protocole de Montréal au climat → ✓ Il concerne la couche d'ozone.\n✗ Croire que le GIEC décide des politiques → ✓ Il évalue la science ; les États décident dans les COP.\n✗ Situer la COP31 au Brésil → ✓ Belém a accueilli la COP30 (2025) ; la COP31 a lieu à Antalya.\n✗ Confondre électricité et énergie → ✓ Le nucléaire domine l'électricité, mais les fossiles pèsent encore lourd dans l'énergie totale.",
      approfondir:
        "Les COP se tiennent en principe par rotation entre groupes régionaux de l'ONU ; en 2026, la Turquie et l'Australie, candidates concurrentes, ont trouvé un compromis inédit avec une présidence partagée. Lien avec act.ue : la loi climat européenne fixe la position de l'UE à la COP31. Lien avec act.geo : la crise d'Ormuz rappelle que la transition énergétique est aussi un enjeu de sécurité.",
      cards: [
        ["COP31", "Antalya (Turquie), 9-20 novembre 2026, négociations présidées par l'Australie", false],
        ["Rôle du GIEC", "Évaluer les connaissances scientifiques, sans décider des politiques", false],
        ["Rang de 2025 parmi les années les plus chaudes (Copernicus)", "Troisième, derrière 2024 et 2023", false],
        ["PPE3", "Décret publié le 13 février 2026, horizon 2035, 60 % d'énergie décarbonée en 2030", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-ENV-001", "cop", 1, "Dans quelle ville se tiendra la COP31, du 9 au 20 novembre 2026 ?", [
      ["Antalya, en Turquie", true, "La Turquie accueille et préside la COP."],
      ["Belém, au Brésil", false, "Ville de la COP30 en 2025."],
      ["Adélaïde, en Australie", false, "L'Australie était candidate mais n'accueille pas la COP ; elle préside les négociations."],
      ["Bakou, en Azerbaïdjan", false, "Ville de la COP29 en 2024."],
    ], "Faute d'accord entre les deux candidats, un compromis a été trouvé à Belém : la COP31 se tient à Antalya, présidée par le ministre turc Murat Kurum, tandis que l'Australien Chris Bowen préside les négociations.", "COP31 : Antalya (Turquie), novembre 2026.", ["La ville est au bord de la Méditerranée.", "Le pays hôte est à cheval sur deux continents.", "Le pays hôte a aussi accueilli le sommet de l'OTAN en 2026."], { n: ["cop31-antalya"] }),
    q("B-ACT-ENV-002", "cop", 2, "Quel rôle original l'Australie joue-t-elle dans l'organisation de la COP31 ?", [
      ["Elle préside les négociations, la Turquie accueillant et présidant la conférence", true, "Compromis conclu à la COP30 entre les deux candidats."],
      ["Elle accueille la conférence à Sydney", false, "La conférence a lieu à Antalya."],
      ["Elle a renoncé à toute participation", false, "Elle y joue au contraire un rôle central."],
      ["Elle organise une COP concurrente", false, "Il n'y a qu'une COP par an."],
    ], "L'Australie et la Turquie voulaient toutes deux accueillir la COP31. Pour éviter un blocage (sinon la conférence aurait eu lieu à Bonn), elles ont partagé les rôles. Une pré-COP est organisée dans le Pacifique (Fidji).", "COP31 : la Turquie accueille, l'Australie préside les négociations.", ["Deux pays étaient candidats.", "Ils ont trouvé un compromis.", "L'un accueille, l'autre négocie."], { n: ["cop31-antalya"], a: "approfondir", r: true }),
    q("B-ACT-ENV-003", "cop", 2, "Quel est l'un des principaux résultats de la COP30 de Belém (novembre 2025) ?", [
      ["Un objectif de triplement du financement de l'adaptation d'ici 2035, sans engagement clair de sortie des énergies fossiles", true, "Les feuilles de route sur les fossiles ont été renvoyées hors du texte final."],
      ["L'adoption d'un calendrier contraignant de sortie du pétrole", false, "C'est précisément ce qui a manqué."],
      ["La création du GIEC", false, "Le GIEC existe depuis 1988."],
      ["La signature de l'accord de Paris", false, "Il date de la COP21 en 2015."],
    ], "À Belém, les États ont adopté un compromis : renforcement du financement de l'adaptation (triplement d'ici 2035) mais pas de feuille de route contraignante de sortie des énergies fossiles dans le texte final.", "COP30 Belém : adaptation renforcée, pas d'accord sur la sortie des fossiles.", ["La conférence s'est tenue en Amazonie.", "Le texte a déçu sur les énergies fossiles.", "Il porte surtout sur l'adaptation."], { n: ["cop31-antalya"] }),
    q("B-ACT-ENV-004", "accords", 1, "Le GIEC publie régulièrement des rapports très médiatisés. En quoi consiste sa mission ?", [
      ["Évaluer l'état des connaissances scientifiques sur le climat", true, "Il publie des rapports d'évaluation."],
      ["Fixer les objectifs d'émissions de chaque pays", false, "Les objectifs sont fixés par les États (CDN)."],
      ["Sanctionner les pays qui ne respectent pas l'accord de Paris", false, "L'accord ne prévoit pas de sanctions."],
      ["Gérer le marché européen du carbone", false, "Ce marché relève de l'Union européenne, pas du GIEC."],
    ], "Créé en 1988 par l'OMM et le PNUE, le GIEC synthétise la recherche publiée. Ses rapports éclairent les décisions politiques prises par les États, notamment lors des COP.", "Le GIEC évalue la science du climat ; il ne décide pas.", ["C'est un groupe d'experts.", "Il produit des rapports.", "Les décisions appartiennent aux États."], { a: "erreur" }),
    q("B-ACT-ENV-005", "accords", 2, "Quel accord international vise à protéger la couche d'ozone ?", [
      ["Le protocole de Montréal (1987)", true, "Il a interdit progressivement les CFC."],
      ["Le protocole de Kyoto (1997)", false, "Il porte sur les gaz à effet de serre."],
      ["L'accord de Paris (2015)", false, "Il porte sur le réchauffement climatique."],
      ["La convention de Rio sur la biodiversité (1992)", false, "Elle concerne la diversité biologique."],
    ], "Le protocole de Montréal a éliminé la plupart des substances qui appauvrissent la couche d'ozone, comme les chlorofluorocarbures (CFC). Il est souvent cité comme l'accord environnemental le plus efficace.", "Ozone : Montréal (1987) ; climat : Kyoto (1997) et Paris (2015).", ["Il ne s'agit pas du réchauffement.", "L'accord visait les CFC.", "Il porte le nom d'une ville canadienne."], { a: "formules" }),
    q("B-ACT-ENV-006", "climat", 1, "Selon le service européen Copernicus, quel rang l'année 2025 occupe-t-elle parmi les années les plus chaudes jamais mesurées ?", [
      ["Troisième, derrière 2024 et 2023", true, "Annonce de janvier 2026."],
      ["Première", false, "Le record appartient à 2024."],
      ["Deuxième, derrière 2024", false, "2023 reste devant 2025."],
      ["Dixième", false, "Les dernières années sont toutes en tête du classement."],
    ], "Copernicus classe 2025 au troisième rang des années les plus chaudes, juste derrière 2024 (record) et 2023. Les trois dernières années sont les trois plus chaudes jamais enregistrées.", "2025 : troisième année la plus chaude, après 2024 et 2023.", ["Le record est récent.", "Deux années l'ont devancée.", "Ce sont les deux années précédentes."], { a: "regle" }),
    q("B-ACT-ENV-007", "energie", 1, "Quelle source fournit environ les deux tiers de la production d'électricité en France ?", [
      ["Le nucléaire", true, "Un parc de 57 réacteurs."],
      ["L'éolien", false, "Il représente environ un dixième de la production."],
      ["Le charbon", false, "Sa part est devenue marginale."],
      ["Le gaz naturel", false, "Il complète la production en période de pointe."],
    ], "Avec 57 réacteurs, le nucléaire assure environ les deux tiers de la production d'électricité française ; l'hydraulique, l'éolien et le solaire forment l'essentiel du reste.", "Électricité française : environ deux tiers d'origine nucléaire.", ["La France est connue pour son parc de réacteurs.", "Cette source n'émet presque pas de CO₂ en fonctionnement.", "EDF exploite ces centrales."], { a: "formules" }),
    q("B-ACT-ENV-008", "energie", 2, "Que prévoit la troisième programmation pluriannuelle de l'énergie (PPE3), publiée par décret en février 2026 ?", [
      ["Porter à 60 % la part d'énergie décarbonée dans la consommation dès 2030 et construire six réacteurs EPR2", true, "Feuille de route jusqu'en 2035."],
      ["Fermer toutes les centrales nucléaires d'ici 2035", false, "La PPE3 prolonge au contraire le parc existant."],
      ["Interdire la vente de voitures électriques", false, "La PPE encourage l'électrification."],
      ["Revenir au charbon pour l'électricité", false, "Contraire aux objectifs climatiques."],
    ], "Le décret publié au Journal officiel le 13 février 2026 fixe la feuille de route jusqu'en 2035 : environ 60 % d'énergie décarbonée en 2030, six EPR2, 15 GW d'éolien en mer en 2035. Il a été adopté par décret, sans vote du Parlement.", "PPE3 : horizon 2035, 60 % d'énergie décarbonée en 2030, six EPR2.", ["Elle mise sur le nucléaire et les renouvelables.", "Elle fixe la trajectoire jusqu'en 2035.", "EPR2 = nouveaux réacteurs."], { a: "exemple" }),
    q("B-ACT-ENV-009", "climat", 2, "Quels sont les trois jalons de réduction des émissions nettes inscrits dans la loi climat de l'Union européenne ?", [
      ["-55 % en 2030, -90 % en 2040, neutralité en 2050", true, "Par rapport à 1990."],
      ["-40 % en 2030, -80 % en 2040, neutralité en 2060", false, "Objectifs dépassés ou inexacts."],
      ["-55 % en 2030, -75 % en 2040, neutralité en 2070", false, "Mélange de chiffres approximatifs."],
      ["-20 % en 2020, -50 % en 2030, neutralité en 2040", false, "Le premier chiffre correspond au paquet climat 2020."],
    ], "La loi européenne sur le climat de 2021 fixe -55 % en 2030 et la neutralité en 2050 ; sa révision adoptée le 5 mars 2026 ajoute -90 % en 2040.", "UE : -55 % (2030), -90 % (2040), neutralité (2050).", ["La neutralité est visée au milieu du siècle.", "Le jalon 2040 a été ajouté en 2026.", "Les réductions augmentent de 35 points entre 2030 et 2040."], { n: ["climat-2040-ue"], a: "formules" }),
    q("B-ACT-ENV-010", "climat", 2, "Le dioxyde de carbone est le premier gaz à effet de serre émis par les activités humaines. Quelle est sa principale source ?", [
      ["La combustion des énergies fossiles (charbon, pétrole, gaz)", true, "Elle représente l'essentiel des émissions humaines de CO₂."],
      ["L'élevage bovin", false, "L'élevage émet surtout du méthane."],
      ["Les centrales nucléaires", false, "La fission ne brûle aucun combustible fossile et n'émet presque pas de CO₂."],
      ["Les éruptions volcaniques", false, "Source naturelle, très inférieure aux émissions humaines."],
    ], "Le CO₂ d'origine humaine provient surtout de la combustion du charbon, du pétrole et du gaz (énergie, transports, industrie) ; la déforestation en ajoute une part plus faible. Le méthane, deuxième gaz, vient surtout de l'élevage, des fuites de gaz et des décharges.", "CO₂ des énergies fossiles : premier facteur du réchauffement d'origine humaine.", ["Pense à ce que l'on brûle pour se chauffer et se déplacer.", "Charbon, pétrole, gaz.", "Ce sont les énergies dites fossiles."]),
    q("B-ACT-ENV-011", "accords", 3, "Quelle est la différence majeure entre le protocole de Kyoto et l'accord de Paris ?", [
      ["Kyoto imposait des objectifs chiffrés aux seuls pays industrialisés ; Paris engage tous les pays par des contributions nationales", true, "Approche descendante contre approche ascendante."],
      ["Kyoto portait sur l'ozone, Paris sur le climat", false, "Les deux portent sur les gaz à effet de serre."],
      ["Paris prévoit des sanctions financières, Kyoto non", false, "Paris repose sur la transparence, sans sanctions."],
      ["Kyoto a été signé après Paris", false, "Kyoto date de 1997, Paris de 2015."],
    ], "Kyoto (1997) fixait des réductions aux pays développés listés en annexe. L'accord de Paris (2015) demande à chaque pays de présenter sa contribution déterminée au niveau national (CDN), révisée tous les cinq ans, sans mécanisme de sanction.", "Kyoto : pays industrialisés seulement ; Paris : tous les pays, contributions nationales.", ["Les deux traitent des gaz à effet de serre.", "L'un distingue pays riches et pays en développement.", "L'autre repose sur des engagements volontaires de chacun."], { a: "regle", r: true }),
    q("B-ACT-ENV-012", "energie", 2, "Pourquoi la crise du détroit d'Ormuz de 2026 relance-t-elle le débat sur la transition énergétique en Europe ?", [
      ["Elle montre la vulnérabilité des pays dépendants des hydrocarbures importés", true, "Hausse brutale des prix de l'énergie."],
      ["Elle a provoqué la fermeture des centrales nucléaires européennes", false, "Aucun lien avec le parc nucléaire."],
      ["Elle a fait baisser le prix du pétrole", false, "C'est l'inverse : les prix ont flambé."],
      ["Elle a supprimé les importations de gaz de Norvège", false, "Le gaz norvégien ne transite pas par Ormuz."],
    ], "Le blocage d'une voie de passage majeure du pétrole et du GNL a fait bondir les prix (+21,2 % pour l'énergie en France en septembre 2026). Réduire la dépendance aux fossiles importés devient un enjeu de sécurité autant que de climat.", "La transition énergétique est aussi un enjeu de souveraineté et de sécurité.", ["Pense au choc pétrolier de 2026.", "L'Europe importe la majeure partie de son pétrole et de son gaz.", "Moins de fossiles importés = moins de vulnérabilité."], { n: ["guerre-iran-ormuz"], a: "approfondir" }),
    q("B-ACT-ENV-013", "cop", 1, "En quelle année et lors de quelle COP l'accord de Paris sur le climat a-t-il été adopté ?", [
      ["En 2015, lors de la COP21", true, "Adopté le 12 décembre 2015 au Bourget."],
      ["En 1997, lors de la COP3", false, "C'est le protocole de Kyoto."],
      ["En 2021, lors de la COP26", false, "La COP26 de Glasgow a complété les règles de l'accord."],
      ["En 2025, lors de la COP30", false, "Belém a célébré les dix ans de l'accord."],
    ], "L'accord de Paris a été adopté le 12 décembre 2015 lors de la COP21, sous présidence française.", "Accord de Paris : COP21, 12 décembre 2015.", ["La France présidait la conférence.", "Elle s'est tenue au Bourget.", "Dix ans avant la COP30."], { a: "formules" }),
    q("B-ACT-ENV-014", "climat", 3, "La loi climat européenne révisée en 2026 autorise l'usage de crédits carbone internationaux. Dans quelle limite ?", [
      ["Jusqu'à 5 % des émissions nettes de 1990, à partir de 2036", true, "Au moins 85 % des réductions doivent donc être obtenues dans l'UE."],
      ["Sans limite, dès 2026", false, "Le recours aux crédits est plafonné et différé."],
      ["Jusqu'à 50 % de l'effort", false, "Bien au-delà du plafond adopté."],
      ["Ces crédits sont interdits", false, "Ils sont autorisés dans une proportion limitée."],
    ], "Le texte adopté le 5 mars 2026 permet de compter jusqu'à 5 % des émissions nettes de 1990 sous forme de crédits internationaux, à partir de 2036. L'objectif de -90 % suppose donc au moins -85 % de réductions domestiques.", "Objectif 2040 de l'UE : -90 %, dont au plus 5 points de crédits internationaux à partir de 2036.", ["Les crédits sont autorisés mais encadrés.", "Le plafond est un petit pourcentage.", "90 - 5 = 85 % de réductions dans l'UE."], { n: ["climat-2040-ue"], r: true }),
  ],
};
