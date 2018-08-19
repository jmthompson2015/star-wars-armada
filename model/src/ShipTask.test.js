import ShipTask from "./ShipTask.js";
import TestData from "./TestData.js";

const Phase = AA.Phase;

const ActionCreator = AS.ActionCreator;

QUnit.module("ShipTask");

QUnit.test("doIt() Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.SHIP_START);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.SHIP_END);
      done();
   };

   // Run.
   const done = assert.async();
   ShipTask.doIt(store).then(callback);
});

QUnit.test("doIt() End", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.SHIP_END);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.SQUADRON_START);
      done();
   };

   // Run.
   const done = assert.async();
   ShipTask.doIt(store).then(callback);
});

////////////////////////////////////////////////////////////////////////////////
const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyPhaseKey = (assert, state, expected, messagePrefix = "callback ") => assert.equal(AS.Selector.phaseKey(state), expected, messagePrefix + "phaseKey");

const ShipTaskTest = {};
export default ShipTaskTest;