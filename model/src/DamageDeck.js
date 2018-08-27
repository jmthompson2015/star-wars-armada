const DamageDeck = {};

const createDamage = (id, damageKey) =>
  AS.DamageState.create({
    id,
    damageKey,
  });

DamageDeck.create = () => {
  const keys = AA.EnumUtilities.keys(AA.DamageCard);
  let count = 0;

  const damageInstances = keys.reduce((accum, damageKey) => {
    const damageCard = AA.Selector.damageCard(damageKey);
    const map = accum;

    for (let i = 0; i < damageCard.amount; i += 1) {
      count += 1;
      const damageInstance = createDamage(count, damageKey);
      map[damageInstance.id] = damageInstance;
    }
    return map;
  }, {});

  const damageDeck = Object.values(damageInstances).map(damage => damage.id);

  // Shuffle.
  damageDeck.sort(() => Math.random() - 0.5);

  return {
    damageInstances,
    damageDeck,
  };
};

Object.freeze(DamageDeck);

export default DamageDeck;
