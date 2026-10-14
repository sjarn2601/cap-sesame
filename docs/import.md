# Import de questions

Les questions entrent toujours en **brouillon** : ni la création unitaire (`/admin/questions/nouvelle`) ni l'import par lots (`/admin/import`) ne touchent le catalogue publié. Elles suivent ensuite le cycle éditorial (relecture, contrôle du format, validation, publication) par une personne autre que l'auteur.

## Schéma d'une question

| Champ | Type | Règle |
|---|---|---|
| `questionId` | texte | Identifiant stable, majuscules, chiffres et tirets (3 à 40). Réutiliser un identifiant existant crée une **nouvelle version** ; l'ancienne reste attachée aux tentatives passées. |
| `subjectCode` | texte | `DIG`, `ACT`, `MATH`, `FR`, `EN`, `LV-ES`, `DOC`… |
| `skillIds` | liste | Au moins une compétence connue (ex. `math.pct`). |
| `familyId` | texte | Famille d'exercices : deux questions de la même famille ne tombent pas dans la même série. |
| `difficulty` | 1 à 3 | Difficulté éditoriale. |
| `format` | `single`, `multiple`, `numeric` | QCU, QCM, réponse numérique. |
| `stem` | texte | Énoncé (5 à 4000 caractères). |
| `options` | liste | `{ id, text, correct, justification }`, 8 au plus. Chaque option a une justification. |
| `numericAnswer`, `numericTolerance` | nombre | Obligatoire pour `numeric`. |
| `explanation` | texte | Corrigé complet. |
| `rule` | texte | Règle à retenir. |
| `hints` | liste | 3 indices au plus, du plus léger au plus explicite. |
| `timeSec` | entier | Temps de référence (10 à 1800 s). |
| `references` | liste | Au moins une référence. |
| `lessonAnchor` | texte | Ancre du passage de cours à revoir (facultatif). |
| `origin` | `human`, `ai`, `official_authorized` | Une proposition IA reste un brouillon jusqu'à relecture humaine. |
| `rightsCleared` | booléen | Sans droit établi, la publication est refusée. |
| `reserved` | booléen | Question réservée aux concours blancs. |

Exemple : voir le modèle prérempli sur `/admin/questions/nouvelle`.

## Contrôles automatiques

Bloquants : QCU sans exactement une bonne réponse, QCM sans bonne réponse, réponse numérique absente, moins de deux options, options identiques, justification manquante, références manquantes, corrigé ou règle manquants, image référencée mais absente, compétence inconnue, doublon exact d'une autre question de la matière.

Avertissement (non bloquant) : énoncé très proche d'une autre question (similarité de trigrammes > 0,8).

## Import par lots

Coller un tableau JSON de questions, ou un objet `{ "questions": [...] }`.

1. **Validation à blanc** : rapport ligne par ligne, rien n'est écrit.
2. **Importer (tout ou rien)** : refusé si une seule question est invalide.
3. **Importer seulement les questions valides** : choix explicite, les questions invalides sont listées et ignorées.

Chaque import reçoit un identifiant de lot (`B-AAAA-MM-JJ-xxxxxxxx`). **Annuler un lot** supprime ses questions si aucune tentative ne les a utilisées, sinon les retire proprement (les résultats passés restent lisibles).
