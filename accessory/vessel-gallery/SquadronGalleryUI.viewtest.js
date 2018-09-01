import SquadronGalleryUI from "./SquadronGalleryUI.js";

const squadronCards = [
  AA.Selector.squadronCard(AA.SquadronCard.TIE_FIGHTER_SQUADRON),
  AA.Selector.squadronCard(AA.SquadronCard.X_WING_SQUADRON)
];

const cardGalleryUI = React.createElement(SquadronGalleryUI, {
  squadronCards
});

ReactDOM.render(cardGalleryUI, document.getElementById("panel"));
