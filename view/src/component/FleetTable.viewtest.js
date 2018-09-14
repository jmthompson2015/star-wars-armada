import FleetTable from "./FleetTable.js";

const { Reducer } = AS;
const { FleetBuilder } = AM;

const createTable = (fleetInstance, state) => {
  const mapFunction1 = shipId => AS.Selector.shipInstance(shipId, state);
  const shipInstances = R.map(mapFunction1, fleetInstance.ships);

  const reduceFunction = (accum, ship) => {
    const upgradeInstances = AS.Selector.upgradeInstancesByShip(ship.id, state);
    return R.assoc(ship.id, upgradeInstances, accum);
  };
  const shipToUpgrades = R.reduce(reduceFunction, {}, shipInstances);

  const mapFunction2 = squadronId => AS.Selector.squadronInstance(squadronId, state);
  const squadronInstances = R.map(mapFunction2, fleetInstance.squadrons);

  return React.createElement(FleetTable, {
    shipInstances,
    shipToUpgrades,
    squadronInstances
  });
};

const store = Redux.createStore(Reducer.root);

const fleetInstance1 = FleetBuilder.buildTheRebelAmbush(store, 1);
const fleetInstance2 = FleetBuilder.buildVadersRevenge(store, 2);
const fleetInstance3 = FleetBuilder.buildSettingTheTrap(store, 3);

const table1 = createTable(fleetInstance1, store.getState());
ReactDOM.render(table1, document.getElementById("panel1"));

const table2 = createTable(fleetInstance2, store.getState());
ReactDOM.render(table2, document.getElementById("panel2"));

const table3 = createTable(fleetInstance3, store.getState());
ReactDOM.render(table3, document.getElementById("panel3"));
