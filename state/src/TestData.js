import AgentState from "./AgentState.js";
import DamageState from "./DamageState.js";
import FleetState from "./FleetState.js";
import GameState from "./GameState.js";
import PositionState from "./PositionState.js";
import ShipState from "./ShipState.js";
import SquadronState from "./SquadronState.js";
import UpgradeState from "./UpgradeState.js";

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

TestData.createDamage = function(id, damageKey)
{
   return DamageState.create(
   {
      id: id,
      damageKey: damageKey
   });
};

TestData.createDamageDeck = function()
{
   const keys = ["blindedGunners", "blindedGunners", "capacitorFailure", "capacitorFailure", "commNoise", "commNoise", "compartmentFire", "compartmentFire", "coolantDischarge", "coolantDischarge", "crewPanic", "crewPanic", "damagedControls", "damagedControls", "damagedMunitions", "damagedMunitions", "depoweredArmament", "depoweredArmament", "disengagedFireControl", "disengagedFireControl", "faultyCountermeasures", "faultyCountermeasures", "injuredCrew", "injuredCrew", "injuredCrew", "injuredCrew", "lifeSupportFailure", "lifeSupportFailure", "pointDefenseFailure", "pointDefenseFailure", "powerFailure", "powerFailure", "projectorMisaligned", "projectorMisaligned", "rupturedEngine", "rupturedEngine", "shieldFailure", "shieldFailure", "structuralDamage", "structuralDamage", "structuralDamage", "structuralDamage", "structuralDamage", "structuralDamage", "structuralDamage", "structuralDamage", "targeterDisruption", "targeterDisruption", "thrustControlMalfunction", "thrustControlMalfunction", "thrusterFissure", "thrusterFissure"];
   let count = 0;

   const damageInstances = keys.reduce((accum, damageKey) =>
   {
      count++;
      const damageInstance = TestData.createDamage(count, damageKey);
      accum[damageInstance.id] = damageInstance;
      return accum;
   },
   {});

   const damageDeck = Object.values(damageInstances).map(damage => damage.id);

   // Shuffle.
   damageDeck.sort(() => Math.random() - 0.5);

   return (
   {
      damageInstances: damageInstances,
      damageDeck: damageDeck
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

TestData.createGameState = function()
{
   const damageObj = TestData.createDamageDeck();
   const damageInstances = damageObj.damageInstances;
   const damageDeck = damageObj.damageDeck;

   const upgradeInstances = {};
   upgradeInstances[1] = TestData.createUpgrade(1, "grandMoffTarkin");
   upgradeInstances[2] = TestData.createUpgrade(2, "dominator");
   upgradeInstances[3] = TestData.createUpgrade(3, "generalDodonna");
   upgradeInstances[4] = TestData.createUpgrade(4, "dodonnasPride");

   const squadronPosition1 = TestData.createPosition(Math.round(915 * 1 / 6), 20, 90);
   const squadronPosition2 = TestData.createPosition(Math.round(915 * 2 / 6), 20, 90);
   const shipPosition1 = TestData.createPosition(Math.round(915 * 3 / 6), 20, 90);
   const squadronPosition3 = TestData.createPosition(Math.round(915 * 4 / 6), 20, 90);
   const squadronPosition4 = TestData.createPosition(Math.round(915 * 5 / 6), 20, 90);

   const squadronPosition5 = TestData.createPosition(Math.round(915 * 1 / 6), 915 - 20, 270);
   const shipPosition2 = TestData.createPosition(Math.round(915 * 2 / 6), 915 - 20, 270);
   const shipPosition3 = TestData.createPosition(Math.round(915 * 3 / 6), 915 - 20, 270);
   const squadronPosition6 = TestData.createPosition(Math.round(915 * 4 / 6), 915 - 20, 270);
   const squadronPosition7 = TestData.createPosition(Math.round(915 * 5 / 6), 915 - 20, 270);

   const shipInstances = {};
   shipInstances[1] = TestData.createShip(1, "victoryIiClassStarDestroyer", [1, 2], shipPosition1);
   shipInstances[2] = TestData.createShip(2, "nebulonBEscortFrigate", [3], shipPosition2);
   shipInstances[3] = TestData.createShip(3, "cr90CorvetteA", [4], shipPosition3);

   const squadronInstances = {};
   squadronInstances[1] = TestData.createSquadron(1, "howlrunner", squadronPosition1);
   squadronInstances[2] = TestData.createSquadron(2, "tieFighterSquadron", squadronPosition2);
   squadronInstances[3] = TestData.createSquadron(3, "tieFighterSquadron", squadronPosition3);
   squadronInstances[4] = TestData.createSquadron(4, "tieFighterSquadron", squadronPosition4);
   squadronInstances[5] = TestData.createSquadron(5, "lukeSkywalker", squadronPosition5);
   squadronInstances[6] = TestData.createSquadron(6, "xWingSquadron", squadronPosition6);
   squadronInstances[7] = TestData.createSquadron(7, "xWingSquadron", squadronPosition7);

   const fleetInstances = {};
   fleetInstances[1] = TestData.createFleetCoreSetImperial(1, [1], [1, 2, 3, 4]);
   fleetInstances[2] = TestData.createFleetCoreSetRebel(2, [2, 3], [5, 6, 7]);

   const agentInstances = {};
   agentInstances[1] = TestData.createAgentImperial(1, 1);
   agentInstances[2] = TestData.createAgentRebel(2, 2);

   return GameState.create(
   {
      phaseKey: "planningStart",
      round: 1,
      userMessage: "This is some user message.",

      damageDeck: damageDeck,

      agentInstances: agentInstances,
      damageInstances: damageInstances,
      fleetInstances: fleetInstances,
      shipInstances: shipInstances,
      squadronInstances: squadronInstances,
      upgradeInstances: upgradeInstances
   });
};

TestData.createPosition = function(x, y, heading)
{
   return PositionState.create(
   {
      x: x,
      y: y,
      heading: heading
   });
};

TestData.createShip = function(id, shipKey, upgradeIds, position)
{
   return ShipState.create(
   {
      id: id,
      shipKey: shipKey,
      upgrades: upgradeIds,
      position: position,
   });
};

TestData.createSquadron = function(id, squadronKey, upgradeIds, position)
{
   return SquadronState.create(
   {
      id: id,
      squadronKey: squadronKey,
      upgrades: upgradeIds,
      position: position
   });
};

TestData.createUpgrade = function(id, upgradeKey, tokenCounts)
{
   return UpgradeState.create(
   {
      id: id,
      upgradeKey: upgradeKey,
      tokenCounts: tokenCounts
   });
};

export default TestData;