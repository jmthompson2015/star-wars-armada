import Endpoint from '../Endpoint.js';

import ShipImage from './ShipImage.js';
import SquadronImage from './SquadronImage.js';

// const createExplosionImage = () => {
//   const image = new Image();
//   image.src = `${Endpoint.LOCAL_RESOURCE}ship/explosion.png`;
//
//   return image;
// };

const paintPathComponent = (path, context0, strokeStyle) => {
  if (path.length >= 2) {
    const context = context0;
    context.beginPath();
    context.moveTo(path[0], path[1]);

    for (let i = 2; i < path.length; i += 2) {
      context.lineTo(path[i], path[i + 1]);
    }

    context.strokeStyle = strokeStyle;
    context.stroke();
  }
};

class PlayAreaUI extends React.Component {
  constructor(props) {
    super(props);

    this.explosionImage = undefined;
    this.factionShipToImage = {};
    this.factionSquadronToImage = {};
  }

  componentDidMount() {
    this.loadImages();
    this.paint();
  }

  componentDidUpdate() {
    this.paint();
  }

  createShipIcon(faction, shipCard) {
    const image = new Image();
    image.onload = () => this.forceUpdate();

    const filename = shipCard['ship-image'];
    image.src = Endpoint.ARMADA_IMAGES + filename;

    return image;
  }

  createSquadronIcon(faction, squadronCard) {
    const image = new Image();
    image.onload = () => this.forceUpdate();

    const filename = squadronCard['squadron-image'];
    image.src = Endpoint.ARMADA_IMAGES + filename;

    return image;
  }

  drawExplosion(context) {
    const { explosion, scale } = this.props;

    if (explosion) {
      const { position, size } = explosion;
      const audioClip = document.getElementById('explosionAudio');

      const { x, y } = position;
      const width = size;
      const height = size;

      context.save();
      context.scale(scale, scale);
      context.translate(x, y);
      context.drawImage(this.explosionImage, -width / 2, -height / 2, width, height);

      audioClip.play();

      // Cleanup.
      context.restore();
    }
  }

  drawLaserBeam(context0) {
    const { laserBeam, scale } = this.props;

    if (laserBeam) {
      const { audioClip, color, fromPosition, isPrimary, toPosition } = laserBeam;

      const context = context0;
      context.save();
      context.scale(scale, scale);
      context.lineWidth = 3;
      context.strokeStyle = color;

      if (!isPrimary) {
        const lineDashSegments = [10, 5];
        context.setLineDash(lineDashSegments);
      }

      context.beginPath();
      context.moveTo(fromPosition.x, fromPosition.y);
      context.lineTo(toPosition.x, toPosition.y);
      context.stroke();

      if (audioClip) {
        audioClip.play();
      }

      // Cleanup.
      context.restore();
    }
  }

  drawManeuver(context0) {
    const { maneuver, scale } = this.props;

    if (maneuver) {
      const context = context0;
      context.save();
      context.scale(scale, scale);

      // Mark the center.
      context.fillStyle = PlayAreaUI.FOREGROUND_COLOR;
      const radius = 4;
      context.beginPath();
      context.arc(maneuver.fromPosition.x, maneuver.fromPosition.y, radius, 0, 2 * Math.PI);
      context.fill();

      // Draw from ship base.
      paintPathComponent(maneuver.fromPolygon, context, PlayAreaUI.FOREGROUND_COLOR);

      if (maneuver.toPolygon) {
        // Draw to ship base.
        paintPathComponent(maneuver.toPolygon, context, PlayAreaUI.FOREGROUND_COLOR);
      }

      // Draw maneuver path.
      paintPathComponent(maneuver.path, context, maneuver.color);

      // Cleanup.
      context.restore();
    }
  }

  drawShips(context) {
    const { scale, shipInstances } = this.props;

    Object.values(shipInstances).forEach(shipInstance => {
      const { id, position, shipKey } = shipInstance;
      const faction = AA.Selector.factionValueByShip(shipKey);
      const image = this.factionShipToImage[`${faction.key}|${shipKey}`];
      const shipBase = AA.Selector.shipBaseValueByShip(shipKey);
      const factionColor = faction.color;

      ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
    }, this);
  }

