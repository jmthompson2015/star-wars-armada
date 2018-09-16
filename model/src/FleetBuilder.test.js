import FleetBuilder from "./FleetBuilder.js";

const { ShipCard, SquadronCard, UpgradeCard } = AA;

const { Reducer } = AS;

QUnit.module("FleetBuilder");

const verifyCoreSetImperial = (assert, state, fleetId) => {
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, "fleet.id");
  assert.equal(fleetInstance.name, "Galactic Empire Core Set: 175 Points", "fleet.name");
  assert.equal(fleetInstance.year, 2015, "fleet.year");
  assert.equal(
    fleetInstance.description,
    "Victory II, Howlrunner, TIE Fighters x3",
    "fleet.description"
  );
  assert.equal(fleetInstance.points, 175, "fleet.points");

  const shipIds = fleetInstance.ships;
  assert.equal(shipIds.length, 1, "fleet.shipIds.length");
  assert.equal(shipIds[0], 1, "fleet.shipIds[0]");

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 1, "shipInstances.length === 1");
  assert.equal(shipInstances[1].shipKey, ShipCard.VICTORY_II_CLASS_STAR_DESTROYER);

  const shipDefenseTokens1 = state.shipInstances[1].defenseTokens;
  assert.ok(shipDefenseTokens1);
  assert.equal(shipDefenseTokens1.length, 3);
  assert.equal(shipDefenseTokens1[0], 1);
  assert.equal(shipDefenseTokens1[1], 2);
  assert.equal(shipDefenseTokens1[2], 3);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 2, "upgradeInstances.length === 2");
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.GRAND_MOFF_TARKIN);
  assert.equal(upgradeInstances[2].upgradeKey, UpgradeCard.DOMINATOR);

  const squadronIds = fleetInstance.squadrons;
  assert.equal(squadronIds.length, 4, "fleet.squadronIds.length");
  assert.equal(squadronIds[0], 1, "fleet.shipIds[0]");
  assert.equal(squadronIds[1], 2, "fleet.shipIds[0]");
  assert.equal(squadronIds[2], 3, "fleet.shipIds[0]");
  assert.equal(squadronIds[3], 4, "fleet.shipIds[0]");

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 4, "squadronInstances.length === 4");
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
  assert.equal(fleetInstance.id, fleetId, "fleet.id");
  assert.equal(fleetInstance.name, "Rebel Alliance Core Set: 173 Points", "fleet.name");
  assert.equal(fleetInstance.year, 2015, "fleet.year");
  assert.equal(
    fleetInstance.description,
    "Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2",
    "fleet.description"
  );
  assert.equal(fleetInstance.points, 173, "fleet.points");

  const shipIds = fleetInstance.ships;
  assert.equal(shipIds.length, 2, "fleet.shipIds.length");
  assert.equal(shipIds[0], 1, "fleet.shipIds[0]");
  assert.equal(shipIds[1], 2, "fleet.shipIds[1]");

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
  assert.equal(Object.keys(shipInstances).length, 2, "shipInstances.length === 2");
  assert.equal(shipInstances[1].shipKey, ShipCard.NEBULON_B_ESCORT_FRIGATE);
  assert.equal(shipInstances[2].shipKey, ShipCard.CR90_CORVETTE_A);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 2, "upgradeInstances.length === 2");
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.GENERAL_DODONNA);
  assert.equal(upgradeInstances[2].upgradeKey, UpgradeCard.DODONNAS_PRIDE);

  const squadronIds = fleetInstance.squadrons;
  assert.equal(squadronIds.length, 3, "fleet.squadronIds.length");
  assert.equal(squadronIds[0], 1, "fleet.squadronIds[0]");
  assert.equal(squadronIds[1], 2, "fleet.squadronIds[1]");
  assert.equal(squadronIds[2], 3, "fleet.squadronIds[2]");

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 3, "squadronInstances.length === 3");
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
QUnit.test("build() Core Set Imperial", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 1;
  const shipAndUpgradeKeys = [
    {
      shipKey: ShipCard.VICTORY_II_CLASS_STAR_DESTROYER,
      upgradeKeys: [UpgradeCard.GRAND_MOFF_TARKIN, UpgradeCard.DOMINATOR]
    }
  ];
  const squadronKeys = [
    SquadronCard.HOWLRUNNER,
    SquadronCard.TIE_FIGHTER_SQUADRON,
    SquadronCard.TIE_FIGHTER_SQUADRON,
    SquadronCard.TIE_FIGHTER_SQUADRON
  ];

  // Run.
  FleetBuilder.build({
    store,
    name: "Galactic Empire Core Set: 175 Points",
    year: 2015,
    description: "Victory II, Howlrunner, TIE Fighters x3",
    author: "CISAdmiral",
    fleetId,
    shipAndUpgradeKeys,
    squadronKeys
  });

  // Verify.
  verifyCoreSetImperial(assert, store.getState(), fleetId);
});

