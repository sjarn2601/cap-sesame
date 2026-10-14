// Espagnol : compréhension de textes courts (textes originaux) et exercices oraux.
import type { BankQuestion, LanguageExerciseDef, LessonDef } from "../helpers";
import { Q } from "./q";

export const LESSONS_LECTURE: LessonDef[] = [
  {
    skillId: "es.lecture",
    title: "Comprendre un texte court",
    objectives: ["Repérer l'information demandée dans un texte de 100 mots", "Distinguer les points de vue rapportés", "Écarter les options qui déforment le texte"],
    prerequisites: ["es.connecteurs", "es.vocab"],
    regle:
      "À l'épreuve d'espagnol, quelques questions portent sur un texte court : article de presse, témoignage, récit, avis pratique. Il ne s'agit pas de tout traduire, mais de retrouver vite l'information exacte qu'on te demande.\n\n" +
      "Lis la question avant le texte. Elle t'indique quoi chercher : une opinion (¿Qué piensa…?), une cause (¿Por qué…?), une conséquence, un changement, une date. Souligne mentalement le mot clé, puis parcours le texte jusqu'au passage qui y répond.\n\n" +
      "Distingue les voix : un texte de presse rapporte souvent plusieurs points de vue (los defensores, los directivos, los vecinos, los ecologistas). Les distracteurs attribuent volontiers à une personne l'opinion d'une autre. Repère les verbes de parole (explica, advierte, reconoce, recuerda, consideran) et le sujet de chacun.\n\n" +
      "Les connecteurs sont des balises : sin embargo, pero, aunque annoncent une nuance ou une objection ; por eso, así, por lo tanto une conséquence ; en cambio une opposition entre deux groupes.\n\n" +
      "Méfie-toi de trois pièges : l'option qui reprend les mots du texte mais inverse le sens ; l'option vraie dans la réalité mais absente du texte ; l'option qui exagère (siempre, nunca, todos, total) une idée nuancée.\n\n" +
      "Enfin, ne bloque pas sur un mot inconnu : le contexte, la famille de mots (desempleo → empleo) ou la ressemblance avec le français suffisent presque toujours.",
    methode:
      "1. Lis la question et les quatre options (15 secondes).\n" +
      "2. Repère le mot clé de la question et le type d'information attendue.\n" +
      "3. Parcours le texte jusqu'au passage utile ; lis-le en entier, avec la phrase suivante.\n" +
      "4. Vérifie qui parle : la question porte-t-elle sur l'auteur ou sur une personne citée ?\n" +
      "5. Élimine les options contraires au texte, absentes du texte ou exagérées.\n" +
      "6. Choisis l'option qui reformule le passage, même si elle n'en reprend pas les mots.",
    exemple:
      "Texte : « Muchos jóvenes quieren comprar una vivienda. Sin embargo, los precios han subido tanto que la mayoría sigue viviendo de alquiler. »\n" +
      "Question : ¿Qué dice el texto sobre los jóvenes?\n" +
      "Option piège : « Los jóvenes no quieren comprar una vivienda » (contraire du texte).\n" +
      "Option piège : « Todos los jóvenes viven con sus padres » (absent et exagéré).\n" +
      "Bonne option : « La mayoría no puede comprar por los precios » : elle reformule la phrase introduite par sin embargo.",
    erreur:
      "✗ Choisir l'option qui reprend le plus de mots du texte → ✓ Choisir celle qui en reprend le sens.\n" +
      "✗ Attribuer à l'auteur l'opinion d'une personne citée → ✓ Repérer le sujet de chaque verbe de parole.\n" +
      "✗ Répondre avec ses connaissances générales → ✓ Ne retenir que ce que dit le texte.\n" +
      "✗ Traduire tout le texte avant de lire la question → ✓ Lire la question d'abord.",
    approfondir:
      "Les questions de compréhension prennent plus de temps que les questions de grammaire : compte environ une minute et demie. Pour tenir les 30 minutes, traite d'abord les questions de grammaire rapides et garde du temps pour les textes.\n\n" +
      "Pour progresser, lis chaque jour un court article d'un quotidien espagnol ou latino-américain et résume-le en une phrase en espagnol : c'est le meilleur entraînement à la reformulation.",
    cards: [
      ["Sin embargo, pero, aunque", "annoncent une nuance ou une objection", false],
      ["En cambio", "en revanche : oppose deux groupes ou deux idées", true],
      ["Premier réflexe face à un texte", "lire la question avant le texte", false],
      ["Option qui exagère (siempre, todos, nunca)", "souvent fausse si le texte nuance", false],
    ],
  },
];

