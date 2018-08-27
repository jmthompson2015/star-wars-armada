import SquadronState from './SquadronState.js';

QUnit.module('SquadronState');

const PROPS = ['id', 'squadronKey', 'position', 'damages', 'defenseTokens'];

const createTestState = () =>
  SquadronState.create({
    id: 1,
    squadronKey: 2,
    position: 3,
    damages: 4,
    defenseTokens: 5,
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

const SquadronStateTest = {};
export default SquadronStateTest;
