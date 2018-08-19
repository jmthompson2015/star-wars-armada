import AgentQueryType from "./AgentQueryType.js";
import CommandTask from "./CommandTask.js";
import TestData from "./TestData.js";

const Phase = AA.Phase;

const ActionCreator = AS.ActionCreator;

QUnit.module("CommandTask");

QUnit.test("doIt() Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.COMMAND_START);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.COMMAND_COMMANDING);
      done();
   };

   // Run.
   const done = assert.async();
   CommandTask.doIt(store).then(callback);
});

QUnit.test("doIt() Commanding query", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.setActiveQueue([1, 2]));
   store.dispatch(ActionCreator.incrementRound());
   setPhase(store, Phase.COMMAND_COMMANDING);
   verifyActiveAgentId(assert, store.getState(), undefined, "");

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyRound(assert, store.getState(), 1);
      verifyPhaseKey(assert, store.getState(), Phase.COMMAND_COMMANDING);
      verifyCommandQueue(assert, store.getState(), [2]);
      verifyActiveAgentId(assert, store.getState(), 1);
      verifyAgentQuery(assert, store.getState(), AgentQueryType.CHOOSE_COMMANDS);
      verifyAgentResponse(assert, store.getState(), undefined);
      done();
   };

   // Run.
   const done = assert.async();
   CommandTask.doIt(store).then(callback);
});

QUnit.test("doIt() Commanding response", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.setActiveQueue([1, 2]));
   store.dispatch(ActionCreator.dequeueCommand());
   const agentResponse = AS.AgentResponseState.create(
   {
      agentId: 1,
      responseKey: AgentQueryType.CHOOSE_COMMANDS,
      payload:
      {}
   });
   store.dispatch(ActionCreator.setAgentResponse(agentResponse));
   store.dispatch(ActionCreator.incrementRound());
   setPhase(store, Phase.COMMAND_COMMANDING);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyRound(assert, store.getState(), 1);
      verifyPhaseKey(assert, store.getState(), Phase.COMMAND_COMMANDING);
      verifyCommandQueue(assert, store.getState(), [2]);
      verifyActiveAgentId(assert, store.getState(), 1);
      verifyAgentQuery(assert, store.getState(), undefined);
      verifyAgentResponse(assert, store.getState(), undefined);
      done();
   };

   // Run.
   const done = assert.async();
   console.log("Run test");
   CommandTask.doIt(store).then(callback);
});

QUnit.test("doIt() End", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   setPhase(store, Phase.COMMAND_END);

   const callback = store =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      verifyPhaseKey(assert, store.getState(), Phase.SHIP_START);
      done();
   };

   // Run.
   const done = assert.async();
   CommandTask.doIt(store).then(callback);
});

////////////////////////////////////////////////////////////////////////////////
const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyActiveAgentId = (assert, state, expected, messagePrefix = "callback ") => assert.equal(AS.Selector.activeAgentId(state), expected, messagePrefix + "activeAgentId");

const verifyAgentQuery = (assert, state, expected, messagePrefix = "callback ") =>
{
   if (expected === undefined)
   {
      assert.equal(AS.Selector.agentQuery(state), expected, messagePrefix + "agentQuery");
   }
   else
   {
      const agentQuery = AS.Selector.agentQuery(state);
      assert.ok(agentQuery, messagePrefix + "agentQuery");
      assert.equal(agentQuery.queryKey, expected, messagePrefix + "agentQuery.queryKey");
   }
};

const verifyAgentResponse = (assert, state, expected, messagePrefix = "callback ") => assert.equal(AS.Selector.agentResponse(state), expected, messagePrefix + "agentResponse");

const verifyCommandQueue = (assert, state, expected, messagePrefix = "callback ") =>
{
   const activeQueue = AS.Selector.activeQueue(state);
   assert.ok(activeQueue, messagePrefix + "activeQueue");
   assert.equal(activeQueue.length, expected.length, messagePrefix + "activeQueue.length");
   for (let i = 0; i < expected.length; i++)
   {
      assert.equal(activeQueue[i], expected[i], messagePrefix + "activeQueue[" + i + "]");
   }
};

const verifyPhaseKey = (assert, state, expected, messagePrefix = "callback ") => assert.equal(AS.Selector.phaseKey(state), expected, messagePrefix + "phaseKey");

const verifyRound = (assert, state, expected, messagePrefix = "callback ") => assert.equal(AS.Selector.round(state), expected, messagePrefix + "round");

const CommandTaskTest = {};
export default CommandTaskTest;