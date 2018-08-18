import ActionCreator from "./ActionCreator.js";
import ActionType from "./ActionType.js";
import AgentQueryState from "./AgentQueryState.js";
import AgentResponseState from "./AgentResponseState.js";
import PositionState from "./PositionState.js";

QUnit.module("ActionCreator");

QUnit.test("all action types", function(assert)
{
   // Setup.
   const actionTypeKeys = Object.getOwnPropertyNames(ActionType);
   assert.equal(actionTypeKeys.length, 46);

   // Run / Verify.
   actionTypeKeys.forEach(key =>
   {
      assert.ok(ActionCreator[ActionType[key]], "actionType = " + key + " " + ActionType[key]);
   });
});

QUnit.test("addShipTokenCount()", function(assert)
{
   // Setup.
   const shipId = 3;
   const tokenKey = "evade";
   const value = 12;

   // Run.
   const result = ActionCreator.addShipTokenCount(shipId, tokenKey, value);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.ADD_SHIP_TOKEN_COUNT);
   assert.equal(result.shipId, shipId);
   assert.equal(result.tokenKey, tokenKey);
   assert.equal(result.value, value);
});

QUnit.test("clearActiveAgentId()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.clearActiveAgentId();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.CLEAR_ACTIVE_AGENT_ID);
});

QUnit.test("clearActiveCombatId()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.clearActiveCombatId();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.CLEAR_ACTIVE_COMBAT_ID);
});

QUnit.test("clearActiveShipId()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.clearActiveShipId();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.CLEAR_ACTIVE_SHIP_ID);
});

QUnit.test("clearActiveSquadronId()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.clearActiveSquadronId();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.CLEAR_ACTIVE_SQUADRON_ID);
});

QUnit.test("clearAgentQuery()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.clearAgentQuery();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.CLEAR_AGENT_QUERY);
});

QUnit.test("clearAgentResponse()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.clearAgentResponse();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.CLEAR_AGENT_RESPONSE);
});

QUnit.test("clearShipTokenCount()", function(assert)
{
   // Setup.
   const shipId = 3;
   const tokenKey = "evade";

   // Run.
   const result = ActionCreator.clearShipTokenCount(shipId, tokenKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.CLEAR_SHIP_TOKEN_COUNT);
   assert.equal(result.shipId, shipId);
   assert.equal(result.tokenKey, tokenKey);
});

QUnit.test("dealCritical()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.dealCritical();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.DEAL_CRITICAL);
});

QUnit.test("dealDamage()", function(assert)
{
   // Setup.

   // Run.
   const result = ActionCreator.dealDamage();

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.DEAL_DAMAGE);
});

QUnit.test("moveShip()", function(assert)
{
   // Setup.
   const shipId = 1;
   const toPosition = PositionState.create();

   // Run.
   const result = ActionCreator.moveShip(shipId, toPosition);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.MOVE_SHIP);
   assert.equal(result.shipId, shipId);
   assert.equal(result.toPosition, toPosition);
});

QUnit.test("setActiveAgentId()", function(assert)
{
   // Setup.
   const activeAgentId = 12;

   // Run.
   const result = ActionCreator.setActiveAgentId(activeAgentId);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_ACTIVE_AGENT_ID);
   assert.equal(result.activeAgentId, activeAgentId);
});

QUnit.test("setActiveCombatId()", function(assert)
{
   // Setup.
   const activeCombatId = 12;

   // Run.
   const result = ActionCreator.setActiveCombatId(activeCombatId);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_ACTIVE_COMBAT_ID);
   assert.equal(result.activeCombatId, activeCombatId);
});

QUnit.test("setActiveShipId()", function(assert)
{
   // Setup.
   const activeShipId = 12;

   // Run.
   const result = ActionCreator.setActiveShipId(activeShipId);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_ACTIVE_SHIP_ID);
   assert.equal(result.activeShipId, activeShipId);
});

QUnit.test("setActiveSquadronId()", function(assert)
{
   // Setup.
   const activeSquadronId = 12;

   // Run.
   const result = ActionCreator.setActiveSquadronId(activeSquadronId);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_ACTIVE_SQUADRON_ID);
   assert.equal(result.activeSquadronId, activeSquadronId);
});

