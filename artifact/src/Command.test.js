import EnumTest from './Enum.test.js';
import Command from './Command.js';

QUnit.module('Command');

QUnit.test('Command properties Concentrate Fire', assert => {
  const commandKey = Command.CONCENTRATE_FIRE;
  const properties = Command.properties[commandKey];
  assert.equal(properties.name, 'Concentrate Fire');
  assert.equal(properties.text, 'Increase the power of one attack.');
  assert.equal(properties.sortOrder, 4);
  assert.equal(properties.key, commandKey);
});

QUnit.test('keys and values', assert => {
  EnumTest.keysAndValues(assert, Command);
});

QUnit.test('keys()', assert => {
  EnumTest.keys(assert, Command, 4, Command.CONCENTRATE_FIRE, Command.SQUADRON);
});

const CommandTest = {};
export default CommandTest;
