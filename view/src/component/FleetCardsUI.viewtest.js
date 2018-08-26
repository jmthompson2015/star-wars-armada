import TestData from "../TestData.js";

import FleetCardsUI from "./FleetCardsUI.js";

const criticalInstancesByShip = state => shipId => AS.Selector.criticalInstancesByShip(shipId, state);
const upgradeInstancesByShip = state => shipId => AS.Selector.upgradeInstancesByShip(shipId, state);

const createFleetCardsUI = (fleetId, state) =>
{
   const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, state);
   const shipIds = R.map(shipInstance => shipInstance.id, shipInstances);
   const upgradeInstancesByShip0 = upgradeInstancesByShip(state);
   const reduceFunction0 = (accum, shipId) => R.assoc(shipId, upgradeInstancesByShip0(shipId), accum);
   const shipToUpgrades = R.reduce(reduceFunction0,
   {}, shipIds);
   const criticalInstancesByShip0 = criticalInstancesByShip(state);
   const reduceFunction1 = (accum, shipId) => R.assoc(shipId, criticalInstancesByShip0(shipId), accum);
   const shipToDamages = R.reduce(reduceFunction1,
   {}, shipIds);
   // const reduceFunction2 = (accum, shipInstance) => R.assoc(shipInstance.id, shipInstance.defenseTokens, accum);
   const reduceFunction2 = (accum, shipInstance) => R.assoc(shipInstance.id, AS.Selector.defenseTokenInstancesByShip(shipInstance.id, state), accum);
   const shipToDefenseInstances = R.reduce(reduceFunction2,
   {}, shipInstances);
   const reduceFunction3 = (accum, shipInstance) => R.assoc(shipInstance.id, shipInstance.tokenCounts, accum);
   const shipToTokenCounts = R.reduce(reduceFunction3,
   {}, shipInstances);
   const squadronInstances = AS.Selector.squadronInstancesByFleet(fleetId, state);

   return React.createElement(FleetCardsUI,
   {
      shipInstances: shipInstances,
      shipToDamages: shipToDamages,
      shipToDefenseInstances: shipToDefenseInstances,
      shipToTokenCounts: shipToTokenCounts,
      shipToUpgrades: shipToUpgrades,
      squadronInstances: squadronInstances
   });
};

const store = TestData.createStore();
store.dispatch(AS.ActionCreator.dealCritical(1));
store.dispatch(AS.ActionCreator.dealCritical(2));
store.dispatch(AS.ActionCreator.dealCritical(3));
store.dispatch(AS.ActionCreator.addShipTokenCount(1, AA.Command.NAVIGATE, 1));
const state = store.getState();

const element1 = createFleetCardsUI(1, state);
ReactDOM.render(element1, document.getElementById("fleet1"));

const element2 = createFleetCardsUI(2, state);
ReactDOM.render(element2, document.getElementById("fleet2"));