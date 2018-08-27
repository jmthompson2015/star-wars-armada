import ReactUtilities from '../ReactUtilities.js';

class CardInstancesArea extends React.Component {
  constructor(props) {
    super(props);

    const { isExpanded } = this.props;

    this.state = {
      isExpanded,
    };

    this.toggleExpand = this.toggleExpandFunction.bind(this);
  }

  createCardInstanceCells() {
    const { cardInstanceUIs } = this.props;
    const { isExpanded } = this.state;

    const cells = cardInstanceUIs.map((cardInstanceUI, i) => {
      let myClassName;

      if (isExpanded || i === cardInstanceUIs.length - 1) {
        myClassName = 'dtc pa1 v-mid';
      } else if (i < cardInstanceUIs.length - 1) {
        myClassName = 'dn';
      }

      return ReactDOMFactories.div(
        {
          key: `cardCell${i}`,
          className: myClassName,
        },
        cardInstanceUI,
      );
    });

    const cell = ReactUtilities.createCell(cells);

    return ReactUtilities.createRow(cell, 'mainRow');
  }

  createLabelUI() {
    const { cardInstanceUIs, label } = this.props;

    const labelUI = ReactUtilities.createCell(label, 'labelCell', 'b tc');

    const cardCount = cardInstanceUIs.length;
    const { isExpanded } = this.state;
    let expandLabel;

    if (cardCount > 1) {
      if (isExpanded) {
        expandLabel = '\u25B6';
      } else {
        expandLabel = '\u25BC';
      }
    } else {
      expandLabel = '';
    }

    const expandControl = ReactDOMFactories.div(
      {
        key: 'expandCell',
        onClick: this.toggleExpand,
      },
      expandLabel,
    );

    const row = ReactUtilities.createRow([labelUI, expandControl], 'labelExpandRow');
    const table = ReactUtilities.createTable(row, 'labelExpandTable', 'w-100');

    const tableCell = ReactUtilities.createCell(table, 'tableCell');
    return ReactUtilities.createRow(tableCell, 'labelRow');
  }

  toggleExpandFunction() {
    const { isExpanded: isExpandedOld } = this.state;

    this.setState({
      isExpanded: !isExpandedOld,
    });
  }

  render() {
    const rows = [];

    rows.push(this.createLabelUI());
    rows.push(this.createCardInstanceCells());

    return ReactUtilities.createTable(rows, undefined);
  }
}

CardInstancesArea.propTypes = {
  cardInstanceUIs: PropTypes.arrayOf().isRequired,

  isExpanded: PropTypes.bool,
  label: PropTypes.string,
};

CardInstancesArea.defaultProps = {
  isExpanded: true,
  label: undefined,
};

export default CardInstancesArea;
