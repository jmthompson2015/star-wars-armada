import TestData from '../TestData.js';

import PlayAreaUI from './PlayAreaUI.js';

const gameState = TestData.createStore(1830).getState();
const scale = 0.75;

const element = React.createElement(PlayAreaUI, {
  scale,
  shipInstances: Object.values(gameState.shipInstances),
  squadronInstances: Object.values(gameState.squadronInstances),
});

ReactDOM.render(element, document.getElementById('panel'));
