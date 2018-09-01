import ShipGalleryUI from "./ShipGalleryUI.js";

const { Selector, ShipCard } = AA;

const shipCards = [
  Selector.shipCard(ShipCard.VICTORY_II_CLASS_STAR_DESTROYER),
  Selector.shipCard(ShipCard.CR90_CORVETTE_A)
];

const cardGalleryUI = React.createElement(ShipGalleryUI, {
  shipCards
});

ReactDOM.render(cardGalleryUI, document.getElementById("panel"));
