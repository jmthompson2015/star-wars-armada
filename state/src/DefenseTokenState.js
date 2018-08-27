const DefenseTokenState = {};

DefenseTokenState.create = ({ id, defenseTokenKey, isReady = true }) =>
  Immutable({ id, defenseTokenKey, isReady });

Object.freeze(DefenseTokenState);

export default DefenseTokenState;