const T = (texto: string, pregunta: string) => `Lee el texto y responde a la pregunta.\n\n« ${texto} »\n\n${pregunta}`;
const LT = 90;

export const QUESTIONS_LECTURE: BankQuestion[] = [
  Q("B-ES-LEC-001", "es.lecture", "es.lecture.opinion", 2, T(
    "Desde la pandemia, muchas empresas españolas han adoptado un modelo híbrido: los empleados trabajan tres días en la oficina y dos desde casa. Según sus defensores, este sistema reduce el tiempo de transporte y mejora la conciliación entre la vida laboral y la familiar. Sin embargo, algunos directivos temen que el trabajo a distancia debilite el espíritu de equipo, sobre todo entre los recién llegados, que aprenden observando a sus compañeros. Para Marta, ingeniera en una empresa de Bilbao, la clave está en la organización: «Reservamos los días presenciales para las reuniones y los proyectos creativos; en casa, me concentro en las tareas que exigen silencio». Su empresa no piensa volver al modelo anterior, aunque revisará el acuerdo cada año.",
    "Según el texto, ¿qué piensa Marta del modelo híbrido?"), [
    ["Funciona si se reparten bien las tareas entre la oficina y la casa.", true, "« La clave está en la organización » : elle répartit les tâches selon le lieu."],
    ["Debilita el espíritu de equipo de los nuevos empleados.", false, "C'est la crainte de certains directivos, pas l'avis de Marta."],
    ["Debería sustituirse por el teletrabajo completo.", false, "Marta ne parle pas de télétravail total."],
    ["Su empresa lo abandonará el año que viene.", false, "Contraire du texte : l'entreprise ne compte pas revenir en arrière."],
  ], "Marta insiste sur l'organisation : réunions et projets créatifs au bureau, tâches de concentration à la maison. L'inquiétude sur l'esprit d'équipe est attribuée aux directivos.", "Repérer qui parle avant d'attribuer une opinion.", [
    "Cherche le passage où Marta s'exprime.",
    "Quel mot présente selon elle l'élément décisif ?",
    "Ne confonds pas son avis avec celui des directivos.",
  ], { anchor: "methode", timeSec: LT }),
  Q("B-ES-LEC-002", "es.lecture", "es.lecture.nuance", 2, T(
    "En muchas regiones del sur de España, la falta de lluvia se ha convertido en un problema estructural. Los embalses llegan al verano con reservas cada vez más bajas y los agricultores, que consumen la mayor parte del agua, buscan soluciones. En un pueblo de Almería, una cooperativa ha instalado un sistema de riego por goteo controlado por sensores: las plantas reciben solo el agua que necesitan, en el momento adecuado. «Al principio la inversión nos parecía demasiado cara, pero en dos años hemos reducido el consumo casi a la mitad», explica su presidente. Los ecologistas reconocen el avance, aunque recuerdan que la tecnología no bastará si siguen aumentando las superficies de regadío.",
    "¿Qué matiz aportan los ecologistas?"), [
    ["El ahorro será insuficiente si se amplían las tierras de regadío.", true, "« La tecnología no bastará si siguen aumentando las superficies de regadío »."],
    ["El riego por goteo consume más agua que el sistema anterior.", false, "Contraire du texte : la consommation a diminué de près de moitié."],
    ["La inversión es demasiado cara para las cooperativas.", false, "C'était l'impression initiale du président, pas l'avis des écologistes."],
    ["Los embalses del sur están llenos al comenzar el verano.", false, "Contraire du texte : les réserves sont de plus en plus basses."],
  ], "Après « reconocen el avance », le connecteur aunque introduit la réserve des écologistes : la technologie ne suffira pas si les surfaces irriguées augmentent.", "Après aunque ou sin embargo, chercher la nuance.", [
    "Repère le passage consacré aux ecologistas.",
    "Quel connecteur introduit leur réserve ?",
    "Reformule la condition qu'ils posent.",
  ], { anchor: "regle", timeSec: LT }),
  Q("B-ES-LEC-003", "es.lecture", "es.lecture.recit", 1, T(
    "Cuando mi abuela cumplió ochenta años, mis primos le regalaron un teléfono inteligente. Al principio lo dejaba en un cajón: decía que las pantallas eran cosa de jóvenes y que ella prefería las cartas. Un domingo, mientras comíamos, le enseñé a hacer videollamadas. Se rio mucho al ver a mi tío, que vive en Argentina, aparecer en la pantalla con su perro. Desde entonces lo llama cada semana y ha aprendido incluso a enviar fotos de sus plantas. Ya no habla de «cosa de jóvenes»; ahora es ella quien nos regaña cuando tardamos en contestar a sus mensajes.",
    "¿Qué cambio describe el texto?"), [
    ["La abuela pasó de rechazar el móvil a usarlo con regularidad.", true, "Au début le téléphone reste dans un tiroir ; ensuite elle appelle chaque semaine."],
    ["La abuela dejó de escribir cartas a su hijo de Argentina.", false, "Le texte ne dit rien de tel."],
    ["Los nietos regañan a la abuela porque no contesta a los mensajes.", false, "Inversion : c'est la grand-mère qui gronde ses petits-enfants."],
    ["El tío le regaló un teléfono a la abuela para su cumpleaños.", false, "Ce sont les cousins qui ont offert le téléphone."],
  ], "Le récit oppose « al principio » (le téléphone dans un tiroir) et « desde entonces » (appels hebdomadaires, photos) : la grand-mère a adopté le téléphone.", "Repérer les marqueurs de temps qui structurent un changement.", [
    "Compare le début et la fin du texte.",
    "Repère « al principio » et « desde entonces ».",
    "Vérifie qui gronde qui à la fin.",
  ], { anchor: "methode", timeSec: LT }),
  Q("B-ES-LEC-004", "es.lecture", "es.lecture.opinion", 2, T(
    "En el centro de varias ciudades españolas, los pisos turísticos se han multiplicado en la última década. Para los propietarios, alquilar por días a visitantes resulta mucho más rentable que firmar un contrato de larga duración. Para los vecinos, en cambio, las consecuencias son visibles: los alquileres suben, las tiendas de barrio cierran y son sustituidas por comercios para turistas. Algunos ayuntamientos han dejado de conceder nuevas licencias y multan a quienes alquilan sin autorización. Los representantes del sector turístico advierten que estas medidas pueden destruir empleo, mientras que las asociaciones vecinales consideran que llegan demasiado tarde.",
    "¿Cuál es la postura de las asociaciones vecinales sobre las medidas municipales?"), [
    ["Las consideran tardías.", true, "« Consideran que llegan demasiado tarde »."],
    ["Creen que destruirán empleo.", false, "C'est la position du secteur touristique."],
    ["Piden que se concedan más licencias.", false, "Contraire de leur logique : les voisins subissent les locations touristiques."],
    ["Prefieren que los pisos se alquilen por días.", false, "C'est l'intérêt des propriétaires, pas des voisins."],
  ], "La dernière phrase oppose deux voix avec mientras que : le secteur touristique (risque pour l'emploi) et les associations de voisins (mesures trop tardives).", "Mientras que oppose deux points de vue : attribuer chacun au bon acteur.", [
    "Va à la dernière phrase.",
    "Deux groupes y sont opposés par mientras que.",
    "Que pensent les associations du moment où arrivent les mesures ?",
  ], { anchor: "erreur", timeSec: LT }),
  Q("B-ES-LEC-005", "es.lecture", "es.lecture.recit", 2, T(
    "Don Ernesto llevaba cuarenta años abriendo la librería a las nueve en punto. Aquella mañana, sin embargo, los vecinos encontraron la persiana bajada y un papel pegado en el cristal: «Cerrado por felicidad». Nadie entendía nada. Algunos pensaron que estaba enfermo; otros, que por fin había vendido el local a una cadena de comida rápida. A mediodía, la panadera resolvió el misterio: la nieta del librero, a quien él no veía desde hacía diez años, había llegado de México la noche anterior. El viejo librero, que nunca había faltado ni un solo día, había decidido pasar la jornada entera con ella paseando por la ciudad.",
    "¿Por qué estaba cerrada la librería?"), [
    ["Porque el librero quería pasar el día con su nieta, recién llegada.", true, "C'est l'explication donnée par la boulangère."],
    ["Porque el librero estaba enfermo.", false, "Simple supposition de certains voisins."],
    ["Porque el librero había vendido el local.", false, "Autre rumeur, démentie par la suite."],
    ["Porque la panadera necesitaba su ayuda.", false, "La boulangère explique le mystère, elle n'en est pas la cause."],
  ], "Les hypothèses des voisins (maladie, vente) sont des rumeurs ; la boulangère révèle la vraie raison : la petite-fille arrivée du Mexique.", "Distinguer les hypothèses des personnages et le fait établi.", [
    "Plusieurs hypothèses circulent dans le texte.",
    "Qui résout le mystère ?",
    "Lis ce qui suit « resolvió el misterio ».",
  ], { anchor: "methode", timeSec: LT }),
  Q("B-ES-LEC-006", "es.lecture", "es.lecture.nuance", 2, T(
    "Más de treinta años después de su creación, el programa Erasmus sigue siendo uno de los símbolos más populares de la Unión Europea. España se encuentra tradicionalmente entre los países que más estudiantes envían y reciben. Para muchos jóvenes, pasar un semestre en otro país supone la primera experiencia de vida independiente: hay que buscar alojamiento, organizar el presupuesto y adaptarse a otro sistema universitario. Sin embargo, la beca no siempre cubre los gastos, especialmente en las ciudades más caras, y algunos estudiantes renuncian por motivos económicos. Por eso, varias universidades completan la ayuda europea con fondos propios destinados a los alumnos con menos recursos.",
    "¿Qué problema señala el texto?"), [
    ["La beca puede ser insuficiente, lo que excluye a algunos estudiantes.", true, "« La beca no siempre cubre los gastos… algunos estudiantes renuncian »."],
    ["España recibe pocos estudiantes extranjeros.", false, "Contraire du texte : elle est parmi les pays qui en reçoivent le plus."],
    ["Las universidades se niegan a completar la ayuda europea.", false, "Contraire du texte : plusieurs la complètent."],
    ["Los jóvenes no saben buscar alojamiento.", false, "Le texte présente la recherche de logement comme une étape, pas comme un échec."],
  ], "Le problème est introduit par sin embargo : la bourse ne couvre pas toujours les frais et certains renoncent. Por eso introduit la réponse des universités.", "Sin embargo introduit souvent le problème ; por eso, sa conséquence.", [
    "Cherche le connecteur qui introduit une difficulté.",
    "Lis la phrase qui commence par sin embargo.",
    "Quelle conséquence a-t-elle pour certains étudiants ?",
  ], { anchor: "regle", timeSec: LT, reserved: true }),
  Q("B-ES-LEC-007", "es.lecture", "es.lecture.cause", 3, T(
    "Los horarios españoles sorprenden a muchos extranjeros: se come a las dos o a las tres, se cena a las nueve o a las diez y los programas de máxima audiencia de la televisión empiezan muy tarde. Contrariamente a lo que se suele creer, la mayoría de los españoles no duerme la siesta a diario. Varios expertos explican estos horarios por un motivo histórico: en 1940, España adoptó la hora de Europa central, aunque geográficamente le correspondería la del meridiano de Greenwich, como a Portugal o al Reino Unido. Así, el sol sale y se pone más tarde que en otros países, y las costumbres se adaptaron a la luz.",
    "Según el texto, ¿qué explica en parte los horarios españoles?"), [
    ["Un huso horario que no corresponde a la posición geográfica del país.", true, "L'Espagne a adopté en 1940 l'heure d'Europe centrale au lieu de celle de Greenwich."],
    ["La costumbre de dormir la siesta todos los días.", false, "Le texte présente cette idée comme une croyance fausse."],
    ["La influencia de Portugal y del Reino Unido.", false, "Ces pays ne sont cités que comme comparaison."],
    ["El horario de los programas de televisión.", false, "C'est une conséquence décrite, pas la cause."],
  ], "Les experts invoquent un motif historique : le choix, en 1940, d'un fuseau horaire décalé par rapport à la géographie, d'où un soleil plus tardif.", "Distinguer cause, conséquence et idée reçue.", [
    "Cherche le mot « motivo ».",
    "Quel événement de 1940 est évoqué ?",
    "La sieste est présentée comme une idée reçue.",
  ], { anchor: "erreur", timeSec: LT }),
  Q("B-ES-LEC-008", "es.lecture", "es.lecture.pratique", 1, T(
    "Biblioteca municipal. Avisos de octubre. Durante las obras de renovación, la sala de estudio permanecerá cerrada del 6 al 20 de octubre. Los usuarios podrán consultar libros en la planta baja, cuyo horario se amplía: abrirá de lunes a sábado de 9 a 21 horas, en lugar de cerrar a las 19. El préstamo de libros electrónicos no se verá afectado. Les recordamos que, a partir del 1 de noviembre, será obligatorio reservar con antelación los ordenadores de uso público a través de la web. Para cualquier duda, pueden dirigirse al mostrador de información.",
    "Según el aviso, ¿qué cambiará a partir de noviembre?"), [
    ["Habrá que reservar los ordenadores por internet.", true, "« A partir del 1 de noviembre, será obligatorio reservar… a través de la web »."],
    ["La sala de estudio cerrará por obras.", false, "La fermeture concerne octobre (du 6 au 20)."],
    ["La planta baja abrirá también los domingos.", false, "Le texte n'en dit rien : l'horaire élargi, limité aux travaux d'octobre, va du lundi au samedi."],
    ["Se suspenderá el préstamo de libros electrónicos.", false, "Le prêt numérique n'est pas affecté."],
  ], "Seule la réservation obligatoire des ordinateurs est datée du 1er novembre ; les autres informations concernent octobre.", "Dans un avis pratique, associer chaque information à sa date.", [
    "Cherche la date de novembre dans le texte.",
    "Lis la phrase qui suit « a partir del 1 de noviembre ».",
    "Reformule l'obligation annoncée.",
  ], { anchor: "methode", timeSec: LT }),
];

