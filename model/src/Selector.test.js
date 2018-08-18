import Selector from "./Selector.js";
import TestData from "./TestData.js";

QUnit.module("Selector");

QUnit.test("shipCountByAgent() 1", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   const agentId = 1;

   // Run.
   const result = Selector.shipCountByAgent(agentId, store.getState());

   // Verify.
   assert.equal(result, 1);
});

QUnit.test("shipCountByAgent() 1", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   const agentId = 2;

   // Run.
   const result = Selector.shipCountByAgent(agentId, store.getState());

   // Verify.
   assert.equal(result, 2);
});

const SelectorTest = {};
export default SelectorTest;