import StatusTask from './StatusTask.js';
import TestData from './TestData.js';

const { Phase } = AA;

const { ActionCreator } = AS;

QUnit.module('StatusTask');

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyPhaseKey = (assert, state, expected, messagePrefix = 'callback ') =>
  assert.equal(AS.Selector.phaseKey(state), expected, `${messagePrefix}phaseKey`);

// /////////////////////////////////////////////////////////////////////////////////////////////////
QUnit.test('doIt() Start', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.STATUS_START);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.STATUS_READY_DEFENSE_TOKENS);
    done();
  };
  StatusTask.doIt(store0).then(callback);
});

QUnit.test('doIt() Ready Defense Tokens', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.STATUS_READY_DEFENSE_TOKENS);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.STATUS_READY_UPGRADE_CARDS);
    done();
  };
  StatusTask.doIt(store0).then(callback);
});

QUnit.test('doIt() Ready Upgrade Cards', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.STATUS_READY_UPGRADE_CARDS);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.STATUS_FLIP_INITIATIVE_TOKEN);
    done();
  };
  StatusTask.doIt(store0).then(callback);
});

QUnit.test('doIt() Flip Initiative Token', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.STATUS_FLIP_INITIATIVE_TOKEN);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.STATUS_PLACE_ROUND_TOKEN);
    done();
  };
  StatusTask.doIt(store0).then(callback);
});

QUnit.test('doIt() Place Round Token', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.STATUS_PLACE_ROUND_TOKEN);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.STATUS_END);
    done();
  };
  StatusTask.doIt(store0).then(callback);
});

QUnit.test('doIt() End', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.STATUS_END);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.COMMAND_START);
    done();
  };
  StatusTask.doIt(store0).then(callback);
});

const StatusTaskTest = {};
export default StatusTaskTest;
