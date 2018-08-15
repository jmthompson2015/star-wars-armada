import DamageCard from "./DamageCard.js";
import DiceValue from "./DiceValue.js";
import Faction from "./Faction.js";
import Phase from "./Phase.js";
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

QUnit.test("diceValue()", function(assert)
{
   // Setup.
   const diceKey = DiceValue.HIT;

   // Run.
   const result = Selector.diceValue(diceKey);

   // Verify.
   assert.ok(result);
   assert.equal(result.key, diceKey);
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

QUnit.test("upgradeSlotKeysByUpgrade()", function(assert)
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

const SelectorTest = {};
export default SelectorTest;