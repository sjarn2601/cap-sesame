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
| TEC-01, OFF-01 | Web responsive et manifeste d'installation. Le hors-ligne (P1) n'est pas fait. |
| P1 et P2 (IA, oraux avancés, collectif, projection pondérée…) | Hors lot A. La page Oraux donne une préparation de base. |

## Limites connues

- La banque de démonstration est petite : les simulations sont réduites et leur durée ajustée, ce qui est indiqué à l'élève.
- Les données officielles (dates, coefficients, barèmes) sont celles du cahier des charges et sont marquées « à revérifier » dans la configuration.
- Les envois d'e-mails (vérification, rappels) ne sont pas branchés.
