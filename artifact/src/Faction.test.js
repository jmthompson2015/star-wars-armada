import EnumTest from "./Enum.test.js";
import Faction from "./Faction.js";

QUnit.module("Faction");

QUnit.test("Faction properties Galactic Empire", function(assert)
{
   const faction = Faction.GALACTIC_EMPIRE;
   const properties = Faction.properties[faction];
   assert.equal(properties.name, "Galactic Empire");
   assert.equal(properties.key, "galacticEmpire");
});

QUnit.test("Faction properties Rebel Alliance", function(assert)
{
   const faction = Faction.REBEL_ALLIANCE;
   const properties = Faction.properties[faction];
   assert.equal(properties.name, "Rebel Alliance");
   assert.equal(properties.key, "rebelAlliance");
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, Faction);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, Faction, 2, Faction.GALACTIC_EMPIRE, Faction.REBEL_ALLIANCE);
});

const FactionTest = {};
export default FactionTest;