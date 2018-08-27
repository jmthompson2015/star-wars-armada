import TokenPanel from './TokenPanel.js';

const tokenCounts = {
  navigate: 1,
  squadron: 2,
  repair: 3,
  concentrateFire: 4,
};

const defenseKeys = AA.Selector.enumKeys(AA.DefenseToken);
let j = 0;
const defenseInstances = R.map(key => {
  j += 1;
  return AS.DefenseTokenState.create({
    id: j,
    defenseTokenKey: key,
    isReady: j % 2 === 1,
  });
}, defenseKeys);

const element = React.createElement(TokenPanel, {
  defenseInstances,
  tokenCounts,
});

ReactDOM.render(element, document.getElementById('panel'));
