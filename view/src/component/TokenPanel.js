import ReactUtilities from '../ReactUtilities.js';

import CommandUI from './CommandUI.js';
import DefenseTokenUI from './DefenseTokenUI.js';

const addDefenseToken = (rows, defenseInstance) => {
  const icon = React.createElement(DefenseTokenUI, {
    defenseInstance,
  });

  const labeledImage = ReactDOMFactories.span(
    {
      className: 'center tc v-mid w-100',
    },
    icon,
  );

  rows.push(ReactUtilities.createFlexbox(labeledImage, `defenseRow${rows.length}`, 'tc v-mid'));
};

const comparator = (a, b) => a.sortOrder - b.sortOrder;

const maybeAddCommandToken = (rows, command, count) => {
  if (count !== undefined && count !== 0) {
    const icon = React.createElement(CommandUI, {
      command,
    });

    const labeledImage = ReactDOMFactories.span(
      {
        className: 'center tc v-mid',
      },
      icon,
      count,
    );

    rows.push(ReactUtilities.createFlexbox(labeledImage, `tokenRow${rows.length}`, 'tc v-mid'));
  }
};

class TokenPanel extends React.PureComponent {
  render() {
    const { defenseInstances, tokenCounts } = this.props;

    const rows = [];
    const commands = AA.Selector.enumValues(AA.Command).sort(comparator);

    commands.forEach(command => {
      maybeAddCommandToken(rows, command, tokenCounts[command.key]);
    });

    defenseInstances.forEach(defenseInstance => {
      addDefenseToken(rows, defenseInstance);
    });

    return ReactUtilities.createFlexboxWrap(
      rows,
      'tokenPanel',
      'bg-white center content-center flex-column justify-center tc',
    );
  }
}

TokenPanel.propTypes = {
  defenseInstances: PropTypes.shape(),
  tokenCounts: PropTypes.shape(),
};

TokenPanel.defaultProps = {
  defenseInstances: [],
  tokenCounts: {},
};

export default TokenPanel;
