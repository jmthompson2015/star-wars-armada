const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const EnumGenerator = require("./EnumGenerator.js");
const FileList = require("./FileList.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/ship-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/ship-card/";
const INPUT_FILES = R.map(file => BASE + file, FileList.SHIP_FILES);
const CLASS_NAME = "HullZone";

const createData = card => key =>
{
   return (
   {
      name: card,
      key: key,
   });
};

function determineData(data)
{
   const reduceFunction1 = (accum, hullZone) => EnumGenerator.pushUnique(accum, hullZone);
   const reduceFunction2 = (accum, card) => R.reduce(reduceFunction1, accum)(Object.keys(card.shield));
   const answer = R.reduce(reduceFunction2, [])(data);
   answer.sort();

   return answer;
}

// xws values.
const OPTIONS = R.pipe(
   R.assoc("determineData", determineData),
   R.assoc("createData", createData)
)(ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);