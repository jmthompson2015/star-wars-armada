import DicePanel from './DicePanel.js';

const diceKeys = AM.DiceUtilities.rollDice({
  red: 6,
  blue: 4,
  black: 2,
});
const dice = R.map(key => AA.Selector.diceValue(key), diceKeys);

const element0 = React.createElement(DicePanel, {
  enumClass: AA.AttackDiceValue,
  dice,
});
ReactDOM.render(element0, document.getElementById('panel'));
