// Catalogue de démonstration : matières, compétences, cours, dossier documentaire et fiches d'actualité.
import type { DocumentItem, LessonSection, SessionConfigBody } from "@/db/schema";

export const SUBJECTS = [
  { code: "DIG", name: "Compétences digitales", position: 1, isLanguage: false, open: true },
  { code: "ACT", name: "Enjeux contemporains", position: 2, isLanguage: false, open: true },
  { code: "MATH", name: "Mathématiques", position: 3, isLanguage: false, open: true },
  { code: "FR", name: "Français", position: 4, isLanguage: false, open: true },
  { code: "EN", name: "Anglais", position: 5, isLanguage: true, open: true },
  { code: "LV-ES", name: "Espagnol", position: 6, isLanguage: true, open: true },
  // Langues annoncées mais pas encore ouvertes : affichées comme telles avant inscription.
  { code: "LV-DE", name: "Allemand", position: 7, isLanguage: true, open: false },
  { code: "LV-AR", name: "Arabe", position: 8, isLanguage: true, open: false, textDirection: "rtl" },
  { code: "LV-ZH", name: "Chinois", position: 9, isLanguage: true, open: false },
  { code: "LV-HE", name: "Hébreu", position: 10, isLanguage: true, open: false, textDirection: "rtl" },
  { code: "LV-IT", name: "Italien", position: 11, isLanguage: true, open: false },
  { code: "LV-JA", name: "Japonais", position: 12, isLanguage: true, open: false },
  { code: "LV-NL", name: "Néerlandais", position: 13, isLanguage: true, open: false },
  { code: "LV-PT", name: "Portugais", position: 14, isLanguage: true, open: false },
  { code: "LV-RU", name: "Russe", position: 15, isLanguage: true, open: false },
  { code: "DOC", name: "Analyse documentaire", position: 16, isLanguage: false, open: true },
];

export const LANGUAGE_NAMES: Record<string, string> = { DE: "Allemand", AR: "Arabe", ZH: "Chinois", ES: "Espagnol", HE: "Hébreu", IT: "Italien", JA: "Japonais", NL: "Néerlandais", PT: "Portugais", RU: "Russe" };

export const SKILLS = [
  { id: "math.calc", subjectCode: "MATH", domain: "Calcul", name: "Priorités opératoires et fractions", synonyms: ["priorite", "operations", "fraction", "calcul mental"] },
  { id: "math.prop", subjectCode: "MATH", domain: "Proportions", name: "Proportionnalité et échelles", synonyms: ["regle de trois", "produit en croix", "echelle", "proportion"] },
  { id: "math.pct", subjectCode: "MATH", domain: "Proportions", name: "Pourcentages", synonyms: ["pourcentage", "taux", "evolution", "variation", "points de pourcentage", "hausse", "baisse"] },
  { id: "math.eq", subjectCode: "MATH", domain: "Algèbre", name: "Équations du premier degré", synonyms: ["equation", "inconnue", "resoudre", "mise en equation"] },
  { id: "math.proba", subjectCode: "MATH", domain: "Probabilités", name: "Probabilités", synonyms: ["probabilite", "hasard", "de", "urne", "evenement contraire"] },
  { id: "dig.info", subjectCode: "DIG", domain: "Information", name: "Recherche et évaluation de l'information", synonyms: ["moteur de recherche", "source", "fiabilite", "fake news", "verification"] },
  { id: "dig.secu", subjectCode: "DIG", domain: "Sécurité", name: "Sécurité numérique", synonyms: ["mot de passe", "hameconnage", "phishing", "wifi", "authentification"] },
  { id: "dig.data", subjectCode: "DIG", domain: "Données", name: "Tableur et formats de données", synonyms: ["tableur", "excel", "formule", "csv", "reference absolue"] },
  { id: "dig.algo", subjectCode: "DIG", domain: "Programmation", name: "Lecture d'algorithmes", synonyms: ["algorithme", "pseudo code", "boucle", "condition", "variable"] },
  { id: "act.inst", subjectCode: "ACT", domain: "Institutions", name: "Institutions françaises et européennes", synonyms: ["president", "senat", "parlement europeen", "union europeenne", "constitution"] },
  { id: "act.eco", subjectCode: "ACT", domain: "Économie", name: "Notions économiques", synonyms: ["inflation", "pib", "bce", "pouvoir d'achat", "croissance"] },
  { id: "act.env", subjectCode: "ACT", domain: "Environnement", name: "Climat et environnement", synonyms: ["climat", "accord de paris", "giec", "effet de serre", "cop"] },
  { id: "fr.accord", subjectCode: "FR", domain: "Grammaire", name: "Accords et participe passé", synonyms: ["participe passe", "accord", "cod", "pronominal", "adjectif de couleur"] },
  { id: "fr.conj", subjectCode: "FR", domain: "Conjugaison", name: "Subjonctif et conditionnel", synonyms: ["subjonctif", "conditionnel", "bien que", "si j'avais", "concordance"] },
  { id: "fr.vocab", subjectCode: "FR", domain: "Vocabulaire", name: "Sens des mots et paronymes", synonyms: ["paronyme", "vocabulaire", "sens", "definition"] },
  { id: "fr.ortho", subjectCode: "FR", domain: "Orthographe", name: "Homophones grammaticaux", synonyms: ["homophone", "a ou a", "quant quand", "s'est c'est"] },
  { id: "en.tenses", subjectCode: "EN", domain: "Grammaire", name: "Temps verbaux", synonyms: ["present perfect", "preterit", "past continuous", "since", "for", "tenses"] },
  { id: "en.prep", subjectCode: "EN", domain: "Grammaire", name: "Prépositions", synonyms: ["preposition", "in on at", "depend on"] },
  { id: "en.vocab", subjectCode: "EN", domain: "Vocabulaire", name: "Faux-amis anglais", synonyms: ["faux amis", "false friends", "actually", "eventually"] },
  { id: "es.serestar", subjectCode: "LV-ES", domain: "Grammaire", name: "Ser et estar", synonyms: ["ser", "estar", "etre espagnol"] },
  { id: "es.vocab", subjectCode: "LV-ES", domain: "Vocabulaire", name: "Faux-amis espagnols", synonyms: ["faux amis", "embarazada", "vocabulaire espagnol"] },
  { id: "doc.reperage", subjectCode: "DOC", domain: "Méthode", name: "Repérer une information", synonyms: ["reperage", "lire un tableau", "document"] },
  { id: "doc.rapprochement", subjectCode: "DOC", domain: "Méthode", name: "Rapprocher des documents", synonyms: ["rapprochement", "croiser", "comparer des documents", "causalite"] },
  { id: "doc.synthese", subjectCode: "DOC", domain: "Méthode", name: "Construire une synthèse", synonyms: ["synthese", "plan", "idees principales"] },
];

