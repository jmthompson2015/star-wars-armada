import EnumTest from "./Enum.test.js";
import UpgradeSlot from "./UpgradeSlot.js";

QUnit.module("UpgradeSlot");

QUnit.test("UpgradeSlot properties Commander", function(assert)
{
   const typeKey = UpgradeSlot.COMMANDER;
   const properties = UpgradeSlot.properties[typeKey];
   assert.equal(properties.name, "Commander");
   assert.equal(properties.image, "upgrade-slot/commander.png");
   assert.equal(properties.key, "commander");
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, UpgradeSlot);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, UpgradeSlot, 13, UpgradeSlot.COMMANDER, UpgradeSlot.WEAPONS_TEAM_OFFENSIVE_RETROFIT);
});

const UpgradeTypeTest = {};
export default UpgradeTypeTest;