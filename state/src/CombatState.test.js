import CombatState from './CombatState.js';

QUnit.module('CombatState');

const PROPS = [
  'id',
  'attackerId',
  'defenderId',
  'rangeKey',
  'weaponKey',
  'criticalDamage',
  'hitDamage',
  'shieldDamage',
  'diceKeys',
];

const createTestState = () =>
  CombatState.create({
    id: 1,
    attackerId: 2,
    defenderId: 3,
    rangeKey: 4,
    weaponKey: 5,
    criticalDamage: 6,
    hitDamage: 7,
    shieldDamage: 8,
    diceKeys: 9,
  });

QUnit.test('create()', assert => {
  // Run.
  const combat = createTestState();
  console.log(`combat = ${JSON.stringify(combat)}`);

  // Verify.
  PROPS.forEach((prop, i) => {
    assert.equal(combat[prop], i + 1);
  });
});

QUnit.test('create() immutable', assert => {
  // Setup.
  const combat = createTestState();

  // Run / Verify.
  try {
    combat.id = 12;
    assert.ok(false, 'Should have thrown an exception');
  } catch (e) {
    assert.ok(true);
  }
});

const CombatStateTest = {};
export default CombatStateTest;
