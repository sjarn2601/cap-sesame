// Compétences digitales : internet, web, courriel et réseaux (dig.web).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.web";

export const DIG_WEB: SubjectBank = {
  skills: [
    { id: S, subjectCode: "DIG", domain: "Environnement numérique", name: "Internet, web et réseaux", synonyms: ["internet", "web", "adresse ip", "dns", "url", "nom de domaine", "http", "https", "navigateur", "courriel", "cci", "cloud", "debit", "cookie"] },
  ],
  lessons: [
    {
      skillId: S,
      title: "Comprendre internet, le web et le courriel",
      objectives: ["Distinguer internet, web, navigateur et moteur", "Expliquer le rôle de l'adresse IP et du DNS", "Lire une URL et repérer le vrai nom de domaine", "Utiliser correctement À, CC et CCI"],
      prerequisites: ["dig.secu"],
      regle:
        "Internet et le web. Internet est le réseau mondial qui interconnecte des millions de réseaux. Le web est l'un des services qui l'utilisent : des pages reliées par des liens, consultées avec un navigateur. Le courriel, la visioconférence, les jeux en ligne ou le transfert de fichiers sont d'autres services d'internet. Le navigateur (Firefox, Chrome, Edge, Safari) est le logiciel qui affiche les pages ; le moteur de recherche (Google, Bing, Qwant, Ecosia) est un site qui indexe le web et propose des résultats.\n\nAdresses. Chaque appareil connecté a une adresse IP qui l'identifie sur le réseau. Une adresse IPv4 s'écrit avec quatre nombres de 0 à 255 séparés par des points (192.168.1.25) ; IPv6, plus longue, a été créée face à l'épuisement des adresses IPv4. Les humains retiennent plutôt des noms de domaine (education.gouv.fr) : le DNS (Domain Name System) est l'annuaire qui traduit un nom de domaine en adresse IP.\n\nURL. Dans https://www.exemple.fr/actus/page.html?id=3 : https est le protocole, www un sous-domaine, exemple.fr le nom de domaine (exemple + l'extension .fr), /actus/page.html le chemin vers la ressource, ?id=3 un paramètre. Le vrai propriétaire est le nom de domaine placé juste avant le premier « / » : dans impots.gouv.fr.dossier-verif.com/connexion, le domaine est dossier-verif.com, pas impots.gouv.fr.\n\nProtocoles. HTTP transporte les pages web ; HTTPS ajoute le chiffrement de la connexion (cadenas). Un cookie est un petit fichier déposé par un site dans le navigateur : il peut servir au fonctionnement (session, panier) ou au suivi (publicité). Un cookie tiers est déposé par un autre domaine que le site visité, typiquement une régie publicitaire.\n\nCourriel. « À » : destinataires principaux. « CC » (copie carbone) : destinataires en copie, visibles de tous. « CCI » (copie carbone invisible) : destinataires cachés, que personne d'autre ne voit ; on l'utilise pour écrire à un groupe de personnes qui ne se connaissent pas, afin de protéger leurs adresses. « Répondre à tous » n'atteint jamais les destinataires en CCI.\n\nCloud et débit. Le cloud (informatique en nuage) désigne le stockage ou les logiciels fournis par des serveurs distants via internet : accessible partout et facile à partager, mais dépendant de la connexion et d'un prestataire qui héberge tes données. Le débit se mesure en bits par seconde : le débit descendant (téléchargement) et le débit montant (envoi) peuvent être très différents.",
      formules:
        "Internet = réseau de réseaux · Web = service de pages liées sur internet\nNavigateur = logiciel (Firefox, Chrome…) · Moteur = site de recherche (Google, Qwant…)\nAdresse IPv4 : 4 nombres de 0 à 255 (ex. 192.168.1.25)\nDNS : nom de domaine → adresse IP\nURL : protocole://sous-domaine.domaine.extension/chemin?paramètres\nVrai domaine = ce qui précède immédiatement le premier « / »\nÀ : destinataire · CC : copie visible · CCI : copie cachée\nDébit descendant = téléchargement · débit montant = envoi",
      methode:
        "1. Pour lire une URL suspecte, repérer le premier « / » après https://.\n2. Juste avant ce « / », lire l'extension (.fr, .com…) et le mot qui la précède : c'est le vrai domaine.\n3. Tout ce qui est à gauche n'est qu'un sous-domaine, choisi librement par le propriétaire du domaine.\n4. En cas de doute, ne pas cliquer et taper soi-même l'adresse officielle.",
      exemple:
        "Lien reçu : https://www.ameli.fr.remboursement-assure.info/dossier. Premier « / » après https:// : juste avant, on lit remboursement-assure.info. C'est le vrai domaine ; « www.ameli.fr » n'est qu'un sous-domaine trompeur. Le site n'appartient pas à l'Assurance maladie.\n\nCourriel : Lucas organise une collecte pour son club et écrit à 60 familles qui ne se connaissent pas. Il met sa propre adresse dans « À » et les 60 adresses en « CCI ». Personne ne voit les adresses des autres, et si un parent clique sur « Répondre à tous », seul Lucas reçoit la réponse.",
      erreur:
        "✗ Dire que Google est un navigateur → ✓ Google est un moteur de recherche ; Chrome est le navigateur de Google.\n✗ Confondre internet et web → ✓ Le web n'est qu'un des services d'internet.\n✗ Lire le domaine au début de l'URL → ✓ Le vrai domaine est juste avant le premier « / ».\n✗ Mettre 60 adresses inconnues entre elles en « À » ou « CC » → ✓ Utiliser « CCI » pour protéger les adresses.\n✗ Croire que le cloud est stocké « nulle part » → ✓ Les données sont sur les serveurs d'un prestataire, quelque part dans le monde.",
      approfondir:
        "Une image utile : l'adresse IP est le numéro de téléphone d'une machine, le DNS est l'annuaire qui associe un nom à ce numéro, l'URL est l'adresse complète d'une page, et le protocole est la langue de la conversation. Au concours, les questions sur les URL sont souvent des questions de sécurité déguisées : applique la méthode du premier « / ». Pour le courriel, retiens que CCI protège à la fois la vie privée des destinataires (leurs adresses sont des données personnelles) et évite les « Répondre à tous » en cascade. Lien : HTTPS et cadenas sont détaillés dans le cours de sécurité.",
      cards: [
        ["Rôle du DNS", "Traduire un nom de domaine en adresse IP", false],
        ["Copie cachée d'un courriel", "CCI", true],
        ["Navigateur ou moteur ? Firefox", "Navigateur", false],
        ["Où lire le vrai domaine d'une URL ?", "Juste avant le premier « / » après le protocole", false],
        ["Débit montant", "Débit d'envoi de données (upload)", true],
      ],
    },
  ],
  questions: [
    q("B-DIG-WEB-001", S, "dig.web.navigateur", 1, "Parmi ces propositions, laquelle est un navigateur web ?", [
      ["Firefox", true, "Firefox est un logiciel qui affiche les pages web."],
      ["Google", false, "Google est un moteur de recherche (son navigateur s'appelle Chrome)."],
      ["Qwant", false, "Qwant est un moteur de recherche."],
      ["Wikipédia", false, "Wikipédia est un site web, consulté avec un navigateur."],
    ], "Le navigateur est le logiciel installé sur l'appareil (Firefox, Chrome, Edge, Safari). Le moteur de recherche est un site web consulté dans ce navigateur.", "Navigateur = logiciel ; moteur de recherche = site.", {
      hints: ["Cherche un logiciel, pas un site.", "Les moteurs de recherche s'ouvrent dans un autre programme.", "Ce programme a pour logo un renard autour d'un globe."],
    }),
    q("B-DIG-WEB-002", S, "dig.web.dns", 2, "Tu tapes www.exemple.fr dans la barre d'adresse. Quel service trouve l'adresse IP du serveur qui héberge ce site ?", [
      ["Le DNS", true, "Le DNS traduit les noms de domaine en adresses IP."],
      ["Le protocole HTTP", false, "HTTP transporte les pages une fois le serveur trouvé."],
      ["Le moteur de recherche", false, "Taper une adresse ne passe pas par un moteur de recherche."],
      ["Le VPN", false, "Un VPN chiffre et redirige le trafic, il ne traduit pas les noms."],
    ], "Avant de demander la page, le navigateur interroge un serveur DNS : « quelle est l'adresse IP de www.exemple.fr ? ». Avec la réponse, il contacte le serveur en HTTP ou HTTPS.", "DNS = annuaire nom de domaine → adresse IP.", {
      hints: ["Les machines communiquent avec des adresses numériques.", "Un service fait le lien entre nom et numéro.", "Il fonctionne comme un annuaire."],
    }),
    q("B-DIG-WEB-003", S, "dig.web.url", 3, "Un SMS contient le lien https://www.impots.gouv.fr.verification-dossier.com/connexion. À quel nom de domaine la page appartient-elle réellement ?", [
      ["verification-dossier.com", true, "C'est la partie placée juste avant le premier « / » : le vrai domaine."],
      ["impots.gouv.fr", false, "Ce n'est ici qu'un sous-domaine, choisi pour tromper."],
      ["gouv.fr", false, "gouv.fr apparaît à gauche du vrai domaine : ce n'est qu'une partie du sous-domaine."],
      ["connexion", false, "C'est le chemin de la page sur le serveur."],
    ], "On repère le premier « / » après https:// : juste avant se trouve verification-dossier.com. Tout ce qui est à gauche (www.impots.gouv.fr) est un sous-domaine que le propriétaire de verification-dossier.com peut nommer comme il veut. C'est un hameçonnage.", "Le vrai domaine est juste avant le premier « / ».", {
      hints: ["Repère le premier « / » après le protocole.", "Lis ce qui le précède immédiatement : un nom et une extension.", "Ce qui est plus à gauche n'est qu'un sous-domaine."],
      lessonAnchor: "methode",
      reserved: true,
    }),
    q("B-DIG-WEB-004", S, "dig.web.url", 2, "Dans l'adresse https://www.lycee-exemple.fr/vie-scolaire/menu.pdf, que désigne la partie /vie-scolaire/menu.pdf ?", [
      ["Le chemin vers le fichier sur le serveur", true, "Il indique le dossier et le fichier demandés sur le site."],
      ["Le nom de domaine du site", false, "Le domaine est lycee-exemple.fr."],
      ["Le protocole utilisé", false, "Le protocole est https."],
      ["L'adresse IP du serveur", false, "L'adresse IP est numérique et n'apparaît pas ici."],
    ], "Une URL se lit : protocole (https), sous-domaine (www), nom de domaine (lycee-exemple.fr), puis chemin (/vie-scolaire/menu.pdf) qui désigne la ressource précise sur le serveur, comme un chemin de dossiers.", "URL = protocole + domaine + chemin.", {
      hints: ["Décompose l'adresse en parties.", "Après le domaine viennent des dossiers et un fichier.", "C'est l'équivalent d'un chemin dans une arborescence."],
    }),
    q("B-DIG-WEB-005", S, "dig.web.courriel", 1, "Tu envoies une invitation à 40 parents d'élèves qui ne se connaissent pas. Tu ne veux pas que chacun voie les adresses des autres. Où places-tu leurs adresses ?", [
      ["Dans le champ CCI", true, "Les destinataires en copie cachée ne voient pas les autres adresses."],
      ["Dans le champ À", false, "Tous les destinataires verraient toutes les adresses."],
      ["Dans le champ CC", false, "Les destinataires en copie sont visibles de tous."],
      ["Dans l'objet du message", false, "L'objet n'est pas un champ de destinataires."],
    ], "CCI (copie carbone invisible) masque les destinataires. C'est la règle pour un envoi groupé à des personnes qui ne se connaissent pas : on protège leurs adresses, qui sont des données personnelles.", "Envoi groupé à des inconnus = CCI.", {
      hints: ["Un des champs rend les destinataires invisibles.", "Le I final signifie « invisible ».", "Ce n'est ni À ni CC."],
    }),
    q("B-DIG-WEB-006", S, "dig.web.courriel", 3, "Un expéditeur écrit à 200 personnes en les plaçant toutes en CCI, et met seulement sa propre adresse dans « À ». Tu fais partie des 200 et tu cliques sur « Répondre à tous ». Qui reçoit ta réponse ?", [
      ["Seulement l'expéditeur", true, "Les destinataires en CCI sont invisibles : « Répondre à tous » ne peut pas les ajouter."],
      ["Les 200 destinataires", false, "Ta messagerie ne connaît pas les adresses cachées."],
      ["Personne, la réponse est bloquée", false, "La réponse part normalement vers l'adresse visible."],
      ["Les 200 destinataires, mais en CCI", false, "Les adresses masquées ne sont jamais transmises aux destinataires."],
    ], "« Répondre à tous » reprend l'expéditeur et les adresses visibles (À, CC). Comme seule l'adresse de l'expéditeur est visible, lui seul reçoit la réponse. C'est l'un des intérêts de la CCI : éviter les réponses en cascade.", "Répondre à tous n'atteint jamais les destinataires en CCI.", {
      hints: ["Quelles adresses ta messagerie peut-elle voir ?", "Les adresses en CCI ne te sont pas communiquées.", "Seules les adresses visibles reçoivent la réponse."],
      lessonAnchor: "exemple",
    }),
    q("B-DIG-WEB-007", S, "dig.web.ip", 2, "Laquelle de ces écritures est une adresse IPv4 valide ?", [
      ["192.168.1.25", true, "Quatre nombres compris entre 0 et 255, séparés par des points."],
      ["192.168.1.256", false, "256 dépasse la valeur maximale 255 d'un nombre d'une adresse IPv4."],
      ["192-168-1-25", false, "Les nombres d'une adresse IPv4 sont séparés par des points."],
      ["www.192.fr", false, "C'est un nom de domaine, pas une adresse IP."],
    ], "Une adresse IPv4 compte 32 bits, écrits en quatre nombres de 8 bits (0 à 255) séparés par des points. Les adresses commençant par 192.168 sont des adresses privées, utilisées dans les réseaux domestiques.", "IPv4 = quatre nombres de 0 à 255 séparés par des points.", {
      hints: ["Rappelle-toi le format d'une adresse IPv4.", "Chaque nombre tient sur un octet.", "Un octet code les valeurs de 0 à 255."],
    }),
    q("B-DIG-WEB-008", S, "dig.web.internet", 2, "Quelle affirmation sur internet et le web est exacte ?", [
      ["Le web est un service qui fonctionne grâce à internet, comme le courriel", true, "Internet est le réseau ; le web est l'un des services qui l'utilisent."],
      ["Internet et le web sont deux noms de la même chose", false, "Confusion fréquente : le réseau et l'un de ses services."],
      ["Internet est un service qui fonctionne grâce au web", false, "C'est l'inverse : le web repose sur internet."],
      ["Le courriel fait partie du web", false, "Le courriel est un service d'internet distinct du web, même s'il se consulte parfois dans un navigateur."],
    ], "Internet est l'infrastructure : un réseau mondial de réseaux. Sur cette infrastructure fonctionnent plusieurs services : le web (pages liées, protocole HTTP), le courriel, la visioconférence, le transfert de fichiers, etc.", "Internet = réseau ; web = un service parmi d'autres.", {
      hints: ["L'un est une infrastructure, l'autre un service.", "Le courriel existe sans le web.", "Le web a besoin d'internet, pas l'inverse."],
    }),
    q("B-DIG-WEB-009", S, "dig.web.cloud", 1, "Quel est un inconvénient du stockage de ses fichiers dans le cloud ?", [
      ["L'accès dépend d'une connexion et d'un prestataire qui héberge les données", true, "Sans réseau, ou si le service ferme, les fichiers sont inaccessibles."],
      ["Les fichiers ne sont accessibles que depuis un seul ordinateur", false, "C'est au contraire l'avantage du cloud : l'accès depuis plusieurs appareils."],
      ["Il est impossible de partager un fichier avec quelqu'un", false, "Le partage est l'un des usages principaux du cloud."],
      ["Les fichiers sont stockés uniquement sur ton disque dur", false, "Ils sont stockés sur des serveurs distants."],
    ], "Le cloud offre accessibilité et partage, mais crée une dépendance à la connexion et au prestataire (conditions d'utilisation, localisation des serveurs, confidentialité). Il ne remplace pas une sauvegarde indépendante.", "Cloud : accessible partout, mais dépendant d'un réseau et d'un tiers.", {
      hints: ["Où sont physiquement stockés les fichiers ?", "Que se passe-t-il sans connexion ?", "Pense aussi à la confiance accordée au prestataire."],
    }),
    q("B-DIG-WEB-010", S, "dig.web.debit", 2, "Tu diffuses en direct une vidéo depuis ta connexion à la maison. Quel débit est déterminant pour la qualité de ta diffusion ?", [
      ["Le débit montant", true, "Diffuser, c'est envoyer des données vers internet."],
      ["Le débit descendant", false, "Il compte pour recevoir, par exemple regarder une vidéo."],
      ["La capacité de stockage de ton ordinateur", false, "Le stockage n'est pas un débit."],
      ["La résolution de ton écran", false, "Elle ne dit rien de la vitesse d'envoi des données."],
    ], "Le débit descendant mesure la vitesse de réception (téléchargement, streaming regardé) ; le débit montant mesure la vitesse d'envoi (diffusion en direct, envoi de gros fichiers, visioconférence). Sur beaucoup de connexions, le débit montant est plus faible.", "Envoyer = débit montant ; recevoir = débit descendant.", {
      hints: ["Les données partent-elles de chez toi ou arrivent-elles chez toi ?", "Diffuser, c'est envoyer.", "L'envoi correspond au débit qui « monte » vers le réseau."],
    }),
    q("B-DIG-WEB-011", S, "dig.web.cookie", 2, "Tu lis un article sur le site d'un journal. Un cookie y est déposé par le domaine d'une régie publicitaire. Comment l'appelle-t-on ?", [
      ["Un cookie tiers", true, "Il est déposé par un autre domaine que celui du site visité."],
      ["Un cookie de session", false, "Un cookie de session sert au fonctionnement du site et disparaît à la fermeture du navigateur."],
      ["Un cookie strictement nécessaire", false, "Un cookie publicitaire n'est pas nécessaire au service demandé."],
      ["Un cookie interne", false, "Un cookie interne (ou propriétaire) est déposé par le site visité lui-même."],
    ], "Un cookie interne vient du site visité ; un cookie tiers vient d'un autre domaine présent sur la page (publicité, réseau social, mesure d'audience externe). Les cookies tiers servent surtout au suivi d'un site à l'autre et exigent alors ton consentement.", "Cookie tiers = déposé par un autre domaine que le site visité.", {
      hints: ["Qui dépose le cookie : le journal ou un autre acteur ?", "Ce n'est pas le site visité.", "On parle d'une « tierce » partie."],
      reserved: true,
    }),
  ],
};
