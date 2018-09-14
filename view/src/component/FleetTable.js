import ReactUtils from "../ReactUtilities.js";

import FactionUI from "./FactionUI.js";
import UpgradeSlotUI from "./UpgradeSlotUI.js";

const NUMBER_CLASS = "ba pa1 tr";
const TEXT_CLASS = "ba pa1 tl";

const computeShipAttack = shipCard => {
  const reduceFunction1 = (accum, attackArray) => R.sum(attackArray) + accum;

  return R.reduce(reduceFunction1, 0, Object.values(shipCard.attack));
};

const computeShipShield = shipCard => R.sum(Object.values(shipCard.shield));

const computeSquadronAttack = squadronCard => R.sum(Object.values(squadronCard.attack));

const createFooterRow = (ships, shipToUpgrades, squadrons) => {
  const mapFunction1 = ship => AA.Selector.shipCard(ship.shipKey);
  const shipCards = R.map(mapFunction1, ships);
  const attack1 = R.sum(R.map(computeShipAttack, shipCards));
  const hull1 = R.sum(R.map(R.prop("hull"), shipCards));
  const shield1 = R.sum(R.map(computeShipShield, shipCards));
  const points1 = R.sum(R.map(R.prop("points"), shipCards));

  const mapFunction2 = upgrade => AA.Selector.upgradeCard(upgrade.upgradeKey);
  const mapFunction22 = R.map(mapFunction2);
  const reduceFunction2 = (accum, ship) => R.concat(mapFunction22(shipToUpgrades[ship.id]), accum);
  const upgradeCards = R.reduce(reduceFunction2, [], ships);
  const points2 = R.sum(R.map(R.prop("points"), upgradeCards));

  const mapFunction3 = squadron => AA.Selector.squadronCard(squadron.squadronKey);
  const squadronCards = R.map(mapFunction3, squadrons);
  const attack3 = R.sum(R.map(computeSquadronAttack, squadronCards));
  const hull3 = R.sum(R.map(R.prop("hull"), squadronCards));
  const points3 = R.sum(R.map(R.prop("points"), squadronCards));

  const className = `b--black ${NUMBER_CLASS}`;
  const cells = [
    ReactUtils.createCell("Totals", "nameCell", className),
    ReactUtils.createCell(attack1 + attack3, "attackCell", className),
    ReactUtils.createCell(hull1 + hull3, "hullCell", className),
    ReactUtils.createCell(shield1, "shieldCell", className),
    ReactUtils.createCell(points1 + points2 + points3, "pointsCell", className)
  ];
  return ReactUtils.createRow(cells, "footerRow", "bg-xw-dark white");
};

const createHeaderRow = () => {
  const className = "b--black ba pa1";
  const cells = [
    ReactUtils.createCell("Ship / Squadron", "nameCell", className),
    ReactUtils.createCell("Attack", "attackCell", className),
    ReactUtils.createCell("Hull", "hullCell", className),
    ReactUtils.createCell("Shield", "shieldCell", className),
    ReactUtils.createCell("Points", "pointsCell", className)
  ];
  return ReactUtils.createRow(cells, "headerRow", "b bg-xw-dark tc white");
};

const createShipRow = ship => {
  const shipCard = AA.Selector.shipCard(ship.shipKey);
  const faction = AA.Selector.factionValueByShip(ship.shipKey);
  const factionUI = React.createElement(FactionUI, { faction, isSmall: true });
  const imageWithLabelUI = ReactDOMFactories.span({}, factionUI, " ", shipCard.name);
  const cells = [
    ReactUtils.createCell(imageWithLabelUI, "nameCell", TEXT_CLASS),
    ReactUtils.createCell(computeShipAttack(shipCard), "attackCell", NUMBER_CLASS),
    ReactUtils.createCell(shipCard.hull, "hullCell", NUMBER_CLASS),
    ReactUtils.createCell(computeShipShield(shipCard), "shieldCell", NUMBER_CLASS),
    ReactUtils.createCell(shipCard.points, "pointsCell", NUMBER_CLASS)
  ];
  const key = `shipRow${ship.id}`;

  return ReactUtils.createRow(cells, key, "bg-xw-medium");
};

