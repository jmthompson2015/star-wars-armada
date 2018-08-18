const ActionCreator = AS.ActionCreator;

const SetupTask = {};

SetupTask.doIt = store => new Promise((resolve) =>
{
   store.dispatch(ActionCreator.setPhase(AA.Phase.COMMAND_START));

   resolve(store);
});

Object.freeze(SetupTask);

export default SetupTask;