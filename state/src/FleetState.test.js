import FleetState from "./FleetState.js";

QUnit.module("FleetState");

const PROPS = ["id", "name", "year", "description", "author", "points", "ships", "squadrons"];

const createTestData = () =>
  FleetState.create({
    id: 1,
    name: 2,
    year: 3,
    description: 4,
    author: 5,
    points: 6,
    ships: 7,
    squadrons: 8
  });

QUnit.test("create()", assert => {
  // Run.
  const squad = createTestData();

  // Verify.
  PROPS.forEach((prop, i) => {
    assert.equal(squad[prop], i + 1);
  });
});

QUnit.test("create() immutable", assert => {
  // Setup.
  const squad = createTestData();

  // Run / Verify.
  try {
    squad.faction = 12;
    assert.ok(false, "Should have thrown an exception");
  } catch (e) {
    assert.ok(true);
  }
});

const FleetStateTest = {};
export default FleetStateTest;
