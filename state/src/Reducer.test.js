import ActionCreator from './ActionCreator.js';
import AgentQueryState from './AgentQueryState.js';
import AgentResponseState from './AgentResponseState.js';
import AgentState from './AgentState.js';
import CombatState from './CombatState.js';
import DefenseTokenState from './DefenseTokenState.js';
import FleetState from './FleetState.js';
import Reducer from './Reducer.js';
import ShipState from './ShipState.js';
import SquadronState from './SquadronState.js';
import TestData from './TestData.js';
import TokenCountsState from './TokenCountsState.js';
import UpgradeState from './UpgradeState.js';

QUnit.module('Reducer');

QUnit.test('addShipTokenCount()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const shipId = 1;
  const tokenKey = 'navigate';
  assert.equal(store.getState().shipInstances[shipId].tokenCounts[tokenKey], undefined);

  // Run.
  store.dispatch(ActionCreator.addShipTokenCount(shipId, tokenKey));

  // Verify.
  assert.equal(store.getState().shipInstances[shipId].tokenCounts[tokenKey], 1);

  // Run.
  store.dispatch(ActionCreator.addShipTokenCount(shipId, tokenKey));

  // Verify.
  assert.equal(store.getState().shipInstances[shipId].tokenCounts[tokenKey], 2);
});

QUnit.test('clearAgentQuery()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const agentId = 1;
  const queryKey = 'chooseShipAction';
  const payload = {};
  const agentQuery = AgentQueryState.create({
    agentId,
    queryKey,
    payload,
  });
  store.dispatch(ActionCreator.setAgentQuery(agentQuery));
  assert.ok(store.getState().agentQuery);

  // Run.
  store.dispatch(ActionCreator.clearAgentQuery());

  // Verify.
  assert.equal(store.getState().agentQuery, undefined);
});

QUnit.test('clearAgentResponse()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const agentId = 1;
  const responseKey = 'chooseShipAction';
  const payload = {};
  const agentResponse = AgentResponseState.create({
    agentId,
    responseKey,
    payload,
  });
  store.dispatch(ActionCreator.setAgentResponse(agentResponse));
  assert.ok(store.getState().agentResponse);

  // Run.
  store.dispatch(ActionCreator.clearAgentResponse());

  // Verify.
  assert.equal(store.getState().agentResponse, undefined);
});

QUnit.test('dealCritical()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const shipId = 1;
  assert.equal(store.getState().damageDeck.length, 52);
  assert.equal(store.getState().shipInstances[shipId].criticals.join(), [].join());

  // Run.
  store.dispatch(ActionCreator.dealCritical(shipId));

  // Verify.
  assert.equal(store.getState().damageDeck.length, 51);
  const { criticals } = store.getState().shipInstances[shipId];
  assert.equal(criticals.length, 1);
  assert.equal(criticals[0] > 0, true);
});

QUnit.test('dealDamage()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const shipId = 1;
  assert.equal(store.getState().damageDeck.length, 52);
  assert.equal(store.getState().shipInstances[shipId].damages.join(), [].join());

  // Run.
  store.dispatch(ActionCreator.dealDamage(shipId));

  // Verify.
  assert.equal(store.getState().damageDeck.length, 51);
  const { damages } = store.getState().shipInstances[shipId];
  assert.equal(damages.length, 1);
  assert.equal(damages[0] > 0, true);
});

QUnit.test('dequeueCommand()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const queue = [1, 2, 3];
  store.dispatch(ActionCreator.setActiveQueue(queue));
  assert.equal(store.getState().activeAgentId, undefined);
  assert.equal(store.getState().activeQueue.length, 3);

  // Run.
  store.dispatch(ActionCreator.dequeueCommand());

  // Verify.
  assert.equal(store.getState().activeAgentId, 1);
  assert.equal(store.getState().activeQueue.length, 2);
});

QUnit.test('dequeueShip()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const queue = [1, 2, 3];
  store.dispatch(ActionCreator.setActiveQueue(queue));
  assert.equal(store.getState().activeShipId, undefined);
  assert.equal(store.getState().activeQueue.length, 3);

  // Run.
  store.dispatch(ActionCreator.dequeueShip());

  // Verify.
  assert.equal(store.getState().activeShipId, 1);
  assert.equal(store.getState().activeQueue.length, 2);
});

QUnit.test('dequeueSquadron()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const queue = [1, 2, 3];
  store.dispatch(ActionCreator.setActiveQueue(queue));
  assert.equal(store.getState().activeSquadronId, undefined);
  assert.equal(store.getState().activeQueue.length, 3);

  // Run.
  store.dispatch(ActionCreator.dequeueSquadron());

  // Verify.
  assert.equal(store.getState().activeSquadronId, 1);
  assert.equal(store.getState().activeQueue.length, 2);
});

QUnit.test('incrementRound()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  assert.equal(store.getState().round, 0);

  // Run.
  store.dispatch(ActionCreator.incrementRound());

  // Verify.
  assert.equal(store.getState().round, 1);
});