QUnit.test("build() Core Set Rebel", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 2;
  const shipAndUpgradeKeys = [
    {
      shipKey: ShipCard.NEBULON_B_ESCORT_FRIGATE,
      upgradeKeys: [UpgradeCard.GENERAL_DODONNA]
    },
    {
      shipKey: ShipCard.CR90_CORVETTE_A,
      upgradeKeys: [UpgradeCard.DODONNAS_PRIDE]
    }
  ];
  const squadronKeys = [
    SquadronCard.LUKE_SKYWALKER,
    SquadronCard.X_WING_SQUADRON,
    SquadronCard.X_WING_SQUADRON
  ];

  // Run.
  FleetBuilder.build({
    store,
    name: "Rebel Alliance Core Set: 173 Points",
    year: 2015,
    description: "Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2",
    author: "CISAdmiral",
    fleetId,
    shipAndUpgradeKeys,
    squadronKeys
  });

  // Verify.
  verifyCoreSetRebel(assert, store.getState(), fleetId);
});

QUnit.test("buildCoreSetImperial()", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 1;

  // Run.
  FleetBuilder.buildCoreSetImperial(store, fleetId);

  // Verify.
  verifyCoreSetImperial(assert, store.getState(), fleetId);
});

QUnit.test("buildCoreSetRebel()", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 2;

  // Run.
  FleetBuilder.buildCoreSetRebel(store, fleetId);

  // Verify.
  verifyCoreSetRebel(assert, store.getState(), fleetId);
});

QUnit.test("buildDefiance()", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 5;

  // Run.
  FleetBuilder.buildDefiance(store, fleetId);

  // Verify.
  const state = store.getState();
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, "fleet.id");
  assert.equal(fleetInstance.name, "Defiance", "fleet.name");
  assert.equal(fleetInstance.year, 2018, "fleet.year");
  assert.equal(
    fleetInstance.description,
    "MC80, Hammerhead, GR-75 x3, B-wing x3, HWK-290, A-wing x2, Shara Bey, Tycho Celchu",
    "fleet.description"
  );
  assert.equal(fleetInstance.author, "Chris Fritz", "fleet.author");
  assert.equal(fleetInstance.points, 391, "fleet.points");

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 5, "shipInstances.length");
  assert.equal(shipInstances[1].shipKey, ShipCard.MC80_COMMAND_CRUISER);
  assert.equal(shipInstances[2].shipKey, ShipCard.HAMMERHEAD_TORPEDO_CORVETTE);
  assert.equal(shipInstances[3].shipKey, ShipCard.GR_75_MEDIUM_TRANSPORTS);
  assert.equal(shipInstances[4].shipKey, ShipCard.GR_75_MEDIUM_TRANSPORTS);
  assert.equal(shipInstances[5].shipKey, ShipCard.GR_75_MEDIUM_TRANSPORTS);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 13, "upgradeInstances.length");
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.DEFIANCE);
  assert.equal(upgradeInstances[13].upgradeKey, UpgradeCard.TORYN_FARR);

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 8, "squadronInstances.length");
  assert.equal(squadronInstances[1].squadronKey, SquadronCard.B_WING_SQUADRON);
  assert.equal(squadronInstances[8].squadronKey, SquadronCard.TYCHO_CELCHU);
});

