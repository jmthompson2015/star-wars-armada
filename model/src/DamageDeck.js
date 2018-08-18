const DamageDeck = {};

DamageDeck.create = function()
{
   const keys = AA.EnumUtilities.keys(AA.DamageCard);
   let count = 0;

   const damageInstances = keys.reduce((accum, damageKey) =>
   {
      const damageCard = AA.Selector.damageCard(damageKey);

      for (let i = 0; i < damageCard.amount; i++)
      {
         count++;
         const damageInstance = createDamage(count, damageKey);
         accum[damageInstance.id] = damageInstance;
      }
      return accum;
   },
   {});

   const damageDeck = Object.values(damageInstances).map(damage => damage.id);

   // Shuffle.
   damageDeck.sort(() => Math.random() - 0.5);

   return (
   {
      damageInstances: damageInstances,
      damageDeck: damageDeck
   });
};

function createDamage(id, damageKey)
{
   return AS.DamageState.create(
   {
      id: id,
      damageKey: damageKey
   });
}

Object.freeze(DamageDeck);

export default DamageDeck;