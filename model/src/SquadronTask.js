import TaskUtilities from './TaskUtilities.js';

const { Phase } = AA;

const { ActionCreator } = AS;

const SquadronTask = {};
const PHASE_TO_CONFIG = {};

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const start = store =>
  new Promise(resolve => {
    setPhase(store, Phase.SQUADRON_END);
    resolve(store);
  });

const end = store =>
  new Promise(resolve => {
    setPhase(store, Phase.STATUS_START);
    resolve(store);
  });

// /////////////////////////////////////////////////////////////////////////////////////////////////
SquadronTask.doIt = store => {
  let answer;
  let config;
  const phaseKey = AS.Selector.phaseKey(store.getState());

  switch (phaseKey) {
    case Phase.SQUADRON_START:
      answer = start(store);
      break;
    case Phase.SQUADRON_END:
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

Object.freeze(SquadronTask);

export default SquadronTask;
