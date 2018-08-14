const R = require("ramda");

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
const CLASS_NAME = "ShipCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);