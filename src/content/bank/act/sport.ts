// Enjeux contemporains : sport et grandes compétitions (act.sport).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.sport";
const q = maker(S);

export const ACT_SPORT: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Grandes compétitions sportives 2026",
      objectives: ["Retenir vainqueurs, finalistes, lieux et dates des grandes compétitions", "Connaître le calendrier des prochains grands événements", "Éviter les confusions entre éditions successives", "Relier le sport aux enjeux économiques et géopolitiques"],
      regle:
        "Les questions de sport portent sur les grands rendez-vous : Coupe du monde de football (tous les quatre ans), Jeux olympiques d'été et d'hiver (en alternance tous les deux ans), Tour de France (juillet), tournois du Grand Chelem de tennis (Open d'Australie en janvier, Roland-Garros fin mai-début juin, Wimbledon début juillet, US Open fin août-début septembre), Ligue des champions (finale fin mai), Tournoi des Six Nations de rugby (février-mars) et Ballon d'or (automne).\n\nÀ retenir pour la suite : JO d'été à Los Angeles en 2028 ; JO d'hiver dans les Alpes françaises en 2030 ; Coupe du monde de football 2030 en Espagne, au Portugal et au Maroc ; Coupe du monde de rugby 2027 en Australie.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Aux JO d'hiver de Milan-Cortina (6-22 février 2026), la France a battu son record avec 23 médailles dont 8 en or, grâce au biathlon. Le XV de France a conservé son titre au Tournoi des Six Nations 2026 (sans Grand Chelem, après une défaite en Écosse). Le PSG a conservé sa Ligue des champions le 30 mai 2026 à Budapest face à Arsenal, aux tirs au but. À Roland-Garros, Alexander Zverev et Mirra Andreeva se sont imposés ; à Wimbledon, Jannik Sinner et Linda Nosková. La première Coupe du monde à 48 équipes, organisée par les États-Unis, le Canada et le Mexique, a été gagnée par l'Espagne, victorieuse de l'Argentine 1-0 après prolongation le 19 juillet au MetLife Stadium ; la France avait été éliminée par l'Espagne en demi-finale. Zinédine Zidane a succédé à Didier Deschamps comme sélectionneur le 1er août 2026. Tadej Pogačar a remporté son cinquième Tour de France, parti de Barcelone ; le Français Paul Seixas a fini quatrième. La cérémonie du Ballon d'or 2026 est programmée le 26 octobre 2026 à Londres.",
      formules:
        "Mondial 2026 : États-Unis, Canada, Mexique · 48 équipes · Espagne 1-0 Argentine (a.p.), 19 juillet, MetLife Stadium\nTour de France 2026 : Tadej Pogačar (5e victoire), départ de Barcelone, Paul Seixas 4e\nLigue des champions 2026 : PSG bat Arsenal aux tirs au but (1-1, 4-3), Budapest\nRoland-Garros 2026 : Zverev et Andreeva · Wimbledon 2026 : Sinner et Nosková\nMilan-Cortina 2026 : France 23 médailles dont 8 en or\nÀ venir : Coupe du monde de rugby 2027 (Australie) · JO 2028 (Los Angeles) · JO d'hiver 2030 (Alpes françaises) · Mondial 2030 (Espagne, Portugal, Maroc)",
      methode:
        "1. Situer l'épreuve dans le calendrier sportif pour éliminer les dates impossibles.\n2. Retenir vainqueur ET finaliste : le perdant de la finale est le distracteur favori.\n3. Distinguer pays hôte et vainqueur.\n4. Pour un record, noter le nombre exact (5 Tours, 23 médailles, 48 équipes).",
      exemple:
        "Question : « Quel pays a remporté la Coupe du monde de football 2026 ? »\nRaisonnement : la finale s'est jouée le 19 juillet 2026 au MetLife Stadium (New Jersey). L'Espagne a battu l'Argentine 1-0 après prolongation, but de Ferran Torres. Pièges : l'Argentine (finaliste et tenante du titre 2022), la France (éliminée en demi-finale par l'Espagne), les États-Unis (pays hôte).",
      erreur:
        "✗ Répondre « Argentine » parce qu'elle était tenante du titre → ✓ Elle a perdu la finale contre l'Espagne.\n✗ Croire que Pogačar a égalé seul un record → ✓ Avec cinq Tours, il rejoint Anquetil, Merckx, Hinault et Indurain.\n✗ Confondre Ligue des champions 2025 et 2026 → ✓ Le PSG a gagné les deux : contre l'Inter en 2025, contre Arsenal en 2026.\n✗ Situer la Coupe du monde 2030 aux États-Unis → ✓ Espagne, Portugal et Maroc.",
      approfondir:
        "Le Ballon d'or 2026 sera décerné le 26 octobre 2026 : un résultat à vérifier et à ajouter à tes fiches avant le concours. Le sport est aussi géopolitique : la Coupe du monde 2026 a été coorganisée par trois pays dont les relations commerciales étaient tendues, et l'attribution des grandes compétitions (Mondial 2034 en Arabie saoudite) suscite des débats sur les droits humains. Lien avec act.entreprise : droits de diffusion et rachats de clubs sont des enjeux économiques majeurs.",
      cards: [
        ["Champion du monde de football 2026", "Espagne (1-0 a.p. contre l'Argentine)", false],
        ["Vainqueur du Tour de France 2026", "Tadej Pogačar, cinquième victoire", false],
        ["Sélectionneur des Bleus depuis le 1er août 2026", "Zinédine Zidane", true],
        ["Bilan de la France à Milan-Cortina 2026", "23 médailles dont 8 en or, record", false],
        ["Lieu des JO d'hiver 2030", "Alpes françaises", true],
      ],
    },
  ],
  questions: [
    q("B-ACT-SPORT-001", "football", 1, "Quel pays a remporté la Coupe du monde de football 2026 ?", [
      ["L'Espagne", true, "Victoire 1-0 après prolongation contre l'Argentine."],
      ["L'Argentine", false, "Finaliste et tenante du titre 2022, battue en finale."],
      ["La France", false, "Éliminée en demi-finale par l'Espagne."],
      ["Les États-Unis", false, "Pays coorganisateur, non vainqueur."],
    ], "Le 19 juillet 2026, au MetLife Stadium (New Jersey), l'Espagne bat l'Argentine 1-0 après prolongation grâce à Ferran Torres et remporte sa deuxième Coupe du monde après 2010.", "Mondial 2026 : Espagne championne du monde.", ["Le vainqueur avait déjà gagné en 2010.", "Il a éliminé la France en demi-finale.", "Ferran Torres a marqué en finale."], { n: ["mondial-2026"], a: "exemple" }),
    q("B-ACT-SPORT-002", "football", 2, "Par quelle équipe la France a-t-elle été éliminée lors de la Coupe du monde 2026, et à quel stade ?", [
      ["Par l'Espagne, en demi-finale (0-2)", true, "Match joué à Dallas le 14 juillet 2026."],
      ["Par l'Argentine, en finale", false, "La France n'a pas atteint la finale."],
      ["Par le Maroc, en quart de finale", false, "Confusion avec la demi-finale de 2022."],
      ["Par l'Espagne, en finale", false, "L'Espagne a joué la finale contre l'Argentine."],
    ], "Les Bleus de Didier Deschamps ont été battus 2-0 par l'Espagne en demi-finale à Dallas. L'Espagne a ensuite remporté le titre.", "Mondial 2026 : la France éliminée en demi-finale par l'Espagne (0-2).", ["L'adversaire est devenu champion du monde.", "La France a atteint le dernier carré.", "L'adversaire est un voisin européen."], { n: ["mondial-2026"] }),
    q("B-ACT-SPORT-003", "football", 1, "Combien d'équipes ont participé à la phase finale de la Coupe du monde 2026, une première ?", [
      ["48", true, "Contre 32 lors des éditions de 1998 à 2022."],
      ["32", false, "Format des éditions précédentes."],
      ["24", false, "Format de 1982 à 1994 et de l'Euro actuel."],
      ["64", false, "Format jamais adopté."],
    ], "La Coupe du monde 2026, organisée par les États-Unis, le Canada et le Mexique, est la première à 48 équipes et à trois pays hôtes.", "Mondial 2026 : 48 équipes, trois pays hôtes.", ["Le format a été élargi.", "Il est passé de 32 à un nombre plus élevé.", "32 + 16."], { n: ["mondial-2026"], a: "formules" }),
    q("B-ACT-SPORT-004", "football", 1, "Qui a succédé à Didier Deschamps comme sélectionneur de l'équipe de France de football ?", [
      ["Zinédine Zidane", true, "Nommé le 28 juillet 2026, en poste depuis le 1er août."],
      ["Thierry Henry", false, "Ancien sélectionneur des Espoirs, non retenu."],
      ["Laurent Blanc", false, "Sélectionneur de 2010 à 2012."],
      ["Hervé Renard", false, "Non retenu pour ce poste."],
    ], "La Fédération française de football a nommé Zinédine Zidane pour quatre ans, jusqu'à la Coupe du monde 2030. Didier Deschamps était sélectionneur depuis 2012.", "Zinédine Zidane, sélectionneur des Bleus depuis le 1er août 2026.", ["C'est un champion du monde 1998.", "Il a entraîné le Real Madrid.", "Il a reçu le Ballon d'or en 1998."], { n: ["zidane-selectionneur"] }),
    q("B-ACT-SPORT-005", "cyclisme", 1, "Qui a remporté le Tour de France 2026 ?", [
      ["Tadej Pogačar", true, "Sa cinquième victoire, la troisième consécutive."],
      ["Jonas Vingegaard", false, "Vainqueur en 2022 et 2023, absent du podium en 2026."],
      ["Remco Evenepoel", false, "Deuxième du classement général."],
      ["Paul Seixas", false, "Le jeune Français a terminé quatrième."],
    ], "Le Slovène Tadej Pogačar s'impose devant Remco Evenepoel et Isaac del Toro. Le Tour était parti de Barcelone le 4 juillet et s'est achevé à Paris le 26 juillet.", "Tour de France 2026 : cinquième victoire de Tadej Pogačar.", ["Le vainqueur est slovène.", "Il avait déjà gagné en 2024 et 2025.", "Il court pour UAE Team Emirates."], { n: ["tour-de-france-2026"] }),
    q("B-ACT-SPORT-006", "cyclisme", 2, "Avec sa victoire en 2026, Tadej Pogačar compte cinq Tours de France. Quelle est la portée de ce chiffre ?", [
      ["Il égale le record de victoires d'Anquetil, Merckx, Hinault et Indurain", true, "Cinq victoires, record partagé."],
      ["Il devient le seul coureur à avoir gagné cinq fois", false, "Quatre coureurs l'avaient fait avant lui."],
      ["Il bat le record de sept victoires", false, "Les sept victoires de Lance Armstrong ont été annulées pour dopage."],
      ["Il égale le record de Chris Froome", false, "Chris Froome a gagné quatre fois."],
    ], "Jacques Anquetil, Eddy Merckx, Bernard Hinault et Miguel Indurain ont chacun remporté cinq Tours. Pogačar (2020, 2021, 2024, 2025, 2026) les rejoint.", "Record du Tour : cinq victoires (Anquetil, Merckx, Hinault, Indurain, Pogačar).", ["Plusieurs coureurs détenaient déjà ce total.", "Deux d'entre eux sont français.", "Armstrong a été déchu de ses titres."], { n: ["tour-de-france-2026"], a: "erreur", r: true }),
    q("B-ACT-SPORT-007", "cyclisme", 2, "D'où le Tour de France 2026 est-il parti ?", [
      ["De Barcelone", true, "Grand Départ en Espagne, par un contre-la-montre par équipes."],
      ["De Lille", false, "Grand Départ de l'édition 2025."],
      ["De Florence", false, "Grand Départ de l'édition 2024."],
      ["De Copenhague", false, "Grand Départ de l'édition 2022."],
    ], "Le Tour 2026 s'est élancé de Barcelone le 4 juillet 2026, avant de rejoindre la France ; l'arrivée finale a eu lieu sur les Champs-Élysées.", "Tour de France 2026 : Grand Départ de Barcelone.", ["Le départ a eu lieu à l'étranger.", "Dans une grande ville catalane.", "En Espagne."], { n: ["tour-de-france-2026"] }),
    q("B-ACT-SPORT-008", "football", 1, "Quel club a remporté la Ligue des champions le 30 mai 2026 à Budapest ?", [
      ["Le Paris Saint-Germain", true, "1-1 puis 4-3 aux tirs au but contre Arsenal."],
      ["Arsenal", false, "Finaliste malheureux."],
      ["Le Real Madrid", false, "Club le plus titré, absent de la finale 2026."],
      ["L'Inter Milan", false, "Battu par le PSG en finale 2025."],
    ], "Le PSG conserve son titre européen, obtenu pour la première fois en 2025, en battant Arsenal aux tirs au but à la Puskás Aréna.", "Ligue des champions 2026 : le PSG bat Arsenal aux tirs au but.", ["Le vainqueur avait déjà gagné l'édition précédente.", "C'est un club français.", "L'adversaire était anglais."], { n: ["psg-ligue-champions-2026"] }),
    q("B-ACT-SPORT-009", "tennis", 1, "Qui a remporté le tournoi masculin de Roland-Garros 2026 ?", [
      ["Alexander Zverev", true, "Victoire en cinq sets contre Flavio Cobolli."],
      ["Carlos Alcaraz", false, "Vainqueur en 2024 et 2025, pas en 2026."],
      ["Jannik Sinner", false, "Il a gagné Wimbledon 2026, pas Roland-Garros."],
      ["Flavio Cobolli", false, "Finaliste battu."],
    ], "L'Allemand Alexander Zverev bat l'Italien Flavio Cobolli en finale ; chez les femmes, Mirra Andreeva s'impose face à Maja Chwalińska.", "Roland-Garros 2026 : Zverev et Andreeva.", ["Le vainqueur est allemand.", "Il avait perdu la finale de 2024.", "Son adversaire en finale était italien."], { n: ["tennis-2026"] }),
    q("B-ACT-SPORT-010", "tennis", 2, "Qui a remporté le simple messieurs de Wimbledon 2026 ?", [
      ["Jannik Sinner", true, "Il conserve son titre de 2025, face à Alexander Zverev."],
      ["Alexander Zverev", false, "Vainqueur de Roland-Garros, battu en finale à Wimbledon."],
      ["Novak Djokovic", false, "Sept fois vainqueur, mais pas en 2026."],
      ["Carlos Alcaraz", false, "Vainqueur en 2023 et 2024."],
    ], "L'Italien Jannik Sinner bat Alexander Zverev en quatre sets ; chez les femmes, la Tchèque Linda Nosková gagne son premier tournoi du Grand Chelem face à Karolína Muchová.", "Wimbledon 2026 : Sinner et Nosková.", ["Le vainqueur est italien.", "Il défendait son titre.", "Il a battu le vainqueur de Roland-Garros."], { n: ["tennis-2026"], r: true }),
    q("B-ACT-SPORT-011", "jo", 1, "Combien de médailles la France a-t-elle remportées aux Jeux olympiques d'hiver de Milan-Cortina 2026 ?", [
      ["23, dont 8 en or", true, "Record pour la France aux JO d'hiver."],
      ["15, dont 5 en or", false, "Bilan proche de celui de Pyeongchang 2018."],
      ["64, dont 16 en or", false, "Bilan des JO d'été de Paris 2024."],
      ["8, dont 2 en or", false, "Bilan très inférieur au résultat réel."],
    ], "Avec 8 médailles d'or, 9 d'argent et 6 de bronze, la France pulvérise son record ; le biathlon en apporte 13 (Julia Simon, Quentin Fillon Maillet, Lou Jeanmonnot…).", "Milan-Cortina 2026 : 23 médailles françaises, dont 8 en or.", ["C'est un record historique.", "Le biathlon a beaucoup contribué.", "Plus de 20 médailles."], { n: ["jo-milan-cortina"], a: "formules" }),
    q("B-ACT-SPORT-012", "jo", 2, "Où se dérouleront les prochains Jeux olympiques d'hiver, en 2030 ?", [
      ["Dans les Alpes françaises", true, "Attribués par le CIO en 2024."],
      ["À Milan et Cortina d'Ampezzo", false, "Ville hôte de 2026."],
      ["À Salt Lake City", false, "Ville retenue pour 2034."],
      ["À Pékin", false, "Ville hôte de 2022."],
    ], "Le CIO a attribué les JO d'hiver 2030 aux Alpes françaises (Auvergne-Rhône-Alpes et Provence-Alpes-Côte d'Azur) ; Salt Lake City accueillera ceux de 2034.", "JO d'hiver : 2026 Milan-Cortina, 2030 Alpes françaises, 2034 Salt Lake City.", ["La France accueillera l'événement.", "Dans un massif montagneux.", "Ce ne sont pas les Pyrénées."], { a: "formules" }),
    q("B-ACT-SPORT-013", "rugby", 2, "Quel bilan le XV de France a-t-il obtenu au Tournoi des Six Nations 2026 ?", [
      ["Il a remporté le Tournoi, sans réaliser le Grand Chelem", true, "Battu en Écosse (50-40), il termine tout de même en tête."],
      ["Il a remporté le Tournoi avec le Grand Chelem", false, "La défaite en Écosse empêche le Grand Chelem."],
      ["Il a terminé dernier du Tournoi", false, "Il a terminé premier, avec 21 points."],
      ["Il a terminé deuxième derrière l'Irlande", false, "L'Irlande a fini deuxième (19 points), derrière la France (21 points)."],
    ], "La France conserve son titre malgré une défaite à Édimbourg contre l'Écosse (50-40), qui la prive du Grand Chelem. Le 14 mars 2026, lors de la dernière journée, elle bat l'Angleterre 48-46 au Stade de France sur une pénalité de Thomas Ramos à la dernière seconde, et termine avec 21 points devant l'Irlande (19).", "Six Nations 2026 : victoire de la France, sans Grand Chelem.", ["La France a perdu un match.", "Elle a quand même terminé en tête.", "Le Grand Chelem exige cinq victoires en cinq matchs."], { a: "regle" }),
    q("B-ACT-SPORT-014", "football", 2, "Quels pays accueilleront la Coupe du monde de football 2030 (hors matchs d'ouverture en Amérique du Sud) ?", [
      ["L'Espagne, le Portugal et le Maroc", true, "Candidature commune retenue par la FIFA."],
      ["Les États-Unis, le Canada et le Mexique", false, "Pays hôtes de 2026."],
      ["L'Arabie saoudite", false, "Pays hôte de 2034."],
      ["La France et la Belgique", false, "Aucune candidature commune de ce type."],
    ], "La FIFA a confirmé fin 2024 l'attribution du Mondial 2030 à l'Espagne, au Portugal et au Maroc, avec trois matchs en Uruguay, en Argentine et au Paraguay pour le centenaire ; 2034 ira à l'Arabie saoudite.", "Mondial 2030 : Espagne, Portugal, Maroc ; 2034 : Arabie saoudite.", ["Deux continents sont concernés.", "Le pays champion du monde 2026 en fait partie.", "Un pays africain y participe."], { a: "formules" }),
    q("B-ACT-SPORT-015", "football", 3, "Quel joueur a marqué l'unique but de la finale de la Coupe du monde 2026 ?", [
      ["Ferran Torres", true, "En prolongation, vers la 106e minute."],
      ["Lautaro Martínez", false, "Attaquant argentin : l'Argentine, battue 1-0, n'a pas marqué en finale."],
      ["Mikel Oyarzabal", false, "Il a marqué contre la France en demi-finale, pas en finale."],
      ["Kylian Mbappé", false, "La France n'a pas disputé la finale."],
    ], "L'attaquant espagnol Ferran Torres a inscrit le but de la victoire à la 106e minute, au début de la seconde période de prolongation.", "Finale du Mondial 2026 : but de Ferran Torres en prolongation.", ["Le buteur est espagnol.", "Le but a été marqué en prolongation.", "Il a joué à Manchester City et à Barcelone."], { n: ["mondial-2026"], r: true }),
  ],
};