type LessonDef = { skillId: string; title: string; objectives: string[]; prerequisites?: string[]; regle: string; exemple: string; erreur: string; approfondir: string; cards: [string, string, boolean][] };

const L = (d: LessonDef) => d;

export const LESSONS: LessonDef[] = [
  L({ skillId: "math.calc", title: "Priorités opératoires et fractions", objectives: ["Appliquer l'ordre des opérations", "Additionner et multiplier des fractions"], regle: "Ordre de calcul : parenthèses, puissances, puis multiplications et divisions, puis additions et soustractions. À priorité égale, on calcule de gauche à droite.\n\nPour additionner deux fractions, on les écrit d'abord avec le même dénominateur. Pour prendre une fraction d'un nombre, on multiplie ce nombre par la fraction.", exemple: "3 + 4 × 2² : on calcule 2² = 4, puis 4 × 4 = 16, puis 3 + 16 = 19.\n\n2/3 + 1/4 = 8/12 + 3/12 = 11/12.", erreur: "Additionner numérateurs et dénominateurs : 2/3 + 1/4 ≠ 3/7. Contrôle rapide : 3/7 ≈ 0,43 alors que 2/3 seul vaut déjà 0,67.", approfondir: "Un ordre de grandeur permet de repérer une erreur : estimer le résultat avant de calculer (2/3 + 1/4 ≈ 0,7 + 0,25 ≈ 0,95).", cards: [["Ordre des opérations", "Parenthèses, puissances, × et ÷, + et −", false], ["a/b + c/d", "(ad + bc) / bd, ou dénominateur commun", false]] }),
  L({ skillId: "math.prop", title: "Proportionnalité et échelles", objectives: ["Reconnaître une situation de proportionnalité", "Calculer une quatrième proportionnelle", "Utiliser une échelle"], regle: "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre (le coefficient). Pour calculer une valeur manquante, on passe par l'unité ou par le produit en croix.\n\nÉchelle 1/n : 1 unité sur le plan représente n unités en réalité.", exemple: "3 cahiers coûtent 7,50 €. Un cahier coûte 7,50 ÷ 3 = 2,50 € ; 7 cahiers coûtent 7 × 2,50 = 17,50 €.", erreur: "Raisonner de manière additive : « 2 cahiers de plus, donc 2 € de plus » est faux. En proportionnalité, on multiplie.", approfondir: "Toutes les situations ne sont pas proportionnelles : un abonnement avec un forfait fixe (12 € + 0,05 € par SMS) ne l'est pas.", cards: [["Échelle 1/25 000 : 1 cm =", "250 m", true], ["Produit en croix", "a/b = c/x ⇒ x = b × c / a", false]] }),
  L({ skillId: "math.pct", title: "Pourcentages", objectives: ["Calculer une variation en pourcentage", "Distinguer points de pourcentage et pourcentage", "Enchaîner des évolutions"], prerequisites: ["math.prop"], regle: "Variation relative = (valeur finale − valeur initiale) / valeur initiale.\n\nUne hausse de t % correspond au coefficient multiplicateur 1 + t/100 ; une baisse de t % au coefficient 1 − t/100. Des évolutions successives se combinent en multipliant les coefficients.\n\nEntre deux taux, la différence simple s'exprime en points de pourcentage.", exemple: "Un prix passe de 50 € à 60 € : (60 − 50) / 50 = 0,2, soit +20 %.\n\nUn taux passe de 20 % à 25 % : +5 points de pourcentage, soit une hausse relative de 5/20 = 25 %.", erreur: "+20 % puis −20 % ne ramène pas au prix initial : 1,2 × 0,8 = 0,96, soit −4 %.\n\nNe pas confondre « +5 points » et « +5 % » : passer de 20 % à 25 %, c'est +5 points mais +25 % en relatif.", approfondir: "Pour retrouver une valeur initiale après une hausse de t %, on divise par 1 + t/100 (et non en retirant t %).", cards: [["Coefficient d'une baisse de 15 %", "0,85", true], ["20 % → 25 %", "+5 points, soit +25 % en relatif", false]] }),
  L({ skillId: "math.eq", title: "Équations du premier degré", objectives: ["Résoudre ax + b = c", "Mettre un problème en équation"], regle: "Une équation reste équivalente si l'on ajoute, soustrait, multiplie ou divise (par un nombre non nul) ses deux membres par le même nombre. On isole l'inconnue, puis on vérifie la solution en la remplaçant dans l'équation de départ.", exemple: "3x − 7 = 11 ⇔ 3x = 18 ⇔ x = 6. Vérification : 3 × 6 − 7 = 11.", erreur: "Oublier de changer le signe d'un terme qui change de membre, ou oublier de diviser par le coefficient de x.", approfondir: "Dans un problème, nommer précisément l'inconnue (« n = le plus petit des trois nombres ») évite de répondre à une autre question que celle posée.", cards: [["Première étape d'une mise en équation", "Nommer l'inconnue", false]] }),
  L({ skillId: "math.proba", title: "Probabilités", objectives: ["Calculer une probabilité en situation d'équiprobabilité", "Utiliser l'événement contraire", "Combiner deux épreuves indépendantes"], regle: "En situation d'équiprobabilité : P(A) = nombre d'issues favorables / nombre d'issues possibles.\n\nP(contraire de A) = 1 − P(A). Pour deux épreuves indépendantes, P(A et B) = P(A) × P(B).", exemple: "Deux lancers de pièce : P(pile puis pile) = 1/2 × 1/2 = 1/4.", erreur: "Additionner des probabilités d'événements qui peuvent se produire ensemble : P(au moins un six en deux lancers) ≠ 1/6 + 1/6.", approfondir: "« Au moins un » se calcule souvent par le contraire « aucun » : 1 − (5/6)² = 11/36.", cards: [["P(contraire de A)", "1 − P(A)", false]] }),
  L({ skillId: "dig.info", title: "Rechercher et évaluer l'information", objectives: ["Utiliser les opérateurs de recherche", "Évaluer la fiabilité d'une source"], regle: "Opérateurs utiles : guillemets pour une expression exacte, signe moins pour exclure un mot.\n\nPour évaluer une source : qui parle ? à partir de quelles données ? quand ? La popularité ou le design ne sont pas des preuves.", exemple: "« transition énergétique » -voiture : pages contenant l'expression exacte, sans le mot voiture.", erreur: "Croire qu'un contenu très partagé ou très bien classé est fiable.", approfondir: "La recherche d'image inversée retrouve les publications antérieures d'une image et révèle les images sorties de leur contexte.", cards: [["Expression exacte", "Guillemets", false], ["Exclure un mot", "Signe moins devant le mot", false]] }),
  L({ skillId: "dig.secu", title: "Sécurité numérique", objectives: ["Reconnaître un hameçonnage", "Protéger ses comptes"], regle: "Un organisme sérieux ne demande jamais un mot de passe par courriel. Un mot de passe long et unique par service, avec authentification à deux facteurs, limite les conséquences d'une fuite.", exemple: "Courriel « urgent » de votre banque avec un lien : ne pas cliquer, vérifier par l'application ou le site officiel, signaler.", erreur: "Réutiliser le même mot de passe complexe partout : une seule fuite suffit à tout compromettre.", approfondir: "Facteurs d'authentification : ce que l'on sait, ce que l'on possède, ce que l'on est.", cards: [["Deux facteurs", "Deux éléments de nature différente", false]] }),
  L({ skillId: "dig.data", title: "Tableur et formats de données", objectives: ["Écrire une formule correcte", "Distinguer références relatives et absolues", "Choisir un format d'échange"], regle: "Une formule commence par =. Les priorités opératoires s'appliquent : =(A1+A2)/2.\n\nLors d'une recopie, une référence relative (B2) se décale ; une référence absolue ($C$1) reste fixe.", exemple: "=B2*$C$1 recopiée en ligne 3 devient =B3*$C$1.", erreur: "=A1+A2/2 calcule A1 + (A2 / 2), pas la moyenne.", approfondir: "Le format CSV, ouvert et textuel, est le plus portable pour des données brutes.", cards: [["Figer une cellule", "$ devant colonne et ligne", false]] }),
  L({ skillId: "dig.algo", title: "Lire un algorithme", objectives: ["Suivre l'état des variables", "Comprendre boucles et conditions"], regle: "On exécute les instructions dans l'ordre en notant la valeur de chaque variable. Une boucle répète un bloc ; une condition est testée avec la valeur courante.", exemple: "x ← 1 ; répéter 4 fois x ← 2x : x vaut 2, 4, 8 puis 16.", erreur: "Compter un passage de trop ou de moins dans une boucle « de 1 à n » (bornes incluses).", approfondir: "Un tableau de suivi (une colonne par variable, une ligne par étape) évite la plupart des erreurs.", cards: [["Pour i de 1 à 4", "4 passages : i = 1, 2, 3, 4", false]] }),
  L({ skillId: "act.inst", title: "Institutions françaises et européennes", objectives: ["Connaître les modes de désignation", "Situer les institutions de l'UE"], regle: "France : président élu au suffrage direct pour 5 ans ; députés élus au suffrage direct ; sénateurs élus au suffrage indirect pour 6 ans.\n\nUnion européenne : le Parlement européen est élu au suffrage direct ; la Commission propose les textes ; le Conseil de l'UE réunit les ministres ; le Conseil européen réunit les chefs d'État ou de gouvernement.", exemple: "Le quinquennat a été adopté par référendum en 2000 et appliqué depuis 2002.", erreur: "Confondre le Conseil européen (chefs d'État), le Conseil de l'UE (ministres) et le Conseil de l'Europe (organisation distincte de l'UE).", approfondir: "Les données susceptibles d'évoluer (nombre d'États membres, dates d'élections) sont revérifiées avant chaque session.", cards: [["Sénat", "Suffrage universel indirect, 6 ans", true]] }),
  L({ skillId: "act.eco", title: "Notions économiques", objectives: ["Définir inflation, PIB, pouvoir d'achat", "Connaître le rôle de la BCE"], regle: "Inflation : hausse générale et durable des prix. PIB : valeur de la production d'un territoire sur une période. Pouvoir d'achat : quantité de biens qu'un revenu permet d'acheter.\n\nLa BCE a pour objectif principal la stabilité des prix dans la zone euro.", exemple: "Salaire +2 %, prix +3 % : 1,02 / 1,03 ≈ 0,99, pouvoir d'achat ≈ −1 %.", erreur: "Additionner ou soustraire des taux sans réfléchir aux coefficients ; confondre PIB (flux) et patrimoine (stock).", approfondir: "Les chiffres d'actualité (taux d'inflation, croissance) proviennent de sources primaires datées (Insee, Eurostat, BCE).", cards: [["Inflation", "Hausse générale et durable des prix", false]] }),
  L({ skillId: "act.env", title: "Climat et environnement", objectives: ["Situer les grands accords", "Comprendre l'effet de serre et le rôle du GIEC"], regle: "Accord de Paris (2015) : contenir le réchauffement nettement sous 2 °C. Protocole de Kyoto (1997) : réduction des émissions de certains pays. Protocole de Montréal (1987) : couche d'ozone.\n\nLe GIEC évalue les connaissances scientifiques ; il ne décide pas des politiques.", exemple: "Le CO₂, émis surtout par les énergies fossiles, est le premier gaz à effet de serre d'origine humaine.", erreur: "Confondre trou dans la couche d'ozone (Montréal) et réchauffement climatique (Kyoto, Paris).", approfondir: "Une fiche d'actualité distingue fait établi, déclaration, interprétation et élément incertain.", cards: [["Accord de Paris", "2015, COP21, < 2 °C", true]] }),
  L({ skillId: "fr.accord", title: "Accords et participe passé", objectives: ["Accorder le participe passé avec être et avoir", "Traiter les verbes pronominaux", "Accorder les adjectifs de couleur"], regle: "Avec être : accord avec le sujet. Avec avoir : accord avec le COD seulement s'il est placé avant le verbe.\n\nVerbes pronominaux : on cherche le COD ; s'il est placé après, le participe reste invariable.\n\nAdjectifs de couleur composés (bleu foncé) : invariables.", exemple: "Les lettres que j'ai écrites (COD « que » placé avant). Elles se sont offert des cadeaux (COD après).", erreur: "Accorder systématiquement avec le sujet d'un verbe pronominal : « elles se sont offertes des cadeaux » est fautif.", approfondir: "Question réflexe : « ont fait quoi ? » Si la réponse vient avant le verbe, on accorde.", cards: [["Avoir + participe passé", "Accord avec le COD placé avant", false]] }),
  L({ skillId: "fr.conj", title: "Subjonctif et conditionnel", objectives: ["Employer le subjonctif après les expressions qui l'imposent", "Construire une phrase hypothétique"], regle: "Subjonctif après : il faut que, bien que, pour que, avant que, vouloir que…\n\nHypothèse : si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé. Jamais de conditionnel après « si ».", exemple: "Si j'avais le temps, je lirais. Si tu me l'avais demandé, je t'aurais aidé.", erreur: "« Bien qu'il est tard » est fautif : bien que + subjonctif.", approfondir: "Distinguer à l'écrit « je lirai » (futur) et « je lirais » (conditionnel) en remplaçant par « nous » : nous lirons / nous lirions.", cards: [["Bien que + ?", "Subjonctif", false]] }),
  L({ skillId: "fr.vocab", title: "Sens des mots et paronymes", objectives: ["Distinguer les paronymes fréquents", "Préciser le sens d'un mot"], regle: "Les paronymes se ressemblent mais ont des sens différents : imminent / éminent, infliger / affliger, conjoncture / conjecture.", exemple: "Un danger imminent (proche) ; un chercheur éminent (remarquable).", erreur: "Choisir le mot le plus courant sans vérifier son sens dans la phrase.", approfondir: "L'étymologie aide : pérenne vient du latin perennis, « qui dure toute l'année ».", cards: [["Imminent", "Sur le point d'arriver", true], ["Exhaustif", "Complet", true]] }),
  L({ skillId: "fr.ortho", title: "Homophones grammaticaux", objectives: ["Distinguer a/à, quand/quant, s'est/c'est"], regle: "a = verbe avoir (remplaçable par « avait ») ; à = préposition.\nquant à = en ce qui concerne ; quand = moment.\ns'est = se + être (verbe pronominal) ; c'est = cela est.", exemple: "Il a fini à temps. Quant à moi, je reste.", erreur: "Écrire « quand à moi » au lieu de « quant à moi ».", approfondir: "Toujours tester une substitution : avait, cela est, me suis…", cards: [["a ou à ?", "Si « avait » fonctionne : a", false]] }),
  L({ skillId: "en.tenses", title: "Temps verbaux en anglais", objectives: ["Choisir entre prétérit et present perfect", "Employer le past continuous et le future perfect"], regle: "Prétérit : action terminée, datée (yesterday, in 2020). Present perfect : lien avec le présent (since, for, conséquence actuelle). Past continuous : action en cours dans le passé. Future perfect : action achevée avant un moment futur.", exemple: "I have lived in Paris since 2020. While I was cooking, the phone rang.", erreur: "« I live here since 2020 » : calque du français, fautif en anglais.", approfondir: "Repérer les marqueurs de temps (since, ago, yesterday, by the time) avant de choisir le temps.", cards: [["since 2020", "present perfect", false]] }),
  L({ skillId: "en.prep", title: "Prépositions en anglais", objectives: ["Choisir in / on / at", "Mémoriser les verbes à préposition fixe"], regle: "at + heure ; on + jour ou date ; in + mois, année, saison.\nVerbes à préposition fixe : depend on, rely on, listen to, look forward to.", exemple: "The meeting is on Monday at 9 a.m. I was born in 2008.", erreur: "« It depends of » : calque du français « dépendre de ».", approfondir: "Apprendre les verbes avec leur préposition, comme une seule unité.", cards: [["Depend + ?", "on", true]] }),
  L({ skillId: "en.vocab", title: "Faux-amis anglais", objectives: ["Éviter les faux-amis les plus fréquents"], regle: "actually = en fait ; eventually = finalement ; attend = assister à ; sensible = raisonnable ; library = bibliothèque.", exemple: "She will attend the conference : elle assistera à la conférence.", erreur: "Traduire « actually » par « actuellement » (currently).", approfondir: "Toujours vérifier le sens dans la phrase complète : un faux-ami se repère au contexte.", cards: [["Actually", "En fait", true], ["Sensible", "Raisonnable", true]] }),
  L({ skillId: "es.serestar", title: "Ser et estar", objectives: ["Choisir entre ser et estar"], regle: "Ser : identité, profession, nationalité, caractéristique essentielle, heure.\nEstar : état passager, localisation, résultat d'une action.", exemple: "Mi hermano es médico. La sopa está fría. Madrid está en el centro de España.", erreur: "Employer ser pour localiser un lieu : « Madrid es en el centro » est fautif.", approfondir: "Certains adjectifs changent de sens : ser listo (être intelligent) / estar listo (être prêt).", cards: [["Localisation", "estar", false]] }),
  L({ skillId: "es.vocab", title: "Faux-amis espagnols", objectives: ["Éviter les faux-amis les plus fréquents"], regle: "embarazada = enceinte ; constipado = enrhumé ; éxito = succès ; salida = sortie.", exemple: "Tuvo mucho éxito : il a eu beaucoup de succès.", erreur: "Dire « estoy embarazada » pour « je suis gêné(e) » (estoy avergonzado/a).", approfondir: "Repérer les faux-amis dans un contexte de phrase, pas en liste isolée.", cards: [["Éxito", "Succès", true]] }),
  L({ skillId: "doc.reperage", title: "Repérer une information dans un dossier", objectives: ["Lire un tableau et un graphique", "Retrouver un passage précis"], regle: "Avant de répondre : lire le titre, la source, les unités et les intitulés. Chaque réponse doit pouvoir être justifiée par un passage numéroté (document, paragraphe, ligne).", exemple: "Document 2, ligne « Télévision » : 27 % en 2022 et 18 % en 2025, soit −9 points.", erreur: "Répondre de mémoire ou avec ses connaissances personnelles au lieu de lire le document : c'est une donnée hors périmètre.", approfondir: "Barème affiché pour l'analyse documentaire : toutes les bonnes réponses = maximum ; au moins la moitié sans erreur = moitié des points ; une mauvaise réponse cochée = 0.", cards: [["Une réponse = ", "un passage justificatif", false]] }),
  L({ skillId: "doc.rapprochement", title: "Rapprocher des documents", objectives: ["Croiser deux documents", "Éviter les fausses causalités"], regle: "Rapprocher, c'est confronter ce que chaque document établit. Deux évolutions simultanées ne prouvent pas qu'une cause l'autre si aucun document ne l'affirme.", exemple: "Doc 3 : la vérification déclarée augmente. Doc 1 : des ateliers existent, mais leur effet n'est pas mesuré. Conclure que les ateliers expliquent la hausse est une généralisation abusive.", erreur: "Confondre points de pourcentage et pourcentage en comparant des parts.", approfondir: "Les mauvaises options typiques : contresens, généralisation abusive, confusion entre auteurs, donnée hors périmètre.", cards: [["Corrélation", "≠ causalité", false]] }),
  L({ skillId: "doc.synthese", title: "Construire une synthèse", objectives: ["Sélectionner les idées principales", "Organiser un plan fidèle"], regle: "Une synthèse reprend les idées principales de chaque document, les organise et n'ajoute aucune information extérieure ni conclusion non fondée.", exemple: "Plan possible : 1) l'essor des réseaux sociaux (doc 2) ; 2) une vigilance déclarée (docs 1 et 3) ; 3) l'enjeu du tri (doc 1).", erreur: "Ajouter une conclusion que les documents ne permettent pas (« les ateliers sont efficaces »).", approfondir: "Vérifier que chaque partie du plan cite au moins un document.", cards: [["Synthèse", "Fidélité, aucune information ajoutée", false]] }),
];

