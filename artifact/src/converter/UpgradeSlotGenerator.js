const R = require('ramda');

const ArmadaConverter = require('./ArmadaConverter.js');
const EnumGenerator = require('./EnumGenerator.js');
const FileList = require('./FileList.js');

const BASE =
  'https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/data/upgrade-card/';
const INPUT_FILES = R.map(file => BASE + file, FileList.UPGRADE_FILES);
const CLASS_NAME = 'UpgradeSlot';

const createData = card => key => {
  const slotName = card
    .toLowerCase()
    .replace(/[.()]/g, '')
    .replace(/[ /]/g, '-');
  const image = slotName !== undefined ? `upgrade-slot/${slotName}.png` : undefined;

  return {
    name: card,
    image,
    key,
  };
};

function determineData(data) {
  const answer = data.reduce(
    (accumulator, card) => EnumGenerator.pushUnique(accumulator, card.slots.join(' and ')),
    [],
  );
  answer.sort();

  return answer;
}

// xws values.
const OPTIONS = R.pipe(
  R.assoc('determineData', determineData),
  R.assoc('createData', createData),
)(ArmadaConverter.DEFAULT_OPTIONS);

ArmadaConverter.convert(INPUT_FILES, CLASS_NAME, OPTIONS);
