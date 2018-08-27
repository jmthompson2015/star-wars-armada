import TokenCountsState from './TokenCountsState.js';

QUnit.module('TokenCountsState');

const PROPS = ['concentrateFire', 'navigate', 'repair', 'squadron'];

const createTestState = () =>
  TokenCountsState.create({
    concentrateFire: 1,
    navigate: 2,
    repair: 3,
    squadron: 4,
  });

QUnit.test('create()', assert => {
  // Setup.

  // Run.
  const tokenCount = createTestState();

  // Verify.
  PROPS.forEach((prop, i) => {
    assert.equal(tokenCount[prop], i + 1);
  });
});

QUnit.test('create() Default', assert => {
  // Setup.
  const tokenCount = TokenCountsState.create();

  // Verify.
  PROPS.forEach(prop => {
    assert.equal(tokenCount[prop], undefined);
  });
});

QUnit.test('create() immutable', assert => {
  // Setup.
  const tokenCount = createTestState();

  // Run / Verify.
  try {
    tokenCount.ion = 12;
    assert.ok(false, 'Should have thrown an exception');
  } catch (e) {
    assert.ok(true);
  }
});

const TokenCountsStateTest = {};
export default TokenCountsStateTest;
