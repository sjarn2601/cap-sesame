# Rédiger la banque de préparation SESAME

Ce guide fixe le format et les règles de rédaction des contenus de `src/content/bank/`. Chaque matière a son fichier (`math.ts`, `dig.ts`, `act.ts`, `fr.ts`, `en.ts`, `es.ts`, `doc.ts`) qui exporte un objet `SubjectBank` (voir `helpers.ts`).

Au déploiement, `npm run db:deploy` publie automatiquement tout contenu nouveau ou modifié comme nouvelle version (`src/server/contentSync.ts`). Avant de livrer : `npx tsx scripts/check-content.ts <MATIÈRE>` doit afficher « Aucune erreur bloquante ».

## Droits

Tout est rédigé pour CAP SESAME. Aucune reprise d'énoncé d'annale, de manuel ou de site de préparation : on s'inspire des notions et des formats observés, jamais du texte. Les dossiers documentaires utilisent des textes originaux ; les données chiffrées sont soit fictives et signalées comme telles, soit réelles avec leur source exacte.

## Compétences

`{ id, subjectCode, domain, name, synonyms }`. L'identifiant suit `matière.notion` en minuscules (`math.suites`, `fr.ponctuation`). Les compétences déjà présentes dans `demo-catalog.ts` gardent leur identifiant : un cours de la banque pour la même compétence remplace le cours de démonstration. Les `synonyms` (sans accents, minuscules) servent à la recherche.

## Cours (`LessonDef`)

Un cours par compétence, en quatre sections affichées dans cet ordre :

- `regle` (« L'essentiel ») : la notion complète, structurée en paragraphes courts séparés par `\n\n`. C'est le cœur du cours : définitions, règles, méthodes, cas particuliers. Entre 150 et 400 mots.
- `exemple` (« Exemple résolu ») : un ou deux exemples rédigés pas à pas, du niveau du concours.
- `erreur` (« Erreur fréquente ») : les pièges classiques et comment les éviter.
- `approfondir` (« Pour aller plus loin ») : astuce de rapidité, cas limite, lien avec une autre notion, conseil de gestion du temps.

Deux sections facultatives, affichées après « L'essentiel » :

- `formules` (« À connaître par cœur ») : formules, tableaux de conjugaison, listes de mots, une entrée par ligne.
- `methode` (« Méthode ») : la démarche pas à pas, une étape par ligne (« 1. Lire… »).

Dans `erreur`, présenter chaque piège sous la forme « ✗ ce qu'on fait à tort → ✓ ce qu'il faut faire », une ligne par piège.

`objectives` : 2 à 4 verbes d'action. `prerequisites` : identifiants de compétences. `cards` : 3 à 6 cartes mémoire `[recto, verso, réversible]`.

Pas de Markdown (ni `**`, ni `#`) : texte brut, listes avec « – » en début de ligne si besoin.

## Questions

Utiliser `forSubject("MATH")` (ou la matière) qui renvoie `q(id, skill, family, difficulté, énoncé, options, corrigé, règle, extra)`.

- Identifiant : `B-<MATIÈRE>-<NOTION>-NNN`, par exemple `B-MATH-SUITE-004`. Unique.
- `familyId` : `compétence.sous-type` ; les questions d'une même famille testent le même savoir-faire.
- Difficulté 1 (application directe), 2 (niveau concours), 3 (piège ou plusieurs étapes). Viser environ 30 % / 50 % / 20 %.
- Quatre options. Une seule bonne réponse (QCU) sauf pour l'analyse documentaire où plusieurs bonnes réponses sont la norme. L'ordre est mélangé automatiquement : écrire la bonne réponse où l'on veut.
- Chaque option a une justification d'une phrase. Pour un distracteur, la justification nomme l'erreur qui y mène (« Oubli de la division par 3 », « Calque du français »). Les distracteurs sont des erreurs plausibles, pas des absurdités.
- `explanation` : le corrigé complet, démarche et contrôle de cohérence.
- `rule` : la règle à retenir, en une phrase.
- `extra.hints` : exactement trois indices gradués : rappel de notion, début de méthode, presque la solution sans la donner.
- `extra.timeSec` : temps visé, cohérent avec l'épreuve (Français, Anglais, LV : 45 s ; Enjeux contemporains : 45 s ; Compétences digitales : 60 s ; Mathématiques : 120 s ; Analyse documentaire : 300 à 400 s).
- `extra.lessonAnchor` : section du cours à relire (`regle`, `formules`, `methode`, `exemple`, `erreur`, `approfondir` ; `formules` et `methode` seulement si le cours les contient).
- `extra.reserved: true` sur environ une question sur six : elle n'apparaît qu'en diagnostic et concours blanc.
- `extra.references` : par défaut le cours ; pour l'actualité, ajouter `news:<slug>` de la fiche liée.
- Énoncés distincts : deux énoncés identiques sont refusés.

## Langues : exercices oraux

Les langues peuvent aussi fournir `languageExercises` (voir `LanguageExerciseDef` et les exemples de `demo-catalog.ts`) : écoutes (`listening`, texte lu par la synthèse vocale, une question à trois options dont une seule juste, `transcriptByDefault: false`), lectures à voix haute (`read_aloud`) et conversations (`conversation`, avec `prompts` et `modelAnswer`). Identifiants `XX-LIS-NNN`, `XX-READ-NNN`, `XX-CONV-NNN`.

## Fichiers volumineux

Une matière peut répartir sa banque dans un dossier `src/content/bank/<matière>/` (un fichier par compétence par exemple) ; le fichier `<matière>.ts` rassemble alors les parties dans l'objet exporté.

## Exactitude

Chaque réponse doit être vérifiable. En mathématiques, recalculer chaque résultat (script Node) avant de l'écrire. En langues, une seule réponse grammaticalement acceptable. En actualité, chaque fait daté vient d'une source primaire ou d'un média de référence, citée dans la fiche ; en cas de doute, ne pas écrire la question.

## Mise à jour hebdomadaire de l'actualité (chaque lundi)

Une tâche planifiée renouvelle chaque lundi matin les sujets d'actualité et le journal en anglais, puis publie sur `main` (Render redéploie, l'appli se met à jour seule, y compris la bibliothèque hors ligne).

