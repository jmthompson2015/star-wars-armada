import Endpoint from "../Endpoint.js";
import ImageWithLabelUI from "./ImageWithLabelUI.js";

const UpgradeSlotUI = props =>
{
   const upgradeSlot = props.upgradeSlot;
   const src = props.resourceBase + upgradeSlot.image;
   const size = (props.isSmall ? 24 : 32);

   return React.createElement(ImageWithLabelUI,
   {
      src: src,
      label: upgradeSlot.name,
      showLabel: props.showLabel,
      width: size
   });
};

UpgradeSlotUI.propTypes = {
   upgradeSlot: PropTypes.object.isRequired,

   isSmall: PropTypes.bool,
   resourceBase: PropTypes.string,
   showLabel: PropTypes.bool
};

UpgradeSlotUI.defaultProps = {
   isSmall: false,
   resourceBase: Endpoint.ARMADA_IMAGES,
   showLabel: false
};

export default UpgradeSlotUI;