const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");

const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.4/data/squadron-card/";
const INPUT_FILES = R.map(file => BASE + file + ".js", ["tie-fighter-squadron", "x-wing-squadron"]);
const CLASS_NAME = "SquadronCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);