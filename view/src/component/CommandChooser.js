import ReactUtils from "../ReactUtilities.js";

import CommandUI from "./CommandUI.js";

class CommandChooser extends React.Component
{
   constructor(props)
   {
      super(props);

      this.state = {
         selected: this.props.initialCommand
      };

      this.handleChange = this.handleChangeFunction.bind(this);
   }

   render()
   {
      const
      {
         clientProps,
         commands,
         panelClass
      } = this.props;

      const inputProps = R.merge(
      {
         name: "chooseCommand", // needed for radio
         onChange: this.handleChange,
         type: "radio"
      }, clientProps);

      let i = 0;
      const selected = this.state.selected;
      const mapFunction = command =>
      {
         const input = ReactDOMFactories.input(R.merge(inputProps,
         {
            id: i,
            defaultChecked: (command === selected)
         }));
         const label = labelFunction(command);
         const cells = [];
         cells.push(ReactUtils.createCell(input, cells.length, "pa1 v-mid"));
         cells.push(ReactUtils.createCell(label, cells.length, "pa1 v-mid"));

         return ReactUtils.createRow(cells, "row" + command.sourceName + command.sourceKey + i++);
      };
      const rows = R.map(mapFunction, commands);

      return ReactUtils.createTable(rows, undefined, panelClass);
   }
}

CommandChooser.prototype.handleChangeFunction = function(event)
{
   const
   {
      commands,
      onChange
   } = this.props;

   const id = event.target.id;
   const selected = commands[id];

   this.setState(
      {
         selected: selected,
      },
      onChange(selected));
};

const labelFunction = function(command)
{
   return React.createElement(CommandUI,
   {
      command: command,
      isSmall: true,
      showLabel: true,
      title: command.text
   });
};

CommandChooser.propTypes = {
   onChange: PropTypes.func.isRequired,
   commands: PropTypes.array.isRequired,

   clientProps: PropTypes.object,
   initialCommand: PropTypes.object,
   panelClass: PropTypes.string,
};

CommandChooser.defaultProps = {
   clientProps:
   {},
   panelClass: "bg-xw-light f6"
};

export default CommandChooser;