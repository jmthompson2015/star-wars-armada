const Selector = {};

Selector.agentIds = state => Object.keys(state.agentInstances).sort();

Selector.shipIds = state => Object.keys(state.shipInstances).sort();

Selector.squadronIds = state => Object.keys(state.squadronInstances).sort();

////////////////////////////////////////////////////////////////////////////////
Selector.activeAgentId = state => R.prop("activeAgentId", state);

Selector.activeCombatId = state => R.prop("activeCombatId", state);

Selector.activeQueue = state => R.prop("activeQueue", state);

Selector.activeShipId = state => R.prop("activeShipId", state);

Selector.activeSquadronId = state => R.prop("activeSquadronId", state);

Selector.agentQuery = state => R.prop("agentQuery", state);

Selector.agentResponse = state => R.prop("agentResponse", state);

Selector.damageDeck = state => R.prop("damageDeck", state);

Selector.damageDiscardPile = state => R.prop("damageDiscardPile", state);

Selector.phaseKey = state => R.prop("phaseKey", state);

Selector.playFormatKey = state => R.prop("playFormatKey", state);

Selector.round = state => R.prop("round", state);

Selector.userMessage = state => R.prop("userMessage", state);

////////////////////////////////////////////////////////////////////////////////
Selector.nextAgentId = state => nextId(state.agentInstances);

Selector.nextCombatId = state => nextId(state.combatInstances);

Selector.nextDamageId = state => nextId(state.damageInstances);

Selector.nextFleetId = state => nextId(state.fleetInstances);

Selector.nextShipId = state => nextId(state.shipInstances);

Selector.nextSquadronId = state => nextId(state.squadronInstances);

Selector.nextUpgradeId = state => nextId(state.upgradeInstances);

////////////////////////////////////////////////////////////////////////////////
Selector.agentInstance = (agentId, state) => R.path(["agentInstances", agentId], state);

Selector.combatInstance = (combatId, state) => R.path(["combatInstances", combatId], state);

Selector.damageInstance = (damageId, state) => R.path(["damageInstances", damageId], state);

Selector.fleetInstance = (fleetId, state) => R.path(["fleetInstances", fleetId], state);

Selector.shipInstance = (shipId, state) => R.path(["shipInstances", shipId], state);

Selector.squadronInstance = (squadronId, state) => R.path(["squadronInstances", squadronId], state);

Selector.upgradeInstance = (upgradeId, state) => R.path(["upgradeInstances", upgradeId], state);

////////////////////////////////////////////////////////////////////////////////
const nextId = instanceMap =>
{
   const reduceFunction = (accum, key) => Math.max(accum, key);
   const maxId = R.reduce(reduceFunction, 0, Object.keys(instanceMap));

   return (maxId !== undefined ? maxId : 0) + 1;
};

Object.freeze(Selector);

export default Selector;