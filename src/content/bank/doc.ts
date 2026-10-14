// Banque DOC : cours de méthode, questions de méthode hors dossier, et dossiers documentaires (doc/).
import type { BankQuestion, LessonDef, SkillDef, SubjectBank } from "./helpers";
import { forSubject } from "./helpers";
import { DOC_PART_A } from "./doc/dossiers-a";
import { DOC_PART_B } from "./doc/dossiers-b";

const Q = forSubject("DOC");

// doc.reperage, doc.rapprochement et doc.synthese existent déjà dans le catalogue : seuls les deux nouveaux sont déclarés ici.
const SKILLS: SkillDef[] = [
  { id: "doc.methode", subjectCode: "DOC", domain: "Méthode", name: "Stratégie de l'épreuve", synonyms: ["methode", "strategie", "bareme", "gestion du temps", "pieges", "contresens", "generalisation abusive"] },
  { id: "doc.donnees", subjectCode: "DOC", domain: "Données", name: "Lire graphiques et tableaux", synonyms: ["graphique", "tableau", "donnees", "indice base 100", "points de pourcentage", "taux", "part", "evolution"] },
];

const LESSONS: LessonDef[] = [
  {
    skillId: "doc.reperage",
    title: "Repérer une information dans un dossier",
    objectives: ["Localiser rapidement le bon document", "Identifier auteur, date, nature et périmètre d'un document", "Justifier chaque réponse par un passage précis"],
    prerequisites: ["doc.methode"],
    regle:
      "Une question de repérage est un QCU à quatre propositions : une seule est juste, et la réponse se trouve dans un seul document, souvent nommé dans l'énoncé. Elle vaut tout ou rien. C'est la famille la plus rapide : vise trois minutes par question.\n\n" +
      "Tout repose sur la carte du dossier que tu as construite au début de l'épreuve. Pour chaque document, tu as noté son numéro, sa nature (article, tribune, entretien, rapport, extrait d'essai, tableau, graphique), son auteur, sa date et son idée centrale. Une question qui parle d'« enquête », de « syndicat » ou de « chiffres de 2025 » t'envoie ainsi directement au bon document.\n\n" +
      "Lis la question avant de relire le document et souligne ses mots discriminants : qui (quel auteur, quelle population), quoi (quelle grandeur), où, quand. Puis cherche le passage qui répond exactement. Dans un texte, les paragraphes servent de repères : la bonne réponse peut presque toujours être justifiée par « document 4, paragraphe 2 ».\n\n" +
      "Les distracteurs d'une question de repérage sont construits avec des éléments réels du dossier : un chiffre voisin qui concerne une autre population, une phrase d'un autre document, l'idée qu'un auteur rapporte pour la combattre, une valeur hors de la période demandée. C'est pourquoi la lecture approximative est punie : il faut vérifier que la proposition dit exactement la même chose que le passage, ni plus ni moins.\n\n" +
      "Dans un document en anglais, la méthode est identique : repère le mot clé de la question (under 25, entry-level, brine), lis la phrase qui le contient et celle qui suit, qui apporte souvent une nuance (however, yet, but).",
    formules:
      "Identité d'un document = numéro + nature + auteur + date + idée centrale\n" +
      "Mots discriminants = qui ? quoi ? où ? quand ? quelle unité ?\n" +
      "Justification = document n + paragraphe (ou ligne, colonne, point du graphique)\n" +
      "Opinion de l'auteur ≠ opinion qu'il rapporte\n" +
      "Mots de nuance : mais, pourtant, en revanche, toutefois ; but, however, yet, although",
    methode:
      "1. Lire l'énoncé et souligner qui, quoi, où, quand.\n" +
      "2. Ouvrir le document désigné (ou le retrouver grâce à la carte du dossier).\n" +
      "3. Lire le passage qui contient le mot clé, puis la phrase suivante.\n" +
      "4. Comparer chaque proposition au passage, mot à mot pour les chiffres et les populations.\n" +
      "5. Noter mentalement la référence (document, paragraphe) de la bonne réponse avant de valider.",
    exemple:
      "Énoncé : « Selon le document 4, quelle part des moins de 25 ans travaillant surtout à domicile estiment recevoir assez de retours ? » Propositions : 38 %, 61 %, 64 %, 62 %.\n\n" +
      "1. Mots discriminants : document 4, moins de 25 ans, surtout à domicile, assez de retours.\n" +
      "2. Le document 4 est en anglais ; le mot clé « under 25 » apparaît au paragraphe 2.\n" +
      "3. La phrase compare deux groupes : 38 % (mostly from home) et 61 % (in the office most days).\n" +
      "4. 64 % est au paragraphe 1 et concerne tous les répondants ; 62 % est un calcul (100 − 38) que le texte ne fait pas.\n" +
      "Réponse : 38 %, justifiée par le document 4, paragraphe 2.",
    erreur:
      "✗ Répondre avec ses connaissances personnelles → ✓ s'en tenir à ce que dit le document désigné.\n" +
      "✗ Prendre le premier chiffre qui ressemble → ✓ vérifier la population, la date et l'unité du chiffre.\n" +
      "✗ Attribuer à l'auteur une idée qu'il cite pour la réfuter → ✓ repérer les verbes de mise à distance (selon certains, on prétend que, il est faux de dire).\n" +
      "✗ Chercher la réponse dans un autre document que celui que l'énoncé désigne → ✓ rester dans le document nommé.\n" +
      "✗ Lire seulement la phrase qui contient le mot clé → ✓ lire aussi la suivante, qui nuance souvent.",
    approfondir:
      "Les questions de repérage rapportent autant que les autres pour beaucoup moins de temps : traite-les en premier pour engranger des points et pour te familiariser avec le dossier. Si une question de repérage te prend plus de cinq minutes, marque-la et reviens-y : tu as probablement ouvert le mauvais document. Dernier réflexe : une proposition qui contient un mot absolu (« toujours », « tous », « jamais ») est rarement fidèle à un texte nuancé.",
    cards: [
      ["Question de repérage : combien de documents mobilise-t-elle ?", "Un seul, souvent nommé dans l'énoncé.", false],
      ["Les cinq éléments de la carte d'un document", "Numéro, nature, auteur, date, idée centrale.", false],
      ["Piège du chiffre voisin", "Un chiffre réel du dossier, mais d'une autre population, période ou unité.", false],
      ["Temps visé pour une question de repérage", "Environ 3 minutes.", false],
    ],
  },
  {
    skillId: "doc.rapprochement",
    title: "Rapprocher et confronter des documents",
    objectives: ["Croiser plusieurs documents pour valider une affirmation", "Distinguer convergence, complément et contradiction", "Repérer les fausses causalités et les confusions d'auteur"],
    prerequisites: ["doc.reperage", "doc.donnees"],
    regle:
      "Les questions d'analyse sont des QCM : quatre à six propositions, plusieurs bonnes réponses, et une justification qui exige le plus souvent de croiser deux documents ou davantage. Ce sont les plus nombreuses et les plus rentables de l'épreuve.\n\n" +
      "Rapprocher, c'est établir la relation entre ce que disent les documents. Trois relations sont possibles. La convergence : deux documents disent la même chose (un texte affirme une inégalité, un tableau la chiffre). Le complément : l'un apporte ce que l'autre ne dit pas (un constat chez l'un, une solution chez l'autre). La contradiction : ils s'opposent, et il faut alors vérifier s'ils parlent vraiment de la même chose, car une différence de date, de territoire ou de définition suffit souvent à dissiper l'opposition apparente.\n\n" +
      "Chaque proposition se traite séparément, comme un vrai/faux : elle est juste si le dossier permet de l'établir, fausse s'il la dément ou ne permet pas de l'affirmer. « Le dossier ne le dit pas » est une raison suffisante pour ne pas cocher.\n\n" +
      "Les propositions fausses relèvent de quelques familles connues : contresens (le document dit l'inverse), causalité abusive (deux faits simultanés présentés comme cause et effet), généralisation (un résultat étendu à une autre population ou à tous), confusion d'auteur (une idée juste attribuée à la mauvaise personne), donnée hors périmètre (une information qui n'est pas dans le dossier, même vraie), confusion entre points et pourcentage.\n\n" +
      "Dans les questions qui demandent une idée présente « dans au moins deux documents », vérifie la condition pour chaque proposition : une idée juste mais isolée dans un seul document ne doit pas être cochée.",
    formules:
      "Proposition juste = établie par le dossier, avec une référence précise\n" +
      "Proposition fausse = démentie par le dossier OU non établie par lui\n" +
      "Convergence : A et B disent la même chose\n" +
      "Complément : A dit ce que B ne dit pas\n" +
      "Contradiction apparente : vérifier date, territoire, population, définition\n" +
      "Corrélation (variations simultanées) ≠ causalité (l'une provoque l'autre)",
    methode:
      "1. Lire la question et noter les documents à croiser.\n" +
      "2. Pour chaque proposition, identifier l'idée ou le chiffre clé et le document qui doit la prouver.\n" +
      "3. Vérifier dans ce document : juste, démentie ou non établie.\n" +
      "4. Classer l'erreur des propositions fausses (contresens, causalité, généralisation, auteur, hors périmètre, points/%).\n" +
      "5. Cocher seulement les propositions dont tu es sûr ; décider des cas douteux avec la règle du barème (cours « Stratégie de l'épreuve »).",
    exemple:
      "Dossier sur le travail. Proposition : « Le document 10 prouve que l'IA est la cause du recul des offres d'emploi pour débutants. »\n\n" +
      "1. Le document 10, paragraphe 3, constate bien un recul de 12 % des offres pour débutants dans les entreprises qui adoptent l'IA, par rapport à des entreprises comparables.\n" +
      "2. Mais le paragraphe 4 cite une économiste : « We cannot say that AI caused the hiring slowdown », car ces entreprises cherchaient aussi à réduire leurs coûts.\n" +
      "3. La proposition transforme une simultanéité en causalité : elle est fausse (causalité abusive).\n\n" +
      "Proposition voisine : « Les débutants sont à la fois les principaux bénéficiaires de l'outil et ceux dont les perspectives d'embauche se resserrent. » Paragraphes 2 et 3 : c'est juste, et c'est même l'idée la plus riche du document.",
    erreur:
      "✗ Conclure à une cause parce que deux évolutions sont simultanées → ✓ chercher si un document établit le lien, ou au contraire le dément.\n" +
      "✗ Cocher une idée vraie dans la vie réelle mais absente du dossier → ✓ ne cocher que ce que le dossier établit.\n" +
      "✗ Attribuer à un auteur une idée lue dans un autre document → ✓ vérifier le nom et le numéro du document pour chaque attribution.\n" +
      "✗ Voir une contradiction entre deux chiffres de périmètres différents → ✓ comparer d'abord territoire, période et population.\n" +
      "✗ Cocher toutes les propositions plausibles par prudence → ✓ une seule case fausse annule la question.",
    approfondir:
      "Les propositions justes sont souvent formulées de manière nuancée (« à la fois », « tous deux », « sans que »), tandis que les fausses contiennent des mots forts : « prouve », « toujours », « tous », « provoque », « donc ». Ce n'est pas une règle absolue, mais un bon signal d'alerte. Compte six à sept minutes par question d'analyse. Une proposition qui te paraît juste mais que tu ne parviens pas à rattacher à un paragraphe précis est, le plus souvent, une proposition à laisser vide.",
    cards: [
      ["Trois relations entre documents", "Convergence, complément, contradiction.", false],
      ["Corrélation", "Variations simultanées ; ne prouve pas une causalité.", false],
      ["Confusion d'auteur", "Idée juste attribuée à la mauvaise personne : réponse fausse.", false],
      ["Contradiction apparente : premier réflexe", "Vérifier date, territoire, population et définition.", false],
      ["Proposition « non établie par le dossier »", "Ne pas la cocher.", false],
    ],
  },
  {
    skillId: "doc.synthese",
    title: "Reconstruire une synthèse",
    objectives: ["Formuler la problématique d'un dossier", "Choisir un plan en deux parties fidèle aux documents", "Reconnaître une conclusion et une ouverture valables"],
    prerequisites: ["doc.rapprochement"],
    regle:
      "Les questions de synthèse sont des QCU : quatre propositions, une seule fidèle. Ensemble, elles reconstruisent le plan d'une synthèse : introduction (accroche et problématique), première partie et ses sous-parties, deuxième partie et ses sous-parties, conclusion (bilan et ouverture).\n\n" +
      "Une synthèse est fidèle quand elle reprend les idées principales de l'ensemble des documents, les organise et n'ajoute rien : ni information extérieure, ni opinion personnelle, ni conclusion que les documents ne permettent pas.\n\n" +
      "La problématique est la question que pose tout le dossier. Elle doit couvrir l'ensemble des documents (pas seulement deux ou trois), être neutre (ne pas trancher d'avance) et permettre une réponse en deux temps. Les mauvaises problématiques sont trop étroites, orientées, ou reposent sur une idée que les documents démentent.\n\n" +
      "Le plan en deux parties suit le plus souvent l'un de ces schémas : constat puis enjeux ou réponses ; avantages puis limites ; causes puis conséquences ; thèse puis antithèse nuancée. Chaque partie s'appuie sur des documents précis, et tous les documents importants trouvent leur place. Pour départager quatre plans, vérifie d'abord ce que chacun prête aux documents : un seul contresens suffit à éliminer un plan.\n\n" +
      "La conclusion comprend un bilan, qui répond à la problématique avec ce que le dossier établit, et une ouverture, qui élargit vers une question que le dossier soulève sans la trancher. Une ouverture qui avance une thèse nouvelle ou une mesure qu'aucun document ne défend n'est pas fidèle.",
    formules:
      "Introduction = accroche (fait marquant du dossier) + problématique (question qui couvre tout le dossier)\n" +
      "Partie = idée directrice + 2 sous-parties + documents cités\n" +
      "Plans types : constat / réponses ; avantages / limites ; causes / conséquences ; thèse / nuance\n" +
      "Conclusion = bilan (réponse fondée) + ouverture (question soulevée par le dossier)\n" +
      "Fidélité = rien d'ajouté, rien de déformé, rien d'important oublié",
    methode:
      "1. Relire la carte du dossier et regrouper les documents en deux ou trois blocs d'idées.\n" +
      "2. Formuler pour toi la tension principale du dossier (ce qui s'oppose ou se nuance).\n" +
      "3. Pour chaque proposition de plan, contrôler les références : chaque document cité dit-il ce que le plan lui prête ?\n" +
      "4. Éliminer les plans contenant un contresens, une causalité abusive ou une idée hors dossier.\n" +
      "5. Entre les plans restants, garder celui qui couvre le plus de documents de façon équilibrée.",
    exemple:
      "Dossier sur l'eau. Quatre plans sont proposés.\n" +
      "Plan A : « I. Une pénurie due à la baisse des pluies (doc 1). II. Le dessalement, solution universelle (doc 10). » Le document 1, paragraphe 2, dit qu'il ne pleut pas moins en moyenne sur l'année, et le document 10 limite le dessalement aux régions arides côtières : éliminé.\n" +
      "Plan B : « I. Les avantages des réserves (doc 6). II. Les avantages de la tarification progressive (doc 12). » Aucun contresens, mais deux documents seulement et aucun constat : trop partiel.\n" +
      "Plan C : « I. Une ressource sous tension : sécheresses et usages concurrents (docs 1 à 5). II. Des réponses en débat : produire et stocker, ou économiser et partager (docs 6 à 13). » Fidèle et complet : c'est la bonne réponse.",
    erreur:
      "✗ Choisir le plan qui correspond à son opinion → ✓ choisir celui que les documents permettent d'écrire.\n" +
      "✗ Retenir une problématique qui ne concerne que deux documents → ✓ vérifier qu'elle couvre l'ensemble du dossier.\n" +
      "✗ Accepter une conclusion qui transforme une conviction en preuve → ✓ le bilan ne contient que ce que le dossier établit.\n" +
      "✗ Prendre une ouverture qui propose une mesure absente du dossier → ✓ l'ouverture prolonge une question réellement soulevée.\n" +
      "✗ Juger un plan sur ses titres → ✓ contrôler les références de documents qu'il cite.",
    approfondir:
      "Garde les questions de synthèse pour la fin : quand tu as traité le repérage et l'analyse, tu connais le dossier et tu repères vite les contresens dans les plans. Compte trois à quatre minutes par question de synthèse. Astuce : les questions de synthèse d'un même dossier sont cohérentes entre elles ; la problématique que tu as retenue doit annoncer le plan, et la conclusion doit y répondre.",
    cards: [
      ["Les quatre éléments d'une synthèse", "Introduction (accroche + problématique), partie I, partie II, conclusion (bilan + ouverture).", false],
      ["Bonne problématique", "Couvre tout le dossier, neutre, appelle deux temps.", false],
      ["Premier critère pour éliminer un plan", "Un contresens sur un document cité.", false],
      ["Ouverture fidèle", "Une question soulevée par le dossier, pas une thèse nouvelle.", false],
    ],
  },
  {
    skillId: "doc.methode",
    title: "Stratégie de l'épreuve d'analyse documentaire",
    objectives: ["Organiser ses 120 minutes", "Appliquer le barème pour décider quoi cocher", "Déjouer les pièges classiques des propositions"],
    regle:
      "L'épreuve dure 120 minutes : un dossier d'une vingtaine de pages (une vingtaine de textes et une dizaine de graphiques, tableaux ou images, certains en anglais) et 20 questions, soit 6 minutes par question en moyenne. C'est la seule épreuve écrite où tu peux revenir sur une question déjà validée : profites-en.\n\n" +
      "Trois familles de questions. Le repérage : QCU, la réponse est dans un seul document. L'analyse : QCM de 4 à 6 propositions, plusieurs bonnes réponses, en croisant plusieurs documents. La synthèse : QCU qui reconstruit un plan en deux parties avec introduction et conclusion.\n\n" +
      "Le barème des QCM est décisif. Toutes les bonnes réponses cochées et aucune fausse : maximum. Au moins la moitié des bonnes réponses cochées sans aucune erreur : moitié des points. Une seule mauvaise réponse cochée : zéro pour la question. Il n'y a pas de points négatifs entre les questions. Conséquence : ne coche jamais une proposition douteuse si les propositions sûres te garantissent déjà la moitié des points, sauf si tu estimes qu'elle a plus d'une chance sur deux d'être juste. Pour les QCU, aucune pénalité : réponds toujours.\n\n" +
      "Ordre conseillé : 15 minutes de survol pour bâtir la carte du dossier ; les questions de repérage (environ 3 minutes chacune) ; les questions d'analyse (6 à 7 minutes) ; la synthèse en dernier (3 à 4 minutes), quand tu connais bien le dossier ; 10 minutes de contrôle final.\n\n" +
      "Les documents en anglais se traitent comme les autres : la question est en français, la réponse se trouve en repérant le mot clé. Ne traduis pas tout ; méfie-toi des faux amis (actually = en fait, eventually = finalement).\n\n" +
      "Cinq pièges reviennent dans les propositions fausses : le contresens (le document dit l'inverse) ; la généralisation abusive (un résultat étendu à une autre population, à un autre territoire ou à « tous ») ; la confusion d'auteur (une idée attribuée à la mauvaise personne, ou l'opinion qu'un auteur rapporte confondue avec la sienne) ; la donnée hors périmètre (une information absente du dossier, même vraie) ; la confusion entre points et pourcentage.",
    formules:
      "120 min ÷ 20 questions = 6 min par question en moyenne\n" +
      "Survol 15 min + repérage 20 min + analyse 60 min + synthèse 15 min + contrôle 10 min = 120 min\n" +
      "QCM : toutes justes sans erreur = 1 ; au moins la moitié sans erreur = 0,5 ; une case fausse = 0\n" +
      "Cocher une proposition douteuse seulement si sa probabilité d'être juste dépasse 1/2 (quand les sûres valent déjà 0,5)\n" +
      "QCU : pas de pénalité, toujours répondre\n" +
      "Pièges : contresens, généralisation abusive, confusion d'auteur, hors périmètre, points ≠ %",
    methode:
      "1. Survoler le sommaire, les titres, les sources et les graphiques (15 minutes) et noter une carte : numéro, nature, auteur, date, idée.\n" +
      "2. Lire les 20 questions en diagonale et repérer leur famille.\n" +
      "3. Traiter le repérage, puis l'analyse, puis la synthèse.\n" +
      "4. Marquer toute question qui dépasse 8 minutes et passer à la suivante.\n" +
      "5. Dans un QCM, cocher les sûres, puis décider des douteuses avec le barème.\n" +
      "6. Garder 10 minutes pour revenir sur les questions marquées et vérifier unités et bases.",
    exemple:
      "QCM à cinq propositions dont trois justes. Tu es sûr de deux propositions et tu hésites sur une troisième, avec une chance sur trois qu'elle soit juste.\n\n" +
      "Option 1 : cocher les deux sûres. Deux bonnes réponses sur trois, c'est au moins la moitié, sans erreur : 0,5 point garanti.\n" +
      "Option 2 : cocher aussi la douteuse. Avec une chance sur trois, tu as tout juste (1 point) ; avec deux chances sur trois, une case est fausse (0). Espérance : 1/3 ≈ 0,33 point.\n" +
      "Conclusion : coche seulement les deux sûres. Si tu étais sûr à plus de 50 % de la troisième, le calcul s'inverserait.\n\n" +
      "Attention : si tu n'es sûr que d'une proposition sur trois justes, une seule réponse ne fait pas la moitié de trois : tu n'obtiens rien en t'arrêtant là, et prendre un risque devient raisonnable.",
    erreur:
      "✗ Lire les vingt pages dans l'ordre avant de répondre → ✓ bâtir une carte en 15 minutes puis lire en fonction des questions.\n" +
      "✗ Cocher toutes les propositions plausibles « pour ne rien rater » → ✓ une case fausse annule la question.\n" +
      "✗ Laisser une question de synthèse sans réponse → ✓ un QCU ne coûte rien : réponds toujours.\n" +
      "✗ Rester bloqué un quart d'heure sur une question → ✓ marquer, avancer, revenir à la fin.\n" +
      "✗ Juger une proposition vraie parce qu'on la sait vraie dans la réalité → ✓ elle doit être établie par le dossier.\n" +
      "✗ Prendre l'opinion qu'un auteur rapporte pour la sienne → ✓ repérer les marques de mise à distance.",
    approfondir:
      "Pour un QCM, le calcul du barème dépend du nombre de bonnes réponses, que tu ne connais pas. Règle pratique : avec deux propositions sûres, tu as très probablement la moitié des points (sauf s'il y a cinq bonnes réponses ou plus) ; avec une seule, le risque devient plus raisonnable. Côté temps, chronomètre tes entraînements : la plupart des candidats perdent des points non par manque de compréhension, mais parce qu'ils n'atteignent pas les dernières questions. Enfin, l'analyse documentaire récompense la rigueur plus que la culture générale : un candidat qui justifie chaque case cochée par un paragraphe précis fait peu d'erreurs.",
    cards: [
      ["Temps moyen par question", "6 minutes (120 min pour 20 questions).", false],
      ["Barème QCM", "Tout juste = max ; au moins la moitié sans erreur = moitié ; une case fausse = 0.", false],
      ["Généralisation abusive", "Étendre un résultat à une autre population, un autre territoire ou à « tous ».", false],
      ["Donnée hors périmètre", "Information absente du dossier, même si elle est vraie.", false],
      ["Ordre de traitement conseillé", "Survol, repérage, analyse, synthèse, contrôle.", false],
    ],
  },
  {
    skillId: "doc.donnees",
    title: "Lire un graphique, un tableau, une carte",
    objectives: ["Identifier unité, base et champ d'une donnée", "Calculer une évolution en points et en pourcentage", "Interpréter un indice base 100 et une part"],
    prerequisites: ["doc.reperage"],
    regle:
      "Un chiffre n'a de sens qu'avec ses dimensions : l'unité (pour cent, milliers, euros, minutes), le champ (quelle population, quel territoire), la période et la base (pourcentage de quoi ?). Avant de lire les valeurs, lis le titre, la légende, les intitulés de lignes et de colonnes, les notes et la source.\n\n" +
      "Valeur, part, taux. Une valeur absolue est une quantité (30 milliards de mètres cubes). Une part rapporte une partie à un tout (l'agriculture représente 10 % des prélèvements). Un taux rapporte un événement à une population (taux de pertes, taux de chômage). Une part calculée sur une sous-population ne se lit pas comme une part de l'ensemble : 74 % des utilisateurs, qui sont 31 % des salariés, cela fait environ 23 % des salariés.\n\n" +
      "Évolutions. La variation absolue est valeur finale moins valeur initiale. La variation relative (taux de variation) est cette différence divisée par la valeur initiale. Quand les valeurs sont elles-mêmes des pourcentages, la différence s'exprime en points de pourcentage : de 8 % à 10 %, c'est +2 points, mais +25 %.\n\n" +
      "Indice base 100. Un indice vaut 100 l'année de base ; l'écart à 100 se lit directement en pourcentage par rapport à cette année (indice 81 : −19 % depuis la base). Entre deux autres années, il faut calculer : de 90 à 81, c'est −9 points d'indice mais −10 %. Un indice ne donne pas de niveau : deux séries en base 100 ne permettent pas de dire laquelle est la plus élevée.\n\n" +
      "Graphiques : vérifie l'échelle (un axe qui ne part pas de zéro amplifie les écarts), l'espacement des dates (des points tous les trois ans ne disent rien des années intermédiaires) et la nature de la série (moyenne, médiane, cumul). Une carte se lit avec sa légende : les classes de couleur regroupent des intervalles, et une couleur foncée ne dit pas la valeur exacte.",
    formules:
      "Variation absolue = valeur finale − valeur initiale\n" +
      "Taux de variation = (valeur finale − valeur initiale) ÷ valeur initiale × 100\n" +
      "Écart entre deux pourcentages = points de pourcentage (8 % → 10 % : +2 points, +25 %)\n" +
      "Coefficient multiplicateur = valeur finale ÷ valeur initiale (×1,25 = +25 % ; ×0,8 = −20 %)\n" +
      "Indice : I = valeur ÷ valeur de base × 100 ; variation entre I1 et I2 = (I2 − I1) ÷ I1\n" +
      "Part d'une sous-population dans l'ensemble = part de la sous-population × part dans celle-ci\n" +
      "Part = partie ÷ tout × 100",
    methode:
      "1. Lire titre, légende, unité, source et notes avant les valeurs.\n" +
      "2. Identifier la base de chaque pourcentage (de quoi est-ce une part ?).\n" +
      "3. Repérer la bonne case : intersection d'une ligne et d'une colonne, ou point daté.\n" +
      "4. Calculer l'évolution demandée : en points, en %, ou en coefficient.\n" +
      "5. Contrôler l'ordre de grandeur (une baisse de 9 points sur une base de 90 fait environ 10 %).\n" +
      "6. Vérifier que le champ du document correspond à celui de la proposition.",
    exemple:
      "Document : indice des surfaces de bureaux, base 100 en 2019 ; 90 en 2022, 81 en 2025.\n\n" +
      "1. Depuis 2019 : 81 − 100 = −19, soit −19 % (on lit directement l'écart à la base).\n" +
      "2. De 2022 à 2025 : 81 − 90 = −9 points d'indice. Taux : −9 ÷ 90 = −0,10, soit −10 %.\n" +
      "3. Contrôle : 90 × 0,9 = 81. La proposition « baisse de 9 % entre 2022 et 2025 » est donc fausse.\n\n" +
      "Deuxième exemple : 52 % des utilisateurs (12 % des salariés) en 2024, 37 % des utilisateurs (31 % des salariés) en 2026. Rapporté à l'ensemble : 0,12 × 0,52 ≈ 6 % puis 0,31 × 0,37 ≈ 11,5 %. La part baisse chez les utilisateurs mais augmente dans l'ensemble.",
    erreur:
      "✗ Dire « +2 % » quand un taux passe de 8 % à 10 % → ✓ dire +2 points, soit +25 %.\n" +
      "✗ Lire 90 → 81 sur un indice comme une baisse de 9 % → ✓ diviser par la valeur de départ : −10 %.\n" +
      "✗ Prendre une part des utilisateurs pour une part de l'ensemble → ✓ vérifier la base et multiplier les parts.\n" +
      "✗ Comparer les niveaux de deux séries en base 100 → ✓ un indice ne compare que des évolutions.\n" +
      "✗ Prendre une moyenne pour un minimum valable pour tous → ✓ une moyenne cache la dispersion.\n" +
      "✗ Conclure d'une tendance régulière sur des points espacés → ✓ on ne sait rien des années non représentées.",
    approfondir:
      "Calcul mental utile : diviser par la valeur initiale est souvent simple si l'on cherche un ordre de grandeur (9 ÷ 90 = 1/10). Les rapports « deux fois plus », « trois fois plus » se vérifient par multiplication (2 × 38 = 76, inférieur à 82 : « plus du double » est juste). Une hausse de 100 % est un doublement ; une baisse de 50 % est une division par deux ; mais +50 % puis −50 % ne ramène pas au point de départ (×1,5 × 0,5 = ×0,75). En tableau, commence par la ligne « Ensemble » ou « Total » : elle donne l'ordre de grandeur et sert de contrôle.",
    cards: [
      ["De 8 % à 10 %", "+2 points de pourcentage, soit +25 %.", false],
      ["Indice 100 → 81", "Baisse de 19 % depuis la base.", false],
      ["Indice 90 → 81", "−9 points d'indice, soit −10 %.", false],
      ["74 % des utilisateurs, qui sont 31 % des salariés", "Environ 23 % des salariés (0,74 × 0,31).", false],
      ["Ce qu'un indice base 100 ne permet pas", "Comparer des niveaux entre séries.", false],
    ],
  },
];

