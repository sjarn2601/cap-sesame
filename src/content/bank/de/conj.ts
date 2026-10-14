// de.conj : présent des verbes forts, prétérit, parfait, futur.
import { L, Q } from "./common";

export const lessonConj = L({
  skillId: "de.conj",
  title: "Conjugaison : présent, prétérit, parfait, futur",
  objectives: ["Conjuguer les verbes forts au présent", "Former le parfait avec le bon auxiliaire et le bon participe", "Employer le prétérit des verbes courants et le futur avec werden"],
  regle:
    "Présent. Terminaisons : -e, -st, -t, -en, -t, -en. Beaucoup de verbes forts changent de voyelle aux 2e et 3e personnes du singulier seulement : a → ä (fahren : du fährst, er fährt ; schlafen, tragen, laufen → läuft), e → i (sprechen : du sprichst ; nehmen : er nimmt ; geben, helfen, essen), e → ie (lesen : er liest ; sehen : er sieht). Le pluriel garde la voyelle de l'infinitif : wir fahren, ihr fahrt. Sein, haben, werden et wissen sont irréguliers : ich bin, du bist, er ist ; du hast, er hat ; du wirst, er wird ; ich weiß, er weiß.\n\nParfait (temps du passé à l'oral et dans les lettres) : haben ou sein conjugué + participe passé en fin de proposition. Sein s'emploie avec les verbes intransitifs de déplacement (gehen, fahren, fliegen, kommen) et de changement d'état (werden, sterben, aufwachen), ainsi qu'avec sein, bleiben, passieren et begegnen. Tous les autres verbes, y compris les pronominaux, prennent haben.\n\nParticipe passé. Verbes faibles : ge- + radical + -t (gemacht, gearbeitet). Verbes forts : ge- + radical souvent modifié + -en (geschrieben, gefahren, getrunken). Verbes mixtes : ge- + radical modifié + -t (gedacht, gebracht, gewusst, gekannt). Pas de ge- pour les verbes en -ieren (studiert) et les verbes à préfixe inséparable (verstanden, bekommen). Les verbes séparables placent ge- après la particule (angerufen).\n\nPrétérit (temps du récit écrit) : verbes faibles en -te (machte, arbeitete) ; verbes forts avec changement de voyelle et sans terminaison à la 1re et 3e personne (ich fuhr, er las, sie lag, wir gingen). À l'oral, on l'emploie surtout pour sein, haben et les modaux : ich war, ich hatte, ich konnte.\n\nFutur : werden conjugué + infinitif en fin de proposition : Ich werde nächstes Jahr in Wien studieren. Souvent, le présent suffit avec un indicateur de temps : Morgen fahre ich nach Bonn.",
  formules:
    "Présent fort : fahren → du fährst, er fährt · sprechen → du sprichst, er spricht · lesen → du liest, er liest · nehmen → du nimmst, er nimmt\nsein : bin, bist, ist, sind, seid, sind · haben : habe, hast, hat · werden : werde, wirst, wird\nParfait avec sein : gehen, fahren, kommen, fliegen, laufen, werden, bleiben, sein, passieren\nParticipes : gemacht (faible) · geschrieben, gefahren, geblieben (forts) · gedacht, gebracht, gewusst (mixtes) · studiert, verstanden, bekommen (sans ge-) · angerufen (séparable)\nPrétérit : war, hatte, wurde, ging, kam, fuhr, las, lag, sah, gab, nahm, schrieb\nFutur : werden + infinitif final",
  methode:
    "1. Identifie le temps demandé : un indicateur (gestern, als Kind, nächstes Jahr) ou un auxiliaire déjà présent.\n2. Au présent, vérifie si le verbe est fort et si la personne est du ou er/sie/es.\n3. Au parfait, choisis l'auxiliaire : déplacement ou changement d'état sans COD → sein ; sinon haben.\n4. Construis le participe : faible, fort, mixte, sans ge- ou séparable.\n5. Vérifie l'accord de l'auxiliaire avec le sujet.",
  exemple:
    "« Letzten Sommer ___ wir nach Wien gefahren. » Le participe gefahren est déjà là : il manque l'auxiliaire. Fahren exprime un déplacement sans COD : sein. Sujet wir : sind. Letzten Sommer sind wir nach Wien gefahren.\n\n« Sie hat drei Jahre in Köln ___. » Studieren se termine en -ieren : participe sans ge- : studiert.",
  erreur:
    "✗ er fahrt, du sprechst → ✓ er fährt, du sprichst (changement de voyelle).\n✗ Ich habe nach Berlin gefahren. → ✓ Ich bin nach Berlin gefahren.\n✗ Ich habe zu Hause geblieben. → ✓ Ich bin zu Hause geblieben (bleiben prend sein, même sans déplacement).\n✗ gestudiert, geverstanden → ✓ studiert, verstanden.\n✗ gedenkt, gebringt → ✓ gedacht, gebracht (verbes mixtes).\n✗ Ich würde nächstes Jahr studieren (pour un futur). → ✓ Ich werde nächstes Jahr studieren (würde = conditionnel).",
  approfondir:
    "Pour aller vite, apprends les verbes forts par série de voyelles : schreiben, schrieb, geschrieben ; bleiben, blieb, geblieben ; trinken, trank, getrunken ; finden, fand, gefunden ; sprechen, sprach, gesprochen ; nehmen, nahm, genommen. Une série te donne dix verbes.\n\nCas limite : fahren prend haben quand il a un COD (Ich habe das Auto meines Vaters gefahren). Au concours, presque toujours sans COD : sein.\n\nLien avec les modaux et le passif : werden est à la fois verbe (devenir), auxiliaire du futur (werden + infinitif) et du passif (werden + participe). Regarde la forme qui l'accompagne pour savoir de quoi il s'agit.",
  cards: [
    ["fahren, 3e personne du singulier", "er fährt", false],
    ["Auxiliaire des verbes de déplacement", "sein : Ich bin gefahren", false],
    ["Participe de studieren, verstehen", "studiert, verstanden (sans ge-)", false],
    ["Participe de denken, bringen, wissen", "gedacht, gebracht, gewusst", false],
    ["Futur", "werden + infinitif en fin de phrase", false],
  ],
});

