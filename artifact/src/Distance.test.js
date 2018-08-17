import EnumTest from "./Enum.test.js";
import Distance from "./Distance.js";

QUnit.module("Distance");

QUnit.test("Distance properties 1", function(assert)
{
   const distanceKey = Distance.ONE;
   const properties = Distance.properties[distanceKey];
   assert.equal(properties.name, "1");
   assert.equal(properties.minDistance, 0);
   assert.equal(properties.maxDistance, 76);
   assert.equal(properties.key, distanceKey);
});

QUnit.test("Distance properties 2", function(assert)
{
   const distanceKey = Distance.TWO;
   const properties = Distance.properties[distanceKey];
   assert.equal(properties.name, "2");
   assert.equal(properties.minDistance, 77);
   assert.equal(properties.maxDistance, 125);
   assert.equal(properties.key, distanceKey);
});

QUnit.test("Distance properties 3", function(assert)
{
   const distanceKey = Distance.THREE;
   const properties = Distance.properties[distanceKey];
   assert.equal(properties.name, "3");
   assert.equal(properties.minDistance, 126);
   assert.equal(properties.maxDistance, 185);
   assert.equal(properties.key, distanceKey);
});

QUnit.test("Distance properties 4", function(assert)
{
   const distanceKey = Distance.FOUR;
   const properties = Distance.properties[distanceKey];
   assert.equal(properties.name, "4");
   assert.equal(properties.minDistance, 186);
   assert.equal(properties.maxDistance, 245);
   assert.equal(properties.key, distanceKey);
});

QUnit.test("Distance properties 5", function(assert)
{
   const distanceKey = Distance.FIVE;
   const properties = Distance.properties[distanceKey];
   assert.equal(properties.name, "5");
   assert.equal(properties.minDistance, 246);
   assert.equal(properties.maxDistance, 305);
   assert.equal(properties.key, distanceKey);
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, Distance);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, Distance, 5, Distance.ONE, Distance.FIVE);
});

const DistanceTest = {};
export default DistanceTest;