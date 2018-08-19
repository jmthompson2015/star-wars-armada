const ShipState = {};

ShipState.create = function(
{
   id,
   shipKey,
   speed,

   position,

   commands = [],
   criticals = [],
   damages = [],
   defenseTokens = [],
   upgrades = []
})
{
   return Immutable(
   {
      id: id,
      shipKey: shipKey,
      speed: speed,

      position: Immutable(position),

      commands: Immutable(commands),
      criticals: Immutable(criticals),
      damages: Immutable(damages),
      defenseTokens: Immutable(defenseTokens),
      upgrades: Immutable(upgrades)
   });
};

Object.freeze(ShipState);

export default ShipState;