QUnit.test("setAgentFleet()", function(assert)
{
   // Setup.
   const agentId = 1;
   const fleetId = 2;

   // Run.
   const result = ActionCreator.setAgentFleet(agentId, fleetId);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_AGENT_FLEET);
   assert.equal(result.agentId, agentId);
   assert.equal(result.fleetId, fleetId);
});

QUnit.test("setAgentInstance()", function(assert)
{
   // Setup.
   const agentInstance = 1;

   // Run.
   const result = ActionCreator.setAgentInstance(agentInstance);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_AGENT_INSTANCE);
   assert.equal(result.agentInstance, agentInstance);
});

QUnit.test("setAgentQuery()", function(assert)
{
   // Setup.
   const agentId = 1;
   const queryKey = "chooseShipAction";
   const payload = {};
   const agentQuery = AgentQueryState.create(
   {
      agentId: agentId,
      queryKey: queryKey,
      payload: payload
   });

   // Run.
   const result = ActionCreator.setAgentQuery(agentQuery);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_AGENT_QUERY);
   assert.equal(result.agentQuery.agentId, agentId);
   assert.equal(result.agentQuery.queryKey, queryKey);
   assert.ok(result.agentQuery.queryKey);
});

QUnit.test("setAgentResponse()", function(assert)
{
   // Setup.
   const agentId = 1;
   const responseKey = "chooseShipAction";
   const payload = {};
   const agentResponse = AgentResponseState.create(
   {
      agentId: agentId,
      responseKey: responseKey,
      payload: payload
   });

   // Run.
   const result = ActionCreator.setAgentResponse(agentResponse);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_AGENT_RESPONSE);
   assert.equal(result.agentResponse.agentId, agentId);
   assert.equal(result.agentResponse.responseKey, responseKey);
   assert.ok(result.agentResponse.payload);
});

QUnit.test("setCombatAttackDice()", function(assert)
{
   // Setup.
   const combatId = 12;
   const diceKeys = [1, 2, 3];

   // Run.
   const result = ActionCreator.setCombatAttackDice(combatId, diceKeys);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_COMBAT_ATTACK_DICE);
   assert.equal(result.combatId, combatId);
   assert.equal(result.diceKeys, diceKeys);
});

QUnit.test("setCombatCriticalDamage()", function(assert)
{
   // Setup.
   const combatId = 12;
   const criticalDamage = 5;

   // Run.
   const result = ActionCreator.setCombatCriticalDamage(combatId, criticalDamage);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_COMBAT_CRITICAL_DAMAGE);
   assert.equal(result.combatId, combatId);
   assert.equal(result.criticalDamage, criticalDamage);
});

QUnit.test("setCombatHitDamage()", function(assert)
{
   // Setup.
   const combatId = 12;
   const hitDamage = 4;

   // Run.
   const result = ActionCreator.setCombatHitDamage(combatId, hitDamage);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_COMBAT_HIT_DAMAGE);
   assert.equal(result.combatId, combatId);
   assert.equal(result.hitDamage, hitDamage);
});

QUnit.test("setCombatInstance()", function(assert)
{
   // Setup.
   const combatInstance = 1;

   // Run.
   const result = ActionCreator.setCombatInstance(combatInstance);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_COMBAT_INSTANCE);
   assert.equal(result.combatInstance, combatInstance);
});

QUnit.test("setCombatShieldDamage()", function(assert)
{
   // Setup.
   const combatId = 12;
   const shieldDamage = 4;

   // Run.
   const result = ActionCreator.setCombatShieldDamage(combatId, shieldDamage);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_COMBAT_SHIELD_DAMAGE);
   assert.equal(result.combatId, combatId);
   assert.equal(result.shieldDamage, shieldDamage);
});

QUnit.test("setDamageDeck()", function(assert)
{
   // Setup.
   const damageDeck = 1;

   // Run.
   const result = ActionCreator.setDamageDeck(damageDeck);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_DAMAGE_DECK);
   assert.equal(result.damageDeck, damageDeck);
});

QUnit.test("setDamageInstances()", function(assert)
{
   // Setup.
   const damageInstances = 1;

   // Run.
   const result = ActionCreator.setDamageInstances(damageInstances);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_DAMAGE_INSTANCES);
   assert.equal(result.damageInstances, damageInstances);
});

