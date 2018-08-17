import EnumTest from "./Enum.test.js";
import DefenseToken from "./DefenseToken.js";

QUnit.module("DefenseToken");

QUnit.test("DefenseToken properties Brace", function(assert)
{
   const tokenKey = DefenseToken.BRACE;
   const properties = DefenseToken.properties[tokenKey];
   assert.equal(properties.name, "Brace");
   assert.ok(properties.text);
   assert.equal(properties.key, tokenKey);
});

QUnit.test("keys and values", function(assert)
{
   EnumTest.keysAndValues(assert, DefenseToken);
});

QUnit.test("keys()", function(assert)
{
   EnumTest.keys(assert, DefenseToken, 5, DefenseToken.BRACE, DefenseToken.SCATTER);
});

const DefenseTokenTest = {};
export default DefenseTokenTest;