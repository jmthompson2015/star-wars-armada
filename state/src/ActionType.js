const ActionType = {};

ActionType.ADD_SHIP_TOKEN_COUNT = "addShipTokenCount";

ActionType.CLEAR_ACTIVE_AGENT_ID = "clearActiveAgentId";
ActionType.CLEAR_ACTIVE_COMBAT_ID = "clearActiveCombatId";
ActionType.CLEAR_ACTIVE_SHIP_ID = "clearActiveShipId";
ActionType.CLEAR_ACTIVE_SQUADRON_ID = "clearActiveSquadronId";
ActionType.CLEAR_AGENT_QUERY = "clearAgentQuery";
ActionType.CLEAR_AGENT_RESPONSE = "clearAgentResponse";
ActionType.CLEAR_SHIP_TOKEN_COUNT = "clearShipTokenCount";

ActionType.DEAL_CRITICAL = "dealCritical";
ActionType.DEAL_DAMAGE = "dealDamage";

ActionType.DEQUEUE_COMMAND = "dequeueCommand";
ActionType.DEQUEUE_SHIP = "dequeueShip";
ActionType.DEQUEUE_SQUADRON = "dequeueSquadron";
// ActionType.DEQUEUE_STATUS_SHIP = "dequeueStatusShip";
// ActionType.DEQUEUE_STATUS_SQUADRON = "dequeueStatusSquadron";

ActionType.INCREMENT_ROUND = "incrementRound";

ActionType.MOVE_SHIP = "moveShip";
ActionType.MOVE_SQUADRON = "moveSquadron";

ActionType.READY_SHIP_DEFENSE_TOKENS = "readyShipDefenseTokens";
ActionType.READY_SQUADRON_DEFENSE_TOKENS = "readySquadronDefenseTokens";
ActionType.READY_UPGRADE_CARDS = "readyUpgradeCards";

ActionType.RESET_ACTIVE_QUEUE = "resetActiveQueue";

ActionType.SET_ACTIVE_AGENT_ID = "setActiveAgentId";
ActionType.SET_ACTIVE_COMBAT_ID = "setActiveCombatId";
ActionType.SET_ACTIVE_QUEUE = "setActiveQueue";
ActionType.SET_ACTIVE_SHIP_ID = "setActiveShipId";
ActionType.SET_ACTIVE_SQUADRON_ID = "setActiveSquadronId";
ActionType.SET_AGENT_FLEET = "setAgentFleet";
ActionType.SET_AGENT_INSTANCE = "setAgentInstance";
ActionType.SET_AGENT_QUERY = "setAgentQuery";
ActionType.SET_AGENT_RESPONSE = "setAgentResponse";
ActionType.SET_COMBAT_ATTACK_DICE = "setCombatAttackDice";
ActionType.SET_COMBAT_CRITICAL_DAMAGE = "setCombatCriticalDamage";
ActionType.SET_COMBAT_HIT_DAMAGE = "setCombatHitDamage";
ActionType.SET_COMBAT_INSTANCE = "setCombatInstance";
ActionType.SET_COMBAT_SHIELD_DAMAGE = "setCombatShieldDamage";
ActionType.SET_DAMAGE_DECK = "setDamageDeck";
ActionType.SET_DAMAGE_INSTANCES = "setDamageInstances";
ActionType.SET_FLEET_INSTANCE = "setFleetInstance";
ActionType.SET_FLEET_SHIPS = "setFleetShips";
ActionType.SET_FLEET_SQUADRONS = "setFleetSquadrons";
ActionType.SET_GAME_OVER = "setGameOver";
ActionType.SET_PHASE = "setPhase";
ActionType.SET_SHIP_INSTANCE = "setShipInstance";
ActionType.SET_SHIP_TOKEN_COUNTS = "setShipTokenCounts";
ActionType.SET_SHIP_UPGRADES = "setShipUpgrades";
ActionType.SET_SQUADRON_INSTANCE = "setSquadronInstance";
ActionType.SET_SQUADRON_TOKEN_COUNTS = "setSquadronTokenCounts";
ActionType.SET_UPGRADE_INSTANCE = "setUpgradeInstance";
ActionType.SET_UPGRADE_TOKEN_COUNTS = "setUpgradeTokenCounts";

Object.freeze(ActionType);

export default ActionType;