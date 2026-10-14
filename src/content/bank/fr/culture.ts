// Français : culture littéraire (de l'humanisme au XXe siècle).
import { maker, type FrPart } from "./_util";

const Q = maker("fr.culture");

export const CULTURE: FrPart = {
  skill: { id: "fr.culture", subjectCode: "FR", domain: "Culture de la langue", name: "Culture littéraire", synonyms: ["litterature", "auteurs", "oeuvres", "mouvements litteraires", "romantisme", "humanisme", "lumieres", "classicisme", "realisme", "naturalisme", "surrealisme"] },
  lesson: {
    skillId: "fr.culture",
    title: "Repères de culture littéraire : de l'humanisme au XXe siècle",
    objectives: ["Situer les grands mouvements littéraires dans le temps", "Associer les auteurs majeurs à leurs œuvres et à leur mouvement", "Repérer l'intrus dans une liste d'auteurs"],
    prerequisites: [],
    regle:
      "XVIe siècle, l'humanisme. Redécouverte des textes antiques, confiance en l'homme et en l'éducation. Rabelais (Pantagruel, Gargantua), Montaigne (les Essais). En poésie, la Pléiade, autour de Ronsard et de Du Bellay (Défense et illustration de la langue française, 1549 ; Les Regrets), veut enrichir la langue française.\n\nXVIIe siècle, le classicisme. Idéal d'ordre, de raison, de mesure, imitation des Anciens. Au théâtre, règle des trois unités (une action, un lieu, une journée), vraisemblance et bienséance. Tragédie : Corneille (Le Cid), Racine (Andromaque, Phèdre). Comédie : Molière (Tartuffe, L'Avare, Le Misanthrope). Fables de La Fontaine, Caractères de La Bruyère, Pensées de Pascal, La Princesse de Clèves de Mme de La Fayette.\n\nXVIIIe siècle, les Lumières. Combat de la raison contre les préjugés, l'intolérance et l'absolutisme. Montesquieu (Lettres persanes, De l'esprit des lois), Voltaire (Candide, contes philosophiques), Diderot et d'Alembert (l'Encyclopédie), Rousseau (Du contrat social, Les Confessions). Au théâtre, Marivaux et Beaumarchais (Le Mariage de Figaro).\n\nXIXe siècle. Le romantisme (environ 1820-1850) exalte le moi, la sensibilité, la nature et rompt avec les règles classiques : Lamartine (Méditations poétiques, 1820), Hugo (préface de Cromwell, Hernani en 1830, Les Contemplations, Les Misérables), Musset (Lorenzaccio), Vigny, Chateaubriand en précurseur. Le réalisme veut peindre la société telle qu'elle est : Balzac (La Comédie humaine), Stendhal (Le Rouge et le Noir), Flaubert (Madame Bovary). Le naturalisme pousse cette démarche avec une ambition scientifique : Zola (Les Rougon-Macquart, dont Germinal et L'Assommoir), Maupassant. En poésie, Baudelaire (Les Fleurs du mal, 1857) ouvre la modernité ; le Parnasse (Gautier, Leconte de Lisle) défend l'art pour l'art ; le symbolisme (Verlaine, Rimbaud, Mallarmé) cherche à suggérer plutôt qu'à décrire.\n\nXXe siècle. Proust (À la recherche du temps perdu), Apollinaire (Alcools). Le surréalisme, lancé par André Breton (Manifeste du surréalisme, 1924), avec Éluard et Aragon, explore le rêve et l'inconscient. L'existentialisme (Sartre, Beauvoir) et la pensée de l'absurde (Camus : L'Étranger, La Peste). Le théâtre de l'absurde (Ionesco, La Cantatrice chauve ; Beckett, En attendant Godot) et le Nouveau Roman (Robbe-Grillet, Sarraute). La négritude (Césaire, Senghor). Marguerite Yourcenar devient en 1980 la première femme élue à l'Académie française.",
    formules:
      "XVIe : humanisme et Pléiade : Rabelais, Montaigne, Ronsard, Du Bellay\nXVIIe : classicisme : Corneille, Racine, Molière, La Fontaine, La Bruyère, Pascal, Mme de La Fayette\nXVIIIe : Lumières : Montesquieu, Voltaire, Diderot, Rousseau ; Marivaux, Beaumarchais\n1820-1850 : romantisme : Lamartine, Hugo, Musset, Vigny\nRéalisme : Balzac, Stendhal, Flaubert ; naturalisme : Zola, Maupassant\nPoésie : Baudelaire ; Parnasse ; symbolisme : Verlaine, Rimbaud, Mallarmé\nXXe : surréalisme (Breton, Éluard, Aragon) ; existentialisme (Sartre, Beauvoir) ; absurde (Camus, Ionesco, Beckett) ; Nouveau Roman ; négritude (Césaire, Senghor)",
    methode:
      "1. Situe chaque auteur dans son siècle.\n2. Associe-le à un mouvement et à une œuvre phare.\n3. Pour trouver un intrus, cherche celui qui n'est pas du même siècle ou du même genre.\n4. Méfie-toi des associations proches : deux auteurs du même siècle peuvent appartenir à des mouvements différents (Hugo et Flaubert).\n5. Une date clé (1820, 1830, 1857, 1924) permet souvent de trancher.",
    exemple:
      "« Quel auteur n'appartient pas au XVIIIe siècle : Voltaire, Rousseau, Diderot, Racine ? » Voltaire, Rousseau et Diderot sont des philosophes des Lumières. Racine est un tragédien du XVIIe siècle classique. Réponse : Racine.\n\n« Madame Bovary relève-t-elle du romantisme ? » Le roman paraît en 1857 et peint la société de province sans idéalisation : il relève du réalisme, même si son héroïne nourrit des rêves romantiques que le roman critique.",
    erreur:
      "✗ Classer Baudelaire parmi les romantiques purs → ✓ il en hérite mais annonce la modernité et le symbolisme\n✗ Attribuer Germinal à Hugo parce qu'il parle de misère → ✓ Germinal est de Zola (naturalisme)\n✗ Placer Molière au XVIIIe siècle → ✓ XVIIe siècle classique\n✗ Confondre Les Misérables (Hugo) et La Comédie humaine (Balzac)\n✗ Croire que Camus est un auteur surréaliste → ✓ il est associé à la pensée de l'absurde",
    approfondir:
      "Retiens quelques dates qui structurent l'histoire littéraire : 1549 (Défense et illustration de la langue française), 1637 (Le Cid), 1751 (début de l'Encyclopédie), 1830 (bataille d'Hernani), 1857 (Les Fleurs du mal et Madame Bovary, toutes deux poursuivies en justice), 1924 (Manifeste du surréalisme).\n\nLes questions de culture au concours restent des questions de reconnaissance : un auteur, une œuvre, un mouvement. Il ne s'agit pas de connaître les intrigues en détail, mais d'avoir une frise mentale solide.\n\nConseil : construis une frise sur une seule page, avec trois auteurs et une œuvre par mouvement. Relis-la avant chaque entraînement : dix minutes suffisent pour sécuriser deux ou trois questions par épreuve.",
    cards: [
      ["Les Essais", "Montaigne, XVIe siècle (humanisme)", true],
      ["Candide", "Voltaire, XVIIIe siècle (Lumières)", true],
      ["Madame Bovary", "Flaubert, 1857 (réalisme)", true],
      ["Manifeste du surréalisme (1924)", "André Breton", true],
      ["Règle des trois unités", "Une action, un lieu, une journée (théâtre classique)", false],
    ],
  },
  questions: [
    Q("B-FR-CUL-001", "fr.culture.oeuvre", 1, "Qui est l'auteur des Essais, œuvre majeure de l'humanisme ?", [
      ["Montaigne", true, "Les Essais paraissent à partir de 1580."],
      ["Rabelais", false, "Auteur humaniste, mais de Pantagruel et Gargantua."],
      ["Pascal", false, "Auteur des Pensées, au XVIIe siècle."],
      ["Descartes", false, "Auteur du Discours de la méthode, au XVIIe siècle."],
    ], "Montaigne (1533-1592) écrit les Essais, où il s'observe lui-même pour réfléchir à la condition humaine.", "Montaigne : les Essais (XVIe siècle).", [
      "L'œuvre date du XVIe siècle.", "Son auteur se prend lui-même pour sujet d'étude.", "Il fut maire de Bordeaux.",
    ]),
    Q("B-FR-CUL-002", "fr.culture.oeuvre", 1, "Qui a écrit le conte philosophique Candide ?", [
      ["Voltaire", true, "Candide ou l'Optimisme paraît en 1759."],
      ["Rousseau", false, "Auteur de Du contrat social et des Confessions."],
      ["Diderot", false, "Auteur de Jacques le Fataliste et maître d'œuvre de l'Encyclopédie."],
      ["Montesquieu", false, "Auteur des Lettres persanes et de De l'esprit des lois."],
    ], "Voltaire publie Candide en 1759 : il y raille l'optimisme philosophique et dénonce la guerre et l'intolérance.", "Voltaire : Candide (1759).", [
      "C'est un conte des Lumières.", "Son auteur a aussi écrit Zadig.", "Il a défendu Calas.",
    ]),
    Q("B-FR-CUL-003", "fr.culture.mouvement", 1, "Lequel de ces écrivains est un représentant du naturalisme ?", [
      ["Émile Zola", true, "Chef de file du naturalisme (Les Rougon-Macquart)."],
      ["Alphonse de Lamartine", false, "Poète romantique."],
      ["Pierre de Ronsard", false, "Poète de la Pléiade, au XVIe siècle."],
      ["Jean Racine", false, "Tragédien classique du XVIIe siècle."],
    ], "Zola théorise le naturalisme, qui applique au roman une démarche inspirée des sciences (hérédité, milieu).", "Naturalisme : Zola, Maupassant.", [
      "Le naturalisme date de la fin du XIXe siècle.", "Élimine les auteurs d'autres siècles.", "Son chef de file a écrit Germinal.",
    ]),
    Q("B-FR-CUL-004", "fr.culture.mouvement", 1, "À quel mouvement littéraire Lamartine, Musset et Vigny appartiennent-ils ?", [
      ["le romantisme", true, "Tous trois sont des figures du romantisme français."],
      ["le classicisme", false, "Mouvement du XVIIe siècle."],
      ["le symbolisme", false, "Mouvement de la fin du XIXe siècle (Verlaine, Mallarmé)."],
      ["le surréalisme", false, "Mouvement du XXe siècle (Breton)."],
    ], "Lamartine (Méditations poétiques, 1820), Musset et Vigny appartiennent au romantisme, qui exalte le moi et la sensibilité.", "Romantisme : Lamartine, Hugo, Musset, Vigny.", [
      "Ces auteurs écrivent dans la première moitié du XIXe siècle.", "Ils expriment leurs sentiments personnels.", "Le mouvement est lié à Hugo.",
    ]),
    Q("B-FR-CUL-005", "fr.culture.oeuvre", 1, "Qui est l'auteur de Madame Bovary (1857) ?", [
      ["Gustave Flaubert", true, "Roman réaliste publié en 1857."],
      ["Honoré de Balzac", false, "Auteur de La Comédie humaine, mort en 1850."],
      ["Guy de Maupassant", false, "Disciple de Flaubert, auteur de Bel-Ami."],
      ["Stendhal", false, "Auteur du Rouge et le Noir."],
    ], "Flaubert publie Madame Bovary en 1857 ; le roman lui vaut un procès pour atteinte à la morale, dont il est acquitté.", "Flaubert : Madame Bovary (1857).", [
      "Le roman est réaliste.", "Son auteur a aussi écrit L'Éducation sentimentale.", "Il a été le maître de Maupassant.",
    ]),
    Q("B-FR-CUL-006", "fr.culture.intrus", 2, "Lequel de ces dramaturges n'appartient pas au XVIIe siècle ?", [
      ["Beaumarchais", true, "Auteur du Mariage de Figaro, au XVIIIe siècle."],
      ["Molière", false, "Auteur comique du XVIIe siècle."],
      ["Racine", false, "Tragédien du XVIIe siècle."],
      ["Corneille", false, "Auteur du Cid, au XVIIe siècle."],
    ], "Corneille, Racine et Molière sont les trois grands dramaturges classiques du XVIIe siècle. Beaumarchais écrit à la fin du XVIIIe siècle.", "Beaumarchais : XVIIIe siècle (Le Mariage de Figaro).", [
      "Trois de ces auteurs sont des classiques.", "Lequel a écrit à la veille de la Révolution ?", "Il a créé le personnage de Figaro.",
    ]),
    Q("B-FR-CUL-007", "fr.culture.mouvement", 2, "Qui a rédigé le Manifeste du surréalisme en 1924 ?", [
      ["André Breton", true, "Fondateur et théoricien du surréalisme."],
      ["Paul Éluard", false, "Poète surréaliste, mais non l'auteur du manifeste."],
      ["Louis Aragon", false, "Membre du groupe surréaliste, mais non l'auteur du manifeste."],
      ["Guillaume Apollinaire", false, "Il a forgé le mot « surréaliste », mais il est mort en 1918."],
    ], "André Breton publie en 1924 le Manifeste du surréalisme, qui définit le mouvement comme un « automatisme psychique pur ».", "Breton : Manifeste du surréalisme (1924).", [
      "Le manifeste est le texte fondateur du mouvement.", "Son auteur en est le chef de file.", "Il a aussi écrit Nadja.",
    ]),
    Q("B-FR-CUL-008", "fr.culture.oeuvre", 1, "Qui est l'auteur des Fleurs du mal (1857) ?", [
      ["Charles Baudelaire", true, "Recueil publié en 1857."],
      ["Arthur Rimbaud", false, "Né en 1854 : trop jeune pour ce recueil."],
      ["Paul Verlaine", false, "Auteur des Poèmes saturniens et des Romances sans paroles."],
      ["Victor Hugo", false, "Auteur des Contemplations, publiées en 1856."],
    ], "Baudelaire publie Les Fleurs du mal en 1857 ; le recueil est condamné pour six poèmes jugés immoraux.", "Baudelaire : Les Fleurs du mal (1857).", [
      "Le recueil date de la même année que Madame Bovary.", "Son auteur a aussi écrit Le Spleen de Paris.", "Il a traduit Edgar Poe.",
    ]),
    Q("B-FR-CUL-009", "fr.culture.notion", 2, "Quelle règle du théâtre classique impose une seule action, en un seul lieu, en une seule journée ?", [
      ["la règle des trois unités", true, "Unité d'action, de lieu et de temps."],
      ["la règle de bienséance", false, "Elle interdit de choquer le public (pas de violence ni de mort sur scène)."],
      ["la règle de vraisemblance", false, "Elle exige que l'action paraisse crédible."],
      ["la catharsis", false, "Purgation des passions du spectateur, effet attendu de la tragédie."],
    ], "Le théâtre classique impose l'unité d'action, l'unité de lieu et l'unité de temps (vingt-quatre heures). Les romantiques rejetteront cette règle.", "Trois unités : action, lieu, temps.", [
      "La règle porte sur trois éléments.", "Action, lieu et temps doivent être uniques.", "Les romantiques s'y opposeront.",
    ], { r: true }),
    Q("B-FR-CUL-010", "fr.culture.oeuvre", 2, "Quel roman d'Albert Camus, publié en 1942, s'ouvre sur la mort de la mère du narrateur ?", [
      ["L'Étranger", true, "Il commence par « Aujourd'hui, maman est morte »."],
      ["La Peste", false, "Roman de 1947, sur une épidémie à Oran."],
      ["La Chute", false, "Récit de 1956."],
      ["Les Justes", false, "Pièce de théâtre de 1949."],
    ], "L'Étranger (1942) raconte l'histoire de Meursault ; il s'ouvre sur l'annonce de la mort de sa mère.", "Camus : L'Étranger (1942), La Peste (1947).", [
      "Le narrateur s'appelle Meursault.", "Le roman date de la Seconde Guerre mondiale.", "C'est le premier roman publié de Camus.",
    ]),
    Q("B-FR-CUL-011", "fr.culture.oeuvre", 2, "Quel écrivain a réuni ses romans sous le titre de La Comédie humaine ?", [
      ["Honoré de Balzac", true, "Ensemble de près de cent romans et nouvelles."],
      ["Émile Zola", false, "Son cycle s'intitule Les Rougon-Macquart."],
      ["Victor Hugo", false, "Auteur des Misérables, sans cycle de ce nom."],
      ["Alexandre Dumas", false, "Auteur des Trois Mousquetaires."],
    ], "Balzac regroupe à partir de 1842 ses romans sous le titre La Comédie humaine, vaste peinture de la société française.", "Balzac : La Comédie humaine.", [
      "L'auteur veut peindre toute la société de son temps.", "Il a écrit Le Père Goriot.", "Ne le confonds pas avec le cycle de Zola.",
    ]),
    Q("B-FR-CUL-012", "fr.culture.oeuvre", 2, "Quelle pièce relève du théâtre de l'absurde ?", [
      ["En attendant Godot, de Samuel Beckett", true, "Pièce emblématique du théâtre de l'absurde (1953)."],
      ["Hernani, de Victor Hugo", false, "Drame romantique (1830)."],
      ["Le Mariage de Figaro, de Beaumarchais", false, "Comédie du XVIIIe siècle."],
      ["Phèdre, de Jean Racine", false, "Tragédie classique du XVIIe siècle."],
    ], "En attendant Godot (1953) met en scène deux personnages qui attendent un Godot qui ne vient jamais : c'est une œuvre phare du théâtre de l'absurde, avec La Cantatrice chauve de Ionesco.", "Théâtre de l'absurde : Beckett, Ionesco.", [
      "Le théâtre de l'absurde date des années 1950.", "Élimine les pièces des siècles précédents.", "Les personnages attendent quelqu'un qui ne vient pas.",
    ]),
    Q("B-FR-CUL-013", "fr.culture.repere", 3, "Quelle écrivaine fut, en 1980, la première femme élue à l'Académie française ?", [
      ["Marguerite Yourcenar", true, "Autrice des Mémoires d'Hadrien, élue en 1980."],
      ["Simone de Beauvoir", false, "Philosophe et romancière, jamais élue à l'Académie française."],
      ["Colette", false, "Elle présida l'Académie Goncourt, pas l'Académie française."],
      ["Marguerite Duras", false, "Romancière, jamais élue à l'Académie française."],
    ], "Marguerite Yourcenar, autrice des Mémoires d'Hadrien, entre à l'Académie française en 1980 ; elle est la première femme à y être élue.", "Yourcenar : première académicienne (1980).", [
      "Elle a écrit les Mémoires d'Hadrien.", "Son prénom est partagé avec une autre option.", "Ce n'est pas l'autrice de L'Amant.",
    ], { r: true }),
    Q("B-FR-CUL-014", "fr.culture.mouvement", 2, "Quel groupe de poètes du XVIe siècle, autour de Ronsard et Du Bellay, voulait défendre et enrichir la langue française ?", [
      ["la Pléiade", true, "Du Bellay publie en 1549 la Défense et illustration de la langue française."],
      ["le Parnasse", false, "Mouvement poétique du XIXe siècle."],
      ["le symbolisme", false, "Mouvement de la fin du XIXe siècle."],
      ["l'Encyclopédie", false, "Entreprise du XVIIIe siècle, pas un groupe de poètes."],
    ], "La Pléiade (Ronsard, Du Bellay et cinq autres poètes) veut élever le français au niveau du latin et du grec. Son manifeste est la Défense et illustration de la langue française (1549).", "La Pléiade : Ronsard, Du Bellay (XVIe siècle).", [
      "Le groupe porte le nom d'une constellation.", "Son manifeste date de 1549.", "Il compte sept poètes.",
    ]),
    Q("B-FR-CUL-015", "fr.culture.repere", 3, "Quelle pièce de Victor Hugo provoqua en 1830 une célèbre « bataille » entre classiques et romantiques ?", [
      ["Hernani", true, "La première d'Hernani, en février 1830, oppose violemment les deux camps."],
      ["Ruy Blas", false, "Drame de Hugo créé en 1838, sans bataille comparable."],
      ["Cromwell", false, "Drame de 1827, célèbre surtout pour sa préface, et non joué à l'époque."],
      ["Lorenzaccio", false, "Drame d'Alfred de Musset, pas de Hugo."],
    ], "La bataille d'Hernani (1830) marque le triomphe du drame romantique sur les règles classiques.", "1830 : bataille d'Hernani.", [
      "L'événement date de 1830.", "La pièce porte le nom d'un bandit espagnol.", "Elle marque la victoire du drame romantique.",
    ], { a: "approfondir", r: true }),
  ],
};
