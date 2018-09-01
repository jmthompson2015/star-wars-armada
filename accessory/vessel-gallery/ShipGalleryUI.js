import ShipUI from "./ShipUI.js";

const { Selector } = AA;
const { PositionState } = AS;
const { Endpoint, ReactUtilities: ReactUtils } = AV;

class ShipGalleryUI extends React.PureComponent {
  render() {
    const { shipCards } = this.props;

    let id = 1;
    const mapFunction = shipCard => {
      const canvasId = shipCard.key + id;
      const shipBase = Selector.shipBaseValueByShip(shipCard.key);
      const position = PositionState.create({
        x: shipBase.width / 2,
        y: shipBase.height / 2,
        heading: 0
      });
      const shipUI = React.createElement(ShipUI, {
        canvasId,
        position,
        resourceBase: Endpoint.ARMADA_IMAGES,
        shipBase,
        shipCard
      });
      id += 1;

      return ReactUtils.createCell(shipUI, canvasId, "pa1");
    };

    const cells = R.map(mapFunction, shipCards);

    return ReactUtils.createFlexboxWrap(cells);
  }
}

ShipGalleryUI.propTypes = {
  shipCards: PropTypes.arrayOf().isRequired
};

export default ShipGalleryUI;
