import DamageCard from "./DamageCard.js";
import DiceValue from "./DiceValue.js";
import Distance from "./Distance.js";
import Faction from "./Faction.js";
import Phase from "./Phase.js";
import PlayFormat from "./PlayFormat.js";
import Range from "./Range.js";
import Selector from "./Selector.js";
import ShipCard from "./ShipCard.js";
import SquadronCard from "./SquadronCard.js";
import UpgradeCard from "./UpgradeCard.js";
import UpgradeSlot from "./UpgradeSlot.js";

QUnit.module("Selector");

QUnit.test("damageCard()", function(assert)
{
   // Setup.
   const damageKey = DamageCard.BLINDED_GUNNERS;

   // Run.
   const result = Selector.damageCard(damageKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, damageKey);
});

QUnit.test("defenseTokenValuesByShip()", function(assert)
{
   // Setup.
   const shipKey = ShipCard.VICTORY_II_CLASS_STAR_DESTROYER;

   // Run.
   const result = Selector.defenseTokenValuesByShip(shipKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   assert.equal(result[0].key, "brace");
   assert.equal(result[1].key, "redirect");
   assert.equal(result[2].key, "redirect");
});

QUnit.test("diceValue()", function(assert)
{
   // Setup.
   const diceKey = DiceValue.RED_HIT;

   // Run.
   const result = Selector.diceValue(diceKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, diceKey);
});

QUnit.test("distanceKeyByLength()", function(assert)
{
   // Run / Verify.
   assert.equal(Selector.distanceKeyByLength(0), Distance.ONE);
   assert.equal(Selector.distanceKeyByLength(76), Distance.ONE);
   assert.equal(Selector.distanceKeyByLength(77), Distance.TWO);
   assert.equal(Selector.distanceKeyByLength(125), Distance.TWO);
   assert.equal(Selector.distanceKeyByLength(126), Distance.THREE);
   assert.equal(Selector.distanceKeyByLength(185), Distance.THREE);
   assert.equal(Selector.distanceKeyByLength(186), Distance.FOUR);
   assert.equal(Selector.distanceKeyByLength(245), Distance.FOUR);
   assert.equal(Selector.distanceKeyByLength(246), Distance.FIVE);
   assert.equal(Selector.distanceKeyByLength(305), Distance.FIVE);
});

QUnit.test("faction()", function(assert)
{
   // Setup.
   const factionKey = Faction.GALACTIC_EMPIRE;

   // Run.
   const result = Selector.faction(factionKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, factionKey);
});

QUnit.test("factionValueByShip()", function(assert)
{
   // Setup.
   const shipKey = ShipCard.GOZANTI_CLASS_ASSAULT_CARRIERS;

   // Run.
   const result = Selector.factionValueByShip(shipKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, Faction.GALACTIC_EMPIRE);
});

QUnit.test("factionValueBySquadron()", function(assert)
{
   // Setup.
   const squadronKey = SquadronCard.TIE_FIGHTER_SQUADRON;

   // Run.
   const result = Selector.factionValueBySquadron(squadronKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, Faction.GALACTIC_EMPIRE);
});

QUnit.test("heightByCard()", function(assert)
{
   assert.equal(Selector.heightByCard(DamageCard.BLINDED_GUNNERS), 64);
   assert.equal(Selector.heightByCard(UpgradeCard.GRAND_MOFF_TARKIN), 64);
   assert.equal(Selector.heightByCard(SquadronCard.X_WING_SQUADRON), 89);
   assert.equal(Selector.heightByCard(ShipCard.VICTORY_II_CLASS_STAR_DESTROYER), 120);
});

QUnit.test("isDamageCard()", function(assert)
{
   // Run / Verify.
   assert.equal(Selector.isDamageCard(Selector.damageCard(DamageCard.BLINDED_GUNNERS)), true);
   assert.equal(Selector.isDamageCard(Selector.shipCard(ShipCard.CR90_CORVETTE_A)), false);
   assert.equal(Selector.isDamageCard(Selector.squadronCard(SquadronCard.TIE_FIGHTER_SQUADRON)), false);
   assert.equal(Selector.isDamageCard(Selector.upgradeCard(UpgradeCard.GRAND_MOFF_TARKIN)), false);
});

QUnit.test("isShipCard()", function(assert)
{
   // Run / Verify.
   assert.equal(Selector.isShipCard(Selector.damageCard(DamageCard.BLINDED_GUNNERS)), false);
   assert.equal(Selector.isShipCard(Selector.shipCard(ShipCard.CR90_CORVETTE_A)), true);
   assert.equal(Selector.isShipCard(Selector.squadronCard(SquadronCard.TIE_FIGHTER_SQUADRON)), false);
   assert.equal(Selector.isShipCard(Selector.upgradeCard(UpgradeCard.GRAND_MOFF_TARKIN)), false);
});

QUnit.test("isSquadronCard()", function(assert)
{
   // Run / Verify.
   assert.equal(Selector.isSquadronCard(Selector.damageCard(DamageCard.BLINDED_GUNNERS)), false);
   assert.equal(Selector.isSquadronCard(Selector.shipCard(ShipCard.CR90_CORVETTE_A)), false);
   assert.equal(Selector.isSquadronCard(Selector.squadronCard(SquadronCard.TIE_FIGHTER_SQUADRON)), true);
   assert.equal(Selector.isSquadronCard(Selector.upgradeCard(UpgradeCard.GRAND_MOFF_TARKIN)), false);
});

QUnit.test("isUpgradeCard()", function(assert)
{
   // Run / Verify.
   assert.equal(Selector.isUpgradeCard(Selector.damageCard(DamageCard.BLINDED_GUNNERS)), false);
   assert.equal(Selector.isUpgradeCard(Selector.shipCard(ShipCard.CR90_CORVETTE_A)), false);
   assert.equal(Selector.isUpgradeCard(Selector.squadronCard(SquadronCard.TIE_FIGHTER_SQUADRON)), false);
   assert.equal(Selector.isUpgradeCard(Selector.upgradeCard(UpgradeCard.GRAND_MOFF_TARKIN)), true);
});

QUnit.test("phase()", function(assert)
{
   // Setup.
   const phaseKey = Phase.COMMAND_START;

   // Run.
   const result = Selector.phase(phaseKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, phaseKey);
});

QUnit.test("playFormatKeyByPoints()", function(assert)
{
   // Run / Verify.
   assert.equal(Selector.playFormatKeyByPoints(175, 173), PlayFormat.SMALL);
   assert.equal(Selector.playFormatKeyByPoints(300, 173), PlayFormat.STANDARD);
   assert.equal(Selector.playFormatKeyByPoints(175, 300), PlayFormat.STANDARD);
   assert.equal(Selector.playFormatKeyByPoints(300, 300), PlayFormat.STANDARD);
});

QUnit.test("rangeKeyByLength()", function(assert)
{
   // Run / Verify.
   assert.equal(Selector.rangeKeyByLength(0), Range.CLOSE);
   assert.equal(Selector.rangeKeyByLength(123), Range.CLOSE);
   assert.equal(Selector.rangeKeyByLength(124), Range.MEDIUM);
   assert.equal(Selector.rangeKeyByLength(187), Range.MEDIUM);
   assert.equal(Selector.rangeKeyByLength(188), Range.LONG);
   assert.equal(Selector.rangeKeyByLength(305), Range.LONG);
});

QUnit.test("shipCard()", function(assert)
{
   // Setup.
   const shipKey = ShipCard.ASSAULT_FRIGATE_MARK_II_A;

   // Run.
   const result = Selector.shipCard(shipKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, shipKey);
});

QUnit.test("squadronCard()", function(assert)
{
   // Setup.
   const squadronKey = SquadronCard.TIE_FIGHTER_SQUADRON;

   // Run.
   const result = Selector.squadronCard(squadronKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, squadronKey);
});

QUnit.test("upgradeCard()", function(assert)
{
   // Setup.
   const upgradeKey = UpgradeCard.GRAND_MOFF_TARKIN;

   // Run.
   const result = Selector.upgradeCard(upgradeKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, upgradeKey);
});

QUnit.test("upgradeSlot()", function(assert)
{
   // Setup.
   const slotKey = UpgradeSlot.COMMANDER;

   // Run.
   const result = Selector.upgradeSlot(slotKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, slotKey);
});

QUnit.test("upgradeSlotKeysByShip()", function(assert)
{
   // Setup.
   const shipKey = ShipCard.NEBULON_B_ESCORT_FRIGATE;

   // Run.
   const result = Selector.upgradeSlotKeysByShip(shipKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 3);
   let i = 0;
   assert.equal(result[i++], UpgradeSlot.OFFICER);
   assert.equal(result[i++], UpgradeSlot.SUPPORT_TEAM);
   assert.equal(result[i++], UpgradeSlot.TURBOLASERS);
});

QUnit.test("upgradeSlotKeysByUpgrade() Grand Moff Tarkin", function(assert)
{
   // Setup.
   const upgradeKey = UpgradeCard.GRAND_MOFF_TARKIN;

   // Run.
   const result = Selector.upgradeSlotKeysByUpgrade(upgradeKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 1);
   assert.equal(result[0], UpgradeSlot.COMMANDER);
});

QUnit.test("upgradeSlotKeysByUpgrade() Darth Vader", function(assert)
{
   // Setup.
   const upgradeKey = UpgradeCard.DARTH_VADER_WEAPONS_TEAM_OFFENSIVE_RETROFIT;

   // Run.
   const result = Selector.upgradeSlotKeysByUpgrade(upgradeKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.length, 2);
   assert.equal(result[0], UpgradeSlot.WEAPONS_TEAM);
   assert.equal(result[1], UpgradeSlot.OFFENSIVE_RETROFIT);
});

QUnit.test("widthByCard()", function(assert)
{
   assert.equal(Selector.widthByCard(DamageCard.BLINDED_GUNNERS), 41);
   assert.equal(Selector.widthByCard(UpgradeCard.GRAND_MOFF_TARKIN), 41);
   assert.equal(Selector.widthByCard(SquadronCard.X_WING_SQUADRON), 62);
   assert.equal(Selector.widthByCard(ShipCard.VICTORY_II_CLASS_STAR_DESTROYER), 70);
});

const SelectorTest = {};
export default SelectorTest;