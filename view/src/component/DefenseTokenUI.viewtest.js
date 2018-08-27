import DefenseTokenUI from './DefenseTokenUI.js';
import ReactUtilities from '../ReactUtilities.js';

const createDefenseTokenUI = (defenseInstance, isSmall, showLabel) =>
  React.createElement(DefenseTokenUI, {
    defenseInstance,
    isSmall,
    showLabel,
  });

const props = [
  // isSmall, showLabel, key
  [false, false, 'standard'],
  [false, true, 'standard+name'],
  [true, false, 'small'],
  [true, true, 'small+name'],
];

const className = 'ba b--silver bg-near-white f6 pa1 tl';
const mapFunction0 = defenseInstance => prop =>
  ReactUtilities.createCell(
    createDefenseTokenUI(defenseInstance, prop[0], prop[1]),
    prop[2],
    className,
  );
const createCells = defenseInstance => R.map(mapFunction0(defenseInstance), props);

const defenseTokens = AA.EnumUtilities.values(AA.DefenseToken);
let j = 0;
const defenseInstances = R.map(token => {
  j += 1;
  return AS.DefenseTokenState.create({
    id: j,
    defenseTokenKey: token.key,
    isReady: j % 2 === 1,
  });
}, defenseTokens);
let i = 0;
const mapFunction1 = defenseInstance => {
  i += 1;
  return ReactUtilities.createRow(createCells(defenseInstance), i);
};
const rows = R.map(mapFunction1, defenseInstances);

ReactDOM.render(ReactUtilities.createTable(rows), document.getElementById('panel'));
