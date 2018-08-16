const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const FileList = require("./FileList.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/squadron-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/squadron-card/";
const INPUT_FILES = R.map(file => BASE + file, FileList.SQUADRON_FILES);
const CLASS_NAME = "SquadronCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);