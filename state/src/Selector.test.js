import CombatState from "./CombatState.js";
import Selector from "./Selector.js";
import TestData from "./TestData.js";

QUnit.module("Selector");

QUnit.test("activeShipId()", function(assert)
{
   // Setup.
   const gameState = R.assoc("activeShipId", 1, TestData.createGameState());

   // Run.
   const result = Selector.activeShipId(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, 1);
});

QUnit.test("agentInstance() 1", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const agentId = 1;

   // Run.
   const result = Selector.agentInstance(agentId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, agentId);
   assert.equal(result.name, "Imperial Agent");
   assert.equal(result.strategy, "SimpleAgentStrategy");
});

QUnit.test("agentInstance() 2", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const agentId = 2;

   // Run.
   const result = Selector.agentInstance(agentId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, agentId);
   assert.equal(result.name, "Rebel Agent");
   assert.equal(result.strategy, "SimpleAgentStrategy");
});

QUnit.test("agentQuery()", function(assert)
{
   // Setup.
   let gameState = TestData.createGameState();

   // Run.
   let result = Selector.agentQuery(gameState);

   // Verify.
   assert.equal(result, undefined);

   // Run.
   const agentId = 1;
   const queryKey = "chooseShipAction";
   const payload = {};
   const agentQuery = {
      agentId: agentId,
      queryKey: queryKey,
      payload: payload
   };
   gameState = R.assoc("agentQuery", agentQuery, gameState);
   result = Selector.agentQuery(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.agentId, agentId);
   assert.equal(result.queryKey, "chooseShipAction");
   assert.equal(result.payload, payload);
});

QUnit.test("agentResponse()", function(assert)
{
   // Setup.
   let gameState = TestData.createGameState();

   // Run.
   let result = Selector.agentResponse(gameState);

   // Verify.
   assert.equal(result, undefined);

   // Run.
   const agentId = 1;
   const responseKey = "chooseShipAction";
   const payload = {};
   const agentResponse = {
      agentId: agentId,
      responseKey: responseKey,
      payload: payload
   };
   gameState = R.assoc("agentResponse", agentResponse, gameState);
   result = Selector.agentResponse(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.agentId, agentId);
   assert.equal(result.responseKey, "chooseShipAction");
   assert.equal(result.payload, payload);
});

QUnit.test("combatCriticalDamage()", function(assert)
{
   // Setup.
   const combatId = 4;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackerId: 3,
      defenderId: 2,
      criticalDamage: 12
   });
   const gameState = R.assocPath(["combatInstances", combatId], combatInstance, TestData.createGameState());

   // Run.
   const result = Selector.combatCriticalDamage(combatId, gameState);

   // Verify.
   assert.equal(result, 12);
});

QUnit.test("combatHitDamage()", function(assert)
{
   // Setup.
   const combatId = 4;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackerId: 3,
      defenderId: 2,
      hitDamage: 6
   });
   const gameState = R.assocPath(["combatInstances", combatId], combatInstance, TestData.createGameState());

   // Run.
   const result = Selector.combatHitDamage(combatId, gameState);

   // Verify.
   assert.equal(result, 6);
});

QUnit.test("combatInstance() 3", function(assert)
{
   // Setup.
   const combatId = 3;
   const attackerId = 3;
   const defenderId = 2;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackerId: attackerId,
      defenderId: defenderId,
   });
   const gameState = R.assocPath(["combatInstances", combatId], combatInstance, TestData.createGameState());

   // Run.
   const result = Selector.combatInstance(combatId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, combatId);
   assert.equal(result.attackerId, attackerId);
   assert.equal(result.defenderId, defenderId);
});

QUnit.test("combatShieldDamage()", function(assert)
{
   // Setup.
   const combatId = 4;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackerId: 3,
      defenderId: 2,
      shieldDamage: 3
   });
   const gameState = R.assocPath(["combatInstances", combatId], combatInstance, TestData.createGameState());

   // Run.
   const result = Selector.combatShieldDamage(combatId, gameState);

   // Verify.
   assert.equal(result, 3);
});

QUnit.test("damageDeck()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.damageDeck(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 52);
});

QUnit.test("damageDiscardPile()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.damageDiscardPile(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 0);
});

QUnit.test("damageInstance() 1", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const damageId = 1;

   // Run.
   const result = Selector.damageInstance(damageId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, damageId);
   assert.equal(result.damageKey, "blindedGunners");
});

QUnit.test("diceKeysByCombat() 3", function(assert)
{
   // Setup.
   const combatId = 3;
   const attackerId = 3;
   const defenderId = 2;
   const diceKeys = [1, 2, 3];
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackerId: attackerId,
      defenderId: defenderId,
      diceKeys: diceKeys
   });
   const gameState = R.assocPath(["combatInstances", combatId], combatInstance, TestData.createGameState());

   // Run.
   const result = Selector.diceKeysByCombat(combatId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, diceKeys.length);
   let i = 0;
   assert.equal(result[i], diceKeys[i++]);
   assert.equal(result[i], diceKeys[i++]);
   assert.equal(result[i], diceKeys[i++]);
});

QUnit.test("nextAgentId()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.nextAgentId(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, 3);
});

QUnit.test("nextCombatId()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.nextCombatId(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, 1);
});

QUnit.test("nextDamageId()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.nextDamageId(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, 53);
});

QUnit.test("nextUpgradeId()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.nextUpgradeId(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, 5);
});

QUnit.test("phaseKey()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.phaseKey(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, "planningStart");
});

QUnit.test("round()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.round(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, 1);
});

QUnit.test("upgradeInstance() 1", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const upgradeId = 1;

   // Run.
   const result = Selector.upgradeInstance(upgradeId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, upgradeId);
   assert.equal(result.upgradeKey, "grandMoffTarkin");
});

QUnit.test("userMessage()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.userMessage(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, "This is some user message.");
});

const SelectorTest = {};
export default SelectorTest;