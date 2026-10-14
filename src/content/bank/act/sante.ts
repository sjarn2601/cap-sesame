// Enjeux contemporains : sciences, santé et espace (act.sante).
import type { SubjectBank } from "../helpers";
import { maker } from "./_q";

const S = "act.sante";
const q = maker(S);

export const ACT_SANTE: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Sciences, santé publique et conquête spatiale",
      objectives: ["Connaître le rôle de l'OMS et les niveaux d'alerte sanitaire", "Retenir les lauréats des Nobel scientifiques 2026 et leur domaine", "Situer les grandes missions spatiales récentes", "Expliquer simplement une découverte récompensée"],
      regle:
        "L'Organisation mondiale de la santé (OMS), créée en 1948 et installée à Genève, est l'agence de l'ONU chargée de la santé ; son directeur général est Tedros Adhanom Ghebreyesus. Son plus haut niveau d'alerte est l'urgence de santé publique de portée internationale (USPPI), prévue par le règlement sanitaire international. Les États-Unis ont quitté l'OMS en janvier 2026. Une épidémie est une hausse inhabituelle des cas dans une zone ; une pandémie est une épidémie étendue à plusieurs continents.\n\nLes prix Nobel scientifiques sont annoncés début octobre : physiologie ou médecine (Institut Karolinska), puis physique et chimie (Académie royale des sciences de Suède). Ils sont remis le 10 décembre, anniversaire de la mort d'Alfred Nobel.\n\nEn matière spatiale, la NASA (États-Unis), l'Agence spatiale européenne (ESA), la Chine et des entreprises privées comme SpaceX se partagent les grands programmes. Le programme Artemis vise le retour d'astronautes sur la Lune, où personne n'est allé depuis Apollo 17 en 1972.\n\nPoint d'actualité (vérifié le 14 octobre 2026). Le Nobel de médecine 2026 récompense Karl Deisseroth, Peter Hegemann et Georg Nagel pour l'optogénétique, qui permet de contrôler des neurones par la lumière. Le Nobel de physique revient à Francis Halzen pour l'observatoire IceCube, enfoui dans la glace du pôle Sud, qui a détecté des neutrinos de haute énergie venus de l'espace. Le Nobel de chimie est attribué au Français Henri Kagan et au Japonais Kenso Soai pour leurs travaux sur la synthèse asymétrique. En mai 2026, l'OMS a déclaré l'épidémie d'Ebola en RDC et en Ouganda urgence de santé publique de portée internationale. Du 1er au 10 avril 2026 (heure américaine), la mission Artemis II a fait le tour de la Lune avec quatre astronautes, dont le Canadien Jeremy Hansen.",
      formules:
        "OMS : Genève, 1948, directeur général Tedros Adhanom Ghebreyesus\nUSPPI : niveau d'alerte maximal de l'OMS\nNobel 2026 médecine : Deisseroth, Hegemann, Nagel (optogénétique)\nNobel 2026 physique : Francis Halzen (IceCube, neutrinos)\nNobel 2026 chimie : Henri Kagan (France) et Kenso Soai (Japon), synthèse asymétrique\nArtemis II : avril 2026, premier vol habité autour de la Lune depuis 1972",
      methode:
        "1. Pour un Nobel : discipline, lauréat(s), nationalité, découverte en quelques mots.\n2. Pour une alerte sanitaire : organisme, maladie, pays, niveau d'alerte.\n3. Pour une mission spatiale : agence, objectif, date, première ou record.\n4. Rattacher chaque découverte à une application concrète pour mieux la retenir.",
      exemple:
        "Question : « Pour quels travaux Henri Kagan a-t-il reçu le prix Nobel de chimie 2026 ? »\nRaisonnement : beaucoup de molécules existent sous deux formes « miroirs » (chirales) qui peuvent avoir des effets très différents dans l'organisme. Kagan a étudié comment produire sélectivement l'une des deux formes et découvert des effets non linéaires dans ces réactions ; Soai a découvert une autocatalyse asymétrique. Réponse : la synthèse organique asymétrique, essentielle pour fabriquer des médicaments.",
      erreur:
        "✗ Attribuer le Nobel de chimie 2026 à un seul lauréat → ✓ Il est partagé entre Henri Kagan et Kenso Soai.\n✗ Croire qu'Artemis II s'est posée sur la Lune → ✓ C'était un survol, sans alunissage.\n✗ Confondre épidémie et pandémie → ✓ La pandémie touche plusieurs continents.\n✗ Situer le siège de l'OMS à New York → ✓ Il est à Genève ; New York accueille le siège de l'ONU.",
      approfondir:
        "Retiens chaque Nobel avec une image : la lumière qui allume un neurone (médecine), un cube de glace au pôle Sud (physique), la main droite et la main gauche (chimie). Pour mémoire, le Nobel de médecine 2025 avait récompensé la tolérance immunitaire périphérique (Mary Brunkow, Fred Ramsdell, Shimon Sakaguchi). Les questions portent souvent sur la nationalité : un lauréat français est un candidat idéal pour le concours. Lien avec act.geo : le retrait américain de l'OMS affaiblit le financement de la santé mondiale.",
      cards: [
        ["Nobel de chimie 2026", "Henri Kagan (France) et Kenso Soai (Japon), synthèse asymétrique", false],
        ["Optogénétique", "Contrôle de l'activité de neurones par la lumière (Nobel de médecine 2026)", true],
        ["IceCube", "Détecteur de neutrinos dans la glace du pôle Sud (Nobel de physique 2026, Francis Halzen)", false],
        ["Artemis II", "Survol habité de la Lune, avril 2026, premier depuis Apollo 17 (1972)", false],
        ["Siège de l'OMS", "Genève", true],
      ],
    },
  ],
  questions: [
    q("B-ACT-SANTE-001", "nobel", 1, "À qui le prix Nobel de chimie 2026 a-t-il été attribué ?", [
      ["Au Français Henri Kagan et au Japonais Kenso Soai", true, "Pour la synthèse organique asymétrique."],
      ["Au Français Henri Kagan seul", false, "Le prix est partagé avec Kenso Soai."],
      ["À Karl Deisseroth, Peter Hegemann et Georg Nagel", false, "Ce sont les lauréats du Nobel de médecine 2026."],
      ["À Francis Halzen", false, "Lauréat du Nobel de physique 2026."],
    ], "Annoncé le 7 octobre 2026, le Nobel de chimie récompense Henri Kagan et Kenso Soai pour la découverte des effets non linéaires et de l'autocatalyse dans la synthèse organique asymétrique.", "Nobel de chimie 2026 : Henri Kagan et Kenso Soai.", ["L'un des lauréats est français.", "Le prix est partagé avec un chercheur asiatique.", "Ce n'est pas le prix de médecine."], { n: ["nobel-chimie-2026"] }),
    q("B-ACT-SANTE-002", "nobel", 2, "Quel domaine de recherche le prix Nobel de chimie 2026 a-t-il récompensé ?", [
      ["La synthèse organique asymétrique, qui permet d'obtenir une seule des deux formes « miroirs » d'une molécule", true, "Enjeu majeur pour les médicaments."],
      ["Les vaccins à ARN messager", false, "Ils ont été récompensés par le Nobel de médecine 2023."],
      ["Les ciseaux génétiques CRISPR-Cas9", false, "Nobel de chimie 2020."],
      ["La prédiction de la structure des protéines par l'IA", false, "Nobel de chimie 2024."],
    ], "Les molécules chirales existent sous deux formes images l'une de l'autre dans un miroir. Kagan et Soai ont mis en évidence des effets non linéaires et une autocatalyse qui expliquent comment on peut obtenir, et amplifier, une seule forme.", "Nobel de chimie 2026 : chimie asymétrique (chiralité).", ["Pense à la main droite et à la main gauche.", "Le terme scientifique est « chiralité ».", "La synthèse produit sélectivement une seule forme."], { n: ["nobel-chimie-2026"], a: "exemple" }),
    q("B-ACT-SANTE-003", "nobel", 1, "Quelle technique a été récompensée par le prix Nobel de physiologie ou médecine 2026 ?", [
      ["L'optogénétique, qui contrôle l'activité de neurones à l'aide de la lumière", true, "Lauréats : Deisseroth, Hegemann, Nagel."],
      ["La tolérance immunitaire périphérique", false, "Sujet du Nobel de médecine 2025."],
      ["La découverte des microARN", false, "Sujet du Nobel de médecine 2024."],
      ["L'imagerie par résonance magnétique", false, "Récompensée en 2003."],
    ], "Les lauréats ont découvert des canaux ioniques activés par la lumière (canalrhodopsines) et les ont utilisés pour rendre des neurones sensibles à la lumière : on peut ainsi les activer ou les éteindre à volonté pour étudier le cerveau.", "Nobel de médecine 2026 : optogénétique.", ["La technique utilise la lumière.", "Elle sert à étudier le cerveau.", "Le mot contient « opto » et « génétique »."], { n: ["nobel-sciences-2026"] }),
    q("B-ACT-SANTE-004", "nobel", 2, "Pour quelles recherches Francis Halzen a-t-il reçu le prix Nobel de physique 2026 ?", [
      ["Pour l'observatoire IceCube et la détection de neutrinos de haute énergie d'origine astrophysique", true, "Le détecteur est enfoui dans la glace de l'Antarctique."],
      ["Pour la découverte du boson de Higgs", false, "Nobel de physique 2013."],
      ["Pour la détection des ondes gravitationnelles", false, "Nobel de physique 2017."],
      ["Pour les réseaux de neurones artificiels", false, "Nobel de physique 2024."],
    ], "IceCube, installé sous la station du pôle Sud, détecte les traces lumineuses laissées par de rares neutrinos traversant la glace. Il a mis en évidence des neutrinos de très haute énergie d'origine astrophysique, venus du cosmos lointain.", "Nobel de physique 2026 : Francis Halzen, IceCube et neutrinos cosmiques.", ["Le détecteur est installé dans un lieu extrême.", "Il est enfoui dans la glace.", "Il traque une particule presque insaisissable."], { n: ["nobel-sciences-2026"], r: true }),
    q("B-ACT-SANTE-005", "oms", 1, "Où se trouve le siège de l'Organisation mondiale de la santé (OMS) ?", [
      ["À Genève", true, "Depuis sa création en 1948."],
      ["À New York", false, "Siège de l'ONU, pas de l'OMS."],
      ["À Paris", false, "Paris accueille l'UNESCO et l'OCDE."],
      ["À Vienne", false, "Vienne accueille notamment l'Agence internationale de l'énergie atomique."],
    ], "L'OMS, agence spécialisée de l'ONU, siège à Genève. Elle est dirigée par Tedros Adhanom Ghebreyesus.", "OMS : siège à Genève.", ["La ville accueille de nombreuses organisations internationales.", "Elle est en Suisse.", "C'est aussi le siège de l'OMC."], { a: "formules" }),
    q("B-ACT-SANTE-006", "oms", 2, "Quel niveau d'alerte l'OMS a-t-elle déclenché en mai 2026 face à l'épidémie d'Ebola en RDC et en Ouganda ?", [
      ["Une urgence de santé publique de portée internationale", true, "Niveau d'alerte maximal du règlement sanitaire international."],
      ["Une pandémie mondiale officielle", false, "L'épidémie reste localisée en Afrique centrale et de l'Est."],
      ["Un confinement mondial obligatoire", false, "L'OMS ne peut pas imposer de confinement aux États."],
      ["Aucune alerte particulière", false, "Une USPPI a bien été déclarée."],
    ], "Mi-mai 2026, l'OMS qualifie l'épidémie d'Ebola en République démocratique du Congo et en Ouganda d'urgence de santé publique de portée internationale (USPPI), ce qui déclenche des recommandations coordonnées aux États.", "Ebola, mai 2026 : USPPI déclarée par l'OMS.", ["C'est le niveau d'alerte le plus élevé.", "Son sigle compte cinq lettres.", "Il est prévu par le règlement sanitaire international."], { n: ["ebola-oms-2026"] }),
    q("B-ACT-SANTE-007", "oms", 2, "Quel grand pays a quitté l'Organisation mondiale de la santé, avec effet en janvier 2026 ?", [
      ["Les États-Unis", true, "Retrait décidé par Donald Trump en janvier 2025."],
      ["La Chine", false, "Elle reste membre."],
      ["La Russie", false, "Elle reste membre."],
      ["Le Royaume-Uni", false, "Il reste membre."],
    ], "Le retrait des États-Unis, annoncé dès le premier jour du second mandat de Donald Trump, a pris effet un an plus tard, en janvier 2026. Ils étaient le premier contributeur financier de l'organisation.", "Les États-Unis ont quitté l'OMS en janvier 2026.", ["Le retrait a été décidé un an plus tôt.", "Ce pays était le premier financeur de l'OMS.", "Son président l'a annoncé dès son investiture."], { n: ["ebola-oms-2026"] }),
    q("B-ACT-SANTE-008", "espace", 1, "Quelle était la particularité de la mission Artemis II d'avril 2026 ?", [
      ["Premier vol habité autour de la Lune depuis Apollo 17 en 1972", true, "Survol sans alunissage."],
      ["Premier alunissage d'une femme", false, "Artemis II ne s'est pas posée sur la Lune."],
      ["Premier vol habité vers Mars", false, "Aucun vol habité vers Mars n'a eu lieu."],
      ["Premier vol spatial privé", false, "Artemis est un programme de la NASA ; des vols privés ont eu lieu avant."],
    ], "Lancée le 1er avril 2026, Artemis II a emmené quatre astronautes (trois Américains et un Canadien) autour de la Lune avant un retour dans le Pacifique. C'est le premier vol habité au-delà de l'orbite basse depuis 1972.", "Artemis II : survol habité de la Lune, premier depuis 1972.", ["La mission n'a pas atterri.", "Le dernier voyage humain vers la Lune datait du programme Apollo.", "Il s'agissait de contourner la Lune."], { n: ["artemis-2"] }),
    q("B-ACT-SANTE-009", "espace", 2, "Quel pays, outre les États-Unis, avait un astronaute à bord d'Artemis II ?", [
      ["Le Canada", true, "Jeremy Hansen, de l'Agence spatiale canadienne."],
      ["La France", false, "Aucun astronaute français à bord."],
      ["Le Japon", false, "Aucun astronaute japonais à bord."],
      ["L'Inde", false, "Aucun astronaute indien à bord."],
    ], "L'équipage comptait Reid Wiseman, Victor Glover et Christina Koch (NASA) et Jeremy Hansen (Agence spatiale canadienne), premier non-Américain à voyager autour de la Lune.", "Artemis II : trois astronautes de la NASA et un Canadien, Jeremy Hansen.", ["C'est un voisin des États-Unis.", "Il dispose de sa propre agence spatiale.", "Sa capitale est Ottawa."], { n: ["artemis-2"], r: true }),
    q("B-ACT-SANTE-010", "nobel", 1, "Quel jour les prix Nobel sont-ils traditionnellement remis ?", [
      ["Le 10 décembre", true, "Anniversaire de la mort d'Alfred Nobel."],
      ["Le 1er octobre", false, "Les annonces ont lieu début octobre ; la remise est en décembre."],
      ["Le 1er janvier", false, "Aucun lien avec les Nobel."],
      ["Le 14 juillet", false, "Fête nationale française."],
    ], "Les prix sont annoncés début octobre et remis le 10 décembre à Stockholm, sauf le prix de la paix, remis le même jour à Oslo.", "Nobel : annonces début octobre, remise le 10 décembre.", ["Les annonces et la remise sont distinctes.", "La remise a lieu en fin d'année.", "C'est la date de la mort d'Alfred Nobel (1896)."]),
    q("B-ACT-SANTE-011", "notions", 2, "Qu'est-ce qui distingue une pandémie d'une épidémie ?", [
      ["La pandémie est une épidémie qui s'étend à plusieurs continents", true, "Critère d'extension géographique."],
      ["La pandémie est toujours mortelle", false, "La gravité n'entre pas dans la définition."],
      ["La pandémie ne concerne que les animaux", false, "Confusion avec l'épizootie."],
      ["L'épidémie dure plus longtemps qu'une pandémie", false, "La durée n'est pas le critère."],
    ], "Une épidémie est une augmentation inhabituelle du nombre de cas d'une maladie dans une région. On parle de pandémie lorsqu'elle se propage à une grande partie du monde, comme le Covid-19 en 2020.", "Pandémie = épidémie étendue à plusieurs continents.", ["La différence est géographique.", "Le préfixe « pan » signifie « tout ».", "Le Covid-19 en est un exemple."], { a: "erreur" }),
    q("B-ACT-SANTE-012", "nobel", 3, "Quel point commun relie les prix Nobel de chimie et de médecine 2026 ?", [
      ["Ils sont tous deux partagés entre plusieurs lauréats", true, "Deux lauréats en chimie, trois en médecine."],
      ["Ils récompensent tous deux des chercheurs français", false, "Seul Henri Kagan est français."],
      ["Ils portent tous deux sur l'intelligence artificielle", false, "Aucun ne porte sur l'IA."],
      ["Ils ont été attribués à titre posthume", false, "Le Nobel n'est pas décerné à titre posthume."],
    ], "Chimie : Henri Kagan et Kenso Soai. Médecine : Karl Deisseroth, Peter Hegemann et Georg Nagel. Le physicien Francis Halzen est, lui, seul lauréat. Le règlement des Nobel exclut l'attribution posthume.", "Nobel 2026 : chimie partagée (2 lauréats), médecine partagée (3), physique à un seul lauréat.", ["Compte les lauréats de chaque prix.", "Le prix de physique est à part.", "Un prix peut être partagé entre trois personnes au maximum."], { n: ["nobel-chimie-2026", "nobel-sciences-2026"], r: true }),
    q("B-ACT-SANTE-013", "nobel", 2, "Quelle découverte le prix Nobel de médecine 2025 a-t-il récompensée ?", [
      ["La tolérance immunitaire périphérique et les lymphocytes T régulateurs", true, "Lauréats : Mary Brunkow, Fred Ramsdell et Shimon Sakaguchi."],
      ["L'optogénétique", false, "Nobel de médecine 2026."],
      ["Les vaccins à ARN messager", false, "Nobel de médecine 2023."],
      ["La découverte du virus de l'hépatite C", false, "Nobel de médecine 2020."],
    ], "En 2025, Brunkow, Ramsdell et Sakaguchi ont été récompensés pour avoir montré comment des lymphocytes T régulateurs empêchent le système immunitaire d'attaquer l'organisme.", "Nobel de médecine 2025 : tolérance immunitaire périphérique.", ["Le sujet concerne le système immunitaire.", "Il explique pourquoi il n'attaque pas notre propre corps.", "Des lymphocytes « régulateurs » sont en jeu."], { a: "approfondir" }),
  ],
};
