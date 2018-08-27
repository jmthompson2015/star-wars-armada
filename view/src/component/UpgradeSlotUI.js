import Endpoint from '../Endpoint.js';
import ImageWithLabelUI from './ImageWithLabelUI.js';

class UpgradeSlotUI extends React.PureComponent {
  render() {
    const { upgradeSlot, isSmall, resourceBase, showLabel } = this.props;

    const src = resourceBase + upgradeSlot.image;
    const size = isSmall ? 24 : 32;

    return React.createElement(ImageWithLabelUI, {
      src,
      label: upgradeSlot.name,
      showLabel,
      width: size,
    });
  }
}

UpgradeSlotUI.propTypes = {
  upgradeSlot: PropTypes.shape().isRequired,

  isSmall: PropTypes.bool,
  resourceBase: PropTypes.string,
  showLabel: PropTypes.bool,
};

UpgradeSlotUI.defaultProps = {
  isSmall: false,
  resourceBase: Endpoint.ARMADA_IMAGES,
  showLabel: false,
};

export default UpgradeSlotUI;
