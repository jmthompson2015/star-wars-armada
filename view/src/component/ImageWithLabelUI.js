class ImageWithLabelUI extends React.Component
{
   render()
   {
      const
      {
         src,
         label,
         showLabel,
         width
      } = this.props;

      const image = ReactDOMFactories.img(
      {
         className: "v-mid",
         src: src,
         title: label,
         width: width
      });

      let answer = image;

      if (showLabel)
      {
         answer = ReactDOMFactories.span(
         {}, image, " ", label);
      }

      return answer;
   }
}

ImageWithLabelUI.propTypes = {
   src: PropTypes.string.isRequired,

   label: PropTypes.string,
   showLabel: PropTypes.bool,
   width: PropTypes.number
};

ImageWithLabelUI.defaultProps = {
   label: "",
   showLabel: false,
   width: 24
};

export default ImageWithLabelUI;