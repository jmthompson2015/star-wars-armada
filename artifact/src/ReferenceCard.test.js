import EnumTest from './Enum.test.js';
import ReferenceCard from './ReferenceCard.js';

QUnit.module('ReferenceCard');

QUnit.test('ReferenceCard properties Commands', assert => {
  const referenceKey = ReferenceCard.COMMANDS;
  const properties = ReferenceCard.properties[referenceKey];
  assert.equal(properties.title, 'Commands');
  assert.equal(properties.image, 'reference-card/commands.png');
  assert.equal(properties.key, referenceKey);
});

QUnit.test('keys and values', assert => {
  EnumTest.keysAndValues(assert, ReferenceCard);
});

QUnit.test('keys()', assert => {
  EnumTest.keys(assert, ReferenceCard, 2, ReferenceCard.COMMANDS, ReferenceCard.DEFENSE_TOKENS);
});

const ReferenceCardTest = {};
export default ReferenceCardTest;