QUnit.test("setFleetInstance()", function(assert)
{
   // Setup.
   const fleetInstance = 1;

   // Run.
   const result = ActionCreator.setFleetInstance(fleetInstance);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_FLEET_INSTANCE);
   assert.equal(result.fleetInstance, fleetInstance);
});

QUnit.test("setFleetShips()", function(assert)
{
   // Setup.
   const fleetId = 1;
   const shipIds = 2;

   // Run.
   const result = ActionCreator.setFleetShips(fleetId, shipIds);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_FLEET_SHIPS);
   assert.equal(result.fleetId, fleetId);
   assert.equal(result.shipIds, shipIds);
});

QUnit.test("setFleetSquadrons()", function(assert)
{
   // Setup.
   const fleetId = 1;
   const squadronIds = 2;

   // Run.
   const result = ActionCreator.setFleetSquadrons(fleetId, squadronIds);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_FLEET_SQUADRONS);
   assert.equal(result.fleetId, fleetId);
   assert.equal(result.squadronIds, squadronIds);
});

QUnit.test("setGameOver()", function(assert)
{
   // Setup.
   const isGameOver = true;

   // Run.
   const result = ActionCreator.setGameOver(isGameOver);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_GAME_OVER);
   assert.equal(result.isGameOver, isGameOver);
});

QUnit.test("setPhase()", function(assert)
{
   // Setup.
   const phaseKey = "some phase";

   // Run.
   const result = ActionCreator.setPhase(phaseKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_PHASE);
   assert.equal(result.phaseKey, phaseKey);
});

QUnit.test("setShipInstance()", function(assert)
{
   // Setup.
   const shipInstance = 1;

   // Run.
   const result = ActionCreator.setShipInstance(shipInstance);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_SHIP_INSTANCE);
   assert.equal(result.shipInstance, shipInstance);
});

QUnit.test("setShipTokenCounts()", function(assert)
{
   // Setup.
   const shipId = 1;
   const tokenCounts = 2;

   // Run.
   const result = ActionCreator.setShipTokenCounts(shipId, tokenCounts);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_SHIP_TOKEN_COUNTS);
   assert.equal(result.shipId, shipId);
   assert.equal(result.tokenCounts, tokenCounts);
});

QUnit.test("setShipUpgrades()", function(assert)
{
   // Setup.
   const shipId = 1;
   const upgradeIds = 2;

   // Run.
   const result = ActionCreator.setShipUpgrades(shipId, upgradeIds);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_SHIP_UPGRADES);
   assert.equal(result.shipId, shipId);
   assert.equal(result.upgradeIds, upgradeIds);
});

QUnit.test("setSquadronInstance()", function(assert)
{
   // Setup.
   const squadronInstance = 1;

   // Run.
   const result = ActionCreator.setSquadronInstance(squadronInstance);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_SQUADRON_INSTANCE);
   assert.equal(result.squadronInstance, squadronInstance);
});

QUnit.test("setSquadronTokenCounts()", function(assert)
{
   // Setup.
   const squadronId = 1;
   const tokenCounts = 2;

   // Run.
   const result = ActionCreator.setSquadronTokenCounts(squadronId, tokenCounts);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_SQUADRON_TOKEN_COUNTS);
   assert.equal(result.squadronId, squadronId);
   assert.equal(result.tokenCounts, tokenCounts);
});

QUnit.test("setUpgradeInstance()", function(assert)
{
   // Setup.
   const upgradeInstance = 1;

   // Run.
   const result = ActionCreator.setUpgradeInstance(upgradeInstance);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_UPGRADE_INSTANCE);
   assert.equal(result.upgradeInstance, upgradeInstance);
});

QUnit.test("setUpgradeTokenCounts()", function(assert)
{
   // Setup.
   const upgradeId = 1;
   const tokenCounts = 2;

   // Run.
   const result = ActionCreator.setUpgradeTokenCounts(upgradeId, tokenCounts);

   // Verify.
   assert.ok(result);
   assert.equal(result.type, ActionType.SET_UPGRADE_TOKEN_COUNTS);
   assert.equal(result.upgradeId, upgradeId);
   assert.equal(result.tokenCounts, tokenCounts);
});

const ActionCreatorTest = {};
export default ActionCreatorTest;