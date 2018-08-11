const ShipState = {};

ShipState.create = function(
{
   id,
   shipKey,

   criticals,
   damages,
   position,
   upgrades
})
{
   return Immutable(
   {
      id: id,
      shipKey: shipKey,

      criticals: Immutable(criticals),
      damages: Immutable(damages),
      position: Immutable(position),
      upgrades: Immutable(upgrades)
   });
};

Object.freeze(ShipState);

export default ShipState;