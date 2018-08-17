const DiceValue = AA.DiceValue;

const DiceUtilities = {};

DiceUtilities.rollDice = (
{
   black = 0,
   blue = 0,
   red = 0
}) =>
{
   // const answer = {};
   //
   // answer.black = myRollDice(rollRandomBlackValue)(black);
   // answer.blue = myRollDice(rollRandomBlueValue)(blue);
   // answer.red = myRollDice(rollRandomRedValue)(red);
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
   let value;

   // There are 4x hit, 2x (hit + critical hit), and 2x blank.
   switch (roll)
   {
      case 1:
      case 4:
      case 7:
      case 8:
         value = DiceValue.HIT;
         break;
      case 2:
      case 5:
         value = DiceValue.HIT_CRITICAL_HIT;
         break;
      case 3:
      case 6:
         value = DiceValue.BLANK;
         break;
      default:
         throw "Unsupported roll: " + roll;
   }

   return {
      color: "black",
      dieKey: value
   };
};

const rollRandomBlueValue = () =>
{
   const min = 1;
   const max = 8;
   const roll = Math.floor(Math.random() * (max - min + 1)) + min;
   let value;

   // There are 4x hit, 2x critical hit, and 2x accuracy.
   switch (roll)
   {
      case 1:
      case 4:
      case 7:
      case 8:
         value = DiceValue.HIT;
         break;
      case 2:
      case 5:
         value = DiceValue.CRITICAL_HIT;
         break;
      case 3:
      case 6:
         value = DiceValue.ACCURACY;
         break;
      default:
         throw "Unsupported roll: " + roll;
   }

   return {
      color: "blue",
      dieKey: value
   };
};

const rollRandomRedValue = () =>
{
   const min = 1;
   const max = 8;
   const roll = Math.floor(Math.random() * (max - min + 1)) + min;
   let value;

   // There are 2x hit, 1x double hit, 2x critical hit, 1x accuracy, and 2x blank.
   switch (roll)
   {
      case 1:
      case 6:
         value = DiceValue.HIT;
         break;
      case 2:
         value = DiceValue.HIT_HIT;
         break;
      case 3:
      case 7:
         value = DiceValue.CRITICAL_HIT;
         break;
      case 4:
         value = DiceValue.ACCURACY;
         break;
      case 5:
      case 8:
         value = DiceValue.BLANK;
         break;
      default:
         throw "Unsupported roll: " + roll;
   }

   return {
      color: "red",
      dieKey: value
   };
};

Object.freeze(DiceUtilities);

export default DiceUtilities;