export function lessonSections(d: LessonDef): LessonSection[] {
  return [
    { anchor: "regle", title: "L'essentiel", body: d.regle },
    { anchor: "exemple", title: "Exemple résolu", body: d.exemple },
    { anchor: "erreur", title: "Erreur fréquente", body: d.erreur },
    { anchor: "approfondir", title: "Pour aller plus loin", body: d.approfondir },
  ];
}

export const DOCUMENT_SET: { id: string; title: string; documents: DocumentItem[] } = {
  id: "DS-JEUNES-INFO",
  title: "Les jeunes et l'information (dossier de démonstration)",
  documents: [
    {
      num: 1,
      kind: "text",
      title: "S'informer à l'ère des réseaux",
      reference: "Texte original rédigé pour CAP SESAME, démonstration.",
      paragraphs: [
        "Les 15-24 ans s'informent de plus en plus par les réseaux sociaux. Pour autant, ils ne leur accordent pas une confiance aveugle : beaucoup déclarent vérifier une information importante auprès d'un média reconnu.",
        "Les enseignants observent que la difficulté principale n'est pas l'accès à l'information, mais son tri : distinguer un fait, une opinion et une rumeur demande du temps et des repères.",
        "Plusieurs établissements ont mis en place des ateliers d'éducation aux médias. Les premiers retours montrent une meilleure capacité à identifier la source d'un contenu, sans que l'effet sur les habitudes de consultation soit encore mesuré.",
      ],
    },
    {
      num: 2,
      kind: "table",
      title: "Principale source d'information déclarée par les 15-24 ans",
      caption: "Données fictives créées pour la démonstration (en % des répondants).",
      reference: "Tableau original, données fictives.",
      table: {
        headers: ["Source", "2022", "2025"],
        rows: [
          ["Réseaux sociaux", "48 %", "61 %"],
          ["Télévision", "27 %", "18 %"],
          ["Sites de presse", "15 %", "14 %"],
          ["Radio", "6 %", "4 %"],
          ["Autre", "4 %", "3 %"],
        ],
      },
    },
    {
      num: 3,
      kind: "chart",
      title: "Part des 15-24 ans déclarant vérifier une information importante",
      caption: "Données fictives créées pour la démonstration.",
      reference: "Graphique original, données fictives.",
      chart: { label: "Vérification déclarée", unit: "%", points: [{ x: "2021", y: 52 }, { x: "2022", y: 55 }, { x: "2023", y: 58 }, { x: "2024", y: 63 }, { x: "2025", y: 66 }] },
    },
  ],
};

