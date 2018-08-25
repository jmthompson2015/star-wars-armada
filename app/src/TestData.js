const ActionCreator = AS.ActionCreator;
const AgentState = AS.AgentState;
const FleetState = AS.FleetState;

const TestData = {};

TestData.createAgentImperial = function(id, fleetId, strategy)
{
   return AgentState.create(
   {
      id: id,
      name: "Imperial Agent",
      strategy: strategy,
      fleet: fleetId
   });
};

TestData.createAgentRebel = function(id, fleetId, strategy)
{
   return AgentState.create(
   {
      id: id,
      name: "Rebel Agent",
      strategy: strategy,
      fleet: fleetId
   });
};

TestData.createDefenseToken = (id, defenseTokenKey, isReady) =>
{
   return AS.DefenseTokenState.create(
   {
      id: id,
      defenseTokenKey: defenseTokenKey,
      isReady: isReady
   });
};

TestData.createFleetCoreSetImperial = function(fleetId, shipIds, squadronIds)
{
   return FleetState.create(
   {
      id: fleetId,
      name: "Galactic Empire Core Set: 175 Points",
      year: 2015,
      description: "Victory II, Howlrunner, TIE Fighters x3",
      points: 175,
      ships: shipIds,
      squadrons: squadronIds
   });
};

TestData.createFleetCoreSetRebel = function(fleetId, shipIds, squadronIds)
{
   return FleetState.create(
   {
      id: fleetId,
      name: "Rebel Alliance Core Set: 173 Points",
      year: 2015,
      description: "Nebulon-B, CR90, Luke Skywalker, X-Wings x2",
      points: 173,
      ships: shipIds,
      squadrons: squadronIds
   });
};

TestData.createPosition = function(x, y, heading)
{
   return AS.PositionState.create(
   {
      x: x,
      y: y,
      heading: heading
   });
};

TestData.createShip = function(id, shipKey, upgradeIds, defenseTokenIds, position)
{
   return AS.ShipState.create(
   {
      id: id,
      shipKey: shipKey,
      defenseTokens: defenseTokenIds,
      upgrades: upgradeIds,
      position: position
   });
};

TestData.createSquadron = function(id, squadronKey, position, defenseTokenIds)
{
   return AS.SquadronState.create(
   {
      id: id,
      squadronKey: squadronKey,
      defenseTokens: defenseTokenIds,
      position: position
   });
};

TestData.createStore = (width = 915) =>
{
   const store = Redux.createStore(AS.Reducer.root);

   const damageObj = AM.DamageDeck.create();
   store.dispatch(ActionCreator.setDamageInstances(damageObj.damageInstances));
   store.dispatch(ActionCreator.setDamageDeck(damageObj.damageDeck));

   store.dispatch(ActionCreator.setUpgradeInstance(TestData.createUpgrade(1, "grandMoffTarkin")));
   store.dispatch(ActionCreator.setUpgradeInstance(TestData.createUpgrade(2, "dominator")));
   store.dispatch(ActionCreator.setUpgradeInstance(TestData.createUpgrade(3, "generalDodonna")));
   store.dispatch(ActionCreator.setUpgradeInstance(TestData.createUpgrade(4, "dodonnasPride")));

   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(1, "brace")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(2, "redirect")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(3, "redirect")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(4, "evade")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(5, "brace")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(6, "brace")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(7, "evade")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(8, "evade")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(9, "redirect")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(10, "brace")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(11, "scatter")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(12, "brace")));
   store.dispatch(ActionCreator.setDefenseTokenInstance(TestData.createDefenseToken(13, "brace")));

   const squadronPosition1 = TestData.createPosition(Math.round(width / 2 - 200), 52, 90);
   const squadronPosition2 = TestData.createPosition(Math.round(width / 2 - 100), 52, 90);
   const shipPosition1 = TestData.createPosition(Math.round(width / 2), 52, 90);
   const squadronPosition3 = TestData.createPosition(Math.round(width / 2 + 100), 52, 90);
   const squadronPosition4 = TestData.createPosition(Math.round(width / 2 + 200), 52, 90);

   const squadronPosition5 = TestData.createPosition(Math.round(width / 2 - 200), 915 - 37, 270);
   const shipPosition2 = TestData.createPosition(Math.round(width / 2 - 100), 915 - 37, 270);
   const squadronPosition6 = TestData.createPosition(Math.round(width / 2), 915 - 37, 270);
   const shipPosition3 = TestData.createPosition(Math.round(width / 2 + 100), 915 - 37, 270);
   const squadronPosition7 = TestData.createPosition(Math.round(width / 2 + 200), 915 - 37, 270);

   store.dispatch(ActionCreator.setShipInstance(TestData.createShip(1, "victoryIiClassStarDestroyer", [1, 2], [1, 2, 3], shipPosition1)));
   store.dispatch(ActionCreator.setShipInstance(TestData.createShip(2, "nebulonBEscortFrigate", [3], [4, 5, 6], shipPosition2)));
   store.dispatch(ActionCreator.setShipInstance(TestData.createShip(3, "cr90CorvetteA", [4], [7, 8, 9], shipPosition3)));

   store.dispatch(ActionCreator.setSquadronInstance(TestData.createSquadron(1, "howlrunner", squadronPosition1, [10, 11])));
   store.dispatch(ActionCreator.setSquadronInstance(TestData.createSquadron(2, "tieFighterSquadron", squadronPosition2)));
   store.dispatch(ActionCreator.setSquadronInstance(TestData.createSquadron(3, "tieFighterSquadron", squadronPosition3)));
   store.dispatch(ActionCreator.setSquadronInstance(TestData.createSquadron(4, "tieFighterSquadron", squadronPosition4)));
   store.dispatch(ActionCreator.setSquadronInstance(TestData.createSquadron(5, "lukeSkywalker", squadronPosition5, [12, 13])));
   store.dispatch(ActionCreator.setSquadronInstance(TestData.createSquadron(6, "xWingSquadron", squadronPosition6)));
   store.dispatch(ActionCreator.setSquadronInstance(TestData.createSquadron(7, "xWingSquadron", squadronPosition7)));

   store.dispatch(ActionCreator.setFleetInstance(TestData.createFleetCoreSetImperial(1, [1], [1, 2, 3, 4])));
   store.dispatch(ActionCreator.setFleetInstance(TestData.createFleetCoreSetRebel(2, [2, 3], [5, 6, 7])));

   store.dispatch(ActionCreator.setAgentInstance(TestData.createAgentImperial(1, 1)));
   store.dispatch(ActionCreator.setAgentInstance(TestData.createAgentRebel(2, 2)));

   return store;
};

TestData.createUpgrade = function(id, upgradeKey, tokenCounts)
{
   return AS.UpgradeState.create(
   {
      id: id,
      upgradeKey: upgradeKey,
      tokenCounts: tokenCounts
   });
};

export default TestData;