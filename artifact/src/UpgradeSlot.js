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

export default UpgradeSlot;