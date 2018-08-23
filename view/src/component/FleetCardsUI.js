import CardInstanceUI from "./CardInstanceUI.js";
import ReactUtilities from "../ReactUtilities.js";

const FleetCardsUI = props =>
{
   const shipInstances = props.shipInstances;
   const shipToDamages = (props.shipToDamages ||
   {});
   const shipToDefenseInstances = (props.shipToDefenseInstances ||
   {});
   const shipToTokenCounts = (props.shipToTokenCounts ||
   {});
   const shipToUpgrades = (props.shipToUpgrades ||
   {});
   let i = 0;
   const mapFunction0 = shipInstance =>
   {
      const element = React.createElement(CardInstanceUI,
      {
         cardInstance: shipInstance,
         damageInstances: shipToDamages[shipInstance.id],
         defenseInstances: shipToDefenseInstances[shipInstance.id],
         tokenCounts: shipToTokenCounts[shipInstance.id],
         upgradeInstances: shipToUpgrades[shipInstance.id]
      });

      return ReactUtilities.createCell(element, "shipCell" + i++, "alignTop v-top");
   };
   const shipCells = R.map(mapFunction0, shipInstances);

   const squadronInstances = props.squadronInstances;
   let j = 0;
   const mapFunction1 = squadronInstance =>
   {
      const element = React.createElement(CardInstanceUI,
      {
         cardInstance: squadronInstance
      });
      return ReactUtilities.createCell(element, "squadronCell" + j++, "alignTop v-top");
   };
   const squadronCells = R.map(mapFunction1, squadronInstances);

   const cells = R.concat(shipCells, squadronCells);
   const row = ReactUtilities.createRow(cells, "fleetCardsUIRow");

   return ReactUtilities.createTable(row, "fleetCardsUITable", "center");
};

FleetCardsUI.propTypes = {
   shipInstances: PropTypes.array.isRequired,
   squadronInstances: PropTypes.array.isRequired,

   shipToDamages: PropTypes.object,
   shipToDefenseInstances: PropTypes.object,
   shipToTokenCounts: PropTypes.object,
   shipToUpgrades: PropTypes.object
};

export default FleetCardsUI;