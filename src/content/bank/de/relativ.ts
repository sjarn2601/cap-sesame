// de.relativ : pronoms relatifs.
import { L, Q } from "./common";

export const lessonRelativ = L({
  skillId: "de.relativ",
  title: "Les pronoms relatifs",
  objectives: ["Choisir le pronom relatif selon le genre, le nombre et la fonction", "Construire une relative avec préposition", "Employer was, wo et dessen/deren"],
  prerequisites: ["de.cas", "de.ordre"],
  regle:
    "La relative allemande obéit à deux règles : le pronom relatif prend le genre et le nombre de son antécédent, mais son cas dépend de sa fonction dans la relative. Et comme toute subordonnée, la relative a son verbe conjugué en fin et est encadrée de virgules.\n\nFormes : elles ressemblent à l'article défini, sauf au datif pluriel (denen) et au génitif (dessen, deren).\n– nominatif : der, die, das, die (pluriel)\n– accusatif : den, die, das, die\n– datif : dem, der, dem, denen\n– génitif : dessen, deren, dessen, deren\n\nMéthode de fonction : remplace le pronom par l'antécédent et reconstruis la relative comme une phrase simple. Der Film, den ich gesehen habe → Ich habe den Film gesehen : COD, accusatif. Die Frau, der ich geholfen habe → Ich habe der Frau geholfen : datif.\n\nAvec préposition : la préposition se place devant le pronom, en tête de relative, et impose son cas : die Freunde, mit denen ich reise ; das Hotel, in dem wir übernachtet haben.\n\nGénitif (dont, de qui) : dessen pour un antécédent masculin ou neutre, deren pour un féminin ou un pluriel. Le nom qui suit n'a pas d'article : der Kollege, dessen Auto kaputt ist ; die Kinder, deren Eltern arbeiten.\n\nWas s'emploie après alles, nichts, etwas, vieles, das (pronom), après un superlatif neutre (das Beste, was …) et pour reprendre toute une proposition : Er hat bestanden, was alle überrascht hat.\n\nWo s'emploie pour un lieu, surtout après un nom de ville ou de pays : Berlin ist die Stadt, wo ich geboren bin (ou : in der ich geboren bin). Pour un moment, wo est fréquent à l'oral (der Tag, an dem / wo).\n\nAttention au genre grammatical : das Mädchen est neutre, donc das Mädchen, das …",
  formules:
    "Nominatif : der, die, das, die\nAccusatif : den, die, das, die\nDatif : dem, der, dem, denen\nGénitif : dessen, deren, dessen, deren\nPréposition + relatif : mit dem, für den, in der, mit denen\nwas : alles, nichts, etwas, das Beste, toute une proposition\nwo : lieu (die Stadt, wo …)",
  methode:
    "1. Trouve l'antécédent : son genre et son nombre donnent la forme de base.\n2. Repère le verbe de la relative et la fonction du pronom (sujet, COD, datif, complément du nom, après préposition).\n3. Reconstruis une phrase simple avec l'antécédent pour vérifier le cas.\n4. Choisis la forme dans le tableau (attention à denen, dessen, deren).\n5. Vérifie que le verbe conjugué est à la fin de la relative.",
  exemple:
    "« Die Freunde, mit ___ ich in Urlaub fahre, kommen aus Bremen. » Antécédent : die Freunde, pluriel. Dans la relative : mit + datif. Datif pluriel du relatif : denen. Die Freunde, mit denen ich in Urlaub fahre.\n\n« Der Kollege, ___ Auto kaputt ist, kommt mit dem Zug. » L'auto est celle du collègue : génitif. Antécédent masculin : dessen.",
  erreur:
    "✗ Der Mann, den dort steht → ✓ Der Mann, der dort steht (sujet de la relative).\n✗ Die Freunde, mit den ich fahre → ✓ mit denen (datif pluriel).\n✗ Die Frau, die ich geholfen habe → ✓ der ich geholfen habe (helfen + datif).\n✗ Das ist alles, das ich weiß. → ✓ alles, was ich weiß.\n✗ Der Kollege, dessen sein Auto … → ✓ dessen Auto (pas d'article ni de possessif).\n✗ Der Film, den ich habe gesehen. → ✓ den ich gesehen habe (verbe final).",
  approfondir:
    "Ne confonds pas das (relatif ou article) et dass (conjonction « que »). Test : si tu peux remplacer par welches (relatif) ou par dieses (article), c'est das ; sinon, c'est dass.\n\nWelcher (welche, welches) existe aussi comme relatif, surtout à l'écrit soutenu, avec les mêmes cas : das Hotel, in welchem wir übernachtet haben. Au concours, la forme en der/die/das est la plus fréquente.\n\nGestion du temps : deux informations suffisent, genre-nombre de l'antécédent et fonction dans la relative. Si tu les notes mentalement avant de lire les options, tu réponds en moins de 20 secondes.",
  cards: [
    ["Datif pluriel du pronom relatif", "denen", false],
    ["Génitif du relatif", "dessen (masc., neutre) · deren (fém., pluriel)", false],
    ["Relatif après alles, nichts, etwas", "was", false],
    ["Le cas du pronom relatif dépend de…", "sa fonction dans la relative (genre et nombre : de l'antécédent)", false],
    ["La ville où je suis né", "die Stadt, wo / in der ich geboren bin", true],
  ],
});

