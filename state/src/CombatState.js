const CombatState = {};

CombatState.create = function(
{
   id,
   attackerId,
   defenderId,
   rangeKey,
   weaponKey = "primary",

   criticalDamage = 0,
   hitDamage = 0,
   shieldDamage = 0,

   diceKeys = []
})
{
   return Immutable(
   {
      id: Immutable(id),
      attackerId: Immutable(attackerId),
      defenderId: Immutable(defenderId),
      rangeKey: Immutable(rangeKey),
      weaponKey: Immutable(weaponKey),

      criticalDamage: Immutable(criticalDamage),
      hitDamage: Immutable(hitDamage),
      shieldDamage: Immutable(shieldDamage),

      diceKeys: Immutable(diceKeys)
   });
};

Object.freeze(CombatState);

export default CombatState;