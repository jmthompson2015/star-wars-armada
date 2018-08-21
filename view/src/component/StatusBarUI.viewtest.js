import StatusBarUI from "./StatusBarUI.js";

const phase = AA.Selector.phase(AA.Phase.SHIP_ATTACK_ROLL_ATTACK_DICE);

const element = React.createElement(StatusBarUI,
{
   activeShipName: "Bob's Fighter",
   phaseName: phase.name,
   round: 12,
   userMessage: "Somebody attacked someone.",
   helpBase: "../"
});

ReactDOM.render(element, document.getElementById("panel"));