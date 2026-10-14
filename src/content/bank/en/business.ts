import { E, skill, type EnPart } from "./common";

const S = "en.business";

export const BUSINESS: EnPart = {
  skill: skill(S, "Vocabulaire", "Vocabulaire business, économie et médias", ["business", "economie", "entreprise", "turnover", "revenue", "shareholder", "layoff", "hire", "supply chain", "medias", "numerique"]),
  lesson: {
    skillId: S,
    title: "Vocabulaire de l'entreprise, de l'économie et des médias",
    objectives: ["Maîtriser le vocabulaire de base de l'entreprise et de la finance", "Éviter les calques du français (bénéfice, postuler, conseil d'administration)", "Comprendre le vocabulaire des médias et du numérique"],
    prerequisites: ["en.vocab"],
    regle:
      "Le concours vise un public d'écoles de commerce : le vocabulaire de l'entreprise y est fréquent, dans les questions de vocabulaire comme dans les textes de compréhension.\n\n" +
      "Résultats d'une entreprise. Turnover (britannique) ou revenue / sales : chiffre d'affaires. Profit : bénéfice ; net profit : bénéfice net ; loss : perte. Attention, benefit signifie avantage (fringe benefits = avantages en nature, unemployment benefit = allocation chômage), pas bénéfice comptable. Growth : croissance ; a rise / an increase in : une hausse de ; a fall / a decrease in : une baisse de. Interest rate : taux d'intérêt.\n\n" +
      "Acteurs. Shareholder (ou stockholder) : actionnaire ; stakeholder : partie prenante ; board of directors : conseil d'administration ; CEO (chief executive officer) : PDG, directeur général ; supplier : fournisseur ; customer : client (d'un commerce) ; client : client (d'un service, d'un cabinet) ; competitor : concurrent ; entrepreneur : créateur d'entreprise (undertaker = croque-mort).\n\n" +
      "Emploi. Hire / recruit / take on : embaucher ; apply for a job : postuler (jamais « postulate ») ; an applicant : un candidat ; a job interview : un entretien ; a CV (GB) / a résumé (US) ; lay off : licencier pour raisons économiques (a layoff) ; fire / sack : renvoyer pour faute ; resign : démissionner ; workforce, staff : personnel (staff est indénombrable ou collectif) ; wages (salaire horaire ou hebdomadaire), salary (salaire mensuel ou annuel) ; go on strike : faire grève ; a trade union : un syndicat.\n\n" +
      "Production et commerce. Supply chain : chaîne d'approvisionnement ; a plant / a factory : une usine ; goods : marchandises ; shipping : expédition ; a merger : une fusion ; a takeover : un rachat ; a start-up ; outsourcing : externalisation.\n\n" +
      "Médias et numérique. Headline : gros titre ; a newspaper / a broadcaster ; fake news ; go viral : se propager massivement en ligne ; an influencer ; a social network ; data : données ; a data breach : une fuite de données ; a subscriber : un abonné ; a download : un téléchargement.",
    formules:
      "chiffre d'affaires = turnover (GB), revenue, sales\n" +
      "bénéfice = profit ; avantage = benefit\n" +
      "actionnaire = shareholder ; partie prenante = stakeholder\n" +
      "conseil d'administration = board of directors\n" +
      "PDG = CEO ; fournisseur = supplier ; concurrent = competitor\n" +
      "postuler = apply for ; un candidat = an applicant\n" +
      "embaucher = hire, recruit, take on ; licencier = lay off\n" +
      "personnel = staff, workforce ; faire grève = go on strike\n" +
      "chaîne d'approvisionnement = supply chain ; fusion = merger ; rachat = takeover\n" +
      "taux d'intérêt = interest rate ; devenir viral = go viral",
    methode:
      "1. Identifie le domaine de la phrase : finance, emploi, production, médias.\n" +
      "2. Traduis l'idée en français précis (bénéfice ou chiffre d'affaires ? embaucher ou licencier ?).\n" +
      "3. Écarte les calques : benefit, postulate, personal, council of administration.\n" +
      "4. Vérifie la cohérence avec les chiffres ou les faits de la phrase.",
    exemple:
      "« The company's ___ rose by 8%, but its net profit fell. » La phrase oppose deux grandeurs : ce qui augmente n'est pas le bénéfice (profit), puisque celui-ci baisse. C'est le chiffre d'affaires : revenue (ou turnover). Benefit est un calque de « bénéfice ».\n\n" +
      "« She sent her CV to ___ for the position. » Postuler à un poste : apply for. Postulate signifie poser comme principe.",
    erreur:
      "✗ The company made a benefit of 2 million → ✓ The company made a profit of 2 million\n" +
      "✗ I postulated for the job → ✓ I applied for the job\n" +
      "✗ The council of administration → ✓ The board of directors\n" +
      "✗ The personal of the company → ✓ The staff of the company\n" +
      "✗ The workers made strike → ✓ The workers went on strike",
    approfondir:
      "Revenue et turnover sont synonymes au sens de chiffre d'affaires ; en anglais britannique, turnover peut aussi désigner la rotation du personnel (staff turnover). Le contexte tranche.\n\n" +
      "Billion signifie un milliard (10 puissance 9) : a turnover of 3 billion dollars = 3 milliards de dollars. Voir la compétence nombres.\n\n" +
      "Gestion du temps : lis la presse économique anglophone quelques minutes par semaine en relevant cinq mots ; ce vocabulaire revient aussi dans les textes de compréhension et en enjeux contemporains.",
    cards: [
      ["Chiffre d'affaires", "turnover (GB) / revenue", true],
      ["Bénéfice", "profit (benefit = avantage)", true],
      ["Postuler à un poste", "apply for a job", true],
      ["Conseil d'administration", "board of directors", true],
      ["Actionnaire", "shareholder", true],
      ["Licencier (économique)", "lay off", true],
    ],
  },
  questions: [
    E("B-EN-BUS-001", S, "en.bus.finance", 1, "Which English word means « chiffre d'affaires »?", [
      ["turnover", true, "Turnover (britannique) = chiffre d'affaires."],
      ["profit", false, "Profit = bénéfice, pas chiffre d'affaires."],
      ["business number", false, "Calque mot à mot sans existence en anglais."],
      ["figure of affairs", false, "Calque mot à mot sans existence en anglais."],
    ], "Le chiffre d'affaires se dit turnover en anglais britannique, revenue ou sales en anglais américain.", "chiffre d'affaires = turnover / revenue / sales.", [
      "Ne traduis pas mot à mot.",
      "Le chiffre d'affaires n'est pas le bénéfice.",
      "Le mot évoque ce qui « tourne » dans l'entreprise.",
    ]),
    E("B-EN-BUS-002", S, "en.bus.finance", 2, "Complete the sentence: « The company's ___ rose by 8% last year, but its net profit fell. »", [
      ["revenue", true, "Revenue = chiffre d'affaires, qui peut augmenter quand le bénéfice baisse."],
      ["benefit", false, "Calque de « bénéfice » : benefit signifie avantage."],
      ["shareholders", false, "Les actionnaires ne « montent » pas de 8 % ; le verbe rose demande une grandeur."],
      ["layoff", false, "Layoff = licenciement, sans rapport avec une hausse en pourcentage de l'activité."],
    ], "Ce qui augmente alors que le bénéfice net baisse, c'est le chiffre d'affaires : revenue.", "revenue (chiffre d'affaires) ≠ profit (bénéfice) ; benefit = avantage.", [
      "La phrase oppose deux grandeurs financières.",
      "Ce n'est pas le bénéfice, puisqu'il baisse.",
      "Il s'agit des ventes totales.",
    ], { a: "exemple" }),
    E("B-EN-BUS-003", S, "en.bus.actors", 1, "Complete the sentence: « A ___ owns shares in a company and may receive dividends. »", [
      ["shareholder", true, "Shareholder = actionnaire."],
      ["stockbroker", false, "Stockbroker = courtier en bourse : il achète et vend pour d'autres."],
      ["supplier", false, "Supplier = fournisseur."],
      ["customer", false, "Customer = client."],
    ], "Celui qui détient des actions et touche des dividendes est un actionnaire : shareholder.", "shareholder = actionnaire ; stakeholder = partie prenante.", [
      "Qui détient des actions ?",
      "Le mot contient share (action).",
      "Share + holder.",
    ]),
    E("B-EN-BUS-004", S, "en.bus.jobs", 2, "Complete the sentence: « She sent her CV and a cover letter to ___ for the marketing position. »", [
      ["apply", true, "Apply for a job = postuler."],
      ["postulate", false, "Calque de « postuler » : postulate signifie poser comme hypothèse."],
      ["candidate", false, "Candidate est un nom, pas un verbe."],
      ["applicate", false, "Mot inexistant."],
    ], "Postuler à un poste : apply for a position.", "apply for a job ; an applicant = un candidat.", [
      "On cherche le verbe « postuler ».",
      "Postulate est un faux-ami.",
      "Le nom correspondant est application.",
    ], { a: "erreur" }),
    E("B-EN-BUS-005", S, "en.bus.jobs", 1, "Complete the sentence: « The company plans to ___ fifty new employees to cope with demand. »", [
      ["hire", true, "Hire = embaucher."],
      ["rent", false, "Rent = louer (un logement, un objet)."],
      ["lend", false, "Lend = prêter."],
      ["fire", false, "Fire = renvoyer, contraire du sens voulu (faire face à la demande)."],
    ], "Pour faire face à la demande, l'entreprise embauche : hire (ou recruit, take on).", "hire / recruit / take on = embaucher ; fire / lay off = renvoyer, licencier.", [
      "La demande augmente : que fait l'entreprise ?",
      "On cherche « embaucher ».",
      "Attention à rent et lend.",
    ]),
    E("B-EN-BUS-006", S, "en.bus.jobs", 2, "Complete the sentence: « After the merger, 300 employees lost their jobs; the ___ mainly affected the IT department. »", [
      ["layoffs", true, "Layoffs = licenciements économiques."],
      ["hirings", false, "Hiring signifie embauche, contraire du sens."],
      ["promotions", false, "Promotions = avancements, contraire de perdre son emploi."],
      ["resignations", false, "Resignations = démissions : les salariés partent d'eux-mêmes, ce qui contredit « lost their jobs » après une fusion."],
    ], "Des emplois supprimés après une fusion : des licenciements économiques, layoffs.", "a layoff = un licenciement économique (to lay off).", [
      "Les employés ont-ils choisi de partir ?",
      "On cherche « licenciements ».",
      "Le nom formé sur lay off.",
    ]),
    E("B-EN-BUS-007", S, "en.bus.actors", 2, "Complete the sentence: « The ___ meets every quarter to approve the company's strategy and accounts. »", [
      ["board of directors", true, "Board of directors = conseil d'administration."],
      ["council of administration", false, "Calque mot à mot de « conseil d'administration »."],
      ["administration council", false, "Calque sans existence en anglais des affaires."],
      ["direction board", false, "Calque sans existence en anglais des affaires."],
    ], "Le conseil d'administration se dit board of directors (ou simplement the board).", "conseil d'administration = board of directors.", [
      "Ne traduis pas mot à mot.",
      "Le mot clé est board.",
      "Board of… quoi ?",
    ], { a: "formules" }),
    E("B-EN-BUS-008", S, "en.bus.production", 2, "Complete the sentence: « Production stopped for a week because of problems in the ___: parts from Asia arrived late. »", [
      ["supply chain", true, "Supply chain = chaîne d'approvisionnement."],
      ["stock market", false, "Stock market = bourse, sans lien avec des pièces livrées en retard."],
      ["board of directors", false, "Le conseil d'administration ne livre pas de pièces."],
      ["chain store", false, "Chain store = magasin d'une chaîne."],
    ], "Des pièces qui arrivent en retard d'Asie : problème d'approvisionnement, supply chain.", "supply chain = chaîne d'approvisionnement ; supplier = fournisseur.", [
      "Qu'est-ce qui a posé problème ?",
      "Les pièces viennent de fournisseurs.",
      "Supply = approvisionner.",
    ]),
    E("B-EN-BUS-009", S, "en.bus.media", 2, "Complete the sentence: « The video ___ viral: ten million people watched it in two days. »", [
      ["went", true, "Go viral : se propager massivement en ligne."],
      ["made", false, "Make viral n'est pas la collocation."],
      ["did", false, "Do viral n'existe pas."],
      ["turned on", false, "Turn on signifie allumer."],
    ], "La collocation est go viral ; au prétérit : the video went viral.", "go viral = devenir viral.", [
      "Quel verbe accompagne viral ?",
      "Le même que dans go on strike.",
      "Au prétérit.",
    ]),
    E("B-EN-BUS-010", S, "en.bus.jobs", 2, "Complete the sentence: « Thousands of rail workers went on ___ to demand higher wages. »", [
      ["strike", true, "Go on strike : faire grève."],
      ["grief", false, "Grief = chagrin : faux-ami tentant pour grève."],
      ["demonstration", false, "Sans article, go on demonstration est incorrect (on dit go on a demonstration), et une manifestation n'est pas une grève."],
      ["protestation", false, "Protestation est rare en anglais et ne se combine pas avec go on."],
    ], "Faire grève : go on strike.", "go on strike = faire grève ; a striker = un gréviste.", [
      "Que font des salariés pour réclamer des hausses de salaire ?",
      "On cherche « grève ».",
      "Attention au faux-ami grief.",
    ]),
    E("B-EN-BUS-011", S, "en.bus.jobs", 3, "Complete the sentence: « The group's ___ fell by 2% last year: it now employs 4,800 people instead of 4,900. »", [
      ["workforce", true, "Workforce = effectif, ensemble du personnel."],
      ["personal", false, "Calque de « personnel » : personal est un adjectif (personnel, privé)."],
      ["manpowers", false, "Manpower est indénombrable : pas de -s."],
      ["workers force", false, "Forme inexistante."],
    ], "L'effectif d'une entreprise se dit workforce (ou staff, personnel avec deux n).", "workforce / staff = personnel ; personal = personnel (adjectif, privé).", [
      "On parle du nombre d'employés.",
      "Personal est un faux-ami.",
      "Work + force.",
    ], { r: true }),
    E("B-EN-BUS-012", S, "en.bus.finance", 3, "Complete the sentence: « The central bank raised ___ rates to bring inflation down. »", [
      ["interest", true, "Interest rate = taux d'intérêt."],
      ["interests", false, "Dans un nom composé, le premier nom reste au singulier."],
      ["profit", false, "Profit rate n'est pas l'outil d'une banque centrale."],
      ["benefit", false, "Benefit = avantage, allocation."],
    ], "Une banque centrale agit sur les taux d'intérêt : interest rates. Le premier nom d'un nom composé reste invariable.", "interest rate ; le premier nom d'un composé reste au singulier.", [
      "Quel outil utilise une banque centrale ?",
      "On cherche « taux d'intérêt ».",
      "Attention au pluriel dans un nom composé.",
    ], { r: true }),
  ],
};
