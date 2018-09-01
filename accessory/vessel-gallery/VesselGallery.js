import ShipGalleryUI from "./ShipGalleryUI.js";
import SquadronGalleryUI from "./SquadronGalleryUI.js";

const { Faction, Selector, ShipCard, SquadronCard } = AA;
const { Endpoint } = AV;

const createHeader = (key, image, label) => {
  const imageUI = ReactDOMFactories.img({
    key: `headerImg${key}`,
    className: "pl2 v-mid",
    src: Endpoint.ARMADA_IMAGES + image,
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
  const shipValues = Selector.enumValues(ShipCard);
  const squadronValues = Selector.enumValues(SquadronCard);
  const factionValues = Selector.enumValues(Faction);

  let i = 1;
  const reduceFunction = (accum, faction) => {
    const myShipValues = R.filter(enumValue => enumValue.faction === faction.name, shipValues);
    const shipKeys = determineShipKeys(myShipValues);
    const shipCards = R.map(Selector.shipCard, shipKeys);

    const mySquadronValues = R.filter(
      enumValue => enumValue.faction === faction.name,
      squadronValues
    );
    const squadronKeys = determineSquadronKeys(mySquadronValues);
    const squadronCards = R.map(Selector.squadronCard, squadronKeys);

    const header = createHeader(i, faction.image, faction.name);
    const shipGallery = React.createElement(ShipGalleryUI, {
      key: `shipGallery${i}`,
      shipCards
    });
    const squadronGallery = React.createElement(SquadronGalleryUI, {
      key: `squadronGallery${i}`,
      squadronCards
    });
    i += 1;

    return R.pipe(
      R.append(header),
      R.append(shipGallery),
      R.append(squadronGallery)
    )(accum);
  };

  const rows = R.reduce(reduceFunction, [], factionValues);

  return rows;
};

const createGallery = () => {
  const rows = createRows();
  const mainPanel = ReactDOMFactories.div({}, rows);
  ReactDOM.render(mainPanel, document.getElementById("panel"));
};

createGallery();
