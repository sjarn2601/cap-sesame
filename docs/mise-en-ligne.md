# Mettre CAP SESAME en ligne (Render)

Le fichier `render.yaml` décrit tout : un service web (Next.js) et une base PostgreSQL 16, en région Francfort.

## Étapes

1. Créer un compte sur https://render.com (connexion avec GitHub possible).
2. **New → Blueprint**, autoriser l'accès au dépôt `sjarn2601/cap-sesame`, puis **Apply**.
   Render crée la base et le service, installe, construit (`npm run build`), crée les tables et charge la démonstration au premier démarrage.
3. Quand le déploiement est vert, l'adresse s'affiche en haut de la page du service, par exemple `https://cap-sesame.onrender.com`.
4. Récupérer les accès de démonstration :
   - **Mot de passe** commun des comptes de démonstration : onglet **Environment** du service, variable `DEMO_PASSWORD` (générée par Render).
   - **Second facteur du personnel** : onglet **Logs** du premier déploiement, ligne « Secret du second facteur… ». L'ajouter dans une application d'authentification (Google Authenticator, Authy…). Ce secret n'est affiché qu'une fois.
5. Facultatif : coller une clé `ANTHROPIC_API_KEY` dans **Environment** pour activer l'assistant IA, puis redéployer.

## Installer sur le téléphone

- **Android (Chrome)** : ouvrir l'adresse, se connecter, toucher « Installer » sur la page Aujourd'hui.
- **iPhone (Safari)** : ouvrir l'adresse, Partager, « Sur l'écran d'accueil ».

## Bon à savoir

- En ligne, le mot de passe et le second facteur des comptes de démonstration ne sont jamais ceux du dépôt (`demo-sesame-2027` ne fonctionne qu'en local).
- Offre gratuite : le service s'endort après une période sans visite et met environ une minute à se réveiller ; la base gratuite de Render est limitée dans le temps. Pour un usage réel, passer le service et la base sur une offre payante depuis le tableau de bord.
- Chaque fusion sur `main` redéploie automatiquement. Au démarrage, `npm run db:deploy` met les tables à jour et ne recharge pas la démonstration si la base contient déjà des données.
