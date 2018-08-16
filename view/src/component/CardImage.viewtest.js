import CardImage from "./CardImage.js";

const cells = [];
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.BLINDED_GUNNERS));
addCardImage(cells, AA.Selector.damageCard(AA.DamageCard.CAPACITOR_FAILURE));
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.CR90_CORVETTE_A));
addCardImage(cells, AA.Selector.shipCard(AA.ShipCard.VICTORY_II_CLASS_STAR_DESTROYER));
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.LUKE_SKYWALKER));
addCardImage(cells, AA.Selector.squadronCard(AA.SquadronCard.TIE_FIGHTER_SQUADRON));
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.GRAND_MOFF_TARKIN));
addCardImage(cells, AA.Selector.upgradeCard(AA.UpgradeCard.DODONNAS_PRIDE));

ReactDOM.render(ReactDOMFactories.div(
{}, cells), document.getElementById("panel"));

function addCardImage(cells, card)
{
   const isShip = (AA.Selector.shipCard(card.key) !== undefined);
   const isSquadron = (AA.Selector.squadronCard(card.key) !== undefined);

   const element = React.createElement(CardImage,
   {
      card: card,
      width: (isShip ? 200 : (isSquadron ? 150 : 200 / 1.4))
   });

   cells.push(ReactDOMFactories.div(
   {
      key: "card" + cells.length,
      className: "fl v-top",
   }, element));
}