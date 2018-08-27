import FleetBuilder from './FleetBuilder.js';

const { ShipCard, SquadronCard, UpgradeCard } = AA;

const { Reducer } = AS;

QUnit.module('FleetBuilder');

const verifyCoreSetImperial = (assert, state, fleetId) => {
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, 'fleet.id');
  assert.equal(fleetInstance.name, 'Galactic Empire Core Set: 175 Points', 'fleet.name');
  assert.equal(fleetInstance.year, 2015, 'fleet.year');
  assert.equal(
    fleetInstance.description,
    'Victory II, Howlrunner, TIE Fighters x3',
    'fleet.description',
  );
  assert.equal(fleetInstance.points, 175, 'fleet.points');

  const shipIds = fleetInstance.ships;
  assert.equal(shipIds.length, 1, 'fleet.shipIds.length');
  assert.equal(shipIds[0], 1, 'fleet.shipIds[0]');

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 1, 'shipInstances.length === 1');
  assert.equal(shipInstances[1].shipKey, ShipCard.VICTORY_II_CLASS_STAR_DESTROYER);

  const shipDefenseTokens1 = state.shipInstances[1].defenseTokens;
  assert.ok(shipDefenseTokens1);
  assert.equal(shipDefenseTokens1.length, 3);
  assert.equal(shipDefenseTokens1[0], 1);
  assert.equal(shipDefenseTokens1[1], 2);
  assert.equal(shipDefenseTokens1[2], 3);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 2, 'upgradeInstances.length === 2');
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.GRAND_MOFF_TARKIN);
  assert.equal(upgradeInstances[2].upgradeKey, UpgradeCard.DOMINATOR);

  const squadronIds = fleetInstance.squadrons;
  assert.equal(squadronIds.length, 4, 'fleet.squadronIds.length');
  assert.equal(squadronIds[0], 1, 'fleet.shipIds[0]');
  assert.equal(squadronIds[1], 2, 'fleet.shipIds[0]');
  assert.equal(squadronIds[2], 3, 'fleet.shipIds[0]');
  assert.equal(squadronIds[3], 4, 'fleet.shipIds[0]');

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 4, 'squadronInstances.length === 4');
  assert.equal(squadronInstances[1].squadronKey, SquadronCard.HOWLRUNNER);
  assert.equal(squadronInstances[2].squadronKey, SquadronCard.TIE_FIGHTER_SQUADRON);
  assert.equal(squadronInstances[3].squadronKey, SquadronCard.TIE_FIGHTER_SQUADRON);
  assert.equal(squadronInstances[4].squadronKey, SquadronCard.TIE_FIGHTER_SQUADRON);

  const squadronDefenseTokens1 = state.squadronInstances[1].defenseTokens;
  assert.ok(squadronDefenseTokens1);
  assert.equal(squadronDefenseTokens1.length, 2);
  assert.equal(squadronDefenseTokens1[0], 4);
  assert.equal(squadronDefenseTokens1[1], 5);
};

