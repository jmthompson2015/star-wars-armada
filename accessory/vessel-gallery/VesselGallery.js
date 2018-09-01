import ShipGalleryUI from "./ShipGalleryUI.js";
import SquadronGalleryUI from "./SquadronGalleryUI.js";

const createHeader = (key, image, label) => {
  const imageUI = ReactDOMFactories.img({
    key: `headerImg${key}`,
    className: "pl2 v-mid",
    src: AV.Endpoint.ARMADA_IMAGES + image,
    width: 32
  });

  return ReactDOMFactories.h2(
    {
      key: `headerLabel${key}`,
      className: "v-mid"
    },
    " ",
    imageUI,
    " ",
    label
  );
};

const determineShipKeys = enumValues => {
  const filenames = [];
  const reduceFunction = (accum, enumValue) => {
    if (!filenames.includes(enumValue["ship-image"])) {
      filenames.push(enumValue["ship-image"]);
      return R.append(enumValue, accum);
    }
    return accum;
  };
  const myEnumValues = R.reduce(reduceFunction, [], enumValues);

  return R.map(enumValue => enumValue.key, myEnumValues).sort();
};

const determineSquadronKeys = enumValues => {
  const filenames = [];
  const reduceFunction = (accum, enumValue) => {
    if (!filenames.includes(enumValue["squadron-image"])) {
      filenames.push(enumValue["squadron-image"]);
      return R.append(enumValue, accum);
    }
    return accum;
  };
  const myEnumValues = R.reduce(reduceFunction, [], enumValues);

  return R.map(enumValue => enumValue.key, myEnumValues).sort();
};

const createRows = () => {
  const shipValues = AA.Selector.enumValues(AA.ShipCard);
  const squadronValues = AA.Selector.enumValues(AA.SquadronCard);
  const rows = [];
  const factionValues = AA.Selector.enumValues(AA.Faction);

  factionValues.forEach(faction => {
    const myShipValues = shipValues.filter(enumValue => enumValue.faction === faction.name);
    const shipKeys = determineShipKeys(myShipValues);
    const shipCards = R.map(AA.Selector.shipCard, shipKeys);

    const mySquadronValues = squadronValues.filter(enumValue => enumValue.faction === faction.name);
    const squadronKeys = determineSquadronKeys(mySquadronValues);
    const squadronCards = R.map(AA.Selector.squadronCard, squadronKeys);

    rows.push(createHeader(rows.length, faction.image, faction.name));

    rows.push(
      React.createElement(ShipGalleryUI, {
        key: `cardGallery${rows.length}`,
        shipCards
      })
    );

    rows.push(
      React.createElement(SquadronGalleryUI, {
        key: `cardGallery${rows.length}`,
        squadronCards
      })
    );
  });

  return rows;
};

const createGallery = () => {
  const rows = createRows();
  const mainPanel = ReactDOMFactories.div({}, rows);
  ReactDOM.render(mainPanel, document.getElementById("panel"));
};

createGallery();
