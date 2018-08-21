import Endpoint from "./Endpoint.js";

import CardImage from "./component/CardImage.js";

const Help = {};

const referenceCards = AA.EnumUtilities.values(AA.ReferenceCard);
const mapFunction = referenceCard =>
{
   return React.createElement(CardImage,
   {
      key: "referenceCard" + referenceCard.key,
      card: referenceCard,
      resourceBase: Endpoint.ARMADA_IMAGES,
      width: 250
   });
};
const rows = R.map(mapFunction, referenceCards);

const mainPanel = ReactDOMFactories.div(
{}, rows);
ReactDOM.render(mainPanel, document.getElementById("panel"));

export default Help;