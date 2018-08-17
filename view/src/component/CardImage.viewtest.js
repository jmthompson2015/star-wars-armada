import ReactUtils from "../ReactUtilities.js";

import CardImage from "./CardImage.js";

const rows = [];
let cells = [];
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.BLINDED_GUNNERS));
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.CAPACITOR_FAILURE));
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.CR90_CORVETTE_A));
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.VICTORY_II_CLASS_STAR_DESTROYER));
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.LUKE_SKYWALKER));
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.TIE_FIGHTER_SQUADRON));
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.GRAND_MOFF_TARKIN));
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.GUNNERY_TEAM));
rows.push(ReactUtils.createRow(cells, "row" + rows.length));

cells = [];
let isFaceUp = true;
let isReady = false;
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.BLINDED_GUNNERS), isFaceUp, isReady);
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.CAPACITOR_FAILURE), isFaceUp, isReady);
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.CR90_CORVETTE_A), isFaceUp, isReady);
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.VICTORY_II_CLASS_STAR_DESTROYER), isFaceUp, isReady);
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.LUKE_SKYWALKER), isFaceUp, isReady);
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.TIE_FIGHTER_SQUADRON), isFaceUp, isReady);
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.GRAND_MOFF_TARKIN), isFaceUp, isReady);
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.GUNNERY_TEAM), isFaceUp, isReady);
rows.push(ReactUtils.createRow(cells, "row" + rows.length));

cells = [];
isFaceUp = false;
isReady = true;
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.BLINDED_GUNNERS), isFaceUp, isReady);
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.CAPACITOR_FAILURE), isFaceUp, isReady);
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.CR90_CORVETTE_A), isFaceUp, isReady);
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.VICTORY_II_CLASS_STAR_DESTROYER), isFaceUp, isReady);
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.LUKE_SKYWALKER), isFaceUp, isReady);
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.TIE_FIGHTER_SQUADRON), isFaceUp, isReady);
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.GRAND_MOFF_TARKIN), isFaceUp, isReady);
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.GUNNERY_TEAM), isFaceUp, isReady);
rows.push(ReactUtils.createRow(cells, "row" + rows.length));

const table = ReactUtils.createTable(rows);
ReactDOM.render(table, document.getElementById("panel"));

function addCardImage(cells, card, isFaceUp = true, isReady = true)
{
   const width = 3.2 * AA.Selector.widthByCard(card.key);

   const element = React.createElement(CardImage,
   {
      card: card,
      isFaceUp: isFaceUp,
      isReady: isReady,
      width: width
   });

   cells.push(ReactUtils.createCell(element, "card" + cells.length + isReady, "fl v-top"));
}