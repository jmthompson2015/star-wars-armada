import DamageDeck from './DamageDeck.js';

QUnit.module('DamageDeck');

QUnit.test('create()', assert => {
  // Run.
  const result = DamageDeck.create();

  // Verify.
  assert.ok(result);
  assert.ok(result.damageInstances);
  assert.equal(Object.keys(result.damageInstances).length, 52);
  assert.ok(result.damageDeck);
  assert.equal(result.damageDeck.length, 52);
});

const DamageDeckTest = {};
export default DamageDeckTest;
