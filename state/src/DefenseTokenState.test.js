import DefenseTokenState from './DefenseTokenState.js';

QUnit.module('DefenseTokenState');

const PROPS = ['id', 'defenseTokenKey', 'isReady'];

const createTestData = () => DefenseTokenState.create({ id: 1, defenseTokenKey: 2, isReady: 3 });

QUnit.test('create()', assert => {
  // Run.
  const damage = createTestData();

  // Verify.
  PROPS.forEach((prop, i) => {
    assert.equal(damage[prop], i + 1);
  });
});

QUnit.test('create() immutable', assert => {
  // Setup.
  const damage = createTestData();

  // Run / Verify.
  try {
    damage.id = 12;
    assert.ok(false, 'Should have thrown an exception');
  } catch (e) {
    assert.ok(true);
  }
});

const DefenseTokenStateTest = {};
export default DefenseTokenStateTest;
