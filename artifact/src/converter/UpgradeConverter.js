const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const Endpoint = require("./Endpoint.js");
const FileList = require("./FileList.js");

const BASE = `${Endpoint.ARMADA_DATA}upgrade-card/`;
const INPUT_FILES = R.map(file => BASE + file, FileList.UPGRADE_FILES);
const CLASS_NAME = "UpgradeCard";

const OPTIONS = R.assoc(
  "appendSlot",
  ["Darth Vader", "Leia Organa"],
  ArmadaConverter.DEFAULT_OPTIONS
);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);
