import TestData from "./TestData.js";
import StarWarsArmadaView from "./StarWarsArmadaView.js";

const store = TestData.createStore();
let gameState = store.getState();
gameState = R.assoc("playFormatKey", "small", gameState);

StarWarsArmadaView.drawView(
{
   gameState: gameState,
   document: document
});