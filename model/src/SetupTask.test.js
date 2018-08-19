import SetupTask from "./SetupTask.js";
import TestData from "./TestData.js";

const Phase = AA.Phase;

const ActionCreator = AS.ActionCreator;

QUnit.module("SetupTask");

QUnit.test("doIt() Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.SETUP);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.COMMAND_START);
      done();
   };

   // Run.
   const done = assert.async();
   SetupTask.doIt(store).then(callback);
});

////////////////////////////////////////////////////////////////////////////////
const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyPhaseKey = (assert, state, expected, messagePrefix = "callback ") => assert.equal(AS.Selector.phaseKey(state), expected, messagePrefix + "phaseKey");

const SetupTaskTest = {};
export default SetupTaskTest;