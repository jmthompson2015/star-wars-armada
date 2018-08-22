import CommandUI from "./CommandUI.js";
import ReactUtilities from "../ReactUtilities.js";

const createCommandUI = (command, isSmall, showLabel) => React.createElement(CommandUI,
{
   command: command,
   isSmall: isSmall,
   showLabel: showLabel
});

const props = [ // isSmall, showLabel, key
  [false, false, "standard"],
  [false, true, "standard+name"],
  [true, false, "small"],
  [true, true, "small+name"]
];

const className = "ba b--silver bg-near-white f6 pa1 tl";
const mapFunction0 = command => prop => ReactUtilities.createCell(createCommandUI(command, prop[0], prop[1]), prop[2], className);
const createCells = command => R.map(mapFunction0(command), props);

const commands = AA.EnumUtilities.values(AA.Command);
let i = 0;
const mapFunction1 = command => ReactUtilities.createRow(createCells(command), i++);
const rows = R.map(mapFunction1, commands);

ReactDOM.render(ReactUtilities.createTable(rows), document.getElementById("panel"));