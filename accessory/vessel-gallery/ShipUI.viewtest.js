import ShipUI from "./ShipUI.js";

const { Selector, ShipCard } = AA;
const { PositionState } = AS;
const { Endpoint } = AV;

const resourceBase = Endpoint.ARMADA_IMAGES;

function drawShip(elementId, shipCard) {
  const shipBase = Selector.shipBaseValueByShip(shipCard.key);
  const position = PositionState.create({
    x: shipBase.width / 2,
    y: shipBase.height / 2,
    heading: 0
  });

  const element = React.createElement(ShipUI, {
    canvasId: shipCard.name,
    position,
    resourceBase,
    shipBase,
    shipCard
  });

  ReactDOM.render(element, document.getElementById(elementId));
}

drawShip("panel0", Selector.shipCard(ShipCard.GOZANTI_CLASS_ASSAULT_CARRIERS));
drawShip("panel1", Selector.shipCard(ShipCard.VICTORY_II_CLASS_STAR_DESTROYER));
drawShip("panel2", Selector.shipCard(ShipCard.IMPERIAL_II_CLASS_STAR_DESTROYER));
