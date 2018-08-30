const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const Endpoint = require("./Endpoint.js");
const EnumGenerator = require("./EnumGenerator.js");
const FileList = require("./FileList.js");

const BASE = `${Endpoint.ARMADA_DATA}ship-card/`;
const INPUT_FILES = R.map(file => BASE + file, FileList.SHIP_FILES);
const CLASS_NAME = "HullZone";

const createData = card => key => ({
  name: card,
  key
});

function determineData(data) {
  const reduceFunction1 = (accum, hullZone) => EnumGenerator.pushUnique(accum, hullZone);
  const reduceFunction2 = (accum, card) =>
    R.reduce(reduceFunction1, accum)(Object.keys(card.shield));
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