1. **Choisir 15 à 20 événements de la semaine écoulée** (lundi à dimanche), utiles au concours : institutions, économie, Europe et international, environnement, sciences et techniques, société, culture, sport. Écarter les faits divers, les sujets polémiques sans enjeu de fond et les informations non confirmées. Équilibre des rubriques, pas plus de quatre sujets par rubrique.
2. **Vérifier chaque fait** auprès d'une source primaire (institution, organisme officiel, revue scientifique) ou d'au moins deux médias de référence peu partisans (AFP, Reuters, AP, BBC, Le Monde, Les Échos, Euronews, franceinfo…). En cas de doute, ne pas écrire le fait.
3. **Écrire une fiche d'actualité par événement** dans `src/content/bank/act/news.ts` (format des fiches existantes : `F()` fait vérifié, `D()` déclaration attribuée, `I()` interprétation, `U()` incertain ; sources exactes avec URL). Rédaction originale en français : aucune phrase reprise ou traduite d'un média.
4. **Créer `src/content/bank/en/news-AAAA-Www.ts`** (semaine ISO qui commence ce lundi) avec, pour chaque fiche, un flash d'écoute (110 à 160 mots, une question, trois options a/b/c dont une seule juste, justifications en français, identifiant `EN-NEWS-AAAAWww-NNN`) et un reportage (260 à 330 mots, titre parlé de 15 mots au plus, 3 mots de vocabulaire présents dans le texte avec leur traduction). Textes originaux, ton neutre de service public, uniquement les faits de la fiche, nombres écrits pour être lus à voix haute.
5. **Inscrire la semaine en tête de `NEWS_WEEKS`** dans `src/content/bank/en/news-weeks.ts`, avec le libellé « Semaine du J mois AAAA ». Ne jamais supprimer les semaines précédentes.
6. **Vérifier** : `npx tsc --noEmit`, `npx tsx scripts/check-content.ts ACT`, `npx tsx scripts/check-content.ts EN`, `npx vitest run`, et un contrôle des longueurs, des options et des mots de vocabulaire du nouveau fichier.
7. **Publier** : commit sur `main` puis push. Si une vérification échoue et ne peut pas être corrigée, ne rien publier sur `main` : pousser sur une branche `actu/AAAA-Www` et ouvrir une pull request qui explique le problème.
