import GameState from "./GameState.js";
import TestData from "./TestData.js";

QUnit.module("GameState");

const PROPS = [
  "activeAgentId",
  "activeCombatId",
  "activeShipId",
  "activeSquadronId",
  "isGameOver",
  "phaseKey",
  "playFormatKey",
  "round",
  "userMessage",

  "agentQuery",
  "agentResponse",

  "activeQueue",
  "damageDeck",
  "damageDiscardPile",

  "agentInstances",
  "combatInstances",
  "damageInstances",
  "defenseTokenInstances",
  "fleetInstances",
  "shipInstances",
  "squadronInstances",
  "upgradeInstances"
];

QUnit.test("create()", function(assert)
{
   // Run.
   const game = createTestState();

   // Verify.
   PROPS.forEach((prop, i) =>
   {
      assert.equal(game[prop], i + 1);
   });
});

QUnit.test("create() immutable", function(assert)
{
   // Setup.
   const game = createTestState();

   // Run / Verify.
   try
   {
      game.round = 12;
      assert.ok(false, "Should have thrown an exception");
   }
   catch (e)
   {
      assert.ok(true);
   }
});

QUnit.skip("toString()", function(assert)
{
   // Setup.
   const game = TestData.createGameState();

   // Run.
   console.log("gameState = " + JSON.stringify(game, null, "   "));

   // Verify.
   assert.ok(true);
});

function createTestState()
{
   let i = 1;

   return GameState.create(
   {
      activeAgentId: i++,
      activeCombatId: i++,
      activeShipId: i++,
      activeSquadronId: i++,
      isGameOver: i++,
      phaseKey: i++,
      playFormatKey: i++,
      round: i++,
      userMessage: i++,

      agentQuery: i++,
      agentResponse: i++,

      activeQueue: i++,
      damageDeck: i++,
      damageDiscardPile: i++,

      agentInstances: i++,
      combatInstances: i++,
      damageInstances: i++,
      defenseTokenInstances: i++,
      fleetInstances: i++,
      shipInstances: i++,
      squadronInstances: i++,
      upgradeInstances: i++
   });
}

const GameStateTest = {};
export default GameStateTest;