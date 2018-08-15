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

export default GameState;