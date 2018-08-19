import DefenseTokenState from "./DefenseTokenState.js";

QUnit.module("DefenseTokenState");

const PROPS = [
  "id",
  "defenseTokenKey",
  "isReady"
];

QUnit.test("create()", function(assert)
{
   // Run.
   const damage = createTestData();

   // Verify.
   PROPS.forEach((prop, i) =>
   {
      assert.equal(damage[prop], i + 1);
   });
});

QUnit.test("create() immutable", function(assert)
{
   // Setup.
   const damage = createTestData();

   // Run / Verify.
   try
   {
      damage.id = 12;
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

   return DefenseTokenState.create(
   {
      id: i++,
      defenseTokenKey: i++,
      isReady: i++
   });
}

const DefenseTokenStateTest = {};
export default DefenseTokenStateTest;