const createSquadronRow = squadron => {
  const squadronCard = AA.Selector.squadronCard(squadron.squadronKey);
  const faction = AA.Selector.factionValueBySquadron(squadron.squadronKey);
  const factionUI = React.createElement(FactionUI, { faction, isSmall: true });
  const imageWithLabelUI = ReactDOMFactories.span({}, factionUI, " ", squadronCard.name);
  const cells = [
    ReactUtils.createCell(imageWithLabelUI, "nameCell", TEXT_CLASS),
    ReactUtils.createCell(computeSquadronAttack(squadronCard), "attackCell", NUMBER_CLASS),
    ReactUtils.createCell(squadronCard.hull, "hullCell", NUMBER_CLASS),
    ReactUtils.createCell("", "shieldCell", NUMBER_CLASS),
    ReactUtils.createCell(squadronCard.points, "pointsCell", NUMBER_CLASS)
  ];
  const key = `squadronRow${squadron.id}`;

  return ReactUtils.createRow(cells, key, "bg-xw-medium", { title: squadronCard.text });
};

const createUpgradeRows = (upgradeInstances, key) =>
  R.map(upgrade => {
    const upgradeCard = AA.Selector.upgradeCard(upgrade.upgradeKey);
    const upgradeSlotKeys = AA.Selector.upgradeSlotKeysByUpgrade(upgrade.upgradeKey);
    const upgradeSlot = AA.Selector.upgradeSlot(upgradeSlotKeys[0]);
    const upgradeSlotUI = React.createElement(UpgradeSlotUI, { upgradeSlot, isSmall: true });
    const imageWithLabelUI = ReactDOMFactories.span({}, upgradeSlotUI, " ", upgradeCard.name);
    const cells = [
      ReactUtils.createCell(imageWithLabelUI, "nameCell", TEXT_CLASS),
      ReactUtils.createCell("", "attackCell", NUMBER_CLASS),
      ReactUtils.createCell("", "hullCell", NUMBER_CLASS),
      ReactUtils.createCell("", "shieldCell", NUMBER_CLASS),
      ReactUtils.createCell(upgradeCard.points, "pointsCell", NUMBER_CLASS)
    ];

    return ReactUtils.createRow(cells, key + upgrade.id, "", { title: upgradeCard.text });
  }, upgradeInstances);

// /////////////////////////////////////////////////////////////////////////////////////////////////
class FleetTable extends React.PureComponent {
  render() {
    const { shipInstances, shipToUpgrades, squadronInstances } = this.props;

    const reduceFunction1 = (accum, ship) => {
      const myRows = R.append(createShipRow(ship), accum);
      const key = `upgradeRow${ship.id}`;
      return R.append(createUpgradeRows(shipToUpgrades[ship.id], key), myRows);
    };
    const rows1 = R.reduce(reduceFunction1, [], shipInstances);

    const reduceFunction2 = (accum, squadron) => R.append(createSquadronRow(squadron), accum);
    const rows2 = R.reduce(reduceFunction2, [], squadronInstances);

    const headerRow = createHeaderRow();
    const footerRow = createFooterRow(shipInstances, shipToUpgrades, squadronInstances);
    const rows = R.concat([headerRow], R.concat(rows1, R.concat(rows2, [footerRow])));

    return ReactUtils.createTable(rows, "fleetTable", "ba b--black bg-xw-light collapse fl f6");
  }
}

FleetTable.propTypes = {
  shipInstances: PropTypes.arrayOf().isRequired,
  shipToUpgrades: PropTypes.shape().isRequired,
  squadronInstances: PropTypes.arrayOf().isRequired
};

FleetTable.defaultProps = {};

export default FleetTable;
