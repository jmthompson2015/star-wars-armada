const SquadronState = {};

SquadronState.create = ({ id, squadronKey, position, damages = [], defenseTokens = [] }) =>
  Immutable({
    id,
    squadronKey,
    position: Immutable(position),
    damages: Immutable(damages),
    defenseTokens: Immutable(defenseTokens),
  });

Object.freeze(SquadronState);

export default SquadronState;
