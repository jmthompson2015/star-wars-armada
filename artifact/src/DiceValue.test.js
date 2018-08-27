import DiceValue from './DiceValue.js';
import EnumTest from './Enum.test.js';

QUnit.module('DiceValue');

QUnit.test('DiceValue properties Black Hit + Critical', assert => {
  const dieKey = DiceValue.BLACK_HIT_CRITICAL;
  const properties = DiceValue.properties[dieKey];
  assert.equal(properties.name, 'Black Hit + Critical');
  assert.equal(properties.color, 'black');
  assert.equal(properties.value, 'hitCritical');
  assert.equal(properties.sortOrder, 5);
  assert.equal(properties.image, 'dice/black-hit-critical-hit.png');
  assert.equal(properties.key, dieKey);
});

QUnit.test('DiceValue properties Red Hit', assert => {
  const dieKey = DiceValue.RED_HIT;
  const properties = DiceValue.properties[dieKey];
  assert.equal(properties.name, 'Red Hit');
  assert.equal(properties.color, 'red');
  assert.equal(properties.value, 'hit');
  assert.equal(properties.sortOrder, 4);
  assert.equal(properties.image, 'dice/red-hit.png');
  assert.equal(properties.key, dieKey);
});

QUnit.test('keys and values', assert => {
  EnumTest.keysAndValues(assert, DiceValue);
});

QUnit.test('keys()', assert => {
  EnumTest.keys(assert, DiceValue, 11, DiceValue.BLACK_BLANK, DiceValue.RED_HIT_HIT);
});

const DiceValueTest = {};
export default DiceValueTest;
