const SquadronState = {};

SquadronState.create = function(
{
   id,
   squadronKey,

   criticals,
   damages,
   position
})
{
   return Immutable(
   {
      id: id,
      squadronKey: squadronKey,

      criticals: criticals,
      damages: damages,
      position: position
   });
};

Object.freeze(SquadronState);

export default SquadronState;