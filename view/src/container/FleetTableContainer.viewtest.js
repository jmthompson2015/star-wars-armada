import TestData from "../TestData.js";

import FleetTableContainer from "./FleetTableContainer.js";

const { FleetBuilder } = AM;

const store = TestData.createStore();

FleetBuilder.buildTheRebelAmbush(store, 1);
FleetBuilder.buildVadersRevenge(store, 2);
FleetBuilder.buildSettingTheTrap(store, 3);

const gameState = store.getState();

const container1 = FleetTableContainer(gameState, { fleetId: 1 });
ReactDOM.render(container1, document.getElementById("panel1"));

const container2 = FleetTableContainer(gameState, { fleetId: 2 });
ReactDOM.render(container2, document.getElementById("panel2"));

const container3 = FleetTableContainer(gameState, { fleetId: 3 });
ReactDOM.render(container3, document.getElementById("panel3"));
