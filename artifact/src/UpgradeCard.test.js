import EnumTest from "./Enum.test.js";
import UpgradeCard from "./UpgradeCard.js";

QUnit.module("UpgradeCard");

QUnit.test("UpgradeCard properties Assault Concussion Missiles", assert => {
  const upgrade = UpgradeCard.ASSAULT_CONCUSSION_MISSILES;
  const properties = UpgradeCard.properties[upgrade];
  assert.equal(properties.name, "Assault Concussion Missiles");
  assert.equal(properties.slots[0], "Ordnance");
  assert.equal(properties.points, 7);
  assert.equal(properties.key, "assaultConcussionMissiles");
});

QUnit.test("UpgradeCard properties Wulff Yularen", assert => {
  const upgrade = UpgradeCard.WULFF_YULAREN;
  const properties = UpgradeCard.properties[upgrade];
  assert.equal(properties.name, "Wulff Yularen");
  assert.equal(properties.slots[0], "Officer");
  assert.equal(properties.points, 7);
  assert.equal(properties.key, "wulffYularen");
});

QUnit.test("keys and values", assert => {
  EnumTest.keysAndValues(assert, UpgradeCard);
});

QUnit.test("keys()", assert => {
  EnumTest.keys(assert, UpgradeCard, 178, UpgradeCard.ADAR_TALLON, UpgradeCard.YAVARIS);
});

const UpgradeTypeTest = {};
export default UpgradeTypeTest;
