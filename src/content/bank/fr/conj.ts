// Français : conjugaison (temps, modes, verbes irréguliers).
import { maker, type FrPart } from "./_util";

const Q = maker("fr.conj");

export const CONJ: FrPart = {
  skill: { id: "fr.conj", subjectCode: "FR", domain: "Conjugaison", name: "Conjugaison : temps et verbes irréguliers", synonyms: ["conjugaison", "passe simple", "subjonctif", "conditionnel", "futur", "imperatif", "verbes irreguliers"] },
  lesson: {
    skillId: "fr.conj",
    title: "Conjugaison : temps, modes et verbes irréguliers",
    objectives: ["Conjuguer sans faute les verbes irréguliers fréquents", "Distinguer futur et conditionnel à la première personne", "Former le passé simple et le subjonctif présent"],
    prerequisites: [],
    regle:
      "Présent. Les verbes en -dre gardent le d au singulier (je prends, il coud, il moud), sauf ceux en -indre et -soudre, qui l'abandonnent (je peins, il craint, je résous, il résout). Les verbes en -eler et -eter doublent la consonne ou prennent un accent grave devant un e muet : j'appelle, je jette, mais j'achète, je gèle. Les composés de dire font -disez à la deuxième personne du pluriel (vous contredisez, vous interdisez, vous prédisez), seuls « vous dites » et « vous redites » gardent -tes.\n\nFutur simple : radical + -rai, -ras, -ra, -rons, -rez, -ront. Pièges : je courrai, je mourrai, j'acquerrai (deux r), j'enverrai, je cueillerai, je conclurai. Le conditionnel présent se forme sur le même radical avec les terminaisons de l'imparfait : je courrais, nous enverrions.\n\nFutur ou conditionnel à la première personne du singulier ? « Je serai » et « je serais » se prononcent presque pareil. Remplace « je » par « il » : il sera (futur) ou il serait (conditionnel).\n\nPassé simple. Premier groupe : -ai, -as, -a, -âmes, -âtes, -èrent. Deuxième groupe et beaucoup de verbes du troisième : -is, -is, -it, -îmes, -îtes, -irent. Autres verbes du troisième : -us (il courut, il crut, il vécut, il mourut, il résolut) ou -ins (il vint, il tint). Formes à connaître : il vainquit, il naquit, il cousit, il prit, il conquit.\n\nSubjonctif présent : terminaisons -e, -es, -e, -ions, -iez, -ent. N'oublie pas le i de -ions et -iez quand le radical se termine par y, i ou ill (que nous voyions, que vous croyiez, que nous riions). Irréguliers : que j'aie, qu'il ait, que je sois, que je fasse, que j'aille, que je puisse, que je sache, que je veuille.\n\nImpératif : la deuxième personne du singulier des verbes en -er (et d'aller, cueillir, offrir, ouvrir) ne prend pas de s (mange, va, offre), sauf devant « en » et « y » non suivis d'un infinitif : manges-en, vas-y.",
    formules:
      "Futur à double r : courir → je courrai ; mourir → je mourrai ; acquérir → j'acquerrai ; envoyer → j'enverrai ; voir → je verrai ; pouvoir → je pourrai\nPrésent en -dre : il prend, il moud, il coud ; mais il peint, il craint, il résout\nVous dites, vous redites ; mais vous contredisez, vous interdisez, vous médisez, vous prédisez\nPassé simple : il vainquit, il naquit, il cousit, il vécut, il résolut, il crut (croire), il crût (croître)\nSubjonctif : que nous voyions, que vous croyiez, que nous ayons, que vous soyez (sans i)\nImpératif : mange, va, offre ; mais manges-en, vas-y",
    methode:
      "1. Repère le temps et le mode demandés (souvent indiqués entre parenthèses ou par un indice : demain, hier, il faut que).\n2. Identifie le groupe du verbe et sa personne.\n3. Pour je + -rai ou -rais, remplace par « il » pour trancher entre futur et conditionnel.\n4. Pour un verbe en -dre, vérifie s'il se termine en -indre ou -soudre.\n5. Pour nous et vous au subjonctif ou à l'imparfait, pense au i de -ions et -iez après un radical en y, i ou ill (voyions, riions, travaillions).",
    exemple:
      "« Hier, ils (vaincre) leurs adversaires. » Récit au passé simple, troisième personne du pluriel. Vaincre fait au passé simple je vainquis, il vainquit, ils vainquirent. Réponse : ils vainquirent.\n\n« Demain, je (courir) le semi-marathon. » Futur, première personne. Courir double le r au futur : je courrai. Contrôle : il courra (futur) et non il courrait.",
    erreur:
      "✗ « Je résouds » → ✓ je résous (verbes en -soudre : pas de d)\n✗ « Vous contredites » → ✓ vous contredisez (seuls dire et redire gardent -tes)\n✗ « Je courirai », « j'envoierai » → ✓ je courrai, j'enverrai\n✗ « Que nous voyons » au subjonctif → ✓ que nous voyions\n✗ « Va-y » → ✓ vas-y (s euphonique devant y)\n✗ « Ils croyèrent » → ✓ ils crurent",
    approfondir:
      "Distingue croire et croître au passé simple : croître prend un accent circonflexe à toutes les personnes (je crûs, il crût, ils crûrent), croire seulement à nous et vous, comme tous les passés simples (je crus, il crut, nous crûmes, ils crurent).\n\nLes rectifications de 1990 admettent l'accent grave pour tous les verbes en -eler et -eter (il étiquète), sauf appeler, jeter et leurs dérivés. Les questions sûres portent donc sur appeler et jeter (j'appelle, je jette) et sur acheter (j'achète), dont l'orthographe ne varie pas.\n\nGestion du temps : une question de conjugaison se joue sur une ou deux lettres. Lis d'abord les options pour voir ce qui varie (une terminaison, un r double, un i), puis applique la règle correspondante sans relire toute la phrase.",
    cards: [
      ["Courir au futur, je…", "je courrai (deux r)", false],
      ["Résoudre au présent, je…", "je résous, il résout", false],
      ["Contredire au présent, vous…", "vous contredisez", false],
      ["Futur ou conditionnel : je serai / je serais ?", "Remplace par « il » : il sera (futur), il serait (conditionnel)", false],
      ["Vaincre au passé simple, ils…", "ils vainquirent", false],
    ],
  },
  questions: [
    Q("B-FR-CONJ-001", "fr.conj.present", 2, "Complétez au présent : « Vous ___ sans cesse vos professeurs. » (contredire)", [
      ["contredisez", true, "Les composés de dire font -disez, sauf redire."],
      ["contredites", false, "Calque de « vous dites » : seuls dire et redire ont cette forme."],
      ["contredîtes", false, "Forme du passé simple, pas du présent."],
      ["contredisiez", false, "Forme de l'imparfait ou du subjonctif."],
    ], "Contredire, interdire, médire, prédire font « vous …disez » au présent. Seuls « vous dites » et « vous redites » gardent la forme en -tes.", "Vous dites, mais vous contredisez.", [
      "Le verbe est un composé de dire.", "Tous les composés de dire suivent-ils dire ?", "Seul redire imite dire à cette personne.",
    ]),
    Q("B-FR-CONJ-002", "fr.conj.futur", 2, "Complétez au futur : « Si le bus tarde, je ___ jusqu'à la gare. » (courir)", [
      ["courrai", true, "Courir double le r au futur : je courrai."],
      ["courirai", false, "Le futur se forme sur le radical courr-, pas sur l'infinitif entier."],
      ["courai", false, "Oubli du second r."],
      ["courrais", false, "Conditionnel : après « si » + présent, la principale est au futur."],
    ], "Si + présent appelle le futur dans la principale. Courir fait au futur je courrai (deux r : le premier appartient au radical, le second à la terminaison). Contrôle : il courra.", "Courir et mourir doublent le r au futur et au conditionnel.", [
      "Quel temps est demandé ?", "Le radical du futur de courir est particulier.", "On entend nettement deux r : cour-rai.",
    ], { a: "formules" }),
    Q("B-FR-CONJ-003", "fr.conj.passesimple", 3, "Complétez au passé simple : « Les assiégés ___ l'ennemi au troisième jour. » (vaincre)", [
      ["vainquirent", true, "Vaincre fait au passé simple ils vainquirent (c devient qu devant i)."],
      ["vainquèrent", false, "Terminaison du premier groupe appliquée à un verbe du troisième."],
      ["vaincurent", false, "Confusion avec les passés simples en -us."],
      ["vainquissent", false, "Forme du subjonctif imparfait."],
    ], "Vaincre a un passé simple en -is : je vainquis, il vainquit, ils vainquirent. Le c du radical devient qu devant une voyelle.", "Vaincre au passé simple : il vainquit, ils vainquirent.", [
      "Vaincre est un verbe du troisième groupe.", "Son passé simple se termine en -is, -it, -irent.", "Le c devient qu devant le i.",
    ], { r: true }),
    Q("B-FR-CONJ-004", "fr.conj.subjonctif", 2, "Complétez au subjonctif présent : « Il faut que nous ___ ce film avant samedi. » (voir)", [
      ["voyions", true, "Subjonctif présent : radical voy- + terminaison -ions."],
      ["voyons", false, "Forme de l'indicatif présent : il manque le i du subjonctif."],
      ["voions", false, "Le y du radical est obligatoire."],
      ["verrions", false, "Forme du conditionnel présent."],
    ], "Au subjonctif présent, nous et vous prennent les terminaisons -ions et -iez : que nous voyions, que vous voyiez. L'oral ne fait presque pas de différence avec l'indicatif, d'où la faute fréquente.", "Que nous voyions, que vous croyiez : y + i au subjonctif.", [
      "« Il faut que » impose le subjonctif.", "Quelle est la terminaison de « nous » au subjonctif ?", "Ajoute -ions au radical voy-.",
    ]),
    Q("B-FR-CONJ-005", "fr.conj.futurcond", 2, "Complétez : « Si tout va bien, je ___ à Lyon demain soir. » (être)", [
      ["serai", true, "Si + présent : principale au futur."],
      ["serais", false, "Le conditionnel suit « si » + imparfait, pas « si » + présent."],
      ["sois", false, "Subjonctif : aucun mot de la phrase ne l'impose."],
      ["serait", false, "Troisième personne : le sujet est « je »."],
    ], "Avec « si » + présent (si tout va bien), le fait est envisagé comme probable : principale au futur, je serai. Contrôle : il sera (et non il serait).", "Si + présent → futur ; si + imparfait → conditionnel.", [
      "À quel temps est le verbe après « si » ?", "Présent après si : quel temps dans la principale ?", "Remplace « je » par « il » pour vérifier.",
    ], { a: "methode" }),
    Q("B-FR-CONJ-006", "fr.conj.imperatif", 2, "Complétez à l'impératif : « ___-y avant midi, la boutique ferme tôt. » (aller, 2e personne du singulier)", [
      ["Vas", true, "Devant « y », l'impératif d'aller prend un s euphonique : vas-y."],
      ["Va", false, "Forme correcte sans pronom, mais le s est obligatoire devant y."],
      ["Vais", false, "Première personne de l'indicatif présent."],
      ["Ailles", false, "Forme du subjonctif présent."],
    ], "L'impératif « va » n'a pas de s, mais il en prend un devant « y » et « en » pour faciliter la liaison : vas-y, manges-en.", "Va, mais vas-y ; mange, mais manges-en.", [
      "Quelle est la forme simple de l'impératif d'aller ?", "Un pronom commençant par une voyelle suit.", "Une lettre est ajoutée pour la liaison.",
    ], { a: "erreur" }),
    Q("B-FR-CONJ-007", "fr.conj.imperatif", 1, "Complétez à l'impératif : « ___ tes légumes avant le dessert. » (manger, 2e personne du singulier)", [
      ["Mange", true, "Impératif des verbes en -er : pas de s à la 2e personne du singulier."],
      ["Manges", false, "Le s n'apparaît que devant « en » ou « y »."],
      ["Mangent", false, "Troisième personne du pluriel du présent."],
      ["Mangea", false, "Passé simple."],
    ], "À l'impératif présent, les verbes en -er ne prennent pas de s à la deuxième personne du singulier : mange, parle, chante.", "Impératif des verbes en -er : mange, sans s.", [
      "C'est un verbe du premier groupe.", "L'impératif suit-il l'indicatif « tu manges » ?", "Le s tombe à l'impératif.",
    ]),
    Q("B-FR-CONJ-008", "fr.conj.present", 2, "Complétez au présent : « Ce problème, je le ___ en deux minutes. » (résoudre)", [
      ["résous", true, "Les verbes en -soudre perdent le d au présent : je résous."],
      ["résouds", false, "Calque des verbes en -dre comme prendre ; les verbes en -soudre perdent le d."],
      ["résout", false, "Forme de la troisième personne."],
      ["résoud", false, "Le d n'apparaît jamais au singulier du présent."],
    ], "Résoudre, absoudre, dissoudre : je résous, tu résous, il résout. Le d n'apparaît pas au singulier.", "Verbes en -soudre : je résous, il résout.", [
      "Le verbe se termine par -soudre.", "Ces verbes gardent-ils le d au singulier ?", "Comme peindre (je peins), il n'y a pas de d.",
    ]),
    Q("B-FR-CONJ-009", "fr.conj.present", 3, "Complétez au présent : « Chaque matin, mon voisin ___ lui-même son café. » (moudre)", [
      ["moud", true, "Moudre garde le d au singulier : il moud."],
      ["mout", false, "Calque de résoudre (il résout) ; moudre garde le d."],
      ["moule", false, "Forme du subjonctif ou confusion avec le verbe mouler."],
      ["moulut", false, "Forme du passé simple."],
    ], "Moudre se conjugue je mouds, tu mouds, il moud, nous moulons. Contrairement aux verbes en -soudre, il garde le d au singulier.", "Moudre : il moud, nous moulons.", [
      "Moudre se termine en -oudre, pas en -soudre.", "Les verbes en -dre gardent en général leur d.", "Pense à « il coud ».",
    ], { r: true }),
    Q("B-FR-CONJ-010", "fr.conj.futur", 1, "Complétez au futur : « Nous vous ___ le dossier complet par courrier. » (envoyer)", [
      ["enverrons", true, "Envoyer a un futur irrégulier : j'enverrai, nous enverrons."],
      ["envoierons", false, "Futur régulier fautif : le radical change."],
      ["envoyerons", false, "Futur construit sur l'infinitif, incorrect pour ce verbe."],
      ["enverrions", false, "Forme du conditionnel présent."],
    ], "Envoyer et renvoyer ont un futur sur le radical enverr- : j'enverrai, nous enverrons.", "Envoyer : j'enverrai.", [
      "Le futur d'envoyer est irrégulier.", "Il ressemble au futur de voir.", "Le radical est enverr-.",
    ]),
    Q("B-FR-CONJ-011", "fr.conj.passesimple", 2, "Complétez au passé simple : « La romancière ___ en 1902 dans un village de Provence. » (naître)", [
      ["naquit", true, "Naître fait au passé simple il naquit."],
      ["naissa", false, "Terminaison du premier groupe appliquée à un verbe du troisième."],
      ["naquis", false, "Forme des deux premières personnes du singulier."],
      ["naissait", false, "Imparfait : la naissance est un fait ponctuel du récit."],
    ], "Naître a un passé simple irrégulier : je naquis, il naquit, ils naquirent.", "Naître au passé simple : il naquit.", [
      "Le verbe est naître, du troisième groupe.", "Son passé simple change de radical.", "Le radical est naqu-.",
    ]),
    Q("B-FR-CONJ-012", "fr.conj.present", 1, "Complétez au présent : « J'___ mes amis pour organiser la soirée. » (appeler)", [
      ["appelle", true, "Appeler double le l devant un e muet."],
      ["appèle", false, "L'accent grave concerne acheter ou geler, pas appeler."],
      ["appele", false, "Il manque le doublement du l."],
      ["apelle", false, "Appeler prend deux p."],
    ], "Appeler et jeter doublent la consonne devant un e muet : j'appelle, je jette. Acheter et geler prennent un accent grave : j'achète, je gèle.", "J'appelle, je jette ; j'achète, je gèle.", [
      "Le verbe se termine par -eler.", "Appeler double-t-il la consonne ou prend-il un accent ?", "Pense à « on l'appelle ».",
    ]),
    Q("B-FR-CONJ-013", "fr.conj.subjonctif", 1, "Complétez au subjonctif présent : « Je doute qu'ils ___ la vérité. » (savoir)", [
      ["sachent", true, "Savoir a un subjonctif irrégulier : qu'ils sachent."],
      ["savent", false, "Indicatif : « douter que » impose le subjonctif."],
      ["sauront", false, "Futur de l'indicatif."],
      ["sachant", false, "Participe présent, pas un verbe conjugué."],
    ], "Savoir au subjonctif présent : que je sache, qu'ils sachent. Le doute entraîne le subjonctif.", "Savoir au subjonctif : qu'il sache.", [
      "« Douter que » appelle quel mode ?", "Savoir a un subjonctif irrégulier.", "Pense à « pas que je sache ».",
    ]),
    Q("B-FR-CONJ-014", "fr.conj.passesimple", 3, "Complétez au passé simple : « Ils ___ aussitôt la promesse de leur ami. » (croire)", [
      ["crurent", true, "Croire fait au passé simple ils crurent."],
      ["crûrent", false, "Forme du verbe croître (grandir)."],
      ["croirent", false, "Forme inexistante."],
      ["croyèrent", false, "Terminaison du premier groupe, fautive ici."],
    ], "Croire a un passé simple en -us : je crus, il crut, ils crurent. L'accent circonflexe distingue croître : il crût, ils crûrent.", "Croire : ils crurent ; croître : ils crûrent.", [
      "Le passé simple de croire est en -us.", "Attention à un verbe voisin qui prend un accent.", "L'accent circonflexe appartient à croître.",
    ], { a: "approfondir", r: true }),
  ],
};
