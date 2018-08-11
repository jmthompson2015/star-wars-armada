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

export default ShipCard;