// Enjeux contemporains : société, démographie, éducation, droit (act.societe).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.societe";
const q = maker(S);

export const ACT_SOCIETE: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Société française : démographie, inégalités et grandes lois",
      objectives: ["Lire les indicateurs démographiques de l'Insee", "Définir les principaux indicateurs d'inégalités", "Suivre le parcours d'une loi de société jusqu'à son application", "Retenir les réformes de société de 2026"],
      prerequisites: ["act.inst"],
      regle:
        "La démographie se décrit avec quelques indicateurs. Le solde naturel est la différence entre naissances et décès ; le solde migratoire, la différence entre entrées et sorties du territoire. L'indicateur conjoncturel de fécondité (ICF) est le nombre moyen d'enfants par femme ; il faut environ 2,1 enfants par femme pour assurer le renouvellement des générations. L'espérance de vie à la naissance mesure la durée de vie moyenne d'une génération fictive soumise aux conditions de mortalité de l'année.\n\nLes inégalités se mesurent notamment par le seuil de pauvreté (en France, 60 % du revenu médian), le coefficient de Gini (de 0, égalité parfaite, à 1, inégalité maximale) et l'indice de développement humain (IDH) du PNUD, qui combine santé, éducation et revenu. L'instruction est obligatoire de 3 à 16 ans, complétée par une obligation de formation jusqu'à 18 ans.\n\nUne loi suit un parcours précis : dépôt (projet du gouvernement ou proposition d'un parlementaire), navette entre les deux assemblées, commission mixte paritaire en cas de désaccord, éventuellement lecture définitive à l'Assemblée, contrôle du Conseil constitutionnel s'il est saisi, promulgation, puis décrets d'application.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Selon l'Insee, la France compte 69,1 millions d'habitants au 1er janvier 2026 ; en 2025, les décès (651 000) ont dépassé les naissances (645 000) pour la première fois depuis la fin de la Seconde Guerre mondiale, et la fécondité est tombée à 1,56 enfant par femme. L'espérance de vie atteint 85,9 ans pour les femmes et 80,3 ans pour les hommes. La loi créant un droit à l'aide à mourir a été adoptée en lecture définitive le 15 juillet 2026 et validée par le Conseil constitutionnel le 14 août 2026, avec trois réserves. Le 21 juillet 2026, le Parlement a adopté l'interdiction des réseaux sociaux aux moins de 15 ans, portée par la députée Laure Miller.",
      formules:
        "Solde naturel = naissances - décès · solde migratoire = entrées - sorties\nRenouvellement des générations : environ 2,1 enfants par femme\nFrance 2025 : ICF 1,56 · naissances ≈ 645 000 · décès ≈ 651 000 · solde naturel ≈ -6 000\nPopulation au 1er janvier 2026 : 69,1 millions\nEspérance de vie 2025 : femmes 85,9 ans · hommes 80,3 ans\nSeuil de pauvreté : 60 % du revenu médian · Gini : 0 (égalité) à 1",
      methode:
        "1. Pour un chiffre démographique : vérifier l'année, le territoire (France entière ou métropole) et l'unité.\n2. Pour une loi : identifier l'étape (vote, décision du Conseil constitutionnel, promulgation, application).\n3. Pour un indicateur d'inégalité : se rappeler ce que vaut l'égalité parfaite.\n4. Éliminer les options qui confondent un flux (naissances d'une année) et un stock (population).",
      exemple:
        "Question : « En 2025, la population française a-t-elle diminué puisque les décès ont dépassé les naissances ? »\nRaisonnement : la variation de population = solde naturel + solde migratoire. Le solde naturel est d'environ -6 000, mais le solde migratoire est estimé à +176 000. La population a donc augmenté (+0,25 %) pour atteindre 69,1 millions au 1er janvier 2026.",
      erreur:
        "✗ Conclure qu'un solde naturel négatif fait baisser la population → ✓ Il faut ajouter le solde migratoire.\n✗ Croire qu'un Gini proche de 1 signale une société égalitaire → ✓ 0 = égalité parfaite.\n✗ Confondre vote d'une loi et entrée en application → ✓ Une loi adoptée peut attendre une décision du Conseil constitutionnel puis des décrets.\n✗ Confondre l'aide à mourir avec la sédation profonde de la loi Claeys-Leonetti de 2016.",
      approfondir:
        "Les chiffres démographiques de l'Insee paraissent chaque année à la mi-janvier : le bilan publié en janvier 2027 sera le plus récent au moment du concours, pense à le consulter. Lien avec act.tech : la loi sur les réseaux sociaux doit s'articuler avec le règlement européen DSA. Lien avec act.eco : la baisse de la natalité pèse à long terme sur le financement des retraites.",
      cards: [
        ["Fécondité en France en 2025", "1,56 enfant par femme", false],
        ["Solde naturel 2025", "Négatif (environ -6 000), une première depuis 1945", false],
        ["Décision du Conseil constitutionnel sur l'aide à mourir", "14 août 2026 : conformité sous trois réserves", false],
        ["Seuil de pauvreté en France", "60 % du revenu médian", true],
      ],
    },
  ],
  questions: [
    q("B-ACT-SOC-001", "demographie", 1, "Quel fait démographique inédit depuis la fin de la Seconde Guerre mondiale l'Insee a-t-il relevé pour l'année 2025 ?", [
      ["Les décès ont été plus nombreux que les naissances", true, "Solde naturel d'environ -6 000."],
      ["La population française a diminué", false, "Elle a augmenté grâce au solde migratoire."],
      ["L'espérance de vie a reculé de cinq ans", false, "Elle a au contraire légèrement progressé."],
      ["La fécondité est remontée au-dessus de 2 enfants par femme", false, "Elle a baissé à 1,56."],
    ], "Environ 651 000 décès pour 645 000 naissances : le solde naturel devient négatif pour la première fois depuis 1945. La population atteint pourtant 69,1 millions au 1er janvier 2026 grâce au solde migratoire.", "2025 : solde naturel négatif en France, une première depuis la Seconde Guerre mondiale.", ["Compare naissances et décès.", "Le solde naturel a changé de signe.", "Il y a eu plus de morts que de naissances."], { n: ["demographie-2025"] }),
    q("B-ACT-SOC-002", "demographie", 1, "Quel est l'indicateur conjoncturel de fécondité en France en 2025, selon l'Insee ?", [
      ["1,56 enfant par femme", true, "Plus bas niveau depuis la fin de la Première Guerre mondiale."],
      ["1,61 enfant par femme", false, "C'était le niveau de 2024."],
      ["2,1 enfants par femme", false, "C'est le seuil de renouvellement des générations."],
      ["1,8 enfant par femme", false, "Niveau du début des années 2020, dépassé à la baisse."],
    ], "L'ICF continue de baisser : 1,56 en 2025 après 1,61 en 2024, loin du seuil de renouvellement de 2,1.", "Fécondité 2025 : 1,56 enfant par femme.", ["La fécondité baisse depuis 2010.", "Elle a perdu 0,05 point en un an.", "Elle est nettement sous 1,6."], { n: ["demographie-2025"], a: "formules" }),
    q("B-ACT-SOC-003", "demographie", 2, "En 2025, le solde naturel de la France est d'environ -6 000 et le solde migratoire d'environ +176 000. Comment évolue la population ?", [
      ["Elle augmente d'environ 170 000 personnes", true, "-6 000 + 176 000 = +170 000."],
      ["Elle diminue d'environ 6 000 personnes", false, "Oubli du solde migratoire."],
      ["Elle augmente d'environ 182 000 personnes", false, "Erreur de signe sur le solde naturel."],
      ["Elle reste exactement stable", false, "Les deux soldes ne se compensent pas."],
    ], "Variation de population = solde naturel + solde migratoire = -6 000 + 176 000 ≈ +170 000, soit environ +0,25 %.", "Variation de la population = solde naturel + solde migratoire.", ["La population dépend de deux soldes.", "Additionne-les en tenant compte des signes.", "-6 000 + 176 000."], { n: ["demographie-2025"], a: "exemple" }),
    q("B-ACT-SOC-004", "demographie", 2, "Quelle est l'espérance de vie à la naissance des femmes en France en 2025 ?", [
      ["85,9 ans", true, "Contre 80,3 ans pour les hommes."],
      ["80,3 ans", false, "C'est l'espérance de vie des hommes."],
      ["90,1 ans", false, "Chiffre exagéré."],
      ["78,5 ans", false, "Chiffre trop bas, proche de celui des hommes vers 2010."],
    ], "Selon le bilan démographique 2025, l'espérance de vie à la naissance atteint 85,9 ans pour les femmes et 80,3 ans pour les hommes, en légère hausse.", "Espérance de vie 2025 : 85,9 ans (femmes), 80,3 ans (hommes).", ["Les femmes vivent plus longtemps que les hommes.", "L'écart est d'environ 5,6 ans.", "Le chiffre est proche de 86 ans."], { n: ["demographie-2025"], a: "formules" }),
    q("B-ACT-SOC-005", "lois", 1, "Quelle loi de société le Parlement a-t-il définitivement adoptée le 15 juillet 2026 ?", [
      ["La loi créant un droit à l'aide à mourir", true, "Adoptée en lecture définitive par l'Assemblée nationale."],
      ["La loi légalisant le mariage pour les couples de même sexe", false, "Elle date de 2013."],
      ["La loi constitutionnalisant la liberté de recourir à l'IVG", false, "Révision constitutionnelle de mars 2024."],
      ["La loi Claeys-Leonetti sur la sédation profonde", false, "Elle date de 2016."],
    ], "Après une longue navette et l'opposition du Sénat, l'Assemblée nationale a eu le dernier mot en lecture définitive le 15 juillet 2026. Le Conseil constitutionnel a validé le texte le 14 août 2026.", "Aide à mourir : loi adoptée le 15 juillet 2026, validée le 14 août 2026.", ["C'est une loi sur la fin de vie.", "Elle va plus loin que la loi de 2016.", "Elle crée un droit nouveau, encadré par des conditions strictes."], { n: ["aide-a-mourir"] }),
    q("B-ACT-SOC-006", "lois", 2, "Qu'a décidé le Conseil constitutionnel le 14 août 2026 au sujet de la loi relative à l'aide à mourir ?", [
      ["Il l'a déclarée conforme à la Constitution, sous trois réserves d'interprétation", true, "Décision n° 2026-910 DC."],
      ["Il l'a censurée en totalité", false, "Aucune disposition contestée n'a été censurée."],
      ["Il a demandé un référendum", false, "Le Conseil constitutionnel ne peut pas organiser de référendum."],
      ["Il a refusé de se prononcer", false, "Saisi, il est tenu de statuer."],
    ], "Saisi notamment par le Premier ministre, le président du Sénat et des parlementaires, le Conseil a jugé l'ensemble des dispositions contestées conformes, avec trois réserves : majeurs protégés, clause de conscience des pharmaciens, établissements privés.", "Conseil constitutionnel, 14 août 2026 : aide à mourir conforme sous trois réserves.", ["Le Conseil n'a rien censuré.", "Il a toutefois encadré l'interprétation.", "Une réserve concerne la clause de conscience."], { n: ["aide-a-mourir"], r: true }),
    q("B-ACT-SOC-007", "lois", 2, "Laquelle de ces conditions figure dans la loi sur l'aide à mourir validée en 2026 ?", [
      ["Être atteint d'une affection grave et incurable en phase avancée ou terminale", true, "Condition médicale centrale."],
      ["Être âgé d'au moins 75 ans", false, "La loi exige d'être majeur, sans âge minimal plus élevé."],
      ["Avoir l'accord écrit de sa famille", false, "La décision appartient à la personne, apte à exprimer une volonté libre et éclairée."],
      ["Résider dans un pays de l'Union européenne", false, "Il faut être français ou résider de façon stable et régulière en France."],
    ], "Cinq conditions cumulatives : être majeur ; être français ou résider de façon stable et régulière en France ; être atteint d'une affection grave et incurable en phase avancée ou terminale ; présenter une souffrance réfractaire ou insupportable ; être apte à manifester une volonté libre et éclairée.", "Aide à mourir : cinq conditions cumulatives, dont une affection grave et incurable en phase avancée ou terminale.", ["Les conditions sont médicales et personnelles.", "La volonté de la personne est centrale.", "La maladie doit être grave et incurable."], { n: ["aide-a-mourir"], r: true }),
    q("B-ACT-SOC-008", "lois", 1, "Quel âge minimal la loi adoptée en juillet 2026 fixe-t-elle pour accéder aux réseaux sociaux en France ?", [
      ["15 ans", true, "Interdiction pour les moins de 15 ans."],
      ["13 ans", false, "Âge minimal fixé par les conditions d'utilisation de nombreuses plateformes."],
      ["16 ans", false, "Âge retenu par l'Australie."],
      ["18 ans", false, "Âge de la majorité, non retenu."],
    ], "Portée par la députée Laure Miller, la loi adoptée le 21 juillet 2026 interdit les réseaux sociaux aux moins de 15 ans et prévoit l'interdiction du téléphone portable au lycée. L'Australie avait été pionnière avec un seuil de 16 ans.", "France : réseaux sociaux interdits aux moins de 15 ans (loi de juillet 2026).", ["L'âge correspond à la majorité numérique française.", "Il est inférieur à celui de l'Australie.", "Il correspond à la fin du collège."], { n: ["reseaux-sociaux-15-ans"] }),
    q("B-ACT-SOC-009", "inegalites", 1, "En France, comment l'Insee définit-il habituellement le seuil de pauvreté monétaire ?", [
      ["60 % du revenu médian", true, "Convention européenne usuelle."],
      ["50 % du revenu moyen", false, "Seuil parfois utilisé, mais rapporté au revenu médian et non retenu par défaut."],
      ["Le montant du SMIC", false, "Le SMIC est un salaire minimum, pas un seuil de pauvreté."],
      ["Un revenu inférieur à 3 dollars par jour", false, "C'est le seuil international d'extrême pauvreté de la Banque mondiale, pas le seuil français."],
    ], "Une personne est pauvre au sens monétaire si son niveau de vie est inférieur à 60 % du niveau de vie médian. C'est une mesure relative, qui dépend de la distribution des revenus.", "Seuil de pauvreté en France : 60 % du niveau de vie médian.", ["La mesure est relative.", "Elle se réfère à la médiane, pas à la moyenne.", "Le pourcentage est supérieur à la moitié."], { a: "formules" }),
    q("B-ACT-SOC-010", "inegalites", 2, "Que signifie un coefficient de Gini égal à 0 ?", [
      ["Une égalité parfaite des revenus", true, "Tout le monde perçoit le même revenu."],
      ["Une inégalité maximale", false, "C'est un coefficient égal à 1."],
      ["Une pauvreté nulle", false, "Le Gini mesure la répartition, pas le niveau de vie."],
      ["Une croissance nulle", false, "Le Gini n'est pas un indicateur de croissance."],
    ], "Le coefficient de Gini varie de 0 (tous les revenus égaux) à 1 (une seule personne perçoit tout). Plus il est élevé, plus les revenus sont inégalement répartis.", "Gini : 0 = égalité parfaite, 1 = inégalité maximale.", ["C'est un indicateur de répartition.", "Ses bornes sont 0 et 1.", "La borne basse correspond à l'égalité."], { a: "erreur" }),
    q("B-ACT-SOC-011", "education", 2, "Entre quels âges l'instruction est-elle obligatoire en France ?", [
      ["De 3 à 16 ans", true, "Âge abaissé de 6 à 3 ans par la loi de 2019."],
      ["De 6 à 16 ans", false, "Règle en vigueur avant la rentrée 2019."],
      ["De 3 à 18 ans", false, "À 16-18 ans, il s'agit d'une obligation de formation, non d'instruction."],
      ["De 6 à 18 ans", false, "Mélange de l'ancienne borne basse et de l'obligation de formation."],
    ], "La loi pour une école de la confiance (2019) a abaissé l'âge de l'instruction obligatoire à 3 ans. De 16 à 18 ans, une obligation de formation s'applique (école, apprentissage, emploi, service civique…).", "Instruction obligatoire de 3 à 16 ans ; obligation de formation jusqu'à 18 ans.", ["La borne basse a changé en 2019.", "Elle correspond à l'entrée en maternelle.", "La borne haute n'a pas changé."]),
    q("B-ACT-SOC-012", "lois", 3, "Dans la procédure législative, que signifie une adoption « en lecture définitive » par l'Assemblée nationale, comme pour l'aide à mourir en juillet 2026 ?", [
      ["Après l'échec de la conciliation avec le Sénat, le gouvernement donne le dernier mot à l'Assemblée", true, "Article 45 de la Constitution."],
      ["La loi entre en vigueur sans pouvoir être contrôlée par le Conseil constitutionnel", false, "Le Conseil peut toujours être saisi, et il l'a été."],
      ["La loi a été adoptée par référendum", false, "Le référendum relève de l'article 11."],
      ["Les deux assemblées ont voté le même texte dès la première lecture", false, "On parle alors d'adoption conforme, sans lecture définitive."],
    ], "Si les deux chambres restent en désaccord après la commission mixte paritaire et une nouvelle lecture, le gouvernement peut demander à l'Assemblée nationale de statuer définitivement (article 45). La loi peut ensuite être déférée au Conseil constitutionnel.", "Lecture définitive : l'Assemblée nationale a le dernier mot en cas de désaccord persistant avec le Sénat.", ["Le Sénat était opposé au texte.", "La Constitution prévoit une issue au désaccord entre les chambres.", "C'est l'Assemblée qui tranche."], { n: ["aide-a-mourir"], a: "methode" }),
  ],
};
