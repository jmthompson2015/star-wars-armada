const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const FileList = require("./FileList.js");

// const BASE = "https://cdn.jsdelivr.net/gh/jmthompson2015/star-wars-armada-data@0.0.6/data/upgrade-card/";
const BASE = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/upgrade-card/";
const INPUT_FILES = R.map(file => BASE + file, FileList.UPGRADE_FILES);
const CLASS_NAME = "UpgradeCard";

const OPTIONS = R.assoc("appendSlot", ["Darth Vader"], ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);