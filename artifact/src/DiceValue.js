const DiceValue = {

   BLACK_BLANK: "blackBlank",
   BLACK_HIT: "blackHit",
   BLACK_HIT_CRITICAL: "blackHitCritical",

   BLUE_ACCURACY: "blueAccuracy",
   BLUE_CRITICAL: "blueCritical",
   BLUE_HIT: "blueHit",

   RED_ACCURACY: "redAccuracy",
   RED_BLANK: "redBlank",
   RED_CRITICAL: "redCritical",
   RED_HIT: "redHit",
   RED_HIT_HIT: "redHitHit",
};

DiceValue.properties = {
   "blackBlank":
   {
      name: "Black Blank",
      color: "black",
      value: "blank",
      sortOrder: 10,
      image: "dice/black-blank.png",
      key: "blackBlank"
   },
   "blackHit":
   {
      name: "Black Hit",
      color: "black",
      value: "hit",
      sortOrder: 2,
      image: "dice/black-hit.png",
      key: "blackHit"
   },
   "blackHitCritical":
   {
      name: "Black Hit + Critical",
      color: "black",
      value: "hitCritical",
      sortOrder: 5,
      image: "dice/black-hit-critical-hit.png",
      key: "blackHitCritical"
   },

   "blueAccuracy":
   {
      name: "Blue Accuracy",
      color: "blue",
      value: "accuracy",
      sortOrder: 8,
      image: "dice/blue-accuracy.png",
      key: "blueAccuracy"
   },
   "blueCritical":
   {
      name: "Blue Critical",
      color: "blue",
      value: "critical",
      sortOrder: 6,
      image: "dice/blue-critical-hit.png",
      key: "blueCritical"
   },
   "blueHit":
   {
      name: "Blue Hit",
      color: "blue",
      value: "hit",
      sortOrder: 3,
      image: "dice/blue-hit.png",
      key: "blueHit"
   },

   "redAccuracy":
   {
      name: "Red Accuracy",
      color: "red",
      value: "accuracy",
      sortOrder: 9,
      image: "dice/red-accuracy.png",
      key: "redAccuracy"
   },
   "redBlank":
   {
      name: "Red Blank",
      color: "red",
      value: "blank",
      sortOrder: 11,
      image: "dice/red-blank.png",
      key: "redBlank"
   },
   "redCritical":
   {
      name: "Red Critical",
      color: "red",
      value: "critical",
      sortOrder: 7,
      image: "dice/red-critical-hit.png",
      key: "redCritical"
   },
   "redHit":
   {
      name: "Red Hit",
      color: "red",
      value: "hit",
      sortOrder: 4,
      image: "dice/red-hit.png",
      key: "redHit"
   },
   "redHitHit":
   {
      name: "Red Hit + Hit",
      color: "red",
      value: "hitHit",
      sortOrder: 1,
      image: "dice/red-hit-hit.png",
      key: "redHitHit"
   }
};

Object.freeze(DiceValue);

export default DiceValue;