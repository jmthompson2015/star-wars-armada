import CardGalleryUI from "./CardGalleryUI.js";

const cards = [
  AA.Selector.damageCard(AA.DamageCard.BLINDED_GUNNERS),
  AA.Selector.shipCard(AA.ShipCard.VICTORY_II_CLASS_STAR_DESTROYER),
  AA.Selector.squadronCard(AA.SquadronCard.TIE_FIGHTER_SQUADRON),
  AA.Selector.upgradeCard(AA.UpgradeCard.ADVANCED_PROJECTORS)
];
const width = 200;

const cardGalleryUI = React.createElement(CardGalleryUI, {
  cards,
  width
});

ReactDOM.render(cardGalleryUI, document.getElementById("panel"));
