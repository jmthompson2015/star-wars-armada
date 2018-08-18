import EnumTest from "./Enum.test.js";
import Phase from "./Phase.js";

QUnit.module("Phase");

QUnit.test("Phase properties Command (start)", function(assert)
{
   const phase = Phase.COMMAND_START;
   const properties = Phase.properties[phase];
   assert.equal(properties.name, "Command (start)");
   assert.equal(properties.key, "commandStart");
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, Phase);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, Phase, 38, Phase.SETUP, Phase.STATUS_END);
});

const PhaseTest = {};
export default PhaseTest;