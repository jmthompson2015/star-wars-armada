import ActionCreator from "./ActionCreator.js";
import AgentQueryState from "./AgentQueryState.js";
import AgentResponseState from "./AgentResponseState.js";
import AgentState from "./AgentState.js";
import CombatState from "./CombatState.js";
import FleetState from "./FleetState.js";
import Reducer from "./Reducer.js";
import ShipState from "./ShipState.js";
import SquadronState from "./SquadronState.js";
import TestData from "./TestData.js";
import TokenCountsState from "./TokenCountsState.js";
import UpgradeState from "./UpgradeState.js";

QUnit.module("Reducer");

QUnit.skip("addShipTokenCount()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const pilotId = 2;
   const tokenKey = "evade";
   assert.equal(store.getState().shipInstances[pilotId].tokenCounts[tokenKey], undefined);

   // Run.
   store.dispatch(ActionCreator.addShipTokenCount(pilotId, tokenKey));

   // Verify.
   assert.equal(store.getState().shipInstances[pilotId].tokenCounts[tokenKey], 1);

   // Run.
   store.dispatch(ActionCreator.addShipTokenCount(pilotId, tokenKey));

   // Verify.
   assert.equal(store.getState().shipInstances[pilotId].tokenCounts[tokenKey], 2);
});

QUnit.test("clearAgentQuery()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const agentId = 1;
   const queryKey = "chooseShipAction";
   const payload = {};
   const agentQuery = AgentQueryState.create(
   {
      agentId: agentId,
      queryKey: queryKey,
      payload: payload
   });
   store.dispatch(ActionCreator.setAgentQuery(agentQuery));
   assert.ok(store.getState().agentQuery);

   // Run.
   store.dispatch(ActionCreator.clearAgentQuery());

   // Verify.
   assert.equal(store.getState().agentQuery, undefined);
});

QUnit.test("clearAgentResponse()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const agentId = 1;
   const responseKey = "chooseShipAction";
   const payload = {};
   const agentResponse = AgentResponseState.create(
   {
      agentId: agentId,
      responseKey: responseKey,
      payload: payload
   });
   store.dispatch(ActionCreator.setAgentResponse(agentResponse));
   assert.ok(store.getState().agentResponse);

   // Run.
   store.dispatch(ActionCreator.clearAgentResponse());

   // Verify.
   assert.equal(store.getState().agentResponse, undefined);
});

QUnit.test("dealCritical()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const shipId = 1;
   assert.equal(store.getState().damageDeck.length, 52);
   assert.equal(store.getState().shipInstances[shipId].criticals, undefined);

   // Run.
   store.dispatch(ActionCreator.dealCritical(shipId));

   // Verify.
   assert.equal(store.getState().damageDeck.length, 51);
   const criticals = store.getState().shipInstances[shipId].criticals;
   assert.equal(criticals.length, 1);
   assert.equal(criticals[0] > 0, true);
});

QUnit.test("dealDamage()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const shipId = 1;
   assert.equal(store.getState().damageDeck.length, 52);
   assert.equal(store.getState().shipInstances[shipId].damages, undefined);

   // Run.
   store.dispatch(ActionCreator.dealDamage(shipId));

   // Verify.
   assert.equal(store.getState().damageDeck.length, 51);
   const damages = store.getState().shipInstances[shipId].damages;
   assert.equal(damages.length, 1);
   assert.equal(damages[0] > 0, true);
});

QUnit.test("incrementRound()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root);
   assert.equal(store.getState().round, 0);

   // Run.
   store.dispatch(ActionCreator.incrementRound());

   // Verify.
   assert.equal(store.getState().round, 1);
});

QUnit.test("setAgentFleet()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const agentId = 1;
   const fleetId = 12;

   // Run.
   store.dispatch(ActionCreator.setAgentFleet(agentId, fleetId));

   // Verify.
   const result = store.getState().agentInstances[agentId].fleet;
   assert.ok(result);
   assert.equal(result, fleetId);
});

QUnit.test("setAgentInstance()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const agentInstance = AgentState.create(
   {
      id: 3
   });

   // Run.
   store.dispatch(ActionCreator.setAgentInstance(agentInstance));

   // Verify.
   const result = store.getState().agentInstances;
   assert.equal(Object.keys(result).length, 3);
   let i = 1;
   assert.equal(result[i].id, 1);
   assert.equal(result[i++].name, "Imperial Agent");
   assert.equal(result[i].id, 2);
   assert.equal(result[i++].name, "Rebel Agent");
   assert.equal(result[i].id, 3);
   assert.equal(result[i++].name, "Agent 3");
});

