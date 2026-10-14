// Espagnol : faux-amis et vocabulaire, accentuation et apocope, civilisation.
import type { BankQuestion, LessonDef } from "../helpers";
import { Q } from "./q";

export const LESSONS_LEXIQUE: LessonDef[] = [
  {
    skillId: "es.vocab",
    title: "Faux-amis et vocabulaire de l'actualité",
    objectives: ["Éviter les faux-amis les plus fréquents", "Maîtriser le vocabulaire du travail et de l'entreprise", "Comprendre le lexique de l'actualité"],
    regle:
      "Un faux-ami ressemble à un mot français mais n'a pas le même sens. Au concours, il apparaît dans une phrase : le contexte doit toujours primer sur la ressemblance.\n\n" +
      "Faux-amis essentiels : embarazada (enceinte ; gêné = avergonzado) ; constipado (enrhumé ; constipé = estreñido) ; éxito (succès ; sortie = salida) ; suceso (fait divers, événement ; succès = éxito) ; salir (sortir ; salir con alguien = sortir avec quelqu'un) ; largo (long ; large = ancho) ; exquisito (délicieux, d'un goût excellent) ; carpeta (chemise, classeur, dossier informatique ; tapis = alfombra) ; contestar (répondre ; contester = protestar, impugnar) ; firma (signature ; une firme = una empresa) ; oficina (bureau, lieu de travail ; le meuble = el escritorio) ; despacho (bureau individuel) ; bufete (cabinet d'avocat ; buffet = bufé) ; rato (un moment ; raté = fracaso) ; vaso (verre ; vase = jarrón) ; discusión (dispute, débat) ; constiparse (s'enrhumer) ; quitar (enlever ; quitter = dejar, irse de) ; real (réel ou royal).\n\n" +
      "Monde du travail : la empresa (l'entreprise), la plantilla (le personnel, les effectifs), el empleo / el puesto de trabajo (l'emploi, le poste), el sueldo / el salario (le salaire), el contrato (le contrat), el becario (le stagiaire, le boursier), el autónomo (le travailleur indépendant), despedir (licencier ; aussi dire au revoir), contratar (embaucher), jubilarse (prendre sa retraite), la huelga (la grève), el sindicato (le syndicat), el paro / el desempleo (le chômage), estar en paro (être au chômage), la entrevista de trabajo (l'entretien d'embauche), el currículum.\n\n" +
      "Économie et actualité : el presupuesto (le budget, le devis), los beneficios (les bénéfices), las pérdidas (les pertes), la facturación (le chiffre d'affaires), la subida / la bajada (la hausse / la baisse), los impuestos (les impôts), la vivienda (le logement), el alquiler (le loyer, la location), la sequía (la sécheresse), el incendio forestal, el cambio climático, las elecciones, el gobierno, la ley (la loi), la inteligencia artificial, el teletrabajo.",
    formules:
      "embarazada = enceinte ≠ avergonzado (gêné)\n" +
      "constipado = enrhumé ≠ estreñido (constipé)\n" +
      "éxito = succès ; salida = sortie ; suceso = fait divers\n" +
      "largo = long ; ancho = large\n" +
      "carpeta = chemise, dossier ≠ alfombra (tapis)\n" +
      "contestar = répondre ≠ protestar (contester)\n" +
      "paro = chômage ; huelga = grève ; despedir = licencier ; jubilarse = prendre sa retraite\n" +
      "presupuesto = budget ; beneficios = bénéfices ; plantilla = personnel",
    methode:
      "1. Lis toute la phrase avant de regarder le mot isolé.\n" +
      "2. Méfie-toi d'un mot qui ressemble trop au français : vérifie qu'il a du sens dans le contexte.\n" +
      "3. Élimine les options qui rendent la phrase absurde.\n" +
      "4. Range le vocabulaire par thèmes (travail, économie, environnement) pour le retrouver vite.",
    exemple:
      "« Los sucesos del periódico local hablan de un robo en una joyería. »\n" +
      "Un vol dans une bijouterie n'est pas un « succès » : los sucesos = les faits divers.\n\n" +
      "« El pasillo es largo pero estrecho. »\n" +
      "Largo s'oppose ici à estrecho (étroit) : le couloir est long et étroit, pas « large ».",
    erreur:
      "✗ Estoy embarazado (je suis gêné) → ✓ Estoy avergonzado.\n" +
      "✗ La calle es muy larga (pour « large ») → ✓ La calle es muy ancha.\n" +
      "✗ Contestar una decisión → ✓ Impugnar / protestar contra una decisión.\n" +
      "✗ La firma ha contratado (pour « la firme ») → ✓ La empresa ha contratado.\n" +
      "✗ Los trabajadores están en paro (pour « en grève », en Espagne) → ✓ Están en huelga.",
    approfondir:
      "Certains mots ont plusieurs sens : despedir signifie à la fois licencier et dire au revoir (despedirse de alguien) ; real signifie réel ou royal (el Palacio Real) ; paro désigne le chômage en Espagne, mais aussi un arrêt de travail, sens très courant en Amérique latine (un paro general = une grève générale).\n\n" +
      "Pour l'actualité, lis chaque semaine un titre de presse espagnole et relève trois mots : en six mois, tu disposes d'un lexique solide.\n\n" +
      "Au concours, une question de vocabulaire se décide en 15 secondes ou pas du tout : si tu hésites, élimine le calque le plus évident et passe.",
    cards: [
      ["Embarazada", "enceinte", true],
      ["Suceso", "fait divers", true],
      ["Largo / ancho", "long / large", true],
      ["Huelga / paro (Espagne)", "grève / chômage", true],
      ["Carpeta", "chemise, classeur, dossier", true],
      ["Presupuesto", "budget", true],
    ],
  },
  {
    skillId: "es.ortho",
    title: "Accentuation écrite et apocope",
    objectives: ["Placer l'accent écrit selon les règles générales", "Distinguer les monosyllabes par la tilde diacrítica", "Appliquer l'apocope des adjectifs"],
    regle:
      "Règle de base : un mot terminé par une voyelle, -n ou -s porte naturellement l'accent tonique sur l'avant-dernière syllabe (casa, hablan, lunes). Un mot terminé par une autre consonne le porte sur la dernière (reloj, ciudad, hablar). On écrit l'accent (tilde) seulement quand le mot ne suit pas cette règle : café, canción, inglés ; árbol, fácil, lápiz.\n\n" +
      "Les mots accentués sur l'antépénultième (esdrújulas) portent toujours un accent écrit : médico, rápido, sábado, teléfono, exámenes.\n\n" +
      "Hiatus : un i ou un u tonique à côté d'une voyelle forte (a, e, o) porte un accent : día, país, río, frío, baúl, veía.\n\n" +
      "Le pluriel peut ajouter ou supprimer l'accent pour garder la syllabe tonique : examen → exámenes, joven → jóvenes ; canción → canciones, inglés → ingleses.\n\n" +
      "Les monosyllabes ne portent pas d'accent (fue, dio, vio, fe, ti), sauf pour distinguer deux mots (tilde diacrítica) : él (il) / el (le) ; tú (tu, pronom) / tu (ton) ; mí (moi) / mi (mon) ; sí (oui, soi) / si (si) ; más (plus) / mas (mais, littéraire) ; té (thé) / te (te) ; dé (verbe dar) / de (de) ; sé (verbe saber ou ser) / se (se).\n\n" +
      "Les interrogatifs et exclamatifs portent un accent, y compris dans une question indirecte : qué, quién, cuál, cómo, dónde, cuándo, cuánto (No sé qué hacer ; ¡Qué bonito!). Sans accent, ce sont des relatifs ou des conjonctions (que, donde, cuando).\n\n" +
      "Aún (= todavía, encore) porte un accent ; aun (= incluso, même) n'en porte pas : Aún no ha llegado ; Aun así, aceptó.\n\n" +
      "Apocope : devant un nom masculin singulier, bueno, malo, primero, tercero, alguno, ninguno et uno perdent leur -o : buen día, mal tiempo, primer piso, algún libro. Grande devient gran devant tout nom singulier : una gran ciudad, un gran hombre. Ciento devient cien devant un nom et devant mil et millones : cien euros, cien mil (mais ciento veinte). Santo devient san (San Juan), sauf devant Tomás, Tomé, Domingo, Toribio. Cualquiera devient cualquier devant un nom.",
    formules:
      "Voyelle, -n, -s → accent naturel sur l'avant-dernière ; sinon tilde (canción, café)\n" +
      "Autre consonne → accent naturel sur la dernière ; sinon tilde (árbol, lápiz)\n" +
      "Esdrújulas → toujours une tilde (médico, rápido)\n" +
      "él / el ; tú / tu ; mí / mi ; sí / si ; más / mas ; té / te ; dé / de ; sé / se\n" +
      "qué, quién, cómo, dónde, cuándo, cuánto (interrogation, exclamation)\n" +
      "aún = todavía ; aun = incluso\n" +
      "buen, mal, primer, tercer, algún, ningún, un + nom masc. sing. ; gran + nom sing. ; cien + nom",
    methode:
      "1. Prononce le mot et repère la syllabe tonique.\n" +
      "2. Regarde la dernière lettre et applique la règle de base.\n" +
      "3. Si la prononciation contredit la règle, il faut une tilde.\n" +
      "4. Pour un monosyllabe, demande-toi s'il a un « jumeau » grammatical.\n" +
      "5. Pour un adjectif avant le nom, vérifie l'apocope.",
    exemple:
      "Faut-il un accent à « examenes » ?\n" +
      "Prononciation : e-XA-me-nes, accent sur l'antépénultième → esdrújula → exámenes.\n\n" +
      "Completa : « ___ no sabe ___ vendrá mañana. » (il / si)\n" +
      "Il (pronom) → él ; si (conjonction) → si sans accent. Réponse : Él no sabe si vendrá mañana.",
    erreur:
      "✗ examenes, jovenes → ✓ exámenes, jóvenes.\n" +
      "✗ fué, dió, tí → ✓ fue, dio, ti (monosyllabes).\n" +
      "✗ No sé que hacer → ✓ No sé qué hacer (interrogation indirecte).\n" +
      "✗ un bueno día, el primero piso → ✓ un buen día, el primer piso.\n" +
      "✗ una grande ciudad → ✓ una gran ciudad.\n" +
      "✗ ciento euros → ✓ cien euros.",
    approfondir:
      "Depuis 2010, la RAE recommande d'écrire solo et les démonstratifs (este, ese, aquel) sans accent, même quand ils sont adverbe ou pronom ; l'accent reste admis quand le scripteur perçoit une ambiguïté.\n\n" +
      "Gran et grande n'ont pas le même sens : un gran hombre (un grand homme, admirable) / un hombre grande (un homme grand, de taille).\n\n" +
      "Conseil : les questions d'accent se lisent avec les yeux, mais se résolvent à l'oreille. Prononce intérieurement chaque option.",
    cards: [
      ["él / el", "pronom (il) / article (le)", false],
      ["Pluriel de examen", "exámenes", true],
      ["Bueno devant un nom masculin singulier", "buen : un buen día", false],
      ["aún / aun", "encore (todavía) / même (incluso)", false],
      ["Cien ou ciento : 100 euros", "cien euros", false],
    ],
  },
  {
    skillId: "es.culture",
    title: "Repères de civilisation hispanique",
    objectives: ["Situer les pays hispanophones et leurs capitales", "Décrire les institutions espagnoles", "Reconnaître les grandes figures et les grandes fêtes"],
    regle:
      "L'espagnol est langue officielle, de droit ou de fait (cas du Mexique), dans 20 États souverains : l'Espagne, la Guinée équatoriale et 18 pays d'Amérique (le Mexique, six pays d'Amérique centrale, Cuba, la République dominicaine et neuf pays d'Amérique du Sud ; ni le Brésil, lusophone, ni le Belize, le Guyana ou le Suriname). S'y ajoute Porto Rico, territoire associé aux États-Unis, où l'espagnol est officiel avec l'anglais. Les États-Unis comptent plus de 40 millions d'hispanophones natifs.\n\n" +
      "Capitales à connaître : Mexique (Ciudad de México), Guatemala (Ciudad de Guatemala), Cuba (La Habana), Colombie (Bogotá), Venezuela (Caracas), Équateur (Quito), Pérou (Lima), Chili (Santiago), Argentine (Buenos Aires), Uruguay (Montevideo), Paraguay (Asunción), Costa Rica (San José). La Bolivie a deux capitales : Sucre (constitutionnelle) et La Paz (siège du gouvernement).\n\n" +
      "Institutions espagnoles : la Constitution de 1978, adoptée pendant la Transition qui suit la mort de Franco (1975), fait de l'Espagne une monarchie parlementaire. Le roi (Felipe VI depuis 2014) est chef de l'État ; le président du gouvernement dirige l'exécutif et est investi par le Congrès. Le Parlement, les Cortes Generales, comprend le Congreso de los Diputados et le Senado. L'Espagne est divisée en 17 communautés autonomes et 2 villes autonomes (Ceuta et Melilla). Le catalan (et le valencien), le galicien et le basque (euskera) sont co-officiels dans leurs communautés, ainsi que l'occitan (aranais) en Catalogne. L'Espagne est entrée dans la CEE en 1986 et a adopté l'euro dès son lancement (1999, pièces et billets en 2002).\n\n" +
      "Grandes figures : Miguel de Cervantes (Don Quijote, 1605 et 1615) ; Diego Velázquez (Las Meninas, Museo del Prado) ; Francisco de Goya ; Pablo Picasso (Guernica, 1937, Museo Reina Sofía) ; Salvador Dalí ; Frida Kahlo (Mexique) ; Federico García Lorca ; Pedro Almodóvar ; prix Nobel de littérature : Gabriela Mistral (Chili, 1945), Pablo Neruda (Chili, 1971), Gabriel García Márquez (Colombie, 1982, Cien años de soledad), Octavio Paz (Mexique, 1990), Mario Vargas Llosa (Pérou, 2010).\n\n" +
      "Fêtes : Fiesta Nacional de España le 12 octobre ; Las Fallas de Valencia (mars) ; la Semana Santa ; la Feria de Abril de Séville ; San Fermín à Pampelune (juillet) ; la Tomatina de Buñol (août) ; le Día de Muertos au Mexique (1er et 2 novembre, patrimoine immatériel de l'UNESCO).",
    formules:
      "Constitution : 1978 ; monarchie parlementaire ; roi Felipe VI depuis 2014\n" +
      "Cortes Generales = Congreso de los Diputados + Senado\n" +
      "17 communautés autonomes + 2 villes autonomes (Ceuta, Melilla)\n" +
      "CEE : 1986 ; euro : 1999 (2002 en espèces)\n" +
      "Guernica : Picasso, 1937, Museo Reina Sofía ; Las Meninas : Velázquez, Museo del Prado\n" +
      "Fiesta Nacional : 12 de octubre",
    methode:
      "1. Classe chaque fait dans une fiche : pays, institutions, arts, littérature, fêtes.\n" +
      "2. Associe toujours une date ou un lieu à un nom.\n" +
      "3. Au concours, élimine d'abord les options d'un autre pays ou d'un autre siècle.\n" +
      "4. Méfie-toi des confusions classiques : chef de l'État / chef du gouvernement, Prado / Reina Sofía.",
    exemple:
      "« ¿Quién es el jefe del Estado en España? »\n" +
      "L'Espagne est une monarchie parlementaire : le chef de l'État est le roi (Felipe VI). Le président du gouvernement dirige l'exécutif mais n'est pas chef de l'État.",
    erreur:
      "✗ Le président du gouvernement est chef de l'État → ✓ Le roi est chef de l'État.\n" +
      "✗ Guernica est au Prado → ✓ Guernica est au Museo Reina Sofía.\n" +
      "✗ L'Espagne a 19 communautés autonomes → ✓ 17 communautés et 2 villes autonomes.\n" +
      "✗ Le Brésil est hispanophone → ✓ On y parle portugais.\n" +
      "✗ Le 12 octobre fête la Constitution → ✓ La Constitution se fête le 6 décembre.",
    approfondir:
      "Le 12 octobre, appelé aussi Día de la Hispanidad, commémore l'arrivée de Christophe Colomb en Amérique en 1492. Plusieurs pays latino-américains lui ont donné un autre nom (Día del Respeto a la Diversidad Cultural en Argentine, par exemple).\n\n" +
      "Les questions de culture sont souvent des points rapides ou perdus : n'y passe pas plus de 20 secondes et reviens sur la grammaire.",
    cards: [
      ["Chef de l'État espagnol", "le roi Felipe VI (depuis 2014)", false],
      ["Cortes Generales", "Congreso de los Diputados + Senado", true],
      ["Guernica", "Picasso, 1937, Museo Reina Sofía", false],
      ["Capitale de la Colombie", "Bogotá", false],
      ["Entrée de l'Espagne dans la CEE", "1986", false],
    ],
  },
];