QUnit.test("buildLibertyOrDeath()", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 5;

  // Run.
  FleetBuilder.buildLibertyOrDeath(store, fleetId);

  // Verify.
  const state = store.getState();
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, "fleet.id");
  assert.equal(fleetInstance.name, "Liberty or Death", "fleet.name");
  assert.equal(fleetInstance.year, 2018, "fleet.year");
  assert.equal(
    fleetInstance.description,
    "MC80, Hammerhead x4, GR-75, Shara Bey, Tycho Celchu",
    "fleet.description"
  );
  assert.equal(fleetInstance.author, "Chris Fritz", "fleet.author");
  assert.equal(fleetInstance.points, 392, "fleet.points");

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 6, "shipInstances.length");
  assert.equal(shipInstances[1].shipKey, ShipCard.MC80_BATTLE_CRUISER);
  assert.equal(shipInstances[2].shipKey, ShipCard.HAMMERHEAD_TORPEDO_CORVETTE);
  assert.equal(shipInstances[3].shipKey, ShipCard.HAMMERHEAD_TORPEDO_CORVETTE);
  assert.equal(shipInstances[4].shipKey, ShipCard.HAMMERHEAD_TORPEDO_CORVETTE);
  assert.equal(shipInstances[5].shipKey, ShipCard.HAMMERHEAD_TORPEDO_CORVETTE);
  assert.equal(shipInstances[6].shipKey, ShipCard.GR_75_MEDIUM_TRANSPORTS);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 16, "upgradeInstances.length");
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.RAYMUS_ANTILLES);
  assert.equal(upgradeInstances[16].upgradeKey, UpgradeCard.SLICER_TOOLS);

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 2, "squadronInstances.length");
  assert.equal(squadronInstances[1].squadronKey, SquadronCard.SHARA_BEY);
  assert.equal(squadronInstances[2].squadronKey, SquadronCard.TYCHO_CELCHU);
});

QUnit.test("buildSettingTheTrap()", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 5;

  // Run.
  FleetBuilder.buildSettingTheTrap(store, fleetId);

  // Verify.
  const state = store.getState();
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, "fleet.id");
  assert.equal(fleetInstance.name, "Setting the Trap", "fleet.name");
  assert.equal(fleetInstance.year, 2018, "fleet.year");
  assert.equal(
    fleetInstance.description,
    "Victory x2, Gladiator, Gozanti, Jonus, Black, Mauler, TIE Fighter x3",
    "fleet.description"
  );
  assert.equal(fleetInstance.author, "Norm Weir", "fleet.author");
  assert.equal(fleetInstance.points, 399, "fleet.points");

  const shipIds = fleetInstance.ships;
  assert.equal(shipIds.length, 4, "fleet.shipIds.length");
  assert.equal(shipIds[0], 1, "fleet.shipIds[0]");
  assert.equal(shipIds[3], 4, "fleet.shipIds[3]");

  const shipDefenseTokens1 = state.shipInstances[1].defenseTokens;
  assert.ok(shipDefenseTokens1);
  assert.equal(shipDefenseTokens1.length, 3, "shipDefenseTokens1.length");
  assert.equal(shipDefenseTokens1[0], 1);
  assert.equal(shipDefenseTokens1[2], 3);

  const shipDefenseTokens2 = state.shipInstances[2].defenseTokens;
  assert.ok(shipDefenseTokens2);
  assert.equal(shipDefenseTokens2.length, 3, "shipDefenseTokens2.length");
  assert.equal(shipDefenseTokens2[0], 4);
  assert.equal(shipDefenseTokens2[2], 6);

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 4, "shipInstances.length");
  assert.equal(shipInstances[1].shipKey, ShipCard.VICTORY_I_CLASS_STAR_DESTROYER);
  assert.equal(shipInstances[2].shipKey, ShipCard.VICTORY_II_CLASS_STAR_DESTROYER);
  assert.equal(shipInstances[3].shipKey, ShipCard.GLADIATOR_I_CLASS_STAR_DESTROYER);
  assert.equal(shipInstances[4].shipKey, ShipCard.GOZANTI_CLASS_CRUISERS);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 13, "upgradeInstances.length");
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.GRAND_ADMIRAL_THRAWN);
  assert.equal(upgradeInstances[13].upgradeKey, UpgradeCard.JAMMING_FIELD);

  const squadronIds = fleetInstance.squadrons;
  assert.equal(squadronIds.length, 6, "fleet.squadronIds.length");
  assert.equal(squadronIds[0], 1, "fleet.squadronIds[0]");
  assert.equal(squadronIds[5], 6, "fleet.squadronIds[5]");

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 6, "squadronInstances.length");
  assert.equal(squadronInstances[1].squadronKey, SquadronCard.CAPTAIN_JONUS);
  assert.equal(squadronInstances[6].squadronKey, SquadronCard.TIE_FIGHTER_SQUADRON);

  const squadronDefenseTokens1 = state.squadronInstances[1].defenseTokens;
  assert.ok(squadronDefenseTokens1);
  assert.equal(squadronDefenseTokens1.length, 2, "squadronDefenseTokens1.length");
  assert.equal(squadronDefenseTokens1[0], 12);
  assert.equal(squadronDefenseTokens1[1], 13);

  const squadronDefenseTokens5 = state.squadronInstances[5].defenseTokens;
  assert.ok(squadronDefenseTokens5);
  assert.equal(squadronDefenseTokens5.length, 0, "squadronDefenseTokens5.length");
});

