import TokenPanel from "./TokenPanel.js";

let i = 1;
const tokenCounts = {
   navigate: i++,
   squadron: i++,
   repair: i++,
   concentrateFire: i++
};

const defenseKeys = AA.Selector.enumKeys(AA.DefenseToken);
let j = 0;
const defenseInstances = R.map(key => AS.DefenseTokenState.create(
{
   id: j++,
   defenseTokenKey: key,
   isReady: (j % 2 === 1)
}), defenseKeys);

const element = React.createElement(TokenPanel,
{
   defenseInstances: defenseInstances,
   tokenCounts: tokenCounts
});

ReactDOM.render(element, document.getElementById("panel"));