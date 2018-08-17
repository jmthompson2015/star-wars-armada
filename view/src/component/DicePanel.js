import Endpoint from "../Endpoint.js";
import ReactUtils from "../ReactUtilities.js";

class DicePanel extends React.Component
{
   render()
   {
      const dice = this.props.dice;
      const sortedDice = R.sort(comparator, dice);
      let count = 0;
      const mapFunction = diceKey => ReactUtils.createCell(createImage(diceKey), count++);
      const cells = R.map(mapFunction, sortedDice);
      const row = ReactUtils.createRow(cells);

      return ReactUtils.createTable(row, undefined, "bg-white center");
   }
}

const createImage = function(die)
{
   const dieName = R.cond([
     [R.equals("hitHit"), R.always("hit-hit")], // hit + hit
     [R.equals("hitCriticalHit"), R.always("hit-critical-hit")], // hit + critical hit
     [R.equals("criticalHit"), R.always("critical-hit")], // critical hit
     [R.T, R.identity]
   ])(die.dieKey);
   const source = Endpoint.ARMADA_IMAGES + `dice/${die.color}-${dieName}.png`;

   return ReactUtils.createImg(source, undefined, undefined,
   {
      width: 48
   });
};

const comparator = (a, b) =>
{
   const dieValueA = AA.Selector.diceValue(a.dieKey);
   const dieValueB = AA.Selector.diceValue(b.dieKey);

   let answer = dieValueA.sortOrder - dieValueB.sortOrder;

   if (answer === 0)
   {
      const colorA = a.color;
      const colorB = b.color;

      if (colorA > colorB)
      {
         answer = 1;
      }
      else if (colorA < colorB)
      {
         answer = -1;
      }
   }

   return answer;
};

DicePanel.propTypes = {
   dice: PropTypes.object
};

DicePanel.defaultProps = {
   dice: []
};

export default DicePanel;