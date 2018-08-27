import TestData from '../TestData.js';

import FleetCardsContainer from './FleetCardsContainer.js';

const store = TestData.createStore();
store.dispatch(AS.ActionCreator.addShipTokenCount(1, AA.Command.NAVIGATE));
store.dispatch(AS.ActionCreator.addShipTokenCount(2, AA.Command.SQUADRON));
store.dispatch(AS.ActionCreator.addShipTokenCount(3, AA.Command.REPAIR));
store.dispatch(AS.ActionCreator.addShipTokenCount(1, AA.Command.CONCENTRATE_FIRE));

const gameState = store.getState();

const container1 = FleetCardsContainer(gameState, {
  fleetId: 1,
});

ReactDOM.render(container1, document.getElementById('panel1'));

const container2 = FleetCardsContainer(gameState, {
  fleetId: 2,
});

ReactDOM.render(container2, document.getElementById('panel2'));
