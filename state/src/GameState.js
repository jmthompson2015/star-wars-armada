const GameState = {};

GameState.create = function(
{
   activeAgentId,
   activeCombatId,
   activeShipId,
   activeSquadronId,
   isGameOver = false,
   phaseKey = "setup",
   playFormatKey = "standard",
   round = 0,
   userMessage = "",

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
      playFormatKey: playFormatKey,
      round: round,
      userMessage: userMessage,

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
};

Object.freeze(GameState);

export default GameState;