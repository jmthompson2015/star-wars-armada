import FleetCardsUI from '../component/FleetCardsUI.js';

const FleetCardsContainer = (gameState, ownProps = {}) => {
  const { fleetId } = ownProps;
  const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, gameState);
  const shipIds = R.map(shipInstance => shipInstance.id, shipInstances);
  const reduceFunction0 = (accum, shipId) =>
    R.assoc(shipId, AS.Selector.upgradeInstancesByShip(shipId, gameState), accum);
  const shipToUpgrades = R.reduce(reduceFunction0, {}, shipIds);
  const reduceFunction1 = (accum, shipId) =>
    R.assoc(shipId, AS.Selector.criticalInstancesByShip(shipId, gameState), accum);
  const shipToDamages = R.reduce(reduceFunction1, {}, shipIds);
  const reduceFunction2 = (accum, shipInstance) =>
    R.assoc(
      shipInstance.id,
      AS.Selector.defenseTokenInstancesByShip(shipInstance.id, gameState),
      accum,
    );
  const shipToDefenseInstances = R.reduce(reduceFunction2, {}, shipInstances);
  const reduceFunction3 = (accum, shipInstance) =>
    R.assoc(shipInstance.id, shipInstance.tokenCounts, accum);
  const shipToTokenCounts = R.reduce(reduceFunction3, {}, shipInstances);
  const squadronInstances = AS.Selector.squadronInstancesByFleet(fleetId, gameState);

  return React.createElement(FleetCardsUI, {
    shipInstances,
    shipToDamages,
    shipToDefenseInstances,
    shipToTokenCounts,
    shipToUpgrades,
    squadronInstances,
  });
};

export default FleetCardsContainer;
