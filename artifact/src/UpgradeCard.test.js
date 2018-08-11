import EnumTest from "./Enum.test.js";
import EnumUtilities from "./EnumUtilities.js";
import UpgradeCard from "./UpgradeCard.js";

QUnit.module("UpgradeCard");

QUnit.test("UpgradeCard properties Assault Concussion Missiles", function(assert)
{
   const upgrade = UpgradeCard.ASSAULT_CONCUSSION_MISSILES;
   const properties = UpgradeCard.properties[upgrade];
   assert.equal(properties.name, "Assault Concussion Missiles");
   assert.equal(properties.slot, "Ordnance");
   assert.equal(properties.points, 7);
   assert.equal(properties.key, "assaultConcussionMissiles");
});

QUnit.test("UpgradeCard properties Wulff Yularen", function(assert)
{
   const upgrade = UpgradeCard.WULFF_YULAREN;
   const properties = UpgradeCard.properties[upgrade];
   assert.equal(properties.name, "Wulff Yularen");
   assert.equal(properties.slot, "Officer");
   assert.equal(properties.points, 7);
   assert.equal(properties.key, "wulffYularen");
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, UpgradeCard);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, UpgradeCard, 18, UpgradeCard.ASSAULT_CONCUSSION_MISSILES, UpgradeCard.WULFF_YULAREN);
});

const UpgradeTypeTest = {};
export default UpgradeTypeTest;