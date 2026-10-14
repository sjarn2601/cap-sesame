// Enjeux contemporains : technologie, numérique et régulation (act.tech).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.tech";
const q = maker(S);

export const ACT_TECH: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Numérique et intelligence artificielle : acteurs et régulation",
      objectives: ["Distinguer RGPD, DSA, DMA et AI Act", "Expliquer l'approche par les risques de l'AI Act et son calendrier", "Situer les grandes décisions de régulation de 2025-2026", "Relier innovation technologique, marchés et souveraineté"],
      prerequisites: ["act.ue"],
      regle:
        "L'Union européenne a construit un ensemble de règlements numériques, directement applicables dans tous les États. Le RGPD (2018) protège les données personnelles ; amendes jusqu'à 4 % du chiffre d'affaires mondial. Le DSA (règlement sur les services numériques) impose aux plateformes de lutter contre les contenus illicites et d'être transparentes (publicité, algorithmes, accès des chercheurs aux données) ; amendes jusqu'à 6 %. Le DMA (règlement sur les marchés numériques) encadre les « contrôleurs d'accès », très grandes plateformes comme Alphabet, Apple, Meta, Amazon ou Microsoft, pour garantir une concurrence loyale ; amendes jusqu'à 10 %, 20 % en cas de récidive.\n\nL'AI Act, règlement européen sur l'intelligence artificielle, est entré en vigueur le 1er août 2024. Il classe les systèmes selon leur risque : risque inacceptable (interdits, comme la notation sociale), haut risque (recrutement, éducation, santé, justice : obligations strictes), risque limité (obligations de transparence, par exemple signaler un contenu généré par IA), risque minimal. Les interdictions s'appliquent depuis le 2 février 2025, les règles sur les modèles d'IA à usage général depuis le 2 août 2025.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Le 29 juin 2026, le Conseil a adopté définitivement l'« omnibus numérique » sur l'IA : les obligations pour l'IA à haut risque, prévues le 2 août 2026, sont reportées au 2 décembre 2027 (2 août 2028 pour l'IA intégrée à des produits), et les systèmes générant des images intimes non consenties seront interdits à partir de décembre 2026. Le 5 décembre 2025, la Commission a infligé à X la première amende au titre du DSA (120 millions d'euros) ; en avril 2025, Apple (500 millions) et Meta (200 millions) avaient été sanctionnés au titre du DMA. En France, le Parlement a voté le 21 juillet 2026 l'interdiction des réseaux sociaux aux moins de 15 ans. Le sommet mondial sur l'IA s'est tenu à New Delhi en février 2026, après celui de Paris en février 2025.",
      formules:
        "RGPD (2018) : données personnelles, jusqu'à 4 % du CA mondial\nDSA : contenus et transparence des plateformes, jusqu'à 6 %\nDMA : contrôleurs d'accès et concurrence, jusqu'à 10 % (20 % en récidive)\nAI Act : en vigueur le 1er août 2024 · interdictions 2 février 2025 · IA à usage général 2 août 2025 · haut risque reporté au 2 décembre 2027\nQuatre niveaux de risque : inacceptable, haut, limité, minimal",
      methode:
        "1. Identifier l'objet du texte : données (RGPD), contenus (DSA), concurrence (DMA), IA (AI Act).\n2. Distinguer adoption, entrée en vigueur et application de chaque obligation.\n3. Pour une sanction : autorité, entreprise, montant, fondement juridique.\n4. Pour un usage d'IA, se demander dans quel niveau de risque il entre.",
      exemple:
        "Question : « Une entreprise utilise une IA pour trier automatiquement les CV de candidats. Dans quelle catégorie de l'AI Act cela entre-t-il ? »\nRaisonnement : le recrutement fait partie des domaines sensibles listés par le règlement, car une erreur peut priver une personne d'un emploi. C'est un système à haut risque : documentation, contrôle humain et gestion des risques seront exigés, à partir du 2 décembre 2027 depuis l'omnibus de 2026.",
      erreur:
        "✗ Confondre DSA et DMA → ✓ DSA : services et contenus ; DMA : marchés et concurrence.\n✗ Croire que l'AI Act s'applique en bloc depuis 2024 → ✓ Application échelonnée, et report du haut risque à fin 2027.\n✗ Penser qu'un règlement européen doit être transposé → ✓ Il s'applique directement ; c'est la directive qui se transpose.\n✗ Attribuer la première amende du DSA à Meta → ✓ C'est X, en décembre 2025.",
      approfondir:
        "Moyen mnémotechnique : DSA = S comme services (ce que l'on voit sur la plateforme), DMA = M comme marchés (la concurrence entre entreprises). Les plafonds d'amende augmentent de 4 % (RGPD) à 6 % (DSA) puis 10 % (DMA). Lien avec act.societe : l'interdiction française des réseaux sociaux avant 15 ans doit rester compatible avec le DSA. Lien avec act.entreprise : la course à l'IA explique la valorisation record de Nvidia.",
      cards: [
        ["DSA", "Règlement sur les services numériques : contenus illicites, transparence, amendes jusqu'à 6 %", false],
        ["DMA", "Règlement sur les marchés numériques : contrôleurs d'accès, amendes jusqu'à 10 %", false],
        ["Nouvelle date des obligations pour l'IA à haut risque", "2 décembre 2027 (omnibus adopté le 29 juin 2026)", false],
        ["Première amende au titre du DSA", "X, 120 millions d'euros, 5 décembre 2025", false],
        ["Niveaux de risque de l'AI Act", "Inacceptable, haut, limité, minimal", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-TECH-001", "ai-act", 1, "Sur quel principe repose le règlement européen sur l'intelligence artificielle (AI Act) ?", [
      ["Une approche par niveaux de risque, des usages interdits aux usages à risque minimal", true, "Quatre niveaux : inacceptable, haut, limité, minimal."],
      ["L'interdiction de toute IA générative dans l'UE", false, "Les IA génératives sont autorisées, avec des obligations de transparence."],
      ["Une taxe sur les entreprises d'IA", false, "Le règlement ne crée pas d'impôt."],
      ["La création d'une IA publique européenne unique", false, "Le texte régule les usages, il ne crée pas de système."],
    ], "L'AI Act adapte les obligations au risque : interdiction de la notation sociale par exemple, obligations strictes pour le haut risque (recrutement, santé…), transparence pour le risque limité, liberté pour le risque minimal.", "AI Act : régulation proportionnée au niveau de risque.", ["Le texte gradue les obligations.", "Certains usages sont interdits, d'autres libres.", "Le mot clé est « risque »."], { a: "formules" }),
    q("B-ACT-TECH-002", "ai-act", 2, "Qu'a changé l'« omnibus numérique » adopté définitivement par le Conseil de l'UE le 29 juin 2026 ?", [
      ["Il reporte au 2 décembre 2027 les obligations applicables aux systèmes d'IA à haut risque", true, "Elles devaient s'appliquer le 2 août 2026."],
      ["Il abroge entièrement l'AI Act", false, "Le règlement est simplifié, pas supprimé."],
      ["Il interdit les modèles d'IA à usage général", false, "Ces modèles restent autorisés et encadrés depuis août 2025."],
      ["Il avance au 1er janvier 2026 toutes les obligations", false, "Le texte reporte, il n'avance pas."],
    ], "L'omnibus simplifie l'AI Act : haut risque autonome reporté au 2 décembre 2027, haut risque intégré à des produits au 2 août 2028 ; il ajoute l'interdiction des systèmes générant des contenus intimes non consentis à partir de décembre 2026.", "Omnibus IA (juin 2026) : haut risque reporté au 2 décembre 2027.", ["Le texte vise à simplifier.", "Il touche au calendrier.", "Le nouveau délai court jusqu'à fin 2027."], { n: ["ai-act-omnibus"] }),
    q("B-ACT-TECH-003", "ai-act", 2, "Selon l'AI Act, dans quelle catégorie de risque entre un logiciel d'IA qui trie automatiquement les candidatures à un emploi ?", [
      ["Haut risque", true, "Le recrutement fait partie des domaines sensibles listés."],
      ["Risque inacceptable, donc interdit", false, "Le tri des CV n'est pas interdit, mais strictement encadré."],
      ["Risque minimal, sans obligation", false, "L'impact sur l'accès à l'emploi justifie des obligations."],
      ["Le règlement ne s'applique pas aux entreprises privées", false, "Il s'applique aux acteurs publics comme privés."],
    ], "L'annexe III de l'AI Act range parmi les usages à haut risque l'emploi et la gestion des travailleurs (recrutement, évaluation). Ces systèmes devront respecter des exigences de qualité des données, de documentation et de contrôle humain.", "Recrutement par IA : système à haut risque.", ["L'usage touche à l'accès à l'emploi.", "Il n'est pas interdit pour autant.", "Il est soumis aux obligations les plus lourdes parmi les usages autorisés."], { n: ["ai-act-omnibus"], a: "exemple" }),
    q("B-ACT-TECH-004", "dsa-dma", 1, "Quel règlement européen vise principalement à garantir une concurrence loyale face aux « contrôleurs d'accès » du numérique ?", [
      ["Le DMA, règlement sur les marchés numériques", true, "Il impose des obligations aux très grandes plateformes."],
      ["Le DSA, règlement sur les services numériques", false, "Il porte sur les contenus et la transparence des plateformes."],
      ["Le RGPD", false, "Il protège les données personnelles."],
      ["L'AI Act", false, "Il régule les systèmes d'intelligence artificielle."],
    ], "Le Digital Markets Act désigne des contrôleurs d'accès (Alphabet, Apple, Meta, Amazon, Microsoft, ByteDance, Booking…) et leur interdit certaines pratiques, comme favoriser leurs propres services.", "DMA = concurrence et contrôleurs d'accès ; DSA = contenus et transparence.", ["Le M du sigle est la clé.", "M comme « markets ».", "Ce texte vise la concurrence."], { a: "approfondir" }),
    q("B-ACT-TECH-005", "dsa-dma", 1, "Quelle plateforme a reçu, le 5 décembre 2025, la première amende infligée au titre du DSA ?", [
      ["X", true, "120 millions d'euros pour manquements à la transparence."],
      ["TikTok", false, "Visée par des enquêtes, mais pas la première sanctionnée."],
      ["Meta", false, "Sanctionnée en avril 2025 au titre du DMA, pas du DSA."],
      ["Apple", false, "Sanctionnée au titre du DMA."],
    ], "La Commission européenne a reproché à X une coche bleue trompeuse, un registre publicitaire défaillant et un accès insuffisant des chercheurs aux données. Amende : 120 millions d'euros.", "Première amende DSA : X, 120 millions d'euros (décembre 2025).", ["La plateforme appartient à Elon Musk.", "Elle s'appelait Twitter.", "La coche bleue était en cause."], { n: ["dsa-amende-x"] }),
    q("B-ACT-TECH-006", "dsa-dma", 2, "Quel était l'un des griefs retenus contre X dans l'amende de 120 millions d'euros prononcée au titre du DSA ?", [
      ["Une coche bleue « certifiée » trompeuse, attribuée contre paiement sans vérification d'identité", true, "Pratique jugée trompeuse pour les utilisateurs."],
      ["Un abus de position dominante sur la publicité en ligne", false, "Grief relevant du droit de la concurrence, pas du DSA."],
      ["Une fuite massive de données bancaires", false, "Relèverait du RGPD."],
      ["Le refus de payer l'impôt sur les sociétés en France", false, "Question fiscale, étrangère au DSA."],
    ], "Les trois griefs : coche bleue trompeuse, registre publicitaire défaillant (identité des annonceurs masquée), accès insuffisant des chercheurs aux données publiques.", "DSA : obligations de transparence des plateformes envers les utilisateurs et les chercheurs.", ["Le DSA porte sur la transparence.", "Un symbole de certification est en cause.", "Il s'obtient en payant un abonnement."], { n: ["dsa-amende-x"], r: true }),
    q("B-ACT-TECH-007", "rgpd", 1, "Quel est l'objet principal du RGPD, appliqué depuis 2018 ?", [
      ["La protection des données personnelles", true, "Règlement général sur la protection des données."],
      ["La lutte contre les contenus haineux en ligne", false, "Objet du DSA."],
      ["La concurrence entre plateformes", false, "Objet du DMA."],
      ["La sécurité des systèmes d'IA", false, "Objet de l'AI Act."],
    ], "Le RGPD encadre la collecte et le traitement des données personnelles (consentement, droit d'accès, droit à l'effacement…) ; en France, la CNIL veille à son application.", "RGPD : protection des données personnelles, depuis le 25 mai 2018.", ["Le sigle contient « données ».", "En France, la CNIL l'applique.", "Il s'applique depuis mai 2018."]),
    q("B-ACT-TECH-008", "droit", 2, "Pourquoi les règlements numériques européens (DSA, DMA, AI Act) s'appliquent-ils de la même façon dans tous les États membres ?", [
      ["Parce qu'un règlement européen est directement applicable, sans transposition", true, "À la différence d'une directive."],
      ["Parce que chaque État les a recopiés dans une loi identique", false, "C'est le mécanisme de la directive, qui doit être transposée."],
      ["Parce que la Cour de justice les a votés", false, "La Cour juge, elle ne vote pas les textes."],
      ["Parce qu'ils ont été adoptés par référendum européen", false, "Il n'existe pas de référendum européen."],
    ], "Le règlement est obligatoire dans tous ses éléments et directement applicable dans chaque État. La directive fixe un objectif que chaque État transpose dans son droit.", "Règlement = directement applicable ; directive = à transposer.", ["Il existe deux grands types d'actes européens.", "L'un doit être transposé, l'autre non.", "Les textes numériques cités sont des règlements."], { a: "erreur" }),
    q("B-ACT-TECH-009", "reseaux", 1, "Quelle mesure le Parlement français a-t-il adoptée le 21 juillet 2026 ?", [
      ["L'interdiction des réseaux sociaux aux moins de 15 ans", true, "Loi portée par la députée Laure Miller."],
      ["L'interdiction de l'intelligence artificielle à l'école", false, "Aucune loi de ce type."],
      ["La fermeture de TikTok en France", false, "Aucune plateforme n'est fermée par la loi."],
      ["La gratuité d'Internet pour les lycéens", false, "Mesure inventée."],
    ], "La loi interdit l'accès aux réseaux sociaux avant 15 ans et prévoit l'interdiction du téléphone portable au lycée. Sa mise en œuvre dépend de la vérification de l'âge et de sa compatibilité avec le DSA.", "Juillet 2026 : la France interdit les réseaux sociaux aux moins de 15 ans.", ["La mesure protège les mineurs.", "Elle porte sur les réseaux sociaux.", "Le seuil d'âge est de 15 ans."], { n: ["reseaux-sociaux-15-ans"] }),
    q("B-ACT-TECH-010", "reseaux", 2, "Quel pays avait, avant la France, adopté une interdiction des réseaux sociaux pour les mineurs, fixée à 16 ans ?", [
      ["L'Australie", true, "Première loi de ce type au monde."],
      ["Les États-Unis", false, "Aucune interdiction fédérale de ce type."],
      ["La Chine", false, "Elle limite le temps d'écran des mineurs mais n'a pas cette loi."],
      ["L'Allemagne", false, "Aucune interdiction comparable."],
    ], "L'Australie a été pionnière avec l'interdiction des réseaux sociaux aux moins de 16 ans. La France a adopté en juillet 2026 sa propre interdiction, avec un seuil de 15 ans.", "Australie : interdiction avant 16 ans ; France : avant 15 ans.", ["Le pays est en Océanie.", "Il est membre du Commonwealth.", "Il copréside aussi la COP31 à sa manière."], { n: ["reseaux-sociaux-15-ans"], r: true }),
    q("B-ACT-TECH-011", "ai-act", 1, "Depuis quand les pratiques d'IA jugées inacceptables (comme la notation sociale) sont-elles interdites dans l'UE ?", [
      ["Depuis le 2 février 2025", true, "Première étape d'application de l'AI Act."],
      ["Depuis le 2 décembre 2027", false, "Nouvelle date des obligations pour le haut risque."],
      ["Depuis le 25 mai 2018", false, "Date d'application du RGPD."],
      ["Elles ne sont pas encore interdites", false, "Les interdictions s'appliquent déjà."],
    ], "L'AI Act, en vigueur depuis le 1er août 2024, s'applique par étapes : interdictions le 2 février 2025, modèles à usage général le 2 août 2025, haut risque désormais le 2 décembre 2027.", "Interdictions de l'AI Act : applicables depuis le 2 février 2025.", ["Ce fut la première obligation appliquée.", "Six mois après l'entrée en vigueur.", "Au début de 2025."], { n: ["ai-act-omnibus"], a: "formules" }),
    q("B-ACT-TECH-012", "sommets", 2, "Quelle ville a accueilli en février 2026 le sommet international sur l'impact de l'intelligence artificielle, après Paris en 2025 ?", [
      ["New Delhi", true, "India AI Impact Summit, février 2026."],
      ["Londres", false, "Le Royaume-Uni avait organisé le premier sommet à Bletchley Park en 2023."],
      ["Séoul", false, "Sommet de 2024."],
      ["San Francisco", false, "Aucun sommet de cette série n'y a eu lieu."],
    ], "Après Bletchley Park (2023), Séoul (2024) et Paris (février 2025), l'Inde a accueilli à New Delhi en février 2026 un sommet consacré à l'impact de l'IA (India AI Impact Summit).", "Sommets sur l'IA : Bletchley (2023), Séoul (2024), Paris (2025), New Delhi (2026).", ["Le pays hôte est le plus peuplé du monde.", "C'est une capitale asiatique.", "Le pays présidait aussi les BRICS en 2026."]),
    q("B-ACT-TECH-013", "dsa-dma", 3, "Quel est le plafond des amendes prévu par le DMA en cas de première infraction ?", [
      ["10 % du chiffre d'affaires mondial", true, "Jusqu'à 20 % en cas de récidive."],
      ["4 % du chiffre d'affaires mondial", false, "Plafond du RGPD."],
      ["6 % du chiffre d'affaires mondial", false, "Plafond du DSA."],
      ["1 million d'euros", false, "Montant forfaitaire sans rapport avec la taille des entreprises visées."],
    ], "Les plafonds croissent avec la gravité perçue : RGPD 4 %, DSA 6 %, DMA 10 % (20 % en récidive). En avril 2025, Apple et Meta ont reçu des amendes de 500 et 200 millions d'euros au titre du DMA.", "Plafonds d'amende : RGPD 4 %, DSA 6 %, DMA 10 % (20 % en récidive).", ["Les trois textes ont des plafonds différents.", "Le DMA a le plafond le plus élevé.", "Il double en cas de récidive."], { a: "formules" }),
  ],
};
