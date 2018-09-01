import SquadronUI from "./SquadronUI.js";

const { PositionState } = AS;
const { Endpoint, ReactUtilities: ReactUtils } = AV;

class SquadronGalleryUI extends React.PureComponent {
  render() {
    const { squadronCards } = this.props;

    let id = 1;
    const mapFunction = squadronCard => {
      const canvasId = squadronCard.key + id;
      const position = PositionState.create({
        x: 35 / 2,
        y: 35 / 2,
        heading: 0
      });
      const squadronUI = React.createElement(SquadronUI, {
        canvasId,
        position,
        resourceBase: Endpoint.ARMADA_IMAGES,
        squadronCard
      });
      id += 1;

      return ReactUtils.createCell(squadronUI, canvasId, "pa1");
    };

    const cells = R.map(mapFunction, squadronCards);

    return ReactUtils.createFlexboxWrap(cells);
  }
}

SquadronGalleryUI.propTypes = {
  squadronCards: PropTypes.arrayOf().isRequired
};

export default SquadronGalleryUI;
