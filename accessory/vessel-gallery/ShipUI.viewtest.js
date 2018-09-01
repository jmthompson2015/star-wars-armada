import ShipUI from "./ShipUI.js";

const resourceBase = AV.Endpoint.ARMADA_IMAGES;

function drawShip(elementId, shipCard) {
  const shipBase = AA.Selector.shipBaseValueByShip(shipCard.key);
  const position = AS.PositionState.create({
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

drawShip("panel0", AA.Selector.shipCard(AA.ShipCard.GOZANTI_CLASS_ASSAULT_CARRIERS));
drawShip("panel1", AA.Selector.shipCard(AA.ShipCard.VICTORY_II_CLASS_STAR_DESTROYER));
drawShip("panel2", AA.Selector.shipCard(AA.ShipCard.IMPERIAL_II_CLASS_STAR_DESTROYER));
