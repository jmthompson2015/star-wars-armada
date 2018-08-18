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
   setPhase(store, Phase.STATUS_END);
   resolve(store);
});

const end = store => new Promise((resolve) =>
{
   setPhase(store, Phase.COMMAND_START);
   resolve(store);
});

////////////////////////////////////////////////////////////////////////////////
const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

Object.freeze(StatusTask);

export default StatusTask;