QUnit.test("buildTheRebelAmbush()", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 3;

  // Run.
  FleetBuilder.buildTheRebelAmbush(store, fleetId);

  // Verify.
  const state = store.getState();
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, "fleet.id");
  assert.equal(fleetInstance.name, "The Rebel Ambush", "fleet.name");
  assert.equal(fleetInstance.year, 2018, "fleet.year");
  assert.equal(
    fleetInstance.description,
    "MC75, MC80, Hammerhead, GR-75, Z-95 x4, Shara Bey, Tycho Celchu",
    "fleet.description"
  );
  assert.equal(fleetInstance.author, "Norm Weir", "fleet.author");
  assert.equal(fleetInstance.points, 400, "fleet.points");

  const shipIds = fleetInstance.ships;
  assert.equal(shipIds.length, 4, "fleet.shipIds.length");
  assert.equal(shipIds[0], 1, "fleet.shipIds[0]");
  assert.equal(shipIds[3], 4, "fleet.shipIds[3]");

  const shipDefenseTokens1 = state.shipInstances[1].defenseTokens;
  assert.ok(shipDefenseTokens1);
  assert.equal(shipDefenseTokens1.length, 4, "shipDefenseTokens1.length");
  assert.equal(shipDefenseTokens1[0], 1);
  assert.equal(shipDefenseTokens1[3], 4);

  const shipDefenseTokens2 = state.shipInstances[2].defenseTokens;
  assert.ok(shipDefenseTokens2);
  assert.equal(shipDefenseTokens2.length, 3, "shipDefenseTokens2.length");
  assert.equal(shipDefenseTokens2[0], 5);
  assert.equal(shipDefenseTokens2[2], 7);

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 4, "shipInstances.length");
  assert.equal(shipInstances[1].shipKey, ShipCard.MC75_ORDNANCE_CRUISER);
  assert.equal(shipInstances[2].shipKey, ShipCard.MC80_BATTLE_CRUISER);
  assert.equal(shipInstances[3].shipKey, ShipCard.HAMMERHEAD_TORPEDO_CORVETTE);
  assert.equal(shipInstances[4].shipKey, ShipCard.GR_75_MEDIUM_TRANSPORTS);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 13, "upgradeInstances.length");
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.ADMIRAL_RADDUS);
  assert.equal(upgradeInstances[13].upgradeKey, UpgradeCard.QUANTUM_STORM);

  const squadronIds = fleetInstance.squadrons;
  assert.equal(squadronIds.length, 6, "fleet.squadronIds.length");
  assert.equal(squadronIds[0], 1, "fleet.squadronIds[0]");
  assert.equal(squadronIds[5], 6, "fleet.squadronIds[5]");

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 6, "squadronInstances.length");
  assert.equal(squadronInstances[1].squadronKey, SquadronCard.Z_95_HEADHUNTER_SQUADRON);
  assert.equal(squadronInstances[6].squadronKey, SquadronCard.TYCHO_CELCHU);

  const squadronDefenseTokens1 = state.squadronInstances[1].defenseTokens;
  assert.ok(squadronDefenseTokens1);
  assert.equal(squadronDefenseTokens1.length, 0, "squadronDefenseTokens1.length");

  const squadronDefenseTokens5 = state.squadronInstances[5].defenseTokens;
  assert.ok(squadronDefenseTokens5);
  assert.equal(squadronDefenseTokens5.length, 2, "squadronDefenseTokens5.length");
  assert.equal(squadronDefenseTokens5[0], 13);
  assert.equal(squadronDefenseTokens5[1], 14);
});

