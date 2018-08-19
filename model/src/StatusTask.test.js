import StatusTask from "./StatusTask.js";
import TestData from "./TestData.js";

const Phase = AA.Phase;

const ActionCreator = AS.ActionCreator;

QUnit.module("StatusTask");

QUnit.test("doIt() Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.STATUS_START);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.STATUS_READY_DEFENSE_TOKENS);
      done();
   };

   // Run.
   const done = assert.async();
   StatusTask.doIt(store).then(callback);
});

QUnit.test("doIt() Ready Defense Tokens", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.STATUS_READY_DEFENSE_TOKENS);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.STATUS_READY_UPGRADE_CARDS);
      done();
   };

   // Run.
   const done = assert.async();
   StatusTask.doIt(store).then(callback);
});

QUnit.test("doIt() Ready Upgrade Cards", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.STATUS_READY_UPGRADE_CARDS);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.STATUS_FLIP_INITIATIVE_TOKEN);
      done();
   };

   // Run.
   const done = assert.async();
   StatusTask.doIt(store).then(callback);
});

QUnit.test("doIt() Flip Initiative Token", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.STATUS_FLIP_INITIATIVE_TOKEN);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.STATUS_PLACE_ROUND_TOKEN);
      done();
   };

   // Run.
   const done = assert.async();
   StatusTask.doIt(store).then(callback);
});

QUnit.test("doIt() Place Round Token", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.STATUS_PLACE_ROUND_TOKEN);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.STATUS_END);
      done();
   };

   // Run.
   const done = assert.async();
   StatusTask.doIt(store).then(callback);
});

QUnit.test("doIt() End", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.STATUS_END);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.COMMAND_START);
      done();
   };

   // Run.
   const done = assert.async();
   StatusTask.doIt(store).then(callback);
});

////////////////////////////////////////////////////////////////////////////////
const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyPhaseKey = (assert, state, expected, messagePrefix = "callback ") => assert.equal(AS.Selector.phaseKey(state), expected, messagePrefix + "phaseKey");

const StatusTaskTest = {};
export default StatusTaskTest;