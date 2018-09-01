import SquadronUI from "./SquadronUI.js";

const resourceBase = AV.Endpoint.ARMADA_IMAGES;

function drawSquadron(elementId, squadronCard) {
  const position = AS.PositionState.create({
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

drawSquadron("panel0", AA.Selector.squadronCard(AA.SquadronCard.TIE_FIGHTER_SQUADRON));
drawSquadron("panel1", AA.Selector.squadronCard(AA.SquadronCard.X_WING_SQUADRON));
