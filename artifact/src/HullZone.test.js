import EnumTest from "./Enum.test.js";
import HullZone from "./HullZone.js";

QUnit.module("HullZone");

QUnit.test("HullZone properties front", function(assert)
{
   const faction = HullZone.FRONT;
   const properties = HullZone.properties[faction];
   assert.equal(properties.name, "front");
   assert.equal(properties.key, "front");
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, HullZone);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, HullZone, 4, HullZone.FRONT, HullZone.RIGHT);
});

const HullZoneTest = {};
export default HullZoneTest;