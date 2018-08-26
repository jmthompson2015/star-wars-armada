import Endpoint from "../Endpoint.js";

import ShipImage from "./ShipImage.js";
import SquadronImage from "./SquadronImage.js";

class PlayAreaUI extends React.Component
{
   constructor(props)
   {
      super(props);

      this.explosionImage = undefined;
      this.factionShipToImage = {};
      this.factionSquadronToImage = {};
   }

   componentDidMount()
   {
      this.loadImages();
      this.paint();
   }

   componentDidUpdate()
   {
      this.paint();
   }

   render()
   {
      const
      {
         height,
         image,
         resourceBase,
         scale,
         width
      } = this.props;

      const imageSrc = resourceBase + image;

      return ReactDOMFactories.canvas(
      {
         id: "playAreaCanvas",
         style:
         {
            backgroundImage: "url(" + imageSrc + ")",
            backgroundSize: "100%",
         },
         width: scale * width,
         height: scale * height
      });
   }
}

PlayAreaUI.prototype.createExplosionImage = function()
{
   const image = new Image();
   image.src = Endpoint.LOCAL_RESOURCE + "ship/explosion.png";

   return image;
};

PlayAreaUI.prototype.createShipIcon = function(faction, shipCard)
{
   const image = new Image();
   image.onload = function()
   {
      this.forceUpdate();
   }.bind(this);

   const filename = shipCard["ship-image"];
   image.src = Endpoint.ARMADA_IMAGES + filename;

   return image;
};

PlayAreaUI.prototype.createSquadronIcon = function(faction, squadronCard)
{
   const image = new Image();
   image.onload = function()
   {
      this.forceUpdate();
   }.bind(this);

   const filename = squadronCard["squadron-image"];
   image.src = Endpoint.ARMADA_IMAGES + filename;

   return image;
};

