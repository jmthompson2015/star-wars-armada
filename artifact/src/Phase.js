const Phase = {
   SETUP: "setup",

   COMMAND_START: "commandStart",
   COMMAND_COMMANDING: "commandCommanding",
   COMMAND_END: "commandEnd",

   SHIP_START: "shipStart",
   SHIP_REVEAL_COMMAND_DIAL: "shipRevealCommandDial",
   SHIP_ATTACK_START: "shipAttackStart",
   SHIP_ATTACK_DECLARE_TARGET: "shipAttackDeclareTarget",
   SHIP_ATTACK_ROLL_ATTACK_DICE: "shipAttackRollAttackDice",
   SHIP_ATTACK_RESOLVE_ATTACK_EFFECTS: "shipAttackResolveAttackEffects",
   SHIP_ATTACK_SPEND_DEFENSE_TOKENS: "shipAttackSpendDefenseTokens",
   SHIP_ATTACK_RESOLVE_DAMAGE: "shipAttackResolveDamage",
   SHIP_ATTACK_DECLARE_ADDITIONAL_SQUADRON_TARGET: "shipAttackDeclareAdditionalSquadronTarget",
   SHIP_ATTACK_END: "shipAttackEnd",
   SHIP_EXECUTE_MANEUVER_START: "shipExecuteManeuverStart",
   SHIP_DETERMINE_COURSE: "shipDetermineCourse",
   SHIP_MOVE_SHIP: "shipMoveShip",
   SHIP_EXECUTE_MANEUVER_END: "shipExecuteManeuverEnd",
   SHIP_END: "shipEnd",

   SQUADRON_START: "squadronStart",
   SQUADRON_MOVE_START: "squadronMoveStart",
   SQUADRON_DETERMINE_COURSE: "squadronDetermineCourse",
   SQUADRON_MOVE_SQUADRON: "squadronMoveSquadron",
   SQUADRON_MOVE_END: "squadronMoveEnd",
   SQUADRON_ATTACK_START: "squadronAttackStart",
   SQUADRON_ATTACK_DECLARE_TARGET: "squadronAttackDeclareTarget",
   SQUADRON_ATTACK_ROLL_ATTACK_DICE: "squadronAttackRollAttackDice",
   SQUADRON_ATTACK_RESOLVE_ATTACK_EFFECTS: "squadronAttackResolveAttackEffects",
   SQUADRON_ATTACK_SPEND_DEFENSE_TOKENS: "squadronAttackSpendDefenseTokens",
   SQUADRON_ATTACK_RESOLVE_DAMAGE: "squadronAttackResolveDamage",
   SQUADRON_ATTACK_END: "squadronAttackEnd",
   SQUADRON_END: "squadronEnd",

   STATUS_START: "statusStart",
   STATUS_READY_DEFENSE_TOKENS: "statusReadyDefenseTokens",
   STATUS_READY_UPGRADE_CARDS: "statusReadyUpgradeCards",
   STATUS_FLIP_INITIATIVE_TOKEN: "statusFlipInitiativeToken",
   STATUS_PLACE_ROUND_TOKEN: "statusPlaceRoundToken",
   STATUS_END: "statusEnd"
};

