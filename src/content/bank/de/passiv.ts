// de.passiv : le passif.
import { L, Q } from "./common";

export const lessonPassiv = L({
  skillId: "de.passiv",
  title: "Le passif",
  objectives: ["Former le passif avec werden à tous les temps courants", "Construire le passif avec un verbe de modalité", "Transformer une phrase active en phrase passive"],
  prerequisites: ["de.conj"],
  regle:
    "Le passif allemand se forme avec werden (et non sein) + participe passé en fin de proposition. Il met l'accent sur l'action, pas sur celui qui la fait : Das Haus wird renoviert (on rénove la maison).\n\nTemps :\n– présent : Das Haus wird renoviert.\n– prétérit : Das Haus wurde renoviert.\n– parfait : Das Haus ist renoviert worden. Auxiliaire sein, et le participe de werden devient worden (sans ge-) quand il sert au passif.\n– plus-que-parfait : Das Haus war renoviert worden.\n– futur : Das Haus wird renoviert werden.\n\nPassif avec modal : modal conjugué + participe + werden à l'infinitif en fin : Die Aufgabe muss bis morgen erledigt werden. Das Problem kann gelöst werden.\n\nComplément d'agent : von + datif pour une personne ou un responsable (Das Buch wurde von einer jungen Autorin geschrieben) ; durch + accusatif pour un moyen ou une cause (Die Stadt wurde durch ein Erdbeben zerstört). On l'omet souvent.\n\nTransformation : le COD de la phrase active (accusatif) devient sujet (nominatif) ; werden s'accorde avec ce nouveau sujet ; le sujet actif devient von + datif ou disparaît. Die Firma entlässt 20 Mitarbeiter → 20 Mitarbeiter werden (von der Firma) entlassen. Une phrase avec man se transforme sans complément d'agent : Man spricht hier Deutsch → Hier wird Deutsch gesprochen.\n\nPassif impersonnel : avec un verbe sans COD, il n'y a pas de sujet ; werden est à la 3e personne du singulier : Hier wird nicht geraucht. Sonntags wird nicht gearbeitet.\n\nÀ distinguer : sein + participe exprime un état résultant (Zustandspassiv) : Die Tür ist geschlossen (elle est fermée, c'est un état) ; Die Tür wird geschlossen (on est en train de la fermer).",
  formules:
    "Présent : wird + participe · Prétérit : wurde + participe\nParfait : ist + participe + worden · Plus-que-parfait : war + participe + worden\nModal : muss/kann/soll + participe + werden\nAgent : von + datif (personne) · durch + accusatif (moyen, cause)\nwerden : verbe « devenir » → geworden ; auxiliaire du passif → worden\nman + actif = passif sans agent : Man baut hier ein Hotel → Hier wird ein Hotel gebaut.",
  methode:
    "1. Repère le temps de la phrase active ou de l'indicateur (gestern, morgen…).\n2. Le COD actif devient sujet au nominatif ; accorde werden avec lui.\n3. Conjugue werden au temps voulu ; place le participe à la fin.\n4. Au parfait : ist/sind + participe + worden.\n5. Avec un modal : modal conjugué + participe + werden à l'infinitif.",
  exemple:
    "Actif : « Die Gemeinde baut eine neue Schule. » Passif présent : Eine neue Schule wird (von der Gemeinde) gebaut. Prétérit : Eine neue Schule wurde gebaut. Parfait : Eine neue Schule ist gebaut worden. Avec modal : Eine neue Schule soll gebaut werden.",
  erreur:
    "✗ Das Haus ist gebaut (pour « on construit la maison »). → ✓ Das Haus wird gebaut.\n✗ Der Brief ist geschickt geworden. → ✓ Der Brief ist geschickt worden.\n✗ Der Brief hat geschickt worden. → ✓ Der Brief ist geschickt worden (auxiliaire sein).\n✗ Die Aufgabe muss erledigt worden. → ✓ Die Aufgabe muss erledigt werden.\n✗ Zwanzig Mitarbeiter wird entlassen. → ✓ Zwanzig Mitarbeiter werden entlassen (accord avec le sujet pluriel).\n✗ par l'auteur = par der Autor → ✓ von dem (vom) Autor.",
  approfondir:
    "Astuce de reconnaissance : werden + infinitif = futur ; werden + participe = passif ; würde + infinitif = conditionnel ; werden seul + adjectif ou nom = devenir. Une seule question te demande donc toujours : qu'y a-t-il à la fin de la phrase ?\n\nLe passif est très fréquent dans la presse et les textes économiques (Es wurden 500 Stellen abgebaut, Die Preise werden erhöht). Le reconnaître vite aide pour les questions de compréhension.\n\nCas limite : avec un verbe à datif (helfen), le datif reste datif et il n'y a pas de sujet : Mir wurde geholfen (on m'a aidé), jamais Ich wurde geholfen.",
  cards: [
    ["Passif présent", "werden + participe passé : Das Haus wird gebaut", false],
    ["Passif parfait", "ist + participe + worden", false],
    ["Passif avec modal", "muss + participe + werden", false],
    ["Agent du passif", "von + datif (personne) · durch + accusatif (moyen)", false],
    ["On parle allemand en Autriche", "In Österreich wird Deutsch gesprochen.", true],
  ],
});