PlayAreaUI.prototype.drawExplosion = function(context)
{
   const
   {
      explosion,
      scale
   } = this.props;

   if (explosion)
   {
      const position = explosion.position;
      const size = explosion.size;
      const audioClip = document.getElementById("explosionAudio");

      const x = position.x;
      const y = position.y;
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
};

PlayAreaUI.prototype.drawLaserBeam = function(context)
{
   const
   {
      laserBeam,
      scale
   } = this.props;

   if (laserBeam)
   {
      const audioClip = laserBeam.audioClip;
      const color = laserBeam.color;
      const fromPosition = laserBeam.fromPosition;
      const isPrimary = laserBeam.isPrimary;
      const toPosition = laserBeam.toPosition;

      context.save();
      context.scale(scale, scale);
      context.lineWidth = 3;
      context.strokeStyle = color;

      if (!isPrimary)
      {
         const lineDashSegments = [10, 5];
         context.setLineDash(lineDashSegments);
      }

      context.beginPath();
      context.moveTo(fromPosition.x, fromPosition.y);
      context.lineTo(toPosition.x, toPosition.y);
      context.stroke();

      if (audioClip)
      {
         audioClip.play();
      }

      // Cleanup.
      context.restore();
   }
};

PlayAreaUI.FOREGROUND_COLOR = "white";
PlayAreaUI.EASY_COLOR = "lime";
PlayAreaUI.HARD_COLOR = "red";

PlayAreaUI.prototype.drawManeuver = function(context)
{
   const
   {
      maneuver,
      scale
   } = this.props;

   if (maneuver)
   {
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

      if (maneuver.toPolygon)
      {
         // Draw to ship base.
         paintPathComponent(maneuver.toPolygon, context, PlayAreaUI.FOREGROUND_COLOR);
      }

      // Draw maneuver path.
      paintPathComponent(maneuver.path, context, maneuver.color);

      // Cleanup.
      context.restore();
   }
};

PlayAreaUI.prototype.drawShips = function(context)
{
   const
   {
      scale,
      shipInstances
   } = this.props;

   Object.values(shipInstances).forEach(shipInstance =>
   {
      const id = shipInstance.id;
      const shipKey = shipInstance.shipKey;
      const faction = AA.Selector.factionValueByShip(shipKey);
      const image = this.factionShipToImage[faction.key + "|" + shipKey];
      const position = shipInstance.position;
      const shipBase = AA.Selector.shipBaseValueByShip(shipKey);
      const factionColor = faction.color;

      ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
   }, this);
};

PlayAreaUI.prototype.drawSquadrons = function(context)
{
   const
   {
      scale,
      squadronInstances
   } = this.props;

   Object.values(squadronInstances).forEach(squadronInstance =>
   {
      const id = squadronInstance.id;
      const squadronKey = squadronInstance.squadronKey;
      const faction = AA.Selector.factionValueBySquadron(squadronKey);
      const image = this.factionSquadronToImage[faction.key + "|" + squadronKey];
      const position = squadronInstance.position;
      const factionColor = faction.color;

      SquadronImage.draw(context, scale, id, image, position, factionColor);
   }, this);
};

PlayAreaUI.prototype.loadImages = function()
{
   const
   {
      shipInstances,
      squadronInstances
   } = this.props;

   const factionShips = [];

   shipInstances.forEach(shipInstance =>
   {
      const shipKey = shipInstance.shipKey;
      const faction = AA.Selector.factionValueByShip(shipKey);
      const factionShip = faction.key + "|" + shipKey;
      if (!factionShips.includes(factionShip))
      {
         factionShips.push(factionShip);
      }
   });

   for (let i = 0; i < factionShips.length; i++)
   {
      const factionShip = factionShips[i];
      const faction = AA.Selector.faction(factionShip.split("|")[0]);
      const shipCard = AA.Selector.shipCard(factionShip.split("|")[1]);
      this.factionShipToImage[factionShip] = this.createShipIcon(faction, shipCard);
   }

   const factionSquadrons = [];

   squadronInstances.forEach(squadronInstance =>
   {
      const squadronKey = squadronInstance.squadronKey;
      const faction = AA.Selector.factionValueBySquadron(squadronKey);
      const factionSquadron = faction.key + "|" + squadronKey;
      if (!factionSquadrons.includes(factionSquadron))
      {
         factionSquadrons.push(factionSquadron);
      }
   });

   for (let i = 0; i < factionSquadrons.length; i++)
   {
      const factionSquadron = factionSquadrons[i];
      const faction = AA.Selector.faction(factionSquadron.split("|")[0]);
      const squadronCard = AA.Selector.squadronCard(factionSquadron.split("|")[1]);
      this.factionSquadronToImage[factionSquadron] = this.createSquadronIcon(faction, squadronCard);
   }

   // this.explosionImage = this.createExplosionImage();
};

PlayAreaUI.prototype.paint = function()
{
   const
   {
      height,
      scale,
      width
   } = this.props;

   const canvas = document.getElementById("playAreaCanvas");
   const context = canvas.getContext("2d");

   context.clearRect(0, 0, scale * width, scale * height);

   this.drawShips(context);
   this.drawSquadrons(context);
   this.drawManeuver(context);
   this.drawLaserBeam(context);
   this.drawExplosion(context);
};

const paintPathComponent = function(path, context, strokeStyle)
{
   if (path.length >= 2)
   {
      context.beginPath();
      context.moveTo(path[0], path[1]);

      for (let i = 2; i < path.length; i += 2)
      {
         context.lineTo(path[i], path[i + 1]);
      }

      context.strokeStyle = strokeStyle;
      context.stroke();
   }
};

PlayAreaUI.propTypes = {
   shipInstances: PropTypes.object.isRequired,
   squadronInstances: PropTypes.object.isRequired,

   height: PropTypes.number,
   image: PropTypes.string,
   resourceBase: PropTypes.string,
   scale: PropTypes.number,
   width: PropTypes.number,

   explosion: PropTypes.object,
   laserBeam: PropTypes.object,
   maneuver: PropTypes.object
};

PlayAreaUI.defaultProps = {
   height: 915,
   image: "background/horsehead_nebula_02092008.jpg",
   resourceBase: Endpoint.LOCAL_RESOURCE,
   scale: 1.0,
   width: 1830
};

export default PlayAreaUI;