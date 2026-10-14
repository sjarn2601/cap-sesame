// Enjeux contemporains : institutions françaises (act.inst).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.inst";
const q = maker(S);

export const ACT_INST: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Les institutions de la Ve République",
      objectives: ["Situer le rôle du président, du gouvernement et du Parlement", "Expliquer le 49.3, la motion de censure et la dissolution", "Identifier les modes d'élection et les collectivités", "Relier ces mécanismes à l'actualité politique de 2026-2027"],
      regle:
        "La Constitution du 4 octobre 1958 fonde la Ve République. Le président de la République est élu pour cinq ans au suffrage universel direct (quinquennat adopté par référendum en 2000) ; depuis la révision de 2008, nul ne peut faire plus de deux mandats consécutifs. Il nomme le Premier ministre (article 8), peut dissoudre l'Assemblée nationale (article 12, pas de nouvelle dissolution dans l'année qui suit les élections), soumettre un projet de loi au référendum (article 11) et exercer des pouvoirs exceptionnels (article 16).\n\nLe gouvernement, dirigé par le Premier ministre, détermine et conduit la politique de la nation ; il est responsable devant l'Assemblée nationale. Le Parlement comprend l'Assemblée nationale (577 députés élus pour cinq ans au suffrage direct) et le Sénat (348 sénateurs élus pour six ans au suffrage indirect, renouvelés par moitié tous les trois ans).\n\nL'article 49.3 permet au Premier ministre d'engager la responsabilité du gouvernement sur un texte : il est adopté sans vote sauf si une motion de censure, déposée dans les 24 heures, est votée. Depuis 2008, il est illimité pour les lois de finances et de financement de la sécurité sociale, mais limité à un autre texte par session. Une motion de censure doit être signée par un dixième des députés et adoptée à la majorité absolue des membres de l'Assemblée, soit 289 voix. Elle a abouti deux fois : en 1962 contre Georges Pompidou et le 4 décembre 2024 contre Michel Barnier.\n\nLe Conseil constitutionnel compte neuf membres nommés pour neuf ans (trois par le président de la République, trois par le président de l'Assemblée, trois par le président du Sénat) ; il contrôle la conformité des lois à la Constitution, y compris par la question prioritaire de constitutionnalité (QPC) depuis 2010. Les collectivités territoriales sont les communes, les départements (101) et les régions (18, dont 13 en métropole).\n\nPoint d'actualité (vérifié le 14 octobre 2026) : Sébastien Lecornu est Premier ministre depuis septembre 2025, reconduit le 10 octobre 2025. Le budget 2026 n'a été adopté que le 2 février 2026 après des recours au 49.3 et le rejet des motions de censure. Les municipales ont eu lieu les 15 et 22 mars 2026, les sénatoriales le 27 septembre 2026 ; Gérard Larcher a été réélu président du Sénat le 1er octobre. La présidentielle est fixée aux 18 avril et 2 mai 2027.",
      formules:
        "Président : 5 ans, suffrage universel direct, 2 mandats consécutifs maximum\nAssemblée nationale : 577 députés, 5 ans, suffrage direct\nSénat : 348 sénateurs, 6 ans, suffrage indirect, renouvelé par moitié tous les 3 ans\nArticle 8 : nomination du Premier ministre · article 11 : référendum · article 12 : dissolution · article 16 : pouvoirs exceptionnels · article 89 : révision de la Constitution\nArticle 49.3 : adoption sans vote, sauf motion de censure votée\nMotion de censure : 1/10 des députés pour la déposer, 289 voix pour l'adopter\nConseil constitutionnel : 9 membres, 9 ans, renouvelé par tiers tous les 3 ans\nPrésidentielle 2027 : 18 avril et 2 mai",
      methode:
        "1. Repérer l'acteur : président, gouvernement, Assemblée, Sénat, Conseil constitutionnel ?\n2. Repérer l'étape : annonce, dépôt, vote, décision du Conseil constitutionnel, promulgation.\n3. Associer le bon article (8, 11, 12, 16, 49, 89) au mécanisme cité.\n4. Pour un chiffre, vérifier le seuil exact (289, 577, 348, 1/10).",
      exemple:
        "Question : « Le gouvernement engage sa responsabilité sur le budget ; une motion de censure recueille 260 voix. Que se passe-t-il ? »\nRaisonnement : la motion doit atteindre la majorité absolue des membres de l'Assemblée, soit 289 voix sur 577. Avec 260 voix, elle est rejetée et le texte est considéré comme adopté en lecture à l'Assemblée. C'est exactement ce qui s'est produit le 2 février 2026 pour le budget 2026.",
      erreur:
        "✗ Croire que le 49.3 supprime tout contrôle du Parlement → ✓ Il expose le gouvernement à une motion de censure.\n✗ Compter la majorité des suffrages exprimés pour la censure → ✓ Il faut 289 voix, majorité absolue des membres, et seuls les votes pour sont comptés.\n✗ Dire que les sénateurs sont élus au suffrage direct → ✓ Ils sont élus par des grands électeurs.\n✗ Confondre dissolution (article 12, Assemblée seule) et démission du gouvernement.\n✗ Placer la présidentielle 2027 avant les écrits SESAME → ✓ Elle a lieu les 18 avril et 2 mai 2027, après le 7 avril.",
      approfondir:
        "Retenir les deux censures réussies (1962 et 2024) et les dates de 2026-2027 suffit à répondre à la plupart des questions. Astuce : un chiffre rond comme 300 ou 290 pour la censure est un distracteur, la bonne réponse est 289. Lien avec act.eco : le 49.3 est surtout utilisé pour les lois de finances, ce qui relie institutions et finances publiques. En 45 secondes, raisonne d'abord sur le mécanisme, puis vérifie le nombre.",
      cards: [
        ["Seuil d'adoption d'une motion de censure", "289 voix (majorité absolue des 577 députés)", false],
        ["Article de la dissolution", "Article 12", true],
        ["Mandat des sénateurs", "6 ans, suffrage indirect, renouvellement par moitié tous les 3 ans", false],
        ["Présidentielle 2027", "Premier tour le 18 avril, second tour le 2 mai 2027", false],
        ["Censures réussies sous la Ve République", "1962 (Pompidou) et 4 décembre 2024 (Barnier)", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-INST-001", "parlement", 1, "Combien de voix faut-il au minimum pour qu'une motion de censure soit adoptée à l'Assemblée nationale ?", [
      ["289", true, "Majorité absolue des 577 membres de l'Assemblée."],
      ["58", false, "C'est le nombre de signatures (un dixième des députés) pour déposer la motion, pas pour l'adopter."],
      ["300", false, "Chiffre rond plausible mais inexact : la majorité absolue de 577 est 289."],
      ["La majorité des suffrages exprimés", false, "Confusion avec un vote ordinaire : seuls les votes favorables sont comptés et rapportés aux membres."],
    ], "L'article 49 de la Constitution exige la majorité des membres composant l'Assemblée : 577 / 2 = 288,5, donc 289 voix. Les abstentions ne comptent pas.", "Une motion de censure n'est adoptée qu'avec 289 voix, majorité absolue des 577 députés.", ["La motion de censure est prévue à l'article 49.", "Le seuil se calcule sur le nombre total de députés, pas sur les votants.", "Divise 577 par deux et arrondis à l'entier supérieur."], { a: "formules" }),
    q("B-ACT-INST-002", "49-3", 1, "Que permet l'article 49, alinéa 3, de la Constitution ?", [
      ["Faire adopter un texte sans vote, sauf si une motion de censure est votée", true, "Le gouvernement engage sa responsabilité sur le texte."],
      ["Dissoudre l'Assemblée nationale", false, "La dissolution relève de l'article 12 et du président."],
      ["Soumettre un texte au référendum", false, "C'est l'article 11."],
      ["Donner les pleins pouvoirs au président en cas de crise", false, "Confusion avec l'article 16."],
    ], "Avec le 49.3, le Premier ministre, après délibération du Conseil des ministres, engage la responsabilité du gouvernement sur un texte : celui-ci est considéré comme adopté si aucune motion de censure n'est votée dans les conditions de l'article 49.2.", "49.3 : adoption sans vote, contrepartie possible de la motion de censure.", ["Le 49 traite de la responsabilité du gouvernement.", "Le gouvernement « engage sa responsabilité » sur un texte.", "Le texte passe sauf si les députés renversent le gouvernement."]),
    q("B-ACT-INST-003", "elections", 1, "Comment les sénateurs sont-ils élus ?", [
      ["Au suffrage universel indirect, par des grands électeurs, pour six ans", true, "Le collège est surtout composé de délégués des conseils municipaux."],
      ["Au suffrage universel direct, pour cinq ans", false, "C'est le mode d'élection des députés."],
      ["Ils sont nommés par le président de la République", false, "Aucun sénateur n'est nommé."],
      ["Au suffrage indirect, pour neuf ans", false, "Neuf ans était l'ancienne durée, ramenée à six ans en 2003."],
    ], "Les sénateurs sont élus par environ 160 000 grands électeurs (députés, conseillers régionaux et départementaux, délégués des conseils municipaux), pour six ans, avec un renouvellement par moitié tous les trois ans.", "Sénat : suffrage indirect, mandat de six ans, renouvellement par moitié.", ["Le Sénat représente les collectivités territoriales.", "Les citoyens ne votent pas directement pour les sénateurs.", "La durée est supérieure à celle des députés."], { a: "formules" }),
    q("B-ACT-INST-004", "actu-senat", 1, "Le 1er octobre 2026, qui a été réélu président du Sénat ?", [
      ["Gérard Larcher", true, "Réélu dès le premier tour avec 203 voix, pour un sixième mandat."],
      ["Patrick Kanner", false, "Candidat socialiste, il a obtenu 60 voix."],
      ["Yaël Braun-Pivet", false, "Elle préside l'Assemblée nationale, pas le Sénat."],
      ["Jean-Pierre Bel", false, "Président du Sénat de 2011 à 2014, il n'était pas candidat."],
    ], "Après les sénatoriales du 27 septembre 2026, Gérard Larcher (LR) a été réélu le 1er octobre 2026 au premier tour. Il préside le Sénat depuis 2014 et l'avait déjà présidé de 2008 à 2011.", "Gérard Larcher préside le Sénat (réélu le 1er octobre 2026).", ["Il s'agit d'une réélection.", "Le titulaire préside le Sénat depuis 2014.", "C'est un élu Les Républicains des Yvelines."], { n: ["senatoriales-2026"] }),
    q("B-ACT-INST-005", "actu-presidentielle", 1, "À quelles dates est fixée l'élection présidentielle française de 2027 ?", [
      ["18 avril et 2 mai 2027", true, "Dates du calendrier officiel publié par le gouvernement."],
      ["10 et 24 avril 2027", false, "Calque des dates de 2022 (10 et 24 avril)."],
      ["4 et 18 avril 2027", false, "Dates inventées, antérieures au calendrier officiel."],
      ["9 et 23 mai 2027", false, "Hors délai : le scrutin doit avoir lieu 20 à 35 jours avant la fin du mandat en cours, qui s'achève mi-mai 2027."],
    ], "Le premier tour aura lieu le dimanche 18 avril 2027 et le second le dimanche 2 mai 2027 (la veille dans certains territoires d'outre-mer). Les parrainages sont clos le 12 mars 2027.", "Présidentielle 2027 : 18 avril et 2 mai.", ["Le scrutin a lieu après les écrits SESAME du 7 avril.", "Deux dimanches espacés de deux semaines.", "Le second tour tombe au tout début du mois de mai."], { n: ["presidentielle-2027"] }),
    q("B-ACT-INST-006", "president", 2, "Pourquoi Emmanuel Macron ne peut-il pas être candidat à l'élection présidentielle de 2027 ?", [
      ["La Constitution interdit plus de deux mandats présidentiels consécutifs", true, "Règle introduite par la révision constitutionnelle de 2008."],
      ["La Constitution limite l'âge des candidats", false, "Aucune limite d'âge maximale n'existe."],
      ["Le quinquennat interdit toute réélection", false, "La réélection est possible une fois : il a été réélu en 2022."],
      ["Le Conseil constitutionnel l'a déclaré inéligible", false, "Aucune décision de ce type n'existe."],
    ], "Élu en 2017 et réélu en 2022, Emmanuel Macron a effectué deux mandats consécutifs. Depuis 2008, l'article 6 de la Constitution prévoit que nul ne peut exercer plus de deux mandats consécutifs.", "Depuis 2008, le président ne peut pas exercer plus de deux mandats consécutifs.", ["La règle date d'une révision constitutionnelle sous Nicolas Sarkozy.", "Compte les élections d'Emmanuel Macron.", "Deux mandats consécutifs sont un maximum."]),
    q("B-ACT-INST-007", "dissolution", 2, "Quelle règle encadre le droit de dissolution de l'Assemblée nationale (article 12) ?", [
      ["Il ne peut pas y avoir de nouvelle dissolution dans l'année qui suit les élections législatives anticipées", true, "Seule limite temporelle prévue par l'article 12, avec l'exercice de l'article 16 et l'intérim."],
      ["Le président doit obtenir l'accord du Premier ministre", false, "La dissolution est un pouvoir propre, dispensé de contreseing."],
      ["Le Sénat doit approuver la dissolution", false, "Le Sénat est seulement consulté via son président, qui donne un avis."],
      ["Elle n'est possible qu'une fois par mandat présidentiel", false, "Aucune limite de ce type : seul le délai d'un an compte."],
    ], "Le président dissout après avoir consulté le Premier ministre et les présidents des assemblées, sans être lié par leur avis. Il ne peut pas procéder à une nouvelle dissolution dans l'année qui suit ces élections.", "Dissolution : pouvoir propre du président, pas de nouvelle dissolution dans l'année suivant les élections.", ["La dissolution relève d'un pouvoir propre du président.", "Les consultations obligatoires ne lient pas le président.", "La limite est temporelle : une année."]),
    q("B-ACT-INST-008", "conseil-constitutionnel", 2, "Combien de membres nommés compte le Conseil constitutionnel, et pour quelle durée ?", [
      ["9 membres pour 9 ans", true, "Renouvelé par tiers tous les trois ans."],
      ["9 membres pour 6 ans", false, "Confusion avec la durée du mandat sénatorial."],
      ["12 membres pour 9 ans", false, "Le nombre exact de membres nommés est neuf."],
      ["5 membres pour 5 ans", false, "Confusion avec le quinquennat."],
    ], "Le président de la République, le président de l'Assemblée nationale et le président du Sénat nomment chacun trois membres pour un mandat non renouvelable de neuf ans. Les anciens présidents de la République sont membres de droit.", "Conseil constitutionnel : 9 membres nommés pour 9 ans, renouvelés par tiers.", ["Trois autorités nomment chacune le même nombre de membres.", "Le renouvellement se fait par tiers tous les trois ans.", "Durée du mandat = nombre de membres."], { a: "formules" }),
    q("B-ACT-INST-009", "actu-budget", 2, "Comment le budget de l'État pour 2026 a-t-il finalement été adopté au début de l'année 2026 ?", [
      ["Grâce à l'article 49.3, les motions de censure déposées ayant été rejetées", true, "Adoption définitive le 2 février 2026."],
      ["Par référendum", false, "Une loi de finances ne passe pas par l'article 11."],
      ["Par ordonnance, après l'expiration du délai de 70 jours", false, "Procédure prévue par l'article 47 mais non utilisée."],
      ["À l'unanimité de l'Assemblée nationale", false, "Le gouvernement n'avait pas de majorité : il a recouru au 49.3."],
    ], "Faute de majorité, Sébastien Lecornu a engagé la responsabilité du gouvernement (49.3) sur le budget. Les dernières motions de censure (260 et 135 voix) n'ont pas atteint 289 voix : le budget 2026 est définitivement adopté le 2 février 2026.", "Le budget 2026 a été adopté le 2 février 2026 via le 49.3 après rejet des motions de censure.", ["Le gouvernement n'avait pas de majorité absolue.", "Un article de la Constitution permet d'adopter un texte sans vote.", "Les motions de censure n'ont pas atteint 289 voix."], { n: ["budget-2027"], a: "exemple" }),
    q("B-ACT-INST-010", "actu-municipales", 1, "Qui a été élu maire de Paris à l'issue des élections municipales de mars 2026 ?", [
      ["Emmanuel Grégoire", true, "Sa liste l'emporte au second tour du 22 mars 2026."],
      ["Rachida Dati", false, "Sa liste arrive deuxième au second tour."],
      ["Anne Hidalgo", false, "Maire sortante, elle ne se représentait pas."],
      ["Pierre-Yves Bournazel", false, "Candidat Horizons, sa liste a en partie fusionné avec celle de Rachida Dati avant le second tour."],
    ], "Au second tour, la liste du socialiste Emmanuel Grégoire obtient environ 50,5 % des voix contre environ 41,5 % pour celle de Rachida Dati (la liste LFI de Sophia Chikirou obtient environ 8 %). Le Conseil de Paris l'élit ensuite maire.", "Emmanuel Grégoire (PS) a succédé à Anne Hidalgo à la mairie de Paris en 2026.", ["Le nouveau maire est issu du même parti que la maire sortante.", "Il était premier adjoint d'Anne Hidalgo.", "Il est socialiste."], { n: ["municipales-2026"] }),
    q("B-ACT-INST-011", "censure", 3, "Sous la Ve République, combien de motions de censure ont abouti au renversement d'un gouvernement (à la mi-octobre 2026) ?", [
      ["Deux : en 1962 et en décembre 2024", true, "Gouvernements de Georges Pompidou puis de Michel Barnier."],
      ["Une seule, en 1962", false, "Oubli de la censure du gouvernement Barnier le 4 décembre 2024."],
      ["Aucune", false, "Confusion avec la rareté du phénomène."],
      ["Trois, dont celle du budget 2026", false, "Les motions déposées contre le budget 2026 ont été rejetées."],
    ], "La motion de censure n'a réussi que deux fois : en octobre 1962 contre le gouvernement Pompidou et le 4 décembre 2024 contre le gouvernement Barnier. Celles déposées en 2025-2026 contre les gouvernements Bayrou (renversé par un vote de confiance, article 49.1) et Lecornu ont échoué.", "Deux censures réussies : 1962 (Pompidou) et 2024 (Barnier).", ["Pense à un événement de décembre 2024.", "La première date de la querelle sur l'élection du président au suffrage direct.", "Un gouvernement renversé par un vote de confiance n'est pas une censure."], { a: "erreur", r: true }),
    q("B-ACT-INST-012", "collectivites", 1, "Combien la France compte-t-elle de régions (métropole et outre-mer) ?", [
      ["18", true, "13 en métropole et 5 en outre-mer."],
      ["13", false, "Oubli des régions d'outre-mer."],
      ["22", false, "Nombre de régions métropolitaines avant la réforme de 2016."],
      ["101", false, "C'est le nombre de départements."],
    ], "Depuis le 1er janvier 2016, la France compte 13 régions métropolitaines (dont la Corse, collectivité à statut particulier) et 5 régions d'outre-mer, soit 18.", "18 régions, 101 départements.", ["Une réforme de 2015 a fusionné des régions.", "Il faut ajouter l'outre-mer à la métropole.", "13 + 5."]),
    q("B-ACT-INST-013", "elections", 2, "Le 27 septembre 2026, combien de sièges de sénateurs étaient renouvelés ?", [
      ["178 sur 348", true, "Le Sénat est renouvelé par moitié environ tous les trois ans."],
      ["348 sur 348", false, "Le Sénat n'est jamais renouvelé intégralement."],
      ["577", false, "C'est le nombre de députés."],
      ["116 sur 348", false, "Un tiers : ancien rythme de renouvellement, avant 2011."],
    ], "Les sénatoriales du 27 septembre 2026 concernaient la série 2, élue en 2020 : 178 sièges sur 348. L'autre série (170 sièges, élue en 2023) sera renouvelée en 2029.", "Le Sénat est renouvelé par moitié tous les trois ans (178 sièges en 2026).", ["Le renouvellement n'est que partiel.", "Il porte sur environ la moitié des sièges.", "Le Sénat compte 348 sièges."], { n: ["senatoriales-2026"] }),
    q("B-ACT-INST-014", "revision", 3, "Un projet de révision constitutionnelle a été voté en termes identiques par les deux assemblées. Le président décide de ne pas le soumettre au référendum. Quelle majorité faut-il au Congrès ?", [
      ["Les trois cinquièmes des suffrages exprimés", true, "Article 89 de la Constitution."],
      ["La majorité absolue des membres", false, "Seuil de la motion de censure, pas de la révision."],
      ["Les deux tiers des membres", false, "Confusion avec d'autres constitutions."],
      ["L'unanimité", false, "Aucune procédure n'exige l'unanimité."],
    ], "Selon l'article 89, après le vote des deux assemblées, la révision est approuvée par référendum ou, si le président le décide pour un projet, par le Parlement réuni en Congrès à Versailles à la majorité des trois cinquièmes des suffrages exprimés.", "Révision par le Congrès : majorité des 3/5 des suffrages exprimés (article 89).", ["La révision relève de l'article 89.", "Le Congrès réunit députés et sénateurs.", "Le seuil est une fraction supérieure à la moitié mais inférieure aux deux tiers."], { r: true }),
    q("B-ACT-INST-015", "actu-gouvernement", 1, "Qui est Premier ministre de la France en octobre 2026 ?", [
      ["Sébastien Lecornu", true, "Nommé en septembre 2025 et reconduit le 10 octobre 2025."],
      ["François Bayrou", false, "Son gouvernement a été renversé en septembre 2025."],
      ["Michel Barnier", false, "Renversé par la censure en décembre 2024."],
      ["Gabriel Attal", false, "Premier ministre en 2024."],
    ], "Sébastien Lecornu, ancien ministre des Armées, a été nommé à Matignon en septembre 2025 après la chute de François Bayrou, puis reconduit le 10 octobre 2025. Il présente le projet de budget 2027 le 1er octobre 2026.", "Sébastien Lecornu est Premier ministre (depuis septembre 2025).", ["Il a présenté le projet de budget 2027.", "Il était auparavant ministre des Armées.", "Il a succédé à François Bayrou."], { n: ["budget-2027"] }),
  ],
};
