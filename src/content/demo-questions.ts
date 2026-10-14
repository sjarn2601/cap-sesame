// Banque de démonstration : contenus originaux, signalés comme tels. Ils ne remplacent pas une banque relue.
import { GENERATORS } from "@/lib/generators";

export type DemoQuestion = {
  questionId: string;
  subjectCode: string;
  skillIds: string[];
  familyId: string;
  difficulty: number;
  format: "single" | "multiple" | "numeric";
  stem: string;
  options: { id: string; text: string; correct: boolean; justification: string }[];
  numericAnswer?: number | null;
  numericTolerance?: number | null;
  explanation: string;
  rule: string;
  hints: string[];
  timeSec: number;
  references: string[];
  lessonAnchor: string | null;
  reserved?: boolean;
  documentSet?: string;
};

type Opt = [text: string, correct: boolean, justification: string];

function q(
  questionId: string,
  subjectCode: string,
  skill: string,
  familyId: string,
  difficulty: number,
  stem: string,
  opts: Opt[],
  explanation: string,
  rule: string,
  extra: Partial<DemoQuestion> = {},
): DemoQuestion {
  const ids = ["a", "b", "c", "d", "e"];
  const correct = opts.filter((o) => o[1]).length;
  return {
    questionId,
    subjectCode,
    skillIds: [skill],
    familyId,
    difficulty,
    format: correct > 1 ? "multiple" : "single",
    stem,
    options: opts.map(([text, c, justification], i) => ({ id: ids[i], text, correct: c, justification })),
    explanation,
    rule,
    hints: [],
    timeSec: 60,
    references: [`Cours CAP SESAME : ${skill}`],
    lessonAnchor: "regle",
    ...extra,
  };
}

function generated(prefix: string, skill: string, familyId: string, gen: keyof typeof GENERATORS, count: number, difficulty: number, reservedIdx: number[] = []): DemoQuestion[] {
  const out: DemoQuestion[] = [];
  const stems = new Set<string>();
  for (let seed = 1; out.length < count && seed < 500; seed++) {
    const g = GENERATORS[gen](seed * 7919);
    if (stems.has(g.stem)) continue;
    stems.add(g.stem);
    out.push({
      questionId: `${prefix}-${String(out.length + 1).padStart(3, "0")}`,
      subjectCode: "MATH",
      skillIds: [skill],
      familyId,
      difficulty,
      format: "single",
      stem: g.stem,
      options: g.options,
      explanation: g.explanation,
      rule: g.rule,
      hints: g.hints,
      timeSec: 90,
      references: [`Générateur ${gen} (graine ${seed * 7919})`],
      lessonAnchor: "regle",
      reserved: reservedIdx.includes(out.length),
    });
  }
  return out;
}

