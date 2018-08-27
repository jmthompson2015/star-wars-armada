import AgentQueryType from './AgentQueryType.js';
import CommandTask from './CommandTask.js';
import TestData from './TestData.js';

const { Phase } = AA;

const { ActionCreator } = AS;

QUnit.module('CommandTask');

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const verifyActiveAgentId = (assert, state, expected, messagePrefix = 'callback ') =>
  assert.equal(AS.Selector.activeAgentId(state), expected, `${messagePrefix}activeAgentId`);

const verifyAgentQuery = (assert, state, expected, messagePrefix = 'callback ') => {
  if (expected === undefined) {
    assert.equal(AS.Selector.agentQuery(state), expected, `${messagePrefix}agentQuery`);
  } else {
    const agentQuery = AS.Selector.agentQuery(state);
    assert.ok(agentQuery, `${messagePrefix}agentQuery`);
    assert.equal(agentQuery.queryKey, expected, `${messagePrefix}agentQuery.queryKey`);
  }
};

const verifyAgentResponse = (assert, state, expected, messagePrefix = 'callback ') =>
  assert.equal(AS.Selector.agentResponse(state), expected, `${messagePrefix}agentResponse`);

const verifyPhaseKey = (assert, state, expected, messagePrefix = 'callback ') =>
  assert.equal(AS.Selector.phaseKey(state), expected, `${messagePrefix}phaseKey`);

const verifyCommandQueue = (assert, state, expected, messagePrefix = 'callback ') => {
  const activeQueue = AS.Selector.activeQueue(state);
  assert.ok(activeQueue, `${messagePrefix}activeQueue`);
  assert.equal(activeQueue.length, expected.length, `${messagePrefix}activeQueue.length`);
  for (let i = 0; i < expected.length; i += 1) {
    assert.equal(activeQueue[i], expected[i], `${messagePrefix}activeQueue[${i}]`);
  }
};

const verifyRound = (assert, state, expected, messagePrefix = 'callback ') =>
  assert.equal(AS.Selector.round(state), expected, `${messagePrefix}round`);

QUnit.test('doIt() Start', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.COMMAND_START);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.COMMAND_COMMANDING);
    done();
  };
  CommandTask.doIt(store0).then(callback);
});

QUnit.test('doIt() Commanding query', assert => {
  // Setup.
  const store0 = TestData.createStore();
  store0.dispatch(ActionCreator.setActiveQueue([1, 2]));
  store0.dispatch(ActionCreator.incrementRound());
  setPhase(store0, Phase.COMMAND_COMMANDING);
  verifyActiveAgentId(assert, store0.getState(), undefined, '');

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyRound(assert, store.getState(), 1);
    verifyPhaseKey(assert, store.getState(), Phase.COMMAND_COMMANDING);
    verifyCommandQueue(assert, store.getState(), [2]);
    verifyActiveAgentId(assert, store.getState(), 1);
    verifyAgentQuery(assert, store.getState(), AgentQueryType.CHOOSE_COMMANDS);
    verifyAgentResponse(assert, store.getState(), undefined);
    done();
  };
  CommandTask.doIt(store0).then(callback);
});

QUnit.test('doIt() Commanding response', assert => {
  // Setup.
  const store0 = TestData.createStore();
  store0.dispatch(ActionCreator.setActiveQueue([1, 2]));
  store0.dispatch(ActionCreator.dequeueCommand());
  const agentResponse = AS.AgentResponseState.create({
    agentId: 1,
    responseKey: AgentQueryType.CHOOSE_COMMANDS,
    payload: {},
  });
  store0.dispatch(ActionCreator.setAgentResponse(agentResponse));
  store0.dispatch(ActionCreator.incrementRound());
  setPhase(store0, Phase.COMMAND_COMMANDING);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyRound(assert, store.getState(), 1);
    verifyPhaseKey(assert, store.getState(), Phase.COMMAND_COMMANDING);
    verifyCommandQueue(assert, store.getState(), [2]);
    verifyActiveAgentId(assert, store.getState(), 1);
    verifyAgentQuery(assert, store.getState(), undefined);
    verifyAgentResponse(assert, store.getState(), undefined);
    done();
  };
  CommandTask.doIt(store0).then(callback);
});

QUnit.test('doIt() End', assert => {
  // Setup.
  const store0 = TestData.createStore();
  setPhase(store0, Phase.COMMAND_END);

  // Run.
  const done = assert.async();
  const callback = store => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    verifyPhaseKey(assert, store.getState(), Phase.SHIP_START);
    done();
  };
  CommandTask.doIt(store0).then(callback);
});

const CommandTaskTest = {};
export default CommandTaskTest;
