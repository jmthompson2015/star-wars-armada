import FleetCardsContainer from "./container/FleetCardsContainer.js";
import PlayAreaContainer from "./container/PlayAreaContainer.js";
import StatusBarContainer from "./container/StatusBarContainer.js";

const StarWarsArmadaView = {};

StarWarsArmadaView.drawView = (
{
   gameState,
   document,
   resourceBase = "../resource/"
}) =>
{
   const statusBarContainer = StatusBarContainer(gameState);
   ReactDOM.render(statusBarContainer, document.getElementById("statusBarContainer"));

   const fleetArea1 = FleetCardsContainer(gameState,
   {
      fleetId: 1
   });
   ReactDOM.render(fleetArea1, document.getElementById("fleetArea1"));

   // FIXME: display firstPilotInputArea

   const playAreaContainer = PlayAreaContainer(gameState,
   {
      resourceBase: resourceBase
   });
   ReactDOM.render(playAreaContainer, document.getElementById("playAreaContainer"));

   // FIXME: display secondPilotInputArea

   const fleetArea2 = FleetCardsContainer(gameState,
   {
      fleetId: 2
   });
   ReactDOM.render(fleetArea2, document.getElementById("fleetArea2"));
};

export default StarWarsArmadaView;