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

QUnit.test("agentIds()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.agentIds(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 2);
   assert.equal(result[0], 1);
   assert.equal(result[1], 2);
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

QUnit.test("criticalInstancesByShip() 1", function(assert)
{
   // Setup.
   const shipId = 1;
   const gameState = R.assocPath(["shipInstances", shipId, "criticals"], [1, 4], TestData.createGameState());

   // Run.
   const result = Selector.criticalInstancesByShip(shipId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 2);
   assert.equal(result[0].id, 1);
   assert.equal(result[0].damageKey, "blindedGunners");
   assert.equal(result[1].id, 4);
   assert.equal(result[1].damageKey, "capacitorFailure");
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

QUnit.test("defenseTokenInstancesByShip() 1", function(assert)
{
   // Setup.
   const shipId = 1;
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.defenseTokenInstancesByShip(shipId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   assert.equal(result[0].id, 1);
   assert.equal(result[0].defenseTokenKey, "brace");
   assert.equal(result[1].id, 2);
   assert.equal(result[1].defenseTokenKey, "redirect");
   assert.equal(result[2].id, 3);
   assert.equal(result[2].defenseTokenKey, "redirect");
});

QUnit.test("defenseTokenInstancesBySquadron() 1", function(assert)
{
   // Setup.
   const squadronId = 1;
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.defenseTokenInstancesBySquadron(squadronId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 2);
   assert.equal(result[0].id, 10);
   assert.equal(result[0].defenseTokenKey, "brace");
   assert.equal(result[1].id, 11);
   assert.equal(result[1].defenseTokenKey, "scatter");
});

QUnit.test("fleetInstance() 1", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const fleetId = 1;

   // Run.
   const result = Selector.fleetInstance(fleetId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.id, fleetId);
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

QUnit.test("nextDefenseTokenId()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.nextDefenseTokenId(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, 14);
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

QUnit.test("playFormatKey()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.playFormatKey(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result, "standard");
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

QUnit.test("shipCountByAgent() 1", function(assert)
{
   // Setup.
   let gameState = TestData.createGameState();
   const agentId = 1;

   // Run.
   const result = Selector.shipCountByAgent(agentId, gameState);

   // Verify.
   assert.equal(result, 1);
});

QUnit.test("shipCountByAgent() 1", function(assert)
{
   // Setup.
   let gameState = TestData.createGameState();
   const agentId = 2;

   // Run.
   const result = Selector.shipCountByAgent(agentId, gameState);

   // Verify.
   assert.equal(result, 2);
});

QUnit.test("shipIds()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.shipIds(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   assert.equal(result[0], 1);
   assert.equal(result[1], 2);
   assert.equal(result[2], 3);
});

QUnit.test("shipInstancesByFleet() 1", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const fleetId = 1;

   // Run.
   const result = Selector.shipInstancesByFleet(fleetId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 1);
   assert.equal(result[0].id, 1);
   assert.equal(result[0].shipKey, "victoryIiClassStarDestroyer");
});

QUnit.test("shipInstancesByFleet() 2", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const fleetId = 2;

   // Run.
   const result = Selector.shipInstancesByFleet(fleetId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 2);
   assert.equal(result[0].id, 2);
   assert.equal(result[0].shipKey, "nebulonBEscortFrigate");
   assert.equal(result[1].id, 3);
   assert.equal(result[1].shipKey, "cr90CorvetteA");
});

QUnit.test("squadronIds()", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();

   // Run.
   const result = Selector.squadronIds(gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 7);
   assert.equal(result[0], 1);
   assert.equal(result[1], 2);
   assert.equal(result[2], 3);
   assert.equal(result[3], 4);
   assert.equal(result[4], 5);
   assert.equal(result[5], 6);
   assert.equal(result[6], 7);
});

QUnit.test("squadronInstancesByFleet() 1", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const fleetId = 1;

   // Run.
   const result = Selector.squadronInstancesByFleet(fleetId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 4);
   assert.equal(result[0].id, 1);
   assert.equal(result[0].squadronKey, "howlrunner");
   assert.equal(result[1].id, 2);
   assert.equal(result[1].squadronKey, "tieFighterSquadron");
   assert.equal(result[2].id, 3);
   assert.equal(result[2].squadronKey, "tieFighterSquadron");
   assert.equal(result[3].id, 4);
   assert.equal(result[3].squadronKey, "tieFighterSquadron");
});

QUnit.test("squadronInstancesByFleet() 2", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const fleetId = 2;

   // Run.
   const result = Selector.squadronInstancesByFleet(fleetId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   assert.equal(result[0].id, 5);
   assert.equal(result[0].squadronKey, "lukeSkywalker");
   assert.equal(result[1].id, 6);
   assert.equal(result[1].squadronKey, "xWingSquadron");
   assert.equal(result[2].id, 7);
   assert.equal(result[2].squadronKey, "xWingSquadron");
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

QUnit.test("upgradeInstancesByShip() 1", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const shipId = 1;

   // Run.
   const result = Selector.upgradeInstancesByShip(shipId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 2);
   assert.equal(result[0].id, 1);
   assert.equal(result[0].upgradeKey, "grandMoffTarkin");
   assert.equal(result[1].id, 2);
   assert.equal(result[1].upgradeKey, "dominator");
});

QUnit.test("upgradeInstancesByShip() 2", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const shipId = 2;

   // Run.
   const result = Selector.upgradeInstancesByShip(shipId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 1);
   assert.equal(result[0].id, 3);
   assert.equal(result[0].upgradeKey, "generalDodonna");
});

QUnit.test("upgradeInstancesByShip() 3", function(assert)
{
   // Setup.
   const gameState = TestData.createGameState();
   const shipId = 3;

   // Run.
   const result = Selector.upgradeInstancesByShip(shipId, gameState);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 1);
   assert.equal(result[0].id, 4);
   assert.equal(result[0].upgradeKey, "dodonnasPride");
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