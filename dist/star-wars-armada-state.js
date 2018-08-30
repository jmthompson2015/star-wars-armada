(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.AS = {})));
}(this, (function (exports) { 'use strict';

  const ActionType = {};

  ActionType.ADD_SHIP_TOKEN_COUNT = 'addShipTokenCount';

  ActionType.CLEAR_ACTIVE_AGENT_ID = 'clearActiveAgentId';
  ActionType.CLEAR_ACTIVE_COMBAT_ID = 'clearActiveCombatId';
  ActionType.CLEAR_ACTIVE_SHIP_ID = 'clearActiveShipId';
  ActionType.CLEAR_ACTIVE_SQUADRON_ID = 'clearActiveSquadronId';
  ActionType.CLEAR_AGENT_QUERY = 'clearAgentQuery';
  ActionType.CLEAR_AGENT_RESPONSE = 'clearAgentResponse';
  ActionType.CLEAR_SHIP_TOKEN_COUNT = 'clearShipTokenCount';

  ActionType.DEAL_CRITICAL = 'dealCritical';
  ActionType.DEAL_DAMAGE = 'dealDamage';

  ActionType.DEQUEUE_COMMAND = 'dequeueCommand';
  ActionType.DEQUEUE_SHIP = 'dequeueShip';
  ActionType.DEQUEUE_SQUADRON = 'dequeueSquadron';

  ActionType.INCREMENT_ROUND = 'incrementRound';

  ActionType.MOVE_SHIP = 'moveShip';
  ActionType.MOVE_SQUADRON = 'moveSquadron';

  ActionType.READY_SHIP_DEFENSE_TOKENS = 'readyShipDefenseTokens';
  ActionType.READY_SQUADRON_DEFENSE_TOKENS = 'readySquadronDefenseTokens';
  ActionType.READY_UPGRADE_CARDS = 'readyUpgradeCards';

  ActionType.RESET_ACTIVE_QUEUE = 'resetActiveQueue';

  ActionType.SET_ACTIVE_AGENT_ID = 'setActiveAgentId';
  ActionType.SET_ACTIVE_COMBAT_ID = 'setActiveCombatId';
  ActionType.SET_ACTIVE_QUEUE = 'setActiveQueue';
  ActionType.SET_ACTIVE_SHIP_ID = 'setActiveShipId';
  ActionType.SET_ACTIVE_SQUADRON_ID = 'setActiveSquadronId';
  ActionType.SET_AGENT_FLEET = 'setAgentFleet';
  ActionType.SET_AGENT_INSTANCE = 'setAgentInstance';
  ActionType.SET_AGENT_QUERY = 'setAgentQuery';
  ActionType.SET_AGENT_RESPONSE = 'setAgentResponse';
  ActionType.SET_COMBAT_ATTACK_DICE = 'setCombatAttackDice';
  ActionType.SET_COMBAT_CRITICAL_DAMAGE = 'setCombatCriticalDamage';
  ActionType.SET_COMBAT_HIT_DAMAGE = 'setCombatHitDamage';
  ActionType.SET_COMBAT_INSTANCE = 'setCombatInstance';
  ActionType.SET_COMBAT_SHIELD_DAMAGE = 'setCombatShieldDamage';
  ActionType.SET_DAMAGE_DECK = 'setDamageDeck';
  ActionType.SET_DAMAGE_INSTANCES = 'setDamageInstances';
  ActionType.SET_DEFENSE_TOKEN_INSTANCE = 'setDefenseTokenInstance';
  ActionType.SET_FLEET_INSTANCE = 'setFleetInstance';
  ActionType.SET_FLEET_SHIPS = 'setFleetShips';
  ActionType.SET_FLEET_SQUADRONS = 'setFleetSquadrons';
  ActionType.SET_GAME_OVER = 'setGameOver';
  ActionType.SET_PHASE = 'setPhase';
  ActionType.SET_SHIP_DEFENSE_TOKENS = 'setShipDefenseTokens';
  ActionType.SET_SHIP_INSTANCE = 'setShipInstance';
  ActionType.SET_SHIP_TOKEN_COUNTS = 'setShipTokenCounts';
  ActionType.SET_SHIP_UPGRADES = 'setShipUpgrades';
  ActionType.SET_SQUADRON_DEFENSE_TOKENS = 'setSquadronDefenseTokens';
  ActionType.SET_SQUADRON_INSTANCE = 'setSquadronInstance';
  ActionType.SET_SQUADRON_TOKEN_COUNTS = 'setSquadronTokenCounts';
  ActionType.SET_UPGRADE_INSTANCE = 'setUpgradeInstance';
  ActionType.SET_UPGRADE_TOKEN_COUNTS = 'setUpgradeTokenCounts';

  Object.freeze(ActionType);

  // See https://redux.js.org/recipes/reducing-boilerplate
  function makeActionCreator(type, ...argNames) {
    return (...args) => {
      const action = {
        type,
      };
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
      });
      return action;
    };
  }

  const ActionCreator = {};

  ActionCreator.addShipTokenCount = makeActionCreator(
    ActionType.ADD_SHIP_TOKEN_COUNT,
    'shipId',
    'tokenKey',
    'value',
  );

  ActionCreator.clearActiveAgentId = makeActionCreator(ActionType.CLEAR_ACTIVE_AGENT_ID);

  ActionCreator.clearActiveCombatId = makeActionCreator(ActionType.CLEAR_ACTIVE_COMBAT_ID);

  ActionCreator.clearActiveShipId = makeActionCreator(ActionType.CLEAR_ACTIVE_SHIP_ID);

  ActionCreator.clearActiveSquadronId = makeActionCreator(ActionType.CLEAR_ACTIVE_SQUADRON_ID);

  ActionCreator.clearAgentQuery = makeActionCreator(ActionType.CLEAR_AGENT_QUERY);

  ActionCreator.clearAgentResponse = makeActionCreator(ActionType.CLEAR_AGENT_RESPONSE);

  ActionCreator.clearShipTokenCount = makeActionCreator(
    ActionType.CLEAR_SHIP_TOKEN_COUNT,
    'shipId',
    'tokenKey',
  );

  ActionCreator.dealCritical = makeActionCreator(ActionType.DEAL_CRITICAL, 'shipId');

  ActionCreator.dealDamage = makeActionCreator(ActionType.DEAL_DAMAGE, 'shipId');

  ActionCreator.dequeueCommand = makeActionCreator(ActionType.DEQUEUE_COMMAND);

  ActionCreator.dequeueShip = makeActionCreator(ActionType.DEQUEUE_SHIP);

  ActionCreator.dequeueSquadron = makeActionCreator(ActionType.DEQUEUE_SQUADRON);

  ActionCreator.incrementRound = makeActionCreator(ActionType.INCREMENT_ROUND);

  ActionCreator.moveShip = makeActionCreator(ActionType.MOVE_SHIP, 'shipId', 'toPosition');

  ActionCreator.moveSquadron = makeActionCreator(
    ActionType.MOVE_SQUADRON,
    'squadronId',
    'toPosition',
  );

  ActionCreator.readyShipDefenseTokens = makeActionCreator(
    ActionType.READY_SHIP_DEFENSE_TOKENS,
    'shipId',
  );

  ActionCreator.readySquadronDefenseTokens = makeActionCreator(
    ActionType.READY_SQUADRON_DEFENSE_TOKENS,
    'squadronId',
  );

  ActionCreator.readyUpgradeCards = makeActionCreator(ActionType.READY_UPGRADE_CARDS, 'shipId');

  ActionCreator.resetActiveQueue = makeActionCreator(ActionType.RESET_ACTIVE_QUEUE);

  ActionCreator.setActiveAgentId = makeActionCreator(ActionType.SET_ACTIVE_AGENT_ID, 'activeAgentId');

  ActionCreator.setActiveCombatId = makeActionCreator(
    ActionType.SET_ACTIVE_COMBAT_ID,
    'activeCombatId',
  );

  ActionCreator.setActiveQueue = makeActionCreator(ActionType.SET_ACTIVE_QUEUE, 'activeQueue');

  ActionCreator.setActiveShipId = makeActionCreator(ActionType.SET_ACTIVE_SHIP_ID, 'activeShipId');

  ActionCreator.setActiveSquadronId = makeActionCreator(
    ActionType.SET_ACTIVE_SQUADRON_ID,
    'activeSquadronId',
  );

  ActionCreator.setAgentFleet = makeActionCreator(ActionType.SET_AGENT_FLEET, 'agentId', 'fleetId');

  ActionCreator.setAgentInstance = makeActionCreator(ActionType.SET_AGENT_INSTANCE, 'agentInstance');

  ActionCreator.setAgentQuery = makeActionCreator(ActionType.SET_AGENT_QUERY, 'agentQuery');

  ActionCreator.setAgentResponse = makeActionCreator(ActionType.SET_AGENT_RESPONSE, 'agentResponse');

  ActionCreator.setCombatAttackDice = makeActionCreator(
    ActionType.SET_COMBAT_ATTACK_DICE,
    'combatId',
    'diceKeys',
  );

  ActionCreator.setCombatCriticalDamage = makeActionCreator(
    ActionType.SET_COMBAT_CRITICAL_DAMAGE,
    'combatId',
    'criticalDamage',
  );

  ActionCreator.setCombatHitDamage = makeActionCreator(
    ActionType.SET_COMBAT_HIT_DAMAGE,
    'combatId',
    'hitDamage',
  );

  ActionCreator.setCombatInstance = makeActionCreator(
    ActionType.SET_COMBAT_INSTANCE,
    'combatInstance',
  );

  ActionCreator.setCombatShieldDamage = makeActionCreator(
    ActionType.SET_COMBAT_SHIELD_DAMAGE,
    'combatId',
    'shieldDamage',
  );

  ActionCreator.setDamageDeck = makeActionCreator(ActionType.SET_DAMAGE_DECK, 'damageDeck');

  ActionCreator.setDamageInstances = makeActionCreator(
    ActionType.SET_DAMAGE_INSTANCES,
    'damageInstances',
  );

  ActionCreator.setDefenseTokenInstance = makeActionCreator(
    ActionType.SET_DEFENSE_TOKEN_INSTANCE,
    'defenseTokenInstance',
  );

  ActionCreator.setFleetInstance = makeActionCreator(ActionType.SET_FLEET_INSTANCE, 'fleetInstance');

  ActionCreator.setFleetShips = makeActionCreator(ActionType.SET_FLEET_SHIPS, 'fleetId', 'shipIds');

  ActionCreator.setFleetSquadrons = makeActionCreator(
    ActionType.SET_FLEET_SQUADRONS,
    'fleetId',
    'squadronIds',
  );

  ActionCreator.setGameOver = makeActionCreator(ActionType.SET_GAME_OVER, 'isGameOver');

  ActionCreator.setPhase = makeActionCreator(ActionType.SET_PHASE, 'phaseKey');

  ActionCreator.setShipDefenseTokens = makeActionCreator(
    ActionType.SET_SHIP_DEFENSE_TOKENS,
    'shipId',
    'defenseTokenIds',
  );

  ActionCreator.setShipInstance = makeActionCreator(ActionType.SET_SHIP_INSTANCE, 'shipInstance');

  ActionCreator.setShipTokenCounts = makeActionCreator(
    ActionType.SET_SHIP_TOKEN_COUNTS,
    'shipId',
    'tokenCounts',
  );

  ActionCreator.setShipUpgrades = makeActionCreator(
    ActionType.SET_SHIP_UPGRADES,
    'shipId',
    'upgradeIds',
  );

  ActionCreator.setSquadronDefenseTokens = makeActionCreator(
    ActionType.SET_SQUADRON_DEFENSE_TOKENS,
    'squadronId',
    'defenseTokenIds',
  );

  ActionCreator.setSquadronInstance = makeActionCreator(
    ActionType.SET_SQUADRON_INSTANCE,
    'squadronInstance',
  );

  ActionCreator.setSquadronTokenCounts = makeActionCreator(
    ActionType.SET_SQUADRON_TOKEN_COUNTS,
    'squadronId',
    'tokenCounts',
  );

  ActionCreator.setUpgradeInstance = makeActionCreator(
    ActionType.SET_UPGRADE_INSTANCE,
    'upgradeInstance',
  );

  ActionCreator.setUpgradeTokenCounts = makeActionCreator(
    ActionType.SET_UPGRADE_TOKEN_COUNTS,
    'upgradeId',
    'tokenCounts',
  );

  Object.freeze(ActionCreator);

  const AgentQueryState = {};

  AgentQueryState.create = ({ agentId, queryKey, payload = {} }) =>
    Immutable({
      agentId,
      queryKey,
      payload,
    });

  Object.freeze(AgentQueryState);

  const AgentResponseState = {};

  AgentResponseState.create = ({ agentId, responseKey, payload = {} }) =>
    Immutable({
      agentId,
      responseKey,
      payload,
    });

  Object.freeze(AgentResponseState);

  const AgentState = {};

  AgentState.create = ({ id, name, strategy = 'SimpleAgentStrategy', fleet }) =>
    Immutable({
      id,
      name: name || `Agent ${id}`,
      strategy,
      fleet,
    });

  Object.freeze(AgentState);

  const CombatState = {};

  CombatState.create = ({
    id,
    attackerId,
    defenderId,
    rangeKey,
    weaponKey = 'primary',
    criticalDamage = 0,
    hitDamage = 0,
    shieldDamage = 0,
    diceKeys = [],
  }) =>
    Immutable({
      id: Immutable(id),
      attackerId: Immutable(attackerId),
      defenderId: Immutable(defenderId),
      rangeKey: Immutable(rangeKey),
      weaponKey: Immutable(weaponKey),
      criticalDamage: Immutable(criticalDamage),
      hitDamage: Immutable(hitDamage),
      shieldDamage: Immutable(shieldDamage),
      diceKeys: Immutable(diceKeys),
    });

  Object.freeze(CombatState);

  const DamageState = {};

  DamageState.create = ({ id, damageKey }) =>
    Immutable({
      id,
      damageKey,
    });

  Object.freeze(DamageState);

  const DefenseTokenState = {};

  DefenseTokenState.create = ({ id, defenseTokenKey, isReady = true }) =>
    Immutable({ id, defenseTokenKey, isReady });

  Object.freeze(DefenseTokenState);

  const FleetState = {};

  FleetState.create = ({ id, name, year, description, points, ships = [], squadrons = [] }) =>
    Immutable({
      id,
      name,
      year,
      description,
      points,
      ships: Immutable(ships),
      squadrons: Immutable(squadrons),
    });

  Object.freeze(FleetState);

  const GameState = {};

  GameState.create = ({
    activeAgentId,
    activeCombatId,
    activeShipId,
    activeSquadronId,
    isGameOver = false,
    phaseKey = 'setup',
    playFormatKey = 'standard',
    round = 0,
    userMessage = '',
    agentQuery,
    agentResponse,
    activeQueue = [],
    damageDeck = [],
    damageDiscardPile = [],
    agentInstances = {},
    combatInstances = {},
    damageInstances = {},
    defenseTokenInstances = {},
    fleetInstances = {},
    shipInstances = {},
    squadronInstances = {},
    upgradeInstances = {},
  } = {}) =>
    Immutable({
      activeAgentId,
      activeCombatId,
      activeShipId,
      activeSquadronId,
      isGameOver,
      phaseKey,
      playFormatKey,
      round,
      userMessage,
      agentQuery: Immutable(agentQuery),
      agentResponse: Immutable(agentResponse),
      activeQueue: Immutable(activeQueue),
      damageDeck: Immutable(damageDeck),
      damageDiscardPile: Immutable(damageDiscardPile),
      agentInstances: Immutable(agentInstances),
      combatInstances: Immutable(combatInstances),
      damageInstances: Immutable(damageInstances),
      defenseTokenInstances: Immutable(defenseTokenInstances),
      fleetInstances: Immutable(fleetInstances),
      shipInstances: Immutable(shipInstances),
      squadronInstances: Immutable(squadronInstances),
      upgradeInstances: Immutable(upgradeInstances),
    });

  Object.freeze(GameState);

  const PositionState = {};

  PositionState.create = ({ x = 0, y = 0, heading = 0 } = {}) => Immutable({ x, y, heading });

  Object.freeze(PositionState);

  /* eslint no-console: ["error", { allow: ["log"] }] */

  const Reducer = {};

  const assoc = (propertyName, propertyValue, object) =>
    Immutable(R.assoc(propertyName, Immutable(propertyValue), object));
  const assocPath = (propertyPath, propertyValue, object) =>
    Immutable(R.assocPath(propertyPath, Immutable(propertyValue), object));
  const dissoc = (propertyName, object) => Immutable(R.dissoc(propertyName, object));

  Reducer.root = (state, action) => {
    if (typeof state === "undefined") {
      return GameState.create();
    }

    let newActiveAgentId;
    let newActiveShipId;
    let newActiveSquadronId;
    let newAgentInstances;
    let newCombatInstances;
    let newDamages1;
    let newDamages2;
    let newDefenseInstances;
    let newFleetInstances;
    let newShipInstances;
    let newShipInstances1;
    let newShipInstances2;
    let newSquadronInstances;
    let newTokenCounts;
    let newUpgradeInstances;
    let newValue;

    switch (action.type) {
      case ActionType.ADD_SHIP_TOKEN_COUNT:
        newValue =
          R.defaultTo(0, state.shipInstances[action.shipId].tokenCounts[action.tokenKey]) +
          R.defaultTo(1, action.value);
        return assocPath(
          ["shipInstances", action.shipId, "tokenCounts", action.tokenKey],
          newValue,
          state
        );

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
        newTokenCounts = dissoc(action.tokenKey, state.shipInstances[action.shipId].tokenCounts);
        return assocPath(["shipInstances", action.shipId, "tokenCounts"], newTokenCounts, state);

      case ActionType.DEAL_CRITICAL:
        newDamages1 = R.append(
          state.damageDeck[0],
          R.defaultTo([], state.shipInstances[action.shipId].criticals)
        );
        newShipInstances1 = assocPath([action.shipId, "criticals"], newDamages1, state.shipInstances);
        return assoc(
          "shipInstances",
          newShipInstances1,
          assoc("damageDeck", state.damageDeck.slice(1), state)
        );
      case ActionType.DEAL_DAMAGE:
        newDamages2 = R.append(
          state.damageDeck[0],
          R.defaultTo([], state.shipInstances[action.shipId].damages)
        );
        newShipInstances2 = assocPath([action.shipId, "damages"], newDamages2, state.shipInstances);
        return assoc(
          "shipInstances",
          newShipInstances2,
          assoc("damageDeck", state.damageDeck.slice(1), state)
        );

      case ActionType.DEQUEUE_COMMAND:
        [newActiveAgentId] = state.activeQueue;
        console.log(
          `Active Agent ID: ${newActiveAgentId} Agent: ${
          newActiveAgentId !== undefined ? state.agentInstances[newActiveAgentId].name : undefined
        }`
        );
        return assoc(
          "activeAgentId",
          newActiveAgentId,
          assoc("activeQueue", state.activeQueue.slice(1), state)
        );
      case ActionType.DEQUEUE_SHIP:
        [newActiveShipId] = state.activeQueue;
        console.log(
          `Active Ship ID: ${newActiveShipId} Ship: ${
          newActiveShipId !== undefined ? state.shipInstances[newActiveShipId].shipKey : undefined
        }`
        );
        return assoc(
          "activeShipId",
          newActiveShipId,
          assoc("activeQueue", state.activeQueue.slice(1), state)
        );
      case ActionType.DEQUEUE_SQUADRON:
        [newActiveSquadronId] = state.activeQueue;
        console.log(
          `Active Squadron ID: ${newActiveSquadronId} Squadron: ${
          newActiveSquadronId !== undefined
            ? state.squadronInstances[newActiveSquadronId].squadronKey
            : undefined
        }`
        );
        return assoc(
          "activeSquadronId",
          newActiveSquadronId,
          assoc("activeQueue", state.activeQueue.slice(1), state)
        );

      case ActionType.INCREMENT_ROUND:
        console.log(`Round: ${state.round + 1}`);
        return assoc("round", state.round + 1, state);

      case ActionType.MOVE_SHIP:
        return assocPath(["shipInstances", action.shipId, "position"], action.toPosition, state);
      case ActionType.MOVE_SQUADRON:
        return assocPath(
          ["squadronInstances", action.squadronId, "position"],
          action.toPosition,
          state
        );

      case ActionType.READY_SHIP_DEFENSE_TOKENS:
        // FIXME
        return state;
      case ActionType.READY_SQUADRON_DEFENSE_TOKENS:
        // FIXME
        return state;
      case ActionType.READY_UPGRADE_CARDS:
        // FIXME
        return state;

      case ActionType.RESET_ACTIVE_QUEUE:
        return assoc("activeQueue", Immutable([]), state);

      case ActionType.SET_ACTIVE_AGENT_ID:
        return assoc("activeAgentId", action.activeAgentId, state);
      case ActionType.SET_ACTIVE_COMBAT_ID:
        return assoc("activeCombatId", action.activeCombatId, state);
      case ActionType.SET_ACTIVE_QUEUE:
        return assoc("activeQueue", action.activeQueue, state);
      case ActionType.SET_ACTIVE_SHIP_ID:
        return assoc("activeShipId", action.activeShipId, state);
      case ActionType.SET_ACTIVE_SQUADRON_ID:
        return assoc("activeSquadronId", action.activeSquadronId, state);
      case ActionType.SET_AGENT_FLEET:
        return assocPath(["agentInstances", action.agentId, "fleet"], action.fleetId, state);
      case ActionType.SET_AGENT_INSTANCE:
        newAgentInstances = assoc(
          action.agentInstance.id,
          action.agentInstance,
          state.agentInstances
        );
        return assoc("agentInstances", newAgentInstances, state);
      case ActionType.SET_AGENT_QUERY:
        return assoc("agentQuery", action.agentQuery, state);
      case ActionType.SET_AGENT_RESPONSE:
        return assoc("agentResponse", action.agentResponse, state);
      case ActionType.SET_COMBAT_ATTACK_DICE:
        return assocPath(["combatInstances", action.combatId, "diceKeys"], action.diceKeys, state);
      case ActionType.SET_COMBAT_CRITICAL_DAMAGE:
        return assocPath(
          ["combatInstances", action.combatId, "criticalDamage"],
          action.criticalDamage,
          state
        );
      case ActionType.SET_COMBAT_HIT_DAMAGE:
        return assocPath(["combatInstances", action.combatId, "hitDamage"], action.hitDamage, state);
      case ActionType.SET_COMBAT_INSTANCE:
        newCombatInstances = assoc(
          action.combatInstance.id,
          action.combatInstance,
          state.combatInstances
        );
        return assoc("combatInstances", newCombatInstances, state);
      case ActionType.SET_COMBAT_SHIELD_DAMAGE:
        return assocPath(
          ["combatInstances", action.combatId, "shieldDamage"],
          action.shieldDamage,
          state
        );
      case ActionType.SET_DAMAGE_DECK:
        return assoc("damageDeck", action.damageDeck, state);
      case ActionType.SET_DAMAGE_INSTANCES:
        return assoc("damageInstances", action.damageInstances, state);
      case ActionType.SET_DEFENSE_TOKEN_INSTANCE:
        newDefenseInstances = assoc(
          action.defenseTokenInstance.id,
          action.defenseTokenInstance,
          state.defenseTokenInstances
        );
        return assoc("defenseTokenInstances", newDefenseInstances, state);
      case ActionType.SET_FLEET_INSTANCE:
        newFleetInstances = assoc(
          action.fleetInstance.id,
          action.fleetInstance,
          state.fleetInstances
        );
        return assoc("fleetInstances", newFleetInstances, state);
      case ActionType.SET_FLEET_SHIPS:
        return assocPath(["fleetInstances", action.fleetId, "ships"], action.shipIds, state);
      case ActionType.SET_FLEET_SQUADRONS:
        return assocPath(["fleetInstances", action.fleetId, "squadrons"], action.squadronIds, state);
      case ActionType.SET_GAME_OVER:
        return assoc("isGameOver", action.isGameOver, state);
      case ActionType.SET_PHASE:
        console.log(`Phase: ${action.phaseKey}`);
        return assoc("phaseKey", action.phaseKey, state);
      case ActionType.SET_SHIP_DEFENSE_TOKENS:
        return assocPath(
          ["shipInstances", action.shipId, "defenseTokens"],
          action.defenseTokenIds,
          state
        );
      case ActionType.SET_SHIP_INSTANCE:
        newShipInstances = assoc(action.shipInstance.id, action.shipInstance, state.shipInstances);
        return assoc("shipInstances", newShipInstances, state);
      case ActionType.SET_SHIP_TOKEN_COUNTS:
        return assocPath(["shipInstances", action.shipId, "tokenCounts"], action.tokenCounts, state);
      case ActionType.SET_SHIP_UPGRADES:
        return assocPath(["shipInstances", action.shipId, "upgrades"], action.upgradeIds, state);
      case ActionType.SET_SQUADRON_DEFENSE_TOKENS:
        return assocPath(
          ["squadronInstances", action.squadronId, "defenseTokens"],
          action.defenseTokenIds,
          state
        );
      case ActionType.SET_SQUADRON_INSTANCE:
        newSquadronInstances = assoc(
          action.squadronInstance.id,
          action.squadronInstance,
          state.squadronInstances
        );
        return assoc("squadronInstances", newSquadronInstances, state);
      case ActionType.SET_SQUADRON_TOKEN_COUNTS:
        return assocPath(
          ["squadronInstances", action.squadronId, "tokenCounts"],
          action.tokenCounts,
          state
        );
      case ActionType.SET_UPGRADE_INSTANCE:
        newUpgradeInstances = assoc(
          action.upgradeInstance.id,
          action.upgradeInstance,
          state.upgradeInstances
        );
        return assoc("upgradeInstances", newUpgradeInstances, state);
      case ActionType.SET_UPGRADE_TOKEN_COUNTS:
        return assocPath(
          ["upgradeInstances", action.upgradeId, "tokenCounts"],
          action.tokenCounts,
          state
        );

      default:
        // console.warn("Reducer.root: Unhandled action type: " + action.type);
        return state;
    }
  };

  Object.freeze(Reducer);

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

  const ShipState = {};

  ShipState.create = ({
    id,
    shipKey,
    speed,
    position,
    tokenCounts = {},
    commands = [],
    criticals = [],
    damages = [],
    defenseTokens = [],
    upgrades = [],
  }) =>
    Immutable({
      id,
      shipKey,
      speed,
      position: Immutable(position),
      tokenCounts: Immutable(tokenCounts),
      commands: Immutable(commands),
      criticals: Immutable(criticals),
      damages: Immutable(damages),
      defenseTokens: Immutable(defenseTokens),
      upgrades: Immutable(upgrades),
    });

  Object.freeze(ShipState);

  const SquadronState = {};

  SquadronState.create = ({ id, squadronKey, position, damages = [], defenseTokens = [] }) =>
    Immutable({
      id,
      squadronKey,
      position: Immutable(position),
      damages: Immutable(damages),
      defenseTokens: Immutable(defenseTokens),
    });

  Object.freeze(SquadronState);

  const TokenCountsState = {};

  TokenCountsState.create = ({ concentrateFire, navigate, repair, squadron } = {}) =>
    Immutable({
      concentrateFire,
      navigate,
      repair,
      squadron,
    });

  Object.freeze(TokenCountsState);

  const UpgradeState = {};

  UpgradeState.create = ({ id, upgradeKey, tokenCounts }) =>
    Immutable({ id, upgradeKey, tokenCounts: Immutable(tokenCounts) });

  Object.freeze(UpgradeState);

  exports.ActionCreator = ActionCreator;
  exports.ActionType = ActionType;
  exports.AgentQueryState = AgentQueryState;
  exports.AgentResponseState = AgentResponseState;
  exports.AgentState = AgentState;
  exports.CombatState = CombatState;
  exports.DamageState = DamageState;
  exports.DefenseTokenState = DefenseTokenState;
  exports.FleetState = FleetState;
  exports.GameState = GameState;
  exports.PositionState = PositionState;
  exports.Reducer = Reducer;
  exports.Selector = Selector;
  exports.ShipState = ShipState;
  exports.SquadronState = SquadronState;
  exports.TokenCountsState = TokenCountsState;
  exports.UpgradeState = UpgradeState;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
