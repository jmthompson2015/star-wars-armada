import Command from "./Command.js";
import DamageCard from "./DamageCard.js";
import DefenseToken from "./DefenseToken.js";
import DiceValue from "./DiceValue.js";
import Distance from "./Distance.js";
import EnumUtils from "./EnumUtilities.js";
import Faction from "./Faction.js";
import Phase from "./Phase.js";
import PlayFormat from "./PlayFormat.js";
import Range from "./Range.js";
import ReferenceCard from "./ReferenceCard.js";
import ShipBase from "./ShipBase.js";
import ShipCard from "./ShipCard.js";
import SquadronCard from "./SquadronCard.js";
import UpgradeCard from "./UpgradeCard.js";
import UpgradeSlot from "./UpgradeSlot.js";

const Selector = {};

Selector.defenseTokenValuesByShip = shipKey =>
{
   const shipCard = Selector.shipCard(shipKey);
   const defenseTokenNames = shipCard["defense-tokens"];

   return R.map(name => EnumUtils.findByName(name, DefenseToken), defenseTokenNames);
};

Selector.defenseTokenValuesBySquadron = squadronKey =>
{
   const squadronCard = Selector.squadronCard(squadronKey);
   const defenseTokenNames = squadronCard["defense-tokens"];

   return (defenseTokenNames !== undefined ? R.map(name => EnumUtils.findByName(name, DefenseToken), defenseTokenNames) : []);
};

Selector.distanceKeyByLength = length =>
{
   const distances = EnumUtils.values(Distance);
   const reduceFunction = (accum, distance) => (isInRange(distance)(length) ? distance.key : accum);

   return R.reduce(reduceFunction, undefined)(distances);
};

Selector.enumKeys = enumClass => EnumUtils.keys(enumClass);

Selector.enumValues = enumClass => EnumUtils.values(enumClass);

Selector.factionValueByShip = shipKey => Selector.findEnumValueByName(Selector.shipCard(shipKey).faction, Faction);

Selector.factionValueBySquadron = squadronKey => Selector.findEnumValueByName(Selector.squadronCard(squadronKey).faction, Faction);

Selector.findEnumValueByName = (name, enumClass) => EnumUtils.findByName(name, enumClass);

Selector.heightByCard = cardKey => R.cond([
     [R.either(cardNotNil(Selector.upgradeCard), cardNotNil(Selector.damageCard)), R.always(64)],
     [cardNotNil(Selector.referenceCard), R.always(89)],
     [cardNotNil(Selector.squadronCard), R.always(89)],
     [cardNotNil(Selector.shipCard), R.always(120)],
     [R.T, cardKey => "Unknown card type for cardKey: " + cardKey]
   ])(cardKey);

Selector.isDamageCard = cardValue => cardValue.image.startsWith("damage-card");

Selector.isShipCard = cardValue => cardValue.image.startsWith("ship-card");

Selector.isSquadronCard = cardValue => cardValue.image.startsWith("squadron-card");

Selector.isUpgradeCard = cardValue => cardValue.image.startsWith("upgrade-card");

Selector.playFormatKeyByPoints = (points1, points2) =>
{
   const standard = Selector.playFormat(PlayFormat.STANDARD);
   const isPointInStandard = points => (standard.minPoints <= points);

   return (isPointInStandard(points1) || isPointInStandard(points2) ? PlayFormat.STANDARD : PlayFormat.SMALL);
};

Selector.rangeKeyByLength = length =>
{
   const ranges = EnumUtils.values(Range);
   const reduceFunction = (accum, range) => (isInRange(range)(length) ? range.key : accum);

   return R.reduce(reduceFunction, undefined)(ranges);
};

Selector.shipBaseValueByShip = shipKey => Selector.shipBase(Selector.shipCard(shipKey).size);

Selector.upgradeSlotKeysByShip = shipKey => keysByName(UpgradeSlot, Selector.shipCard(shipKey).slots);

Selector.upgradeSlotKeysByUpgrade = upgradeKey => keysByName(UpgradeSlot, Selector.upgradeCard(upgradeKey).slots);

Selector.widthByCard = cardKey => R.cond([
     [R.either(cardNotNil(Selector.upgradeCard), cardNotNil(Selector.damageCard)), R.always(41)],
     [cardNotNil(Selector.referenceCard), R.always(62)],
     [cardNotNil(Selector.squadronCard), R.always(62)],
     [cardNotNil(Selector.shipCard), R.always(70)],
     [R.T, cardKey => "Unknown card type for cardKey: " + cardKey]
   ])(cardKey);

////////////////////////////////////////////////////////////////////////////////
Selector.command = key => valueByKey(Command, key);

Selector.damageCard = key => valueByKey(DamageCard, key);

Selector.defenseToken = key => valueByKey(DefenseToken, key);

Selector.diceValue = key => valueByKey(DiceValue, key);

Selector.distance = key => valueByKey(Distance, key);

Selector.faction = key => valueByKey(Faction, key);

Selector.phase = key => valueByKey(Phase, key);

Selector.playFormat = key => valueByKey(PlayFormat, key);

Selector.range = key => valueByKey(Range, key);

Selector.referenceCard = key => valueByKey(ReferenceCard, key);

Selector.shipBase = key => valueByKey(ShipBase, key);

Selector.shipCard = key => valueByKey(ShipCard, key);

Selector.squadronCard = key => valueByKey(SquadronCard, key);

Selector.upgradeCard = key => valueByKey(UpgradeCard, key);

Selector.upgradeSlot = key => valueByKey(UpgradeSlot, key);

////////////////////////////////////////////////////////////////////////////////
const cardNotNil = cardSelector => R.compose(R.not, R.isNil, cardSelector);
const keysByName = (enumClass, names) => R.map(name => Selector.findEnumValueByName(name, enumClass).key, names);
const isInRange = range => R.both(R.lte(range.minDistance), R.gte(range.maxDistance));
const valueByKey = (enumClass, key) => enumClass.properties[key];

Object.freeze(Selector);

export default Selector;