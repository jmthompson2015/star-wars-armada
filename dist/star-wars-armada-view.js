(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
   typeof define === 'function' && define.amd ? define(['exports'], factory) :
   (factory((global.AV = {})));
}(this, (function (exports) { 'use strict';

   const Endpoint = {};

   Endpoint.ARMADA_IMAGES = "https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/image/";
   Endpoint.LOCAL_RESOURCE = "../../resource/";

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

   class CardInstancesArea extends React.Component
   {
      constructor(props)
      {
         super(props);

         this.state = {
            isExpanded: this.props.isExpanded,
         };

         this.toggleExpand = this.toggleExpandFunction.bind(this);
      }

      render()
      {
         const rows = [];

         rows.push(this.createLabelUI());
         rows.push(this.createCardInstanceCells());

         return ReactUtilities.createTable(rows, undefined);
      }
   }

   CardInstancesArea.prototype.createCardInstanceCells = function()
   {
      const cardInstanceUIs = this.props.cardInstanceUIs;
      const isExpanded = this.state.isExpanded;

      const cells = cardInstanceUIs.map(function(cardInstanceUI, i)
      {
         let myClassName;

         if (isExpanded || i === cardInstanceUIs.length - 1)
         {
            myClassName = "dtc pa1 v-mid";
         }
         else if (i < cardInstanceUIs.length - 1)
         {
            myClassName = "dn";
         }

         return ReactDOMFactories.div(
         {
            key: "cardCell" + i,
            className: myClassName,
         }, cardInstanceUI);
      });

      const cell = ReactUtilities.createCell(cells);

      return ReactUtilities.createRow(cell, "mainRow");
   };

   CardInstancesArea.prototype.createLabelUI = function()
   {
      const label = ReactUtilities.createCell(this.props.label, "labelCell", "b tc");

      const cardCount = this.props.cardInstanceUIs.length;
      const isExpanded = this.state.isExpanded;
      const expandLabel = (cardCount > 1 ? (isExpanded ? "\u25B6" : "\u25BC") : "");
      const expandControl = ReactDOMFactories.div(
      {
         key: "expandCell",
         onClick: this.toggleExpand,
      }, expandLabel);

      const row = ReactUtilities.createRow([label, expandControl], "labelExpandRow");
      const table = ReactUtilities.createTable(row, "labelExpandTable", "w-100");

      const tableCell = ReactUtilities.createCell(table, "tableCell");
      return ReactUtilities.createRow(tableCell, "labelRow");
   };

   CardInstancesArea.prototype.toggleExpandFunction = function()
   {
      this.setState(
      {
         isExpanded: !this.state.isExpanded,
      });
   };

   CardInstancesArea.propTypes = {
      cardInstanceUIs: PropTypes.array.isRequired,

      isExpanded: PropTypes.bool,
      label: PropTypes.string, // default: undefined
   };

   CardInstancesArea.defaultProps = {
      isExpanded: true,
   };

   // import TokenPanel from "./TokenPanel.js";

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
         const columns = [];
         const cardInstance = this.props.cardInstance;

         if (cardInstance)
         {
            const image = this.createCardImage(cardInstance);
            // const tokenPanel = this.createTokenPanel(cardInstance.id);
            const cell = ReactDOMFactories.div(
            {
               key: "imagePanel" + columns.length,
               className: "v-mid",
               onClick: this.toggleSize,
            }, image);

            columns.push(cell);
            // columns.push(tokenPanel);
            this.createAttachmentPanel(columns);
         }

         return ReactUtilities.createFlexboxWrap(columns, "cardInstanceUI", "bg-xw-medium items-center justify-center ma0 pa0");
      }
   }

   CardInstanceUI.prototype.toggleSizeFunction = function()
   {
      this.setState(
      {
         isSmall: !this.state.isSmall,
      });
   };

   CardInstanceUI.prototype.createAttachmentPanel = function(columns)
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

      columns.push(React.createElement(CardInstancesArea,
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

   CardInstanceUI.prototype.createCardImage = function(cardInstance)
   {
      let width = this.props.width;

      if (this.state.isSmall)
      {
         width /= 2;
      }

      let card;

      if (cardInstance.shipKey !== undefined)
      {
         card = AA.Selector.shipCard(cardInstance.shipKey);
      }
      else if (cardInstance.squadronKey !== undefined)
      {
         card = AA.Selector.squadronCard(cardInstance.squadronKey);
      }
      else if (cardInstance.upgradeKey !== undefined)
      {
         card = AA.Selector.upgradeCard(cardInstance.upgradeKey);
      }
      else if (cardInstance.damageKey !== undefined)
      {
         card = AA.Selector.damageCard(cardInstance.damageKey);
      }

      return React.createElement(CardImage,
      {
         card: card,
         width: width
      });
   };

   // CardInstanceUI.prototype.createTokenPanel = function(cardId)
   // {
   //    let props = {
   //       key: "token" + cardId,
   //       attackerTargetLocks: this.props.attackerTargetLocks,
   //       defenderTargetLocks: this.props.defenderTargetLocks,
   //       statBonuses: this.props.statBonuses,
   //       tokenCounts: this.props.tokenCounts
   //    };
   //
   //    return React.createElement(TokenPanel, props);
   // };

   CardInstanceUI.propTypes = {
      cardInstance: PropTypes.object,
      damageInstances: PropTypes.array,
      upgradeInstances: PropTypes.array,
      width: PropTypes.number
   };

   CardInstanceUI.defaultProps = {
      damageInstances: [],
      upgradeInstances: [],
      width: 250
   };

   class CommandChooser extends React.Component
   {
      constructor(props)
      {
         super(props);

         this.state = {
            selected: this.props.initialCommand
         };

         this.handleChange = this.handleChangeFunction.bind(this);
      }

      render()
      {
         const commands = this.props.commands;
         const inputProps = R.merge(
         {
            name: "chooseCommand", // needed for radio
            onChange: this.handleChange,
            type: "radio"
         }, this.props.clientProps);

         let i = 0;
         const selected = this.state.selected;
         const mapFunction = command =>
         {
            const input = ReactDOMFactories.input(R.merge(inputProps,
            {
               id: i,
               defaultChecked: (command === selected)
            }));
            const label = labelFunction(command);
            const cells = [];
            cells.push(ReactUtilities.createCell(input, cells.length, "pa1 v-mid"));
            cells.push(ReactUtilities.createCell(label, cells.length, "pa1 v-mid"));

            return ReactUtilities.createRow(cells, "row" + command.sourceName + command.sourceKey + i++);
         };
         const rows = R.map(mapFunction, commands);

         return ReactUtilities.createTable(rows, undefined, this.props.panelClass);
      }
   }

   CommandChooser.prototype.handleChangeFunction = function(event)
   {
      const id = event.target.id;
      const selected = this.props.commands[id];

      this.setState(
         {
            selected: selected,
         },
         this.props.onChange(selected));
   };

   const labelFunction = function(command)
   {
      const fontKey = (command.key === "concentrateFire" ? "concentrate" : command.key);

      return ReactDOMFactories.span(
      {
         className: "v-mid",
         title: command.text
      }, ReactDOMFactories.i(
      {
         className: "f3 tc v-mid ffi ffi-swa-" + fontKey,
      }), " ", command.name);
   };

   CommandChooser.propTypes = {
      onChange: PropTypes.func.isRequired,
      commands: PropTypes.array.isRequired,

      clientProps: PropTypes.object,
      initialCommand: PropTypes.object,
      panelClass: PropTypes.string,
   };

   CommandChooser.defaultProps = {
      clientProps:
      {},
      panelClass: "bg-xw-light f6"
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

         return ReactUtilities.createTable(row, undefined, "bg-white center v-mid");
      }
   }

   const createImage = function(die)
   {
      const src = Endpoint.ARMADA_IMAGES + die.image;

      return ReactUtilities.createImg(src, undefined, "tc v-mid",
      {
         width: 48
      });
   };

   const comparator = (a, b) =>
   {
      let answer = a.sortOrder - b.sortOrder;
      answer = ((answer === 0 && a.color > b.color) ? 1 : answer);
      answer = ((answer === 0 && a.color < b.color) ? -1 : answer);

      return answer;
   };

   DicePanel.propTypes = {
      dice: PropTypes.array
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

   const ShipImage = {};

   const DEG_TO_RADIANS = Math.PI / 180.0;

   ShipImage.draw = function(context, scale, id, image, position, shipBase, factionColor)
   {
      // Setup.
      const width = shipBase.width;
      const height = shipBase.height;
      const halfWidth = Math.ceil(width / 2);
      const halfHeight = Math.ceil(height / 2);

      context.save();
      context.scale(scale, scale);
      context.translate(position.x, position.y);
      context.rotate(position.heading * DEG_TO_RADIANS);

      // Draw background square.
      context.fillStyle = "rgba(255,255,255,0.4)";
      context.fillRect(-halfWidth, -halfHeight, width, height);

      // Draw the firing arcs.
      context.strokeStyle = factionColor;
      drawFiringArcs(context, halfWidth, halfHeight);

      // Draw ship image.
      context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);

      if (id !== undefined)
      {
         // Draw the ship ID.
         context.rotate(90 * DEG_TO_RADIANS);
         context.fillStyle = factionColor;
         context.font = "14px sans-serif";
         context.fillText(id, -halfHeight, halfWidth);
         context.rotate(-90 * DEG_TO_RADIANS);
      }

      // Cleanup.
      context.restore();
   };

   const drawFiringArcs = (context, halfWidth, halfHeight) =>
   {
      // Draw the firing arcs.
      context.beginPath();
      context.moveTo(-halfWidth, -halfHeight);
      context.lineTo(halfWidth, halfHeight);
      context.moveTo(halfWidth, -halfHeight);
      context.lineTo(-halfWidth, halfHeight);
      context.stroke();
   };

   const StatusBarUI = props =>
   {
      const helpLinkUI = ReactDOMFactories.a(
      {
         href: props.helpBase + "Help.html",
         target: "_blank",
      }, "Help");

      let i = 0;
      const cellClassName = "ba";

      const roundCell = ReactUtilities.createCell(["Round: ", props.round], i++, cellClassName,
      {
         title: "Round"
      });
      const phaseCell = ReactUtilities.createCell(["Phase: ", props.phaseName], i++, cellClassName,
      {
         title: "Phase"
      });
      const activeShipCell = ReactUtilities.createCell(["Active Ship: ", props.activeShipName], i++, cellClassName,
      {
         title: "Active Ship"
      });
      const userMessageCell = ReactUtilities.createCell(props.userMessage, i++, cellClassName,
      {
         title: "User Message"
      });
      const helpCell = ReactUtilities.createCell(helpLinkUI, i++, cellClassName);

      const cells = [roundCell, phaseCell, activeShipCell, userMessageCell, helpCell];
      const row = ReactUtilities.createRow(cells);

      return ReactUtilities.createTable(row, "statusBarUITable", "bg-xw-light collapse ma0 tc v-mid w-100");
   };

   StatusBarUI.propTypes = {
      activeShipName: PropTypes.string.isRequired,
      phaseName: PropTypes.string.isRequired,
      round: PropTypes.number.isRequired,
      userMessage: PropTypes.string.isRequired,

      helpBase: PropTypes.string
   };

   StatusBarUI.defaultProps = {
      helpBase: "./"
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

   const StatusBarContainer = (gameState, ownProps = {}) =>
   {
      const activeShipId = gameState.activeShipId;
      const shipInstance = (activeShipId !== undefined ? AS.Selector.shipInstance(activeShipId, gameState) : undefined);
      const shipCard = (shipInstance !== undefined ? AA.Selector.shipCard(shipInstance.shipKey) : undefined);
      const activeShipName = (shipCard !== undefined ? shipCard.name : "");
      const phaseName = AA.Selector.phase(gameState.phaseKey).name;
      const round = AS.Selector.round(gameState);
      const userMessage = AS.Selector.userMessage(gameState);

      return React.createElement(StatusBarUI,
      {
         activeShipName: activeShipName,
         phaseName: phaseName,
         round: round,
         userMessage: userMessage,
         helpBase: ownProps.helpBase
      });
   };

   const Help = {};

   const referenceCards = AA.EnumUtilities.values(AA.ReferenceCard);
   const mapFunction = referenceCard =>
   {
      return React.createElement(CardImage,
      {
         key: "referenceCard" + referenceCard.key,
         card: referenceCard,
         resourceBase: Endpoint.ARMADA_IMAGES,
         width: 250
      });
   };
   const rows = R.map(mapFunction, referenceCards);

   const mainPanel = ReactDOMFactories.div(
   {}, rows);
   ReactDOM.render(mainPanel, document.getElementById("panel"));

   exports.CardImage = CardImage;
   exports.CardInstancesArea = CardInstancesArea;
   exports.CardInstanceUI = CardInstanceUI;
   exports.CommandChooser = CommandChooser;
   exports.DicePanel = DicePanel;
   exports.FactionUI = FactionUI;
   exports.ImageWithLabelUI = ImageWithLabelUI;
   exports.ShipImage = ShipImage;
   exports.StatusBarUI = StatusBarUI;
   exports.UpgradeSlotUI = UpgradeSlotUI;
   exports.StatusBarContainer = StatusBarContainer;
   exports.Endpoint = Endpoint;
   exports.Help = Help;
   exports.ReactUtilities = ReactUtilities;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
