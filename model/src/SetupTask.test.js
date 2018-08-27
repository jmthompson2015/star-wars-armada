import SetupTask from './SetupTask.js';
import TestData from './TestData.js';

const { Phase } = AA;

const { ActionCreator } = AS;

QUnit.module('SetupTask');

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyPhaseKey = (assert, state, expected, messagePrefix = 'callback ') =>
  assert.equal(AS.Selector.phaseKey(state), expected, `${messagePrefix}phaseKey`);

// /////////////////////////////////////////////////////////////////////////////////////////////////
QUnit.test('doIt() Start', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.SETUP);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.COMMAND_START);
    done();
  };
  SetupTask.doIt(store0).then(callback);
});

const SetupTaskTest = {};
export default SetupTaskTest;
