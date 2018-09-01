const { ReactUtilities: ReactUtils } = AV;

const determineShipName = shipCard => {
  let shipName = shipCard.name;

  shipName = shipName.replace("Imperial Star Destroyer Kuat Refit", "Star Destroyer Chimaera");
  shipName = shipName.replace(" Armored", "");
  shipName = shipName.replace(" Assault", "");
  shipName = shipName.replace(" Battle", " Liberty-class");
  shipName = shipName.replace(" Combat Refit", "");
  shipName = shipName.replace(" Escort", "");
  shipName = shipName.replace(" I-class", "-class");
  shipName = shipName.replace(" Scout", "");

  if (shipName.endsWith(" A")) {
    shipName = shipName.substring(0, shipName.length - 2);
  }

  return shipName;
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
    const faction = AA.Selector.factionValueByShip(shipCard.key);
    const factionColor = faction.color;

    context.clearRect(0, 0, shipBase.width, shipBase.height);

    AV.ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
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
    const label = ReactDOMFactories.span({}, shipName);

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
