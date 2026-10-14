# CAP SESAME

Application web de préparation au concours SESAME, construite à partir du cahier des charges « CAP SESAME » (31 pages). Cette version couvre le **lot A** : les exigences **P0** et les scénarios d'acceptation R01 à R08.

Le cahier des charges ne fixe pas de technologie précise (TEC-01 demande une interface web responsive, une API applicative et une base relationnelle). Choix retenus :

- **Next.js 16** (App Router, React 19, TypeScript) : pages, actions serveur et API dans un seul projet.
- **PostgreSQL 16** avec **Drizzle ORM**.
- **Vitest** pour les tests unitaires et d'intégration, **Playwright** pour les parcours navigateur.

## Démarrer en local

Prérequis : Node 22, PostgreSQL 16 accessible localement.

```bash
npm install
cp .env.example .env            # adapter DATABASE_URL et TEST_DATABASE_URL
createdb sesame && createdb sesame_test
npm run db:reset                # crée le schéma et charge la banque de démonstration
npm run dev                     # http://localhost:3000
```

### Comptes de démonstration

Mot de passe commun : `demo-sesame-2027`.

| Compte | Rôle |
|---|---|
| `eleve@demo.cap-sesame.fr` | élève |
| `auteur@demo.cap-sesame.fr` | auteur |
| `relecteur@demo.cap-sesame.fr`, `relecteur2@demo.cap-sesame.fr` | relecteurs (deux, pour la double validation) |
| `admin@demo.cap-sesame.fr` | administrateur |
| `support@demo.cap-sesame.fr` | support |

Les comptes du personnel exigent un second facteur (TOTP). En démonstration, tous partagent le secret `JBSWY3DPEHPK3PXPJBSWY3DPEHPK3PXP` ; `npm run totp` affiche le code courant. À remplacer avant toute mise en ligne.

## Tests

```bash
npm run typecheck
npm test                         # unitaires + intégration (base sesame_test, vidée à chaque exécution)
npm run test:e2e                 # parcours navigateur (démarre ou réutilise le serveur de dev)
```

Dans un environnement où Chromium est préinstallé : `PLAYWRIGHT_CHROMIUM_PATH=/chemin/vers/chromium npm run test:e2e`.

