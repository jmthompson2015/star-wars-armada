const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/upgrade-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/upgrade-card/";
const INPUT_FILES = R.map(file => BASE + file + ".js", [
  "commander",
  "defensive-retrofit",
  "fleet-command",
  "fleet-support",
  "ion-cannons",
  "offensive-retrofit",
  "officer",
  "ordnance",
  "support-team",
  "title",
  "turbolasers",
  "weapons-team-and-offensive-retrofit",
  "weapons-team"
]);
const CLASS_NAME = "UpgradeCard";

const OPTIONS = R.assoc("appendSlot", ["Darth Vader"], ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);