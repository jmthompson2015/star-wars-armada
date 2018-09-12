/* eslint no-console: ["error", { allow: ["log"] }] */

import CardGalleryUI from "./CardGalleryUI.js";
import EnumClassSelect from "./EnumClassSelect.js";

const { UpgradeSlot } = AA;

const WIDTH = 225;

const determineWidth = enumClass => {
  let answer;

  switch (enumClass) {
    case AA.ShipCard:
      answer = WIDTH;
      break;
    case AA.SquadronCard:
      answer = WIDTH / 1.1;
      break;
    case AA.DamageCard:
    case AA.UpgradeCard:
      answer = WIDTH / 1.7;
      break;
    default:
      throw new Error(`Unknown enumClass: ${enumClass}`);
  }

  return answer;
};

const createDamageRows = () => {
  const enumClass = AA.DamageCard;
  const enumValues = AA.Selector.enumValues(enumClass);
  const enumKeys = R.map(enumValue => enumValue.key, enumValues);
  const cards = R.map(AA.Selector.damageCard, enumKeys);
  const width = determineWidth(enumClass);

  const rows = [];
  rows.push(
    React.createElement(CardGalleryUI, {
      key: `cardGallery${rows.length}`,
      cards,
      width
    })
  );

  return rows;
};

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

const createShipRows = () => {
  const enumClass = AA.ShipCard;
  const enumValues = AA.Selector.enumValues(enumClass);
  const width = determineWidth(enumClass);
  const factionValues = AA.Selector.enumValues(AA.Faction);

  let i = 1;
  const reduceFunction = (accum, faction) => {
    const myEnumValues = R.filter(enumValue => enumValue.faction === faction.name, enumValues);
    const enumKeys = R.map(enumValue => enumValue.key, myEnumValues);
    const cards = R.map(AA.Selector.shipCard, enumKeys);

    const header = createHeader(i, faction.image, faction.name);
    const gallery = React.createElement(CardGalleryUI, {
      key: `cardGallery${i}`,
      cards,
      width
    });
    i += 1;

    return R.pipe(
      R.append(header),
      R.append(gallery)
    )(accum);
  };

  return R.reduce(reduceFunction, [], factionValues);
};

const createSquadronRows = () => {
  const enumClass = AA.SquadronCard;
  const enumValues = AA.Selector.enumValues(enumClass);
  const width = determineWidth(enumClass);
  const factionValues = AA.Selector.enumValues(AA.Faction);

  let i = 1;
  const reduceFunction = (accum, faction) => {
    const myEnumValues = R.filter(enumValue => enumValue.faction === faction.name, enumValues);
    const enumKeys = R.map(enumValue => enumValue.key, myEnumValues);
    const cards = R.map(AA.Selector.squadronCard, enumKeys);

    const header = createHeader(i, faction.image, faction.name);
    const gallery = React.createElement(CardGalleryUI, { key: `cardGallery${i}`, cards, width });
    i += 1;

    return R.pipe(
      R.append(header),
      R.append(gallery)
    )(accum);
  };

  return R.reduce(reduceFunction, [], factionValues);
};

const createUpgradeRows = () => {
  const enumClass = AA.UpgradeCard;
  const enumValues = AA.Selector.enumValues(enumClass);
  const width = determineWidth(enumClass);
  const slotValues = AA.Selector.enumValues(AA.UpgradeSlot);

  let i = 1;
  const filterFunction = slot => enumValue =>
    (slot.key === UpgradeSlot.WEAPONS_TEAM_AND_OFFENSIVE_RETROFIT &&
      enumValue.slots.includes("Weapons Team") &&
      enumValue.slots.includes("Offensive Retrofit")) ||
    (enumValue.slots.length === 1 && enumValue.slots.includes(slot.name));
  const reduceFunction = (accum, slot) => {
    const myEnumValues = R.filter(filterFunction(slot), enumValues);
    const enumKeys = R.map(enumValue => enumValue.key, myEnumValues);
    const cards = R.map(AA.Selector.upgradeCard, enumKeys);

    const header = createHeader(i, slot.image, slot.name);

    const gallery = React.createElement(CardGalleryUI, {
      key: `cardGallery${i}`,
      cards,
      width
    });
    i += 1;

    return R.pipe(
      R.append(header),
      R.append(gallery)
    )(accum);
  };

  return R.reduce(reduceFunction, [], slotValues);
};

const createGallery = enumClass => {
  let rows = [];
  if (enumClass === AA.DamageCard) {
    rows = createDamageRows();
  } else if (enumClass === AA.ShipCard) {
    rows = createShipRows();
  } else if (enumClass === AA.SquadronCard) {
    rows = createSquadronRows();
  } else if (enumClass === AA.UpgradeCard) {
    rows = createUpgradeRows();
  }

  const mainPanel = ReactDOMFactories.div({}, rows);
  ReactDOM.render(mainPanel, document.getElementById("mainPanel"));
};

const myOnChange = enumClass => {
  createGallery(enumClass);
};

const initialSelectedValue = "Ship";
const cardTypeSelect = React.createElement(EnumClassSelect, {
  initialSelectedValue,
  onChange: myOnChange
});
const selectPanel = ReactDOMFactories.div(
  {
    className: "pb3 tc"
  },
  "Card Type: ",
  cardTypeSelect
);
ReactDOM.render(selectPanel, document.getElementById("selectPanel"));

createGallery(AA.ShipCard);
