const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const Endpoint = require("./Endpoint.js");
const EnumGenerator = require("./EnumGenerator.js");
const FileList = require("./FileList.js");

const BASE = `${Endpoint.ARMADA_DATA}ship-card/`;
const INPUT_FILES = R.map(file => BASE + file, FileList.SHIP_FILES);
const CLASS_NAME = "Faction";

const createData = card => key => {
  const shortName = R.cond([
    [R.equals("galacticEmpire"), R.always("Imperial")], // Imperial
    [R.equals("rebelAlliance"), R.always("Rebel")] // Rebel
  ])(key);
  const color = R.cond([
    // Imperial
    [R.either(R.equals("galacticEmpire"), R.equals("firstOrder")), R.always("#00FF00")],
    // Rebel
    [R.either(R.equals("rebelAlliance"), R.equals("resistance")), R.always("#FF0000")]
  ])(key);
  const image = `faction/${card.toLowerCase().replace(/ /g, "-")}.png`;

  return {
    name: card,
    shortName,
    color,
    image,
    key
  };
};

function determineData(data) {
  const answer = data.reduce(
    (accumulator, card) => EnumGenerator.pushUnique(accumulator, card.faction),
    []
  );
  answer.sort();

  return answer;
}

// xws values.
const OPTIONS = R.pipe(
  R.assoc("determineData", determineData),
  R.assoc("createData", createData)
)(ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);
