const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/squadron-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/squadron-card/";
const INPUT_FILES = R.map(file => BASE + file + ".js", [
  "mandalorian-gauntlet-fighter",
  "tie-fighter-squadron",
  "x-wing-squadron"
]);
const CLASS_NAME = "SquadronCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);