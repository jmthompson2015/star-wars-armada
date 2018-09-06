import EnumUtilities from "./EnumUtilities.js";
import Faction from "./Faction.js";

QUnit.module("EnumUtilities");

QUnit.test("findByName() Faction Galactic Empire", assert => {
  // Setup.
  const name = "Galactic Empire";

  // Run.
  const result = EnumUtilities.findByName(name, Faction);

  // Verify.
  assert.ok(result);
  assert.equal(result.name, name);
  assert.equal(result.key, Faction.GALACTIC_EMPIRE);
});

QUnit.test("findByProp() Faction color red", assert => {
  // Setup.
  const color = "#FF0000";

  // Run.
  const result = EnumUtilities.findByProp("color", color, Faction);

  // Verify.
  assert.ok(result);
  assert.equal(result.color, color);
  assert.equal(result.key, Faction.REBEL_ALLIANCE);
});

QUnit.test("findByProp() Faction name Galactic Empire", assert => {
  // Setup.
  const name = "Galactic Empire";

  // Run.
  const result = EnumUtilities.findByProp("name", name, Faction);

  // Verify.
  assert.ok(result);
  assert.equal(result.name, name);
  assert.equal(result.key, Faction.GALACTIC_EMPIRE);
});

QUnit.test("keys() Faction", assert => {
  // Run.
  const result = EnumUtilities.keys(Faction);

  // Verify.
  const length = 2;
  assert.ok(result);
  assert.equal(result.length, length);
  assert.equal(result[0], Faction.GALACTIC_EMPIRE);
  assert.equal(result[length - 1], Faction.REBEL_ALLIANCE);
});

QUnit.test("values() Faction", assert => {
  // Run.
  const result = EnumUtilities.values(Faction);

  // Verify.
  const length = 2;
  assert.ok(result);
  assert.equal(result.length, length);
  assert.equal(result[0], Faction.properties[Faction.GALACTIC_EMPIRE]);
  assert.equal(result[length - 1], Faction.properties[Faction.REBEL_ALLIANCE]);
});

const EnumUtilitiesTest = {};
export default EnumUtilitiesTest;
