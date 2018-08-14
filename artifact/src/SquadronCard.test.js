import EnumTest from "./Enum.test.js";
import SquadronCard from "./SquadronCard.js";

QUnit.module("SquadronCard");

QUnit.test("SquadronCard properties Howlrunner", function(assert)
{
   const faction = SquadronCard.HOWLRUNNER;
   const properties = SquadronCard.properties[faction];
   assert.equal(properties.name, "\"Howlrunner\"");
   assert.equal(properties.hull, 3);
   assert.equal(properties.key, "howlrunner");
});

QUnit.test("SquadronCard properties X-wing Squadron", function(assert)
{
   const faction = SquadronCard.X_WING_SQUADRON;
   const properties = SquadronCard.properties[faction];
   assert.equal(properties.name, "X-wing Squadron");
   assert.equal(properties.hull, 5);
   assert.equal(properties.key, "xWingSquadron");
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, SquadronCard);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, SquadronCard, 6, SquadronCard.GAR_SAXON, SquadronCard.X_WING_SQUADRON);
});

const SquadronCardTest = {};
export default SquadronCardTest;