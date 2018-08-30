const R = require("ramda");

const ArmadaConverter = require("./ArmadaConverter.js");
const Endpoint = require("./Endpoint.js");

const BASE = Endpoint.ARMADA_DATA;
const INPUT_FILES = R.map(file => BASE + file, ["reference-card.json"]);
const CLASS_NAME = "ReferenceCard";

const OPTIONS = R.assoc("determineCardName", card => card.title, ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);
