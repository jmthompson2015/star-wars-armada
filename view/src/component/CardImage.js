import Endpoint from "../Endpoint.js";

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
      const
      {
         card,
         isFaceUp,
         isReady,
         slicing,
         width
      } = this.props;

      const canvasId = this.canvasId();
      const height = computeHeight(card.key, width);
      const title = determineCardTitle(card, isFaceUp);
      let className, canvasHeight, canvasWidth;

      if (slicing === undefined)
      {
         className = "br3";
         canvasWidth = (isReady ? width : height);
         canvasHeight = (isReady ? height : width);
      }
      else
      {
         canvasWidth = (isReady ? width : height * slicing);
         canvasHeight = (isReady ? height * slicing : width);
      }

      return ReactDOMFactories.canvas(
      {
         key: canvasId,
         className: className,
         height: canvasHeight,
         id: canvasId,
         title: title,
         width: canvasWidth,
      });
   }
}

CardImage.prototype.canvasId = function()
{
   const
   {
      card,
      isFaceUp,
      isReady,
      myKey,
      slicing
   } = this.props;

   return "CardImageCanvas" + card.key + isFaceUp + isReady + myKey + slicing;
};

CardImage.prototype.paint = function()
{
   const
   {
      card,
      isFaceUp,
      isReady,
      resourceBase,
      slicing,
      width
   } = this.props;

   const canvas = document.getElementById(this.canvasId());
   const context = canvas.getContext("2d");
   const dWidth = width;
   const height = computeHeight(card.key, dWidth);
   const src = resourceBase + createSrc(card, isFaceUp);
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

export default CardImage;