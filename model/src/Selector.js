const Selector = {};

Selector.shipCountByAgent = (agentId, state) =>
{
   const agent = AS.Selector.agentInstance(agentId, state);

   return Selector.shipCountByFleet(agent.fleet, state);
};

Selector.shipCountByFleet = (fleetId, state) => AS.Selector.fleetInstance(fleetId, state).ships.length;

Object.freeze(Selector);

export default Selector;