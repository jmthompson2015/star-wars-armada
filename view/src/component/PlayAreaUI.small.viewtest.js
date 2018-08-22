import TestData from "../TestData.js";

import PlayAreaUI from "./PlayAreaUI.js";

const gameState = R.assoc("playFormatKey", AA.PlayFormat.SMALL, TestData.createStore().getState());
const scale = 1.0;
const playFormat = AA.Selector.playFormat(gameState.playFormatKey);

const element = React.createElement(PlayAreaUI,
{
   scale: scale,
   shipInstances: Object.values(gameState.shipInstances),
   squadronInstances: Object.values(gameState.squadronInstances),
   image: "background/pia13845.jpg",
   width: playFormat.width,
   height: playFormat.height
});

ReactDOM.render(element, document.getElementById("panel"));