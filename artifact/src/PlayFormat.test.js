import EnumTest from './Enum.test.js';
import PlayFormat from './PlayFormat.js';

QUnit.module('PlayFormat');

QUnit.test('PlayFormat properties Small', assert => {
  const type = PlayFormat.SMALL;
  const properties = PlayFormat.properties[type];
  assert.equal(properties.name, 'Small');
  assert.equal(properties.minPoints, 0);
  assert.equal(properties.maxPoints, 299);
  assert.equal(properties.width, 915);
  assert.equal(properties.height, 915);
  assert.equal(properties.key, type);
});

QUnit.test('PlayFormat properties Standard', assert => {
  const type = PlayFormat.STANDARD;
  const properties = PlayFormat.properties[type];
  assert.equal(properties.name, 'Standard');
  assert.equal(properties.minPoints, 300);
  assert.equal(properties.width, 1830);
  assert.equal(properties.height, 915);
  assert.equal(properties.key, type);
});

QUnit.test('keys and values', assert => {
  EnumTest.keysAndValues(assert, PlayFormat);
});

QUnit.test('keys()', assert => {
  EnumTest.keys(assert, PlayFormat, 2, PlayFormat.SMALL, PlayFormat.STANDARD);
});

const PlayFormatTest = {};
export default PlayFormatTest;
