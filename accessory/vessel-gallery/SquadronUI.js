const { ReactUtilities: ReactUtils, SquadronImage } = AV;

const { Selector } = AA;

const squadronNameMap = {
  "Gar Saxon": "Mandalorian Gauntlet Fighter",
  '"Howlrunner"': "TIE Fighter Squadron",
  "Luke Skywalker": "X-wing Squadron"
};

const determineSquadronName = squadronCard => {
  const replacement = squadronNameMap[squadronCard.name];

  return replacement || squadronCard.name;
};

class SquadronUI extends React.PureComponent {
  constructor(props) {
    super(props);

    const { resourceBase, squadronCard } = this.props;
    const image = new Image();
    image.onload = () => {
      const { isImageLoaded } = this.state;
      if (!isImageLoaded) {
        this.setState({
          isImageLoaded: true
        });
      }
    };

    image.src = `${resourceBase}${squadronCard["squadron-image"]}`;

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
    const { canvasId, position, squadronCard } = this.props;
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext("2d");
    const scale = 1.0;
    let id;
    const { image } = this.state;
    const faction = Selector.factionValueBySquadron(squadronCard.key);
    const factionColor = faction.color;

    context.clearRect(0, 0, 35, 35);

    SquadronImage.draw(context, scale, id, image, position, factionColor);
  }

  render() {
    const { canvasId, squadronCard } = this.props;

    const canvas = ReactDOMFactories.canvas({
      id: canvasId,
      width: 35,
      height: 35,
      title: squadronCard.name
    });

    const squadronName = determineSquadronName(squadronCard);
    const label = ReactDOMFactories.span({}, squadronName);

    const rows = [
      ReactUtils.createRow(
        ReactUtils.createCell(canvas, "squadronUICanvas", "pa1"),
        "squadronUICanvasRow"
      ),
      ReactUtils.createRow(
        ReactUtils.createCell(label, "squadronUILabel", "bg-white f6 pa1 tc"),
        "squadronUILabelRow"
      )
    ];

    return ReactUtils.createTable(rows, "squadronUITable", "ba b--white bg-black center tc");
  }
}

SquadronUI.propTypes = {
  canvasId: PropTypes.string.isRequired,
  position: PropTypes.shape().isRequired,
  resourceBase: PropTypes.string.isRequired,
  squadronCard: PropTypes.shape().isRequired
};

export default SquadronUI;
