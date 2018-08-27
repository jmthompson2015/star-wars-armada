import TestData from '../TestData.js';

import CardInstanceUI from './CardInstanceUI.js';

const cells = [];

const store = TestData.createStore();
const gameState = store.getState();

const shipInstance1 = AS.Selector.shipInstance(1, gameState);

const upgradeInstances1 = R.map(
  id => AS.Selector.upgradeInstance(id, gameState),
  shipInstance1.upgrades,
);
const criticalInstances1 = R.map(
  id => AS.Selector.criticalInstance(id, gameState),
  shipInstance1.criticals,
);

const defenseKeys = R.map(
  value => value.key,
  AA.Selector.defenseTokenValuesByShip(shipInstance1.shipKey),
);
let j = 0;
const mapFunction = key => {
  j += 1;
  return AS.DefenseTokenState.create({
    id: j,
    defenseTokenKey: key,
    isReady: j % 2 === 1,
  });
};
const defenseInstances1 = R.map(mapFunction, defenseKeys);

const tokenCounts1 = AS.TokenCountsState.create({
  navigate: 1,
  squadron: 2,
  repair: 3,
  concentrateFire: 4,
});

function addCardInstanceUI(
  cells0,
  cardInstance,
  defenseInstances,
  tokenCounts,
  upgradeInstances,
  damageInstances,
) {
  const element = React.createElement(CardInstanceUI, {
    cardInstance,
    damageInstances,
    defenseInstances,
    tokenCounts,
    upgradeInstances,
  });

  cells0.push(
    ReactDOMFactories.div(
      {
        key: `card${cells0.length}`,
        className: 'v-top',
      },
      element,
    ),
  );
}

addCardInstanceUI(
  cells,
  shipInstance1,
  defenseInstances1,
  tokenCounts1,
  upgradeInstances1,
  criticalInstances1,
);

ReactDOM.render(ReactDOMFactories.div({}, cells), document.getElementById('panel'));
