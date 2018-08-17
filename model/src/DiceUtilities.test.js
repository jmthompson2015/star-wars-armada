import DiceUtils from "./DiceUtilities.js";

const DiceValue = AA.DiceValue;

QUnit.module("DiceUtilities");

QUnit.test("rollDice()", function(assert)
{
   // Run.
   const result = DiceUtils.rollDice(
   {
      black: 1,
      blue: 2,
      red: 3
   });

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 1 + 2 + 3);
   verifyBlackDice(assert, 1, result.filter(die => die.color === "black"));
   verifyBlueDice(assert, 2, result.filter(die => die.color === "blue"));
   verifyRedDice(assert, 3, result.filter(die => die.color === "red"));
});

QUnit.test("rollDice() black", function(assert)
{
   // Run.
   const result = DiceUtils.rollDice(
   {
      black: 3
   });

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   verifyBlackDice(assert, 3, result.filter(die => die.color === "black"));
   verifyBlueDice(assert, 0, result.filter(die => die.color === "blue"));
   verifyRedDice(assert, 0, result.filter(die => die.color === "red"));
});

QUnit.test("rollDice() blue", function(assert)
{
   // Run.
   const result = DiceUtils.rollDice(
   {
      blue: 3
   });

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   verifyBlackDice(assert, 0, result.filter(die => die.color === "black"));
   verifyBlueDice(assert, 3, result.filter(die => die.color === "blue"));
   verifyRedDice(assert, 0, result.filter(die => die.color === "red"));
});

QUnit.test("rollDice() red", function(assert)
{
   // Run.
   const result = DiceUtils.rollDice(
   {
      red: 3
   });

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   verifyBlackDice(assert, 0, result.filter(die => die.color === "black"));
   verifyBlueDice(assert, 0, result.filter(die => die.color === "blue"));
   verifyRedDice(assert, 3, result.filter(die => die.color === "red"));
});

////////////////////////////////////////////////////////////////////////////////
const verifyBlackDice = (assert, count, dice) =>
{
   assert.equal(dice.length, count);

   const blackDiceKeys = [DiceValue.HIT, DiceValue.HIT_CRITICAL_HIT, DiceValue.BLANK];
   const diceKeys = dice.map(die => die.dieKey);

   for (let i = 0; i < count; i++)
   {
      assert.equal(blackDiceKeys.includes(diceKeys[i]), true, diceKeys[i]);
   }
};

const verifyBlueDice = (assert, count, dice) =>
{
   assert.equal(dice.length, count);

   const blueDiceKeys = [DiceValue.HIT, DiceValue.CRITICAL_HIT, DiceValue.ACCURACY];
   const diceKeys = dice.map(die => die.dieKey);

   for (let i = 0; i < count; i++)
   {
      assert.equal(blueDiceKeys.includes(diceKeys[i]), true, diceKeys[i]);
   }
};

const verifyRedDice = (assert, count, dice) =>
{
   assert.equal(dice.length, count);

   const redDiceKeys = [DiceValue.HIT, DiceValue.HIT_HIT, DiceValue.CRITICAL_HIT, DiceValue.ACCURACY, DiceValue.BLANK];
   const diceKeys = dice.map(die => die.dieKey);

   for (let i = 0; i < count; i++)
   {
      assert.equal(redDiceKeys.includes(diceKeys[i]), true, diceKeys[i]);
   }
};

const DiceUtilitiesTest = {};
export default DiceUtilitiesTest;