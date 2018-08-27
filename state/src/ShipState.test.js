import ShipState from './ShipState.js';

QUnit.module('ShipState');

const PROPS = [
  'id',
  'shipKey',
  'speed',

  'position',
  'tokenCounts',

  'commands',
  'criticals',
  'damages',
  'defenseTokens',
  'upgrades',
];

const createTestState = () =>
  ShipState.create({
    id: 1,
    shipKey: 2,
    speed: 3,

    position: 4,
    tokenCounts: 5,

    commands: 6,
    criticals: 7,
    damages: 8,
    defenseTokens: 9,
    upgrades: 10,
  });

QUnit.test('create()', assert => {
  // Run.
  const pilot = createTestState();

  // Verify.
  PROPS.forEach((prop, i) => {
    assert.equal(pilot[prop], i + 1);
  });
});

QUnit.test('create() immutable', assert => {
  // Setup.
  const pilot = createTestState();

  // Run / Verify.
  try {
    pilot.id = 12;
    assert.ok(false, 'Should have thrown an exception');
  } catch (e) {
    assert.ok(true);
  }
});

const ShipStateTest = {};
export default ShipStateTest;
