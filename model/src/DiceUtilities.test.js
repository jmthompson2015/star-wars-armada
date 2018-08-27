import DiceUtils from './DiceUtilities.js';

const { DiceValue } = AA;

QUnit.module('DiceUtilities');

const verifyBlackDice = (assert, count, dice) => {
  assert.equal(dice.length, count);

  const blackDiceKeys = [DiceValue.BLACK_HIT, DiceValue.BLACK_HIT_CRITICAL, DiceValue.BLACK_BLANK];

  for (let i = 0; i < count; i += 1) {
    assert.equal(blackDiceKeys.includes(dice[i]), true, dice[i]);
  }
};

const verifyBlueDice = (assert, count, dice) => {
  assert.equal(dice.length, count);

  const blueDiceKeys = [DiceValue.BLUE_HIT, DiceValue.BLUE_CRITICAL, DiceValue.BLUE_ACCURACY];

  for (let i = 0; i < count; i += 1) {
    assert.equal(blueDiceKeys.includes(dice[i]), true, dice[i]);
  }
};

const verifyRedDice = (assert, count, dice) => {
  assert.equal(dice.length, count);

  const redDiceKeys = [
    DiceValue.RED_HIT_HIT,
    DiceValue.RED_HIT,
    DiceValue.RED_CRITICAL,
    DiceValue.RED_ACCURACY,
    DiceValue.RED_BLANK,
  ];

  for (let i = 0; i < count; i += 1) {
    assert.equal(redDiceKeys.includes(dice[i]), true, dice[i]);
  }
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
QUnit.test('rollDice()', assert => {
  // Run.
  const result = DiceUtils.rollDice({
    black: 1,
    blue: 2,
    red: 3,
  });

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 1 + 2 + 3);
  verifyBlackDice(assert, 1, result.filter(key => AA.Selector.diceValue(key).color === 'black'));
  verifyBlueDice(assert, 2, result.filter(key => AA.Selector.diceValue(key).color === 'blue'));
  verifyRedDice(assert, 3, result.filter(key => AA.Selector.diceValue(key).color === 'red'));
});

QUnit.test('rollDice() black', assert => {
  // Run.
  const result = DiceUtils.rollDice({
    black: 3,
  });

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 3);
  verifyBlackDice(assert, 3, result.filter(key => AA.Selector.diceValue(key).color === 'black'));
  verifyBlueDice(assert, 0, result.filter(key => AA.Selector.diceValue(key).color === 'blue'));
  verifyRedDice(assert, 0, result.filter(key => AA.Selector.diceValue(key).color === 'red'));
});

QUnit.test('rollDice() blue', assert => {
  // Run.
  const result = DiceUtils.rollDice({
    blue: 3,
  });

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 3);
  verifyBlackDice(assert, 0, result.filter(key => AA.Selector.diceValue(key).color === 'black'));
  verifyBlueDice(assert, 3, result.filter(key => AA.Selector.diceValue(key).color === 'blue'));
  verifyRedDice(assert, 0, result.filter(key => AA.Selector.diceValue(key).color === 'red'));
});

QUnit.test('rollDice() red', assert => {
  // Run.
  const result = DiceUtils.rollDice({
    red: 3,
  });

  // Verify.
  assert.ok(result);
  assert.equal(result.length, 3);
  verifyBlackDice(assert, 0, result.filter(key => AA.Selector.diceValue(key).color === 'black'));
  verifyBlueDice(assert, 0, result.filter(key => AA.Selector.diceValue(key).color === 'blue'));
  verifyRedDice(assert, 3, result.filter(key => AA.Selector.diceValue(key).color === 'red'));
});

const DiceUtilitiesTest = {};
export default DiceUtilitiesTest;
