import TokenCountsState from "./TokenCountsState.js";

QUnit.module("TokenCountsState");

const PROPS = [
  "concentrateFire",
  "navigate",
  "repair",
  "squadron"
];

QUnit.test("create()", function(assert)
{
   // Setup.

   // Run.
   const tokenCount = createTestState();

   // Verify.
   PROPS.forEach((prop, i) =>
   {
      assert.equal(tokenCount[prop], i + 1);
   });
});

QUnit.test("create() Default", function(assert)
{
   // Setup.
   const tokenCount = TokenCountsState.create();

   // Verify.
   PROPS.forEach(prop =>
   {
      assert.equal(tokenCount[prop], undefined);
   });
});

QUnit.test("create() immutable", function(assert)
{
   // Setup.
   const tokenCount = createTestState();

   // Run / Verify.
   try
   {
      tokenCount.ion = 12;
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

   return TokenCountsState.create(
   {
      concentrateFire: i++,
      navigate: i++,
      repair: i++,
      squadron: i++
   });
}

const TokenCountsStateTest = {};
export default TokenCountsStateTest;