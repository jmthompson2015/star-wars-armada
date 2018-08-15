import ActionType from "./ActionType.js";
import GameState from "./GameState.js";

const Reducer = {};

Reducer.root = function(state, action)
{
   if (typeof state === "undefined")
   {
      return GameState.create();
   }

   switch (action.type)
   {
      case ActionType.ADD_PILOT_TOKEN_COUNT:
         const newValue = R.defaultTo(0, state.shipInstances[action.shipId].tokenCounts[action.tokenKey]) + R.defaultTo(1, action.value);
         return assocPath(["shipInstances", action.shipId, "tokenCounts", action.tokenKey], newValue, state);

      case ActionType.CLEAR_ACTIVE_AGENT_ID:
         return dissoc("activeAgentId", state);
      case ActionType.CLEAR_ACTIVE_COMBAT_ID:
         return dissoc("activeCombatId", state);
      case ActionType.CLEAR_ACTIVE_SHIP_ID:
         return dissoc("activeShipId", state);
      case ActionType.CLEAR_ACTIVE_SQUADRON_ID:
         return dissoc("activeSquadronId", state);
      case ActionType.CLEAR_AGENT_QUERY:
         return dissoc("agentQuery", state);
      case ActionType.CLEAR_AGENT_RESPONSE:
         return dissoc("agentResponse", state);
      case ActionType.CLEAR_SHIP_TOKEN_COUNT:
         const newTokenCounts = dissoc(action.tokenKey, state.shipInstances[action.shipId].tokenCounts);
         return assocPath(["shipInstances", action.shipId, "tokenCounts"], newTokenCounts, state);

      case ActionType.DEAL_CRITICAL:
         const newDamages1 = R.append(state.damageDeck[0], R.defaultTo([], state.shipInstances[action.shipId].criticals));
         const newShipInstances1 = assocPath([action.shipId, "criticals"], newDamages1, state.shipInstances);
         return assoc("shipInstances", newShipInstances1, assoc("damageDeck", state.damageDeck.slice(1), state));
      case ActionType.DEAL_DAMAGE:
         const newDamages2 = R.append(state.damageDeck[0], R.defaultTo([], state.shipInstances[action.shipId].damages));
         const newShipInstances2 = assocPath([action.shipId, "damages"], newDamages2, state.shipInstances);
         return assoc("shipInstances", newShipInstances2, assoc("damageDeck", state.damageDeck.slice(1), state));

      case ActionType.INCREMENT_ROUND:
         console.log("Round: " + (state.round + 1));
         return assoc("round", state.round + 1, state);

      case ActionType.MOVE_SHIP:
         return assocPath(["shipInstances", action.shipId, "position"], action.toPosition, state);
      case ActionType.MOVE_SQUADRON:
         return assocPath(["squadronInstances", action.squadronId, "position"], action.toPosition, state);

      case ActionType.SET_ACTIVE_AGENT_ID:
         return assoc("activeAgentId", action.activeAgentId, state);
      case ActionType.SET_ACTIVE_COMBAT_ID:
         return assoc("activeCombatId", action.activeCombatId, state);
      case ActionType.SET_ACTIVE_SHIP_ID:
         return assoc("activeShipId", action.activeShipId, state);
      case ActionType.SET_ACTIVE_SQUADRON_ID:
         return assoc("activeSquadronId", action.activeSquadronId, state);
      case ActionType.SET_AGENT_FLEET:
         return assocPath(["agentInstances", action.agentId, "fleet"], action.fleetId, state);
      case ActionType.SET_AGENT_INSTANCE:
         const newAgentInstances = assoc(action.agentInstance.id, action.agentInstance, state.agentInstances);
         return assoc("agentInstances", newAgentInstances, state);
      case ActionType.SET_AGENT_QUERY:
         return assoc("agentQuery", action.agentQuery, state);
      case ActionType.SET_AGENT_RESPONSE:
         return assoc("agentResponse", action.agentResponse, state);
      case ActionType.SET_COMBAT_ATTACK_DICE:
         return assocPath(["combatInstances", action.combatId, "diceKeys"], action.diceKeys, state);
      case ActionType.SET_COMBAT_CRITICAL_DAMAGE:
         return assocPath(["combatInstances", action.combatId, "criticalDamage"], action.criticalDamage, state);
      case ActionType.SET_COMBAT_HIT_DAMAGE:
         return assocPath(["combatInstances", action.combatId, "hitDamage"], action.hitDamage, state);
      case ActionType.SET_COMBAT_INSTANCE:
         const newCombatInstances = assoc(action.combatInstance.id, action.combatInstance, state.combatInstances);
         return assoc("combatInstances", newCombatInstances, state);
      case ActionType.SET_COMBAT_SHIELD_DAMAGE:
         return assocPath(["combatInstances", action.combatId, "shieldDamage"], action.shieldDamage, state);
      case ActionType.SET_DAMAGE_DECK:
         return assoc("damageDeck", action.damageDeck, state);
      case ActionType.SET_DAMAGE_INSTANCES:
         return assoc("damageInstances", action.damageInstances, state);
      case ActionType.SET_FLEET_INSTANCE:
         const newFleetInstances = assoc(action.fleetInstance.id, action.fleetInstance, state.fleetInstances);
         return assoc("fleetInstances", newFleetInstances, state);
      case ActionType.SET_FLEET_SHIPS:
         return assocPath(["fleetInstances", action.fleetId, "ships"], action.shipIds, state);
      case ActionType.SET_FLEET_SQUADRONS:
         return assocPath(["fleetInstances", action.fleetId, "squadrons"], action.squadronIds, state);
      case ActionType.SET_GAME_OVER:
         return assoc("isGameOver", action.isGameOver, state);
      case ActionType.SET_PHASE:
         console.log("Phase: " + action.phaseKey);
         return assoc("phaseKey", action.phaseKey, state);
      case ActionType.SET_SHIP_INSTANCE:
         const newShipInstances = assoc(action.shipInstance.id, action.shipInstance, state.shipInstances);
         return assoc("shipInstances", newShipInstances, state);
      case ActionType.SET_SHIP_TOKEN_COUNTS:
         return assocPath(["shipInstances", action.shipId, "tokenCounts"], action.tokenCounts, state);
      case ActionType.SET_SHIP_UPGRADES:
         return assocPath(["shipInstances", action.shipId, "upgrades"], action.upgradeIds, state);
      case ActionType.SET_SQUADRON_INSTANCE:
         const newSquadronInstances = assoc(action.squadronInstance.id, action.squadronInstance, state.squadronInstances);
         return assoc("squadronInstances", newSquadronInstances, state);
      case ActionType.SET_SQUADRON_TOKEN_COUNTS:
         return assocPath(["squadronInstances", action.squadronId, "tokenCounts"], action.tokenCounts, state);
      case ActionType.SET_UPGRADE_INSTANCE:
         const newUpgradeInstances = assoc(action.upgradeInstance.id, action.upgradeInstance, state.upgradeInstances);
         return assoc("upgradeInstances", newUpgradeInstances, state);
      case ActionType.SET_UPGRADE_TOKEN_COUNTS:
         return assocPath(["upgradeInstances", action.upgradeId, "tokenCounts"], action.tokenCounts, state);

      default:
         console.warn("Reducer.root: Unhandled action type: " + action.type);
         return state;
   }
};

const assoc = (propertyName, propertyValue, object) => Immutable(R.assoc(propertyName, Immutable(propertyValue), object));
const assocPath = (propertyPath, propertyValue, object) => Immutable(R.assocPath(propertyPath, Immutable(propertyValue), object));
const dissoc = (propertyName, object) => Immutable(R.dissoc(propertyName, object));

Object.freeze(Reducer);

export default Reducer;