const S = "de.relativ";

export const questionsRelativ = [
  Q("B-DE-REL-001", S, "de.relativ.cas", 1, "Ergänzen Sie: «Der Mann, ___ dort an der Haltestelle steht, ist mein Onkel.»", [
    ["der", true, "Sujet de la relative (steht), antécédent masculin : nominatif der."],
    ["den", false, "Accusatif : le pronom n'est pas COD."],
    ["dem", false, "Datif : aucun verbe ou préposition à datif."],
    ["das", false, "Neutre ; Mann est masculin."],
  ], "Antécédent masculin singulier. Dans la relative, le pronom est le sujet de steht : nominatif, der.", "Le pronom relatif sujet est au nominatif.", [
    "Quel est le sujet de steht ?",
    "Le pronom relatif est sujet.",
    "Nominatif masculin.",
  ]),
  Q("B-DE-REL-002", S, "de.relativ.cas", 2, "Ergänzen Sie: «Die Nachbarin, ___ ich gestern beim Umzug geholfen habe, hat mich zum Essen eingeladen.»", [
    ["der", true, "Helfen + datif, antécédent féminin : datif der."],
    ["die", false, "Accusatif : calque de « que j'ai aidée » ; helfen régit le datif."],
    ["deren", false, "Génitif : pas de complément du nom."],
    ["den", false, "Accusatif masculin ; ni le cas ni le genre."],
  ], "Ich habe der Nachbarin geholfen : datif. Datif féminin du relatif : der.", "Le cas du relatif dépend du verbe de la relative (helfen + datif).", [
    "Quel verbe se trouve dans la relative ?",
    "Helfen se construit avec quel cas ?",
    "Datif féminin.",
  ]),
  Q("B-DE-REL-003", S, "de.relativ.cas", 2, "Ergänzen Sie: «Das ist der Film, ___ ich dir letzte Woche empfohlen habe.»", [
    ["den", true, "COD de empfehlen, antécédent masculin : accusatif den."],
    ["der", false, "Nominatif : le sujet de la relative est ich."],
    ["dem", false, "Datif : le datif est déjà dir."],
    ["dessen", false, "Génitif : pas de complément du nom."],
  ], "Ich habe dir den Film empfohlen : le film est COD. Accusatif masculin : den.", "Relatif COD = accusatif ; seul le masculin change (den).", [
    "Quel est le sujet de la relative ?",
    "Le film est-il sujet ou COD de empfohlen ?",
    "Accusatif masculin.",
  ]),
  Q("B-DE-REL-004", S, "de.relativ.genitif", 2, "Ergänzen Sie: «Die Kinder, ___ Eltern beide arbeiten, essen mittags in der Schulkantine.»", [
    ["deren", true, "Génitif, antécédent pluriel : deren."],
    ["dessen", false, "Génitif masculin ou neutre ; Kinder est pluriel."],
    ["die", false, "Nominatif ou accusatif : il faut exprimer « dont les parents »."],
    ["denen", false, "Datif pluriel : il n'y a ni verbe ni préposition à datif."],
  ], "Les parents sont ceux des enfants : génitif. Antécédent pluriel : deren Eltern.", "dont + nom : dessen (masc., neutre), deren (fém., pluriel).", [
    "Les parents de qui ?",
    "Génitif : dessen ou deren ?",
    "Antécédent pluriel.",
  ], { anchor: "formules" }),
  Q("B-DE-REL-005", S, "de.relativ.preposition", 3, "Ergänzen Sie: «Die Freunde, mit ___ ich im Sommer nach Spanien fahre, kommen aus Bremen.»", [
    ["denen", true, "Mit + datif, antécédent pluriel : denen."],
    ["den", false, "Article datif pluriel, pas pronom relatif : le relatif est denen."],
    ["die", false, "Nominatif ou accusatif ; mit impose le datif."],
    ["deren", false, "Génitif pluriel."],
  ], "La préposition mit impose le datif ; l'antécédent die Freunde est pluriel. Le relatif datif pluriel est denen, différent de l'article den.", "Datif pluriel du relatif : denen.", [
    "Quel cas impose mit ?",
    "L'antécédent est pluriel.",
    "Le relatif datif pluriel diffère de l'article.",
  ], { reserved: true }),
  Q("B-DE-REL-006", S, "de.relativ.preposition", 2, "Ergänzen Sie: «Das Hotel, in ___ wir drei Nächte übernachtet haben, war sehr ruhig.»", [
    ["dem", true, "Wo ? Position : in + datif, antécédent neutre."],
    ["das", false, "Accusatif : il n'y a pas de déplacement vers l'hôtel."],
    ["den", false, "Masculin ; Hotel est neutre."],
    ["der", false, "Féminin ; Hotel est neutre."],
  ], "In est mixte. Übernachten : on dort dans l'hôtel (wo ?) : datif. Antécédent neutre : in dem.", "Préposition + relatif : la préposition impose le cas.", [
    "In est une préposition mixte.",
    "Wo ou wohin ?",
    "Datif neutre.",
  ]),
  Q("B-DE-REL-007", S, "de.relativ.was", 2, "Ergänzen Sie: «Das ist leider alles, ___ ich über dieses Thema weiß.»", [
    ["was", true, "Après alles, le relatif est was."],
    ["das", false, "Das ne reprend pas un pronom indéfini comme alles."],
    ["dass", false, "Conjonction « que », pas pronom relatif."],
    ["welches", false, "Relatif d'un nom neutre, impossible après alles."],
  ], "Après alles, nichts, etwas, vieles, on emploie le relatif was.", "alles, nichts, etwas + was.", [
    "L'antécédent est-il un nom ?",
    "Alles est un pronom indéfini.",
    "Relatif en w-.",
  ]),
  Q("B-DE-REL-008", S, "de.relativ.wo", 2, "Ergänzen Sie: «München ist die Stadt, ___ ich geboren bin und meine Kindheit verbracht habe.»", [
    ["wo", true, "Relatif de lieu après un nom de lieu : wo (= in der)."],
    ["die", false, "Il faudrait une préposition (in der) : on n'est pas né « la ville »."],
    ["wohin", false, "Wohin exprime une direction."],
    ["was", false, "Was ne reprend pas un nom concret comme Stadt."],
  ], "La relative indique un lieu (on y est né). On emploie wo, ou in der.", "Lieu : wo ou préposition + relatif.", [
    "La relative exprime-t-elle un lieu ?",
    "Position, pas direction.",
    "« Où » en allemand.",
  ]),
  Q("B-DE-REL-009", S, "de.relativ.was", 3, "Ergänzen Sie: «Mein Bruder hat die Prüfung mit der Note 1 bestanden, ___ alle überrascht hat.»", [
    ["was", true, "Reprise de toute la proposition précédente : was."],
    ["das", false, "Das reprendrait un nom neutre ; ici, c'est le fait entier qui surprend."],
    ["wo", false, "Wo est un relatif de lieu : il ne peut pas être sujet de hat überrascht."],
    ["dass", false, "Conjonction : elle ne peut pas être sujet de hat überrascht."],
  ], "Ce qui surprend, c'est le fait que le frère ait réussi, pas la note ou l'examen. Pour reprendre toute une proposition, on emploie was.", "Reprise d'une proposition entière : was.", [
    "Qu'est-ce qui a surpris tout le monde ?",
    "L'antécédent est la proposition entière.",
    "Relatif en w-.",
  ], { reserved: true }),
  Q("B-DE-REL-010", S, "de.relativ.genitif", 3, "Ergänzen Sie: «Der Kollege, ___ Auto seit gestern kaputt ist, kommt heute mit dem Zug.»", [
    ["dessen", true, "Génitif, antécédent masculin : dessen."],
    ["deren", false, "Génitif féminin ou pluriel ; Kollege est masculin."],
    ["dem", false, "Datif : calque de « à qui l'auto est cassée »."],
    ["sein", false, "Possessif : il ne relie pas la relative à la principale."],
  ], "La voiture est celle du collègue : génitif. Antécédent masculin : dessen Auto, sans article.", "dessen (masc., neutre) + nom sans article.", [
    "La voiture de qui ?",
    "Génitif masculin du relatif.",
    "Il se termine par -ssen.",
  ]),
  Q("B-DE-REL-011", S, "de.relativ.cas", 1, "Ergänzen Sie: «Das Mädchen, ___ neben mir sitzt, heißt Mia.»", [
    ["das", true, "Das Mädchen est neutre ; sujet de sitzt : das."],
    ["die", false, "Accord avec le sexe et non avec le genre grammatical (neutre)."],
    ["dass", false, "Conjonction, pas pronom relatif."],
    ["der", false, "Masculin ou datif féminin."],
  ], "Mädchen (comme tous les noms en -chen) est neutre. Le relatif sujet est donc das.", "Les noms en -chen et -lein sont neutres : das Mädchen, das …", [
    "Quel est le genre grammatical de Mädchen ?",
    "Les noms en -chen sont neutres.",
    "Nominatif neutre, une seule s.",
  ]),
];
