import ReactUtils from "../ReactUtilities.js";

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
      const commands = this.props.commands;
      const inputProps = R.merge(
      {
         name: "chooseCommand", // needed for radio
         onChange: this.handleChange,
         type: "radio"
      }, this.props.clientProps);

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

      return ReactUtils.createTable(rows, undefined, this.props.panelClass);
   }
}

CommandChooser.prototype.handleChangeFunction = function(event)
{
   const id = event.target.id;
   const selected = this.props.commands[id];

   this.setState(
      {
         selected: selected,
      },
      this.props.onChange(selected));
};

const labelFunction = function(command)
{
   const fontKey = (command.key === "concentrateFire" ? "concentrate" : command.key);

   return ReactDOMFactories.span(
   {
      className: "v-mid",
      title: command.text
   }, ReactDOMFactories.i(
   {
      className: "f3 tc v-mid ffi ffi-swa-" + fontKey,
   }), " ", command.name);
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