QUnit.test('setActiveQueue()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const queue = [1, 2, 3, 4];

  // Run.
  store.dispatch(ActionCreator.setActiveQueue(queue));

  // Verify.
  const result = store.getState().activeQueue;
  assert.ok(result);
  assert.equal(result.length, queue.length);
  assert.equal(result[0], queue[0]);
  assert.equal(result[1], queue[1]);
  assert.equal(result[2], queue[2]);
  assert.equal(result[3], queue[3]);
});

QUnit.test('setAgentFleet()', assert => {
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

QUnit.test('setAgentInstance()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const agentInstance = AgentState.create({
    id: 3,
  });

  // Run.
  store.dispatch(ActionCreator.setAgentInstance(agentInstance));

  // Verify.
  const result = store.getState().agentInstances;
  assert.equal(Object.keys(result).length, 3);
  assert.equal(result[1].id, 1);
  assert.equal(result[1].name, 'Imperial Agent');
  assert.equal(result[2].id, 2);
  assert.equal(result[2].name, 'Rebel Agent');
  assert.equal(result[3].id, 3);
  assert.equal(result[3].name, 'Agent 3');
});

QUnit.test('setAgentQuery()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const agentQuery = AgentQueryState.create({
    agentId: 1,
    queryKey: 'chooseShipAction',
    payload: {},
  });
  assert.equal(store.getState().agentQuery, undefined);

  // Run.
  store.dispatch(ActionCreator.setAgentQuery(agentQuery));

  // Verify.
  assert.equal(store.getState().agentQuery, agentQuery);
});

QUnit.test('setAgentResponse()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const agentResponse = AgentResponseState.create({
    agentId: 1,
    responseKey: 'chooseShipAction',
    payload: {},
  });
  assert.equal(store.getState().agentResponse, undefined);

  // Run.
  store.dispatch(ActionCreator.setAgentResponse(agentResponse));

  // Verify.
  assert.equal(store.getState().agentResponse, agentResponse);
});

QUnit.test('setCombatAttackDice()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const combatId = 1;
  const combatInstance = CombatState.create({
    id: combatId,
    attackId: 3,
    defenderId: 2,
  });
  store.dispatch(ActionCreator.setCombatInstance(combatInstance));
  assert.equal(store.getState().combatInstances[combatId].diceKeys.length, 0);
  const diceKeys = ['hit', 'criticalHit', 'blank'];

  // Run.
  store.dispatch(ActionCreator.setCombatAttackDice(combatId, diceKeys));

  // Verify.
  assert.equal(store.getState().combatInstances[combatId].diceKeys.length, diceKeys.length);
  assert.equal(store.getState().combatInstances[combatId].diceKeys[0], diceKeys[0]);
  assert.equal(store.getState().combatInstances[combatId].diceKeys[1], diceKeys[1]);
  assert.equal(store.getState().combatInstances[combatId].diceKeys[2], diceKeys[2]);
});

