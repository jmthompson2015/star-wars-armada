const { ActionCreator } = AS;

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
    store.dispatch(ActionCreator.setDefenseTokenInstance(defenseTokenInstance));

    return R.append(tokenId, accum);
  };

  return R.reduce(reduceFunction, [], defenseTokens);
};

const processUpgradeKey = store => (accumulator, upgradeKey) => {
  const tokenCounts = AS.TokenCountsState.create();

  // Side effects.
  const upgrade = createUpgrade(store, upgradeKey);
  store.dispatch(ActionCreator.setUpgradeInstance(upgrade));
  store.dispatch(ActionCreator.setUpgradeTokenCounts(upgrade.id, tokenCounts));

  return R.append(upgrade.id, accumulator);
};

const processShipKey = store => (accumulator, shipObj) => {
  const { shipKey } = shipObj;
  const upgradeKeys = R.defaultTo([], shipObj.upgradeKeys);
  const reducerFunction = processUpgradeKey(store);
  const upgradeIds = R.reduce(reducerFunction, [], upgradeKeys);

  // Side effects.
  const ship = createShip(store, shipKey);
  store.dispatch(ActionCreator.setShipInstance(ship));
  store.dispatch(ActionCreator.setShipUpgrades(ship.id, upgradeIds));

  return R.append(ship.id, accumulator);
};

const processSquadronKey = store => (accumulator, squadronKey) => {
  // Side effects.
  const squadron = createSquadron(store, squadronKey);
  store.dispatch(ActionCreator.setSquadronInstance(squadron));

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

  store.dispatch(ActionCreator.setFleetInstance(answer));
  store.dispatch(ActionCreator.setFleetShips(fleetId, shipIds));
  store.dispatch(ActionCreator.setFleetSquadrons(fleetId, squadronIds));

  const forEachFunction1 = shipId => {
    const shipInstance = AS.Selector.shipInstance(shipId, store.getState());
    const defenseTokens = AA.Selector.defenseTokenValuesByShip(shipInstance.shipKey);
    const defenseTokenIds = processDefenseTokens(store, defenseTokens);
    store.dispatch(ActionCreator.setShipDefenseTokens(shipId, defenseTokenIds));
  };
  R.forEach(forEachFunction1, shipIds);

  const forEachFunction2 = squadronId => {
    const squadronInstance = AS.Selector.squadronInstance(squadronId, store.getState());
    const defenseTokens = AA.Selector.defenseTokenValuesBySquadron(squadronInstance.squadronKey);
    const defenseTokenIds = processDefenseTokens(store, defenseTokens);
    store.dispatch(ActionCreator.setSquadronDefenseTokens(squadronId, defenseTokenIds));
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

export default FleetBuilder;
