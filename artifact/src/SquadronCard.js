const SquadronCard = {

  AGGRESSOR_ASSAULT_FIGHTER: "aggressorAssaultFighter",
  BOBA_FETT: "bobaFett",
  BOSSK: "bossk",
  COLONEL_JENDON: "colonelJendon",
  DASH_RENDAR: "dashRendar",
  DENGAR: "dengar",
  FIRESPRAY_31: "firespray31",
  GAR_SAXON: "garSaxon",
  HAN_SOLO: "hanSolo",
  HOWLRUNNER: "howlrunner",
  HWK_290: "hwk290",
  IG_88: "ig88",
  JAN_ORS: "janOrs",
  JUMPMASTER_5000: "jumpmaster5000",
  LAMBDA_CLASS_SHUTTLE: "lambdaClassShuttle",
  LUKE_SKYWALKER: "lukeSkywalker",
  MAAREK_STELE: "maarekStele",
  MANDALORIAN_GAUNTLET_FIGHTER: "mandalorianGauntletFighter",
  MORNA_KEE: "mornaKee",
  NYM: "nym",
  SCURRG_H_6_BOMBER: "scurrgH6Bomber",
  TIE_DEFENDER_SQUADRON: "tieDefenderSquadron",
  TIE_FIGHTER_SQUADRON: "tieFighterSquadron",
  TIE_PHANTOM_SQUADRON: "tiePhantomSquadron",
  VT_49_DECIMATOR: "vt49Decimator",
  WHISPER: "whisper",
  X_WING_SQUADRON: "xWingSquadron",
  YT_1300: "yt1300",
  YT_2400: "yt2400",
  YV_666: "yv666",
};

SquadronCard.properties = 
{
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
      "image": "squadron-card/galactic-empire/lambda-class-shuttle.png",
      "key": "colonelJendon"
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
   }
};

Object.freeze(SquadronCard);

export default SquadronCard;