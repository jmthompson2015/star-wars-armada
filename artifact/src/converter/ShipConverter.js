const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");

const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.4/data/ship-card/";
const INPUT_FILES = R.map(file => BASE + file + ".js", ["cr90-corvette", "nebulon-b-frigate", "victory-class-star-destroyer"]);
const CLASS_NAME = "ShipCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);