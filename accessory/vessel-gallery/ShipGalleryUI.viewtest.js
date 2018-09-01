import ShipGalleryUI from "./ShipGalleryUI.js";

const shipCards = [
  AA.Selector.shipCard(AA.ShipCard.VICTORY_II_CLASS_STAR_DESTROYER),
  AA.Selector.shipCard(AA.ShipCard.CR90_CORVETTE_A)
];

const cardGalleryUI = React.createElement(ShipGalleryUI, {
  shipCards
});

ReactDOM.render(cardGalleryUI, document.getElementById("panel"));