  drawSquadrons(context) {
    const { scale, squadronInstances } = this.props;

    Object.values(squadronInstances).forEach(squadronInstance => {
      const { id, position, squadronKey } = squadronInstance;
      const faction = AA.Selector.factionValueBySquadron(squadronKey);
      const image = this.factionSquadronToImage[`${faction.key}|${squadronKey}`];
      const factionColor = faction.color;

      SquadronImage.draw(context, scale, id, image, position, factionColor);
    }, this);
  }

  loadImages() {
    const { shipInstances, squadronInstances } = this.props;

    const factionShips = [];

    shipInstances.forEach(shipInstance => {
      const { shipKey } = shipInstance;
      const faction = AA.Selector.factionValueByShip(shipKey);
      const factionShip = `${faction.key}|${shipKey}`;
      if (!factionShips.includes(factionShip)) {
        factionShips.push(factionShip);
      }
    });

    for (let i = 0; i < factionShips.length; i += 1) {
      const factionShip = factionShips[i];
      const faction = AA.Selector.faction(factionShip.split('|')[0]);
      const shipCard = AA.Selector.shipCard(factionShip.split('|')[1]);
      this.factionShipToImage[factionShip] = this.createShipIcon(faction, shipCard);
    }

    const factionSquadrons = [];

    squadronInstances.forEach(squadronInstance => {
      const { squadronKey } = squadronInstance;
      const faction = AA.Selector.factionValueBySquadron(squadronKey);
      const factionSquadron = `${faction.key}|${squadronKey}`;
      if (!factionSquadrons.includes(factionSquadron)) {
        factionSquadrons.push(factionSquadron);
      }
    });

    for (let i = 0; i < factionSquadrons.length; i += 1) {
      const factionSquadron = factionSquadrons[i];
      const faction = AA.Selector.faction(factionSquadron.split('|')[0]);
      const squadronCard = AA.Selector.squadronCard(factionSquadron.split('|')[1]);
      this.factionSquadronToImage[factionSquadron] = this.createSquadronIcon(faction, squadronCard);
    }

    // this.explosionImage = this.createExplosionImage();
  }

  paint() {
    const { height, scale, width } = this.props;

    const canvas = document.getElementById('playAreaCanvas');
    const context = canvas.getContext('2d');

    context.clearRect(0, 0, scale * width, scale * height);

    this.drawShips(context);
    this.drawSquadrons(context);
    this.drawManeuver(context);
    this.drawLaserBeam(context);
    this.drawExplosion(context);
  }

  render() {
    const { height, image, resourceBase, scale, width } = this.props;

    const imageSrc = resourceBase + image;

    return ReactDOMFactories.canvas({
      id: 'playAreaCanvas',
      style: {
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: '100%',
      },
      width: scale * width,
      height: scale * height,
    });
  }
}

PlayAreaUI.FOREGROUND_COLOR = 'white';
PlayAreaUI.EASY_COLOR = 'lime';
PlayAreaUI.HARD_COLOR = 'red';

PlayAreaUI.propTypes = {
  shipInstances: PropTypes.shape().isRequired,
  squadronInstances: PropTypes.shape().isRequired,

  height: PropTypes.number,
  image: PropTypes.string,
  resourceBase: PropTypes.string,
  scale: PropTypes.number,
  width: PropTypes.number,

  explosion: PropTypes.shape(),
  laserBeam: PropTypes.shape(),
  maneuver: PropTypes.shape(),
};

PlayAreaUI.defaultProps = {
  height: 915,
  image: 'background/horsehead_nebula_02092008.jpg',
  resourceBase: Endpoint.LOCAL_RESOURCE,
  scale: 1.0,
  width: 1830,

  explosion: undefined,
  laserBeam: undefined,
  maneuver: undefined,
};

export default PlayAreaUI;
