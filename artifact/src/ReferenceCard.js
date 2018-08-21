const ReferenceCard = {

  COMMANDS: "commands",
  DEFENSE_TOKENS: "defenseTokens",
};

ReferenceCard.properties = 
{
   "commands": {
      "title": "Commands",
      "image": "reference-card/commands.png",
      "key": "commands"
   },
   "defenseTokens": {
      "title": "Defense Tokens",
      "image": "reference-card/defense-tokens.png",
      "key": "defenseTokens"
   }
};

Object.freeze(ReferenceCard);

export default ReferenceCard;