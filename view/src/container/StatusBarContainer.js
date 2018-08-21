import StatusBarUI from "../component/StatusBarUI.js";

const StatusBarContainer = (gameState, ownProps = {}) =>
{
   const activeShipId = gameState.activeShipId;
   const shipInstance = (activeShipId !== undefined ? AS.Selector.shipInstance(activeShipId, gameState) : undefined);
   const shipCard = (shipInstance !== undefined ? AA.Selector.shipCard(shipInstance.shipKey) : undefined);
   const activeShipName = (shipCard !== undefined ? shipCard.name : "");
   const phaseName = AA.Selector.phase(gameState.phaseKey).name;
   const round = AS.Selector.round(gameState);
   const userMessage = AS.Selector.userMessage(gameState);

   return React.createElement(StatusBarUI,
   {
      activeShipName: activeShipName,
      phaseName: phaseName,
      round: round,
      userMessage: userMessage,
      helpBase: ownProps.helpBase
   });
};

export default StatusBarContainer;