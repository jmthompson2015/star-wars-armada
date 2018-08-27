import ReactUtilities from '../ReactUtilities.js';
import UpgradeSlotUI from './UpgradeSlotUI.js';

const values = AA.EnumUtilities.values(AA.UpgradeSlot);
const className = 'ba b--silver bg-near-white f6 pa1 tl';
const rows = [];

values.forEach(upgradeSlot => {
  const image0 = React.createElement(UpgradeSlotUI, {
    upgradeSlot,
  });
  const image1 = React.createElement(UpgradeSlotUI, {
    upgradeSlot,
    showLabel: true,
  });
  const image2 = React.createElement(UpgradeSlotUI, {
    upgradeSlot,
    isSmall: true,
  });
  const image3 = React.createElement(UpgradeSlotUI, {
    upgradeSlot,
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
