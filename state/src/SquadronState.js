const SquadronState = {};

SquadronState.create = function(
{
   id,
   squadronKey,

   position,

   damages = [],
   defenseTokens = [],
})
{
   return Immutable(
   {
      id: id,
      squadronKey: squadronKey,

      position: Immutable(position),

      damages: Immutable(damages),
      defenseTokens: Immutable(defenseTokens),
   });
};

Object.freeze(SquadronState);

export default SquadronState;