Phase.properties = {
   "setup":
   {
      name: "Setup",
      key: "setup"
   },
   "commandStart":
   {
      name: "Command (start)",
      key: "commandStart"
   },
   "commandCommanding":
   {
      name: "Command (commanding)",
      key: "commandCommanding"
   },
   "commandEnd":
   {
      name: "Command (end)",
      key: "commandEnd"
   },
   "shipStart":
   {
      name: "Ship (start)",
      key: "shipStart"
   },
   "shipRevealCommandDial":
   {
      name: "Ship (reveal command dial)",
      key: "shipRevealCommandDial"
   },
   "shipAttackStart":
   {
      name: "Ship (attack start)",
      key: "shipAttackStart"
   },
   "shipAttackDeclareTarget":
   {
      name: "Ship (attack declare target)",
      key: "shipAttackDeclareTarget"
   },
   "shipAttackRollAttackDice":
   {
      name: "Ship (attack roll attack dice)",
      key: "shipAttackRollAttackDice"
   },
   "shipAttackResolveAttackEffects":
   {
      name: "Ship (attack resolve attack effects)",
      key: "shipAttackResolveAttackEffects"
   },
   "shipAttackSpendDefenseTokens":
   {
      name: "Ship (attack spend defense tokens)",
      key: "shipAttackSpendDefenseTokens"
   },
   "shipAttackResolveDamage":
   {
      name: "Ship (attack resolve damage)",
      key: "shipAttackResolveDamage"
   },
   "shipAttackDeclareAdditionalSquadronTarget":
   {
      name: "Ship (attack declare additional squadron target)",
      key: "shipAttackDeclareAdditionalSquadronTarget"
   },
   "shipAttackEnd":
   {
      name: "Ship (attack end)",
      key: "shipAttackEnd"
   },
   "shipExecuteManeuverStart":
   {
      name: "Ship (execute maneuver start)",
      key: "shipExecuteManeuverStart"
   },
   "shipDetermineCourse":
   {
      name: "Ship (determine course)",
      key: "shipDetermineCourse"
   },
   "shipMoveShip":
   {
      name: "Ship (move ship)",
      key: "shipMoveShip"
   },
   "shipExecuteManeuverEnd":
   {
      name: "Ship (execute maneuver end)",
      key: "shipExecuteManeuverEnd"
   },
   "shipEnd":
   {
      name: "Ship (end)",
      key: "shipEnd"
   },
   "squadronStart":
   {
      name: "Squadron (start)",
      key: "squadronStart"
   },
   "squadronMoveStart":
   {
      name: "Squadron (move start)",
      key: "squadronMoveStart"
   },
   "squadronDetermineCourse":
   {
      name: "Squadron (determine course)",
      key: "squadronDetermineCourse"
   },
   "squadronMoveSquadron":
   {
      name: "Squadron (move squadron)",
      key: "squadronMoveSquadron"
   },
   "squadronMoveEnd":
   {
      name: "Squadron (move end)",
      key: "squadronMoveEnd"
   },
   "squadronAttackStart":
   {
      name: "Squadron (attack start)",
      key: "squadronAttackStart"
   },
   "squadronAttackDeclareTarget":
   {
      name: "Squadron (attack declare target)",
      key: "squadronAttackDeclareTarget"
   },
   "squadronAttackRollAttackDice":
   {
      name: "Squadron (attack roll attack dice)",
      key: "squadronAttackRollAttackDice"
   },
   "squadronAttackResolveAttackEffects":
   {
      name: "Squadron (attack resolve attack effects)",
      key: "squadronAttackResolveAttackEffects"
   },
   "squadronAttackSpendDefenseTokens":
   {
      name: "Squadron (attack spend defense tokens)",
      key: "squadronAttackSpendDefenseTokens"
   },
   "squadronAttackResolveDamage":
   {
      name: "Squadron (attack resolve damage)",
      key: "squadronAttackResolveDamage"
   },
   "squadronAttackEnd":
   {
      name: "Squadron (attack end)",
      key: "squadronAttackEnd"
   },
   "squadronEnd":
   {
      name: "Squadron (end)",
      key: "squadronEnd"
   },
   "statusStart":
   {
      name: "Status (start)",
      key: "statusStart"
   },
   "statusReadyDefenseTokens":
   {
      name: "Status (ready defense tokens)",
      key: "statusReadyDefenseTokens"
   },
   "statusReadyUpgradeCards":
   {
      name: "Status (ready upgrade cards)",
      key: "statusReadyUpgradeCards"
   },
   "statusFlipInitiativeToken":
   {
      name: "Status (flip initiative token)",
      key: "statusFlipInitiativeToken"
   },
   "statusPlaceRoundToken":
   {
      name: "Status (place round token)",
      key: "statusPlaceRoundToken"
   },
   "statusEnd":
   {
      name: "Status (end)",
      key: "statusEnd"
   }
};

Object.freeze(Phase);

export default Phase;