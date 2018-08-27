import AgentState from './AgentState.js';
import DamageState from './DamageState.js';
import DefenseTokenState from './DefenseTokenState.js';
import FleetState from './FleetState.js';
import GameState from './GameState.js';
import PositionState from './PositionState.js';
import ShipState from './ShipState.js';
import SquadronState from './SquadronState.js';
import UpgradeState from './UpgradeState.js';

const TestData = {};

TestData.createAgentImperial = (id, fleetId, strategy) =>
  AgentState.create({
    id,
    name: 'Imperial Agent',
    strategy,
    fleet: fleetId,
  });

TestData.createAgentRebel = (id, fleetId, strategy) =>
  AgentState.create({
    id,
    name: 'Rebel Agent',
    strategy,
    fleet: fleetId,
  });

TestData.createDamage = (id, damageKey) =>
  DamageState.create({
    id,
    damageKey,
  });

TestData.createDamageDeck = () => {
  const keys = [
    'blindedGunners',
    'blindedGunners',
    'capacitorFailure',
    'capacitorFailure',
    'commNoise',
    'commNoise',
    'compartmentFire',
    'compartmentFire',
    'coolantDischarge',
    'coolantDischarge',
    'crewPanic',
    'crewPanic',
    'damagedControls',
    'damagedControls',
    'damagedMunitions',
    'damagedMunitions',
    'depoweredArmament',
    'depoweredArmament',
    'disengagedFireControl',
    'disengagedFireControl',
    'faultyCountermeasures',
    'faultyCountermeasures',
    'injuredCrew',
    'injuredCrew',
    'injuredCrew',
    'injuredCrew',
    'lifeSupportFailure',
    'lifeSupportFailure',
    'pointDefenseFailure',
    'pointDefenseFailure',
    'powerFailure',
    'powerFailure',
    'projectorMisaligned',
    'projectorMisaligned',
    'rupturedEngine',
    'rupturedEngine',
    'shieldFailure',
    'shieldFailure',
    'structuralDamage',
    'structuralDamage',
    'structuralDamage',
    'structuralDamage',
    'structuralDamage',
    'structuralDamage',
    'structuralDamage',
    'structuralDamage',
    'targeterDisruption',
    'targeterDisruption',
    'thrustControlMalfunction',
    'thrustControlMalfunction',
    'thrusterFissure',
    'thrusterFissure',
  ];
  let count = 0;

  const damageInstances = keys.reduce((accum, damageKey) => {
    count += 1;
    const damageInstance = TestData.createDamage(count, damageKey);
    // accum[damageInstance.id] = damageInstance;
    // return accum;
    return R.assoc(damageInstance.id, damageInstance, accum);
  }, {});

  const damageDeck = Object.values(damageInstances).map(damage => damage.id);

  // Shuffle.
  damageDeck.sort(() => Math.random() - 0.5);

  return {
    damageInstances,
    damageDeck,
  };
};

TestData.createDefenseToken = (id, defenseTokenKey, isReady) =>
  DefenseTokenState.create({
    id,
    defenseTokenKey,
    isReady,
  });

TestData.createFleetCoreSetImperial = (fleetId, shipIds, squadronIds) =>
  FleetState.create({
    id: fleetId,
    name: 'Galactic Empire Core Set: 175 Points',
    year: 2015,
    description: 'Victory II, Howlrunner, TIE Fighters x3',
    points: 175,
    ships: shipIds,
    squadrons: squadronIds,
  });

TestData.createFleetCoreSetRebel = (fleetId, shipIds, squadronIds) =>
  FleetState.create({
    id: fleetId,
    name: 'Rebel Alliance Core Set: 173 Points',
    year: 2015,
    description: 'Nebulon-B, CR90, Luke Skywalker, X-Wings x2',
    points: 173,
    ships: shipIds,
    squadrons: squadronIds,
  });

