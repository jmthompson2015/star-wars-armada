const AgentState = {};

AgentState.create = ({ id, name, strategy = 'SimpleAgentStrategy', fleet }) =>
  Immutable({
    id,
    name: name || `Agent ${id}`,
    strategy,
    fleet,
  });

Object.freeze(AgentState);

export default AgentState;
