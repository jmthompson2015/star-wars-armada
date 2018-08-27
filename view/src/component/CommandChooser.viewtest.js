/* eslint no-console: ["error", { allow: ["log"] }] */

import CommandChooser from './CommandChooser.js';

const comparator = (a, b) => a.sortOrder - b.sortOrder;
const commands = R.sort(comparator, AA.Selector.enumValues(AA.Command));

function callback(command) {
  console.log(`command = ${JSON.stringify(command, null, '   ')}`);
}

const element = React.createElement(CommandChooser, {
  commands,
  initialAbility: AA.Command.REDIRECT,
  onChange: callback,
});
ReactDOM.render(element, document.getElementById('panel'));
