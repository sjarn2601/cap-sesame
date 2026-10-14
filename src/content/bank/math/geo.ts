// MATH · Géométrie : périmètres, aires, volumes, Pythagore, Thalès, agrandissements.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.geo";
const m = maker(S);

export const GEO: PartieMath = {
  skill: competence(S, "Géométrie", "Géométrie : longueurs, aires et volumes", ["geometrie", "perimetre", "aire", "volume", "pythagore", "thales", "cercle", "disque", "cylindre", "agrandissement", "reduction", "echelle"]),
  lesson: {
    skillId: S,
    title: "Géométrie : périmètres, aires, volumes, Pythagore et Thalès",
    objectives: ["Calculer périmètres, aires et volumes des figures usuelles", "Utiliser le théorème de Pythagore et le théorème de Thalès", "Prévoir l'effet d'un agrandissement sur les aires et les volumes"],
    prerequisites: ["math.calc", "math.units"],
    regle:
      "Périmètres : rectangle 2(L + l) ; carré 4c ; cercle 2πr = πd. Aires : rectangle L × l ; carré c² ; triangle base × hauteur / 2 ; trapèze (B + b) × h / 2 ; disque πr². Volumes : pavé L × l × h ; cube c³ ; cylindre πr² × h ; cône et pyramide aire de la base × h / 3 ; boule (4/3)πr³.\n\nThéorème de Pythagore : dans un triangle rectangle, le carré de l'hypoténuse (le côté opposé à l'angle droit, le plus long) est égal à la somme des carrés des deux autres côtés : a² + b² = c². Pour trouver un côté de l'angle droit, on soustrait : b² = c² − a². Triplets à connaître : (3, 4, 5), (5, 12, 13), (8, 15, 17) et leurs multiples (6, 8, 10), (9, 12, 15)…\n\nThéorème de Thalès : quand deux droites parallèles coupent deux sécantes, les longueurs correspondantes sont proportionnelles. Il s'applique aux ombres (au même moment, hauteur et ombre sont proportionnelles), aux triangles emboîtés et aux plans.\n\nAgrandissement et réduction : si toutes les longueurs sont multipliées par k, les aires sont multipliées par k² et les volumes par k³. Doubler les dimensions d'une boîte multiplie son volume par 8. Une maquette au 1/50 a un volume 125 000 fois plus petit que l'objet réel.\n\nUnités : une aire s'exprime en unités carrées, un volume en unités cubes ; convertis toutes les longueurs dans la même unité avant de calculer, et souviens-toi que 1 m³ = 1 000 L.",
    formules:
      "Cercle : périmètre 2πr ; disque : aire πr²\nTriangle : base × hauteur / 2 ; trapèze : (B + b) × h / 2\nPavé : L × l × h ; cylindre : πr²h ; cône, pyramide : base × h / 3\nBoule : (4/3)πr³\nPythagore : c² = a² + b² (c hypoténuse)\nThalès : rapports de longueurs égaux\nAgrandissement de rapport k : longueurs × k ; aires × k² ; volumes × k³",
    methode:
      "1. Fais un schéma rapide et note les données avec leurs unités.\n2. Convertis toutes les longueurs dans la même unité.\n3. Choisis la bonne formule (aire, volume, Pythagore, Thalès).\n4. Vérifie que tu utilises le rayon et non le diamètre.\n5. Contrôle l'ordre de grandeur et l'unité du résultat (m, m², m³, L).",
    exemple:
      "Une rampe d'accès monte de 1,5 m sur une distance horizontale de 8 m. Sa longueur est l'hypoténuse : √(8² + 1,5²) = √(64 + 2,25) = √66,25 ≈ 8,14 m.\n\nUne boîte de conserve a un diamètre de 10 cm et une hauteur de 12 cm. Rayon 5 cm ; volume π × 25 × 12 = 300π ≈ 942 cm³, soit environ 0,94 L.",
    erreur:
      "✗ Utiliser le diamètre à la place du rayon → ✓ r = d/2\n✗ Additionner les côtés au lieu des carrés : c = a + b → ✓ c² = a² + b²\n✗ Additionner les carrés pour un côté de l'angle droit → ✓ b² = c² − a²\n✗ Multiplier une aire par k lors d'un agrandissement → ✓ multiplier par k² (et un volume par k³)\n✗ Oublier de diviser par 2 l'aire d'un triangle ou d'un trapèze → ✓ base × hauteur / 2",
    approfondir:
      "Un disque inscrit dans un carré de côté c a pour rayon c/2 ; il occupe π/4 ≈ 78,5 % du carré. Cette proportion ne dépend pas de la taille du carré.\n\nEn pourcentage : augmenter toutes les longueurs de 10 % augmente les aires de 21 % (1,1² = 1,21) et les volumes de 33,1 % (1,1³ = 1,331).\n\nGestion du temps : la calculatrice donne π, mais pour éliminer des options, π ≈ 3,14 suffit. Repère d'abord l'ordre de grandeur.",
    cards: [
      ["Aire d'un disque", "πr²", false],
      ["Volume d'un cylindre", "πr² × h", false],
      ["Pythagore", "Hypoténuse² = somme des carrés des deux autres côtés", false],
      ["Longueurs × k", "Aires × k², volumes × k³", false],
      ["Triplet pythagoricien", "3, 4, 5 (et 6, 8, 10 ; 5, 12, 13)", false],
    ],
  },
  questions: [
    m("B-MATH-GEO-001", "pythagore", 1, "Un écran rectangulaire mesure 48 cm de large et 36 cm de haut. Quelle est la longueur de sa diagonale ?", [
      ["60 cm", true, "√(48² + 36²) = √(2 304 + 1 296) = √3 600 = 60."],
      ["84 cm", false, "Côtés additionnés : 48 + 36 au lieu des carrés."],
      ["42 cm", false, "Moyenne des deux côtés."],
      ["31,7 cm", false, "Carrés soustraits : √(48² − 36²), comme si la diagonale était un côté de l'angle droit."],
    ], "La diagonale est l'hypoténuse d'un triangle rectangle de côtés 48 et 36 : d² = 2 304 + 1 296 = 3 600, d = 60 cm. On reconnaît le triplet (3, 4, 5) multiplié par 12.", "Pythagore : hypoténuse² = somme des carrés des deux côtés de l'angle droit.", [
      "La diagonale coupe l'écran en deux triangles rectangles.",
      "Calcule 48² + 36².",
      "Prends la racine carrée de 3 600.",
    ], "formules"),
    m("B-MATH-GEO-002", "aire", 2, "Un carré de 10 cm de côté contient un disque inscrit (le disque touche les quatre côtés). Quelle est l'aire de la partie du carré située hors du disque ?", [
      ["Environ 21,5 cm²", true, "100 − π × 5² = 100 − 25π ≈ 21,5 cm²."],
      ["Environ 78,5 cm²", false, "C'est l'aire du disque, pas celle de la partie extérieure."],
      ["Environ 84,3 cm²", false, "Rayon non élevé au carré : 100 − 5π."],
      ["Environ 68,6 cm²", false, "Périmètre du cercle (2πr ≈ 31,4) retiré à la place de l'aire du disque."],
    ], "Le disque inscrit a pour rayon la moitié du côté : 5 cm. Aire du disque : 25π ≈ 78,54 cm². Aire hors du disque : 100 − 78,54 ≈ 21,46 cm², soit environ 21,5 cm².", "Un disque inscrit dans un carré de côté c a pour rayon c/2.", [
      "Quel est le rayon du disque inscrit ?",
      "Calcule l'aire du disque : πr².",
      "Retire-la de l'aire du carré.",
    ], "approfondir", true),
    m("B-MATH-GEO-003", "thales", 2, "Au même moment, un poteau de 2 m projette une ombre de 1,6 m et un arbre projette une ombre de 12 m. Quelle est la hauteur de l'arbre ?", [
      ["15 m", true, "Hauteur/ombre = 2/1,6 = 1,25 ; 12 × 1,25 = 15 m."],
      ["9,6 m", false, "Rapport inversé : 12 × 1,6/2."],
      ["12,4 m", false, "Raisonnement additif : le poteau dépasse son ombre de 0,4 m, l'arbre aussi."],
      ["19,2 m", false, "Ombre de l'arbre multipliée par l'ombre du poteau : 12 × 1,6."],
    ], "Les rayons du soleil sont parallèles : hauteurs et ombres sont proportionnelles (Thalès). h/12 = 2/1,6, donc h = 12 × 2/1,6 = 15 m.", "Au même moment, hauteur et longueur d'ombre sont proportionnelles.", [
      "Le rapport hauteur/ombre est le même pour le poteau et l'arbre.",
      "Calcule 2/1,6.",
      "Multiplie l'ombre de l'arbre par ce rapport.",
    ], "regle"),
    m("B-MATH-GEO-004", "volume", 2, "Une cuve cylindrique a un rayon de 0,5 m et une hauteur de 1,2 m. Quelle est sa contenance, arrondie au litre ?", [
      ["942 L", true, "π × 0,5² × 1,2 ≈ 0,942 m³ = 942 L."],
      ["3 770 L", false, "Diamètre utilisé comme rayon : π × 1² × 1,2."],
      ["94 L", false, "Conversion erronée : 1 m³ = 1 000 L, pas 100 L."],
      ["1 885 L", false, "Rayon non élevé au carré : π × 0,5 × 1,2."],
    ], "V = πr²h = π × 0,25 × 1,2 = 0,3π ≈ 0,9425 m³. Comme 1 m³ = 1 000 L, la cuve contient environ 942 L.", "Volume d'un cylindre = πr² × h, puis 1 m³ = 1 000 L.", [
      "Quelle est la formule du volume d'un cylindre ?",
      "Calcule π × 0,5² × 1,2 en m³.",
      "Convertis en litres.",
    ], "formules"),
    m("B-MATH-GEO-005", "agrandissement", 3, "On agrandit une photo de 10 cm × 15 cm en multipliant toutes ses longueurs par 1,5. De quel pourcentage son aire augmente-t-elle ?", [
      ["+125 %", true, "L'aire est multipliée par 1,5² = 2,25."],
      ["+50 %", false, "Le coefficient des longueurs a été appliqué à l'aire."],
      ["+225 %", false, "Le coefficient 2,25 a été lu comme un pourcentage d'augmentation."],
      ["+100 %", false, "Hausses de 50 % de chaque dimension additionnées au lieu d'être multipliées."],
    ], "Les longueurs sont multipliées par 1,5, donc l'aire par 1,5² = 2,25. Aire : 150 cm² avant, 15 × 22,5 = 337,5 cm² après, soit +125 %.", "Si les longueurs sont multipliées par k, les aires sont multipliées par k².", [
      "Par quel nombre une aire est-elle multipliée quand les longueurs le sont par k ?",
      "Calcule 1,5².",
      "Un coefficient de 2,25 correspond à quelle hausse en pourcentage ?",
    ], "regle", true),
    m("B-MATH-GEO-006", "perimetre", 2, "Un terrain rectangulaire a une aire de 1 200 m² et une longueur de 40 m. On veut l'entourer d'une clôture qui coûte 15 € le mètre. Quel est le coût de la clôture ?", [
      ["2 100 €", true, "Largeur 30 m, périmètre 140 m, 140 × 15 = 2 100 €."],
      ["1 050 €", false, "Demi-périmètre (40 + 30) utilisé au lieu du périmètre."],
      ["18 000 €", false, "Aire multipliée par le prix au mètre : une clôture se mesure en longueur."],
      ["2 400 €", false, "Terrain traité comme un carré de 40 m de côté."],
    ], "Largeur : 1 200/40 = 30 m. Périmètre : 2 × (40 + 30) = 140 m. Coût : 140 × 15 = 2 100 €.", "Une clôture se calcule sur le périmètre ; on retrouve une dimension manquante avec l'aire.", [
      "Retrouve la largeur grâce à l'aire.",
      "Calcule le périmètre du rectangle.",
      "Multiplie par 15 € le mètre.",
    ]),
    m("B-MATH-GEO-007", "aire", 1, "Un massif de fleurs a la forme d'un trapèze dont les bases mesurent 8 m et 14 m et la hauteur 5 m. Quelle est son aire ?", [
      ["55 m²", true, "(8 + 14) × 5 / 2 = 55 m²."],
      ["110 m²", false, "Oubli de la division par 2."],
      ["560 m²", false, "Les trois dimensions ont été multipliées : 8 × 14 × 5."],
      ["27 m²", false, "Les dimensions ont été additionnées : 8 + 14 + 5."],
    ], "Aire d'un trapèze : (grande base + petite base) × hauteur / 2 = (8 + 14) × 5 / 2 = 22 × 5 / 2 = 55 m².", "Aire d'un trapèze = (B + b) × h / 2.", [
      "Quelle est la formule de l'aire d'un trapèze ?",
      "Additionne les deux bases.",
      "Multiplie par la hauteur, puis divise par 2.",
    ], "formules"),
    m("B-MATH-GEO-008", "pythagore", 2, "Une échelle de 5 m est appuyée contre un mur vertical ; son pied est à 1,4 m du mur. À quelle hauteur arrive le haut de l'échelle ?", [
      ["4,8 m", true, "√(5² − 1,4²) = √(25 − 1,96) = √23,04 = 4,8 m."],
      ["5,19 m", false, "Carrés additionnés : l'échelle est l'hypoténuse, il faut soustraire."],
      ["3,6 m", false, "Longueurs soustraites directement : 5 − 1,4."],
      ["23,04 m", false, "Oubli de la racine carrée."],
    ], "L'échelle est l'hypoténuse : h² = 5² − 1,4² = 25 − 1,96 = 23,04, donc h = 4,8 m. Contrôle : la hauteur est inférieure à la longueur de l'échelle.", "Pour un côté de l'angle droit, b² = hypoténuse² − a².", [
      "Quel côté du triangle est l'hypoténuse ?",
      "h² = 5² − 1,4².",
      "Prends la racine carrée de 23,04.",
    ], "erreur"),
    m("B-MATH-GEO-009", "agrandissement", 3, "La maquette au 1/50 d'un bâtiment a un volume de 0,8 dm³. Quel est le volume réel du bâtiment ?", [
      ["100 m³", true, "0,8 × 50³ = 100 000 dm³ = 100 m³."],
      ["40 dm³", false, "Coefficient des longueurs appliqué au volume : 0,8 × 50."],
      ["2 m³", false, "Coefficient des aires appliqué au volume : 0,8 × 50² = 2 000 dm³."],
      ["100 000 m³", false, "Conversion oubliée : 100 000 dm³ lus comme des m³."],
    ], "Les longueurs réelles sont 50 fois plus grandes, donc les volumes 50³ = 125 000 fois plus grands. 0,8 × 125 000 = 100 000 dm³. Or 1 m³ = 1 000 dm³ : 100 m³.", "À l'échelle 1/k, les volumes réels valent k³ fois ceux de la maquette.", [
      "Par quoi un volume est-il multiplié quand les longueurs sont multipliées par 50 ?",
      "Calcule 0,8 × 50³.",
      "Convertis les dm³ en m³.",
    ], "regle"),
    m("B-MATH-GEO-010", "cercle", 1, "Une roue de vélo a un diamètre de 70 cm. Quelle distance parcourt le vélo lorsque la roue fait 100 tours ?", [
      ["Environ 220 m", true, "π × 0,7 × 100 ≈ 219,9 m."],
      ["Environ 440 m", false, "Diamètre utilisé comme rayon dans 2πr."],
      ["Environ 70 m", false, "Diamètre pris pour la circonférence : π a été oublié."],
      ["Environ 22 m", false, "Conversion erronée des centimètres en mètres."],
    ], "Un tour correspond au périmètre de la roue : π × d = π × 0,7 ≈ 2,2 m. En 100 tours : environ 220 m.", "Périmètre d'un cercle = π × diamètre = 2π × rayon.", [
      "Quelle distance parcourt le vélo en un tour de roue ?",
      "C'est le périmètre : π × diamètre.",
      "Multiplie par 100 et exprime en mètres.",
    ]),
  ],
};
