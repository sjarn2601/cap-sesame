// MATH · Calcul littéral et second degré : identités remarquables, factorisation, discriminant, signe.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.second";
const m = maker(S);

export const SECOND: PartieMath = {
  skill: competence(S, "Algèbre", "Identités remarquables et second degré", ["identite remarquable", "developper", "factoriser", "second degre", "trinome", "discriminant", "delta", "racines", "parabole", "inequation"]),
  lesson: {
    skillId: S,
    title: "Identités remarquables, factorisation et second degré",
    objectives: ["Développer et factoriser avec les identités remarquables", "Résoudre une équation du second degré avec le discriminant", "Étudier le signe d'un trinôme et résoudre une inéquation", "Trouver le sommet d'une parabole"],
    prerequisites: ["math.eq"],
    regle:
      "Identités remarquables : (a + b)² = a² + 2ab + b² ; (a − b)² = a² − 2ab + b² ; (a + b)(a − b) = a² − b². Lues de gauche à droite, elles servent à développer ; de droite à gauche, à factoriser. Une différence de deux carrés se factorise toujours : x² − 49 = (x − 7)(x + 7). Elles servent aussi au calcul mental : 99² = (100 − 1)² = 9 801.\n\nDévelopper un produit (a + b)(c + d) : chaque terme du premier facteur multiplie chaque terme du second, soit quatre produits : ac + ad + bc + bd.\n\nÉquation du second degré ax² + bx + c = 0 (a ≠ 0) : on calcule le discriminant Δ = b² − 4ac. Si Δ > 0, deux solutions x₁ = (−b − √Δ)/(2a) et x₂ = (−b + √Δ)/(2a). Si Δ = 0, une solution x₀ = −b/(2a). Si Δ < 0, aucune solution réelle. Avant de calculer Δ, cherche une factorisation évidente (facteur commun, identité, produit nul) : x² − 5x = x(x − 5).\n\nÉquation produit nul : A × B = 0 si et seulement si A = 0 ou B = 0.\n\nSigne d'un trinôme : un trinôme ax² + bx + c est du signe de a à l'extérieur de ses racines et du signe contraire entre ses racines. Ainsi (x − 2)(x + 5) < 0 pour −5 < x < 2.\n\nParabole : la courbe de x ↦ ax² + bx + c a pour sommet le point d'abscisse −b/(2a). Si a > 0, la fonction admet un minimum en ce point ; si a < 0, un maximum. Pour la valeur de l'extremum, on remplace x par −b/(2a) dans l'expression.",
    formules:
      "(a + b)² = a² + 2ab + b²\n(a − b)² = a² − 2ab + b²\n(a + b)(a − b) = a² − b²\na² + b² = (a + b)² − 2ab\nΔ = b² − 4ac\nRacines : (−b ± √Δ)/(2a) si Δ > 0 ; −b/(2a) si Δ = 0\nForme factorisée : a(x − x₁)(x − x₂)\nSommet : x = −b/(2a)",
    methode:
      "1. Cherche d'abord une factorisation évidente : facteur commun, identité remarquable.\n2. Sinon, identifie a, b et c (avec leurs signes) et calcule Δ = b² − 4ac.\n3. Selon le signe de Δ, écris zéro, une ou deux solutions.\n4. Pour une inéquation, place les racines et applique la règle « signe de a à l'extérieur ».\n5. Vérifie une racine en la remplaçant dans l'équation.",
    exemple:
      "Résoudre x² − 2x − 15 = 0. a = 1, b = −2, c = −15. Δ = 4 + 60 = 64, √Δ = 8. Solutions : (2 − 8)/2 = −3 et (2 + 8)/2 = 5. Forme factorisée : (x + 3)(x − 5). Signe : négatif entre −3 et 5, positif ailleurs.\n\nUn bénéfice vaut B(x) = −x² + 40x − 300. Sommet : x = −40/(−2) = 20. Bénéfice maximal : B(20) = −400 + 800 − 300 = 100.",
    erreur:
      "✗ (a − b)² = a² − b² → ✓ (a − b)² = a² − 2ab + b²\n✗ Oublier le double produit 2ab → ✓ (3x + 1)² = 9x² + 6x + 1\n✗ Diviser par 2 au lieu de 2a dans la formule des racines → ✓ dénominateur 2a\n✗ Δ = b² − 4ac avec b négatif mal élevé au carré → ✓ (−3)² = 9\n✗ Donner l'abscisse du sommet quand on demande la valeur maximale → ✓ calculer f(−b/(2a))",
    approfondir:
      "Somme et produit des racines : si x₁ et x₂ sont les racines de ax² + bx + c, alors x₁ + x₂ = −b/a et x₁ × x₂ = c/a. Cela permet de vérifier une réponse en quelques secondes, ou de trouver une racine quand l'autre est évidente.\n\nRacine évidente : teste 1 et −1. Si a + b + c = 0, alors 1 est racine.\n\nGestion du temps : dans un QCU, remplace les valeurs proposées dans l'équation avant de calculer Δ. Deux tests suffisent souvent à éliminer trois options.",
    cards: [
      ["(a − b)²", "a² − 2ab + b²", true],
      ["a² − b²", "(a − b)(a + b)", true],
      ["Discriminant", "Δ = b² − 4ac", false],
      ["Sommet de ax² + bx + c", "Abscisse −b/(2a)", false],
      ["Signe d'un trinôme", "Signe de a à l'extérieur des racines, signe contraire entre elles", false],
    ],
  },
  questions: [
    m("B-MATH-DEG2-001", "identite", 1, "Développer (3x − 2)².", [
      ["9x² − 12x + 4", true, "(3x)² − 2 × 3x × 2 + 2² = 9x² − 12x + 4."],
      ["9x² − 4", false, "Double produit oublié : (a − b)² n'est pas a² − b²."],
      ["3x² − 12x + 4", false, "Le coefficient 3 n'a pas été élevé au carré."],
      ["9x² − 6x + 4", false, "Double produit incomplet : le facteur 2 de 2ab a été oublié."],
    ], "(a − b)² = a² − 2ab + b² avec a = 3x et b = 2 : 9x² − 12x + 4. Contrôle avec x = 1 : (3 − 2)² = 1 et 9 − 12 + 4 = 1.", "(a − b)² = a² − 2ab + b² : ne jamais oublier le double produit.", [
      "Quelle identité remarquable reconnais-tu ?",
      "Ici a = 3x et b = 2.",
      "Calcule a², 2ab et b².",
    ], "formules"),
    m("B-MATH-DEG2-002", "factor", 1, "Factoriser x² − 49.", [
      ["(x − 7)(x + 7)", true, "Différence de deux carrés : x² − 7²."],
      ["(x − 7)²", false, "(x − 7)² = x² − 14x + 49, pas x² − 49."],
      ["x(x − 49)", false, "x(x − 49) = x² − 49x : le facteur x n'est pas commun aux deux termes."],
      ["(x − 49)(x + 49)", false, "49 a été pris pour b au lieu de b² : on obtiendrait x² − 2 401."],
    ], "x² − 49 = x² − 7² = (x − 7)(x + 7). Contrôle : en développant, x² + 7x − 7x − 49 = x² − 49.", "Une différence de deux carrés a² − b² se factorise en (a − b)(a + b).", [
      "49 est le carré de quel nombre ?",
      "Utilise a² − b² = (a − b)(a + b).",
      "Vérifie en redéveloppant.",
    ]),
    m("B-MATH-DEG2-003", "delta", 2, "Combien l'équation 2x² − 3x + 5 = 0 a-t-elle de solutions réelles ?", [
      ["Aucune", true, "Δ = 9 − 40 = −31 < 0."],
      ["Deux", false, "Δ calculé avec le mauvais signe : 9 + 40 = 49 > 0."],
      ["Une seule", false, "Aucune raison d'avoir Δ = 0 ici : Δ = −31."],
      ["Une infinité", false, "Une équation du second degré a au plus deux solutions."],
    ], "a = 2, b = −3, c = 5. Δ = b² − 4ac = 9 − 4 × 2 × 5 = 9 − 40 = −31. Comme Δ < 0, l'équation n'a pas de solution réelle.", "Si Δ < 0, une équation du second degré n'a aucune solution réelle.", [
      "Identifie a, b et c avec leurs signes.",
      "Calcule Δ = b² − 4ac.",
      "Quel est le signe de 9 − 40 ?",
    ], "regle"),
    m("B-MATH-DEG2-004", "resol", 2, "Résoudre l'équation 2x² + 2x − 12 = 0.", [
      ["x = 2 ou x = −3", true, "Δ = 4 + 96 = 100 ; x = (−2 ± 10)/4, soit 2 et −3."],
      ["x = −2 ou x = 3", false, "Signes des racines inversés : −b a été pris égal à 2."],
      ["x = 4 ou x = −6", false, "Division par 2 au lieu de 2a = 4."],
      ["x = 1 ou x = −1,5", false, "Division par 4a = 8 au lieu de 2a = 4."],
    ], "Δ = 2² − 4 × 2 × (−12) = 4 + 96 = 100, √Δ = 10. x₁ = (−2 − 10)/4 = −3 et x₂ = (−2 + 10)/4 = 2. Plus rapide : diviser par 2 donne x² + x − 6 = (x − 2)(x + 3). Contrôle : 2 × 4 + 4 − 12 = 0.", "Les racines valent (−b ± √Δ)/(2a) ; on peut d'abord diviser l'équation par a.", [
      "Divise d'abord tous les coefficients par 2.",
      "Pour x² + x − 6 = 0, cherche deux nombres de somme −1 et de produit −6.",
      "Ou calcule Δ = 100 et applique (−b ± √Δ)/(2a).",
    ], "methode"),
    m("B-MATH-DEG2-005", "signe", 2, "Pour quelles valeurs de x a-t-on (x − 2)(x + 5) < 0 ?", [
      ["−5 < x < 2", true, "Le trinôme (a = 1 > 0) est négatif entre ses racines −5 et 2."],
      ["x < −5 ou x > 2", false, "C'est l'ensemble où le produit est positif."],
      ["−2 < x < 5", false, "Racines lues avec le mauvais signe : x − 2 = 0 donne x = 2, pas −2."],
      ["x < 2", false, "Seul le facteur x − 2 a été étudié ; pour x < −5, les deux facteurs sont négatifs et le produit est positif."],
    ], "Racines : 2 et −5. Le coefficient de x² vaut 1 > 0, donc le produit est positif à l'extérieur des racines et négatif entre elles : −5 < x < 2. Test : x = 0 donne (−2) × 5 = −10 < 0.", "Un trinôme est du signe de a à l'extérieur de ses racines et du signe contraire entre elles.", [
      "Quelles valeurs annulent chaque facteur ?",
      "Place −5 et 2 sur une droite et étudie le signe de chaque facteur.",
      "Teste x = 0 pour contrôler.",
    ], "regle", true),
    m("B-MATH-DEG2-006", "sommet", 3, "Le bénéfice d'une entreprise, en euros, vaut B(x) = −2x² + 120x − 1 000 pour x unités vendues. Quel est le bénéfice maximal ?", [
      ["800 €", true, "Sommet en x = −120/(−4) = 30, et B(30) = −1 800 + 3 600 − 1 000 = 800."],
      ["30 €", false, "C'est la quantité qui maximise le bénéfice (30 unités), pas le bénéfice."],
      ["−1 000 €", false, "Sommet mal placé : x = 60 obtenu avec −b/a au lieu de −b/(2a)."],
      ["4 400 €", false, "Erreur de signe : −2 × 30² compté +1 800."],
    ], "a = −2 < 0 : la parabole admet un maximum au sommet, d'abscisse −b/(2a) = −120/(−4) = 30. B(30) = −2 × 900 + 120 × 30 − 1 000 = −1 800 + 3 600 − 1 000 = 800 €.", "Le maximum d'un trinôme avec a < 0 est atteint en x = −b/(2a) ; sa valeur s'obtient en calculant f(−b/(2a)).", [
      "La parabole est tournée vers le bas : où est le maximum ?",
      "Abscisse du sommet : −b/(2a).",
      "Calcule B(30) en respectant les priorités.",
    ], "exemple"),
    m("B-MATH-DEG2-007", "identite", 2, "Sans calculatrice, combien vaut 102² − 98² ?", [
      ["800", true, "(102 − 98)(102 + 98) = 4 × 200 = 800."],
      ["16", false, "a² − b² confondu avec (a − b)² = 4²."],
      ["8", false, "Seuls les écarts à 100 ont été élevés au carré : 2² + 2²."],
      ["400", false, "Le facteur 4 a été pris pour 2 : 2 × 200."],
    ], "a² − b² = (a − b)(a + b) avec a = 102 et b = 98 : 4 × 200 = 800. Vérification : 10 404 − 9 604 = 800.", "a² − b² = (a − b)(a + b) simplifie le calcul mental.", [
      "Reconnais une différence de deux carrés.",
      "Calcule a − b et a + b.",
      "Multiplie 4 par 200.",
    ], "formules"),
    m("B-MATH-DEG2-008", "identite", 3, "Deux nombres a et b vérifient a + b = 7 et ab = 10. Combien vaut a² + b² ?", [
      ["29", true, "a² + b² = (a + b)² − 2ab = 49 − 20 = 29."],
      ["49", false, "(a + b)² confondu avec a² + b² : le double produit a été oublié."],
      ["39", false, "ab retiré une seule fois au lieu de 2ab."],
      ["69", false, "2ab ajouté au lieu d'être retiré."],
    ], "(a + b)² = a² + 2ab + b², donc a² + b² = (a + b)² − 2ab = 49 − 20 = 29. Contrôle : a = 2 et b = 5 conviennent, et 4 + 25 = 29.", "a² + b² = (a + b)² − 2ab.", [
      "Développe (a + b)².",
      "Isole a² + b² dans ce développement.",
      "Calcule 7² − 2 × 10.",
    ], "formules", true),
    m("B-MATH-DEG2-009", "signe", 2, "Résoudre l'inéquation x² ≤ 9.", [
      ["−3 ≤ x ≤ 3", true, "x² − 9 = (x − 3)(x + 3) ≤ 0 entre les racines."],
      ["x ≤ 3", false, "La racine négative est oubliée : x = −4 donne 16 > 9."],
      ["x ≤ −3 ou x ≥ 3", false, "C'est l'ensemble où x² ≥ 9."],
      ["x ≤ 4,5", false, "Division de 9 par 2, comme si x² valait 2x."],
    ], "x² ≤ 9 ⇔ x² − 9 ≤ 0 ⇔ (x − 3)(x + 3) ≤ 0. Le trinôme (a = 1 > 0) est négatif ou nul entre ses racines : −3 ≤ x ≤ 3. Test : x = −4 donne 16, qui dépasse 9.", "x² ≤ k (k > 0) équivaut à −√k ≤ x ≤ √k.", [
      "Ramène tout d'un côté : x² − 9 ≤ 0.",
      "Factorise avec a² − b².",
      "N'oublie pas les valeurs négatives : teste x = −4.",
    ], "regle"),
    m("B-MATH-DEG2-010", "dev", 1, "Développer et réduire (x + 4)(x − 3).", [
      ["x² + x − 12", true, "x² − 3x + 4x − 12 = x² + x − 12."],
      ["x² − 12", false, "Produits croisés −3x et 4x oubliés."],
      ["x² + 7x − 12", false, "Les termes croisés ont été mal signés : 4x + 3x."],
      ["x² − x − 12", false, "Erreur de signe dans la réduction : −3x + 4x vaut +x."],
    ], "(x + 4)(x − 3) = x × x + x × (−3) + 4 × x + 4 × (−3) = x² − 3x + 4x − 12 = x² + x − 12. Contrôle avec x = 1 : 5 × (−2) = −10 et 1 + 1 − 12 = −10.", "Développer (a + b)(c + d) donne quatre produits : ac + ad + bc + bd.", [
      "Chaque terme du premier facteur multiplie chaque terme du second.",
      "Tu dois obtenir quatre produits.",
      "Réduis −3x + 4x.",
    ]),
  ],
};
