import EnumTest from "./Enum.test.js";
import ShipCard from "./ShipCard.js";

QUnit.module("ShipCard");

QUnit.test("ShipCard properties CR90 Corvette A", assert => {
  const faction = ShipCard.CR90_CORVETTE_A;
  const properties = ShipCard.properties[faction];
  assert.equal(properties.name, "CR90 Corvette A");
  assert.equal(properties.hull, 4);
  assert.equal(properties.key, "cr90CorvetteA");
});

QUnit.test("ShipCard properties Victory II-class Star Destroyer", assert => {
  const faction = ShipCard.VICTORY_II_CLASS_STAR_DESTROYER;
  const properties = ShipCard.properties[faction];
  assert.equal(properties.name, "Victory II-class Star Destroyer");
  assert.equal(properties.hull, 8);
  assert.equal(properties.key, "victoryIiClassStarDestroyer");
});

QUnit.test("keys and values", assert => {
  EnumTest.keysAndValues(assert, ShipCard);
});

QUnit.test("keys()", assert => {
  EnumTest.keys(
    assert,
    ShipCard,
    38,
    ShipCard.ARQUITENS_CLASS_COMMAND_CRUISER,
    ShipCard.VICTORY_II_CLASS_STAR_DESTROYER
  );
});

const ShipCardTest = {};
export default ShipCardTest;
