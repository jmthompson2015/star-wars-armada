const R = require("ramda");

const EnumGenerator = require("./EnumGenerator.js");
const ArmadaConverter = require("./ArmadaConverter.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/ship-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/ship-card/";
const INPUT_FILES = R.map(file => BASE + file + ".js", [
  "assault-frigate-mark-ii",
  "cr90-corvette",
  "gozanti-class-carriers",
  "imperial-class-star-destroyer",
  "mc80-cruiser",
  "nebulon-b-frigate",
  "victory-class-star-destroyer"
]);
const CLASS_NAME = "Faction";

const createData = card => key =>
{
   const shortName = R.cond([
     // [R.equals("firstOrder"), R.always("FirstOrder")], // First Order
     [R.equals("galacticEmpire"), R.always("Imperial")], // Imperial
     [R.equals("rebelAlliance"), R.always("Rebel")], // Rebel
     // [R.equals("resistance"), R.always("Resistance")], // Resistance
     // [R.equals("scumAndVillainy"), R.always("Scum")]
   ])(key);
   const color = R.cond([
    [R.either(R.equals("galacticEmpire"), R.equals("firstOrder")), R.always("rgb(0, 255, 0)")], // Imperial
    [R.either(R.equals("rebelAlliance"), R.equals("resistance")), R.always("red")], // Rebel
    [R.equals("scumAndVillainy"), R.always("rgb(255, 215, 0)")]
   ])(key);
   const image = "faction/" + card.toLowerCase().replace(/ /g, "-") + ".png";

   return (
   {
      name: card,
      shortName: shortName,
      color: color,
      image: image,
      key: key,
   });
};

function determineData(data)
{
   const answer = data.reduce((accumulator, card) => EnumGenerator.pushUnique(accumulator, card.faction), []);
   answer.sort();

   return answer;
}

// xws values.
const OPTIONS = R.pipe(
   R.assoc("determineData", determineData),
   R.assoc("createData", createData)
)(ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);