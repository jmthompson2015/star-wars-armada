const { ReactUtilities: ReactUtils, ShipImage } = AV;

const { Selector } = AA;

const shipNameMap = {
  "Assault Frigate Mark II A": "Assault Frigate Mark II",
  "CR90 Corvette A": "CR90 Corvette",
  "Gozanti-class Assault Carriers": "Gozanti-class Carriers",
  "Imperial I-class Star Destroyer": "Imperial-class Star Destroyer",
  "Imperial Star Destroyer Kuat Refit": "Star Destroyer <i>Chimaera</i>",
  "Interdictor Combat Refit": "Interdictor",
  "MC30c Scout Frigate": "MC30c Frigate",
  "MC75 Armored Cruiser": "MC75 Cruiser",
  "MC80 Assault Cruiser": "MC80 Cruiser",
  "MC80 Battle Cruiser": "MC80 Liberty-class Cruiser",
  "Nebulon-B Escort Frigate": "Nebulon-B Frigate",
  "Victory I-class Star Destroyer": "Victory-class Star Destroyer"
};

const determineShipName = shipCard => {
  const replacement = shipNameMap[shipCard.name];

  return replacement || shipCard.name;
};

class ShipUI extends React.PureComponent {
  constructor(props) {
    super(props);

    const { resourceBase, shipCard } = this.props;
    const image = new Image();
    image.onload = () => {
      const { isImageLoaded } = this.state;
      if (!isImageLoaded) {
        this.setState({
          isImageLoaded: true
        });
      }
    };

    image.src = `${resourceBase}${shipCard["ship-image"]}`;

    this.state = {
      image,
      isImageLoaded: false
    };
  }

  componentDidMount() {
    this.paint();
  }

  componentDidUpdate() {
    this.paint();
  }

  paint() {
    const { canvasId, position, shipBase, shipCard } = this.props;
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext("2d");
    const scale = 1.0;
    let id;
    const { image } = this.state;
    const faction = Selector.factionValueByShip(shipCard.key);
    const factionColor = faction.color;

    context.clearRect(0, 0, shipBase.width, shipBase.height);

    ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
  }

  render() {
    const { canvasId, shipBase, shipCard } = this.props;

    const canvas = ReactDOMFactories.canvas({
      id: canvasId,
      width: shipBase.width,
      height: shipBase.height,
      title: shipCard.name
    });

    const shipName = determineShipName(shipCard);
    const label = ReactDOMFactories.span({
      dangerouslySetInnerHTML: { __html: shipName }
    });

    const rows = [
      ReactUtils.createRow(ReactUtils.createCell(canvas, "shipUICanvas", "pa1"), "shipUICanvasRow"),
      ReactUtils.createRow(
        ReactUtils.createCell(label, "shipUILabel", "bg-white f6 pa1 tc"),
        "shipUILabelRow"
      )
    ];

    return ReactUtils.createTable(rows, "shipUITable", "ba b--white bg-black center tc");
  }
}

ShipUI.propTypes = {
  canvasId: PropTypes.string.isRequired,
  position: PropTypes.shape().isRequired,
  resourceBase: PropTypes.string.isRequired,
  shipBase: PropTypes.shape().isRequired,
  shipCard: PropTypes.shape().isRequired
};

export default ShipUI;
