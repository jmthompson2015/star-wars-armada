const SimpleAgentStrategy = {};

const randomElement = array => array[Math.floor(Math.random() * array.length)];

SimpleAgentStrategy.chooseCommands = (shipInstances, shipToValidCommands) =>
  new Promise(resolve => {
    const shipIds = Object.keys(shipToValidCommands);
    const reduceFunction = (accumulator, shipId) => {
      const commandKeys = shipToValidCommands[shipId];
      return R.assoc(shipId, randomElement(commandKeys), accumulator);
    };
    const shipToManeuver = R.reduce(reduceFunction, {})(shipIds);

    resolve(shipToManeuver);
  });

// SimpleAgentStrategy.notifyDamage = props => AgentUtils.notifyDamage(props);

Object.freeze(SimpleAgentStrategy);

export default SimpleAgentStrategy;
