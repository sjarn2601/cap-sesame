// Espagnol : gustar, prépositions, tournures verbales, connecteurs.
import type { BankQuestion, LessonDef } from "../helpers";
import { Q } from "./q";

export const LESSONS_GRAMMAIRE: LessonDef[] = [
  {
    skillId: "es.gustar",
    title: "Gustar et les verbes de même construction",
    objectives: ["Accorder gustar avec ce qui plaît", "Employer le pronom COI et sa reprise a + pronom tonique", "Utiliser doler, parecer, encantar, quedar, faltar"],
    prerequisites: ["es.pronoms"],
    regle:
      "Gustar se construit à l'envers du français « aimer » : ce qui plaît est le sujet, la personne est un complément indirect. Me gusta el chocolate signifie littéralement « le chocolat me plaît ».\n\n" +
      "Le verbe s'accorde donc avec la chose aimée, souvent placée après lui : me gusta la música (singulier) ; me gustan los perros (pluriel). Avec un ou plusieurs infinitifs, le verbe reste au singulier : me gusta bailar y cantar.\n\n" +
      "La personne est toujours exprimée par un pronom COI : me, te, le, nos, os, les. On peut la préciser ou la mettre en relief avec a + pronom tonique ou a + nom, mais le pronom COI reste obligatoire : A mí me gusta ; A Lucía le gusta ; A mis padres les gusta. On ne dit jamais « yo gusto » pour « j'aime ».\n\n" +
      "Même construction et même accord : encantar (adorer), interesar, importar, molestar (déranger), preocupar, apetecer (avoir envie), faltar (manquer), quedar (rester : me quedan dos euros), doler (avoir mal), parecer (sembler, trouver), caer bien / mal (trouver quelqu'un sympathique ou non).\n\n" +
      "Doler : on emploie l'article défini, pas le possessif, car le pronom indique déjà à qui appartient la partie du corps : Me duele la cabeza ; Me duelen los pies.\n\n" +
      "Parecer + adjectif ou adverbe pour donner son avis : ¿Qué te parece? — Me parece bien. Me parecen caros estos zapatos.\n\n" +
      "Encantar exprime déjà un goût très fort : on évite d'y ajouter mucho (me encanta suffit).",
    formules:
      "(A mí) me gusta / gustan\n(A ti) te gusta / gustan\n(A él, ella, usted) le gusta / gustan\n(A nosotros) nos gusta / gustan\n(A vosotros) os gusta / gustan\n(A ellos, ellas, ustedes) les gusta / gustan\n" +
      "Infinitif → singulier : nos gusta viajar\n" +
      "Me duele la cabeza / Me duelen las piernas (article, pas de possessif)",
    methode:
      "1. Cherche ce qui plaît, fait mal ou manque : c'est le sujet.\n" +
      "2. Accorde le verbe avec ce sujet (singulier, pluriel ; infinitif → singulier).\n" +
      "3. Choisis le pronom COI de la personne concernée.\n" +
      "4. Si la phrase commence par a + nom ou pronom, garde quand même le pronom COI.",
    exemple:
      "Completa : « A mis hermanos les ___ (encantar) los deportes de invierno. »\n" +
      "Ce qui plaît : los deportes, pluriel → encantan. La personne (a mis hermanos) est reprise par les.\n" +
      "Réponse : A mis hermanos les encantan los deportes de invierno.",
    erreur:
      "✗ Yo gusto el cine → ✓ Me gusta el cine.\n" +
      "✗ Me gusta los perros → ✓ Me gustan los perros.\n" +
      "✗ A mí gusta → ✓ A mí me gusta (le pronom COI est obligatoire).\n" +
      "✗ Me duele mi cabeza / Tengo mal a la cabeza → ✓ Me duele la cabeza.\n" +
      "✗ Me gustan nadar y correr → ✓ Me gusta nadar y correr.",
    approfondir:
      "Avec gustar, la personne qui aime peut aussi être sujet dans un autre sens : Te gusto signifie « je te plais ». Lis donc attentivement la personne du verbe.\n\n" +
      "Pour dire « avoir envie », apetecer est très courant en Espagne : ¿Te apetece un café?\n\n" +
      "Astuce de rapidité : réécris mentalement la phrase avec « plaire » ; l'accord apparaît immédiatement.",
    cards: [
      ["J'aime les chats", "Me gustan los gatos.", true],
      ["J'ai mal aux pieds", "Me duelen los pies.", true],
      ["Gustar + infinitif", "singulier : me gusta leer", false],
      ["A mi madre … gusta", "le : a mi madre le gusta", false],
    ],
  },
  {
    skillId: "es.porpara",
    title: "Por, para et les autres prépositions",
    objectives: ["Choisir entre por et para", "Employer a devant un COD de personne", "Traduire depuis et il y a"],
    regle:
      "Para regarde vers un but : destination (Salgo para Madrid), destinataire (Es para ti), finalité (Estudio para aprobar), échéance (Para el lunes), point de vue (Para mí, es fácil), comparaison (Habla bien para su edad).\n\n" +
      "Por regarde vers une cause ou un moyen : cause (Gracias por tu ayuda ; No salimos por la lluvia), moyen (Te llamo por teléfono), lieu de passage ou lieu vague (Paseamos por el parque), moment approximatif (Por la mañana ; Por Navidad), échange ou prix (Lo compré por diez euros), remplacement (Trabajo por ti), complément d'agent du passif (Escrito por Cervantes), pourcentages (el diez por ciento).\n\n" +
      "A devant un COD de personne déterminée : Veo a mi madre ; Busco a Pedro. Sans a pour une chose ou une personne indéterminée : Veo la casa ; Busco un médico. A introduit aussi la direction (Voy a Sevilla), l'heure (a las tres) et al + infinitif = au moment où (Al llegar, me llamó).\n\n" +
      "En : lieu sans mouvement (Estoy en casa) et moyen de transport (en tren, en coche, en avión ; mais a pie, a caballo).\n\n" +
      "De : origine, matière, appartenance (Soy de Lyon ; una mesa de madera ; el coche de mi padre).\n\n" +
      "Le temps : hace + durée = il y a (Llegué hace tres años). Desde hace + durée = depuis, quand l'action continue (Vivo aquí desde hace tres años). Desde + date ou moment = depuis (Desde 2020 ; Desde el lunes). Equivalent : Hace tres años que vivo aquí ; Llevo tres años viviendo aquí.",
    formules:
      "Para : but, destination, destinataire, échéance, point de vue\n" +
      "Por : cause, moyen, passage, prix, échange, agent du passif, moment vague\n" +
      "A + COD de personne déterminée : Conozco a tu hermana\n" +
      "Al + infinitif = au moment de / quand\n" +
      "En tren, en coche ; a pie, a caballo\n" +
      "Hace tres años = il y a trois ans ; desde hace tres años = depuis trois ans ; desde 2020 = depuis 2020",
    methode:
      "1. Pour por / para, demande-toi : cause ou moyen (por) ? but ou destination (para) ?\n" +
      "2. Un prix, un lieu traversé, un agent du passif → por.\n" +
      "3. Un COD est-il une personne déterminée ? Ajoute a.\n" +
      "4. « Depuis » + durée → desde hace ; + date → desde. « Il y a » → hace.",
    exemple:
      "Completa : « Te mando el documento ___ correo electrónico ___ que lo revises antes del lunes. »\n" +
      "Premier blanc : le moyen d'envoi → por correo electrónico.\n" +
      "Second blanc : le but avec un autre sujet → para que (+ subjonctif).\n" +
      "Réponse : Te mando el documento por correo electrónico para que lo revises antes del lunes.",
    erreur:
      "✗ Gracias para tu ayuda → ✓ Gracias por tu ayuda.\n" +
      "✗ Veo mi madre → ✓ Veo a mi madre.\n" +
      "✗ Voy a tren → ✓ Voy en tren.\n" +
      "✗ Vivo aquí hace dos años (pour « depuis » ; tour courant en Amérique, notamment au Río de la Plata, mais à éviter au concours) → ✓ Vivo aquí desde hace dos años.\n" +
      "✗ En llegando a casa → ✓ Al llegar a casa.",
    approfondir:
      "Por et para peuvent tous deux être corrects avec un sens différent : Lo hago para ti (pour te l'offrir) / Lo hago por ti (à ta place ou à cause de toi). Lis donc le contexte avant de choisir.\n\n" +
      "Pour les échéances, para fixe la date limite : Tiene que estar listo para el viernes.\n\n" +
      "Au concours, por / para revient souvent : apprends une phrase type par emploi plutôt qu'une liste abstraite.",
    cards: [
      ["Merci pour…", "Gracias por…", true],
      ["Écrit par Cervantes", "Escrito por Cervantes", true],
      ["Depuis deux ans", "Desde hace dos años", true],
      ["Je vois ma sœur", "Veo a mi hermana (a devant COD de personne)", true],
      ["Échéance : pour lundi", "para el lunes", false],
    ],
  },
  {
    skillId: "es.tournures",
    title: "Les tournures verbales et l'obligation",
    objectives: ["Employer les périphrases soler, acabar de, volver a, seguir, llevar", "Exprimer l'obligation personnelle et impersonnelle", "Éviter les calques du français"],
    prerequisites: ["es.presente"],
    regle:
      "L'espagnol utilise beaucoup de périphrases verbales là où le français emploie un adverbe ou une autre construction.\n\n" +
      "Soler + infinitif : habitude (avoir l'habitude de). Suelo levantarme a las siete. Soler diphtongue (suelo, sueles…) et s'emploie surtout au présent et à l'imparfait (solía).\n\n" +
      "Acabar de + infinitif : passé récent (venir de). Acabo de llegar. Ne calque jamais le français : « vengo de llegar » est fautif.\n\n" +
      "Volver a + infinitif : répétition (re-, de nouveau). Volvió a llamar = il a rappelé.\n\n" +
      "Seguir ou continuar + gérondif : continuité (continuer à, toujours). Sigue lloviendo = il pleut toujours.\n\n" +
      "Llevar + durée + gérondif : depuis combien de temps dure une action. Llevo dos años estudiando español = j'étudie l'espagnol depuis deux ans. À la forme négative : llevar + durée + sin + infinitif : Llevo un mes sin fumar = je n'ai pas fumé depuis un mois.\n\n" +
      "Ir + gérondif : progression lente. La situación va mejorando. À distinguer de ir a + infinitif (futur proche) : Voy a salir.\n\n" +
      "Autres : ponerse a + infinitif (se mettre à), dejar de + infinitif (cesser de), estar a punto de + infinitif (être sur le point de), echarse a + infinitif (se mettre soudain à).\n\n" +
      "Obligation : tener que + infinitif, obligation personnelle (Tengo que estudiar). Hay que + infinitif, obligation impersonnelle et invariable (Hay que estudiar = il faut étudier). Deber + infinitif, obligation morale ou conseil (Debes descansar). Dans la norme, deber de + infinitif exprime la probabilité (Debe de ser tarde = il doit être tard) et non l'obligation. Hace falta + infinitif ou que + subjonctif : il faut.",
    formules:
      "Soler + inf. = avoir l'habitude de\n" +
      "Acabar de + inf. = venir de\n" +
      "Volver a + inf. = re- / de nouveau\n" +
      "Seguir + gérondif = continuer à\n" +
      "Llevar + durée + gérondif = depuis ; llevar + durée + sin + inf.\n" +
      "Ir + gérondif = progression ; ir a + inf. = futur proche\n" +
      "Dejar de + inf. = cesser de ; ponerse a + inf. = se mettre à\n" +
      "Tener que (personnel) ; hay que (impersonnel) ; deber (moral) ; deber de (probabilité)",
    methode:
      "1. Traduis le sens de la phrase française : habitude, répétition, passé récent, durée, obligation ?\n" +
      "2. Choisis la périphrase correspondante et sa préposition (de, a, ou aucune).\n" +
      "3. Vérifie la forme qui suit : infinitif ou gérondif.\n" +
      "4. Pour l'obligation, demande-toi si elle vise une personne précise ou tout le monde.",
    exemple:
      "Traduis : « Je travaille dans cette entreprise depuis cinq ans et je viens d'être promu. »\n" +
      "Durée d'une action qui continue → llevar + durée + gérondif : Llevo cinco años trabajando en esta empresa.\n" +
      "Passé récent → acabar de + infinitif : y acaban de ascenderme.\n" +
      "Réponse : Llevo cinco años trabajando en esta empresa y acaban de ascenderme.",
    erreur:
      "✗ Vengo de llegar → ✓ Acabo de llegar.\n" +
      "✗ Sigue a llover → ✓ Sigue lloviendo.\n" +
      "✗ Llevo tres años de estudiar → ✓ Llevo tres años estudiando.\n" +
      "✗ Hay que tú estudies / Hemos que estudiar → ✓ Tienes que estudiar ; Hay que estudiar.\n" +
      "✗ Debes de descansar (pour un conseil) → ✓ Debes descansar.",
    approfondir:
      "Volver a évite les verbes en re- qui n'existent pas toujours en espagnol : relire = volver a leer, refaire = volver a hacer.\n\n" +
      "Llevar + durée remplace très naturellement desde hace : Llevo un año aquí = Estoy aquí desde hace un año.\n\n" +
      "Au concours, ces périphrases se reconnaissent à la préposition : si l'option propose « de » ou « a » au mauvais endroit, élimine-la sans hésiter.",
    cards: [
      ["Je viens d'arriver", "Acabo de llegar.", true],
      ["Il pleut toujours", "Sigue lloviendo.", true],
      ["Il faut (impersonnel)", "Hay que + infinitif", true],
      ["J'apprends le piano depuis trois ans", "Llevo tres años aprendiendo piano.", true],
      ["Volver a leer", "relire", true],
    ],
  },
  {
    skillId: "es.connecteurs",
    title: "Les connecteurs logiques",
    objectives: ["Distinguer pero, sino et sino que", "Exprimer la cause, la conséquence et la concession", "Choisir le mode après un connecteur"],
    prerequisites: ["es.subj"],
    regle:
      "Opposition : pero (mais) ajoute une restriction : Es caro, pero es bueno. Sino (mais au contraire) corrige un élément nié et s'emploie après une négation : No es rojo, sino azul. Devant un verbe conjugué, on emploie sino que : No lo compró, sino que lo alquiló. Sin embargo et no obstante (cependant, pourtant) relient deux phrases et s'encadrent de ponctuation.\n\n" +
      "Concession : aunque + indicatif = bien que, même si (fait réel) : Aunque estaba cansado, salió. Aunque + subjonctif = même si (hypothèse ou fait non pris en compte) : Aunque llueva, saldré. A pesar de + nom ou infinitif : A pesar de la lluvia ; A pesar de estar cansado. A pesar de que + verbe conjugué.\n\n" +
      "Cause : porque (parce que), placé après la principale : No vino porque estaba enfermo. Como (comme), en tête de phrase : Como llovía, nos quedamos en casa. Ya que et puesto que (puisque). Pues (car) dans un registre soutenu. À ne pas confondre : porque (parce que) / por qué (pourquoi, interrogatif) / el porqué (la raison).\n\n" +
      "Conséquence : por lo tanto, por eso, así que, de modo que, por consiguiente (donc, c'est pourquoi).\n\n" +
      "Addition : además (de plus), también (aussi), incluso (même), tampoco (non plus).\n\n" +
      "Condition : si + indicatif ou imparfait du subjonctif ; en caso de que, siempre que, siempre y cuando, con tal de que + subjonctif (à condition que).\n\n" +
      "Reformulation et conclusion : es decir, o sea (c'est-à-dire) ; en resumen, en definitiva (en somme).",
    formules:
      "Pero = mais (restriction) ; sino = mais au contraire (après négation) ; sino que + verbe conjugué\n" +
      "Sin embargo, no obstante = cependant\n" +
      "Aunque + indicatif (fait) / + subjonctif (hypothèse) ; a pesar de + nom ou infinitif\n" +
      "Porque (après la principale) ; como (en tête) ; ya que, puesto que = puisque\n" +
      "Por lo tanto, por eso, así que = donc\n" +
      "Siempre que, con tal de que, en caso de que + subjonctif",
    methode:
      "1. Identifie la relation logique entre les deux parties : opposition, cause, conséquence, concession, condition ?\n" +
      "2. Vérifie la construction : nom, infinitif ou verbe conjugué après le connecteur.\n" +
      "3. Pour pero / sino : la première partie est-elle niée et corrigée ?\n" +
      "4. Vérifie le mode exigé (subjonctif après les connecteurs de condition).",
    exemple:
      "Completa : « No vino en coche, ___ cogió el autobús ; ___ , llegó tarde. »\n" +
      "Premier blanc : négation corrigée par un verbe conjugué → sino que.\n" +
      "Second blanc : conséquence → por lo tanto (ou por eso).\n" +
      "Réponse : No vino en coche, sino que cogió el autobús ; por lo tanto, llegó tarde.",
    erreur:
      "✗ No es mi hermano, pero mi primo → ✓ No es mi hermano, sino mi primo.\n" +
      "✗ No estudia, sino trabaja → ✓ No estudia, sino que trabaja.\n" +
      "✗ A pesar la lluvia → ✓ A pesar de la lluvia.\n" +
      "✗ Aunque la lluvia → ✓ A pesar de la lluvia (aunque introduit un verbe).\n" +
      "✗ No vino por que estaba enfermo → ✓ No vino porque estaba enfermo.",
    approfondir:
      "Sin embargo ne signifie jamais « sans » : c'est un faux ami de forme. Retiens « cependant ».\n\n" +
      "Dans les textes de compréhension, les connecteurs sont des balises : la réponse à une question sur l'opinion de l'auteur se trouve très souvent après sin embargo, pero ou en definitiva.\n\n" +
      "Siempre que a deux sens : « chaque fois que » avec l'indicatif (Siempre que viene, trae flores) et « à condition que » avec le subjonctif.",
    cards: [
      ["No es rojo, … azul", "sino", false],
      ["Cependant", "sin embargo / no obstante", true],
      ["Malgré la crise", "A pesar de la crisis", true],
      ["Comme il pleuvait, …", "Como llovía, …", true],
      ["Donc", "por lo tanto / así que / por eso", true],
    ],
  },
];

