const TokenCountsState = {};

TokenCountsState.create = function(
{
   concentrateFire,
   navigate,
   repair,
   squadron
} = {})
{
   return Immutable(
   {
      concentrateFire: concentrateFire,
      navigate: navigate,
      repair: repair,
      squadron: squadron
   });
};

Object.freeze(TokenCountsState);

export default TokenCountsState;