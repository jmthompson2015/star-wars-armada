import EnumTest from "./Enum.test.js";
import ShipBase from "./ShipBase.js";

QUnit.module("ShipBase");

QUnit.test("ShipBase properties Large", function(assert)
{
   const shipBase = ShipBase.LARGE;
   const properties = ShipBase.properties[shipBase];
   assert.equal(properties.width, 79);
   assert.equal(properties.height, 131);
   assert.equal(properties.key, shipBase);
});

QUnit.test("ShipBase properties Medium", function(assert)
{
   const shipBase = ShipBase.MEDIUM;
   const properties = ShipBase.properties[shipBase];
   assert.equal(properties.width, 64);
   assert.equal(properties.height, 104);
   assert.equal(properties.key, shipBase);
});

QUnit.test("ShipBase properties Small", function(assert)
{
   const shipBase = ShipBase.SMALL;
   const properties = ShipBase.properties[shipBase];
   assert.equal(properties.width, 44);
   assert.equal(properties.height, 73);
   assert.equal(properties.key, shipBase);
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, ShipBase);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, ShipBase, 3, ShipBase.LARGE, ShipBase.SMALL);
});

const ShipBaseTest = {};
export default ShipBaseTest;