const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const EnumGenerator = require("./EnumGenerator.js");
const FileList = require("./FileList.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/ship-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/ship-card/";
const INPUT_FILES = R.map(file => BASE + file, FileList.SHIP_FILES);
const CLASS_NAME = "DefenseToken";

const createData = card => key =>
{
   const sortOrder = R.cond([
    [R.equals("brace"), R.always(3)],
    [R.equals("contain"), R.always(5)],
    [R.equals("evade"), R.always(2)],
    [R.equals("redirect"), R.always(1)],
    [R.equals("scatter"), R.always(4)],
   ])(key);

   const text = R.cond([
     [R.equals("brace"), R.always("After the damage is totaled, the defender reduces the total to half, rounded up.")],
     [R.equals("contain"), R.always("Prevent the attacker from resolving the standard critical effect.")],
     [R.equals("evade"), R.always("At long range, the defender cancels one attack die of its choice. At medium range, it chooses one attack die to be rerolled. At close range, or distance 1, this token has no effect.")],
     [R.equals("redirect"), R.always("Suffer damage on an adjacent hull zone's shields before suffering the remaining damage on the defending hull zone.")],
     [R.equals("scatter"), R.always("The defender cancels all attack dice.")],
   ])(key);

   return (
   {
      name: card,
      text: text,
      sortOrder: sortOrder,
      key: key,
   });
};

function determineData(data)
{
   const reduceFunction1 = (accum, defenseToken) => EnumGenerator.pushUnique(accum, defenseToken);
   const reduceFunction2 = (accum, card) => R.reduce(reduceFunction1, accum)(card["defense-tokens"]);
   const answer = R.reduce(reduceFunction2, [])(data);
   answer.sort();

   return answer;
}

const OPTIONS = R.pipe(
   R.assoc("determineData", determineData),
   R.assoc("createData", createData)
)(ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);