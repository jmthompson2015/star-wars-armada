(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AA = {})));
}(this, (function (exports) { 'use strict';

   const Command = {
      CONCENTRATE_FIRE: "concentrateFire",
      NAVIGATE: "navigate",
      REPAIR: "repair",
      SQUADRON: "squadron"
   };

   Command.properties = {
      "concentrateFire":
      {
         name: "Concentrate Fire",
         text: "Increase the power of one attack.",
         sortOrder: 4,
         key: "concentrateFire"
      },
      "navigate":
      {
         name: "Navigate",
         text: "Change speed and increase maneuverability.",
         sortOrder: 1,
         key: "navigate"
      },
      "repair":
      {
         name: "Repair",
         text: "Recover shields and hull damage.",
         sortOrder: 3,
         key: "repair"
      },
      "squadron":
      {
         name: "Squadron",
         text: "Order nearby squadrons to move and attack early.",
         sortOrder: 2,
         key: "squadron"
      }
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

   const Range = {
      ONE: "one",
      TWO: "two",
      THREE: "three"
   };

   Range.properties = {
      "one":
      {
         minDistance: 0, // Minimum distance. (mm)
         maxDistance: 116, // Maximum distance. (mm)
         name: "1",
         key: "one"
      },
      "two":
      {
         minDistance: 117, // Minimum distance. (mm)
         maxDistance: 180, // Maximum distance. (mm)
         name: "2",
         key: "two"
      },
      "three":
      {
         minDistance: 181, // Minimum distance. (mm)
         maxDistance: 303, // Maximum distance. (mm)
         name: "3",
         key: "three"
      }
   };

   Object.freeze(Range);

   const ShipCard = {

     ASSAULT_FRIGATE_MARK_II_A: "assaultFrigateMarkIiA",
     ASSAULT_FRIGATE_MARK_II_B: "assaultFrigateMarkIiB",
     CR90_CORVETTE_A: "cr90CorvetteA",
     CR90_CORVETTE_B: "cr90CorvetteB",
     GOZANTI_CLASS_ASSAULT_CARRIERS: "gozantiClassAssaultCarriers",
     GOZANTI_CLASS_CRUISERS: "gozantiClassCruisers",
     IMPERIAL_I_CLASS_STAR_DESTROYER: "imperialIClassStarDestroyer",
     IMPERIAL_II_CLASS_STAR_DESTROYER: "imperialIiClassStarDestroyer",
     IMPERIAL_STAR_DESTROYER_CYMOON_1_REFIT: "imperialStarDestroyerCymoon1Refit",
     IMPERIAL_STAR_DESTROYER_KUAT_REFIT: "imperialStarDestroyerKuatRefit",
     MC80_BATTLE_CRUISER: "mc80BattleCruiser",
     MC80_STAR_CRUISER: "mc80StarCruiser",
     NEBULON_B_ESCORT_FRIGATE: "nebulonBEscortFrigate",
     NEBULON_B_SUPPORT_REFIT: "nebulonBSupportRefit",
     VICTORY_I_CLASS_STAR_DESTROYER: "victoryIClassStarDestroyer",
     VICTORY_II_CLASS_STAR_DESTROYER: "victoryIiClassStarDestroyer",
   };

   ShipCard.properties = 
   {
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
         "image": "ship-card/rebel-alliance/cr90-corvette-b.png",
         "key": "cr90CorvetteB"
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
         "image": "ship-card/galactic-empire/gozanti-class-cruisers.png",
         "key": "gozantiClassCruisers"
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
         "image": "ship-card/galactic-empire/imperial-star-destroyer-kuat-refit.png",
         "key": "imperialStarDestroyerKuatRefit"
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
         "image": "ship-card/rebel-alliance/mc80-battle-cruiser.png",
         "key": "mc80BattleCruiser"
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
         "image": "ship-card/rebel-alliance/mc80-star-cruiser.png",
         "key": "mc80StarCruiser"
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
         "image": "ship-card/rebel-alliance/nebulon-b-support-refit.png",
         "key": "nebulonBSupportRefit"
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
         "image": "ship-card/galactic-empire/victory-ii-class-star-destroyer.png",
         "key": "victoryIiClassStarDestroyer"
      }
   };

   Object.freeze(ShipCard);

   const SquadronCard = {

     GAR_SAXON: "garSaxon",
     HOWLRUNNER: "howlrunner",
     LUKE_SKYWALKER: "lukeSkywalker",
     MANDALORIAN_GAUNTLET_FIGHTER: "mandalorianGauntletFighter",
     TIE_FIGHTER_SQUADRON: "tieFighterSquadron",
     X_WING_SQUADRON: "xWingSquadron",
   };

   SquadronCard.properties = 
   {
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
         "image": "squadron-card/galactic-empire/gar-saxon.png",
         "key": "garSaxon"
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
         "image": "squadron-card/galactic-empire/howlrunner.png",
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
         "image": "squadron-card/rebel-alliance/luke-skywalker.png",
         "key": "lukeSkywalker"
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
         "image": "squadron-card/galactic-empire/mandalorian-gauntlet-fighter.png",
         "key": "mandalorianGauntletFighter"
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
         "image": "squadron-card/galactic-empire/tie-fighter-squadron.png",
         "key": "tieFighterSquadron"
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
         "image": "squadron-card/rebel-alliance/x-wing-squadron.png",
         "key": "xWingSquadron"
      }
   };

   Object.freeze(SquadronCard);

   const UpgradeCard = {

     ADAR_TALLON: "adarTallon",
     ADVANCED_PROJECTORS: "advancedProjectors",
     AGENT_KALLUS: "agentKallus",
     ASSAULT_CONCUSSION_MISSILES: "assaultConcussionMissiles",
     AVENGER: "avenger",
     BOMBER_COMMAND_CENTER: "bomberCommandCenter",
     BOOSTED_COMMS: "boostedComms",
     CAPTAIN_BRUNSON: "captainBrunson",
     CAPTAIN_NEEDA: "captainNeeda",
     CHART_OFFICER: "chartOfficer",
     CHIMAERA: "chimaera",
     COMMS_NET: "commsNet",
     DARTH_VADER_COMMANDER: "darthVader_commander",
     DARTH_VADER_WEAPONS_TEAM_OFFENSIVE_RETROFIT: "darthVader_weaponsTeam_offensiveRetrofit",
     DEFENSE_LIAISON: "defenseLiaison",
     DEVASTATOR: "devastator",
     DODONNAS_PRIDE: "dodonnasPride",
     DOMINATOR: "dominator",
     EARLY_WARNING_SYSTEM: "earlyWarningSystem",
     ELECTRONIC_COUNTERMEASURES: "electronicCountermeasures",
     ENDEAVOR: "endeavor",
     ENGINE_TECHS: "engineTechs",
     ENGINEERING_CAPTAIN: "engineeringCaptain",
     ENGINEERING_TEAM: "engineeringTeam",
     ENHANCED_ARMAMENT: "enhancedArmament",
     ENTRAPMENT_FORMATION: "entrapmentFormation",
     EXPANDED_HANGAR_BAY: "expandedHangarBay",
     FIRE_CONTROL_TEAM: "fireControlTeam",
     GALLANT_HAVEN: "gallantHaven",
     GARM_BEL_IBLIS: "garmBelIblis",
     GENERAL_DODONNA: "generalDodonna",
     GENERAL_MADINE: "generalMadine",
     GENERAL_TAGGE: "generalTagge",
     GOVERNOR_PRYCE: "governorPryce",
     GRAND_ADMIRAL_THRAWN: "grandAdmiralThrawn",
     GRAND_MOFF_TARKIN: "grandMoffTarkin",
     GUNNERY_TEAM: "gunneryTeam",
     H9_TURBOLASERS: "h9Turbolasers",
     HARDENED_BULKHEADS: "hardenedBulkheads",
     HEAVY_TURBOLASER_TURRETS: "heavyTurbolaserTurrets",
     HIGH_CAPACITY_ION_TURBINES: "highCapacityIonTurbines",
     INSTRUCTOR_GORAN: "instructorGoran",
     INTEL_OFFICER: "intelOfficer",
     INTENSIFY_FIREPOWER: "intensifyFirepower",
     JAMMING_FIELD: "jammingField",
     LEIA_ORGANA: "leiaOrgana",
     LIBERTY: "liberty",
     MEDICAL_TEAM: "medicalTeam",
     MON_KARREN: "monKarren",
     MS_1_ION_CANNONS: "ms1IonCannons",
     NAV_TEAM: "navTeam",
     NK_7_ION_CANNONS: "nk7IonCannons",
     OVERLOAD_PULSE: "overloadPulse",
     PARAGON: "paragon",
     PHYLON_Q7_TRACTOR_BEAMS: "phylonQ7TractorBeams",
     POINT_DEFENSE_REROUTE: "pointDefenseReroute",
     QUAD_TURBOLASER_CANNONS: "quadTurbolaserCannons",
     REDEMPTION: "redemption",
     REDUNDANT_SHIELDS: "redundantShields",
     RELENTLESS: "relentless",
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
     STRATEGIC_ADVISER: "strategicAdviser",
     SUPPORT_OFFICER: "supportOfficer",
     SUPPRESSOR: "suppressor",
     TACTICAL_EXPERT: "tacticalExpert",
     TASKMASTER_GRINT: "taskmasterGrint",
     VECTOR: "vector",
     VETERAN_CAPTAIN: "veteranCaptain",
     VETERAN_GUNNERS: "veteranGunners",
     WEAPONS_LIAISON: "weaponsLiaison",
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
      "leiaOrgana": {
         "name": "Leia Organa",
         "unique": true,
         "text": "When you reveal a command, you may choose another friendly ship at distance 1-5 and change that ship's top command to your revealed command.",
         "faction": "Rebel Alliance",
         "slots": [
            "Officer"
         ],
         "points": 3,
         "image": "upgrade-card/officer/leia-organa.png",
         "key": "leiaOrgana"
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
      "overloadPulse": {
         "name": "Overload Pulse",
         "text": "Blue [Critical Hit]: Exhaust all of the defender's defense tokens.",
         "slots": [
            "Ion Cannons"
         ],
         "points": 8,
         "image": "upgrade-card/ion-cannons/electronic-countermeasures.png",
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

   const Selector = {};

   Selector.enumKeys = enumClass => EnumUtilities.keys(enumClass);

   Selector.enumValues = enumClass => EnumUtilities.values(enumClass);

   Selector.factionValueByShip = shipKey => Selector.findEnumValueByName(Selector.shipCard(shipKey).faction, Faction);

   Selector.factionValueBySquadron = squadronKey => Selector.findEnumValueByName(Selector.squadronCard(squadronKey).faction, Faction);

   Selector.findEnumValueByName = (name, enumClass) => EnumUtilities.findByName(name, enumClass);

   Selector.heightByCard = cardKey => R.cond([
        [R.either(cardNotNil(Selector.upgradeCard), cardNotNil(Selector.damageCard)), R.always(64)],
        [cardNotNil(Selector.squadronCard), R.always(89)],
        [cardNotNil(Selector.shipCard), R.always(120)],
        [R.T, cardKey => "Unknown card type for cardKey: " + cardKey]
      ])(cardKey);

   Selector.isDamageCard = cardValue => cardValue.image.startsWith("damage-card");

   Selector.isShipCard = cardValue => cardValue.image.startsWith("ship-card");

   Selector.isSquadronCard = cardValue => cardValue.image.startsWith("squadron-card");

   Selector.isUpgradeCard = cardValue => cardValue.image.startsWith("upgrade-card");

   Selector.upgradeSlotKeysByShip = shipKey => keysByName(UpgradeSlot, Selector.shipCard(shipKey).slots);

   Selector.upgradeSlotKeysByUpgrade = upgradeKey => keysByName(UpgradeSlot, Selector.upgradeCard(upgradeKey).slots);

   Selector.widthByCard = cardKey => R.cond([
        [R.either(cardNotNil(Selector.upgradeCard), cardNotNil(Selector.damageCard)), R.always(41)],
        [cardNotNil(Selector.squadronCard), R.always(62)],
        [cardNotNil(Selector.shipCard), R.always(70)],
        [R.T, cardKey => "Unknown card type for cardKey: " + cardKey]
      ])(cardKey);

   ////////////////////////////////////////////////////////////////////////////////
   Selector.damageCard = key => valueByKey(DamageCard, key);

   Selector.diceValue = key => valueByKey(DiceValue, key);

   Selector.faction = key => valueByKey(Faction, key);

   Selector.phase = key => valueByKey(Phase, key);

   Selector.shipCard = key => valueByKey(ShipCard, key);

   Selector.squadronCard = key => valueByKey(SquadronCard, key);

   Selector.upgradeCard = key => valueByKey(UpgradeCard, key);

   Selector.upgradeSlot = key => valueByKey(UpgradeSlot, key);

   ////////////////////////////////////////////////////////////////////////////////
   const cardNotNil = cardSelector => R.compose(R.not, R.isNil, cardSelector);
   const keysByName = (enumClass, names) => R.map(name => Selector.findEnumValueByName(name, enumClass).key, names);
   const valueByKey = (enumClass, key) => enumClass.properties[key];

   Object.freeze(Selector);

   const ShipBase = {

     LARGE: "large",
     MEDIUM: "medium",
     SMALL: "small",
   };

   ShipBase.properties = 
   {
      "large": {
         "name": "large",
         "width": 79,
         "height": 131,
         "key": "large"
      },
      "medium": {
         "name": "medium",
         "width": 64,
         "height": 104,
         "key": "medium"
      },
      "small": {
         "name": "small",
         "width": 44,
         "height": 73,
         "key": "small"
      }
   };

   Object.freeze(ShipBase);

   exports.Command = Command;
   exports.DamageCard = DamageCard;
   exports.DefenseToken = DefenseToken;
   exports.DiceValue = DiceValue;
   exports.EnumUtilities = EnumUtilities;
   exports.Faction = Faction;
   exports.Phase = Phase;
   exports.Range = Range;
   exports.Selector = Selector;
   exports.ShipBase = ShipBase;
   exports.ShipCard = ShipCard;
   exports.SquadronCard = SquadronCard;
   exports.UpgradeCard = UpgradeCard;
   exports.UpgradeSlot = UpgradeSlot;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
