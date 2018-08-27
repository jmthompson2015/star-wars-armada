import ReactUtils from './ReactUtilities.js';

const cellClass1 = 'b--xw-medium f5 tc v-mid';
const cellClass2 = 'b--xw-medium f3 tc v-mid';
const icons = [
  'concentrate',
  'navigate',
  'repair',
  'squadron', // commands
  'accuracy',
  'crit',
  'hit', // dice
  'brace',
  'contain',
  'evade',
  'redirect',
  'scatter', // defense tokens
  'imperial',
  'rebel', // factions
  'speed',
  'turn-0',
  'turn-1',
  'turn-2', // maneuvers

  'anti-ship',
  'anti-squadron',
  'bomber',
  'counter',
  'd8',
  'escort',
  'grit',
  'heavy',
  'hull',
  'rogue',
  'shuttle',
  'swarm',
];
const rows2 = [];

icons.forEach(icon => {
  const cells2 = [];
  cells2.push(ReactUtils.createCell(icon, `label${cells2.length}`, cellClass1));
  cells2.push(
    ReactUtils.createCell(
      ReactDOMFactories.i({
        className: `ffi ffi-swa-${icon}`,
      }),
      `icon${cells2.length}`,
      cellClass2,
    ),
  );
  cells2.push(
    ReactUtils.createCell(
      ReactDOMFactories.i({
        className: `ffi ffi-${icon}`,
      }),
      `icon${cells2.length}`,
      cellClass2,
    ),
  );
  rows2.push(ReactUtils.createRow(cells2, `fontRow2${rows2.length}`));
});

const table2 = ReactUtils.createTable(rows2, 'fontTable', 'b--xw-medium bg-white');
ReactDOM.render(table2, document.getElementById('panel'));
