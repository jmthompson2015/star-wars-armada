const SquadronState = {};

SquadronState.create = function(
{
   id,
   squadronKey
})
{
   return Immutable(
   {
      id: id,
      squadronKey: squadronKey
   });
};

Object.freeze(SquadronState);

export default SquadronState;