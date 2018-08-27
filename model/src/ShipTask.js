import TaskUtilities from './TaskUtilities.js';

const { Phase } = AA;

const { ActionCreator } = AS;

const ShipTask = {};
const PHASE_TO_CONFIG = {};

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const start = store =>
  new Promise(resolve => {
    setPhase(store, Phase.SHIP_END);
    resolve(store);
  });

const end = store =>
  new Promise(resolve => {
    setPhase(store, Phase.SQUADRON_START);
    resolve(store);
  });

// /////////////////////////////////////////////////////////////////////////////////////////////////
ShipTask.doIt = store => {
  let answer;
  let config;
  const phaseKey = AS.Selector.phaseKey(store.getState());

  switch (phaseKey) {
    case Phase.SHIP_START:
      answer = start(store);
      break;
    case Phase.SHIP_END:
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

Object.freeze(ShipTask);

export default ShipTask;
