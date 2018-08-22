const CommandUI = props =>
{
   const command = props.command;
   const fontKey = (command.key === "concentrateFire" ? "concentrate" : command.key);
   const size = (props.isSmall ? "f3" : "f2");
   const title = (props.title !== undefined ? props.title : command.name);

   const image = ReactDOMFactories.i(
   {
      className: size + " v-mid ffi ffi-swa-" + fontKey,
      title: title
   });

   return (props.showLabel ? ReactDOMFactories.span(
   {
      title: title
   }, image, " ", command.name) : image);
};

CommandUI.propTypes = {
   command: PropTypes.object.isRequired,

   isSmall: PropTypes.bool,
   showLabel: PropTypes.bool,
   title: PropTypes.string
};

export default CommandUI;