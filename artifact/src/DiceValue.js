const DiceValue = {
   HIT: "hit",
   HIT_HIT: "hitHit",
   CRITICAL_HIT: "criticalHit",
   HIT_CRITICAL_HIT: "hitCriticalHit",
   ACCURACY: "accuracy",
   BLANK: "blank"
};

DiceValue.properties = {
   "hit":
   {
      name: "Hit",
      color: "black",
      sortOrder: 0,
      image: "dice/black-hit.png",
      key: "hit"
   },
   "hitHit":
   {
      name: "Hit + Hit",
      color: "red",
      sortOrder: 1,
      image: "dice/red-hit-hit.png",
      key: "hitHit"
   },
   "criticalHit":
   {
      name: "Critical Hit",
      color: "red",
      sortOrder: 2,
      image: "dice/red-critical-hit.png",
      key: "criticalHit"
   },
   "hitCriticalHit":
   {
      name: "Hit + Critical Hit",
      color: "black",
      sortOrder: 3,
      image: "dice/black-hit-critical-hit.png",
      key: "hitCriticalHit"
   },
   "accuracy":
   {
      name: "Accuracy",
      color: "blue",
      sortOrder: 4,
      image: "dice/blue-accuracy.png",
      key: "accuracy"
   },
   "blank":
   {
      name: "Blank",
      color: "black",
      sortOrder: 5,
      image: "dice/black-blank.png",
      key: "blank"
   }
};

Object.freeze(DiceValue);

export default DiceValue;