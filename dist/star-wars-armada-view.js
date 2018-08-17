(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AV = {})));
}(this, (function (exports) { 'use strict';

   const Endpoint = {};

   Endpoint.ARMADA_IMAGES = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/image/";

   class CardImage extends React.Component
   {
      componentDidMount()
      {
         this.paint();
      }

      componentDidUpdate()
      {
         this.paint();
      }

      render()
      {
         let className;
         const card = this.props.card;
         const isReady = this.props.isReady;
         const width = this.props.width;
         const height = computeHeight(card.key, width);
         const title = determineCardTitle(card, this.props.isFaceUp);
         let canvasHeight, canvasWidth;

         if (this.props.slicing === undefined)
         {
            className = "br3";
            canvasWidth = (isReady ? this.props.width : height);
            canvasHeight = (isReady ? height : this.props.width);
         }
         else
         {
            canvasWidth = (isReady ? this.props.width : height * this.props.slicing);
            canvasHeight = (isReady ? height * this.props.slicing : this.props.width);
         }

         return ReactDOMFactories.canvas(
         {
            key: this.canvasId(),
            className: className,
            height: canvasHeight,
            id: this.canvasId(),
            title: title,
            width: canvasWidth,
         });
      }
   }

   CardImage.prototype.canvasId = function()
   {
      return this.props.card.key + this.props.isFaceUp + this.props.isReady + this.props.slicing + "CardImageCanvas" + this.props.myKey;
   };

   CardImage.prototype.paint = function()
   {
      const card = this.props.card;
      const isReady = this.props.isReady;
      const canvas = document.getElementById(this.canvasId());
      const context = canvas.getContext("2d");
      const dWidth = this.props.width;
      const height = computeHeight(card.key, dWidth);
      const slicing = this.props.slicing;
      const src = this.props.resourceBase + createSrc(card, this.props.isFaceUp);
      const image = new Image();
      image.onload = function()
      {
         if (slicing === undefined)
         {
            if (isReady)
            {
               context.drawImage(image, 0, 0, dWidth, height);
            }
            else
            {
               context.save();
               context.translate(height / 2.0, dWidth / 2.0);
               context.rotate(Math.PI / 2.0);
               context.drawImage(image, -dWidth / 2.0, -height / 2.0, dWidth, height);
               context.restore();
            }
         }
         else
         {
            const sWidth = image.naturalWidth;
            const sy = image.naturalHeight * (1.0 - slicing);
            const sHeight = image.naturalHeight * slicing;
            const dHeight = height * slicing;

            if (isReady)
            {
               context.drawImage(image, 0, sy, sWidth, sHeight, 0, 0, dWidth, dHeight);
            }
            else
            {
               context.save();
               context.translate(dHeight / 2.0, dWidth / 2.0);
               context.rotate(Math.PI / 2.0);
               context.drawImage(image, 0, sy, sWidth, sHeight, -dWidth / 2.0, -dHeight / 2.0, dWidth, dHeight);
               context.restore();
            }
         }
      };
      image.onerror = this.logLoadFailure;
      image.src = src;
   };

   const computeHeight = (cardKey, widthIn) => widthIn * AA.Selector.heightByCard(cardKey) / AA.Selector.widthByCard(cardKey);

   const createShipBackSrc = cardKey =>
   {
      const faction = AA.Selector.factionValueByShip(cardKey);
      const factionName = faction.name.toLowerCase().replace(/ /g, "-");

      return `ship-card/${factionName}/${factionName}-back.png`;
   };

   const createSquadronBackSrc = cardKey =>
   {
      const faction = AA.Selector.factionValueBySquadron(cardKey);
      const factionName = faction.name.toLowerCase().replace(/ /g, "-");

      return `squadron-card/${factionName}/${factionName}-back.png`;
   };

   const createSrc = (card, isFaceUp) => R.ifElse(R.always(isFaceUp), R.prop("image"), determineCardBack)(card);

   const createUpgradeBackSrc = cardKey =>
   {
      const slotKey = AA.Selector.upgradeSlotKeysByUpgrade(cardKey)[0];
      const slot = AA.Selector.upgradeSlot(slotKey);
      const slotName = slot.name.toLowerCase().replace(/ /g, "-");

      return `upgrade-card/${slotName}/${slotName}-back.png`;
   };

   const determineCardBack = card =>
   {
      return R.cond([
        [AA.Selector.isDamageCard, R.always("damage-card/damage-back.png")],
        [AA.Selector.isShipCard, card => createShipBackSrc(card.key)],
        [AA.Selector.isSquadronCard, card => createSquadronBackSrc(card.key)],
        [AA.Selector.isUpgradeCard, card => createUpgradeBackSrc(card.key)],
      ])(card);
   };

   const determineCardTitle = (card, isFaceUp) => R.ifElse(R.always(isFaceUp), determineFaceUpCardTitle, determineFaceDownCardTitle)(card);

   const determineFaceUpCardTitle = card => R.ifElse(AA.Selector.isDamageCard, R.prop("title"), R.prop("name"))(card);

   const determineFaceDownCardTitle = card =>
   {
      return R.cond([
        [AA.Selector.isDamageCard, R.always("Damage Card")],
        [AA.Selector.isShipCard, R.always("Ship Card")],
        [AA.Selector.isSquadronCard, R.always("Squadron Card")],
        [AA.Selector.isUpgradeCard, R.always("Upgrade Card")],
      ])(card);
   };

   CardImage.propTypes = {
      card: PropTypes.object.isRequired,
      resourceBase: PropTypes.string.isRequired,

      isFaceUp: PropTypes.bool,
      isReady: PropTypes.bool,
      myKey: PropTypes.string, // default: undefined
      slicing: PropTypes.number, // default: undefined
      width: PropTypes.number,
   };

   CardImage.defaultProps = {
      isFaceUp: true,
      isReady: true,
      resourceBase: Endpoint.ARMADA_IMAGES,
      width: 200,
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

   class DicePanel extends React.Component
   {
      render()
      {
         const dice = this.props.dice;
         const sortedDice = R.sort(comparator, dice);
         let count = 0;
         const mapFunction = diceKey => ReactUtilities.createCell(createImage(diceKey), count++);
         const cells = R.map(mapFunction, sortedDice);
         const row = ReactUtilities.createRow(cells);

         return ReactUtilities.createTable(row, undefined, "bg-white center");
      }
   }

   const createImage = function(die)
   {
      const dieName = R.cond([
        [R.equals("hitHit"), R.always("hit-hit")], // hit + hit
        [R.equals("hitCriticalHit"), R.always("hit-critical-hit")], // hit + critical hit
        [R.equals("criticalHit"), R.always("critical-hit")], // critical hit
        [R.T, R.identity]
      ])(die.dieKey);
      const source = Endpoint.ARMADA_IMAGES + `dice/${die.color}-${dieName}.png`;

      return ReactUtilities.createImg(source, undefined, undefined,
      {
         width: 48
      });
   };

   const comparator = (a, b) =>
   {
      const dieValueA = AA.Selector.diceValue(a.dieKey);
      const dieValueB = AA.Selector.diceValue(b.dieKey);

      let answer = dieValueA.sortOrder - dieValueB.sortOrder;

      if (answer === 0)
      {
         const colorA = a.color;
         const colorB = b.color;

         if (colorA > colorB)
         {
            answer = 1;
         }
         else if (colorA < colorB)
         {
            answer = -1;
         }
      }

      return answer;
   };

   DicePanel.propTypes = {
      dice: PropTypes.object
   };

   DicePanel.defaultProps = {
      dice: []
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

   exports.CardImage = CardImage;
   exports.DicePanel = DicePanel;
   exports.FactionUI = FactionUI;
   exports.ImageWithLabelUI = ImageWithLabelUI;
   exports.UpgradeSlotUI = UpgradeSlotUI;
   exports.Endpoint = Endpoint;
   exports.ReactUtilities = ReactUtilities;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
