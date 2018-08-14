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
      "ship": "Assault Frigate Mark II",
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
      "image": "ship-card/assault-frigate-mark-ii-a.png",
      "key": "assaultFrigateMarkIiA"
   },
   "assaultFrigateMarkIiB": {
      "name": "Assault Frigate Mark II B",
      "ship": "Assault Frigate Mark II",
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
      "image": "ship-card/assault-frigate-mark-ii-b.png",
      "key": "assaultFrigateMarkIiB"
   },
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
   "gozantiClassAssaultCarriers": {
      "name": "Gozanti-class Assault Carriers",
      "ship": "Gozanti-class Carriers",
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
      "image": "ship-card/gozanti-class-assault-carriers.png",
      "key": "gozantiClassAssaultCarriers"
   },
   "gozantiClassCruisers": {
      "name": "Gozanti-class Cruisers",
      "ship": "Gozanti-class Carriers",
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
      "image": "ship-card/gozanti-class-cruisers.png",
      "key": "gozantiClassCruisers"
   },
   "imperialIClassStarDestroyer": {
      "name": "Imperial I-class Star Destroyer",
      "ship": "Imperial-class Star Destroyer",
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
      "image": "ship-card/imperial-i-class-star-destroyer.png",
      "key": "imperialIClassStarDestroyer"
   },
   "imperialIiClassStarDestroyer": {
      "name": "Imperial II-class Star Destroyer",
      "ship": "Imperial-class Star Destroyer",
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
      "image": "ship-card/imperial-ii-class-star-destroyer.png",
      "key": "imperialIiClassStarDestroyer"
   },
   "imperialStarDestroyerCymoon1Refit": {
      "name": "Imperial Star Destroyer Cymoon 1 Refit",
      "ship": "Imperial-class Star Destroyer",
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
      "image": "ship-card/imperial-star-destroyer-cymoon-1-refit.png",
      "key": "imperialStarDestroyerCymoon1Refit"
   },
   "imperialStarDestroyerKuatRefit": {
      "name": "Imperial Star Destroyer Kuat Refit",
      "ship": "Imperial-class Star Destroyer",
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
      "image": "ship-card/imperial-star-destroyer-kuat-refit.png",
      "key": "imperialStarDestroyerKuatRefit"
   },
   "mc80BattleCruiser": {
      "name": "MC80 Battle Cruiser",
      "ship": "MC80 Cruiser",
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
      "image": "ship-card/mc80-battle-cruiser.png",
      "key": "mc80BattleCruiser"
   },
   "mc80StarCruiser": {
      "name": "MC80 Star Cruiser",
      "ship": "MC80 Cruiser",
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
      "image": "ship-card/mc80-star-cruiser.png",
      "key": "mc80StarCruiser"
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

export default ShipCard;