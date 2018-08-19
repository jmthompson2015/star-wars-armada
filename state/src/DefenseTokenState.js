const DefenseTokenState = {};

DefenseTokenState.create = function(
{
   id,
   defenseTokenKey,
   isReady = true
})
{
   return Immutable(
   {
      id: id,
      defenseTokenKey: defenseTokenKey,
      isReady: isReady
   });
};

Object.freeze(DefenseTokenState);

export default DefenseTokenState;