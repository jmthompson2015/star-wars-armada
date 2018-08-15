import FleetBuilder from "./FleetBuilder.js";

const ShipCard = AA.ShipCard;
const SquadronCard = AA.SquadronCard;
const UpgradeCard = AA.UpgradeCard;

const Reducer = AS.Reducer;

QUnit.module("FleetBuilder");

QUnit.test("build() Core Set Imperial", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root);
   const fleetId = 1;
   const name = "Galactic Empire Core Set: 175 Points";
   const year = 2015;
   const description = "Victory II, Howlrunner, TIE Fighters x3";
   const shipAndUpgradeKeys = [];
   shipAndUpgradeKeys.push(
   {
      shipKey: ShipCard.VICTORY_II_CLASS_STAR_DESTROYER,
      upgradeKeys: [UpgradeCard.GRAND_MOFF_TARKIN, UpgradeCard.DOMINATOR]
   });
   const squadronKeys = [SquadronCard.HOWLRUNNER, SquadronCard.TIE_FIGHTER_SQUADRON, SquadronCard.TIE_FIGHTER_SQUADRON, SquadronCard.TIE_FIGHTER_SQUADRON];

   // Run.
   FleetBuilder.build(store, name, year, description, fleetId, shipAndUpgradeKeys, squadronKeys);

   // Verify.
   verifyCoreSetImperial(assert, store, fleetId);
});

QUnit.test("build() Core Set Rebel", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root);
   const fleetId = 2;
   const name = "Rebel Alliance Core Set: 173 Points";
   const year = 2015;
   const description = "Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2";
   const shipAndUpgradeKeys = [
      {
         shipKey: ShipCard.NEBULON_B_ESCORT_FRIGATE,
         upgradeKeys: [UpgradeCard.GENERAL_DODONNA]
      },
      {
         shipKey: ShipCard.CR90_CORVETTE_A,
         upgradeKeys: [UpgradeCard.DODONNAS_PRIDE]
      }];
   const squadronKeys = [SquadronCard.LUKE_SKYWALKER, SquadronCard.X_WING_SQUADRON, SquadronCard.X_WING_SQUADRON];

   // Run.
   FleetBuilder.build(store, name, year, description, fleetId, shipAndUpgradeKeys, squadronKeys);

   // Verify.
   verifyCoreSetRebel(assert, store, fleetId);
});

QUnit.test("buildCoreSetImperial()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root);
   const fleetId = 1;

   // Run.
   FleetBuilder.buildCoreSetImperial(store, fleetId);

   // Verify.
   verifyCoreSetImperial(assert, store, fleetId);
});

QUnit.test("buildCoreSetRebel()", function(assert)
{
   // Setup.
   const store = Redux.createStore(Reducer.root);
   const fleetId = 2;

   // Run.
   FleetBuilder.buildCoreSetRebel(store, fleetId);

   // Verify.
   verifyCoreSetRebel(assert, store, fleetId);
});

const verifyCoreSetImperial = (assert, store, fleetId) =>
{
   const fleetInstance = store.getState().fleetInstances[fleetId];

   assert.ok(fleetInstance);
   assert.equal(fleetInstance.id, fleetId, "fleet.id");
   assert.equal(fleetInstance.name, "Galactic Empire Core Set: 175 Points", "fleet.name");
   assert.equal(fleetInstance.year, 2015, "fleet.year");
   assert.equal(fleetInstance.description, "Victory II, Howlrunner, TIE Fighters x3", "fleet.description");
   assert.equal(fleetInstance.points, 175, "fleet.points");

   const shipIds = fleetInstance.ships;
   assert.equal(shipIds.length, 1, "fleet.shipIds.length");
   assert.equal(shipIds[0], 1, "fleet.shipIds[0]");

   const shipInstances = store.getState().shipInstances;
   assert.ok(shipInstances);
   assert.equal(Object.keys(shipInstances).length, 1, "pilotInstances.length === 1");
   assert.equal(shipInstances[1].shipKey, ShipCard.VICTORY_II_CLASS_STAR_DESTROYER);

   const upgradeInstances = store.getState().upgradeInstances;
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

   const squadronInstances = store.getState().squadronInstances;
   assert.ok(squadronInstances);
   assert.equal(Object.keys(squadronInstances).length, 4, "squadronInstances.length === 4");
   assert.equal(squadronInstances[1].squadronKey, SquadronCard.HOWLRUNNER);
   assert.equal(squadronInstances[2].squadronKey, SquadronCard.TIE_FIGHTER_SQUADRON);
   assert.equal(squadronInstances[3].squadronKey, SquadronCard.TIE_FIGHTER_SQUADRON);
   assert.equal(squadronInstances[4].squadronKey, SquadronCard.TIE_FIGHTER_SQUADRON);
};

const verifyCoreSetRebel = (assert, store, fleetId) =>
{
   const fleetInstance = store.getState().fleetInstances[fleetId];

   assert.ok(fleetInstance);
   assert.equal(fleetInstance.id, fleetId, "fleet.id");
   assert.equal(fleetInstance.name, "Rebel Alliance Core Set: 173 Points", "fleet.name");
   assert.equal(fleetInstance.year, 2015, "fleet.year");
   assert.equal(fleetInstance.description, "Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2", "fleet.description");
   assert.equal(fleetInstance.points, 173, "fleet.points");

   const shipIds = fleetInstance.ships;
   assert.equal(shipIds.length, 2, "fleet.shipIds.length");
   assert.equal(shipIds[0], 1, "fleet.shipIds[0]");
   assert.equal(shipIds[1], 2, "fleet.shipIds[1]");

   const shipInstances = store.getState().shipInstances;
   assert.ok(shipInstances);
   assert.equal(Object.keys(shipInstances).length, 2, "pilotInstances.length === 2");
   assert.equal(shipInstances[1].shipKey, ShipCard.NEBULON_B_ESCORT_FRIGATE);
   assert.equal(shipInstances[2].shipKey, ShipCard.CR90_CORVETTE_A);

   const upgradeInstances = store.getState().upgradeInstances;
   assert.ok(upgradeInstances);
   assert.equal(Object.keys(upgradeInstances).length, 2, "upgradeInstances.length === 2");
   assert.equal(upgradeInstances[1].upgradeKey, UpgradeCard.GENERAL_DODONNA);
   assert.equal(upgradeInstances[2].upgradeKey, UpgradeCard.DODONNAS_PRIDE);

   const squadronIds = fleetInstance.squadrons;
   assert.equal(squadronIds.length, 3, "fleet.squadronIds.length");
   assert.equal(squadronIds[0], 1, "fleet.squadronIds[0]");
   assert.equal(squadronIds[1], 2, "fleet.squadronIds[1]");
   assert.equal(squadronIds[2], 3, "fleet.squadronIds[2]");

   const squadronInstances = store.getState().squadronInstances;
   assert.ok(squadronInstances);
   assert.equal(Object.keys(squadronInstances).length, 3, "squadronInstances.length === 3");
   assert.equal(squadronInstances[1].squadronKey, SquadronCard.LUKE_SKYWALKER);
   assert.equal(squadronInstances[2].squadronKey, SquadronCard.X_WING_SQUADRON);
   assert.equal(squadronInstances[3].squadronKey, SquadronCard.X_WING_SQUADRON);
};

const FleetBuilderTest = {};
export default FleetBuilderTest;