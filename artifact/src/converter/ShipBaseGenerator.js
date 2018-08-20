const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const EnumGenerator = require("./EnumGenerator.js");
const FileList = require("./FileList.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/ship-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/ship-card/";
const INPUT_FILES = R.map(file => BASE + file, FileList.SHIP_FILES);
const CLASS_NAME = "ShipBase";

const createData = card => key =>
{
   const width = R.cond([
     [R.equals("small"), R.always(73)], // small
     [R.equals("medium"), R.always(104)], // medium
     [R.equals("large"), R.always(131)] // large
   ])(card);
   const height = R.cond([
     [R.equals("small"), R.always(44)], // small
     [R.equals("medium"), R.always(64)], // medium
     [R.equals("large"), R.always(79)] // large
   ])(card);

   return (
   {
      name: card,
      width: width,
      height: height,
      key: key,
   });
};

function determineData(data)
{
   const answer = data.reduce((accumulator, card) => EnumGenerator.pushUnique(accumulator, card.size), []);
   answer.sort();

   return answer;
}

// xws values.
const OPTIONS = R.pipe(
   R.assoc("determineData", determineData),
   R.assoc("createData", createData)
)(ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);