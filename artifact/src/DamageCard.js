const DamageCard = {

  BLINDED_GUNNERS: "blindedGunners",
  CAPACITOR_FAILURE: "capacitorFailure",
  COMM_NOISE: "commNoise",
  COMPARTMENT_FIRE: "compartmentFire",
  COOLANT_DISCHARGE: "coolantDischarge",
  CREW_PANIC: "crewPanic",
  DAMAGED_CONTROLS: "damagedControls",
  DAMAGED_MUNITIONS: "damagedMunitions",
  DEPOWERED_ARMAMENT: "depoweredArmament",
  DISENGAGED_FIRE_CONTROL: "disengagedFireControl",
  FAULTY_COUNTERMEASURES: "faultyCountermeasures",
  INJURED_CREW: "injuredCrew",
  LIFE_SUPPORT_FAILURE: "lifeSupportFailure",
  POINT_DEFENSE_FAILURE: "pointDefenseFailure",
  POWER_FAILURE: "powerFailure",
  PROJECTOR_MISALIGNED: "projectorMisaligned",
  RUPTURED_ENGINE: "rupturedEngine",
  SHIELD_FAILURE: "shieldFailure",
  STRUCTURAL_DAMAGE: "structuralDamage",
  TARGETER_DISRUPTION: "targeterDisruption",
  THRUST_CONTROL_MALFUNCTION: "thrustControlMalfunction",
  THRUSTER_FISSURE: "thrusterFissure",
};

