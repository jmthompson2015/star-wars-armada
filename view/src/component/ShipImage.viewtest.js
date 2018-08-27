import ShipImage from './ShipImage.js';

function drawShip(elementId, id, shipImage, shipBase, faction) {
  const canvas = document.getElementById(elementId);
  const context = canvas.getContext('2d');
  const scale = 1.0;
  const position = {
    x: 140 / 2,
    y: 140 / 2,
    heading: 0,
  };
  const factionName = faction.name.toLowerCase().replace(/ /g, '-');
  const factionColor = faction.color;
  const image = new Image();
  image.onload = () => {
    ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
  };
  image.src = `../../../../star-wars-armada-data/image/ship/${factionName}/${shipImage}`;
}

const galacticEmpire = AA.Selector.faction(AA.Faction.GALACTIC_EMPIRE);
const rebelAlliance = AA.Selector.faction(AA.Faction.REBEL_ALLIANCE);
const shipBaseSmall = AA.Selector.shipBase(AA.ShipBase.SMALL);
const shipBaseMedium = AA.Selector.shipBase(AA.ShipBase.MEDIUM);
const shipBaseLarge = AA.Selector.shipBase(AA.ShipBase.LARGE);

drawShip('panel0', 1, 'gozanti-class-carriers.png', shipBaseSmall, galacticEmpire);
drawShip('panel1', 2, 'cr90-corvette.png', shipBaseSmall, rebelAlliance);
drawShip('panel2', 3, 'nebulon-b-frigate.png', shipBaseSmall, rebelAlliance);

drawShip('panel3', 4, 'victory-class-star-destroyer.png', shipBaseMedium, galacticEmpire);
drawShip('panel4', 5, 'assault-frigate-mark-ii.png', shipBaseMedium, rebelAlliance);

drawShip('panel5', 6, 'imperial-class-star-destroyer.png', shipBaseLarge, galacticEmpire);
drawShip('panel6', 7, 'imperial-class-star-destroyer-v2.png', shipBaseLarge, galacticEmpire);
drawShip('panel7', 8, 'mc80-liberty-cruiser.png', shipBaseLarge, rebelAlliance);
