import StrategyResolver from "./StrategyResolver.js";

const ActionCreator = AS.ActionCreator;

const StarWarsArmadaApp = {};

StarWarsArmadaApp.initialize = () =>
{
   const store = createStore();
   StarWarsArmadaApp.drawView(store);
};

StarWarsArmadaApp.drawView = store =>
{
   AV.StarWarsArmadaView.drawView(
   {
      gameState: store.getState(),
      document: document,
      resourceBase: LOCAL_RESOURCE
   });

   // TEMP
   if (store.getState().round > 2)
   {
      console.log("StarWarsArmadaApp.drawView() round = " + store.getState().round + ". Stopping.");
      return;
   }
   // TEMP

   setTimeout(() => StarWarsArmadaApp.nextGameState(store), DELAY);
};

StarWarsArmadaApp.nextGameState = store =>
{
   const agentQuery = store.getState().agentQuery;

   if (agentQuery !== undefined)
   {
      if (agentQuery.queryKey === AM.AgentQueryType.CHOOSE_COMMANDS)
      {
         chooseCommands(store);
         return;
      }
      // else if (agentQuery.queryKey === AM.AgentQueryType.CHOOSE_SHIP_ACTION)
      // {
      //    chooseShipAction(store);
      //    return;
      // }
      // else if (agentQuery.queryKey === AM.AgentQueryType.CHOOSE_WEAPON_AND_DEFENDER)
      // {
      //    chooseWeaponAndDefender(store);
      //    return;
      // }
      // else if (agentQuery.queryKey === AM.AgentQueryType.CHOOSE_ATTACK_DICE_MODIFICATION)
      // {
      //    chooseAttackDiceModification(store);
      //    return;
      // }
      // else if (agentQuery.queryKey === AM.AgentQueryType.CHOOSE_DEFENSE_DICE_MODIFICATION)
      // {
      //    chooseDefenseDiceModification(store);
      //    return;
      // }
      // else if (agentQuery.queryKey === AM.AgentQueryType.NOTIFY_DAMAGE)
      // {
      //    notifyDamage(store);
      //    return;
      // }
   }

   const callback = store => StarWarsArmadaApp.drawView(store);
   AM.StarWarsArmadaModel.nextGameState(
   {
      gameState: store.getState()
   }).then(callback);
};

////////////////////////////////////////////////////////////////////////////////
const DELAY = 500;

const LOCAL_RESOURCE = "../../view/resource/";

const chooseCommands = store =>
{
   const agentQuery = store.getState().agentQuery;
   const agentId = agentQuery.agentId;
   const agentInstance = AS.Selector.agentInstance(agentQuery.agentId, store.getState());
   const fleetId = agentInstance.fleet;
   const strategy = StrategyResolver.resolveStrategy(agentInstance.strategy);

   const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, store.getState());
   const shipToValidCommands = agentQuery.payload.shipToValidCommands;
   const inputAreaId = determineInputArea(agentId, store.getState());

   strategy.chooseCommands(shipInstances, shipToValidCommands, inputAreaId).then(shipToCommand =>
   {
      const agentResponse = AS.AgentResponseState.create(
      {
         agentId: agentId,
         responseKey: AM.AgentQueryType.CHOOSE_COMMANDS,
         payload:
         {
            shipToCommand: shipToCommand
         }
      });

      store.dispatch(AS.ActionCreator.clearAgentQuery());
      store.dispatch(AS.ActionCreator.setAgentResponse(agentResponse));
      const callback = store => StarWarsArmadaApp.drawView(store);
      AM.StarWarsArmadaModel.nextGameState(
      {
         gameState: store.getState()
      }).then(callback);
   });
};

const createStore = () =>
{
   const width = 1830;
   const store = Redux.createStore(AS.Reducer.root);

   const damageObj = AM.DamageDeck.create();
   store.dispatch(ActionCreator.setDamageInstances(damageObj.damageInstances));
   store.dispatch(ActionCreator.setDamageDeck(damageObj.damageDeck));

   const squadronPosition1 = createPosition(Math.round(width / 2 - 200), 52, 90);
   const squadronPosition2 = createPosition(Math.round(width / 2 - 100), 52, 90);
   const shipPosition1 = createPosition(Math.round(width / 2), 52, 90);
   const squadronPosition3 = createPosition(Math.round(width / 2 + 100), 52, 90);
   const squadronPosition4 = createPosition(Math.round(width / 2 + 200), 52, 90);

   const squadronPosition5 = createPosition(Math.round(width / 2 - 200), 915 - 37, 270);
   const shipPosition2 = createPosition(Math.round(width / 2 - 100), 915 - 37, 270);
   const squadronPosition6 = createPosition(Math.round(width / 2), 915 - 37, 270);
   const shipPosition3 = createPosition(Math.round(width / 2 + 100), 915 - 37, 270);
   const squadronPosition7 = createPosition(Math.round(width / 2 + 200), 915 - 37, 270);

   AM.FleetBuilder.buildCoreSetImperial(store, 1);
   AM.FleetBuilder.buildCoreSetRebel(store, 2);

   store.dispatch(ActionCreator.moveShip(1, shipPosition1));
   store.dispatch(ActionCreator.moveShip(2, shipPosition2));
   store.dispatch(ActionCreator.moveShip(3, shipPosition3));

   store.dispatch(ActionCreator.moveSquadron(1, squadronPosition1));
   store.dispatch(ActionCreator.moveSquadron(2, squadronPosition2));
   store.dispatch(ActionCreator.moveSquadron(3, squadronPosition3));
   store.dispatch(ActionCreator.moveSquadron(4, squadronPosition4));
   store.dispatch(ActionCreator.moveSquadron(5, squadronPosition5));
   store.dispatch(ActionCreator.moveSquadron(6, squadronPosition6));
   store.dispatch(ActionCreator.moveSquadron(7, squadronPosition7));

   store.dispatch(ActionCreator.setAgentInstance(createAgentImperial(1, 1)));
   store.dispatch(ActionCreator.setAgentInstance(createAgentRebel(2, 2)));

   store.dispatch(ActionCreator.incrementRound());

   // console.log("StarWarsArmadaApp.createGameState() gameState = \n" + JSON.stringify(store.getState(), null, "   "));

   return store;
};

const createAgentImperial = function(id, fleetId, strategy)
{
   return AS.AgentState.create(
   {
      id: id,
      name: "Imperial Agent",
      strategy: strategy,
      fleet: fleetId
   });
};

const createAgentRebel = function(id, fleetId, strategy)
{
   return AS.AgentState.create(
   {
      id: id,
      name: "Rebel Agent",
      strategy: strategy,
      fleet: fleetId
   });
};

const createPosition = function(x, y, heading)
{
   return AS.PositionState.create(
   {
      x: x,
      y: y,
      heading: heading
   });
};

const determineInputArea = (agentId, state) =>
{
   const agentIds = R.map(agent => agent.id, AS.Selector.agentInstances(state));
   const agentIndex = agentIds.indexOf(agentId);

   return "agentInputArea" + (agentIndex + 1);
};

StarWarsArmadaApp.initialize();

Object.freeze(StarWarsArmadaApp);

export default StarWarsArmadaApp;