QUnit.test("buildVadersRevenge()", assert => {
  // Setup.
  const store = Redux.createStore(Reducer.root);
  const fleetId = 4;

  // Run.
  FleetBuilder.buildVadersRevenge(store, fleetId);

  // Verify.
  const state = store.getState();
  const fleetInstance = AS.Selector.fleetInstance(fleetId, state);

  assert.ok(fleetInstance);
  assert.equal(fleetInstance.id, fleetId, "fleet.id");
  assert.equal(fleetInstance.name, "Vader's Revenge", "fleet.name");
  assert.equal(fleetInstance.year, 2018, "fleet.year");
  assert.equal(
    fleetInstance.description,
    "ISD x2, Gozanti, Valen Rudor, Ciena Ree",
    "fleet.description"
  );
  assert.equal(fleetInstance.author, "Norm Weir", "fleet.author");
  assert.equal(fleetInstance.points, 389, "fleet.points");

  const shipIds = fleetInstance.ships;
  assert.equal(shipIds.length, 3, "fleet.shipIds.length");
  assert.equal(shipIds[0], 1, "fleet.shipIds[0]");
  assert.equal(shipIds[2], 3, "fleet.shipIds[2]");

  const shipDefenseTokens1 = state.shipInstances[1].defenseTokens;
  assert.ok(shipDefenseTokens1);
  assert.equal(shipDefenseTokens1.length, 4, "shipDefenseTokens1.length");
  assert.equal(shipDefenseTokens1[0], 1);
  assert.equal(shipDefenseTokens1[3], 4);

  const shipDefenseTokens2 = state.shipInstances[2].defenseTokens;
  assert.ok(shipDefenseTokens2);
  assert.equal(shipDefenseTokens2.length, 4, "shipDefenseTokens2.length");
  assert.equal(shipDefenseTokens2[0], 5);
  assert.equal(shipDefenseTokens2[3], 8);

  const { shipInstances, squadronInstances, upgradeInstances } = state;
  assert.ok(shipInstances);
  assert.equal(Object.keys(shipInstances).length, 3, "shipInstances.length");
  assert.equal(shipInstances[1].shipKey, ShipCard.IMPERIAL_II_CLASS_STAR_DESTROYER);
  assert.equal(shipInstances[2].shipKey, ShipCard.IMPERIAL_STAR_DESTROYER_KUAT_REFIT);
  assert.equal(shipInstances[3].shipKey, ShipCard.GOZANTI_CLASS_CRUISERS);

  assert.ok(upgradeInstances);
  assert.equal(Object.keys(upgradeInstances).length, 14, "upgradeInstances.length");
  assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.DARTH_VADER_COMMANDER);
  assert.equal(upgradeInstances[14].upgradeKey, UpgradeCard.COMMS_NET);

  const squadronIds = fleetInstance.squadrons;
  assert.equal(squadronIds.length, 2, "fleet.squadronIds.length");
  assert.equal(squadronIds[0], 1, "fleet.squadronIds[0]");
  assert.equal(squadronIds[1], 2, "fleet.squadronIds[1]");

  assert.ok(squadronInstances);
  assert.equal(Object.keys(squadronInstances).length, 2, "squadronInstances.length");
  assert.equal(squadronInstances[1].squadronKey, SquadronCard.VALEN_RUDOR);
  assert.equal(squadronInstances[2].squadronKey, SquadronCard.CIENA_REE);

  const squadronDefenseTokens1 = state.squadronInstances[1].defenseTokens;
  assert.ok(squadronDefenseTokens1);
  assert.equal(squadronDefenseTokens1.length, 2, "squadronDefenseTokens1.length");
  assert.equal(squadronDefenseTokens1[0], 11);
  assert.equal(squadronDefenseTokens1[1], 12);

  const squadronDefenseTokens2 = state.squadronInstances[2].defenseTokens;
  assert.ok(squadronDefenseTokens2);
  assert.equal(squadronDefenseTokens2.length, 2, "squadronDefenseTokens2.length");
  assert.equal(squadronDefenseTokens2[0], 13);
  assert.equal(squadronDefenseTokens2[1], 14);
});

const FleetBuilderTest = {};
export default FleetBuilderTest;
