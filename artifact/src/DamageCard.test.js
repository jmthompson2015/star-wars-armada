import DamageCard from "./DamageCard.js";
import EnumTest from "./Enum.test.js";

QUnit.module("DamageCard");

QUnit.test("DamageCard properties Blinded Gunners", function(assert)
{
   const damage = DamageCard.BLINDED_GUNNERS;
   const properties = DamageCard.properties[damage];
   assert.equal(properties.title, "Blinded Gunners");
   assert.equal(properties.type, "Crew");
   assert.equal(properties.key, damage);
});

QUnit.test("DamageCard properties Capacitor Failure", function(assert)
{
   const damage = DamageCard.CAPACITOR_FAILURE;
   const properties = DamageCard.properties[damage];
   assert.equal(properties.title, "Capacitor Failure");
   assert.equal(properties.type, "Ship");
   assert.equal(properties.key, damage);
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, DamageCard);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, DamageCard, 22, DamageCard.BLINDED_GUNNERS, DamageCard.THRUSTER_FISSURE);
});

const DamageCardTest = {};
export default DamageCardTest;