TestData.createGameState = () => {
  const { damageDeck, damageInstances } = TestData.createDamageDeck();

  const upgradeInstances = {};
  upgradeInstances[1] = TestData.createUpgrade(1, 'grandMoffTarkin');
  upgradeInstances[2] = TestData.createUpgrade(2, 'dominator');
  upgradeInstances[3] = TestData.createUpgrade(3, 'generalDodonna');
  upgradeInstances[4] = TestData.createUpgrade(4, 'dodonnasPride');

  const defenseTokenInstances = {};
  defenseTokenInstances[1] = TestData.createDefenseToken(1, 'brace');
  defenseTokenInstances[2] = TestData.createDefenseToken(2, 'redirect');
  defenseTokenInstances[3] = TestData.createDefenseToken(3, 'redirect');
  defenseTokenInstances[4] = TestData.createDefenseToken(4, 'evade');
  defenseTokenInstances[5] = TestData.createDefenseToken(5, 'brace');
  defenseTokenInstances[6] = TestData.createDefenseToken(6, 'brace');
  defenseTokenInstances[7] = TestData.createDefenseToken(7, 'evade');
  defenseTokenInstances[8] = TestData.createDefenseToken(8, 'evade');
  defenseTokenInstances[9] = TestData.createDefenseToken(9, 'redirect');
  defenseTokenInstances[10] = TestData.createDefenseToken(10, 'brace');
  defenseTokenInstances[11] = TestData.createDefenseToken(11, 'scatter');
  defenseTokenInstances[12] = TestData.createDefenseToken(12, 'brace');
  defenseTokenInstances[13] = TestData.createDefenseToken(13, 'brace');

  const squadronPosition1 = TestData.createPosition(Math.round((915 * 1) / 6), 20, 90);
  const squadronPosition2 = TestData.createPosition(Math.round((915 * 2) / 6), 20, 90);
  const shipPosition1 = TestData.createPosition(Math.round((915 * 3) / 6), 20, 90);
  const squadronPosition3 = TestData.createPosition(Math.round((915 * 4) / 6), 20, 90);
  const squadronPosition4 = TestData.createPosition(Math.round((915 * 5) / 6), 20, 90);

  const squadronPosition5 = TestData.createPosition(Math.round((915 * 1) / 6), 915 - 20, 270);
  const shipPosition2 = TestData.createPosition(Math.round((915 * 2) / 6), 915 - 20, 270);
  const shipPosition3 = TestData.createPosition(Math.round((915 * 3) / 6), 915 - 20, 270);
  const squadronPosition6 = TestData.createPosition(Math.round((915 * 4) / 6), 915 - 20, 270);
  const squadronPosition7 = TestData.createPosition(Math.round((915 * 5) / 6), 915 - 20, 270);

  const shipInstances = {};
  shipInstances[1] = TestData.createShip(
    1,
    'victoryIiClassStarDestroyer',
    [1, 2],
    [1, 2, 3],
    shipPosition1,
  );
  shipInstances[2] = TestData.createShip(2, 'nebulonBEscortFrigate', [3], [4, 5, 6], shipPosition2);
  shipInstances[3] = TestData.createShip(3, 'cr90CorvetteA', [4], [7, 8, 9], shipPosition3);

  const squadronInstances = {};
  squadronInstances[1] = TestData.createSquadron(1, 'howlrunner', squadronPosition1, [10, 11]);
  squadronInstances[2] = TestData.createSquadron(2, 'tieFighterSquadron', squadronPosition2);
  squadronInstances[3] = TestData.createSquadron(3, 'tieFighterSquadron', squadronPosition3);
  squadronInstances[4] = TestData.createSquadron(4, 'tieFighterSquadron', squadronPosition4);
  squadronInstances[5] = TestData.createSquadron(5, 'lukeSkywalker', squadronPosition5, [12, 13]);
  squadronInstances[6] = TestData.createSquadron(6, 'xWingSquadron', squadronPosition6);
  squadronInstances[7] = TestData.createSquadron(7, 'xWingSquadron', squadronPosition7);

  const fleetInstances = {};
  fleetInstances[1] = TestData.createFleetCoreSetImperial(1, [1], [1, 2, 3, 4]);
  fleetInstances[2] = TestData.createFleetCoreSetRebel(2, [2, 3], [5, 6, 7]);

  const agentInstances = {};
  agentInstances[1] = TestData.createAgentImperial(1, 1);
  agentInstances[2] = TestData.createAgentRebel(2, 2);

  return GameState.create({
    phaseKey: 'planningStart',
    round: 1,
    userMessage: 'This is some user message.',

    damageDeck,

    agentInstances,
    damageInstances,
    defenseTokenInstances,
    fleetInstances,
    shipInstances,
    squadronInstances,
    upgradeInstances,
  });
};

TestData.createPosition = (x, y, heading) =>
  PositionState.create({
    x,
    y,
    heading,
  });

TestData.createShip = (id, shipKey, upgradeIds, defenseTokenIds, position) =>
  ShipState.create({
    id,
    shipKey,
    defenseTokens: defenseTokenIds,
    upgrades: upgradeIds,
    position,
  });

TestData.createSquadron = (id, squadronKey, position, defenseTokenIds) =>
  SquadronState.create({
    id,
    squadronKey,
    defenseTokens: defenseTokenIds,
    position,
  });

TestData.createUpgrade = (id, upgradeKey, tokenCounts) =>
  UpgradeState.create({
    id,
    upgradeKey,
    tokenCounts,
  });

export default TestData;
