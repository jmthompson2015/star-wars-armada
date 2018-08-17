(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AM = {})));
}(this, (function (exports) { 'use strict';

   const DiceValue = AA.DiceValue;

   const DiceUtilities = {};

   DiceUtilities.rollDice = (
   {
      black = 0,
      blue = 0,
      red = 0
   }) =>
   {
      // const answer = {};
      //
      // answer.black = myRollDice(rollRandomBlackValue)(black);
      // answer.blue = myRollDice(rollRandomBlueValue)(blue);
      // answer.red = myRollDice(rollRandomRedValue)(red);
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
      let value;

      // There are 4x hit, 2x (hit + critical hit), and 2x blank.
      switch (roll)
      {
         case 1:
         case 4:
         case 7:
         case 8:
            value = DiceValue.HIT;
            break;
         case 2:
         case 5:
            value = DiceValue.HIT_CRITICAL_HIT;
            break;
         case 3:
         case 6:
            value = DiceValue.BLANK;
            break;
         default:
            throw "Unsupported roll: " + roll;
      }

      return {
         color: "black",
         dieKey: value
      };
   };

   const rollRandomBlueValue = () =>
   {
      const min = 1;
      const max = 8;
      const roll = Math.floor(Math.random() * (max - min + 1)) + min;
      let value;

      // There are 4x hit, 2x critical hit, and 2x accuracy.
      switch (roll)
      {
         case 1:
         case 4:
         case 7:
         case 8:
            value = DiceValue.HIT;
            break;
         case 2:
         case 5:
            value = DiceValue.CRITICAL_HIT;
            break;
         case 3:
         case 6:
            value = DiceValue.ACCURACY;
            break;
         default:
            throw "Unsupported roll: " + roll;
      }

      return {
         color: "blue",
         dieKey: value
      };
   };

   const rollRandomRedValue = () =>
   {
      const min = 1;
      const max = 8;
      const roll = Math.floor(Math.random() * (max - min + 1)) + min;
      let value;

      // There are 2x hit, 1x double hit, 2x critical hit, 1x accuracy, and 2x blank.
      switch (roll)
      {
         case 1:
         case 6:
            value = DiceValue.HIT;
            break;
         case 2:
            value = DiceValue.HIT_HIT;
            break;
         case 3:
         case 7:
            value = DiceValue.CRITICAL_HIT;
            break;
         case 4:
            value = DiceValue.ACCURACY;
            break;
         case 5:
         case 8:
            value = DiceValue.BLANK;
            break;
         default:
            throw "Unsupported roll: " + roll;
      }

      return {
         color: "red",
         dieKey: value
      };
   };

   Object.freeze(DiceUtilities);

   // import ShipUtils from "./ShipUtilities.js";

   const ActionCreator = AS.ActionCreator;

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

      store.dispatch(ActionCreator.setFleetInstance(answer));
      store.dispatch(ActionCreator.setFleetShips(fleetId, shipIds));
      store.dispatch(ActionCreator.setFleetSquadrons(fleetId, squadronIds));

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
      store.dispatch(ActionCreator.setShipInstance(ship));
      // store.dispatch(ActionCreator.setShipTokenCounts(ship.id, tokenCounts));
      store.dispatch(ActionCreator.setShipUpgrades(ship.id, upgradeIds));

      return R.append(ship.id, accumulator);
   };

   const processSquadronKey = store => (accumulator, squadronKey) =>
   {
      // const tokenCounts = R.assoc("shield", ShipUtils.statValue("shields", squadronKey), AS.TokenCountsState.create());

      // Side effects.
      const squadron = createSquadron(store, squadronKey);
      store.dispatch(ActionCreator.setSquadronInstance(squadron));
      // store.dispatch(ActionCreator.setSquadronTokenCounts(squadron.id, tokenCounts));

      return R.append(squadron.id, accumulator);
   };

   const processUpgradeKey = store => (accumulator, upgradeKey) =>
   {
      const tokenCounts = AS.TokenCountsState.create();

      // Side effects.
      const upgrade = createUpgrade(store, upgradeKey);
      store.dispatch(ActionCreator.setUpgradeInstance(upgrade));
      store.dispatch(ActionCreator.setUpgradeTokenCounts(upgrade.id, tokenCounts));

      return R.append(upgrade.id, accumulator);
   };

   Object.freeze(FleetBuilder);

   exports.DiceUtilities = DiceUtilities;
   exports.FleetBuilder = FleetBuilder;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