export const NEWS = [
  {
    title: "Adoption de l'accord de Paris sur le climat",
    category: "Environnement",
    eventDate: "2015-12-12",
    summary: "Lors de la COP21, les parties à la convention-cadre des Nations unies sur les changements climatiques adoptent un accord visant à contenir le réchauffement nettement en dessous de 2 °C.",
    actors: ["Parties à la CCNUCC", "Présidence française de la COP21"],
    context: "Il succède au protocole de Kyoto (1997), qui ne fixait des objectifs chiffrés qu'à certains pays.",
    stakes: "Chaque pays présente des contributions nationales révisées tous les cinq ans ; l'accord repose sur la transparence plutôt que sur des sanctions.",
    whyItMatters: "Référence constante des débats climatiques : les nouvelles COP sont évaluées au regard de ses objectifs.",
    vocabulary: [{ term: "COP", definition: "Conférence des parties : réunion annuelle des États signataires de la convention climat." }],
    claims: [
      { kind: "fact" as const, text: "L'accord a été adopté le 12 décembre 2015." },
      { kind: "fact" as const, text: "Objectif : nettement en dessous de 2 °C, en poursuivant l'action pour 1,5 °C." },
      { kind: "interpretation" as const, text: "Son efficacité dépend de la mise en œuvre des engagements nationaux." },
    ],
    sources: [{ label: "CCNUCC, l'accord de Paris", url: "https://unfccc.int/fr/a-propos-des-ndcs/l-accord-de-paris" }],
  },
  {
    title: "Sortie du Royaume-Uni de l'Union européenne",
    category: "Géopolitique",
    eventDate: "2020-01-31",
    summary: "Le Royaume-Uni quitte l'Union européenne, qui compte désormais 27 États membres.",
    actors: ["Royaume-Uni", "Union européenne"],
    context: "Le retrait fait suite au référendum britannique de juin 2016.",
    stakes: "Relations commerciales, circulation des personnes, frontière irlandaise.",
    whyItMatters: "Premier retrait d'un État membre : il modifie le fonctionnement et le poids de l'Union.",
    vocabulary: [{ term: "Article 50", definition: "Article du traité sur l'Union européenne qui organise le retrait d'un État membre." }],
    claims: [
      { kind: "fact" as const, text: "Le retrait est effectif le 31 janvier 2020." },
      { kind: "statement" as const, text: "Les deux parties ont présenté l'accord de commerce comme la base d'une relation nouvelle." },
    ],
    sources: [{ label: "Conseil de l'Union européenne", url: "https://www.consilium.europa.eu/fr/" }],
  },
  {
    title: "Élections européennes de juin 2024",
    category: "Institutions",
    eventDate: "2024-06-09",
    summary: "Les citoyens de l'Union élisent les membres du Parlement européen pour cinq ans ; en France, le scrutin a lieu le 9 juin 2024.",
    actors: ["Citoyens de l'UE", "Parlement européen"],
    context: "Le Parlement européen est élu au suffrage universel direct depuis 1979.",
    stakes: "Composition du Parlement, approbation de la Commission européenne.",
    whyItMatters: "Illustre le seul scrutin direct à l'échelle de l'Union.",
    vocabulary: [{ term: "Eurodéputé", definition: "Membre du Parlement européen." }],
    claims: [{ kind: "fact" as const, text: "Le scrutin s'est tenu du 6 au 9 juin 2024 selon les États." }],
    sources: [{ label: "Parlement européen", url: "https://www.europarl.europa.eu/" }],
  },
];

