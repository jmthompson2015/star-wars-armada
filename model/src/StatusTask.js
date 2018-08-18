import TaskUtilities from "./TaskUtilities.js";

const Phase = AA.Phase;

const ActionCreator = AS.ActionCreator;

const StatusTask = {};
const PHASE_TO_CONFIG = {};

StatusTask.doIt = store =>
{
   let answer;
   const phaseKey = AS.Selector.phaseKey(store.getState());

   switch (phaseKey)
   {
      case Phase.STATUS_START:
         answer = start(store);
         break;
      case Phase.STATUS_END:
         answer = end(store);
         break;
      default:
         const config = PHASE_TO_CONFIG[phaseKey];
         answer = TaskUtilities.processPhase(
         {
            phaseKey: phaseKey,
            responseKey: config.responseKey,
            responseFunction: config.responseFunction,
            processFunction: config.processFunction
         })(store);
   }

   return answer;
};

////////////////////////////////////////////////////////////////////////////////
const start = store => new Promise((resolve) =>
{
   setPhase(store, Phase.STATUS_READY_DEFENSE_TOKENS);
   resolve(store);
});

PHASE_TO_CONFIG[Phase.STATUS_READY_DEFENSE_TOKENS] = {
   processFunction: store =>
   {
      // Ships.
      const shipIds = Object.keys(store.getState().shipInstances).sort();
      store.dispatch(ActionCreator.setActiveQueue(shipIds));

      while (AS.Selector.activeQueue(store.getState()).length > 0)
      {
         store.dispatch(ActionCreator.dequeueShip());
         const shipId = AS.Selector.activeShipId(store.getState());
         store.dispatch(ActionCreator.readyShipDefenseTokens(shipId, store.getState()));
      }

      // Squadrons.
      const squadronIds = Object.keys(store.getState().squadronInstances).sort();
      store.dispatch(ActionCreator.setActiveQueue(squadronIds));

      while (AS.Selector.activeQueue(store.getState()).length > 0)
      {
         store.dispatch(ActionCreator.dequeueSquadron());
         const squadronId = AS.Selector.activeSquadronId(store.getState());
         store.dispatch(ActionCreator.readySquadronDefenseTokens(squadronId, store.getState()));
      }

      setPhase(store, Phase.STATUS_READY_UPGRADE_CARDS);
   }
};

PHASE_TO_CONFIG[Phase.STATUS_READY_UPGRADE_CARDS] = {
   processFunction: store =>
   {
      const shipIds = Object.keys(store.getState().shipInstances).sort();
      store.dispatch(ActionCreator.setActiveQueue(shipIds));

      while (AS.Selector.activeQueue(store.getState()).length > 0)
      {
         store.dispatch(ActionCreator.dequeueShip());
         const shipId = AS.Selector.activeShipId(store.getState());
         store.dispatch(ActionCreator.readyUpgradeCards(shipId, store.getState()));
      }

      setPhase(store, Phase.STATUS_FLIP_INITIATIVE_TOKEN);
   }
};

PHASE_TO_CONFIG[Phase.STATUS_FLIP_INITIATIVE_TOKEN] = {
   processFunction: store =>
   {
      // TODO: flip initiative token.
      setPhase(store, Phase.STATUS_PLACE_ROUND_TOKEN);
   }
};

PHASE_TO_CONFIG[Phase.STATUS_PLACE_ROUND_TOKEN] = {
   processFunction: store =>
   {
      store.dispatch(ActionCreator.incrementRound(store.getState()));
      setPhase(store, Phase.STATUS_END);
   }
};

const end = store => new Promise((resolve) =>
{
   setPhase(store, Phase.COMMAND_START);
   resolve(store);
});

////////////////////////////////////////////////////////////////////////////////
const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

Object.freeze(StatusTask);

export default StatusTask;