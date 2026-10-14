// MATH · Fonctions : affines, image et antécédent, variations, dérivée, extremum.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.fonctions";
const m = maker(S);

export const FONCTIONS: PartieMath = {
  skill: competence(S, "Fonctions", "Fonctions, variations et dérivée", ["fonction", "fonction affine", "coefficient directeur", "image", "antecedent", "lecture graphique", "variations", "derivee", "extremum", "maximum", "minimum"]),
  lesson: {
    skillId: S,
    title: "Fonctions : affines, variations, dérivée et extremum",
    objectives: ["Calculer une image, un antécédent et l'équation d'une droite", "Déterminer les variations d'une fonction", "Dériver un polynôme et un produit", "Trouver un maximum ou un minimum"],
    prerequisites: ["math.eq", "math.second"],
    regle:
      "Image et antécédent : l'image de a par f est f(a), obtenue en remplaçant x par a. Un antécédent de b est une valeur x telle que f(x) = b : on le trouve en résolvant une équation. Sur un graphique, l'image se lit sur l'axe vertical, l'antécédent sur l'axe horizontal.\n\nFonction affine f(x) = mx + p : sa courbe est une droite. m est le coefficient directeur (la pente) : m = (f(x₂) − f(x₁))/(x₂ − x₁), « variation de y sur variation de x ». p est l'ordonnée à l'origine : f(0) = p. Si m > 0 la fonction est croissante, si m < 0 elle est décroissante. Deux droites se coupent au point dont l'abscisse résout mx + p = m'x + p'.\n\nDérivée : f'(a) est le coefficient directeur de la tangente à la courbe au point d'abscisse a. Dérivées à connaître : la dérivée d'une constante est 0, celle de x est 1, celle de xⁿ est nxⁿ⁻¹. On dérive une somme terme à terme et (ku)' = ku'. Pour un produit : (uv)' = u'v + uv', et non u'v'.\n\nVariations : si f'(x) > 0 sur un intervalle, f y est croissante ; si f'(x) < 0, décroissante. On étudie donc le signe de la dérivée, souvent un trinôme ou une expression factorisée, puis on dresse le tableau de variations.\n\nExtremum : là où la dérivée s'annule en changeant de signe, f admet un extremum local (un maximum si f' passe de + à −, un minimum si f' passe de − à +). Sur un intervalle fermé [a ; b], le maximum et le minimum se trouvent parmi les valeurs aux points où f' s'annule et aux bornes a et b. Pour une parabole, le sommet est en x = −b/(2a).",
    formules:
      "Coefficient directeur : m = (y₂ − y₁)/(x₂ − x₁)\nOrdonnée à l'origine : p = y₁ − m × x₁\n(k)' = 0 ; (x)' = 1 ; (xⁿ)' = nxⁿ⁻¹\n(u + v)' = u' + v' ; (ku)' = ku'\n(uv)' = u'v + uv'\nf' > 0 : f croissante ; f' < 0 : f décroissante\nTangente en a : y = f'(a)(x − a) + f(a)",
    methode:
      "1. Pour une image, remplace x en mettant les nombres négatifs entre parenthèses.\n2. Pour une droite, calcule d'abord m, puis p avec un point connu.\n3. Pour des variations, calcule f'(x), factorise-la si possible.\n4. Étudie le signe de f'(x) et dresse le tableau de variations.\n5. Pour un extremum sur [a ; b], compare les valeurs aux points critiques et aux bornes.",
    exemple:
      "Droite passant par A(2 ; 5) et B(6 ; 13) : m = (13 − 5)/(6 − 2) = 2 ; p = 5 − 2 × 2 = 1 ; équation y = 2x + 1. Contrôle avec B : 2 × 6 + 1 = 13.\n\nf(x) = x³ − 3x sur [0 ; 2] : f'(x) = 3x² − 3 = 3(x − 1)(x + 1). Sur [0 ; 2], f' est négative avant 1 et positive après : f décroît puis croît. Minimum : f(1) = −2. Valeurs aux bornes : f(0) = 0 et f(2) = 2, qui est le maximum.",
    erreur:
      "✗ −2x² avec x = −3 : (−2 × −3)² = 36 → ✓ −2 × (−3)² = −2 × 9 = −18\n✗ Pente = (x₂ − x₁)/(y₂ − y₁) → ✓ variation de y divisée par variation de x\n✗ (uv)' = u'v' → ✓ (uv)' = u'v + uv'\n✗ Garder la constante en dérivant : (x² + 5)' = 2x + 5 → ✓ 2x\n✗ Répondre l'abscisse du minimum quand on demande sa valeur → ✓ calculer f en ce point",
    approfondir:
      "Lecture graphique : si la courbe monte de gauche à droite, la fonction est croissante. Le nombre de solutions de f(x) = k se lit en comptant les points d'intersection de la courbe avec la droite horizontale y = k.\n\nUne fonction de coût, de recette ou de bénéfice est souvent un polynôme : son maximum se trouve en annulant la dérivée. Pour le bénéfice B = R − C, on a B' = R' − C', donc le bénéfice est maximal quand la recette marginale égale le coût marginal.\n\nGestion du temps : pour un QCU de dérivée, teste la formule proposée en un point simple (x = 0 ou x = 1) en comparant avec un taux d'accroissement approximatif ; ou dérive mentalement terme à terme.",
    cards: [
      ["(xⁿ)'", "nxⁿ⁻¹", false],
      ["(uv)'", "u'v + uv'", false],
      ["Coefficient directeur entre deux points", "(y₂ − y₁)/(x₂ − x₁)", false],
      ["f' < 0 sur un intervalle", "f est décroissante sur cet intervalle", false],
      ["Extremum sur [a ; b]", "Comparer f aux points où f' = 0 et aux bornes", false],
    ],
  },
  questions: [
    m("B-MATH-FONC-001", "affine", 1, "Une fonction affine f vérifie f(2) = 7 et f(5) = 16. Quel est son coefficient directeur ?", [
      ["3", true, "(16 − 7)/(5 − 2) = 9/3 = 3."],
      ["1/3", false, "Rapport inversé : variation de x divisée par variation de y."],
      ["3,2", false, "Calcul de 16/5 : c'est le rapport f(5)/5, pas une pente."],
      ["9", false, "Variation de y non divisée par la variation de x."],
    ], "m = (f(5) − f(2))/(5 − 2) = (16 − 7)/3 = 9/3 = 3. On en déduit p = 7 − 3 × 2 = 1, d'où f(x) = 3x + 1. Contrôle : f(5) = 16.", "Coefficient directeur = variation de y / variation de x.", [
      "Le coefficient directeur mesure la variation de f quand x augmente de 1.",
      "Calcule la variation de y et la variation de x.",
      "Divise 9 par 3.",
    ], "formules"),
    m("B-MATH-FONC-002", "image", 1, "On considère f(x) = −2x² + 3x − 1. Calculer f(−2).", [
      ["−15", true, "−2 × 4 + 3 × (−2) − 1 = −8 − 6 − 1 = −15."],
      ["1", false, "−2 × (−2)² compté +8 au lieu de −8."],
      ["−3", false, "3 × (−2) compté +6 au lieu de −6."],
      ["9", false, "−2x² calculé comme (−2x)² = 16."],
    ], "f(−2) = −2 × (−2)² + 3 × (−2) − 1 = −2 × 4 − 6 − 1 = −8 − 6 − 1 = −15.", "Pour calculer une image, on remplace x par la valeur entre parenthèses et on respecte les priorités : la puissance avant le produit.", [
      "Remplace x par (−2) avec des parenthèses.",
      "(−2)² = 4, puis multiplie par −2.",
      "Additionne −8, −6 et −1.",
    ], "erreur"),
    m("B-MATH-FONC-003", "affine", 2, "Quelle est l'équation de la droite passant par A(1 ; 4) et B(3 ; 10) ?", [
      ["y = 3x + 1", true, "m = 6/2 = 3 et p = 4 − 3 = 1 ; A et B vérifient l'équation."],
      ["y = 3x + 4", false, "L'ordonnée de A a été prise pour ordonnée à l'origine alors que A n'est pas sur l'axe des ordonnées."],
      ["y = (1/3)x + 11/3", false, "Coefficient directeur inversé : Δx/Δy au lieu de Δy/Δx."],
      ["y = 3x + 7", false, "p calculé avec le mauvais point : 10 − 3 × 1 mélange l'ordonnée de B et l'abscisse de A."],
    ], "m = (10 − 4)/(3 − 1) = 3. Avec A : 4 = 3 × 1 + p, donc p = 1. Équation : y = 3x + 1. Contrôle avec B : 3 × 3 + 1 = 10.", "On calcule m avec les deux points, puis p avec un point en remplaçant ses deux coordonnées.", [
      "Calcule d'abord le coefficient directeur.",
      "Utilise les coordonnées d'un même point pour trouver p.",
      "Vérifie avec le second point.",
    ], "exemple"),
    m("B-MATH-FONC-004", "variations", 2, "Sur quel intervalle la fonction f(x) = x² − 6x + 2 est-elle décroissante ?", [
      ["]−∞ ; 3]", true, "a = 1 > 0 : f décroît jusqu'au sommet, d'abscisse 6/2 = 3."],
      ["[3 ; +∞[", false, "C'est l'intervalle où f est croissante, car a > 0."],
      ["]−∞ ; −3]", false, "Erreur de signe sur le sommet : −b/(2a) = −(−6)/2 = 3."],
      ["]−∞ ; 6]", false, "Oubli de la division par 2a : −b seul."],
    ], "f'(x) = 2x − 6, négative pour x < 3. Ou directement : le sommet de la parabole est en x = −b/(2a) = 6/2 = 3 et, comme a = 1 > 0, f est décroissante sur ]−∞ ; 3] puis croissante.", "Pour a > 0, un trinôme est décroissant avant son sommet −b/(2a) et croissant après.", [
      "Calcule f'(x) ou l'abscisse du sommet.",
      "−b/(2a) avec b = −6 et a = 1.",
      "La parabole est tournée vers le haut : décroissante avant le sommet.",
    ]),
    m("B-MATH-FONC-005", "derivee", 2, "On considère f(x) = x³ − 12x + 5. Quelle est sa fonction dérivée ?", [
      ["f'(x) = 3x² − 12", true, "(x³)' = 3x², (−12x)' = −12, (5)' = 0."],
      ["f'(x) = x² − 12", false, "L'exposant n'a pas été descendu en facteur : (x³)' = 3x²."],
      ["f'(x) = 3x² − 7", false, "La constante 5 a été conservée au lieu de disparaître."],
      ["f'(x) = 3x³ − 12", false, "L'exposant n'a pas été diminué de 1."],
    ], "On dérive terme à terme : (x³)' = 3x², (−12x)' = −12 et la dérivée de la constante 5 est 0. Donc f'(x) = 3x² − 12.", "(xⁿ)' = nxⁿ⁻¹ et la dérivée d'une constante est nulle.", [
      "Dérive chaque terme séparément.",
      "Applique (xⁿ)' = nxⁿ⁻¹ à x³.",
      "Que devient la constante 5 ?",
    ], "formules"),
    m("B-MATH-FONC-006", "extremum", 3, "Quelle est la valeur minimale de f(x) = x³ − 12x + 5 sur l'intervalle [0 ; 4] ?", [
      ["−11", true, "f'(x) = 3(x − 2)(x + 2) s'annule en 2 sur [0 ; 4] ; f(2) = 8 − 24 + 5 = −11."],
      ["2", false, "C'est l'abscisse du minimum, pas sa valeur."],
      ["5", false, "C'est f(0), la valeur à la borne gauche, qui n'est pas la plus petite."],
      ["21", false, "C'est f(4), le maximum sur l'intervalle."],
    ], "f'(x) = 3x² − 12 = 3(x − 2)(x + 2). Sur [0 ; 4], f' est négative sur [0 ; 2] et positive sur [2 ; 4] : f décroît puis croît. Minimum en x = 2 : f(2) = 8 − 24 + 5 = −11. Les bornes donnent f(0) = 5 et f(4) = 64 − 48 + 5 = 21.", "Le minimum sur un intervalle se trouve en comparant f aux points où f' s'annule et aux bornes.", [
      "Calcule f'(x) et trouve où elle s'annule sur [0 ; 4].",
      "f' change de signe en x = 2.",
      "Calcule f(2), puis compare avec f(0) et f(4).",
    ], "methode", true),
    m("B-MATH-FONC-007", "derivee", 2, "On considère f(x) = (2x + 1)(x² − 3). Quelle est sa dérivée ?", [
      ["f'(x) = 6x² + 2x − 6", true, "u'v + uv' = 2(x² − 3) + (2x + 1)(2x) = 6x² + 2x − 6."],
      ["f'(x) = 4x", false, "Produit des dérivées u'v' = 2 × 2x : la formule du produit n'est pas (uv)' = u'v'."],
      ["f'(x) = 6x² − 6", false, "Dans uv', le terme 1 × 2x a été oublié."],
      ["f'(x) = 4x² + 2x", false, "Seul le terme uv' a été gardé : u'v a été oublié."],
    ], "u = 2x + 1, u' = 2 ; v = x² − 3, v' = 2x. f' = u'v + uv' = 2(x² − 3) + (2x + 1)(2x) = 2x² − 6 + 4x² + 2x = 6x² + 2x − 6. Contrôle : en développant f(x) = 2x³ + x² − 6x − 3, on obtient bien f'(x) = 6x² + 2x − 6.", "(uv)' = u'v + uv'.", [
      "Identifie u, v, u' et v'.",
      "Applique (uv)' = u'v + uv'.",
      "Ou développe f avant de dériver.",
    ], "formules", true),
    m("B-MATH-FONC-008", "affine", 2, "En quel point se coupent les droites d'équations y = 2x + 3 et y = −x + 9 ?", [
      ["(2 ; 7)", true, "2x + 3 = −x + 9 donne x = 2, puis y = 7."],
      ["(7 ; 2)", false, "Coordonnées inversées."],
      ["(6 ; 15)", false, "Oubli de la division par 3 : 3x = 6 lu x = 6."],
      ["(−2 ; −1)", false, "Erreur de signe en regroupant : 3x = 3 − 9."],
    ], "On égale les ordonnées : 2x + 3 = −x + 9, soit 3x = 6 et x = 2. Puis y = 2 × 2 + 3 = 7. Contrôle avec la seconde droite : −2 + 9 = 7.", "Le point d'intersection de deux droites a une abscisse qui résout mx + p = m'x + p'.", [
      "Au point d'intersection, les deux ordonnées sont égales.",
      "Résous 2x + 3 = −x + 9.",
      "Calcule y avec l'une des deux équations.",
    ]),
    m("B-MATH-FONC-009", "image", 1, "On considère f(x) = 3x − 7. Quel est l'antécédent de 8 par f ?", [
      ["5", true, "3x − 7 = 8 donne 3x = 15 et x = 5."],
      ["17", false, "C'est l'image de 8, f(8) = 24 − 7 : image et antécédent ont été confondus."],
      ["1/3", false, "Erreur de signe sur −7 : 3x = 8 − 7."],
      ["15", false, "Oubli de la division par 3."],
    ], "On cherche x tel que f(x) = 8 : 3x − 7 = 8, 3x = 15, x = 5. Vérification : f(5) = 15 − 7 = 8.", "Un antécédent de b se trouve en résolvant f(x) = b.", [
      "Antécédent : on connaît f(x), on cherche x.",
      "Résous 3x − 7 = 8.",
      "Vérifie que f(5) = 8.",
    ], "regle"),
    m("B-MATH-FONC-010", "variations", 3, "Sur quel intervalle la fonction f(x) = x³ − 3x² − 9x + 1 est-elle décroissante ?", [
      ["[−1 ; 3]", true, "f'(x) = 3(x − 3)(x + 1) est négative entre −1 et 3."],
      ["[−3 ; 1]", false, "Racines de f' lues avec le mauvais signe."],
      ["]−∞ ; −1] et [3 ; +∞[", false, "Ce sont les intervalles où f' > 0, donc où f croît."],
      ["]−∞ ; 1]", false, "f' a été traitée comme une fonction affine changeant de signe en 1 (sommet de f')."],
    ], "f'(x) = 3x² − 6x − 9 = 3(x² − 2x − 3) = 3(x − 3)(x + 1). Ce trinôme (coefficient 3 > 0) est négatif entre ses racines −1 et 3. Donc f est décroissante sur [−1 ; 3], croissante ailleurs. Test : f'(0) = −9 < 0.", "f est décroissante là où f' est négative ; le signe d'un trinôme se lit sur sa forme factorisée.", [
      "Calcule f'(x).",
      "Factorise 3x² − 6x − 9 : cherche les racines de x² − 2x − 3.",
      "Le trinôme est négatif entre ses racines.",
    ], "regle", false),
  ],
};