// Configuration 2027 : état vérifié du site officiel au 14 octobre 2026 [S1-S5], non définitive.
export const SESSION_2027: SessionConfigBody = {
  examDate: "2027-04-07",
  newsWindowMonths: 10,
  oralPeriod: { from: "2027-04-24", to: "2027-05-15" },
  papers: [
    { subject: "DIG", label: "Compétences digitales", questionCount: 20, minutes: 20, scoring: "standard", scoringNote: "Barème détaillé à confirmer dans le règlement 2026-2027.", verified: true },
    { subject: "ACT", label: "Enjeux contemporains", questionCount: 40, minutes: 30, scoring: "standard", scoringNote: "Barème détaillé à confirmer.", verified: true },
    { subject: "MATH", label: "Mathématiques", questionCount: 20, minutes: 40, scoring: "standard", scoringNote: "Barème détaillé à confirmer.", verified: true },
    { subject: "FR", label: "Français", questionCount: 40, minutes: 30, scoring: "standard", scoringNote: "Barème détaillé à confirmer.", verified: true },
    { subject: "EN", label: "Anglais", questionCount: 40, minutes: 30, scoring: "standard", scoringNote: "Barème détaillé à confirmer.", verified: true },
    { subject: "LV", label: "Autre langue étrangère", questionCount: 40, minutes: 30, scoring: "standard", scoringNote: "Barème détaillé à confirmer.", verified: true },
    { subject: "DOC", label: "Analyse documentaire", questionCount: 20, minutes: 120, scoring: "doc_partial", scoringNote: "Toutes les réponses attendues = maximum ; au moins la moitié = moitié des points ; mauvaise réponse ou absence = 0 [S1].", verified: true },
  ],
  breaks: "Ordre des épreuves et pauses non publiés : hypothèse de conception à revérifier.",
  pauseMaxMinutes: 10,
  navigation: "free",
  languages: ["DE", "AR", "ZH", "ES", "HE", "IT", "JA", "NL", "PT", "RU"],
  coefficients: {},
  sources: [
    { id: "S1", label: "Concours SESAME, épreuves écrites", url: "https://www.concours-sesame.net/epreuves-ecrites.html" },
    { id: "S2", label: "Concours SESAME, épreuves orales", url: "https://www.concours-sesame.net/epreuves-orales.html" },
    { id: "S3", label: "Concours SESAME, foire aux questions", url: "https://www.concours-sesame.net/faq.html" },
    { id: "S4", label: "Concours SESAME, sessions d'entraînement", url: "https://www.concours-sesame.net/participer-aux-sessions-d-entrainement-aux-epreuves.html" },
    { id: "S5", label: "Règlement 2026 (annonce du règlement 2026-2027)", url: "https://www.concours-sesame.net/media/8952/Concours-SESAME-2026-Reglement-concours.pdf" },
  ],
};

