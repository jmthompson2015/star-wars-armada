import SquadronImage from "./SquadronImage.js";

const galacticEmpire = AA.Selector.faction(AA.Faction.GALACTIC_EMPIRE);
const rebelAlliance = AA.Selector.faction(AA.Faction.REBEL_ALLIANCE);
let id = 1;

drawShip("panel0", id++, "mandalorian-gauntlet-fighter.png", galacticEmpire);
drawShip("panel1", id++, "tie-fighter-squadron.png", galacticEmpire);
drawShip("panel2", id++, "x-wing-squadron.png", rebelAlliance);

function drawShip(elementId, id, shipImage, faction)
{
   const canvas = document.getElementById(elementId);
   const context = canvas.getContext("2d");
   const scale = 1.0;
   const position = {
      x: 50 / 2,
      y: 50 / 2,
      heading: 0
   };
   const factionName = faction.name.toLowerCase().replace(/ /g, "-");
   const factionColor = faction.color;
   const image = new Image();
   image.onload = function()
   {
      SquadronImage.draw(context, scale, id, image, position, factionColor);
   };
   // image.src = Endpoint.ARMADA_IMAGES + "ship/" + factionName + "/" + shipImage;
   image.src = "../../../../star-wars-armada-data/image/squadron/" + factionName + "/" + shipImage;
}