(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AM = {})));
}(this, (function (exports) { 'use strict';

   const AgentQueryType = {

      CHOOSE_COMMANDS: "chooseCommands",
   };

   AgentQueryType.properties = {
      "chooseCommands":
      {
         "name": "Choose Commands",
         "key": "chooseCommands"
      }
   };

   Object.freeze(AgentQueryType);

   const ActionCreator = AS.ActionCreator;

   const TaskUtilities = {};

   TaskUtilities.processPhase = (
   {
      phaseKey,
      processFunction,
      responseKey,
      responseFunction
   }) => store => new Promise((resolve, reject) =>
   {
      const agentQuery = AS.Selector.agentQuery(store.getState());
      const agentResponse = AS.Selector.agentResponse(store.getState());

      if (agentQuery !== undefined)
      {
         reject(new Error("Received agentQuery for phaseKey: " + phaseKey + "\nagentQuery = " + JSON.stringify(agentQuery, null, "   ")));
      }
      else if (agentResponse !== undefined && agentResponse.responseKey === responseKey)
      {
         if (responseFunction !== undefined)
         {
            responseFunction(store);
            store.dispatch(ActionCreator.clearAgentResponse());
            resolve(store);
         }
         else
         {
            reject(new Error("Missing responseFunction for phaseKey: " + phaseKey));
         }
      }
      else
      {
         if (processFunction !== undefined)
         {
            processFunction(store);
            resolve(store);
         }
         else
         {
            reject(new Error("Missing processFunction for phaseKey: " + phaseKey));
         }
      }
   });

   Object.freeze(TaskUtilities);

   const Phase = AA.Phase;

   const ActionCreator$1 = AS.ActionCreator;

   const CommandTask = {};
   const PHASE_TO_CONFIG = {};

   CommandTask.doIt = store =>
   {
      let answer;
      const phaseKey = AS.Selector.phaseKey(store.getState());

      switch (phaseKey)
      {
         case Phase.COMMAND_START:
            answer = start(store);
            break;
         case Phase.COMMAND_END:
            answer = end(store);
            break;
         default:
            const config = PHASE_TO_CONFIG[phaseKey];
            answer = TaskUtilities.processPhase(
            {
               phaseKey: phaseKey,
               responseKey: config.responseKey,
               responseFunction: config.responseFunction,
               processFunction: config.processFunction
            })(store);
      }

      return answer;
   };

   ////////////////////////////////////////////////////////////////////////////////
   const start = store => new Promise((resolve) =>
   {
      setCommandQueue(store);
      setPhase(store, Phase.COMMAND_COMMANDING);
      resolve(store);
   });

   PHASE_TO_CONFIG[Phase.COMMAND_COMMANDING] = {
      processFunction: store =>
      {
         const commandQueue = AS.Selector.activeQueue(store.getState());

         if (commandQueue.length > 0)
         {
            store.dispatch(ActionCreator$1.dequeueCommand());
            const activeAgentId = AS.Selector.activeAgentId(store.getState());
            const newAgentQuery = AS.AgentQueryState.create(
            {
               agentId: activeAgentId,
               queryKey: AgentQueryType.CHOOSE_COMMANDS,
               payload:
               {}
            });
            store.dispatch(ActionCreator$1.setAgentQuery(newAgentQuery));
         }
         else
         {
            store.dispatch(ActionCreator$1.clearActiveAgentId());
            store.dispatch(ActionCreator$1.setPhase(Phase.COMMAND_END));
         }
      },
      responseKey: AgentQueryType.CHOOSE_COMMANDS,
      responseFunction: store =>
      {
         const agentResponse = AS.Selector.agentResponse(store.getState());
         console.log("COMMANDING responseFunction() agentResponse = " + JSON.stringify(agentResponse, null, "   "));
         store.dispatch(ActionCreator$1.clearAgentResponse());
      }
   };

   const end = store => new Promise((resolve) =>
   {
      setPhase(store, Phase.SHIP_START);
      resolve(store);
   });

   ////////////////////////////////////////////////////////////////////////////////
   const setCommandQueue = store =>
   {
      const agentIds = AS.Selector.agentIds(store.getState());
      store.dispatch(ActionCreator$1.setActiveQueue(agentIds));
   };

   const setPhase = (store, phaseKey) => store.dispatch(ActionCreator$1.setPhase(phaseKey));

   Object.freeze(CommandTask);

   const ActionCreator$2 = AS.ActionCreator;

   const SetupTask = {};

   SetupTask.doIt = store => new Promise((resolve) =>
   {
      store.dispatch(ActionCreator$2.setPhase(AA.Phase.COMMAND_START));

      resolve(store);
   });

   Object.freeze(SetupTask);

   const Phase$1 = AA.Phase;

   const ActionCreator$3 = AS.ActionCreator;

   const ShipTask = {};
   const PHASE_TO_CONFIG$1 = {};

   ShipTask.doIt = store =>
   {
      let answer;
      const phaseKey = AS.Selector.phaseKey(store.getState());

      switch (phaseKey)
      {
         case Phase$1.SHIP_START:
            answer = start$1(store);
            break;
         case Phase$1.SHIP_END:
            answer = end$1(store);
            break;
         default:
            const config = PHASE_TO_CONFIG$1[phaseKey];
            answer = TaskUtilities.processPhase(
            {
               phaseKey: phaseKey,
               responseKey: config.responseKey,
               responseFunction: config.responseFunction,
               processFunction: config.processFunction
            })(store);
      }

      return answer;
   };

   ////////////////////////////////////////////////////////////////////////////////
   const start$1 = store => new Promise((resolve) =>
   {
      setPhase$1(store, Phase$1.SHIP_END);
      resolve(store);
   });

   const end$1 = store => new Promise((resolve) =>
   {
      setPhase$1(store, Phase$1.SQUADRON_START);
      resolve(store);
   });

   ////////////////////////////////////////////////////////////////////////////////
   const setPhase$1 = (store, phaseKey) => store.dispatch(ActionCreator$3.setPhase(phaseKey));

   Object.freeze(ShipTask);

   const Phase$2 = AA.Phase;

   const ActionCreator$4 = AS.ActionCreator;

   const SquadronTask = {};
   const PHASE_TO_CONFIG$2 = {};

   SquadronTask.doIt = store =>
   {
      let answer;
      const phaseKey = AS.Selector.phaseKey(store.getState());

      switch (phaseKey)
      {
         case Phase$2.SQUADRON_START:
            answer = start$2(store);
            break;
         case Phase$2.SQUADRON_END:
            answer = end$2(store);
            break;
         default:
            const config = PHASE_TO_CONFIG$2[phaseKey];
            answer = TaskUtilities.processPhase(
            {
               phaseKey: phaseKey,
               responseKey: config.responseKey,
               responseFunction: config.responseFunction,
               processFunction: config.processFunction
            })(store);
      }

      return answer;
   };

   ////////////////////////////////////////////////////////////////////////////////
   const start$2 = store => new Promise((resolve) =>
   {
      setPhase$2(store, Phase$2.SQUADRON_END);
      resolve(store);
   });

   const end$2 = store => new Promise((resolve) =>
   {
      setPhase$2(store, Phase$2.STATUS_START);
      resolve(store);
   });

   ////////////////////////////////////////////////////////////////////////////////
   const setPhase$2 = (store, phaseKey) => store.dispatch(ActionCreator$4.setPhase(phaseKey));

   Object.freeze(SquadronTask);

   const Phase$3 = AA.Phase;

   const ActionCreator$5 = AS.ActionCreator;

   const StatusTask = {};
   const PHASE_TO_CONFIG$3 = {};

   StatusTask.doIt = store =>
   {
      let answer;
      const phaseKey = AS.Selector.phaseKey(store.getState());

      switch (phaseKey)
      {
         case Phase$3.STATUS_START:
            answer = start$3(store);
            break;
         case Phase$3.STATUS_END:
            answer = end$3(store);
            break;
         default:
            const config = PHASE_TO_CONFIG$3[phaseKey];
            answer = TaskUtilities.processPhase(
            {
               phaseKey: phaseKey,
               responseKey: config.responseKey,
               responseFunction: config.responseFunction,
               processFunction: config.processFunction
            })(store);
      }

      return answer;
   };

   ////////////////////////////////////////////////////////////////////////////////
   const start$3 = store => new Promise((resolve) =>
   {
      setPhase$3(store, Phase$3.STATUS_READY_DEFENSE_TOKENS);
      resolve(store);
   });

   PHASE_TO_CONFIG$3[Phase$3.STATUS_READY_DEFENSE_TOKENS] = {
      processFunction: store =>
      {
         // Ships.
         setStatusQueueShip(store);

         while (AS.Selector.activeQueue(store.getState()).length > 0)
         {
            store.dispatch(ActionCreator$5.dequeueShip());
            const shipId = AS.Selector.activeShipId(store.getState());
            store.dispatch(ActionCreator$5.readyShipDefenseTokens(shipId));
         }

         // Squadrons.
         setStatusQueueSquadron(store);

         while (AS.Selector.activeQueue(store.getState()).length > 0)
         {
            store.dispatch(ActionCreator$5.dequeueSquadron());
            const squadronId = AS.Selector.activeSquadronId(store.getState());
            store.dispatch(ActionCreator$5.readySquadronDefenseTokens(squadronId));
         }

         setPhase$3(store, Phase$3.STATUS_READY_UPGRADE_CARDS);
      }
   };

   PHASE_TO_CONFIG$3[Phase$3.STATUS_READY_UPGRADE_CARDS] = {
      processFunction: store =>
      {
         setStatusQueueShip(store);

         while (AS.Selector.activeQueue(store.getState()).length > 0)
         {
            store.dispatch(ActionCreator$5.dequeueShip());
            const shipId = AS.Selector.activeShipId(store.getState());
            store.dispatch(ActionCreator$5.readyUpgradeCards(shipId));
         }

         setPhase$3(store, Phase$3.STATUS_FLIP_INITIATIVE_TOKEN);
      }
   };

   PHASE_TO_CONFIG$3[Phase$3.STATUS_FLIP_INITIATIVE_TOKEN] = {
      processFunction: store =>
      {
         // TODO: flip initiative token.
         setPhase$3(store, Phase$3.STATUS_PLACE_ROUND_TOKEN);
      }
   };

   PHASE_TO_CONFIG$3[Phase$3.STATUS_PLACE_ROUND_TOKEN] = {
      processFunction: store =>
      {
         store.dispatch(ActionCreator$5.incrementRound());
         setPhase$3(store, Phase$3.STATUS_END);
      }
   };

   const end$3 = store => new Promise((resolve) =>
   {
      setPhase$3(store, Phase$3.COMMAND_START);
      resolve(store);
   });

   ////////////////////////////////////////////////////////////////////////////////
   const setStatusQueueShip = store =>
   {
      const shipIds = AS.Selector.shipIds(store.getState());
      store.dispatch(ActionCreator$5.setActiveQueue(shipIds));
   };

   const setStatusQueueSquadron = store =>
   {
      const squadronIds = AS.Selector.squadronIds(store.getState());
      store.dispatch(ActionCreator$5.setActiveQueue(squadronIds));
   };

   const setPhase$3 = (store, phaseKey) => store.dispatch(ActionCreator$5.setPhase(phaseKey));

   Object.freeze(StatusTask);

   const ActionCreator$6 = AS.ActionCreator;
   const Reducer = AS.Reducer;

   const ArmadaModel = {};

   ArmadaModel.nextGameState = (
   {
      gameState
   }) =>
   {
      // Initialize.
      const store = Redux.createStore(Reducer.root, gameState);
      let answer;

      if (isGameOver(store.getState()))
      {
         answer = new Promise((resolve) =>
         {
            processGameOver(store);
            resolve(store);
         });
      }
      else
      {
         const phaseKey = gameState.phaseKey;
         let taskClass;

         if (phaseKey === "setup")
         {
            taskClass = SetupTask;
         }
         else if (phaseKey.startsWith("command"))
         {
            taskClass = CommandTask;
         }
         else if (phaseKey.startsWith("ship"))
         {
            taskClass = ShipTask;
         }
         else if (phaseKey.startsWith("squadron"))
         {
            taskClass = SquadronTask;
         }
         else if (phaseKey.startsWith("status"))
         {
            taskClass = StatusTask;
         }

         answer = taskClass.doIt(store);
      }

      return answer;
   };

   const determineWinner = state =>
   {
      const shipCount1 = AS.Selector.shipCountByAgent(1, state);
      const shipCount2 = AS.Selector.shipCountByAgent(2, state);

      return ((shipCount1 > 0 && shipCount2 === 0) ? 1 : ((shipCount1 === 0 && shipCount2 > 0) ? 2 : undefined));
   };

   const isGameOver = state =>
   {
      const round = AS.Selector.round(state);
      const shipCount1 = AS.Selector.shipCountByAgent(1, state);
      const shipCount2 = AS.Selector.shipCountByAgent(2, state);

      return (round > 6 || shipCount1 === 0 || shipCount2 === 0);
   };

   const processGameOver = store =>
   {
      const winner = determineWinner(store.getState());
      store.dispatch(ActionCreator$6.setGameOver(winner));

      const message = (winner === undefined ? "Game is a draw." : winner.name() + " won! ");
      store.dispatch(ActionCreator$6.setUserMessage(message));
   };

   Object.freeze(ArmadaModel);

   const DamageDeck = {};

   DamageDeck.create = function()
   {
      const keys = AA.EnumUtilities.keys(AA.DamageCard);
      let count = 0;

      const damageInstances = keys.reduce((accum, damageKey) =>
      {
         const damageCard = AA.Selector.damageCard(damageKey);

         for (let i = 0; i < damageCard.amount; i++)
         {
            count++;
            const damageInstance = createDamage(count, damageKey);
            accum[damageInstance.id] = damageInstance;
         }
         return accum;
      },
      {});

      const damageDeck = Object.values(damageInstances).map(damage => damage.id);

      // Shuffle.
      damageDeck.sort(() => Math.random() - 0.5);

      return (
      {
         damageInstances: damageInstances,
         damageDeck: damageDeck
      });
   };

   function createDamage(id, damageKey)
   {
      return AS.DamageState.create(
      {
         id: id,
         damageKey: damageKey
      });
   }

   Object.freeze(DamageDeck);

   const DiceValue = AA.DiceValue;

   const DiceUtilities = {};

   DiceUtilities.rollDice = (
   {
      black = 0,
      blue = 0,
      red = 0
   }) =>
   {
      let answer = [];

      answer = R.concat(answer, myRollDice(rollRandomBlackValue)(black));
      answer = R.concat(answer, myRollDice(rollRandomBlueValue)(blue));
      answer = R.concat(answer, myRollDice(rollRandomRedValue)(red));

      return answer;
   };

   ////////////////////////////////////////////////////////////////////////////////
   const myRollDice = valueFunction => count =>
   {
      const answer = [];

      for (let i = 0; i < count; i++)
      {
         answer.push(valueFunction());
      }

      return Immutable(answer);
   };

   const rollRandomBlackValue = () =>
   {
      const min = 1;
      const max = 8;
      const roll = Math.floor(Math.random() * (max - min + 1)) + min;
      let answer;

      // There are 4x hit, 2x (hit + critical hit), and 2x blank.
      switch (roll)
      {
         case 1:
         case 4:
         case 7:
         case 8:
            answer = DiceValue.BLACK_HIT;
            break;
         case 2:
         case 5:
            answer = DiceValue.BLACK_HIT_CRITICAL;
            break;
         case 3:
         case 6:
            answer = DiceValue.BLACK_BLANK;
            break;
         default:
            throw "Unsupported roll: " + roll;
      }

      return answer;
   };

   const rollRandomBlueValue = () =>
   {
      const min = 1;
      const max = 8;
      const roll = Math.floor(Math.random() * (max - min + 1)) + min;
      let answer;

      // There are 4x hit, 2x critical hit, and 2x accuracy.
      switch (roll)
      {
         case 1:
         case 4:
         case 7:
         case 8:
            answer = DiceValue.BLUE_HIT;
            break;
         case 2:
         case 5:
            answer = DiceValue.BLUE_CRITICAL;
            break;
         case 3:
         case 6:
            answer = DiceValue.BLUE_ACCURACY;
            break;
         default:
            throw "Unsupported roll: " + roll;
      }

      return answer;
   };

   const rollRandomRedValue = () =>
   {
      const min = 1;
      const max = 8;
      const roll = Math.floor(Math.random() * (max - min + 1)) + min;
      let answer;

      // There are 2x hit, 1x double hit, 2x critical hit, 1x accuracy, and 2x blank.
      switch (roll)
      {
         case 1:
         case 6:
            answer = DiceValue.RED_HIT;
            break;
         case 2:
            answer = DiceValue.RED_HIT_HIT;
            break;
         case 3:
         case 7:
            answer = DiceValue.RED_CRITICAL;
            break;
         case 4:
            answer = DiceValue.RED_ACCURACY;
            break;
         case 5:
         case 8:
            answer = DiceValue.RED_BLANK;
            break;
         default:
            throw "Unsupported roll: " + roll;
      }

      return answer;
   };

   Object.freeze(DiceUtilities);

   // import ShipUtils from "./ShipUtilities.js";

   const ActionCreator$7 = AS.ActionCreator;

   const SC = AA.ShipCard;
   const SQC = AA.SquadronCard;
   const UC = AA.UpgradeCard;

   const FleetBuilder = {};

   FleetBuilder.build = function(store, name, year, description, fleetId, shipAndUpgradeKeys, squadronKeys)
   {
      const reducerFunction1 = processShipKey(store);
      const shipIds = shipAndUpgradeKeys.reduce(reducerFunction1, []);
      const reducerFunction2 = processSquadronKey(store);
      const squadronIds = squadronKeys.reduce(reducerFunction2, []);
      const points = computePoints(shipAndUpgradeKeys, squadronKeys);

      const answer = AS.FleetState.create(
      {
         id: fleetId,
         name: name,
         year: year,
         description: description,
         points: points,
         ships: shipIds,
         squadrons: squadronIds
      });

      store.dispatch(ActionCreator$7.setFleetInstance(answer));
      store.dispatch(ActionCreator$7.setFleetShips(fleetId, shipIds));
      store.dispatch(ActionCreator$7.setFleetSquadrons(fleetId, squadronIds));

      return answer;
   };

   FleetBuilder.buildCoreSetImperial = function(store, fleetId)
   {
      const name = "Galactic Empire Core Set: 175 Points";
      const year = 2015;
      const description = "Victory II, Howlrunner, TIE Fighters x3";
      const shipAndUpgradeKeys = [
         {
            shipKey: SC.VICTORY_II_CLASS_STAR_DESTROYER,
            upgradeKeys: [UC.GRAND_MOFF_TARKIN, UC.DOMINATOR]
         }];
      const squadronKeys = [SQC.HOWLRUNNER, SQC.TIE_FIGHTER_SQUADRON, SQC.TIE_FIGHTER_SQUADRON, SQC.TIE_FIGHTER_SQUADRON];

      return FleetBuilder.build(store, name, year, description, fleetId, shipAndUpgradeKeys, squadronKeys);
   };

   FleetBuilder.buildCoreSetRebel = function(store, fleetId)
   {
      const name = "Rebel Alliance Core Set: 173 Points";
      const year = 2015;
      const description = "Nebulon-B Escort, CR90, Luke Skywalker, X-wings x2";
      const shipAndUpgradeKeys = [
         {
            shipKey: SC.NEBULON_B_ESCORT_FRIGATE,
            upgradeKeys: [UC.GENERAL_DODONNA]
         },
         {
            shipKey: SC.CR90_CORVETTE_A,
            upgradeKeys: [UC.DODONNAS_PRIDE]
         }];
      const squadronKeys = [SQC.LUKE_SKYWALKER, SQC.X_WING_SQUADRON, SQC.X_WING_SQUADRON];

      return FleetBuilder.build(store, name, year, description, fleetId, shipAndUpgradeKeys, squadronKeys);
   };

   const computePoints = (shipAndUpgradeKeys, squadronKeys) =>
   {
      const upgradeReducer = (accumulator, upgradeKey) =>
      {
         const upgrade = AA.Selector.upgradeCard(upgradeKey);
         return accumulator + (upgrade !== undefined ? upgrade.points : 0);
      };
      const reducerFunction1 = (accumulator, element) =>
      {
         const shipPoints = AA.Selector.shipCard(element.shipKey).points;
         const upgradePoints = R.reduce(upgradeReducer, 0, R.defaultTo([], element.upgradeKeys));
         return accumulator + shipPoints + upgradePoints;
      };
      const reducerFunction2 = (accumulator, squadronKey) =>
      {
         const squadronPoints = AA.Selector.squadronCard(squadronKey).points;
         return accumulator + squadronPoints;
      };

      return R.reduce(reducerFunction1, 0, shipAndUpgradeKeys) + R.reduce(reducerFunction2, 0, squadronKeys);
   };

   const createShip = (store, shipKey) =>
   {
      // Side effects.
      const shipId = AS.Selector.nextShipId(store.getState());

      return AS.ShipState.create(
      {
         id: shipId,
         shipKey: shipKey
      });
   };

   const createSquadron = (store, squadronKey) =>
   {
      // Side effects.
      const squadronId = AS.Selector.nextSquadronId(store.getState());

      return AS.SquadronState.create(
      {
         id: squadronId,
         squadronKey: squadronKey
      });
   };

   const createUpgrade = (store, upgradeKey) =>
   {
      // Side effects.
      const upgradeId = AS.Selector.nextUpgradeId(store.getState());

      return AS.UpgradeState.create(
      {
         id: upgradeId,
         upgradeKey: upgradeKey
      });
   };

   const processShipKey = store => (accumulator, shipObj) =>
   {
      const shipKey = shipObj.shipKey;
      const upgradeKeys = R.defaultTo([], shipObj.upgradeKeys);
      const reducerFunction = processUpgradeKey(store);
      const upgradeIds = R.reduce(reducerFunction, [], upgradeKeys);
      // const tokenCounts = R.assoc("shield", ShipUtils.statValue("shields", shipKey), AS.TokenCountsState.create());

      // Side effects.
      const ship = createShip(store, shipKey);
      store.dispatch(ActionCreator$7.setShipInstance(ship));
      // store.dispatch(ActionCreator.setShipTokenCounts(ship.id, tokenCounts));
      store.dispatch(ActionCreator$7.setShipUpgrades(ship.id, upgradeIds));

      return R.append(ship.id, accumulator);
   };

   const processSquadronKey = store => (accumulator, squadronKey) =>
   {
      // const tokenCounts = R.assoc("shield", ShipUtils.statValue("shields", squadronKey), AS.TokenCountsState.create());

      // Side effects.
      const squadron = createSquadron(store, squadronKey);
      store.dispatch(ActionCreator$7.setSquadronInstance(squadron));
      // store.dispatch(ActionCreator.setSquadronTokenCounts(squadron.id, tokenCounts));

      return R.append(squadron.id, accumulator);
   };

   const processUpgradeKey = store => (accumulator, upgradeKey) =>
   {
      const tokenCounts = AS.TokenCountsState.create();

      // Side effects.
      const upgrade = createUpgrade(store, upgradeKey);
      store.dispatch(ActionCreator$7.setUpgradeInstance(upgrade));
      store.dispatch(ActionCreator$7.setUpgradeTokenCounts(upgrade.id, tokenCounts));

      return R.append(upgrade.id, accumulator);
   };

   Object.freeze(FleetBuilder);

   exports.AgentQueryType = AgentQueryType;
   exports.ArmadaModel = ArmadaModel;
   exports.CommandTask = CommandTask;
   exports.DamageDeck = DamageDeck;
   exports.DiceUtilities = DiceUtilities;
   exports.FleetBuilder = FleetBuilder;
   exports.SetupTask = SetupTask;
   exports.ShipTask = ShipTask;
   exports.SquadronTask = SquadronTask;
   exports.StatusTask = StatusTask;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
