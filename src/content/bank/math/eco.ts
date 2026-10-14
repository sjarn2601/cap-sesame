// MATH · Mathématiques de l'entreprise : chiffre d'affaires, coûts, marges, TVA, seuil de rentabilité.
import { competence, maker, type PartieMath } from "./outils";

const S = "math.eco";
const m = maker(S);

export const ECO: PartieMath = {
  skill: competence(S, "Gestion", "Mathématiques de l'entreprise", ["chiffre d'affaires", "cout fixe", "cout variable", "marge", "taux de marge", "taux de marque", "benefice", "tva", "hors taxe", "toutes taxes comprises", "seuil de rentabilite", "remise"]),
  lesson: {
    skillId: S,
    title: "Mathématiques de l'entreprise : CA, coûts, marges, TVA et seuil de rentabilité",
    objectives: ["Calculer chiffre d'affaires, coûts et bénéfice", "Passer du HT au TTC et inversement", "Distinguer taux de marge et taux de marque", "Calculer un seuil de rentabilité"],
    prerequisites: ["math.pct", "math.eq"],
    regle:
      "Chiffre d'affaires (CA) : prix de vente unitaire × quantité vendue. On le calcule en général hors taxes.\n\nCoûts : les coûts fixes (loyer, salaires fixes, abonnements) ne dépendent pas de la quantité produite ; les coûts variables lui sont proportionnels (matières, emballages). Coût total = coûts fixes + coût variable unitaire × quantité. Bénéfice (ou résultat) = CA − coût total ; il est négatif en cas de perte.\n\nTVA : le prix toutes taxes comprises (TTC) vaut le prix hors taxes (HT) multiplié par 1 + taux de TVA. Avec un taux de 20 % : TTC = HT × 1,2 et HT = TTC / 1,2. Le montant de TVA vaut 20 % du HT, soit TTC/6, et non 20 % du TTC. Principaux taux en France : 20 % (taux normal), 10 % et 5,5 % (taux réduits).\n\nMarge commerciale = prix de vente HT − coût d'achat HT. Le taux de marge rapporte la marge au coût d'achat ; le taux de marque rapporte la marge au prix de vente. Un article acheté 80 € et vendu 100 € a un taux de marge de 25 % et un taux de marque de 20 %.\n\nSeuil de rentabilité : quantité (ou CA) à partir de laquelle le bénéfice devient positif. La marge sur coût variable unitaire vaut prix − coût variable unitaire : c'est ce que chaque unité vendue apporte pour couvrir les coûts fixes. Seuil en quantité = coûts fixes / marge sur coût variable unitaire. Seuil en CA = coûts fixes / taux de marge sur coût variable, ce taux valant (CA − coûts variables)/CA.\n\nRemises successives : comme des évolutions successives, elles se combinent en multipliant les coefficients. 10 % puis 5 % donnent 0,9 × 0,95 = 0,855, soit 14,5 % de remise globale, et non 15 %.",
    formules:
      "CA = prix unitaire × quantité\nCoût total = CF + CVu × q\nBénéfice = CA − coût total\nTTC = HT × (1 + t) ; HT = TTC / (1 + t)\nTVA à 20 % = 0,2 × HT = TTC / 6\nTaux de marge = marge / coût d'achat\nTaux de marque = marge / prix de vente HT\nSeuil (quantité) = CF / (prix − CVu)\nSeuil (CA) = CF / taux de marge sur coût variable",
    methode:
      "1. Repère si les prix sont HT ou TTC et ramène tout en HT.\n2. Sépare coûts fixes et coûts variables.\n3. Écris le bénéfice en fonction de la quantité.\n4. Pour un seuil, résous bénéfice = 0.\n5. Pour un taux, identifie la base : coût d'achat (marge) ou prix de vente (marque).",
    exemple:
      "Une start-up vend un boîtier 60 € HT. Chaque boîtier coûte 35 € à produire, et les coûts fixes s'élèvent à 50 000 € par an. Marge sur coût variable : 60 − 35 = 25 € par boîtier. Seuil de rentabilité : 50 000/25 = 2 000 boîtiers, soit un CA de 120 000 €. Pour 3 000 boîtiers, le bénéfice vaut 3 000 × 25 − 50 000 = 25 000 €.\n\nUn téléphone coûte 600 € TTC (TVA 20 %) : HT = 600/1,2 = 500 €, TVA = 100 €.",
    erreur:
      "✗ Retirer 20 % au TTC pour obtenir le HT (600 × 0,8 = 480) → ✓ diviser par 1,2 (500 €)\n✗ Confondre taux de marge et taux de marque → ✓ marge/coût d'achat ou marge/prix de vente\n✗ Diviser les coûts fixes par le prix de vente pour le seuil → ✓ diviser par la marge unitaire (prix − coût variable)\n✗ Additionner deux remises successives → ✓ multiplier les coefficients\n✗ Oublier les coûts fixes dans le bénéfice → ✓ bénéfice = CA − CF − coûts variables",
    approfondir:
      "Le coût moyen par unité, (CF + CVu × q)/q = CF/q + CVu, baisse quand la production augmente : les coûts fixes sont répartis sur plus d'unités. C'est l'idée des économies d'échelle.\n\nPour un prix de vente visé avec un taux de marque t, on divise le coût par 1 − t ; avec un taux de marge t, on multiplie le coût par 1 + t.\n\nGestion du temps : ces exercices sont verbeux. Commence par écrire en une ligne la formule du bénéfice ; la question se ramène ensuite à un calcul de pourcentage ou à une équation du premier degré.",
    cards: [
      ["HT à partir du TTC (TVA 20 %)", "Diviser par 1,2", false],
      ["Montant de TVA à 20 % sur un prix TTC", "TTC / 6", false],
      ["Taux de marge / taux de marque", "Marge divisée par le coût d'achat / par le prix de vente", false],
      ["Seuil de rentabilité en quantité", "Coûts fixes / (prix − coût variable unitaire)", false],
      ["Remises de 10 % puis 20 %", "0,9 × 0,8 = 0,72 : remise globale de 28 %", false],
    ],
  },
  questions: [
    m("B-MATH-ECO-001", "tva", 1, "Un article coûte 250 € hors taxes. Avec une TVA de 20 %, quel est son prix TTC ?", [
      ["300 €", true, "250 × 1,2 = 300 €."],
      ["270 €", false, "20 € ajoutés au lieu de 20 %."],
      ["312,50 €", false, "Division par 0,8 : c'est la méthode d'un taux de marque, pas de la TVA."],
      ["50 €", false, "C'est le montant de la TVA, pas le prix TTC."],
    ], "TTC = HT × (1 + 0,2) = 250 × 1,2 = 300 €. La TVA vaut 50 €.", "TTC = HT × (1 + taux de TVA).", [
      "Le prix TTC inclut la TVA.",
      "Quel coefficient correspond à une hausse de 20 % ?",
      "Multiplie 250 par 1,2.",
    ], "formules"),
    m("B-MATH-ECO-002", "tva", 2, "Un ordinateur est vendu 899 € TTC, avec une TVA de 20 %. Quel est son prix hors taxes, au centime près ?", [
      ["749,17 €", true, "899 / 1,2 ≈ 749,17 €."],
      ["719,20 €", false, "20 % retirés au prix TTC (899 × 0,8) : la TVA porte sur le HT."],
      ["179,80 €", false, "C'est 20 % du prix TTC, ni le HT ni même le montant de TVA."],
      ["1 078,80 €", false, "TVA ajoutée une seconde fois : 899 × 1,2."],
    ], "TTC = HT × 1,2, donc HT = 899/1,2 ≈ 749,17 €. La TVA vaut 899 − 749,17 = 149,83 €, soit bien 20 % de 749,17.", "Pour retrouver un prix HT, on divise le TTC par 1 + taux de TVA.", [
      "La TVA est calculée sur le prix HT, inconnu ici.",
      "Écris TTC = HT × 1,2.",
      "Divise 899 par 1,2.",
    ], "erreur"),
    m("B-MATH-ECO-003", "marge", 2, "Un commerçant achète un article 40 € HT et le revend 50 € HT. Quel est son taux de marge (marge rapportée au coût d'achat) ?", [
      ["25 %", true, "Marge 10 € ; 10/40 = 25 %."],
      ["20 %", false, "Marge rapportée au prix de vente (10/50) : c'est le taux de marque."],
      ["10 %", false, "La marge en euros (10 €) a été lue comme un pourcentage."],
      ["125 %", false, "Rapport 50/40 = 1,25 : coefficient lu comme un taux."],
    ], "Marge = 50 − 40 = 10 €. Taux de marge = marge/coût d'achat = 10/40 = 25 %. Le taux de marque serait 10/50 = 20 %.", "Taux de marge = marge / coût d'achat ; taux de marque = marge / prix de vente.", [
      "Calcule la marge en euros.",
      "Le taux de marge se rapporte au coût d'achat.",
      "Divise 10 par 40.",
    ], "regle"),
    m("B-MATH-ECO-004", "seuil", 2, "Une entreprise a 18 000 € de coûts fixes par mois. Elle vend chaque produit 45 €, pour un coût variable de 30 € par produit. Combien de produits doit-elle vendre par mois pour atteindre son seuil de rentabilité ?", [
      ["1 200", true, "18 000 / (45 − 30) = 1 200."],
      ["400", false, "Coûts fixes divisés par le prix de vente : le coût variable a été oublié."],
      ["600", false, "Coûts fixes divisés par le coût variable unitaire."],
      ["240", false, "Coûts fixes divisés par la somme 45 + 30."],
    ], "Chaque produit rapporte une marge sur coût variable de 45 − 30 = 15 €. Pour couvrir 18 000 € de coûts fixes : 18 000/15 = 1 200 produits. Contrôle : 1 200 × 45 = 54 000 € de CA ; coûts : 18 000 + 36 000 = 54 000 €.", "Seuil de rentabilité en quantité = coûts fixes / marge sur coût variable unitaire.", [
      "Combien chaque produit vendu rapporte-t-il, une fois son coût variable payé ?",
      "Cette marge unitaire vaut 15 €.",
      "Combien de fois 15 € pour couvrir 18 000 € ?",
    ], "exemple", true),
    m("B-MATH-ECO-005", "benefice", 2, "Le coût de production de q objets vaut C(q) = 2 000 + 12q euros. Chaque objet est vendu 20 €. Quel est le bénéfice réalisé pour 600 objets vendus ?", [
      ["2 800 €", true, "CA 12 000 € ; coût 2 000 + 7 200 = 9 200 € ; bénéfice 2 800 €."],
      ["4 800 €", false, "Coûts fixes oubliés : (20 − 12) × 600."],
      ["12 000 €", false, "C'est le chiffre d'affaires, pas le bénéfice."],
      ["9 200 €", false, "C'est le coût total, pas le bénéfice."],
    ], "CA = 20 × 600 = 12 000 €. Coût = 2 000 + 12 × 600 = 9 200 €. Bénéfice = 12 000 − 9 200 = 2 800 €.", "Bénéfice = chiffre d'affaires − coût total (fixe + variable).", [
      "Calcule le chiffre d'affaires.",
      "Calcule le coût total C(600).",
      "Fais la différence.",
    ], "formules"),
    m("B-MATH-ECO-006", "remise", 2, "Un article à 200 € bénéficie d'une remise de 10 %, puis d'une remise supplémentaire de 5 % sur le prix déjà remisé. Quel est le prix payé ?", [
      ["171 €", true, "200 × 0,9 × 0,95 = 171 €."],
      ["170 €", false, "Remises additionnées (15 %) au lieu d'être enchaînées."],
      ["180 €", false, "La seconde remise a été oubliée."],
      ["29 €", false, "C'est le montant total des remises, pas le prix payé."],
    ], "Après −10 % : 200 × 0,9 = 180 €. Après −5 % sur 180 € : 180 × 0,95 = 171 €. Remise globale : 29 €, soit 14,5 %.", "Des remises successives se combinent en multipliant les coefficients.", [
      "Applique la première remise.",
      "La seconde remise porte sur 180 €, pas sur 200 €.",
      "Calcule 180 × 0,95.",
    ], "erreur"),
    m("B-MATH-ECO-007", "seuil", 3, "Une entreprise réalise un chiffre d'affaires de 500 000 €, avec 300 000 € de charges variables et 120 000 € de charges fixes. Quel est son seuil de rentabilité en chiffre d'affaires ?", [
      ["300 000 €", true, "Taux de marge sur coût variable 200 000/500 000 = 0,4 ; 120 000/0,4 = 300 000 €."],
      ["420 000 €", false, "Somme des charges fixes et variables : ce n'est pas un seuil."],
      ["200 000 €", false, "Charges fixes divisées par le taux de charges variables (0,6) au lieu du taux de marge (0,4)."],
      ["80 000 €", false, "C'est le résultat actuel (500 000 − 420 000), pas le seuil."],
    ], "Marge sur coût variable : 500 000 − 300 000 = 200 000 €, soit un taux de 40 % du CA. Le seuil est le CA pour lequel cette marge couvre exactement les 120 000 € de charges fixes : 120 000/0,4 = 300 000 €. Contrôle : à ce CA, marge 120 000 − charges fixes 120 000 = 0.", "Seuil de rentabilité en CA = charges fixes / taux de marge sur coût variable.", [
      "Calcule la marge sur coût variable et son taux par rapport au CA.",
      "Ce taux vaut 0,4 : chaque euro de CA apporte 0,40 € pour couvrir les charges fixes.",
      "Divise 120 000 par 0,4.",
    ], "formules", true),
    m("B-MATH-ECO-008", "marge", 3, "Un produit a un coût de revient de 64 €. Le vendeur veut un taux de marque de 20 %, c'est-à-dire une marge égale à 20 % du prix de vente HT. Quel prix de vente HT doit-il fixer ?", [
      ["80 €", true, "PV × 0,8 = 64, donc PV = 80 € ; marge 16 €, soit 20 % de 80."],
      ["76,80 €", false, "Coût majoré de 20 % : c'est un taux de marge de 20 %, pas un taux de marque."],
      ["84 €", false, "20 € ajoutés au lieu de 20 %."],
      ["51,20 €", false, "20 % retirés au coût : le prix serait inférieur au coût."],
    ], "La marge vaut 20 % du prix de vente, donc le coût vaut 80 % du prix de vente : 0,8 × PV = 64 et PV = 80 €. Contrôle : marge 16 €, et 16/80 = 20 %.", "Avec un taux de marque t, prix de vente = coût / (1 − t).", [
      "Si la marge vaut 20 % du prix de vente, quelle part du prix représente le coût ?",
      "Le coût représente 80 % du prix.",
      "Résous 0,8 × PV = 64.",
    ], "approfondir"),
    m("B-MATH-ECO-009", "ca", 1, "Une boutique vend 1 250 articles au prix unitaire de 18,40 €. Quel est son chiffre d'affaires ?", [
      ["23 000 €", true, "1 250 × 18,40 = 23 000 €."],
      ["2 300 €", false, "Erreur d'une puissance de 10 dans la multiplication."],
      ["230 000 €", false, "Erreur d'une puissance de 10 dans l'autre sens."],
      ["1 268,40 €", false, "Quantité et prix additionnés au lieu d'être multipliés."],
    ], "CA = prix × quantité = 18,40 × 1 250. Astuce : 1 250 = 10 000/8, donc 18,40 × 10 000/8 = 184 000/8 = 23 000 €. Ordre de grandeur : 1 000 × 20 = 20 000.", "Chiffre d'affaires = prix unitaire × quantité vendue.", [
      "Quelle opération relie prix, quantité et chiffre d'affaires ?",
      "Estime d'abord : environ 1 000 × 20.",
      "Calcule 18,40 × 1 250.",
    ]),
    m("B-MATH-ECO-010", "tva", 1, "Une facture s'élève à 1 440 € TTC, avec une TVA de 20 %. Quel est le montant de la TVA ?", [
      ["240 €", true, "HT = 1 440/1,2 = 1 200 € ; TVA = 240 €."],
      ["288 €", false, "20 % du TTC : la TVA se calcule sur le HT."],
      ["1 200 €", false, "C'est le montant hors taxes, pas la TVA."],
      ["1 728 €", false, "TVA ajoutée une seconde fois : 1 440 × 1,2."],
    ], "HT = 1 440/1,2 = 1 200 €. TVA = 1 440 − 1 200 = 240 €, soit 20 % de 1 200. Raccourci : à 20 %, la TVA vaut TTC/6 = 240 €.", "À 20 %, le montant de TVA vaut 20 % du HT, soit le sixième du TTC.", [
      "Retrouve d'abord le prix hors taxes.",
      "Divise 1 440 par 1,2.",
      "La TVA est la différence entre TTC et HT.",
    ], "formules"),
  ],
};
