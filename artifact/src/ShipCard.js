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

export default ShipCard;