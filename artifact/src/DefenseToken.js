const DefenseToken = {

  BRACE: "brace",
  CONTAIN: "contain",
  EVADE: "evade",
  REDIRECT: "redirect",
  SCATTER: "scatter",
};

DefenseToken.properties = 
{
   "brace": {
      "name": "Brace",
      "text": "After the damage is totaled, the defender reduces the total to half, rounded up.",
      "sortOrder": 3,
      "key": "brace"
   },
   "contain": {
      "name": "Contain",
      "text": "Prevent the attacker from resolving the standard critical effect.",
      "sortOrder": 5,
      "key": "contain"
   },
   "evade": {
      "name": "Evade",
      "text": "At long range, the defender cancels one attack die of its choice. At medium range, it chooses one attack die to be rerolled. At close range, or distance 1, this token has no effect.",
      "sortOrder": 2,
      "key": "evade"
   },
   "redirect": {
      "name": "Redirect",
      "text": "Suffer damage on an adjacent hull zone's shields before suffering the remaining damage on the defending hull zone.",
      "sortOrder": 1,
      "key": "redirect"
   },
   "scatter": {
      "name": "Scatter",
      "text": "The defender cancels all attack dice.",
      "sortOrder": 4,
      "key": "scatter"
   }
};

Object.freeze(DefenseToken);

export default DefenseToken;