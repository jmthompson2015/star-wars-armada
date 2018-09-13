(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.AA = {})));
}(this, (function (exports) { 'use strict';

  const Command = {
    CONCENTRATE_FIRE: 'concentrateFire',
    NAVIGATE: 'navigate',
    REPAIR: 'repair',
    SQUADRON: 'squadron',
  };

  Command.properties = {
    concentrateFire: {
      name: 'Concentrate Fire',
      text: 'Increase the power of one attack.',
      sortOrder: 4,
      key: 'concentrateFire',
    },
    navigate: {
      name: 'Navigate',
      text: 'Change speed and increase maneuverability.',
      sortOrder: 1,
      key: 'navigate',
    },
    repair: {
      name: 'Repair',
      text: 'Recover shields and hull damage.',
      sortOrder: 3,
      key: 'repair',
    },
    squadron: {
      name: 'Squadron',
      text: 'Order nearby squadrons to move and attack early.',
      sortOrder: 2,
      key: 'squadron',
    },
  };

  Object.freeze(Command);

  const DamageCard = {

    BLINDED_GUNNERS: "blindedGunners",
    CAPACITOR_FAILURE: "capacitorFailure",
    COMM_NOISE: "commNoise",
    COMPARTMENT_FIRE: "compartmentFire",
    COOLANT_DISCHARGE: "coolantDischarge",
    CREW_PANIC: "crewPanic",
    DAMAGED_CONTROLS: "damagedControls",
    DAMAGED_MUNITIONS: "damagedMunitions",
    DEPOWERED_ARMAMENT: "depoweredArmament",
    DISENGAGED_FIRE_CONTROL: "disengagedFireControl",
    FAULTY_COUNTERMEASURES: "faultyCountermeasures",
    INJURED_CREW: "injuredCrew",
    LIFE_SUPPORT_FAILURE: "lifeSupportFailure",
    POINT_DEFENSE_FAILURE: "pointDefenseFailure",
    POWER_FAILURE: "powerFailure",
    PROJECTOR_MISALIGNED: "projectorMisaligned",
    RUPTURED_ENGINE: "rupturedEngine",
    SHIELD_FAILURE: "shieldFailure",
    STRUCTURAL_DAMAGE: "structuralDamage",
    TARGETER_DISRUPTION: "targeterDisruption",
    THRUST_CONTROL_MALFUNCTION: "thrustControlMalfunction",
    THRUSTER_FISSURE: "thrusterFissure",
  };

  DamageCard.properties = 
  {
     "blindedGunners": {
        "title": "Blinded Gunners",
        "amount": 2,
        "type": "Crew",
        "text": "While attacking, you cannot spend [Scatter] icons.",
        "image": "damage-card/blinded-gunners.png",
        "key": "blindedGunners"
     },
     "capacitorFailure": {
        "title": "Capacitor Failure",
        "amount": 2,
        "type": "Ship",
        "text": "If a hull zone has no remaining shields, you cannot recover shields in it nor move shields to it. If that hull zone is defending, you cannot spend [Redirect] tokens.",
        "image": "damage-card/capacitor-failure.png",
        "key": "capacitorFailure"
     },
     "commNoise": {
        "title": "Comm Noise",
        "amount": 2,
        "type": "Crew",
        "text": "Your opponent may either reduce your speed by 1 or choose a new command on your top command dial. Then flip this card facedown.",
        "image": "damage-card/comm-noise.png",
        "key": "commNoise"
     },
     "compartmentFire": {
        "title": "Compartment Fire",
        "amount": 2,
        "type": "Crew",
        "text": "You cannot ready your defense tokens.",
        "image": "damage-card/compartment-fire.png",
        "key": "compartmentFire"
     },
     "coolantDischarge": {
        "title": "Coolant Discharge",
        "amount": 2,
        "type": "Ship",
        "text": "Only one attack you perform each round can target a ship.",
        "image": "damage-card/coolant-discharge.png",
        "key": "coolantDischarge"
     },
     "crewPanic": {
        "title": "Crew Panic",
        "amount": 2,
        "type": "Crew",
        "text": "Before you reveal a command dial, you must either suffer 1 damage or discard that dial. If you discard it, do not reveal a dial this round.",
        "image": "damage-card/crew-panic.png",
        "key": "crewPanic"
     },
     "damagedControls": {
        "title": "Damaged Controls",
        "amount": 2,
        "type": "Crew",
        "text": "When you overlap a ship or obstacle, deal 1 facedown damage card to your ship (in addition to all other obstacle effects).",
        "image": "damage-card/damaged-controls.png",
        "key": "damagedControls"
     },
     "damagedMunitions": {
        "title": "Damaged Munitions",
        "amount": 2,
        "type": "Ship",
        "text": "When attacking a ship, before you roll your attack pool, remove 1 die of your choice.",
        "image": "damage-card/damaged-munitions.png",
        "key": "damagedMunitions"
     },
     "depoweredArmament": {
        "title": "Depowered Armament",
        "amount": 2,
        "type": "Ship",
        "text": "You cannot attack at long range.",
        "image": "damage-card/depowered-armament.png",
        "key": "depoweredArmament"
     },
     "disengagedFireControl": {
        "title": "Disengaged Fire Control",
        "amount": 2,
        "type": "Ship",
        "text": "When declaring the target of an attack, you cannot choose a target against whom the attack would be obstructed.",
        "image": "damage-card/disengaged-fire-control.png",
        "key": "disengagedFireControl"
     },
     "faultyCountermeasures": {
        "title": "Faulty Countermeasures",
        "amount": 2,
        "type": "Ship",
        "text": "You cannot spend exhausted defense tokens.",
        "image": "damage-card/faulty-countermeasures.png",
        "key": "faultyCountermeasures"
     },
     "injuredCrew": {
        "title": "Injured Crew",
        "amount": 4,
        "type": "Crew",
        "text": "Choose and discard 1 of your defense tokens. Then flip this card facedown.",
        "image": "damage-card/injured-crew.png",
        "key": "injuredCrew"
     },
     "lifeSupportFailure": {
        "title": "Life Support Failure",
        "amount": 2,
        "type": "Crew",
        "text": "Discard all of your command tokens.\nYou cannot have any command tokens.",
        "image": "damage-card/life-support-failure.png",
        "key": "lifeSupportFailure"
     },
     "pointDefenseFailure": {
        "title": "Point-Defense Failure",
        "amount": 2,
        "type": "Ship",
        "text": "When attacking a squadron, before you roll your attack pool, remove 1 die of your choice.",
        "image": "damage-card/point-defense-failure.png",
        "key": "pointDefenseFailure"
     },
     "powerFailure": {
        "title": "Power Failure",
        "amount": 2,
        "type": "Ship",
        "text": "Your engineering value is reduced to half its value, rounded down.",
        "image": "damage-card/power-failure.png",
        "key": "powerFailure"
     },
     "projectorMisaligned": {
        "title": "Projector Misaligned",
        "amount": 2,
        "type": "Ship",
        "text": "Your hull zone with the most remaining shields loses all of its shields. If multiple hull zones are tied, choose between the tied hull zones. Then flip this card face down.",
        "image": "damage-card/projector-misaligned.png",
        "key": "projectorMisaligned"
     },
     "rupturedEngine": {
        "title": "Ruptured Engine",
        "amount": 2,
        "type": "Ship",
        "text": "After you execute a maneuver, if the speed on your speed dial is greater than \"1,\" suffer 1 damage.",
        "image": "damage-card/ruptured-engine.png",
        "key": "rupturedEngine"
     },
     "shieldFailure": {
        "title": "Shield Failure",
        "amount": 2,
        "type": "Ship",
        "text": "Your opponent may choose up to 2 of your hull zones. Each of the chosen hull zones loses 1 shield. Then flip this card facedown.",
        "image": "damage-card/shield-failure.png",
        "key": "shieldFailure"
     },
     "structuralDamage": {
        "title": "Structural Damage",
        "amount": 8,
        "type": "Ship",
        "text": "Deal 1 facedown damage card to your ship. Then flip this card facedown.",
        "image": "damage-card/structural-damage.png",
        "key": "structuralDamage"
     },
     "targeterDisruption": {
        "title": "Targeter Disruption",
        "amount": 2,
        "type": "Ship",
        "text": "While attacking, you cannot resolve critical effects.",
        "image": "damage-card/targeter-disruption.png",
        "key": "targeterDisruption"
     },
     "thrustControlMalfunction": {
        "title": "Thrust-Control Malfunction",
        "amount": 2,
        "type": "Ship",
        "text": "The yaw value for the last adjustable joint at your current speed is reduced by 1.",
        "image": "damage-card/thrust-control-malfunction.png",
        "key": "thrustControlMalfunction"
     },
     "thrusterFissure": {
        "title": "Thruster Fissure",
        "amount": 2,
        "type": "Ship",
        "text": "When you change your speed by 1 or more, suffer 1 damage.",
        "image": "damage-card/thruster-fissure.png",
        "key": "thrusterFissure"
     }
  };

  Object.freeze(DamageCard);

  const DefenseToken = {

    BRACE: "brace",
    CONTAIN: "contain",
    EVADE: "evade",
    REDIRECT: "redirect",
    SCATTER: "scatter",
  };

  DefenseToken.properties = 
  {
     "brace": {
        "name": "Brace",
        "text": "After the damage is totaled, the defender reduces the total to half, rounded up.",
        "sortOrder": 3,
        "key": "brace"
     },
     "contain": {
        "name": "Contain",
        "text": "Prevent the attacker from resolving the standard critical effect.",
        "sortOrder": 5,
        "key": "contain"
     },
     "evade": {
        "name": "Evade",
        "text": "At long range, the defender cancels one attack die of its choice. At medium range, it chooses one attack die to be rerolled. At close range, or distance 1, this token has no effect.",
        "sortOrder": 2,
        "key": "evade"
     },
     "redirect": {
        "name": "Redirect",
        "text": "Suffer damage on an adjacent hull zone's shields before suffering the remaining damage on the defending hull zone.",
        "sortOrder": 1,
        "key": "redirect"
     },
     "scatter": {
        "name": "Scatter",
        "text": "The defender cancels all attack dice.",
        "sortOrder": 4,
        "key": "scatter"
     }
  };

  Object.freeze(DefenseToken);

  const DiceValue = {
    BLACK_BLANK: 'blackBlank',
    BLACK_HIT: 'blackHit',
    BLACK_HIT_CRITICAL: 'blackHitCritical',

    BLUE_ACCURACY: 'blueAccuracy',
    BLUE_CRITICAL: 'blueCritical',
    BLUE_HIT: 'blueHit',

    RED_ACCURACY: 'redAccuracy',
    RED_BLANK: 'redBlank',
    RED_CRITICAL: 'redCritical',
    RED_HIT: 'redHit',
    RED_HIT_HIT: 'redHitHit',
  };

  DiceValue.properties = {
    blackBlank: {
      name: 'Black Blank',
      color: 'black',
      value: 'blank',
      sortOrder: 10,
      image: 'dice/black-blank.png',
      key: 'blackBlank',
    },
    blackHit: {
      name: 'Black Hit',
      color: 'black',
      value: 'hit',
      sortOrder: 2,
      image: 'dice/black-hit.png',
      key: 'blackHit',
    },
    blackHitCritical: {
      name: 'Black Hit + Critical',
      color: 'black',
      value: 'hitCritical',
      sortOrder: 5,
      image: 'dice/black-hit-critical-hit.png',
      key: 'blackHitCritical',
    },

    blueAccuracy: {
      name: 'Blue Accuracy',
      color: 'blue',
      value: 'accuracy',
      sortOrder: 8,
      image: 'dice/blue-accuracy.png',
      key: 'blueAccuracy',
    },
    blueCritical: {
      name: 'Blue Critical',
      color: 'blue',
      value: 'critical',
      sortOrder: 6,
      image: 'dice/blue-critical-hit.png',
      key: 'blueCritical',
    },
    blueHit: {
      name: 'Blue Hit',
      color: 'blue',
      value: 'hit',
      sortOrder: 3,
      image: 'dice/blue-hit.png',
      key: 'blueHit',
    },

    redAccuracy: {
      name: 'Red Accuracy',
      color: 'red',
      value: 'accuracy',
      sortOrder: 9,
      image: 'dice/red-accuracy.png',
      key: 'redAccuracy',
    },
    redBlank: {
      name: 'Red Blank',
      color: 'red',
      value: 'blank',
      sortOrder: 11,
      image: 'dice/red-blank.png',
      key: 'redBlank',
    },
    redCritical: {
      name: 'Red Critical',
      color: 'red',
      value: 'critical',
      sortOrder: 7,
      image: 'dice/red-critical-hit.png',
      key: 'redCritical',
    },
    redHit: {
      name: 'Red Hit',
      color: 'red',
      value: 'hit',
      sortOrder: 4,
      image: 'dice/red-hit.png',
      key: 'redHit',
    },
    redHitHit: {
      name: 'Red Hit + Hit',
      color: 'red',
      value: 'hitHit',
      sortOrder: 1,
      image: 'dice/red-hit-hit.png',
      key: 'redHitHit',
    },
  };

  Object.freeze(DiceValue);

  const Distance = {
    ONE: 'one',
    TWO: 'two',
    THREE: 'three',
    FOUR: 'four',
    FIVE: 'five',
  };

  Distance.properties = {
    one: {
      minDistance: 0, // Minimum distance. (mm)
      maxDistance: 76, // Maximum distance. (mm)
      name: '1',
      key: 'one',
    },
    two: {
      minDistance: 77, // Minimum distance. (mm)
      maxDistance: 125, // Maximum distance. (mm)
      name: '2',
      key: 'two',
    },
    three: {
      minDistance: 126, // Minimum distance. (mm)
      maxDistance: 185, // Maximum distance. (mm)
      name: '3',
      key: 'three',
    },
    four: {
      minDistance: 186, // Minimum distance. (mm)
      maxDistance: 245, // Maximum distance. (mm)
      name: '4',
      key: 'four',
    },
    five: {
      minDistance: 246, // Minimum distance. (mm)
      maxDistance: 305, // Maximum distance. (mm)
      name: '5',
      key: 'five',
    },
  };

  Object.freeze(Distance);

  const EnumUtilities = {};

  EnumUtilities.findByName = (name, enumClass) => EnumUtilities.findByProp('name', name, enumClass);

  EnumUtilities.findByProp = (propertyName, propertyValue, enumClass) =>
    R.find(R.propEq(propertyName, propertyValue), EnumUtilities.values(enumClass));

  EnumUtilities.keys = enumClass => Object.keys(enumClass.properties);

  EnumUtilities.values = enumClass => Object.values(enumClass.properties);

  Object.freeze(EnumUtilities);

  const Faction = {

    GALACTIC_EMPIRE: "galacticEmpire",
    REBEL_ALLIANCE: "rebelAlliance",
  };

  Faction.properties = 
  {
     "galacticEmpire": {
        "name": "Galactic Empire",
        "shortName": "Imperial",
        "color": "#00FF00",
        "image": "faction/galactic-empire.png",
        "key": "galacticEmpire"
     },
     "rebelAlliance": {
        "name": "Rebel Alliance",
        "shortName": "Rebel",
        "color": "#FF0000",
        "image": "faction/rebel-alliance.png",
        "key": "rebelAlliance"
     }
  };

  Object.freeze(Faction);

  const HullZone = {

    FRONT: "front",
    LEFT: "left",
    REAR: "rear",
    RIGHT: "right",
  };

  HullZone.properties = 
  {
     "front": {
        "name": "front",
        "key": "front"
     },
     "left": {
        "name": "left",
        "key": "left"
     },
     "rear": {
        "name": "rear",
        "key": "rear"
     },
     "right": {
        "name": "right",
        "key": "right"
     }
  };

  Object.freeze(HullZone);

  const Phase = {
    SETUP: 'setup',

    COMMAND_START: 'commandStart',
    COMMAND_COMMANDING: 'commandCommanding',
    COMMAND_END: 'commandEnd',

    SHIP_START: 'shipStart',
    SHIP_REVEAL_COMMAND_DIAL: 'shipRevealCommandDial',
    SHIP_ATTACK_START: 'shipAttackStart',
    SHIP_ATTACK_DECLARE_TARGET: 'shipAttackDeclareTarget',
    SHIP_ATTACK_ROLL_ATTACK_DICE: 'shipAttackRollAttackDice',
    SHIP_ATTACK_RESOLVE_ATTACK_EFFECTS: 'shipAttackResolveAttackEffects',
    SHIP_ATTACK_SPEND_DEFENSE_TOKENS: 'shipAttackSpendDefenseTokens',
    SHIP_ATTACK_RESOLVE_DAMAGE: 'shipAttackResolveDamage',
    SHIP_ATTACK_DECLARE_ADDITIONAL_SQUADRON_TARGET: 'shipAttackDeclareAdditionalSquadronTarget',
    SHIP_ATTACK_END: 'shipAttackEnd',
    SHIP_EXECUTE_MANEUVER_START: 'shipExecuteManeuverStart',
    SHIP_DETERMINE_COURSE: 'shipDetermineCourse',
    SHIP_MOVE_SHIP: 'shipMoveShip',
    SHIP_EXECUTE_MANEUVER_END: 'shipExecuteManeuverEnd',
    SHIP_END: 'shipEnd',

    SQUADRON_START: 'squadronStart',
    SQUADRON_MOVE_START: 'squadronMoveStart',
    SQUADRON_DETERMINE_COURSE: 'squadronDetermineCourse',
    SQUADRON_MOVE_SQUADRON: 'squadronMoveSquadron',
    SQUADRON_MOVE_END: 'squadronMoveEnd',
    SQUADRON_ATTACK_START: 'squadronAttackStart',
    SQUADRON_ATTACK_DECLARE_TARGET: 'squadronAttackDeclareTarget',
    SQUADRON_ATTACK_ROLL_ATTACK_DICE: 'squadronAttackRollAttackDice',
    SQUADRON_ATTACK_RESOLVE_ATTACK_EFFECTS: 'squadronAttackResolveAttackEffects',
    SQUADRON_ATTACK_SPEND_DEFENSE_TOKENS: 'squadronAttackSpendDefenseTokens',
    SQUADRON_ATTACK_RESOLVE_DAMAGE: 'squadronAttackResolveDamage',
    SQUADRON_ATTACK_END: 'squadronAttackEnd',
    SQUADRON_END: 'squadronEnd',

    STATUS_START: 'statusStart',
    STATUS_READY_DEFENSE_TOKENS: 'statusReadyDefenseTokens',
    STATUS_READY_UPGRADE_CARDS: 'statusReadyUpgradeCards',
    STATUS_FLIP_INITIATIVE_TOKEN: 'statusFlipInitiativeToken',
    STATUS_PLACE_ROUND_TOKEN: 'statusPlaceRoundToken',
    STATUS_END: 'statusEnd',
  };

  Phase.properties = {
    setup: {
      name: 'Setup',
      key: 'setup',
    },
    commandStart: {
      name: 'Command (start)',
      key: 'commandStart',
    },
    commandCommanding: {
      name: 'Command (commanding)',
      key: 'commandCommanding',
    },
    commandEnd: {
      name: 'Command (end)',
      key: 'commandEnd',
    },
    shipStart: {
      name: 'Ship (start)',
      key: 'shipStart',
    },
    shipRevealCommandDial: {
      name: 'Ship (reveal command dial)',
      key: 'shipRevealCommandDial',
    },
    shipAttackStart: {
      name: 'Ship (attack start)',
      key: 'shipAttackStart',
    },
    shipAttackDeclareTarget: {
      name: 'Ship (attack declare target)',
      key: 'shipAttackDeclareTarget',
    },
    shipAttackRollAttackDice: {
      name: 'Ship (attack roll attack dice)',
      key: 'shipAttackRollAttackDice',
    },
    shipAttackResolveAttackEffects: {
      name: 'Ship (attack resolve attack effects)',
      key: 'shipAttackResolveAttackEffects',
    },
    shipAttackSpendDefenseTokens: {
      name: 'Ship (attack spend defense tokens)',
      key: 'shipAttackSpendDefenseTokens',
    },
    shipAttackResolveDamage: {
      name: 'Ship (attack resolve damage)',
      key: 'shipAttackResolveDamage',
    },
    shipAttackDeclareAdditionalSquadronTarget: {
      name: 'Ship (attack declare additional squadron target)',
      key: 'shipAttackDeclareAdditionalSquadronTarget',
    },
    shipAttackEnd: {
      name: 'Ship (attack end)',
      key: 'shipAttackEnd',
    },
    shipExecuteManeuverStart: {
      name: 'Ship (execute maneuver start)',
      key: 'shipExecuteManeuverStart',
    },
    shipDetermineCourse: {
      name: 'Ship (determine course)',
      key: 'shipDetermineCourse',
    },
    shipMoveShip: {
      name: 'Ship (move ship)',
      key: 'shipMoveShip',
    },
    shipExecuteManeuverEnd: {
      name: 'Ship (execute maneuver end)',
      key: 'shipExecuteManeuverEnd',
    },
    shipEnd: {
      name: 'Ship (end)',
      key: 'shipEnd',
    },
    squadronStart: {
      name: 'Squadron (start)',
      key: 'squadronStart',
    },
    squadronMoveStart: {
      name: 'Squadron (move start)',
      key: 'squadronMoveStart',
    },
    squadronDetermineCourse: {
      name: 'Squadron (determine course)',
      key: 'squadronDetermineCourse',
    },
    squadronMoveSquadron: {
      name: 'Squadron (move squadron)',
      key: 'squadronMoveSquadron',
    },
    squadronMoveEnd: {
      name: 'Squadron (move end)',
      key: 'squadronMoveEnd',
    },
    squadronAttackStart: {
      name: 'Squadron (attack start)',
      key: 'squadronAttackStart',
    },
    squadronAttackDeclareTarget: {
      name: 'Squadron (attack declare target)',
      key: 'squadronAttackDeclareTarget',
    },
    squadronAttackRollAttackDice: {
      name: 'Squadron (attack roll attack dice)',
      key: 'squadronAttackRollAttackDice',
    },
    squadronAttackResolveAttackEffects: {
      name: 'Squadron (attack resolve attack effects)',
      key: 'squadronAttackResolveAttackEffects',
    },
    squadronAttackSpendDefenseTokens: {
      name: 'Squadron (attack spend defense tokens)',
      key: 'squadronAttackSpendDefenseTokens',
    },
    squadronAttackResolveDamage: {
      name: 'Squadron (attack resolve damage)',
      key: 'squadronAttackResolveDamage',
    },
    squadronAttackEnd: {
      name: 'Squadron (attack end)',
      key: 'squadronAttackEnd',
    },
    squadronEnd: {
      name: 'Squadron (end)',
      key: 'squadronEnd',
    },
    statusStart: {
      name: 'Status (start)',
      key: 'statusStart',
    },
    statusReadyDefenseTokens: {
      name: 'Status (ready defense tokens)',
      key: 'statusReadyDefenseTokens',
    },
    statusReadyUpgradeCards: {
      name: 'Status (ready upgrade cards)',
      key: 'statusReadyUpgradeCards',
    },
    statusFlipInitiativeToken: {
      name: 'Status (flip initiative token)',
      key: 'statusFlipInitiativeToken',
    },
    statusPlaceRoundToken: {
      name: 'Status (place round token)',
      key: 'statusPlaceRoundToken',
    },
    statusEnd: {
      name: 'Status (end)',
      key: 'statusEnd',
    },
  };

  Object.freeze(Phase);

  const PlayFormat = {
    SMALL: 'small',
    STANDARD: 'standard',
  };

  PlayFormat.properties = {
    small: {
      name: 'Small',
      minPoints: 0,
      maxPoints: 299,
      width: 915, // mm
      height: 915, // mm
      key: 'small',
    },
    standard: {
      name: 'Standard',
      minPoints: 300,
      width: 1830, // mm
      height: 915, // mm
      key: 'standard',
    },
  };

  Object.freeze(PlayFormat);

  const Range = {
    CLOSE: 'close',
    MEDIUM: 'medium',
    LONG: 'long',
  };

  Range.properties = {
    close: {
      minDistance: 0, // Minimum distance. (mm)
      maxDistance: 123, // Maximum distance. (mm)
      name: 'Close',
      key: 'close',
    },
    medium: {
      // 2.5" = 63.5 mm
      minDistance: 124, // Minimum distance. (mm)
      maxDistance: 187, // Maximum distance. (mm)
      name: 'Medium',
      key: 'medium',
    },
    long: {
      minDistance: 188, // Minimum distance. (mm)
      maxDistance: 305, // Maximum distance. (mm)
      name: 'Long',
      key: 'long',
    },
  };

  Object.freeze(Range);

  const ReferenceCard = {

    COMMANDS: "commands",
    DEFENSE_TOKENS: "defenseTokens",
  };

  ReferenceCard.properties = 
  {
     "commands": {
        "title": "Commands",
        "image": "reference-card/commands.png",
        "key": "commands"
     },
     "defenseTokens": {
        "title": "Defense Tokens",
        "image": "reference-card/defense-tokens.png",
        "key": "defenseTokens"
     }
  };

  Object.freeze(ReferenceCard);

  const ShipBase = {

    LARGE: "large",
    MEDIUM: "medium",
    SMALL: "small",
  };

  ShipBase.properties = 
  {
     "large": {
        "name": "large",
        "width": 131,
        "height": 79,
        "key": "large"
     },
     "medium": {
        "name": "medium",
        "width": 104,
        "height": 64,
        "key": "medium"
     },
     "small": {
        "name": "small",
        "width": 73,
        "height": 44,
        "key": "small"
     }
  };

  Object.freeze(ShipBase);

  const ShipCard = {

    ARQUITENS_CLASS_COMMAND_CRUISER: "arquitensClassCommandCruiser",
    ARQUITENS_CLASS_LIGHT_CRUISER: "arquitensClassLightCruiser",
    ASSAULT_FRIGATE_MARK_II_A: "assaultFrigateMarkIiA",
    ASSAULT_FRIGATE_MARK_II_B: "assaultFrigateMarkIiB",
    CR90_CORVETTE_A: "cr90CorvetteA",
    CR90_CORVETTE_B: "cr90CorvetteB",
    GLADIATOR_I_CLASS_STAR_DESTROYER: "gladiatorIClassStarDestroyer",
    GLADIATOR_II_CLASS_STAR_DESTROYER: "gladiatorIiClassStarDestroyer",
    GOZANTI_CLASS_ASSAULT_CARRIERS: "gozantiClassAssaultCarriers",
    GOZANTI_CLASS_CRUISERS: "gozantiClassCruisers",
    GR_75_COMBAT_RETROFITS: "gr75CombatRetrofits",
    GR_75_MEDIUM_TRANSPORTS: "gr75MediumTransports",
    HAMMERHEAD_SCOUT_CORVETTE: "hammerheadScoutCorvette",
    HAMMERHEAD_TORPEDO_CORVETTE: "hammerheadTorpedoCorvette",
    IMPERIAL_I_CLASS_STAR_DESTROYER: "imperialIClassStarDestroyer",
    IMPERIAL_II_CLASS_STAR_DESTROYER: "imperialIiClassStarDestroyer",
    IMPERIAL_STAR_DESTROYER_CYMOON_1_REFIT: "imperialStarDestroyerCymoon1Refit",
    IMPERIAL_STAR_DESTROYER_KUAT_REFIT: "imperialStarDestroyerKuatRefit",
    INTERDICTOR_COMBAT_REFIT: "interdictorCombatRefit",
    INTERDICTOR_SUPPRESSION_REFIT: "interdictorSuppressionRefit",
    MC30C_SCOUT_FRIGATE: "mc30cScoutFrigate",
    MC30C_TORPEDO_FRIGATE: "mc30cTorpedoFrigate",
    MC75_ARMORED_CRUISER: "mc75ArmoredCruiser",
    MC75_ORDNANCE_CRUISER: "mc75OrdnanceCruiser",
    MC80_ASSAULT_CRUISER: "mc80AssaultCruiser",
    MC80_BATTLE_CRUISER: "mc80BattleCruiser",
    MC80_COMMAND_CRUISER: "mc80CommandCruiser",
    MC80_STAR_CRUISER: "mc80StarCruiser",
    MODIFIED_PELTA_CLASS_ASSAULT_SHIP: "modifiedPeltaClassAssaultShip",
    MODIFIED_PELTA_CLASS_COMMAND_SHIP: "modifiedPeltaClassCommandShip",
    NEBULON_B_ESCORT_FRIGATE: "nebulonBEscortFrigate",
    NEBULON_B_SUPPORT_REFIT: "nebulonBSupportRefit",
    QUASAR_FIRE_I_CLASS_CRUISER_CARRIER: "quasarFireIClassCruiserCarrier",
    QUASAR_FIRE_II_CLASS_CRUISER_CARRIER: "quasarFireIiClassCruiserCarrier",
    RAIDER_I_CLASS_CORVETTE: "raiderIClassCorvette",
    RAIDER_II_CLASS_CORVETTE: "raiderIiClassCorvette",
    VICTORY_I_CLASS_STAR_DESTROYER: "victoryIClassStarDestroyer",
    VICTORY_II_CLASS_STAR_DESTROYER: "victoryIiClassStarDestroyer",
  };

  ShipCard.properties = 
  {
     "arquitensClassCommandCruiser": {
        "name": "Arquitens-class Command Cruiser",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 2,
        "engineering": 3,
        "attack": {
           "front": [
              1,
              1,
              0
           ],
           "right": [
              3,
              0,
              0
           ],
           "left": [
              3,
              0,
              0
           ],
           "rear": [
              1,
              1,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "-",
              "||"
           ],
           "3": [
              "-",
              "-",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Defensive Retrofit",
           "Turbolasers"
        ],
        "points": 59,
        "ship-image": "ship/galactic-empire/arquitens-class-cruiser.png",
        "image": "ship-card/galactic-empire/arquitens-class-command-cruiser.png",
        "key": "arquitensClassCommandCruiser"
     },
     "arquitensClassLightCruiser": {
        "name": "Arquitens-class Light Cruiser",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "command": 2,
        "squadron": 1,
        "engineering": 3,
        "attack": {
           "front": [
              1,
              0,
              1
           ],
           "right": [
              3,
              0,
              0
           ],
           "left": [
              3,
              0,
              0
           ],
           "rear": [
              1,
              0,
              1
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "-",
              "||"
           ],
           "3": [
              "-",
              "-",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Defensive Retrofit",
           "Turbolasers"
        ],
        "points": 54,
        "ship-image": "ship/galactic-empire/arquitens-class-cruiser.png",
        "image": "ship-card/galactic-empire/arquitens-class-light-cruiser.png",
        "key": "arquitensClassLightCruiser"
     },
     "assaultFrigateMarkIiA": {
        "name": "Assault Frigate Mark II A",
        "size": "medium",
        "faction": "Rebel Alliance",
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "command": 3,
        "squadron": 2,
        "engineering": 4,
        "attack": {
           "front": [
              2,
              1,
              0
           ],
           "right": [
              3,
              1,
              0
           ],
           "left": [
              3,
              1,
              0
           ],
           "rear": [
              2,
              1,
              0
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Defensive Retrofit",
           "Turbolasers"
        ],
        "points": 81,
        "ship-image": "ship/rebel-alliance/assault-frigate-mark-ii.png",
        "image": "ship-card/rebel-alliance/assault-frigate-mark-ii-a.png",
        "key": "assaultFrigateMarkIiA"
     },
     "assaultFrigateMarkIiB": {
        "name": "Assault Frigate Mark II B",
        "size": "medium",
        "faction": "Rebel Alliance",
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 3,
        "squadron": 3,
        "engineering": 4,
        "attack": {
           "front": [
              2,
              0,
              0
           ],
           "right": [
              3,
              1,
              0
           ],
           "left": [
              3,
              1,
              0
           ],
           "rear": [
              2,
              0,
              0
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Defensive Retrofit",
           "Turbolasers"
        ],
        "points": 72,
        "ship-image": "ship/rebel-alliance/assault-frigate-mark-ii.png",
        "image": "ship-card/rebel-alliance/assault-frigate-mark-ii-b.png",
        "key": "assaultFrigateMarkIiB"
     },
     "cr90CorvetteA": {
        "name": "CR90 Corvette A",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 1,
        "squadron": 1,
        "engineering": 2,
        "attack": {
           "front": [
              2,
              1,
              0
           ],
           "right": [
              1,
              1,
              0
           ],
           "left": [
              1,
              1,
              0
           ],
           "rear": [
              1,
              0,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Evade",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "||"
           ],
           "3": [
              "-",
              "|",
              "||"
           ],
           "4": [
              "-",
              "|",
              "|",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Defensive Retrofit",
           "Ion Cannons"
        ],
        "points": 44,
        "ship-image": "ship/rebel-alliance/cr90-corvette.png",
        "image": "ship-card/rebel-alliance/cr90-corvette-a.png",
        "key": "cr90CorvetteA"
     },
     "cr90CorvetteB": {
        "name": "CR90 Corvette B",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 1,
        "squadron": 1,
        "engineering": 2,
        "attack": {
           "front": [
              0,
              3,
              0
           ],
           "right": [
              0,
              2,
              0
           ],
           "left": [
              0,
              2,
              0
           ],
           "rear": [
              0,
              1,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Evade",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "||"
           ],
           "3": [
              "-",
              "|",
              "||"
           ],
           "4": [
              "-",
              "|",
              "|",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Defensive Retrofit",
           "Ion Cannons"
        ],
        "points": 39,
        "ship-image": "ship/rebel-alliance/cr90-corvette.png",
        "image": "ship-card/rebel-alliance/cr90-corvette-b.png",
        "key": "cr90CorvetteB"
     },
     "gladiatorIClassStarDestroyer": {
        "name": "Gladiator I-class Star Destroyer",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 2,
        "engineering": 3,
        "attack": {
           "front": [
              2,
              0,
              2
           ],
           "right": [
              0,
              0,
              4
           ],
           "left": [
              0,
              0,
              4
           ],
           "rear": [
              1,
              0,
              1
           ]
        },
        "shield": {
           "front": 3,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Support Team",
           "Ordnance"
        ],
        "points": 56,
        "ship-image": "ship/galactic-empire/gladiator-class-star-destroyer.png",
        "image": "ship-card/galactic-empire/gladiator-i-class-star-destroyer.png",
        "key": "gladiatorIClassStarDestroyer"
     },
     "gladiatorIiClassStarDestroyer": {
        "name": "Gladiator II-class Star Destroyer",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "command": 2,
        "squadron": 2,
        "engineering": 3,
        "attack": {
           "front": [
              2,
              0,
              2
           ],
           "right": [
              1,
              0,
              3
           ],
           "left": [
              1,
              0,
              3
           ],
           "rear": [
              1,
              0,
              1
           ]
        },
        "shield": {
           "front": 3,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Support Team",
           "Ordnance"
        ],
        "points": 62,
        "ship-image": "ship/galactic-empire/gladiator-class-star-destroyer.png",
        "image": "ship-card/galactic-empire/gladiator-ii-class-star-destroyer.png",
        "key": "gladiatorIiClassStarDestroyer"
     },
     "gozantiClassAssaultCarriers": {
        "name": "Gozanti-class Assault Carriers",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 1,
        "squadron": 2,
        "engineering": 2,
        "defense-tokens": [
           "Scatter",
           "Evade"
        ],
        "attack": {
           "front": [
              1,
              0,
              0
           ],
           "right": [
              0,
              1,
              0
           ],
           "left": [
              0,
              1,
              0
           ],
           "rear": [
              0,
              0,
              0
           ]
        },
        "shield": {
           "front": 1,
           "right": 1,
           "left": 1,
           "rear": 1
        },
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "|",
              "|",
              "-"
           ]
        },
        "slots": [
           "Officer",
           "Fleet Support",
           "Offensive Retrofit"
        ],
        "points": 28,
        "ship-image": "ship/galactic-empire/gozanti-class-carriers.png",
        "image": "ship-card/galactic-empire/gozanti-class-assault-carriers.png",
        "key": "gozantiClassAssaultCarriers"
     },
     "gozantiClassCruisers": {
        "name": "Gozanti-class Cruisers",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "command": 1,
        "squadron": 2,
        "engineering": 2,
        "defense-tokens": [
           "Scatter",
           "Evade"
        ],
        "attack": {
           "front": [
              0,
              1,
              0
           ],
           "right": [
              0,
              1,
              0
           ],
           "left": [
              0,
              1,
              0
           ],
           "rear": [
              0,
              0,
              0
           ]
        },
        "shield": {
           "front": 1,
           "right": 1,
           "left": 1,
           "rear": 1
        },
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "|",
              "|",
              "-"
           ]
        },
        "slots": [
           "Officer",
           "Fleet Support",
           "Offensive Retrofit"
        ],
        "points": 23,
        "ship-image": "ship/galactic-empire/gozanti-class-carriers.png",
        "image": "ship-card/galactic-empire/gozanti-class-cruisers.png",
        "key": "gozantiClassCruisers"
     },
     "gr75CombatRetrofits": {
        "name": "GR-75 Combat Retrofits",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 1,
        "squadron": 2,
        "engineering": 2,
        "attack": {
           "front": [
              0,
              1,
              0
           ],
           "right": [
              0,
              0,
              0
           ],
           "left": [
              0,
              0,
              0
           ],
           "rear": [
              0,
              1,
              0
           ]
        },
        "shield": {
           "front": 1,
           "right": 1,
           "left": 1,
           "rear": 1
        },
        "defense-tokens": [
           "Scatter",
           "Evade"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "||"
           ],
           "3": [
              "-",
              "|",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Fleet Support",
           "Offensive Retrofit"
        ],
        "points": 24,
        "ship-image": "ship/rebel-alliance/gr-75-transports.png",
        "image": "ship-card/rebel-alliance/gr-75-combat-retrofits.png",
        "key": "gr75CombatRetrofits"
     },
     "gr75MediumTransports": {
        "name": "GR-75 Medium Transports",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "command": 1,
        "squadron": 2,
        "engineering": 2,
        "attack": {
           "front": [
              0,
              0,
              0
           ],
           "right": [
              0,
              0,
              0
           ],
           "left": [
              0,
              0,
              0
           ],
           "rear": [
              0,
              0,
              0
           ]
        },
        "shield": {
           "front": 1,
           "right": 1,
           "left": 1,
           "rear": 1
        },
        "defense-tokens": [
           "Scatter",
           "Evade"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "||"
           ],
           "3": [
              "-",
              "|",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Fleet Support",
           "Offensive Retrofit"
        ],
        "points": 18,
        "ship-image": "ship/rebel-alliance/gr-75-transports.png",
        "image": "ship-card/rebel-alliance/gr-75-medium-transports.png",
        "key": "gr75MediumTransports"
     },
     "hammerheadScoutCorvette": {
        "name": "Hammerhead Scout Corvette",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 1,
        "squadron": 1,
        "engineering": 2,
        "attack": {
           "front": [
              2,
              1,
              0
           ],
           "right": [
              0,
              1,
              0
           ],
           "left": [
              0,
              1,
              0
           ],
           "rear": [
              0,
              0,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 1,
           "left": 1,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "||",
              "|"
           ],
           "3": [
              "|",
              "|",
              "-"
           ]
        },
        "slots": [
           "Officer",
           "Offensive Retrofit",
           "Weapons Team",
           "Turbolasers"
        ],
        "points": 41,
        "ship-image": "ship/rebel-alliance/hammerhead-corvette.png",
        "image": "ship-card/rebel-alliance/hammerhead-scout-corvette.png",
        "key": "hammerheadScoutCorvette"
     },
     "hammerheadTorpedoCorvette": {
        "name": "Hammerhead Torpedo Corvette",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "command": 1,
        "squadron": 1,
        "engineering": 2,
        "attack": {
           "front": [
              1,
              1,
              1
           ],
           "right": [
              0,
              0,
              1
           ],
           "left": [
              0,
              0,
              1
           ],
           "rear": [
              0,
              0,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 1,
           "left": 1,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "||",
              "|"
           ],
           "3": [
              "|",
              "|",
              "-"
           ]
        },
        "slots": [
           "Officer",
           "Offensive Retrofit",
           "Weapons Team",
           "Ordnance"
        ],
        "points": 36,
        "ship-image": "ship/rebel-alliance/hammerhead-corvette.png",
        "image": "ship-card/rebel-alliance/hammerhead-torpedo-corvette.png",
        "key": "hammerheadTorpedoCorvette"
     },
     "imperialIClassStarDestroyer": {
        "name": "Imperial I-class Star Destroyer",
        "size": "large",
        "faction": "Galactic Empire",
        "hull": 11,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "command": 3,
        "squadron": 4,
        "engineering": 4,
        "attack": {
           "front": [
              3,
              2,
              3
           ],
           "right": [
              2,
              0,
              2
           ],
           "left": [
              2,
              0,
              2
           ],
           "rear": [
              1,
              2,
              0
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Offensive Retrofit",
           "Ion Cannons",
           "Turbolasers"
        ],
        "points": 112,
        "ship-image": "ship/galactic-empire/imperial-class-star-destroyer.png",
        "image": "ship-card/galactic-empire/imperial-i-class-star-destroyer.png",
        "key": "imperialIClassStarDestroyer"
     },
     "imperialIiClassStarDestroyer": {
        "name": "Imperial II-class Star Destroyer",
        "size": "large",
        "faction": "Galactic Empire",
        "hull": 11,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "command": 3,
        "squadron": 4,
        "engineering": 4,
        "attack": {
           "front": [
              4,
              4,
              0
           ],
           "right": [
              2,
              2,
              0
           ],
           "left": [
              2,
              2,
              0
           ],
           "rear": [
              1,
              2,
              0
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Defensive Retrofit",
           "Ion Cannons",
           "Turbolasers"
        ],
        "points": 120,
        "ship-image": "ship/galactic-empire/imperial-class-star-destroyer.png",
        "image": "ship-card/galactic-empire/imperial-ii-class-star-destroyer.png",
        "key": "imperialIiClassStarDestroyer"
     },
     "imperialStarDestroyerCymoon1Refit": {
        "name": "Imperial Star Destroyer Cymoon 1 Refit",
        "size": "large",
        "faction": "Galactic Empire",
        "hull": 11,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           2
        ],
        "command": 3,
        "squadron": 3,
        "engineering": 4,
        "attack": {
           "front": [
              5,
              2,
              0
           ],
           "right": [
              1,
              3,
              0
           ],
           "left": [
              1,
              3,
              0
           ],
           "rear": [
              1,
              2,
              0
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Fleet Command",
           "Offensive Retrofit",
           "Turbolasers",
           "Turbolasers"
        ],
        "points": 112,
        "ship-image": "ship/galactic-empire/imperial-class-star-destroyer.png",
        "image": "ship-card/galactic-empire/imperial-star-destroyer-cymoon-1-refit.png",
        "key": "imperialStarDestroyerCymoon1Refit"
     },
     "imperialStarDestroyerKuatRefit": {
        "name": "Imperial Star Destroyer Kuat Refit",
        "size": "large",
        "faction": "Galactic Empire",
        "hull": 11,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "command": 3,
        "squadron": 2,
        "engineering": 4,
        "attack": {
           "front": [
              3,
              2,
              3
           ],
           "right": [
              1,
              1,
              2
           ],
           "left": [
              1,
              1,
              2
           ],
           "rear": [
              1,
              1,
              1
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Defensive Retrofit",
           "Ion Cannons",
           "Turbolasers"
        ],
        "points": 112,
        "ship-image": "ship/galactic-empire/imperial-class-star-destroyer-v2.png",
        "image": "ship-card/galactic-empire/imperial-star-destroyer-kuat-refit.png",
        "key": "imperialStarDestroyerKuatRefit"
     },
     "interdictorCombatRefit": {
        "name": "Interdictor Combat Refit",
        "size": "medium",
        "faction": "Galactic Empire",
        "hull": 9,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "command": 2,
        "squadron": 2,
        "engineering": 5,
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Contain",
           "Contain"
        ],
        "attack": {
           "front": [
              2,
              2,
              0
           ],
           "right": [
              2,
              2,
              0
           ],
           "left": [
              2,
              2,
              0
           ],
           "rear": [
              1,
              2,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Offensive Retrofit",
           "Experimental Retrofit",
           "Ion Cannons"
        ],
        "points": 93,
        "ship-image": "ship/galactic-empire/interdictor.png",
        "image": "ship-card/galactic-empire/interdictor-combat-refit.png",
        "key": "interdictorCombatRefit"
     },
     "interdictorSuppressionRefit": {
        "name": "Interdictor Suppression Refit",
        "size": "medium",
        "faction": "Galactic Empire",
        "hull": 9,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 2,
        "engineering": 5,
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Contain",
           "Contain"
        ],
        "attack": {
           "front": [
              1,
              3,
              0
           ],
           "right": [
              1,
              3,
              0
           ],
           "left": [
              1,
              3,
              0
           ],
           "rear": [
              1,
              2,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Offensive Retrofit",
           "Experimental Retrofit",
           "Experimental Retrofit",
           "Ion Cannons"
        ],
        "points": 90,
        "ship-image": "ship/galactic-empire/interdictor.png",
        "image": "ship-card/galactic-empire/interdictor-suppression-refit.png",
        "key": "interdictorSuppressionRefit"
     },
     "mc30cScoutFrigate": {
        "name": "MC30c Scout Frigate",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 1,
        "engineering": 3,
        "defense-tokens": [
           "Evade",
           "Evade",
           "Redirect",
           "Redirect"
        ],
        "attack": {
           "front": [
              1,
              0,
              2
           ],
           "right": [
              2,
              0,
              3
           ],
           "left": [
              2,
              0,
              3
           ],
           "rear": [
              1,
              0,
              1
           ]
        },
        "shield": {
           "front": 3,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "||"
           ],
           "4": [
              "-",
              "|",
              "|",
              "-"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Defensive Retrofit",
           "Ordnance",
           "Turbolasers"
        ],
        "points": 69,
        "ship-image": "ship/rebel-alliance/mc30c-frigate.png",
        "image": "ship-card/rebel-alliance/mc30c-scout-frigate.png",
        "key": "mc30cScoutFrigate"
     },
     "mc30cTorpedoFrigate": {
        "name": "MC30c Torpedo Frigate",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 1,
        "engineering": 3,
        "defense-tokens": [
           "Evade",
           "Evade",
           "Redirect",
           "Redirect"
        ],
        "attack": {
           "front": [
              0,
              1,
              2
           ],
           "right": [
              0,
              2,
              3
           ],
           "left": [
              0,
              2,
              3
           ],
           "rear": [
              0,
              1,
              1
           ]
        },
        "shield": {
           "front": 3,
           "right": 3,
           "left": 3,
           "rear": 2
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "||"
           ],
           "4": [
              "-",
              "|",
              "|",
              "-"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Defensive Retrofit",
           "Ordnance",
           "Turbolasers"
        ],
        "points": 63,
        "ship-image": "ship/rebel-alliance/mc30c-frigate.png",
        "image": "ship-card/rebel-alliance/mc30c-torpedo-frigate.png",
        "key": "mc30cTorpedoFrigate"
     },
     "mc75ArmoredCruiser": {
        "name": "MC75 Armored Cruiser",
        "size": "large",
        "faction": "Rebel Alliance",
        "hull": 9,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "command": 3,
        "squadron": 3,
        "engineering": 4,
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Contain",
           "Contain"
        ],
        "attack": {
           "front": [
              0,
              3,
              2
           ],
           "right": [
              3,
              2,
              0
           ],
           "left": [
              3,
              2,
              0
           ],
           "rear": [
              0,
              1,
              1
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 3
        },
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Defensive Retrofit",
           "Ordnance",
           "Ion Cannons",
           "Turbolasers"
        ],
        "points": 104,
        "ship-image": "ship/rebel-alliance/mc75-cruiser.png",
        "image": "ship-card/rebel-alliance/mc75-armored-cruiser.png",
        "key": "mc75ArmoredCruiser"
     },
     "mc75OrdnanceCruiser": {
        "name": "MC75 Ordnance Cruiser",
        "size": "large",
        "faction": "Rebel Alliance",
        "hull": 9,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "command": 3,
        "squadron": 2,
        "engineering": 4,
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Contain",
           "Contain"
        ],
        "attack": {
           "front": [
              0,
              2,
              3
           ],
           "right": [
              3,
              0,
              2
           ],
           "left": [
              3,
              0,
              2
           ],
           "rear": [
              0,
              0,
              2
           ]
        },
        "shield": {
           "front": 4,
           "right": 3,
           "left": 3,
           "rear": 3
        },
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Defensive Retrofit",
           "Ordnance",
           "Ordnance"
        ],
        "points": 100,
        "ship-image": "ship/rebel-alliance/mc75-cruiser.png",
        "image": "ship-card/rebel-alliance/mc75-ordnance-cruiser.png",
        "key": "mc75OrdnanceCruiser"
     },
     "mc80AssaultCruiser": {
        "name": "MC80 Assault Cruiser",
        "size": "large",
        "faction": "Rebel Alliance",
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "command": 3,
        "squadron": 3,
        "engineering": 4,
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "attack": {
           "front": [
              2,
              1,
              0
           ],
           "right": [
              4,
              2,
              0
           ],
           "left": [
              4,
              2,
              0
           ],
           "rear": [
              2,
              1,
              0
           ]
        },
        "shield": {
           "front": 4,
           "right": 4,
           "left": 4,
           "rear": 3
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Defensive Retrofit",
           "Defensive Retrofit",
           "Ion Cannons",
           "Turbolasers"
        ],
        "points": 114,
        "ship-image": "ship/rebel-alliance/mc80-home-one-cruiser.png",
        "image": "ship-card/rebel-alliance/mc80-assault-cruiser.png",
        "key": "mc80AssaultCruiser"
     },
     "mc80BattleCruiser": {
        "name": "MC80 Battle Cruiser",
        "size": "large",
        "faction": "Rebel Alliance",
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           2
        ],
        "command": 3,
        "squadron": 2,
        "engineering": 4,
        "defense-tokens": [
           "Brace",
           "Brace",
           "Redirect"
        ],
        "attack": {
           "front": [
              4,
              3,
              0
           ],
           "right": [
              2,
              1,
              0
           ],
           "left": [
              2,
              1,
              0
           ],
           "rear": [
              1,
              1,
              0
           ]
        },
        "shield": {
           "front": 5,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "-"
           ],
           "3": [
              "|",
              "-",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Support Team",
           "Ion Cannons",
           "Turbolasers",
           "Turbolasers"
        ],
        "points": 103,
        "ship-image": "ship/rebel-alliance/mc80-liberty-cruiser.png",
        "image": "ship-card/rebel-alliance/mc80-battle-cruiser.png",
        "key": "mc80BattleCruiser"
     },
     "mc80CommandCruiser": {
        "name": "MC80 Command Cruiser",
        "size": "large",
        "faction": "Rebel Alliance",
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "command": 3,
        "squadron": 4,
        "engineering": 4,
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect",
           "Contain"
        ],
        "attack": {
           "front": [
              1,
              2,
              0
           ],
           "right": [
              3,
              3,
              0
           ],
           "left": [
              3,
              3,
              0
           ],
           "rear": [
              1,
              2,
              0
           ]
        },
        "shield": {
           "front": 4,
           "right": 4,
           "left": 4,
           "rear": 3
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Offensive Retrofit",
           "Defensive Retrofit",
           "Ion Cannons",
           "Turbolasers"
        ],
        "points": 106,
        "ship-image": "ship/rebel-alliance/mc80-home-one-cruiser.png",
        "image": "ship-card/rebel-alliance/mc80-command-cruiser.png",
        "key": "mc80CommandCruiser"
     },
     "mc80StarCruiser": {
        "name": "MC80 Star Cruiser",
        "size": "large",
        "faction": "Rebel Alliance",
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "command": 3,
        "squadron": 2,
        "engineering": 4,
        "defense-tokens": [
           "Brace",
           "Brace",
           "Redirect"
        ],
        "attack": {
           "front": [
              3,
              4,
              0
           ],
           "right": [
              2,
              1,
              0
           ],
           "left": [
              2,
              1,
              0
           ],
           "rear": [
              0,
              2,
              0
           ]
        },
        "shield": {
           "front": 5,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "-"
           ],
           "3": [
              "|",
              "-",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Support Team",
           "Ion Cannons",
           "Turbolasers",
           "Turbolasers"
        ],
        "points": 96,
        "ship-image": "ship/rebel-alliance/mc80-liberty-cruiser.png",
        "image": "ship-card/rebel-alliance/mc80-star-cruiser.png",
        "key": "mc80StarCruiser"
     },
     "modifiedPeltaClassAssaultShip": {
        "name": "Modified Pelta-class Assault Ship",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "command": 2,
        "squadron": 1,
        "engineering": 4,
        "attack": {
           "front": [
              2,
              0,
              2
           ],
           "right": [
              1,
              0,
              1
           ],
           "left": [
              1,
              0,
              1
           ],
           "rear": [
              2,
              0,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Fleet Command",
           "Ordnance"
        ],
        "points": 56,
        "ship-image": "ship/rebel-alliance/pelta-class-ship.png",
        "image": "ship-card/rebel-alliance/modified-pelta-class-assault-ship.png",
        "key": "modifiedPeltaClassAssaultShip"
     },
     "modifiedPeltaClassCommandShip": {
        "name": "Modified Pelta-class Command Ship",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 3,
        "engineering": 4,
        "attack": {
           "front": [
              2,
              2,
              0
           ],
           "right": [
              1,
              1,
              0
           ],
           "left": [
              1,
              1,
              0
           ],
           "rear": [
              2,
              0,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Fleet Command",
           "Offensive Retrofit"
        ],
        "points": 60,
        "ship-image": "ship/rebel-alliance/pelta-class-ship.png",
        "image": "ship-card/rebel-alliance/modified-pelta-class-command-ship.png",
        "key": "modifiedPeltaClassCommandShip"
     },
     "nebulonBEscortFrigate": {
        "name": "Nebulon-B Escort Frigate",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "command": 2,
        "squadron": 2,
        "engineering": 3,
        "attack": {
           "front": [
              3,
              0,
              0
           ],
           "right": [
              1,
              1,
              0
           ],
           "left": [
              1,
              1,
              0
           ],
           "rear": [
              2,
              0,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 1,
           "left": 1,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Brace"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Turbolasers"
        ],
        "points": 57,
        "ship-image": "ship/rebel-alliance/nebulon-b-frigate.png",
        "image": "ship-card/rebel-alliance/nebulon-b-escort-frigate.png",
        "key": "nebulonBEscortFrigate"
     },
     "nebulonBSupportRefit": {
        "name": "Nebulon-B Support Refit",
        "size": "small",
        "faction": "Rebel Alliance",
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 1,
        "engineering": 3,
        "attack": {
           "front": [
              3,
              0,
              0
           ],
           "right": [
              1,
              1,
              0
           ],
           "left": [
              1,
              1,
              0
           ],
           "rear": [
              2,
              0,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 1,
           "left": 1,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Brace",
           "Brace"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "||"
           ]
        },
        "slots": [
           "Officer",
           "Support Team",
           "Turbolasers"
        ],
        "points": 51,
        "ship-image": "ship/rebel-alliance/nebulon-b-frigate.png",
        "image": "ship-card/rebel-alliance/nebulon-b-support-refit.png",
        "key": "nebulonBSupportRefit"
     },
     "quasarFireIClassCruiserCarrier": {
        "name": "Quasar Fire I-class Cruiser-Carrier",
        "size": "medium",
        "faction": "Galactic Empire",
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 2,
        "squadron": 4,
        "engineering": 2,
        "attack": {
           "front": [
              0,
              3,
              0
           ],
           "right": [
              0,
              2,
              0
           ],
           "left": [
              0,
              2,
              0
           ],
           "rear": [
              0,
              1,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Offensive Retrofit"
        ],
        "points": 54,
        "ship-image": "ship/galactic-empire/quasar-fire-class-cruiser-carrier.png",
        "image": "ship-card/galactic-empire/quasar-fire-i-class-cruiser-carrier.png",
        "key": "quasarFireIClassCruiserCarrier"
     },
     "quasarFireIiClassCruiserCarrier": {
        "name": "Quasar Fire II-class Cruiser-Carrier",
        "size": "medium",
        "faction": "Galactic Empire",
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           1,
           0,
           0
        ],
        "command": 2,
        "squadron": 4,
        "engineering": 2,
        "attack": {
           "front": [
              2,
              1,
              0
           ],
           "right": [
              1,
              1,
              0
           ],
           "left": [
              1,
              1,
              0
           ],
           "rear": [
              0,
              1,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 1
        },
        "defense-tokens": [
           "Brace",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "|",
              "|"
           ],
           "3": [
              "-",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Weapons Team",
           "Offensive Retrofit"
        ],
        "points": 61,
        "ship-image": "ship/galactic-empire/quasar-fire-class-cruiser-carrier.png",
        "image": "ship-card/galactic-empire/quasar-fire-ii-class-cruiser-carrier.png",
        "key": "quasarFireIiClassCruiserCarrier"
     },
     "raiderIClassCorvette": {
        "name": "Raider I-class Corvette",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           2
        ],
        "command": 1,
        "squadron": 1,
        "engineering": 2,
        "attack": {
           "front": [
              0,
              2,
              2
           ],
           "right": [
              0,
              1,
              1
           ],
           "left": [
              0,
              1,
              1
           ],
           "rear": [
              0,
              1,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Evade",
           "Brace"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "||",
              "||"
           ],
           "3": [
              "-",
              "|",
              "|"
           ],
           "4": [
              "-",
              "|",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Ordnance"
        ],
        "points": 44,
        "ship-image": "ship/galactic-empire/raider-class-corvette.png",
        "image": "ship-card/galactic-empire/raider-i-class-corvette.png",
        "key": "raiderIClassCorvette"
     },
     "raiderIiClassCorvette": {
        "name": "Raider II-class Corvette",
        "size": "small",
        "faction": "Galactic Empire",
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "command": 1,
        "squadron": 1,
        "engineering": 2,
        "attack": {
           "front": [
              0,
              3,
              1
           ],
           "right": [
              0,
              1,
              1
           ],
           "left": [
              0,
              1,
              1
           ],
           "rear": [
              0,
              1,
              0
           ]
        },
        "shield": {
           "front": 2,
           "right": 2,
           "left": 2,
           "rear": 2
        },
        "defense-tokens": [
           "Evade",
           "Evade",
           "Brace"
        ],
        "speed-chart": {
           "1": [
              "||"
           ],
           "2": [
              "||",
              "||"
           ],
           "3": [
              "-",
              "|",
              "|"
           ],
           "4": [
              "-",
              "|",
              "|",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Ion Cannons"
        ],
        "points": 48,
        "ship-image": "ship/galactic-empire/raider-class-corvette.png",
        "image": "ship-card/galactic-empire/raider-ii-class-corvette.png",
        "key": "raiderIiClassCorvette"
     },
     "victoryIClassStarDestroyer": {
        "name": "Victory I-class Star Destroyer",
        "size": "medium",
        "faction": "Galactic Empire",
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 3,
        "squadron": 3,
        "engineering": 4,
        "attack": {
           "front": [
              3,
              0,
              3
           ],
           "right": [
              2,
              0,
              1
           ],
           "left": [
              2,
              0,
              1
           ],
           "rear": [
              2,
              0,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 3,
           "left": 3,
           "rear": 1
        },
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "-",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Ordnance",
           "Turbolasers"
        ],
        "points": 73,
        "ship-image": "ship/galactic-empire/victory-class-star-destroyer.png",
        "image": "ship-card/galactic-empire/victory-i-class-star-destroyer.png",
        "key": "victoryIClassStarDestroyer"
     },
     "victoryIiClassStarDestroyer": {
        "name": "Victory II-class Star Destroyer",
        "size": "medium",
        "faction": "Galactic Empire",
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           0
        ],
        "command": 3,
        "squadron": 3,
        "engineering": 4,
        "attack": {
           "front": [
              3,
              3,
              0
           ],
           "right": [
              2,
              1,
              0
           ],
           "left": [
              2,
              1,
              0
           ],
           "rear": [
              2,
              0,
              0
           ]
        },
        "shield": {
           "front": 3,
           "right": 3,
           "left": 3,
           "rear": 1
        },
        "defense-tokens": [
           "Brace",
           "Redirect",
           "Redirect"
        ],
        "speed-chart": {
           "1": [
              "|"
           ],
           "2": [
              "-",
              "|"
           ]
        },
        "slots": [
           "Officer",
           "Weapons Team",
           "Offensive Retrofit",
           "Ion Cannons",
           "Turbolasers"
        ],
        "points": 85,
        "ship-image": "ship/galactic-empire/victory-class-star-destroyer.png",
        "image": "ship-card/galactic-empire/victory-ii-class-star-destroyer.png",
        "key": "victoryIiClassStarDestroyer"
     }
  };

  Object.freeze(ShipCard);

  const SquadronCard = {

    A_WING_SQUADRON: "aWingSquadron",
    AGGRESSOR_ASSAULT_FIGHTER: "aggressorAssaultFighter",
    B_WING_SQUADRON: "bWingSquadron",
    BIGGS_DARKLIGHTER: "biggsDarklighter",
    BLACK_SQUADRON: "blackSquadron",
    BOBA_FETT: "bobaFett",
    BOSSK: "bossk",
    CAPTAIN_JONUS: "captainJonus",
    CIENA_REE: "cienaRee",
    COLONEL_JENDON: "colonelJendon",
    CORRAN_HORN: "corranHorn",
    DAGGER_SQUADRON: "daggerSquadron",
    DARTH_VADER: "darthVader",
    DASH_RENDAR: "dashRendar",
    DENGAR: "dengar",
    DUTCH_VANDER: "dutchVander",
    E_WING_SQUADRON: "eWingSquadron",
    FIRESPRAY_31: "firespray31",
    GAMMA_SQUADRON: "gammaSquadron",
    GAR_SAXON: "garSaxon",
    GOLD_SQUADRON: "goldSquadron",
    GREEN_SQUADRON: "greenSquadron",
    HAN_SOLO: "hanSolo",
    HERA_SYNDULLA: "heraSyndulla",
    HOWLRUNNER: "howlrunner",
    HWK_290: "hwk290",
    IG_88: "ig88",
    JAN_ORS: "janOrs",
    JUMPMASTER_5000: "jumpmaster5000",
    KETSU_ONYO: "ketsuOnyo",
    KEYAN_FARLANDER: "keyanFarlander",
    LAMBDA_CLASS_SHUTTLE: "lambdaClassShuttle",
    LANCER_CLASS_PURSUIT_CRAFT: "lancerClassPursuitCraft",
    LIEUTENANT_BLOUNT: "lieutenantBlount",
    LUKE_SKYWALKER: "lukeSkywalker",
    MAAREK_STELE: "maarekStele",
    MAJOR_RHYMER: "majorRhymer",
    MANDALORIAN_GAUNTLET_FIGHTER: "mandalorianGauntletFighter",
    MAULER_MITHEL: "maulerMithel",
    MORNA_KEE: "mornaKee",
    NORRA_WEXLEY: "norraWexley",
    NYM: "nym",
    ROGUE_SQUADRON: "rogueSquadron",
    SABER_SQUADRON: "saberSquadron",
    SCURRG_H_6_BOMBER: "scurrgH6Bomber",
    SHARA_BEY: "sharaBey",
    SOONTIR_FEL: "soontirFel",
    TEMPEST_SQUADRON: "tempestSquadron",
    TEN_NUMB: "tenNumb",
    TIE_ADVANCED_SQUADRON: "tieAdvancedSquadron",
    TIE_BOMBER_SQUADRON: "tieBomberSquadron",
    TIE_DEFENDER_SQUADRON: "tieDefenderSquadron",
    TIE_FIGHTER_SQUADRON: "tieFighterSquadron",
    TIE_INTERCEPTOR_SQUADRON: "tieInterceptorSquadron",
    TIE_PHANTOM_SQUADRON: "tiePhantomSquadron",
    TYCHO_CELCHU: "tychoCelchu",
    VALEN_RUDOR: "valenRudor",
    VCX_100_FREIGHTER: "vcx100Freighter",
    VT_49_DECIMATOR: "vt49Decimator",
    WEDGE_ANTILLES: "wedgeAntilles",
    WHISPER: "whisper",
    X_WING_SQUADRON: "xWingSquadron",
    Y_WING_SQUADRON: "yWingSquadron",
    YT_1300: "yt1300",
    YT_2400: "yt2400",
    YV_666: "yv666",
    Z_95_HEADHUNTER_SQUADRON: "z95HeadhunterSquadron",
    ZERTIK_STROM: "zertikStrom",
  };

  SquadronCard.properties = 
  {
     "aWingSquadron": {
        "name": "A-wing Squadron",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 5,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Counter 2"
        ],
        "points": 11,
        "squadron-image": "squadron/rebel-alliance/a-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/a-wing-squadron.png",
        "key": "aWingSquadron"
     },
     "aggressorAssaultFighter": {
        "name": "Aggressor Assault Fighter",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Counter 1",
           "Rogue"
        ],
        "points": 16,
        "squadron-image": "squadron/galactic-empire/aggressor-assault-fighter.png",
        "image": "squadron-card/galactic-empire/aggressor-assault-fighter.png",
        "key": "aggressorAssaultFighter"
     },
     "bWingSquadron": {
        "name": "B-wing Squadron",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 2,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           1,
           1
        ],
        "keywords": [
           "Bomber"
        ],
        "points": 14,
        "squadron-image": "squadron/rebel-alliance/b-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/b-wing-squadron.png",
        "key": "bWingSquadron"
     },
     "biggsDarklighter": {
        "name": "Biggs Darklighter",
        "subname": "X-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           1,
           0,
           0
        ],
        "text": "Before a friendly squadron with Escort at distance 1 suffers damage during an attack, you may reduce the total damage by 1. If you do, choose a friendly squadron with Escort at distance 1. That squadron suffers 1 damage.",
        "keywords": [
           "Bomber",
           "Escort"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 19,
        "squadron-image": "squadron/rebel-alliance/x-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/biggs-darklighter.png",
        "key": "biggsDarklighter"
     },
     "blackSquadron": {
        "name": "Black Squadron",
        "subname": "TIE Fighter Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Counter 1",
           "Escort"
        ],
        "points": 9,
        "squadron-image": "squadron/galactic-empire/tie-fighter-squadron.png",
        "image": "squadron-card/galactic-empire/black-squadron.png",
        "key": "blackSquadron"
     },
     "bobaFett": {
        "name": "Boba Fett",
        "subname": "Slave I",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           1,
           1
        ],
        "text": "When you activate, choose 1 enemy ship or squadron at distance 1. That ship or squadron suffers 1 damage.",
        "keywords": [
           "Bomber",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 26,
        "squadron-image": "squadron/galactic-empire/firespray-31.png",
        "image": "squadron-card/galactic-empire/boba-fett.png",
        "key": "bobaFett"
     },
     "bossk": {
        "name": "Bossk",
        "subname": "Hound's Tooth",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 7,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           4
        ],
        "attack": [
           0,
           1,
           1
        ],
        "text": "While attacking, if you have 6 or fewer hull points remaining, you may add 1 blue die set to the [Accuracy] icon to your attack pool.",
        "keywords": [
           "Grit",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace"
        ],
        "points": 23,
        "squadron-image": "squadron/galactic-empire/yv-666.png",
        "image": "squadron-card/galactic-empire/bossk.png",
        "key": "bossk"
     },
     "captainJonus": {
        "name": "Captain Jonus",
        "subname": "TIE Bomber Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While a friendly ship is attacking a ship at distance 1 of you, it may change 1 die to a face with an [Accuracy] icon.",
        "keywords": [
           "Bomber",
           "Grit"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 16,
        "squadron-image": "squadron/galactic-empire/tie-bomber-squadron.png",
        "image": "squadron-card/galactic-empire/captain-jonus.png",
        "key": "captainJonus"
     },
     "cienaRee": {
        "name": "Ciena Ree",
        "subname": "TIE Interceptor Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 5,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "text": "While you are defending, the attack is treated as obstructed.",
        "keywords": [
           "Counter 2",
           "Swarm"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 17,
        "squadron-image": "squadron/galactic-empire/tie-interceptor-squadron.png",
        "image": "squadron-card/galactic-empire/ciena-ree.png",
        "key": "cienaRee"
     },
     "colonelJendon": {
        "name": "Colonel Jendon",
        "subname": "Lambda-class Shuttle",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           2
        ],
        "attack": [
           0,
           1,
           0
        ],
        "text": "During your activation, instead of attacking you may choose 1 friendly squadron at distance 1-2. That squadron may perform an attack (even if it has already activated).",
        "keywords": [
           "Heavy",
           "Relay 2"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 20,
        "squadron-image": "squadron/galactic-empire/lambda-class-shuttle.png",
        "image": "squadron-card/galactic-empire/colonel-jendon.png",
        "key": "colonelJendon"
     },
     "corranHorn": {
        "name": "Corran Horn",
        "subname": "E-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           1,
           0,
           0
        ],
        "keywords": [
           "Bomber",
           "Rogue",
           "Snipe 4"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 22,
        "squadron-image": "squadron/rebel-alliance/e-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/corran-horn.png",
        "key": "corranHorn"
     },
     "daggerSquadron": {
        "name": "Dagger Squadron",
        "subname": "B-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 2,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           1
        ],
        "attack": [
           0,
           1,
           1
        ],
        "keywords": [
           "Bomber",
           "Swarm"
        ],
        "points": 15,
        "squadron-image": "squadron/rebel-alliance/b-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/dagger-squadron.png",
        "key": "daggerSquadron"
     },
     "darthVader": {
        "name": "Darth Vader",
        "subname": "TIE Advanced Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           1
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While attacking, each of your [Critical Hit] icons adds 1 damage to the damage total.",
        "keywords": [
           "Escort"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 21,
        "squadron-image": "squadron/galactic-empire/tie-advanced-squadron.png",
        "image": "squadron-card/galactic-empire/darth-vader.png",
        "key": "darthVader"
     },
     "dashRendar": {
        "name": "Dash Rendar",
        "subname": "Outrider",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 4,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While attacking, you may reroll 1 die for each enemy squadron or enemy ship at distance 1.",
        "keywords": [
           "Bomber",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 24,
        "squadron-image": "squadron/rebel-alliance/yt-2400.png",
        "image": "squadron-card/rebel-alliance/dash-rendar.png",
        "key": "dashRendar"
     },
     "dengar": {
        "name": "Dengar",
        "subname": "Punishing One",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While another friendly squadron is at distance 1–2, it has Counter 1 or increases its Counter value by 1.",
        "keywords": [
           "Intel",
           "Swarm"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 20,
        "squadron-image": "squadron/galactic-empire/jumpmaster-5000.png",
        "image": "squadron-card/galactic-empire/dengar.png",
        "key": "dengar"
     },
     "dutchVander": {
        "name": "\"Dutch\" Vander",
        "subname": "Y-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "When a squadron you attack suffers at least 1 damage, you may toggle its activation slider to the activated side. If it was already activated, it suffers 1 additional damage instead.",
        "keywords": [
           "Bomber",
           "Heavy"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 16,
        "squadron-image": "squadron/rebel-alliance/y-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/dutch-vander.png",
        "key": "dutchVander"
     },
     "eWingSquadron": {
        "name": "E-wing Squadron",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           1,
           0,
           0
        ],
        "keywords": [
           "Bomber",
           "Snipe 3"
        ],
        "points": 15,
        "squadron-image": "squadron/rebel-alliance/e-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/e-wing-squadron.png",
        "key": "eWingSquadron"
     },
     "firespray31": {
        "name": "Firespray-31",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           2,
           0
        ],
        "keywords": [
           "Bomber",
           "Rogue"
        ],
        "points": 18,
        "squadron-image": "squadron/galactic-empire/firespray-31.png",
        "image": "squadron-card/galactic-empire/firespray-31.png",
        "key": "firespray31"
     },
     "gammaSquadron": {
        "name": "Gamma Squadron",
        "subname": "TIE Bomber Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Bomber",
           "Grit"
        ],
        "points": 10,
        "squadron-image": "squadron/galactic-empire/tie-bomber-squadron.png",
        "image": "squadron-card/galactic-empire/gamma-squadron.png",
        "key": "gammaSquadron"
     },
     "garSaxon": {
        "name": "Gar Saxon",
        "subname": "Mandalorian Gauntlet Fighter",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 7,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           1,
           2,
           0
        ],
        "attack": [
           0,
           1,
           1
        ],
        "text": "When an enemy squadron with Intel or Relay at distance 1 activates, it suffers 1 damage.",
        "keywords": [
           "Assault",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace"
        ],
        "points": 23,
        "squadron-image": "squadron/galactic-empire/mandalorian-gauntlet-fighter.png",
        "image": "squadron-card/galactic-empire/gar-saxon.png",
        "key": "garSaxon"
     },
     "goldSquadron": {
        "name": "Gold Squadron",
        "subname": "Y-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "attack": [
           0,
           2,
           0
        ],
        "keywords": [
           "Bomber"
        ],
        "points": 12,
        "squadron-image": "squadron/rebel-alliance/y-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/gold-squadron.png",
        "key": "goldSquadron"
     },
     "greenSquadron": {
        "name": "Green Squadron",
        "subname": "A-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 5,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Bomber",
           "Counter 1"
        ],
        "points": 12,
        "squadron-image": "squadron/rebel-alliance/a-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/green-squadron.png",
        "key": "greenSquadron"
     },
     "hanSolo": {
        "name": "Han Solo",
        "subname": "Millennium Falcon",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 7,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           2
        ],
        "attack": [
           0,
           1,
           1
        ],
        "text": "At the start of the Ship Phase, you may activate as if you were activated by a [Squadron] command.",
        "keywords": [
           "Grit",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 26,
        "squadron-image": "squadron/rebel-alliance/yt-1300.png",
        "image": "squadron-card/rebel-alliance/han-solo.png",
        "key": "hanSolo"
     },
     "heraSyndulla": {
        "name": "Hera Syndulla",
        "subname": "Ghost",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           2
        ],
        "attack": [
           0,
           1,
           1
        ],
        "text": "At the start of the Squadron Phase, choose up to 2 friendly squadrons at distance 1-2. Those squadrons gain Rogue until the end oft the round.",
        "keywords": [
           "Grit",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace"
        ],
        "points": 28,
        "squadron-image": "squadron/rebel-alliance/vcx-100-freighter.png",
        "image": "squadron-card/rebel-alliance/hera-syndulla.png",
        "key": "heraSyndulla"
     },
     "howlrunner": {
        "name": "\"Howlrunner\"",
        "subname": "TIE Fighter Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "text": "While another friendly squadron with Swarm at distance 1 is attacking a squadron, it may add 1 blue die to its attack pool.",
        "keywords": [
           "Swarm"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 16,
        "squadron-image": "squadron/galactic-empire/tie-fighter-squadron.png",
        "image": "squadron-card/galactic-empire/howlrunner.png",
        "key": "howlrunner"
     },
     "hwk290": {
        "name": "HWK-290",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Counter 2",
           "Intel"
        ],
        "points": 12,
        "squadron-image": "squadron/rebel-alliance/hwk-290.png",
        "image": "squadron-card/rebel-alliance/hwk-290.png",
        "key": "hwk290"
     },
     "ig88": {
        "name": "IG-88",
        "subname": "IG-2000",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 5,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "You ignore the escort and counter keywords on enemy squadrons.",
        "keywords": [
           "Counter 2",
           "Rogue"
        ],
        "defense-tokens": [
           "Scatter"
        ],
        "points": 21,
        "squadron-image": "squadron/galactic-empire/aggressor-assault-fighter.png",
        "image": "squadron-card/galactic-empire/ig-88.png",
        "key": "ig88"
     },
     "janOrs": {
        "name": "Jan Ors",
        "subname": "Moldy Crow",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While a friendly squadron at distance 1-2 is defending, it can spend your defense tokens.",
        "keywords": [
           "Counter 2",
           "Intel"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 19,
        "squadron-image": "squadron/rebel-alliance/hwk-290.png",
        "image": "squadron-card/rebel-alliance/jan-ors.png",
        "key": "janOrs"
     },
     "jumpmaster5000": {
        "name": "JumpMaster 5000",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Intel",
           "Swarm"
        ],
        "points": 12,
        "squadron-image": "squadron/galactic-empire/jumpmaster-5000.png",
        "image": "squadron-card/galactic-empire/jumpmaster-5000.png",
        "key": "jumpmaster5000"
     },
     "ketsuOnyo": {
        "name": "Ketsu Onyo",
        "subname": "Shadow Caster",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 4,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           2,
           0
        ],
        "text": "While an enemy squadron is at distance 1, its speed is reduced by 2 to a minimum of 1.",
        "keywords": [
           "Bomber",
           "Grit",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 22,
        "squadron-image": "squadron/rebel-alliance/lancer-class-pursuit-craft.png",
        "image": "squadron-card/rebel-alliance/ketsu-onyo.png",
        "key": "ketsuOnyo"
     },
     "keyanFarlander": {
        "name": "Keyan Farlander",
        "subname": "B-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 2,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           2
        ],
        "text": "While attacking a ship, if the defending hull zone has no shields, you may reroll any number of dice in your attack pool.",
        "keywords": [
           "Bomber"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 20,
        "squadron-image": "squadron/rebel-alliance/b-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/keyan-farlander.png",
        "key": "keyanFarlander"
     },
     "lambdaClassShuttle": {
        "name": "Lambda-class Shuttle",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           2
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Heavy",
           "Relay 2",
           "Strategic"
        ],
        "points": 15,
        "squadron-image": "squadron/galactic-empire/lambda-class-shuttle.png",
        "image": "squadron-card/galactic-empire/lambda-class-shuttle.png",
        "key": "lambdaClassShuttle"
     },
     "lancerClassPursuitCraft": {
        "name": "Lancer-class Pursuit Craft",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 4,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Bomber",
           "Grit",
           "Rogue"
        ],
        "points": 15,
        "squadron-image": "squadron/rebel-alliance/lancer-class-pursuit-craft.png",
        "image": "squadron-card/rebel-alliance/lancer-class-pursuit-craft.png",
        "key": "lancerClassPursuitCraft"
     },
     "lieutenantBlount": {
        "name": "Lieutenant Blount",
        "subname": "Z-95 Headhunter Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           3,
           0,
           0
        ],
        "attack": [
           1,
           0,
           0
        ],
        "text": "While another friendly squadron with Swarm at distance 1 is attacking a squadron, it may reroll 1 die (in addition to any dice rerolled from Swarm).",
        "keywords": [
           "Swarm"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 14,
        "squadron-image": "squadron/rebel-alliance/z-95-headhunter-squadron.png",
        "image": "squadron-card/rebel-alliance/lieutenant-blount.png",
        "key": "lieutenantBlount"
     },
     "lukeSkywalker": {
        "name": "Luke Skywalker",
        "subname": "X-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While attacking a ship, treat the defender as having no shields.",
        "keywords": [
           "Bomber",
           "Escort"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 20,
        "squadron-image": "squadron/rebel-alliance/x-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/luke-skywalker.png",
        "key": "lukeSkywalker"
     },
     "maarekStele": {
        "name": "Maarek Stele",
        "subname": "TIE Defender Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 5,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           2
        ],
        "attack": [
           0,
           2,
           0
        ],
        "text": "While attacking, you may change 1 die to a face with a [Critical Hit] icon.",
        "keywords": [
           "Bomber",
           "Grit"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 21,
        "squadron-image": "squadron/galactic-empire/tie-defender-squadron.png",
        "image": "squadron-card/galactic-empire/maarek-stele.png",
        "key": "maarekStele"
     },
     "majorRhymer": {
        "name": "Major Rhymer",
        "subname": "TIE Bomber Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           1,
           1
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "Friendly squadrons at distance 1 can attack enemy ships at close range using all dice in their battery armament.",
        "keywords": [
           "Bomber",
           "Heavy"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 16,
        "squadron-image": "squadron/galactic-empire/tie-bomber-squadron.png",
        "image": "squadron-card/galactic-empire/major-rhymer.png",
        "key": "majorRhymer"
     },
     "mandalorianGauntletFighter": {
        "name": "Mandalorian Gauntlet Fighter",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 7,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           1,
           2,
           0
        ],
        "attack": [
           0,
           2,
           0
        ],
        "text": "",
        "keywords": [
           "Assault",
           "Rogue"
        ],
        "defense-tokens": [],
        "points": 20,
        "squadron-image": "squadron/galactic-empire/mandalorian-gauntlet-fighter.png",
        "image": "squadron-card/galactic-empire/mandalorian-gauntlet-fighter.png",
        "key": "mandalorianGauntletFighter"
     },
     "maulerMithel": {
        "name": "\"Mauler\" Mithel",
        "subname": "TIE Fighter Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "text": "After you move, each squadron engaged with you suffers 1 damage.",
        "keywords": [
           "Swarm"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 15,
        "squadron-image": "squadron/galactic-empire/tie-fighter-squadron.png",
        "image": "squadron-card/galactic-empire/mauler-mithel.png",
        "key": "maulerMithel"
     },
     "mornaKee": {
        "name": "Morna Kee",
        "subname": "VT-49 Decimator",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           3
        ],
        "attack": [
           0,
           3,
           0
        ],
        "text": "While attacking, you may spend 1 defense token to reroll any number of dice in your attack pool. When you activate, you recover 1 of your discarded defense tokens.",
        "keywords": [
           "Counter 1",
           "Rogue"
        ],
        "defense-tokens": [
           "Brace"
        ],
        "points": 27,
        "squadron-image": "squadron/galactic-empire/vt-49-decimator.png",
        "image": "squadron-card/galactic-empire/morna-kee.png",
        "key": "mornaKee"
     },
     "norraWexley": {
        "name": "Norra Wexley",
        "subname": "Y-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "Friendly squadrons with Bomber at distance 1 gain: \"[Critical Hit]: The defending hull zone loses 1 shield.\"",
        "keywords": [
           "Bomber"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 17,
        "squadron-image": "squadron/rebel-alliance/y-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/norra-wexley.png",
        "key": "norraWexley"
     },
     "nym": {
        "name": "Nym",
        "subname": "Havoc",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "attack": [
           0,
           1,
           1
        ],
        "text": "Blue [Critical Hit]: If the defender is a ship, you may choose and discard 1 of its defense tokens.",
        "keywords": [
           "Bomber",
           "Grit"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 21,
        "squadron-image": "squadron/rebel-alliance/scurrg-h-6-bomber.png",
        "image": "squadron-card/rebel-alliance/nym.png",
        "key": "nym"
     },
     "rogueSquadron": {
        "name": "Rogue Squadron",
        "subname": "X-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           1,
           0,
           0
        ],
        "keywords": [
           "Bomber",
           "Rogue"
        ],
        "points": 14,
        "squadron-image": "squadron/rebel-alliance/x-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/rogue-squadron.png",
        "key": "rogueSquadron"
     },
     "saberSquadron": {
        "name": "Saber Squadron",
        "subname": "TIE Interceptor Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 5,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Snipe 4",
           "Swarm"
        ],
        "points": 12,
        "squadron-image": "squadron/galactic-empire/tie-interceptor-squadron.png",
        "image": "squadron-card/galactic-empire/saber-squadron.png",
        "key": "saberSquadron"
     },
     "scurrgH6Bomber": {
        "name": "Scurrg H-6 Bomber",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "attack": [
           0,
           1,
           1
        ],
        "keywords": [
           "Bomber",
           "Grit",
           "Heavy"
        ],
        "points": 16,
        "squadron-image": "squadron/rebel-alliance/scurrg-h-6-bomber.png",
        "image": "squadron-card/rebel-alliance/scurrg-h-6-bomber.png",
        "key": "scurrgH6Bomber"
     },
     "sharaBey": {
        "name": "Shara Bey",
        "subname": "A-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 5,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While performing a Counter attack, each [Critical Hit] icon adds 1 damage to the damage total.",
        "keywords": [
           "Counter 3"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 17,
        "squadron-image": "squadron/rebel-alliance/a-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/shara-bey.png",
        "key": "sharaBey"
     },
     "soontirFel": {
        "name": "Soontir Fel",
        "subname": "TIE Interceptor Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 5,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "text": "After a squadron you are engaged with performs a non-Counter attack, it suffers 1 damage if it did not attack you.",
        "keywords": [
           "Counter 2",
           "Swarm"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 18,
        "squadron-image": "squadron/galactic-empire/tie-interceptor-squadron.png",
        "image": "squadron-card/galactic-empire/soontir-fel.png",
        "key": "soontirFel"
     },
     "tempestSquadron": {
        "name": "Tempest Squadron",
        "subname": "TIE Advanced Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Bomber",
           "Escort"
        ],
        "points": 13,
        "squadron-image": "squadron/galactic-empire/tie-advanced-squadron.png",
        "image": "squadron-card/galactic-empire/tempest-squadron.png",
        "key": "tempestSquadron"
     },
     "tenNumb": {
        "name": "Ten Numb",
        "subname": "B-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 2,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           1
        ],
        "attack": [
           0,
           1,
           1
        ],
        "text": "While attacking a squadron, you may spend 1 blue die with a [Critical Hit] icon. If you do, each other enemy squadron at distance 1 of the defender suffers 1 damage.",
        "keywords": [
           "Bomber"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 19,
        "squadron-image": "squadron/rebel-alliance/b-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/ten-numb.png",
        "key": "tenNumb"
     },
     "tieAdvancedSquadron": {
        "name": "TIE Advanced Squadron",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Escort"
        ],
        "points": 12,
        "squadron-image": "squadron/galactic-empire/tie-advanced-squadron.png",
        "image": "squadron-card/galactic-empire/tie-advanced-squadron.png",
        "key": "tieAdvancedSquadron"
     },
     "tieBomberSquadron": {
        "name": "TIE Bomber Squadron",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           1
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Bomber",
           "Heavy"
        ],
        "points": 9,
        "squadron-image": "squadron/galactic-empire/tie-bomber-squadron.png",
        "image": "squadron-card/galactic-empire/tie-bomber-squadron.png",
        "key": "tieBomberSquadron"
     },
     "tieDefenderSquadron": {
        "name": "TIE Defender Squadron",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 5,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           2
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Bomber"
        ],
        "points": 16,
        "squadron-image": "squadron/galactic-empire/tie-defender-squadron.png",
        "image": "squadron-card/galactic-empire/tie-defender-squadron.png",
        "key": "tieDefenderSquadron"
     },
     "tieFighterSquadron": {
        "name": "TIE Fighter Squadron",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Swarm"
        ],
        "points": 8,
        "squadron-image": "squadron/galactic-empire/tie-fighter-squadron.png",
        "image": "squadron-card/galactic-empire/tie-fighter-squadron.png",
        "key": "tieFighterSquadron"
     },
     "tieInterceptorSquadron": {
        "name": "TIE Interceptor Squadron",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 5,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Counter 2",
           "Swarm"
        ],
        "points": 11,
        "squadron-image": "squadron/galactic-empire/tie-interceptor-squadron.png",
        "image": "squadron-card/galactic-empire/tie-interceptor-squadron.png",
        "key": "tieInterceptorSquadron"
     },
     "tiePhantomSquadron": {
        "name": "TIE Phantom Squadron",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           2,
           0,
           0
        ],
        "keywords": [
           "Cloak"
        ],
        "points": 14,
        "squadron-image": "squadron/galactic-empire/tie-phantom-squadron.png",
        "image": "squadron-card/galactic-empire/tie-phantom-squadron.png",
        "key": "tiePhantomSquadron"
     },
     "tychoCelchu": {
        "name": "Tycho Celchu",
        "subname": "A-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 5,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "You are not prevented from moving or attacking ships while you are engaged.",
        "keywords": [
           "Counter 2"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 16,
        "squadron-image": "squadron/rebel-alliance/a-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/tycho-celchu.png",
        "key": "tychoCelchu"
     },
     "valenRudor": {
        "name": "Valen Rudor",
        "subname": "TIE Fighter Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           3
        ],
        "attack": [
           0,
           1,
           0
        ],
        "text": "While an enemy squadron is engaged with another squadron, it cannot attack you.",
        "keywords": [
           "Swarm"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 13,
        "squadron-image": "squadron/galactic-empire/tie-fighter-squadron.png",
        "image": "squadron-card/galactic-empire/valen-rudor.png",
        "key": "valenRudor"
     },
     "vcx100Freighter": {
        "name": "VCX-100 Freighter",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Heavy",
           "Relay 1",
           "Strategic"
        ],
        "points": 15,
        "squadron-image": "squadron/rebel-alliance/vcx-100-freighter.png",
        "image": "squadron-card/rebel-alliance/vcx-100-freighter.png",
        "key": "vcx100Freighter"
     },
     "vt49Decimator": {
        "name": "VT-49 Decimator",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 3,
        "hull": 8,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           0,
           3
        ],
        "attack": [
           0,
           3,
           0
        ],
        "keywords": [
           "Counter 1",
           "Heavy",
           "Rogue"
        ],
        "points": 27,
        "squadron-image": "squadron/galactic-empire/vt-49-decimator.png",
        "image": "squadron-card/galactic-empire/vt-49-decimator.png",
        "key": "vt49Decimator"
     },
     "wedgeAntilles": {
        "name": "Wedge Antilles",
        "subname": "X-wing Squadron",
        "unique": true,
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While attacking an activated squadron, you may add 2 blue dice to your attack pool.",
        "keywords": [
           "Bomber",
           "Escort"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 19,
        "squadron-image": "squadron/rebel-alliance/x-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/wedge-antilles.png",
        "key": "wedgeAntilles"
     },
     "whisper": {
        "name": "\"Whisper\"",
        "subname": "TIE Phantom Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 4,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           2,
           0,
           0
        ],
        "text": "After defending against an attack, if you spent a defense token, you may move up to distance 1, even if you are engaged.",
        "keywords": [
           "Cloak"
        ],
        "defense-tokens": [
           "Brace",
           "Scatter"
        ],
        "points": 20,
        "squadron-image": "squadron/galactic-empire/tie-phantom-squadron.png",
        "image": "squadron-card/galactic-empire/whisper.png",
        "key": "whisper"
     },
     "xWingSquadron": {
        "name": "X-wing Squadron",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           1,
           0,
           0
        ],
        "keywords": [
           "Bomber",
           "Escort"
        ],
        "points": 13,
        "squadron-image": "squadron/rebel-alliance/x-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/x-wing-squadron.png",
        "key": "xWingSquadron"
     },
     "yWingSquadron": {
        "name": "Y-wing Squadron",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Bomber",
           "Heavy"
        ],
        "points": 10,
        "squadron-image": "squadron/rebel-alliance/y-wing-squadron.png",
        "image": "squadron-card/rebel-alliance/y-wing-squadron.png",
        "key": "yWingSquadron"
     },
     "yt1300": {
        "name": "YT-1300",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 2,
        "hull": 7,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           3,
           0
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Counter 1",
           "Escort"
        ],
        "points": 13,
        "squadron-image": "squadron/rebel-alliance/yt-1300.png",
        "image": "squadron-card/rebel-alliance/yt-1300.png",
        "key": "yt1300"
     },
     "yt2400": {
        "name": "YT-2400",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 4,
        "hull": 6,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           4,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "keywords": [
           "Rogue"
        ],
        "points": 16,
        "squadron-image": "squadron/rebel-alliance/yt-2400.png",
        "image": "squadron-card/rebel-alliance/yt-2400.png",
        "key": "yt2400"
     },
     "yv666": {
        "name": "YV-666",
        "subname": "",
        "faction": "Galactic Empire",
        "speed": 2,
        "hull": 7,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           0,
           2,
           2
        ],
        "attack": [
           0,
           1,
           0
        ],
        "keywords": [
           "Grit",
           "Heavy",
           "Rogue"
        ],
        "points": 15,
        "squadron-image": "squadron/galactic-empire/yv-666.png",
        "image": "squadron-card/galactic-empire/yv-666.png",
        "key": "yv666"
     },
     "z95HeadhunterSquadron": {
        "name": "Z-95 Headhunter Squadron",
        "subname": "",
        "faction": "Rebel Alliance",
        "speed": 3,
        "hull": 3,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           3,
           0,
           0
        ],
        "attack": [
           1,
           0,
           0
        ],
        "keywords": [
           "Swarm"
        ],
        "points": 7,
        "squadron-image": "squadron/rebel-alliance/z-95-headhunter-squadron.png",
        "image": "squadron-card/rebel-alliance/z-95-headhunter-squadron.png",
        "key": "z95HeadhunterSquadron"
     },
     "zertikStrom": {
        "name": "Zertik Strom",
        "subname": "TIE Advanced Squadron",
        "unique": true,
        "faction": "Galactic Empire",
        "speed": 4,
        "hull": 5,
        "__comment": "dice array is [red, blue, black] counts",
        "squadron-attack": [
           3,
           0,
           0
        ],
        "attack": [
           0,
           0,
           1
        ],
        "text": "While attacking, you may choose another friendly squadron at distance 1. If you do, that squadron suffers 1 damage and you may reroll any number of attack dice.",
        "keywords": [
           "Escort"
        ],
        "defense-tokens": [
           "Brace",
           "Brace"
        ],
        "points": 15,
        "squadron-image": "squadron/galactic-empire/tie-advanced-squadron.png",
        "image": "squadron-card/galactic-empire/zertik-strom.png",
        "key": "zertikStrom"
     }
  };

  Object.freeze(SquadronCard);

  const UpgradeCard = {

    ADAR_TALLON: "adarTallon",
    ADMIRAL_ACKBAR: "admiralAckbar",
    ADMIRAL_CHIRANEAU: "admiralChiraneau",
    ADMIRAL_KONSTANTINE: "admiralKonstantine",
    ADMIRAL_MONTFERRAT: "admiralMontferrat",
    ADMIRAL_MOTTI: "admiralMotti",
    ADMIRAL_OZZEL: "admiralOzzel",
    ADMIRAL_RADDUS: "admiralRaddus",
    ADMIRAL_SCREED: "admiralScreed",
    ADMIRAL_SLOANE: "admiralSloane",
    ADMIRAL_TITUS: "admiralTitus",
    ADMONITION: "admonition",
    ADVANCED_PROJECTORS: "advancedProjectors",
    AGENT_KALLUS: "agentKallus",
    AHSOKA_TANO: "ahsokaTano",
    ALL_FIGHTERS_FOLLOW_ME: "allFightersFollowMe",
    ASPIRATION: "aspiration",
    ASSAULT_CONCUSSION_MISSILES: "assaultConcussionMissiles",
    ASSAULT_PROTON_TORPEDOES: "assaultProtonTorpedoes",
    AVENGER: "avenger",
    BAIL_ORGANA: "bailOrgana",
    BOARDING_ENGINEERS: "boardingEngineers",
    BOARDING_TROOPERS: "boardingTroopers",
    BOMBER_COMMAND_CENTER: "bomberCommandCenter",
    BOOSTED_COMMS: "boostedComms",
    BRIGHT_HOPE: "brightHope",
    CAITKEN_AND_SHOLLAN: "caitkenAndShollan",
    CAPTAIN_BRUNSON: "captainBrunson",
    CAPTAIN_NEEDA: "captainNeeda",
    CENTICORE: "centicore",
    CHAM_SYNDULLA: "chamSyndulla",
    CHART_OFFICER: "chartOfficer",
    CHIMAERA: "chimaera",
    CLUSTER_BOMBS: "clusterBombs",
    COMMANDANT_ARESKO: "commandantAresko",
    COMMANDER_SATO: "commanderSato",
    COMMS_NET: "commsNet",
    CORRUPTER: "corrupter",
    DAMAGE_CONTROL_OFFICER: "damageControlOfficer",
    DARTH_VADER_COMMANDER: "darthVader_commander",
    DARTH_VADER_WEAPONS_TEAM_OFFENSIVE_RETROFIT: "darthVader_weaponsTeam_offensiveRetrofit",
    DEFENSE_LIAISON: "defenseLiaison",
    DEFIANCE: "defiance",
    DEMOLISHER: "demolisher",
    DEVASTATOR: "devastator",
    DIRECTOR_ISARD: "directorIsard",
    DISPOSABLE_CAPACITORS: "disposableCapacitors",
    DODONNAS_PRIDE: "dodonnasPride",
    DOMINATOR: "dominator",
    DUAL_TURBOLASER_TURRETS: "dualTurbolaserTurrets",
    EARLY_WARNING_SYSTEM: "earlyWarningSystem",
    ELECTRONIC_COUNTERMEASURES: "electronicCountermeasures",
    ENDEAVOR: "endeavor",
    ENGINE_TECHS: "engineTechs",
    ENGINEERING_CAPTAIN: "engineeringCaptain",
    ENGINEERING_TEAM: "engineeringTeam",
    ENHANCED_ARMAMENT: "enhancedArmament",
    ENTRAPMENT_FORMATION: "entrapmentFormation",
    EXPANDED_HANGAR_BAY: "expandedHangarBay",
    EXPANDED_LAUNCHERS: "expandedLaunchers",
    EXTERNAL_RACKS: "externalRacks",
    FIGHTER_COORDINATION_TEAM: "fighterCoordinationTeam",
    FIRE_CONTROL_TEAM: "fireControlTeam",
    FLECHETTE_TORPEDOES: "flechetteTorpedoes",
    FLIGHT_COMMANDER: "flightCommander",
    FLIGHT_CONTROLLERS: "flightControllers",
    FORESIGHT: "foresight",
    G7_X_GRAV_WELL_PROJECTOR: "g7XGravWellProjector",
    G_8_EXPERIMENTAL_PROJECTOR: "g8ExperimentalProjector",
    GALLANT_HAVEN: "gallantHaven",
    GARELS_HONOR: "garelsHonor",
    GARM_BEL_IBLIS: "garmBelIblis",
    GENERAL_CRACKEN: "generalCracken",
    GENERAL_DODONNA: "generalDodonna",
    GENERAL_DRAVEN: "generalDraven",
    GENERAL_MADINE: "generalMadine",
    GENERAL_RIEEKAN: "generalRieekan",
    GENERAL_TAGGE: "generalTagge",
    GOVERNOR_PRYCE: "governorPryce",
    GRAND_ADMIRAL_THRAWN: "grandAdmiralThrawn",
    GRAND_MOFF_TARKIN: "grandMoffTarkin",
    GRAV_SHIFT_REROUTE: "gravShiftReroute",
    GUNNERY_TEAM: "gunneryTeam",
    H9_TURBOLASERS: "h9Turbolasers",
    HAND_OF_JUSTICE: "handOfJustice",
    HARDENED_BULKHEADS: "hardenedBulkheads",
    HEAVY_ION_EMPLACEMENTS: "heavyIonEmplacements",
    HEAVY_TURBOLASER_TURRETS: "heavyTurbolaserTurrets",
    HIGH_CAPACITY_ION_TURBINES: "highCapacityIonTurbines",
    HOME_ONE: "homeOne",
    HONDO_OHNAKA: "hondoOhnaka",
    IMPETUOUS: "impetuous",
    INDEPENDENCE: "independence",
    INSIDIOUS: "insidious",
    INSTIGATOR: "instigator",
    INSTRUCTOR_GORAN: "instructorGoran",
    INTEL_OFFICER: "intelOfficer",
    INTENSIFY_FIREPOWER: "intensifyFirepower",
    INTERDICTOR: "interdictor",
    ION_CANNON_BATTERIES: "ionCannonBatteries",
    JAINAS_LIGHT: "jainasLight",
    JAMMING_FIELD: "jammingField",
    JYN_ERSO: "jynErso",
    LANDO_CALRISSIAN: "landoCalrissian",
    LEADING_SHOTS: "leadingShots",
    LEIA_ORGANA_COMMANDER: "leiaOrgana_commander",
    LEIA_ORGANA_OFFICER: "leiaOrgana_officer",
    LIBERTY: "liberty",
    MAJOR_DERLIN: "majorDerlin",
    MEDICAL_TEAM: "medicalTeam",
    MINISTER_TUA: "ministerTua",
    MOFF_JERJERROD: "moffJerjerrod",
    MON_CALAMARI_EXODUS_FLEET: "monCalamariExodusFleet",
    MON_KARREN: "monKarren",
    MON_MOTHMA: "monMothma",
    MS_1_ION_CANNONS: "ms1IonCannons",
    NAV_TEAM: "navTeam",
    NAVIGATION_OFFICER: "navigationOfficer",
    NK_7_ION_CANNONS: "nk7IonCannons",
    ORDNANCE_EXPERTS: "ordnanceExperts",
    ORDNANCE_PODS: "ordnancePods",
    OVERLOAD_PULSE: "overloadPulse",
    PARAGON: "paragon",
    PHOENIX_HOME: "phoenixHome",
    PHYLON_Q7_TRACTOR_BEAMS: "phylonQ7TractorBeams",
    POINT_DEFENSE_REROUTE: "pointDefenseReroute",
    PROFUNDITY: "profundity",
    PROJECTION_EXPERTS: "projectionExperts",
    PURSUANT: "pursuant",
    QUAD_BATTERY_TURRETS: "quadBatteryTurrets",
    QUAD_LASER_TURRETS: "quadLaserTurrets",
    QUAD_TURBOLASER_CANNONS: "quadTurbolaserCannons",
    QUANTUM_STORM: "quantumStorm",
    RAPID_LAUNCH_BAYS: "rapidLaunchBays",
    RAPID_RELOAD: "rapidReload",
    RAYMUS_ANTILLES: "raymusAntilles",
    REDEMPTION: "redemption",
    REDUNDANT_SHIELDS: "redundantShields",
    REINFORCED_BLAST_DOORS: "reinforcedBlastDoors",
    RELENTLESS: "relentless",
    REPAIR_CREWS: "repairCrews",
    RUTHLESS_STRATEGISTS: "ruthlessStrategists",
    SALVATION: "salvation",
    SENSOR_TEAM: "sensorTeam",
    SEVENTH_FLEET_STAR_DESTROYER: "seventhFleetStarDestroyer",
    SHIELDS_TO_MAXIMUM: "shieldsToMaximum",
    SKILLED_FIRST_OFFICER: "skilledFirstOfficer",
    SLAVED_TURRETS: "slavedTurrets",
    SLICER_TOOLS: "slicerTools",
    SOVEREIGN: "sovereign",
    SPINAL_ARMAMENT: "spinalArmament",
    SQUALL: "squall",
    STRATEGIC_ADVISER: "strategicAdviser",
    STRONGHOLD: "stronghold",
    SUPPORT_OFFICER: "supportOfficer",
    SUPPRESSOR: "suppressor",
    SW_7_ION_BATTERIES: "sw7IonBatteries",
    TACTICAL_EXPERT: "tacticalExpert",
    TANTIVE_IV: "tantiveIv",
    TARGETING_SCRAMBLER: "targetingScrambler",
    TASK_FORCE_ANTILLES: "taskForceAntilles",
    TASK_FORCE_ORGANA: "taskForceOrgana",
    TASKMASTER_GRINT: "taskmasterGrint",
    THE_GRAND_INQUISITOR: "theGrandInquisitor",
    TORYN_FARR: "torynFarr",
    TURBOLASER_REROUTE_CIRCUITS: "turbolaserRerouteCircuits",
    VECTOR: "vector",
    VETERAN_CAPTAIN: "veteranCaptain",
    VETERAN_GUNNERS: "veteranGunners",
    WALEX_BLISSEX: "walexBlissex",
    WARLORD: "warlord",
    WEAPONS_LIAISON: "weaponsLiaison",
    WIDE_AREA_BARRAGE: "wideAreaBarrage",
    WING_COMMANDER: "wingCommander",
    WULFF_YULAREN: "wulffYularen",
    XI7_TURBOLASERS: "xi7Turbolasers",
    XX_9_TURBOLASERS: "xx9Turbolasers",
    YAVARIS: "yavaris",
  };

  UpgradeCard.properties = 
  {
     "adarTallon": {
        "name": "Adar Tallon",
        "unique": true,
        "text": "After you resolve a [Squadron] command, exhaust this card to toggle the activation slider of 1 squadron activated with that command.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 10,
        "image": "upgrade-card/officer/adar-tallon.png",
        "key": "adarTallon"
     },
     "admiralAckbar": {
        "name": "Admiral Ackbar",
        "unique": true,
        "text": "Before a friendly ship's Attack Step, it may choose to attack from only its left and right hull zones this round. If it does, it may add 2 red dice to its attack pool while attacking a ship.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 38,
        "image": "upgrade-card/commander/admiral-ackbar.png",
        "key": "admiralAckbar"
     },
     "admiralChiraneau": {
        "name": "Admiral Chiraneau",
        "unique": true,
        "text": "[Squadron]: Squadrons that you activate can move even if they are engaged. When an engaged squadron moves in this way, treat it as having a printed speed of \"2.\"",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 10,
        "image": "upgrade-card/officer/admiral-chiraneau.png",
        "key": "admiralChiraneau"
     },
     "admiralKonstantine": {
        "name": "Admiral Konstantine",
        "unique": true,
        "text": "At the start of each Status Phase, for each enemy ship at distance 1-5 of at least 2 friendly medium or large ships, you may increase or decrease that enemy ship's speed by 1 to a minimum of speed 1.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 23,
        "image": "upgrade-card/commander/admiral-konstantine.png",
        "key": "admiralKonstantine"
     },
     "admiralMontferrat": {
        "name": "Admiral Montferrat",
        "unique": true,
        "text": "While defending against a ship, if your speed is 3 or higher, the attack is treated as obstructed.\nAfter you execute a maneuver, if you overlapped a ship, discard this card.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 5,
        "image": "upgrade-card/officer/admiral-montferrat.png",
        "key": "admiralMontferrat"
     },
     "admiralMotti": {
        "name": "Admiral Motti",
        "unique": true,
        "text": "The hull value of each friendly ship is increased according to its size class:\nSmall ship: 1\nMedium ship: 2\nLarge ship: 3",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 24,
        "image": "upgrade-card/commander/admiral-motti.png",
        "key": "admiralMotti"
     },
     "admiralOzzel": {
        "name": "Admiral Ozzel",
        "unique": true,
        "text": "When a friendly ship resolves a [Navigate] command, it may change its speed by an additional 1.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 20,
        "image": "upgrade-card/commander/admiral-ozzel.png",
        "key": "admiralOzzel"
     },
     "admiralRaddus": {
        "name": "Admiral Raddus",
        "unique": true,
        "text": "Before deploying fleets, you may set aside 1 other friendly ship. At the start of any round, you may deploy that ship at distance 1 of a friendly ship. That ship cannot be deployed overlapping squadrons and cannot be the first ship to activate that round.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 26,
        "image": "upgrade-card/commander/admiral-raddus.png",
        "key": "admiralRaddus"
     },
     "admiralScreed": {
        "name": "Admiral Screed",
        "unique": true,
        "text": "Once per activation, when a friendly ship is attacking, it may spend 1 die to change a die to a face with a [Critical Hit] icon.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 26,
        "image": "upgrade-card/commander/admiral-screed.png",
        "key": "admiralScreed"
     },
     "admiralSloane": {
        "name": "Admiral Sloane",
        "unique": true,
        "text": "While a friendly squadron without Rogue is attacking, it may spend 1 die with an [Accuracy] icon to choose and spend 1 of the defender's defense tokens. While attacking a ship, it may also reroll 1 die with a [Critical Hit] icon.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 24,
        "image": "upgrade-card/commander/admiral-sloane.png",
        "key": "admiralSloane"
     },
     "admiralTitus": {
        "name": "Admiral Titus",
        "unique": true,
        "text": "At the start of the first round, you may change 1 enemy ship's speed by 1.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 2,
        "image": "upgrade-card/officer/admiral-titus.png",
        "key": "admiralTitus"
     },
     "admonition": {
        "name": "Admonition",
        "unique": true,
        "text": "While defending, during the Spend Defense Tokens Step, you may discard a defense token to cancel 1 attack die.",
        "slots": [
           "Title"
        ],
        "ship": "MC30c Frigate",
        "faction": "Rebel Alliance",
        "points": 8,
        "image": "upgrade-card/title/admonition.png",
        "key": "admonition"
     },
     "advancedProjectors": {
        "name": "Advanced Projectors",
        "text": "When you resolve the [Redirect] token effect, you can choose more than one hull zone to suffer damage, which may include a nonadjacent hull zone.",
        "slots": [
           "Defensive Retrofit"
        ],
        "points": 6,
        "image": "upgrade-card/defensive-retrofit/advanced-projectors.png",
        "key": "advancedProjectors"
     },
     "agentKallus": {
        "name": "Agent Kallus",
        "unique": true,
        "text": "While attacking a unique squadron, add 1 die of any color to your attack pool.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 3,
        "image": "upgrade-card/officer/agent-kallus.png",
        "key": "agentKallus"
     },
     "ahsokaTano": {
        "name": "Ahsoka Tano",
        "unique": true,
        "text": "During the activation of a friendly ship at distance 1-5, you may exhaust this card to discard 1 command token from that ship. If you do, that ship may gain 1 command token of any type.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 2,
        "image": "upgrade-card/officer/ahsoka-tano.png",
        "key": "ahsokaTano"
     },
     "allFightersFollowMe": {
        "name": "All Fighters, Follow Me!",
        "text": "At the start of the Ship Phase, you may discard this card or spend a [Squadron] token. If you do, until the end of the round, the speed of each squadron that a friendly ship activates is increased by 1, to a maximum of 5, until the end of that squadron's activation.",
        "slots": [
           "Fleet Command"
        ],
        "points": 5,
        "image": "upgrade-card/fleet-command/all-fighters-follow-me.png",
        "key": "allFightersFollowMe"
     },
     "aspiration": {
        "name": "Aspiration",
        "unique": true,
        "text": "When you deploy this ship, you may move shields to up to 2 of your hull zones from your other hull zones. If you do, the number of shields in a zone cannot exceed a maximum of \"6\". You cannot recover shields while any zone is greater than its maximum shield value.",
        "slots": [
           "Title"
        ],
        "ship": "MC75 Cruiser",
        "faction": "Rebel Alliance",
        "points": 3,
        "image": "upgrade-card/title/aspiration.png",
        "key": "aspiration"
     },
     "assaultConcussionMissiles": {
        "name": "Assault Concussion Missiles",
        "text": "Black [Critical Hit]: Each hull zone adjacent to the defending hull zone suffers 1 damage.",
        "slots": [
           "Ordnance"
        ],
        "points": 7,
        "image": "upgrade-card/ordnance/assault-concussion-missiles.png",
        "key": "assaultConcussionMissiles"
     },
     "assaultProtonTorpedoes": {
        "name": "Assault Proton Torpedoes",
        "text": "Black [Critical Hit]: Deal 1 faceup damage card to the defender.",
        "slots": [
           "Ordnance"
        ],
        "points": 5,
        "image": "upgrade-card/ordnance/assault-proton-torpedoes.png",
        "key": "assaultProtonTorpedoes"
     },
     "avenger": {
        "name": "Avenger",
        "unique": true,
        "text": "While attacking, you may exhaust this card. If you do, the defender cannot spend exhausted defense tokens during this attack.",
        "slots": [
           "Title"
        ],
        "ship": "Imperial-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 5,
        "image": "upgrade-card/title/avenger.png",
        "key": "avenger"
     },
     "bailOrgana": {
        "name": "Bail Organa",
        "unique": true,
        "restriction": "Medium or large ship only.",
        "text": "After deploying fleets, you may place 1 round token on this card. At the start of the Ship Phase of the round matching that round token, if you are the second player you must activate, if you are the first player, you may gain up to 2 command tokens of your choice.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 7,
        "image": "upgrade-card/officer/bail-organa.png",
        "key": "bailOrgana"
     },
     "boardingEngineers": {
        "name": "Boarding Engineers",
        "text": "When you reveal a command, you may discard a [Squadron] dial or token and this card to choose 1 enemy ship at close range. Look at its facedown damage cards and flip a number of them faceup up to your engineering value (one at a time).",
        "slots": [
           "Weapons Team",
           "Offensive Retrofit"
        ],
        "points": 2,
        "image": "upgrade-card/weapons-team-and-offensive-retrofit/boarding-engineers.png",
        "key": "boardingEngineers"
     },
     "boardingTroopers": {
        "name": "Boarding Troopers",
        "text": "When you reveal a command, you may discard a [Squadron] dial or token and this card to choose 1 enemy ship at close range. Choose and spend a number of its defense tokens up to your squadron value.",
        "slots": [
           "Weapons Team",
           "Offensive Retrofit"
        ],
        "points": 3,
        "image": "upgrade-card/weapons-team-and-offensive-retrofit/boarding-troopers.png",
        "key": "boardingTroopers"
     },
     "bomberCommandCenter": {
        "name": "Bomber Command Center",
        "text": "While a friendly squadron with Bomber at distance 1-5 is attacking a ship, it may reroll 1 die.",
        "slots": [
           "Fleet Support"
        ],
        "points": 8,
        "image": "upgrade-card/fleet-support/bomber-command-center.png",
        "key": "bomberCommandCenter"
     },
     "boostedComms": {
        "name": "Boosted Comms",
        "text": "[Squadron]: You can activate friendly squadrons at close-long range (instead of close-medium).",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 4,
        "image": "upgrade-card/offensive-retrofit/boosted-comms.png",
        "key": "boostedComms"
     },
     "brightHope": {
        "name": "Bright Hope",
        "unique": true,
        "text": "While defending against an attack that does not target your rear hull zone, before you suffer damage reduce the total damage by 1.",
        "slots": [
           "Title"
        ],
        "ship": "GR-75 Transports",
        "faction": "Rebel Alliance",
        "points": 2,
        "image": "upgrade-card/title/bright-hope.png",
        "key": "brightHope"
     },
     "caitkenAndShollan": {
        "name": "Caitken and Shollan",
        "text": "While attacking, you may exhaust this card to reroll any number of dice of 1 color.",
        "slots": [
           "Weapons Team"
        ],
        "faction": "Rebel Alliance",
        "points": 6,
        "image": "upgrade-card/weapons-team/caitken-and-shollan.png",
        "key": "caitkenAndShollan"
     },
     "captainBrunson": {
        "name": "Captain Brunson",
        "unique": true,
        "text": "While defending at distance 1-2 of an obstacle, during the Spend Defense Tokens step, you may exhaust this card to choose and cancel 1 attack die.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 5,
        "image": "upgrade-card/officer/captain-brunson.png",
        "key": "captainBrunson"
     },
     "captainNeeda": {
        "name": "Captain Needa",
        "unique": true,
        "text": "At the start of the first round, you may replace 1 of your defense tokens with an [Evade] defense token.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 2,
        "image": "upgrade-card/officer/captain-needa.png",
        "key": "captainNeeda"
     },
     "centicore": {
        "name": "Centicore",
        "unique": true,
        "text": "When another friendly ship resolves a [Squadron] command, up to 2 of the squadrons it activates can be at close-medium range of you.",
        "slots": [
           "Title"
        ],
        "ship": "Arquitens-class Cruiser",
        "faction": "Galactic Empire",
        "points": 3,
        "image": "upgrade-card/title/centicore.png",
        "key": "centicore"
     },
     "chamSyndulla": {
        "name": "Cham Syndulla",
        "unique": true,
        "text": "When you reveal a command, you may discard a [Squadron] dial or token and this card to choose 1 enemy ship at close range. If you do you may choose a new command for each command dial assigned to that ship.",
        "faction": "Rebel Alliance",
        "slots": [
           "Weapons Team",
           "Offensive Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/weapons-team-and-offensive-retrofit/cham-syndulla.png",
        "key": "chamSyndulla"
     },
     "chartOfficer": {
        "name": "Chart Officer",
        "text": "After you execute a maneuver, if you overlapped an obstacle, you may discard this card instead of resolving the effects of overlapping that obstacle.",
        "slots": [
           "Officer"
        ],
        "points": 2,
        "image": "upgrade-card/officer/chart-officer.png",
        "key": "chartOfficer"
     },
     "chimaera": {
        "name": "Chimaera",
        "unique": true,
        "text": "You gain 1 [Fleet Command] icon in your upgrade bar. You cannot equip this card if you have a [Fleet Command] icon in your upgrade bar. At the start of the Command Phase, you may discard 1 [Fleet Command] upgrade card you have equipped and replace it with another [Fleet Command] upgrade card.",
        "slots": [
           "Title"
        ],
        "ship": "Imperial-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 4,
        "image": "upgrade-card/title/chimaera.png",
        "key": "chimaera"
     },
     "clusterBombs": {
        "name": "Cluster Bombs",
        "text": "After a squadron performs an attack against you, even if you are destroyed, you may discard this card to roll 4 blue dice. That squadron suffers 1 damage for each [Hit] or [Critical Hit] icon rolled.",
        "slots": [
           "Defensive Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/defensive-retrofit/cluster-bombs.png",
        "key": "clusterBombs"
     },
     "commandantAresko": {
        "name": "Commandant Aresko",
        "unique": true,
        "text": "When another friendly ship at distance 1-3 reveals a command, you may exhaust this card to gain 1 command token of the same type.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 7,
        "image": "upgrade-card/officer/commandant-aresko.png",
        "key": "commandantAresko"
     },
     "commanderSato": {
        "name": "Commander Sato",
        "unique": true,
        "text": "While a friendly ship is attacking a ship at distance 1 of a friendly squadron, before rolling attack dice, the attacker may replace up to 2 dice in its attack pool with an equal number of dice of any color or colors.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 32,
        "image": "upgrade-card/commander/commander-sato.png",
        "key": "commanderSato"
     },
     "commsNet": {
        "name": "Comms Net",
        "text": "After the Reveal Command Dial Step, you may remove 1 command token from this ship to assign a matching token to another friendly ship at distance 1-5.",
        "slots": [
           "Fleet Support"
        ],
        "points": 2,
        "image": "upgrade-card/fleet-support/comms-net.png",
        "key": "commsNet"
     },
     "corrupter": {
        "name": "Corrupter",
        "unique": true,
        "text": "[Squadron]: the speed of each squadron with Bomber you activate is increased by 1 until the end of its activation.",
        "slots": [
           "Title"
        ],
        "ship": "Victory-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 5,
        "image": "upgrade-card/title/corrupter.png",
        "key": "corrupter"
     },
     "damageControlOfficer": {
        "name": "Damage Control Officer",
        "text": "When you resolve the [Contain] defense effect, you can prevent the attacker from resolving any critical effects.",
        "slots": [
           "Officer"
        ],
        "points": 5,
        "image": "upgrade-card/officer/damage-control-officer.png",
        "key": "damageControlOfficer"
     },
     "darthVader_commander": {
        "name": "Darth Vader",
        "unique": true,
        "text": "While a friendly ship is attacking a ship, it may spend 1 defense token to reroll any number of dice in its attack pool.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 36,
        "image": "upgrade-card/commander/darth-vader.png",
        "key": "darthVader_commander"
     },
     "darthVader_weaponsTeam_offensiveRetrofit": {
        "name": "Darth Vader",
        "text": "When you reveal a command, you may discard a [Squadron] dial or token and this card to choose 1 enemy ship at close range. Choose and discard 1 non-[Commander] upgrade card equipped to that ship.",
        "slots": [
           "Weapons Team",
           "Offensive Retrofit"
        ],
        "points": 3,
        "image": "upgrade-card/weapons-team-and-offensive-retrofit/darth-vader.png",
        "key": "darthVader_weaponsTeam_offensiveRetrofit"
     },
     "defenseLiaison": {
        "name": "Defense Liaison",
        "text": "Before you reveal a command, you may spend 1 command token to change that command to a [Navigate] or [Repair] command.",
        "slots": [
           "Officer"
        ],
        "points": 3,
        "image": "upgrade-card/officer/defense-liaison.png",
        "key": "defenseLiaison"
     },
     "defiance": {
        "name": "Defiance",
        "unique": true,
        "text": "While attacking a ship that has already activated this round, add 1 die of any color to your attack pool.",
        "slots": [
           "Title"
        ],
        "ship": "MC80 Cruiser",
        "faction": "Rebel Alliance",
        "points": 5,
        "image": "upgrade-card/title/defiance.png",
        "key": "defiance"
     },
     "demolisher": {
        "name": "Demolisher",
        "unique": true,
        "text": "During your activation, you can perform 1 of your attacks after you execute your first maneuver.",
        "slots": [
           "Title"
        ],
        "ship": "Gladiator-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 10,
        "image": "upgrade-card/title/demolisher.png",
        "key": "demolisher"
     },
     "devastator": {
        "name": "Devastator",
        "unique": true,
        "text": "Once per round, while attacking from your front hull zone, you may add 1 blue die to your attack pool for each of your discarded defense tokens.",
        "slots": [
           "Title"
        ],
        "ship": "Imperial-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 10,
        "image": "upgrade-card/title/devastator.png",
        "key": "devastator"
     },
     "directorIsard": {
        "name": "Director Isard",
        "unique": true,
        "text": "When you reveal a command, you may look at all command dials assigned to 1 enemy ship.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 3,
        "image": "upgrade-card/officer/director-isard.png",
        "key": "directorIsard"
     },
     "disposableCapacitors": {
        "name": "Disposable Capacitors",
        "restriction": "Small or medium ship only.",
        "text": "When you activate, you may discard this card. If you do, the blue dice in your battery armament can be used while attacking ships at close-long range until the end of the round.",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 3,
        "image": "upgrade-card/offensive-retrofit/disposable-capacitors.png",
        "key": "disposableCapacitors"
     },
     "dodonnasPride": {
        "name": "Dodonna's Pride",
        "unique": true,
        "text": "Blue [Critical Hit]: Cancel all attack dice to deal 1 faceup damage card to the defender.",
        "slots": [
           "Title"
        ],
        "ship": "CR90 Corvette",
        "faction": "Rebel Alliance",
        "points": 6,
        "image": "upgrade-card/title/dodonnas-pride.png",
        "key": "dodonnasPride"
     },
     "dominator": {
        "name": "Dominator",
        "unique": true,
        "text": "While attacking at close-medium range, you may spend up to 2 shields from any of your hull zones to add the same number of blue dice to your attack pool.",
        "slots": [
           "Title"
        ],
        "ship": "Victory-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 12,
        "image": "upgrade-card/title/dominator.png",
        "key": "dominator"
     },
     "dualTurbolaserTurrets": {
        "name": "Dual Turbolaser Turrets",
        "trait": "Modification",
        "text": "While attacking you may exhaust this card to add 1 red die to your attack pool. If you do, remove 1 die from the attack pool.",
        "slots": [
           "Turbolasers"
        ],
        "points": 5,
        "image": "upgrade-card/turbolasers/dual-turbolaser-turrets.png",
        "key": "dualTurbolaserTurrets"
     },
     "earlyWarningSystem": {
        "name": "Early Warning System",
        "text": "At the start of each Ship Phase, you may choose 1 of your hull zones and mark it with a chaff token. Until the end of the round, while a ship or squadron is attacking that hull zone, the attack is obstructed. After the Status Phase, remove that chaff token.",
        "slots": [
           "Defensive Retrofit"
        ],
        "points": 7,
        "image": "upgrade-card/defensive-retrofit/early-warning-system.png",
        "key": "earlyWarningSystem"
     },
     "electronicCountermeasures": {
        "name": "Electronic Countermeasures",
        "text": "While defending you may exhaust this card to spend 1 defense token that your opponent targeted with an [Accuracy] result.",
        "slots": [
           "Defensive Retrofit"
        ],
        "points": 7,
        "image": "upgrade-card/defensive-retrofit/electronic-countermeasures.png",
        "key": "electronicCountermeasures"
     },
     "endeavor": {
        "name": "Endeavor",
        "unique": true,
        "text": "At the start of the first round, gain 1 [Contain] defense token.",
        "slots": [
           "Title"
        ],
        "ship": "MC80 Cruiser",
        "faction": "Rebel Alliance",
        "points": 4,
        "image": "upgrade-card/title/endeavor.png",
        "key": "endeavor"
     },
     "engineTechs": {
        "name": "Engine Techs",
        "text": "[Navigate]: After you execute a maneuver, you may exhaust this card to execute a 1-speed maneuver.",
        "slots": [
           "Support Team"
        ],
        "points": 8,
        "image": "upgrade-card/support-team/engine-techs.png",
        "key": "engineTechs"
     },
     "engineeringCaptain": {
        "name": "Engineering Captain",
        "text": "Before you reveal a command, you may change that command to a [Repair] command.",
        "slots": [
           "Officer"
        ],
        "points": 6,
        "image": "upgrade-card/officer/engineering-captain.png",
        "key": "engineeringCaptain"
     },
     "engineeringTeam": {
        "name": "Engineering Team",
        "text": "[Repair]: Gain 1 additional engineering point.",
        "slots": [
           "Support Team"
        ],
        "points": 5,
        "image": "upgrade-card/support-team/engineering-team.png",
        "key": "engineeringTeam"
     },
     "enhancedArmament": {
        "name": "Enhanced Armament",
        "trait": "Modification",
        "text": "The battery armaments for your left and right hull zones are increased by 1 red die.",
        "slots": [
           "Turbolasers"
        ],
        "points": 10,
        "image": "upgrade-card/turbolasers/enhanced-armament.png",
        "key": "enhancedArmament"
     },
     "entrapmentFormation": {
        "name": "Entrapment Formation!",
        "text": "At the start of the Ship Phase, you may discard this card or spend a [Navigate] token. If you do, until the end of the round, each friendly ship may change its speed by 1 during its Determine Course step.",
        "slots": [
           "Fleet Command"
        ],
        "points": 5,
        "image": "upgrade-card/fleet-command/entrapment-formation.png",
        "key": "entrapmentFormation"
     },
     "expandedHangarBay": {
        "name": "Expanded Hangar Bay",
        "text": "Your squadron value is increased by 1.",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/offensive-retrofit/expanded-hangar-bay.png",
        "key": "expandedHangarBay"
     },
     "expandedLaunchers": {
        "name": "Expanded Launchers",
        "trait": "Modification",
        "text": "The battery armament for your front hull zone is increased by 2 black dice.",
        "slots": [
           "Ordnance"
        ],
        "points": 13,
        "image": "upgrade-card/ordnance/expanded-launchers.png",
        "key": "expandedLaunchers"
     },
     "externalRacks": {
        "name": "External Racks",
        "text": "While attacking at close range, you may discard this card to add 2 black dice to your attack pool.",
        "slots": [
           "Ordnance"
        ],
        "points": 3,
        "image": "upgrade-card/ordnance/external-racks.png",
        "key": "externalRacks"
     },
     "fighterCoordinationTeam": {
        "name": "Fighter Coordination Team",
        "text": "After you execute a maneuver, you may select a number of unengaged friendly squadrons up to your squadron value at close-medium range. Those squadrons may move up to distance 1.",
        "slots": [
           "Support Team"
        ],
        "points": 3,
        "image": "upgrade-card/support-team/fighter-coordination-team.png",
        "key": "fighterCoordinationTeam"
     },
     "fireControlTeam": {
        "name": "Fire-Control Team",
        "text": "During the Resolve Damage Step, you may exhaust this card to resolve 1 additional critical effect. You cannot resolve the same critical effect twice.",
        "slots": [
           "Weapons Team"
        ],
        "points": 2,
        "image": "upgrade-card/weapons-team/fire-control-team.png",
        "key": "fireControlTeam"
     },
     "flechetteTorpedoes": {
        "name": "Flechette Torpedoes",
        "text": "While attacking a squadron, you may spend 1 black die with a [Critical Hit] icon to toggle its activation slider to the activated side.",
        "slots": [
           "Ordnance"
        ],
        "points": 3,
        "image": "upgrade-card/ordnance/flechette-torpedoes.png",
        "key": "flechetteTorpedoes"
     },
     "flightCommander": {
        "name": "Flight Commander",
        "text": "During your activation, you can resolve your [Squadron] command after you execute a maneuver.",
        "slots": [
           "Officer"
        ],
        "points": 3,
        "image": "upgrade-card/officer/flight-commander.png",
        "key": "flightCommander"
     },
     "flightControllers": {
        "name": "Flight Controllers",
        "text": "[Squadron]: The anti-squadron armament of each squadron that you activate is increased by 1 blue die until the end of its activation.",
        "slots": [
           "Weapons Team"
        ],
        "points": 6,
        "image": "upgrade-card/weapons-team/flight-controllers.png",
        "key": "flightControllers"
     },
     "foresight": {
        "name": "Foresight",
        "unique": true,
        "text": "When you resolve the [Evade] defense effect, you can affect 1 additional die.\nWhen you resolve the [Redirect] defense effect, you can choose 1 additional adjacent hull zone to suffer damage.",
        "slots": [
           "Title"
        ],
        "ship": "MC30c Frigate",
        "faction": "Rebel Alliance",
        "points": 8,
        "image": "upgrade-card/title/foresight.png",
        "key": "foresight"
     },
     "g7XGravWellProjector": {
        "name": "G7-X Grav Well Projector",
        "text": "Before deploying fleets, place 1 grav well token anywhere in the play area.\nWhen a ship deploys at distance 1-3 of a grav well token, its speed dial must be set to 0.",
        "slots": [
           "Experimental Retrofit"
        ],
        "points": 2,
        "image": "upgrade-card/experimental-retrofit/g7-x-grav-well-projector.png",
        "key": "g7XGravWellProjector"
     },
     "g8ExperimentalProjector": {
        "name": "G-8 Experimental Projector",
        "unique": true,
        "text": "Before an enemy ship at distance 1-5 resolves the Determine Course step, you may exhaust this card to temporarily reduce its speed by 1 to a minimum of speed 0 until the end of the maneuver.",
        "slots": [
           "Experimental Retrofit"
        ],
        "points": 8,
        "image": "upgrade-card/experimental-retrofit/g-8-experimental-projector.png",
        "key": "g8ExperimentalProjector"
     },
     "gallantHaven": {
        "name": "Gallant Haven",
        "unique": true,
        "text": "Before a friendly squadron at distance 1 suffers damage from an attack, reduce the total damage by 1, to a minimum of 1.",
        "slots": [
           "Title"
        ],
        "ship": "Assault Frigate Mark II",
        "faction": "Rebel Alliance",
        "points": 8,
        "image": "upgrade-card/title/gallant-haven.png",
        "key": "gallantHaven"
     },
     "garelsHonor": {
        "name": "Garel's Honor",
        "unique": true,
        "text": "When you overlap an enemy ship, the enemy ship suffers a faceup damage card instead of a facedown damage card.",
        "slots": [
           "Title"
        ],
        "ship": "Hammerhead Corvette",
        "faction": "Rebel Alliance",
        "points": 4,
        "image": "upgrade-card/title/garels-honor.png",
        "key": "garelsHonor"
     },
     "garmBelIblis": {
        "name": "Garm Bel Iblis",
        "unique": true,
        "text": "At the start of the first round and the fifth round, each friendly ship may gain a number of command tokens equal to its command value.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 25,
        "image": "upgrade-card/commander/garm-bel-iblis.png",
        "key": "garmBelIblis"
     },
     "generalCracken": {
        "name": "General Cracken",
        "unique": true,
        "text": "While a friendly small or medium ship is defending against a ship, if the defender is at speed 3 or higher, the attack is treated as obstructed.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 26,
        "image": "upgrade-card/commander/general-cracken.png",
        "key": "generalCracken"
     },
     "generalDodonna": {
        "name": "General Dodonna",
        "unique": true,
        "text": "Before an enemy ship is dealt a faceup damage card, look at the top 4 cards of the damage deck, place 1 on top of the deck and discard the others.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 20,
        "image": "upgrade-card/commander/general-dodonna.png",
        "key": "generalDodonna"
     },
     "generalDraven": {
        "name": "General Draven",
        "unique": true,
        "text": "While attacking a squadron with Counter or Intel, add 1 die of any color to your attack pool.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 3,
        "image": "upgrade-card/officer/general-draven.png",
        "key": "generalDraven"
     },
     "generalMadine": {
        "name": "General Madine",
        "unique": true,
        "text": "When a friendly ship resolves a [Navigate] command, if it spent a [Navigate] dial it may increase 1 additional yaw value by 1. If it spent a [Navigate] token, it may either change its speed or increase 1 yaw value by 1.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 30,
        "image": "upgrade-card/commander/general-madine.png",
        "key": "generalMadine"
     },
     "generalRieekan": {
        "name": "General Rieekan",
        "unique": true,
        "text": "Once per round, when a friendly ship or friendly unique squadron is destroyed, it remains in the play area and is treated as if it was not destroyed until the end of the Status Phase.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 30,
        "image": "upgrade-card/commander/general-rieekan.png",
        "key": "generalRieekan"
     },
     "generalTagge": {
        "name": "General Tagge",
        "unique": true,
        "text": "At the start of the third round and the fifth round, each friendly ship may recover 1 of its discarded defense tokens.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 25,
        "image": "upgrade-card/commander/general-tagge.png",
        "key": "generalTagge"
     },
     "governorPryce": {
        "name": "Governor Pryce",
        "unique": true,
        "restriction": "Medium or large ship only.",
        "text": "After deploying fleets, you may place 1 round token on this card. If you do, during the round matching that round token, you must activate at the end of the Ship Phase (after all other ships have activated).",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 7,
        "image": "upgrade-card/officer/governor-pryce.png",
        "key": "governorPryce"
     },
     "grandAdmiralThrawn": {
        "name": "Grand Admiral Thrawn",
        "unique": true,
        "text": "After deploying fleets, place 3 facedown command dials on this card. At the start of each Ship Phase, you may reveal and discard 1 of those dials. If you do, until the end of the round, before each friendly ship activates, it gains 1 additional dial matching that discarded dial.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 32,
        "image": "upgrade-card/commander/grand-admiral-thrawn.png",
        "key": "grandAdmiralThrawn"
     },
     "grandMoffTarkin": {
        "name": "Grand Moff Tarkin",
        "unique": true,
        "text": "At the start of each Ship Phase, you may choose 1 command. Each friendly ship gains a command token matching that command.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 38,
        "image": "upgrade-card/commander/grand-moff-tarkin.png",
        "key": "grandMoffTarkin"
     },
     "gravShiftReroute": {
        "name": "Grav Shift Reroute",
        "unique": true,
        "text": "Before deploying fleets, place 1 grav shift token anywhere in the play area.After deploying fleets, you may move each obstacle at distance 1-3 of that token to within distance 2 of that obstacle's current location. Obstacles cannot overlap tokens, obstacles, or ships.",
        "slots": [
           "Experimental Retrofit"
        ],
        "points": 2,
        "image": "upgrade-card/experimental-retrofit/grav-shift-reroute.png",
        "key": "gravShiftReroute"
     },
     "gunneryTeam": {
        "name": "Gunnery Team",
        "text": "You can attack from the same hull zone more than once per activation. That hull zone cannot target the same ship or squadron more than once during that activation.",
        "slots": [
           "Weapons Team"
        ],
        "points": 7,
        "image": "upgrade-card/weapons-team/gunnery-team.png",
        "key": "gunneryTeam"
     },
     "h9Turbolasers": {
        "name": "H9 Turbolasers",
        "text": "While attacking, you may change 1 die face with a [Hit] or [Critical Hit] to a face with an [Accuracy] icon.",
        "slots": [
           "Turbolasers"
        ],
        "points": 8,
        "image": "upgrade-card/turbolasers/h9-turbolasers.png",
        "key": "h9Turbolasers"
     },
     "handOfJustice": {
        "name": "Hand of Justice",
        "unique": true,
        "text": "Before you reveal a command, you may exhaust this card to choose another friendly ship at distance 1-5 and ready 1 of its defense tokens.",
        "slots": [
           "Title"
        ],
        "ship": "Arquitens-class Cruiser",
        "faction": "Galactic Empire",
        "points": 4,
        "image": "upgrade-card/title/hand-of-justice.png",
        "key": "handOfJustice"
     },
     "hardenedBulkheads": {
        "name": "Hardened Bulkheads",
        "restriction": "Large ship only.",
        "text": "When you overlap a ship of a smaller size class (or are overlapped by a ship of a smaller size class), deal 1 fewer facedown damage card to your ship.",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/offensive-retrofit/hardened-bulkheads.png",
        "key": "hardenedBulkheads"
     },
     "heavyIonEmplacements": {
        "name": "Heavy Ion Emplacements",
        "text": "Blue [Critical Hit]: You may exhaust this card. If you do, the defending hull zone and each adjacent hull zone loses 1 shield.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 9,
        "image": "upgrade-card/ion-cannons/heavy-ion-emplacements.png",
        "key": "heavyIonEmplacements"
     },
     "heavyTurbolaserTurrets": {
        "name": "Heavy Turbolaser Turrets",
        "text": "While attacking, the [Brace] defense effect cannot reduce the damage total by more than 1 unless it is the only defense token spent by the defender during the attack.",
        "slots": [
           "Turbolasers"
        ],
        "points": 6,
        "image": "upgrade-card/turbolasers/heavy-turbolaser-turrets.png",
        "key": "heavyTurbolaserTurrets"
     },
     "highCapacityIonTurbines": {
        "name": "High-Capacity Ion Turbines",
        "trait": "Modification",
        "text": "The battery armaments for your left and right hull zones are increased by 1 blue die.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 8,
        "image": "upgrade-card/ion-cannons/high-capacity-ion-turbines.png",
        "key": "highCapacityIonTurbines"
     },
     "homeOne": {
        "name": "Home One",
        "unique": true,
        "text": "While another friendly ship at distance 1-5 is attacking, it may change 1 die to a face with an [Accuracy] icon.",
        "slots": [
           "Title"
        ],
        "ship": "MC80 Cruiser",
        "faction": "Rebel Alliance",
        "points": 7,
        "image": "upgrade-card/title/home-one.png",
        "key": "homeOne"
     },
     "hondoOhnaka": {
        "name": "Hondo Ohnaka",
        "unique": true,
        "text": "At the start of the ship phase, you may discard this card to choose 2 different command tokens and place them on 2 different ships. Then your opponent chooses 2 different command tokens you did not choose and places them on 2 different ships.",
        "slots": [
           "Officer"
        ],
        "points": 2,
        "image": "upgrade-card/officer/hondo-ohnaka.png",
        "key": "hondoOhnaka"
     },
     "impetuous": {
        "name": "Impetuous",
        "unique": true,
        "text": "At the end of your Attack Step, choose 1 of your hull zones. You may perform an attack against 1 enemy squadron from that hull zone, even if you have already attacked from that zone this round.",
        "slots": [
           "Title"
        ],
        "ship": "Raider-class Corvette",
        "faction": "Galactic Empire",
        "points": 4,
        "image": "upgrade-card/title/impetuous.png",
        "key": "impetuous"
     },
     "independence": {
        "name": "Independence",
        "unique": true,
        "text": "[Squadron]: Each squadron you activate may increase its speed to 4 until the end of its activation. Squadrons that change speed in this way cannot attack this activation.",
        "slots": [
           "Title"
        ],
        "ship": "MC80 Cruiser",
        "faction": "Rebel Alliance",
        "points": 8,
        "image": "upgrade-card/title/independence.png",
        "key": "independence"
     },
     "insidious": {
        "name": "Insidious",
        "unique": true,
        "text": "The black dice in your battery armament can be used at medium range. This effect applies only while attacking the rear hull zone of a ship.",
        "slots": [
           "Title"
        ],
        "ship": "Gladiator-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 3,
        "image": "upgrade-card/title/insidious.png",
        "key": "insidious"
     },
     "instigator": {
        "name": "Instigator",
        "unique": true,
        "text": "Enemy squadrons at distance 1 are treated as if they are engaged by 2 additional squadrons, even if they are not currently engaged.",
        "slots": [
           "Title"
        ],
        "ship": "Raider-class Corvette",
        "faction": "Galactic Empire",
        "points": 4,
        "image": "upgrade-card/title/instigator.png",
        "key": "instigator"
     },
     "instructorGoran": {
        "name": "Instructor Goran",
        "unique": true,
        "text": "While a friendly non-Heavy squadron is at distance 1-2, it has Counter 1 or increases its Counter value by 1.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 7,
        "image": "upgrade-card/officer/instructor-goran.png",
        "key": "instructorGoran"
     },
     "intelOfficer": {
        "name": "Intel Officer",
        "text": "While attacking, after you roll your attack pool, you may exhaust this card to choose 1 defense token. If that token is spent during this attack, discard that token.",
        "slots": [
           "Officer"
        ],
        "points": 7,
        "image": "upgrade-card/officer/intel-officer.png",
        "key": "intelOfficer"
     },
     "intensifyFirepower": {
        "name": "Intensify Firepower!",
        "text": "At the start of the Ship Phase, you may discard this card or spend a [Concentrate Fire] token. If you do, until the end of the round, while each friendly ship is attacking a ship, it may change 1 die to a face with 1 [Hit] icon and no other icons.",
        "slots": [
           "Fleet Command"
        ],
        "points": 6,
        "image": "upgrade-card/fleet-command/intensify-firepower.png",
        "key": "intensifyFirepower"
     },
     "interdictor": {
        "name": "Interdictor",
        "unique": true,
        "text": "When a ship activates, you may exhaust this card to ready 1 other upgrade card equipped to this ship.",
        "slots": [
           "Title"
        ],
        "ship": "Interdictor",
        "faction": "Galactic Empire",
        "points": 3,
        "image": "upgrade-card/title/interdictor.png",
        "key": "interdictor"
     },
     "ionCannonBatteries": {
        "name": "Ion Cannon Batteries",
        "text": "Blue [Critical Hit]: Choose and discard 1 command token from the defender. If the defender does not have any command tokens, the defending hull zone loses 1 shield instead.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 5,
        "image": "upgrade-card/ion-cannons/ion-cannon-batteries.png",
        "key": "ionCannonBatteries"
     },
     "jainasLight": {
        "name": "Jaina's Light",
        "unique": true,
        "text": "You can ignore the effects of overlapping obstacles.\nYour attacks cannot be obstructed.",
        "slots": [
           "Title"
        ],
        "ship": "CR90 Corvette",
        "faction": "Rebel Alliance",
        "points": 2,
        "image": "upgrade-card/title/jainas-light.png",
        "key": "jainasLight"
     },
     "jammingField": {
        "name": "Jamming Field",
        "text": "While a squadron at distance 1-2 is attacking or defending against a squadron, the attack is treated as obstructed.",
        "slots": [
           "Fleet Support"
        ],
        "points": 2,
        "image": "upgrade-card/fleet-support/jamming-field.png",
        "key": "jammingField"
     },
     "jynErso": {
        "name": "Jyn Erso",
        "text": "When you reveal a command, you may discard a [Squadron] dial or token and this card to choose 1 enemy ship at close range. If that ship has no raid tokens, it gains 2 raid tokens of your choice. If that ship has an objective token, you may also gain 1 victory token.",
        "slots": [
           "Weapons Team",
           "Offensive Retrofit"
        ],
        "points": 4,
        "image": "upgrade-card/weapons-team-and-offensive-retrofit/jyn-erso.png",
        "key": "jynErso"
     },
     "landoCalrissian": {
        "name": "Lando Calrissian",
        "unique": true,
        "text": "While defending, during the Spend Defense Tokens Step, you may discard this card to force the attacker to reroll 1 or more dice of your choice.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 4,
        "image": "upgrade-card/officer/lando-calrissian.png",
        "key": "landoCalrissian"
     },
     "leadingShots": {
        "name": "Leading Shots",
        "text": "While attacking, you may spend 1 blue die to reroll any number of dice in your attack pool.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 4,
        "image": "upgrade-card/ion-cannons/leading-shots.png",
        "key": "leadingShots"
     },
     "leiaOrgana_commander": {
        "name": "Leia Organa",
        "unique": true,
        "text": "When a friendly ship resolves a command by spending a command dial, if it has not resolved another command this round, it may resolve that command as if it spent a matching command token. If it does, that ship may not resolve additional commands this round.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 38,
        "image": "upgrade-card/commander/leia-organa.png",
        "key": "leiaOrgana_commander"
     },
     "leiaOrgana_officer": {
        "name": "Leia Organa",
        "unique": true,
        "text": "When you reveal a command, you may choose another friendly ship at distance 1-5 and change that ship's top command to your revealed command.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 3,
        "image": "upgrade-card/officer/leia-organa.png",
        "key": "leiaOrgana_officer"
     },
     "liberty": {
        "name": "Liberty",
        "unique": true,
        "text": "[Squadron]: If you spent a [Squadron] token, you may activate 1 additional squadron.",
        "slots": [
           "Title"
        ],
        "ship": "MC80 Cruiser",
        "faction": "Rebel Alliance",
        "points": 3,
        "image": "upgrade-card/title/liberty.png",
        "key": "liberty"
     },
     "majorDerlin": {
        "name": "Major Derlin",
        "unique": true,
        "text": "Before you suffer damage from an attack, you may exhaust this card to reduce the total damage by 1.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 7,
        "image": "upgrade-card/officer/major-derlin.png",
        "key": "majorDerlin"
     },
     "medicalTeam": {
        "name": "Medical Team",
        "text": "Before you are dealt a faceup damage card with the Crew trait, you may discard this card to discard that damage card.",
        "slots": [
           "Support Team"
        ],
        "points": 1,
        "image": "upgrade-card/support-team/medical-team.png",
        "key": "medicalTeam"
     },
     "ministerTua": {
        "name": "Minister Tua",
        "unique": true,
        "text": "You gain an additional [Defensive Retrofit] icon in your upgrade bar.\nYou cannot equip this card to a medium or large ship with a [Defensive Retrofit] icon in its upgrade bar.",
        "faction": "Galactic Empire",
        "slots": [
           "Officer"
        ],
        "points": 2,
        "image": "upgrade-card/officer/minister-tua.png",
        "key": "ministerTua"
     },
     "moffJerjerrod": {
        "name": "Moff Jerjerrod",
        "unique": true,
        "text": "During a friendly ship's Determine Course step, it may suffer 1 damage to change the first yaw value of its current speed to \"||\" until the end of its activation.",
        "faction": "Galactic Empire",
        "slots": [
           "Commander"
        ],
        "points": 23,
        "image": "upgrade-card/commander/moff-jerjerrod.png",
        "key": "moffJerjerrod"
     },
     "monCalamariExodusFleet": {
        "name": "Mon Calamari Exodus Fleet",
        "unique": true,
        "restriction": "\"MC\" only.",
        "text": "[Repair]: You may choose and exhaust another copy of this card on a friendly ship at distance 1-4. If you do, gain 2 additional engineering points.",
        "slots": [
           "Title"
        ],
        "ship": "MC75 Cruiser",
        "faction": "Rebel Alliance",
        "points": 5,
        "image": "upgrade-card/title/mon-calamari-exodus-fleet.png",
        "key": "monCalamariExodusFleet"
     },
     "monKarren": {
        "name": "Mon Karren",
        "unique": true,
        "text": "While attacking a ship, the defender cannot spend more than 1 defense token.",
        "slots": [
           "Title"
        ],
        "ship": "MC80 Cruiser",
        "faction": "Rebel Alliance",
        "points": 8,
        "image": "upgrade-card/title/mon-karren.png",
        "key": "monKarren"
     },
     "monMothma": {
        "name": "Mon Mothma",
        "unique": true,
        "text": "When a friendly ship resolves the [Evade] token effect, it can cancel 1 die at medium range or reroll 1 die at close range or distance 1.",
        "faction": "Rebel Alliance",
        "slots": [
           "Commander"
        ],
        "points": 30,
        "image": "upgrade-card/commander/mon-mothma.png",
        "key": "monMothma"
     },
     "ms1IonCannons": {
        "name": "MS-1 Ion Cannons",
        "text": "Blue [Critical Hit]: Choose and exhaust 1 of the defender's upgrade cards.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 2,
        "image": "upgrade-card/ion-cannons/ms-1-ion-cannons.png",
        "key": "ms1IonCannons"
     },
     "navTeam": {
        "name": "Nav Team",
        "text": "[Navigate]: Your [Navigate] tokens can either change your speed or increase your yaw value by 1.",
        "slots": [
           "Support Team"
        ],
        "points": 4,
        "image": "upgrade-card/support-team/nav-team.png",
        "key": "navTeam"
     },
     "navigationOfficer": {
        "name": "Navigation Officer",
        "text": "Before you reveal a command, you may change that command to a [Navigate] command.",
        "slots": [
           "Officer"
        ],
        "points": 6,
        "image": "upgrade-card/officer/navigation-officer.png",
        "key": "navigationOfficer"
     },
     "nk7IonCannons": {
        "name": "NK-7 Ion Cannons",
        "text": "Blue [Critical Hit]: You may exhaust this card to force the defender to choose and discard 1 of his defense tokens.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 10,
        "image": "upgrade-card/ion-cannons/nk-7-ion-cannons.png",
        "key": "nk7IonCannons"
     },
     "ordnanceExperts": {
        "name": "Ordnance Experts",
        "text": "While attacking, you may reroll any number of your black dice.",
        "slots": [
           "Weapons Team"
        ],
        "points": 4,
        "image": "upgrade-card/weapons-team/ordnance-experts.png",
        "key": "ordnanceExperts"
     },
     "ordnancePods": {
        "name": "Ordnance Pods",
        "restriction": "Medium or large ship only.",
        "text": "At the end of your Attack Step, you may exhaust this card and choose 1 of your hull zones. Then perform an attack from that hull zone with an anti-squadron armament of 1 black die, even if you have already attacked from that zone this round.",
        "slots": [
           "Ordnance"
        ],
        "points": 3,
        "image": "upgrade-card/ordnance/ordnance-pods.png",
        "key": "ordnancePods"
     },
     "overloadPulse": {
        "name": "Overload Pulse",
        "text": "Blue [Critical Hit]: Exhaust all of the defender's defense tokens.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 8,
        "image": "upgrade-card/ion-cannons/overload-pulse.png",
        "key": "overloadPulse"
     },
     "paragon": {
        "name": "Paragon",
        "unique": true,
        "text": "While attacking a ship you have already attacked this round, add 1 black die to your attack pool.",
        "slots": [
           "Title"
        ],
        "ship": "Assault Frigate Mark II",
        "faction": "Rebel Alliance",
        "points": 5,
        "image": "upgrade-card/title/paragon.png",
        "key": "paragon"
     },
     "phoenixHome": {
        "name": "Phoenix Home",
        "unique": true,
        "text": "You gain 1 additional [Officer] icon in your upgrade bar.\nYou can be assigned up to 4 command tokens instead of a number of command tokens equal to your command value.",
        "slots": [
           "Title"
        ],
        "ship": "Pelta-class Ship",
        "faction": "Rebel Alliance",
        "points": 3,
        "image": "upgrade-card/title/phoenix-home.png",
        "key": "phoenixHome"
     },
     "phylonQ7TractorBeams": {
        "name": "Phylon Q7 Tractor Beams",
        "trait": "Modification",
        "text": "When you activate, you may exhaust this card to choose 1 enemy ship of your size class or smaller at distance 1-5. That ship must spend a Icon Command Navigate token or reduce its speed by 1 to a minimum of 1.",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 6,
        "image": "upgrade-card/offensive-retrofit/phylon-q7-tractor-beams.png",
        "key": "phylonQ7TractorBeams"
     },
     "pointDefenseReroute": {
        "name": "Point-Defense Reroute",
        "text": "While attacking a squadron at close range, you may reroll your [Critical Hit] icons.",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/offensive-retrofit/point-defense-reroute.png",
        "key": "pointDefenseReroute"
     },
     "profundity": {
        "name": "Profundity",
        "unique": true,
        "text": "Before deploying fleets, you may set aside 1 small ship with a command value of 1.\nAt the start of any round, you may deploy the set-aside ship at distance 1. You may un-equip up to 1 [Commander] and 1 [Officer] upgrade cards and equip them to it (if able).",
        "slots": [
           "Title"
        ],
        "ship": "MC75 Cruiser",
        "faction": "Rebel Alliance",
        "points": 7,
        "image": "upgrade-card/title/profundity.png",
        "key": "profundity"
     },
     "projectionExperts": {
        "name": "Projection Experts",
        "text": "[Repair]: You may spend up to 2 engineering points to move that many shields from your ship to a friendly ship at distance 1-5.",
        "slots": [
           "Support Team"
        ],
        "points": 6,
        "image": "upgrade-card/support-team/projection-experts.png",
        "key": "projectionExperts"
     },
     "pursuant": {
        "name": "Pursuant",
        "unique": true,
        "text": "When you reveal a command other than a [Squadron] command, you may discard this card to resolve a [Squadron]. You treat this command as if you spent a [Squadron] dial.",
        "slots": [
           "Title"
        ],
        "ship": "Quasar Fire-class Cruiser-Carrier",
        "faction": "Galactic Empire",
        "points": 2,
        "image": "upgrade-card/title/pursuant.png",
        "key": "pursuant"
     },
     "quadBatteryTurrets": {
        "name": "Quad Battery Turrets",
        "trait": "Modification",
        "text": "While attacking a ship with a higher speed than yours, you may add 1 blue die to your attack pool.",
        "slots": [
           "Turbolasers"
        ],
        "points": 5,
        "image": "upgrade-card/turbolasers/quad-battery-turrets.png",
        "key": "quadBatteryTurrets"
     },
     "quadLaserTurrets": {
        "name": "Quad Laser Turrets",
        "text": "While defending at distance 1, if the attacker is a squadron, you have Counter 1.",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/offensive-retrofit/quad-laser-turrets.png",
        "key": "quadLaserTurrets"
     },
     "quadTurbolaserCannons": {
        "name": "Quad Turbolaser Cannons",
        "text": "While attacking, if at least 1 red die face has an [Accuracy] icon, add 1 red die set to the [Accuracy] icon to your attack pool.",
        "slots": [
           "Turbolasers"
        ],
        "points": 10,
        "image": "upgrade-card/turbolasers/quad-turbolaser-cannons.png",
        "key": "quadTurbolaserCannons"
     },
     "quantumStorm": {
        "name": "Quantum Storm",
        "unique": true,
        "text": "[Navigate]: After you execute a maneuver, you may exhaust this card to execute a 1-speed maneuver with a yaw of \"-\".",
        "slots": [
           "Title"
        ],
        "ship": "GR-75 Transports",
        "faction": "Rebel Alliance",
        "points": 1,
        "image": "upgrade-card/title/quantum-storm.png",
        "key": "quantumStorm"
     },
     "rapidLaunchBays": {
        "name": "Rapid Launch Bays",
        "text": "Before deploying fleets, you may set aside a number of friendly squadrons up to your squadron value next to your ship card.\n[Squadron]: For each squadron you would activate with this command, you may instead place 1 of your set-aside squadrons within distance 1. It cannot move this activation.",
        "slots": [
           "Offensive Retrofit"
        ],
        "points": 6,
        "image": "upgrade-card/offensive-retrofit/rapid-launch-bays.png",
        "key": "rapidLaunchBays"
     },
     "rapidReload": {
        "name": "Rapid Reload",
        "trait": "Modification",
        "text": "The battery armaments for your left and right hull zones are increased by 1 black die.",
        "slots": [
           "Ordnance"
        ],
        "points": 8,
        "image": "upgrade-card/ordnance/rapid-reload.png",
        "key": "rapidReload"
     },
     "raymusAntilles": {
        "name": "Raymus Antilles",
        "unique": true,
        "text": "When you reveal a command, you may gain 1 matching command token without spending the command dial.",
        "faction": "Rebel Alliance",
        "slots": [
           "Officer"
        ],
        "points": 7,
        "image": "upgrade-card/officer/raymus-antilles.png",
        "key": "raymusAntilles"
     },
     "redemption": {
        "name": "Redemption",
        "unique": true,
        "text": "When a friendly ship at distance 1-5 resolves a [Repair] command, it gains 1 additional engineering point.",
        "slots": [
           "Title"
        ],
        "ship": "Nebulon-B Frigate",
        "faction": "Rebel Alliance",
        "points": 8,
        "image": "upgrade-card/title/redemption.png",
        "key": "redemption"
     },
     "redundantShields": {
        "name": "Redundant Shields",
        "trait": "Modification",
        "text": "At the start of each Status Phase, you may recover 1 shield.",
        "slots": [
           "Defensive Retrofit"
        ],
        "points": 8,
        "image": "upgrade-card/defensive-retrofit/redundant-shields.png",
        "key": "redundantShields"
     },
     "reinforcedBlastDoors": {
        "name": "Reinforced Blast Doors",
        "trait": "Modification",
        "text": "At the start of the Ship Phase, you may discard this card to discard up to 3 of your facedown damage cards.",
        "slots": [
           "Defensive Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/defensive-retrofit/reinforced-blast-doors.png",
        "key": "reinforcedBlastDoors"
     },
     "relentless": {
        "name": "Relentless",
        "unique": true,
        "text": "The total number of command dials that must be assigned to your ship during the Command Phase is reduced by 1.",
        "slots": [
           "Title"
        ],
        "ship": "Imperial-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 3,
        "image": "upgrade-card/title/relentless.png",
        "key": "relentless"
     },
     "repairCrews": {
        "name": "Repair Crews",
        "text": "[Repair]: Instead of spending engineering points, you may discard 1 damage card from 1 friendly ship at distance 1-2.",
        "slots": [
           "Fleet Support"
        ],
        "points": 4,
        "image": "upgrade-card/fleet-support/repair-crews.png",
        "key": "repairCrews"
     },
     "ruthlessStrategists": {
        "name": "Ruthless Strategists",
        "text": "After attacking a squadron, you may deal 1 damage to a friendly squadron engaged with the defender. If you do, the defender suffers 1 damage.",
        "slots": [
           "Weapons Team"
        ],
        "points": 4,
        "image": "upgrade-card/weapons-team/ruthless-strategists.png",
        "key": "ruthlessStrategists"
     },
     "salvation": {
        "name": "Salvation",
        "unique": true,
        "text": "While attacking a ship from your front hull zone, your [Critical Hit] icons count as 2 damage instead of 1.",
        "slots": [
           "Title"
        ],
        "ship": "Nebulon-B Frigate",
        "faction": "Rebel Alliance",
        "points": 7,
        "image": "upgrade-card/title/salvation.png",
        "key": "salvation"
     },
     "sensorTeam": {
        "name": "Sensor Team",
        "text": "While attacking, you may exhaust this card and spend 1 die to change 1 of your dice to a face with an [Accuracy] icon.",
        "slots": [
           "Weapons Team"
        ],
        "points": 5,
        "image": "upgrade-card/weapons-team/sensor-team.png",
        "key": "sensorTeam"
     },
     "seventhFleetStarDestroyer": {
        "name": "Seventh Fleet Star Destroyer",
        "restriction": "\"Star Destroyer\" only.",
        "text": "While defending against an attack that targets your front hull zone, before you suffer damage, you may choose and exhaust a copy of this card on another friendly ship at distance 1-4 to reduce the total damage by 1.",
        "slots": [
           "Title"
        ],
        "faction": "Galactic Empire",
        "points": 5,
        "image": "upgrade-card/title/seventh-fleet-star-destroyer.png",
        "key": "seventhFleetStarDestroyer"
     },
     "shieldsToMaximum": {
        "name": "Shields to Maximum!",
        "text": "At the start of the Ship Phase, you may discard this card or spend a [Repair] token. If you do, until the end of the round, before a friendly ship reveals a command, it may recover 1 shield.",
        "slots": [
           "Fleet Command"
        ],
        "points": 6,
        "image": "upgrade-card/fleet-command/shields-to-maximum.png",
        "key": "shieldsToMaximum"
     },
     "skilledFirstOfficer": {
        "name": "Skilled First Officer",
        "text": "Before you reveal a command, you may discard this card to discard your top command dial.",
        "slots": [
           "Officer"
        ],
        "points": 1,
        "image": "upgrade-card/officer/skilled-first-officer.png",
        "key": "skilledFirstOfficer"
     },
     "slavedTurrets": {
        "name": "Slaved Turrets",
        "trait": "Modification",
        "text": "You cannot attack more than once per round.\nWhile attacking a ship, add 1 red die to your attack pool.",
        "slots": [
           "Turbolasers"
        ],
        "points": 6,
        "image": "upgrade-card/turbolasers/slaved-turrets.png",
        "key": "slavedTurrets"
     },
     "slicerTools": {
        "name": "Slicer Tools",
        "text": "After you execute a maneuver, you may exhaust this card to choose an enemy ship at distance 1-3. You may choose a new command on its top command dial.",
        "slots": [
           "Fleet Support"
        ],
        "points": 7,
        "image": "upgrade-card/fleet-support/slicer-tools.png",
        "key": "slicerTools"
     },
     "sovereign": {
        "name": "Sovereign",
        "unique": true,
        "text": "At the start of Ship Phase, you may exhaust this card to discard 1 command token from up to 3 friendly ships at distance 1-5. If you do, each of those ships may gain 1 command token of any type.",
        "slots": [
           "Title"
        ],
        "ship": "Imperial-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 4,
        "image": "upgrade-card/title/sovereign.png",
        "key": "sovereign"
     },
     "spinalArmament": {
        "name": "Spinal Armament",
        "trait": "Modification",
        "text": "The battery armaments for your front and rear hull zones are increased by 1 red die.",
        "slots": [
           "Turbolasers"
        ],
        "points": 9,
        "image": "upgrade-card/turbolasers/spinal-armament.png",
        "key": "spinalArmament"
     },
     "squall": {
        "name": "Squall",
        "unique": true,
        "text": "When you activate, you may choose up to 3 unengaged friendly squadrons at close-medium range. Those squadrons may move up to distance 2. If they do, they cannot end their movement engaged.",
        "slots": [
           "Title"
        ],
        "ship": "Quasar Fire-class Cruiser-Carrier",
        "faction": "Galactic Empire",
        "points": 3,
        "image": "upgrade-card/title/squall.png",
        "key": "squall"
     },
     "strategicAdviser": {
        "name": "Strategic Adviser",
        "unique": true,
        "restriction": "Large ship only.",
        "text": "When it is your turn to activate, you may exhaust this card to pass your turn (your opponent activates a ship instead).",
        "slots": [
           "Officer"
        ],
        "points": 4,
        "image": "upgrade-card/officer/strategic-adviser.png",
        "key": "strategicAdviser"
     },
     "stronghold": {
        "name": "Stronghold",
        "unique": true,
        "text": "While a friendly squadron with Swarm at distance 1-2 is defending, the attack is treated as obstructed.",
        "slots": [
           "Title"
        ],
        "ship": "Quasar Fire-class Cruiser-Carrier",
        "faction": "Galactic Empire",
        "points": 5,
        "image": "upgrade-card/title/stronghold.png",
        "key": "stronghold"
     },
     "supportOfficer": {
        "name": "Support Officer",
        "text": "At the start of the Command Phase, you may discard this card to discard all of your command dials.",
        "slots": [
           "Officer"
        ],
        "points": 4,
        "image": "upgrade-card/officer/support-officer.png",
        "key": "supportOfficer"
     },
     "suppressor": {
        "name": "Suppressor",
        "unique": true,
        "text": "After an enemy ship ends its activation, if it is at distance 1-3, you may choose and exhaust 1 of its defense tokens.",
        "slots": [
           "Title"
        ],
        "ship": "Gozanti-class Cruiser",
        "faction": "Galactic Empire",
        "points": 4,
        "image": "upgrade-card/title/suppressor.png",
        "key": "suppressor"
     },
     "sw7IonBatteries": {
        "name": "SW-7 Ion Batteries",
        "text": "While attacking a ship, each of your unspent blue [Accuracy] icons adds 1 damage to the damage total.",
        "slots": [
           "Ion Cannons"
        ],
        "points": 5,
        "image": "upgrade-card/ion-cannons/sw-7-ion-batteries.png",
        "key": "sw7IonBatteries"
     },
     "tacticalExpert": {
        "name": "Tactical Expert",
        "text": "Before you reveal a command, you may change that command to a [Concentrate Fire] command.",
        "slots": [
           "Officer"
        ],
        "points": 6,
        "image": "upgrade-card/officer/tactical-expert.png",
        "key": "tacticalExpert"
     },
     "tantiveIv": {
        "name": "Tantive IV",
        "unique": true,
        "text": "Before you gain a command token, 1 friendly ship at distance 1-5 may gain that token instead.",
        "slots": [
           "Title"
        ],
        "ship": "CR90 Corvette",
        "faction": "Rebel Alliance",
        "points": 3,
        "image": "upgrade-card/title/tantive-iv.png",
        "key": "tantiveIv"
     },
     "targetingScrambler": {
        "name": "Targeting Scrambler",
        "text": "While a friendly ship at distance 1-3 is defending at close range, during the Spend Defense Tokens step, you may exhaust this card to force the attacker to reroll up to 4 dice of your choice.",
        "slots": [
           "Experimental Retrofit"
        ],
        "points": 5,
        "image": "upgrade-card/experimental-retrofit/targeting-scrambler.png",
        "key": "targetingScrambler"
     },
     "taskForceAntilles": {
        "name": "Task Force Antilles",
        "text": "When you suffer damage from an attack, you may choose and exhaust a copy of this card on another friendly ship at distance 1-3. If you do, that ship suffers 1 of your damage instead. While this card is exhausted, you cannot spend engineering points.",
        "slots": [
           "Title"
        ],
        "ship": "Hammerhead Corvette",
        "faction": "Rebel Alliance",
        "points": 3,
        "image": "upgrade-card/title/task-force-antilles.png",
        "key": "taskForceAntilles"
     },
     "taskForceOrgana": {
        "name": "Task Force Organa",
        "text": "While attacking, you may choose and exhaust a copy of this card on another friendly ship at distance 1-3 to reroll up to 2 attack dice. While this card is exhausted, you cannot attack ships.",
        "slots": [
           "Title"
        ],
        "ship": "Hammerhead Corvette",
        "faction": "Rebel Alliance",
        "points": 1,
        "image": "upgrade-card/title/task-force-organa.png",
        "key": "taskForceOrgana"
     },
     "taskmasterGrint": {
        "name": "Taskmaster Grint",
        "unique": true,
        "text": "After deploying fleets, choose and place 1 command token on this card. When you reveal a command matching that token, you may gain 1 matching command token without spending the command dial.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 5,
        "image": "upgrade-card/officer/taskmaster-grint.png",
        "key": "taskmasterGrint"
     },
     "theGrandInquisitor": {
        "name": "The Grand Inquisitor",
        "unique": true,
        "text": "When an enemy ship at distance 1-5 changes its speed, you may exhaust this card to increase or decrease your speed by 1.",
        "slots": [
           "Officer"
        ],
        "faction": "Galactic Empire",
        "points": 4,
        "image": "upgrade-card/officer/the-grand-inquisitor.png",
        "key": "theGrandInquisitor"
     },
     "torynFarr": {
        "name": "Toryn Farr",
        "unique": true,
        "text": "While another friendly ship or squadron at distance 1-3 is attacking, it may reroll 1 blue die.",
        "slots": [
           "Officer"
        ],
        "faction": "Rebel Alliance",
        "points": 7,
        "image": "upgrade-card/officer/toryn-farr.png",
        "key": "torynFarr"
     },
     "turbolaserRerouteCircuits": {
        "name": "Turbolaser Reroute Circuits",
        "text": "While attacking, you may exhaust this card and spend 1 [Evade] defense token to change 1 red die to a face with a [Critical Hit] icon or 2 [Hit] icons.",
        "slots": [
           "Turbolasers"
        ],
        "points": 6,
        "image": "upgrade-card/turbolasers/xi7-turbolasers.png",
        "key": "turbolaserRerouteCircuits"
     },
     "vector": {
        "name": "Vector",
        "unique": true,
        "text": "[Squadron]: The speed of each squadron without Heavy you activate is increased by 1, to a maximum of 5, until the end of its activation.",
        "slots": [
           "Title"
        ],
        "ship": "Gozanti-class Cruiser",
        "faction": "Galactic Empire",
        "points": 2,
        "image": "upgrade-card/title/vector.png",
        "key": "vector"
     },
     "veteranCaptain": {
        "name": "Veteran Captain",
        "text": "When you reveal a command, you may discard this card to gain 1 command token of your choice.",
        "slots": [
           "Officer"
        ],
        "points": 3,
        "image": "upgrade-card/officer/veteran-captain.png",
        "key": "veteranCaptain"
     },
     "veteranGunners": {
        "name": "Veteran Gunners",
        "text": "While attacking, you may exhaust this card to reroll all dice in your attack pool.",
        "slots": [
           "Weapons Team"
        ],
        "points": 5,
        "image": "upgrade-card/weapons-team/veteran-gunners.png",
        "key": "veteranGunners"
     },
     "walexBlissex": {
        "name": "Walex Blissex",
        "unique": true,
        "text": "When you activate, you may discard this card to recover 1 of your discarded defense tokens.",
        "slots": [
           "Officer"
        ],
        "faction": "Rebel Alliance",
        "points": 5,
        "image": "upgrade-card/officer/walex-blissex.png",
        "key": "walexBlissex"
     },
     "warlord": {
        "name": "Warlord",
        "unique": true,
        "text": "While attacking you may rotate 1 die face with an [Accuracy] icon to a face with a [Hit] icon.",
        "slots": [
           "Title"
        ],
        "ship": "Victory-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 8,
        "image": "upgrade-card/title/warlord.png",
        "key": "warlord"
     },
     "weaponsLiaison": {
        "name": "Weapons Liaison",
        "text": "Before you reveal a command, you may spend 1 command token to change that command to a [Concentrate Fire] or [Squadron] command.",
        "slots": [
           "Officer"
        ],
        "points": 3,
        "image": "upgrade-card/officer/weapons-liaison.png",
        "key": "weaponsLiaison"
     },
     "wideAreaBarrage": {
        "name": "Wide-Area Barrage",
        "text": "Black [Critical Hit]: If the defender is a ship, choose 1 other ship or squadron at close range of the defender. That ship or squadron suffers damage equal to half of the total number of black [Hit] icons in your attack pool, rounded up.",
        "slots": [
           "Ordnance"
        ],
        "points": 2,
        "image": "upgrade-card/ordnance/wide-area-barrage.png",
        "key": "wideAreaBarrage"
     },
     "wingCommander": {
        "name": "Wing Commander",
        "text": "Before you reveal a command, you may change that command to a [Squadron] command.",
        "slots": [
           "Officer"
        ],
        "points": 6,
        "image": "upgrade-card/officer/wing-commander.png",
        "key": "wingCommander"
     },
     "wulffYularen": {
        "name": "Wulff Yularen",
        "unique": true,
        "text": "When you spend a command token, you may exhaust this card to gain 1 command token of the same type.",
        "faction": "Galactic Empire",
        "slots": [
           "Officer"
        ],
        "points": 7,
        "image": "upgrade-card/officer/wulff-yularen.png",
        "key": "wulffYularen"
     },
     "xi7Turbolasers": {
        "name": "XI7 Turbolasers",
        "text": "While attacking, if the defender spends a [Redirect] token, it cannot suffer more than 1 damage on hull zones other than the defending hull zone.",
        "slots": [
           "Turbolasers"
        ],
        "points": 6,
        "image": "upgrade-card/turbolasers/xi7-turbolasers.png",
        "key": "xi7Turbolasers"
     },
     "xx9Turbolasers": {
        "name": "XX-9 Turbolasers",
        "text": "[Critical Hit]: The first 2 damage cards dealt to the defender by this attack are dealt faceup.",
        "slots": [
           "Turbolasers"
        ],
        "points": 5,
        "image": "upgrade-card/turbolasers/xx-9-turbolasers.png",
        "key": "xx9Turbolasers"
     },
     "yavaris": {
        "name": "Yavaris",
        "unique": true,
        "text": "[Squadron]: Each squadron you activate can attack twice if it does not move during your activation.",
        "slots": [
           "Title"
        ],
        "ship": "Nebulon-B Frigate",
        "faction": "Rebel Alliance",
        "points": 5,
        "image": "upgrade-card/title/yavaris.png",
        "key": "yavaris"
     }
  };

  Object.freeze(UpgradeCard);

  const UpgradeSlot = {

    COMMANDER: "commander",
    DEFENSIVE_RETROFIT: "defensiveRetrofit",
    EXPERIMENTAL_RETROFIT: "experimentalRetrofit",
    FLEET_COMMAND: "fleetCommand",
    FLEET_SUPPORT: "fleetSupport",
    ION_CANNONS: "ionCannons",
    OFFENSIVE_RETROFIT: "offensiveRetrofit",
    OFFICER: "officer",
    ORDNANCE: "ordnance",
    SUPPORT_TEAM: "supportTeam",
    TITLE: "title",
    TURBOLASERS: "turbolasers",
    WEAPONS_TEAM: "weaponsTeam",
    WEAPONS_TEAM_AND_OFFENSIVE_RETROFIT: "weaponsTeamAndOffensiveRetrofit",
  };

  UpgradeSlot.properties = 
  {
     "commander": {
        "name": "Commander",
        "image": "upgrade-slot/commander.png",
        "key": "commander"
     },
     "defensiveRetrofit": {
        "name": "Defensive Retrofit",
        "image": "upgrade-slot/defensive-retrofit.png",
        "key": "defensiveRetrofit"
     },
     "experimentalRetrofit": {
        "name": "Experimental Retrofit",
        "image": "upgrade-slot/experimental-retrofit.png",
        "key": "experimentalRetrofit"
     },
     "fleetCommand": {
        "name": "Fleet Command",
        "image": "upgrade-slot/fleet-command.png",
        "key": "fleetCommand"
     },
     "fleetSupport": {
        "name": "Fleet Support",
        "image": "upgrade-slot/fleet-support.png",
        "key": "fleetSupport"
     },
     "ionCannons": {
        "name": "Ion Cannons",
        "image": "upgrade-slot/ion-cannons.png",
        "key": "ionCannons"
     },
     "offensiveRetrofit": {
        "name": "Offensive Retrofit",
        "image": "upgrade-slot/offensive-retrofit.png",
        "key": "offensiveRetrofit"
     },
     "officer": {
        "name": "Officer",
        "image": "upgrade-slot/officer.png",
        "key": "officer"
     },
     "ordnance": {
        "name": "Ordnance",
        "image": "upgrade-slot/ordnance.png",
        "key": "ordnance"
     },
     "supportTeam": {
        "name": "Support Team",
        "image": "upgrade-slot/support-team.png",
        "key": "supportTeam"
     },
     "title": {
        "name": "Title",
        "image": "upgrade-slot/title.png",
        "key": "title"
     },
     "turbolasers": {
        "name": "Turbolasers",
        "image": "upgrade-slot/turbolasers.png",
        "key": "turbolasers"
     },
     "weaponsTeam": {
        "name": "Weapons Team",
        "image": "upgrade-slot/weapons-team.png",
        "key": "weaponsTeam"
     },
     "weaponsTeamAndOffensiveRetrofit": {
        "name": "Weapons Team and Offensive Retrofit",
        "image": "upgrade-slot/weapons-team-and-offensive-retrofit.png",
        "key": "weaponsTeamAndOffensiveRetrofit"
     }
  };

  Object.freeze(UpgradeSlot);

  const cardNotNil = cardSelector =>
    R.compose(
      R.not,
      R.isNil,
      cardSelector,
    );
  const isInRange = range => R.both(R.lte(range.minDistance), R.gte(range.maxDistance));
  const valueByKey = (enumClass, key) => enumClass.properties[key];

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  const Selector = {};

  const keysByName = (enumClass, names) =>
    R.map(name => Selector.findEnumValueByName(name, enumClass).key, names);

  Selector.defenseTokenValuesByShip = shipKey => {
    const shipCard = Selector.shipCard(shipKey);
    const defenseTokenNames = shipCard['defense-tokens'];

    return R.map(name => EnumUtilities.findByName(name, DefenseToken), defenseTokenNames);
  };

  Selector.defenseTokenValuesBySquadron = squadronKey => {
    const squadronCard = Selector.squadronCard(squadronKey);
    const defenseTokenNames = squadronCard['defense-tokens'];

    return defenseTokenNames !== undefined
      ? R.map(name => EnumUtilities.findByName(name, DefenseToken), defenseTokenNames)
      : [];
  };

  Selector.distanceKeyByLength = length => {
    const distances = EnumUtilities.values(Distance);
    const reduceFunction = (accum, distance) => (isInRange(distance)(length) ? distance.key : accum);

    return R.reduce(reduceFunction, undefined)(distances);
  };

  Selector.enumKeys = enumClass => EnumUtilities.keys(enumClass);

  Selector.enumValues = enumClass => EnumUtilities.values(enumClass);

  Selector.factionValueByShip = shipKey =>
    Selector.findEnumValueByName(Selector.shipCard(shipKey).faction, Faction);

  Selector.factionValueBySquadron = squadronKey =>
    Selector.findEnumValueByName(Selector.squadronCard(squadronKey).faction, Faction);

  Selector.findEnumValueByName = (name, enumClass) => EnumUtilities.findByName(name, enumClass);

  Selector.heightByCard = cardKey =>
    R.cond([
      [R.either(cardNotNil(Selector.upgradeCard), cardNotNil(Selector.damageCard)), R.always(64)],
      [cardNotNil(Selector.referenceCard), R.always(89)],
      [cardNotNil(Selector.squadronCard), R.always(89)],
      [cardNotNil(Selector.shipCard), R.always(120)],
      [R.T, cardKey2 => `Unknown card type for cardKey: ${cardKey2}`],
    ])(cardKey);

  Selector.isDamageCard = cardValue => cardValue.image.startsWith('damage-card');

  Selector.isShipCard = cardValue => cardValue.image.startsWith('ship-card');

  Selector.isSquadronCard = cardValue => cardValue.image.startsWith('squadron-card');

  Selector.isUpgradeCard = cardValue => cardValue.image.startsWith('upgrade-card');

  Selector.playFormatKeyByPoints = (points1, points2) => {
    const standard = Selector.playFormat(PlayFormat.STANDARD);
    const isPointInStandard = points => standard.minPoints <= points;

    return isPointInStandard(points1) || isPointInStandard(points2)
      ? PlayFormat.STANDARD
      : PlayFormat.SMALL;
  };

  Selector.rangeKeyByLength = length => {
    const ranges = EnumUtilities.values(Range);
    const reduceFunction = (accum, range) => (isInRange(range)(length) ? range.key : accum);

    return R.reduce(reduceFunction, undefined)(ranges);
  };

  Selector.shipBaseValueByShip = shipKey => Selector.shipBase(Selector.shipCard(shipKey).size);

  Selector.upgradeSlotKeysByShip = shipKey =>
    keysByName(UpgradeSlot, Selector.shipCard(shipKey).slots);

  Selector.upgradeSlotKeysByUpgrade = upgradeKey =>
    keysByName(UpgradeSlot, Selector.upgradeCard(upgradeKey).slots);

  Selector.widthByCard = cardKey =>
    R.cond([
      [R.either(cardNotNil(Selector.upgradeCard), cardNotNil(Selector.damageCard)), R.always(41)],
      [cardNotNil(Selector.referenceCard), R.always(62)],
      [cardNotNil(Selector.squadronCard), R.always(62)],
      [cardNotNil(Selector.shipCard), R.always(70)],
      [R.T, cardKey2 => `Unknown card type for cardKey: ${cardKey2}`],
    ])(cardKey);

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  Selector.command = key => valueByKey(Command, key);

  Selector.damageCard = key => valueByKey(DamageCard, key);

  Selector.defenseToken = key => valueByKey(DefenseToken, key);

  Selector.diceValue = key => valueByKey(DiceValue, key);

  Selector.distance = key => valueByKey(Distance, key);

  Selector.faction = key => valueByKey(Faction, key);

  Selector.phase = key => valueByKey(Phase, key);

  Selector.playFormat = key => valueByKey(PlayFormat, key);

  Selector.range = key => valueByKey(Range, key);

  Selector.referenceCard = key => valueByKey(ReferenceCard, key);

  Selector.shipBase = key => valueByKey(ShipBase, key);

  Selector.shipCard = key => valueByKey(ShipCard, key);

  Selector.squadronCard = key => valueByKey(SquadronCard, key);

  Selector.upgradeCard = key => valueByKey(UpgradeCard, key);

  Selector.upgradeSlot = key => valueByKey(UpgradeSlot, key);

  Object.freeze(Selector);

  exports.Command = Command;
  exports.DamageCard = DamageCard;
  exports.DefenseToken = DefenseToken;
  exports.DiceValue = DiceValue;
  exports.Distance = Distance;
  exports.EnumUtilities = EnumUtilities;
  exports.Faction = Faction;
  exports.HullZone = HullZone;
  exports.Phase = Phase;
  exports.PlayFormat = PlayFormat;
  exports.Range = Range;
  exports.ReferenceCard = ReferenceCard;
  exports.Selector = Selector;
  exports.ShipBase = ShipBase;
  exports.ShipCard = ShipCard;
  exports.SquadronCard = SquadronCard;
  exports.UpgradeCard = UpgradeCard;
  exports.UpgradeSlot = UpgradeSlot;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
