// de.prep : prépositions et cas.
import { L, Q } from "./common";

export const lessonPrep = L({
  skillId: "de.prep",
  title: "Prépositions et cas",
  objectives: ["Associer chaque préposition à son cas", "Choisir accusatif ou datif après une préposition mixte", "Employer les prépositions de lieu avec les villes, pays et personnes"],
  prerequisites: ["de.cas"],
  regle:
    "Après une préposition, le cas ne se choisit pas : il est imposé. On apprend donc chaque préposition avec son cas, comme un mot de vocabulaire.\n\nToujours l'accusatif : durch, für, gegen, ohne, um (et bis). Ich kaufe ein Geschenk für meinen Vater.\n\nToujours le datif : aus, bei, mit, nach, seit, von, zu, gegenüber. Ich fahre mit dem Bus. Seit einem Jahr lerne ich Spanisch : seit se construit avec le présent pour une action qui dure encore.\n\nPrépositions mixtes (Wechselpräpositionen) : an, auf, hinter, in, neben, über, unter, vor, zwischen. Question wohin ? (déplacement vers un lieu, changement de place) : accusatif. Question wo ? (position, action à l'intérieur d'un lieu) : datif. Ich gehe in die Stadt (wohin). Ich bin in der Stadt (wo). Les couples de verbes aident : legen, stellen, setzen, hängen (transitif) + accusatif ; liegen, stehen, sitzen, hängen (intransitif) + datif.\n\nGénitif à l'écrit : wegen (à cause de), trotz (malgré), während (pendant), statt (au lieu de), innerhalb, außerhalb. Wegen des Streiks, trotz des Regens, während der Ferien. À l'oral, on entend parfois le datif après ces prépositions ; à l'écrit et au concours, la norme reste le génitif.\n\nContractions fréquentes : im (in dem), ins (in das), am (an dem), ans (an das), zum (zu dem), zur (zu der), beim (bei dem), vom (von dem).\n\nDestinations : nach pour les villes et les pays sans article (nach Berlin, nach Spanien) et dans nach Hause ; in + accusatif pour les pays avec article (in die Schweiz, in die USA, in die Türkei) ; zu pour aller chez une personne ou vers un bâtiment (zum Arzt, zur Bank). Pour le lieu où l'on est : in Berlin, in der Schweiz, beim Arzt, zu Hause.",
  formules:
    "Accusatif : durch, für, gegen, ohne, um\nDatif : aus, bei, mit, nach, seit, von, zu, gegenüber\nMixtes : an, auf, hinter, in, neben, über, unter, vor, zwischen (wohin ? accusatif · wo ? datif)\nGénitif : wegen, trotz, während, statt, innerhalb, außerhalb\nlegen, stellen, setzen + accusatif · liegen, stehen, sitzen + datif\nAller : nach Berlin, in die Schweiz, zum Arzt, nach Hause · Être : in Berlin, in der Schweiz, beim Arzt, zu Hause",
  methode:
    "1. Repère la préposition et classe-la : accusatif, datif, mixte ou génitif.\n2. Si elle est mixte, pose la question : wohin ? (mouvement vers) ou wo ? (position).\n3. Détermine le genre et le nombre du nom.\n4. Choisis l'article dans le tableau des cas, en pensant aux contractions (im, zum, beim).\n5. Pour une destination, vérifie : ville ou pays sans article (nach), pays avec article (in + accusatif), personne (zu).",
  exemple:
    "« Stell die Flasche bitte in ___ Kühlschrank! » In est mixte. Stellen exprime un déplacement : wohin ? Accusatif masculin : in den Kühlschrank.\n\n« Die Flasche steht schon in ___ Kühlschrank. » Stehen exprime une position : wo ? Datif masculin : in dem, contracté en im Kühlschrank.",
  erreur:
    "✗ Ich fahre mit den Bus. → ✓ Ich fahre mit dem Bus (mit + datif).\n✗ Ich gehe in der Schule (je vais à l'école). → ✓ Ich gehe in die Schule (wohin ? accusatif).\n✗ Ich fahre nach der Schweiz. → ✓ Ich fahre in die Schweiz (pays avec article).\n✗ Ich gehe zu Hause. → ✓ Ich gehe nach Hause (mais : Ich bin zu Hause).\n✗ seit drei Jahre → ✓ seit drei Jahren (datif pluriel : le nom prend -n).\n✗ Ich warte für dich. → ✓ Ich warte auf dich (préposition imposée par le verbe).",
  approfondir:
    "Moyen mnémotechnique : les prépositions à accusatif forment « DOGFU » (durch, ohne, gegen, für, um). Pour le datif, chante « aus, bei, mit, nach, seit, von, zu » : c'est la liste que récitent tous les apprenants de l'allemand.\n\nAttention : les prépositions mixtes employées dans un sens abstrait, avec un verbe, ont un cas fixe qu'on apprend avec le verbe : warten auf + accusatif, denken an + accusatif, teilnehmen an + datif, Angst haben vor + datif. Le test wo/wohin ne s'applique plus.\n\nGestion du temps : une question de préposition doit se traiter en moins de 30 secondes. Si tu hésites entre accusatif et datif après in ou auf, cherche le verbe : c'est lui qui dit s'il y a déplacement.",
  cards: [
    ["Prépositions toujours suivies de l'accusatif", "durch, für, gegen, ohne, um", false],
    ["Prépositions toujours suivies du datif", "aus, bei, mit, nach, seit, von, zu (gegenüber)", false],
    ["Préposition mixte : wohin ? / wo ?", "wohin ? accusatif (mouvement) · wo ? datif (position)", false],
    ["Prépositions suivies du génitif", "wegen, trotz, während, statt", false],
    ["Aller en Suisse", "in die Schweiz fahren", true],
  ],
});

