const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const JSONFileLoader = require("./JSONFileLoader.js");

const ArmadaConverter = {};

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

ArmadaConverter.convert = function(inputFiles, className, options = ArmadaConverter.DEFAULT_OPTIONS)
{
   ArmadaConverter.INPUT_FILES = inputFiles;
   ArmadaConverter.CLASS_NAME = className;
   ArmadaConverter.OPTIONS = options;
   ArmadaConverter.OUTPUT_FILE = "../" + ArmadaConverter.CLASS_NAME + ".js";
   let allData = [];
   let count = 0;

   inputFiles.forEach(inputFile =>
   {
      console.log("ArmadaConverter.convert() inputFile = " + inputFile);

      JSONFileLoader.loadFile(inputFile).then(data =>
      {
         allData = R.concat(allData, data);
         count++;

         if (count === inputFiles.length)
         {
            const content = processData(allData);
            EnumGenerator.writeFile(ArmadaConverter.OUTPUT_FILE, content);
         }
      });
   });
};

function createFreezeFunction(className)
{
   return `Object.freeze(${className});`;
}

function enumValueCompare(a, b)
{
   const aValue = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, a);
   const bValue = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, b);

   return (aValue > bValue ? 1 : (aValue < bValue ? -1 : 0));
}

function processData(data0)
{
   const determineData = ArmadaConverter.OPTIONS.determineData;
   const data = determineData(data0);

   const prefix0 = `const ${ArmadaConverter.CLASS_NAME} = {`;
   const enums = data.reduce((accumulator, card) =>
   {
      const enumName = EnumGenerator.createEnumName(ArmadaConverter.OPTIONS, card);
      const enumValue = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, card);
      return accumulator + `
  ${enumName}: "${enumValue}",`;
   }, "");
   const suffix0 = `};`;
   const prefix1 = `
${ArmadaConverter.CLASS_NAME}.properties = `;
   const enumProperties = {};
   const createData = ArmadaConverter.OPTIONS.createData;

   data.forEach(card =>
   {
      const key = EnumGenerator.createEnumValue(ArmadaConverter.OPTIONS, card);
      if (enumProperties[key] !== undefined)
      {
         console.error(`Overwriting card with key ${key} card0 = ${enumProperties[key].name} ${enumProperties[key].xws} ${enumProperties[key].faction} ${enumProperties[key].ship} ${enumProperties[key].slot}`);
         console.error(`Overwriting card with key ${key} card  = ${card.name} ${card.xws} ${card.faction} ${card.ship} ${card.slot}`);
      }
      enumProperties[key] = createData(card)(key);
   });

   const content = JSON.stringify(enumProperties, null, 3) + ";\n";
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

module.exports = ArmadaConverter;