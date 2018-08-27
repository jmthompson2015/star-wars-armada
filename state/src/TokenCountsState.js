const TokenCountsState = {};

TokenCountsState.create = ({ concentrateFire, navigate, repair, squadron } = {}) =>
  Immutable({
    concentrateFire,
    navigate,
    repair,
    squadron,
  });

Object.freeze(TokenCountsState);

export default TokenCountsState;