QUnit.test("setAgentQuery()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const agentQuery = AgentQueryState.create(
   {
      agentId: 1,
      queryKey: "chooseShipAction",
      payload:
      {}
   });
   assert.equal(store.getState().agentQuery, undefined);

   // Run.
   store.dispatch(ActionCreator.setAgentQuery(agentQuery));

   // Verify.
   assert.equal(store.getState().agentQuery, agentQuery);
});

QUnit.test("setAgentResponse()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const agentResponse = AgentResponseState.create(
   {
      agentId: 1,
      responseKey: "chooseShipAction",
      payload:
      {}
   });
   assert.equal(store.getState().agentResponse, undefined);

   // Run.
   store.dispatch(ActionCreator.setAgentResponse(agentResponse));

   // Verify.
   assert.equal(store.getState().agentResponse, agentResponse);
});

QUnit.test("setCombatAttackDice()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const combatId = 1;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackId: 3,
      defenderId: 2,
   });
   store.dispatch(ActionCreator.setCombatInstance(combatInstance));
   assert.equal(store.getState().combatInstances[combatId].diceKeys.length, 0);
   const diceKeys = ["hit", "criticalHit", "blank"];

   // Run.
   store.dispatch(ActionCreator.setCombatAttackDice(combatId, diceKeys));

   // Verify.
   assert.equal(store.getState().combatInstances[combatId].diceKeys.length, diceKeys.length);
   let i = 0;
   assert.equal(store.getState().combatInstances[combatId].diceKeys[i], diceKeys[i++]);
   assert.equal(store.getState().combatInstances[combatId].diceKeys[i], diceKeys[i++]);
   assert.equal(store.getState().combatInstances[combatId].diceKeys[i], diceKeys[i++]);
});

QUnit.test("setCombatCriticalDamage()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const combatId = 1;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackId: 3,
      defenderId: 2,
   });
   store.dispatch(ActionCreator.setCombatInstance(combatInstance));
   assert.equal(store.getState().combatInstances[combatId].criticalDamage, 0);
   const criticalDamage = 5;

   // Run.
   store.dispatch(ActionCreator.setCombatCriticalDamage(combatId, criticalDamage));

   // Verify.
   assert.equal(store.getState().combatInstances[combatId].criticalDamage, criticalDamage);
});

QUnit.test("setCombatHitDamage()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const combatId = 1;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackId: 3,
      defenderId: 2,
   });
   store.dispatch(ActionCreator.setCombatInstance(combatInstance));
   assert.equal(store.getState().combatInstances[combatId].hitDamage, 0);
   const hitDamage = 4;

   // Run.
   store.dispatch(ActionCreator.setCombatHitDamage(combatId, hitDamage));

   // Verify.
   assert.equal(store.getState().combatInstances[combatId].hitDamage, hitDamage);
});

QUnit.test("setCombatInstance()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const combatInstance = CombatState.create(
   {
      id: 1,
      attackerId: 3,
      defenderId: 2,
   });

   // Run.
   store.dispatch(ActionCreator.setCombatInstance(combatInstance));

   // Verify.
   const result = store.getState().combatInstances;
   assert.equal(Object.keys(result).length, 1);
   let i = 1;
   assert.equal(result[i].id, 1);
   assert.equal(result[i].attackerId, 3);
   assert.equal(result[i++].defenderId, 2);
});

QUnit.test("setCombatShieldDamage()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const combatId = 1;
   const combatInstance = CombatState.create(
   {
      id: combatId,
      attackId: 3,
      defenderId: 2,
   });
   store.dispatch(ActionCreator.setCombatInstance(combatInstance));
   assert.equal(store.getState().combatInstances[combatId].shieldDamage, 0);
   const shieldDamage = 4;

   // Run.
   store.dispatch(ActionCreator.setCombatShieldDamage(combatId, shieldDamage));

   // Verify.
   assert.equal(store.getState().combatInstances[combatId].shieldDamage, shieldDamage);
});

QUnit.test("setFleetInstance()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const fleetId = 12;
   const fleetInstance = FleetState.create(
   {
      id: fleetId,
      name: "Galactic Empire Core Set: 175 Points",
      year: 2015,
      description: "Victory II, Howlrunner, TIE Fighters x3"
   });

   // Run.
   store.dispatch(ActionCreator.setFleetInstance(fleetInstance));

   // Verify.
   const result = store.getState().fleetInstances[fleetId];
   assert.ok(result);
   assert.equal(result.name, "Galactic Empire Core Set: 175 Points");
   assert.equal(result.year, 2015);
});

