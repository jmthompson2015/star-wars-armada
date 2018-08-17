import DicePanel from "./DicePanel.js";

const dice = AM.DiceUtilities.rollDice(
{
   red: 6,
   blue: 4,
   black: 2
});

const element0 = React.createElement(DicePanel,
{
   enumClass: AA.AttackDiceValue,
   dice: dice
});
ReactDOM.render(element0, document.getElementById("panel"));