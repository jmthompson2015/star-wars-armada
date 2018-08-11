import DiceUtils from "./DiceUtilities.js";

const DiceValue = AA.DiceValue;

QUnit.module("DiceUtilities");

QUnit.test("rollDice()", function(assert)
{
   // Setup.

   // Run.
   const result = DiceUtils.rollDice(
   {
      black: 1,
      blue: 2,
      red: 3
   });

   // Verify.
   assert.ok(result);
   assert.equal(Object.keys(result).length, 3);
   const count = R.reduce((accum, value) => accum += value.length, 0, Object.values(result));
   assert.equal(count, 1 + 2 + 3);
   verifyBlackDice(assert, 1, result.black);
   verifyBlueDice(assert, 2, result.blue);
   verifyRedDice(assert, 3, result.red);
});

QUnit.test("rollDice() black", function(assert)
{
   // Setup.
   const count = 3;

   // Run.
   const result = DiceUtils.rollDice(
   {
      black: count
   });

   // Verify.
   assert.ok(result);
   assert.equal(Object.keys(result).length, 3);
   verifyBlackDice(assert, 3, result.black);
   verifyBlueDice(assert, 0, result.blue);
   verifyRedDice(assert, 0, result.red);
});

QUnit.test("rollDice() blue", function(assert)
{
   // Setup.
   const count = 3;

   // Run.
   const result = DiceUtils.rollDice(
   {
      blue: count
   });

   // Verify.
   assert.ok(result);
   assert.equal(Object.keys(result).length, 3);
   verifyBlackDice(assert, 0, result.black);
   verifyBlueDice(assert, 3, result.blue);
   verifyRedDice(assert, 0, result.red);
});

QUnit.test("rollDice() red", function(assert)
{
   // Setup.
   const count = 3;

   // Run.
   const result = DiceUtils.rollDice(
   {
      red: count
   });

   // Verify.
   assert.ok(result);
   assert.equal(Object.keys(result).length, 3);
   verifyBlackDice(assert, 0, result.black);
   verifyBlueDice(assert, 0, result.blue);
   verifyRedDice(assert, 3, result.red);
});

////////////////////////////////////////////////////////////////////////////////
const verifyBlackDice = (assert, count, diceKeys) =>
{
   assert.equal(diceKeys.length, count);

   const blackDiceKeys = [DiceValue.HIT, DiceValue.HIT_CRITICAL_HIT, DiceValue.BLANK];

   for (let i = 0; i < count; i++)
   {
      assert.equal(blackDiceKeys.includes(diceKeys[i]), true, diceKeys[i]);
   }
};

const verifyBlueDice = (assert, count, diceKeys) =>
{
   assert.equal(diceKeys.length, count);

   const blueDiceKeys = [DiceValue.HIT, DiceValue.CRITICAL_HIT, DiceValue.ACCURACY];

   for (let i = 0; i < count; i++)
   {
      assert.equal(blueDiceKeys.includes(diceKeys[i]), true, diceKeys[i]);
   }
};

const verifyRedDice = (assert, count, diceKeys) =>
{
   assert.equal(diceKeys.length, count);

   const redDiceKeys = [DiceValue.HIT, DiceValue.HIT_HIT, DiceValue.CRITICAL_HIT, DiceValue.ACCURACY, DiceValue.BLANK];

   for (let i = 0; i < count; i++)
   {
      assert.equal(redDiceKeys.includes(diceKeys[i]), true, diceKeys[i]);
   }
};

const DiceUtilitiesTest = {};
export default DiceUtilitiesTest;