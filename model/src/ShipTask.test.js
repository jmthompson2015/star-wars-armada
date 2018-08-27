import ShipTask from './ShipTask.js';
import TestData from './TestData.js';

const { Phase } = AA;

const { ActionCreator } = AS;

QUnit.module('ShipTask');

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyPhaseKey = (assert, state, expected, messagePrefix = 'callback ') =>
  assert.equal(AS.Selector.phaseKey(state), expected, `${messagePrefix}phaseKey`);

// //////////////////////////////////////////////////////////////////////////////
QUnit.test('doIt() Start', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.SHIP_START);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.SHIP_END);
    done();
  };
  ShipTask.doIt(store0).then(callback);
});

QUnit.test('doIt() End', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.SHIP_END);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.SQUADRON_START);
    done();
  };
  ShipTask.doIt(store0).then(callback);
});

const ShipTaskTest = {};
export default ShipTaskTest;
