import TestData from '../TestData.js';

import CardInstancesArea from './CardInstancesArea.js';
import CardInstanceUI from './CardInstanceUI.js';

const cells = [];

const store = TestData.createStore();
const gameState = store.getState();

const shipInstance1 = AS.Selector.shipInstance(1, gameState);
const upgradeInstances1 = R.map(
  id => AS.Selector.upgradeInstance(id, gameState),
  shipInstance1.upgrades,
);
const criticalInstances1 = R.map(
  id => AS.Selector.criticalInstance(id, gameState),
  shipInstance1.criticals,
);

const squadronInstance1 = AS.Selector.squadronInstance(1, gameState);

const shipInstance2 = AS.Selector.shipInstance(2, gameState);
const upgradeInstances2 = R.map(
  id => AS.Selector.upgradeInstance(id, gameState),
  shipInstance2.upgrades,
);
const criticalInstances2 = R.map(
  id => AS.Selector.criticalInstance(id, gameState),
  shipInstance2.criticals,
);

const squadronInstance2 = AS.Selector.squadronInstance(2, gameState);

const cardInstanceUIs = [
  React.createElement(CardInstanceUI, {
    cardInstance: shipInstance1,
    damageInstances: criticalInstances1,
    upgradeInstances: upgradeInstances1,
  }),
  React.createElement(CardInstanceUI, {
    cardInstance: squadronInstance1,
  }),
  React.createElement(CardInstanceUI, {
    cardInstance: squadronInstance2,
  }),
  React.createElement(CardInstanceUI, {
    cardInstance: shipInstance2,
    damageInstances: criticalInstances2,
    upgradeInstances: upgradeInstances2,
  }),
];

function addCardInstancesArea(cells0, cardInstanceUIs0) {
  const element = React.createElement(CardInstancesArea, {
    cardInstanceUIs: cardInstanceUIs0,
  });

  cells0.push(
    ReactDOMFactories.div(
      {
        key: `card${cells0.length}`,
        className: 'v-top',
      },
      element,
    ),
  );
}

addCardInstancesArea(cells, cardInstanceUIs);

ReactDOM.render(ReactDOMFactories.div({}, cells), document.getElementById('panel'));
