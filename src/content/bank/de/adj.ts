// de.adj : déclinaison de l'adjectif, comparatif et superlatif.
import { L, Q } from "./common";

export const lessonAdj = L({
  skillId: "de.adj",
  title: "Déclinaison de l'adjectif, comparatif et superlatif",
  objectives: ["Choisir la terminaison de l'adjectif selon le déterminant", "Former le comparatif et le superlatif, y compris les irréguliers", "Construire une comparaison avec als et wie"],
  prerequisites: ["de.cas"],
  regle:
    "L'adjectif attribut (après sein, werden, bleiben) est invariable : Das Buch ist interessant. L'adjectif épithète, placé devant le nom, prend une terminaison qui dépend du déterminant. Principe unique : la marque du cas (r, e, s, m, n) doit apparaître une fois. Si le déterminant la porte déjà, l'adjectif prend une terminaison faible ; sinon, l'adjectif la prend lui-même.\n\nDéclinaison faible, après der, die, das, dieser, jeder, welcher : -e aux cinq formes « faciles » (nominatif singulier des trois genres, accusatif féminin et neutre), -en partout ailleurs (accusatif masculin, tout le datif, tout le génitif, tout le pluriel). Der neue Kollege, mit dem neuen Kollegen, die neuen Kollegen.\n\nDéclinaison mixte, après ein, kein et les possessifs : comme la faible, sauf aux trois formes où ein n'a pas de terminaison ; l'adjectif prend alors la marque de l'article défini : ein neuer Kollege (der), ein neues Auto (das, nominatif et accusatif). Partout ailleurs : -e ou -en comme en faible (eine neue Stelle, mit einem neuen Auto, keine neuen Ideen).\n\nDéclinaison forte, sans déterminant (ou après un nombre, viele, einige, wenige) : l'adjectif prend la terminaison de l'article défini : kalter Kaffee (der), kalte Milch (die), kaltes Wasser (das), mit kaltem Wasser (dem), zwei neue Stifte (die). Exception : génitif masculin et neutre en -en (trotz starken Regens).\n\nComparatif : adjectif + -er, avec souvent une inflexion pour les adjectifs courts (alt → älter, groß → größer, jung → jünger, kurz → kürzer). Complément avec als : Berlin ist größer als München. L'égalité se marque par so … wie : Er ist so groß wie sein Vater.\n\nSuperlatif : am + adjectif + -(e)sten pour l'attribut et l'adverbe (Er läuft am schnellsten) ; der/die/das + adjectif + -(e)ste + terminaison devant un nom (der schnellste Läufer).\n\nIrréguliers : gut, besser, am besten ; viel, mehr, am meisten ; gern, lieber, am liebsten ; hoch, höher, am höchsten (attribut : hoch, épithète : der hohe Turm) ; nah, näher, am nächsten.\n\nAu comparatif et au superlatif épithètes, on ajoute en plus la terminaison normale : ein besserer Job, einen besseren Job.",
  formules:
    "Faible (der, dieser…) : -e au nominatif singulier et à l'accusatif féminin/neutre ; -en ailleurs\nMixte (ein, kein, mein…) : ein guter Wein, ein gutes Buch, eine gute Idee ; -en au datif, génitif, pluriel et accusatif masculin\nForte (sans article) : guter Wein, gute Milch, gutes Brot, mit gutem Wein, gute Freunde, mit guten Freunden\nComparatif : -er + als · égalité : so … wie\nSuperlatif : am …sten · der/die/das …ste\ngut, besser, am besten · viel, mehr, am meisten · gern, lieber, am liebsten · hoch, höher, am höchsten",
  methode:
    "1. Vérifie que l'adjectif est épithète (devant le nom) ; attribut, il est invariable.\n2. Détermine genre, nombre et cas du groupe nominal.\n3. Regarde le déterminant : der-mot, ein-mot, ou rien.\n4. Si le déterminant montre déjà la marque du cas : -e ou -en. Sinon : l'adjectif prend la marque de der/die/das.\n5. Au comparatif ou superlatif épithète : -er ou -st, puis la terminaison normale.",
  exemple:
    "« Wir wohnen in einem klein___ Dorf. » In + datif (wo ?), das Dorf, neutre. Einem montre déjà la marque du datif (-m) : l'adjectif prend la terminaison faible -en : in einem kleinen Dorf.\n\n« Ich trinke gern kalt___ Milch. » Pas de déterminant : l'adjectif prend la marque de l'article défini. Accusatif féminin : die → kalte Milch.",
  erreur:
    "✗ ein interessante Buch → ✓ ein interessantes Buch (ein n'a pas de marque : l'adjectif prend -s).\n✗ mit freundliche Grüße → ✓ mit freundlichen Grüßen (datif pluriel).\n✗ Das Buch ist interessantes. → ✓ Das Buch ist interessant (attribut invariable).\n✗ Berlin ist größer wie München. → ✓ größer als München.\n✗ am gutesten, mehr gut → ✓ am besten, besser.\n✗ der hoche Turm → ✓ der hohe Turm.",
  approfondir:
    "Astuce de vitesse : après un déterminant, la réponse est le plus souvent -en. Commence par te demander si tu es dans l'une des « cinq formes en -e » (après der/die/das) ou dans l'une des trois formes sans marque après ein. Sinon, -en.\n\nCas limite : après alle, beide et les pluriels en der-mot, l'adjectif est faible (alle neuen Schüler) ; après viele, einige, mehrere et les nombres, il est fort (viele neue Schüler).\n\nLien : l'adjectif substantivé suit les mêmes règles : der Deutsche, ein Deutscher, die Jugendlichen, ein Bekannter.",
  cards: [
    ["Principe de la déclinaison de l'adjectif", "La marque du cas apparaît une fois : sur le déterminant ou sur l'adjectif", false],
    ["ein + adjectif + nom neutre (nominatif)", "ein neues Auto", false],
    ["Formule de fin de lettre", "Mit freundlichen Grüßen", false],
    ["Comparatif et superlatif de gut", "besser, am besten", false],
    ["Plus grand que", "größer als", true],
  ],
});

