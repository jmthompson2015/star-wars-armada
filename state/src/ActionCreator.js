import ActionType from "./ActionType.js";

const ActionCreator = {};

ActionCreator.addShipTokenCount = makeActionCreator(ActionType.ADD_SHIP_TOKEN_COUNT, "shipId", "tokenKey", "value");

ActionCreator.clearActiveAgentId = makeActionCreator(ActionType.CLEAR_ACTIVE_AGENT_ID);

ActionCreator.clearActiveCombatId = makeActionCreator(ActionType.CLEAR_ACTIVE_COMBAT_ID);

ActionCreator.clearActiveShipId = makeActionCreator(ActionType.CLEAR_ACTIVE_SHIP_ID);

ActionCreator.clearActiveSquadronId = makeActionCreator(ActionType.CLEAR_ACTIVE_SQUADRON_ID);

ActionCreator.clearAgentQuery = makeActionCreator(ActionType.CLEAR_AGENT_QUERY);

ActionCreator.clearAgentResponse = makeActionCreator(ActionType.CLEAR_AGENT_RESPONSE);

ActionCreator.clearShipTokenCount = makeActionCreator(ActionType.CLEAR_SHIP_TOKEN_COUNT, "shipId", "tokenKey");

ActionCreator.dealCritical = makeActionCreator(ActionType.DEAL_CRITICAL, "shipId");

ActionCreator.dealDamage = makeActionCreator(ActionType.DEAL_DAMAGE, "shipId");

ActionCreator.dequeueCommand = makeActionCreator(ActionType.DEQUEUE_COMMAND);

ActionCreator.dequeueShip = makeActionCreator(ActionType.DEQUEUE_SHIP);

ActionCreator.dequeueSquadron = makeActionCreator(ActionType.DEQUEUE_SQUADRON);

ActionCreator.incrementRound = makeActionCreator(ActionType.INCREMENT_ROUND);

ActionCreator.moveShip = makeActionCreator(ActionType.MOVE_SHIP, "shipId", "toPosition");

ActionCreator.moveSquadron = makeActionCreator(ActionType.MOVE_SQUADRON, "squadronId", "toPosition");

ActionCreator.readyShipDefenseTokens = makeActionCreator(ActionType.READY_SHIP_DEFENSE_TOKENS, "shipId");

ActionCreator.readySquadronDefenseTokens = makeActionCreator(ActionType.READY_SQUADRON_DEFENSE_TOKENS, "squadronId");

ActionCreator.readyUpgradeCards = makeActionCreator(ActionType.READY_UPGRADE_CARDS, "shipId");

ActionCreator.resetActiveQueue = makeActionCreator(ActionType.RESET_ACTIVE_QUEUE);

ActionCreator.setActiveAgentId = makeActionCreator(ActionType.SET_ACTIVE_AGENT_ID, "activeAgentId");

ActionCreator.setActiveCombatId = makeActionCreator(ActionType.SET_ACTIVE_COMBAT_ID, "activeCombatId");

ActionCreator.setActiveQueue = makeActionCreator(ActionType.SET_ACTIVE_QUEUE, "activeQueue");

ActionCreator.setActiveShipId = makeActionCreator(ActionType.SET_ACTIVE_SHIP_ID, "activeShipId");

ActionCreator.setActiveSquadronId = makeActionCreator(ActionType.SET_ACTIVE_SQUADRON_ID, "activeSquadronId");

ActionCreator.setAgentFleet = makeActionCreator(ActionType.SET_AGENT_FLEET, "agentId", "fleetId");

ActionCreator.setAgentInstance = makeActionCreator(ActionType.SET_AGENT_INSTANCE, "agentInstance");

ActionCreator.setAgentQuery = makeActionCreator(ActionType.SET_AGENT_QUERY, "agentQuery");

ActionCreator.setAgentResponse = makeActionCreator(ActionType.SET_AGENT_RESPONSE, "agentResponse");

ActionCreator.setCombatAttackDice = makeActionCreator(ActionType.SET_COMBAT_ATTACK_DICE, "combatId", "diceKeys");

ActionCreator.setCombatCriticalDamage = makeActionCreator(ActionType.SET_COMBAT_CRITICAL_DAMAGE, "combatId", "criticalDamage");

ActionCreator.setCombatHitDamage = makeActionCreator(ActionType.SET_COMBAT_HIT_DAMAGE, "combatId", "hitDamage");

ActionCreator.setCombatInstance = makeActionCreator(ActionType.SET_COMBAT_INSTANCE, "combatInstance");

ActionCreator.setCombatShieldDamage = makeActionCreator(ActionType.SET_COMBAT_SHIELD_DAMAGE, "combatId", "shieldDamage");

ActionCreator.setDamageDeck = makeActionCreator(ActionType.SET_DAMAGE_DECK, "damageDeck");

ActionCreator.setDamageInstances = makeActionCreator(ActionType.SET_DAMAGE_INSTANCES, "damageInstances");

ActionCreator.setFleetInstance = makeActionCreator(ActionType.SET_FLEET_INSTANCE, "fleetInstance");

ActionCreator.setFleetShips = makeActionCreator(ActionType.SET_FLEET_SHIPS, "fleetId", "shipIds");

ActionCreator.setFleetSquadrons = makeActionCreator(ActionType.SET_FLEET_SQUADRONS, "fleetId", "squadronIds");

ActionCreator.setGameOver = makeActionCreator(ActionType.SET_GAME_OVER, "isGameOver");

ActionCreator.setPhase = makeActionCreator(ActionType.SET_PHASE, "phaseKey");

ActionCreator.setShipDefenseToken = makeActionCreator(ActionType.SET_SHIP_DEFENSE_TOKEN, "shipId", "defenseToken");

ActionCreator.setShipInstance = makeActionCreator(ActionType.SET_SHIP_INSTANCE, "shipInstance");

ActionCreator.setShipTokenCounts = makeActionCreator(ActionType.SET_SHIP_TOKEN_COUNTS, "shipId", "tokenCounts");

ActionCreator.setShipUpgrades = makeActionCreator(ActionType.SET_SHIP_UPGRADES, "shipId", "upgradeIds");

ActionCreator.setSquadronInstance = makeActionCreator(ActionType.SET_SQUADRON_INSTANCE, "squadronInstance");

ActionCreator.setSquadronTokenCounts = makeActionCreator(ActionType.SET_SQUADRON_TOKEN_COUNTS, "squadronId", "tokenCounts");

ActionCreator.setUpgradeInstance = makeActionCreator(ActionType.SET_UPGRADE_INSTANCE, "upgradeInstance");

ActionCreator.setUpgradeTokenCounts = makeActionCreator(ActionType.SET_UPGRADE_TOKEN_COUNTS, "upgradeId", "tokenCounts");

// See https://redux.js.org/recipes/reducing-boilerplate
function makeActionCreator(type, ...argNames)
{
   return function(...args)
   {
      const action = {
         type
      };
      argNames.forEach((arg, index) =>
      {
         action[argNames[index]] = args[index];
      });
      return action;
   };
}

Object.freeze(ActionCreator);

export default ActionCreator;