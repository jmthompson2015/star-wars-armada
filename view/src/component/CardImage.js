import Endpoint from '../Endpoint.js';

const computeHeight = (cardKey, widthIn) =>
  (widthIn * AA.Selector.heightByCard(cardKey)) / AA.Selector.widthByCard(cardKey);

const createShipBackSrc = cardKey => {
  const faction = AA.Selector.factionValueByShip(cardKey);
  const factionName = faction.name.toLowerCase().replace(/ /g, '-');

  return `ship-card/${factionName}/${factionName}-back.png`;
};

const createSquadronBackSrc = cardKey => {
  const faction = AA.Selector.factionValueBySquadron(cardKey);
  const factionName = faction.name.toLowerCase().replace(/ /g, '-');

  return `squadron-card/${factionName}/${factionName}-back.png`;
};

const createUpgradeBackSrc = cardKey => {
  const slotKey = AA.Selector.upgradeSlotKeysByUpgrade(cardKey)[0];
  const slot = AA.Selector.upgradeSlot(slotKey);
  const slotName = slot.name.toLowerCase().replace(/ /g, '-');

  return `upgrade-card/${slotName}/${slotName}-back.png`;
};

const determineCardBack = card0 =>
  R.cond([
    [AA.Selector.isDamageCard, R.always('damage-card/damage-back.png')],
    [AA.Selector.isShipCard, card => createShipBackSrc(card.key)],
    [AA.Selector.isSquadronCard, card => createSquadronBackSrc(card.key)],
    [AA.Selector.isUpgradeCard, card => createUpgradeBackSrc(card.key)],
  ])(card0);

const createSrc = (card, isFaceUp) =>
  R.ifElse(R.always(isFaceUp), R.prop('image'), determineCardBack)(card);

const determineFaceUpCardTitle = card =>
  R.ifElse(AA.Selector.isDamageCard, R.prop('title'), R.prop('name'))(card);

const determineFaceDownCardTitle = card =>
  R.cond([
    [AA.Selector.isDamageCard, R.always('Damage Card')],
    [AA.Selector.isShipCard, R.always('Ship Card')],
    [AA.Selector.isSquadronCard, R.always('Squadron Card')],
    [AA.Selector.isUpgradeCard, R.always('Upgrade Card')],
  ])(card);

const determineCardTitle = (card, isFaceUp) =>
  R.ifElse(R.always(isFaceUp), determineFaceUpCardTitle, determineFaceDownCardTitle)(card);

// /////////////////////////////////////////////////////////////////////////////////////////////////
class CardImage extends React.PureComponent {
  componentDidMount() {
    this.paint(this.props);
  }

  componentDidUpdate() {
    this.paint(this.props);
  }

  paint() {
    const { card, isFaceUp, isReady, resourceBase, slicing, width } = this.props;

    const canvas = document.getElementById(this.canvasId());
    const context = canvas.getContext('2d');
    const dWidth = width;
    const height = computeHeight(card.key, dWidth);
    const src = resourceBase + createSrc(card, isFaceUp);
    const image = new Image();
    image.onload = () => {
      if (slicing === undefined) {
        if (isReady) {
          context.drawImage(image, 0, 0, dWidth, height);
        } else {
          context.save();
          context.translate(height / 2.0, dWidth / 2.0);
          context.rotate(Math.PI / 2.0);
          context.drawImage(image, -dWidth / 2.0, -height / 2.0, dWidth, height);
          context.restore();
        }
      } else {
        const sWidth = image.naturalWidth;
        const sy = image.naturalHeight * (1.0 - slicing);
        const sHeight = image.naturalHeight * slicing;
        const dHeight = height * slicing;

        if (isReady) {
          context.drawImage(image, 0, sy, sWidth, sHeight, 0, 0, dWidth, dHeight);
        } else {
          context.save();
          context.translate(dHeight / 2.0, dWidth / 2.0);
          context.rotate(Math.PI / 2.0);
          context.drawImage(
            image,
            0,
            sy,
            sWidth,
            sHeight,
            -dWidth / 2.0,
            -dHeight / 2.0,
            dWidth,
            dHeight,
          );
          context.restore();
        }
      }
    };
    image.onerror = this.logLoadFailure;
    image.src = src;
  }

  canvasId() {
    const { card, isFaceUp, isReady, myKey, slicing } = this.props;

    return `CardImageCanvas${card.key}${isFaceUp}${isReady}${myKey}${slicing}`;
  }

  render() {
    const { card, isFaceUp, isReady, slicing, width } = this.props;

    const myCanvasId = this.canvasId();
    const height = computeHeight(card.key, width);
    const title = determineCardTitle(card, isFaceUp);
    let className;
    let canvasHeight;
    let canvasWidth;

    if (slicing === undefined) {
      className = 'br3';
      canvasWidth = isReady ? width : height;
      canvasHeight = isReady ? height : width;
    } else {
      canvasWidth = isReady ? width : height * slicing;
      canvasHeight = isReady ? height * slicing : width;
    }

    return ReactDOMFactories.canvas({
      key: myCanvasId,
      className,
      height: canvasHeight,
      id: myCanvasId,
      title,
      width: canvasWidth,
    });
  }
}

CardImage.propTypes = {
  card: PropTypes.shape({ key: PropTypes.string.isRequired }).isRequired,

  isFaceUp: PropTypes.bool,
  isReady: PropTypes.bool,
  myKey: PropTypes.string, // default: undefined
  resourceBase: PropTypes.string,
  slicing: PropTypes.number, // default: undefined
  width: PropTypes.number,
};

CardImage.defaultProps = {
  isFaceUp: true,
  isReady: true,
  myKey: '',
  resourceBase: Endpoint.ARMADA_IMAGES,
  slicing: undefined,
  width: 200,
};

export default CardImage;