const S = "de.prep";

export const questionsPrep = [
  Q("B-DE-PREP-001", S, "de.prep.datif", 1, "Ergänzen Sie: «Nach ___ Unterricht gehe ich direkt nach Hause.»", [
    ["dem", true, "Nach régit toujours le datif ; Unterricht est masculin."],
    ["den", false, "Accusatif masculin : nach n'est jamais suivi de l'accusatif."],
    ["der", false, "Datif féminin ; Unterricht est masculin."],
    ["das", false, "Nominatif ou accusatif neutre : ni le bon genre ni le bon cas."],
  ], "Nach fait partie des prépositions toujours suivies du datif. Der Unterricht est masculin : nach dem Unterricht.", "aus, bei, mit, nach, seit, von, zu + datif.", [
    "Nach appartient à la liste aus, bei, mit…",
    "Quel est le genre de Unterricht ?",
    "Datif masculin : terminaison en -m.",
  ], { anchor: "formules" }),
  Q("B-DE-PREP-002", S, "de.prep.accusatif", 1, "Ergänzen Sie: «Diese Blumen sind für ___ Mutter, sie hat heute Geburtstag.»", [
    ["meine", true, "Für régit l'accusatif ; Mutter est féminin : meine."],
    ["meiner", false, "Datif féminin : für n'est jamais suivi du datif."],
    ["meinem", false, "Datif masculin ou neutre ; ni le cas ni le genre."],
    ["meinen", false, "Accusatif masculin ; Mutter est féminin."],
  ], "Für fait partie des prépositions à accusatif (durch, für, gegen, ohne, um). Accusatif féminin : meine Mutter.", "durch, für, gegen, ohne, um + accusatif.", [
    "Quel cas suit für ?",
    "Mutter est féminin.",
    "Au féminin, l'accusatif est identique au nominatif.",
  ]),
  Q("B-DE-PREP-003", S, "de.prep.wechsel", 2, "Ergänzen Sie: «Er legt sein Handy vor dem Essen auf ___ Tisch.»", [
    ["den", true, "Wohin ? Legen exprime un déplacement : accusatif masculin."],
    ["dem", false, "Datif : réservé à la position (Das Handy liegt auf dem Tisch)."],
    ["der", false, "Datif féminin ; Tisch est masculin."],
    ["des", false, "Génitif : auf n'est jamais suivi du génitif."],
  ], "Auf est une préposition mixte. Legen indique qu'on met l'objet quelque part (wohin ?) : accusatif. Der Tisch, masculin : auf den Tisch. Avec liegen (position), on aurait auf dem Tisch.", "Préposition mixte : wohin ? accusatif ; wo ? datif.", [
    "Auf est une préposition mixte : quelle question poser ?",
    "Legen = poser quelque part : y a-t-il déplacement ?",
    "Wohin ? Accusatif masculin.",
  ], { anchor: "methode" }),
  Q("B-DE-PREP-004", S, "de.prep.wechsel", 2, "Ergänzen Sie: «Die Kinder spielen den ganzen Nachmittag hinter ___ Haus.»", [
    ["dem", true, "Wo ? Les enfants jouent à un endroit : datif neutre."],
    ["das", false, "Accusatif neutre : il n'y a pas de déplacement vers l'arrière de la maison."],
    ["den", false, "Accusatif masculin ; Haus est neutre."],
    ["der", false, "Datif féminin ; Haus est neutre."],
  ], "Hinter est une préposition mixte. Spielen décrit une activité dans un lieu (wo ?) : datif. Das Haus, neutre : hinter dem Haus.", "Activité dans un lieu = wo ? = datif.", [
    "Hinter est mixte.",
    "Les enfants vont-ils quelque part ou restent-ils au même endroit ?",
    "Wo ? Datif neutre, comme le masculin.",
  ]),
  Q("B-DE-PREP-005", S, "de.prep.genitif", 2, "Ergänzen Sie: «___ des schlechten Wetters findet das Konzert im Park statt.»", [
    ["Trotz", true, "Préposition « malgré », suivie du génitif (des schlechten Wetters)."],
    ["Obwohl", false, "Conjonction de subordination : elle introduit une proposition avec un verbe, pas un groupe nominal."],
    ["Trotzdem", false, "Adverbe (« quand même ») : il ne gouverne pas de groupe nominal."],
    ["Ohne", false, "Ohne régit l'accusatif ; ici, le groupe est au génitif."],
  ], "Le groupe des schlechten Wetters est au génitif et n'a pas de verbe : il faut une préposition à génitif. Trotz (malgré) convient au sens comme à la construction.", "trotz, wegen, während + génitif ; obwohl introduit une subordonnée.", [
    "Le groupe qui suit contient-il un verbe ?",
    "Il faut une préposition, et le groupe est au génitif.",
    "« Malgré » en allemand, préposition à génitif.",
  ]),
  Q("B-DE-PREP-006", S, "de.prep.datif", 2, "Ergänzen Sie: «Seit ___ Jahr lerne ich Deutsch mit einer App.»", [
    ["einem", true, "Seit régit le datif ; Jahr est neutre."],
    ["ein", false, "Forme du nominatif ou de l'accusatif neutre."],
    ["einen", false, "Accusatif masculin ; ni le cas ni le genre."],
    ["eines", false, "Génitif ; seit est suivi du datif."],
  ], "Seit fait partie des prépositions à datif. Das Jahr est neutre : seit einem Jahr. Le verbe reste au présent, car l'apprentissage continue.", "seit + datif, avec le présent pour une action qui dure encore.", [
    "Seit est dans la liste aus, bei, mit, nach, seit…",
    "Jahr est neutre.",
    "Datif neutre de ein : terminaison en -m.",
  ]),
  Q("B-DE-PREP-007", S, "de.prep.lieux", 3, "Ergänzen Sie: «Im Sommer fahren wir mit dem Zug ___ Schweiz.»", [
    ["in die", true, "Pays avec article (die Schweiz) : in + accusatif pour une destination."],
    ["nach", false, "Nach s'emploie avec les pays sans article (nach Frankreich)."],
    ["nach der", false, "Nach ne s'emploie pas avec un pays qui a un article."],
    ["in der", false, "Datif : position (wir sind in der Schweiz), pas destination."],
  ], "La Suisse est un des pays qui gardent l'article en allemand (die Schweiz, die Türkei, die USA). Pour s'y rendre : in + accusatif, in die Schweiz.", "Pays avec article : in die Schweiz (destination), in der Schweiz (lieu).", [
    "Schweiz s'emploie-t-il avec un article ?",
    "Pour les pays avec article, on n'utilise pas nach.",
    "Destination avec in : accusatif féminin.",
  ], { anchor: "erreur", reserved: true }),
  Q("B-DE-PREP-008", S, "de.prep.lieux", 2, "Ergänzen Sie: «Ich habe Fieber, deshalb gehe ich heute Nachmittag ___ Arzt.»", [
    ["zum", true, "Aller chez une personne : zu + datif, contracté en zum."],
    ["beim", false, "Bei indique où l'on est (Ich bin beim Arzt), pas où l'on va."],
    ["nach dem", false, "Nach s'emploie pour les villes et pays, pas pour les personnes."],
    ["in den", false, "On ne va pas « dans » le médecin : in s'emploie pour des lieux."],
  ], "Pour aller chez quelqu'un, l'allemand emploie zu + datif : zu dem Arzt, contracté en zum Arzt. Une fois sur place : beim Arzt.", "zu = aller chez quelqu'un ; bei = être chez quelqu'un.", [
    "On va chez une personne.",
    "Quelle préposition exprime « aller chez » ?",
    "zu + dem se contracte.",
  ]),
  Q("B-DE-PREP-009", S, "de.prep.accusatif", 1, "Ergänzen Sie: «Viele Einwohner sind gegen ___ Plan des Bürgermeisters.»", [
    ["diesen", true, "Gegen régit l'accusatif ; Plan est masculin."],
    ["diesem", false, "Datif masculin : gegen n'est jamais suivi du datif."],
    ["dieser", false, "Nominatif masculin ou datif féminin."],
    ["dieses", false, "Génitif masculin ou forme neutre."],
  ], "Gegen fait partie des prépositions à accusatif. Der Plan, masculin : gegen diesen Plan. Des Bürgermeisters est un complément du nom au génitif.", "durch, für, gegen, ohne, um + accusatif ; dieser se décline comme der.", [
    "Gegen appartient à quelle liste ?",
    "Plan est masculin.",
    "Accusatif masculin de dieser : finale en -n.",
  ]),
  Q("B-DE-PREP-010", S, "de.prep.wechsel", 3, "Sie dekorieren gerade Ihr Zimmer. Welcher Satz ist richtig?", [
    ["Ich hänge das Bild an die Wand.", true, "Hängen transitif (accrocher) = déplacement : an + accusatif."],
    ["Ich hänge das Bild an der Wand.", false, "Datif : il exprime la position, pas l'action d'accrocher."],
    ["Das Bild hängt an die Wand.", false, "Hängen intransitif (être accroché) = position : il faudrait an der Wand."],
    ["Ich hänge das Bild an den Wand.", false, "Wand est féminin : die Wand."],
  ], "Hängen a deux sens : accrocher (transitif, wohin ?, accusatif) et être accroché (intransitif, wo ?, datif). Ich hänge das Bild an die Wand ; das Bild hängt an der Wand.", "Verbe de mise en place + accusatif ; verbe de position + datif.", [
    "Le verbe hängen a deux sens.",
    "Accrocher = mouvement ; être accroché = position.",
    "Mouvement : accusatif féminin.",
  ], { reserved: true }),
  Q("B-DE-PREP-011", S, "de.prep.genitif", 2, "Ergänzen Sie: «Während ___ Studiums hat sie zwei Jahre in Wien gewohnt.»", [
    ["ihres", true, "Während + génitif ; Studium est neutre : ihres Studiums."],
    ["ihr", false, "Forme sans terminaison du nominatif ou de l'accusatif neutre."],
    ["ihre", false, "Forme féminine ou plurielle."],
    ["ihren", false, "Accusatif masculin ou datif pluriel ; le nom porte la marque -s du génitif."],
  ], "Während régit le génitif. Das Studium est neutre ; le génitif neutre prend -es sur le possessif et -s sur le nom : ihres Studiums.", "während + génitif : des/eines/ihres + nom en -s au masculin et au neutre.", [
    "Quel cas suit während à l'écrit ?",
    "Regarde la fin du nom : Studiums.",
    "Génitif neutre : possessif en -es.",
  ]),
];
