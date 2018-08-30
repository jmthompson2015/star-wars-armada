/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const JSONFileLoader = require("./JSONFileLoader.js");

const ArmadaConverter = {};

const createFreezeFunction = className => `Object.freeze(${className});`;

const enumValueCompare = (a, b) => {
  const aValue = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, a);
  const bValue = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, b);

  let answer = 0;

  if (aValue > bValue) {
    answer = 1;
  } else if (aValue < bValue) {
    answer = -1;
  }

  return answer;
};

function processData(data0) {
  const { createData, determineData } = ArmadaConverter.OPTIONS;

  const data = determineData(data0);
  const prefix0 = `const ${ArmadaConverter.CLASS_NAME} = {`;
  const enums = data.reduce((accumulator, card) => {
    const enumName = EnumGenerator.createEnumName(ArmadaConverter.OPTIONS, card);
    const enumValue = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, card);
    return `${accumulator}
  ${enumName}: "${enumValue}",`;
  }, "");
  const suffix0 = "};";
  const prefix1 = `
${ArmadaConverter.CLASS_NAME}.properties = `;
  const enumProperties = {};

  data.forEach(card => {
    const key = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, card);
    if (enumProperties[key] !== undefined) {
      console.error(
        `Overwriting card with key ${key} card0 = ${enumProperties[key].name} ${
          enumProperties[key].xws
        } ${enumProperties[key].faction} ${enumProperties[key].ship} ${enumProperties[key].slots}`
      );
      console.error(
        `Overwriting card with key ${key} card  = ${card.name} ${card.xws} ${card.faction} ${
          card.ship
        } ${card.slots}`
      );
    }
    enumProperties[key] = createData(card)(key);
  });

  const content = `${JSON.stringify(enumProperties, null, 3)};\n`;
  const freeze = createFreezeFunction(ArmadaConverter.CLASS_NAME);
  const suffix1 = `
export default ${ArmadaConverter.CLASS_NAME};`;

  return `${prefix0}
${enums}
${suffix0}
${prefix1}
${content}
${freeze}
${suffix1}`;
}

ArmadaConverter.DEFAULT_OPTIONS = {
  appendFaction: [],
  appendHotr: [],
  appendId: [],
  appendShip: [],
  appendSlot: [],
  createData: card => key => R.assoc("key", key, card),
  determineCardName: card => card.name,
  determineData: data0 => R.sort(enumValueCompare, data0)
};

ArmadaConverter.convert = (inputFiles, className, options = ArmadaConverter.DEFAULT_OPTIONS) => {
  ArmadaConverter.INPUT_FILES = inputFiles;
  ArmadaConverter.CLASS_NAME = className;
  ArmadaConverter.OPTIONS = options;
  ArmadaConverter.OUTPUT_FILE = `../${ArmadaConverter.CLASS_NAME}.js`;
  let allData = [];
  let count = 0;

  inputFiles.forEach(inputFile => {
    console.log(`ArmadaConverter.convert() inputFile = ${inputFile}`);

    // JSONFileLoader.loadFile(inputFile).then(data => {
    JSONFileLoader.loadLocalFile(inputFile).then(data => {
      if (data === undefined) {
        throw new Error(`Failed to load inputFile: ${inputFile}`);
      }

      allData = R.concat(allData, data);
      count += 1;

      if (count === inputFiles.length) {
        const content = processData(allData);
        EnumGenerator.writeFile(ArmadaConverter.OUTPUT_FILE, content);
      }
    });
  });
};

module.exports = ArmadaConverter;