const S = "de.conj";

export const questionsConj = [
  Q("B-DE-CONJ-001", S, "de.conj.present", 1, "Ergänzen Sie: «Mein Vater ___ jeden Morgen beim Frühstück die Zeitung.»", [
    ["liest", true, "Lesen change e en ie à la 3e personne : er liest."],
    ["lest", false, "Oubli du changement de voyelle e → ie."],
    ["lesst", false, "Forme inventée : radical non modifié et double s."],
    ["leset", false, "Forme du Konjunktiv I (ihr leset), pas de l'indicatif présent."],
  ], "Lesen est un verbe fort : e devient ie aux 2e et 3e personnes du singulier. Le radical finit par s, donc du liest et er liest.", "Verbes forts en e → ie : lesen (liest), sehen (sieht).", [
    "Lesen est-il un verbe fort ?",
    "À la 3e personne, la voyelle change.",
    "e devient ie.",
  ]),
  Q("B-DE-CONJ-002", S, "de.conj.present", 1, "Ergänzen Sie: «___ du heute Abend mit dem Bus oder mit dem Fahrrad?»", [
    ["Fährst", true, "Fahren : a → ä à la 2e personne du singulier."],
    ["Fahrst", false, "Oubli de l'inflexion a → ä."],
    ["Fährt", false, "Forme de la 3e personne ; le sujet est du."],
    ["Fahrt", false, "Forme de ihr : ni la bonne personne ni l'inflexion."],
  ], "Fahren change a en ä aux 2e et 3e personnes du singulier. Sujet du : du fährst.", "Verbes forts en a → ä : fahren, schlafen, tragen, laufen (läuft).", [
    "Quel est le sujet ?",
    "Fahren est un verbe fort.",
    "2e personne avec inflexion : -ä- et -st.",
  ]),
  Q("B-DE-CONJ-003", S, "de.conj.auxiliaire", 2, "Ergänzen Sie: «Letztes Jahr ___ wir mit dem Zug nach Österreich gefahren.»", [
    ["sind", true, "Fahren sans COD = déplacement : parfait avec sein, sujet wir."],
    ["haben", false, "Calque fréquent : les verbes de déplacement prennent sein."],
    ["hat", false, "Mauvais auxiliaire et mauvaise personne."],
    ["ist", false, "Bon auxiliaire mais conjugué au singulier ; le sujet est wir."],
  ], "Le participe gefahren est présent : il faut l'auxiliaire. Déplacement sans COD → sein. Sujet wir → sind.", "Déplacement ou changement d'état sans COD : parfait avec sein.", [
    "Quel est l'infinitif de gefahren ?",
    "Un verbe de déplacement prend quel auxiliaire ?",
    "sein, conjugué avec wir.",
  ], { anchor: "formules" }),
  Q("B-DE-CONJ-004", S, "de.conj.participe", 2, "Ergänzen Sie: «Hast du die E-Mail an den Lehrer schon ___?»", [
    ["geschrieben", true, "Schreiben est fort : participe ge-schrieb-en."],
    ["geschreibt", false, "Participe faible appliqué à tort à un verbe fort."],
    ["schrieben", false, "Forme du prétérit pluriel, sans ge-."],
    ["geschriebt", false, "Mélange fautif de radical fort et de terminaison faible."],
  ], "Schreiben suit la série ei, ie, ie : schreiben, schrieb, geschrieben.", "Verbes en -ei- : participe en -ie- + -en (geschrieben, geblieben).", [
    "Schreiben est-il faible ou fort ?",
    "Pense à la série schreiben, schrieb…",
    "Participe fort : ge- + ie + -en.",
  ]),
  Q("B-DE-CONJ-005", S, "de.conj.preterit", 2, "Ergänzen Sie: «Als Kind ___ ich jeden Sommer bei meiner Großmutter auf dem Land.»", [
    ["war", true, "Prétérit de sein, temps normal du récit au passé pour ce verbe."],
    ["bin", false, "Présent : incompatible avec als Kind."],
    ["wurde", false, "Prétérit de werden (« devenir ») : contresens."],
    ["wäre", false, "Konjunktiv II : il exprime l'irréel, pas un fait passé."],
  ], "Als Kind situe l'action dans le passé. Avec sein, l'allemand emploie le prétérit, même à l'oral : ich war.", "sein, haben et les modaux : prétérit pour parler du passé (war, hatte, konnte).", [
    "Au passé ou au présent ?",
    "Le verbe sous-entendu est « être ».",
    "Prétérit de sein à la 1re personne.",
  ]),
  Q("B-DE-CONJ-006", S, "de.conj.preterit", 2, "Ergänzen Sie (Präteritum): «Gestern war sie krank und ___ den ganzen Tag im Bett.»", [
    ["lag", true, "Prétérit de liegen (être couché) : verbe fort, liegen, lag, gelegen."],
    ["liegte", false, "Prétérit faible appliqué à tort à un verbe fort."],
    ["legte", false, "Prétérit de legen (poser) : contresens et COD absent."],
    ["lügte", false, "Forme inexistante, proche de lügen (mentir)."],
  ], "Être couché se dit liegen, verbe fort : liegen, lag, gelegen. À ne pas confondre avec legen (poser quelque chose), verbe faible.", "liegen, lag, gelegen (être couché) ≠ legen, legte, gelegt (poser).", [
    "Quel verbe signifie « être couché » ?",
    "Liegen est un verbe fort.",
    "Prétérit en -a-, sans terminaison à la 3e personne.",
  ], { reserved: true }),
  Q("B-DE-CONJ-007", S, "de.conj.participe", 3, "Ergänzen Sie: «Meine Schwester hat drei Jahre in Köln Medizin ___.»", [
    ["studiert", true, "Verbe en -ieren : participe sans ge-."],
    ["gestudiert", false, "Les verbes en -ieren ne prennent pas ge-."],
    ["studieren", false, "Infinitif : il faut un participe après hat."],
    ["gestudieret", false, "Forme inventée : ge- et terminaison fautifs."],
  ], "Les verbes en -ieren (studieren, telefonieren, organisieren) forment leur participe sans ge- : studiert.", "Verbes en -ieren : participe en -iert, sans ge-.", [
    "Regarde la fin de l'infinitif studieren.",
    "Ces verbes ont une particularité au participe.",
    "Pas de ge-, terminaison -t.",
  ]),
  Q("B-DE-CONJ-008", S, "de.conj.auxiliaire", 3, "Ergänzen Sie: «Wegen des Gewitters ___ wir gestern länger in der Schule geblieben.»", [
    ["sind", true, "Bleiben forme son parfait avec sein, malgré l'absence de déplacement."],
    ["haben", false, "Piège : bleiben est une exception qui prend sein."],
    ["hatten", false, "Mauvais auxiliaire, au plus-que-parfait."],
    ["werden", false, "Werden + participe = passif ; bleiben n'a pas de passif."],
  ], "Bleiben ne marque ni déplacement ni changement d'état, mais il forme son parfait avec sein, comme sein lui-même : wir sind geblieben.", "sein et bleiben : parfait avec sein.", [
    "Quel est l'infinitif de geblieben ?",
    "Ce verbe est une exception connue.",
    "Même auxiliaire que gehen, au pluriel.",
  ], { reserved: true }),
  Q("B-DE-CONJ-009", S, "de.conj.futur", 1, "Ergänzen Sie: «Nach dem Abitur ___ ich ein Jahr in Deutschland arbeiten.»", [
    ["werde", true, "Futur : werden conjugué à la 1re personne + infinitif."],
    ["wird", false, "Forme de la 3e personne ; le sujet est ich."],
    ["werden", false, "Forme du pluriel ou de l'infinitif."],
    ["bin", false, "Sein ne forme pas le futur."],
  ], "Le futur se forme avec werden conjugué et l'infinitif en fin de proposition. Avec ich : werde.", "Futur = werden conjugué + infinitif final.", [
    "Quel auxiliaire forme le futur ?",
    "Conjugue-le avec ich.",
    "ich werde, du wirst, er wird.",
  ]),
  Q("B-DE-CONJ-010", S, "de.conj.present", 1, "Ergänzen Sie: «Mein Bruder ___ morgens immer den Bus um sieben Uhr.»", [
    ["nimmt", true, "Nehmen : e → i et consonne doublée, er nimmt."],
    ["nehmt", false, "Forme de ihr ; il manque le changement de voyelle."],
    ["nehmst", false, "Terminaison de du et voyelle non modifiée."],
    ["nimmst", false, "Forme de la 2e personne ; le sujet est er."],
  ], "Nehmen est irrégulier au singulier : du nimmst, er nimmt (e → i, h disparaît, m doublé).", "nehmen : ich nehme, du nimmst, er nimmt.", [
    "Nehmen est un verbe fort en e → i.",
    "Le radical change aussi d'orthographe.",
    "3e personne : nimm- + t.",
  ]),
  Q("B-DE-CONJ-011", S, "de.conj.participe", 3, "Ergänzen Sie: «Ich habe den ganzen Abend an unser Gespräch ___.»", [
    ["gedacht", true, "Denken est un verbe mixte : ge- + radical modifié + -t."],
    ["gedenkt", false, "Participe faible régulier, fautif pour denken."],
    ["gedachte", false, "Forme adjectivale ou prétérit de gedenken, pas un participe."],
    ["gedenken", false, "Infinitif d'un autre verbe (commémorer)."],
  ], "Denken fait partie des verbes mixtes : changement de radical comme un verbe fort, terminaison -t comme un faible. Denken, dachte, gedacht.", "Verbes mixtes : denken (gedacht), bringen (gebracht), wissen (gewusst), kennen (gekannt).", [
    "Denken suit-il le modèle faible ?",
    "Le radical change, mais la terminaison est en -t.",
    "denken, dachte, ge…t.",
  ], { anchor: "formules" }),
];
