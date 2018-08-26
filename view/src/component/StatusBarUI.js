import ReactUtilities from "../ReactUtilities.js";

class StatusBarUI extends React.Component
{
   render()
   {
      const
      {
         activeShipName,
         phaseName,
         round,
         userMessage,
         helpBase
      } = this.props;

      const helpLinkUI = ReactDOMFactories.a(
      {
         href: helpBase + "Help.html",
         target: "_blank",
      }, "Help");

      let i = 0;
      const cellClassName = "ba";

      const roundCell = ReactUtilities.createCell(["Round: ", round], i++, cellClassName,
      {
         title: "Round"
      });
      const phaseCell = ReactUtilities.createCell(["Phase: ", phaseName], i++, cellClassName,
      {
         title: "Phase"
      });
      const activeShipCell = ReactUtilities.createCell(["Active Ship: ", activeShipName], i++, cellClassName,
      {
         title: "Active Ship"
      });
      const userMessageCell = ReactUtilities.createCell(userMessage, i++, cellClassName,
      {
         title: "User Message"
      });
      const helpCell = ReactUtilities.createCell(helpLinkUI, i++, cellClassName);

      const cells = [roundCell, phaseCell, activeShipCell, userMessageCell, helpCell];
      const row = ReactUtilities.createRow(cells);

      return ReactUtilities.createTable(row, "statusBarUITable", "bg-xw-light collapse ma0 tc v-mid w-100");
   }
}

StatusBarUI.propTypes = {
   activeShipName: PropTypes.string.isRequired,
   phaseName: PropTypes.string.isRequired,
   round: PropTypes.number.isRequired,
   userMessage: PropTypes.string.isRequired,

   helpBase: PropTypes.string
};

StatusBarUI.defaultProps = {
   helpBase: "./"
};

export default StatusBarUI;