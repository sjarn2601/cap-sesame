// Espagnol : ser / estar / hay, présent, temps du passé.
import type { BankQuestion, LessonDef } from "../helpers";
import { Q } from "./q";

export const LESSONS_VERBES1: LessonDef[] = [
  {
    skillId: "es.serestar",
    title: "Ser, estar et hay",
    objectives: ["Choisir entre ser et estar selon le sens", "Employer hay pour l'existence et estar pour la localisation", "Reconnaître les adjectifs qui changent de sens"],
    regle:
      "Le français « être » se traduit par deux verbes. Ser dit ce qu'est le sujet, son identité ; estar dit comment ou où il se trouve à un moment donné. Pose-toi la question : est-ce une définition ou une situation ?\n\n" +
      "Ser s'emploie devant un nom ou un pronom (Es mi hermana ; Soy yo), pour la profession, la nationalité, l'origine et la matière (Es de Lima ; La mesa es de madera), la possession (Es de Pablo), l'heure et la date (Son las tres ; Hoy es lunes), une caractéristique durable (Es alto, es simpático), le lieu ou le moment d'un événement (La boda es en Toledo) et la voix passive (La catedral fue construida en el siglo XIII).\n\n" +
      "Estar s'emploie pour la localisation d'une personne ou d'un objet (Toledo está cerca de Madrid), un état passager ou le résultat d'une action (Estoy cansado ; La puerta está abierta), la forme progressive estar + gérondif (Está lloviendo), les adverbes bien et mal (Está bien), une fonction provisoire avec estar de (Está de camarero este verano) et la date avec estar a (Estamos a 3 de mayo).\n\n" +
      "Hay (de haber) exprime l'existence d'un élément non déterminé : Hay un banco en la plaza. Il est suivi d'un nom sans article, d'un article indéfini ou d'un nombre. Dès que l'élément est déterminé (article défini, possessif, nom propre), on utilise estar : El banco está en la plaza. Hay est invariable à tous les temps : había, hubo, habrá, haya, jamais au pluriel quand il signifie « il y a ».\n\n" +
      "Plusieurs adjectifs changent de sens selon le verbe : ser listo (être intelligent) / estar listo (être prêt) ; ser malo (être méchant, mauvais) / estar malo (être malade) ; ser rico (être riche ; pour un aliment, savoureux en général) / estar rico (être délicieux, au moment où on le goûte) ; ser aburrido (être ennuyeux) / estar aburrido (s'ennuyer) ; ser verde (être vert) / estar verde (ne pas être mûr) ; ser atento (être prévenant) / estar atento (être attentif).",
    formules:
      "Ser (présent) : soy, eres, es, somos, sois, son\n" +
      "Ser (indefinido) : fui, fuiste, fue, fuimos, fuisteis, fueron\n" +
      "Ser (imperfecto) : era, eras, era, éramos, erais, eran\n" +
      "Estar (présent) : estoy, estás, está, estamos, estáis, están\n" +
      "Estar (indefinido) : estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron\n" +
      "Haber impersonnel : hay, había, hubo, habrá, habría, haya, hubiera (toujours au singulier)\n" +
      "Événement → ser : La fiesta es en mi casa. Objet ou personne → estar : Mi casa está en el centro.",
    methode:
      "1. Repère ce qui suit le blanc : un nom ou un pronom impose ser.\n" +
      "2. Un lieu ? Vérifie si le sujet est un événement (ser) ou un objet, une personne, une ville (estar).\n" +
      "3. Un adjectif ? Demande-toi s'il définit le sujet (ser) ou décrit son état du moment (estar).\n" +
      "4. « Il y a » + élément non déterminé → hay ; élément déterminé → estar.\n" +
      "5. Vérifie la personne, le nombre et le temps du verbe choisi.",
    exemple:
      "Completa : « En la plaza ___ una fuente; la fuente ___ junto a la iglesia. »\n" +
      "Premier blanc : « une fontaine », élément non déterminé dont on signale l'existence → hay.\n" +
      "Second blanc : « la fontaine », déjà connue, qu'on situe → está.\n" +
      "Réponse : En la plaza hay una fuente; la fuente está junto a la iglesia.\n\n" +
      "Completa : « Esta sopa ___ muy rica. »\n" +
      "Le locuteur goûte la soupe : c'est une appréciation du moment (délicieuse) → está. Es rica qualifierait la soupe en général, hors dégustation.",
    erreur:
      "✗ Madrid es en el centro de España → ✓ Madrid está en el centro de España (localisation d'un lieu).\n" +
      "✗ La reunión está en la sala 2 → ✓ La reunión es en la sala 2 (lieu d'un événement).\n" +
      "✗ Habían muchas personas → ✓ Había muchas personas (haber impersonnel invariable).\n" +
      "✗ Hay el libro en la mesa → ✓ El libro está en la mesa (élément déterminé).\n" +
      "✗ Está médico → ✓ Es médico (profession) ; mais Está de médico en un pueblo (fonction provisoire).",
    approfondir:
      "Ser et estar ne s'opposent pas comme « permanent » et « passager » : on dit Está muerto (résultat) et Es joven (caractéristique pourtant provisoire). Raisonne plutôt en définition / situation.\n\n" +
      "Avec un participe, ser forme la voix passive (une action) et estar le résultat : La carta fue escrita ayer / La carta está escrita.\n\n" +
      "Au concours, ces questions se traitent en 20 secondes si tu appliques la méthode : gagne ce temps pour les textes de compréhension.",
    cards: [
      ["Localiser un objet ou une ville", "estar : El museo está en el centro.", false],
      ["Localiser un événement", "ser : El concierto es en el estadio.", false],
      ["Estar listo / ser listo", "être prêt / être intelligent", true],
      ["Il y avait beaucoup de monde", "Había mucha gente (haber invariable)", true],
      ["Estar malo / ser malo", "être malade / être méchant", true],
    ],
  },
  {
    skillId: "es.presente",
    title: "Le présent : diphtongues, irréguliers et gérondif",
    objectives: ["Conjuguer les verbes à diphtongue et à affaiblissement", "Retenir les premières personnes irrégulières", "Former le gérondif et employer estar + gerundio"],
    prerequisites: ["es.serestar"],
    regle:
      "Les verbes réguliers ajoutent au radical : -o, -as, -a, -amos, -áis, -an (verbes en -ar) ; -o, -es, -e, -emos, -éis, -en (-er) ; -o, -es, -e, -imos, -ís, -en (-ir).\n\n" +
      "Diphtongue : quand la voyelle du radical porte l'accent tonique, e devient ie et o devient ue (jugar : u devient ue). Cela touche les trois personnes du singulier et la 3e du pluriel, jamais nosotros ni vosotros, où l'accent tombe sur la terminaison : quiero, quieres, quiere, queremos, queréis, quieren ; puedo, puedes, puede, podemos, podéis, pueden. Verbes fréquents : empezar, pensar, querer, entender, preferir, sentir ; poder, volver, dormir, encontrar, contar, costar, jugar.\n\n" +
      "Affaiblissement : certains verbes en -ir changent e en i aux mêmes personnes : pedir (pido, pides, pide, pedimos, pedís, piden), servir, repetir, seguir, vestir, elegir.\n\n" +
      "Premières personnes irrégulières : hago, pongo, salgo, traigo, caigo, valgo ; tengo et vengo (puis tienes, vienes) ; digo (dices) ; sé (saber) ; doy, veo ; la plupart des verbes en -cer et -cir précédés d'une voyelle prennent -zco (sauf hacer, decir, cocer) : conozco, ofrezco, traduzco, conduzco. Les verbes en -uir ajoutent un y : construyo, construyes, construye, construimos, construís, construyen. Totalement irréguliers : ser, estar, ir (voy, vas, va, vamos, vais, van), haber (he, has, ha, hemos, habéis, han).\n\n" +
      "Gérondif : -ando pour les verbes en -ar, -iendo pour -er et -ir. Un i entre deux voyelles devient y : leyendo, oyendo, construyendo, yendo (ir). Les verbes en -ir à diphtongue ou affaiblissement ferment leur voyelle : durmiendo, muriendo, pidiendo, sintiendo, diciendo, viniendo ; et poder donne pudiendo.\n\n" +
      "Estar + gérondif exprime l'action en cours : Estoy estudiando (je suis en train d'étudier). Les pronoms se placent avant estar ou se soudent au gérondif, qui prend alors un accent écrit : Lo estoy leyendo = Estoy leyéndolo.",
    formules:
      "Querer : quiero, quieres, quiere, queremos, queréis, quieren\n" +
      "Poder : puedo, puedes, puede, podemos, podéis, pueden\n" +
      "Jugar : juego, juegas, juega, jugamos, jugáis, juegan\n" +
      "Pedir : pido, pides, pide, pedimos, pedís, piden\n" +
      "Tener : tengo, tienes, tiene, tenemos, tenéis, tienen\n" +
      "Decir : digo, dices, dice, decimos, decís, dicen\n" +
      "Ir : voy, vas, va, vamos, vais, van\n" +
      "Conocer : conozco, conoces, conoce… ; Construir : construyo, construyes…\n" +
      "Gérondifs irréguliers : leyendo, oyendo, yendo, durmiendo, muriendo, pidiendo, diciendo, viniendo, pudiendo",
    methode:
      "1. Identifie l'infinitif et sa famille (diphtongue, affaiblissement, -zco, -uir, irrégulier).\n" +
      "2. Repère la personne : nosotros et vosotros ne diphtonguent jamais.\n" +
      "3. Pour yo, pense d'abord aux formes en -go et -zco.\n" +
      "4. Pour un gérondif, vérifie y entre deux voyelles et la fermeture e → i, o → u des verbes en -ir.",
    exemple:
      "Completa : « Mis primos ___ (volver) mañana y ___ (dormir) en casa. »\n" +
      "Volver et dormir diphtonguent (o → ue) ; la 3e personne du pluriel est concernée → vuelven, duermen.\n\n" +
      "Completa : « Ahora mismo los niños están ___ (dormir). »\n" +
      "Gérondif d'un verbe en -ir à diphtongue : la voyelle se ferme (o → u) → durmiendo.",
    erreur:
      "✗ puedemos, entiendéis → ✓ podemos, entendéis (pas de diphtongue avec nosotros et vosotros).\n" +
      "✗ pono, salo, conoco → ✓ pongo, salgo, conozco (1re personne irrégulière).\n" +
      "✗ dormiendo, leiendo → ✓ durmiendo, leyendo.\n" +
      "✗ Estoy lo haciendo → ✓ Lo estoy haciendo ou Estoy haciéndolo.\n" +
      "✗ Juego de fútbol → ✓ Juego al fútbol (jugar a + sport).",
    approfondir:
      "Les formes du présent servent de base au subjonctif présent (tengo → tenga, conozco → conozca, pido → pida) et à l'impératif : une erreur au présent se répercute partout. Mémorise les verbes par paires (tener/venir, poner/salir, conocer/traducir).\n\n" +
      "Le présent espagnol peut aussi exprimer un futur proche (Mañana salgo a las ocho) ou s'employer dans un récit historique (En 1492 Colón llega a América).",
    cards: [
      ["Diphtongue : quelles personnes ?", "1re, 2e, 3e du singulier et 3e du pluriel (pas nosotros/vosotros)", false],
      ["Conocer (yo)", "conozco", true],
      ["Gérondif de dormir", "durmiendo", true],
      ["Gérondif de leer", "leyendo", true],
      ["Pedir (ellos)", "piden", true],
    ],
  },
  {
    skillId: "es.pasados",
    title: "Les temps du passé",
    objectives: ["Choisir entre indefinido, imperfecto, perfecto et pluscuamperfecto", "Conjuguer les prétérits irréguliers", "Former les participes passés irréguliers"],
    prerequisites: ["es.presente"],
    regle:
      "Pretérito indefinido (passé simple) : action achevée, située dans un passé coupé du présent, souvent datée : ayer, anoche, el año pasado, en 2010, de repente. Ayer vi a Marta. C'est le temps du récit : la succession d'événements.\n\n" +
      "Pretérito imperfecto : description, cadre, habitude ou action en cours dans le passé, sans limite précise : antes, de niño, siempre, todos los días, mientras. Cuando era pequeño, iba al colegio a pie. Dans un même récit, l'imparfait pose le décor et l'indefinido fait avancer l'action : Mientras veía la tele, sonó el teléfono.\n\n" +
      "Pretérito perfecto (haber au présent + participe) : passé relié au présent, dans une période qui n'est pas terminée : hoy, esta mañana, este año, ya, todavía no, nunca. Esta semana he trabajado mucho. En Espagne, ce lien avec le présent est la norme ; en Amérique latine, l'indefinido est souvent employé à sa place.\n\n" +
      "Pluscuamperfecto (haber à l'imparfait + participe) : action antérieure à une autre action passée. Cuando llegué, el tren ya había salido.\n\n" +
      "Avec haber, le participe est invariable et ne se sépare jamais de l'auxiliaire : Las he visto ; Me lo han dicho.\n\n" +
      "Indefinido irrégulier : les prétérits forts ont un radical propre et des terminaisons sans accent (-e, -iste, -o, -imos, -isteis, -ieron) : tener → tuve, estar → estuve, poder → pude, poner → puse, saber → supe, querer → quise, hacer → hice (hizo), venir → vine. Après j, la 3e du pluriel est en -eron : dijeron, trajeron, condujeron. Ser et ir partagent fui, fuiste, fue, fuimos, fuisteis, fueron. Les verbes en -ir à affaiblissement ou diphtongue changent à la 3e personne : pidió, pidieron ; durmió, durmieron. Orthographe à la 1re personne : busqué, llegué, empecé.\n\n" +
      "Imperfecto : -aba pour les verbes en -ar, -ía pour -er et -ir ; seuls ser (era), ir (iba) et ver (veía) sont irréguliers.",
    formules:
      "Hablar (indefinido) : hablé, hablaste, habló, hablamos, hablasteis, hablaron\n" +
      "Comer (indefinido) : comí, comiste, comió, comimos, comisteis, comieron\n" +
      "Tener : tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron\n" +
      "Hacer : hice, hiciste, hizo, hicimos, hicisteis, hicieron\n" +
      "Decir : dije, dijiste, dijo, dijimos, dijisteis, dijeron\n" +
      "Ser / ir : fui, fuiste, fue, fuimos, fuisteis, fueron\n" +
      "Imperfecto : hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban ; comía, comías…\n" +
      "Participes irréguliers : hecho, dicho, visto, puesto, escrito, vuelto, abierto, roto, muerto, cubierto, resuelto",
    methode:
      "1. Cherche le marqueur de temps : date ou période close → indefinido ; habitude, description → imperfecto.\n" +
      "2. Période non terminée (hoy, este año, ya, todavía no) → perfecto en Espagne.\n" +
      "3. Action antérieure à un autre fait passé → pluscuamperfecto.\n" +
      "4. Vérifie la forme : prétérit fort sans accent, participe invariable.",
    exemple:
      "Completa : « Cuando ___ (llegar, yo) a la estación, el tren ya ___ (salir). »\n" +
      "Mon arrivée est un événement daté du récit → llegué (orthographe gu devant e).\n" +
      "Le départ du train est antérieur à mon arrivée → había salido.\n" +
      "Réponse : Cuando llegué a la estación, el tren ya había salido.",
    erreur:
      "✗ hizó, tuvó → ✓ hizo, tuvo (prétérits forts sans accent).\n" +
      "✗ dijieron, trajieron → ✓ dijeron, trajeron.\n" +
      "✗ abrido, escribido, rompido → ✓ abierto, escrito, roto.\n" +
      "✗ Las he vistas → ✓ Las he visto (participe invariable avec haber).\n" +
      "✗ He lo hecho → ✓ Lo he hecho (le pronom se place avant l'auxiliaire).",
    approfondir:
      "Ne traduis pas mécaniquement le passé composé français : « Hier j'ai vu Marta » se dit Ayer vi a Marta. Le passé composé français correspond très souvent à l'indefinido.\n\n" +
      "Pour l'imparfait du subjonctif, on part de la 3e personne du pluriel de l'indefinido : tuvieron → tuviera, dijeron → dijera. Bien connaître l'indefinido, c'est donc gagner deux temps.\n\n" +
      "Gestion du temps : un verbe irrégulier qui hésite entre deux formes se tranche en le récitant à voix intérieure (tuve, tuviste, tuvo) : dix secondes suffisent.",
    cards: [
      ["Hacer (él, indefinido)", "hizo", true],
      ["Decir (ellos, indefinido)", "dijeron", true],
      ["Participe d'abrir", "abierto", true],
      ["Action antérieure à un fait passé", "pluscuamperfecto : había + participe", false],
      ["Pedir (él, indefinido)", "pidió", true],
    ],
  },
];

