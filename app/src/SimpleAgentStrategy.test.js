import SimpleAgentStrategy from './SimpleAgentStrategy.js';
import TestData from './TestData.js';

QUnit.module('SimpleAgentStrategy');

QUnit.test('chooseCommands() 1', assert => {
  // Setup.
  const store = TestData.createStore();
  const fleetId = 1;
  const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, store.getState());
  const reduceFunction = (accum, ship) => R.assoc(ship.id, AA.Selector.enumKeys(AA.Command), accum);
  const shipToValidCommands = R.reduce(reduceFunction, {}, shipInstances);

  // Run.
  const done = assert.async();
  const callback = result => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    assert.ok(result);
    assert.equal(Object.keys(result).length, 1);
    assert.equal(result[1] !== undefined, true);
    assert.equal(result[2], undefined);
    assert.equal(result[3], undefined);
    done();
  };
  SimpleAgentStrategy.chooseCommands(shipInstances, shipToValidCommands).then(callback);
});

QUnit.test('chooseCommands() 2', assert => {
  // Setup.
  const store = TestData.createStore();
  const fleetId = 2;
  const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, store.getState());
  const reduceFunction = (accum, ship) => R.assoc(ship.id, AA.Selector.enumKeys(AA.Command), accum);
  const shipToValidCommands = R.reduce(reduceFunction, {}, shipInstances);

  // Run.
  const done = assert.async();
  const callback = result => {
    // Verify.
    assert.ok(true, 'test resumed from async operation');
    assert.ok(result);
    assert.equal(Object.keys(result).length, 2);
    assert.equal(result[1], undefined);
    assert.equal(result[2] !== undefined, true);
    assert.equal(result[3] !== undefined, true);
    done();
  };
  SimpleAgentStrategy.chooseCommands(shipInstances, shipToValidCommands).then(callback);
});

const SimpleAgentStrategyTest = {};
export default SimpleAgentStrategyTest;
