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

      return ReactUtils.createTable(row, undefined, "bg-white center v-mid");
   }
}

const createImage = die =>
{
   const src = Endpoint.ARMADA_IMAGES + die.image;

   return ReactUtils.createImg(src, undefined, "tc v-mid",
   {
      width: 48
   });
};

const comparator = (a, b) =>
{
   let answer = a.sortOrder - b.sortOrder;
   answer = ((answer === 0 && a.color > b.color) ? 1 : answer);
   answer = ((answer === 0 && a.color < b.color) ? -1 : answer);

   return answer;
};

DicePanel.propTypes = {
   dice: PropTypes.array
};

DicePanel.defaultProps = {
   dice: []
};

export default DicePanel;