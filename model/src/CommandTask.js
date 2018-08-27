import AgentQueryType from './AgentQueryType.js';
import TaskUtilities from './TaskUtilities.js';

const { Phase } = AA;

const { ActionCreator } = AS;

const CommandTask = {};

const PHASE_TO_CONFIG = {};

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const end = store =>
  new Promise(resolve => {
    setPhase(store, Phase.SHIP_START);
    resolve(store);
  });

const setCommandQueue = store => {
  const agentIds = AS.Selector.agentIds(store.getState());
  store.dispatch(ActionCreator.setActiveQueue(agentIds));
};

const start = store =>
  new Promise(resolve => {
    setCommandQueue(store);
    setPhase(store, Phase.COMMAND_COMMANDING);
    resolve(store);
  });

CommandTask.doIt = store => {
  let answer;
  let config;
  const phaseKey = AS.Selector.phaseKey(store.getState());

  switch (phaseKey) {
    case Phase.COMMAND_START:
      answer = start(store);
      break;
    case Phase.COMMAND_END:
      answer = end(store);
      break;
    default:
      config = PHASE_TO_CONFIG[phaseKey];
      answer = TaskUtilities.processPhase({
        phaseKey,
        responseKey: config.responseKey,
        responseFunction: config.responseFunction,
        processFunction: config.processFunction,
      })(store);
  }

  return answer;
};

// //////////////////////////////////////////////////////////////////////////////
PHASE_TO_CONFIG[Phase.COMMAND_COMMANDING] = {
  processFunction: store => {
    const commandQueue = AS.Selector.activeQueue(store.getState());

    if (commandQueue.length > 0) {
      store.dispatch(ActionCreator.dequeueCommand());
      const activeAgentId = AS.Selector.activeAgentId(store.getState());
      const fleetId = AS.Selector.agentInstance(activeAgentId, store.getState()).fleet;
      const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, store.getState());
      const reduceFunction = (accum, ship) =>
        R.assoc(ship.id, AA.Selector.enumKeys(AA.Command), accum);
      const shipToValidCommands = R.reduce(reduceFunction, {}, shipInstances);
      const newAgentQuery = AS.AgentQueryState.create({
        agentId: activeAgentId,
        queryKey: AgentQueryType.CHOOSE_COMMANDS,
        payload: {
          shipToValidCommands,
        },
      });
      store.dispatch(ActionCreator.setAgentQuery(newAgentQuery));
    } else {
      store.dispatch(ActionCreator.clearActiveAgentId());
      store.dispatch(ActionCreator.setPhase(Phase.COMMAND_END));
    }
  },
  responseKey: AgentQueryType.CHOOSE_COMMANDS,
  responseFunction: store => {
    // FIXME: process agent response.
    // const agentResponse = AS.Selector.agentResponse(store.getState());
    // console.log("COMMANDING responseFunction() agentResponse = " +
    //  JSON.stringify(agentResponse, null, "   "));
    store.dispatch(ActionCreator.clearAgentResponse());
  },
};

// //////////////////////////////////////////////////////////////////////////////

Object.freeze(CommandTask);

export default CommandTask;
