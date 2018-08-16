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

export default UpgradeSlot;