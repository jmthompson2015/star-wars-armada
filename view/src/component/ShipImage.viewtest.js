import ShipImage from "./ShipImage.js";

const galacticEmpire = AA.Selector.faction(AA.Faction.GALACTIC_EMPIRE);
const rebelAlliance = AA.Selector.faction(AA.Faction.REBEL_ALLIANCE);
const shipBaseSmall = AA.Selector.shipBase(AA.ShipBase.SMALL);
const shipBaseMedium = AA.Selector.shipBase(AA.ShipBase.MEDIUM);
const shipBaseLarge = AA.Selector.shipBase(AA.ShipBase.LARGE);
let id = 1;

drawShip("panel0", id++, "gozanti-class-carriers.png", shipBaseSmall, galacticEmpire);
drawShip("panel1", id++, "cr90-corvette.png", shipBaseSmall, rebelAlliance);
drawShip("panel2", id++, "nebulon-b-frigate.png", shipBaseSmall, rebelAlliance);

drawShip("panel3", id++, "victory-class-star-destroyer.png", shipBaseMedium, galacticEmpire);
drawShip("panel4", id++, "assault-frigate-mark-ii.png", shipBaseMedium, rebelAlliance);

drawShip("panel5", id++, "imperial-class-star-destroyer.png", shipBaseLarge, galacticEmpire);
drawShip("panel6", id++, "imperial-class-star-destroyer-v2.png", shipBaseLarge, galacticEmpire);
drawShip("panel7", id++, "mc80-liberty-cruiser.png", shipBaseLarge, rebelAlliance);

function drawShip(elementId, id, shipImage, shipBase, faction)
{
   const canvas = document.getElementById(elementId);
   const context = canvas.getContext("2d");
   const scale = 1.0;
   const position = {
      x: 140 / 2,
      y: 140 / 2,
      heading: 0
   };
   const factionName = faction.name.toLowerCase().replace(/ /g, "-");
   const factionColor = faction.color;
   const image = new Image();
   image.onload = function()
   {
      ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
   };
   // image.src = Endpoint.ARMADA_IMAGES + "ship/" + factionName + "/" + shipImage;
   image.src = "../../../../star-wars-armada-data/image/ship/" + factionName + "/" + shipImage;
}