export const QUESTIONS_LEXIQUE: BankQuestion[] = [
  // ---------- es.vocab ----------
  Q("B-ES-VOC-001", "es.vocab", "es.vocab.fauxamis", 1, "Completa la frase : « El camino es muy ___ : tardaremos tres horas en recorrerlo. »", [
    ["largo", true, "Largo = long."],
    ["ancho", false, "Ancho = large : sans lien avec la durée du trajet."],
    ["amplio", false, "Amplio = vaste, spacieux."],
    ["estrecho", false, "Estrecho = étroit."],
  ], "Trois heures de marche : le chemin est long → largo. Le faux-ami « large » se dit ancho.", "Largo = long ; ancho = large.", [
    "La phrase parle de durée.",
    "Le mot ressemble au français mais n'a pas le même sens.",
    "Il faut l'adjectif de la longueur.",
  ]),
  Q("B-ES-VOC-002", "es.vocab", "es.vocab.fauxamis", 1, "« Puse los documentos en una carpeta azul. » Una « carpeta » es :", [
    ["une chemise, un classeur", true, "Carpeta = chemise, classeur (ou dossier informatique)."],
    ["une carpette", false, "Faux-ami : un tapis se dit alfombra."],
    ["un cartable", false, "Un cartable se dit cartera ou mochila."],
    ["une enveloppe", false, "Une enveloppe se dit sobre."],
  ], "On range des documents dans une carpeta : une chemise, un classeur.", "Carpeta = chemise, classeur.", [
    "On y range des documents.",
    "Le mot ressemble à un mot français trompeur.",
    "Objet de bureau en carton ou en plastique.",
  ]),
  Q("B-ES-VOC-003", "es.vocab", "es.vocab.fauxamis", 1, "« Tengo que contestar este correo antes de las cinco. » ¿Qué significa « contestar »?", [
    ["répondre", true, "Contestar = répondre."],
    ["contester", false, "Faux-ami : contester = protestar, impugnar."],
    ["consulter", false, "Consulter = consultar."],
    ["transférer", false, "Transférer = reenviar."],
  ], "On « contesta » un courriel : on y répond.", "Contestar = répondre.", [
    "Que fait-on d'un courriel avant cinq heures ?",
    "Le sens n'est pas celui du mot français voisin.",
    "Synonyme de responder.",
  ]),
  Q("B-ES-VOC-004", "es.vocab", "es.vocab.fauxamis", 2, "Completa la frase (= gênée) : « Ana está muy ___ porque se equivocó delante de toda la clase. »", [
    ["avergonzada", true, "Avergonzada = gênée, honteuse."],
    ["embarazada", false, "Faux-ami : embarazada = enceinte."],
    ["embarazosa", false, "Embarazoso qualifie une situation gênante, pas une personne."],
    ["constipada", false, "Constipada = enrhumée."],
  ], "La gêne ressentie par une personne se dit avergonzado / avergonzada.", "Gêné(e) = avergonzado(a), pas embarazada.", [
    "Ana a honte de son erreur.",
    "Le mot français « embarrassée » est un piège.",
    "Le mot contient vergüenza.",
  ]),
  Q("B-ES-VOC-005", "es.vocab", "es.vocab.fauxamis", 1, "« ¡Este gazpacho está exquisito! » Le locuteur trouve le gazpacho :", [
    ["délicieux", true, "Exquisito = délicieux, excellent au goût."],
    ["exotique", false, "Exotique = exótico."],
    ["trop épicé", false, "Épicé = picante."],
    ["trop froid", false, "Froid = frío."],
  ], "Exquisito qualifie un plat excellent : délicieux.", "Exquisito = délicieux.", [
    "La phrase est exclamative et positive.",
    "Le locuteur goûte un plat.",
    "C'est un compliment.",
  ]),
  Q("B-ES-VOC-006", "es.vocab", "es.vocab.travail", 2, "Completa la frase (= licencié) : « Con la crisis, la fábrica ha ___ a un tercio de su plantilla. »", [
    ["despedido", true, "Despedir = licencier."],
    ["jubilado", false, "Jubilar = mettre à la retraite."],
    ["contratado", false, "Contratar = embaucher : sens contraire."],
    ["ascendido", false, "Ascender = promouvoir."],
  ], "La crise pousse l'usine à se séparer de salariés : despedir.", "Despedir = licencier ; contratar = embaucher.", [
    "Effet de la crise sur le personnel.",
    "Plantilla = l'ensemble des salariés.",
    "Le verbe signifie aussi « dire au revoir ».",
  ]),
  Q("B-ES-VOC-007", "es.vocab", "es.vocab.travail", 2, "« La tasa de paro ha bajado este trimestre. » ¿Qué significa « paro »?", [
    ["le chômage", true, "Paro = chômage (desempleo)."],
    ["la grève", false, "La grève = la huelga."],
    ["la paie", false, "La paie = el sueldo, la nómina."],
    ["la production", false, "La production = la producción."],
  ], "La tasa de paro est le taux de chômage.", "Paro = chômage ; huelga = grève.", [
    "On parle d'un taux qui baisse.",
    "Indicateur économique classique.",
    "Synonyme de desempleo.",
  ]),
  Q("B-ES-VOC-008", "es.vocab", "es.vocab.travail", 2, "Completa la frase : « Los trabajadores del metro están en ___ desde el lunes para pedir mejores salarios. »", [
    ["huelga", true, "Estar en huelga = être en grève."],
    ["sindicato", false, "Le syndicat organise la grève, on n'est pas « en syndicat »."],
    ["despido", false, "Despido = licenciement."],
    ["plantilla", false, "Plantilla = personnel."],
  ], "Arrêter le travail pour revendiquer : estar en huelga.", "Huelga = grève.", [
    "Les salariés revendiquent.",
    "Ils cessent le travail.",
    "Mot qui commence par h.",
  ], { reserved: true }),
  Q("B-ES-VOC-009", "es.vocab", "es.vocab.economie", 2, "¿Cómo se dice « budget » en español?", [
    ["el presupuesto", true, "Presupuesto = budget (ou devis)."],
    ["el balance", false, "Balance = bilan."],
    ["la factura", false, "Factura = facture."],
    ["el beneficio", false, "Beneficio = bénéfice."],
  ], "Le budget d'un État ou d'une entreprise : el presupuesto.", "Presupuesto = budget.", [
    "Vocabulaire de l'économie.",
    "Le mot signifie aussi « devis ».",
    "Il contient « supuesto ».",
  ]),
  Q("B-ES-VOC-010", "es.vocab", "es.vocab.travail", 2, "« El nuevo becario empieza el lunes en el departamento de marketing. » Un « becario » es :", [
    ["un stagiaire", true, "Becario = stagiaire ou boursier."],
    ["un directeur", false, "Directeur = director."],
    ["un retraité", false, "Retraité = jubilado."],
    ["un travailleur indépendant", false, "Indépendant = autónomo."],
  ], "Un becario est un étudiant en stage ou un boursier (de beca, bourse).", "Becario = stagiaire, boursier.", [
    "Il arrive dans l'entreprise.",
    "Le mot vient de beca (bourse).",
    "Profil souvent étudiant.",
  ]),
  Q("B-ES-VOC-011", "es.vocab", "es.vocab.fauxamis", 3, "En un periódico español, la sección « Sucesos » trata de :", [
    ["les faits divers", true, "Suceso = fait divers, événement."],
    ["les réussites des entreprises", false, "Faux-ami : succès = éxito."],
    ["les sorties culturelles", false, "Sorties = salidas, ocio."],
    ["les décès", false, "Avis de décès = esquelas."],
  ], "Les sucesos rapportent accidents, vols, crimes : les faits divers.", "Suceso = fait divers ; éxito = succès.", [
    "Le mot ressemble à « succès ».",
    "C'est un faux-ami.",
    "Rubrique des accidents et des vols.",
  ], { reserved: true }),

  // ---------- es.ortho ----------
  Q("B-ES-ORT-001", "es.ortho", "es.ortho.tilde", 1, "¿Qué palabra está bien escrita?", [
    ["árbol", true, "Terminé par l, accentué sur l'avant-dernière : tilde."],
    ["relój", false, "Terminé par j, accentué sur la dernière : pas de tilde (reloj)."],
    ["ciudád", false, "Terminé par d, accentué sur la dernière : pas de tilde (ciudad)."],
    ["jovén", false, "Terminé par n, accentué sur l'avant-dernière : pas de tilde (joven)."],
  ], "Árbol se termine par une consonne autre que n ou s mais se prononce ÁR-bol : il faut une tilde.", "Consonne finale (sauf n, s) + accent sur l'avant-dernière → tilde.", [
    "Prononce chaque mot.",
    "Regarde la dernière lettre.",
    "La tilde apparaît quand la prononciation contredit la règle.",
  ]),
  Q("B-ES-ORT-002", "es.ortho", "es.ortho.tilde", 2, "Elige el plural correcto de « examen ».", [
    ["exámenes", true, "e-XÁ-me-nes : esdrújula, tilde obligatoire."],
    ["examenes", false, "Il manque la tilde de l'esdrújula."],
    ["exámens", false, "Le pluriel d'un mot en -n se fait en -es."],
    ["examénes", false, "La syllabe tonique est xa, pas me."],
  ], "Le pluriel ajoute une syllabe ; la syllabe tonique (xa) devient l'antépénultième : exámenes.", "Examen → exámenes ; joven → jóvenes.", [
    "Comment forme-t-on le pluriel d'un mot en -n ?",
    "Compte les syllabes du pluriel.",
    "La syllabe tonique ne change pas.",
  ]),
  Q("B-ES-ORT-003", "es.ortho", "es.ortho.diacritique", 1, "Completa la frase : « ¿Este es ___ libro o el de tu hermano? »", [
    ["tu", true, "Possessif : sans accent."],
    ["tú", false, "Tú avec accent est le pronom sujet."],
    ["te", false, "Te est un pronom complément."],
    ["ti", false, "Ti s'emploie après une préposition."],
  ], "Devant un nom, tu est un possessif (ton) et ne porte pas d'accent.", "tu libro (possessif) / tú eres (pronom).", [
    "Le mot précède un nom.",
    "Possessif ou pronom ?",
    "Le possessif n'a pas d'accent.",
  ]),
  Q("B-ES-ORT-004", "es.ortho", "es.ortho.interrogatifs", 2, "Completa la frase : « No sé ___ hacer este fin de semana. »", [
    ["qué", true, "Interrogation indirecte : accent."],
    ["que", false, "Que sans accent est relatif ou conjonction."],
    ["cual", false, "Cuál interrogatif porterait un accent et ne convient pas ici."],
    ["porque", false, "Porque introduit une cause."],
  ], "No sé qué hacer contient une question indirecte (¿qué hago?) : qué prend un accent.", "Interrogation directe ou indirecte → qué, cómo, dónde…", [
    "La phrase contient une question cachée.",
    "Quelle question se pose le locuteur ?",
    "Les interrogatifs gardent leur accent.",
  ], { anchor: "erreur" }),
  Q("B-ES-ORT-005", "es.ortho", "es.ortho.diacritique", 1, "Completa la frase (= si tu me le demandes) : « ___ me lo pides, te ayudo. »", [
    ["Si", true, "Conjonction de condition : sans accent."],
    ["Sí", false, "Sí avec accent = oui ou soi."],
    ["Se", false, "Pronom."],
    ["Sé", false, "Verbe saber ou ser."],
  ], "La condition s'exprime avec si, sans accent.", "si (condition) / sí (oui).", [
    "La phrase exprime une condition.",
    "Deux graphies existent pour ce mot.",
    "La conjonction ne porte pas d'accent.",
  ]),
  Q("B-ES-ORT-006", "es.ortho", "es.ortho.apocope", 1, "Completa la frase : « Hoy hace un ___ día para ir a la playa. »", [
    ["buen", true, "Bueno devant un nom masculin singulier → buen."],
    ["bueno", false, "Oubli de l'apocope."],
    ["buena", false, "Día est masculin."],
    ["bien", false, "Bien est un adverbe."],
  ], "Devant un nom masculin singulier, bueno perd son -o : un buen día.", "buen día, mal tiempo, primer piso.", [
    "L'adjectif est placé avant le nom.",
    "Día est masculin singulier.",
    "L'adjectif perd une lettre.",
  ]),
  Q("B-ES-ORT-007", "es.ortho", "es.ortho.apocope", 2, "Completa la frase : « Mis primos viven en el ___ piso, a la derecha. »", [
    ["primer", true, "Primero devant un nom masculin singulier → primer."],
    ["primero", false, "Oubli de l'apocope."],
    ["primo", false, "Primo = cousin."],
    ["primera", false, "Piso est masculin."],
  ], "Primero perd son -o devant un nom masculin singulier : el primer piso.", "Primero → primer, tercero → tercer.", [
    "Adjectif ordinal avant le nom.",
    "Piso est masculin singulier.",
    "Même règle que bueno.",
  ]),
  Q("B-ES-ORT-008", "es.ortho", "es.ortho.apocope", 2, "Completa la frase : « Buenos Aires es una ___ ciudad con mucha vida cultural. »", [
    ["gran", true, "Grande devant tout nom singulier → gran."],
    ["grande", false, "Oubli de l'apocope devant le nom."],
    ["granda", false, "Grande est invariable en genre."],
    ["grand", false, "Calque du français."],
  ], "Devant un nom singulier, masculin ou féminin, grande devient gran : una gran ciudad.", "Gran + nom singulier (masculin ou féminin).", [
    "L'adjectif précède le nom.",
    "Ciudad est féminin, mais la règle vaut aussi pour lui.",
    "Grande perd une syllabe.",
  ]),
  Q("B-ES-ORT-009", "es.ortho", "es.ortho.diacritique", 3, "Elige la frase correctamente acentuada.", [
    ["Él no sabe si vendrá mañana.", true, "Él pronom accentué, si conjonction sans accent, vendrá aigu en -a."],
    ["El no sabe sí vendrá mañana.", false, "El sans accent est l'article ; sí avec accent signifie oui."],
    ["Él no sabe sí vendra mañana.", false, "Sí fautif et vendrá sans accent."],
    ["El no sabe si vendrá mañana.", false, "Le pronom sujet él doit porter un accent."],
  ], "Él (pronom) ≠ el (article) ; si (condition, interrogation indirecte) ≠ sí (oui) ; vendrá est un mot aigu terminé par une voyelle : tilde.", "él / el ; si / sí.", [
    "Trois mots à vérifier.",
    "Le premier mot est un pronom sujet.",
    "Le deuxième introduit une question indirecte totale.",
  ], { reserved: true }),
  Q("B-ES-ORT-010", "es.ortho", "es.ortho.apocope", 2, "Completa la frase (100) : « La entrada al museo cuesta ___ euros para los grupos. »", [
    ["cien", true, "Ciento devant un nom → cien."],
    ["ciento", false, "Ciento s'emploie devant un autre nombre (ciento veinte)."],
    ["cientos", false, "Cientos = des centaines."],
    ["un ciento", false, "Calque fautif."],
  ], "Devant un nom (et devant mil, millones), ciento devient cien.", "Cien euros ; ciento veinte euros.", [
    "Le nombre précède un nom.",
    "Ciento a une forme courte.",
    "Pense à « cien años de soledad ».",
  ]),
  Q("B-ES-ORT-011", "es.ortho", "es.ortho.diacritique", 3, "¿En qué frase está bien empleada la palabra « aún »?", [
    ["Aún no ha llegado el autobús.", true, "Aún = todavía (encore) : accent."],
    ["Aún los expertos se equivocan a veces.", false, "Ici, aun = incluso (même) : sans accent."],
    ["Ni aún así aceptó la propuesta.", false, "Aun así = même ainsi : sans accent."],
    ["Aún cuando llueva, saldremos.", false, "Aun cuando = même si : sans accent."],
  ], "Aún porte un accent quand il peut être remplacé par todavía ; aun (= incluso, même) n'en porte pas.", "aún = todavía ; aun = incluso.", [
    "Essaie de remplacer par todavía.",
    "Essaie ensuite incluso.",
    "Une seule phrase accepte todavía.",
  ], { reserved: true }),

  // ---------- es.culture ----------
  Q("B-ES-CUL-001", "es.culture", "es.culture.pays", 1, "¿Cuál es la capital de Colombia?", [
    ["Bogotá", true, "Capitale de la Colombie."],
    ["Medellín", false, "Deuxième ville du pays, pas la capitale."],
    ["Cartagena", false, "Ville côtière des Caraïbes."],
    ["Caracas", false, "Capitale du Venezuela."],
  ], "Bogotá est la capitale de la Colombie.", "Colombie → Bogotá.", [
    "Pays andin.",
    "Ville en altitude.",
    "Commence par B.",
  ]),
  Q("B-ES-CUL-002", "es.culture", "es.culture.arts", 1, "¿Quién pintó « Guernica » en 1937?", [
    ["Pablo Picasso", true, "Guernica, 1937, Museo Reina Sofía."],
    ["Salvador Dalí", false, "Peintre surréaliste, auteur de La persistencia de la memoria."],
    ["Joan Miró", false, "Peintre catalan, non auteur de Guernica."],
    ["Diego Velázquez", false, "Peintre du XVIIe siècle (Las Meninas)."],
  ], "Picasso peint Guernica en 1937 après le bombardement de la ville basque pendant la guerre civile.", "Guernica = Picasso, 1937.", [
    "Œuvre liée à la guerre civile.",
    "Le peintre est né à Málaga.",
    "Cofondateur du cubisme.",
  ]),
  Q("B-ES-CUL-003", "es.culture", "es.culture.institutions", 1, "Según la Constitución de 1978, España es…", [
    ["una monarquía parlamentaria", true, "Article 1 de la Constitution."],
    ["una república federal", false, "L'Espagne n'est ni une république ni un État fédéral."],
    ["una monarquía absoluta", false, "Le pouvoir du roi est encadré par la Constitution."],
    ["una república presidencial", false, "L'Espagne a un roi."],
  ], "La Constitution de 1978 définit la forme politique de l'État espagnol comme une monarchie parlementaire.", "España = monarquía parlamentaria.", [
    "L'Espagne a un roi.",
    "Le gouvernement est responsable devant le Parlement.",
    "Deux mots : régime + adjectif.",
  ]),
  Q("B-ES-CUL-004", "es.culture", "es.culture.institutions", 2, "Las Cortes Generales españolas están formadas por…", [
    ["el Congreso de los Diputados y el Senado", true, "Les deux chambres du Parlement espagnol."],
    ["la Asamblea Nacional y el Senado", false, "Calque du Parlement français."],
    ["el Congreso y el Tribunal Constitucional", false, "Le Tribunal constitutionnel n'est pas une chambre."],
    ["el Gobierno y el Consejo de Estado", false, "Organes exécutif et consultatif."],
  ], "Les Cortes Generales sont bicamérales : Congreso de los Diputados et Senado.", "Cortes = Congreso + Senado.", [
    "Le Parlement espagnol a deux chambres.",
    "La chambre basse est un « congrès ».",
    "La chambre haute porte le même nom qu'en France.",
  ]),
  Q("B-ES-CUL-005", "es.culture", "es.culture.histoire", 2, "¿En qué año entró España en la Comunidad Económica Europea?", [
    ["1986", true, "Adhésion le 1er janvier 1986, avec le Portugal."],
    ["1975", false, "Année de la mort de Franco."],
    ["1978", false, "Année de la Constitution."],
    ["1992", false, "Année des Jeux olympiques de Barcelone et de l'Exposition de Séville."],
  ], "L'Espagne et le Portugal rejoignent la CEE le 1er janvier 1986.", "España en la CEE : 1986.", [
    "Après la Transition démocratique.",
    "En même temps que le Portugal.",
    "Milieu des années 1980.",
  ]),
  Q("B-ES-CUL-006", "es.culture", "es.culture.litterature", 2, "¿Qué escritor colombiano recibió el Premio Nobel de Literatura en 1982?", [
    ["Gabriel García Márquez", true, "Auteur de Cien años de soledad."],
    ["Mario Vargas Llosa", false, "Écrivain péruvien, Nobel 2010."],
    ["Pablo Neruda", false, "Poète chilien, Nobel 1971."],
    ["Jorge Luis Borges", false, "Écrivain argentin, jamais lauréat du Nobel."],
  ], "Gabriel García Márquez, figure du réalisme magique, reçoit le Nobel en 1982.", "García Márquez : Colombie, Nobel 1982.", [
    "Auteur de Cien años de soledad.",
    "Figure du réalisme magique.",
    "Surnommé « Gabo ».",
  ]),
  Q("B-ES-CUL-007", "es.culture", "es.culture.fetes", 1, "¿Qué fiesta mexicana honra a los difuntos el 1 y el 2 de noviembre?", [
    ["el Día de Muertos", true, "Fête mexicaine inscrite au patrimoine immatériel de l'UNESCO."],
    ["las Fallas", false, "Fête valencienne de mars."],
    ["San Fermín", false, "Fête de Pampelune en juillet."],
    ["la Tomatina", false, "Fête de Buñol en août."],
  ], "Le Día de Muertos célèbre les défunts avec des autels (ofrendas), des calaveras et des fleurs de cempasúchil.", "Día de Muertos : Mexique, 1er et 2 novembre.", [
    "Fête du Mexique.",
    "Elle a lieu en même temps que la Toussaint.",
    "Son nom évoque les morts.",
  ]),
  Q("B-ES-CUL-008", "es.culture", "es.culture.institutions", 2, "¿Cuántas comunidades autónomas tiene España?", [
    ["17", true, "17 communautés autonomes, plus 2 villes autonomes."],
    ["19", false, "Confusion avec le total communautés + villes autonomes (Ceuta et Melilla)."],
    ["15", false, "Chiffre inexact."],
    ["50", false, "Nombre de provinces, pas de communautés autonomes."],
  ], "L'Espagne compte 17 communautés autonomes et 2 villes autonomes (Ceuta et Melilla).", "17 comunidades + 2 ciudades autónomas.", [
    "Ne compte pas Ceuta et Melilla.",
    "Les provinces sont bien plus nombreuses.",
    "Un nombre entre 15 et 19.",
  ], { reserved: true }),
  Q("B-ES-CUL-009", "es.culture", "es.culture.institutions", 3, "¿Quién es el jefe del Estado en España desde 2014?", [
    ["el rey Felipe VI", true, "Roi depuis l'abdication de Juan Carlos Ier en 2014."],
    ["el rey Juan Carlos I", false, "Il a abdiqué en 2014."],
    ["el presidente del Gobierno", false, "Il dirige l'exécutif mais n'est pas chef de l'État."],
    ["el presidente del Congreso", false, "Il préside la chambre basse."],
  ], "Dans une monarchie parlementaire, le chef de l'État est le roi : Felipe VI depuis juin 2014.", "Jefe del Estado = el rey ; jefe del Gobierno = el presidente del Gobierno.", [
    "L'Espagne est une monarchie.",
    "Un changement a eu lieu en 2014.",
    "Ne confonds pas chef de l'État et chef du gouvernement.",
  ], { reserved: true, anchor: "exemple" }),
  Q("B-ES-CUL-010", "es.culture", "es.culture.arts", 2, "¿En qué museo se puede ver « Las Meninas » de Velázquez?", [
    ["en el Museo del Prado (Madrid)", true, "Chef-d'œuvre conservé au Prado."],
    ["en el Museo Reina Sofía (Madrid)", false, "Le Reina Sofía conserve Guernica."],
    ["en el Museo Guggenheim (Bilbao)", false, "Musée d'art contemporain."],
    ["en el Museo del Louvre (París)", false, "Las Meninas n'est pas en France."],
  ], "Las Meninas (1656) est l'œuvre emblématique du Museo del Prado.", "Las Meninas → Prado ; Guernica → Reina Sofía.", [
    "Œuvre du XVIIe siècle.",
    "Grand musée de peinture ancienne à Madrid.",
    "Pas le musée de Guernica.",
  ], { anchor: "erreur" }),
  Q("B-ES-CUL-011", "es.culture", "es.culture.fetes", 2, "¿Qué día se celebra la Fiesta Nacional de España?", [
    ["el 12 de octubre", true, "Fiesta Nacional, ou Día de la Hispanidad."],
    ["el 6 de diciembre", false, "Día de la Constitución."],
    ["el 2 de mayo", false, "Fête de la Communauté de Madrid."],
    ["el 14 de julio", false, "Calque de la fête nationale française."],
  ], "La Fiesta Nacional de España a lieu le 12 octobre, en souvenir de l'arrivée de Colomb en Amérique (1492).", "Fiesta Nacional = 12 de octubre.", [
    "Date liée à 1492.",
    "Arrivée de Colomb en Amérique.",
    "Mois d'automne.",
  ]),
  Q("B-ES-CUL-012", "es.culture", "es.culture.institutions", 2, "¿Qué lista contiene solo lenguas cooficiales en alguna comunidad autónoma española?", [
    ["el catalán, el gallego y el euskera", true, "Langues co-officielles dans leurs communautés."],
    ["el portugués, el catalán y el gallego", false, "Le portugais n'est pas co-officiel en Espagne."],
    ["el occitano, el bretón y el euskera", false, "Le breton est une langue de France (l'occitan, lui, est co-officiel en Catalogne sous le nom d'aranais)."],
    ["el andaluz, el catalán y el gallego", false, "L'andalou est une variété de l'espagnol, pas une langue co-officielle."],
  ], "Le castillan est la langue officielle de l'État ; le catalan (valencien), le galicien et le basque sont co-officiels dans leurs communautés.", "Cooficiales : catalán, gallego, euskera.", [
    "Pense à la Catalogne, à la Galice et au Pays basque.",
    "Élimine les langues d'autres pays.",
    "Élimine les variétés régionales de l'espagnol.",
  ]),
];
