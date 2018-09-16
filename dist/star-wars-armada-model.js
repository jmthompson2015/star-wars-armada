(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.AM = {})));
}(this, (function (exports) { 'use strict';

  const AgentQueryType = {
    CHOOSE_COMMANDS: 'chooseCommands',
  };

  AgentQueryType.properties = {
    chooseCommands: {
      name: 'Choose Commands',
      key: 'chooseCommands',
    },
  };

  Object.freeze(AgentQueryType);

  const { ActionCreator } = AS;

  const TaskUtilities = {};

  TaskUtilities.processPhase = ({
    phaseKey,
    processFunction,
    responseKey,
    responseFunction,
  }) => store =>
    new Promise((resolve, reject) => {
      const agentQuery = AS.Selector.agentQuery(store.getState());
      const agentResponse = AS.Selector.agentResponse(store.getState());

      if (agentQuery !== undefined) {
        reject(
          new Error(
            `Received agentQuery for phaseKey: ${phaseKey}\nagentQuery = ${JSON.stringify(
            agentQuery,
            null,
            '   ',
          )}`,
          ),
        );
      } else if (agentResponse !== undefined && agentResponse.responseKey === responseKey) {
        if (responseFunction !== undefined) {
          responseFunction(store);
          store.dispatch(ActionCreator.clearAgentResponse());
          resolve(store);
        } else {
          reject(new Error(`Missing responseFunction for phaseKey: ${phaseKey}`));
        }
      } else if (processFunction !== undefined) {
        processFunction(store);
        resolve(store);
      } else {
        reject(new Error(`Missing processFunction for phaseKey: ${phaseKey}`));
      }
    });

  Object.freeze(TaskUtilities);

  const { Phase } = AA;

  const { ActionCreator: ActionCreator$1 } = AS;

  const CommandTask = {};

  const PHASE_TO_CONFIG = {};

  const setPhase = (store, phaseKey) => store.dispatch(ActionCreator$1.setPhase(phaseKey));

  const end = store =>
    new Promise(resolve => {
      setPhase(store, Phase.SHIP_START);
      resolve(store);
    });

  const setCommandQueue = store => {
    const agentIds = AS.Selector.agentIds(store.getState());
    store.dispatch(ActionCreator$1.setActiveQueue(agentIds));
  };

  const start = store =>
    new Promise(resolve => {
      setCommandQueue(store);
      setPhase(store, Phase.COMMAND_COMMANDING);
      resolve(store);
    });

  CommandTask.doIt = store => {
    let answer;
    let config;
    const phaseKey = AS.Selector.phaseKey(store.getState());

    switch (phaseKey) {
      case Phase.COMMAND_START:
        answer = start(store);
        break;
      case Phase.COMMAND_END:
        answer = end(store);
        break;
      default:
        config = PHASE_TO_CONFIG[phaseKey];
        answer = TaskUtilities.processPhase({
          phaseKey,
          responseKey: config.responseKey,
          responseFunction: config.responseFunction,
          processFunction: config.processFunction,
        })(store);
    }

    return answer;
  };

  // //////////////////////////////////////////////////////////////////////////////
  PHASE_TO_CONFIG[Phase.COMMAND_COMMANDING] = {
    processFunction: store => {
      const commandQueue = AS.Selector.activeQueue(store.getState());

      if (commandQueue.length > 0) {
        store.dispatch(ActionCreator$1.dequeueCommand());
        const activeAgentId = AS.Selector.activeAgentId(store.getState());
        const fleetId = AS.Selector.agentInstance(activeAgentId, store.getState()).fleet;
        const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, store.getState());
        const reduceFunction = (accum, ship) =>
          R.assoc(ship.id, AA.Selector.enumKeys(AA.Command), accum);
        const shipToValidCommands = R.reduce(reduceFunction, {}, shipInstances);
        const newAgentQuery = AS.AgentQueryState.create({
          agentId: activeAgentId,
          queryKey: AgentQueryType.CHOOSE_COMMANDS,
          payload: {
            shipToValidCommands,
          },
        });
        store.dispatch(ActionCreator$1.setAgentQuery(newAgentQuery));
      } else {
        store.dispatch(ActionCreator$1.clearActiveAgentId());
        store.dispatch(ActionCreator$1.setPhase(Phase.COMMAND_END));
      }
    },
    responseKey: AgentQueryType.CHOOSE_COMMANDS,
    responseFunction: store => {
      // FIXME: process agent response.
      // const agentResponse = AS.Selector.agentResponse(store.getState());
      // console.log("COMMANDING responseFunction() agentResponse = " +
      //  JSON.stringify(agentResponse, null, "   "));
      store.dispatch(ActionCreator$1.clearAgentResponse());
    },
  };

  // //////////////////////////////////////////////////////////////////////////////

  Object.freeze(CommandTask);

  const DamageDeck = {};

  const createDamage = (id, damageKey) =>
    AS.DamageState.create({
      id,
      damageKey,
    });

  DamageDeck.create = () => {
    const keys = AA.EnumUtilities.keys(AA.DamageCard);
    let count = 0;

    const damageInstances = keys.reduce((accum, damageKey) => {
      const damageCard = AA.Selector.damageCard(damageKey);
      const map = accum;

      for (let i = 0; i < damageCard.amount; i += 1) {
        count += 1;
        const damageInstance = createDamage(count, damageKey);
        map[damageInstance.id] = damageInstance;
      }
      return map;
    }, {});

    const damageDeck = Object.values(damageInstances).map(damage => damage.id);

    // Shuffle.
    damageDeck.sort(() => Math.random() - 0.5);

    return {
      damageInstances,
      damageDeck,
    };
  };

  Object.freeze(DamageDeck);

  const { DiceValue } = AA;

  const DiceUtilities = {};

  const myRollDice = valueFunction => count => {
    const answer = [];

    for (let i = 0; i < count; i += 1) {
      answer.push(valueFunction());
    }

    return Immutable(answer);
  };

  const rollRandomBlackValue = () => {
    const min = 1;
    const max = 8;
    const roll = Math.floor(Math.random() * (max - min + 1)) + min;
    let answer;

    // There are 4x hit, 2x (hit + critical hit), and 2x blank.
    switch (roll) {
      case 1:
      case 4:
      case 7:
      case 8:
        answer = DiceValue.BLACK_HIT;
        break;
      case 2:
      case 5:
        answer = DiceValue.BLACK_HIT_CRITICAL;
        break;
      case 3:
      case 6:
        answer = DiceValue.BLACK_BLANK;
        break;
      default:
        throw new Error(`Unsupported roll: ${roll}`);
    }

    return answer;
  };

  const rollRandomBlueValue = () => {
    const min = 1;
    const max = 8;
    const roll = Math.floor(Math.random() * (max - min + 1)) + min;
    let answer;

    // There are 4x hit, 2x critical hit, and 2x accuracy.
    switch (roll) {
      case 1:
      case 4:
      case 7:
      case 8:
        answer = DiceValue.BLUE_HIT;
        break;
      case 2:
      case 5:
        answer = DiceValue.BLUE_CRITICAL;
        break;
      case 3:
      case 6:
        answer = DiceValue.BLUE_ACCURACY;
        break;
      default:
        throw new Error(`Unsupported roll: ${roll}`);
    }

    return answer;
  };

  const rollRandomRedValue = () => {
    const min = 1;
    const max = 8;
    const roll = Math.floor(Math.random() * (max - min + 1)) + min;
    let answer;

    // There are 2x hit, 1x double hit, 2x critical hit, 1x accuracy, and 2x blank.
    switch (roll) {
      case 1:
      case 6:
        answer = DiceValue.RED_HIT;
        break;
      case 2:
        answer = DiceValue.RED_HIT_HIT;
        break;
      case 3:
      case 7:
        answer = DiceValue.RED_CRITICAL;
        break;
      case 4:
        answer = DiceValue.RED_ACCURACY;
        break;
      case 5:
      case 8:
        answer = DiceValue.RED_BLANK;
        break;
      default:
        throw new Error(`Unsupported roll: ${roll}`);
    }

    return answer;
  };

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  DiceUtilities.rollDice = ({ black = 0, blue = 0, red = 0 }) => {
    let answer = [];

    answer = R.concat(answer, myRollDice(rollRandomBlackValue)(black));
    answer = R.concat(answer, myRollDice(rollRandomBlueValue)(blue));
    answer = R.concat(answer, myRollDice(rollRandomRedValue)(red));

    return answer;
  };

  Object.freeze(DiceUtilities);

  const { ActionCreator: ActionCreator$2 } = AS;

  const { ShipCard: SC, SquadronCard: SQC, UpgradeCard: UC } = AA;

  const FleetBuilder = {};

  const computePoints = (shipAndUpgradeKeys, squadronKeys) => {
    const upgradeReducer = (accumulator, upgradeKey) => {
      const upgrade = AA.Selector.upgradeCard(upgradeKey);
      return accumulator + (upgrade !== undefined ? upgrade.points : 0);
    };
    const reducerFunction1 = (accumulator, element) => {
      const shipPoints = AA.Selector.shipCard(element.shipKey).points;
      const upgradePoints = R.reduce(upgradeReducer, 0, R.defaultTo([], element.upgradeKeys));
      return accumulator + shipPoints + upgradePoints;
    };
    const reducerFunction2 = (accumulator, squadronKey) => {
      const squadronPoints = AA.Selector.squadronCard(squadronKey).points;
      return accumulator + squadronPoints;
    };

    return (
      R.reduce(reducerFunction1, 0, shipAndUpgradeKeys) + R.reduce(reducerFunction2, 0, squadronKeys)
    );
  };

  const createShip = (store, shipKey) => {
    // Side effects.
    const shipId = AS.Selector.nextShipId(store.getState());

    return AS.ShipState.create({
      id: shipId,
      shipKey
    });
  };

  const createSquadron = (store, squadronKey) => {
    // Side effects.
    const squadronId = AS.Selector.nextSquadronId(store.getState());

    return AS.SquadronState.create({
      id: squadronId,
      squadronKey
    });
  };

  const createUpgrade = (store, upgradeKey) => {
    // Side effects.
    const upgradeId = AS.Selector.nextUpgradeId(store.getState());

    return AS.UpgradeState.create({
      id: upgradeId,
      upgradeKey
    });
  };

  const processDefenseTokens = (store, defenseTokens) => {
    const reduceFunction = (accum, token) => {
      const tokenId = AS.Selector.nextDefenseTokenId(store.getState());
      const defenseTokenInstance = AS.DefenseTokenState.create({
        id: tokenId,
        defenseTokenKey: token.key
      });
      store.dispatch(ActionCreator$2.setDefenseTokenInstance(defenseTokenInstance));

      return R.append(tokenId, accum);
    };

    return R.reduce(reduceFunction, [], defenseTokens);
  };

  const processUpgradeKey = store => (accumulator, upgradeKey) => {
    const tokenCounts = AS.TokenCountsState.create();

    // Side effects.
    const upgrade = createUpgrade(store, upgradeKey);
    store.dispatch(ActionCreator$2.setUpgradeInstance(upgrade));
    store.dispatch(ActionCreator$2.setUpgradeTokenCounts(upgrade.id, tokenCounts));

    return R.append(upgrade.id, accumulator);
  };

  const processShipKey = store => (accumulator, shipObj) => {
    const { shipKey } = shipObj;
    const upgradeKeys = R.defaultTo([], shipObj.upgradeKeys);
    const reducerFunction = processUpgradeKey(store);
    const upgradeIds = R.reduce(reducerFunction, [], upgradeKeys);

    // Side effects.
    const ship = createShip(store, shipKey);
    store.dispatch(ActionCreator$2.setShipInstance(ship));
    store.dispatch(ActionCreator$2.setShipUpgrades(ship.id, upgradeIds));

    return R.append(ship.id, accumulator);
  };

  const processSquadronKey = store => (accumulator, squadronKey) => {
    // Side effects.
    const squadron = createSquadron(store, squadronKey);
    store.dispatch(ActionCreator$2.setSquadronInstance(squadron));

    return R.append(squadron.id, accumulator);
  };

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  FleetBuilder.build = ({
    store,
    name,
    year,
    description,
    author,
    fleetId,
    shipAndUpgradeKeys,
    squadronKeys
  }) => {
    const reducerFunction1 = processShipKey(store);
    const shipIds = R.reduce(reducerFunction1, [], shipAndUpgradeKeys);
    const reducerFunction2 = processSquadronKey(store);
    const squadronIds = R.reduce(reducerFunction2, [], squadronKeys);
    const points = computePoints(shipAndUpgradeKeys, squadronKeys);

    const answer = AS.FleetState.create({
      id: fleetId,
      name,
      year,
      description,
      author,
      points,
      ships: shipIds,
      squadrons: squadronIds
    });

    store.dispatch(ActionCreator$2.setFleetInstance(answer));
    store.dispatch(ActionCreator$2.setFleetShips(fleetId, shipIds));
    store.dispatch(ActionCreator$2.setFleetSquadrons(fleetId, squadronIds));

    const forEachFunction1 = shipId => {
      const shipInstance = AS.Selector.shipInstance(shipId, store.getState());
      const defenseTokens = AA.Selector.defenseTokenValuesByShip(shipInstance.shipKey);
      const defenseTokenIds = processDefenseTokens(store, defenseTokens);
      store.dispatch(ActionCreator$2.setShipDefenseTokens(shipId, defenseTokenIds));
    };
    R.forEach(forEachFunction1, shipIds);

    const forEachFunction2 = squadronId => {
      const squadronInstance = AS.Selector.squadronInstance(squadronId, store.getState());
      const defenseTokens = AA.Selector.defenseTokenValuesBySquadron(squadronInstance.squadronKey);
      const defenseTokenIds = processDefenseTokens(store, defenseTokens);
      store.dispatch(ActionCreator$2.setSquadronDefenseTokens(squadronId, defenseTokenIds));
    };
    R.forEach(forEachFunction2, squadronIds);

    return answer;
  };

  FleetBuilder.buildCoreSetImperial = (store, fleetId) => {
    const shipAndUpgradeKeys = [
      {
        shipKey: SC.VICTORY_II_CLASS_STAR_DESTROYER,
        upgradeKeys: [UC.GRAND_MOFF_TARKIN, UC.DOMINATOR]
      }
    ];
    const squadronKeys = [
      SQC.HOWLRUNNER,
      SQC.TIE_FIGHTER_SQUADRON,
      SQC.TIE_FIGHTER_SQUADRON,
      SQC.TIE_FIGHTER_SQUADRON
    ];

    return FleetBuilder.build({
      store,
      name: "Galactic Empire Core Set: 175 Points",
      year: 2015,
      description: "Victory II, Howlrunner, TIE Fighters x3",
      author: "CISAdmiral",
      fleetId,
      shipAndUpgradeKeys,
      squadronKeys
    });
  };

  FleetBuilder.buildCoreSetRebel = (store, fleetId) => {
    const shipAndUpgradeKeys = [
      {
        shipKey: SC.NEBULON_B_ESCORT_FRIGATE,
        upgradeKeys: [UC.GENERAL_DODONNA]
      },
      {
        shipKey: SC.CR90_CORVETTE_A,
        upgradeKeys: [UC.DODONNAS_PRIDE]
      }
    ];
    const squadronKeys = [SQC.LUKE_SKYWALKER, SQC.X_WING_SQUADRON, SQC.X_WING_SQUADRON];

    return FleetBuilder.build({
      store,
      name: "Rebel Alliance Core Set: 173 Points",
      year: 2015,
      description: "Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2",
      author: "CISAdmiral",
      fleetId,
      shipAndUpgradeKeys,
      squadronKeys
    });
  };

  // see https://www.fantasyflightgames.com/en/news/2018/1/17/hes-going-to-fight/
  FleetBuilder.buildDefiance = (store, fleetId) => {
    const shipAndUpgradeKeys = [
      {
        shipKey: SC.MC80_COMMAND_CRUISER,
        upgradeKeys: [
          UC.DEFIANCE,
          UC.FLIGHT_COMMANDER,
          UC.ENGINE_TECHS,
          UC.RAPID_LAUNCH_BAYS,
          UC.ELECTRONIC_COUNTERMEASURES,
          UC.QUAD_BATTERY_TURRETS,
          UC.LEADING_SHOTS
        ]
      },
      {
        shipKey: SC.HAMMERHEAD_TORPEDO_CORVETTE,
        upgradeKeys: [UC.ADMIRAL_RADDUS, UC.EXTERNAL_RACKS]
      },
      {
        shipKey: SC.GR_75_MEDIUM_TRANSPORTS,
        upgradeKeys: [UC.BOMBER_COMMAND_CENTER]
      },
      {
        shipKey: SC.GR_75_MEDIUM_TRANSPORTS,
        upgradeKeys: [UC.COMMS_NET]
      },
      {
        shipKey: SC.GR_75_MEDIUM_TRANSPORTS,
        upgradeKeys: [UC.BRIGHT_HOPE, UC.TORYN_FARR]
      }
    ];
    const squadronKeys = [
      SQC.B_WING_SQUADRON,
      SQC.B_WING_SQUADRON,
      SQC.B_WING_SQUADRON,
      SQC.HWK_290,
      SQC.A_WING_SQUADRON,
      SQC.A_WING_SQUADRON,
      SQC.SHARA_BEY,
      SQC.TYCHO_CELCHU
    ];

    return FleetBuilder.build({
      store,
      name: "Defiance",
      year: 2018,
      description:
        "MC80, Hammerhead, GR-75 x3, B-wing x3, HWK-290, A-wing x2, Shara Bey, Tycho Celchu",
      author: "Chris Fritz",
      fleetId,
      shipAndUpgradeKeys,
      squadronKeys
    });
  };

  // see https://www.fantasyflightgames.com/en/news/2018/1/17/hes-going-to-fight/
  FleetBuilder.buildLibertyOrDeath = (store, fleetId) => {
    const shipAndUpgradeKeys = [
      {
        shipKey: SC.MC80_BATTLE_CRUISER,
        upgradeKeys: [
          UC.RAYMUS_ANTILLES,
          UC.GUNNERY_TEAM,
          UC.LEADING_SHOTS,
          UC.NAV_TEAM,
          UC.SPINAL_ARMAMENT,
          UC.XI7_TURBOLASERS
        ]
      },
      {
        shipKey: SC.HAMMERHEAD_TORPEDO_CORVETTE,
        upgradeKeys: [UC.ADMIRAL_RADDUS, UC.EXTERNAL_RACKS, UC.TASK_FORCE_ANTILLES]
      },
      {
        shipKey: SC.HAMMERHEAD_TORPEDO_CORVETTE,
        upgradeKeys: [UC.EXTERNAL_RACKS, UC.TASK_FORCE_ANTILLES]
      },
      {
        shipKey: SC.HAMMERHEAD_TORPEDO_CORVETTE,
        upgradeKeys: [UC.EXTERNAL_RACKS, UC.TASK_FORCE_ANTILLES]
      },
      {
        shipKey: SC.HAMMERHEAD_TORPEDO_CORVETTE,
        upgradeKeys: [UC.EXTERNAL_RACKS, UC.TASK_FORCE_ANTILLES]
      },
      {
        shipKey: SC.GR_75_MEDIUM_TRANSPORTS,
        upgradeKeys: [UC.SLICER_TOOLS]
      }
    ];
    const squadronKeys = [SQC.SHARA_BEY, SQC.TYCHO_CELCHU];

    return FleetBuilder.build({
      store,
      name: "Liberty or Death",
      year: 2018,
      description: "MC80, Hammerhead x4, GR-75, Shara Bey, Tycho Celchu",
      author: "Chris Fritz",
      fleetId,
      shipAndUpgradeKeys,
      squadronKeys
    });
  };

  // see https://www.fantasyflightgames.com/en/news/2018/4/26/admirals-orders/
  FleetBuilder.buildSettingTheTrap = (store, fleetId) => {
    const shipAndUpgradeKeys = [
      {
        shipKey: SC.VICTORY_I_CLASS_STAR_DESTROYER,
        upgradeKeys: [
          UC.GRAND_ADMIRAL_THRAWN,
          UC.SKILLED_FIRST_OFFICER,
          UC.QUAD_TURBOLASER_CANNONS,
          UC.WARLORD
        ]
      },
      {
        shipKey: SC.VICTORY_II_CLASS_STAR_DESTROYER,
        upgradeKeys: [
          UC.GOVERNOR_PRYCE,
          UC.GUNNERY_TEAM,
          UC.DISPOSABLE_CAPACITORS,
          UC.QUAD_BATTERY_TURRETS,
          UC.MS_1_ION_CANNONS
        ]
      },
      {
        shipKey: SC.GLADIATOR_I_CLASS_STAR_DESTROYER,
        upgradeKeys: [UC.ORDNANCE_EXPERTS, UC.ASSAULT_CONCUSSION_MISSILES, UC.DEMOLISHER]
      },
      {
        shipKey: SC.GOZANTI_CLASS_CRUISERS,
        upgradeKeys: [UC.JAMMING_FIELD]
      }
    ];
    const squadronKeys = [
      SQC.CAPTAIN_JONUS,
      SQC.BLACK_SQUADRON,
      SQC.MAULER_MITHEL,
      SQC.TIE_FIGHTER_SQUADRON,
      SQC.TIE_FIGHTER_SQUADRON,
      SQC.TIE_FIGHTER_SQUADRON
    ];

    return FleetBuilder.build({
      store,
      name: "Setting the Trap",
      year: 2018,
      description: "Victory x2, Gladiator, Gozanti, Jonus, Black, Mauler, TIE Fighter x3",
      author: "Norm Weir",
      fleetId,
      shipAndUpgradeKeys,
      squadronKeys
    });
  };

  // see https://www.fantasyflightgames.com/en/news/2018/4/26/admirals-orders/
  FleetBuilder.buildTheRebelAmbush = (store, fleetId) => {
    const shipAndUpgradeKeys = [
      {
        shipKey: SC.MC75_ORDNANCE_CRUISER,
        upgradeKeys: [
          UC.ADMIRAL_RADDUS,
          UC.BAIL_ORGANA,
          UC.ORDNANCE_EXPERTS,
          UC.EXTERNAL_RACKS,
          UC.ASSAULT_PROTON_TORPEDOES,
          UC.PROFUNDITY
        ]
      },
      {
        shipKey: SC.MC80_BATTLE_CRUISER,
        upgradeKeys: [UC.CAITKEN_AND_SHOLLAN, UC.LEADING_SHOTS, UC.MON_KARREN]
      },
      {
        shipKey: SC.HAMMERHEAD_TORPEDO_CORVETTE,
        upgradeKeys: [UC.CHAM_SYNDULLA, UC.GARELS_HONOR]
      },
      {
        shipKey: SC.GR_75_MEDIUM_TRANSPORTS,
        upgradeKeys: [UC.COMMS_NET, UC.QUANTUM_STORM]
      }
    ];
    const squadronKeys = [
      SQC.Z_95_HEADHUNTER_SQUADRON,
      SQC.Z_95_HEADHUNTER_SQUADRON,
      SQC.Z_95_HEADHUNTER_SQUADRON,
      SQC.Z_95_HEADHUNTER_SQUADRON,
      SQC.SHARA_BEY,
      SQC.TYCHO_CELCHU
    ];

    return FleetBuilder.build({
      store,
      name: "The Rebel Ambush",
      year: 2018,
      description: "MC75, MC80, Hammerhead, GR-75, Z-95 x4, Shara Bey, Tycho Celchu",
      author: "Norm Weir",
      fleetId,
      shipAndUpgradeKeys,
      squadronKeys
    });
  };

  // see https://www.fantasyflightgames.com/en/news/2018/4/26/admirals-orders/
  FleetBuilder.buildVadersRevenge = (store, fleetId) => {
    const shipAndUpgradeKeys = [
      {
        shipKey: SC.IMPERIAL_II_CLASS_STAR_DESTROYER,
        upgradeKeys: [
          UC.DARTH_VADER_COMMANDER,
          UC.INTEL_OFFICER,
          UC.GUNNERY_TEAM,
          UC.EARLY_WARNING_SYSTEM,
          UC.SPINAL_ARMAMENT,
          UC.CHIMAERA,
          UC.ENTRAPMENT_FORMATION
        ]
      },
      {
        shipKey: SC.IMPERIAL_STAR_DESTROYER_KUAT_REFIT,
        upgradeKeys: [
          UC.GOVERNOR_PRYCE,
          UC.BOARDING_TROOPERS,
          UC.EARLY_WARNING_SYSTEM,
          UC.EXTERNAL_RACKS,
          UC.AVENGER
        ]
      },
      {
        shipKey: SC.GOZANTI_CLASS_CRUISERS,
        upgradeKeys: [UC.HONDO_OHNAKA, UC.COMMS_NET]
      }
    ];
    const squadronKeys = [SQC.VALEN_RUDOR, SQC.CIENA_REE];

    return FleetBuilder.build({
      store,
      name: "Vader's Revenge",
      year: 2018,
      description: "ISD x2, Gozanti, Valen Rudor, Ciena Ree",
      author: "Norm Weir",
      fleetId,
      shipAndUpgradeKeys,
      squadronKeys
    });
  };

  Object.freeze(FleetBuilder);

  const { ActionCreator: ActionCreator$3 } = AS;

  const SetupTask = {};

  SetupTask.doIt = store =>
    new Promise(resolve => {
      store.dispatch(ActionCreator$3.setPhase(AA.Phase.COMMAND_START));

      resolve(store);
    });

  Object.freeze(SetupTask);

  const { Phase: Phase$1 } = AA;

  const { ActionCreator: ActionCreator$4 } = AS;

  const ShipTask = {};
  const PHASE_TO_CONFIG$1 = {};

  const setPhase$1 = (store, phaseKey) => store.dispatch(ActionCreator$4.setPhase(phaseKey));

  const start$1 = store =>
    new Promise(resolve => {
      setPhase$1(store, Phase$1.SHIP_END);
      resolve(store);
    });

  const end$1 = store =>
    new Promise(resolve => {
      setPhase$1(store, Phase$1.SQUADRON_START);
      resolve(store);
    });

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  ShipTask.doIt = store => {
    let answer;
    let config;
    const phaseKey = AS.Selector.phaseKey(store.getState());

    switch (phaseKey) {
      case Phase$1.SHIP_START:
        answer = start$1(store);
        break;
      case Phase$1.SHIP_END:
        answer = end$1(store);
        break;
      default:
        config = PHASE_TO_CONFIG$1[phaseKey];
        answer = TaskUtilities.processPhase({
          phaseKey,
          responseKey: config.responseKey,
          responseFunction: config.responseFunction,
          processFunction: config.processFunction,
        })(store);
    }

    return answer;
  };

  Object.freeze(ShipTask);

  const { Phase: Phase$2 } = AA;

  const { ActionCreator: ActionCreator$5 } = AS;

  const SquadronTask = {};
  const PHASE_TO_CONFIG$2 = {};

  const setPhase$2 = (store, phaseKey) => store.dispatch(ActionCreator$5.setPhase(phaseKey));

  const start$2 = store =>
    new Promise(resolve => {
      setPhase$2(store, Phase$2.SQUADRON_END);
      resolve(store);
    });

  const end$2 = store =>
    new Promise(resolve => {
      setPhase$2(store, Phase$2.STATUS_START);
      resolve(store);
    });

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  SquadronTask.doIt = store => {
    let answer;
    let config;
    const phaseKey = AS.Selector.phaseKey(store.getState());

    switch (phaseKey) {
      case Phase$2.SQUADRON_START:
        answer = start$2(store);
        break;
      case Phase$2.SQUADRON_END:
        answer = end$2(store);
        break;
      default:
        config = PHASE_TO_CONFIG$2[phaseKey];
        answer = TaskUtilities.processPhase({
          phaseKey,
          responseKey: config.responseKey,
          responseFunction: config.responseFunction,
          processFunction: config.processFunction,
        })(store);
    }

    return answer;
  };

  Object.freeze(SquadronTask);

  const { Phase: Phase$3 } = AA;

  const { ActionCreator: ActionCreator$6 } = AS;

  const StatusTask = {};
  const PHASE_TO_CONFIG$3 = {};

  const setPhase$3 = (store, phaseKey) => store.dispatch(ActionCreator$6.setPhase(phaseKey));

  const start$3 = store =>
    new Promise(resolve => {
      setPhase$3(store, Phase$3.STATUS_READY_DEFENSE_TOKENS);
      resolve(store);
    });

  const end$3 = store =>
    new Promise(resolve => {
      setPhase$3(store, Phase$3.COMMAND_START);
      resolve(store);
    });

  const setStatusQueueShip = store => {
    const shipIds = AS.Selector.shipIds(store.getState());
    store.dispatch(ActionCreator$6.setActiveQueue(shipIds));
  };

  const setStatusQueueSquadron = store => {
    const squadronIds = AS.Selector.squadronIds(store.getState());
    store.dispatch(ActionCreator$6.setActiveQueue(squadronIds));
  };

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  StatusTask.doIt = store => {
    let answer;
    let config;
    const phaseKey = AS.Selector.phaseKey(store.getState());

    switch (phaseKey) {
      case Phase$3.STATUS_START:
        answer = start$3(store);
        break;
      case Phase$3.STATUS_END:
        answer = end$3(store);
        break;
      default:
        config = PHASE_TO_CONFIG$3[phaseKey];
        answer = TaskUtilities.processPhase({
          phaseKey,
          responseKey: config.responseKey,
          responseFunction: config.responseFunction,
          processFunction: config.processFunction,
        })(store);
    }

    return answer;
  };

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  PHASE_TO_CONFIG$3[Phase$3.STATUS_READY_DEFENSE_TOKENS] = {
    processFunction: store => {
      // Ships.
      setStatusQueueShip(store);

      while (AS.Selector.activeQueue(store.getState()).length > 0) {
        store.dispatch(ActionCreator$6.dequeueShip());
        const shipId = AS.Selector.activeShipId(store.getState());
        store.dispatch(ActionCreator$6.readyShipDefenseTokens(shipId));
      }

      // Squadrons.
      setStatusQueueSquadron(store);

      while (AS.Selector.activeQueue(store.getState()).length > 0) {
        store.dispatch(ActionCreator$6.dequeueSquadron());
        const squadronId = AS.Selector.activeSquadronId(store.getState());
        store.dispatch(ActionCreator$6.readySquadronDefenseTokens(squadronId));
      }

      setPhase$3(store, Phase$3.STATUS_READY_UPGRADE_CARDS);
    },
  };

  PHASE_TO_CONFIG$3[Phase$3.STATUS_READY_UPGRADE_CARDS] = {
    processFunction: store => {
      setStatusQueueShip(store);

      while (AS.Selector.activeQueue(store.getState()).length > 0) {
        store.dispatch(ActionCreator$6.dequeueShip());
        const shipId = AS.Selector.activeShipId(store.getState());
        store.dispatch(ActionCreator$6.readyUpgradeCards(shipId));
      }

      setPhase$3(store, Phase$3.STATUS_FLIP_INITIATIVE_TOKEN);
    },
  };

  PHASE_TO_CONFIG$3[Phase$3.STATUS_FLIP_INITIATIVE_TOKEN] = {
    processFunction: store => {
      // TODO: flip initiative token.
      setPhase$3(store, Phase$3.STATUS_PLACE_ROUND_TOKEN);
    },
  };

  PHASE_TO_CONFIG$3[Phase$3.STATUS_PLACE_ROUND_TOKEN] = {
    processFunction: store => {
      store.dispatch(ActionCreator$6.incrementRound());
      setPhase$3(store, Phase$3.STATUS_END);
    },
  };

  Object.freeze(StatusTask);

  const { ActionCreator: ActionCreator$7, Reducer } = AS;

  const StarWarsArmadaModel = {};

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  const determineWinner = state => {
    const shipCount1 = AS.Selector.shipCountByAgent(1, state);
    const shipCount2 = AS.Selector.shipCountByAgent(2, state);

    let answer;

    if (shipCount1 > 0 && shipCount2 === 0) {
      answer = 1;
    } else if (shipCount1 === 0 && shipCount2 > 0) {
      answer = 2;
    }

    return answer;
  };

  const isGameOver = state => {
    const round = AS.Selector.round(state);
    const shipCount1 = AS.Selector.shipCountByAgent(1, state);
    const shipCount2 = AS.Selector.shipCountByAgent(2, state);

    return round > 6 || shipCount1 === 0 || shipCount2 === 0;
  };

  const processGameOver = store => {
    const winner = determineWinner(store.getState());
    store.dispatch(ActionCreator$7.setGameOver(winner));

    const message = winner === undefined ? 'Game is a draw.' : `${winner.name()} won! `;
    store.dispatch(ActionCreator$7.setUserMessage(message));
  };

  StarWarsArmadaModel.nextGameState = ({ gameState }) => {
    // Initialize.
    const store = Redux.createStore(Reducer.root, gameState);
    let answer;

    if (isGameOver(store.getState())) {
      answer = new Promise(resolve => {
        processGameOver(store);
        resolve(store);
      });
    } else {
      const { phaseKey } = gameState;
      let taskClass;

      if (phaseKey === 'setup') {
        taskClass = SetupTask;
      } else if (phaseKey.startsWith('command')) {
        taskClass = CommandTask;
      } else if (phaseKey.startsWith('ship')) {
        taskClass = ShipTask;
      } else if (phaseKey.startsWith('squadron')) {
        taskClass = SquadronTask;
      } else if (phaseKey.startsWith('status')) {
        taskClass = StatusTask;
      }

      answer = taskClass.doIt(store);
    }

    return answer;
  };

  Object.freeze(StarWarsArmadaModel);

  exports.AgentQueryType = AgentQueryType;
  exports.CommandTask = CommandTask;
  exports.DamageDeck = DamageDeck;
  exports.DiceUtilities = DiceUtilities;
  exports.FleetBuilder = FleetBuilder;
  exports.SetupTask = SetupTask;
  exports.ShipTask = ShipTask;
  exports.SquadronTask = SquadronTask;
  exports.StarWarsArmadaModel = StarWarsArmadaModel;
  exports.StatusTask = StatusTask;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
