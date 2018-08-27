import TaskUtilities from './TaskUtilities.js';

const { Phase } = AA;

const { ActionCreator } = AS;

const StatusTask = {};
const PHASE_TO_CONFIG = {};

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

const start = store =>
  new Promise(resolve => {
    setPhase(store, Phase.STATUS_READY_DEFENSE_TOKENS);
    resolve(store);
  });

const end = store =>
  new Promise(resolve => {
    setPhase(store, Phase.COMMAND_START);
    resolve(store);
  });

const setStatusQueueShip = store => {
  const shipIds = AS.Selector.shipIds(store.getState());
  store.dispatch(ActionCreator.setActiveQueue(shipIds));
};

const setStatusQueueSquadron = store => {
  const squadronIds = AS.Selector.squadronIds(store.getState());
  store.dispatch(ActionCreator.setActiveQueue(squadronIds));
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
StatusTask.doIt = store => {
  let answer;
  let config;
  const phaseKey = AS.Selector.phaseKey(store.getState());

  switch (phaseKey) {
    case Phase.STATUS_START:
      answer = start(store);
      break;
    case Phase.STATUS_END:
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

// /////////////////////////////////////////////////////////////////////////////////////////////////
PHASE_TO_CONFIG[Phase.STATUS_READY_DEFENSE_TOKENS] = {
  processFunction: store => {
    // Ships.
    setStatusQueueShip(store);

    while (AS.Selector.activeQueue(store.getState()).length > 0) {
      store.dispatch(ActionCreator.dequeueShip());
      const shipId = AS.Selector.activeShipId(store.getState());
      store.dispatch(ActionCreator.readyShipDefenseTokens(shipId));
    }

    // Squadrons.
    setStatusQueueSquadron(store);

    while (AS.Selector.activeQueue(store.getState()).length > 0) {
      store.dispatch(ActionCreator.dequeueSquadron());
      const squadronId = AS.Selector.activeSquadronId(store.getState());
      store.dispatch(ActionCreator.readySquadronDefenseTokens(squadronId));
    }

    setPhase(store, Phase.STATUS_READY_UPGRADE_CARDS);
  },
};

PHASE_TO_CONFIG[Phase.STATUS_READY_UPGRADE_CARDS] = {
  processFunction: store => {
    setStatusQueueShip(store);

    while (AS.Selector.activeQueue(store.getState()).length > 0) {
      store.dispatch(ActionCreator.dequeueShip());
      const shipId = AS.Selector.activeShipId(store.getState());
      store.dispatch(ActionCreator.readyUpgradeCards(shipId));
    }

    setPhase(store, Phase.STATUS_FLIP_INITIATIVE_TOKEN);
  },
};

PHASE_TO_CONFIG[Phase.STATUS_FLIP_INITIATIVE_TOKEN] = {
  processFunction: store => {
    // TODO: flip initiative token.
    setPhase(store, Phase.STATUS_PLACE_ROUND_TOKEN);
  },
};

PHASE_TO_CONFIG[Phase.STATUS_PLACE_ROUND_TOKEN] = {
  processFunction: store => {
    store.dispatch(ActionCreator.incrementRound());
    setPhase(store, Phase.STATUS_END);
  },
};

Object.freeze(StatusTask);

export default StatusTask;
