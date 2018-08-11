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

export default Faction;