- **Unitaires** (`tests/unit`) : barème (dont l'analyse documentaire 1 / 0,5 / 0), maîtrise, révision espacée, planification, chaîne éditoriale, sélection adaptative, générateurs de calcul.
- **Intégration** (`tests/integration`) : scénarios R01 et R03 à R08 sur une vraie base, limitation des tentatives de connexion, second facteur, cycle éditorial, import par lots.
- **Navigateur** (`tests/e2e`) : inscription, diagnostic et bilan, série d'entraînement, concours blanc strict (vérifie qu'aucun corrigé n'arrive au navigateur), analyse documentaire sur ordinateur et à 360 px, écrans d'administration.

## Architecture

```
src/
  app/            pages (élève, public, admin), actions serveur, routes API
  components/     lecteur de séance, vue documentaire, formulaires, graphiques
  lib/            règles métier pures et testées : scoring, mastery, spaced, planner, adaptive, editorial, totp
  server/         accès aux données et contrôles : auth, attempts, plan, catalog, progress, editorialAdmin, privacy
  db/             schéma Drizzle
  content/        banque de démonstration (questions, cours, dossier documentaire, actualités, session 2027)
scripts/          seed, reset, totp
docs/import.md    schéma et contrôles de l'import de questions
```

Principes :

- Chaque requête vérifie identité, rôle et propriété côté serveur (ACC-01). Une ressource d'un autre élève répond « introuvable ».
- Le temps des épreuves est tenu par le serveur ; une réponse arrivée après l'échéance est refusée. En mode strict, aucun corrigé n'est envoyé avant la fin.
- Les réponses sont idempotentes (clé par réponse, numéro d'ordre client) : un réseau instable ne crée ni doublon ni retour en arrière.
- Les contenus sont versionnés ; une tentative garde la version qu'elle a utilisée. Un recalcul ajoute une version de score (avant, après, motif) sans effacer l'ancienne.
- La configuration de session (dates, épreuves, durées, coefficients) est versionnée et publiée après deux validations par deux personnes distinctes.

## Couverture du cahier des charges

| Exigence | État |
|---|---|
| REG-01 configuration par session | Fait : versions, double validation, journal des différences (`/admin/sessions`) |
| ACC-01 contrôles d'accès | Fait : serveur, MFA du personnel, limitation des connexions, journal des actions sensibles |
| DIA-01 diagnostic | Fait : interrompable, reprise, bilan provisoire, consolidation par matière |
| UX-01 prochaine activité en deux interactions | Fait : `/aujourdhui` |
| COU-01 cours et recherche | Fait : matière, compétence, recherche, cartes mémoire, notes, signalement |
| BAN-01 banque et chaîne éditoriale | Fait : versions, contrôles qualité, relecture par une autre personne, import par lots |
| MAT-01, DIG-01, LAN-01, ACT-01, DOC-01 | Fait sur une banque de démonstration originale (87 questions, 24 cours, un dossier documentaire). Le volume réel reste à produire. |
| ADA-01 sélection adaptative | Fait : règles explicables, un tiers hors points faibles, fraîcheur |
| REV-01 carnet d'erreurs | Fait : cause probable, révisions à 1, 3, 7, 21 jours, plafond quotidien |
| PLA-01 planification | Fait : disponibilités, 50/30/20, périodes bloquées, recalcul après absence |
| EXA-01 concours blancs | Fait : par matière et complet, strict ou pédagogique, pauses encadrées, temps majoré |
| RES-01 résultats | Fait : score, temps, non traitées, compétences, évolution, rapport hebdomadaire |
| MOT-01 motivation | Fait sans classement ni série punitive |
| PRI-01, SEC-01, DRO-01 | Fait côté application : page données personnelles, consentement, export, suppression de compte, registre des droits. La documentation juridique et l'hébergement restent à faire. |
| ADM-01, QUAL-01 tableau de bord | Fait : contenus en attente, couverture, signalements, actualités à revérifier |
| OPS-01 exploitation | Partiel : `/api/health` seulement. Supervision, alertes et sauvegardes dépendent de l'hébergement. |
| TEC-01 | Web responsive, utilisable à 360 px |
| OFF-01 hors connexion (lot B) | Fait : appli installable, cours et séries libres téléchargés explicitement, réponses synchronisées sans doublon, données effacées à la déconnexion |
| IA-01, IA-02 assistant encadré (lot B) | Fait : indice, démarche, solution expliquée ; explication de correction ; reformulation de cours ; appuis versionnés affichés ; quotas, budget, délai et repli éditorial ; rien en concours strict |
| ADA-02 estimation probabiliste (lot B) | Fait : modèle bêta-binomial pondéré par la difficulté, calculé à côté du système simple, intervalle affiché à l'élève comme expérimental ; comparaison et analyse de difficulté sur `/admin/estimation` ; bascule réversible et journalisée (système simple par défaut) |
| REV-02 révision (lot B) | Fait : cartes personnelles à révision espacée (`/entrainement/cartes`), carnet regroupé par type d'erreur, export des fiches (texte ou CSV), écoute des cartes de langue par la synthèse vocale du navigateur |
| ORA-01 oraux (lot B) | Fait : fiches par école, programme, campus et session (démonstration : écoles fictives) ; dossier personnel ; simulations écrites ou dictées (micro sur accord, aucun audio conservé), transcription modifiable et supprimable ; retour sur six critères avec citations des réponses |
| P1 et P2 restants (collectif, projection pondérée…) | Voir la suite du lot B. |

## Version mobile

L'application s'installe depuis le navigateur du téléphone (application web progressive) :

- **Android (Chrome)** : bouton « Installer » sur la page Aujourd'hui ou dans le Profil.
- **iPhone (Safari)** : Partager, puis « Sur l'écran d'accueil ».

Une fois installée : icône, plein écran, prise en compte des encoches, barre de navigation en bas, mode concentration pendant les séances (la barre disparaît).

### Hors connexion

- L'élève télécharge explicitement un cours (« Disponible hors connexion ») ou une série libre (page S'entraîner). Limites : 10 cours, 3 séries non synchronisées.
- `/hors-ligne` liste ce qui est disponible sans réseau et ce qui ne l'est pas. Le diagnostic, les concours blancs (temps tenu par le serveur) et les révisions demandent une connexion.
- Chaque réponse locale reçoit un identifiant unique. Au retour du réseau, le serveur déduplique, note à nouveau (sa note fait foi) et signale les questions retirées depuis le téléchargement ; elles ne comptent plus dans la maîtrise.
- Règle de conflit : en série libre, la première réponse reçue pour une question fait foi, comme en ligne.
- Aucune page personnelle n'est mise en cache automatiquement. À la déconnexion, les séries et cours téléchargés sont effacés de l'appareil.
- Le service worker (`public/sw.js`) n'est actif qu'en production (`npm run build && npm start`), ou en développement avec `NEXT_PUBLIC_SW=1`.

## Assistant IA

L'assistant aide à comprendre une correction, à obtenir un indice gradué (indice, démarche, solution expliquée) et à reformuler un cours. Il est facultatif : sans clé, l'application sert l'aide rédigée par l'équipe et le dit à l'élève.

```bash
ANTHROPIC_API_KEY=...                 # active l'assistant (API Claude)
SESAME_AI_MODEL=claude-opus-5-5       # modèle par défaut
SESAME_AI_DAILY_REQUESTS=20           # demandes par élève et par jour
SESAME_AI_DAILY_BUDGET_USD=5          # budget global quotidien
SESAME_AI_TIMEOUT_MS=20000            # délai maximal
```

- Les réponses s'appuient sur la question ou le cours validés (avec leur version) et sur la configuration datée de la session. Les appuis sont affichés sous chaque réponse.
- Le contenu et la question de l'élève sont transmis comme données, jamais comme instructions. L'assistant refuse d'inventer un coefficient ou une date absents de la configuration.
- Pour un calcul, la valeur attendue vérifiée est fournie. Si l'assistant doute du corrigé, il le signale et l'élève peut contester la question.
- Aucun nom ni e-mail n'est envoyé ; les e-mails, numéros et liens écrits dans la question sont retirés. La question est limitée à 300 caractères.
- Toute aide demandée pendant une série fait compter la réponse comme aidée. Aucun appel n'est possible pendant un concours blanc strict.
- En cas de panne, de délai dépassé, de refus, de quota ou de budget atteint, l'élève reçoit la correction éditoriale. Chaque demande est journalisée (`ai_usage` : issue, jetons, coût, délai, sans le texte échangé) et résumée sur le tableau de bord d'administration.
- Le repli côté serveur de l'API est activé : si le modèle principal est indisponible, l'API bascule sur un autre modèle.

## Oraux

- `/oraux` : fiches de programme, dossier personnel, lancement d'une simulation, historique des simulations.
- Une simulation pose cinq questions (motivation, programme, parcours). La dictée utilise la reconnaissance vocale du navigateur, après accord explicite ; CAP SESAME n'enregistre aucun audio. Sans micro ni caméra, tout se fait par écrit.
- Le retour couvre clarté, structure, exemples, connaissance du programme, argumentation et précision linguistique. Avec l'assistant, une citation qui ne figure pas mot pour mot dans les réponses est écartée ; sans assistant, une analyse automatique simple (longueur des phrases, connecteurs, exemples, mots du programme) est fournie. Aucun retour ne prédit l'avis d'un jury.
- Le dossier et les transcriptions figurent dans l'export et se suppriment à tout moment.

## Limites connues

- La banque de démonstration est petite : les simulations sont réduites et leur durée ajustée, ce qui est indiqué à l'élève.
- Les données officielles (dates, coefficients, barèmes) sont celles du cahier des charges et sont marquées « à revérifier » dans la configuration.
- Les envois d'e-mails (vérification, rappels) ne sont pas branchés.
- Les fiches de programme fournies sont des exemples d'écoles fictives : les vraies fiches sont à rédiger école par école depuis les pages officielles.
- Le jeu d'évaluation de l'assistant demandé par IA-02 (150 questions de référence, 50 demandes ambiguës, 30 attaques d'instructions, relecture humaine) reste à constituer.