const S = "de.adj";

export const questionsAdj = [
  Q("B-DE-ADJ-001", S, "de.adj.mixte", 1, "Ergänzen Sie: «Das ist wirklich ein interessant___ Buch.»", [
    ["interessantes", true, "Ein (neutre, nominatif) n'a pas de marque : l'adjectif prend -es, comme das."],
    ["interessante", false, "Terminaison faible : il faudrait l'article das."],
    ["interessanten", false, "Terminaison -en : ni datif, ni génitif, ni pluriel ici."],
    ["interessanter", false, "Marque du masculin ; Buch est neutre."],
  ], "Das Buch est neutre, au nominatif (attribut du sujet das). Ein ne porte pas la marque du neutre : l'adjectif la prend, -es.", "ein + adjectif + neutre (nominatif, accusatif) : -es.", [
    "Quel est le genre de Buch ?",
    "Ein montre-t-il le genre neutre ?",
    "L'adjectif prend la marque de das.",
  ]),
  Q("B-DE-ADJ-002", S, "de.adj.forte", 2, "Ergänzen Sie: «Zum Frühstück trinke ich am liebsten kalt___ Milch.»", [
    ["kalte", true, "Sans article, accusatif féminin : l'adjectif prend la marque de die, -e."],
    ["kalter", false, "Marque du masculin ou du datif féminin."],
    ["kalten", false, "Terminaison faible ou accusatif masculin."],
    ["kaltes", false, "Marque du neutre ; Milch est féminin."],
  ], "Die Milch est féminin, COD de trinken (accusatif). Pas de déterminant : déclinaison forte, l'adjectif prend la terminaison de die : kalte Milch.", "Sans déterminant, l'adjectif prend la terminaison de l'article défini.", [
    "Y a-t-il un déterminant ?",
    "Milch est féminin, à l'accusatif.",
    "Même terminaison que l'article die.",
  ]),
  Q("B-DE-ADJ-003", S, "de.adj.mixte", 2, "Ergänzen Sie: «Meine Großeltern wohnen in einem klein___ Dorf in Bayern.»", [
    ["kleinen", true, "Einem porte la marque du datif : terminaison -en."],
    ["kleines", false, "Terminaison du nominatif ou de l'accusatif neutre."],
    ["kleinem", false, "La marque -m est déjà sur einem : on ne la répète pas."],
    ["kleine", false, "Terminaison faible du nominatif ; ici, datif."],
  ], "In + datif (wo ?). Einem montre déjà le datif : l'adjectif prend -en, comme toujours au datif après un déterminant.", "Après un déterminant au datif : adjectif en -en.", [
    "Quel cas après in, ici ?",
    "Le déterminant einem montre-t-il le cas ?",
    "Datif après déterminant : toujours la même terminaison.",
  ]),
  Q("B-DE-ADJ-004", S, "de.adj.faible", 1, "Ergänzen Sie: «Der neu___ Kollege kommt aus Hamburg.»", [
    ["neue", true, "Après der, nominatif singulier : terminaison faible -e."],
    ["neuen", false, "Terminaison de l'accusatif masculin ou des autres cas."],
    ["neuer", false, "Marque -r déjà portée par der : elle ne se répète pas."],
    ["neues", false, "Marque du neutre ; Kollege est masculin."],
  ], "Der montre le nominatif masculin. Après un der-mot, au nominatif singulier, l'adjectif prend -e : der neue Kollege.", "Après der/die/das au nominatif singulier : -e.", [
    "Le déterminant der montre-t-il le cas ?",
    "Nominatif singulier après der : une des formes en -e.",
    "Terminaison courte.",
  ]),
  Q("B-DE-ADJ-005", S, "de.adj.forte", 2, "Ergänzen Sie (formule de fin de lettre): «Mit freundlich___ Grüßen»", [
    ["freundlichen", true, "Mit + datif pluriel sans article : l'adjectif prend la marque de den, -en."],
    ["freundliche", false, "Terminaison du nominatif ou de l'accusatif pluriel."],
    ["freundlicher", false, "Terminaison du génitif pluriel ou du masculin."],
    ["freundlichem", false, "Marque du datif singulier ; Grüßen est au pluriel."],
  ], "Mit impose le datif ; Grüßen est au pluriel (datif en -n). Sans article : l'adjectif prend la marque de den, -en.", "Mit freundlichen Grüßen : datif pluriel.", [
    "Quel cas après mit ?",
    "Grüßen est-il singulier ou pluriel ?",
    "Datif pluriel : comme den.",
  ]),
  Q("B-DE-ADJ-006", S, "de.adj.comparaison", 1, "Ergänzen Sie: «Berlin ist deutlich größer ___ München.»", [
    ["als", true, "Comparatif de supériorité + als."],
    ["dass", false, "Calque du français « que » : dass introduit une subordonnée, pas le complément d'un comparatif."],
    ["dann", false, "Dann signifie « ensuite »."],
    ["so", false, "So s'emploie avant l'adjectif dans so … wie."],
  ], "Après un comparatif (größer), le complément est introduit par als.", "Comparatif + als ; égalité : so … wie.", [
    "Größer est un comparatif.",
    "Supériorité ou égalité ?",
    "« Que » de supériorité : deux lettres plus une.",
  ]),
  Q("B-DE-ADJ-007", S, "de.adj.comparaison", 2, "Ergänzen Sie: «Im Winter sind die Tage viel ___ als im Sommer.»", [
    ["kürzer", true, "Comparatif de kurz, avec inflexion, attribut donc sans terminaison."],
    ["kurzer", false, "Oubli de l'inflexion u → ü."],
    ["mehr kurz", false, "Calque de « plus court » : l'allemand ajoute -er."],
    ["kürzere", false, "Attribut : le comparatif ne prend pas de terminaison."],
  ], "Les adjectifs courts prennent souvent une inflexion au comparatif : kurz → kürzer. En attribut (après sind), pas de terminaison.", "Comparatif : -er (+ inflexion fréquente) ; attribut invariable.", [
    "Comment forme-t-on le comparatif en allemand ?",
    "Kurz prend une inflexion.",
    "Attribut : pas de terminaison supplémentaire.",
  ]),
  Q("B-DE-ADJ-008", S, "de.adj.superlatif", 2, "Ergänzen Sie: «Das war wirklich der ___ Tag meines Lebens.»", [
    ["schönste", true, "Superlatif épithète après der, nominatif masculin : -ste + -e."],
    ["schönsten", false, "Terminaison -en : pas d'accusatif, datif ou génitif ici."],
    ["am schönsten", false, "Forme attribut ou adverbe : impossible devant un nom."],
    ["schönster", false, "Marque -r déjà portée par der."],
  ], "Devant un nom, le superlatif se décline comme un adjectif : der + schönst- + terminaison faible -e au nominatif.", "Superlatif épithète : der/die/das + -ste ; am …sten seulement sans nom.", [
    "Le superlatif est-il suivi d'un nom ?",
    "Devant un nom, on ne dit pas am …",
    "Déclinaison faible après der, nominatif.",
  ]),
  Q("B-DE-ADJ-009", S, "de.adj.superlatif", 3, "Ergänzen Sie: «Von allen Schülern der Klasse spricht Lea ___ Deutsch.»", [
    ["am besten", true, "Superlatif adverbial de gut : am besten."],
    ["die beste", false, "Forme épithète : il faudrait un nom (die beste Schülerin)."],
    ["am gutesten", false, "Gut a un superlatif irrégulier."],
    ["besten", false, "Il manque am pour le superlatif adverbial."],
  ], "Le superlatif porte sur le verbe sprechen : forme adverbiale am + -sten. Gut est irrégulier : gut, besser, am besten.", "gut, besser, am besten.", [
    "Le superlatif porte-t-il sur un nom ou sur un verbe ?",
    "Gut est irrégulier.",
    "am + superlatif de gut.",
  ]),
  Q("B-DE-ADJ-010", S, "de.adj.comparaison", 3, "Ergänzen Sie: «Nach dem Praktikum hat sie einen viel ___ Job gefunden.»", [
    ["besseren", true, "Comparatif épithète (besser-) + terminaison de l'accusatif masculin après einen (-en)."],
    ["besser", false, "Épithète devant un nom : le comparatif doit être décliné."],
    ["bessere", false, "Terminaison du nominatif ou de l'accusatif féminin."],
    ["besseres", false, "Terminaison du neutre ; Job est masculin."],
  ], "Un comparatif placé devant un nom se décline. Einen marque l'accusatif masculin : terminaison -en. Besser + en : besseren.", "Comparatif épithète = comparatif + terminaison normale.", [
    "Le comparatif est placé devant un nom.",
    "Il prend donc une terminaison : quel cas ?",
    "Accusatif masculin après einen : -en.",
  ], { reserved: true }),
  Q("B-DE-ADJ-011", S, "de.adj.faible", 2, "Ergänzen Sie: «Wegen des stark___ Regens wurde das Fußballspiel abgesagt.»", [
    ["starken", true, "Génitif après des : terminaison faible -en."],
    ["starkes", false, "Marque -s déjà portée par des."],
    ["starke", false, "Terminaison du nominatif singulier."],
    ["starker", false, "Marque du masculin nominatif sans article."],
  ], "Wegen + génitif ; der Regen, génitif des Regens. Après des, l'adjectif prend la terminaison faible -en, comme à tous les génitifs.", "Après un déterminant au génitif : -en.", [
    "Quel cas après wegen ?",
    "Le déterminant des montre-t-il le cas ?",
    "Génitif après déterminant : -en.",
  ]),
  Q("B-DE-ADJ-012", S, "de.adj.forte", 3, "Ergänzen Sie: «Für das neue Schuljahr habe ich zwei neu___ Stifte gekauft.»", [
    ["neue", true, "Après un nombre, pas de déterminant décliné : déclinaison forte, accusatif pluriel -e."],
    ["neuen", false, "Terminaison faible : elle suppose un article (die neuen Stifte)."],
    ["neuer", false, "Terminaison du génitif pluriel."],
    ["neues", false, "Terminaison du neutre singulier."],
  ], "Zwei ne se décline pas et ne montre pas le cas. L'adjectif prend donc la marque de l'article défini pluriel à l'accusatif (die) : neue.", "Après un nombre ou viele : déclinaison forte (zwei neue Stifte).", [
    "Zwei montre-t-il le cas ?",
    "Sans marque sur le déterminant, l'adjectif la prend.",
    "Accusatif pluriel : comme die.",
  ], { reserved: true }),
];
