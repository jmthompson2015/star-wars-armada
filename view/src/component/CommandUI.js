class CommandUI extends React.Component
{
   render()
   {
      const
      {
         command,
         isSmall,
         showLabel,
         title
      } = this.props;

      const fontKey = (command.key === "concentrateFire" ? "concentrate" : command.key);
      const size = (isSmall ? "f3" : "f2");
      const myTitle = title || command.name;

      const image = ReactDOMFactories.i(
      {
         className: size + " v-mid ffi ffi-swa-" + fontKey,
         title: myTitle
      });

      return (showLabel ? ReactDOMFactories.span(
      {
         title: myTitle
      }, image, " ", command.name) : image);
   }
}

CommandUI.propTypes = {
   command: PropTypes.object.isRequired,

   isSmall: PropTypes.bool,
   showLabel: PropTypes.bool,
   title: PropTypes.string
};

CommandUI.defaultProps = {
   isSmall: false,
   showLabel: false
};

export default CommandUI;