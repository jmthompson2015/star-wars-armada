const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const Endpoint = require("./Endpoint.js");
const FileList = require("./FileList.js");

const BASE = `${Endpoint.ARMADA_DATA}ship-card/`;
const INPUT_FILES = R.map(file => BASE + file, FileList.SHIP_FILES);
const CLASS_NAME = "ShipCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);
