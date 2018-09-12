/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const fs = require("fs");
const R = require("ramda");

const append = value => name => `${name}_${value}`;

const toCamelCase = str =>
  str
    .split(" ")
    .map((word, index) => {
      // If it is the first word make sure to lowercase all the chars.
      if (index === 0) {
        return word.toLowerCase();
      }

      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");

const EnumGenerator = {};

EnumGenerator.createEnumName = function createEnumName(options, card) {
  let name = card;

  if (typeof card === "object") {
    name = options.determineCardName(card);
    name = R.contains(card.name, options.appendSlot) ? append(card.slots.join("_"))(name) : name;
  }

  const answer = R.pipe(
    R.replace("(-1)", "decrease"),
    R.replace("(+1)", "increase"),
    R.replace(/[().,!#'"’]/g, ""),
    R.replace(/[- /]/g, "_"),
    R.toUpper,
    R.replace("4_LOM", "FOUR_LOM")
  )(name);

  return answer;
};

EnumGenerator.createEnumValue = function createEnumValue(options, card) {
  let name = card;

  if (typeof card === "object") {
    name = options.determineCardName(card);
    name = R.contains(card.name, options.appendSlot) ? append(card.slots.join("_"))(name) : name;
  }

  const answer = R.pipe(
    R.replace("(-1)", "decrease"),
    R.replace("(+1)", "increase"),
    R.replace(/[().,!#'"’]/g, ""),
    R.replace(/[-/]/g, " "),
    R.replace("4 LOM", "four lom")
  )(name);

  return toCamelCase(answer);
};

EnumGenerator.pushUnique = function pushUnique(array, element) {
  let answer = array;

  if (!array.includes(element)) {
    answer = array.slice();
    answer.push(element);
  }

  return answer;
};

EnumGenerator.writeFile = function writeFile(outputFile, content) {
  fs.writeFile(outputFile, content, err => {
    // throws an error, you could also catch it here
    if (err) {
      throw err;
    }

    // success case, the file was saved
    console.log(`${outputFile} saved`);
  });
};

module.exports = EnumGenerator;