// ---------- Oraux (ORA-01) ----------
// Fiches de démonstration : écoles fictives. Les vraies fiches sont rédigées école par école à partir des pages officielles.
export const PROGRAM_SHEETS = [
  {
    school: "École de démonstration Atlantique",
    program: "Programme Grande École post-bac (exemple)",
    campus: "Campus de démonstration, Nantes",
    sessionCode: "2027",
    oralFormat: "Entretien individuel d'environ 20 minutes : présentation libre, échange sur le projet et questions de motivation. Format fictif donné à titre d'exemple.",
    expectations: ["Expliquer pourquoi ce programme plutôt qu'un autre", "S'appuyer sur des expériences vécues", "Montrer une curiosité pour l'international"],
    keywords: ["international", "échange", "projet", "associatif", "entreprise", "langues"],
    questions: ["Qu'est-ce qui t'attire dans un parcours avec une année à l'étranger ?", "Quel cours de ce programme te semble le plus utile pour ton projet, et pourquoi ?"],
    sources: [{ label: "Exemple fictif : à remplacer par la page officielle de l'école", url: "https://www.concours-sesame.net/" }],
  },
  {
    school: "École de démonstration Rhône",
    program: "Bachelor management et numérique (exemple)",
    campus: "Campus de démonstration, Lyon",
    sessionCode: "2027",
    oralFormat: "Entretien collectif puis individuel. Format fictif donné à titre d'exemple : chaque école fixe ses propres modalités.",
    expectations: ["Travailler en groupe et écouter les autres", "Relier le numérique à un projet concret", "Argumenter sans réciter"],
    keywords: ["numérique", "groupe", "équipe", "données", "projet", "management"],
    questions: ["Raconte une situation où tu as dû convaincre un groupe.", "Comment le numérique transforme-t-il un métier qui t'intéresse ?"],
    sources: [{ label: "Exemple fictif : à remplacer par la page officielle de l'école", url: "https://www.concours-sesame.net/" }],
  },
];

