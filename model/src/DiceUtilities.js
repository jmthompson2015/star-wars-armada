const DiceValue = AA.DiceValue;

const DiceUtilities = {};

DiceUtilities.rollDice = (
{
   black = 0,
   blue = 0,
   red = 0
}) =>
{
   let answer = [];

   answer = R.concat(answer, myRollDice(rollRandomBlackValue)(black));
   answer = R.concat(answer, myRollDice(rollRandomBlueValue)(blue));
   answer = R.concat(answer, myRollDice(rollRandomRedValue)(red));

   return answer;
};

////////////////////////////////////////////////////////////////////////////////
const myRollDice = valueFunction => count =>
{
   const answer = [];

   for (let i = 0; i < count; i++)
   {
      answer.push(valueFunction());
   }

   return Immutable(answer);
};

const rollRandomBlackValue = () =>
{
   const min = 1;
   const max = 8;
   const roll = Math.floor(Math.random() * (max - min + 1)) + min;
   let answer;

   // There are 4x hit, 2x (hit + critical hit), and 2x blank.
   switch (roll)
   {
      case 1:
      case 4:
      case 7:
      case 8:
         answer = DiceValue.BLACK_HIT;
         break;
      case 2:
      case 5:
         answer = DiceValue.BLACK_HIT_CRITICAL;
         break;
      case 3:
      case 6:
         answer = DiceValue.BLACK_BLANK;
         break;
      default:
         throw "Unsupported roll: " + roll;
   }

   return answer;
};

const rollRandomBlueValue = () =>
{
   const min = 1;
   const max = 8;
   const roll = Math.floor(Math.random() * (max - min + 1)) + min;
   let answer;

   // There are 4x hit, 2x critical hit, and 2x accuracy.
   switch (roll)
   {
      case 1:
      case 4:
      case 7:
      case 8:
         answer = DiceValue.BLUE_HIT;
         break;
      case 2:
      case 5:
         answer = DiceValue.BLUE_CRITICAL;
         break;
      case 3:
      case 6:
         answer = DiceValue.BLUE_ACCURACY;
         break;
      default:
         throw "Unsupported roll: " + roll;
   }

   return answer;
};

const rollRandomRedValue = () =>
{
   const min = 1;
   const max = 8;
   const roll = Math.floor(Math.random() * (max - min + 1)) + min;
   let answer;

   // There are 2x hit, 1x double hit, 2x critical hit, 1x accuracy, and 2x blank.
   switch (roll)
   {
      case 1:
      case 6:
         answer = DiceValue.RED_HIT;
         break;
      case 2:
         answer = DiceValue.RED_HIT_HIT;
         break;
      case 3:
      case 7:
         answer = DiceValue.RED_CRITICAL;
         break;
      case 4:
         answer = DiceValue.RED_ACCURACY;
         break;
      case 5:
      case 8:
         answer = DiceValue.RED_BLANK;
         break;
      default:
         throw "Unsupported roll: " + roll;
   }

   return answer;
};

Object.freeze(DiceUtilities);

export default DiceUtilities;