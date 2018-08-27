import CardInstanceUI from './CardInstanceUI.js';
import ReactUtilities from '../ReactUtilities.js';

class FleetCardsUI extends React.PureComponent {
  render() {
    const {
      shipInstances,
      squadronInstances,
      shipToDamages,
      shipToDefenseInstances,
      shipToTokenCounts,
      shipToUpgrades,
    } = this.props;

    let i = 0;
    const mapFunction0 = shipInstance => {
      const element = React.createElement(CardInstanceUI, {
        cardInstance: shipInstance,
        damageInstances: shipToDamages[shipInstance.id],
        defenseInstances: shipToDefenseInstances[shipInstance.id],
        tokenCounts: shipToTokenCounts[shipInstance.id],
        upgradeInstances: shipToUpgrades[shipInstance.id],
      });

      i += 1;

      return ReactUtilities.createCell(element, `shipCell${i}`, 'alignTop v-top');
    };
    const shipCells = R.map(mapFunction0, shipInstances);

    let j = 0;
    const mapFunction1 = squadronInstance => {
      const element = React.createElement(CardInstanceUI, {
        cardInstance: squadronInstance,
      });

      j += 1;

      return ReactUtilities.createCell(element, `squadronCell${j}`, 'alignTop v-top');
    };
    const squadronCells = R.map(mapFunction1, squadronInstances);

    const cells = R.concat(shipCells, squadronCells);
    const row = ReactUtilities.createRow(cells, 'fleetCardsUIRow');

    return ReactUtilities.createTable(row, 'fleetCardsUITable', 'center');
  }
}

FleetCardsUI.propTypes = {
  shipInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.ShipState)).isRequired,
  squadronInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.SquadronState)).isRequired,

  shipToDamages: PropTypes.shape(),
  shipToDefenseInstances: PropTypes.shape(),
  shipToTokenCounts: PropTypes.shape(),
  shipToUpgrades: PropTypes.shape(),
};

FleetCardsUI.defaultProps = {
  shipToDamages: {},
  shipToDefenseInstances: {},
  shipToTokenCounts: {},
  shipToUpgrades: {},
};

export default FleetCardsUI;
