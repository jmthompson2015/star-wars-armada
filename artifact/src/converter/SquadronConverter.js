const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const Endpoint = require("./Endpoint.js");
const FileList = require("./FileList.js");

const BASE = `${Endpoint.ARMADA_DATA}squadron-card/`;
const INPUT_FILES = R.map(file => BASE + file, FileList.SQUADRON_FILES);
const CLASS_NAME = "SquadronCard";

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME);