QUnit.test("setGameOver()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root);
   const isGameOver = true;
   assert.equal(store.getState().isGameOver, false);

   // Run.
   store.dispatch(ActionCreator.setGameOver(isGameOver));

   // Verify.
   assert.equal(store.getState().isGameOver, isGameOver);
});

QUnit.test("setPhase()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root);
   const phaseKey = "some phase";
   assert.equal(store.getState().isGameOver, false);

   // Run.
   store.dispatch(ActionCreator.setPhase(phaseKey));

   // Verify.
   assert.equal(store.getState().phaseKey, phaseKey);
});

QUnit.test("setShipInstance()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const shipInstance = ShipState.create(
   {
      id: 4,
      shipKey: "hanSolo"
   });

   // Run.
   store.dispatch(ActionCreator.setShipInstance(shipInstance));

   // Verify.
   const result = store.getState().shipInstances;
   assert.equal(Object.keys(result).length, 4);
   let i = 1;
   assert.equal(result[i].id, 1);
   assert.equal(result[i++].shipKey, "victoryIiClassStarDestroyer");
   assert.equal(result[i].id, 2);
   assert.equal(result[i++].shipKey, "nebulonBEscortFrigate");
   assert.equal(result[i].id, 3);
   assert.equal(result[i++].shipKey, "cr90CorvetteA");
   assert.equal(result[i].id, 4);
   assert.equal(result[i++].shipKey, "hanSolo");
});

QUnit.test("setSquadronInstance()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const squadronInstance = SquadronState.create(
   {
      id: 8,
      squadronKey: "hanSolo"
   });

   // Run.
   store.dispatch(ActionCreator.setSquadronInstance(squadronInstance));

   // Verify.
   const result = store.getState().squadronInstances;
   assert.equal(Object.keys(result).length, 8);
   let i = 1;
   assert.equal(result[i].id, 1);
   assert.equal(result[i++].squadronKey, "howlrunner");
   assert.equal(result[i].id, 2);
   assert.equal(result[i++].squadronKey, "tieFighterSquadron");
   assert.equal(result[i].id, 3);
   assert.equal(result[i++].squadronKey, "tieFighterSquadron");
   assert.equal(result[i].id, 4);
   assert.equal(result[i++].squadronKey, "tieFighterSquadron");
   assert.equal(result[i].id, 5);
   assert.equal(result[i++].squadronKey, "lukeSkywalker");
   assert.equal(result[i].id, 6);
   assert.equal(result[i++].squadronKey, "xWingSquadron");
   assert.equal(result[i].id, 7);
   assert.equal(result[i++].squadronKey, "xWingSquadron");
   assert.equal(result[i].id, 8);
   assert.equal(result[i++].squadronKey, "hanSolo");
});

QUnit.test("setUpgradeInstance()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const upgradeInstance = UpgradeState.create(
   {
      id: 5,
      upgradeKey: "veteranInstincts"
   });

   // Run.
   store.dispatch(ActionCreator.setUpgradeInstance(upgradeInstance));

   // Verify.
   const result = store.getState().upgradeInstances;
   assert.equal(Object.keys(result).length, 5);
   let i = 1;
   assert.equal(result[i].id, 1);
   assert.equal(result[i++].upgradeKey, "grandMoffTarkin");
   assert.equal(result[i].id, 2);
   assert.equal(result[i++].upgradeKey, "dominator");
   assert.equal(result[i].id, 3);
   assert.equal(result[i++].upgradeKey, "generalDodonna");
   assert.equal(result[i].id, 4);
   assert.equal(result[i++].upgradeKey, "dodonnasPride");
   assert.equal(result[i].id, 5);
   assert.equal(result[i++].upgradeKey, "veteranInstincts");
});

QUnit.test("setUpgradeTokenCounts()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root, TestData.createGameState());
   const upgradeId = 1;
   const tokenCounts = TokenCountsState.create(
   {
      // evade: 1,
      // focus: 2,
      // shield: 3,
      // stress: 4,
   });

   // Run.
   store.dispatch(ActionCreator.setUpgradeTokenCounts(upgradeId, tokenCounts));

   // Verify.
   const result = store.getState().upgradeInstances[upgradeId].tokenCounts;
   assert.ok(result);
   // assert.equal(result.cloak, undefined);
   // assert.equal(result.evade, 1);
   // assert.equal(result.focus, 2);
   // assert.equal(result.shield, 3);
   // assert.equal(result.stress, 4);
   // assert.equal(result.weaponsDisabled, undefined);
   assert.equal(result, tokenCounts);
});

const ReducerTest = {};
export default ReducerTest;