QUnit.test('setCombatCriticalDamage()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const combatId = 1;
  const combatInstance = CombatState.create({
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

QUnit.test('setCombatHitDamage()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const combatId = 1;
  const combatInstance = CombatState.create({
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

QUnit.test('setCombatInstance()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const combatInstance = CombatState.create({
    id: 1,
    attackerId: 3,
    defenderId: 2,
  });

  // Run.
  store.dispatch(ActionCreator.setCombatInstance(combatInstance));

  // Verify.
  const result = store.getState().combatInstances;
  assert.equal(Object.keys(result).length, 1);
  assert.equal(result[1].id, 1);
  assert.equal(result[1].attackerId, 3);
  assert.equal(result[1].defenderId, 2);
});

QUnit.test('setCombatShieldDamage()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const combatId = 1;
  const combatInstance = CombatState.create({
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

QUnit.test('setDefenseTokenInstance()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const tokenId = 12;
  const defenseTokenInstance = DefenseTokenState.create({
    id: tokenId,
    defenseTokenKey: 'brace',
  });

  // Run.
  store.dispatch(ActionCreator.setDefenseTokenInstance(defenseTokenInstance));

  // Verify.
  const result = store.getState().defenseTokenInstances[tokenId];
  assert.ok(result);
  assert.equal(result.id, tokenId);
  assert.equal(result.defenseTokenKey, 'brace');
});

QUnit.test('setFleetInstance()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const fleetId = 12;
  const fleetInstance = FleetState.create({
    id: fleetId,
    name: 'Galactic Empire Core Set: 175 Points',
    year: 2015,
    description: 'Victory II, Howlrunner, TIE Fighters x3',
  });

  // Run.
  store.dispatch(ActionCreator.setFleetInstance(fleetInstance));

  // Verify.
  const result = store.getState().fleetInstances[fleetId];
  assert.ok(result);
  assert.equal(result.name, 'Galactic Empire Core Set: 175 Points');
  assert.equal(result.year, 2015);
});

QUnit.test('setGameOver()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const isGameOver = true;
  assert.equal(store.getState().isGameOver, false);

  // Run.
  store.dispatch(ActionCreator.setGameOver(isGameOver));

  // Verify.
  assert.equal(store.getState().isGameOver, isGameOver);
});

QUnit.test('setPhase()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const phaseKey = 'some phase';
  assert.equal(store.getState().isGameOver, false);

  // Run.
  store.dispatch(ActionCreator.setPhase(phaseKey));

  // Verify.
  assert.equal(store.getState().phaseKey, phaseKey);
});

QUnit.test('setShipDefenseTokens()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const shipId = 1;
  const defenseTokenIds = [14, 15];

  // Run.
  store.dispatch(ActionCreator.setShipDefenseTokens(shipId, defenseTokenIds));

  // Verify.
  const result = store.getState().shipInstances[shipId].defenseTokens;
  assert.ok(result);
  assert.equal(result.length, 2);
  assert.equal(result[0], defenseTokenIds[0]);
  assert.equal(result[1], defenseTokenIds[1]);
});

QUnit.test('setShipInstance()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const shipInstance = ShipState.create({
    id: 4,
    shipKey: 'hanSolo',
  });

  // Run.
  store.dispatch(ActionCreator.setShipInstance(shipInstance));

  // Verify.
  const result = store.getState().shipInstances;
  assert.equal(Object.keys(result).length, 4);
  assert.equal(result[1].id, 1);
  assert.equal(result[1].shipKey, 'victoryIiClassStarDestroyer');
  assert.equal(result[2].id, 2);
  assert.equal(result[2].shipKey, 'nebulonBEscortFrigate');
  assert.equal(result[3].id, 3);
  assert.equal(result[3].shipKey, 'cr90CorvetteA');
  assert.equal(result[4].id, 4);
  assert.equal(result[4].shipKey, 'hanSolo');
});

QUnit.test('setSquadronDefenseTokens()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const squadronId = 1;
  const defenseTokenIds = [14, 15];

  // Run.
  store.dispatch(ActionCreator.setSquadronDefenseTokens(squadronId, defenseTokenIds));

  // Verify.
  const result = store.getState().squadronInstances[squadronId].defenseTokens;
  assert.ok(result);
  assert.equal(result.length, 2);
  assert.equal(result[0], defenseTokenIds[0]);
  assert.equal(result[1], defenseTokenIds[1]);
});

QUnit.test('setSquadronInstance()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const squadronInstance = SquadronState.create({
    id: 8,
    squadronKey: 'hanSolo',
  });

  // Run.
  store.dispatch(ActionCreator.setSquadronInstance(squadronInstance));

  // Verify.
  const result = store.getState().squadronInstances;
  assert.equal(Object.keys(result).length, 8);
  assert.equal(result[1].id, 1);
  assert.equal(result[1].squadronKey, 'howlrunner');
  assert.equal(result[2].id, 2);
  assert.equal(result[2].squadronKey, 'tieFighterSquadron');
  assert.equal(result[3].id, 3);
  assert.equal(result[3].squadronKey, 'tieFighterSquadron');
  assert.equal(result[4].id, 4);
  assert.equal(result[4].squadronKey, 'tieFighterSquadron');
  assert.equal(result[5].id, 5);
  assert.equal(result[5].squadronKey, 'lukeSkywalker');
  assert.equal(result[6].id, 6);
  assert.equal(result[6].squadronKey, 'xWingSquadron');
  assert.equal(result[7].id, 7);
  assert.equal(result[7].squadronKey, 'xWingSquadron');
  assert.equal(result[8].id, 8);
  assert.equal(result[8].squadronKey, 'hanSolo');
});

QUnit.test('setUpgradeInstance()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const upgradeInstance = UpgradeState.create({
    id: 5,
    upgradeKey: 'veteranInstincts',
  });

  // Run.
  store.dispatch(ActionCreator.setUpgradeInstance(upgradeInstance));

  // Verify.
  const result = store.getState().upgradeInstances;
  assert.equal(Object.keys(result).length, 5);
  assert.equal(result[1].id, 1);
  assert.equal(result[1].upgradeKey, 'grandMoffTarkin');
  assert.equal(result[2].id, 2);
  assert.equal(result[2].upgradeKey, 'dominator');
  assert.equal(result[3].id, 3);
  assert.equal(result[3].upgradeKey, 'generalDodonna');
  assert.equal(result[4].id, 4);
  assert.equal(result[4].upgradeKey, 'dodonnasPride');
  assert.equal(result[5].id, 5);
  assert.equal(result[5].upgradeKey, 'veteranInstincts');
});

QUnit.test('setUpgradeTokenCounts()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root, TestData.createGameState());
  const upgradeId = 1;
  const tokenCounts = TokenCountsState.create({
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
