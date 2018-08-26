import Endpoint from "../Endpoint.js";
import ImageWithLabelUI from "./ImageWithLabelUI.js";

class FactionUI extends React.Component
{
   render()
   {
      const
      {
         faction,
         isSmall,
         resourceBase,
         showLabel
      } = this.props;

      const src = resourceBase + faction.image;
      const size = (isSmall ? 24 : 32);

      return React.createElement(ImageWithLabelUI,
      {
         src: src,
         label: faction.name,
         showLabel: showLabel,
         width: size
      });
   }
}

FactionUI.propTypes = {
   faction: PropTypes.object.isRequired,

   isSmall: PropTypes.bool,
   resourceBase: PropTypes.string,
   showLabel: PropTypes.bool
};

FactionUI.defaultProps = {
   isSmall: false,
   resourceBase: Endpoint.ARMADA_IMAGES,
   showLabel: false
};

export default FactionUI;