DamageCard.properties = 
{
   "blindedGunners": {
      "title": "Blinded Gunners",
      "amount": 2,
      "type": "Crew",
      "text": "While attacking, you cannot spend [Scatter] icons.",
      "image": "damage-card/blinded-gunners.png",
      "key": "blindedGunners"
   },
   "capacitorFailure": {
      "title": "Capacitor Failure",
      "amount": 2,
      "type": "Ship",
      "text": "If a hull zone has no remaining shields, you cannot recover shields in it nor move shields to it. If that hull zone is defending, you cannot spend [Redirect] tokens.",
      "image": "damage-card/capacitor-failure.png",
      "key": "capacitorFailure"
   },
   "commNoise": {
      "title": "Comm Noise",
      "amount": 2,
      "type": "Crew",
      "text": "Your opponent may either reduce your speed by 1 or choose a new command on your top command dial. Then flip this card facedown.",
      "image": "damage-card/comm-noise.png",
      "key": "commNoise"
   },
   "compartmentFire": {
      "title": "Compartment Fire",
      "amount": 2,
      "type": "Crew",
      "text": "You cannot ready your defense tokens.",
      "image": "damage-card/compartment-fire.png",
      "key": "compartmentFire"
   },
   "coolantDischarge": {
      "title": "Coolant Discharge",
      "amount": 2,
      "type": "Ship",
      "text": "Only one attack you perform each round can target a ship.",
      "image": "damage-card/coolant-discharge.png",
      "key": "coolantDischarge"
   },
   "crewPanic": {
      "title": "Crew Panic",
      "amount": 2,
      "type": "Crew",
      "text": "Before you reveal a command dial, you must either suffer 1 damage or discard that dial. If you discard it, do not reveal a dial this round.",
      "image": "damage-card/crew-panic.png",
      "key": "crewPanic"
   },
   "damagedControls": {
      "title": "Damaged Controls",
      "amount": 2,
      "type": "Crew",
      "text": "When you overlap a ship or obstacle, deal 1 facedown damage card to your ship (in addition to all other obstacle effects).",
      "image": "damage-card/damaged-controls.png",
      "key": "damagedControls"
   },
   "damagedMunitions": {
      "title": "Damaged Munitions",
      "amount": 2,
      "type": "Ship",
      "text": "When attacking a ship, before you roll your attack pool, remove 1 die of your choice.",
      "image": "damage-card/damaged-munitions.png",
      "key": "damagedMunitions"
   },
   "depoweredArmament": {
      "title": "Depowered Armament",
      "amount": 2,
      "type": "Ship",
      "text": "You cannot attack at long range.",
      "image": "damage-card/depowered-armament.png",
      "key": "depoweredArmament"
   },
   "disengagedFireControl": {
      "title": "Disengaged Fire Control",
      "amount": 2,
      "type": "Ship",
      "text": "When declaring the target of an attack, you cannot choose a target against whom the attack would be obstructed.",
      "image": "damage-card/disengaged-fire-control.png",
      "key": "disengagedFireControl"
   },
   "faultyCountermeasures": {
      "title": "Faulty Countermeasures",
      "amount": 2,
      "type": "Ship",
      "text": "You cannot spend exhausted defense tokens.",
      "image": "damage-card/faulty-countermeasures.png",
      "key": "faultyCountermeasures"
   },
   "injuredCrew": {
      "title": "Injured Crew",
      "amount": 4,
      "type": "Crew",
      "text": "Choose and discard 1 of your defense tokens. Then flip this card facedown.",
      "image": "damage-card/injured-crew.png",
      "key": "injuredCrew"
   },
   "lifeSupportFailure": {
      "title": "Life Support Failure",
      "amount": 2,
      "type": "Crew",
      "text": "Discard all of your command tokens.\nYou cannot have any command tokens.",
      "image": "damage-card/life-support-failure.png",
      "key": "lifeSupportFailure"
   },
   "pointDefenseFailure": {
      "title": "Point-Defense Failure",
      "amount": 2,
      "type": "Ship",
      "text": "When attacking a squadron, before you roll your attack pool, remove 1 die of your choice.",
      "image": "damage-card/point-defense-failure.png",
      "key": "pointDefenseFailure"
   },
   "powerFailure": {
      "title": "Power Failure",
      "amount": 2,
      "type": "Ship",
      "text": "Your engineering value is reduced to half its value, rounded down.",
      "image": "damage-card/power-failure.png",
      "key": "powerFailure"
   },
   "projectorMisaligned": {
      "title": "Projector Misaligned",
      "amount": 2,
      "type": "Ship",
      "text": "Your hull zone with the most remaining shields loses all of its shields. If multiple hull zones are tied, choose between the tied hull zones. Then flip this card face down.",
      "image": "damage-card/projector-misaligned.png",
      "key": "projectorMisaligned"
   },
   "rupturedEngine": {
      "title": "Ruptured Engine",
      "amount": 2,
      "type": "Ship",
      "text": "After you execute a maneuver, if the speed on your speed dial is greater than \"1,\" suffer 1 damage.",
      "image": "damage-card/ruptured-engine.png",
      "key": "rupturedEngine"
   },
   "shieldFailure": {
      "title": "Shield Failure",
      "amount": 2,
      "type": "Ship",
      "text": "Your opponent may choose up to 2 of your hull zones. Each of the chosen hull zones loses 1 shield. Then flip this card facedown.",
      "image": "damage-card/shield-failure.png",
      "key": "shieldFailure"
   },
   "structuralDamage": {
      "title": "Structural Damage",
      "amount": 8,
      "type": "Ship",
      "text": "Deal 1 facedown damage card to your ship. Then flip this card facedown.",
      "image": "damage-card/structural-damage.png",
      "key": "structuralDamage"
   },
   "targeterDisruption": {
      "title": "Targeter Disruption",
      "amount": 2,
      "type": "Ship",
      "text": "While attacking, you cannot resolve critical effects.",
      "image": "damage-card/targeter-disruption.png",
      "key": "targeterDisruption"
   },
   "thrustControlMalfunction": {
      "title": "Thrust-Control Malfunction",
      "amount": 2,
      "type": "Ship",
      "text": "The yaw value for the last adjustable joint at your current speed is reduced by 1.",
      "image": "damage-card/thrust-control-malfunction.png",
      "key": "thrustControlMalfunction"
   },
   "thrusterFissure": {
      "title": "Thruster Fissure",
      "amount": 2,
      "type": "Ship",
      "text": "When you change your speed by 1 or more, suffer 1 damage.",
      "image": "damage-card/thruster-fissure.png",
      "key": "thrusterFissure"
   }
};

Object.freeze(DamageCard);

export default DamageCard;