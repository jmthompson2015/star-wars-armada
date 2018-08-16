const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const FileList = require("./FileList.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/ship-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/ship-card/";
const INPUT_FILES = R.map(file => BASE + file, FileList.SHIP_FILES);
const CLASS_NAME = "ShipCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);