const verifyCoreSetRebel = (assert, state, fleetId) => {
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, 'fleet.id');
  assert.equal(fleetInstance.name, 'Rebel Alliance Core Set: 173 Points', 'fleet.name');
  assert.equal(fleetInstance.year, 2015, 'fleet.year');
  assert.equal(
    fleetInstance.description,
    'Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2',
    'fleet.description',
  );
  assert.equal(fleetInstance.points, 173, 'fleet.points');

  const shipIds = fleetInstance.ships;
  assert.equal(shipIds.length, 2, 'fleet.shipIds.length');
  assert.equal(shipIds[0], 1, 'fleet.shipIds[0]');
  assert.equal(shipIds[1], 2, 'fleet.shipIds[1]');

  const shipDefenseTokens1 = state.shipInstances[1].defenseTokens;
  assert.ok(shipDefenseTokens1);
  assert.equal(shipDefenseTokens1.length, 3);
  assert.equal(shipDefenseTokens1[0], 1);
  assert.equal(shipDefenseTokens1[1], 2);
  assert.equal(shipDefenseTokens1[2], 3);

  const shipDefenseTokens2 = state.shipInstances[2].defenseTokens;
  assert.ok(shipDefenseTokens2);
  assert.equal(shipDefenseTokens2.length, 3);
  assert.equal(shipDefenseTokens2[0], 4);
  assert.equal(shipDefenseTokens2[1], 5);
  assert.equal(shipDefenseTokens2[2], 6);

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 2, 'shipInstances.length === 2');
  assert.equal(shipInstances[1].shipKey, ShipCard.NEBULON_B_ESCORT_FRIGATE);
  assert.equal(shipInstances[2].shipKey, ShipCard.CR90_CORVETTE_A);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 2, 'upgradeInstances.length === 2');
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.GENERAL_DODONNA);
  assert.equal(upgradeInstances[2].upgradeKey, UpgradeCard.DODONNAS_PRIDE);

  const squadronIds = fleetInstance.squadrons;
  assert.equal(squadronIds.length, 3, 'fleet.squadronIds.length');
  assert.equal(squadronIds[0], 1, 'fleet.squadronIds[0]');
  assert.equal(squadronIds[1], 2, 'fleet.squadronIds[1]');
  assert.equal(squadronIds[2], 3, 'fleet.squadronIds[2]');

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 3, 'squadronInstances.length === 3');
  assert.equal(squadronInstances[1].squadronKey, SquadronCard.LUKE_SKYWALKER);
  assert.equal(squadronInstances[2].squadronKey, SquadronCard.X_WING_SQUADRON);
  assert.equal(squadronInstances[3].squadronKey, SquadronCard.X_WING_SQUADRON);

  const squadronDefenseTokens1 = state.squadronInstances[1].defenseTokens;
  assert.ok(squadronDefenseTokens1);
  assert.equal(squadronDefenseTokens1.length, 2);
  assert.equal(squadronDefenseTokens1[0], 7);
  assert.equal(squadronDefenseTokens1[1], 8);
};

// /////////////////////////////////////////////////////////////////////////////////////////////////
QUnit.test('build() Core Set Imperial', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 1;
  const name = 'Galactic Empire Core Set: 175 Points';
  const year = 2015;
  const description = 'Victory II, Howlrunner, TIE Fighters x3';
  const shipAndUpgradeKeys = [];
  shipAndUpgradeKeys.push({
    shipKey: ShipCard.VICTORY_II_CLASS_STAR_DESTROYER,
    upgradeKeys: [UpgradeCard.GRAND_MOFF_TARKIN, UpgradeCard.DOMINATOR],
  });
  const squadronKeys = [
    SquadronCard.HOWLRUNNER,
    SquadronCard.TIE_FIGHTER_SQUADRON,
    SquadronCard.TIE_FIGHTER_SQUADRON,
    SquadronCard.TIE_FIGHTER_SQUADRON,
  ];

  // Run.
  FleetBuilder.build(store, name, year, description, fleetId, shipAndUpgradeKeys, squadronKeys);

  // Verify.
  verifyCoreSetImperial(assert, store.getState(), fleetId);
});

QUnit.test('build() Core Set Rebel', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 2;
  const name = 'Rebel Alliance Core Set: 173 Points';
  const year = 2015;
  const description = 'Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2';
  const shipAndUpgradeKeys = [
    {
      shipKey: ShipCard.NEBULON_B_ESCORT_FRIGATE,
      upgradeKeys: [UpgradeCard.GENERAL_DODONNA],
    },
    {
      shipKey: ShipCard.CR90_CORVETTE_A,
      upgradeKeys: [UpgradeCard.DODONNAS_PRIDE],
    },
  ];
  const squadronKeys = [
    SquadronCard.LUKE_SKYWALKER,
    SquadronCard.X_WING_SQUADRON,
    SquadronCard.X_WING_SQUADRON,
  ];

  // Run.
  FleetBuilder.build(store, name, year, description, fleetId, shipAndUpgradeKeys, squadronKeys);

  // Verify.
  verifyCoreSetRebel(assert, store.getState(), fleetId);
});

QUnit.test('buildCoreSetImperial()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 1;

  // Run.
  FleetBuilder.buildCoreSetImperial(store, fleetId);

  // Verify.
  verifyCoreSetImperial(assert, store.getState(), fleetId);
});

QUnit.test('buildCoreSetRebel()', assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 2;

  // Run.
  FleetBuilder.buildCoreSetRebel(store, fleetId);

  // Verify.
  verifyCoreSetRebel(assert, store.getState(), fleetId);
});

const FleetBuilderTest = {};
export default FleetBuilderTest;
