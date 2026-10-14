// Compétences digitales : intelligence artificielle et numérique responsable (dig.ia).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.ia";

export const DIG_IA: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Numérique responsable", name: "Intelligence artificielle et numérique responsable", synonyms: ["intelligence artificielle", "ia generative", "chatbot", "apprentissage automatique", "machine learning", "biais", "hallucination", "deepfake", "hypertrucage", "sobriete numerique", "empreinte environnementale", "prompt"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Intelligence artificielle : fonctionnement, limites et usages responsables",
      objectives: ["Expliquer comment une IA apprend et génère du contenu", "Reconnaître hallucinations, biais et hypertrucages", "Utiliser et citer une IA générative de façon responsable", "Identifier les gestes de sobriété numérique efficaces"],
      prerequisites: ["dig.info"],
      regle:
        "Apprendre à partir de données. L'apprentissage automatique (machine learning) consiste à faire découvrir à un programme des régularités dans de grandes quantités de données d'entraînement, au lieu de lui écrire toutes les règles à la main. En apprentissage supervisé, les exemples sont étiquetés (des photos marquées « chat » ou « pas chat ») ; en apprentissage non supervisé, le programme regroupe lui-même des données non étiquetées.\n\nIA générative. Elle produit du texte, des images, du son ou de la vidéo à partir d'une consigne (prompt). Un grand modèle de langage génère sa réponse morceau par morceau, en prédisant la suite la plus probable d'après ce qu'il a appris : il produit un texte plausible, sans vérifier les faits. D'où les hallucinations : des réponses fausses mais assurées (citations, chiffres, références ou livres inventés).\n\nBiais. Une IA reproduit les biais de ses données d'entraînement : si les exemples sont déséquilibrés (un outil de tri de CV entraîné sur des recrutements passés surtout masculins, un système de reconnaissance faciale entraîné sur peu de visages de certains groupes), ses résultats le seront aussi. L'IA n'est donc pas neutre.\n\nBon usage. Vérifier toute information importante auprès d'une source fiable ; ne jamais saisir de données personnelles ou confidentielles dans un service grand public (elles peuvent être conservées ou réutilisées) ; respecter les règles de l'établissement ou de l'entreprise (l'IA est interdite pendant les épreuves du concours SESAME) ; signaler son usage : outil, date, ce qu'il a produit, et ce que tu en as fait. Le travail rendu reste sous ta responsabilité.\n\nHypertrucages (deepfakes). Ce sont des contenus générés ou modifiés par IA qui imitent une personne réelle (visage, voix). Des indices visuels existent (lèvres décalées, détails incohérents), mais les meilleurs n'en laissent aucun. Le réflexe reste la vérification de la source : le compte officiel de la personne, les médias reconnus. Le règlement européen sur l'IA (AI Act), entré en vigueur en 2024 et appliqué progressivement, prévoit notamment que les hypertrucages soient signalés comme tels.\n\nEnjeux environnementaux. En France, le numérique représente environ 4,4 % de l'empreinte carbone nationale (étude Ademe-Arcep, données 2022). La fabrication des terminaux (smartphones, ordinateurs, téléviseurs) en est la première source, devant les centres de données dont la part progresse fortement avec l'essor de l'IA, gourmande en électricité et en eau. Gestes de sobriété les plus efficaces : garder ses appareils plus longtemps, les faire réparer, acheter reconditionné ; puis préférer le Wi-Fi à la 4G/5G, adapter la qualité vidéo, éviter les usages inutiles de l'IA générative.",
      formules:
        "Apprentissage automatique : le programme apprend des régularités à partir de données d'entraînement\nSupervisé : exemples étiquetés · Non supervisé : regroupement sans étiquettes\nModèle de langage : prédit la suite la plus probable, ne vérifie pas les faits\nHallucination : réponse fausse présentée avec assurance\nBiais : données d'entraînement déséquilibrées → résultats déséquilibrés\nHypertrucage (deepfake) : contenu synthétique imitant une personne réelle\nNumérique en France ≈ 4,4 % de l'empreinte carbone · 1re source : fabrication des terminaux\nGeste n° 1 : allonger la durée de vie de ses appareils",
      methode:
        "1. Avant d'utiliser une IA : l'usage est-il autorisé dans ce contexte ? Les données saisies sont-elles publiques ?\n2. Formuler une consigne précise (rôle, tâche, format attendu, public).\n3. Lire la réponse de façon critique : chaque fait, chiffre, citation ou référence est à vérifier.\n4. Retravailler le contenu avec tes propres mots et tes propres sources.\n5. Signaler l'usage de l'IA (outil, date, partie concernée).",
      exemple:
        "Pour un exposé sur l'économie circulaire, Malik demande à un assistant conversationnel trois exemples d'entreprises françaises avec leurs chiffres. La réponse cite un « rapport de l'Ademe de 2023 » et un pourcentage précis. Malik cherche ce rapport sur le site de l'Ademe : il existe, mais le pourcentage n'y figure pas. C'est une hallucination partielle. Il garde le rapport comme source, cite le vrai chiffre qu'il y trouve, et indique en fin d'exposé : « Plan élaboré avec l'aide d'un assistant d'IA générative (octobre 2026) ; toutes les données ont été vérifiées dans les sources citées. »\n\nUne vidéo virale montre un chef d'État annonçant une mesure surprenante. Aucun média reconnu ne la reprend, elle n'est pas sur ses comptes officiels et le son paraît légèrement décalé : probable hypertrucage, on ne la partage pas.",
      erreur:
        "✗ Croire qu'une IA « sait » et vérifie ce qu'elle écrit → ✓ Elle produit un texte probable ; c'est à toi de vérifier.\n✗ Faire confiance à une référence parce qu'elle est précise → ✓ Les hallucinations sont souvent très précises : vérifie que la source existe et dit bien cela.\n✗ Penser qu'une IA est neutre et objective → ✓ Elle reproduit les biais de ses données d'entraînement.\n✗ Coller un document confidentiel dans un service d'IA grand public → ✓ Anonymiser ou utiliser un outil autorisé par l'organisation.\n✗ Croire que supprimer ses courriels est le geste écologique majeur → ✓ Le plus efficace est d'allonger la durée de vie de ses appareils.",
      approfondir:
        "Les questions sur l'IA récompensent l'esprit critique : la bonne réponse comporte presque toujours une vérification humaine, la protection des données ou la transparence sur l'usage. Méfie-toi des propositions absolues (« l'IA ne se trompe jamais », « l'IA est objective ») et de celles qui confondent IA et moteur de recherche : un moteur renvoie vers des pages existantes, une IA générative fabrique un texte nouveau. Lien avec le cours sur l'information : face à un contenu viral, les mêmes réflexes s'appliquent (source, date, recoupement, recherche inversée). Lien avec le RGPD : une IA entraînée sur des données personnelles reste soumise au règlement.",
      cards: [
        ["Hallucination d'une IA", "Réponse fausse ou inventée présentée avec assurance", true],
        ["Origine des biais d'une IA", "Des données d'entraînement déséquilibrées", false],
        ["Apprentissage supervisé", "Apprentissage à partir d'exemples étiquetés", true],
        ["Hypertrucage (deepfake)", "Contenu généré par IA imitant une personne réelle", true],
        ["Geste de sobriété numérique le plus efficace", "Garder ses appareils plus longtemps", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-IA-001", S, "dig.ia.limites", 1, "Un assistant conversationnel te recommande un livre, avec son titre, son auteur et son année de parution. Après recherche, ce livre n'existe pas. Comment appelle-t-on ce phénomène ?", [
      ["Une hallucination", true, "Le modèle a produit une information inventée mais plausible, présentée avec assurance."],
      ["Un biais", false, "Le biais désigne un déséquilibre systématique dû aux données, pas l'invention d'un fait."],
      ["Un hypertrucage", false, "L'hypertrucage imite une personne réelle (image, voix)."],
      ["Un hameçonnage", false, "L'hameçonnage est une escroquerie visant à voler des données."],
    ], "Un modèle de langage génère la suite la plus probable d'un texte : il peut fabriquer un titre, un auteur et une date cohérents mais faux. Toute référence fournie par une IA doit être vérifiée.", "Hallucination = contenu inventé présenté comme vrai.", {
      hints: ["L'information est fausse mais crédible.", "Le terme évoque une perception de quelque chose qui n'existe pas.", "Ce n'est ni un biais ni une arnaque."],
    }),
    q("B-DIG-IA-002", S, "dig.ia.fonctionnement", 2, "Comment un grand modèle de langage, comme ceux des assistants conversationnels, produit-il sa réponse ?", [
      ["En prédisant, morceau par morceau, la suite de texte la plus probable d'après son entraînement", true, "C'est le principe des modèles de langage : une génération statistique."],
      ["En consultant une base de faits vérifiés par des experts avant chaque réponse", false, "Le modèle ne vérifie pas les faits, d'où les hallucinations."],
      ["En copiant mot pour mot la page web la plus pertinente", false, "Il génère un texte nouveau, il ne recopie pas une page."],
      ["En comprenant la question exactement comme un être humain", false, "Il manipule des régularités statistiques du langage, sans compréhension humaine."],
    ], "Le modèle a appris sur d'immenses corpus de textes à prédire le morceau suivant (token). Sa réponse est plausible, souvent juste, mais rien ne garantit son exactitude : il faut la vérifier.", "Modèle de langage = prédiction de la suite probable, pas vérification.", {
      hints: ["Le modèle a été entraîné sur des textes.", "Il calcule ce qui a le plus de chances de venir ensuite.", "Il ne consulte aucune base de faits vérifiés."],
    }),
    q("B-DIG-IA-003", S, "dig.ia.biais", 2, "Un outil de présélection de CV, entraîné sur dix ans de recrutements passés majoritairement masculins, écarte plus souvent les candidatures de femmes. Quelle est la cause principale ?", [
      ["Un biais présent dans les données d'entraînement", true, "L'outil a appris à reproduire les choix déséquilibrés du passé."],
      ["Une panne du serveur qui héberge l'outil", false, "Une panne ne produit pas un écart systématique selon le genre."],
      ["Une hallucination ponctuelle", false, "Le phénomène est systématique et lié aux données, pas une invention isolée."],
      ["Un manque de puissance de calcul", false, "Plus de puissance reproduirait le même biais."],
    ], "Une IA apprend des régularités de ses données. Si les recrutements passés favorisaient les hommes, l'outil apprend ce critère comme s'il était pertinent. Il faut des données équilibrées et un contrôle humain des résultats.", "Données biaisées → IA biaisée.", {
      hints: ["D'où l'outil tire-t-il ses critères ?", "Les recrutements passés étaient déséquilibrés.", "L'IA reproduit ce qu'elle a appris."],
    }),
    q("B-DIG-IA-004", S, "dig.ia.fonctionnement", 2, "Pour apprendre à reconnaître des chats, on fournit à un programme des milliers de photos marquées « chat » ou « pas chat ». Quel type d'apprentissage est-ce ?", [
      ["L'apprentissage supervisé", true, "Les exemples sont étiquetés avec la bonne réponse."],
      ["L'apprentissage non supervisé", false, "Il travaille sur des données sans étiquettes."],
      ["La programmation de règles écrites à la main", false, "Ici, le programme découvre lui-même les critères à partir des exemples."],
      ["L'hypertrucage", false, "Un hypertrucage est un contenu synthétique imitant une personne."],
    ], "En apprentissage supervisé, chaque exemple d'entraînement est accompagné de la réponse attendue (étiquette). Le programme ajuste ses paramètres pour prédire correctement ces étiquettes, puis généralise à de nouvelles images.", "Exemples étiquetés = apprentissage supervisé.", {
      hints: ["Les photos portent-elles une indication de la bonne réponse ?", "Oui : chaque photo est étiquetée.", "On parle alors d'un apprentissage « encadré »."],
    }),
    q("B-DIG-IA-005", S, "dig.ia.usage", 2, "Pendant ton stage, ton tuteur te demande de résumer un contrat confidentiel d'un client. Quelle attitude est la bonne ?", [
      ["Ne pas coller le contrat dans un service d'IA grand public sans autorisation de l'entreprise", true, "Les données saisies peuvent être conservées ou réutilisées par le prestataire."],
      ["Coller le contrat dans l'IA, puisque le résumé sera plus rapide", false, "La confidentialité du client passe avant le gain de temps."],
      ["Coller le contrat après avoir seulement retiré le nom du client", false, "D'autres éléments peuvent rester confidentiels ou identifiants ; il faut l'accord de l'entreprise."],
      ["Publier le contrat en ligne pour demander de l'aide", false, "C'est une violation grave de la confidentialité."],
    ], "Un service d'IA grand public est un tiers : ce que tu y saisis peut être stocké hors de l'entreprise et parfois servir à l'entraînement. On utilise seulement les outils autorisés par l'organisation, ou on résume soi-même.", "Pas de données confidentielles ou personnelles dans une IA non autorisée.", {
      hints: ["À qui appartiennent les données du contrat ?", "Que devient ce que tu saisis dans un service en ligne ?", "La décision revient à l'entreprise, pas à toi seul."],
    }),
    q("B-DIG-IA-006", S, "dig.ia.usage", 1, "Tu as utilisé une IA générative pour t'aider à construire le plan de ton exposé. Que dois-tu faire ?", [
      ["Signaler cet usage et vérifier les informations, dans le respect des règles fixées par ton professeur", true, "La transparence et la vérification sont les deux règles du bon usage."],
      ["Ne rien dire, puisque le texte final est de toi", false, "Cacher l'usage d'une IA peut être assimilé à une fraude si l'enseignant l'encadre."],
      ["Présenter l'IA comme seule autrice de l'exposé", false, "Le travail rendu reste sous ta responsabilité."],
      ["Recopier sa réponse sans la relire, puisqu'elle est fiable", false, "Une IA peut halluciner : tout doit être relu et vérifié."],
    ], "Citer l'usage d'une IA, c'est indiquer l'outil, la date et ce qu'il a produit. On vérifie chaque fait et on retravaille le contenu avec ses propres mots. L'usage peut aussi être interdit : c'est le cas pendant les épreuves du concours.", "IA : transparence sur l'usage et vérification systématique.", {
      hints: ["Pense à l'honnêteté envers ton professeur.", "Pense aussi à la fiabilité du contenu produit.", "Deux réflexes : signaler et vérifier."],
    }),
    q("B-DIG-IA-007", S, "dig.ia.deepfake", 2, "Une vidéo partagée par un compte inconnu montre une ministre annonçant une mesure choquante. Le mouvement de ses lèvres semble légèrement décalé. Que fais-tu ?", [
      ["Vérifier sur ses comptes officiels et dans les médias reconnus avant toute diffusion", true, "Il peut s'agir d'un hypertrucage : la source officielle tranche."],
      ["La partager vite pour alerter tes proches", false, "On risque de propager une fausse information."],
      ["Considérer qu'elle est vraie, car on voit la ministre parler", false, "Les hypertrucages imitent justement le visage et la voix."],
      ["Considérer qu'elle est fausse, car toute vidéo politique est truquée", false, "Conclusion absolue sans vérification : il faut contrôler, pas présumer."],
    ], "Un hypertrucage (deepfake) imite le visage et la voix d'une personne réelle. Le décalage des lèvres est un indice, mais pas une preuve : on vérifie la source (comptes officiels, médias de référence, rubriques de vérification) avant de partager.", "Vidéo suspecte : vérifier la source avant de partager.", {
      hints: ["Quelle technologie permet de faire « parler » quelqu'un ?", "Un indice ne suffit pas à conclure.", "La confirmation vient des canaux officiels."],
    }),
    q("B-DIG-IA-008", S, "dig.ia.sobriete", 2, "Parmi ces gestes, lequel réduit le plus l'empreinte environnementale de ton usage du numérique ?", [
      ["Garder ton smartphone plus longtemps et le faire réparer", true, "La fabrication des terminaux est la première source d'impact du numérique."],
      ["Supprimer chaque semaine tes vieux courriels", false, "Geste utile mais très marginal comparé à la fabrication des appareils."],
      ["Changer chaque année de smartphone pour un modèle plus économe", false, "Chaque fabrication pèse bien plus que le gain de consommation."],
      ["Regarder tes vidéos en très haute définition en 4G", false, "Cela augmente au contraire les données transférées et l'énergie consommée."],
    ], "Selon l'Ademe et l'Arcep, la fabrication des terminaux est la première source de l'empreinte du numérique en France. Allonger leur durée de vie (réparer, acheter reconditionné) est donc le geste le plus efficace.", "Sobriété numérique : d'abord allonger la vie des appareils.", {
      hints: ["Quelle étape du cycle de vie d'un appareil pèse le plus ?", "La fabrication extrait des métaux et consomme beaucoup d'énergie.", "Le meilleur geste évite de fabriquer un nouvel appareil."],
    }),
    q("B-DIG-IA-009", S, "dig.ia.sobriete", 3, "Pourquoi l'essor de l'IA générative augmente-t-il l'impact environnemental du numérique ?", [
      ["Son entraînement et son usage mobilisent des centres de données gourmands en électricité, en eau de refroidissement et en matériel", true, "L'IA accroît fortement la demande de calcul dans les centres de données."],
      ["Parce que chaque réponse est imprimée sur papier", false, "Les réponses sont affichées à l'écran, pas imprimées."],
      ["Parce que l'IA fonctionne uniquement sur les smartphones", false, "Les calculs lourds sont faits dans des centres de données distants."],
      ["Elle n'a aucun impact, car tout est dématérialisé", false, "Le « dématérialisé » repose sur des infrastructures très matérielles."],
    ], "Entraîner un grand modèle puis répondre à des millions de requêtes demande d'énormes capacités de calcul : électricité, eau pour refroidir les serveurs, fabrication de processeurs spécialisés. Les études Ademe-Arcep observent une forte hausse de la part des centres de données.", "Le numérique « dématérialisé » repose sur des infrastructures matérielles.", {
      hints: ["Où sont réalisés les calculs d'une IA générative ?", "Ces lieux consomment de l'énergie et doivent être refroidis.", "Le dématérialisé n'est pas immatériel."],
      reserved: true,
    }),
    q("B-DIG-IA-010", S, "dig.ia.limites", 3, "Un assistant d'IA a répondu correctement à neuf questions d'histoire de suite. Peux-tu reprendre sans vérification sa dixième réponse dans ton devoir ?", [
      ["Non : chaque réponse est générée séparément et peut contenir une erreur, il faut la vérifier", true, "Les bonnes réponses passées ne garantissent pas l'exactitude de la suivante."],
      ["Oui, l'IA a prouvé qu'elle était fiable sur ce sujet", false, "Neuf réussites ne rendent pas la dixième certaine."],
      ["Oui, si la réponse est longue et détaillée", false, "Une hallucination peut être longue, précise et convaincante."],
      ["Oui, si l'IA affirme être sûre d'elle", false, "Le ton assuré n'est pas une garantie : les hallucinations sont souvent affirmées avec aplomb."],
    ], "Un modèle de langage ne contrôle pas la vérité de ce qu'il écrit : chaque réponse est une nouvelle génération probabiliste. La fiabilité se vérifie réponse par réponse, auprès de sources sérieuses.", "Chaque réponse d'une IA se vérifie, quelle que soit sa fiabilité passée.", {
      hints: ["Comment le modèle produit-il chaque réponse ?", "Il génère un texte probable, sans contrôle de vérité.", "La confiance se gagne réponse par réponse, par vérification."],
      reserved: true,
    }),
    q("B-DIG-IA-011", S, "dig.ia.fonctionnement", 1, "Lequel de ces outils relève de l'IA générative ?", [
      ["Un service qui crée une image à partir d'une description écrite", true, "Il génère un contenu nouveau à partir d'une consigne."],
      ["Un tableur qui calcule une somme avec =SOMME", false, "Il applique une règle de calcul fixe, sans rien générer de nouveau."],
      ["Un correcteur qui souligne les mots absents de son dictionnaire", false, "Il compare à une liste : aucun contenu n'est créé."],
      ["Une calculatrice qui affiche 12 × 7", false, "Simple calcul déterministe."],
    ], "Une IA générative crée un contenu original (texte, image, son, vidéo) à partir d'une consigne, en s'appuyant sur ce qu'elle a appris de très nombreux exemples. Les autres outils appliquent des règles fixes.", "IA générative = création de contenu à partir d'une consigne.", {
      hints: ["Cherche l'outil qui fabrique quelque chose de nouveau.", "Les autres appliquent une règle fixe.", "La consigne est écrite, le résultat est une image."],
    }),
  ],
};
