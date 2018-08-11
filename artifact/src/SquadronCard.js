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

export default SquadronCard;