export const MOTIVATION_QUESTIONS = [
  "Présente-toi en deux minutes, comme tu le ferais devant le jury.",
  "Pourquoi une école de commerce après le bac plutôt qu'une autre voie ?",
  "Quel métier ou quel domaine t'attire aujourd'hui, et qu'as-tu fait pour le découvrir ?",
  "Quelle qualité et quel défaut te décrivent le mieux ? Donne un exemple pour chacun.",
  "Qu'est-ce qui te fait penser que tu réussiras dans un programme exigeant ?",
];

export const PARCOURS_QUESTIONS: Record<string, string> = {
  experience: "Raconte une expérience qui t'a appris quelque chose sur toi.",
  engagement: "Parle-moi d'un engagement (association, sport, bénévolat…) et de ce que tu y fais concrètement.",
  reussite: "De quelle réussite es-tu le plus fier ou la plus fière, et pourquoi ?",
  difficulte: "Décris une difficulté que tu as surmontée et ce que tu en as retenu.",
  interet: "Quel sujet te passionne en dehors des cours ? Qu'est-ce que cela dit de toi ?",
  projet: "Où te vois-tu dans cinq ans, et quelles étapes as-tu prévues ?",
};

// ---------- Actualité enrichie (ACT-02) ----------
const UNFCCC = { label: "CCNUCC, l'accord de Paris", url: "https://unfccc.int/fr/a-propos-des-ndcs/l-accord-de-paris" };
const CONSILIUM = { label: "Conseil de l'Union européenne", url: "https://www.consilium.europa.eu/fr/" };
export const NEWS_EXTRA: Record<string, { slug: string; zone: string; viewpoints: { actor: string; position: string; source: { label: string; url: string } }[] }> = {
  "Adoption de l'accord de Paris sur le climat": {
    slug: "accord-paris",
    zone: "Monde",
    viewpoints: [
      { actor: "Petits États insulaires", position: "Ont défendu la mention de l'objectif de 1,5 °C, jugé vital face à la montée des eaux.", source: UNFCCC },
      { actor: "Grands pays émetteurs", position: "Ont privilégié des contributions fixées par chaque pays plutôt que des objectifs imposés.", source: UNFCCC },
    ],
  },
  "Sortie du Royaume-Uni de l'Union européenne": {
    slug: "brexit",
    zone: "Europe",
    viewpoints: [
      { actor: "Gouvernement britannique", position: "Présente le retrait comme la reprise du contrôle des lois, des frontières et de la politique commerciale.", source: CONSILIUM },
      { actor: "Union européenne", position: "Insiste sur l'intégrité du marché unique et sur l'absence de frontière physique en Irlande.", source: CONSILIUM },
    ],
  },
  "Élections européennes de juin 2024": { slug: "europeennes-2024", zone: "Europe", viewpoints: [] },
};

