import SquadronGalleryUI from "./SquadronGalleryUI.js";

const { Selector, SquadronCard } = AA;

const squadronCards = [
  Selector.squadronCard(SquadronCard.TIE_FIGHTER_SQUADRON),
  Selector.squadronCard(SquadronCard.X_WING_SQUADRON)
];

const cardGalleryUI = React.createElement(SquadronGalleryUI, {
  squadronCards
});

ReactDOM.render(cardGalleryUI, document.getElementById("panel"));
