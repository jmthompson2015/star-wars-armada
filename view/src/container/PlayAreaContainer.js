import PlayAreaUI from "../component/PlayAreaUI.js";

const PlayAreaContainer = (gameState, ownProps = {}) =>
{
   const playFormatKey = AS.Selector.playFormatKey(gameState);
   const playFormat = AA.Selector.playFormat(playFormatKey);
   const image = "background/" + (playFormat.key === AA.PlayFormat.STANDARD ? "horsehead_nebula_02092008.jpg" : "pia13845.jpg");
   const scale = (ownProps.scale !== undefined ? ownProps.scale : 1.0);

   // const displayExplosion = gameState.displayExplosion;
   // const displayLaserBeam = gameState.displayLaserBeam;
   // const displayManeuver = gameState.displayManeuver;

   return React.createElement(PlayAreaUI,
   {
      height: playFormat.height,
      image: image,
      resourceBase: ownProps.resourceBase,
      scale: scale,
      shipInstances: Object.values(gameState.shipInstances),
      squadronInstances: Object.values(gameState.squadronInstances),
      width: playFormat.width,

      // explosion: displayExplosion,
      // laserBeam: laserBeam,
      // maneuver: displayManeuver
   });
};

export default PlayAreaContainer;