export const QUESTIONS_GRAMMAIRE: BankQuestion[] = [
  // ---------- es.gustar ----------
  Q("B-ES-GUS-001", "es.gustar", "es.gustar.accord", 1, "Completa la frase : « A mi hermano le ___ mucho los videojuegos. »", [
    ["gustan", true, "Le verbe s'accorde avec ce qui plaît (los videojuegos)."],
    ["gusta", false, "Accord avec la personne au lieu de la chose aimée."],
    ["gusto", false, "Première personne : sans rapport."],
    ["gustamos", false, "Première personne du pluriel."],
  ], "Los videojuegos est le sujet de gustar : verbe au pluriel, gustan.", "Gustar s'accorde avec ce qui plaît.", [
    "Qu'est-ce qui plaît ?",
    "Ce nom est-il singulier ou pluriel ?",
    "Accorde le verbe avec lui.",
  ]),
  Q("B-ES-GUS-002", "es.gustar", "es.gustar.pronom", 1, "Completa la frase (à nous) : « ___ encanta viajar en tren por Europa. »", [
    ["Nos", true, "Pronom COI de la 1re personne du pluriel."],
    ["Nosotros", false, "Calque du sujet français : la personne est un COI."],
    ["A nosotros", false, "La reprise a nosotros n'est possible qu'avec le pronom nos."],
    ["Les", false, "Troisième personne du pluriel."],
  ], "Encantar se construit comme gustar : la personne est un COI, ici nos. A nosotros nos encanta est possible, mais le pronom nos est obligatoire.", "Encantar / gustar : pronom COI obligatoire.", [
    "La personne qui aime n'est pas le sujet.",
    "Il faut un pronom complément indirect.",
    "1re personne du pluriel.",
  ]),
  Q("B-ES-GUS-003", "es.gustar", "es.gustar.doler", 2, "Completa la frase : « Después del partido, me ___ mucho las piernas. » (doler)", [
    ["duelen", true, "Doler s'accorde avec las piernas et diphtongue."],
    ["duele", false, "Accord avec la personne au lieu des jambes."],
    ["dolen", false, "Oubli de la diphtongue."],
    ["duelo", false, "Première personne : la personne est un COI."],
  ], "Doler fonctionne comme gustar : las piernas est le sujet (pluriel) ; le verbe diphtongue : duelen.", "Me duele + singulier ; me duelen + pluriel.", [
    "Qu'est-ce qui fait mal ?",
    "Accorde le verbe avec ce nom.",
    "Doler diphtongue o → ue.",
  ]),
  Q("B-ES-GUS-004", "es.gustar", "es.gustar.doler", 2, "Traduis : « J'ai mal à la tête. »", [
    ["Me duele la cabeza.", true, "Doler + article défini."],
    ["Me duele mi cabeza.", false, "Le possessif est inutile : le pronom indique déjà la personne."],
    ["Tengo mal a la cabeza.", false, "Calque du français."],
    ["Me duelo la cabeza.", false, "Doler ne se construit pas à la forme pronominale pour une douleur physique : la tête est le sujet."],
  ], "On exprime la douleur avec doler : la partie du corps est le sujet, précédée de l'article défini.", "Avoir mal à → doler + article défini.", [
    "Quel verbe exprime la douleur ?",
    "Il se construit comme gustar.",
    "Partie du corps : article ou possessif ?",
  ], { anchor: "erreur" }),
  Q("B-ES-GUS-005", "es.gustar", "es.gustar.parecer", 2, "Completa la frase : « ¿Qué te ___ estos zapatos? — Me parecen un poco caros. »", [
    ["parecen", true, "Parecer s'accorde avec estos zapatos."],
    ["parece", false, "Accord au singulier alors que le sujet est pluriel."],
    ["pareces", false, "Accord avec la personne au lieu des chaussures."],
    ["parecéis", false, "Deuxième personne du pluriel."],
  ], "Parecer se construit comme gustar : estos zapatos est le sujet (pluriel) → parecen. La réponse confirme : me parecen.", "Parecer s'accorde avec ce qui est jugé.", [
    "Que juge-t-on ?",
    "La réponse donne un indice.",
    "Sujet au pluriel.",
  ]),
  Q("B-ES-GUS-006", "es.gustar", "es.gustar.pronom", 2, "Completa la frase : « A mis padres no ___ gusta que llegue tarde. »", [
    ["les", true, "COI pluriel reprenant a mis padres."],
    ["los", false, "COD : gustar demande un COI."],
    ["se", false, "Se ne remplace le COI que devant lo, la, los, las."],
    ["ellos", false, "Pronom sujet : impossible ici."],
  ], "La personne concernée (a mis padres) est reprise par le COI les. Le verbe reste au singulier car le sujet est une proposition (que llegue tarde).", "A + nom pluriel → les gusta.", [
    "Qui n'aime pas ?",
    "Gustar se construit avec un COI.",
    "Pluriel de le.",
  ]),
  Q("B-ES-GUS-007", "es.gustar", "es.gustar.accord", 3, "Elige la frase correcta (verbo interesar).", [
    ["A Lucía le interesan mucho las ciencias.", true, "Interesar accordé avec las ciencias, COI le."],
    ["Lucía le interesan mucho las ciencias.", false, "Il manque la préposition a devant Lucía."],
    ["A Lucía la interesan mucho las ciencias.", false, "Laísmo : la personne est un COI (le)."],
    ["A Lucía le interesa mucho las ciencias.", false, "Accord fautif : las ciencias est pluriel."],
  ], "Interesar se construit comme gustar : a + personne, pronom COI le, verbe accordé avec las ciencias (interesan).", "A + personne + le/les + verbe accordé avec la chose.", [
    "Vérifie trois points : préposition, pronom, accord.",
    "La personne est un complément indirect.",
    "Le sujet du verbe est las ciencias.",
  ], { reserved: true }),
  Q("B-ES-GUS-008", "es.gustar", "es.gustar.autres", 2, "Completa la frase : « Solo me ___ diez euros para terminar el mes. » (quedar)", [
    ["quedan", true, "Quedar (rester) s'accorde avec diez euros."],
    ["queda", false, "Accord au singulier alors que diez euros est pluriel."],
    ["quedo", false, "Première personne : la personne est un COI."],
    ["quedamos", false, "Première personne du pluriel."],
  ], "Quedar au sens de « rester » se construit comme gustar : diez euros est le sujet → quedan.", "Me queda / me quedan = il me reste.", [
    "Quedar signifie ici « rester ».",
    "Qu'est-ce qui reste ?",
    "Sujet au pluriel.",
  ]),
  Q("B-ES-GUS-009", "es.gustar", "es.gustar.accord", 3, "Completa la frase : « ¿Os ___ ir al cine esta noche? » (apetecer)", [
    ["apetece", true, "Le sujet est un infinitif : verbe au singulier."],
    ["apetecen", false, "Accord avec la personne (os) au lieu de l'infinitif."],
    ["apetecéis", false, "Accord avec vosotros : la personne est un COI."],
    ["apetezca", false, "Subjonctif : rien ne l'impose dans une question directe."],
  ], "Apetecer se construit comme gustar ; quand le sujet est un infinitif (ir al cine), le verbe est au singulier.", "Infinitif sujet → verbe au singulier.", [
    "Qu'est-ce qui fait envie ?",
    "Ce sujet est un infinitif.",
    "Un infinitif entraîne le singulier.",
  ]),
  Q("B-ES-GUS-010", "es.gustar", "es.gustar.pronom", 1, "Completa la frase : « A mí ___ gusta mucho el cine, pero a mi novio no. »", [
    ["me", true, "Le pronom COI reste obligatoire après a mí."],
    ["mí", false, "Forme tonique déjà employée : il faut le pronom atone."],
    ["yo", false, "Pronom sujet : la personne est un COI."],
    ["se", false, "Troisième personne réfléchie."],
  ], "A mí sert à insister, mais le pronom me reste obligatoire : A mí me gusta.", "A mí me gusta : jamais « a mí gusta ».", [
    "A mí ne suffit pas.",
    "Il faut un pronom complément indirect.",
    "1re personne du singulier.",
  ]),

  // ---------- es.porpara ----------
  Q("B-ES-POR-001", "es.porpara", "es.porpara.para", 1, "Completa la frase : « Este regalo es ___ tu madre; dáselo esta noche. »", [
    ["para", true, "Destinataire → para."],
    ["por", false, "Por exprime la cause ou le moyen, pas le destinataire."],
    ["en", false, "En indique un lieu."],
    ["a", false, "Ser a ne s'emploie pas pour le destinataire."],
  ], "Le cadeau est destiné à la mère : para marque le destinataire.", "Destinataire → para.", [
    "À qui le cadeau est-il destiné ?",
    "La préposition du but et du destinataire.",
    "Pense à « Es para ti ».",
  ]),
  Q("B-ES-POR-002", "es.porpara", "es.porpara.por", 1, "Completa la frase : « Muchas gracias ___ tu ayuda con la mudanza. »", [
    ["por", true, "Gracias por + cause du remerciement."],
    ["para", false, "Calque de « merci pour »."],
    ["a", false, "Gracias a signifie « grâce à »."],
    ["de", false, "Construction inexistante."],
  ], "On remercie à cause de quelque chose : gracias por.", "Gracias por…", [
    "Le remerciement a une cause.",
    "Por exprime la cause.",
    "Le français « pour » ne se traduit pas toujours par para.",
  ]),
  Q("B-ES-POR-003", "es.porpara", "es.porpara.por", 2, "Completa la frase : « Compré esta bici ___ cien euros en una web de segunda mano. »", [
    ["por", true, "Prix, échange → por."],
    ["para", false, "Para indique le but, pas le prix."],
    ["de", false, "Una bici de cien euros est possible, mais pas après comprar."],
    ["con", false, "Calque de « avec cent euros »."],
  ], "Le prix payé en échange d'un objet s'exprime avec por : lo compré por cien euros.", "Prix, échange → por.", [
    "Le complément indique un prix.",
    "Il s'agit d'un échange.",
    "La préposition de l'échange.",
  ]),
  Q("B-ES-POR-004", "es.porpara", "es.porpara.para", 2, "Completa la frase : « Tenemos que entregar el informe ___ el viernes como muy tarde. »", [
    ["para", true, "Échéance → para."],
    ["por", false, "Por + moment exprime un moment vague, pas une date limite."],
    ["desde", false, "Desde indique un point de départ."],
    ["en", false, "Construction incorrecte pour une échéance."],
  ], "« Como muy tarde » souligne la date limite : para el viernes.", "Date limite → para.", [
    "Le vendredi est une limite.",
    "Para regarde vers un objectif.",
    "Pense à « para el lunes ».",
  ]),
  Q("B-ES-POR-005", "es.porpara", "es.porpara.por", 1, "Completa la frase : « Don Quijote de la Mancha fue escrito ___ Miguel de Cervantes. »", [
    ["por", true, "Complément d'agent du passif → por."],
    ["para", false, "Para n'introduit pas l'agent."],
    ["de", false, "Calque archaïque : l'agent s'introduit par por."],
    ["a", false, "Construction inexistante."],
  ], "Dans une phrase passive, l'agent est introduit par por.", "Agent du passif → por.", [
    "La phrase est au passif.",
    "Qui a fait l'action ?",
    "L'agent s'introduit comme en français « par ».",
  ]),
  Q("B-ES-POR-006", "es.porpara", "es.porpara.a", 2, "Completa la frase : « Esta mañana he visto ___ tu hermano en el mercado. »", [
    ["a", true, "COD de personne déterminée → a."],
    ["(aucune préposition)", false, "Calque du français : le COD de personne prend a."],
    ["en", false, "En indique un lieu."],
    ["de", false, "Sans rapport."],
  ], "Tu hermano est une personne déterminée, COD de ver : on la fait précéder de a.", "COD de personne déterminée → a.", [
    "Le complément est-il une chose ou une personne ?",
    "Cette personne est déterminée.",
    "Une préposition spécifique à l'espagnol.",
  ]),
  Q("B-ES-POR-007", "es.porpara", "es.porpara.temps", 2, "Completa la frase (= depuis trois ans) : « Vivo en Sevilla ___ tres años. »", [
    ["desde hace", true, "Durée d'une action qui continue → desde hace."],
    ["dentro de", false, "Dentro de + durée signifie « dans » (futur)."],
    ["desde", false, "Desde seul s'emploie avec une date."],
    ["por", false, "Por + durée ne traduit pas « depuis »."],
  ], "L'action continue (vivo) et on donne une durée : desde hace tres años. Desde seul s'emploie avec une date (desde 2023).", "Depuis + durée → desde hace ; + date → desde.", [
    "Le complément est une durée, pas une date.",
    "L'action dure encore.",
    "Il faut combiner deux mots.",
  ], { reserved: true }),
  Q("B-ES-POR-008", "es.porpara", "es.porpara.en", 1, "Completa la frase : « Mañana vamos ___ tren a Barcelona. »", [
    ["en", true, "Moyen de transport → en."],
    ["a", false, "A s'emploie pour a pie, a caballo, pas pour un véhicule."],
    ["con", false, "Calque de « avec le train »."],
    ["de", false, "Sans rapport."],
  ], "Les moyens de transport se construisent avec en : en tren, en coche, en avión.", "En tren, en coche ; a pie.", [
    "Le complément est un moyen de transport.",
    "Quelle préposition pour un véhicule ?",
    "Exception : a pie.",
  ]),
  Q("B-ES-POR-009", "es.porpara", "es.porpara.por", 2, "Completa la frase : « Paseamos ___ el centro de la ciudad toda la tarde. »", [
    ["por", true, "Lieu parcouru → por."],
    ["para", false, "Para indique une destination."],
    ["a", false, "A indique une direction."],
    ["de", false, "De indique une origine."],
  ], "On se promène à travers le centre : lieu de passage → por.", "Lieu parcouru → por.", [
    "Le centre est-il une destination ou un lieu parcouru ?",
    "On circule à l'intérieur.",
    "Pense à « por el parque ».",
  ]),
  Q("B-ES-POR-010", "es.porpara", "es.porpara.a", 3, "Completa la frase : « ___ llegar a casa, me di cuenta de que había perdido las llaves. »", [
    ["Al", true, "Al + infinitif = au moment de."],
    ["En", false, "Calque du gérondif français « en arrivant »."],
    ["A el", false, "La contraction a + el = al est obligatoire."],
    ["Para", false, "Para + infinitif exprime le but."],
  ], "Al + infinitif marque la simultanéité : au moment où je suis arrivé.", "Al + infinitif = en / au moment de.", [
    "La phrase exprime le moment.",
    "Le français dirait « en arrivant ».",
    "Préposition contractée avec l'article.",
  ], { reserved: true }),

  // ---------- es.tournures ----------
  Q("B-ES-TOUR-001", "es.tournures", "es.tournures.periphrases", 1, "Completa la frase (= je viens d'arriver) : « ___ llegar del aeropuerto y estoy agotado. »", [
    ["Acabo de", true, "Passé récent → acabar de + infinitif."],
    ["Vengo de", false, "Calque du français « venir de »."],
    ["Acabo", false, "Il manque la préposition de."],
    ["Vuelvo a", false, "Volver a exprime la répétition."],
  ], "« Venir de » + infinitif se traduit par acabar de + infinitif.", "Venir de → acabar de.", [
    "Le français exprime un passé récent.",
    "Le verbe français ne se traduit pas mot à mot.",
    "Le verbe signifie « finir ».",
  ]),
  Q("B-ES-TOUR-002", "es.tournures", "es.tournures.periphrases", 1, "Completa la frase (habitude) : « Los domingos ___ comer en casa de mis abuelos. »", [
    ["solemos", true, "Soler (habitude), nosotros sans diphtongue."],
    ["suelemos", false, "Diphtongue à tort à nosotros."],
    ["solamos", false, "Subjonctif : rien ne l'impose."],
    ["soliemos", false, "Forme inexistante."],
  ], "Soler + infinitif exprime l'habitude. Nosotros ne diphtongue pas : solemos.", "Soler + inf. = avoir l'habitude de.", [
    "Quel verbe exprime l'habitude ?",
    "Il diphtongue comme poder.",
    "Pas de diphtongue à nosotros.",
  ]),
  Q("B-ES-TOUR-003", "es.tournures", "es.tournures.duree", 2, "Completa la frase : « Llevo tres años ___ en esta empresa. »", [
    ["trabajando", true, "Llevar + durée + gérondif."],
    ["trabajar", false, "Llevar + durée se construit avec le gérondif."],
    ["de trabajar", false, "Calque : pas de préposition."],
    ["que trabajo", false, "Construction de hace… que, pas de llevar."],
  ], "Llevar + durée + gérondif traduit « depuis » : Llevo tres años trabajando = je travaille depuis trois ans.", "Llevar + durée + gérondif.", [
    "Llevar exprime ici une durée.",
    "Quelle forme verbale suit ?",
    "Comme estar + …",
  ]),
  Q("B-ES-TOUR-004", "es.tournures", "es.tournures.periphrases", 2, "Completa la frase : « A pesar de la tormenta, el equipo sigue ___ en el campo. »", [
    ["entrenando", true, "Seguir + gérondif = continuer à."],
    ["entrenar", false, "Seguir se construit avec le gérondif."],
    ["a entrenar", false, "Calque de « continuer à »."],
    ["de entrenar", false, "Préposition inutile."],
  ], "Seguir (ou continuar) + gérondif exprime la continuité.", "Seguir + gérondif.", [
    "Seguir signifie ici continuer.",
    "Pas de préposition.",
    "Forme en -ando / -iendo.",
  ]),
  Q("B-ES-TOUR-005", "es.tournures", "es.tournures.obligation", 2, "Completa la frase (obligation impersonnelle) : « Para aprobar el examen, ___ estudiar todos los días. »", [
    ["hay que", true, "Obligation impersonnelle → hay que + infinitif."],
    ["hay de", false, "Préposition fautive."],
    ["ha que", false, "Hay est la forme impersonnelle de haber."],
    ["hace falta de", false, "Hace falta se construit sans de devant un infinitif."],
  ], "Il faut (tout le monde) → hay que + infinitif, invariable.", "Il faut → hay que + infinitif.", [
    "L'obligation ne vise personne en particulier.",
    "Tournure avec haber.",
    "Haber prend sa forme impersonnelle.",
  ]),
  Q("B-ES-TOUR-006", "es.tournures", "es.tournures.periphrases", 2, "Completa la frase (= le refaire) : « El examen salió mal; tengo que ___ hacerlo en septiembre. »", [
    ["volver a", true, "Volver a + infinitif = refaire."],
    ["volver de", false, "Préposition fautive."],
    ["acabar de", false, "Acabar de exprime le passé récent."],
    ["dejar de", false, "Dejar de signifie cesser de."],
  ], "La répétition s'exprime par volver a + infinitif : volver a hacer = refaire.", "Volver a + inf. = re-.", [
    "Le préfixe re- n'existe pas toujours en espagnol.",
    "Quelle périphrase exprime la répétition ?",
    "Verbe de retour + a.",
  ]),
  Q("B-ES-TOUR-007", "es.tournures", "es.tournures.periphrases", 1, "Elige la traducción correcta de « Mi abuelo dejó de fumar hace diez años ».", [
    ["Mon grand-père a arrêté de fumer il y a dix ans.", true, "Dejar de = cesser de ; hace = il y a."],
    ["Mon grand-père fume depuis dix ans.", false, "Confusion de hace (il y a) avec desde hace (depuis)."],
    ["Mon grand-père a recommencé à fumer il y a dix ans.", false, "Recommencer se dit volver a."],
    ["Mon grand-père a laissé fumer les autres pendant dix ans.", false, "Calque de dejar (laisser)."],
  ], "Dejar de + infinitif = cesser de ; hace + durée = il y a.", "Dejar de = arrêter de.", [
    "Dejar suivi de de change de sens.",
    "Hace + durée situe dans le passé.",
    "Le grand-père ne fume plus.",
  ]),
  Q("B-ES-TOUR-008", "es.tournures", "es.tournures.periphrases", 2, "Completa la frase : « Poco a poco, la situación económica ___ mejorando. »", [
    ["va", true, "Ir + gérondif = progression."],
    ["va a", false, "Ir a se construit avec l'infinitif."],
    ["acaba de", false, "Acabar de se construit avec l'infinitif."],
    ["vuelve a", false, "Volver a se construit avec l'infinitif."],
  ], "« Poco a poco » marque une évolution progressive : ir + gérondif.", "Ir + gérondif = progression.", [
    "Le gérondif est déjà donné.",
    "Quelle périphrase avec gérondif exprime une progression ?",
    "Verbe de mouvement sans préposition.",
  ]),
  Q("B-ES-TOUR-009", "es.tournures", "es.tournures.obligation", 3, "Completa la frase (conseil du médecin) : « Juan ___ comer más fruta y verdura. »", [
    ["debe", true, "Deber + infinitif = obligation morale, conseil."],
    ["debe de", false, "Deber de exprime la probabilité dans la norme."],
    ["tiene de", false, "Tener que, pas tener de."],
    ["hay que", false, "Hay que est impersonnel : il ne peut avoir Juan pour sujet."],
  ], "Le conseil vise Juan : deber + infinitif. Deber de + infinitif signifie « il doit probablement ».", "Deber = obligation ; deber de = probabilité.", [
    "L'obligation vise une personne précise.",
    "Attention à la préposition de.",
    "Debe de comer signifierait « il mange probablement ».",
  ], { reserved: true, anchor: "erreur" }),
  Q("B-ES-TOUR-010", "es.tournures", "es.tournures.duree", 3, "Completa la frase (= je n'utilise plus les réseaux sociaux depuis deux semaines) : « Llevo dos semanas ___ redes sociales. »", [
    ["sin usar", true, "Llevar + durée + sin + infinitif."],
    ["sin usando", false, "Sin se construit avec l'infinitif."],
    ["no usando", false, "La négation de llevar + gérondif se fait avec sin + infinitif."],
    ["sin que usar", false, "Sin que exige un verbe conjugué."],
  ], "À la forme négative, llevar + durée + gérondif devient llevar + durée + sin + infinitif.", "Llevar + durée + sin + infinitif.", [
    "La phrase est négative.",
    "La préposition qui signifie « sans ».",
    "Une préposition est suivie de l'infinitif.",
  ], { anchor: "regle" }),

  // ---------- es.connecteurs ----------
  Q("B-ES-CON-001", "es.connecteurs", "es.connecteurs.sino", 1, "Completa la frase : « No quiero té, ___ café con leche. »", [
    ["sino", true, "Correction après une négation, devant un nom."],
    ["pero", false, "Pero ajoute une restriction, il ne corrige pas un élément nié."],
    ["sin embargo", false, "Sin embargo relie deux phrases."],
    ["sino que", false, "Sino que s'emploie devant un verbe conjugué."],
  ], "La première partie est niée et corrigée par un nom : sino.", "No… sino + nom.", [
    "La première partie est négative.",
    "La seconde remplace la première.",
    "Pas de verbe conjugué après le blanc.",
  ]),
  Q("B-ES-CON-002", "es.connecteurs", "es.connecteurs.sino", 1, "Completa la frase : « Es un piso pequeño, ___ muy luminoso. »", [
    ["pero", true, "Restriction sans négation → pero."],
    ["sino", false, "Sino exige une négation dans la première partie."],
    ["sino que", false, "Exige une négation et un verbe conjugué."],
    ["por lo tanto", false, "Conséquence : illogique."],
  ], "Aucune négation : on ajoute une qualité qui nuance la première → pero.", "Pero = mais (restriction).", [
    "Y a-t-il une négation ?",
    "On nuance, on ne corrige pas.",
    "Le « mais » le plus courant.",
  ]),
  Q("B-ES-CON-003", "es.connecteurs", "es.connecteurs.sino", 2, "Completa la frase : « No se quedó en casa, ___ salió a correr por el parque. »", [
    ["sino que", true, "Correction après négation, devant un verbe conjugué."],
    ["sino", false, "Il faut que devant un verbe conjugué."],
    ["pero", false, "Pero ne corrige pas un élément nié."],
    ["ya que", false, "Cause : illogique."],
  ], "Négation corrigée par un verbe conjugué (salió) : sino que.", "No… sino que + verbe conjugué.", [
    "La première partie est niée.",
    "La seconde la remplace.",
    "Un verbe conjugué suit le blanc.",
  ]),
  Q("B-ES-CON-004", "es.connecteurs", "es.connecteurs.cause", 2, "Completa la frase : « ___ hacía mucho calor, cerramos las persianas. »", [
    ["Como", true, "Cause en tête de phrase → como."],
    ["Aunque", false, "Concession : illogique."],
    ["Sino", false, "Sino suit une négation."],
    ["Por lo tanto", false, "Conséquence placée avant la cause : illogique."],
  ], "La chaleur est la cause, placée en tête : como.", "En tête de phrase, la cause s'introduit par como.", [
    "Quelle est la relation entre chaleur et volets ?",
    "La cause est placée en premier.",
    "Le français dirait « comme ».",
  ]),
  Q("B-ES-CON-005", "es.connecteurs", "es.connecteurs.consequence", 1, "Completa la frase : « El tren tenía retraso; ___ , llegamos tarde a la reunión. »", [
    ["por lo tanto", true, "Conséquence → por lo tanto."],
    ["sin embargo", false, "Opposition : illogique."],
    ["aunque", false, "Concession : illogique."],
    ["sino", false, "Sino suit une négation."],
  ], "Le retard du train entraîne notre retard : conséquence → por lo tanto.", "Donc → por lo tanto, por eso, así que.", [
    "Relation logique entre les deux phrases ?",
    "La seconde découle de la première.",
    "Connecteur de conséquence.",
  ]),
  Q("B-ES-CON-006", "es.connecteurs", "es.connecteurs.concession", 2, "Completa la frase : « ___ la crisis, la empresa ha aumentado sus beneficios. »", [
    ["A pesar de", true, "Concession + nom → a pesar de."],
    ["Aunque", false, "Aunque introduit un verbe conjugué."],
    ["Sin embargo", false, "Sin embargo relie deux propositions."],
    ["Ya que", false, "Cause : illogique."],
  ], "Malgré + nom → a pesar de + nom.", "A pesar de + nom ou infinitif.", [
    "Un nom suit le blanc.",
    "Le sens est « malgré ».",
    "Connecteur avec de.",
  ]),
  Q("B-ES-CON-007", "es.connecteurs", "es.connecteurs.sens", 1, "¿Qué significa « sin embargo »?", [
    ["cependant", true, "Sin embargo = cependant, pourtant."],
    ["par conséquent", false, "Par conséquent = por lo tanto."],
    ["sans délai", false, "Calque de « sin » (sans)."],
    ["de plus", false, "De plus = además."],
  ], "Sin embargo marque l'opposition entre deux phrases.", "Sin embargo = cependant.", [
    "C'est un connecteur d'opposition.",
    "Ne traduis pas mot à mot.",
    "Synonyme de no obstante.",
  ]),
  Q("B-ES-CON-008", "es.connecteurs", "es.connecteurs.condition", 3, "Completa la frase (à condition que) : « Te presto el coche ___ me lo devuelvas mañana. »", [
    ["siempre que", true, "Condition + subjonctif → siempre que."],
    ["siempre cuando", false, "La locution est siempre y cuando."],
    ["a pesar de", false, "Concession : construction et sens fautifs."],
    ["ya que", false, "Cause : ne se construit pas avec le subjonctif."],
  ], "« À condition que » se dit siempre que (ou siempre y cuando, con tal de que) + subjonctif.", "Siempre que + subjonctif = à condition que.", [
    "Le verbe est au subjonctif.",
    "Le sens est conditionnel.",
    "Locution avec siempre.",
  ], { reserved: true }),
  Q("B-ES-CON-009", "es.connecteurs", "es.connecteurs.cause", 2, "Completa la frase : « No fui a la fiesta ___ estaba enfermo. »", [
    ["porque", true, "Parce que → porque, en un mot sans accent."],
    ["por que", false, "Por que en deux mots n'introduit pas une cause."],
    ["porqué", false, "Porqué est un nom (el porqué = la raison)."],
    ["por qué", false, "Por qué est interrogatif (pourquoi)."],
  ], "La cause s'introduit par porque. Por qué = pourquoi ; el porqué = la raison.", "Porque (cause) ≠ por qué (pourquoi).", [
    "La seconde partie donne une cause.",
    "Quatre graphies pour quatre fonctions.",
    "Une seule s'écrit en un mot sans accent.",
  ], { anchor: "regle" }),
  Q("B-ES-CON-010", "es.connecteurs", "es.connecteurs.concession", 3, "Completa la frase (fait réel : il était fatigué) : « Aunque ___ cansado, terminó el trabajo. »", [
    ["estaba", true, "Aunque + indicatif = fait réel."],
    ["estar", false, "Aunque introduit un verbe conjugué ; l'infinitif s'emploie après a pesar de."],
    ["era", false, "La fatigue est un état : estar."],
    ["esté", false, "Subjonctif présent : discordance temporelle et hypothèse."],
  ], "La fatigue est un fait réel : aunque + indicatif ; état passager → estar à l'imparfait.", "Aunque + indicatif = bien que (fait réel).", [
    "Le fait est-il réel ou hypothétique ?",
    "Le mode dépend de la réponse.",
    "Ser ou estar pour la fatigue ?",
  ]),
];
