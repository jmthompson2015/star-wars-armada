import ReactUtilities from "../ReactUtilities.js";

import CommandUI from "./CommandUI.js";
import DefenseTokenUI from "./DefenseTokenUI.js";

const TokenPanel = props =>
{
   const rows = [];

   const defenseInstances = (props.defenseInstances || []);
   const tokenCounts = props.tokenCounts ||
   {};
   const commands = AA.Selector.enumValues(AA.Command).sort(comparator);

   commands.forEach(command =>
   {
      maybeAddCommandToken(rows, command, tokenCounts[command.key]);
   });

   defenseInstances.forEach(defenseInstance =>
   {
      addDefenseToken(rows, defenseInstance);
   });

   return ReactUtilities.createFlexboxWrap(rows, "tokenPanel", "bg-white center content-center flex-column justify-center tc");
};

const addDefenseToken = function(rows, defenseInstance)
{
   const icon = React.createElement(DefenseTokenUI,
   {
      defenseInstance: defenseInstance
   });

   const labeledImage = ReactDOMFactories.span(
   {
      className: "center tc v-mid w-100"
   }, icon);

   rows.push(ReactUtilities.createFlexbox(labeledImage, "defenseRow" + rows.length, "tc v-mid"));
};

const comparator = (a, b) =>
{
   return a.sortOrder - b.sortOrder;
};

const maybeAddCommandToken = function(rows, command, count)
{
   if (count !== undefined && count !== 0)
   {
      const icon = React.createElement(CommandUI,
      {
         command: command
      });

      const labeledImage = ReactDOMFactories.span(
      {
         className: "center tc v-mid"
      }, icon, count);

      rows.push(ReactUtilities.createFlexbox(labeledImage, "tokenRow" + rows.length, "tc v-mid"));
   }
};

TokenPanel.propTypes = {
   defenseInstances: PropTypes.object,
   tokenCounts: PropTypes.object
};

export default TokenPanel;