import FactionUI from './FactionUI.js';
import ReactUtilities from '../ReactUtilities.js';

const values = AA.EnumUtilities.values(AA.Faction);
const className = 'ba b--silver bg-near-white f6 pa1 tl';
const rows = [];

values.forEach(faction => {
  const image0 = React.createElement(FactionUI, {
    faction,
  });
  const image1 = React.createElement(FactionUI, {
    faction,
    showLabel: true,
  });
  const image2 = React.createElement(FactionUI, {
    faction,
    isSmall: true,
  });
  const image3 = React.createElement(FactionUI, {
    faction,
    isSmall: true,
    showLabel: true,
  });

  const cell0 = ReactUtilities.createCell(image0, 'standard', className);
  const cell1 = ReactUtilities.createCell(image1, 'standard+name', className);
  const cell2 = ReactUtilities.createCell(image2, 'small', className);
  const cell3 = ReactUtilities.createCell(image3, 'small+name', className);
  const cells = [cell0, cell1, cell2, cell3];

  rows.push(ReactUtilities.createRow(cells, rows.length));
});

ReactDOM.render(ReactUtilities.createTable(rows), document.getElementById('panel'));
