// Enjeux contemporains : relations internationales et conflits (act.geo).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.geo";
const q = maker(S);

export const ACT_GEO: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Relations internationales : organisations, alliances et conflits",
      objectives: ["Décrire le fonctionnement de l'ONU et du Conseil de sécurité", "Distinguer OTAN, G7, G20, BRICS et OMC", "Situer les conflits et les scrutins majeurs de 2026", "Retenir dirigeants, lieux et dates des sommets"],
      regle:
        "L'Organisation des Nations unies (ONU, 1945, siège à New York) réunit 193 États. Le Conseil de sécurité compte 15 membres : 5 permanents dotés du droit de veto (Chine, États-Unis, France, Royaume-Uni, Russie) et 10 membres élus pour deux ans. Le secrétaire général est nommé par l'Assemblée générale sur recommandation du Conseil de sécurité ; le second mandat d'António Guterres s'achève le 31 décembre 2026.\n\nL'OTAN (1949) est une alliance militaire de 32 membres depuis l'adhésion de la Finlande (2023) et de la Suède (2024) ; l'article 5 prévoit la défense collective. Son secrétaire général est Mark Rutte depuis octobre 2024. Au sommet de La Haye (2025), les alliés se sont engagés à consacrer 5 % de leur PIB à la défense et à la sécurité d'ici 2035.\n\nLe G7 réunit sept démocraties industrialisées (Allemagne, Canada, États-Unis, France, Italie, Japon, Royaume-Uni) plus l'UE ; le G20 y ajoute les grands émergents et représente l'essentiel du PIB mondial. Les BRICS, fondés par le Brésil, la Russie, l'Inde et la Chine, puis rejoints par l'Afrique du Sud, se sont élargis à partir de 2024 (Égypte, Éthiopie, Iran, Émirats arabes unis, Indonésie). L'Organisation mondiale du commerce (OMC, Genève, 1995) encadre les échanges ; elle est dirigée par Ngozi Okonjo-Iweala.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Le 28 février 2026, les États-Unis et Israël ont frappé l'Iran : le guide suprême Ali Khamenei a été tué et remplacé par son fils Mojtaba ; le blocage du détroit d'Ormuz a provoqué un choc pétrolier. La guerre en Ukraine, déclenchée par l'invasion russe du 24 février 2022, se poursuivait à l'été 2026 : au sommet d'Ankara, les alliés ont promis 70 milliards d'euros d'aide militaire à Kiev pour 2026. La France a présidé le G7 en 2026 (sommet d'Évian, 15-17 juin) ; l'OTAN s'est réunie à Ankara les 7 et 8 juillet ; les États-Unis accueillent le G20 à Miami en décembre 2026. En Suède, la gauche de Magdalena Andersson a gagné les législatives du 13 septembre ; au Brésil, Lula affronte Flávio Bolsonaro au second tour le 25 octobre ; les élections américaines de mi-mandat ont lieu le 3 novembre 2026.",
      formules:
        "ONU : 193 États · Conseil de sécurité 15 membres dont 5 permanents avec veto\nSecrétaire général : António Guterres jusqu'au 31 décembre 2026\nOTAN : 32 membres · article 5 · Mark Rutte · objectif 5 % du PIB en 2035\nG7 : Allemagne, Canada, États-Unis, France, Italie, Japon, Royaume-Uni (+ UE)\nOMC : Genève, Ngozi Okonjo-Iweala\nSommets 2026 : G7 Évian (15-17 juin) · OTAN Ankara (7-8 juillet) · G20 Miami (14-15 décembre)",
      methode:
        "1. Situer l'organisation : universelle (ONU), militaire (OTAN), club économique (G7, G20, BRICS), commerce (OMC).\n2. Retenir pour chaque sommet : lieu, pays hôte, date.\n3. Pour un conflit : déclencheur, date, acteurs, conséquence économique.\n4. Pour une élection : pays, vainqueur, battu, type de scrutin.",
      exemple:
        "Question : « Quel pays a accueilli le sommet de l'OTAN de juillet 2026 ? »\nRaisonnement : les sommets récents ont eu lieu à Washington (2024) et à La Haye (2025) ; en 2026, la déclaration finale est datée du 8 juillet à Ankara. Réponse : la Turquie, membre de l'OTAN depuis 1952. Distracteur probable : la Pologne ou la Lituanie, proches du front ukrainien.",
      erreur:
        "✗ Compter 30 ou 31 membres de l'OTAN → ✓ 32 depuis l'entrée de la Suède en mars 2024.\n✗ Confondre G7 et G20 → ✓ Le G20 inclut la Chine, l'Inde, le Brésil, l'Afrique du Sud, l'Arabie saoudite…\n✗ Croire que l'Assemblée générale choisit seule le secrétaire général → ✓ Elle nomme sur recommandation du Conseil de sécurité.\n✗ Écrire que la Russie n'a pas de veto → ✓ Elle est membre permanent du Conseil de sécurité.",
      approfondir:
        "Pour mémoriser les sommets, utilise un tableau à trois colonnes : organisation, ville, date. Les élections étrangères reviennent souvent : note le vainqueur et le perdant, car le distracteur est presque toujours l'adversaire. Lien avec act.eco : un conflit au Moyen-Orient se lit immédiatement dans le prix du pétrole, l'inflation et les taux d'intérêt.",
      cards: [
        ["Membres permanents du Conseil de sécurité", "Chine, États-Unis, France, Royaume-Uni, Russie", false],
        ["Nombre de membres de l'OTAN", "32 (Suède, 32e, en 2024)", false],
        ["Sommet du G7 2026", "Évian-les-Bains, 15-17 juin 2026, présidence française", false],
        ["Nouveau guide suprême iranien (mars 2026)", "Mojtaba Khamenei", true],
        ["Fin du mandat d'António Guterres", "31 décembre 2026", false],
      ],
    },
  ],
  questions: [
    q("B-ACT-GEO-001", "onu", 1, "Combien de membres compte le Conseil de sécurité des Nations unies ?", [
      ["15, dont 5 permanents", true, "Les 10 autres sont élus pour deux ans."],
      ["5, tous permanents", false, "Oubli des dix membres non permanents."],
      ["193", false, "C'est le nombre d'États membres de l'ONU."],
      ["20, dont 5 permanents", false, "Confusion avec le G20."],
    ], "Le Conseil de sécurité réunit cinq membres permanents disposant du droit de veto et dix membres élus par l'Assemblée générale pour deux ans.", "Conseil de sécurité : 15 membres, dont 5 permanents avec veto.", ["Il existe des membres permanents et des membres élus.", "Les membres élus sont deux fois plus nombreux que les permanents.", "5 + 10."], { a: "formules" }),
    q("B-ACT-GEO-002", "onu", 2, "Comment le secrétaire général de l'ONU est-il désigné ?", [
      ["Il est nommé par l'Assemblée générale sur recommandation du Conseil de sécurité", true, "Article 97 de la Charte des Nations unies."],
      ["Il est élu au suffrage universel dans les États membres", false, "Aucun vote des citoyens n'est prévu."],
      ["Il est choisi par les seuls cinq membres permanents", false, "Ils peuvent bloquer un candidat par veto, mais la nomination revient à l'Assemblée générale."],
      ["Il est désigné par la Cour internationale de justice", false, "La Cour juge les différends entre États ; elle ne nomme personne."],
    ], "Le Conseil de sécurité recommande un candidat (le veto des membres permanents s'applique), puis l'Assemblée générale le nomme. En 2026, le Conseil procède à des votes indicatifs pour trouver le successeur d'António Guterres.", "Secrétaire général : recommandé par le Conseil de sécurité, nommé par l'Assemblée générale.", ["Deux organes de l'ONU interviennent.", "Le droit de veto joue à l'une des étapes.", "La recommandation précède la nomination."], { n: ["onu-secretaire-general"], a: "erreur" }),
    q("B-ACT-GEO-003", "onu", 1, "Quand s'achève le second mandat d'António Guterres à la tête de l'ONU ?", [
      ["Le 31 décembre 2026", true, "Il a pris ses fonctions le 1er janvier 2017."],
      ["Le 31 décembre 2027", false, "Erreur d'un an : deux mandats de cinq ans depuis 2017."],
      ["En juin 2026", false, "Le mandat suit l'année civile."],
      ["Son mandat a été prolongé jusqu'en 2028", false, "Aucune prolongation n'a été décidée."],
    ], "Secrétaire général depuis le 1er janvier 2017, António Guterres a été reconduit pour un second mandat de cinq ans qui se termine le 31 décembre 2026. Au 14 octobre 2026, son successeur n'est pas encore désigné.", "Le mandat d'António Guterres se termine le 31 décembre 2026.", ["Un mandat de secrétaire général dure cinq ans.", "Il est en poste depuis 2017.", "2017 + 10 ans, moins un jour."], { n: ["onu-secretaire-general"] }),
    q("B-ACT-GEO-004", "otan", 1, "Combien d'États sont membres de l'OTAN en 2026 ?", [
      ["32", true, "La Suède est devenue le 32e membre en mars 2024."],
      ["30", false, "Nombre de 2020 à 2023, avant la Finlande et la Suède."],
      ["31", false, "Nombre après l'entrée de la Finlande, avant celle de la Suède."],
      ["27", false, "C'est le nombre d'États de l'UE."],
    ], "Après l'invasion de l'Ukraine, la Finlande (avril 2023) puis la Suède (mars 2024) ont rejoint l'OTAN, qui compte 32 membres.", "OTAN : 32 membres.", ["Deux pays nordiques ont adhéré après 2022.", "La Finlande était la 31e.", "Ajoute la Suède."], { a: "erreur" }),
    q("B-ACT-GEO-005", "otan", 1, "Dans quel pays s'est tenu le sommet de l'OTAN des 7 et 8 juillet 2026 ?", [
      ["En Turquie, à Ankara", true, "La déclaration finale est datée du 8 juillet 2026."],
      ["Aux Pays-Bas, à La Haye", false, "C'était le sommet de 2025."],
      ["Aux États-Unis, à Washington", false, "C'était le sommet de 2024, pour les 75 ans de l'Alliance."],
      ["En Pologne, à Varsovie", false, "Varsovie a accueilli le sommet de 2016."],
    ], "Les chefs d'État et de gouvernement de l'OTAN se sont réunis à Ankara. Ils ont confirmé l'engagement de dépenses pris à La Haye et prévu 70 milliards d'euros d'aide militaire à l'Ukraine pour 2026.", "Sommet de l'OTAN 2026 : Ankara (Turquie), 7-8 juillet.", ["Le pays hôte est membre de l'OTAN depuis 1952.", "Il est à cheval sur l'Europe et l'Asie.", "Sa capitale n'est pas Istanbul."], { n: ["otan-ankara-2026"], a: "exemple" }),
    q("B-ACT-GEO-006", "otan", 2, "Quel objectif de dépenses de défense et de sécurité les membres de l'OTAN ont-ils adopté au sommet de La Haye en 2025 ?", [
      ["5 % du PIB d'ici 2035", true, "Dont 3,5 % pour la défense au sens strict."],
      ["2 % du PIB d'ici 2024", false, "C'était l'objectif fixé en 2014 au sommet du pays de Galles."],
      ["3 % du PIB d'ici 2030", false, "Chiffre intermédiaire inventé."],
      ["10 % du budget de l'État", false, "L'objectif est exprimé en pourcentage du PIB."],
    ], "En juin 2025 à La Haye, les alliés se sont engagés à porter à 5 % du PIB, d'ici 2035, leurs dépenses de défense (3,5 %) et de sécurité au sens large (1,5 %). La déclaration d'Ankara (2026) confirme cet engagement.", "OTAN : 5 % du PIB en 2035 (3,5 % défense + 1,5 % sécurité).", ["L'ancien objectif était de 2 %.", "Le nouvel objectif a été fixé en 2025 et porte sur 2035.", "Il est décomposé en 3,5 + 1,5."], { n: ["otan-ankara-2026"] }),
    q("B-ACT-GEO-007", "g7", 1, "Où s'est tenu le sommet du G7 de juin 2026, organisé par la présidence française ?", [
      ["À Évian-les-Bains", true, "Du 15 au 17 juin 2026, en Haute-Savoie."],
      ["À Biarritz", false, "Ville du précédent G7 français, en 2019."],
      ["À Kananaskis", false, "Sommet de la présidence canadienne en 2025."],
      ["À Nice", false, "Nice a accueilli en 2025 la conférence des Nations unies sur l'océan."],
    ], "La France préside le G7 depuis le 1er janvier 2026 ; le sommet des dirigeants s'est réuni à Évian-les-Bains (Haute-Savoie) du 15 au 17 juin 2026. Évian avait déjà accueilli le G8 en 2003.", "G7 2026 : Évian-les-Bains, 15-17 juin, présidence française.", ["La ville est au bord du lac Léman.", "Elle se trouve en Haute-Savoie.", "Elle est connue pour son eau minérale."], { n: ["g7-evian-2026"] }),
    q("B-ACT-GEO-008", "g7", 2, "Lequel de ces pays n'est pas membre du G7 ?", [
      ["La Chine", true, "Elle est membre du G20 et des BRICS, pas du G7."],
      ["Le Canada", false, "Membre du G7 depuis 1976."],
      ["L'Italie", false, "Membre fondateur."],
      ["Le Japon", false, "Membre fondateur, seul pays asiatique du G7."],
    ], "Le G7 rassemble l'Allemagne, le Canada, les États-Unis, la France, l'Italie, le Japon et le Royaume-Uni, avec la participation de l'UE. La Chine appartient au G20 et aux BRICS.", "G7 : Allemagne, Canada, États-Unis, France, Italie, Japon, Royaume-Uni.", ["Le G7 est un club de démocraties industrialisées.", "Un seul pays asiatique en fait partie.", "Le pays à exclure est une grande puissance émergente."], { a: "formules" }),
    q("B-ACT-GEO-009", "iran", 1, "Quel événement a déclenché la guerre de 2026 au Moyen-Orient, le 28 février 2026 ?", [
      ["Des frappes américaines et israéliennes contre l'Iran, qui ont tué le guide suprême Ali Khamenei", true, "Début de l'opération baptisée Epic Fury par Washington."],
      ["L'invasion de l'Ukraine par la Russie", false, "Elle date du 24 février 2022."],
      ["L'attaque du Hamas contre Israël", false, "Elle date du 7 octobre 2023."],
      ["La fermeture du canal de Suez par l'Égypte", false, "Événement inventé ; le détroit concerné est celui d'Ormuz."],
    ], "Le 28 février 2026, les États-Unis et Israël frappent l'Iran ; Ali Khamenei est tué. L'Iran riposte contre Israël, les pays du Golfe et les bases américaines, puis bloque le détroit d'Ormuz.", "28 février 2026 : frappes américano-israéliennes contre l'Iran, mort d'Ali Khamenei.", ["Le conflit oppose deux alliés à un pays du Golfe persique.", "Le dirigeant suprême de ce pays a été tué.", "Ce pays a ensuite bloqué le détroit d'Ormuz."], { n: ["guerre-iran-ormuz"] }),
    q("B-ACT-GEO-010", "iran", 2, "Pourquoi la fermeture du détroit d'Ormuz en 2026 a-t-elle provoqué un choc économique mondial ?", [
      ["Une part importante du pétrole et du gaz naturel liquéfié mondiaux y transite", true, "C'est la sortie maritime du golfe Persique."],
      ["C'est le principal passage des porte-conteneurs entre l'Asie et l'Europe", false, "Ce rôle revient au canal de Suez et à la mer Rouge."],
      ["Il relie l'océan Atlantique à la mer Méditerranée", false, "C'est le détroit de Gibraltar."],
      ["Il abrite les principales mines de terres rares", false, "Un détroit n'est pas une zone minière ; confusion avec les métaux critiques."],
    ], "Le détroit d'Ormuz, entre l'Iran et Oman, est la seule sortie maritime du golfe Persique : pétrole et GNL de l'Arabie saoudite, de l'Irak, des Émirats, du Koweït et du Qatar y transitent. Son blocage a fait bondir les prix de l'énergie (+21,2 % sur un an en France en septembre 2026).", "Ormuz : goulot d'étranglement pétrolier et gazier du golfe Persique.", ["Le détroit relie le golfe Persique à l'océan Indien.", "Les pays riverains sont de grands exportateurs d'hydrocarbures.", "Pense à l'inflation énergétique de 2026."], { n: ["guerre-iran-ormuz", "inflation-septembre-2026"] }),
    q("B-ACT-GEO-011", "iran", 1, "Qui a été désigné guide suprême de l'Iran en mars 2026 ?", [
      ["Mojtaba Khamenei", true, "Fils d'Ali Khamenei, tué le 28 février 2026."],
      ["Masoud Pezeshkian", false, "Il est président de la République islamique, pas guide suprême."],
      ["Hassan Rohani", false, "Ancien président (2013-2021)."],
      ["Ebrahim Raïssi", false, "Président décédé en 2024 dans un accident d'hélicoptère."],
    ], "L'Assemblée des experts a désigné Mojtaba Khamenei, fils du guide défunt, début mars 2026. En Iran, le guide suprême est au-dessus du président élu.", "Mojtaba Khamenei, guide suprême de l'Iran depuis mars 2026.", ["Il porte le même nom que son prédécesseur.", "Il est le fils du guide tué en février.", "Le président iranien est un autre personnage."], { n: ["guerre-iran-ormuz"] }),
    q("B-ACT-GEO-012", "elections", 2, "Qui a remporté les élections législatives suédoises du 13 septembre 2026 ?", [
      ["Le bloc de gauche mené par la sociale-démocrate Magdalena Andersson", true, "176 sièges sur 349 contre 173."],
      ["La coalition de droite du Premier ministre sortant Ulf Kristersson", false, "Battue de justesse (173 sièges) ; Ulf Kristersson a annoncé sa démission."],
      ["Les Démocrates de Suède, seuls", false, "Ils soutenaient la majorité sortante, battue."],
      ["Aucun bloc : de nouvelles élections ont été convoquées", false, "Le bloc de gauche a obtenu la majorité des sièges."],
    ], "Le bloc formé des sociaux-démocrates, du parti de gauche, des Verts et du Centre obtient 176 sièges sur 349. Ulf Kristersson annonce sa démission ; Magdalena Andersson, déjà Première ministre en 2021-2022, est en position de revenir au pouvoir.", "Suède, septembre 2026 : victoire étroite de la gauche de Magdalena Andersson.", ["Le résultat est très serré.", "Le Premier ministre sortant appartenait au centre droit.", "La gagnante a déjà dirigé le gouvernement suédois."], { n: ["elections-automne-2026"] }),
    q("B-ACT-GEO-013", "elections", 2, "Au Brésil, qui s'affrontent au second tour de l'élection présidentielle du 25 octobre 2026 ?", [
      ["Lula et Flávio Bolsonaro", true, "Issus du premier tour du 4 octobre 2026."],
      ["Lula et Jair Bolsonaro", false, "Jair Bolsonaro est inéligible ; c'est son fils Flávio qui est candidat."],
      ["Lula et Javier Milei", false, "Javier Milei est le président de l'Argentine."],
      ["Dilma Rousseff et Flávio Bolsonaro", false, "Dilma Rousseff préside la Nouvelle Banque de développement des BRICS."],
    ], "Le président sortant Luiz Inácio Lula da Silva affronte le sénateur Flávio Bolsonaro, fils de l'ancien président Jair Bolsonaro, condamné et inéligible. Le résultat n'est pas connu au 14 octobre 2026.", "Brésil : second tour Lula contre Flávio Bolsonaro le 25 octobre 2026.", ["Le président sortant est candidat.", "Son adversaire porte un nom célèbre de la droite brésilienne.", "Ce n'est pas l'ancien président lui-même."], { n: ["elections-automne-2026"], r: true }),
    q("B-ACT-GEO-014", "etats-unis", 1, "Quelle échéance électorale américaine est fixée au 3 novembre 2026 ?", [
      ["Les élections de mi-mandat, qui renouvellent la Chambre des représentants et un tiers du Sénat", true, "Elles ont lieu à mi-parcours du mandat présidentiel."],
      ["L'élection présidentielle", false, "Elle a lieu tous les quatre ans : la prochaine est en 2028."],
      ["Un référendum national sur les droits de douane", false, "Il n'existe pas de référendum fédéral aux États-Unis."],
      ["L'élection du président de la Réserve fédérale", false, "Il est nommé par le président et confirmé par le Sénat."],
    ], "Les élections de mi-mandat (midterms) renouvellent les 435 sièges de la Chambre des représentants et environ un tiers des 100 sièges du Sénat. Elles conditionnent la capacité de Donald Trump à faire voter ses projets jusqu'en 2028.", "3 novembre 2026 : élections de mi-mandat aux États-Unis.", ["Le président a été élu en novembre 2024.", "Ces élections ont lieu deux ans après la présidentielle.", "Elles concernent le Congrès."], { n: ["elections-automne-2026"] }),
    q("B-ACT-GEO-015", "commerce", 3, "Que décide la Cour suprême des États-Unis le 20 février 2026 au sujet des droits de douane de Donald Trump ?", [
      ["La loi sur les pouvoirs économiques d'urgence (IEEPA) ne permet pas au président d'imposer des droits de douane", true, "Décision à 6 voix contre 3."],
      ["Elle valide tous les droits de douane au nom de la sécurité nationale", false, "C'est l'inverse : la base légale principale est invalidée."],
      ["Elle transfère la politique commerciale à l'OMC", false, "Une juridiction nationale ne peut transférer une compétence à une organisation internationale."],
      ["Elle supprime tous les droits de douane américains, y compris sectoriels", false, "Les droits fondés sur d'autres lois (section 232) restent en place."],
    ], "Par six voix contre trois, la Cour juge que l'IEEPA n'autorise pas l'instauration de droits de douane. L'administration bascule sur d'autres fondements, comme des droits temporaires au titre de la section 122 de la loi de 1974, limités à 150 jours.", "Février 2026 : la Cour suprême invalide les droits de douane fondés sur l'IEEPA.", ["La décision est défavorable au président.", "Elle porte sur une loi d'urgence économique.", "D'autres droits de douane, fondés sur d'autres lois, subsistent."], { n: ["douanes-cour-supreme"], r: true }),
  ],
};
