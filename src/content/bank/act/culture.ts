// Enjeux contemporains : arts, médias, littérature et cinéma (act.culture).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.culture";
const q = maker(S);

export const ACT_CULTURE: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Grands prix culturels et paysage médiatique",
      objectives: ["Connaître les grands prix littéraires et cinématographiques et leur calendrier", "Retenir les palmarès 2025-2026", "Situer les institutions des médias en France", "Éviter les confusions entre prix voisins"],
      regle:
        "Chaque prix a son calendrier, ce qui aide à dater les questions. Le prix Nobel de littérature est attribué début octobre par l'Académie suédoise. Le prix Goncourt, créé en 1903 et doté symboliquement de 10 euros, est décerné début novembre par l'Académie Goncourt, le même jour que le prix Renaudot ; viennent ensuite le Femina, le Médicis et le prix de l'Académie française. Le Festival de Cannes se tient en mai : sa récompense suprême est la Palme d'or, suivie du Grand Prix et du prix du jury. Les César, équivalent français des Oscars, sont remis en février ou mars par l'Académie des arts et techniques du cinéma ; les Oscars américains sont remis à Los Angeles au printemps. La Mostra de Venise (Lion d'or) a lieu fin août-début septembre, la Berlinale (Ours d'or) en février.\n\nEn France, l'Arcom (Autorité de régulation de la communication audiovisuelle et numérique), née en 2022 de la fusion du CSA et de la Hadopi, régule l'audiovisuel et attribue les fréquences de la TNT. L'audiovisuel public comprend notamment France Télévisions, Radio France, France Médias Monde, Arte et l'INA.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Le Nobel de littérature 2026 a été attribué le 8 octobre à la poétesse et essayiste canadienne Anne Carson. Le Goncourt 2025 est allé à Laurent Mauvignier pour « La Maison vide », le Renaudot 2025 à Adélaïde de Clermont-Tonnerre pour « Je voulais vivre » ; le Goncourt 2026 sera annoncé début novembre 2026. Aux César 2026 (26 février), « L'Attachement » de Carine Tardieu a été sacré meilleur film. À Cannes (12-23 mai 2026), le jury présidé par Park Chan-wook a remis la Palme d'or à « Fjord » du Roumain Cristian Mungiu, déjà palmé en 2007. Le Concours Eurovision 2026, à Vienne, a été remporté par la Bulgarie ; la France a terminé onzième.",
      formules:
        "Nobel de littérature : début octobre · Goncourt et Renaudot : début novembre · César : février · Cannes : mai · Venise : fin août\nNobel de littérature 2026 : Anne Carson (Canada)\nGoncourt 2025 : Laurent Mauvignier, « La Maison vide » · Renaudot 2025 : Adélaïde de Clermont-Tonnerre, « Je voulais vivre »\nCésar 2026 du meilleur film : « L'Attachement », Carine Tardieu\nPalme d'or 2026 : « Fjord », Cristian Mungiu (Roumanie) · président du jury : Park Chan-wook\nArcom : fusion du CSA et de la Hadopi (2022)",
      methode:
        "1. Situer le prix dans le calendrier pour éliminer les options impossibles.\n2. Associer chaque prix à son institution (Académie Goncourt, Académie suédoise, Académie des César).\n3. Pour un film, retenir le titre, le réalisateur et sa nationalité.\n4. Méfie-toi des lauréats des années précédentes, distracteurs favoris.",
      exemple:
        "Question : « Quel cinéaste a obtenu la Palme d'or 2026 ? »\nRaisonnement : le festival a eu lieu du 12 au 23 mai 2026 ; la Palme d'or est allée à « Fjord » de Cristian Mungiu. Distracteurs probables : le Grand Prix (« Minotaure » d'Andreï Zviaguintsev), le président du jury (Park Chan-wook) ou la Palme 2025 (Jafar Panahi pour « Un simple accident »). Indice utile : Mungiu avait déjà reçu la Palme en 2007.",
      erreur:
        "✗ Confondre Palme d'or et Grand Prix → ✓ La Palme est la plus haute récompense ; le Grand Prix vient juste après.\n✗ Placer le Goncourt en octobre → ✓ Il est décerné début novembre ; c'est le Nobel qui tombe en octobre.\n✗ Confondre président du jury et lauréat → ✓ Park Chan-wook présidait le jury, il n'a pas été primé.\n✗ Croire que le Nobel de littérature 2026 est revenu à un Français → ✓ Anne Carson est canadienne.",
      approfondir:
        "Retiens un trio par année : Nobel, Goncourt, Palme d'or. Pour le concours d'avril 2027, les palmarès à jour seront ceux du Goncourt 2026 (novembre 2026), des César 2027 (début 2027) et du Nobel 2026. Pense à consulter le palmarès du Goncourt 2026 dès sa publication. Lien avec act.tech : les plateformes de streaming et les réseaux sociaux transforment la diffusion des œuvres et l'économie des médias.",
      cards: [
        ["Nobel de littérature 2026", "Anne Carson, poétesse canadienne", true],
        ["Goncourt 2025", "Laurent Mauvignier, « La Maison vide »", true],
        ["Palme d'or 2026", "« Fjord », Cristian Mungiu", true],
        ["César du meilleur film 2026", "« L'Attachement », Carine Tardieu", false],
        ["Arcom", "Régulateur de l'audiovisuel et du numérique, fusion du CSA et de la Hadopi en 2022", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-CULT-001", "nobel", 1, "À qui le prix Nobel de littérature 2026 a-t-il été attribué ?", [
      ["À la Canadienne Anne Carson", true, "Annonce du 8 octobre 2026."],
      ["Au Hongrois László Krasznahorkai", false, "Lauréat 2025."],
      ["À la Sud-Coréenne Han Kang", false, "Lauréate 2024."],
      ["À la Française Annie Ernaux", false, "Lauréate 2022."],
    ], "L'Académie suédoise a récompensé Anne Carson, poétesse, essayiste et helléniste canadienne née en 1950 à Toronto, dont l'œuvre mêle poésie, essai et traduction de la littérature grecque antique.", "Nobel de littérature 2026 : Anne Carson (Canada).", ["La lauréate est nord-américaine.", "Elle est poétesse et spécialiste du grec ancien.", "Elle est canadienne."], { n: ["nobel-litterature-2026"] }),
    q("B-ACT-CULT-002", "nobel", 2, "Quelle est la nationalité d'Anne Carson, prix Nobel de littérature 2026 ?", [
      ["Canadienne", true, "Elle est née à Toronto."],
      ["Américaine", false, "Elle a enseigné aux États-Unis mais est canadienne."],
      ["Britannique", false, "Elle écrit en anglais mais n'est pas britannique."],
      ["Irlandaise", false, "Aucun lien de nationalité."],
    ], "Anne Carson, née en 1950 au Canada, écrit en anglais ; elle a longtemps enseigné les lettres classiques dans des universités nord-américaines.", "Anne Carson est canadienne.", ["Elle écrit en anglais.", "Son pays a deux langues officielles.", "Sa capitale est Ottawa."], { n: ["nobel-litterature-2026"], r: true }),
    q("B-ACT-CULT-003", "goncourt", 1, "Quel auteur a reçu le prix Goncourt 2025, et pour quel roman ?", [
      ["Laurent Mauvignier, pour « La Maison vide »", true, "Prix décerné le 4 novembre 2025."],
      ["Kamel Daoud, pour « Houris »", false, "Goncourt 2024."],
      ["Jean-Baptiste Andrea, pour « Veiller sur elle »", false, "Goncourt 2023."],
      ["Emmanuel Carrère, pour « Kolkhoze »", false, "Finaliste du Goncourt 2025, il n'a pas été couronné."],
    ], "Le 4 novembre 2025, l'Académie Goncourt a couronné Laurent Mauvignier pour « La Maison vide », grande saga familiale. Le même jour, le Renaudot est allé à Adélaïde de Clermont-Tonnerre.", "Goncourt 2025 : Laurent Mauvignier, « La Maison vide ».", ["Le prix a été remis en novembre 2025.", "Le roman évoque une maison familiale.", "Son titre contient le mot « vide »."], { a: "formules" }),
    q("B-ACT-CULT-004", "goncourt", 2, "À quelle période de l'année le prix Goncourt est-il traditionnellement décerné ?", [
      ["Début novembre", true, "Le même jour que le prix Renaudot."],
      ["Début octobre", false, "C'est la période du Nobel de littérature."],
      ["En mai", false, "C'est la période du Festival de Cannes."],
      ["En février", false, "C'est la période des César."],
    ], "Le Goncourt est annoncé chez Drouant, à Paris, début novembre. Les élèves passant SESAME en avril 2027 devront donc connaître le Goncourt 2026, annoncé en novembre 2026.", "Goncourt : début novembre, chez Drouant.", ["Il clôt la saison des prix d'automne.", "Il suit la rentrée littéraire de septembre.", "Il tombe après le Nobel."], { a: "formules" }),
    q("B-ACT-CULT-005", "cannes", 1, "Quel film a remporté la Palme d'or au Festival de Cannes 2026 ?", [
      ["« Fjord », de Cristian Mungiu", true, "Le cinéaste roumain obtient sa deuxième Palme."],
      ["« Minotaure », d'Andreï Zviaguintsev", false, "Grand Prix 2026, deuxième récompense."],
      ["« Un simple accident », de Jafar Panahi", false, "Palme d'or 2025."],
      ["« Anora », de Sean Baker", false, "Palme d'or 2024."],
    ], "Le 23 mai 2026, le jury présidé par Park Chan-wook a remis la Palme d'or à « Fjord » de Cristian Mungiu, déjà lauréat en 2007 pour « 4 mois, 3 semaines, 2 jours ».", "Palme d'or 2026 : « Fjord », Cristian Mungiu.", ["Le réalisateur est roumain.", "Il avait déjà gagné en 2007.", "Le titre évoque un paysage scandinave."], { n: ["cannes-2026"], a: "exemple" }),
    q("B-ACT-CULT-006", "cannes", 2, "Qui présidait le jury du Festival de Cannes 2026 ?", [
      ["Le réalisateur sud-coréen Park Chan-wook", true, "Auteur notamment de « Old Boy »."],
      ["Juliette Binoche", false, "Présidente du jury en 2025."],
      ["Greta Gerwig", false, "Présidente du jury en 2024."],
      ["Cristian Mungiu", false, "Il est le lauréat de la Palme, pas le président du jury."],
    ], "Park Chan-wook, figure du cinéma coréen, présidait le jury de la 79e édition. Le piège classique consiste à confondre président du jury et lauréat.", "Cannes 2026 : jury présidé par Park Chan-wook.", ["Le président est un cinéaste asiatique.", "Il est l'auteur d'« Old Boy ».", "Il est sud-coréen."], { n: ["cannes-2026"], a: "erreur", r: true }),
    q("B-ACT-CULT-007", "cannes", 2, "Avec quelle actrice la Japonaise Tao Okamoto a-t-elle partagé le prix d'interprétation féminine à Cannes en 2026 ?", [
      ["Virginie Efira, pour « Soudain » de Ryūsuke Hamaguchi", true, "Les deux actrices jouent dans le même film."],
      ["Léa Drucker", false, "César de la meilleure actrice 2026, pour « Dossier 137 »."],
      ["Isabelle Huppert", false, "Prix d'interprétation en 1978 et 2001, pas en 2026."],
      ["Adèle Exarchopoulos", false, "Pas primée en 2026."],
    ], "Le prix d'interprétation féminine 2026 est partagé entre Virginie Efira et la Japonaise Tao Okamoto, toutes deux dans « Soudain » du Japonais Ryūsuke Hamaguchi.", "Cannes 2026 : prix d'interprétation féminine à Virginie Efira et Tao Okamoto.", ["Le prix est partagé.", "Le film est réalisé par un cinéaste japonais.", "L'actrice est d'origine belge et vit en France."], { n: ["cannes-2026"] }),
    q("B-ACT-CULT-008", "cesar", 1, "Quel film a reçu le César du meilleur film en février 2026 ?", [
      ["« L'Attachement », de Carine Tardieu", true, "51e cérémonie, le 26 février 2026."],
      ["« Nouvelle Vague », de Richard Linklater", false, "Son réalisateur a reçu le César de la meilleure réalisation."],
      ["« L'Histoire de Souleymane », de Boris Lojkine", false, "Film primé aux César 2025."],
      ["« Emilia Pérez », de Jacques Audiard", false, "Meilleur film aux César 2025."],
    ], "La 51e cérémonie des César, à l'Olympia, a sacré « L'Attachement » de Carine Tardieu. Léa Drucker et Laurent Lafitte ont reçu les César d'interprétation.", "César 2026 du meilleur film : « L'Attachement ».", ["La réalisatrice est française.", "Le titre évoque un lien affectif.", "Elle s'appelle Carine Tardieu."], { n: ["cesar-2026"] }),
    q("B-ACT-CULT-009", "cesar", 2, "Qui a reçu le César de la meilleure actrice en 2026 ?", [
      ["Léa Drucker, pour « Dossier 137 »", true, "Laurent Lafitte a reçu le César du meilleur acteur."],
      ["Virginie Efira", false, "Primée à Cannes en mai 2026, pas aux César."],
      ["Camille Cottin", false, "Elle présidait la cérémonie."],
      ["Hafsia Herzi", false, "Pas lauréate de ce César en 2026."],
    ], "Léa Drucker est récompensée pour « Dossier 137 » de Dominik Moll ; Camille Cottin présidait la 51e cérémonie.", "César 2026 : Léa Drucker meilleure actrice, Laurent Lafitte meilleur acteur.", ["Elle avait déjà reçu un César pour « Jusqu'à la garde ».", "Son film porte un numéro dans le titre.", "Son prénom est Léa."], { n: ["cesar-2026"], r: true }),
    q("B-ACT-CULT-010", "prix", 1, "Quelle est la plus haute récompense de la Mostra de Venise ?", [
      ["Le Lion d'or", true, "Remis début septembre."],
      ["L'Ours d'or", false, "Récompense de la Berlinale."],
      ["La Palme d'or", false, "Récompense du Festival de Cannes."],
      ["Le Léopard d'or", false, "Récompense du festival de Locarno."],
    ], "Chaque grand festival a son animal ou son emblème : Palme d'or (Cannes), Lion d'or (Venise), Ours d'or (Berlin), Léopard d'or (Locarno).", "Venise : Lion d'or ; Berlin : Ours d'or ; Cannes : Palme d'or.", ["Le symbole de Venise est un animal.", "C'est le lion ailé de saint Marc.", "Ce n'est pas l'ours, symbole de Berlin."]),
    q("B-ACT-CULT-011", "medias", 2, "Quelle autorité, créée en 2022 par la fusion du CSA et de la Hadopi, régule l'audiovisuel en France ?", [
      ["L'Arcom", true, "Autorité de régulation de la communication audiovisuelle et numérique."],
      ["La CNIL", false, "Elle protège les données personnelles."],
      ["L'Arcep", false, "Elle régule les télécommunications et la poste."],
      ["L'AMF", false, "Elle régule les marchés financiers."],
    ], "L'Arcom attribue les fréquences de la TNT, veille au pluralisme et lutte contre le piratage. Elle est aussi le coordinateur français pour l'application du DSA.", "Arcom : régulateur de l'audiovisuel et du numérique depuis 2022.", ["Elle a remplacé le CSA.", "Elle a aussi absorbé la Hadopi.", "Son sigle commence par « Arc »… mais ce n'est pas l'Arcep."], { a: "formules" }),
    q("B-ACT-CULT-012", "prix", 2, "Quel prix est décerné le même jour que le Goncourt, souvent présenté comme son « rattrapage » ?", [
      ["Le prix Renaudot", true, "Annoncé quelques minutes après le Goncourt."],
      ["Le prix Femina", false, "Décerné un autre jour, par un jury féminin."],
      ["Le prix Nobel de littérature", false, "Annoncé en octobre à Stockholm."],
      ["Le prix Pulitzer", false, "Prix américain décerné au printemps."],
    ], "Le Renaudot, créé en 1926 par des journalistes, est proclamé chez Drouant juste après le Goncourt. En 2025, il est allé à Adélaïde de Clermont-Tonnerre pour « Je voulais vivre ».", "Goncourt et Renaudot : même jour, même lieu (Drouant), début novembre.", ["Il a été créé par des journalistes.", "Il est annoncé dans le même restaurant parisien.", "Son nom évoque le fondateur de « La Gazette »."]),
    q("B-ACT-CULT-013", "musique", 1, "Quel pays a remporté le Concours Eurovision de la chanson 2026, organisé à Vienne ?", [
      ["La Bulgarie", true, "Représentée par Dara."],
      ["L'Autriche", false, "Pays organisateur après sa victoire de 2025."],
      ["La France", false, "Elle a terminé onzième."],
      ["La Suède", false, "L'un des pays les plus titrés, mais pas vainqueur en 2026."],
    ], "La 70e édition s'est tenue à Vienne, l'Autriche ayant gagné en 2025. La Bulgarie l'a emporté ; la France, représentée par Monroe, s'est classée onzième.", "Eurovision 2026 (Vienne) : victoire de la Bulgarie, France onzième.", ["Le pays vainqueur a aussi adopté l'euro en 2026.", "Il est situé dans les Balkans.", "Sa capitale est Sofia."], { a: "regle" }),
    q("B-ACT-CULT-014", "cannes", 3, "Quel est le point commun entre « 4 mois, 3 semaines, 2 jours » (2007) et « Fjord » (2026) ?", [
      ["Les deux films ont reçu la Palme d'or et ont été réalisés par Cristian Mungiu", true, "Mungiu rejoint le cercle des doubles palmés."],
      ["Les deux films ont reçu le César du meilleur film", false, "Ce sont des films roumain et international, primés à Cannes."],
      ["Les deux films ont été réalisés par Park Chan-wook", false, "Il présidait le jury en 2026."],
      ["Les deux films ont reçu l'Oscar du meilleur film", false, "Aucun des deux n'a reçu cet Oscar."],
    ], "Cristian Mungiu a remporté la Palme d'or en 2007 puis en 2026. Il rejoint le petit groupe des cinéastes doublement palmés, comme Ken Loach, Michael Haneke ou les frères Dardenne.", "Cristian Mungiu : Palme d'or en 2007 et en 2026.", ["Le même réalisateur a signé les deux films.", "Il est roumain.", "Il a été palmé deux fois."], { n: ["cannes-2026"] }),
  ],
};
