import { E, skill, type EnPart } from "./common";

const S = "en.compar";

export const COMPAR: EnPart = {
  skill: skill(S, "Grammaire", "Comparatifs et superlatifs", ["comparative", "comparatif", "superlative", "superlatif", "than", "as as", "the more", "much more"]),
  lesson: {
    skillId: S,
    title: "Comparatifs et superlatifs",
    objectives: ["Former comparatifs et superlatifs courts et longs", "Employer as… as, the same as, twice as", "Construire the more… the more et les intensifs"],
    regle:
      "Adjectifs courts (une syllabe, et deux syllabes terminées par -y) : on ajoute -er pour le comparatif et the -est pour le superlatif. cheap → cheaper → the cheapest ; easy → easier → the easiest (le y devient i). On double la consonne finale après une seule voyelle courte : big → bigger, hot → hottest.\n\n" +
      "Adjectifs longs (deux syllabes ou plus, sauf -y) : more / the most + adjectif. expensive → more expensive → the most expensive. On ne combine jamais les deux : « more easier » est faux.\n\n" +
      "Irréguliers : good → better → the best ; bad → worse → the worst ; far → further (ou farther) → the furthest ; much / many → more → the most ; little → less → the least. Old a deux comparatifs : older (usage général, avec than) et elder (uniquement devant un nom de la famille : my elder brother).\n\n" +
      "Le complément du comparatif est introduit par than : She is taller than her brother. Égalité : as + adjectif + as (as fast as) ; négation : not as / not so… as. The same + nom + as (the same model as mine), jamais « the same than » ni « the same like ». Multiplication : twice as big as, three times as expensive as.\n\n" +
      "Progression : comparatif répété, higher and higher, more and more expensive. Proportion : The more you practise, the better you get (plus… plus).\n\n" +
      "Intensifs : much, far, a lot, a bit, slightly devant un comparatif (much cheaper, far better). Very ne s'emploie jamais devant un comparatif. By far renforce un superlatif : by far the best. Après un superlatif, le lieu prend in : the tallest building in the world.",
    formules:
      "court : adj + -er than / the adj + -est\n" +
      "long : more adj than / the most adj\n" +
      "good → better → the best ; bad → worse → the worst\n" +
      "far → further → the furthest ; little → less → the least\n" +
      "as + adj + as ; not as + adj + as\n" +
      "the same + nom + as\n" +
      "twice / three times as + adj + as\n" +
      "the + comparatif…, the + comparatif\n" +
      "much / far / a lot / slightly + comparatif (jamais very)\n" +
      "by far + superlatif ; superlatif + in + lieu",
    methode:
      "1. Repère la structure : than (comparatif), as… as (égalité), the… in / of (superlatif).\n" +
      "2. Compte les syllabes de l'adjectif : court (-er) ou long (more).\n" +
      "3. Vérifie les irréguliers (good, bad, far).\n" +
      "4. Élimine les doubles marques (more bigger) et very devant un comparatif.",
    exemple:
      "« The ___ you practise, the ___ you get. » Structure de proportion : the + comparatif, the + comparatif. Practise appelle more (plus tu t'entraînes), get + adjectif good appelle better : The more you practise, the better you get.\n\n" +
      "« This laptop is ___ more expensive than the other one. » Pour renforcer un comparatif, on emploie much, far ou a lot, jamais very : much more expensive.",
    erreur:
      "✗ more easy, more easier → ✓ easier\n" +
      "✗ It's very better → ✓ It's much better\n" +
      "✗ He is more old than me → ✓ He is older than me\n" +
      "✗ the same than / the same like → ✓ the same as\n" +
      "✗ the best student of the class → ✓ the best student in the class\n" +
      "✗ badder, worst than → ✓ worse than",
    approfondir:
      "Les adjectifs de deux syllabes en -ow, -er, -le acceptent souvent les deux formes (narrower ou more narrow, cleverer ou more clever). Le concours évite ces cas ambigus : retiens surtout la règle générale.\n\n" +
      "Less + adjectif long sert au comparatif d'infériorité : less expensive than. Pour un adjectif court, on préfère not as… as : not as tall as.\n\n" +
      "Gestion du temps : dans ces questions, une seule option est en général bien formée. Élimine d'abord les formes impossibles (more easier, badder), il ne reste souvent qu'une réponse.",
    cards: [
      ["Beaucoup plus cher", "much more expensive (jamais very more)", true],
      ["Plus tu travailles, plus tu progresses", "The more you work, the more you progress", true],
      ["bad → ?", "worse → the worst", false],
      ["Le même que", "the same as", true],
    ],
  },
  questions: [
    E("B-EN-COMP-001", S, "en.comp.form", 1, "Complete the sentence: « This year's exam was ___ than last year's. »", [
      ["easier", true, "Adjectif court en -y : easy → easier."],
      ["more easy", false, "Easy est court : comparatif en -er, pas more."],
      ["easyer", false, "Le y devient i devant -er."],
      ["more easier", false, "Double marque du comparatif."],
    ], "Easy (deux syllabes en -y) forme son comparatif en -er, avec y → i : easier.", "Adjectif court ou en -y : -er than.", [
      "Combien de syllabes a easy, et comment se termine-t-il ?",
      "Ces adjectifs prennent -er.",
      "Attention à l'orthographe du y.",
    ]),
    E("B-EN-COMP-002", S, "en.comp.form", 1, "Complete the sentence: « Kyoto is the ___ city I have ever visited. »", [
      ["most beautiful", true, "Adjectif long : the most + adjectif."],
      ["more beautiful", false, "Comparatif et non superlatif : the… I have ever visited appelle un superlatif."],
      ["beautifulest", false, "Les adjectifs longs ne prennent pas -est."],
      ["most beautifullest", false, "Double marque du superlatif."],
    ], "Superlatif (the… I have ever visited) d'un adjectif long : the most beautiful.", "Adjectif long : the most + adjectif.", [
      "Comparatif ou superlatif ?",
      "Beautiful est-il court ou long ?",
      "The most + adjectif.",
    ]),
    E("B-EN-COMP-003", S, "en.comp.equality", 1, "Complete the sentence: « Her flat is twice as ___ as mine. »", [
      ["big", true, "Twice as + adjectif simple + as."],
      ["bigger", false, "Pas de comparatif entre as et as."],
      ["biggest", false, "Pas de superlatif entre as et as."],
      ["more big", false, "Forme incorrecte, et pas de comparatif entre as et as."],
    ], "La structure as… as encadre l'adjectif à sa forme simple : twice as big as.", "twice / three times as + adjectif + as.", [
      "Quelle structure encadre le blanc ?",
      "Entre as et as, l'adjectif reste invariable.",
      "Forme simple de l'adjectif.",
    ]),
    E("B-EN-COMP-004", S, "en.comp.equality", 1, "Complete the sentence: « My old phone is not as fast ___ yours. »", [
      ["as", true, "Not as… as : comparatif d'infériorité."],
      ["than", false, "Than suit un comparatif (faster than), pas as + adjectif."],
      ["that", false, "Calque de « que » : that n'introduit pas le second terme."],
      ["like", false, "Like n'entre pas dans la structure as… as."],
    ], "La structure d'égalité ou d'infériorité est as + adjectif + as : not as fast as yours.", "as + adjectif + as ; comparatif + than.", [
      "Quel mot précède l'adjectif fast ?",
      "La structure va par paire.",
      "As… as.",
    ]),
    E("B-EN-COMP-005", S, "en.comp.equality", 2, "Complete the sentence: « I bought exactly the same model ___ you. »", [
      ["as", true, "The same + nom + as."],
      ["than", false, "Than suit un comparatif, pas the same."],
      ["that", false, "Calque de « le même que »."],
      ["like", false, "The same like est non standard."],
    ], "Pour l'identité, l'anglais emploie the same… as : the same model as you.", "the same (+ nom) as.", [
      "La phrase exprime une identité.",
      "The same se construit avec un mot fixe.",
      "C'est le même mot que dans as… as.",
    ], { a: "erreur" }),
    E("B-EN-COMP-006", S, "en.comp.irregular", 2, "Complete the sentence: « The weather is even ___ than yesterday: it's pouring with rain. »", [
      ["worse", true, "Bad → worse → the worst."],
      ["badder", false, "Bad est irrégulier : pas de -er."],
      ["more bad", false, "Bad est irrégulier : pas de more."],
      ["worst", false, "Worst est le superlatif, incompatible avec than."],
    ], "Comparatif irrégulier de bad : worse than.", "good / better / best ; bad / worse / worst.", [
      "Quel adjectif faut-il comparer ?",
      "Bad est irrégulier.",
      "Than appelle le comparatif, pas le superlatif.",
    ], { a: "formules" }),
    E("B-EN-COMP-007", S, "en.comp.proportion", 2, "Complete the sentence: « The ___ you practise, the ___ you get. »", [
      ["more / better", true, "The + comparatif, the + comparatif : plus… plus."],
      ["most / best", false, "Superlatifs impossibles dans la structure de proportion."],
      ["more / more good", false, "Good a un comparatif irrégulier : better."],
      ["much / better", false, "Much n'est pas un comparatif : il faut more."],
    ], "Structure de proportion : the more you practise, the better you get.", "The + comparatif…, the + comparatif.", [
      "Traduis : « plus tu t'entraînes, … tu deviens ».",
      "Chaque partie prend the + comparatif.",
      "Get + good au comparatif.",
    ], { a: "exemple" }),
    E("B-EN-COMP-008", S, "en.comp.intensifier", 2, "Complete the sentence: « This laptop is ___ more expensive than the other one. »", [
      ["much", true, "Much renforce un comparatif."],
      ["very", false, "Calque de « très » : very ne s'emploie jamais devant un comparatif."],
      ["more", false, "Double more incorrect."],
      ["too", false, "Too more n'est pas une construction anglaise."],
    ], "Pour dire « beaucoup plus cher », on emploie much (ou far, a lot) : much more expensive.", "much / far / a lot + comparatif ; jamais very.", [
      "On veut dire « beaucoup plus cher ».",
      "Very ne modifie pas un comparatif.",
      "L'intensif le plus courant d'un comparatif.",
    ]),
    E("B-EN-COMP-009", S, "en.comp.irregular", 2, "Complete the sentence: « Tom is three years ___ than his sister. »", [
      ["older", true, "Older : comparatif général de old, avec than."],
      ["elder", false, "Elder s'emploie seulement devant un nom (my elder sister), jamais avec than."],
      ["more old", false, "Old est court : comparatif en -er."],
      ["oldest", false, "Superlatif incompatible avec than."],
    ], "Avec than, le comparatif de old est older. Elder n'apparaît que devant un nom de la famille.", "older than ; my elder brother.", [
      "Quel mot suit le blanc ?",
      "Old a deux comparatifs : lequel accepte than ?",
      "Elder s'emploie uniquement devant un nom.",
    ]),
    E("B-EN-COMP-010", S, "en.comp.intensifier", 3, "Complete the sentence: « This is by ___ the best result our team has ever had. »", [
      ["far", true, "By far renforce un superlatif."],
      ["much", false, "By much n'existe pas devant un superlatif."],
      ["very", false, "By very n'existe pas."],
      ["most", false, "By most n'existe pas, et best est déjà un superlatif."],
    ], "Pour renforcer un superlatif, l'anglais emploie by far : by far the best.", "by far + superlatif.", [
      "Le blanc précède un superlatif.",
      "L'expression commence par by.",
      "« De loin » en anglais.",
    ], { r: true }),
    E("B-EN-COMP-011", S, "en.comp.proportion", 3, "Complete the sentence: « Since the crisis began, rents in the city centre have been getting ___. »", [
      ["higher and higher", true, "Comparatif répété : de plus en plus."],
      ["more and more high", false, "High est court : son comparatif est higher, pas more high."],
      ["the higher", false, "The + comparatif ne s'emploie que dans la structure the more… the more."],
      ["highest and highest", false, "La progression se forme avec le comparatif, pas le superlatif."],
    ], "« De plus en plus » avec un adjectif court : comparatif répété, higher and higher.", "court : -er and -er ; long : more and more + adjectif.", [
      "La phrase exprime une progression.",
      "On répète le comparatif.",
      "High est un adjectif court.",
    ], { r: true }),
  ],
};
