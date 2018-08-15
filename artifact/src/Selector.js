import DamageCard from "./DamageCard.js";
import DiceValue from "./DiceValue.js";
import EnumUtils from "./EnumUtilities.js";
import Faction from "./Faction.js";
import Phase from "./Phase.js";
import ShipCard from "./ShipCard.js";
import SquadronCard from "./SquadronCard.js";
import UpgradeCard from "./UpgradeCard.js";
import UpgradeSlot from "./UpgradeSlot.js";

const Selector = {};

Selector.enumKeys = enumClass => EnumUtils.keys(enumClass);

Selector.enumValues = enumClass => EnumUtils.values(enumClass);

Selector.factionValueByShip = shipKey => Selector.findEnumValueByName(Selector.shipCard(shipKey).faction, Faction);

Selector.findEnumValueByName = (name, enumClass) => EnumUtils.findByName(name, enumClass);

Selector.upgradeSlotKeysByShip = shipKey => keysByName(UpgradeSlot, Selector.shipCard(shipKey).slots);

Selector.upgradeSlotKeysByUpgrade = upgradeKey => keysByName(UpgradeSlot, Selector.upgradeCard(upgradeKey).slots);

////////////////////////////////////////////////////////////////////////////////
Selector.damageCard = key => valueByKey(DamageCard, key);

Selector.diceValue = key => valueByKey(DiceValue, key);

Selector.faction = key => valueByKey(Faction, key);

Selector.phase = key => valueByKey(Phase, key);

Selector.shipCard = key => valueByKey(ShipCard, key);

Selector.squadronCard = key => valueByKey(SquadronCard, key);

Selector.upgradeCard = key => valueByKey(UpgradeCard, key);

Selector.upgradeSlot = key => valueByKey(UpgradeSlot, key);

const keysByName = (enumClass, names) => R.map(name => Selector.findEnumValueByName(name, enumClass).key, names);
const valueByKey = (enumClass, key) => enumClass.properties[key];

Object.freeze(Selector);

export default Selector;