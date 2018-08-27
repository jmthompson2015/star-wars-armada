const Selector = {};

Selector.agentIds = state => Object.keys(state.agentInstances).sort();

Selector.agentInstances = state => Object.values(R.prop('agentInstances', state));

Selector.criticalInstancesByShip = (shipId, state) => {
  const shipInstance = Selector.shipInstance(shipId, state);
  const criticalIds = shipInstance.criticals;

  return R.map(criticalId => Selector.damageInstance(criticalId, state), criticalIds);
};

Selector.defenseTokenInstancesByShip = (shipId, state) => {
  const shipInstance = Selector.shipInstance(shipId, state);
  const tokenIds = shipInstance.defenseTokens;

  return R.map(tokenId => Selector.defenseTokenInstance(tokenId, state), tokenIds);
};

Selector.defenseTokenInstancesBySquadron = (shipId, state) => {
  const squadronInstance = Selector.squadronInstance(shipId, state);
  const tokenIds = squadronInstance.defenseTokens;

  return R.map(tokenId => Selector.defenseTokenInstance(tokenId, state), tokenIds);
};

Selector.shipCountByAgent = (agentId, state) => {
  const agent = Selector.agentInstance(agentId, state);

  return Selector.shipCountByFleet(agent.fleet, state);
};

Selector.shipCountByFleet = (fleetId, state) => Selector.fleetInstance(fleetId, state).ships.length;

Selector.shipIds = state => Object.keys(state.shipInstances).sort();

Selector.shipInstancesByFleet = (fleetId, state) => {
  const fleetInstance = Selector.fleetInstance(fleetId, state);
  const shipIds = fleetInstance.ships;

  return R.map(shipId => Selector.shipInstance(shipId, state), shipIds);
};

Selector.squadronInstancesByFleet = (fleetId, state) => {
  const fleetInstance = Selector.fleetInstance(fleetId, state);
  const squadronIds = fleetInstance.squadrons;

  return R.map(squadronId => Selector.squadronInstance(squadronId, state), squadronIds);
};

Selector.squadronIds = state => Object.keys(state.squadronInstances).sort();

Selector.upgradeInstancesByShip = (shipId, state) => {
  const shipInstance = Selector.shipInstance(shipId, state);
  const upgradeIds = shipInstance.upgrades;

  return R.map(upgradeId => Selector.upgradeInstance(upgradeId, state), upgradeIds);
};

// //////////////////////////////////////////////////////////////////////////////
Selector.activeAgentId = state => R.prop('activeAgentId', state);

Selector.activeCombatId = state => R.prop('activeCombatId', state);

Selector.activeQueue = state => R.prop('activeQueue', state);

Selector.activeShipId = state => R.prop('activeShipId', state);

Selector.activeSquadronId = state => R.prop('activeSquadronId', state);

Selector.agentQuery = state => R.prop('agentQuery', state);

Selector.agentResponse = state => R.prop('agentResponse', state);

Selector.damageDeck = state => R.prop('damageDeck', state);

Selector.damageDiscardPile = state => R.prop('damageDiscardPile', state);

Selector.phaseKey = state => R.prop('phaseKey', state);

Selector.playFormatKey = state => R.prop('playFormatKey', state);

Selector.round = state => R.prop('round', state);

Selector.userMessage = state => R.prop('userMessage', state);

// //////////////////////////////////////////////////////////////////////////////
const nextId = instanceMap => {
  const reduceFunction = (accum, key) => Math.max(accum, key);
  const maxId = R.reduce(reduceFunction, 0, Object.keys(instanceMap));

  return (maxId !== undefined ? maxId : 0) + 1;
};

Selector.nextAgentId = state => nextId(state.agentInstances);

Selector.nextCombatId = state => nextId(state.combatInstances);

Selector.nextDamageId = state => nextId(state.damageInstances);

Selector.nextDefenseTokenId = state => nextId(state.defenseTokenInstances);

Selector.nextFleetId = state => nextId(state.fleetInstances);

Selector.nextShipId = state => nextId(state.shipInstances);

Selector.nextSquadronId = state => nextId(state.squadronInstances);

Selector.nextUpgradeId = state => nextId(state.upgradeInstances);

// //////////////////////////////////////////////////////////////////////////////
Selector.agentInstance = (agentId, state) => R.path(['agentInstances', agentId], state);

Selector.combatInstance = (combatId, state) => R.path(['combatInstances', combatId], state);

Selector.damageInstance = (damageId, state) => R.path(['damageInstances', damageId], state);

Selector.defenseTokenInstance = (tokenId, state) =>
  R.path(['defenseTokenInstances', tokenId], state);

Selector.fleetInstance = (fleetId, state) => R.path(['fleetInstances', fleetId], state);

Selector.shipInstance = (shipId, state) => R.path(['shipInstances', shipId], state);

Selector.squadronInstance = (squadronId, state) => R.path(['squadronInstances', squadronId], state);

Selector.upgradeInstance = (upgradeId, state) => R.path(['upgradeInstances', upgradeId], state);

Object.freeze(Selector);

export default Selector;
