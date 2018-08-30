/* eslint no-console: ["error", { allow: ["log"] }] */

import EnumClassSelect from "./EnumClassSelect.js";

const myOnChange = enumClass => {
  console.log(`enumClass === DamageCard ? ${enumClass === AA.DamageCard}`);
  console.log(`enumClass === ShipCard ? ${enumClass === AA.ShipCard}`);
  console.log(`enumClass === SquadronCard ? ${enumClass === AA.SquadronCard}`);
  console.log(`enumClass === UpgradeCard ? ${enumClass === AA.UpgradeCard}`);
};

const cardTypeSelect = React.createElement(EnumClassSelect, {
  onChange: myOnChange
});

ReactDOM.render(cardTypeSelect, document.getElementById("panel"));
