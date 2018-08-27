const R = require('ramda');

const ArmadaConverter = require('./ArmadaConverter.js');

const BASE = 'https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/';
const INPUT_FILES = R.map(file => BASE + file, ['reference-card.js']);
const CLASS_NAME = 'ReferenceCard';

const OPTIONS = R.assoc('determineCardName', card => card.title, ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);
