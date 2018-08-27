import ReactUtilities from '../ReactUtilities.js';

import CardImage from './CardImage.js';
import CardInstancesArea from './CardInstancesArea.js';
import TokenPanel from './TokenPanel.js';

const determineCard = cardInstance => {
  let answer;

  if (cardInstance.shipKey !== undefined) {
    answer = AA.Selector.shipCard(cardInstance.shipKey);
  } else if (cardInstance.squadronKey !== undefined) {
    answer = AA.Selector.squadronCard(cardInstance.squadronKey);
  } else if (cardInstance.upgradeKey !== undefined) {
    answer = AA.Selector.upgradeCard(cardInstance.upgradeKey);
  } else if (cardInstance.damageKey !== undefined) {
    answer = AA.Selector.damageCard(cardInstance.damageKey);
  }

  return answer;
};

class CardInstanceUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSmall: true,
    };

    this.toggleSize = this.toggleSizeFunction.bind(this);
  }

  createAttachmentPanel(cells) {
    const { damageInstances, upgradeInstances } = this.props;

    const attachments = [];

    if (upgradeInstances.length > 0) {
      for (let i = 0; i < upgradeInstances.length; i += 1) {
        const upgradeInstance = upgradeInstances[i];
        const upgradeUI = this.createAttachmentUI(upgradeInstance);
        attachments.push(upgradeUI);
      }
    }

    if (damageInstances.length > 0) {
      for (let j = 0; j < damageInstances.length; j += 1) {
        const damageInstance = damageInstances[j];
        const damageUI = this.createAttachmentUI(damageInstance);
        attachments.push(damageUI);
      }
    }

    cells.push(
      React.createElement(CardInstancesArea, {
        key: 'attachmentPanel',
        cardInstanceUIs: attachments,
        isExpanded: false,
      }),
    );
  }

  createAttachmentUI(cardInstance) {
    const { width } = this.props;

    return React.createElement(CardInstanceUI, {
      key: `attachment${cardInstance.id}`,
      cardInstance,
      width: width / 1.4,
    });
  }

  createCardImage(cardInstance, myKey) {
    let { width } = this.props;
    const { isSmall } = this.state;

    if (isSmall) {
      width /= 2;
    }
    const card = determineCard(cardInstance);

    return React.createElement(CardImage, {
      card,
      myKey,
      width,
    });
  }

  createTokenPanel(cardId) {
    const { defenseInstances, tokenCounts } = this.props;

    const props = {
      key: `token${cardId}`,
      defenseInstances,
      tokenCounts,
    };

    return React.createElement(TokenPanel, props);
  }

  toggleSizeFunction() {
    const { isSmall: isSmallOld } = this.state;

    this.setState({
      isSmall: !isSmallOld,
    });
  }

  render() {
    const cells = [];
    const { cardInstance } = this.props;
    let myKey = 'cardInstanceUI';

    if (cardInstance) {
      const card = determineCard(cardInstance);
      myKey += cardInstance.id + card.key;
      const image = this.createCardImage(cardInstance, myKey);
      const tokenPanel = this.createTokenPanel(cardInstance.id);
      const cell = ReactDOMFactories.div(
        {
          key: `imagePanel${cells.length}`,
          className: 'v-mid',
          onClick: this.toggleSize,
        },
        image,
      );

      cells.push(cell);
      cells.push(tokenPanel);
      this.createAttachmentPanel(cells);
    }

    return ReactUtilities.createFlexboxWrap(
      cells,
      myKey,
      'bg-xw-medium items-center justify-center ma0 pa0',
    );
  }
}

CardInstanceUI.propTypes = {
  cardInstance: PropTypes.shape(),
  damageInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.DamageState)),
  defenseInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.DefenseTokenState)),
  tokenCounts: PropTypes.shape(),
  upgradeInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.UpgradeState)),
  width: PropTypes.number,
};

CardInstanceUI.defaultProps = {
  cardInstance: undefined,
  damageInstances: [],
  defenseInstances: [],
  tokenCounts: {},
  upgradeInstances: [],
  width: 250,
};

export default CardInstanceUI;
