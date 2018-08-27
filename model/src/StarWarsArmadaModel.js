import CommandTask from './CommandTask.js';
import SetupTask from './SetupTask.js';
import ShipTask from './ShipTask.js';
import SquadronTask from './SquadronTask.js';
import StatusTask from './StatusTask.js';

const { ActionCreator, Reducer } = AS;

const StarWarsArmadaModel = {};

// /////////////////////////////////////////////////////////////////////////////////////////////////
const determineWinner = state => {
  const shipCount1 = AS.Selector.shipCountByAgent(1, state);
  const shipCount2 = AS.Selector.shipCountByAgent(2, state);

  let answer;

  if (shipCount1 > 0 && shipCount2 === 0) {
    answer = 1;
  } else if (shipCount1 === 0 && shipCount2 > 0) {
    answer = 2;
  }

  return answer;
};

const isGameOver = state => {
  const round = AS.Selector.round(state);
  const shipCount1 = AS.Selector.shipCountByAgent(1, state);
  const shipCount2 = AS.Selector.shipCountByAgent(2, state);

  return round > 6 || shipCount1 === 0 || shipCount2 === 0;
};

const processGameOver = store => {
  const winner = determineWinner(store.getState());
  store.dispatch(ActionCreator.setGameOver(winner));

  const message = winner === undefined ? 'Game is a draw.' : `${winner.name()} won! `;
  store.dispatch(ActionCreator.setUserMessage(message));
};

StarWarsArmadaModel.nextGameState = ({ gameState }) => {
  // Initialize.
  const store = Redux.createStore(Reducer.root, gameState);
  let answer;

  if (isGameOver(store.getState())) {
    answer = new Promise(resolve => {
      processGameOver(store);
      resolve(store);
    });
  } else {
    const { phaseKey } = gameState;
    let taskClass;

    if (phaseKey === 'setup') {
      taskClass = SetupTask;
    } else if (phaseKey.startsWith('command')) {
      taskClass = CommandTask;
    } else if (phaseKey.startsWith('ship')) {
      taskClass = ShipTask;
    } else if (phaseKey.startsWith('squadron')) {
      taskClass = SquadronTask;
    } else if (phaseKey.startsWith('status')) {
      taskClass = StatusTask;
    }

    answer = taskClass.doIt(store);
  }

  return answer;
};

Object.freeze(StarWarsArmadaModel);

export default StarWarsArmadaModel;
