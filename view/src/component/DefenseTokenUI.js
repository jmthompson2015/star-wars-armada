class DefenseTokenUI extends React.Component
{
   render()
   {
      const
      {
         defenseInstance,
         isSmall,
         showLabel
      } = this.props;

      const defenseToken = AA.Selector.defenseToken(defenseInstance.defenseTokenKey);
      const fontKey = defenseInstance.defenseTokenKey;
      const size = (isSmall ? "f3" : "f2");
      const title = defenseToken.name;
      const color = (defenseInstance.isReady ? "bg-green" : "bg-orange");

      const image = ReactDOMFactories.i(
      {
         className: color + " " + size + " v-mid w-100 ffi ffi-swa-" + fontKey,
         title: title
      });

      return (showLabel ? ReactDOMFactories.span(
      {
         className: color + " h-100 v-mid w-100",
         title: title
      }, image, " ", defenseToken.name) : image);
   }
}

DefenseTokenUI.propTypes = {
   defenseInstance: PropTypes.object.isRequired,

   isSmall: PropTypes.bool,
   showLabel: PropTypes.bool
};

DefenseTokenUI.defaultProps = {
   isSmall: false,
   showLabel: false
};

export default DefenseTokenUI;