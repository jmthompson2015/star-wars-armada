import DiceValue from "./DiceValue.js";
import EnumTest from "./Enum.test.js";

QUnit.module("DiceValue");

QUnit.test("DiceValue properties Hit", function(assert)
{
   const dieKey = DiceValue.HIT;
   const properties = DiceValue.properties[dieKey];
   assert.equal(properties.name, "Hit");
   assert.equal(properties.sortOrder, 1);
   assert.equal(properties.key, dieKey);
});

QUnit.test("DiceValue properties Hit + Critical Hit", function(assert)
{
   const dieKey = DiceValue.HIT_CRITICAL_HIT;
   const properties = DiceValue.properties[dieKey];
   assert.equal(properties.name, "Hit + Critical Hit");
   assert.equal(properties.sortOrder, 2);
   assert.equal(properties.key, dieKey);
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, DiceValue);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, DiceValue, 6, DiceValue.ACCURACY, DiceValue.HIT_HIT);
});

const DiceValueTest = {};
export default DiceValueTest;