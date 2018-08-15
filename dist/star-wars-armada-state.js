(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AS = {})));
}(this, (function (exports) { 'use strict';

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

   ActionType.INCREMENT_ROUND = "incrementRound";

   ActionType.MOVE_SHIP = "moveShip";
   ActionType.MOVE_SQUADRON = "moveSquadron";

   ActionType.SET_ACTIVE_AGENT_ID = "setActiveAgentId";
   ActionType.SET_ACTIVE_COMBAT_ID = "setActiveCombatId";
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

   ActionCreator.incrementRound = makeActionCreator(ActionType.INCREMENT_ROUND);

   ActionCreator.moveShip = makeActionCreator(ActionType.MOVE_SHIP, "shipId", "toPosition");

   ActionCreator.moveSquadron = makeActionCreator(ActionType.MOVE_SQUADRON, "squadronId", "toPosition");

   ActionCreator.setActiveAgentId = makeActionCreator(ActionType.SET_ACTIVE_AGENT_ID, "activeAgentId");

   ActionCreator.setActiveCombatId = makeActionCreator(ActionType.SET_ACTIVE_COMBAT_ID, "activeCombatId");

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

   const AgentQueryState = {};

   AgentQueryState.create = function(
   {
      agentId,
      queryKey,
      payload = {}
   })
   {
      return Immutable(
      {
         agentId: agentId,
         queryKey: queryKey,
         payload: payload
      });
   };

   Object.freeze(AgentQueryState);

   const AgentResponseState = {};

   AgentResponseState.create = function(
   {
      agentId,
      responseKey,
      payload = {}
   })
   {
      return Immutable(
      {
         agentId: agentId,
         responseKey: responseKey,
         payload: payload
      });
   };

   Object.freeze(AgentResponseState);

   const AgentState = {};

   AgentState.create = function(
   {
      id,
      name,
      strategy = "SimpleAgentStrategy",

      fleet
   })
   {
      name = name || "Agent " + id;

      return Immutable(
      {
         id: id,
         name: name,
         strategy: strategy,

         fleet: fleet
      });
   };

   Object.freeze(AgentState);

   const CombatState = {};

   CombatState.create = function(
   {
      id,
      attackerId,
      defenderId,
      rangeKey,
      weaponKey = "primary",

      criticalDamage = 0,
      hitDamage = 0,
      shieldDamage = 0,

      diceKeys = []
   })
   {
      return Immutable(
      {
         id: Immutable(id),
         attackerId: Immutable(attackerId),
         defenderId: Immutable(defenderId),
         rangeKey: Immutable(rangeKey),
         weaponKey: Immutable(weaponKey),

         criticalDamage: Immutable(criticalDamage),
         hitDamage: Immutable(hitDamage),
         shieldDamage: Immutable(shieldDamage),

         diceKeys: Immutable(diceKeys)
      });
   };

   Object.freeze(CombatState);

   const DamageState = {};

   DamageState.create = function(
   {
      id,
      damageKey
   })
   {
      return Immutable(
      {
         id: id,
         damageKey: damageKey
      });
   };

   Object.freeze(DamageState);

   const FleetState = {};

   FleetState.create = function(
   {
      id,
      name,
      year,
      description,
      points,

      ships,
      squadrons
   })
   {
      return Immutable(
      {
         id: id,
         name: name,
         year: year,
         description: description,
         points: points,

         ships: Immutable(ships),
         squadrons: Immutable(squadrons)
      });
   };

   Object.freeze(FleetState);

   const GameState = {};

   GameState.create = function(
   {
      activeAgentId,
      activeCombatId,
      activeShipId,
      activeSquadronId,
      isGameOver = false,
      phaseKey = "setup",
      round = 0,
      userMessage = "",

      agentQuery,
      agentResponse,

      damageDeck = [],
      damageDiscardPile = [],

      agentInstances = {},
      combatInstances = {},
      damageInstances = {},
      fleetInstances = {},
      shipInstances = {},
      squadronInstances = {},
      upgradeInstances = {}
   } = {})
   {
      return Immutable(
      {
         activeAgentId,
         activeCombatId,
         activeShipId,
         activeSquadronId,
         isGameOver: isGameOver,
         phaseKey: phaseKey,
         round: round,
         userMessage: userMessage,

         agentQuery: Immutable(agentQuery),
         agentResponse: Immutable(agentResponse),

         damageDeck: Immutable(damageDeck),
         damageDiscardPile: Immutable(damageDiscardPile),

         agentInstances: Immutable(agentInstances),
         combatInstances: Immutable(combatInstances),
         damageInstances: Immutable(damageInstances),
         fleetInstances: Immutable(fleetInstances),
         shipInstances: Immutable(shipInstances),
         squadronInstances: Immutable(squadronInstances),
         upgradeInstances: Immutable(upgradeInstances),
      });
   };

   Object.freeze(GameState);

   const PositionState = {};

   PositionState.create = function(
   {
      x = 0,
      y = 0,
      heading = 0
   } = {})
   {
      return Immutable(
      {
         x: x,
         y: y,
         heading: heading
      });
   };

   Object.freeze(PositionState);

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

   const Selector = {};

   Selector.combatCriticalDamage = (combatId, state) => R.prop("criticalDamage", Selector.combatInstance(combatId, state));

   Selector.combatHitDamage = (combatId, state) => R.prop("hitDamage", Selector.combatInstance(combatId, state));

   Selector.combatShieldDamage = (combatId, state) => R.prop("shieldDamage", Selector.combatInstance(combatId, state));

   Selector.diceKeysByCombat = (combatId, state) => R.prop("diceKeys", Selector.combatInstance(combatId, state));

   ////////////////////////////////////////////////////////////////////////////////

   Selector.activeAgentId = state => R.prop("activeAgentId", state);

   Selector.activeCombatId = state => R.prop("activeCombatId", state);

   Selector.activeShipId = state => R.prop("activeShipId", state);

   Selector.activeSquadronId = state => R.prop("activeSquadronId", state);

   Selector.agentQuery = state => R.prop("agentQuery", state);

   Selector.agentResponse = state => R.prop("agentResponse", state);

   Selector.damageDeck = state => R.prop("damageDeck", state);

   Selector.damageDiscardPile = state => R.prop("damageDiscardPile", state);

   Selector.nextAgentId = state => nextId(state.agentInstances);

   Selector.nextCombatId = state => nextId(state.combatInstances);

   Selector.nextDamageId = state => nextId(state.damageInstances);

   Selector.nextFleetId = state => nextId(state.fleetInstances);

   Selector.nextShipId = state => nextId(state.shipInstances);

   Selector.nextSquadronId = state => nextId(state.squadronInstances);

   Selector.nextUpgradeId = state => nextId(state.upgradeInstances);

   ////////////////////////////////////////////////////////////////////////////////

   Selector.phaseKey = state => R.prop("phaseKey", state);

   Selector.round = state => R.prop("round", state);

   Selector.userMessage = state => R.prop("userMessage", state);

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

   const ShipState = {};

   ShipState.create = function(
   {
      id,
      shipKey,

      criticals,
      damages,
      position,
      upgrades
   })
   {
      return Immutable(
      {
         id: id,
         shipKey: shipKey,

         criticals: Immutable(criticals),
         damages: Immutable(damages),
         position: Immutable(position),
         upgrades: Immutable(upgrades)
      });
   };

   Object.freeze(ShipState);

   const SquadronState = {};

   SquadronState.create = function(
   {
      id,
      squadronKey,

      criticals,
      damages,
      position
   })
   {
      return Immutable(
      {
         id: id,
         squadronKey: squadronKey,

         criticals: criticals,
         damages: damages,
         position: position
      });
   };

   Object.freeze(SquadronState);

   const TokenCountsState = {};

   TokenCountsState.create = function(
   {
      // cloak,
      // energy,
      // evade,
      // focus,
      // ion,
      // ordnance,
      // reinforce,
      // shield,
      // stress,
      // tractorBeam,
      // weaponsDisabled
   } = {})
   {
      return Immutable(
      {
         // cloak: cloak,
         // energy: energy,
         // evade: evade,
         // focus: focus,
         // ion: ion,
         // ordnance: ordnance,
         // reinforce: reinforce,
         // shield: shield,
         // stress: stress,
         // tractorBeam: tractorBeam,
         // weaponsDisabled: weaponsDisabled
      });
   };

   Object.freeze(TokenCountsState);

   const UpgradeState = {};

   UpgradeState.create = function(
   {
      id,
      upgradeKey,

      tokenCounts
   })
   {
      return Immutable(
      {
         id: id,
         upgradeKey: upgradeKey,

         tokenCounts: Immutable(tokenCounts)
      });
   };

   Object.freeze(UpgradeState);

   exports.ActionCreator = ActionCreator;
   exports.ActionType = ActionType;
   exports.AgentQueryState = AgentQueryState;
   exports.AgentResponseState = AgentResponseState;
   exports.AgentState = AgentState;
   exports.CombatState = CombatState;
   exports.DamageState = DamageState;
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
