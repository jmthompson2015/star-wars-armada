(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AS = {})));
}(this, (function (exports) { 'use strict';

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
      isGameOver = false,
      phaseKey = "setup",
      round = 0,
      userMessage = "",

      agentQuery,
      agentResponse,

      agentInstances = {},
      damageInstances = {},
      fleetInstances = {},
      shipInstances = {},
      squadronInstances = {},
      upgradeInstances = {}
   } = {})
   {
      return Immutable(
      {
         isGameOver: isGameOver,
         phaseKey: phaseKey,
         round: round,
         userMessage: userMessage,

         agentQuery: Immutable(agentQuery),
         agentResponse: Immutable(agentResponse),

         agentInstances: Immutable(agentInstances),
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
      squadronKey
   })
   {
      return Immutable(
      {
         id: id,
         squadronKey: squadronKey
      });
   };

   Object.freeze(SquadronState);

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

   exports.AgentState = AgentState;
   exports.DamageState = DamageState;
   exports.FleetState = FleetState;
   exports.GameState = GameState;
   exports.PositionState = PositionState;
   exports.ShipState = ShipState;
   exports.SquadronState = SquadronState;
   exports.UpgradeState = UpgradeState;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
