import AgentQueryType from "./AgentQueryType.js";
import TaskUtilities from "./TaskUtilities.js";

const Phase = AA.Phase;

const ActionCreator = AS.ActionCreator;

const CommandTask = {};
const PHASE_TO_CONFIG = {};

CommandTask.doIt = store =>
{
   let answer;
   const phaseKey = AS.Selector.phaseKey(store.getState());

   switch (phaseKey)
   {
      case Phase.COMMAND_START:
         answer = start(store);
         break;
      case Phase.COMMAND_END:
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
   setCommandQueue(store);
   setPhase(store, Phase.COMMAND_COMMANDING);
   resolve(store);
});

PHASE_TO_CONFIG[Phase.COMMAND_COMMANDING] = {
   processFunction: store =>
   {
      const commandQueue = AS.Selector.activeQueue(store.getState());

      if (commandQueue.length > 0)
      {
         store.dispatch(ActionCreator.dequeueCommand());
         const activeAgentId = AS.Selector.activeAgentId(store.getState());
         const newAgentQuery = AS.AgentQueryState.create(
         {
            agentId: activeAgentId,
            queryKey: AgentQueryType.CHOOSE_COMMANDS,
            payload:
            {}
         });
         store.dispatch(ActionCreator.setAgentQuery(newAgentQuery));
      }
      else
      {
         store.dispatch(ActionCreator.clearActiveAgentId());
         store.dispatch(ActionCreator.setPhase(Phase.COMMAND_END));
      }
   },
   responseKey: AgentQueryType.CHOOSE_COMMANDS,
   responseFunction: store =>
   {
      const agentResponse = AS.Selector.agentResponse(store.getState());
      console.log("COMMANDING responseFunction() agentResponse = " + JSON.stringify(agentResponse, null, "   "));
      store.dispatch(ActionCreator.clearAgentResponse());
   }
};

const end = store => new Promise((resolve) =>
{
   setPhase(store, Phase.SHIP_START);
   resolve(store);
});

////////////////////////////////////////////////////////////////////////////////
const setCommandQueue = store =>
{
   const agents = store.getState().agentInstances;
   const queue = R.map(agent => agent.id, agents);
   store.dispatch(ActionCreator.setActiveQueue(queue));
};

const setPhase = (store, phaseKey) => store.dispatch(ActionCreator.setPhase(phaseKey));

Object.freeze(CommandTask);

export default CommandTask;