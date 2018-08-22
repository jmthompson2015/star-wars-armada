import ShipState from "./ShipState.js";

QUnit.module("ShipState");

const PROPS = [
  "id",
  "shipKey",
  "speed",

  "position",
  "tokenCounts",

  "commands",
  "criticals",
  "damages",
  "defenseTokens",
  "upgrades"
];

QUnit.test("create()", function(assert)
{
   // Run.
   const pilot = createTestState();

   // Verify.
   PROPS.forEach((prop, i) =>
   {
      assert.equal(pilot[prop], i + 1);
   });
});

QUnit.test("create() immutable", function(assert)
{
   // Setup.
   const pilot = createTestState();

   // Run / Verify.
   try
   {
      pilot.id = 12;
      assert.ok(false, "Should have thrown an exception");
   }
   catch (e)
   {
      assert.ok(true);
   }
});

function createTestState()
{
   let i = 1;

   return ShipState.create(
   {
      id: i++,
      shipKey: i++,
      speed: i++,

      position: i++,
      tokenCounts: i++,

      commands: i++,
      criticals: i++,
      damages: i++,
      defenseTokens: i++,
      upgrades: i++
   });
}

const ShipStateTest = {};
export default ShipStateTest;