const AgentState = {};

AgentState.create = function(
{
   id,
   name,
   strategy = "SimpleAgentStrategy",

   fleet
})
{
   name = name || "Agent " + id;

   return Immutable(
   {
      id: id,
      name: name,
      strategy: strategy,

      fleet: fleet
   });
};

Object.freeze(AgentState);

export default AgentState;