import TestData from "../TestData.js";

import StatusBarContainer from "./StatusBarContainer.js";

let gameState = TestData.createStore().getState();
gameState = R.assoc("activeShipId", 1, gameState);
gameState = R.assoc("round", 12, gameState);
gameState = R.assoc("userMessage", "Somebody attacked someone.", gameState);

const container = StatusBarContainer(gameState,
{
   helpBase: "../"
});

ReactDOM.render(container, document.getElementById("panel"));