export const ES_LANGUAGE_EXERCISES: LanguageExerciseDef[] = [
  {
    exerciseId: "ES-LIS-002",
    subjectCode: "LV-ES",
    kind: "listening",
    title: "Un mensaje de voz",
    level: "B1",
    text: "Hola, Laura, soy Daniel. Te llamo porque al final no podré ir a la reunión del jueves: me han cambiado el turno en el trabajo. ¿Podrías tomar notas y enviármelas por correo? Si quieres, el viernes te invito a un café y me lo cuentas todo. ¡Muchas gracias!",
    transcriptByDefault: false,
    question: "¿Qué le pide Daniel a Laura?",
    options: [
      { id: "a", text: "Que tome notas en la reunión y se las envíe.", correct: true, justification: "« ¿Podrías tomar notas y enviármelas por correo? »" },
      { id: "b", text: "Que cambie su turno de trabajo.", correct: false, justification: "C'est le turno de Daniel qui a été changé." },
      { id: "c", text: "Que vaya con él a la reunión del viernes.", correct: false, justification: "La réunion a lieu jeudi ; vendredi, il propose un café." },
    ],
  },
  {
    exerciseId: "ES-LIS-003",
    subjectCode: "LV-ES",
    kind: "listening",
    title: "El tiempo del fin de semana",
    level: "B1",
    text: "Buenos días. Según las previsiones, las temperaturas bajarán hasta cinco grados este fin de semana en el norte de la península. Se esperan lluvias intensas en Galicia y en Asturias a partir del sábado por la tarde, mientras que en el sur el cielo seguirá despejado. Se recomienda a los conductores que eviten los desplazamientos innecesarios el domingo.",
    transcriptByDefault: false,
    question: "¿Qué tiempo hará en el sur?",
    options: [
      { id: "a", text: "Seguirá haciendo buen tiempo, con el cielo despejado.", correct: true, justification: "« En el sur el cielo seguirá despejado »." },
      { id: "b", text: "Lloverá mucho desde el sábado por la tarde.", correct: false, justification: "Les fortes pluies concernent la Galice et les Asturies, au nord." },
      { id: "c", text: "Hará mucho más calor que la semana pasada.", correct: false, justification: "Le bulletin annonce une baisse des températures dans le nord, pas une hausse au sud." },
    ],
  },
  {
    exerciseId: "ES-READ-002",
    subjectCode: "LV-ES",
    kind: "read_aloud",
    title: "Subjuntivo y conectores",
    level: "B2",
    text: "Aunque el teletrabajo se ha generalizado, muchas empresas quieren que sus empleados vuelvan a la oficina al menos tres días por semana, para que el equipo siga funcionando como antes.",
    transcriptByDefault: true,
  },
  {
    exerciseId: "ES-CONV-002",
    subjectCode: "LV-ES",
    kind: "conversation",
    title: "Tus estudios y tu futuro",
    level: "B1",
    text: "Responde a cada pregunta en voz alta con tres o cuatro frases. Usa al menos un subjuntivo y un conector.",
    transcriptByDefault: true,
    prompts: [
      "¿Por qué quieres estudiar en una escuela de comercio?",
      "Cuéntame una experiencia, en el instituto, en un club o en un trabajo, que te haya enseñado algo importante.",
      "Si pudieras trabajar un año en un país hispanohablante, ¿cuál elegirías y por qué?",
    ],
    modelAnswer:
      "Ejemplo: « Quiero estudiar en una escuela de comercio porque me interesan la economía y los idiomas. Además, me gustaría trabajar en un entorno internacional. Si pudiera trabajar un año en el extranjero, elegiría México, ya que es un país con una economía dinámica y una cultura muy rica. Espero que esta experiencia me ayude a ser más autónomo. »",
  },
];
