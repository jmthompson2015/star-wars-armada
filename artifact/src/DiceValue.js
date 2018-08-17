const DiceValue = {
   ACCURACY: "accuracy",
   BLANK: "blank",
   CRITICAL_HIT: "criticalHit",
   HIT: "hit",
   HIT_CRITICAL_HIT: "hitCriticalHit",
   HIT_HIT: "hitHit"
};

DiceValue.properties = {
   "accuracy":
   {
      name: "Accuracy",
      sortOrder: 4,
      key: "accuracy"
   },
   "blank":
   {
      name: "Blank",
      sortOrder: 5,
      key: "blank"
   },
   "criticalHit":
   {
      name: "Critical Hit",
      sortOrder: 3,
      key: "criticalHit"
   },
   "hit":
   {
      name: "Hit",
      sortOrder: 1,
      key: "hit"
   },
   "hitCriticalHit":
   {
      name: "Hit + Critical Hit",
      sortOrder: 2,
      key: "hitCriticalHit"
   },
   "hitHit":
   {
      name: "Hit + Hit",
      sortOrder: 0,
      key: "hitHit"
   }
};

Object.freeze(DiceValue);

export default DiceValue;