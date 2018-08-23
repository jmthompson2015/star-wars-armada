import ReactUtilities from "../ReactUtilities.js";

import CardImage from "./CardImage.js";
import CardInstancesArea from "./CardInstancesArea.js";
import TokenPanel from "./TokenPanel.js";

class CardInstanceUI extends React.Component
{
   constructor(props)
   {
      super(props);

      this.state = {
         isSmall: true,
      };

      this.toggleSize = this.toggleSizeFunction.bind(this);
   }

   render()
   {
      const cells = [];
      const cardInstance = this.props.cardInstance;
      let myKey = "cardInstanceUI";

      if (cardInstance)
      {
         const card = determineCard(cardInstance);
         myKey += cardInstance.id + card.key;
         const image = this.createCardImage(cardInstance, myKey);
         const tokenPanel = this.createTokenPanel(cardInstance.id);
         const cell = ReactDOMFactories.div(
         {
            key: "imagePanel" + cells.length,
            className: "v-mid",
            onClick: this.toggleSize
         }, image);

         cells.push(cell);
         cells.push(tokenPanel);
         this.createAttachmentPanel(cells);
      }

      return ReactUtilities.createFlexboxWrap(cells, myKey, "bg-xw-medium items-center justify-center ma0 pa0");
   }
}

CardInstanceUI.prototype.toggleSizeFunction = function()
{
   this.setState(
   {
      isSmall: !this.state.isSmall,
   });
};

CardInstanceUI.prototype.createAttachmentPanel = function(cells)
{
   const attachments = [];
   const upgrades = this.props.upgradeInstances;

   if (upgrades.length > 0)
   {
      for (let i = 0; i < upgrades.length; i++)
      {
         const upgradeInstance = upgrades[i];
         const upgradeUI = this.createAttachmentUI(upgradeInstance);
         attachments.push(upgradeUI);
      }
   }

   const damages = this.props.damageInstances;

   if (damages.length > 0)
   {
      for (let j = 0; j < damages.length; j++)
      {
         const damageInstance = damages[j];
         const damageUI = this.createAttachmentUI(damageInstance);
         attachments.push(damageUI);
      }
   }

   cells.push(React.createElement(CardInstancesArea,
   {
      key: "attachmentPanel",
      cardInstanceUIs: attachments,
      isExpanded: false
   }));
};

CardInstanceUI.prototype.createAttachmentUI = function(cardInstance)
{
   return React.createElement(CardInstanceUI,
   {
      key: "attachment" + cardInstance.id,
      cardInstance: cardInstance,
      width: this.props.width / 1.4,
   });
};

CardInstanceUI.prototype.createCardImage = function(cardInstance, myKey)
{
   let width = this.props.width;

   if (this.state.isSmall)
   {
      width /= 2;
   }
   const card = determineCard(cardInstance);

   return React.createElement(CardImage,
   {
      card: card,
      myKey: myKey,
      width: width
   });
};

CardInstanceUI.prototype.createTokenPanel = function(cardId)
{
   let props = {
      key: "token" + cardId,
      defenseInstances: this.props.defenseInstances,
      tokenCounts: this.props.tokenCounts
   };

   return React.createElement(TokenPanel, props);
};

const determineCard = cardInstance =>
{
   let answer;

   if (cardInstance.shipKey !== undefined)
   {
      answer = AA.Selector.shipCard(cardInstance.shipKey);
   }
   else if (cardInstance.squadronKey !== undefined)
   {
      answer = AA.Selector.squadronCard(cardInstance.squadronKey);
   }
   else if (cardInstance.upgradeKey !== undefined)
   {
      answer = AA.Selector.upgradeCard(cardInstance.upgradeKey);
   }
   else if (cardInstance.damageKey !== undefined)
   {
      answer = AA.Selector.damageCard(cardInstance.damageKey);
   }

   return answer;
};

CardInstanceUI.propTypes = {
   cardInstance: PropTypes.object,
   damageInstances: PropTypes.array,
   defenseInstances: PropTypes.array,
   tokenCounts: PropTypes.object,
   upgradeInstances: PropTypes.array,
   width: PropTypes.number
};

CardInstanceUI.defaultProps = {
   damageInstances: [],
   defenseInstances: [],
   tokenCounts:
   {},
   upgradeInstances: [],
   width: 250
};

export default CardInstanceUI;