export const DEMO_QUESTIONS: DemoQuestion[] = [
  // ---------- Mathématiques ----------
  q("MATH-CALC-001", "MATH", "math.calc", "math.calc.prio", 1, "Calculer 3 + 4 × 2².", [
    ["19", true, "2² = 4, puis 4 × 4 = 16, puis 3 + 16 = 19."],
    ["28", false, "Addition effectuée avant la multiplication : (3 + 4) × 4."],
    ["67", false, "Multiplication effectuée avant la puissance : (4 × 2)² + 3."],
    ["11", false, "Puissance oubliée : 3 + 4 × 2."],
  ], "Ordre des opérations : puissances, puis multiplications et divisions, puis additions et soustractions. 2² = 4 ; 4 × 4 = 16 ; 3 + 16 = 19.", "Puissances d'abord, puis × et ÷, puis + et −.", {
    hints: ["Quelle opération est prioritaire entre +, × et la puissance ?", "Commence par calculer 2².", "Multiplie ensuite 4 par le résultat, puis ajoute 3."],
  }),
  q("MATH-CALC-002", "MATH", "math.calc", "math.calc.prio", 1, "Calculer 20 − 12 ÷ 4 + 1.", [
    ["18", true, "12 ÷ 4 = 3, puis 20 − 3 + 1 = 18 (de gauche à droite)."],
    ["3", false, "Soustraction effectuée avant la division : (20 − 12) ÷ 4 + 1."],
    ["16", false, "La soustraction a été appliquée à tout le reste : 20 − (3 + 1)."],
    ["1,6", false, "Parenthèses imaginaires : (20 − 12) ÷ (4 + 1)."],
  ], "La division est prioritaire : 12 ÷ 4 = 3. Ensuite, additions et soustractions se font de gauche à droite : 20 − 3 = 17, puis 17 + 1 = 18.", "À priorité égale, on calcule de gauche à droite.", {
    hints: ["Repère l'opération prioritaire.", "Calcule 12 ÷ 4.", "Termine de gauche à droite : 20 − 3, puis + 1."],
  }),
  q("MATH-CALC-003", "MATH", "math.calc", "math.calc.frac", 2, "Calculer 2/3 + 1/4.", [
    ["11/12", true, "Dénominateur commun 12 : 8/12 + 3/12 = 11/12."],
    ["3/7", false, "Numérateurs et dénominateurs additionnés séparément : erreur fréquente."],
    ["3/12", false, "Numérateurs additionnés sans être convertis au dénominateur commun."],
    ["2/12", false, "Les fractions ont été multipliées au lieu d'être additionnées."],
  ], "Pour additionner des fractions, on les écrit avec un dénominateur commun : 2/3 = 8/12 et 1/4 = 3/12, donc 11/12. Contrôle : 2/3 ≈ 0,67 et 1/4 = 0,25, total ≈ 0,92 ≈ 11/12.", "On n'additionne des fractions qu'après les avoir réduites au même dénominateur.", {
    hints: ["Les deux fractions ont-elles le même dénominateur ?", "Cherche un multiple commun de 3 et 4.", "Écris 2/3 et 1/4 en douzièmes."],
    timeSec: 75,
  }),
  q("MATH-CALC-004", "MATH", "math.calc", "math.calc.frac", 2, "Combien valent les 3/5 de 40 ?", [
    ["24", true, "40 ÷ 5 × 3 = 8 × 3 = 24."],
    ["8", false, "Un cinquième seulement a été calculé."],
    ["66,67", false, "Division par 3/5 au lieu d'une multiplication."],
    ["120", false, "Multiplication par 3 sans division par 5."],
  ], "Prendre les 3/5 d'un nombre, c'est le multiplier par 3/5 : 40 × 3/5 = 24. Contrôle : 3/5 = 0,6 et 0,6 × 40 = 24.", "« Fraction de » signifie « multiplier par la fraction ».", { reserved: true }),

  ...generated("MATH-PROP", "math.prop", "math.prop.unit", "proportion", 4, 1, [3]),
  q("MATH-PROP-005", "MATH", "math.prop", "math.prop.scale", 2, "Sur une carte à l'échelle 1/25 000, quelle distance réelle représentent 4 cm ?", [
    ["1 km", true, "4 × 25 000 = 100 000 cm = 1 000 m = 1 km."],
    ["10 km", false, "Erreur de conversion : 100 000 cm = 1 km, pas 10 km."],
    ["100 m", false, "Conversion en mètres décalée d'un facteur 10."],
    ["4 km", false, "Confusion avec une échelle au 1/100 000."],
  ], "À l'échelle 1/25 000, 1 cm sur la carte représente 25 000 cm en réalité. 4 cm représentent 100 000 cm, soit 1 000 m ou 1 km.", "Distance réelle = distance sur la carte × dénominateur de l'échelle, puis conversion d'unités.", {
    hints: ["Que représente 1 cm sur la carte ?", "Multiplie 4 par 25 000.", "Convertis les centimètres en kilomètres (1 km = 100 000 cm)."],
    timeSec: 75,
  }),

  ...generated("MATH-PCT", "math.pct", "math.pct.var", "percentChange", 3, 2, [2]),
  ...generated("MATH-PCTPT", "math.pct", "math.pct.points", "percentagePoints", 2, 2),
  q("MATH-PCT-006", "MATH", "math.pct", "math.pct.succ", 3, "Un prix augmente de 20 % puis baisse de 20 %. Par rapport au prix initial, le prix final est :", [
    ["inférieur de 4 %", true, "Coefficient global : 1,2 × 0,8 = 0,96, soit une baisse de 4 %."],
    ["identique", false, "Des pourcentages successifs ne s'additionnent pas : ils se multiplient."],
    ["inférieur de 2 %", false, "Calcul approximatif sans coefficient multiplicateur."],
    ["supérieur de 4 %", false, "Sens de la variation inversé."],
  ], "Une hausse de 20 % correspond au coefficient 1,2, une baisse de 20 % au coefficient 0,8. Les coefficients se multiplient : 1,2 × 0,8 = 0,96. Le prix final vaut 96 % du prix initial. Exemple : 100 € → 120 € → 96 €.", "Des évolutions successives se combinent en multipliant leurs coefficients.", {
    hints: ["Quel coefficient correspond à +20 % ? Et à −20 % ?", "Multiplie les deux coefficients.", "Compare le résultat à 1."],
    timeSec: 90,
    lessonAnchor: "erreur",
  }),

  q("MATH-EQ-001", "MATH", "math.eq", "math.eq.lin", 1, "Résoudre l'équation 3x − 7 = 11.", [
    ["x = 6", true, "3x = 11 + 7 = 18, donc x = 18 ÷ 3 = 6. Vérification : 3 × 6 − 7 = 11."],
    ["x = 4/3", false, "7 a été soustrait au lieu d'être ajouté : 3x = 11 − 7."],
    ["x = 18", false, "Oubli de la division par 3."],
    ["x = −6", false, "Erreur de signe."],
  ], "On isole x : 3x − 7 = 11 ⇔ 3x = 18 ⇔ x = 6. Vérification : 3 × 6 − 7 = 18 − 7 = 11.", "Ce qu'on fait d'un côté de l'égalité, on le fait de l'autre ; on vérifie en remplaçant.", {
    hints: ["Quelle opération annule « − 7 » ?", "Ajoute 7 des deux côtés.", "Divise ensuite par 3."],
  }),
  q("MATH-EQ-002", "MATH", "math.eq", "math.eq.lin", 2, "Résoudre l'équation 5x + 4 = 2x + 19.", [
    ["x = 5", true, "5x − 2x = 19 − 4, donc 3x = 15 et x = 5."],
    ["x = 15/7", false, "Les termes en x ont été additionnés au lieu d'être regroupés : 7x = 15."],
    ["x = 23/3", false, "Erreur de signe en déplaçant 4 : 3x = 19 + 4."],
    ["x = 3", false, "15 a été divisé par 5 au lieu de 3."],
  ], "On regroupe les x d'un côté : 5x − 2x = 19 − 4, soit 3x = 15, donc x = 5. Vérification : 5 × 5 + 4 = 29 et 2 × 5 + 19 = 29.", "On regroupe les termes en x d'un côté et les constantes de l'autre, en changeant de signe à chaque passage.", {
    hints: ["Rassemble les termes en x du même côté.", "Soustrais 2x et 4 des deux côtés.", "Il reste 3x = 15."],
    timeSec: 75,
  }),
  q("MATH-EQ-003", "MATH", "math.eq", "math.eq.problem", 2, "Un forfait coûte 12 € par mois plus 0,05 € par SMS. La facture du mois s'élève à 15,50 €. Combien de SMS ont été envoyés ?", [
    ["70", true, "(15,50 − 12) ÷ 0,05 = 3,50 ÷ 0,05 = 70."],
    ["310", false, "Le forfait de 12 € n'a pas été retiré : 15,50 ÷ 0,05."],
    ["7", false, "Erreur de virgule : 3,50 ÷ 0,5."],
    ["550", false, "Le forfait a été ajouté au lieu d'être soustrait : (15,50 + 12) ÷ 0,05."],
  ], "On pose 12 + 0,05n = 15,50, donc 0,05n = 3,50 et n = 70. Vérification : 12 + 70 × 0,05 = 12 + 3,50 = 15,50 €.", "Traduire l'énoncé en équation, résoudre, puis vérifier dans l'énoncé.", {
    hints: ["Écris le coût total en fonction du nombre n de SMS.", "Retire la partie fixe de la facture.", "Divise ce qui reste par le prix d'un SMS."],
    timeSec: 90,
  }),
  q("MATH-EQ-004", "MATH", "math.eq", "math.eq.problem", 3, "La somme de trois nombres entiers consécutifs vaut 72. Quel est le plus grand ?", [
    ["25", true, "n + (n + 1) + (n + 2) = 72, donc 3n + 3 = 72, n = 23 ; le plus grand est 25."],
    ["24", false, "C'est le nombre du milieu (72 ÷ 3)."],
    ["23", false, "C'est le plus petit des trois."],
    ["26", false, "Erreur d'un rang dans la résolution."],
  ], "Avec n le plus petit : 3n + 3 = 72, n = 23. Les nombres sont 23, 24, 25 et leur somme vaut bien 72.", "Nommer l'inconnue avec précision avant de poser l'équation.", { reserved: true, timeSec: 90 }),

  q("MATH-PROBA-001", "MATH", "math.proba", "math.proba.simple", 1, "On lance un dé équilibré à six faces. Quelle est la probabilité d'obtenir un nombre pair strictement supérieur à 2 ?", [
    ["1/3", true, "Issues favorables : 4 et 6, soit 2 sur 6 = 1/3."],
    ["1/2", false, "Seule la condition « pair » a été prise en compte."],
    ["2/3", false, "Seule la condition « supérieur à 2 » a été prise en compte (3, 4, 5, 6)."],
    ["1/6", false, "Une seule issue favorable a été retenue."],
  ], "Dans une situation d'équiprobabilité, P = nombre d'issues favorables / nombre d'issues possibles. Ici, 4 et 6 conviennent : 2/6 = 1/3.", "Lister les issues qui vérifient toutes les conditions à la fois.", {
    hints: ["Écris la liste des six issues.", "Garde celles qui sont paires ET supérieures à 2.", "Divise par 6."],
  }),
  q("MATH-PROBA-002", "MATH", "math.proba", "math.proba.simple", 1, "Une urne contient 3 boules rouges et 5 boules bleues. On tire une boule au hasard. Quelle est la probabilité qu'elle soit rouge ?", [
    ["3/8", true, "3 boules rouges sur 8 boules au total."],
    ["3/5", false, "Rapport rouges / bleues au lieu de rouges / total."],
    ["5/8", false, "C'est la probabilité de tirer une boule bleue."],
    ["1/2", false, "Deux couleurs ne signifient pas deux issues équiprobables."],
  ], "Il y a 8 boules équiprobables, dont 3 rouges : P(rouge) = 3/8.", "Le dénominateur est le nombre total d'issues équiprobables.", {
    hints: ["Combien de boules au total ?", "Combien sont rouges ?", "Fais le rapport rouges / total."],
  }),
  q("MATH-PROBA-003", "MATH", "math.proba", "math.proba.indep", 2, "On lance deux fois une pièce équilibrée. Quelle est la probabilité d'obtenir deux fois pile ?", [
    ["1/4", true, "Issues équiprobables : PP, PF, FP, FF ; une seule favorable."],
    ["1/2", false, "Probabilité d'un seul pile, pas de deux."],
    ["1/3", false, "PF et FP ont été confondues : ce ne sont pas trois issues équiprobables."],
    ["1", false, "Une probabilité de 1 désigne un événement certain."],
  ], "Les lancers sont indépendants : P(PP) = 1/2 × 1/2 = 1/4. On le vérifie avec l'arbre : 4 issues équiprobables.", "Pour deux épreuves indépendantes, on multiplie les probabilités.", {
    hints: ["Fais un arbre à deux niveaux.", "Combien de chemins au total ?", "Combien donnent pile puis pile ?"],
  }),
  q("MATH-PROBA-004", "MATH", "math.proba", "math.proba.indep", 3, "On lance deux fois un dé équilibré. Quelle est la probabilité d'obtenir au moins un six ?", [
    ["11/36", true, "1 − P(aucun six) = 1 − (5/6)² = 1 − 25/36 = 11/36."],
    ["1/3", false, "Probabilités additionnées : 1/6 + 1/6 compte deux fois le double six."],
    ["1/36", false, "C'est la probabilité d'obtenir deux six."],
    ["25/36", false, "C'est la probabilité de n'obtenir aucun six."],
  ], "On passe par l'événement contraire « aucun six » : (5/6)² = 25/36. Donc P(au moins un six) = 11/36.", "« Au moins un » se calcule souvent par l'événement contraire.", { reserved: true, timeSec: 90 }),

  // ---------- Compétences digitales ----------
  q("DIG-INFO-001", "DIG", "dig.info", "dig.info.search", 1, "Pour trouver des pages contenant exactement l'expression « transition énergétique », la méthode la plus efficace dans un moteur de recherche usuel est de :", [
    ["mettre l'expression entre guillemets", true, "Les guillemets demandent l'expression exacte, mots dans cet ordre."],
    ["écrire l'expression en majuscules", false, "La casse est ignorée par les moteurs usuels."],
    ["ajouter un point d'interrogation à la fin", false, "La ponctuation finale ne change pas la recherche."],
    ["placer un signe moins devant l'expression", false, "Le signe moins exclut les résultats contenant le terme."],
  ], "Les opérateurs de recherche affinent une requête : guillemets pour une expression exacte, signe moins pour exclure un mot.", "Guillemets = expression exacte.", { hints: ["Quel opérateur force l'ordre exact des mots ?"] }),
  q("DIG-INFO-002", "DIG", "dig.info", "dig.info.source", 2, "Quel indice est le plus utile pour évaluer la fiabilité d'une page web qui présente des statistiques ?", [
    ["La présence de la source primaire des données et de leur date", true, "On peut remonter aux données d'origine et vérifier qu'elles sont à jour."],
    ["Le nombre de partages sur les réseaux sociaux", false, "La popularité ne garantit pas l'exactitude."],
    ["Sa position en tête des résultats du moteur de recherche", false, "Le classement dépend d'un algorithme, pas d'une vérification."],
    ["Un graphisme soigné et professionnel", false, "L'apparence ne dit rien de la qualité des données."],
  ], "Évaluer une source, c'est se demander qui produit l'information, à partir de quelles données, et quand. Une statistique sans source ni date ne peut pas être vérifiée.", "Fiabilité : auteur identifié, source primaire, date."),
  q("DIG-INFO-003", "DIG", "dig.info", "dig.info.source", 2, "Une image virale prétend montrer un événement survenu hier. Quelle démarche permet le mieux de vérifier son origine ?", [
    ["Faire une recherche d'image inversée pour retrouver ses publications antérieures", true, "Si l'image circulait avant hier, elle ne peut pas montrer l'événement annoncé."],
    ["Compter les commentaires qui la jugent authentique", false, "L'avis des commentateurs n'est pas une preuve."],
    ["Vérifier qu'elle est en haute définition", false, "La qualité d'image ne prouve ni la date ni le lieu."],
    ["Vérifier que le compte qui la publie a beaucoup d'abonnés", false, "L'audience d'un compte ne garantit pas l'origine d'un contenu."],
  ], "La recherche inversée retrouve les occurrences antérieures d'une image : c'est le moyen le plus direct de détecter une image sortie de son contexte.", "Avant de partager une image, vérifier sa date et son contexte d'origine."),
  q("DIG-INFO-004", "DIG", "dig.info", "dig.info.search", 1, "Dans la requête « jaguar -voiture », que fait le signe « - » ?", [
    ["Il exclut les résultats contenant le mot « voiture »", true, "Le signe moins retire les pages contenant le terme."],
    ["Il impose la présence du mot « voiture »", false, "C'est l'effet inverse."],
    ["Il cherche des synonymes de « voiture »", false, "Aucun opérateur standard ne fait cela."],
    ["Il est ignoré par le moteur", false, "Les moteurs usuels l'interprètent comme une exclusion."],
  ], "Le signe moins exclut un terme : utile pour lever une ambiguïté (l'animal plutôt que la marque).", "Signe moins = exclusion.", { reserved: true }),

  q("DIG-SECU-001", "DIG", "dig.secu", "dig.secu.phishing", 1, "Vous recevez un courriel de votre « banque » qui vous demande de confirmer votre mot de passe en cliquant sur un lien. Que faites-vous ?", [
    ["Je ne clique pas, je contacte ma banque par le canal habituel et je signale le message", true, "Une banque ne demande jamais un mot de passe par courriel : c'est un hameçonnage probable."],
    ["Je clique pour vérifier si le site ressemble à celui de ma banque", false, "Un faux site peut être une copie parfaite ; le clic peut aussi installer un logiciel malveillant."],
    ["Je réponds en indiquant mon mot de passe", false, "Communiquer son mot de passe donne l'accès au compte."],
    ["Je transfère le message à mes contacts pour les prévenir", false, "On diffuse ainsi le lien piégé ; il faut signaler, pas transférer."],
  ], "L'hameçonnage imite un organisme de confiance pour obtenir des identifiants. Les bons réflexes : ne pas cliquer, vérifier par un autre canal, signaler.", "Jamais de mot de passe communiqué par courriel ou par lien reçu."),
  q("DIG-SECU-002", "DIG", "dig.secu", "dig.secu.password", 1, "Quelle pratique protège le mieux vos comptes en ligne ?", [
    ["Un mot de passe long et unique par service, avec authentification à deux facteurs", true, "Une fuite sur un site ne compromet pas les autres, et le second facteur bloque l'usage d'un mot de passe volé."],
    ["Un mot de passe très complexe utilisé partout", false, "Une seule fuite compromet tous les comptes."],
    ["Changer de mot de passe chaque semaine en ajoutant un chiffre", false, "Les variations prévisibles se devinent facilement."],
    ["Noter ses mots de passe dans un document partagé", false, "Toute personne ayant accès au document accède aux comptes."],
  ], "Longueur, unicité et second facteur sont les trois protections les plus efficaces. Un gestionnaire de mots de passe aide à les appliquer.", "Un mot de passe par service ; second facteur activé."),
  q("DIG-SECU-003", "DIG", "dig.secu", "dig.secu.wifi", 2, "Sur un réseau Wi-Fi public ouvert, quel est le principal risque ?", [
    ["Des tiers peuvent intercepter les échanges non chiffrés", true, "Sur un réseau ouvert, le trafic non chiffré peut être lu par d'autres appareils."],
    ["La batterie s'use plus vite", false, "Ce n'est pas un risque de sécurité."],
    ["Le téléphone ne peut plus recevoir d'appels", false, "Le Wi-Fi n'empêche pas la réception d'appels."],
    ["Les sites en HTTPS deviennent inaccessibles", false, "HTTPS fonctionne sur tous les réseaux et chiffre justement les échanges."],
  ], "Un réseau ouvert n'est pas chiffré. On privilégie les sites en HTTPS et on évite les opérations sensibles.", "Réseau public : pas d'opération sensible sans chiffrement."),
  q("DIG-SECU-004", "DIG", "dig.secu", "dig.secu.password", 2, "Que signifie l'authentification à deux facteurs ?", [
    ["Combiner deux éléments de nature différente, par exemple un mot de passe et un code reçu sur un appareil", true, "Un attaquant doit alors disposer des deux éléments."],
    ["Utiliser deux mots de passe à la suite", false, "Deux éléments de même nature restent un seul facteur."],
    ["Se connecter depuis deux appareils", false, "Ce n'est pas une méthode d'authentification."],
    ["Choisir un mot de passe composé de deux mots", false, "Cela reste un seul facteur."],
  ], "Les facteurs sont de nature différente : ce que l'on sait (mot de passe), ce que l'on possède (téléphone, clé), ce que l'on est (biométrie).", "Deux facteurs = deux natures différentes.", { reserved: true }),

  q("DIG-DATA-001", "DIG", "dig.data", "dig.data.formula", 1, "Dans un tableur, A1 contient 12 et A2 contient 8. Quelle formule affiche la moyenne de ces deux cellules ?", [
    ["=MOYENNE(A1:A2)", true, "La fonction calcule (12 + 8) ÷ 2 = 10."],
    ["=A1+A2/2", false, "Priorité de la division : 12 + 4 = 16."],
    ["=SOMME(A1;A2)", false, "Affiche la somme, 20."],
    ["=A1:A2/2", false, "Écriture invalide pour une moyenne."],
  ], "La moyenne s'obtient avec MOYENNE ou avec =(A1+A2)/2 : les parenthèses sont indispensables.", "Dans une formule, les priorités opératoires s'appliquent comme en mathématiques."),
  q("DIG-DATA-002", "DIG", "dig.data", "dig.data.formula", 2, "En D2, la formule est =B2*$C$1. On la recopie vers le bas en D3. Que devient-elle ?", [
    ["=B3*$C$1", true, "B2 est une référence relative (devient B3) ; $C$1 est absolue (reste fixe)."],
    ["=B2*$C$1", false, "La référence relative B2 est décalée lors de la recopie."],
    ["=B3*$C$2", false, "Les $ empêchent le décalage de C1."],
    ["=B3*C2", false, "Les $ ne disparaissent pas à la recopie."],
  ], "Une référence relative se décale lors d'une recopie ; le symbole $ fige la colonne et/ou la ligne.", "$ devant la colonne et la ligne = référence absolue."),
  q("DIG-DATA-003", "DIG", "dig.data", "dig.data.format", 1, "Quel format de fichier convient le mieux pour échanger un tableau de données brutes entre logiciels différents ?", [
    ["CSV", true, "Texte simple, valeurs séparées par un délimiteur, lisible par presque tous les logiciels."],
    ["PDF", false, "Format de mise en page : les données ne sont pas directement exploitables."],
    ["JPEG", false, "Format d'image : les valeurs ne sont plus des données."],
    ["MP4", false, "Format vidéo."],
  ], "Le CSV est un format ouvert et universel pour les données tabulaires.", "Données brutes à échanger : format ouvert et textuel (CSV)."),

  q("DIG-ALGO-001", "DIG", "dig.algo", "dig.algo.loop", 1, "x ← 1\nRépéter 4 fois :\n    x ← x × 2\nAfficher x\n\nQu'affiche ce programme ?", [
    ["16", true, "x vaut successivement 2, 4, 8, 16."],
    ["8", false, "Seulement trois passages dans la boucle ont été comptés."],
    ["32", false, "Un passage de trop dans la boucle."],
    ["9", false, "Additions au lieu de multiplications : 1 + 2 × 4."],
  ], "On suit la variable pas à pas : 1 → 2 → 4 → 8 → 16 après quatre passages.", "Pour lire un algorithme, on suit l'état des variables à chaque étape."),
  q("DIG-ALGO-002", "DIG", "dig.algo", "dig.algo.cond", 2, "a ← 7\nSi a > 5 alors a ← a − 5 sinon a ← a + 5\nSi a > 5 alors a ← a × 10\nAfficher a\n\nQu'affiche ce programme ?", [
    ["2", true, "7 > 5 donc a = 2 ; puis 2 > 5 est faux, a reste 2."],
    ["20", false, "Le second test a été appliqué à tort : 2 n'est pas supérieur à 5."],
    ["12", false, "La branche « sinon » a été exécutée alors que la condition était vraie."],
    ["120", false, "Branche « sinon » puis multiplication : double erreur."],
  ], "Chaque condition est évaluée avec la valeur courante de a : après la première instruction, a vaut 2.", "Une condition se teste avec la valeur de la variable au moment du test."),
  q("DIG-ALGO-003", "DIG", "dig.algo", "dig.algo.loop", 1, "s ← 0\nPour i allant de 1 à 4 :\n    s ← s + i\nAfficher s\n\nQu'affiche ce programme ?", [
    ["10", true, "s = 1 + 2 + 3 + 4 = 10."],
    ["6", false, "La boucle a été arrêtée à 3."],
    ["4", false, "C'est la dernière valeur de i, pas la somme."],
    ["15", false, "La boucle a été prolongée jusqu'à 5."],
  ], "La boucle « pour » parcourt i = 1, 2, 3, 4 et ajoute chaque valeur à s.", "Bornes incluses : de 1 à 4 = quatre passages."),

  // ---------- Enjeux contemporains ----------
  q("ACT-INST-001", "ACT", "act.inst", "act.inst.fr", 1, "Sous la Ve République, quelle est aujourd'hui la durée du mandat du président de la République ?", [
    ["5 ans", true, "Quinquennat adopté par référendum en 2000, appliqué depuis 2002."],
    ["7 ans", false, "C'était la durée du septennat avant 2002."],
    ["4 ans", false, "Durée du mandat présidentiel aux États-Unis, pas en France."],
    ["6 ans", false, "Durée du mandat des sénateurs et des maires."],
  ], "Le quinquennat a été adopté par référendum le 24 septembre 2000. Le mandat est renouvelable une fois consécutivement depuis la révision de 2008.", "Président : 5 ans ; sénateurs : 6 ans ; députés : 5 ans.", { references: ["Constitution du 4 octobre 1958, article 6"] }),
  q("ACT-INST-002", "ACT", "act.inst", "act.inst.eu", 1, "Quelle institution de l'Union européenne est élue au suffrage universel direct ?", [
    ["Le Parlement européen", true, "Ses membres sont élus tous les cinq ans par les citoyens de l'Union."],
    ["La Commission européenne", false, "Ses membres sont proposés par les États et approuvés par le Parlement."],
    ["Le Conseil européen", false, "Il réunit les chefs d'État ou de gouvernement."],
    ["La Cour de justice de l'Union européenne", false, "Ses juges sont nommés d'un commun accord par les États."],
  ], "Le Parlement européen est la seule institution de l'Union élue directement, depuis 1979.", "Parlement européen = élu au suffrage universel direct depuis 1979.", { references: ["Traité sur l'Union européenne, article 14"] }),
  q("ACT-INST-003", "ACT", "act.inst", "act.inst.fr", 2, "Quelle assemblée parlementaire française est élue au suffrage universel indirect ?", [
    ["Le Sénat", true, "Les sénateurs sont élus par de grands électeurs (élus locaux notamment)."],
    ["L'Assemblée nationale", false, "Les députés sont élus au suffrage universel direct."],
    ["Le Conseil constitutionnel", false, "Ses membres sont nommés, ce n'est pas une assemblée parlementaire."],
    ["Le Conseil économique, social et environnemental", false, "Ses membres sont désignés ; ce n'est pas une assemblée parlementaire."],
  ], "Le Parlement français comprend l'Assemblée nationale (suffrage direct) et le Sénat (suffrage indirect).", "Sénat : suffrage indirect ; Assemblée nationale : suffrage direct.", { references: ["Constitution du 4 octobre 1958, article 24"] }),
  q("ACT-INST-004", "ACT", "act.inst", "act.inst.eu", 1, "Combien d'États membres compte l'Union européenne depuis la sortie du Royaume-Uni le 31 janvier 2020 ?", [
    ["27", true, "28 États moins le Royaume-Uni."],
    ["28", false, "C'était le nombre avant le retrait du Royaume-Uni."],
    ["25", false, "C'était le nombre en 2004."],
    ["30", false, "Aucun élargissement n'a porté l'Union à 30 membres."],
  ], "Le Royaume-Uni a quitté l'Union le 31 janvier 2020. Valeur à revérifier avant chaque session en cas d'élargissement.", "UE : 27 États membres depuis 2020.", { reserved: true, references: ["Accord de retrait UE–Royaume-Uni, 2020", "news:brexit"] }),

  q("ACT-ECO-001", "ACT", "act.eco", "act.eco.inflation", 1, "Que mesure l'inflation ?", [
    ["La hausse générale et durable du niveau des prix", true, "Définition standard, mesurée en France par l'Insee."],
    ["La hausse de la production du pays", false, "C'est la croissance économique."],
    ["La hausse des salaires", false, "Les salaires peuvent évoluer autrement que les prix."],
    ["La baisse du chômage", false, "Indicateur du marché du travail, pas des prix."],
  ], "L'inflation désigne une hausse générale et durable des prix ; elle réduit le pouvoir d'achat de la monnaie.", "Inflation = hausse générale et durable des prix.", { references: ["Insee, définition de l'inflation"] }),
  q("ACT-ECO-002", "ACT", "act.eco", "act.eco.pib", 1, "Le produit intérieur brut (PIB) mesure principalement :", [
    ["la valeur des biens et services produits sur un territoire pendant une période", true, "Somme des valeurs ajoutées, en général sur un an."],
    ["le patrimoine total des ménages", false, "Le PIB est un flux, pas un stock de richesse."],
    ["les recettes fiscales de l'État", false, "Elles relèvent des finances publiques."],
    ["la différence entre exportations et importations", false, "C'est le solde commercial."],
  ], "Le PIB mesure la production d'un territoire sur une période ; sa variation en volume définit la croissance.", "PIB = flux de production sur un territoire et une période.", { references: ["Insee, définition du PIB"] }),
  q("ACT-ECO-003", "ACT", "act.eco", "act.eco.bce", 2, "Quel est l'objectif principal de la Banque centrale européenne ?", [
    ["Maintenir la stabilité des prix dans la zone euro", true, "Mandat fixé par les traités."],
    ["Garantir le plein emploi en France", false, "La BCE agit pour toute la zone euro et son objectif principal est la stabilité des prix."],
    ["Fixer le niveau des impôts", false, "La fiscalité relève des États."],
    ["Financer directement les déficits des États", false, "Le financement monétaire direct des États est interdit par les traités."],
  ], "La BCE conduit la politique monétaire de la zone euro avec pour objectif principal la stabilité des prix (inflation proche de 2 % à moyen terme).", "BCE : stabilité des prix dans la zone euro.", { references: ["Traité sur le fonctionnement de l'UE, article 127"] }),
  q("ACT-ECO-004", "ACT", "act.eco", "act.eco.inflation", 2, "Sur un an, les prix augmentent de 3 % et votre salaire de 2 %. Votre pouvoir d'achat :", [
    ["baisse d'environ 1 %", true, "1,02 ÷ 1,03 ≈ 0,99 : baisse d'environ 1 %."],
    ["augmente de 2 %", false, "La hausse des prix n'est pas prise en compte."],
    ["reste stable", false, "Les deux hausses ne se compensent pas."],
    ["augmente de 5 %", false, "Les taux ont été additionnés."],
  ], "Le pouvoir d'achat compare l'évolution du revenu à celle des prix : 1,02 / 1,03 ≈ 0,990, soit environ −1 %.", "Pouvoir d'achat : revenu rapporté au niveau des prix.", { reserved: true }),

  q("ACT-ENV-001", "ACT", "act.env", "act.env.accords", 1, "Quel accord international adopté en 2015 vise à contenir le réchauffement nettement en dessous de 2 °C par rapport à l'ère préindustrielle ?", [
    ["L'accord de Paris", true, "Adopté lors de la COP21 en décembre 2015."],
    ["Le protocole de Kyoto", false, "Adopté en 1997, il fixait des réductions d'émissions à certains pays."],
    ["Le protocole de Montréal", false, "Adopté en 1987, il porte sur la couche d'ozone."],
    ["La convention de Ramsar", false, "Adoptée en 1971, elle protège les zones humides."],
  ], "L'accord de Paris (COP21, 12 décembre 2015) fixe l'objectif de limiter le réchauffement nettement en dessous de 2 °C et de poursuivre les efforts pour 1,5 °C.", "Accord de Paris : 2015, COP21, objectif < 2 °C.", { references: ["CCNUCC, accord de Paris (2015)", "news:accord-paris"] }),
  q("ACT-ENV-002", "ACT", "act.env", "act.env.ges", 1, "Quel gaz est le principal contributeur d'origine humaine au renforcement de l'effet de serre ?", [
    ["Le dioxyde de carbone (CO₂)", true, "Émis surtout par la combustion d'énergies fossiles."],
    ["Le dioxygène (O₂)", false, "Ce n'est pas un gaz à effet de serre."],
    ["Le diazote (N₂)", false, "Ce n'est pas un gaz à effet de serre."],
    ["L'argon (Ar)", false, "Gaz rare sans effet de serre notable."],
  ], "Le CO₂ est le principal gaz à effet de serre d'origine humaine, devant le méthane et le protoxyde d'azote.", "CO₂ : premier gaz à effet de serre d'origine humaine.", { references: ["GIEC, sixième rapport d'évaluation"] }),
  q("ACT-ENV-003", "ACT", "act.env", "act.env.giec", 2, "Quel est le rôle principal du GIEC ?", [
    ["Évaluer et synthétiser l'état des connaissances scientifiques sur le changement climatique", true, "Ses rapports s'appuient sur la littérature scientifique publiée."],
    ["Voter des lois sur le climat", false, "Le GIEC n'a aucun pouvoir législatif."],
    ["Sanctionner les États qui polluent", false, "Il n'a aucun pouvoir de sanction."],
    ["Gérer les parcs naturels mondiaux", false, "Ce n'est pas sa mission."],
  ], "Le GIEC, créé en 1988, évalue les connaissances scientifiques sur le climat pour éclairer les décideurs, sans prescrire de politique.", "GIEC : expertise scientifique, pas décision politique.", { references: ["GIEC, présentation de l'organisation"] }),
  q("ACT-ENV-004", "ACT", "act.env", "act.env.accords", 2, "Le protocole de Montréal (1987) visait principalement à :", [
    ["protéger la couche d'ozone en réduisant les substances qui l'appauvrissent", true, "Il organise l'élimination des CFC notamment."],
    ["réduire les émissions de CO₂", false, "C'est l'objet de Kyoto et de l'accord de Paris."],
    ["protéger les océans contre la surpêche", false, "Ce n'est pas son objet."],
    ["interdire l'énergie nucléaire", false, "Ce n'est pas son objet."],
  ], "Le protocole de Montréal encadre l'élimination des substances appauvrissant la couche d'ozone, comme les CFC.", "Montréal : couche d'ozone ; Kyoto et Paris : climat.", { reserved: true, references: ["Protocole de Montréal (1987)"] }),

  // ---------- Français ----------
  q("FR-ACC-001", "FR", "fr.accord", "fr.acc.pp", 2, "Choisissez la phrase correctement orthographiée.", [
    ["Les lettres que j'ai écrites sont arrivées.", true, "COD « que » (= les lettres) placé avant avoir : accord ; « arrivées » s'accorde avec le sujet (auxiliaire être)."],
    ["Les lettres que j'ai écrit sont arrivées.", false, "Le COD est placé avant l'auxiliaire avoir : le participe s'accorde."],
    ["Les lettres que j'ai écrits sont arrivés.", false, "« Lettres » est féminin pluriel."],
    ["Les lettres que j'ai écrites sont arrivés.", false, "Avec être, le participe s'accorde avec le sujet féminin pluriel."],
  ], "Avec avoir, le participe passé s'accorde avec le COD placé avant ; avec être, il s'accorde avec le sujet.", "Avoir : accord avec le COD placé avant ; être : accord avec le sujet.", {
    hints: ["Quel est l'auxiliaire de chaque verbe ?", "Que remplace « que » ?", "Le COD est-il placé avant le verbe ?"],
  }),
  q("FR-ACC-002", "FR", "fr.accord", "fr.acc.pp", 3, "Complétez : « Elles se sont ___ des cadeaux. »", [
    ["offert", true, "Le COD « des cadeaux » est placé après le verbe : pas d'accord."],
    ["offertes", false, "« Se » est ici complément indirect (offrir à soi) : pas d'accord avec lui."],
    ["offerts", false, "Le COD est placé après : aucun accord."],
    ["offerte", false, "Aucun élément ne justifie un féminin singulier."],
  ], "Pour un verbe pronominal, on cherche le COD : « elles ont offert quoi ? des cadeaux », placé après. Le participe reste invariable.", "Verbe pronominal : accord avec le COD seulement s'il est placé avant.", { lessonAnchor: "erreur" }),
  q("FR-ACC-003", "FR", "fr.accord", "fr.acc.adj", 2, "Choisissez la forme correcte : « des chaussures ___ ».", [
    ["bleu foncé", true, "Un adjectif de couleur composé reste invariable."],
    ["bleues foncées", false, "Les adjectifs de couleur composés ne s'accordent pas."],
    ["bleus foncés", false, "Accord au masculin incorrect, et adjectif composé invariable."],
    ["bleues foncé", false, "Accord partiel incohérent."],
  ], "Quand la couleur est précisée par un autre mot (bleu foncé, vert clair), l'ensemble reste invariable.", "Couleur composée = invariable."),
  q("FR-ACC-004", "FR", "fr.accord", "fr.acc.pp", 3, "Complétez : « Ils se sont ___ les mains. »", [
    ["lavé", true, "Le COD « les mains » est placé après : participe invariable."],
    ["lavés", false, "« Se » est complément indirect (laver les mains à soi)."],
    ["lavée", false, "Aucun accord au féminin singulier possible."],
    ["lavées", false, "Le COD « les mains » est placé après le verbe."],
  ], "On cherche le COD : « ils ont lavé quoi ? les mains », placé après le verbe : pas d'accord.", "Verbe pronominal suivi de son COD : participe invariable.", { reserved: true }),

  q("FR-CONJ-001", "FR", "fr.conj", "fr.conj.subj", 1, "Complétez : « Il faut que tu ___ à l'heure. »", [
    ["sois", true, "« Il faut que » impose le subjonctif : que tu sois."],
    ["es", false, "Indicatif présent : incorrect après « il faut que »."],
    ["seras", false, "Futur de l'indicatif : incorrect ici."],
    ["serais", false, "Conditionnel : incorrect ici."],
  ], "Les expressions d'obligation, de volonté ou de sentiment entraînent le subjonctif.", "« Il faut que » + subjonctif."),
  q("FR-CONJ-002", "FR", "fr.conj", "fr.conj.subj", 2, "Complétez : « Bien qu'il ___ tard, nous continuerons. »", [
    ["soit", true, "« Bien que » est suivi du subjonctif."],
    ["est", false, "L'indicatif est fautif après « bien que »."],
    ["sera", false, "Futur de l'indicatif : fautif après « bien que »."],
    ["était", false, "Imparfait de l'indicatif : fautif après « bien que »."],
  ], "Les conjonctions de concession « bien que » et « quoique » se construisent avec le subjonctif.", "« Bien que » + subjonctif.", { lessonAnchor: "erreur" }),
  q("FR-CONJ-003", "FR", "fr.conj", "fr.conj.cond", 1, "Complétez : « Si j'avais le temps, je ___ davantage. »", [
    ["lirais", true, "Si + imparfait, puis conditionnel présent."],
    ["lirai", false, "Futur : correspond à « si j'ai le temps »."],
    ["lisais", false, "Imparfait dans la principale : incorrect."],
    ["lise", false, "Subjonctif : incorrect ici."],
  ], "Hypothèse sur le présent : si + imparfait, principale au conditionnel présent. Attention : « je lirai » (futur) et « je lirais » (conditionnel) se prononcent presque pareil.", "Si + imparfait → conditionnel présent."),
  q("FR-CONJ-004", "FR", "fr.conj", "fr.conj.cond", 2, "Complétez : « Si tu me l'avais demandé, je t'___ aidé. »", [
    ["aurais", true, "Si + plus-que-parfait, puis conditionnel passé."],
    ["aurai", false, "Futur antérieur : incorrect après une hypothèse passée."],
    ["avais", false, "Plus-que-parfait dans la principale : incorrect."],
    ["aies", false, "Subjonctif : incorrect ici."],
  ], "Hypothèse sur le passé : si + plus-que-parfait, principale au conditionnel passé.", "Si + plus-que-parfait → conditionnel passé.", { reserved: true }),

  q("FR-VOC-001", "FR", "fr.vocab", "fr.voc.paronym", 2, "Complétez : « Le danger est ___ : il faut évacuer. »", [
    ["imminent", true, "Imminent : qui va se produire très prochainement."],
    ["éminent", false, "Éminent : remarquable, supérieur (un éminent chercheur)."],
    ["émanant", false, "Émanant : qui provient de quelque chose."],
    ["immanent", false, "Immanent : terme philosophique, qui est contenu dans un être."],
  ], "« Imminent » et « éminent » sont des paronymes : sons proches, sens différents.", "Imminent = sur le point d'arriver ; éminent = remarquable."),
  q("FR-VOC-002", "FR", "fr.vocab", "fr.voc.paronym", 2, "Complétez : « Le tribunal lui a ___ une amende. »", [
    ["infligé", true, "Infliger : imposer une peine."],
    ["affligé", false, "Affliger : causer du chagrin."],
    ["inféré", false, "Inférer : tirer une conséquence."],
    ["affecté", false, "Affecter : attribuer ou émouvoir, pas imposer une peine."],
  ], "On inflige une sanction ; une nouvelle triste afflige quelqu'un.", "Infliger une peine ; affliger quelqu'un."),
  q("FR-VOC-003", "FR", "fr.vocab", "fr.voc.sens", 1, "Que signifie l'adjectif « pérenne » ?", [
    ["Durable, qui dure longtemps", true, "Du latin perennis, qui dure toute l'année."],
    ["Éphémère", false, "C'est l'antonyme."],
    ["Annuel", false, "Contresens à partir de l'étymologie."],
    ["Dangereux", false, "Sans rapport."],
  ], "« Pérenne » qualifie ce qui dure : une solution pérenne, un financement pérenne.", "Pérenne = durable."),
  q("FR-VOC-004", "FR", "fr.vocab", "fr.voc.sens", 2, "Quel est le sens de l'adjectif « exhaustif » ?", [
    ["Complet, qui traite tous les éléments", true, "Une liste exhaustive n'oublie rien."],
    ["Épuisé, fatigué", false, "Confusion avec l'anglais « exhausted »."],
    ["Rapide", false, "Sans rapport."],
    ["Résumé", false, "C'est presque l'inverse."],
  ], "Exhaustif : qui épuise le sujet, complet.", "Exhaustif = complet.", { reserved: true }),

  q("FR-HOM-001", "FR", "fr.ortho", "fr.hom.quant", 1, "Complétez : « ___ à moi, je reste ici. »", [
    ["Quant", true, "« Quant à » signifie « en ce qui concerne »."],
    ["Quand", false, "« Quand » exprime le temps."],
    ["Qu'en", false, "« Qu'en » = que + en (qu'en penses-tu ?)."],
    ["Camp", false, "Nom commun sans rapport."],
  ], "« Quant à » introduit un thème ; « quand » indique le moment ; « qu'en » associe que et en.", "Quant à = en ce qui concerne."),
  q("FR-HOM-002", "FR", "fr.ortho", "fr.hom.sest", 1, "Complétez : « Il ___ trompé de route. »", [
    ["s'est", true, "Verbe pronominal se tromper au passé composé : il s'est trompé."],
    ["c'est", false, "« C'est » = cela est."],
    ["sait", false, "Verbe savoir : « il sait »."],
    ["ses", false, "Déterminant possessif."],
  ], "On peut remplacer par « je me suis trompé » : c'est donc le pronom « se » + être.", "S'est = se + est (verbe pronominal)."),
  q("FR-HOM-003", "FR", "fr.ortho", "fr.hom.a", 1, "Complétez : « Il ___ fini son travail ___ temps. »", [
    ["a / à", true, "« a » = verbe avoir (on peut dire « avait ») ; « à temps » = préposition."],
    ["à / a", false, "Inversion : le premier est un verbe, le second une préposition."],
    ["as / à", false, "« as » s'emploie avec « tu »."],
    ["a / a", false, "On ne peut pas dire « avait temps »."],
  ], "Astuce : si l'on peut remplacer par « avait », on écrit « a » sans accent.", "a = avait ; à = préposition."),

  // ---------- Anglais ----------
  q("EN-TEN-001", "EN", "en.tenses", "en.ten.pp", 1, "Choose the correct form: « I ___ in Paris since 2020. »", [
    ["have lived", true, "Present perfect with « since » : action commencée dans le passé et toujours vraie."],
    ["live", false, "Le présent simple ne s'emploie pas avec « since » pour une durée."],
    ["lived", false, "Le prétérit indique une action terminée, incompatible avec « since 2020 » ici."],
    ["am living", false, "Le présent progressif ne s'emploie pas avec « since »."],
  ], "« Since » + point de départ appelle le present perfect (ou present perfect continuous) : I have lived / have been living.", "Since / for + durée jusqu'à maintenant → present perfect.", { lessonAnchor: "erreur" }),
  q("EN-TEN-002", "EN", "en.tenses", "en.ten.past", 2, "Choose the correct form: « Yesterday, while I ___ dinner, the phone rang. »", [
    ["was cooking", true, "Past continuous pour l'action en cours, interrompue par une action ponctuelle au prétérit."],
    ["have cooked", false, "Present perfect incompatible avec « yesterday »."],
    ["am cooking", false, "Présent : incohérent avec un récit au passé."],
    ["had been cook", false, "Forme incorrecte."],
  ], "Action longue en cours (past continuous) interrompue par une action brève (prétérit).", "While + past continuous ; action qui interrompt au prétérit."),
  q("EN-TEN-003", "EN", "en.tenses", "en.ten.pp", 2, "Choose the correct form: « She ___ her keys, so she can't open the door. »", [
    ["has lost", true, "Present perfect : action passée avec une conséquence présente."],
    ["is losing", false, "Le progressif ne convient pas à une action ponctuelle achevée."],
    ["loses", false, "Le présent simple exprime une habitude."],
    ["has losing", false, "Forme incorrecte."],
  ], "Le present perfect relie un fait passé à une conséquence actuelle.", "Fait passé + conséquence présente → present perfect."),
  q("EN-TEN-004", "EN", "en.tenses", "en.ten.future", 3, "Choose the correct form: « By the time you arrive, we ___ the report. »", [
    ["will have finished", true, "Future perfect : action achevée avant un moment futur."],
    ["finished", false, "Prétérit : incohérent avec un repère futur."],
    ["had finished", false, "Past perfect : repère passé, pas futur."],
    ["finishing", false, "Forme verbale incomplète."],
  ], "« By the time » + présent, puis future perfect pour ce qui sera terminé avant.", "By the time + présent → will have + participe passé.", { reserved: true }),

  q("EN-PREP-001", "EN", "en.prep", "en.prep.time", 1, "Choose the correct prepositions: « The meeting is ___ Monday ___ 9 a.m. »", [
    ["on / at", true, "« on » devant un jour, « at » devant une heure."],
    ["in / at", false, "« in » s'emploie pour les mois, années, parties de la journée."],
    ["at / on", false, "Ordre inversé."],
    ["on / in", false, "« in » ne s'emploie pas devant une heure précise."],
  ], "Prépositions de temps : at + heure, on + jour/date, in + mois/année/saison.", "at 9 a.m. ; on Monday ; in May."),
  q("EN-PREP-002", "EN", "en.prep", "en.prep.verb", 2, "Choose the correct preposition: « It depends ___ the weather. »", [
    ["on", true, "Le verbe « depend » se construit avec « on »."],
    ["of", false, "Calque du français « dépendre de »."],
    ["from", false, "Préposition incorrecte avec depend."],
    ["to", false, "Préposition incorrecte avec depend."],
  ], "Certains verbes ont une préposition fixe : depend on, rely on, listen to.", "Depend on (et non « depend of »).", { lessonAnchor: "erreur" }),
  q("EN-PREP-003", "EN", "en.prep", "en.prep.time", 1, "Choose the correct preposition: « I was born ___ 2008. »", [
    ["in", true, "« in » devant une année."],
    ["on", false, "« on » devant un jour ou une date précise."],
    ["at", false, "« at » devant une heure."],
    ["since", false, "« since » indique un point de départ d'une durée."],
  ], "Année → in ; date complète → on (on 5 May 2008).", "in + année."),

  q("EN-VOC-001", "EN", "en.vocab", "en.voc.false", 1, "« Actually » signifie :", [
    ["en fait, en réalité", true, "Faux-ami classique."],
    ["actuellement", false, "« Actuellement » se dit « currently » ou « at the moment »."],
    ["activement", false, "« Activement » se dit « actively »."],
    ["à l'acte", false, "Sans rapport."],
  ], "« Actually, I disagree » : en fait, je ne suis pas d'accord.", "Actually = en fait ; currently = actuellement."),
  q("EN-VOC-002", "EN", "en.vocab", "en.voc.false", 1, "Dans « She will attend the conference », « attend » signifie :", [
    ["assister à", true, "Attend a meeting = assister à une réunion."],
    ["attendre", false, "« Attendre » se dit « wait for »."],
    ["entendre", false, "« Entendre » se dit « hear »."],
    ["tenter", false, "« Tenter » se dit « try »."],
  ], "« Attend » est un faux-ami : il signifie assister à, fréquenter.", "Attend = assister ; wait for = attendre."),
  q("EN-VOC-003", "EN", "en.vocab", "en.voc.false", 2, "Dans « The company expects an eventual agreement », « eventual » signifie :", [
    ["final, qui finira par arriver", true, "Eventual = qui se produira finalement."],
    ["éventuel, possible", false, "« Éventuel » se dit « possible » ou « potential »."],
    ["événementiel", false, "Sans rapport."],
    ["immédiat", false, "C'est presque le contraire."],
  ], "« Eventually » = finalement ; « éventuellement » = possibly.", "Eventual = final ; éventuel = possible."),
  q("EN-VOC-004", "EN", "en.vocab", "en.voc.false", 2, "« A sensible decision » est :", [
    ["une décision raisonnable", true, "Sensible = raisonnable, sensé."],
    ["une décision délicate", false, "« Sensible » au sens français se dit « sensitive »."],
    ["une décision émotive", false, "Sans rapport."],
    ["une décision visible", false, "Sans rapport."],
  ], "Sensible = sensé ; sensitive = sensible (émotif, délicat).", "Sensible = raisonnable.", { reserved: true }),

  // ---------- Espagnol ----------
  q("ES-SER-001", "LV-ES", "es.serestar", "es.ser.etat", 1, "Completa : « La sopa ___ fría. » (état passager)", [
    ["está", true, "Estar exprime un état passager."],
    ["es", false, "Ser exprimerait une caractéristique essentielle."],
    ["son", false, "Pluriel : le sujet est singulier."],
    ["están", false, "Pluriel : le sujet est singulier."],
  ], "Ser : identité, caractéristique durable ; estar : état, localisation.", "État passager → estar."),
  q("ES-SER-002", "LV-ES", "es.serestar", "es.ser.ident", 1, "Completa : « Mi hermano ___ médico. »", [
    ["es", true, "La profession relève de l'identité : ser."],
    ["está", false, "Estar ne s'emploie pas pour une profession."],
    ["estás", false, "Deuxième personne : incorrect."],
    ["eres", false, "Deuxième personne : incorrect."],
  ], "Profession, nationalité, identité → ser.", "Profession → ser."),
  q("ES-SER-003", "LV-ES", "es.serestar", "es.ser.lieu", 2, "Completa : « Madrid ___ en el centro de España. »", [
    ["está", true, "La localisation d'un lieu s'exprime avec estar."],
    ["es", false, "Ser ne sert pas à situer un lieu."],
    ["son", false, "Pluriel : incorrect."],
    ["estás", false, "Deuxième personne : incorrect."],
  ], "Localisation → estar (sauf pour un événement : la fiesta es en mi casa).", "Localisation d'un lieu → estar.", { lessonAnchor: "erreur" }),
  q("ES-SER-004", "LV-ES", "es.serestar", "es.ser.ident", 1, "Completa : « Nosotros ___ franceses. »", [
    ["somos", true, "Nationalité → ser, première personne du pluriel."],
    ["estamos", false, "Estar ne s'emploie pas pour la nationalité."],
    ["son", false, "Troisième personne du pluriel."],
    ["sois", false, "Deuxième personne du pluriel."],
  ], "Nationalité → ser : somos franceses.", "Nationalité → ser.", { reserved: true }),

  q("ES-VOC-001", "LV-ES", "es.vocab", "es.voc.false", 1, "« Embarazada » signifie :", [
    ["enceinte", true, "Faux-ami célèbre."],
    ["embarrassée", false, "« Embarrassée » se dit « avergonzada »."],
    ["emballée", false, "Sans rapport."],
    ["embarquée", false, "« Embarquer » se dit « embarcar »."],
  ], "Estoy embarazada = je suis enceinte.", "Embarazada = enceinte."),
  q("ES-VOC-002", "LV-ES", "es.vocab", "es.voc.false", 1, "« Constipado » signifie le plus souvent :", [
    ["enrhumé", true, "Estar constipado = être enrhumé."],
    ["constipé", false, "« Constipé » se dit « estreñido »."],
    ["constitué", false, "Sans rapport."],
    ["contrarié", false, "Sans rapport."],
  ], "Faux-ami fréquent à l'oral : constipado = enrhumé.", "Constipado = enrhumé."),
  q("ES-VOC-003", "LV-ES", "es.vocab", "es.voc.false", 1, "« Éxito » signifie :", [
    ["succès", true, "Tener éxito = avoir du succès."],
    ["sortie", false, "« Sortie » se dit « salida »."],
    ["excitation", false, "Sans rapport."],
    ["exil", false, "« Exil » se dit « exilio »."],
  ], "Éxito = succès ; salida = sortie.", "Éxito = succès."),

  // ---------- Analyse documentaire (dossier DS-JEUNES-INFO) ----------
  q("DOC-JI-001", "DOC", "doc.reperage", "doc.ji.reperage", 1, "Selon le document 2, quelles affirmations sont exactes ? (plusieurs réponses possibles)", [
    ["Les réseaux sociaux sont la principale source déclarée en 2025.", true, "Document 2 : 61 % en 2025, première ligne du tableau."],
    ["La part de la télévision a baissé de 9 points entre 2022 et 2025.", true, "Document 2 : 27 % puis 18 %, soit −9 points."],
    ["Les sites de presse ont progressé entre 2022 et 2025.", false, "Document 2 : 15 % puis 14 %, légère baisse (donnée mal lue)."],
    ["La radio reste devant les sites de presse en 2025.", false, "Document 2 : 4 % pour la radio contre 14 % pour les sites de presse."],
  ], "Toutes les réponses se lisent dans le tableau du document 2. Barème : toutes les bonnes réponses = 1 point ; au moins la moitié sans erreur = 0,5 ; une mauvaise réponse cochée = 0.", "Lire les intitulés de lignes et de colonnes avant de comparer des valeurs.", { documentSet: "DS-JEUNES-INFO", timeSec: 300, lessonAnchor: "regle" }),
  q("DOC-JI-002", "DOC", "doc.rapprochement", "doc.ji.rapprochement", 2, "En rapprochant les documents 1 et 3, quelles conclusions sont justifiées ? (plusieurs réponses possibles)", [
    ["La part des jeunes qui déclarent vérifier une information importante augmente sur la période.", true, "Document 3 : de 52 % en 2021 à 66 % en 2025."],
    ["Le document 1 indique que beaucoup de jeunes vérifient une information importante auprès d'un média reconnu.", true, "Document 1, paragraphe 1."],
    ["Les ateliers d'éducation aux médias expliquent la hausse de la vérification.", false, "Document 1, paragraphe 3 : l'effet sur les habitudes n'est pas encore mesuré. Lien de causalité non établi (généralisation abusive)."],
    ["La majorité des jeunes ne vérifie jamais l'information.", false, "Document 3 : 66 % déclarent vérifier en 2025 (contresens)."],
  ], "Rapprocher des documents, c'est confronter ce que chacun établit, sans inventer de lien de cause que les documents n'affirment pas.", "Corrélation dans le temps ≠ causalité démontrée.", { documentSet: "DS-JEUNES-INFO", timeSec: 360, lessonAnchor: "erreur" }),
  q("DOC-JI-003", "DOC", "doc.reperage", "doc.ji.reperage", 1, "D'après le document 1, quelle est la difficulté principale observée par les enseignants ?", [
    ["Le tri de l'information : distinguer fait, opinion et rumeur", true, "Document 1, paragraphe 2."],
    ["L'accès à l'information", false, "Le paragraphe 2 précise que ce n'est pas la difficulté principale."],
    ["Le coût des abonnements à la presse", false, "Donnée hors périmètre : le dossier n'en parle pas."],
    ["Le manque d'ateliers dans les établissements", false, "Le paragraphe 3 mentionne des ateliers existants, sans parler de manque."],
  ], "La réponse se trouve au paragraphe 2 du document 1, qui oppose accès et tri.", "Chercher la phrase qui répond exactement à la question posée.", { documentSet: "DS-JEUNES-INFO", timeSec: 240 }),
  q("DOC-JI-004", "DOC", "doc.synthese", "doc.ji.synthese", 3, "Quels éléments un plan de synthèse fidèle au dossier doit-il retenir ? (plusieurs réponses possibles)", [
    ["L'essor des réseaux sociaux comme source principale (document 2)", true, "Fait central du document 2."],
    ["Une vigilance déclarée en hausse (documents 1 et 3)", true, "Document 3 et document 1, paragraphe 1."],
    ["L'enjeu du tri entre fait, opinion et rumeur (document 1)", true, "Document 1, paragraphe 2."],
    ["L'efficacité démontrée des ateliers sur les habitudes de consultation", false, "Contresens : le document 1 dit que cet effet n'est pas encore mesuré."],
  ], "Une synthèse reprend les idées principales de chaque document sans ajouter de conclusion qu'ils ne permettent pas.", "Synthèse : fidélité aux documents, aucune information ajoutée.", { documentSet: "DS-JEUNES-INFO", timeSec: 420 }),
  q("DOC-JI-005", "DOC", "doc.rapprochement", "doc.ji.chiffres", 2, "Entre 2022 et 2025 (document 2), quelles évolutions sont exactes ? (plusieurs réponses possibles)", [
    ["La part des réseaux sociaux a augmenté de 13 points.", true, "61 − 48 = 13 points de pourcentage."],
    ["La part des réseaux sociaux a augmenté de 13 %.", false, "Confusion points / pourcentage : la hausse relative est de 13 / 48 ≈ 27 %."],
    ["La part de la radio a été divisée par 1,5.", true, "6 ÷ 4 = 1,5."],
    ["La télévision a perdu un tiers de sa part.", true, "27 − 18 = 9, et 9 / 27 = 1/3."],
  ], "Comparer des parts exprimées en % : la différence s'exprime en points, la variation relative en %.", "Écart entre deux pourcentages = points de pourcentage.", { documentSet: "DS-JEUNES-INFO", timeSec: 360, lessonAnchor: "erreur" }),
];
