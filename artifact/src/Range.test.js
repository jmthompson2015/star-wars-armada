import EnumTest from "./Enum.test.js";
import Range from "./Range.js";

QUnit.module("Range");

QUnit.test("Range properties Close", function(assert)
{
   const rangeKey = Range.CLOSE;
   const properties = Range.properties[rangeKey];
   assert.equal(properties.name, "Close");
   assert.equal(properties.minDistance, 0);
   assert.equal(properties.maxDistance, 123);
   assert.equal(properties.key, rangeKey);
});

QUnit.test("Range properties Medium", function(assert)
{
   const rangeKey = Range.MEDIUM;
   const properties = Range.properties[rangeKey];
   assert.equal(properties.name, "Medium");
   assert.equal(properties.minDistance, 124);
   assert.equal(properties.maxDistance, 187);
   assert.equal(properties.key, rangeKey);
});

QUnit.test("Range properties Long", function(assert)
{
   const rangeKey = Range.LONG;
   const properties = Range.properties[rangeKey];
   assert.equal(properties.name, "Long");
   assert.equal(properties.minDistance, 188);
   assert.equal(properties.maxDistance, 305);
   assert.equal(properties.key, rangeKey);
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, Range);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, Range, 3, Range.CLOSE, Range.LONG);
});

const RangeTest = {};
export default RangeTest;