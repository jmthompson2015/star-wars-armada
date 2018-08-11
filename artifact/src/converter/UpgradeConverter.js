const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");

const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.4/data/upgrade-card/";
const INPUT_FILES = R.map(file => BASE + file + ".js", ["commander", "defensive-retrofit", "ion-cannons", "offensive-retrofit", "officer", "ordnance", "support-team", "title", "turbolasers", "weapons-team"]);
const CLASS_NAME = "UpgradeCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);