// ---------- Exercices oraux de langue (LAN-02), contenus originaux ----------
export const LANGUAGE_EXERCISES = [
  {
    exerciseId: "EN-LIS-001", subjectCode: "EN", kind: "listening" as const, title: "A change of plans", level: "B1",
    text: "Hi Sam, it's Laura. I'm afraid the meeting has been moved from Tuesday to Thursday morning, because the manager is travelling on Tuesday. Could you bring the sales figures? See you on Thursday at nine.",
    question: "Why has the meeting been moved?",
    options: [
      { id: "a", text: "The manager is away on Tuesday.", correct: true, justification: "« because the manager is travelling on Tuesday »." },
      { id: "b", text: "Sam is ill.", correct: false, justification: "Rien n'est dit sur la santé de Sam." },
      { id: "c", text: "The sales figures are not ready.", correct: false, justification: "Laura demande d'apporter les chiffres, ils existent donc." },
    ],
  },
  {
    exerciseId: "EN-LIS-002", subjectCode: "EN", kind: "listening" as const, title: "Library opening hours", level: "B1",
    text: "Welcome to the city library. Please note that from next Monday, we will open at ten instead of nine, but we will close later, at eight in the evening. The study rooms can now be booked online.",
    question: "What is new about the study rooms?",
    options: [
      { id: "a", text: "They close at eight.", correct: false, justification: "C'est la bibliothèque qui ferme à huit heures." },
      { id: "b", text: "They can be booked online.", correct: true, justification: "« The study rooms can now be booked online »." },
      { id: "c", text: "They open at nine.", correct: false, justification: "Neuf heures était l'ancienne heure d'ouverture." },
    ],
  },
  { exerciseId: "EN-READ-001", subjectCode: "EN", kind: "read_aloud" as const, title: "Present perfect", level: "B1", text: "I have lived in this town since I was ten, and I have never regretted it.", transcriptByDefault: true },
  { exerciseId: "EN-READ-002", subjectCode: "EN", kind: "read_aloud" as const, title: "Business vocabulary", level: "B2", text: "Our company has increased its turnover by twelve percent thanks to a new marketing strategy.", transcriptByDefault: true },
  {
    exerciseId: "EN-CONV-001", subjectCode: "EN", kind: "conversation" as const, title: "Talking about yourself", level: "B1", text: "Answer each question aloud in two or three sentences.", transcriptByDefault: true,
    prompts: ["What do you usually do at the weekend?", "Which subject do you enjoy most at school, and why?", "Where would you like to study after your baccalaureate?"],
    modelAnswer: "Example only: « At the weekend I usually play basketball with my club, and on Sunday I revise for my exams. »",
  },
  {
    exerciseId: "ES-LIS-001", subjectCode: "LV-ES", kind: "listening" as const, title: "En la estación", level: "B1",
    text: "Atención, por favor. El tren con destino a Sevilla saldrá con veinte minutos de retraso desde el andén cuatro. Disculpen las molestias.",
    question: "¿Qué problema tiene el tren?",
    options: [
      { id: "a", text: "Sale con retraso.", correct: true, justification: "« saldrá con veinte minutos de retraso »." },
      { id: "b", text: "Está cancelado.", correct: false, justification: "El tren no se cancela." },
      { id: "c", text: "Cambia de destino.", correct: false, justification: "El destino sigue siendo Sevilla." },
    ],
  },
  { exerciseId: "ES-READ-001", subjectCode: "LV-ES", kind: "read_aloud" as const, title: "Ser y estar", level: "B1", text: "Mi hermana es médica y ahora está en Madrid por trabajo.", transcriptByDefault: true },
  {
    exerciseId: "ES-CONV-001", subjectCode: "LV-ES", kind: "conversation" as const, title: "Presentarse", level: "A2", text: "Responde a cada pregunta en voz alta con dos o tres frases.", transcriptByDefault: true,
    prompts: ["¿Cómo es tu ciudad?", "¿Qué haces en tu tiempo libre?"],
    modelAnswer: "Ejemplo: « Vivo en una ciudad pequeña cerca del mar. Los fines de semana juego al fútbol con mis amigos. »",
  },
];