const S = "de.passiv";

export const questionsPassiv = [
  Q("B-DE-PAS-001", S, "de.passiv.present", 1, "Ergänzen Sie: «Unser Gymnasium ___ zurzeit renoviert, deshalb haben wir Unterricht in Containern.»", [
    ["wird", true, "Passif présent : werden à la 3e personne du singulier + participe."],
    ["werden", false, "Forme du pluriel ; le sujet est singulier."],
    ["hat", false, "Haben + participe = parfait actif : la maison ne rénove pas."],
    ["wirst", false, "Forme de du."],
  ], "L'action est en cours (zurzeit) et le sujet la subit : passif présent, werden + participe. Sujet singulier : wird renoviert.", "Passif présent : wird/werden + participe.", [
    "Le sujet fait-il l'action ou la subit-il ?",
    "Le passif se forme avec werden.",
    "3e personne du singulier.",
  ]),
  Q("B-DE-PAS-002", S, "de.passiv.preterit", 2, "Ergänzen Sie: «Das alte Rathaus ___ im Jahr 1890 gebaut.»", [
    ["wurde", true, "Passif prétérit : wurde + participe, sujet singulier."],
    ["wurden", false, "Forme du pluriel ; le sujet est singulier."],
    ["hat", false, "Parfait actif : le bâtiment ne construit rien."],
    ["worden", false, "Participe de l'auxiliaire du passif : il faut une forme conjuguée."],
  ], "Une date passée et un sujet qui subit l'action : passif au prétérit, wurde + participe.", "Passif prétérit : wurde/wurden + participe.", [
    "Quel est le temps ?",
    "Prétérit de werden.",
    "Accord avec das Rathaus (singulier).",
  ]),
  Q("B-DE-PAS-003", S, "de.passiv.parfait", 2, "Ergänzen Sie: «Keine Sorge, der Brief ist gestern abgeschickt ___.»", [
    ["worden", true, "Passif parfait : ist + participe + worden."],
    ["geworden", false, "Geworden est le participe de werden « devenir », pas de l'auxiliaire du passif."],
    ["wurde", false, "Forme conjuguée : l'auxiliaire ist est déjà là."],
    ["werden", false, "Infinitif : il faudrait un modal (muss … werden)."],
  ], "Au parfait passif, l'auxiliaire est sein et le participe de werden devient worden : ist abgeschickt worden.", "Passif parfait : ist + participe + worden (jamais geworden).", [
    "Ist est déjà l'auxiliaire du parfait.",
    "Le participe de werden auxiliaire du passif est particulier.",
    "Sans ge-.",
  ], { anchor: "formules" }),
  Q("B-DE-PAS-004", S, "de.passiv.agent", 2, "Ergänzen Sie: «Der Roman wurde ___ einer jungen Autorin aus Leipzig geschrieben.»", [
    ["von", true, "Agent (personne) du passif : von + datif."],
    ["durch", false, "Durch introduit un moyen ou une cause, et régit l'accusatif."],
    ["bei", false, "Bei indique un lieu ou une personne chez qui l'on est."],
    ["mit", false, "Mit indique l'instrument ou l'accompagnement."],
  ], "La personne qui fait l'action dans une phrase passive est introduite par von + datif : von einer jungen Autorin.", "Agent du passif : von + datif.", [
    "Qui a écrit le roman ?",
    "Préposition de l'agent : personne ou moyen ?",
    "Personne : préposition à datif.",
  ]),
  Q("B-DE-PAS-005", S, "de.passiv.modal", 3, "Ergänzen Sie: «Diese Aufgabe muss unbedingt bis morgen ___.»", [
    ["erledigt werden", true, "Passif avec modal : participe + werden à l'infinitif."],
    ["werden erledigt", false, "Ordre inversé : le participe précède werden."],
    ["erledigt worden", false, "Worden appartient au parfait ; après un modal, il faut l'infinitif werden."],
    ["erledigt wird", false, "Forme conjuguée : muss est déjà le verbe conjugué."],
  ], "Après un modal, le passif se met à l'infinitif : participe + werden. Die Aufgabe muss erledigt werden.", "Passif modal : modal + participe + werden.", [
    "Muss est le verbe conjugué.",
    "Il faut un passif à l'infinitif.",
    "Participe, puis werden.",
  ]),
  Q("B-DE-PAS-006", S, "de.passiv.transformation", 3, "Welcher Satz ist das Passiv von «Die Firma entlässt zwanzig Mitarbeiter.»?", [
    ["Zwanzig Mitarbeiter werden von der Firma entlassen.", true, "Présent conservé, werden accordé au pluriel, agent avec von + datif."],
    ["Zwanzig Mitarbeiter wird von der Firma entlassen.", false, "Werden doit s'accorder avec le nouveau sujet pluriel."],
    ["Zwanzig Mitarbeiter wurden von der Firma entlassen.", false, "Prétérit : la phrase active est au présent."],
    ["Zwanzig Mitarbeiter werden durch die Firma entlasst.", false, "Participe fautif : entlassen (verbe fort, inséparable)."],
  ], "Le COD zwanzig Mitarbeiter devient sujet (pluriel) : werden. Le temps reste le présent. Participe d'entlassen : entlassen. Agent : von der Firma.", "Actif → passif : COD → sujet, même temps, werden accordé.", [
    "Quel est le temps de la phrase active ?",
    "Le nouveau sujet est-il singulier ou pluriel ?",
    "Vérifie aussi le participe d'entlassen.",
  ], { reserved: true }),
  Q("B-DE-PAS-007", S, "de.passiv.present", 1, "Ergänzen Sie: «In Österreich und in der Schweiz ___ Deutsch gesprochen.»", [
    ["wird", true, "Passif présent, sujet Deutsch (singulier)."],
    ["werden", false, "Forme du pluriel ; le sujet est Deutsch."],
    ["ist", false, "Sein + participe : état, pas action habituelle."],
    ["spricht", false, "Actif : il faudrait un sujet (man spricht)."],
  ], "Équivalent de « on parle allemand » : Man spricht Deutsch → Deutsch wird gesprochen.", "man + actif = passif avec werden.", [
    "Qui parle ? Personne n'est nommé.",
    "Passif avec werden.",
    "Accord avec Deutsch.",
  ]),
  Q("B-DE-PAS-008", S, "de.passiv.impersonnel", 2, "Ergänzen Sie (Schild im Krankenhaus): «Hier ___ nicht geraucht!»", [
    ["wird", true, "Passif impersonnel : 3e personne du singulier sans sujet."],
    ["werden", false, "Pas de sujet pluriel : la forme est au singulier."],
    ["ist", false, "Sein + participe exprime un état."],
    ["hat", false, "Haben + participe = parfait actif, sujet manquant."],
  ], "Rauchen n'a pas de COD ici : passif impersonnel, werden à la 3e personne du singulier.", "Passif impersonnel : Hier wird nicht geraucht.", [
    "Y a-t-il un sujet ?",
    "Sans sujet, le verbe se met au singulier.",
    "Passif présent singulier.",
  ]),
  Q("B-DE-PAS-009", S, "de.passiv.parfait", 3, "Welcher Satz steht im Passiv Perfekt?", [
    ["Die Straße ist wegen Bauarbeiten gesperrt worden.", true, "ist + participe + worden : passif parfait."],
    ["Die Straße wurde wegen Bauarbeiten gesperrt.", false, "Passif prétérit."],
    ["Die Straße wird wegen Bauarbeiten gesperrt.", false, "Passif présent."],
    ["Die Straße war wegen Bauarbeiten gesperrt worden.", false, "Passif plus-que-parfait (war)."],
  ], "Le passif parfait se reconnaît à ist/sind + participe + worden.", "Passif Perfekt : ist + participe + worden.", [
    "Cherche worden.",
    "Puis l'auxiliaire : présent ou prétérit ?",
    "ist … worden.",
  ]),
  Q("B-DE-PAS-010", S, "de.passiv.present", 2, "Ergänzen Sie: «Die Ergebnisse der Prüfung werden morgen im Internet ___.» (veröffentlichen)", [
    ["veröffentlicht", true, "Participe d'un verbe inséparable (ver-) : sans ge-."],
    ["geveröffentlicht", false, "Ver- est inséparable : pas de ge-."],
    ["veröffentlichen", false, "Infinitif : werden + infinitif serait un futur actif sans sens ici."],
    ["veröffentlichte", false, "Forme du prétérit."],
  ], "Passif : werden + participe. Veröffentlichen a le préfixe inséparable ver- : participe veröffentlicht.", "Passif = werden + participe ; préfixe inséparable sans ge-.", [
    "Les résultats publient-ils ou sont-ils publiés ?",
    "Il faut un participe.",
    "Préfixe ver- : pas de ge-.",
  ]),
  Q("B-DE-PAS-011", S, "de.passiv.transformation", 3, "Welcher Satz hat die gleiche Bedeutung wie «Man hat das Problem schnell gelöst.»?", [
    ["Das Problem ist schnell gelöst worden.", true, "Parfait actif → parfait passif : ist + participe + worden."],
    ["Das Problem hat schnell gelöst worden.", false, "Le passif parfait se construit avec sein."],
    ["Das Problem ist schnell gelöst geworden.", false, "Geworden est le participe de « devenir »."],
    ["Das Problem wird schnell gelöst.", false, "Présent : le temps n'est pas conservé."],
  ], "La phrase active est au parfait (hat … gelöst). Passif parfait : ist + participe + worden, sans agent puisque le sujet était man.", "man + parfait → ist + participe + worden.", [
    "Quel est le temps de la phrase active ?",
    "Le passif parfait utilise un participe particulier de werden.",
    "ist … gelöst worden.",
  ], { reserved: true }),
];
