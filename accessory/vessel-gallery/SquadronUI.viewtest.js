import SquadronUI from "./SquadronUI.js";

const { Selector, SquadronCard } = AA;
const { PositionState } = AS;
const { Endpoint } = AV;

const resourceBase = Endpoint.ARMADA_IMAGES;

function drawSquadron(elementId, squadronCard) {
  const position = PositionState.create({
    x: 35 / 2,
    y: 35 / 2,
    heading: 0
  });

  const element = React.createElement(SquadronUI, {
    canvasId: squadronCard.name,
    position,
    resourceBase,
    squadronCard
  });

  ReactDOM.render(element, document.getElementById(elementId));
}

drawSquadron("panel0", Selector.squadronCard(SquadronCard.TIE_FIGHTER_SQUADRON));
drawSquadron("panel1", Selector.squadronCard(SquadronCard.X_WING_SQUADRON));
