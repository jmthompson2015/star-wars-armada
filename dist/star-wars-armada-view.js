(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AV = {})));
}(this, (function (exports) { 'use strict';

   const Endpoint = {};

   Endpoint.ARMADA_IMAGES = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/image/";

   const CardImage = props =>
   {
      const card = props.card;
      const width = props.width;
      const canvasId = "CardImageCanvas" + card.key + props.isFaceUp + width;
      const src = props.resourceBase + card.image;

      return ReactDOMFactories.img(
      {
         key: canvasId,
         className: "br3",
         src: src,
         title: card.name,
         width: width,
      });
   };

   CardImage.propTypes = {
      card: PropTypes.object.isRequired,

      isFaceUp: PropTypes.bool,
      resourceBase: PropTypes.string,
      width: PropTypes.number,
   };

   CardImage.defaultProps = {
      isFaceUp: true,
      resourceBase: Endpoint.ARMADA_IMAGES,
      width: 250
   };

   const ImageWithLabelUI = props =>
   {
      const image = ReactDOMFactories.img(
      {
         className: "v-mid",
         src: props.src,
         title: props.label,
         width: props.width
      });

      let answer = image;

      if (props.showLabel)
      {
         answer = ReactDOMFactories.span(
         {}, image, " ", props.label);
      }

      return answer;
   };

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

   const FactionUI = props =>
   {
      const faction = props.faction;
      const src = props.resourceBase + faction.image;
      const size = (props.isSmall ? 24 : 32);

      return React.createElement(ImageWithLabelUI,
      {
         src: src,
         label: faction.name,
         showLabel: props.showLabel,
         width: size
      });
   };

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

   const ReactUtilities = {};

   ReactUtilities.createButton = function(element, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         key: key,
         className: className
      });

      return ReactDOMFactories.button(newProps, element);
   };

   ReactUtilities.createCell = function(element, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         key: key,
         className: "dtc" + (className ? " " + className : "")
      });

      return ReactDOMFactories.div(newProps, element);
   };

   ReactUtilities.createFlexbox = function(cells, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         key: key,
         className: "flex" + (className ? " " + className : "")
      });

      return ReactDOMFactories.div(newProps, cells);
   };

   ReactUtilities.createFlexboxWrap = function(cells, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         key: key,
         className: "flex flex-wrap" + (className ? " " + className : "")
      });

      return ReactDOMFactories.div(newProps, cells);
   };

   ReactUtilities.createImg = function(src, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         src: src,
         key: key,
         className: className
      });

      return ReactDOMFactories.img(newProps);
   };

   ReactUtilities.createRow = function(cells, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         key: key,
         className: "dt-row" + (className ? " " + className : "")
      });

      return ReactDOMFactories.div(newProps, cells);
   };

   ReactUtilities.createSpan = function(element, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         key: key,
         className: className
      });

      return ReactDOMFactories.span(newProps, element);
   };

   ReactUtilities.createTable = function(rows, key, className, props = {})
   {
      const newProps = R.merge(props,
      {
         key: key,
         className: "dt" + (className ? " " + className : "")
      });

      return ReactDOMFactories.div(newProps, rows);
   };

   exports.CardImage = CardImage;
   exports.FactionUI = FactionUI;
   exports.ImageWithLabelUI = ImageWithLabelUI;
   exports.UpgradeSlotUI = UpgradeSlotUI;
   exports.Endpoint = Endpoint;
   exports.ReactUtilities = ReactUtilities;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
