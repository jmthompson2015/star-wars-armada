import TestData from "../TestData.js";

import CardInstanceUI from "./CardInstanceUI.js";

const cells = [];

const store = TestData.createStore();
const gameState = store.getState();

const shipInstance1 = AS.Selector.shipInstance(1, gameState);
const upgradeInstances1 = R.map(id => AS.Selector.upgradeInstance(id, gameState), shipInstance1.upgrades);
const criticalInstances1 = R.map(id => AS.Selector.criticalInstance(id, gameState), shipInstance1.criticals);

addCardInstanceUI(cells, shipInstance1, undefined, upgradeInstances1, criticalInstances1);

ReactDOM.render(ReactDOMFactories.div(
{}, cells), document.getElementById("panel"));

function addCardInstanceUI(cells, cardInstance, tokenCounts, upgradeInstances, damageInstances)
{
   const element = React.createElement(CardInstanceUI,
   {
      cardInstance: cardInstance,
      damageInstances: damageInstances,
      tokenCounts: tokenCounts,
      upgradeInstances: upgradeInstances
   });

   cells.push(ReactDOMFactories.div(
   {
      key: "card" + cells.length,
      className: "v-top",
   }, element));
}