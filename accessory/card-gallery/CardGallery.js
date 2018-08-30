/* eslint no-console: ["error", { allow: ["log"] }] */

import CardGalleryUI from "./CardGalleryUI.js";
import EnumClassSelect from "./EnumClassSelect.js";

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
  const enumKeys = enumValues.map(enumValue => enumValue.key);
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
    className: "v-mid",
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
  const rows = [];
  const factionValues = AA.Selector.enumValues(AA.Faction);

  factionValues.forEach(faction => {
    const myEnumValues = enumValues.filter(enumValue => enumValue.faction === faction.name);
    const enumKeys = myEnumValues.map(enumValue => enumValue.key);
    const cards = R.map(AA.Selector.shipCard, enumKeys);

    rows.push(createHeader(rows.length, faction.image, faction.name));

    rows.push(
      React.createElement(CardGalleryUI, {
        key: `cardGallery${rows.length}`,
        cards,
        width
      })
    );
  });

  return rows;
};

const createSquadronRows = () => {
  const enumClass = AA.SquadronCard;
  const enumValues = AA.Selector.enumValues(enumClass);
  const width = determineWidth(enumClass);
  const rows = [];
  const factionValues = AA.Selector.enumValues(AA.Faction);

  factionValues.forEach(faction => {
    const myEnumValues = enumValues.filter(enumValue => enumValue.faction === faction.name);
    const enumKeys = myEnumValues.map(enumValue => enumValue.key);
    const cards = R.map(AA.Selector.squadronCard, enumKeys);

    rows.push(createHeader(rows.length, faction.image, faction.name));

    rows.push(
      React.createElement(CardGalleryUI, {
        key: `cardGallery${rows.length}`,
        cards,
        width
      })
    );
  });

  return rows;
};

const createUpgradeRows = () => {
  const enumClass = AA.UpgradeCard;
  const enumValues = AA.Selector.enumValues(enumClass);
  const width = determineWidth(enumClass);
  const rows = [];
  const slotValues = AA.Selector.enumValues(AA.UpgradeSlot);

  slotValues.forEach(slot => {
    const myEnumValues = enumValues.filter(enumValue => enumValue.slots.includes(slot.name));
    const enumKeys = myEnumValues.map(enumValue => enumValue.key);
    const cards = R.map(AA.Selector.upgradeCard, enumKeys);

    rows.push(createHeader(rows.length, slot.image, slot.name));

    rows.push(
      React.createElement(CardGalleryUI, {
        key: `cardGallery${rows.length}`,
        cards,
        width
      })
    );
  });

  return rows;
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
