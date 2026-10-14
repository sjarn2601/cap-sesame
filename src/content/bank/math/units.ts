// MATH · Grandeurs et unités : conversions, durées, vitesses moyennes, débits.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.units";
const m = maker(S);

export const UNITS: PartieMath = {
  skill: competence(S, "Proportions", "Conversions, durées, vitesses et débits", ["conversion", "unite", "vitesse moyenne", "debit", "duree", "km/h", "m/s", "litre", "aller retour"]),
  lesson: {
    skillId: S,
    title: "Grandeurs et unités : conversions, durées, vitesses moyennes et débits",
    objectives: ["Convertir longueurs, aires, volumes et durées sans erreur", "Calculer une vitesse moyenne, une distance ou une durée", "Utiliser un débit", "Éviter le piège de la moyenne des vitesses"],
    prerequisites: ["math.prop"],
    regle:
      "Conversions : chaque unité de longueur vaut 10 fois la suivante (km, hm, dam, m, dm, cm, mm). Pour les aires, le facteur est 100 entre deux unités voisines (1 m² = 100 dm² = 10 000 cm²). Pour les volumes, il est de 1 000 (1 m³ = 1 000 dm³ = 1 000 000 cm³). À retenir : 1 dm³ = 1 L, 1 m³ = 1 000 L et 1 cm³ = 1 mL.\n\nDurées : le système est sexagésimal. 1 h = 60 min = 3 600 s. Une durée décimale n'est pas une durée en heures et minutes : 2,5 h = 2 h 30 min et non 2 h 50 min ; 0,1 h = 6 min. Pour passer de 1 h 45 min à des heures décimales : 45/60 = 0,75, soit 1,75 h.\n\nVitesse moyenne : v = d / t, d = v × t, t = d / v. Les unités doivent être cohérentes (km et h, ou m et s). Pour passer des km/h aux m/s, on divise par 3,6 ; des m/s aux km/h, on multiplie par 3,6.\n\nPiège majeur : la vitesse moyenne sur un trajet n'est pas la moyenne des vitesses. On calcule toujours distance totale / durée totale. Sur un aller-retour à 60 km/h puis 40 km/h, la vitesse moyenne est 48 km/h, pas 50 km/h, car on passe plus de temps à la vitesse la plus lente.\n\nDébit : débit = quantité / durée (L/min, m³/h, Mbit/s). Le temps nécessaire vaut quantité / débit. En informatique, 1 octet = 8 bits : un débit en mégabits par seconde (Mbit/s) et une taille en mégaoctets (Mo) ne se comparent qu'après conversion.",
    formules:
      "v = d / t ; d = v × t ; t = d / v\nkm/h → m/s : diviser par 3,6 ; m/s → km/h : multiplier par 3,6\n1 h = 60 min = 3 600 s ; 0,1 h = 6 min ; 0,25 h = 15 min\n1 m² = 10 000 cm² ; 1 km² = 100 ha = 1 000 000 m²\n1 m³ = 1 000 L ; 1 dm³ = 1 L ; 1 cm³ = 1 mL\nVitesse moyenne = distance totale / durée totale\n1 octet = 8 bits",
    methode:
      "1. Écris la formule utile (v = d/t ou durée = quantité / débit).\n2. Convertis toutes les données dans des unités compatibles.\n3. Convertis les durées en heures décimales (ou en minutes) avant de calculer.\n4. Pour une vitesse moyenne, calcule séparément la distance totale et la durée totale.\n5. Reconvertis le résultat dans l'unité demandée (h et min, m/s…).",
    exemple:
      "Un automobiliste parcourt 150 km à 100 km/h puis 150 km à 75 km/h. Durées : 150/100 = 1,5 h et 150/75 = 2 h. Durée totale : 3,5 h pour 300 km. Vitesse moyenne : 300/3,5 ≈ 85,7 km/h, et non (100 + 75)/2 = 87,5 km/h.\n\nUn réservoir de 1,8 m³ se remplit à 30 L/min. 1,8 m³ = 1 800 L ; durée : 1 800/30 = 60 min = 1 h.",
    erreur:
      "✗ Lire 1,5 h comme 1 h 50 min → ✓ 1,5 h = 1 h 30 min (0,5 × 60)\n✗ Faire la moyenne des vitesses de l'aller et du retour → ✓ distance totale / durée totale\n✗ Convertir 1 m² en 100 cm² → ✓ 1 m² = 10 000 cm² (facteur 100 au carré)\n✗ Multiplier par 3,6 pour passer de km/h en m/s → ✓ diviser par 3,6\n✗ Comparer des Mo et des Mbit sans conversion → ✓ multiplier les octets par 8",
    approfondir:
      "Sur un aller-retour de même distance à v₁ puis v₂, la vitesse moyenne vaut 2v₁v₂/(v₁ + v₂) (moyenne harmonique). Elle est toujours inférieure à la moyenne simple.\n\nOrdres de grandeur utiles : un piéton marche à environ 5 km/h, un cycliste roule à 15 à 25 km/h, 36 km/h = 10 m/s, 90 km/h = 25 m/s.\n\nGestion du temps : les problèmes de vitesse sont souvent longs à lire mais courts à résoudre. Pose tout de suite le tableau « distance, durée, vitesse » de chaque étape ; la ligne « total » donne la réponse.",
    cards: [
      ["90 km/h en m/s", "25 m/s (diviser par 3,6)", true],
      ["2,3 h en heures et minutes", "2 h 18 min", true],
      ["Vitesse moyenne", "Distance totale / durée totale, jamais la moyenne des vitesses", false],
      ["1 m³ en litres", "1 000 L", true],
      ["Aller-retour à v₁ et v₂", "Vitesse moyenne = 2v₁v₂/(v₁ + v₂)", false],
    ],
  },
  questions: [
    m("B-MATH-UNIT-001", "vitesse", 1, "Un TGV roule à 288 km/h. Quelle est sa vitesse en mètres par seconde ?", [
      ["80 m/s", true, "288 000 m en 3 600 s : 288 ÷ 3,6 = 80 m/s."],
      ["1 036,8 m/s", false, "Multiplication par 3,6 au lieu d'une division."],
      ["4,8 m/s", false, "Division par 60 seulement, comme si une heure comptait 60 secondes."],
      ["0,08 m/s", false, "Les kilomètres n'ont pas été convertis en mètres : 288 ÷ 3 600."],
    ], "288 km/h = 288 000 m en 3 600 s. 288 000 ÷ 3 600 = 80 m/s. Raccourci : diviser par 3,6. Contrôle : 80 m/s, c'est 80 m chaque seconde, cohérent pour un train à grande vitesse.", "Pour passer des km/h aux m/s, on divise par 3,6.", [
      "Une heure compte 3 600 secondes et un kilomètre 1 000 mètres.",
      "Convertis 288 km en mètres, puis divise par 3 600.",
      "Cela revient à diviser 288 par 3,6.",
    ], "formules"),
    m("B-MATH-UNIT-002", "duree", 1, "Un car parcourt 210 km à la vitesse moyenne de 84 km/h. Combien de temps dure le trajet ?", [
      ["2 h 30 min", true, "210 ÷ 84 = 2,5 h, et 0,5 h = 30 min."],
      ["2 h 50 min", false, "2,5 h lu comme 2 h 50 : confusion entre décimales et minutes."],
      ["2 h 05 min", false, "0,5 h lu comme 5 minutes."],
      ["0 h 24 min", false, "Division inversée : 84 ÷ 210 = 0,4 h."],
    ], "t = d / v = 210 / 84 = 2,5 h. La partie décimale 0,5 h vaut 0,5 × 60 = 30 min. Durée : 2 h 30 min.", "Une durée décimale se convertit en minutes en multipliant la partie décimale par 60.", [
      "Utilise t = d / v.",
      "210 ÷ 84 donne une durée en heures décimales.",
      "Convertis 0,5 h en minutes.",
    ], "erreur"),
    m("B-MATH-UNIT-003", "vmoy", 2, "Un cycliste monte un col de 12 km à 16 km/h, puis redescend par la même route à 48 km/h. Quelle est sa vitesse moyenne sur l'aller-retour ?", [
      ["24 km/h", true, "24 km parcourus en 0,75 h + 0,25 h = 1 h."],
      ["32 km/h", false, "Moyenne simple des deux vitesses : le cycliste passe pourtant bien plus de temps en montée."],
      ["12 km/h", false, "Seule la distance de la montée (12 km) a été divisée par la durée totale."],
      ["64 km/h", false, "Les deux vitesses ont été additionnées."],
    ], "Montée : 12 / 16 = 0,75 h. Descente : 12 / 48 = 0,25 h. Total : 24 km en 1 h, soit 24 km/h. La moyenne simple 32 km/h est fausse car le cycliste roule lentement pendant les trois quarts du temps.", "Vitesse moyenne = distance totale / durée totale, jamais la moyenne des vitesses.", [
      "Calcule la durée de la montée et celle de la descente.",
      "Distance totale : 24 km ; durée totale : 0,75 h + 0,25 h.",
      "Divise 24 km par la durée totale.",
    ], "erreur"),
    m("B-MATH-UNIT-004", "debit", 2, "Une piscine de 50 m³ est remplie par un tuyau dont le débit est de 25 L/min. Combien de temps dure le remplissage ?", [
      ["33 h 20 min", true, "50 000 L ÷ 25 = 2 000 min = 33 h 20 min."],
      ["2 h", false, "Les m³ n'ont pas été convertis en litres : 50 ÷ 25."],
      ["20 h", false, "2 000 min divisées par 100 au lieu de 60."],
      ["33 h 33 min", false, "2 000 ÷ 60 ≈ 33,33 h, et les décimales ont été lues comme des minutes."],
    ], "50 m³ = 50 000 L. Durée : 50 000 / 25 = 2 000 min. 2 000 = 33 × 60 + 20, soit 33 h 20 min.", "Durée = quantité / débit, après avoir mis quantité et débit dans la même unité.", [
      "Convertis le volume de la piscine en litres.",
      "Divise ce volume par le débit pour obtenir des minutes.",
      "Combien d'heures entières dans 2 000 minutes, et combien de minutes restent ?",
    ], "regle", false),
    m("B-MATH-UNIT-005", "conv", 2, "Un aquarium a la forme d'un pavé de 80 cm × 40 cm × 45 cm. Quelle est sa contenance ?", [
      ["144 L", true, "80 × 40 × 45 = 144 000 cm³ = 144 dm³ = 144 L."],
      ["1 440 L", false, "Conversion erronée : division par 100 au lieu de 1 000."],
      ["14,4 L", false, "Conversion erronée : division par 10 000 au lieu de 1 000."],
      ["144 000 L", false, "Les cm³ ont été pris pour des litres."],
    ], "Volume : 80 × 40 × 45 = 144 000 cm³. Comme 1 L = 1 dm³ = 1 000 cm³, cela fait 144 L. Autre voie : 8 dm × 4 dm × 4,5 dm = 144 dm³.", "1 L = 1 dm³ = 1 000 cm³.", [
      "Calcule le volume en cm³.",
      "Combien de cm³ dans un litre ?",
      "Ou convertis d'abord chaque dimension en dm.",
    ], "formules"),
    m("B-MATH-UNIT-006", "vmoy", 3, "Un automobiliste part à 7 h 40 et arrive à 12 h 50 après avoir parcouru 465 km, pause de 20 minutes comprise. Quelle est sa vitesse moyenne sur l'ensemble du trajet, pause incluse ?", [
      ["90 km/h", true, "Durée totale 5 h 10 min = 31/6 h ; 465 ÷ 31/6 = 90 km/h."],
      ["96,2 km/h", false, "La pause a été retirée de la durée (4 h 50 min) alors que l'énoncé demande de l'inclure."],
      ["91,2 km/h", false, "5 h 10 min lu comme 5,10 h : erreur de conversion des minutes."],
      ["84,5 km/h", false, "La pause a été ajoutée une seconde fois : 5 h 30 min."],
    ], "Durée entre 7 h 40 et 12 h 50 : 5 h 10 min (la pause y est déjà). 10 min = 1/6 h, donc 5 h 10 min = 31/6 h ≈ 5,167 h. Vitesse : 465 × 6 / 31 = 90 km/h.", "On convertit une durée en heures décimales avant de diviser (10 min = 1/6 h, pas 0,10 h).", [
      "Calcule la durée entre le départ et l'arrivée ; contient-elle déjà la pause ?",
      "5 h 10 min en heures décimales : 10 min = 1/6 h.",
      "Divise 465 par 31/6.",
    ], "methode", true),
    m("B-MATH-UNIT-007", "duree", 1, "Combien de secondes compte une durée de 2,3 heures ?", [
      ["8 280 s", true, "2,3 × 3 600 = 8 280 s."],
      ["9 000 s", false, "2,3 h lu comme 2 h 30 min."],
      ["7 380 s", false, "2,3 h lu comme 2 h 03 min."],
      ["138 s", false, "Conversion arrêtée aux minutes : 2,3 × 60 = 138 min."],
    ], "1 h = 3 600 s, donc 2,3 h = 2,3 × 3 600 = 8 280 s. Vérification : 2,3 h = 2 h 18 min = 7 200 s + 1 080 s.", "1 h = 3 600 s ; une durée décimale se multiplie directement par 3 600.", [
      "Combien de secondes dans une heure ?",
      "Multiplie 2,3 par 3 600.",
      "Contrôle : 0,3 h = 18 min.",
    ]),
    m("B-MATH-UNIT-008", "conso", 2, "Une voiture consomme 6,4 L de gazole aux 100 km. Le gazole coûte 1,75 € le litre. Quel est le coût en carburant d'un trajet de 350 km ?", [
      ["39,20 €", true, "6,4 × 3,5 = 22,4 L, et 22,4 × 1,75 = 39,20 €."],
      ["11,20 €", false, "C'est le coût pour 100 km seulement."],
      ["22,40 €", false, "C'est le nombre de litres consommés, pas leur prix."],
      ["392 €", false, "350 km comptés comme 35 centaines de km au lieu de 3,5."],
    ], "350 km = 3,5 × 100 km. Consommation : 6,4 × 3,5 = 22,4 L. Coût : 22,4 × 1,75 = 39,20 €.", "Une consommation « aux 100 km » se multiplie par le nombre de centaines de kilomètres.", [
      "Combien de fois 100 km dans 350 km ?",
      "Calcule le nombre de litres consommés.",
      "Multiplie ce volume par le prix du litre.",
    ]),
    m("B-MATH-UNIT-009", "vmoy", 3, "Un coureur doit parcourir 10 km. Il court les 6 premiers kilomètres à 12 km/h. À quelle vitesse doit-il courir les 4 derniers pour avoir une vitesse moyenne de 15 km/h sur l'ensemble ?", [
      ["24 km/h", true, "Durée totale visée 40 min, déjà 30 min écoulées : 4 km en 10 min."],
      ["18 km/h", false, "Moyenne simple : (12 + x)/2 = 15."],
      ["19,5 km/h", false, "Moyenne pondérée par les distances au lieu des durées."],
      ["40 km/h", false, "10/15 h arrondi à 0,6 h = 36 min : il ne resterait que 6 min."],
    ], "Pour 10 km à 15 km/h, il faut 10/15 h = 40 min. Les 6 premiers km à 12 km/h prennent 0,5 h = 30 min. Il reste 10 min, soit 1/6 h, pour 4 km : 4 × 6 = 24 km/h.", "Une vitesse moyenne imposée fixe la durée totale ; on raisonne sur les durées, pas sur les vitesses.", [
      "Quelle durée totale correspond à 10 km à 15 km/h ?",
      "Combien de temps ont pris les 6 premiers kilomètres ?",
      "Il reste 10 minutes pour 4 km : quelle vitesse ?",
    ], "approfondir"),
    m("B-MATH-UNIT-010", "debit", 2, "Une connexion offre un débit de 50 Mbit/s. Combien de temps faut-il pour télécharger un fichier de 1,5 Go ? (1 octet = 8 bits, 1 Go = 1 000 Mo)", [
      ["4 min", true, "1 500 Mo = 12 000 Mbit ; 12 000 ÷ 50 = 240 s = 4 min."],
      ["30 s", false, "Oubli de la conversion des octets en bits (× 8)."],
      ["2 min 40 s", false, "240 s converties en 2,40 min puis lues comme 2 min 40 s."],
      ["3,75 s", false, "Facteur 8 placé du mauvais côté : 1 500 ÷ (50 × 8)."],
    ], "1,5 Go = 1 500 Mo = 1 500 × 8 = 12 000 Mbit. Durée : 12 000 / 50 = 240 s. Or 240 s = 4 × 60 s = 4 min.", "Avant de diviser une taille par un débit, convertir les octets en bits (× 8).", [
      "Le débit est en bits, la taille en octets.",
      "Convertis 1,5 Go en mégabits.",
      "Divise par 50, puis convertis les secondes en minutes.",
    ], "regle"),
  ],
};
