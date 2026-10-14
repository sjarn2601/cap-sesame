// Compétences digitales : sécurité numérique (dig.secu).
import { forSubject, type SubjectBank } from "../helpers";

const q = forSubject("DIG");
const S = "dig.secu";

export const DIG_SECU: SubjectBank = {
  skills: [],
  lessons: [
    {
      skillId: S,
      title: "Sécuriser ses comptes, ses appareils et ses données",
      objectives: ["Construire et gérer des mots de passe robustes", "Reconnaître un hameçonnage et réagir", "Distinguer les principaux maliciels et protections", "Mettre en place une sauvegarde fiable"],
      regle:
        "Mots de passe. Un bon mot de passe est long (au moins 12 caractères mêlant majuscules, minuscules, chiffres et caractères spéciaux, ou une phrase de passe plus longue encore), imprévisible et unique pour chaque service. La réutilisation est le vrai danger : après une fuite, les pirates testent automatiquement le couple identifiant-mot de passe sur d'autres sites (« credential stuffing »). Le gestionnaire de mots de passe génère et stocke des mots de passe uniques dans un coffre chiffré, ouvert par un seul mot de passe maître.\n\nAuthentification à deux facteurs (2FA, ou multifacteur). On combine deux éléments de nature différente : ce que je sais (mot de passe, code PIN), ce que je possède (téléphone, clé de sécurité), ce que je suis (empreinte, visage). Un mot de passe volé ne suffit plus. Un code reçu ne se communique jamais à personne.\n\nHameçonnage (phishing ; smishing par SMS, vishing par téléphone). Indices : urgence ou menace, demande d'identifiants ou de paiement, expéditeur ou lien dont le nom de domaine n'est pas celui de l'organisme, pièce jointe inattendue. Réflexe : ne pas cliquer, ouvrir soi-même le site officiel, signaler (33700 pour les SMS et appels, signal-spam.fr pour les courriels).\n\nMaliciels. Virus : s'attache à un fichier et s'active quand on l'ouvre. Ver : se propage seul par le réseau. Cheval de Troie : logiciel d'apparence légitime qui cache une fonction malveillante. Logiciel espion et enregistreur de frappe : collectent ce que tu fais ou tapes. Rançongiciel : chiffre les données et exige une rançon ; on déconnecte l'appareil, on ne paie pas, on porte plainte, on restaure une sauvegarde.\n\nProtections. L'antivirus détecte et bloque les fichiers malveillants ; le pare-feu filtre les connexions réseau entrantes et sortantes selon des règles ; les mises à jour corrigent des failles connues, donc exploitables. Sauvegarde 3-2-1 : 3 copies des données, sur 2 supports différents, dont 1 hors du lieu habituel. Une synchronisation n'est pas une sauvegarde : une suppression ou un chiffrement se propage.\n\nRéseaux. Le cadenas et HTTPS signifient que la connexion est chiffrée entre le navigateur et le serveur, pas que le site est honnête. Sur un Wi-Fi public ouvert, le trafic non chiffré peut être intercepté et un faux point d'accès peut imiter le vrai ; un VPN chiffre tout le trafic jusqu'à son serveur. En cas d'incident : 17Cyber (cybermalveillance.gouv.fr).",
      formules:
        "Trois facteurs : savoir (mot de passe) · posséder (téléphone, clé) · être (biométrie)\nSauvegarde 3-2-1 : 3 copies · 2 supports différents · 1 copie hors site\nHTTPS / cadenas = connexion chiffrée ≠ site de confiance\nVirus (fichier) · ver (réseau, seul) · cheval de Troie (déguisé) · rançongiciel (chiffre et rançonne)\nSignaler : 33700 (SMS, appels) · signal-spam.fr (courriels) · 17Cyber (assistance aux victimes)",
      methode:
        "1. Face à un message : qui l'envoie vraiment (nom de domaine) ? que me demande-t-il ? y a-t-il urgence ?\n2. Ne jamais cliquer pour vérifier : ouvrir soi-même l'application ou le site officiel.\n3. Fuite de données : changer le mot de passe du service et de tous ceux où il était réutilisé, activer la 2FA.\n4. Rançongiciel : déconnecter du réseau, ne pas payer, conserver les preuves, porter plainte, restaurer.",
      exemple:
        "SMS reçu : « Votre colis est en attente. Réglez 1,99 € de frais sous 24 h : colis-suivi-fr.info/paiement ». Analyse : urgence (24 h), demande de paiement par lien, domaine colis-suivi-fr.info qui n'appartient à aucun transporteur. C'est un hameçonnage. On ne clique pas, on vérifie le suivi sur le site officiel du transporteur en tapant soi-même l'adresse, et on transfère le SMS au 33700.\n\nCas de fuite : un forum de jeux annonce le vol de sa base d'utilisateurs. Tu y utilisais le mot de passe de ta messagerie. Priorité : changer le mot de passe de la messagerie (qui permet de réinitialiser tous les autres comptes), puis celui du forum, et activer la 2FA.",
      erreur:
        "✗ Utiliser un mot de passe très complexe mais identique partout → ✓ Un mot de passe unique par service, via un gestionnaire.\n✗ Croire qu'un site avec cadenas est sûr → ✓ Le cadenas prouve le chiffrement, pas l'honnêteté : les sites d'hameçonnage en ont souvent un.\n✗ Confondre pare-feu et antivirus → ✓ Le pare-feu filtre les connexions, l'antivirus analyse les fichiers.\n✗ Penser que le cloud synchronisé est une sauvegarde → ✓ Il faut une copie indépendante, idéalement hors ligne.\n✗ Payer la rançon pour récupérer ses fichiers → ✓ Rien ne garantit la restitution ; on porte plainte et on restaure.",
      approfondir:
        "Raisonne en couches : prévenir (mots de passe, mises à jour), limiter (2FA, comptes sans droits administrateur), détecter (antivirus, alertes de connexion), restaurer (sauvegarde). Une bonne réponse au concours protège généralement l'une de ces couches sans en sacrifier une autre. Les questions de sécurité sont souvent des situations : identifie d'abord la menace (vol de mot de passe ? interception ? maliciel ?), puis la protection qui y répond exactement. Repère aussi les réponses « magiques » (navigation privée, mode avion, effacer l'historique) : elles ne protègent pas contre les attaques réseau ou le hameçonnage.",
      cards: [
        ["Règle de sauvegarde 3-2-1", "3 copies, 2 supports différents, 1 copie hors site", false],
        ["Ver informatique", "Maliciel qui se propage seul par le réseau", true],
        ["Rançongiciel : premiers réflexes", "Déconnecter, ne pas payer, porter plainte, restaurer", false],
        ["Pare-feu", "Filtre les connexions réseau entrantes et sortantes", true],
        ["Que garantit le cadenas HTTPS ?", "Une connexion chiffrée, pas l'honnêteté du site", false],
      ],
    },
  ],
  questions: [
    q("B-DIG-SECU-001", S, "dig.secu.https", 2, "Tu arrives sur une page qui affiche un cadenas et une adresse en https://. Que garantit ce cadenas ?", [
      ["Les échanges entre ton navigateur et ce serveur sont chiffrés", true, "HTTPS chiffre la connexion ; le certificat atteste le nom de domaine."],
      ["Le site appartient à une entreprise honnête", false, "Un site d'hameçonnage peut obtenir un certificat gratuit et afficher le cadenas."],
      ["Le site ne contient aucun virus", false, "Le chiffrement ne dit rien du contenu téléchargé."],
      ["Tes données ne seront jamais revendues", false, "Ce que le site fait des données dépend de sa politique, pas du protocole."],
    ], "Le cadenas signifie que la connexion est chiffrée et que le serveur détient un certificat valide pour ce nom de domaine. Il ne dit rien des intentions du propriétaire : il faut toujours vérifier le nom de domaine lui-même.", "Cadenas = connexion chiffrée, pas site de confiance.", {
      hints: ["Le S de HTTPS signifie « sécurisé » : mais sécurisé comment ?", "Le protocole protège le trajet des données, pas leur destination.", "Seule la réponse qui parle de chiffrement est exacte."],
      lessonAnchor: "erreur",
    }),
    q("B-DIG-SECU-002", S, "dig.secu.sauvegarde", 1, "Que préconise la règle de sauvegarde « 3-2-1 » ?", [
      ["3 copies des données, sur 2 supports différents, dont 1 hors du lieu habituel", true, "C'est l'énoncé exact de la règle."],
      ["3 sauvegardes par jour, pendant 2 semaines, sur 1 disque", false, "La règle porte sur le nombre de copies et leur répartition, pas sur la fréquence."],
      ["3 mots de passe, 2 facteurs, 1 antivirus", false, "Mélange de notions de sécurité sans rapport avec la sauvegarde."],
      ["3 disques identiques rangés au même endroit", false, "Un sinistre (vol, incendie) détruirait toutes les copies : il faut une copie ailleurs."],
    ], "La règle 3-2-1 répartit le risque : plusieurs copies (panne), des supports différents (défaut d'un type de support), une copie hors site (vol, incendie, rançongiciel).", "3 copies, 2 supports, 1 hors site.", {
      hints: ["Les trois chiffres décrivent des copies, des supports et un lieu.", "Le 3 compte les copies des données.", "Le 1 désigne la copie conservée ailleurs."],
      lessonAnchor: "formules",
    }),
    q("B-DIG-SECU-003", S, "dig.secu.malware", 2, "Un message s'affiche sur ton ordinateur : « Vos fichiers ont été chiffrés. Payez 500 € en cryptomonnaie sous 48 h pour les récupérer. » Quelle réaction est la bonne ?", [
      ["Déconnecter l'ordinateur du réseau, ne pas payer, porter plainte puis restaurer une sauvegarde", true, "Ce sont les réflexes recommandés par cybermalveillance.gouv.fr."],
      ["Payer rapidement pour éviter l'augmentation de la rançon", false, "Payer ne garantit pas la restitution et finance les attaquants."],
      ["Redémarrer plusieurs fois l'ordinateur pour effacer le message", false, "Le chiffrement persiste ; on risque aussi de perdre des preuves."],
      ["Brancher ton disque de sauvegarde pour récupérer les fichiers tout de suite", false, "Le maliciel, encore actif, pourrait chiffrer aussi la sauvegarde."],
    ], "C'est un rançongiciel. On isole l'appareil pour stopper la propagation, on ne paie pas, on conserve les preuves et on porte plainte avant de réinstaller, puis on restaure depuis une sauvegarde saine une fois le système nettoyé.", "Rançongiciel : isoler, ne pas payer, porter plainte, restaurer.", {
      hints: ["Identifie le type de maliciel.", "Première urgence : empêcher la propagation à d'autres appareils.", "La sauvegarde ne se rebranche qu'après nettoyage du système."],
      lessonAnchor: "methode",
    }),
    q("B-DIG-SECU-004", S, "dig.secu.phishing", 2, "Tu reçois ce courriel : « Votre compte de messagerie sera supprimé dans 2 heures. Cliquez ici pour le conserver. » Expéditeur : support@messagerie-verif-compte.com. Quel ensemble d'indices révèle un hameçonnage ?", [
      ["L'urgence, la menace et un expéditeur dont le domaine n'est pas celui du service", true, "Ce sont trois signaux classiques d'hameçonnage réunis."],
      ["La présence du logo officiel du service", false, "Un logo se copie en un instant : il ne prouve rien, dans un sens comme dans l'autre."],
      ["Le fait que le message soit rédigé en français correct", false, "Beaucoup d'hameçonnages sont aujourd'hui sans faute."],
      ["Le fait que le courriel arrive en semaine", false, "Le jour de réception n'est pas un indice pertinent."],
    ], "L'hameçonnage joue sur la pression (délai court, menace de perte) et imite un service. Le nom de domaine de l'expéditeur, messagerie-verif-compte.com, n'appartient pas au fournisseur de messagerie. On ne clique pas et on se connecte soi-même au service.", "Urgence + demande d'action + domaine inconnu = hameçonnage.", {
      hints: ["Pense aux leviers psychologiques utilisés par les fraudeurs.", "Regarde ce qui suit le @ dans l'adresse de l'expéditeur.", "Les éléments faciles à imiter (logo, langue) ne sont pas des indices fiables."],
    }),
    q("B-DIG-SECU-005", S, "dig.secu.password", 1, "À quoi sert un gestionnaire de mots de passe ?", [
      ["À générer et conserver dans un coffre chiffré un mot de passe différent pour chaque service", true, "Il rend praticable l'usage de mots de passe longs et uniques."],
      ["À utiliser le même mot de passe partout sans risque", false, "C'est précisément la pratique qu'il permet d'éviter."],
      ["À envoyer tes mots de passe par courriel quand tu les oublies", false, "Aucun outil sérieux ne transmet des mots de passe en clair par courriel."],
      ["À remplacer l'authentification à deux facteurs", false, "Les deux protections se complètent."],
    ], "Le gestionnaire retient pour toi des dizaines de mots de passe forts, stockés chiffrés et déverrouillés par un unique mot de passe maître (à choisir très robuste, protégé par la 2FA si possible).", "Gestionnaire = mots de passe uniques, coffre chiffré, un mot de passe maître.", {
      hints: ["Le problème : retenir des dizaines de mots de passe différents.", "L'outil les stocke de façon protégée.", "Un seul mot de passe à retenir : le mot de passe maître."],
    }),
    q("B-DIG-SECU-006", S, "dig.secu.password", 2, "Un forum de jeux vidéo sur lequel tu es inscrit annonce le vol de sa base d'utilisateurs. Tu y utilisais le même mot de passe que pour ta messagerie. Que fais-tu en priorité ?", [
      ["Changer le mot de passe de ta messagerie et du forum, puis activer la double authentification", true, "Les pirates testeront le mot de passe volé sur d'autres services, à commencer par les messageries."],
      ["Supprimer seulement ton compte du forum", false, "Le mot de passe a déjà fuité et reste valable sur ta messagerie."],
      ["Attendre de voir si tu reçois des messages suspects", false, "Une connexion frauduleuse peut être silencieuse ; il faut agir avant."],
      ["Ajouter un chiffre à la fin du mot de passe du forum uniquement", false, "Variation prévisible, et la messagerie reste exposée."],
    ], "Après une fuite, le risque principal est la réutilisation (credential stuffing). La messagerie est prioritaire car elle permet de réinitialiser les autres comptes. On change aussi le mot de passe partout où il était réutilisé et on active la 2FA.", "Fuite : changer le mot de passe partout où il est réutilisé, messagerie d'abord.", {
      hints: ["Quel compte est réellement menacé par la fuite ?", "Les pirates essaient les identifiants volés sur d'autres services.", "La messagerie donne accès à la réinitialisation de tous tes comptes."],
      lessonAnchor: "exemple",
    }),
    q("B-DIG-SECU-007", S, "dig.secu.protection", 1, "Quel est le rôle d'un pare-feu ?", [
      ["Filtrer les connexions réseau entrantes et sortantes selon des règles", true, "C'est sa définition : il autorise ou bloque des flux réseau."],
      ["Analyser les fichiers pour détecter les virus", false, "C'est le rôle de l'antivirus."],
      ["Sauvegarder automatiquement les données", false, "C'est le rôle d'un logiciel de sauvegarde."],
      ["Chiffrer le disque dur", false, "C'est le rôle d'un outil de chiffrement."],
    ], "Le pare-feu se place entre l'appareil (ou le réseau local) et l'extérieur ; il bloque les connexions non autorisées. Il complète l'antivirus sans le remplacer.", "Pare-feu = filtre réseau ; antivirus = analyse des fichiers.", {
      hints: ["Le nom évoque une barrière.", "Cette barrière se place entre ton appareil et le réseau.", "Il ne s'occupe pas des fichiers mais des connexions."],
    }),
    q("B-DIG-SECU-008", S, "dig.secu.malware", 2, "Un programme malveillant se propage d'ordinateur en ordinateur à travers le réseau, sans qu'aucun utilisateur n'ouvre de fichier. De quel type de maliciel s'agit-il ?", [
      ["Un ver", true, "Le ver se réplique et se propage de façon autonome par le réseau."],
      ["Un cheval de Troie", false, "Le cheval de Troie se cache dans un logiciel que l'utilisateur installe lui-même."],
      ["Un logiciel espion", false, "Le logiciel espion collecte des données ; sa propagation autonome n'est pas sa caractéristique."],
      ["Un virus", false, "Le virus a besoin qu'un fichier infecté soit ouvert ou exécuté."],
    ], "La différence entre virus et ver tient au mode de propagation : le virus voyage avec un fichier hôte qu'il faut ouvrir, le ver se propage seul en exploitant des failles réseau (d'où l'importance des mises à jour).", "Ver = propagation autonome par le réseau.", {
      hints: ["Le critère est le mode de propagation.", "Aucune action de l'utilisateur n'est nécessaire.", "Ce n'est pas le virus, qui a besoin d'un fichier ouvert."],
      reserved: true,
    }),
    q("B-DIG-SECU-009", S, "dig.secu.protection", 1, "Ton système d'exploitation propose une mise à jour de sécurité. Pourquoi l'installer sans tarder ?", [
      ["Elle corrige des failles connues que des attaquants peuvent exploiter", true, "Une fois un correctif publié, la faille est connue de tous, y compris des pirates."],
      ["Elle accélère toujours l'ordinateur", false, "Ce n'est pas le but d'un correctif de sécurité, et ce n'est pas garanti."],
      ["Elle remplace l'antivirus", false, "Mise à jour et antivirus sont deux protections complémentaires."],
      ["Elle sauvegarde automatiquement les fichiers", false, "Une mise à jour ne fait pas de sauvegarde."],
    ], "Un correctif (patch) ferme une vulnérabilité. Retarder la mise à jour laisse ouverte une faille désormais documentée : c'est la porte d'entrée de nombreux vers et rançongiciels.", "Mettre à jour = fermer des failles connues.", {
      hints: ["Que contient un correctif de sécurité ?", "Une faille corrigée devient publique.", "La mise à jour ferme une porte d'entrée."],
    }),
    q("B-DIG-SECU-010", S, "dig.secu.wifi", 2, "Dans un café, tu vois deux réseaux Wi-Fi ouverts : « Cafe_Lumiere » et « Cafe_Lumiere_Free ». Tu dois consulter ton compte bancaire. Quel choix est le plus sûr ?", [
      ["Utiliser plutôt la connexion mobile de ton téléphone (4G ou 5G)", true, "Tu évites le réseau ouvert et le risque de faux point d'accès."],
      ["Choisir « Cafe_Lumiere_Free », qui capte mieux", false, "Un réseau au nom proche du vrai peut être un faux point d'accès tenu par un pirate."],
      ["Ouvrir une fenêtre de navigation privée sur le Wi-Fi", false, "La navigation privée n'efface que l'historique local ; elle ne protège pas le trafic."],
      ["Désactiver le pare-feu pour que la connexion soit plus rapide", false, "On supprime une protection sans rien gagner en sécurité."],
    ], "Sur un Wi-Fi ouvert, le trafic peut être observé et un pirate peut créer un faux réseau au nom trompeur. Pour une opération sensible, on préfère sa connexion mobile ou, à défaut, un VPN de confiance.", "Opération sensible : pas de Wi-Fi ouvert ; connexion mobile ou VPN.", {
      hints: ["Deux réseaux au nom presque identique : pourquoi est-ce suspect ?", "La navigation privée ne chiffre rien.", "Le plus sûr est d'éviter totalement le réseau ouvert."],
    }),
    q("B-DIG-SECU-011", S, "dig.secu.2fa", 3, "Tu reçois par SMS un code de connexion à ton compte que tu n'as pas demandé. Une minute plus tard, un « conseiller » t'appelle et te demande de lui lire ce code « pour sécuriser ton compte ». Que se passe-t-il ?", [
      ["Quelqu'un tente d'entrer dans ton compte et a besoin de ce code : tu raccroches sans le donner et tu changes ton mot de passe", true, "Le code arrive parce qu'une connexion est tentée, souvent avec ton mot de passe déjà volé ; le donner ouvrirait le compte."],
      ["C'est une procédure normale : un service peut demander le code par téléphone", false, "Aucun service légitime ne demande ce code : il sert uniquement à toi."],
      ["Le SMS est une erreur sans conséquence, tu peux l'ignorer et garder ton mot de passe", false, "Un code non demandé signale une tentative d'accès à ton compte, souvent avec un mot de passe déjà volé."],
      ["Il suffit de supprimer le SMS pour annuler la tentative", false, "Supprimer le SMS ne change rien au mot de passe volé."],
    ], "La double authentification bloque l'attaquant qui n'a que le mot de passe ; il tente alors d'obtenir le code par manipulation (vishing). On ne communique jamais un code reçu, on change son mot de passe et on vérifie les connexions récentes.", "Un code reçu ne se communique jamais ; un code non demandé signale une tentative d'accès à ton compte.", {
      hints: ["Pourquoi recevrais-tu un code sans t'être connecté ?", "L'attaquant a probablement déjà le premier facteur.", "Le second facteur ne doit jamais être partagé."],
      reserved: true,
    }),
    q("B-DIG-SECU-012", S, "dig.secu.sauvegarde", 3, "Ton dossier Documents est synchronisé en permanence avec un service de cloud. Un rançongiciel chiffre ce dossier sur ton ordinateur. Pourquoi la synchronisation ne te protège-t-elle pas forcément ?", [
      ["Les fichiers chiffrés sont synchronisés à leur tour et remplacent les versions du cloud", true, "La synchronisation recopie toute modification, y compris le chiffrement malveillant."],
      ["Le cloud ne stocke jamais de documents", false, "Il les stocke : c'est justement son rôle."],
      ["Le rançongiciel supprime le compte cloud", false, "Ce n'est pas le mécanisme en cause."],
      ["La synchronisation ne fonctionne qu'une fois par an", false, "Elle est au contraire quasi instantanée, d'où le problème."],
    ], "Synchroniser, c'est garder deux emplacements identiques : une suppression ou un chiffrement se propage. Une vraie sauvegarde est une copie indépendante, si possible déconnectée ou versionnée, d'où la règle 3-2-1.", "Synchronisation ≠ sauvegarde : une erreur se propage.", {
      hints: ["Que fait une synchronisation quand un fichier local change ?", "Le chiffrement est une modification comme une autre.", "Seule une copie indépendante permet de revenir en arrière."],
      lessonAnchor: "erreur",
    }),
  ],
};
