import TestData from "./TestData.js";
import StarWarsArmadaModel from "./StarWarsArmadaModel.js";

const Phase = AA.Phase;

const ActionCreator = AS.ActionCreator;

QUnit.module("StarWarsArmadaModel");

QUnit.test("nextGameState() Setup", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.COMMAND_START, "phaseKey");
      assert.equal(gameState.round, 0, "round");
      assert.equal(gameState.userMessage, "");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck length");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances length");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances length");
      assert.equal(Object.keys(gameState.fleetInstances).length, 2, "fleetInstances length");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances length");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances length");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances length");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Command Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.COMMAND_START));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.COMMAND_COMMANDING, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");

      assert.equal(gameState.activeQueue.length, 2);
      assert.equal(gameState.agentQuery, undefined);
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Command AgentQuery 1", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.setActiveQueue([1, 2]));
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.COMMAND_COMMANDING));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.ok(gameState.agentQuery);
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Command AgentQuery 2", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   // const pilotToManeuver = {};
   // pilotToManeuver[1] = Maneuver.STRAIGHT_1_STANDARD_1FW;
   // pilotToManeuver[2] = Maneuver.STRAIGHT_1_STANDARD_1FW;
   // store.dispatch(ActionCreator.setPilotToManeuver(pilotToManeuver));
   store.dispatch(ActionCreator.setActiveQueue([2]));
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.COMMAND_COMMANDING));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.ok(gameState.agentQuery);
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Command", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   // addPilotToManeuver(store);
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.COMMAND_COMMANDING));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.agentQuery, undefined);
      assert.equal(gameState.phaseKey, Phase.COMMAND_END, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");
      // assert.equal(Object.keys(gameState.pilotToManeuver).length, 3, "pilotToManeuver");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Command End", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.COMMAND_END));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.SHIP_START, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");
      // assert.equal(Object.keys(gameState.pilotToManeuver).length, 0, "pilotToManeuver");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Ship Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   // addPilotToManeuver(store);
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.SHIP_START));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.SHIP_END, "phaseKey");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Ship End", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.SHIP_END));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.SQUADRON_START, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Squadron Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   // addPilotToManeuver(store);
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.SQUADRON_START));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.SQUADRON_END, "phaseKey");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Squadron End", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.SQUADRON_END));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.STATUS_START, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Status Start", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.STATUS_START));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.STATUS_READY_DEFENSE_TOKENS, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Status Ready Defense Tokens", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.STATUS_READY_DEFENSE_TOKENS));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.STATUS_READY_UPGRADE_CARDS, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Status Ready Upgrade Cards", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.STATUS_READY_UPGRADE_CARDS));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.STATUS_FLIP_INITIATIVE_TOKEN, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Status Ready Flip Initiative Token", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.STATUS_FLIP_INITIATIVE_TOKEN));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.STATUS_PLACE_ROUND_TOKEN, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Status Place Round Token", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.STATUS_PLACE_ROUND_TOKEN));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.STATUS_END, "phaseKey");
      assert.equal(gameState.round, 2, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

QUnit.test("nextGameState() Status End", function(assert)
{
   // Setup.
   const store = TestData.createStore();
   store.dispatch(ActionCreator.incrementRound());
   store.dispatch(ActionCreator.setPhase(Phase.STATUS_END));
   const gameState0 = store.getState();

   const callback = result =>
   {
      // Verify.
      assert.ok(true, "test resumed from async operation");
      assert.ok(result);
      const gameState = result.getState();
      assert.ok(gameState);
      assert.equal(gameState.phaseKey, Phase.COMMAND_START, "phaseKey");
      assert.equal(gameState.round, 1, "round");
      assert.equal(gameState.userMessage, "", "userMessage");

      assert.equal(gameState.damageDeck.length, 52, "damageDeck");

      assert.equal(Object.keys(gameState.agentInstances).length, 2, "agentInstances");
      assert.equal(Object.keys(gameState.damageInstances).length, 52, "damageInstances");
      assert.equal(Object.keys(gameState.shipInstances).length, 3, "shipInstances");
      assert.equal(Object.keys(gameState.squadronInstances).length, 7, "squadronInstances");
      assert.equal(Object.keys(gameState.upgradeInstances).length, 4, "upgradeInstances");
      done();
   };

   // Run.
   const done = assert.async();
   StarWarsArmadaModel.nextGameState(
   {
      gameState: gameState0
   }).then(callback);
});

const StarWarsArmadaModelTest = {};
export default StarWarsArmadaModelTest;