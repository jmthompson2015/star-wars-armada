import CommandChooser from "./CommandChooser.js";

const comparator = (a, b) =>
{
   return a.sortOrder - b.sortOrder;
};
const commands = R.sort(comparator, AA.Selector.enumValues(AA.Command));

const element = React.createElement(CommandChooser,
{
   commands: commands,
   initialAbility: AA.Command.REDIRECT,
   onChange: callback
});
ReactDOM.render(element, document.getElementById("panel"));

function callback(command)
{
   console.log("command = " + JSON.stringify(command, null, "   "));
}