// Enjeux contemporains : Union européenne (act.ue).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.ue";
const q = maker(S);

export const ACT_UE: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "L'Union européenne : institutions, euro et grands dossiers",
      objectives: ["Distinguer les institutions de l'UE et leurs dirigeants", "Expliquer le fonctionnement de la zone euro et de la BCE", "Situer l'élargissement, le budget et la politique commerciale", "Relier les décisions européennes de 2026 à leurs effets en France"],
      prerequisites: ["act.inst"],
      regle:
        "L'Union européenne compte 27 États membres depuis la sortie du Royaume-Uni (31 janvier 2020). Cinq institutions sont à connaître. La Commission européenne (présidée par Ursula von der Leyen, reconduite en 2024) propose les textes, exécute le budget et négocie les accords commerciaux. Le Parlement européen (720 députés élus au suffrage direct pour cinq ans, dont 81 pour la France, dernière élection en juin 2024) vote les lois et le budget avec le Conseil de l'UE, qui réunit les ministres des États par domaine et dont la présidence tourne tous les six mois. Le Conseil européen réunit les chefs d'État ou de gouvernement et fixe les grandes orientations ; il est présidé depuis décembre 2024 par António Costa. La Cour de justice de l'UE (Luxembourg) veille au respect du droit de l'Union.\n\nL'euro est la monnaie de 21 États depuis l'entrée de la Bulgarie le 1er janvier 2026. La Banque centrale européenne (Francfort, présidée par Christine Lagarde) conduit la politique monétaire avec pour objectif principal la stabilité des prix, définie comme une inflation de 2 % à moyen terme. Les critères de convergence du traité de Maastricht (1992) fixent notamment un déficit public inférieur à 3 % du PIB et une dette inférieure à 60 % du PIB.\n\nL'adhésion suppose de respecter les critères de Copenhague (1993) : démocratie et État de droit, économie de marché, reprise de l'acquis communautaire ; elle exige l'unanimité des États. Le budget de l'UE est encadré par un cadre financier pluriannuel (2021-2027) et représente environ 1 % du revenu national brut de l'Union. La politique commerciale est une compétence exclusive de l'Union.\n\nPoint d'actualité (vérifié le 14 octobre 2026) : l'Irlande préside le Conseil de l'UE depuis le 1er juillet 2026, après Chypre ; la Lituanie prendra le relais le 1er janvier 2027. L'accord UE-Mercosur, signé le 17 janvier 2026, s'applique à titre provisoire depuis le 1er mai 2026 malgré l'opposition de la France. La loi climat fixe désormais -90 % d'émissions nettes en 2040 (adoptée le 5 mars 2026). Les obligations de l'AI Act pour l'IA à haut risque sont reportées au 2 décembre 2027. En Hongrie, Péter Magyar a remplacé Viktor Orbán après les législatives du 12 avril 2026.",
      formules:
        "27 États membres · 21 dans la zone euro (Bulgarie depuis le 1er janvier 2026)\nCommission : Ursula von der Leyen · Conseil européen : António Costa · BCE : Christine Lagarde\nParlement européen : 720 députés, dont 81 pour la France, élus pour 5 ans\nPrésidences du Conseil de l'UE : Chypre (1er semestre 2026), Irlande (2e semestre 2026), Lituanie (1er semestre 2027)\nMaastricht : déficit < 3 % du PIB, dette < 60 % du PIB\nBCE : inflation de 2 % à moyen terme",
      methode:
        "1. Identifier qui décide : Commission (propose), Parlement et Conseil de l'UE (votent), Conseil européen (oriente), Cour (juge).\n2. Vérifier si l'on parle des 27 (UE) ou des 21 (zone euro).\n3. Dater la décision : proposition, accord politique, adoption, entrée en vigueur, application.\n4. Repérer le chiffre et son unité (pourcentage du PIB, milliards d'euros, nombre d'États).",
      exemple:
        "Question : « Quelle institution a négocié l'accord UE-Mercosur au nom des États membres ? »\nRaisonnement : la politique commerciale est une compétence exclusive de l'Union ; c'est la Commission européenne qui négocie, puis le Conseil autorise la signature. Le Parlement européen doit donner son approbation pour la conclusion : il a préféré saisir d'abord la Cour de justice. Réponse : la Commission européenne.",
      erreur:
        "✗ Confondre Conseil européen, Conseil de l'UE et Conseil de l'Europe → ✓ Chefs d'État ; ministres ; organisation distincte de 46 États (Strasbourg, droits de l'homme).\n✗ Dire que la zone euro compte 20 membres → ✓ 21 depuis l'entrée de la Bulgarie le 1er janvier 2026.\n✗ Croire que la BCE fixe la politique budgétaire → ✓ Elle conduit la politique monétaire ; les budgets restent nationaux.\n✗ Confondre adoption d'un texte et date d'application → ✓ L'AI Act est entré en vigueur en 2024 mais s'applique par étapes jusqu'en 2028.",
      approfondir:
        "Pour aller vite, associe chaque institution à une ville : Bruxelles (Commission, Conseil), Strasbourg (sessions du Parlement), Luxembourg (Cour de justice), Francfort (BCE). Les présidences tournantes suivent un ordre fixé à l'avance : il suffit de retenir celle en cours au moment du concours (Lituanie au premier semestre 2027). Autre repère : en décembre 2025, faute d'accord sur l'usage des avoirs russes gelés, les Vingt-Sept ont accordé à l'Ukraine un prêt de 90 milliards d'euros pour 2026-2027, financé par un emprunt commun. Lien avec act.eco : l'UE surveille les déficits nationaux par la procédure pour déficit excessif, ouverte contre la France en 2024.",
      cards: [
        ["Nombre d'États de la zone euro en 2026", "21 (Bulgarie entrée le 1er janvier 2026)", false],
        ["Président du Conseil européen", "António Costa (depuis décembre 2024)", true],
        ["Présidence du Conseil de l'UE au 1er semestre 2027", "Lituanie", false],
        ["Critères de Copenhague", "Démocratie et État de droit, économie de marché, reprise de l'acquis", false],
        ["Objectif climatique 2040 de l'UE", "-90 % d'émissions nettes par rapport à 1990", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-UE-001", "euro", 1, "Quel pays est devenu le 21e membre de la zone euro le 1er janvier 2026 ?", [
      ["La Bulgarie", true, "Elle a remplacé le lev par l'euro au 1er janvier 2026."],
      ["La Croatie", false, "Entrée dans la zone euro en 2023 (20e membre)."],
      ["La Roumanie", false, "Elle ne remplit pas encore les critères, notamment budgétaires."],
      ["La Pologne", false, "Elle conserve le złoty et n'a pas fixé de date."],
    ], "Après la Croatie en 2023, la Bulgarie adopte l'euro le 1er janvier 2026 : la zone euro compte 21 États sur les 27 de l'UE.", "Zone euro : 21 membres depuis l'entrée de la Bulgarie (1er janvier 2026).", ["Pays des Balkans, membre de l'UE depuis 2007.", "Sa capitale est Sofia.", "Son ancienne monnaie était le lev."], { a: "formules" }),
    q("B-ACT-UE-002", "institutions", 1, "Quelle institution réunit les chefs d'État ou de gouvernement des États membres de l'UE ?", [
      ["Le Conseil européen", true, "Il définit les orientations politiques générales."],
      ["Le Conseil de l'Union européenne", false, "Il réunit les ministres par domaine."],
      ["Le Conseil de l'Europe", false, "Organisation distincte de l'UE, centrée sur les droits de l'homme."],
      ["La Commission européenne", false, "Elle est composée d'un commissaire par État, pas des chefs d'État."],
    ], "Le Conseil européen, présidé par António Costa, rassemble les 27 chefs d'État ou de gouvernement, le président de la Commission et son propre président. Le Conseil de l'UE est formé des ministres.", "Conseil européen = chefs d'État ou de gouvernement ; Conseil de l'UE = ministres.", ["Trois « conseils » se ressemblent.", "Celui-ci fixe les grandes orientations lors de sommets.", "Son président est António Costa."], { a: "erreur" }),
    q("B-ACT-UE-003", "institutions", 2, "Qui préside le Conseil européen depuis le 1er décembre 2024 ?", [
      ["António Costa", true, "Ancien Premier ministre portugais."],
      ["Charles Michel", false, "Son prédécesseur (2019-2024)."],
      ["Ursula von der Leyen", false, "Elle préside la Commission européenne."],
      ["Roberta Metsola", false, "Elle préside le Parlement européen."],
    ], "António Costa a succédé à Charles Michel à la présidence du Conseil européen le 1er décembre 2024, pour un mandat de deux ans et demi renouvelable une fois.", "Conseil européen : António Costa ; Commission : Ursula von der Leyen.", ["Il est portugais.", "Il a été Premier ministre de son pays de 2015 à 2024.", "Il a succédé au Belge Charles Michel."]),
    q("B-ACT-UE-004", "presidence", 1, "Quel État assure la présidence tournante du Conseil de l'UE au second semestre 2026 ?", [
      ["L'Irlande", true, "Depuis le 1er juillet 2026, après Chypre."],
      ["Chypre", false, "Présidence du premier semestre 2026."],
      ["La Lituanie", false, "Présidence du premier semestre 2027."],
      ["Le Danemark", false, "Présidence du second semestre 2025."],
    ], "La présidence tourne tous les six mois : Danemark (2e semestre 2025), Chypre (1er semestre 2026), Irlande (2e semestre 2026), Lituanie (1er semestre 2027).", "Présidence du Conseil de l'UE : Irlande (juillet-décembre 2026), puis Lituanie.", ["La présidence change le 1er janvier et le 1er juillet.", "C'est un État anglophone.", "Sa capitale est Dublin."], { a: "formules" }),
    q("B-ACT-UE-005", "presidence", 2, "Quel État présidera le Conseil de l'UE au moment des écrits SESAME d'avril 2027 ?", [
      ["La Lituanie", true, "Présidence du 1er janvier au 30 juin 2027."],
      ["L'Irlande", false, "Sa présidence s'achève le 31 décembre 2026."],
      ["La Grèce", false, "Présidence prévue au second semestre 2027."],
      ["La France", false, "Sa dernière présidence date du premier semestre 2022."],
    ], "L'ordre des présidences est fixé à l'avance : après l'Irlande (juillet-décembre 2026) vient la Lituanie (janvier-juin 2027), puis la Grèce.", "Au premier semestre 2027, la Lituanie préside le Conseil de l'UE.", ["Avril tombe au premier semestre.", "C'est un État balte.", "Sa capitale est Vilnius."], { r: true }),
    q("B-ACT-UE-006", "maastricht", 1, "Selon les critères de Maastricht, quel plafond est fixé pour le déficit public d'un État de la zone euro ?", [
      ["3 % du PIB", true, "Valeur de référence du traité et du pacte de stabilité."],
      ["60 % du PIB", false, "C'est le plafond de la dette publique."],
      ["2 % du PIB", false, "Confusion avec l'objectif d'inflation de la BCE."],
      ["5 % du PIB", false, "C'est l'objectif de déficit du budget français pour 2027, très au-dessus du plafond."],
    ], "Le traité de Maastricht (1992) fixe deux critères de finances publiques : déficit inférieur à 3 % du PIB, dette inférieure à 60 % du PIB.", "Maastricht : déficit < 3 % du PIB, dette < 60 % du PIB.", ["Deux critères de finances publiques existent.", "L'un porte sur la dette, l'autre sur le déficit annuel.", "Le plus petit des deux chiffres concerne le déficit."], { a: "formules" }),
    q("B-ACT-UE-007", "bce", 2, "Où siège la Banque centrale européenne et qui la préside en 2026 ?", [
      ["À Francfort, présidée par Christine Lagarde", true, "Elle préside la BCE depuis novembre 2019."],
      ["À Bruxelles, présidée par Christine Lagarde", false, "Erreur de siège : Bruxelles accueille la Commission."],
      ["À Francfort, présidée par Mario Draghi", false, "Mario Draghi a présidé la BCE de 2011 à 2019."],
      ["À Luxembourg, présidée par Ursula von der Leyen", false, "Luxembourg accueille la Cour de justice ; von der Leyen préside la Commission."],
    ], "La BCE, créée en 1998, siège à Francfort-sur-le-Main (Allemagne). Christine Lagarde la préside depuis le 1er novembre 2019 pour un mandat de huit ans.", "BCE : Francfort, Christine Lagarde.", ["Le siège est en Allemagne.", "C'est une ancienne directrice du FMI.", "Elle est française."]),
    q("B-ACT-UE-008", "mercosur", 2, "Où en est l'accord commercial entre l'Union européenne et le Mercosur en octobre 2026 ?", [
      ["Il s'applique à titre provisoire depuis le 1er mai 2026, alors que la Cour de justice de l'UE a été saisie", true, "Application provisoire décidée malgré l'opposition de la France."],
      ["Il a été rejeté par le Conseil de l'UE en janvier 2026", false, "Le Conseil a au contraire autorisé la signature, intervenue le 17 janvier 2026."],
      ["Il est entré définitivement en vigueur après ratification par les 27 parlements nationaux", false, "La procédure de conclusion n'est pas achevée."],
      ["Les négociations ont été suspendues sans signature", false, "L'accord a bien été signé le 17 janvier 2026."],
    ], "Signé le 17 janvier 2026, l'accord est appliqué provisoirement depuis le 1er mai 2026. Le Parlement européen a voté la saisine de la Cour de justice pour vérifier sa compatibilité avec les traités ; la France, inquiète pour ses agriculteurs, menait l'opposition.", "UE-Mercosur : signé le 17 janvier 2026, application provisoire depuis le 1er mai 2026.", ["L'accord a bien été signé en 2026.", "Une application anticipée est possible avant la fin des ratifications.", "Le Parlement européen a saisi une juridiction."], { n: ["mercosur-2026"] }),
    q("B-ACT-UE-009", "mercosur", 1, "Quels pays forment le Mercosur partie à l'accord avec l'Union européenne ?", [
      ["Argentine, Brésil, Paraguay, Uruguay", true, "Membres fondateurs du Mercosur (1991)."],
      ["Argentine, Brésil, Chili, Mexique", false, "Le Chili et le Mexique ont leurs propres accords avec l'UE et ne sont pas membres du Mercosur."],
      ["Brésil, Colombie, Pérou, Venezuela", false, "Confusion avec d'autres pays sud-américains ; le Venezuela est suspendu."],
      ["Brésil, Russie, Inde, Chine", false, "Confusion avec les BRICS."],
    ], "Le Mercosur (marché commun du Sud) a été créé en 1991 par l'Argentine, le Brésil, le Paraguay et l'Uruguay ; la Bolivie l'a rejoint récemment mais n'a pas participé à la négociation avec l'UE.", "Mercosur de l'accord UE : Argentine, Brésil, Paraguay, Uruguay.", ["Organisation d'Amérique du Sud.", "Créée par le traité d'Asunción.", "Elle réunit les deux grands pays du cône Sud et leurs deux petits voisins."], { n: ["mercosur-2026"] }),
    q("B-ACT-UE-010", "climat", 2, "Quel objectif de réduction des émissions nettes de gaz à effet de serre pour 2040 l'UE a-t-elle inscrit dans sa loi climat en 2026 ?", [
      ["-90 % par rapport à 1990", true, "Adopté définitivement par le Conseil le 5 mars 2026."],
      ["-55 % par rapport à 1990", false, "C'est l'objectif fixé pour 2030."],
      ["-100 %, la neutralité climatique", false, "La neutralité est visée pour 2050."],
      ["-90 % par rapport à 2005", false, "L'année de référence est 1990."],
    ], "La loi européenne sur le climat modifiée fixe un jalon de -90 % d'émissions nettes en 2040 par rapport à 1990, entre -55 % en 2030 et la neutralité en 2050 ; jusqu'à 5 % de crédits internationaux pourront être utilisés à partir de 2036.", "UE : -55 % en 2030, -90 % en 2040, neutralité en 2050 (base 1990).", ["L'année de référence européenne est 1990.", "Le jalon se situe entre l'objectif 2030 et la neutralité 2050.", "Il manque 10 points pour atteindre la neutralité."], { n: ["climat-2040-ue"] }),
    q("B-ACT-UE-011", "elargissement", 2, "Lesquels de ces critères conditionnent l'adhésion d'un pays à l'Union européenne ?", [
      ["Les critères de Copenhague : institutions démocratiques et État de droit, économie de marché, reprise de l'acquis communautaire", true, "Définis en 1993 par le Conseil européen de Copenhague."],
      ["Les critères de Maastricht : déficit et dette publics", false, "Ils conditionnent l'entrée dans la zone euro."],
      ["L'appartenance préalable à l'OTAN", false, "Plusieurs membres de l'UE ne sont pas membres de l'OTAN (Autriche, Irlande…)."],
      ["Une population minimale de cinq millions d'habitants", false, "Malte ou le Luxembourg sont membres avec bien moins."],
    ], "Les critères de Copenhague (1993) sont politiques, économiques et juridiques. L'adhésion requiert ensuite l'unanimité des États membres et la ratification du traité d'adhésion par chacun d'eux.", "Adhésion à l'UE : critères de Copenhague et unanimité ; entrée dans l'euro : critères de Maastricht.", ["Il existe deux familles de critères européens.", "L'une concerne la monnaie, l'autre l'adhésion.", "Celle de l'adhésion porte le nom d'une capitale scandinave."]),
    q("B-ACT-UE-012", "hongrie", 2, "Quel événement politique a eu lieu en Hongrie le 12 avril 2026 ?", [
      ["Viktor Orbán a perdu les législatives face au parti Tisza de Péter Magyar", true, "Orbán, au pouvoir depuis 2010, a reconnu sa défaite."],
      ["La Hongrie a quitté l'Union européenne", false, "Aucun retrait : seul le Royaume-Uni a quitté l'UE."],
      ["Viktor Orbán a été réélu avec une majorité des deux tiers", false, "C'est son adversaire qui obtient une large majorité."],
      ["La Hongrie a adopté l'euro", false, "Elle conserve le forint."],
    ], "Lors des législatives du 12 avril 2026, le parti Tisza de Péter Magyar, ancien proche du Fidesz passé dans l'opposition, remporte une large majorité ; Viktor Orbán concède sa défaite. Le changement modifie les équilibres au Conseil européen, où la Hongrie bloquait souvent les décisions sur l'Ukraine.", "Hongrie : Péter Magyar l'emporte sur Viktor Orbán (12 avril 2026).", ["Le Premier ministre sortant gouvernait depuis 2010.", "Son adversaire est un ancien membre de son camp.", "Le parti vainqueur s'appelle Tisza."], { n: ["elections-automne-2026"] }),
    q("B-ACT-UE-013", "ukraine", 3, "Faute d'accord sur l'utilisation des avoirs russes gelés, comment les Vingt-Sept ont-ils décidé en décembre 2025 de financer l'Ukraine pour 2026-2027 ?", [
      ["Par un prêt de 90 milliards d'euros financé par un emprunt de l'UE", true, "Décision du Conseil européen des 18 et 19 décembre 2025."],
      ["En confisquant intégralement les avoirs de la Banque centrale russe", false, "C'est précisément l'option qui n'a pas fait consensus."],
      ["Par une hausse de la TVA dans tous les États membres", false, "L'UE ne fixe pas seule les taux de TVA pour financer une aide."],
      ["Par l'adhésion immédiate de l'Ukraine à l'UE", false, "L'Ukraine reste candidate ; l'adhésion suppose une longue négociation."],
    ], "Lors du Conseil européen de décembre 2025, faute d'unanimité sur un « prêt de réparation » adossé aux avoirs russes gelés (notamment en Belgique), les dirigeants ont retenu un prêt de 90 milliards d'euros à l'Ukraine pour 2026-2027, financé par un emprunt commun.", "Décembre 2025 : prêt de 90 milliards d'euros de l'UE à l'Ukraine, financé par emprunt.", ["L'utilisation des avoirs russes était bloquée.", "L'UE a eu recours à sa capacité d'emprunt.", "Le montant est inférieur à 100 milliards."], { a: "approfondir", r: true }),
    q("B-ACT-UE-014", "parlement", 1, "Combien la France compte-t-elle de députés au Parlement européen depuis les élections de juin 2024 ?", [
      ["81", true, "Sur 720 eurodéputés."],
      ["96", false, "C'est le nombre maximal pour un État, attribué à l'Allemagne."],
      ["79", false, "Nombre de la législature 2019-2024 après le Brexit."],
      ["577", false, "C'est le nombre de députés à l'Assemblée nationale."],
    ], "Le Parlement européen élu en juin 2024 compte 720 membres ; la France en élit 81, au scrutin proportionnel sur liste nationale.", "France : 81 eurodéputés sur 720.", ["Le nombre est proportionnel à la population, avec des correctifs.", "La France est le deuxième État le plus peuplé de l'UE.", "Le total du Parlement est de 720."], { a: "formules" }),
  ],
};
