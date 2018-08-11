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

export default GameState;