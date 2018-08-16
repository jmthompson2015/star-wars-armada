import EnumTest from "./Enum.test.js";
import Range from "./Range.js";

QUnit.module("Range");

QUnit.test("Range properties 1", function(assert)
{
   const rangeKey = Range.ONE;
   const properties = Range.properties[rangeKey];
   assert.equal(properties.name, "1");
   assert.equal(properties.minDistance, 0);
   assert.equal(properties.maxDistance, 116);
   assert.equal(properties.key, rangeKey);
});

QUnit.test("Range properties 2", function(assert)
{
   const rangeKey = Range.TWO;
   const properties = Range.properties[rangeKey];
   assert.equal(properties.name, "2");
   assert.equal(properties.minDistance, 117);
   assert.equal(properties.maxDistance, 180);
   assert.equal(properties.key, rangeKey);
});

QUnit.test("Range properties 3", function(assert)
{
   const rangeKey = Range.THREE;
   const properties = Range.properties[rangeKey];
   assert.equal(properties.name, "3");
   assert.equal(properties.minDistance, 181);
   assert.equal(properties.maxDistance, 303);
   assert.equal(properties.key, rangeKey);
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, Range);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, Range, 3, Range.ONE, Range.THREE);
});

const RangeTest = {};
export default RangeTest;