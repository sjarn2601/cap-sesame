// Compétences digitales : tableur (dig.data).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.data";

export const DIG_DATA: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Le tableur : formules, fonctions et analyse de données",
      objectives: ["Prévoir le résultat d'une formule ou d'une fonction", "Choisir entre référence relative, absolue et mixte", "Trier, filtrer et synthétiser un tableau", "Choisir un graphique adapté"],
      regle:
        "Une cellule se repère par sa colonne et sa ligne (B3). Une plage s'écrit avec deux-points (B2:B10, de B2 à B10) ; le point-virgule sépare les arguments d'une fonction ou des cellules isolées (=SOMME(B2;B5) additionne seulement B2 et B5). Toute formule commence par = et respecte les priorités : parenthèses, puis puissance (^), puis multiplication et division, puis addition et soustraction. Un texte dans une formule s'écrit entre guillemets droits.\n\nFonctions essentielles (noms français d'Excel et de LibreOffice Calc) : SOMME, MOYENNE, MIN, MAX ; NB compte les cellules contenant un nombre, NBVAL les cellules non vides ; NB.SI(plage;critère) compte les cellules qui vérifient un critère ; SOMME.SI(plage;critère;plage_à_additionner) additionne sous condition ; SI(test;valeur_si_vrai;valeur_si_faux) ; ET et OU combinent des tests. MOYENNE ignore les cellules vides, mais compte les zéros.\n\nRecherche : RECHERCHEV(valeur;tableau;n°_colonne;FAUX) cherche la valeur dans la première colonne du tableau et renvoie la valeur de la colonne indiquée sur la même ligne ; FAUX impose une correspondance exacte (sinon, la fonction cherche une valeur approchée dans un tableau supposé trié). RECHERCHEX(valeur;plage_cherchée;plage_renvoyée), plus récente (Excel 365, LibreOffice 24.8 et suivants), cherche en correspondance exacte par défaut et peut renvoyer une colonne située à gauche.\n\nRéférences. Quand on recopie une formule, une référence relative (A2) se décale du même nombre de lignes et de colonnes que la formule. Le symbole $ fige ce qu'il précède : $A$2 est absolue (rien ne bouge), $A2 fige la colonne, A$2 fige la ligne (références mixtes).\n\nAnalyse. Trier réordonne les lignes entières selon une ou plusieurs colonnes. Filtrer masque temporairement les lignes qui ne respectent pas un critère, sans les supprimer. La mise en forme conditionnelle colore les cellules selon leur valeur. Un tableau croisé dynamique résume une grande liste (totaux, moyennes, comptages) par catégories, sans formule. Le format d'affichage (nombre de décimales, %, €) change l'apparence, pas la valeur stockée.\n\nGraphiques : courbe pour une évolution dans le temps, histogramme (colonnes ou barres) pour comparer des catégories, secteurs pour la répartition d'un total en parts, nuage de points pour la relation entre deux variables numériques.",
      formules:
        "=SOMME(B2:B10) · =MOYENNE(B2:B10) · =MAX(B2:B10) · =MIN(B2:B10)\n=NB(B2:B10) nombres · =NBVAL(B2:B10) cellules non vides\n=NB.SI(C2:C30;\">=10\") · =SOMME.SI(A2:A30;\"Nord\";D2:D30)\n=SI(B2>=10;\"Admis\";\"Ajourné\") · =SI(ET(B2>=10;C2>=10);\"Oui\";\"Non\")\n=RECHERCHEV(F2;A2:C50;3;FAUX) · =RECHERCHEX(F2;A2:A50;C2:C50)\nA2 relative · $A$2 absolue · $A2 colonne figée · A$2 ligne figée\nB2:B10 = plage de B2 à B10 · B2;B10 = deux cellules seulement\nErreurs : #DIV/0! division par zéro · #N/A valeur introuvable · #NOM? fonction mal écrite",
      methode:
        "1. Pour une recopie, compter le décalage : combien de lignes et de colonnes entre la cellule de départ et la cellule d'arrivée ?\n2. Appliquer ce décalage à chaque référence, sauf aux parties précédées d'un $.\n3. Pour une fonction, réécrire mentalement la liste des valeurs concernées, puis appliquer la fonction.\n4. Pour un SI, évaluer le test avec les valeurs réelles (attention à > et >=), puis choisir la branche.\n5. Contrôler l'ordre de grandeur du résultat.",
      exemple:
        "En D2, la formule =B2*$E$1 calcule un prix TTC (E1 contient 1,2). On la recopie de D2 vers E3 : décalage d'une colonne et d'une ligne. B2 devient C3, $E$1 ne bouge pas : =C3*$E$1.\n\nRéférence mixte : en B3, =$A3*B$1 (table de multiplication). Copiée en C4 (une colonne et une ligne de plus) : $A reste A et 3 devient 4 ; B devient C et $1 reste 1. Résultat : =$A4*C$1.\n\nNB.SI : les notes en C2:C9 sont 12, 15, 18, 9, 15, 20, 14, 7. =NB.SI(C2:C9;\">=15\") compte 15, 18, 15, 20 : résultat 4 (et non 68, qui serait leur somme avec SOMME.SI).",
      erreur:
        "✗ Écrire =A1+A2/2 pour une moyenne → ✓ =(A1+A2)/2 ou =MOYENNE(A1:A2).\n✗ Oublier le $ sur une cellule de paramètre (taux, coefficient) → ✓ Figer le paramètre : $E$1.\n✗ Confondre B2:B5 (plage de 4 cellules) et B2;B5 (2 cellules) → ✓ Le deux-points signifie « jusqu'à ».\n✗ Confondre NB.SI (compte) et SOMME.SI (additionne) → ✓ NB = nombre de cellules, SOMME = total des valeurs.\n✗ Croire qu'un filtre supprime des lignes → ✓ Il les masque ; elles réapparaissent quand on retire le filtre.\n✗ Croire que MOYENNE compte une cellule vide comme 0 → ✓ Elle l'ignore ; seul un vrai 0 est compté.",
      approfondir:
        "Le jour de l'épreuve, tu n'as pas de tableur : simule toujours la formule sur les valeurs données, en écrivant au besoin la liste des cellules concernées. Pour les recopies, raisonne en décalage (+1 ligne, +1 colonne) plutôt qu'en « vers le bas » ou « vers la droite ». Dans Excel, la touche F4 fait défiler les quatre formes d'une référence (A1, $A$1, A$1, $A1) ; dans LibreOffice Calc, c'est Maj+F4. Un graphique se construit à partir d'une plage : si une donnée change, le graphique se met à jour. Lien avec l'algorithmique : SI correspond à « si… alors… sinon », et ET, OU à la logique booléenne.",
      cards: [
        ["Compter les cellules qui vérifient un critère", "NB.SI(plage;critère)", false],
        ["$A2 recopiée vers la droite et vers le bas", "La colonne A reste fixe, la ligne change", false],
        ["4e argument FAUX de RECHERCHEV", "Correspondance exacte", false],
        ["Masquer des lignes sans les supprimer", "Filtrer", false],
        ["Résumer une grande liste par catégories sans formule", "Tableau croisé dynamique", false],
        ["Graphique pour une évolution dans le temps", "Courbe", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-DATA-001", S, "dig.data.fonction", 1, "Les cellules B2, B3, B4 et B5 contiennent 4, 7, 0 et 9. Quel résultat affiche =SOMME(B2:B5) ?", [
      ["20", true, "4 + 7 + 0 + 9 = 20."],
      ["13", false, "Seules B2 et B5 ont été additionnées : confusion entre B2:B5 et B2;B5."],
      ["5", false, "C'est la moyenne (20 ÷ 4), pas la somme."],
      ["4", false, "C'est le nombre de cellules de la plage, pas leur total."],
    ], "Le deux-points désigne la plage de B2 à B5, soit quatre cellules. SOMME additionne leurs valeurs : 4 + 7 + 0 + 9 = 20.", "B2:B5 = toutes les cellules de B2 à B5.", {
      hints: ["Que signifie le deux-points entre B2 et B5 ?", "La plage contient quatre cellules.", "Additionne les quatre valeurs."],
    }),
    q("B-DIG-DATA-002", S, "dig.data.fonction", 2, "B2 contient 12, B3 est vide, B4 contient 8 et B5 contient 10. Quel résultat affiche =MOYENNE(B2:B5) ?", [
      ["10", true, "MOYENNE ignore la cellule vide : (12 + 8 + 10) ÷ 3 = 10."],
      ["7,5", false, "La cellule vide a été comptée comme un zéro : 30 ÷ 4."],
      ["30", false, "C'est la somme, pas la moyenne."],
      ["#DIV/0!", false, "Cette erreur n'apparaît que si aucune cellule ne contient de nombre."],
    ], "MOYENNE divise la somme des nombres par le nombre de cellules contenant un nombre. Une cellule vide est ignorée ; une cellule contenant 0 serait comptée.", "MOYENNE ignore les cellules vides, pas les zéros.", {
      hints: ["Combien de cellules contiennent réellement un nombre ?", "Une cellule vide n'est pas un zéro.", "Divise 30 par le nombre de valeurs présentes."],
      lessonAnchor: "erreur",
    }),
    q("B-DIG-DATA-003", S, "dig.data.si", 1, "La cellule B2 contient 10. Que renvoie =SI(B2>=10;\"Admis\";\"Ajourné\") ?", [
      ["Admis", true, "10 >= 10 est vrai : la fonction renvoie le deuxième argument."],
      ["Ajourné", false, "Confusion entre >= (supérieur ou égal) et > (strictement supérieur)."],
      ["VRAI", false, "SI renvoie la valeur choisie, pas le résultat du test."],
      ["10", false, "La fonction renvoie l'un des deux textes, pas la valeur de B2."],
    ], "SI(test;si_vrai;si_faux) : le test B2>=10 est vrai pour B2 = 10 (égalité incluse), donc la formule affiche « Admis ».", "SI(test;valeur si vrai;valeur si faux) ; >= inclut l'égalité.", {
      hints: ["Évalue d'abord le test avec la valeur de B2.", ">= signifie « supérieur ou égal ».", "Test vrai : on prend le premier texte."],
    }),
    q("B-DIG-DATA-004", S, "dig.data.fonction", 2, "La plage C2:C9 contient les notes 12, 15, 18, 9, 15, 20, 14 et 7. Que renvoie =NB.SI(C2:C9;\">=15\") ?", [
      ["4", true, "Les notes 15, 18, 15 et 20 vérifient le critère."],
      ["2", false, "Seules les notes strictement supérieures à 15 ont été comptées."],
      ["68", false, "C'est la somme des notes concernées (SOMME.SI), pas leur nombre."],
      ["8", false, "C'est le nombre total de notes, sans critère."],
    ], "NB.SI compte les cellules qui respectent le critère. Ici, >=15 inclut les deux notes égales à 15 : 15, 18, 15, 20, soit 4 cellules.", "NB.SI compte ; SOMME.SI additionne.", {
      hints: ["NB.SI renvoie un nombre de cellules.", "Le critère inclut la valeur 15.", "Repère toutes les notes égales ou supérieures à 15."],
      lessonAnchor: "exemple",
    }),
    q("B-DIG-DATA-005", S, "dig.data.reference", 2, "La cellule C2 contient =A2*B2. On copie C2 et on la colle en D3. Quelle formule obtient-on en D3 ?", [
      ["=B3*C3", true, "Décalage d'une colonne et d'une ligne : A2 devient B3, B2 devient C3."],
      ["=A3*B3", false, "Seul le décalage de ligne a été appliqué, pas celui de colonne."],
      ["=B2*C2", false, "Seul le décalage de colonne a été appliqué, pas celui de ligne."],
      ["=A2*B2", false, "Des références relatives se décalent lors d'une copie."],
    ], "De C2 à D3, la formule se déplace d'une colonne (C → D) et d'une ligne (2 → 3). Les références relatives subissent le même décalage : A2 → B3 et B2 → C3.", "Une référence relative se décale exactement comme la formule.", {
      hints: ["Calcule le déplacement entre C2 et D3.", "Une colonne vers la droite et une ligne vers le bas.", "Applique ce double décalage à A2 et à B2."],
      lessonAnchor: "methode",
    }),
    q("B-DIG-DATA-006", S, "dig.data.reference", 3, "La cellule B3 contient =$A3*B$1. On la copie en C4. Quelle formule obtient-on ?", [
      ["=$A4*C$1", true, "La colonne A et la ligne 1 sont figées ; le reste se décale d'une colonne et d'une ligne."],
      ["=$A4*B$1", false, "La colonne de B$1 n'est pas figée : elle doit devenir C."],
      ["=$A3*C$1", false, "La ligne de $A3 n'est pas figée : elle doit devenir 4."],
      ["=$B4*C$2", false, "Les parties précédées d'un $ ont été décalées à tort."],
    ], "Dans une référence mixte, le $ fige seulement ce qui le suit immédiatement. $A3 : colonne figée, ligne libre → $A4. B$1 : colonne libre, ligne figée → C$1.", "Le $ fige seulement la colonne ou la ligne qu'il précède.", {
      hints: ["Repère ce que chaque $ fige.", "Le décalage est d'une colonne et d'une ligne.", "$A3 garde sa colonne, B$1 garde sa ligne."],
      reserved: true,
      lessonAnchor: "exemple",
    }),
    q("B-DIG-DATA-007", S, "dig.data.reference", 2, "Les prix hors taxes sont en B2:B20 et le taux de TVA (20 %) est dans la seule cellule E1. Quelle formule écrire en C2 pour obtenir le prix TTC, puis la recopier jusqu'en C20 ?", [
      ["=B2*(1+$E$1)", true, "B2 se décale ligne par ligne, $E$1 reste sur le taux."],
      ["=B2*(1+E1)", false, "Recopiée, E1 deviendrait E2, E3… qui sont vides : le taux serait perdu."],
      ["=$B$2*(1+$E$1)", false, "Toutes les lignes calculeraient le prix TTC du seul premier produit."],
      ["=B2*1+$E$1", false, "Priorité de la multiplication : on ajoute 0,2 au prix au lieu de l'augmenter de 20 %."],
    ], "La cellule paramètre (le taux) doit être absolue pour rester fixe pendant la recopie ; la cellule qui change à chaque ligne (le prix) reste relative. Les parenthèses sont nécessaires pour calculer 1 + taux avant de multiplier.", "Paramètre unique = référence absolue ; donnée de la ligne = référence relative.", {
      hints: ["Quelle cellule doit changer à chaque ligne, laquelle doit rester fixe ?", "La cellule fixe s'écrit avec deux $.", "Vérifie aussi les parenthèses autour de 1 + taux."],
    }),
    q("B-DIG-DATA-008", S, "dig.data.formule", 1, "A1 contient 10 et A2 contient 4. Quel résultat affiche =A1-A2/2 ?", [
      ["8", true, "La division passe avant la soustraction : 10 − 2 = 8."],
      ["3", false, "La soustraction a été faite en premier : (10 − 4) ÷ 2."],
      ["7", false, "C'est la moyenne de A1 et A2, qui demanderait d'autres opérations."],
      ["12", false, "Signe inversé : 10 + 2."],
    ], "Le tableur applique les priorités mathématiques : A2/2 = 2 est calculé d'abord, puis 10 − 2 = 8. Pour obtenir (10 − 4) ÷ 2, il faudrait écrire =(A1-A2)/2.", "Priorités : parenthèses, puissance, × et ÷, puis + et −.", {
      hints: ["Quelle opération est prioritaire ?", "Calcule d'abord A2/2.", "Soustrais ensuite ce résultat de 10."],
    }),
    q("B-DIG-DATA-009", S, "dig.data.recherche", 2, "Le tableau A2:C50 contient, dans l'ordre des colonnes, la référence d'un article, sa désignation et son prix. Que renvoie =RECHERCHEV(\"P-104\";A2:C50;3;FAUX) ?", [
      ["Le prix de l'article de référence P-104", true, "La fonction trouve P-104 dans la 1re colonne et renvoie la valeur de la 3e colonne, le prix."],
      ["La désignation de l'article P-104", false, "La désignation est dans la 2e colonne ; l'argument 3 désigne la 3e."],
      ["Le numéro de la ligne où se trouve P-104", false, "RECHERCHEV renvoie une valeur du tableau, pas une position."],
      ["Le nombre d'articles de référence P-104", false, "Compter des occurrences relève de NB.SI."],
    ], "RECHERCHEV(valeur;tableau;n°_colonne;FAUX) cherche la valeur dans la première colonne du tableau, puis renvoie la cellule de la colonne n° indiquée sur la même ligne. Les colonnes se comptent à partir de la première colonne du tableau.", "RECHERCHEV : cherche dans la 1re colonne, renvoie la colonne n° demandée.", {
      hints: ["Dans quelle colonne RECHERCHEV cherche-t-elle la valeur ?", "Le troisième argument indique la colonne à renvoyer.", "La 3e colonne du tableau est celle du prix."],
    }),
    q("B-DIG-DATA-010", S, "dig.data.recherche", 3, "Pourquoi écrit-on FAUX comme dernier argument de =RECHERCHEV(F2;A2:C50;2;FAUX) ?", [
      ["Pour exiger une correspondance exacte avec la valeur cherchée", true, "Avec FAUX, la fonction renvoie #N/A si la valeur exacte est absente."],
      ["Pour que la fonction renvoie FAUX si la valeur est trouvée", false, "Le dernier argument règle le mode de recherche, pas la valeur renvoyée."],
      ["Pour chercher dans la dernière colonne au lieu de la première", false, "RECHERCHEV cherche toujours dans la première colonne du tableau."],
      ["Pour ignorer les majuscules", false, "La recherche n'en tient de toute façon pas compte ; ce n'est pas le rôle de cet argument."],
    ], "Avec VRAI (ou sans argument), RECHERCHEV accepte une valeur approchée et suppose la première colonne triée : elle peut renvoyer une ligne voisine sans prévenir. FAUX impose la valeur exacte, ce qu'on veut pour une référence, un nom ou un identifiant.", "RECHERCHEV(…;FAUX) = correspondance exacte.", {
      hints: ["Le dernier argument règle le type de correspondance.", "Sans lui, la fonction peut se contenter d'une valeur proche.", "FAUX signifie « pas d'approximation »."],
    }),
    q("B-DIG-DATA-011", S, "dig.data.tri", 1, "Ton tableau liste tous les élèves du lycée. Tu veux n'afficher que ceux de la classe TG2, sans supprimer les autres lignes. Quelle fonctionnalité utilises-tu ?", [
      ["Le filtre", true, "Il masque temporairement les lignes qui ne respectent pas le critère."],
      ["Le tri", false, "Le tri réordonne les lignes mais les affiche toutes."],
      ["La suppression des autres lignes", false, "Tu perdrais des données que tu veux conserver."],
      ["La fusion de cellules", false, "Fusionner des cellules ne sélectionne aucune ligne."],
    ], "Le filtre affiche seulement les lignes qui respectent un critère (classe = TG2) ; les autres sont masquées, pas effacées. Le tri, lui, change seulement l'ordre.", "Filtrer = masquer sans supprimer ; trier = réordonner.", {
      hints: ["Tu veux sélectionner, pas réordonner.", "Les autres lignes doivent être conservées.", "La fonctionnalité affiche une flèche dans l'en-tête de colonne."],
    }),
    q("B-DIG-DATA-012", S, "dig.data.tcd", 2, "Une feuille contient 3 000 ventes (date, vendeur, région, montant). Tu veux obtenir rapidement le total des ventes par région et par vendeur. Quel outil est le plus adapté ?", [
      ["Un tableau croisé dynamique", true, "Il regroupe et totalise les données par catégories en quelques clics."],
      ["Un tri par ordre alphabétique des vendeurs", false, "Le tri regroupe visuellement, mais ne calcule aucun total."],
      ["La mise en forme conditionnelle", false, "Elle colore des cellules sans rien totaliser."],
      ["Un graphique en secteurs des 3 000 montants", false, "Un graphique de 3 000 parts serait illisible et ne donne pas les totaux par catégorie."],
    ], "Le tableau croisé dynamique résume une grande liste : on place la région et le vendeur en lignes ou en colonnes et la somme des montants en valeurs. Il se met à jour quand les données sont actualisées.", "Synthèse par catégories d'une grande liste = tableau croisé dynamique.", {
      hints: ["Tu veux des totaux par catégories croisées.", "L'outil ne demande aucune formule.", "Son nom contient le mot « croisé »."],
    }),
    q("B-DIG-DATA-013", S, "dig.data.graphique", 1, "Tu veux représenter l'évolution du nombre d'abonnés d'une chaîne vidéo, mois par mois, sur deux ans. Quel graphique choisis-tu ?", [
      ["Une courbe", true, "La courbe montre une évolution continue dans le temps."],
      ["Un graphique en secteurs", false, "Les secteurs montrent la répartition d'un total en parts, pas une évolution."],
      ["Un nuage de points sans ordre de temps", false, "Il sert à étudier la relation entre deux variables numériques."],
      ["Un tableau croisé dynamique", false, "C'est un outil de synthèse, pas un graphique."],
    ], "Courbe : évolution dans le temps. Histogramme : comparaison de catégories. Secteurs : parts d'un total. Nuage de points : relation entre deux variables.", "Évolution dans le temps = courbe.", {
      hints: ["La donnée varie au fil du temps.", "Il faut relier les valeurs successives.", "Le graphique adapté trace une ligne."],
    }),
    q("B-DIG-DATA-014", S, "dig.data.si", 2, "B2 contient 12 et C2 contient 9. Que renvoie =SI(ET(B2>=10;C2>=10);\"Validé\";\"Non validé\") ?", [
      ["Non validé", true, "C2 >= 10 est faux, donc ET(…) est faux."],
      ["Validé", false, "Avec ET, une seule condition vraie ne suffit pas ; c'est OU qui se contenterait d'une condition."],
      ["FAUX", false, "SI renvoie l'un des deux textes, pas la valeur logique du test."],
      ["10,5", false, "La formule ne calcule aucune moyenne."],
    ], "ET renvoie VRAI seulement si toutes les conditions sont vraies. Ici B2 >= 10 est vrai mais C2 >= 10 est faux : le test est faux, SI renvoie « Non validé ».", "ET : toutes les conditions ; OU : au moins une.", {
      hints: ["Évalue chacune des deux conditions.", "ET exige que toutes soient vraies.", "Une condition fausse suffit à rendre ET faux."],
      reserved: true,
    }),
  ],
};
