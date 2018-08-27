import ReactUtils from '../ReactUtilities.js';

import CommandUI from './CommandUI.js';

const labelFunction = command =>
  React.createElement(CommandUI, {
    command,
    isSmall: true,
    showLabel: true,
    title: command.text,
  });

class CommandChooser extends React.Component {
  constructor(props) {
    super(props);

    const { initialCommand } = this.props;

    this.state = {
      selected: initialCommand,
    };

    this.handleChange = this.handleChangeFunction.bind(this);
  }

  handleChangeFunction(event) {
    const { commands, onChange } = this.props;

    const { id } = event.target;
    const selected = commands[id];

    this.setState(
      {
        selected,
      },
      onChange(selected),
    );
  }

  render() {
    const { clientProps, commands, panelClass } = this.props;

    const inputProps = R.merge(
      {
        name: 'chooseCommand', // needed for radio
        onChange: this.handleChange,
        type: 'radio',
      },
      clientProps,
    );

    let i = 0;
    const { selected } = this.state;
    const mapFunction = command => {
      const input = ReactDOMFactories.input(
        R.merge(inputProps, {
          id: i,
          defaultChecked: command === selected,
        }),
      );
      const label = labelFunction(command);
      const cells = [];
      cells.push(ReactUtils.createCell(input, cells.length, 'pa1 v-mid'));
      cells.push(ReactUtils.createCell(label, cells.length, 'pa1 v-mid'));
      i += 1;

      return ReactUtils.createRow(cells, `row${command.sourceName}${command.sourceKey}${i}`);
    };
    const rows = R.map(mapFunction, commands);

    return ReactUtils.createTable(rows, undefined, panelClass);
  }
}

CommandChooser.propTypes = {
  onChange: PropTypes.func.isRequired,
  commands: PropTypes.arrayOf(PropTypes.instanceOf(AA.Command)).isRequired,

  clientProps: PropTypes.shape(),
  initialCommand: PropTypes.shape(),
  panelClass: PropTypes.string,
};

CommandChooser.defaultProps = {
  clientProps: {},
  initialCommand: undefined,
  panelClass: 'bg-xw-light f6',
};

export default CommandChooser;