const m = (
  id: string,
  skill: string,
  family: string,
  difficulty: number,
  stem: string,
  opts: Parameters<typeof Q>[5],
  explanation: string,
  rule: string,
  hints: [string, string, string],
  lessonAnchor: string,
  reserved = false,
): BankQuestion =>
  Q(id, skill, family, difficulty, stem, opts, explanation, rule, {
    timeSec: 300,
    hints,
    lessonAnchor,
    ...(reserved ? { reserved: true } : {}),
  });

// Questions de méthode hors dossier : elles portent leurs propres données dans l'énoncé.
const METHOD_QUESTIONS: BankQuestion[] = [
  m(
    "B-DOC-METH-001", "doc.methode", "doc.methode.bareme", 3,
    "Une question d'analyse propose cinq affirmations, dont trois sont justes. Tu es certain de deux affirmations justes et tu hésites sur une troisième, à laquelle tu donnes une chance sur trois d'être juste. Barème : toutes les bonnes réponses sans erreur = 1 point ; au moins la moitié des bonnes réponses sans erreur = 0,5 point ; une mauvaise réponse cochée = 0. Quelle décision maximise ton espérance de points ?",
    [
      ["Cocher uniquement les deux affirmations sûres : 0,5 point garanti, contre une espérance d'environ 0,33 point en ajoutant la douteuse.", true, "Deux sur trois, c'est au moins la moitié : 0,5 garanti. Avec la douteuse : 1/3 × 1 + 2/3 × 0 ≈ 0,33."],
      ["Cocher les trois : une affirmation douteuse ne fait rien perdre.", false, "Oubli de la règle d'annulation : une case fausse cochée donne 0 à toute la question."],
      ["Ne rien cocher, pour éviter tout risque.", false, "Une absence de réponse vaut 0, alors que les deux affirmations sûres garantissent 0,5."],
      ["Cocher les cinq affirmations pour être sûr d'avoir les trois bonnes.", false, "Deux cases fausses seraient cochées : la question vaut 0."],
    ],
    "Avec deux bonnes réponses sur trois cochées et aucune erreur, tu atteins la moitié des bonnes réponses : 0,5 point certain. En ajoutant l'affirmation douteuse, tu gagnes 1 point avec une probabilité de 1/3 et 0 sinon : espérance 1/3 ≈ 0,33 point, inférieure à 0,5. Le calcul ne s'inverse que si la probabilité dépasse 1/2.",
    "Quand les cases sûres garantissent déjà la moitié des points, n'ajoute une case douteuse que si elle a plus d'une chance sur deux d'être juste.",
    ["Calcule d'abord ce que rapportent les deux cases sûres seules.", "Deux bonnes réponses sur trois : est-ce au moins la moitié ?", "Compare 0,5 à l'espérance 1/3 × 1 + 2/3 × 0."],
    "exemple",
    true,
  ),
  m(
    "B-DOC-METH-002", "doc.methode", "doc.methode.pieges", 1,
    "Un tableau indique : « Part des salariés déclarant manquer de temps pour se former : 35 % (enquête menée auprès de 120 entreprises industrielles d'une même région) ». Une proposition affirme : « Plus d'un tiers des salariés français manquent de temps pour se former. » Quel piège cette proposition illustre-t-elle ?",
    [
      ["Une généralisation abusive", true, "Le résultat d'un échantillon régional et industriel est étendu à l'ensemble des salariés français."],
      ["Un contresens", false, "Le sens n'est pas inversé : 35 % est bien « plus d'un tiers » ; c'est le champ qui est faussé."],
      ["Une confusion d'auteur", false, "Aucune idée n'est attribuée à une mauvaise personne."],
      ["Une confusion entre points et pourcentage", false, "Aucune évolution n'est calculée ici."],
    ],
    "Le chiffre est correctement lu (35 % > 1/3), mais il porte sur 120 entreprises industrielles d'une région. Le transposer à « tous les salariés français » change le champ : c'est une généralisation abusive.",
    "Un résultat ne vaut que pour le champ sur lequel il a été mesuré.",
    ["Le chiffre lui-même est-il mal lu ?", "Compare la population de l'enquête et celle de la proposition.", "La proposition étend le résultat à un champ beaucoup plus large."],
    "regle",
  ),
  m(
    "B-DOC-METH-003", "doc.methode", "doc.methode.auteur", 1,
    "Dans un dossier, une journaliste écrit : « Pour le sociologue Paul Arditi (personnage fictif), les plateformes de livraison émancipent les jeunes travailleurs. Je crois au contraire qu'elles organisent une précarité déguisée. » Quelle proposition est fidèle à ce texte ?",
    [
      ["La journaliste conteste l'idée que les plateformes émancipent les jeunes travailleurs.", true, "« Je crois au contraire » marque son désaccord avec la thèse qu'elle rapporte."],
      ["La journaliste estime que les plateformes émancipent les jeunes travailleurs.", false, "Confusion d'auteur : c'est l'opinion rapportée de Paul Arditi, que la journaliste rejette."],
      ["Paul Arditi voit dans les plateformes une précarité déguisée.", false, "Confusion d'auteur inverse : c'est l'avis de la journaliste."],
      ["Les sociologues voient dans les plateformes un facteur d'émancipation.", false, "Généralisation abusive : un seul sociologue est cité."],
    ],
    "Le texte juxtapose deux opinions : celle qu'on rapporte (« pour le sociologue… ») et celle de l'autrice (« je crois au contraire… »). Seule la première proposition attribue correctement la position de la journaliste.",
    "Distinguer l'opinion qu'un auteur rapporte de celle qu'il défend : repérer « selon », « pour », « au contraire ».",
    ["Combien d'opinions le texte contient-il ?", "Repère qui parle dans chaque phrase.", "« Au contraire » indique que la journaliste s'oppose à la première idée."],
    "erreur",
  ),
  m(
    "B-DOC-METH-004", "doc.donnees", "doc.donnees.points", 2,
    "Un tableau indique que le taux de chômage d'une région est passé de 8 % en 2023 à 10 % en 2025. Quelles affirmations sont exactes ? (plusieurs réponses possibles)",
    [
      ["Le taux de chômage a augmenté de 2 points de pourcentage.", true, "10 − 8 = 2 points."],
      ["Le taux de chômage a augmenté de 25 %.", true, "(10 − 8) ÷ 8 = 0,25, soit +25 %."],
      ["Le taux de chômage a augmenté de 2 %.", false, "Confusion points et pourcentage : l'écart est de 2 points, soit +25 % en relatif."],
      ["Le nombre de chômeurs a forcément augmenté de 25 %.", false, "Un taux rapporte les chômeurs à la population active, qui a pu varier : on ne peut pas conclure sur le nombre."],
    ],
    "L'écart entre deux pourcentages s'exprime en points (+2 points) ; la variation relative du taux est 2 ÷ 8 = +25 %. Le nombre de chômeurs dépend aussi de la population active, que le tableau ne donne pas.",
    "Différence de deux pourcentages = points ; variation relative = différence ÷ valeur initiale.",
    ["Deux pourcentages se comparent de deux façons.", "Calcule la différence, puis divise-la par la valeur de départ.", "Un taux n'est pas un effectif : que faudrait-il connaître pour parler du nombre de chômeurs ?"],
    "formules",
  ),
  m(
    "B-DOC-METH-005", "doc.donnees", "doc.donnees.indice", 2,
    "L'indice du prix de l'eau d'une ville (base 100 en 2015) vaut 125 en 2020 et 140 en 2025. Quelles affirmations sont exactes ? (plusieurs réponses possibles)",
    [
      ["Entre 2015 et 2025, le prix de l'eau a augmenté de 40 %.", true, "140 − 100 = 40 : l'écart à la base se lit directement en %."],
      ["Entre 2020 et 2025, le prix de l'eau a augmenté de 12 %.", true, "(140 − 125) ÷ 125 = 0,12."],
      ["Entre 2020 et 2025, le prix de l'eau a augmenté de 15 %.", false, "Confusion points d'indice et pourcentage : 15 points rapportés à 125 font 12 %."],
      ["En 2025, l'eau coûte 140 euros le mètre cube dans cette ville.", false, "Un indice n'est pas un prix : il mesure une évolution par rapport à 2015."],
      ["L'eau est plus chère dans cette ville que dans une autre ville dont l'indice (même base) vaut 130 en 2025.", false, "Deux indices ne comparent que des évolutions ; les niveaux de prix de départ peuvent être très différents."],
    ],
    "Par rapport à l'année de base, l'indice se lit directement : +40 %. Entre 2020 et 2025, il faut rapporter les 15 points à 125 : +12 %. Un indice ne donne ni un prix, ni une comparaison de niveaux entre villes.",
    "Indice : variation entre deux années = (I2 − I1) ÷ I1 ; un indice ne permet pas de comparer des niveaux.",
    ["Seul l'écart à 100 se lit directement en pourcentage.", "Pour 2020-2025, divise l'écart par la valeur de 2020.", "Que mesure un indice : un niveau ou une évolution ?"],
    "formules",
    true,
  ),
  m(
    "B-DOC-METH-006", "doc.donnees", "doc.donnees.base", 1,
    "Dans une entreprise de 400 salariés, 30 % télétravaillent ; parmi ces télétravailleurs, 40 % sont des cadres. Quelle part de l'ensemble des salariés de l'entreprise sont des cadres en télétravail ?",
    [
      ["12 %", true, "0,30 × 0,40 = 0,12, soit 48 salariés sur 400."],
      ["40 %", false, "Erreur de base : 40 % est une part des seuls télétravailleurs."],
      ["70 %", false, "Addition de deux pourcentages de bases différentes : 30 + 40 n'a pas de sens."],
      ["75 %", false, "Division inversée : 30 ÷ 40 ne correspond à aucune grandeur du problème."],
    ],
    "Les cadres en télétravail représentent 40 % des télétravailleurs, qui sont eux-mêmes 30 % des salariés : 0,40 × 0,30 = 0,12. Contrôle : 400 × 0,30 = 120 télétravailleurs, dont 120 × 0,40 = 48 cadres, et 48 ÷ 400 = 12 %.",
    "Une part d'une sous-population se ramène à l'ensemble en multipliant les deux parts.",
    ["Le 40 % ne porte pas sur les 400 salariés.", "Calcule d'abord le nombre de télétravailleurs.", "Prends 40 % de ces 120 télétravailleurs, puis rapporte à 400."],
    "regle",
  ),
];

export const BANK_DOC: SubjectBank = {
  skills: SKILLS,
  lessons: LESSONS,
  questions: [...METHOD_QUESTIONS, ...(DOC_PART_A.questions ?? []), ...(DOC_PART_B.questions ?? [])],
  documentSets: [...(DOC_PART_A.documentSets ?? []), ...(DOC_PART_B.documentSets ?? [])],
};
