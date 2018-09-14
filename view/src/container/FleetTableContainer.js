import FleetTable from "../component/FleetTable.js";

const { Selector } = AS;

const FleetTableContainer = (gameState, ownProps = {}) => {
  const { fleetId } = ownProps;

  const shipInstances = Selector.shipInstancesByFleet(fleetId, gameState);

  const shipIds = R.map(shipInstance => shipInstance.id, shipInstances);
  const reduceFunction0 = (accum, shipId) =>
    R.assoc(shipId, Selector.upgradeInstancesByShip(shipId, gameState), accum);
  const shipToUpgrades = R.reduce(reduceFunction0, {}, shipIds);

  const squadronInstances = Selector.squadronInstancesByFleet(fleetId, gameState);

  return React.createElement(FleetTable, { shipInstances, shipToUpgrades, squadronInstances });
};

export default FleetTableContainer;
