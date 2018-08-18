const Selector = {};

Selector.shipCountByAgent = (agentId, state) => AS.Selector.shipIdsByAgent(agentId, state).length;

Object.freeze(Selector);

export default Selector;