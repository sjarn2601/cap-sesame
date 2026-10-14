import { E, skill, type EnPart } from "./common";

const S = "en.gerund";

export const GERUND: EnPart = {
  skill: skill(S, "Grammaire", "Gérondif ou infinitif", ["gerund", "gerondif", "infinitive", "infinitif", "ing", "to", "stop", "remember", "make", "let", "look forward to"]),
  lesson: {
    skillId: S,
    title: "Gérondif ou infinitif",
    objectives: ["Mémoriser les verbes suivis de -ing ou de to", "Distinguer les verbes qui changent de sens (stop, remember, forget, try)", "Construire make et let"],
    regle:
      "Quand deux verbes se suivent, le second prend la forme imposée par le premier : V-ing (gérondif), to + base verbale, ou base verbale seule. Ce n'est pas une question de sens mais d'usage : il faut mémoriser les principaux.\n\n" +
      "Verbes suivis de -ing : enjoy, avoid, mind, finish, keep, suggest, consider, deny, miss, risk, practise, can't stand, can't help, it's no use, it's worth, be used to, look forward to, object to. Après toute préposition, on emploie aussi -ing : interested in learning, good at drawing, before leaving, without saying. Attention : dans look forward to, be used to, object to, to est une préposition, donc -ing : I look forward to hearing from you.\n\n" +
      "Verbes suivis de to + base verbale : want, would like, decide, hope, expect, plan, promise, refuse, agree, manage, afford, offer, learn, seem, need, choose.\n\n" +
      "Base verbale sans to : après les modaux, et après make (forcer, faire faire) et let (laisser, permettre) avec un objet : They made us wait. My parents let me go. Au passif, make reprend to : We were made to wait.\n\n" +
      "Certains verbes changent de sens. Stop + -ing : arrêter une activité (He stopped smoking) ; stop + to : s'arrêter pour faire autre chose (He stopped to smoke). Remember / forget + -ing : se souvenir d'un fait passé (I remember meeting her) ; remember / forget + to : penser à faire, ne pas oublier une tâche (Remember to lock the door). Try + to : s'efforcer de ; try + -ing : faire un essai pour voir.\n\n" +
      "Like, love, hate, prefer, start, begin, continue acceptent les deux sans grand changement de sens ; mais would like, would love, would prefer exigent to.",
    formules:
      "+ -ing : enjoy, avoid, mind, finish, keep, suggest, consider, deny, miss, risk\n" +
      "+ -ing : can't stand, can't help, it's no use, it's worth, be used to, look forward to\n" +
      "préposition + -ing : interested in doing, good at doing, without doing\n" +
      "+ to : want, would like, decide, hope, expect, plan, promise, refuse, agree, manage, afford\n" +
      "make / let + objet + base verbale : made us wait, let me go\n" +
      "stop doing (arrêter) ≠ stop to do (s'arrêter pour)\n" +
      "remember doing (souvenir) ≠ remember to do (penser à)\n" +
      "used to do (habitude passée) ≠ be used to doing (être habitué à)",
    methode:
      "1. Repère le verbe ou la préposition qui précède le blanc.\n" +
      "2. Si c'est une préposition (y compris le to de look forward to), mets -ing.\n" +
      "3. Si c'est make, let ou un modal, mets la base verbale.\n" +
      "4. Sinon, rappelle-toi la liste : -ing ou to ? Pour stop, remember, forget, try, vérifie le sens dans la phrase.",
    exemple:
      "« He stopped ___ two years ago; he feels much healthier now. » La suite (il se sent mieux) indique qu'il a arrêté de fumer : stopped smoking. Stopped to smoke voudrait dire qu'il s'est arrêté pour fumer une cigarette.\n\n" +
      "« I look forward to ___ from you. » Ici to est une préposition (on dit look forward to the holidays) : il faut -ing, hearing.",
    erreur:
      "✗ I look forward to hear from you → ✓ I look forward to hearing from you\n" +
      "✗ I enjoy to travel → ✓ I enjoy travelling\n" +
      "✗ They made us to wait → ✓ They made us wait\n" +
      "✗ My parents let me to go out → ✓ My parents let me go out\n" +
      "✗ I would like going abroad → ✓ I would like to go abroad\n" +
      "✗ I am used to get up early → ✓ I am used to getting up early",
    approfondir:
      "Used to + base verbale décrit une habitude passée révolue (I used to live in Lille) ; be / get used to + -ing signifie être ou s'habituer à (I'm used to living alone). Les deux sont très souvent testés ensemble.\n\n" +
      "Astuce : pour savoir si to est une préposition, remplace le verbe par un nom. Si « look forward to the weekend » fonctionne, to est une préposition et le verbe prendra -ing.\n\n" +
      "Gestion du temps : ces questions sont rapides si les listes sont apprises. Révise-les en phrases complètes plutôt qu'en mots isolés.",
    cards: [
      ["J'ai hâte d'avoir de vos nouvelles", "I look forward to hearing from you", true],
      ["stop smoking / stop to smoke", "arrêter de fumer / s'arrêter pour fumer", false],
      ["Pense à fermer la porte", "Remember to lock the door", true],
      ["Ils nous ont fait attendre", "They made us wait", true],
      ["enjoy, avoid, mind, finish", "+ V-ing", false],
    ],
  },
  questions: [
    E("B-EN-GER-001", S, "en.ger.lists", 1, "Complete the sentence: « I really enjoy ___ in the mountains at the weekend. »", [
      ["hiking", true, "Enjoy est suivi de -ing."],
      ["to hike", false, "Calque de « aimer faire » : enjoy n'admet pas to."],
      ["hike", false, "La base verbale seule ne suit pas enjoy."],
      ["to hiking", false, "Construction incorrecte après enjoy."],
    ], "Enjoy fait partie des verbes suivis du gérondif : I enjoy hiking.", "enjoy, avoid, mind, finish + V-ing.", [
      "Quel verbe précède le blanc ?",
      "Ce verbe appartient à une liste à mémoriser.",
      "Il est suivi de -ing.",
    ]),
    E("B-EN-GER-002", S, "en.ger.lists", 1, "Complete the sentence: « After a long discussion, we decided ___ the trip. »", [
      ["to postpone", true, "Decide est suivi de to + base verbale."],
      ["postponing", false, "Decide n'admet pas le gérondif."],
      ["postpone", false, "Il manque to après decide."],
      ["to postponing", false, "Après to infinitif, on met la base verbale."],
    ], "Decide se construit avec to + base verbale : we decided to postpone.", "decide, want, hope, plan, refuse + to + base verbale.", [
      "Quel verbe précède le blanc ?",
      "Decide exprime une intention tournée vers l'avenir.",
      "Il est suivi de to + base verbale.",
    ]),
    E("B-EN-GER-003", S, "en.ger.lists", 1, "Complete the sentence: « You should avoid ___ too much coffee before an exam. »", [
      ["drinking", true, "Avoid est suivi de -ing."],
      ["to drink", false, "Calque de « éviter de boire » : avoid n'admet pas to."],
      ["drink", false, "La base verbale ne suit pas avoid."],
      ["drunk", false, "Le participe passé ne convient pas ici."],
    ], "Avoid appartient à la liste des verbes suivis de -ing : avoid drinking.", "avoid + V-ing.", [
      "Le français dit « éviter de » : l'anglais suit-il ce modèle ?",
      "Avoid est dans la liste des verbes en -ing.",
      "Ajoute -ing au verbe.",
    ], { a: "formules" }),
    E("B-EN-GER-004", S, "en.ger.meaning", 2, "Complete the sentence: « He stopped ___ two years ago, and he feels much healthier now. »", [
      ["smoking", true, "Stop + -ing : arrêter une activité."],
      ["to smoke", false, "Stop + to signifie s'arrêter pour fumer : sens contraire au contexte."],
      ["smoke", false, "La base verbale seule ne suit pas stop."],
      ["to smoking", false, "Construction incorrecte."],
    ], "Il se sent mieux car il a arrêté de fumer : stopped smoking.", "stop doing = arrêter de faire ; stop to do = s'arrêter pour faire.", [
      "Stop change de sens selon la forme qui suit.",
      "La santé s'améliore : a-t-il arrêté de fumer ou s'est-il arrêté pour fumer ?",
      "Arrêter une activité : -ing.",
    ], { a: "exemple" }),
    E("B-EN-GER-005", S, "en.ger.meaning", 2, "Complete the sentence: « Remember ___ the door when you leave the office. »", [
      ["to lock", true, "Remember + to : penser à faire quelque chose."],
      ["locking", false, "Remember + -ing signifie se souvenir d'un fait passé, incohérent avec when you leave."],
      ["lock", false, "La base verbale seule ne suit pas remember."],
      ["to locking", false, "Construction incorrecte."],
    ], "Il s'agit d'une tâche à accomplir plus tard : remember to lock.", "remember to do = penser à faire ; remember doing = se souvenir d'avoir fait.", [
      "L'action est-elle à faire ou déjà faite ?",
      "Remember change de sens selon la forme.",
      "Pour une tâche future : to + base verbale.",
    ]),
    E("B-EN-GER-006", S, "en.ger.meaning", 3, "Complete the sentence: « I'll never forget ___ the Pacific Ocean for the first time. »", [
      ["seeing", true, "Forget + -ing : souvenir d'un moment vécu."],
      ["to see", false, "Forget + to signifie oublier de faire, ce qui n'a pas de sens ici."],
      ["see", false, "La base verbale seule ne suit pas forget."],
      ["to seeing", false, "Construction incorrecte."],
    ], "Le locuteur évoque un souvenir vécu qu'il n'oubliera jamais : forget seeing.", "never forget doing = ne jamais oublier un moment vécu.", [
      "Le locuteur a-t-il déjà vu l'océan ?",
      "Forget fonctionne comme remember.",
      "Souvenir d'un fait vécu : -ing.",
    ], { r: true }),
    E("B-EN-GER-007", S, "en.ger.prep", 2, "Complete the closing line of the email: « I look forward to ___ from you soon. »", [
      ["hearing", true, "To est ici une préposition : look forward to + -ing."],
      ["hear", false, "Erreur classique : to n'est pas la marque de l'infinitif dans look forward to."],
      ["heard", false, "Le participe passé ne convient pas."],
      ["have heard", false, "Construction incorrecte après look forward to."],
    ], "Dans look forward to, to est une préposition (look forward to the meeting) : le verbe prend -ing.", "look forward to / be used to / object to + V-ing.", [
      "To est-il ici une préposition ou la marque de l'infinitif ?",
      "Essaie de mettre un nom après to.",
      "Après une préposition : -ing.",
    ], { a: "erreur" }),
    E("B-EN-GER-008", S, "en.ger.makelet", 1, "Complete the sentence: « My parents let me ___ to the festival with my friends. »", [
      ["go", true, "Let + objet + base verbale."],
      ["to go", false, "Calque de « permettre de » : let n'admet pas to."],
      ["going", false, "Let n'est pas suivi de -ing."],
      ["went", false, "Le prétérit ne s'emploie pas après let + objet."],
    ], "Let (laisser, permettre) se construit avec la base verbale : let me go.", "make / let + objet + base verbale.", [
      "Quel verbe précède l'objet me ?",
      "Let fait partie d'un petit groupe particulier.",
      "Ni to, ni -ing.",
    ]),
    E("B-EN-GER-009", S, "en.ger.makelet", 2, "Complete the sentence: « The teacher made us ___ the essay again. »", [
      ["write", true, "Make + objet + base verbale : forcer à faire."],
      ["to write", false, "Make à la voix active n'est pas suivi de to."],
      ["writing", false, "Make n'est pas suivi de -ing dans ce sens."],
      ["wrote", false, "Le prétérit ne s'emploie pas après make + objet."],
    ], "Make + objet + base verbale : the teacher made us write.", "make somebody do (actif) ; somebody was made to do (passif).", [
      "Quel verbe précède l'objet us ?",
      "Make signifie ici forcer.",
      "Base verbale sans to.",
    ]),
    E("B-EN-GER-010", S, "en.ger.used", 2, "Complete the sentence: « She has worked in a bakery for years, so she is used to ___ at 4 a.m. »", [
      ["getting up", true, "Be used to + -ing : être habitué à."],
      ["get up", false, "Confusion avec used to + base verbale, qui exprime une habitude passée révolue."],
      ["have got up", false, "Construction incorrecte après be used to."],
      ["be getting up", false, "Construction incorrecte après be used to."],
    ], "Be used to signifie être habitué à ; to est une préposition : she is used to getting up.", "be used to + V-ing (habitué) ≠ used to + base verbale (autrefois).", [
      "Is used to ou used to : quelle différence de sens ?",
      "Ici, to est une préposition.",
      "Après une préposition : -ing.",
    ], { a: "approfondir" }),
    E("B-EN-GER-011", S, "en.ger.lists", 1, "Complete the sentence: « I would like ___ abroad during my third year. »", [
      ["to study", true, "Would like est suivi de to + base verbale."],
      ["studying", false, "Like accepte -ing, mais would like exige to."],
      ["study", false, "Il manque to."],
      ["to studying", false, "Construction incorrecte."],
    ], "Would like (souhait précis) se construit avec to : I would like to study abroad.", "would like / would love / would prefer + to + base verbale.", [
      "Like et would like se construisent-ils pareil ?",
      "Would like exprime un souhait.",
      "Il est suivi de to + base verbale.",
    ]),
    E("B-EN-GER-012", S, "en.ger.lists", 3, "Complete the sentence: « It's no use ___ about the decision: it's final. »", [
      ["complaining", true, "It's no use + -ing : ça ne sert à rien de."],
      ["of complaining", false, "Calque de « inutile de » : it's no use se construit directement avec -ing, sans préposition."],
      ["complain", false, "La base verbale ne suit pas cette expression."],
      ["complained", false, "Le participe passé ne convient pas."],
    ], "It's no use, comme it's worth et can't help, est suivi de -ing : It's no use complaining.", "it's no use / it's worth / can't help + V-ing.", [
      "C'est une expression figée.",
      "Elle appartient à la même liste que it's worth.",
      "Elle est suivie du gérondif.",
    ], { r: true }),
  ],
};