export const QUESTIONS_VERBES1: BankQuestion[] = [
  // ---------- es.serestar ----------
  Q("B-ES-SER-001", "es.serestar", "es.serestar.lieu", 3, "Completa la frase : « La reunión de mañana ___ en la sala de conferencias. »", [
    ["es", true, "Le lieu d'un événement (une réunion) s'exprime avec ser."],
    ["está", false, "Piège : estar sert à situer un objet ou une personne, pas un événement."],
    ["hay", false, "Hay signale l'existence d'un élément non déterminé ; ici la réunion est déterminée."],
    ["estás", false, "Deuxième personne : le sujet est « la reunión »."],
  ], "La reunión est un événement : pour dire où il a lieu, on emploie ser (La reunión es en la sala de conferencias). Estar ne situe que des objets, des personnes ou des lieux.", "Lieu d'un événement → ser ; lieu d'un objet ou d'une personne → estar.", [
    "Demande-toi si le sujet est un objet ou un événement.",
    "Une réunion, une fête, un concert « ont lieu » quelque part.",
    "Pour un événement, l'espagnol n'utilise pas le verbe de la localisation habituelle.",
  ], { anchor: "erreur" }),
  Q("B-ES-SER-002", "es.serestar", "es.serestar.hay", 1, "Completa la frase : « En mi barrio ___ dos supermercados nuevos. »", [
    ["hay", true, "Existence d'éléments non déterminés (deux supermarchés) → hay."],
    ["están", false, "Estar s'emploie avec un élément déterminé (los supermercados están…)."],
    ["son", false, "Ser ne sert pas à signaler l'existence de quelque chose dans un lieu."],
    ["estamos", false, "Première personne du pluriel : sans rapport avec le sujet."],
  ], "« Dos supermercados » n'est pas déterminé (nombre sans article défini) : on signale leur existence, donc hay, invariable.", "Il y a + élément non déterminé → hay.", [
    "Traduis d'abord la phrase : « il y a deux supermarchés ».",
    "L'élément est-il précédé d'un article défini ou d'un nombre ?",
    "La forme impersonnelle de haber au présent est invariable.",
  ]),
  Q("B-ES-SER-003", "es.serestar", "es.serestar.hay", 2, "Completa la frase : « El año pasado ___ muchos problemas en la empresa. »", [
    ["hubo", true, "Haber impersonnel au passé simple, invariable."],
    ["hubieron", false, "Accord fautif : haber impersonnel reste au singulier."],
    ["habían", false, "Accord fautif au pluriel ; haber impersonnel est invariable."],
    ["estuvieron", false, "Estar ne traduit pas « il y a »."],
  ], "« Il y a eu beaucoup de problèmes » : haber impersonnel, au singulier quel que soit le nom qui suit (hubo muchos problemas). « El año pasado » appelle l'indefinido.", "Haber impersonnel (hay, había, hubo) ne s'accorde jamais.", [
    "Quelle tournure espagnole traduit « il y a » ?",
    "Mets-la au passé simple, car la période est close.",
    "Le complément pluriel ne change rien à la forme du verbe.",
  ], { reserved: true }),
  Q("B-ES-SER-004", "es.serestar", "es.serestar.adjectifs", 2, "Completa la frase : « No puedo ir a clase hoy, ___ malo desde el lunes. »", [
    ["estoy", true, "Estar malo = être malade (état)."],
    ["soy", false, "Ser malo signifie être méchant ou mauvais, pas être malade."],
    ["tengo", false, "Calque : tener ne se construit pas avec l'adjectif malo."],
    ["hay", false, "Hay signale l'existence d'un élément, il ne décrit pas une personne."],
  ], "Le contexte (je ne peux pas aller en cours depuis lundi) indique un état de santé : estar malo = être malade. Ser malo voudrait dire être méchant.", "Estar malo = être malade ; ser malo = être méchant.", [
    "L'adjectif malo change de sens selon le verbe.",
    "Le locuteur parle de son état depuis lundi.",
    "Choisis le verbe qui décrit une situation du moment, à la 1re personne.",
  ]),
  Q("B-ES-SER-005", "es.serestar", "es.serestar.adjectifs", 1, "Elige la traducción correcta de « Este niño es muy listo ».", [
    ["Cet enfant est très intelligent.", true, "Ser listo = être intelligent."],
    ["Cet enfant est tout à fait prêt.", false, "« Être prêt » se dit estar listo."],
    ["Cet enfant est très fatigué.", false, "« Fatigué » se dit cansado."],
    ["Cet enfant est très pressé.", false, "« Pressé » se dit tener prisa."],
  ], "Avec ser, listo décrit une qualité : intelligent, vif. Avec estar, il signifie prêt (¿Estás listo?).", "Ser listo = intelligent ; estar listo = prêt.", [
    "Regarde le verbe employé devant l'adjectif.",
    "Ser exprime une qualité, estar un état du moment.",
    "La qualité associée à listo concerne l'esprit.",
  ]),
  Q("B-ES-SER-006", "es.serestar", "es.serestar.adjectifs", 2, "Completa la frase : « Prueba esta tarta de queso, ___ riquísima. »", [
    ["está", true, "Estar rico = être délicieux (appréciation du goût)."],
    ["tiene", false, "Calque : tener ne se construit pas avec un adjectif attribut."],
    ["hay", false, "Hay ne s'emploie pas avec un adjectif attribut."],
    ["son", false, "Pluriel : le sujet (la tarta) est singulier."],
  ], "On goûte un plat : c'est une impression du moment, donc estar. Estar rico = être délicieux ; ser rico = être riche (ou, pour un aliment, savoureux en général).", "Goûter un plat → estar rico ; ser rico = riche.", [
    "Le locuteur invite à goûter.",
    "Rico a deux sens selon le verbe.",
    "Le goût d'un plat se décrit comme un état constaté.",
  ]),
  Q("B-ES-SER-007", "es.serestar", "es.serestar.passive", 3, "Completa la frase : « La catedral ___ construida en el siglo XIII. »", [
    ["fue", true, "Voix passive (action datée) : ser au passé simple + participe."],
    ["estuvo", false, "Estar + participe exprime un résultat, pas l'action de construire."],
    ["está", false, "Le résultat (está construida) ne peut pas être daté du XIIIe siècle."],
    ["hubo", false, "Haber ne forme pas la voix passive."],
  ], "On rapporte une action datée (construire au XIIIe siècle) : c'est la voix passive, formée avec ser. Estar + participe décrirait un état présent.", "Voix passive → ser + participe ; résultat → estar + participe.", [
    "Le complément de temps date une action.",
    "Distingue l'action (passive) et son résultat (état).",
    "La passive espagnole utilise le verbe de l'identité, ici au passé simple.",
  ], { anchor: "approfondir" }),
  Q("B-ES-SER-008", "es.serestar", "es.serestar.etat", 1, "Completa la frase : « Las tiendas ___ cerradas porque hoy es festivo. »", [
    ["están", true, "Résultat d'une action (fermer) → estar."],
    ["son", false, "Ser + participe formerait une voix passive (l'action de fermer), alors qu'on décrit l'état des magasins."],
    ["hay", false, "Hay ne s'emploie pas avec un sujet déterminé (las tiendas)."],
    ["es", false, "Singulier : le sujet est pluriel."],
  ], "Les magasins se trouvent dans l'état « fermé » : résultat d'une action, donc estar, à la 3e personne du pluriel.", "Résultat d'une action → estar + participe accordé.", [
    "Le participe décrit-il une action ou un état ?",
    "Les magasins sont dans une situation du moment.",
    "Accorde le verbe avec « las tiendas ».",
  ]),
  Q("B-ES-SER-009", "es.serestar", "es.serestar.lieu", 1, "Completa la frase : « ¿Dónde ___ las llaves del coche? No las encuentro. »", [
    ["están", true, "Localisation d'objets déterminés → estar."],
    ["hay", false, "Hay ne s'emploie pas devant un nom déterminé (las llaves)."],
    ["son", false, "Ser ne localise pas un objet."],
    ["es", false, "Ser au singulier : double erreur."],
  ], "« Las llaves » sont déterminées par l'article défini : pour les situer, on emploie estar (¿Dónde están las llaves?).", "Situer un objet déterminé → estar.", [
    "La question porte sur un lieu.",
    "Le sujet est précédé d'un article défini.",
    "Avec un élément déterminé, « il y a » ne convient pas.",
  ]),
  Q("B-ES-SER-010", "es.serestar", "es.serestar.etat", 3, "Completa la frase : « Este verano mi tío ___ de camarero en un hotel de la costa. »", [
    ["está", true, "Estar de + profession = fonction provisoire."],
    ["es", false, "Ser de + nom indique l'origine ou la matière ; une profession s'énonce avec ser sans « de »."],
    ["hay", false, "Hay ne s'emploie pas avec un sujet de personne déterminé."],
    ["tiene", false, "Calque : tener ne se construit pas avec « de camarero »."],
  ], "« Este verano » signale une fonction temporaire : estar de camarero (travailler comme serveur pour un temps). On dirait Es camarero pour la profession habituelle, sans « de ».", "Fonction provisoire → estar de + nom de métier.", [
    "Un indice de temps limite la situation.",
    "Regarde la préposition qui suit le blanc.",
    "Profession habituelle et emploi saisonnier ne se disent pas avec le même verbe.",
  ], { reserved: true, anchor: "regle" }),

  // ---------- es.presente ----------
  Q("B-ES-PRES-001", "es.presente", "es.presente.diphtongue", 1, "Completa la frase : « Nosotros no ___ (poder) volver antes de las diez. »", [
    ["podemos", true, "Nosotros : l'accent tombe sur la terminaison, pas de diphtongue."],
    ["puedemos", false, "Diphtongue à tort : nosotros ne diphtongue pas."],
    ["pueden", false, "Troisième personne du pluriel."],
    ["podamos", false, "Subjonctif présent : rien ne l'impose ici."],
  ], "Poder diphtongue (puedo, puedes…) seulement quand le radical est accentué ; à la 1re personne du pluriel, on garde o : podemos.", "Nosotros et vosotros ne diphtonguent jamais.", [
    "Poder fait partie des verbes à diphtongue o → ue.",
    "Où tombe l'accent tonique à la personne nosotros ?",
    "Garde la voyelle de l'infinitif.",
  ]),
  Q("B-ES-PRES-002", "es.presente", "es.presente.premiere", 1, "Completa la frase : « Cada mañana ___ (yo, poner) la mesa antes de desayunar. »", [
    ["pongo", true, "Poner fait pongo à la 1re personne."],
    ["pono", false, "Régularisation fautive : poner est irrégulier en -go."],
    ["pone", false, "Troisième personne du singulier."],
    ["puse", false, "Passé simple ; « cada mañana » exprime une habitude présente."],
  ], "Poner appartient aux verbes en -go à la 1re personne : pongo, pones, pone…", "Hacer, poner, salir, tener, venir, decir, traer → -go à la 1re personne.", [
    "Le sujet est yo, au présent d'habitude.",
    "Poner a une première personne irrégulière.",
    "Pense à hago, salgo, tengo.",
  ], { anchor: "formules" }),
  Q("B-ES-PRES-003", "es.presente", "es.presente.premiere", 2, "Completa la frase : « Llevo poco tiempo aquí y todavía no ___ a nadie en esta ciudad. »", [
    ["conozco", true, "Conocer → conozco (verbe en -cer précédé d'une voyelle)."],
    ["conoco", false, "Oubli de la forme en -zco."],
    ["conozo", false, "Il manque le c de -zco."],
    ["conosco", false, "Orthographe calquée sur la prononciation : la forme écrite est -zco."],
  ], "La plupart des verbes en -cer et -cir précédés d'une voyelle font -zco à la 1re personne : conozco, ofrezco, traduzco.", "Conocer → conozco ; traducir → traduzco.", [
    "Le verbe qui convient signifie « connaître quelqu'un ».",
    "Sa 1re personne du présent est irrégulière.",
    "La terminaison contient z et c.",
  ]),
  Q("B-ES-PRES-004", "es.presente", "es.presente.affaiblissement", 2, "Completa la frase : « En ese restaurante, mis hermanos siempre ___ (pedir) el menú del día. »", [
    ["piden", true, "Pedir : e → i aux personnes accentuées sur le radical."],
    ["peden", false, "Oubli de l'affaiblissement e → i."],
    ["pieden", false, "Confusion avec la diphtongue e → ie."],
    ["pidan", false, "Subjonctif présent : rien ne l'impose."],
  ], "Pedir est un verbe à affaiblissement : pido, pides, pide, pedimos, pedís, piden.", "Pedir, servir, repetir, seguir : e → i (pas ie).", [
    "Pedir ne diphtongue pas.",
    "Sa voyelle e change à la 3e personne du pluriel.",
    "Elle devient une voyelle unique, pas une diphtongue.",
  ]),
  Q("B-ES-PRES-005", "es.presente", "es.presente.gerondif", 2, "Completa la frase : « No hagas ruido, los niños están ___ en el salón. » (dormir)", [
    ["durmiendo", true, "Gérondif de dormir : o se ferme en u."],
    ["dormiendo", false, "Oubli de la fermeture o → u des verbes en -ir."],
    ["duermiendo", false, "La diphtongue du présent ne passe pas au gérondif."],
    ["dormando", false, "Terminaison des verbes en -ar."],
  ], "Les verbes en -ir à diphtongue ferment leur voyelle au gérondif : dormir → durmiendo, morir → muriendo.", "Dormir → durmiendo ; pedir → pidiendo.", [
    "Estar + gérondif : action en cours.",
    "Dormir se termine en -ir : terminaison -iendo.",
    "La voyelle du radical se modifie, sans diphtongue.",
  ], { anchor: "formules" }),
  Q("B-ES-PRES-006", "es.presente", "es.presente.gerondif", 1, "Completa la frase : « Ahora mismo Lucía ___ el periódico; no la molestes. »", [
    ["está leyendo", true, "Estar + gérondif ; leer → leyendo (i entre deux voyelles devient y)."],
    ["está leiendo", false, "Orthographe : le i entre deux voyelles s'écrit y."],
    ["es leyendo", false, "La forme progressive se construit avec estar, pas ser."],
    ["ha leyendo", false, "Haber se construit avec le participe (leído), pas avec le gérondif."],
  ], "Action en cours (« ahora mismo ») : estar + gérondif. Leer donne leyendo.", "Action en cours → estar + gérondif.", [
    "« Ahora mismo » indique une action en train de se faire.",
    "L'auxiliaire est celui des états et des situations.",
    "Attention à l'orthographe du gérondif de leer.",
  ]),
  Q("B-ES-PRES-007", "es.presente", "es.presente.diphtongue", 2, "Completa la frase : « ¿Tú ___ (jugar) al baloncesto los sábados? »", [
    ["juegas", true, "Jugar diphtongue u → ue."],
    ["jugas", false, "Oubli de la diphtongue."],
    ["jueguas", false, "Le u de gu n'apparaît que devant e ou i."],
    ["juegues", false, "Subjonctif présent."],
  ], "Jugar est le seul verbe en u → ue : juego, juegas, juega, jugamos, jugáis, juegan.", "Jugar : u → ue (juego, juegas).", [
    "Jugar diphtongue.",
    "Sa voyelle u devient une diphtongue.",
    "Devant a, le g n'a pas besoin de u.",
  ]),
  Q("B-ES-PRES-008", "es.presente", "es.presente.diphtongue", 3, "Completa la frase : « Vosotros ___ (entender) muy bien las explicaciones del profesor. »", [
    ["entendéis", true, "Vosotros : pas de diphtongue, terminaison -éis."],
    ["entiendéis", false, "Diphtongue à tort à la personne vosotros."],
    ["entendís", false, "Terminaison des verbes en -ir."],
    ["entienden", false, "Troisième personne du pluriel."],
  ], "Entender diphtongue (entiendo), mais à vosotros l'accent tombe sur la terminaison : entendéis.", "Vosotros : radical de l'infinitif + -áis, -éis, -ís.", [
    "Entender est en -er.",
    "Où porte l'accent à la personne vosotros ?",
    "Garde le radical de l'infinitif.",
  ], { reserved: true }),
  Q("B-ES-PRES-009", "es.presente", "es.presente.premiere", 3, "Elige la frase correcta (verbo construir en presente).", [
    ["Los obreros construyen un puente nuevo.", true, "Construir : y ajouté devant la terminaison (construyen)."],
    ["Los obreros construien un puente nuevo.", false, "Orthographe : i entre voyelles devient y."],
    ["Los obreros construen un puente nuevo.", false, "Oubli du y des verbes en -uir."],
    ["Los obreros construyan un puente nuevo.", false, "Subjonctif présent : impossible dans une affirmation simple."],
  ], "Les verbes en -uir (construir, destruir, incluir, huir) ajoutent y : construyo, construyes, construye, construimos, construís, construyen.", "Verbes en -uir → y au présent (construyen).", [
    "Les quatre phrases ne diffèrent que par le verbe.",
    "Construir appartient à une famille particulière.",
    "Les verbes en -uir ajoutent une consonne.",
  ]),
  Q("B-ES-PRES-010", "es.presente", "es.presente.premiere", 2, "Completa la frase : « Todos los días ___ (yo, salir) de casa a las siete y media. »", [
    ["salgo", true, "Salir → salgo à la 1re personne."],
    ["salo", false, "Régularisation fautive."],
    ["salí", false, "Passé simple : « todos los días » exprime une habitude présente."],
    ["salgas", false, "Subjonctif, 2e personne."],
  ], "Salir fait partie des verbes en -go : salgo, sales, sale, salimos, salís, salen.", "Salir → salgo.", [
    "Habitude au présent, sujet yo.",
    "Salir a une 1re personne irrégulière.",
    "Pense à pongo, tengo, hago.",
  ]),

  // ---------- es.pasados ----------
  Q("B-ES-PAS-001", "es.pasados", "es.pasados.indefinido", 1, "Completa la frase : « El verano pasado ___ (nosotros, ir) a Galicia en coche. »", [
    ["fuimos", true, "Ir au passé simple, 1re personne du pluriel."],
    ["fueron", false, "Troisième personne du pluriel."],
    ["hemos ido", false, "« El verano pasado » est une période close : indefinido."],
    ["vamos", false, "Présent : le repère est passé."],
  ], "Période terminée (el verano pasado) → indefinido. Ir : fui, fuiste, fue, fuimos, fuisteis, fueron.", "Période close → indefinido.", [
    "Le marqueur de temps désigne une période terminée.",
    "Ir a les mêmes formes que ser à ce temps.",
    "Sujet nosotros.",
  ]),
  Q("B-ES-PAS-002", "es.pasados", "es.pasados.irreguliers", 1, "Completa la frase : « Ayer mi padre ___ (hacer) la cena para toda la familia. »", [
    ["hizo", true, "Hacer : hice, hiciste, hizo…"],
    ["hació", false, "Régularisation fautive du prétérit fort."],
    ["hice", false, "Première personne."],
    ["hizó", false, "Les prétérits forts ne portent pas d'accent écrit."],
  ], "Hacer a un prétérit fort : hice, hiciste, hizo (z devant o), hicimos, hicisteis, hicieron. Pas d'accent écrit.", "Hacer → hizo (sans accent).", [
    "« Ayer » appelle le passé simple.",
    "Hacer est un prétérit fort.",
    "Le c devient z devant o, sans accent écrit.",
  ], { anchor: "formules" }),
  Q("B-ES-PAS-003", "es.pasados", "es.pasados.opposition", 2, "Completa la frase : « Mientras ___ (yo, ver) la tele, sonó el teléfono. »", [
    ["veía", true, "Action en cours interrompue → imperfecto."],
    ["vi", false, "L'indefinido présente l'action comme achevée, incompatible avec « mientras »."],
    ["he visto", false, "Le récit est au passé simple (sonó) : le perfecto ne convient pas."],
    ["veré", false, "Futur : incohérent avec sonó."],
  ], "L'imparfait pose le décor (action en cours) ; l'indefinido (sonó) introduit l'événement qui l'interrompt.", "Action en cours interrompue → imperfecto ; événement → indefinido.", [
    "« Mientras » introduit une action qui dure.",
    "Une autre action vient l'interrompre.",
    "Ver est irrégulier à l'imparfait.",
  ]),
  Q("B-ES-PAS-004", "es.pasados", "es.pasados.imperfecto", 2, "Completa la frase : « Antes, nosotros ___ (ver) a nuestros primos cada domingo. »", [
    ["veíamos", true, "Habitude passée → imperfecto ; ver garde le e (veía)."],
    ["víamos", false, "Ver conserve son e à l'imparfait."],
    ["veiamos", false, "Il manque l'accent écrit sur le í (hiatus)."],
    ["vemos", false, "Présent : « antes » situe l'habitude dans le passé."],
  ], "Habitude passée (antes, cada domingo) → imperfecto. Ver est irrégulier : veía, veías, veía, veíamos, veíais, veían.", "Habitude passée → imperfecto ; ver → veía.", [
    "Le marqueur indique une habitude révolue.",
    "Ver est l'un des trois imparfaits irréguliers.",
    "Garde le e de l'infinitif et l'accent du hiatus.",
  ]),
  Q("B-ES-PAS-005", "es.pasados", "es.pasados.participes", 2, "Completa la frase : « Todavía no he ___ los deberes; voy a hacerlos ahora. »", [
    ["terminado", true, "Avec haber, le participe est invariable."],
    ["terminados", false, "Accord fautif : le participe ne s'accorde pas avec haber."],
    ["terminando", false, "Gérondif : haber se construit avec le participe."],
    ["terminé", false, "Forme conjuguée : haber exige un participe."],
  ], "Le perfecto se forme avec haber + participe invariable : he terminado, quel que soit le complément.", "Haber + participe toujours invariable.", [
    "Le verbe est au passé composé.",
    "Quelle forme suit l'auxiliaire haber ?",
    "En espagnol, cette forme ne s'accorde jamais avec haber.",
  ]),
  Q("B-ES-PAS-006", "es.pasados", "es.pasados.participes", 1, "Completa la frase : « ¿Quién ha ___ (abrir) la ventana? Hace mucho frío. »", [
    ["abierto", true, "Participe irrégulier d'abrir."],
    ["abrido", false, "Régularisation fautive."],
    ["abrierto", false, "Mélange de l'infinitif et du participe."],
    ["abierta", false, "Accord fautif avec haber."],
  ], "Abrir a un participe irrégulier : abierto (comme cubierto, descubierto).", "Abrir → abierto ; escribir → escrito ; romper → roto.", [
    "Il faut un participe passé.",
    "Ce participe est irrégulier.",
    "Il ressemble à cubierto.",
  ], { anchor: "formules" }),
  Q("B-ES-PAS-007", "es.pasados", "es.pasados.plusque", 2, "Completa la frase : « Cuando llegamos al cine, la película ya ___ . »", [
    ["había empezado", true, "Action antérieure à une autre action passée → pluscuamperfecto."],
    ["ha empezado", false, "Le perfecto se rattache au présent, pas à un repère passé."],
    ["habrá empezado", false, "Futur antérieur : incohérent avec le passé."],
    ["haya empezado", false, "Subjonctif : rien ne l'impose."],
  ], "Le début du film précède notre arrivée (llegamos) : antériorité dans le passé, donc había + participe.", "Antériorité dans le passé → pluscuamperfecto.", [
    "Deux actions passées : laquelle a eu lieu d'abord ?",
    "« Ya » souligne que l'action était déjà accomplie.",
    "Il faut haber à l'imparfait.",
  ]),
  Q("B-ES-PAS-008", "es.pasados", "es.pasados.irreguliers", 2, "Completa la frase : « El cliente ___ (pedir) la cuenta y se fue sin decir nada. »", [
    ["pidió", true, "Pedir : e → i à la 3e personne de l'indefinido."],
    ["pedió", false, "Oubli de l'affaiblissement."],
    ["pidio", false, "Il manque l'accent écrit de la 3e personne."],
    ["pide", false, "Présent : le récit est au passé (se fue)."],
  ], "Les verbes en -ir à affaiblissement changent e en i aux 3es personnes de l'indefinido : pidió, pidieron.", "Pedir → pidió, pidieron.", [
    "Le récit est au passé simple (se fue).",
    "Pedir modifie sa voyelle à la 3e personne.",
    "Les verbes réguliers gardent leur accent écrit à cette personne.",
  ]),
  Q("B-ES-PAS-009", "es.pasados", "es.pasados.irreguliers", 3, "Completa la frase : « Los testigos no le ___ (decir) toda la verdad al juez. »", [
    ["dijeron", true, "Après j, la 3e personne du pluriel est en -eron."],
    ["dijieron", false, "Après j, pas de i dans la terminaison."],
    ["decieron", false, "Régularisation fautive."],
    ["dicieron", false, "Il faut le radical dij- du prétérit."],
  ], "Decir : dije, dijiste, dijo, dijimos, dijisteis, dijeron. Même modèle : traer → trajeron, conducir → condujeron.", "Radical en j → 3e pluriel en -eron (dijeron).", [
    "Decir a un prétérit fort.",
    "Le radical se termine par j.",
    "Après j, la terminaison perd son i.",
  ], { reserved: true }),
  Q("B-ES-PAS-010", "es.pasados", "es.pasados.participes", 3, "Elige la frase correcta (pretérito perfecto con dos pronombres).", [
    ["Me lo han dicho esta mañana.", true, "Pronoms avant l'auxiliaire, participe irrégulier dicho."],
    ["Me han lo dicho esta mañana.", false, "Le pronom ne s'intercale pas entre haber et le participe."],
    ["Me lo han decido esta mañana.", false, "Participe régularisé à tort."],
    ["Me lo han dichos esta mañana.", false, "Participe accordé à tort."],
  ], "Haber et le participe forment un bloc : les pronoms se placent avant (me lo han dicho). Decir → dicho, invariable.", "Pronom + haber + participe invariable : me lo han dicho.", [
    "Vérifie la place des pronoms.",
    "Vérifie la forme du participe de decir.",
    "Le participe ne s'accorde pas.",
  ], { anchor: "erreur" }),
];
