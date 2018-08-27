const ShipState = {};

ShipState.create = ({
  id,
  shipKey,
  speed,
  position,
  tokenCounts = {},
  commands = [],
  criticals = [],
  damages = [],
  defenseTokens = [],
  upgrades = [],
}) =>
  Immutable({
    id,
    shipKey,
    speed,
    position: Immutable(position),
    tokenCounts: Immutable(tokenCounts),
    commands: Immutable(commands),
    criticals: Immutable(criticals),
    damages: Immutable(damages),
    defenseTokens: Immutable(defenseTokens),
    upgrades: Immutable(upgrades),
  });

Object.freeze(ShipState);

export default ShipState;
