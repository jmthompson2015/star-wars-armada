import Endpoint from '../Endpoint.js';
import ReactUtils from '../ReactUtilities.js';

const comparator = (a, b) => {
  let answer = a.sortOrder - b.sortOrder;
  answer = answer === 0 && a.color > b.color ? 1 : answer;
  answer = answer === 0 && a.color < b.color ? -1 : answer;

  return answer;
};

const createImage = die => {
  const src = Endpoint.ARMADA_IMAGES + die.image;

  return ReactUtils.createImg(src, undefined, 'tc v-mid', {
    width: 48,
  });
};

class DicePanel extends React.PureComponent {
  render() {
    const { dice } = this.props;
    const sortedDice = R.sort(comparator, dice);
    let count = 0;
    const mapFunction = diceKey => {
      count += 1;
      return ReactUtils.createCell(createImage(diceKey), count);
    };
    const cells = R.map(mapFunction, sortedDice);
    const row = ReactUtils.createRow(cells);

    return ReactUtils.createTable(row, undefined, 'bg-white center v-mid');
  }
}

DicePanel.propTypes = {
  dice: PropTypes.arrayOf(PropTypes.instanceOf(AA.DiceValue)),
};

DicePanel.defaultProps = {
  dice: [],
};

export default DicePanel;
