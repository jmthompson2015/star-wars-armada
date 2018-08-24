import TestData from "./TestData.js";
import StarWarsArmadaModel from "./StarWarsArmadaModel.js";

const Phase = AA.Phase;

QUnit.module("StarWarsArmadaModel");

QUnit.test("nextGameState() Setup", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.COMMAND_START, "phaseKey");
      assert.equal(gameState.round, 0, "round");
      assert.equal(gameState.userMessage, "");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck length");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances length");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances length");
      assert.equal(Object.keys(gameState.fleetInstances).length, 2, "fleetInstances length");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances length");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances length");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances length");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

const StarWarsArmadaModelTest = {};
export default StarWarsArmadaModelTest;