(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.AA = {})));
}(this, (function (exports) { 'use strict';

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
        "image": "damage-card/blinded-gunners.jpg",
        "key": "blindedGunners"
     },
     "capacitorFailure": {
        "title": "Capacitor Failure",
        "amount": 2,
        "type": "Ship",
        "text": "If a hull zone has no remaining shields, you cannot recover shields in it nor move shields to it. If that hull zone is defending, you cannot spend [Redirect] tokens.",
        "image": "damage-card/capacitor-failure.jpg",
        "key": "capacitorFailure"
     },
     "commNoise": {
        "title": "Comm Noise",
        "amount": 2,
        "type": "Crew",
        "text": "Your opponent may either reduce your speed by 1 or choose a new command on your top command dial. Then flip this card facedown.",
        "image": "damage-card/comm-noise.jpg",
        "key": "commNoise"
     },
     "compartmentFire": {
        "title": "Compartment Fire",
        "amount": 2,
        "type": "Crew",
        "text": "You cannot ready your defense tokens.",
        "image": "damage-card/compartment-fire.jpg",
        "key": "compartmentFire"
     },
     "coolantDischarge": {
        "title": "Coolant Discharge",
        "amount": 2,
        "type": "Ship",
        "text": "Only one attack you perform each round can target a ship.",
        "image": "damage-card/coolant-discharge.jpg",
        "key": "coolantDischarge"
     },
     "crewPanic": {
        "title": "Crew Panic",
        "amount": 2,
        "type": "Crew",
        "text": "Before you reveal a command dial, you must either suffer 1 damage or discard that dial. If you discard it, do not reveal a dial this round.",
        "image": "damage-card/crew-panic.jpg",
        "key": "crewPanic"
     },
     "damagedControls": {
        "title": "Damaged Controls",
        "amount": 2,
        "type": "Crew",
        "text": "When you overlap a ship or obstacle, deal 1 facedown damage card to your ship (in addition to all other obstacle effects).",
        "image": "damage-card/damaged-controls.jpg",
        "key": "damagedControls"
     },
     "damagedMunitions": {
        "title": "Damaged Munitions",
        "amount": 2,
        "type": "Ship",
        "text": "When attacking a ship, before you roll your attack pool, remove 1 die of your choice.",
        "image": "damage-card/damaged-munitions.jpg",
        "key": "damagedMunitions"
     },
     "depoweredArmament": {
        "title": "Depowered Armament",
        "amount": 2,
        "type": "Ship",
        "text": "You cannot attack at long range.",
        "image": "damage-card/depowered-armament.jpg",
        "key": "depoweredArmament"
     },
     "disengagedFireControl": {
        "title": "Disengaged Fire Control",
        "amount": 2,
        "type": "Ship",
        "text": "When declaring the target of an attack, you cannot choose a target against whom the attack would be obstructed.",
        "image": "damage-card/disengaged-fire-control.jpg",
        "key": "disengagedFireControl"
     },
     "faultyCountermeasures": {
        "title": "Faulty Countermeasures",
        "amount": 2,
        "type": "Ship",
        "text": "You cannot spend exhausted defense tokens.",
        "image": "damage-card/faulty-countermeasures.jpg",
        "key": "faultyCountermeasures"
     },
     "injuredCrew": {
        "title": "Injured Crew",
        "amount": 4,
        "type": "Crew",
        "text": "Choose and discard 1 of your defense tokens. Then flip this card facedown.",
        "image": "damage-card/injured-crew.jpg",
        "key": "injuredCrew"
     },
     "lifeSupportFailure": {
        "title": "Life Support Failure",
        "amount": 2,
        "type": "Crew",
        "text": "Discard all of your command tokens.\nYou cannot have any command tokens.",
        "image": "damage-card/life-support-failure.jpg",
        "key": "lifeSupportFailure"
     },
     "pointDefenseFailure": {
        "title": "Point-Defense Failure",
        "amount": 2,
        "type": "Ship",
        "text": "When attacking a squadron, before you roll your attack pool, remove 1 die of your choice.",
        "image": "damage-card/point-defense-failure.jpg",
        "key": "pointDefenseFailure"
     },
     "powerFailure": {
        "title": "Power Failure",
        "amount": 2,
        "type": "Ship",
        "text": "Your engineering value is reduced to half its value, rounded down.",
        "image": "damage-card/power-failure.jpg",
        "key": "powerFailure"
     },
     "projectorMisaligned": {
        "title": "Projector Misaligned",
        "amount": 2,
        "type": "Ship",
        "text": "Your hull zone with the most remaining shields loses all of its shields. If multiple hull zones are tied, choose between the tied hull zones. Then flip this card face down.",
        "image": "damage-card/projector-misaligned.jpg",
        "key": "projectorMisaligned"
     },
     "rupturedEngine": {
        "title": "Ruptured Engine",
        "amount": 2,
        "type": "Ship",
        "text": "After you execute a maneuver, if the speed on your speed dial is greater than \"1,\" suffer 1 damage.",
        "image": "damage-card/ruptured-engine.jpg",
        "key": "rupturedEngine"
     },
     "shieldFailure": {
        "title": "Shield Failure",
        "amount": 2,
        "type": "Ship",
        "text": "Your opponent may choose up to 2 of your hull zones. Each of the chosen hull zones loses 1 shield. Then flip this card facedown.",
        "image": "damage-card/shield-failure.jpg",
        "key": "shieldFailure"
     },
     "structuralDamage": {
        "title": "Structural Damage",
        "amount": 8,
        "type": "Ship",
        "text": "Deal 1 facedown damage card to your ship. Then flip this card facedown.",
        "image": "damage-card/structural-damage.jpg",
        "key": "structuralDamage"
     },
     "targeterDisruption": {
        "title": "Targeter Disruption",
        "amount": 2,
        "type": "Ship",
        "text": "While attacking, you cannot resolve critical effects.",
        "image": "damage-card/targeter-disruption.jpg",
        "key": "targeterDisruption"
     },
     "thrustControlMalfunction": {
        "title": "Thrust-Control Malfunction",
        "amount": 2,
        "type": "Ship",
        "text": "The yaw value for the last adjustable joint at your current speed is reduced by 1.",
        "image": "damage-card/thrust-control-malfunction.jpg",
        "key": "thrustControlMalfunction"
     },
     "thrusterFissure": {
        "title": "Thruster Fissure",
        "amount": 2,
        "type": "Ship",
        "text": "When you change your speed by 1 or more, suffer 1 damage.",
        "image": "damage-card/thruster-fissure.jpg",
        "key": "thrusterFissure"
     }
  };

  Object.freeze(DamageCard);

  const DiceValue = {
     HIT: "hit",
     HIT_HIT: "hitHit",
     CRITICAL_HIT: "criticalHit",
     HIT_CRITICAL_HIT: "hitCriticalHit",
     ACCURACY: "accuracy",
     BLANK: "blank"
  };

  DiceValue.properties = {
     "hit":
     {
        name: "Hit",
        color: "black",
        sortOrder: 0,
        image: "dice/black-hit.png",
        key: "hit"
     },
     "hitHit":
     {
        name: "Hit + Hit",
        color: "red",
        sortOrder: 1,
        image: "dice/red-hit-hit.png",
        key: "hitHit"
     },
     "criticalHit":
     {
        name: "Critical Hit",
        color: "red",
        sortOrder: 2,
        image: "dice/red-critical-hit.png",
        key: "criticalHit"
     },
     "hitCriticalHit":
     {
        name: "Hit + Critical Hit",
        color: "black",
        sortOrder: 3,
        image: "dice/black-hit-critical-hit.png",
        key: "hitCriticalHit"
     },
     "accuracy":
     {
        name: "Accuracy",
        color: "blue",
        sortOrder: 4,
        image: "dice/blue-accuracy.png",
        key: "accuracy"
     },
     "blank":
     {
        name: "Blank",
        color: "black",
        sortOrder: 5,
        image: "dice/black-blank.png",
        key: "blank"
     }
  };

  Object.freeze(DiceValue);

  const EnumUtilities = {};

  EnumUtilities.findByName = (name, enumClass) => EnumUtilities.findByProp("name", name, enumClass);

  EnumUtilities.findByProp = (propertyName, propertyValue, enumClass) => R.find(R.propEq(propertyName, propertyValue), EnumUtilities.values(enumClass));

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
        "color": "rgb(0, 255, 0)",
        "image": "faction/galactic-empire.png",
        "key": "galacticEmpire"
     },
     "rebelAlliance": {
        "name": "Rebel Alliance",
        "shortName": "Rebel",
        "color": "red",
        "image": "faction/rebel-alliance.png",
        "key": "rebelAlliance"
     }
  };

  Object.freeze(Faction);

  const Phase = {
     SETUP: "setup",

     COMMAND_START: "commandStart",
     COMMAND_END: "commandEnd",

     SHIP_START: "shipStart",
     SHIP_REVEAL_COMMAND_DIAL: "shipRevealCommandDial",
     SHIP_ATTACK_START: "shipAttackStart",
     SHIP_ATTACK_DECLARE_TARGET: "shipAttackDeclareTarget",
     SHIP_ATTACK_ROLL_ATTACK_DICE: "shipAttackRollAttackDice",
     SHIP_ATTACK_RESOLVE_ATTACK_EFFECTS: "shipAttackResolveAttackEffects",
     SHIP_ATTACK_SPEND_DEFENSE_TOKENS: "shipAttackSpendDefenseTokens",
     SHIP_ATTACK_RESOLVE_DAMAGE: "shipAttackResolveDamage",
     SHIP_ATTACK_DECLARE_ADDITIONAL_SQUADRON_TARGET: "shipAttackDeclareAdditionalSquadronTarget",
     SHIP_ATTACK_END: "shipAttackEnd",
     SHIP_EXECUTE_MANEUVER_START: "shipExecuteManeuverStart",
     SHIP_DETERMINE_COURSE: "shipDetermineCourse",
     SHIP_MOVE_SHIP: "shipMoveShip",
     SHIP_EXECUTE_MANEUVER_END: "shipExecuteManeuverEnd",
     SHIP_END: "shipEnd",

     SQUADRON_START: "squadronStart",
     SQUADRON_MOVE_START: "squadronMoveStart",
     SQUADRON_DETERMINE_COURSE: "squadronDetermineCourse",
     SQUADRON_MOVE_SQUADRON: "squadronMoveSquadron",
     SQUADRON_MOVE_END: "squadronMoveEnd",
     SQUADRON_ATTACK_START: "squadronAttackStart",
     SQUADRON_ATTACK_DECLARE_TARGET: "squadronAttackDeclareTarget",
     SQUADRON_ATTACK_ROLL_ATTACK_DICE: "squadronAttackRollAttackDice",
     SQUADRON_ATTACK_RESOLVE_ATTACK_EFFECTS: "squadronAttackResolveAttackEffects",
     SQUADRON_ATTACK_SPEND_DEFENSE_TOKENS: "squadronAttackSpendDefenseTokens",
     SQUADRON_ATTACK_RESOLVE_DAMAGE: "squadronAttackResolveDamage",
     SQUADRON_ATTACK_END: "squadronAttackEnd",
     SQUADRON_END: "squadronEnd",

     STATUS_START: "statusStart",
     STATUS_READY_DEFENSE_TOKENS: "statusReadyDefenseTokens",
     STATUS_READY_UPGRADE_CARDS: "statusReadyUpgradeCards",
     STATUS_FLIP_INITIATIVE_TOKEN: "statusFlipInitiativeToken",
     STATUS_PLACE_ROUND_TOKEN: "statusPlaceRoundToken",
     STATUS_END: "statusEnd"
  };

  Phase.properties = {
     "setup":
     {
        name: "Setup",
        key: "setup"
     },
     "commandStart":
     {
        name: "Command (start)",
        key: "commandStart"
     },
     "commandEnd":
     {
        name: "Command (end)",
        key: "commandEnd"
     },
     "shipStart":
     {
        name: "Ship (start)",
        key: "shipStart"
     },
     "shipRevealCommandDial":
     {
        name: "Ship (reveal command dial)",
        key: "shipRevealCommandDial"
     },
     "shipAttackStart":
     {
        name: "Ship (attack start)",
        key: "shipAttackStart"
     },
     "shipAttackDeclareTarget":
     {
        name: "Ship (attack declare target)",
        key: "shipAttackDeclareTarget"
     },
     "shipAttackRollAttackDice":
     {
        name: "Ship (attack roll attack dice)",
        key: "shipAttackRollAttackDice"
     },
     "shipAttackResolveAttackEffects":
     {
        name: "Ship (attack resolve attack effects)",
        key: "shipAttackResolveAttackEffects"
     },
     "shipAttackSpendDefenseTokens":
     {
        name: "Ship (attack spend defense tokens)",
        key: "shipAttackSpendDefenseTokens"
     },
     "shipAttackResolveDamage":
     {
        name: "Ship (attack resolve damage)",
        key: "shipAttackResolveDamage"
     },
     "shipAttackDeclareAdditionalSquadronTarget":
     {
        name: "Ship (attack declare additional squadron target)",
        key: "shipAttackDeclareAdditionalSquadronTarget"
     },
     "shipAttackEnd":
     {
        name: "Ship (attack end)",
        key: "shipAttackEnd"
     },
     "shipExecuteManeuverStart":
     {
        name: "Ship (execute maneuver start)",
        key: "shipExecuteManeuverStart"
     },
     "shipDetermineCourse":
     {
        name: "Ship (determine course)",
        key: "shipDetermineCourse"
     },
     "shipMoveShip":
     {
        name: "Ship (move ship)",
        key: "shipMoveShip"
     },
     "shipExecuteManeuverEnd":
     {
        name: "Ship (execute maneuver end)",
        key: "shipExecuteManeuverEnd"
     },
     "shipEnd":
     {
        name: "Ship (end)",
        key: "shipEnd"
     },
     "squadronStart":
     {
        name: "Squadron (start)",
        key: "squadronStart"
     },
     "squadronMoveStart":
     {
        name: "Squadron (move start)",
        key: "squadronMoveStart"
     },
     "squadronDetermineCourse":
     {
        name: "Squadron (determine course)",
        key: "squadronDetermineCourse"
     },
     "squadronMoveSquadron":
     {
        name: "Squadron (move squadron)",
        key: "squadronMoveSquadron"
     },
     "squadronMoveEnd":
     {
        name: "Squadron (move end)",
        key: "squadronMoveEnd"
     },
     "squadronAttackStart":
     {
        name: "Squadron (attack start)",
        key: "squadronAttackStart"
     },
     "squadronAttackDeclareTarget":
     {
        name: "Squadron (attack declare target)",
        key: "squadronAttackDeclareTarget"
     },
     "squadronAttackRollAttackDice":
     {
        name: "Squadron (attack roll attack dice)",
        key: "squadronAttackRollAttackDice"
     },
     "squadronAttackResolveAttackEffects":
     {
        name: "Squadron (attack resolve attack effects)",
        key: "squadronAttackResolveAttackEffects"
     },
     "squadronAttackSpendDefenseTokens":
     {
        name: "Squadron (attack spend defense tokens)",
        key: "squadronAttackSpendDefenseTokens"
     },
     "squadronAttackResolveDamage":
     {
        name: "Squadron (attack resolve damage)",
        key: "squadronAttackResolveDamage"
     },
     "squadronAttackEnd":
     {
        name: "Squadron (attack end)",
        key: "squadronAttackEnd"
     },
     "squadronEnd":
     {
        name: "Squadron (end)",
        key: "squadronEnd"
     },
     "statusStart":
     {
        name: "Status (start)",
        key: "statusStart"
     },
     "statusReadyDefenseTokens":
     {
        name: "Status (ready defense tokens)",
        key: "statusReadyDefenseTokens"
     },
     "statusReadyUpgradeCards":
     {
        name: "Status (ready upgrade cards)",
        key: "statusReadyUpgradeCards"
     },
     "statusFlipInitiativeToken":
     {
        name: "Status (flip initiative token)",
        key: "statusFlipInitiativeToken"
     },
     "statusPlaceRoundToken":
     {
        name: "Status (place round token)",
        key: "statusPlaceRoundToken"
     },
     "statusEnd":
     {
        name: "Status (end)",
        key: "statusEnd"
     }
  };

  Object.freeze(Phase);

  const ShipCard = {

    CR90_CORVETTE_A: "cr90CorvetteA",
    CR90_CORVETTE_B: "cr90CorvetteB",
    NEBULON_B_ESCORT_FRIGATE: "nebulonBEscortFrigate",
    NEBULON_B_SUPPORT_REFIT: "nebulonBSupportRefit",
    VICTORY_I_CLASS_STAR_DESTROYER: "victoryIClassStarDestroyer",
    VICTORY_II_CLASS_STAR_DESTROYER: "victoryIiClassStarDestroyer",
  };

  ShipCard.properties = 
  {
     "cr90CorvetteA": {
        "name": "CR90 Corvette A",
        "ship": "CR90 Corvette",
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
        "image": "ship-card/cr90-corvette-a.png",
        "key": "cr90CorvetteA"
     },
     "cr90CorvetteB": {
        "name": "CR90 Corvette B",
        "ship": "CR90 Corvette",
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
        "image": "ship-card/cr90-corvette-b.png",
        "key": "cr90CorvetteB"
     },
     "nebulonBEscortFrigate": {
        "name": "Nebulon-B Escort Frigate",
        "ship": "Nebulon-B Frigate",
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
        "image": "ship-card/nebulon-b-escort-frigate.png",
        "key": "nebulonBEscortFrigate"
     },
     "nebulonBSupportRefit": {
        "name": "Nebulon-B Support Refit",
        "ship": "Nebulon-B Frigate",
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
        "image": "ship-card/nebulon-b-support-refit.png",
        "key": "nebulonBSupportRefit"
     },
     "victoryIClassStarDestroyer": {
        "name": "Victory I-class Star Destroyer",
        "ship": "Victory-class Star Destroyer",
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
        "image": "ship-card/victory-i-class-star-destroyer.png",
        "key": "victoryIClassStarDestroyer"
     },
     "victoryIiClassStarDestroyer": {
        "name": "Victory II-class Star Destroyer",
        "ship": "Victory-class Star Destroyer",
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
        "image": "ship-card/victory-ii-class-star-destroyer.png",
        "key": "victoryIiClassStarDestroyer"
     }
  };

  Object.freeze(ShipCard);

  const SquadronCard = {

    HOWLRUNNER: "howlrunner",
    LUKE_SKYWALKER: "lukeSkywalker",
    TIE_FIGHTER_SQUADRON: "tieFighterSquadron",
    X_WING_SQUADRON: "xWingSquadron",
  };

  SquadronCard.properties = 
  {
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
        "image": "squadron-card/howlrunner.png",
        "key": "howlrunner"
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
        "image": "squadron-card/luke-skywalker.png",
        "key": "lukeSkywalker"
     },
     "tieFighterSquadron": {
        "name": "TIE Fighter Squadron",
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
        "image": "squadron-card/tie-fighter-squadron.png",
        "key": "tieFighterSquadron"
     },
     "xWingSquadron": {
        "name": "X-wing Squadron",
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
        "image": "squadron-card/x-wing-squadron.png",
        "key": "xWingSquadron"
     }
  };

  Object.freeze(SquadronCard);

  const UpgradeCard = {

    ASSAULT_CONCUSSION_MISSILES: "assaultConcussionMissiles",
    DEFENSE_LIAISON: "defenseLiaison",
    DODONNAS_PRIDE: "dodonnasPride",
    DOMINATOR: "dominator",
    ELECTRONIC_COUNTERMEASURES: "electronicCountermeasures",
    ENGINEERING_TEAM: "engineeringTeam",
    ENHANCED_ARMAMENT: "enhancedArmament",
    EXPANDED_HANGAR_BAY: "expandedHangarBay",
    GENERAL_DODONNA: "generalDodonna",
    GRAND_MOFF_TARKIN: "grandMoffTarkin",
    GUNNERY_TEAM: "gunneryTeam",
    H9_TURBOLASERS: "h9Turbolasers",
    LEIA_ORGANA: "leiaOrgana",
    NAV_TEAM: "navTeam",
    OVERLOAD_PULSE: "overloadPulse",
    REDEMPTION: "redemption",
    WEAPONS_LIAISON: "weaponsLiaison",
    WULFF_YULAREN: "wulffYularen",
  };

  UpgradeCard.properties = 
  {
     "assaultConcussionMissiles": {
        "name": "Assault Concussion Missiles",
        "text": "Black [Critical Hit]: Each hull zone adjacent to the defending hull zone suffers 1 damage.",
        "slot": "Ordnance",
        "points": 7,
        "image": "upgrade-card/ordnance/assault-concussion-missiles.png",
        "key": "assaultConcussionMissiles"
     },
     "defenseLiaison": {
        "name": "Defense Liaison",
        "text": "Before you reveal a command, you may spend 1 command token to change that command to a [Navigate] or [Repair] command.",
        "slot": "Officer",
        "points": 3,
        "image": "upgrade-card/officer/defense-liaison.png",
        "key": "defenseLiaison"
     },
     "dodonnasPride": {
        "name": "Dodonna's Pride",
        "unique": true,
        "text": "Blue [Critical Hit]: Cancel all attack dice to deal 1 faceup damage card to the defender.",
        "slot": "Title",
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
        "slot": "Title",
        "ship": "Victory-class Star Destroyer",
        "faction": "Galactic Empire",
        "points": 12,
        "image": "upgrade-card/title/dominator.png",
        "key": "dominator"
     },
     "electronicCountermeasures": {
        "name": "Electronic Countermeasures",
        "text": "While defending you may exhaust this card to spend 1 defense token that your opponent targeted with an [Accuracy] result.",
        "slot": "Defensive Retrofit",
        "points": 7,
        "image": "upgrade-card/defensive-retrofit/electronic-countermeasures.png",
        "key": "electronicCountermeasures"
     },
     "engineeringTeam": {
        "name": "Engineering Team",
        "text": "[Repair]: Gain 1 additional engineering point.",
        "slot": "Support Team",
        "points": 5,
        "image": "upgrade-card/support-team/engineering-team.png",
        "key": "engineeringTeam"
     },
     "enhancedArmament": {
        "name": "Enhanced Armament",
        "trait": "Modification",
        "text": "The battery armaments for your left and right hull zones are increased by 1 red die.",
        "slot": "Turbolasers",
        "points": 10,
        "image": "upgrade-card/turbolasers/enhanced-armament.png",
        "key": "enhancedArmament"
     },
     "expandedHangarBay": {
        "name": "Expanded Hangar Bay",
        "text": "Your squadron value is increased by 1.",
        "slot": "Offensive Retrofit",
        "points": 5,
        "image": "upgrade-card/offensive-retrofit/expanded-hangar-bay.png",
        "key": "expandedHangarBay"
     },
     "generalDodonna": {
        "name": "General Dodonna",
        "unique": true,
        "text": "Before an enemy ship is dealt a faceup damage card, look at the top 4 cards of the damage deck, place 1 on top of the deck and discard the others.",
        "faction": "Rebel Alliance",
        "slot": "Commander",
        "points": 20,
        "image": "upgrade-card/commander/general-dodonna.png",
        "key": "generalDodonna"
     },
     "grandMoffTarkin": {
        "name": "Grand Moff Tarkin",
        "unique": true,
        "text": "At the start of each Ship Phase, you may choose 1 command. Each friendly ship gains a command token matching that command.",
        "faction": "Galactic Empire",
        "slot": "Commander",
        "points": 38,
        "image": "upgrade-card/commander/grand-moff-tarkin.png",
        "key": "grandMoffTarkin"
     },
     "gunneryTeam": {
        "name": "Gunnery Team",
        "text": "You can attack from the same hull zone more than once per activation. That hull zone cannot target the same ship or squadron more than once during that activation.",
        "slot": "Weapons Team",
        "points": 7,
        "image": "upgrade-card/weapons-team/gunnery-team.png",
        "key": "gunneryTeam"
     },
     "h9Turbolasers": {
        "name": "H9 Turbolasers",
        "text": "While attacking, you may change 1 die face with a [Hit] or [Critical Hit] to a face with an [Accuracy] icon.",
        "slot": "Turbolasers",
        "points": 8,
        "image": "upgrade-card/turbolasers/h9-turbolasers.png",
        "key": "h9Turbolasers"
     },
     "leiaOrgana": {
        "name": "Leia Organa",
        "unique": true,
        "text": "When you reveal a command, you may choose another friendly ship at distance 1-5 and change that ship's top command to your revealed command.",
        "faction": "Rebel Alliance",
        "slot": "Officer",
        "points": 3,
        "image": "upgrade-card/officer/leia-organa.png",
        "key": "leiaOrgana"
     },
     "navTeam": {
        "name": "Nav Team",
        "text": "[Navigate]: Your [Navigate] tokens can either change your speed or increase your yaw value by 1.",
        "slot": "Support Team",
        "points": 4,
        "image": "upgrade-card/support-team/nav-team.png",
        "key": "navTeam"
     },
     "overloadPulse": {
        "name": "Overload Pulse",
        "text": "Blue [Critical Hit]: Exhaust all of the defender's defense tokens.",
        "slot": "Ion Cannons",
        "points": 8,
        "image": "upgrade-card/ion-cannons/electronic-countermeasures.png",
        "key": "overloadPulse"
     },
     "redemption": {
        "name": "Redemption",
        "unique": true,
        "text": "When a friendly ship at distance 1-5 resolves a [Repair] command, it gains 1 additional engineering point.",
        "slot": "Title",
        "ship": "Nebulon-B Frigate",
        "faction": "Rebel Alliance",
        "points": 8,
        "image": "upgrade-card/title/redemption.png",
        "key": "redemption"
     },
     "weaponsLiaison": {
        "name": "Weapons Liaison",
        "text": "Before you reveal a command, you may spend 1 command token to change that command to a [Concentrate Fire] or [Squadron] command.",
        "slot": "Officer",
        "points": 3,
        "image": "upgrade-card/officer/weapons-liaison.png",
        "key": "weaponsLiaison"
     },
     "wulffYularen": {
        "name": "Wulff Yularen",
        "unique": true,
        "text": "When you spend a command token, you may exhaust this card to gain 1 command token of the same type.",
        "faction": "Galactic Empire",
        "slot": "Officer",
        "points": 7,
        "image": "upgrade-card/officer/wulff-yularen.png",
        "key": "wulffYularen"
     }
  };

  Object.freeze(UpgradeCard);

  const UpgradeSlot = {

    COMMANDER: "commander",
    DEFENSIVE_RETROFIT: "defensiveRetrofit",
    ION_CANNONS: "ionCannons",
    OFFENSIVE_RETROFIT: "offensiveRetrofit",
    OFFICER: "officer",
    ORDNANCE: "ordnance",
    SUPPORT_TEAM: "supportTeam",
    TITLE: "title",
    TURBOLASERS: "turbolasers",
    WEAPONS_TEAM: "weaponsTeam",
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
     }
  };

  Object.freeze(UpgradeSlot);

  exports.DamageCard = DamageCard;
  exports.DiceValue = DiceValue;
  exports.EnumUtilities = EnumUtilities;
  exports.Faction = Faction;
  exports.Phase = Phase;
  exports.ShipCard = ShipCard;
  exports.SquadronCard = SquadronCard;
  exports.UpgradeCard = UpgradeCard;
  exports.UpgradeSlot = UpgradeSlot;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
