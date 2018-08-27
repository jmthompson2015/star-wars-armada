import TestData from '../TestData.js';

import PlayAreaContainer from './PlayAreaContainer.js';

const gameState = TestData.createStore(1830).getState();
const container = PlayAreaContainer(gameState, {
  scale: 0.8,
});

ReactDOM.render(container, document.getElementById('panel'));
