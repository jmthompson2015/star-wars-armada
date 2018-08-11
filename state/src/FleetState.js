const FleetState = {};

FleetState.create = function(
{
   id,
   name,
   year,
   description,
   points,

   ships,
   squadrons
})
{
   return Immutable(
   {
      id: id,
      name: name,
      year: year,
      description: description,
      points: points,

      ships: Immutable(ships),
      squadrons: Immutable(squadrons)
   });
};

Object.freeze(FleetState);

export default FleetState;