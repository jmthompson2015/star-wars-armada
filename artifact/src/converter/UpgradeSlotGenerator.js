const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const EnumGenerator = require("./EnumGenerator.js");

// const INPUT_FILE = "https://cdn.jsdelivr.net/npm/xwing-data@1.0.1/data/upgrades.js";
const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.4/data/upgrade-card/";
const INPUT_FILES = R.map(file => BASE + file + ".js", ["commander", "defensive-retrofit", "ion-cannons", "offensive-retrofit", "officer", "ordnance", "support-team", "title", "turbolasers", "weapons-team"]);
const CLASS_NAME = "UpgradeSlot";

const createData = card => key =>
{
   const slotName = card.toLowerCase().replace(/[.()]/g, "").replace(/[ /]/g, "-");
   const image = (slotName !== undefined ? "upgrade-slot/" + slotName + ".png" : undefined);

   return (
   {
      name: card,
      image: image,
      key: key,
   });
};

function determineData(data)
{
   const answer = data.reduce((accumulator, card) => EnumGenerator.pushUnique(accumulator, card.slot), []);
   answer.sort();

   return answer;
}

// xws values.
const OPTIONS = R.pipe(
   R.assoc("determineData", determineData),
   R.assoc("createData", createData)
)(ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);