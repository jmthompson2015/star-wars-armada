import GameState from './GameState.js';

QUnit.module('GameState');

const PROPS = [
  'activeAgentId',
  'activeCombatId',
  'activeShipId',
  'activeSquadronId',
  'isGameOver',
  'phaseKey',
  'playFormatKey',
  'round',
  'userMessage',

  'agentQuery',
  'agentResponse',

  'activeQueue',
  'damageDeck',
  'damageDiscardPile',

  'agentInstances',
  'combatInstances',
  'damageInstances',
  'defenseTokenInstances',
  'fleetInstances',
  'shipInstances',
  'squadronInstances',
  'upgradeInstances',
];

const createTestState = () =>
  GameState.create({
    activeAgentId: 1,
    activeCombatId: 2,
    activeShipId: 3,
    activeSquadronId: 4,
    isGameOver: 5,
    phaseKey: 6,
    playFormatKey: 7,
    round: 8,
    userMessage: 9,

    agentQuery: 10,
    agentResponse: 11,

    activeQueue: 12,
    damageDeck: 13,
    damageDiscardPile: 14,

    agentInstances: 15,
    combatInstances: 16,
    damageInstances: 17,
    defenseTokenInstances: 18,
    fleetInstances: 19,
    shipInstances: 20,
    squadronInstances: 21,
    upgradeInstances: 22,
  });

QUnit.test('create()', assert => {
  // Run.
  const game = createTestState();

  // Verify.
  PROPS.forEach((prop, i) => {
    assert.equal(game[prop], i + 1);
  });
});

QUnit.test('create() immutable', assert => {
  // Setup.
  const game = createTestState();

  // Run / Verify.
  try {
    game.round = 12;
    assert.ok(false, 'Should have thrown an exception');
  } catch (e) {
    assert.ok(true);
  }
});

// QUnit.skip('toString()', assert => {
//   // Setup.
//   const game = TestData.createGameState();
//
//   // Run.
//   console.log(`gameState = ${JSON.stringify(game, null, '   ')}`);
//
//   // Verify.
//   assert.ok(true);
// });

const GameStateTest = {};
export default GameStateTest;
