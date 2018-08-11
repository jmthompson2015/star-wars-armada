import FleetState from "./FleetState.js";

QUnit.module("FleetState");

const PROPS = ["id", "name", "year", "description", "points", "ships", "squadrons"];

QUnit.test("create()", function(assert)
{
   // Run.
   const squad = createTestData();

   // Verify.
   PROPS.forEach((prop, i) =>
   {
      assert.equal(squad[prop], i + 1);
   });
});

QUnit.test("create() immutable", function(assert)
{
   // Setup.
   const squad = createTestData();

   // Run / Verify.
   try
   {
      squad.faction = 12;
      assert.ok(false, "Should have thrown an exception");
   }
   catch (e)
   {
      assert.ok(true);
   }
});

function createTestData()
{
   let i = 1;

   return FleetState.create(
   {
      id: i++,
      name: i++,
      year: i++,
      description: i++,
      points: i++,
      ships: i++,
      squadrons: i++
   });
}

const FleetStateTest = {};
export default FleetStateTest;