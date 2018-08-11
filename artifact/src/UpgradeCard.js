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

export default UpgradeCard;