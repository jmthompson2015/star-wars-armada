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

   const DefenseTokenUI = props =>
   {
      const defenseInstance = props.defenseInstance;
      const defenseToken = AA.Selector.defenseToken(defenseInstance.defenseTokenKey);
      const fontKey = defenseInstance.defenseTokenKey;
      const size = (props.isSmall ? "f3" : "f2");
      const title = defenseToken.name;
      const color = (defenseInstance.isReady ? "bg-green" : "bg-orange");

      const image = ReactDOMFactories.i(
      {
         className: color + " " + size + " v-mid w-100 ffi ffi-swa-" + fontKey,
         title: title
      });

      return (props.showLabel ? ReactDOMFactories.span(
      {
         className: color + " h-100 v-mid w-100",
         title: title
      }, image, " ", defenseToken.name) : image);
   };

   DefenseTokenUI.propTypes = {
      defenseInstance: PropTypes.object.isRequired,

      isSmall: PropTypes.bool,
      showLabel: PropTypes.bool
   };

   const TokenPanel = props =>
   {
      const rows = [];

      const defenseInstances = (props.defenseInstances || []);
      const tokenCounts = props.tokenCounts ||
      {};
      const commands = AA.Selector.enumValues(AA.Command).sort(comparator);

      commands.forEach(command =>
      {
         maybeAddCommandToken(rows, command, tokenCounts[command.key]);
      });

      defenseInstances.forEach(defenseInstance =>
      {
         addDefenseToken(rows, defenseInstance);
      });

      return ReactUtilities.createFlexboxWrap(rows, "tokenPanel", "bg-white center content-center flex-column justify-center tc");
   };

   const addDefenseToken = function(rows, defenseInstance)
   {
      const icon = React.createElement(DefenseTokenUI,
      {
         defenseInstance: defenseInstance
      });

      const labeledImage = ReactDOMFactories.span(
      {
         className: "center tc v-mid w-100"
      }, icon);

      rows.push(ReactUtilities.createFlexbox(labeledImage, "defenseRow" + rows.length, "tc v-mid"));
   };

   const comparator = (a, b) =>
   {
      return a.sortOrder - b.sortOrder;
   };

   const maybeAddCommandToken = function(rows, command, count)
   {
      if (count !== undefined && count !== 0)
      {
         const icon = React.createElement(CommandUI,
         {
            command: command
         });

         const labeledImage = ReactDOMFactories.span(
         {
            className: "center tc v-mid"
         }, icon, count);

         rows.push(ReactUtilities.createFlexbox(labeledImage, "tokenRow" + rows.length, "tc v-mid"));
      }
   };

   TokenPanel.propTypes = {
      defenseInstances: PropTypes.object,
      tokenCounts: PropTypes.object
   };

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
      return React.createElement(CommandUI,
      {
         command: command,
         isSmall: true,
         showLabel: true,
         title: command.text
      });
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
         const sortedDice = R.sort(comparator$1, dice);
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

   const comparator$1 = (a, b) =>
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

   const SquadronImage = {};

   const DEG_TO_RADIANS$1 = Math.PI / 180.0;

   SquadronImage.draw = function(context, scale, id, image, position, factionColor)
   {
      // Setup.
      const width = 35;
      const height = 35;
      const halfWidth = Math.ceil(width / 2);
      const halfHeight = Math.ceil(height / 2);

      context.save();
      context.scale(scale, scale);
      context.translate(position.x, position.y);
      context.rotate(position.heading * DEG_TO_RADIANS$1);

      // Draw background circle.
      context.fillStyle = "rgba(255,255,255,0.4)";
      context.beginPath();
      context.arc(0, 0, halfWidth, 0, 2 * Math.PI);
      context.fill();

      // Draw ship image.
      context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);

      if (id !== undefined)
      {
         // Draw the ship ID.
         context.rotate(90 * DEG_TO_RADIANS$1);
         context.fillStyle = factionColor;
         context.font = "14px sans-serif";
         context.fillText(id, -halfHeight, halfWidth);
         context.rotate(-90 * DEG_TO_RADIANS$1);
      }

      // Cleanup.
      context.restore();
   };

   class PlayAreaUI extends React.Component
   {
      constructor(props)
      {
         super(props);

         this.explosionImage = undefined;
         this.factionShipToImage = {};
         this.factionSquadronToImage = {};
      }

      componentDidMount()
      {
         this.loadImages();
         this.paint();
      }

      componentDidUpdate()
      {
         this.paint();
      }

      render()
      {
         const imageSrc = this.props.resourceBase + this.props.image;
         const scale = this.props.scale;
         const width = scale * this.props.width;
         const height = scale * this.props.height;

         return ReactDOMFactories.canvas(
         {
            id: "playAreaCanvas",
            style:
            {
               backgroundImage: "url(" + imageSrc + ")",
               backgroundSize: "100%",
            },
            width: width,
            height: height
         });
      }
   }

   PlayAreaUI.prototype.createExplosionImage = function()
   {
      const image = new Image();
      image.src = Endpoint.LOCAL_RESOURCE + "ship/explosion.png";

      return image;
   };

   PlayAreaUI.prototype.createShipIcon = function(faction, shipCard)
   {
      const image = new Image();
      image.onload = function()
      {
         this.forceUpdate();
      }.bind(this);

      const filename = shipCard["ship-image"];
      image.src = Endpoint.ARMADA_IMAGES + filename;

      return image;
   };

   PlayAreaUI.prototype.createSquadronIcon = function(faction, squadronCard)
   {
      const image = new Image();
      image.onload = function()
      {
         this.forceUpdate();
      }.bind(this);

      const filename = squadronCard["squadron-image"];
      image.src = Endpoint.ARMADA_IMAGES + filename;

      return image;
   };

   PlayAreaUI.prototype.drawExplosion = function(context)
   {
      const explosion = this.props.explosion;

      if (explosion)
      {
         const position = explosion.position;
         const size = explosion.size;
         const audioClip = document.getElementById("explosionAudio");

         const x = position.x;
         const y = position.y;
         const width = size;
         const height = size;

         context.save();
         context.scale(this.props.scale, this.props.scale);
         context.translate(x, y);
         context.drawImage(this.explosionImage, -width / 2, -height / 2, width, height);

         audioClip.play();

         // Cleanup.
         context.restore();
      }
   };

   PlayAreaUI.prototype.drawLaserBeam = function(context)
   {
      const laserBeam = this.props.laserBeam;

      if (laserBeam)
      {
         const audioClip = laserBeam.audioClip;
         const color = laserBeam.color;
         const fromPosition = laserBeam.fromPosition;
         const isPrimary = laserBeam.isPrimary;
         const toPosition = laserBeam.toPosition;

         context.save();
         context.scale(this.props.scale, this.props.scale);
         context.lineWidth = 3;
         context.strokeStyle = color;

         if (!isPrimary)
         {
            const lineDashSegments = [10, 5];
            context.setLineDash(lineDashSegments);
         }

         context.beginPath();
         context.moveTo(fromPosition.x, fromPosition.y);
         context.lineTo(toPosition.x, toPosition.y);
         context.stroke();

         if (audioClip)
         {
            audioClip.play();
         }

         // Cleanup.
         context.restore();
      }
   };

   PlayAreaUI.FOREGROUND_COLOR = "white";
   PlayAreaUI.EASY_COLOR = "lime";
   PlayAreaUI.HARD_COLOR = "red";

   PlayAreaUI.prototype.drawManeuver = function(context)
   {
      const maneuverObj = this.props.maneuver;

      if (maneuverObj)
      {
         const color = maneuverObj.color;
         const fromPosition = maneuverObj.fromPosition;
         const toPolygon = maneuverObj.toPolygon;

         context.save();
         context.scale(this.props.scale, this.props.scale);

         // Mark the center.
         context.fillStyle = PlayAreaUI.FOREGROUND_COLOR;
         const radius = 4;
         context.beginPath();
         context.arc(fromPosition.x, fromPosition.y, radius, 0, 2 * Math.PI);
         context.fill();

         // Draw from ship base.
         paintPathComponent(maneuverObj.fromPolygon, context, PlayAreaUI.FOREGROUND_COLOR);

         if (toPolygon)
         {
            // Draw to ship base.
            paintPathComponent(toPolygon, context, PlayAreaUI.FOREGROUND_COLOR);
         }

         // Draw maneuver path.
         paintPathComponent(maneuverObj.path, context, color);

         // Cleanup.
         context.restore();
      }
   };

   PlayAreaUI.prototype.drawShips = function(context)
   {
      const scale = this.props.scale;
      const shipInstances = this.props.shipInstances;

      Object.values(shipInstances).forEach(shipInstance =>
      {
         const id = shipInstance.id;
         const shipKey = shipInstance.shipKey;
         const faction = AA.Selector.factionValueByShip(shipKey);
         const image = this.factionShipToImage[faction.key + "|" + shipKey];
         const position = shipInstance.position;
         const shipBase = AA.Selector.shipBaseValueByShip(shipKey);
         const factionColor = faction.color;

         ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
      }, this);
   };

   PlayAreaUI.prototype.drawSquadrons = function(context)
   {
      const scale = this.props.scale;
      const squadronInstances = this.props.squadronInstances;

      Object.values(squadronInstances).forEach(squadronInstance =>
      {
         const id = squadronInstance.id;
         const squadronKey = squadronInstance.squadronKey;
         const faction = AA.Selector.factionValueBySquadron(squadronKey);
         const image = this.factionSquadronToImage[faction.key + "|" + squadronKey];
         const position = squadronInstance.position;
         const factionColor = faction.color;

         SquadronImage.draw(context, scale, id, image, position, factionColor);
      }, this);
   };

   PlayAreaUI.prototype.loadImages = function()
   {
      const shipInstances = this.props.shipInstances;
      const factionShips = [];

      shipInstances.forEach(shipInstance =>
      {
         const shipKey = shipInstance.shipKey;
         const faction = AA.Selector.factionValueByShip(shipKey);
         const factionShip = faction.key + "|" + shipKey;
         if (!factionShips.includes(factionShip))
         {
            factionShips.push(factionShip);
         }
      });

      for (let i = 0; i < factionShips.length; i++)
      {
         const factionShip = factionShips[i];
         const faction = AA.Selector.faction(factionShip.split("|")[0]);
         const shipCard = AA.Selector.shipCard(factionShip.split("|")[1]);
         this.factionShipToImage[factionShip] = this.createShipIcon(faction, shipCard);
      }

      const factionSquadrons = [];
      const squadronInstances = this.props.squadronInstances;

      squadronInstances.forEach(squadronInstance =>
      {
         const squadronKey = squadronInstance.squadronKey;
         const faction = AA.Selector.factionValueBySquadron(squadronKey);
         const factionSquadron = faction.key + "|" + squadronKey;
         if (!factionSquadrons.includes(factionSquadron))
         {
            factionSquadrons.push(factionSquadron);
         }
      });

      for (let i = 0; i < factionSquadrons.length; i++)
      {
         const factionSquadron = factionSquadrons[i];
         const faction = AA.Selector.faction(factionSquadron.split("|")[0]);
         const squadronCard = AA.Selector.squadronCard(factionSquadron.split("|")[1]);
         this.factionSquadronToImage[factionSquadron] = this.createSquadronIcon(faction, squadronCard);
      }

      // this.explosionImage = this.createExplosionImage();
   };

   PlayAreaUI.prototype.paint = function()
   {
      const canvas = document.getElementById("playAreaCanvas");
      const context = canvas.getContext("2d");
      const scale = this.props.scale;
      const width = scale * this.props.width;
      const height = scale * this.props.height;

      context.clearRect(0, 0, width, height);

      this.drawShips(context);
      this.drawSquadrons(context);
      this.drawManeuver(context);
      this.drawLaserBeam(context);
      this.drawExplosion(context);
   };

   const paintPathComponent = function(path, context, strokeStyle)
   {
      if (path.length >= 2)
      {
         context.beginPath();
         context.moveTo(path[0], path[1]);

         for (let i = 2; i < path.length; i += 2)
         {
            context.lineTo(path[i], path[i + 1]);
         }

         context.strokeStyle = strokeStyle;
         context.stroke();
      }
   };

   PlayAreaUI.propTypes = {
      shipInstances: PropTypes.object.isRequired,
      squadronInstances: PropTypes.object.isRequired,

      height: PropTypes.number,
      image: PropTypes.string,
      resourceBase: PropTypes.string,
      scale: PropTypes.number,
      width: PropTypes.number,

      explosion: PropTypes.object,
      laserBeam: PropTypes.object,
      maneuver: PropTypes.object
   };

   PlayAreaUI.defaultProps = {
      height: 915,
      image: "background/horsehead_nebula_02092008.jpg",
      resourceBase: Endpoint.LOCAL_RESOURCE,
      scale: 1.0,
      width: 1830
   };

   const PlayAreaContainer = (gameState, ownProps = {}) =>
   {
      const playFormatKey = AS.Selector.playFormatKey(gameState);
      const playFormat = AA.Selector.playFormat(playFormatKey);
      const image = "background/" + (playFormat.key === AA.PlayFormat.STANDARD ? "horsehead_nebula_02092008.jpg" : "pia13845.jpg");
      const scale = (ownProps.scale !== undefined ? ownProps.scale : 1.0);

      // const displayExplosion = gameState.displayExplosion;
      // const displayLaserBeam = gameState.displayLaserBeam;
      // const displayManeuver = gameState.displayManeuver;

      return React.createElement(PlayAreaUI,
      {
         height: playFormat.height,
         image: image,
         resourceBase: ownProps.resourceBase,
         scale: scale,
         shipInstances: Object.values(gameState.shipInstances),
         squadronInstances: Object.values(gameState.squadronInstances),
         width: playFormat.width,

         // explosion: displayExplosion,
         // laserBeam: laserBeam,
         // maneuver: displayManeuver
      });
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
   exports.CommandUI = CommandUI;
   exports.DefenseTokenUI = DefenseTokenUI;
   exports.DicePanel = DicePanel;
   exports.FactionUI = FactionUI;
   exports.ImageWithLabelUI = ImageWithLabelUI;
   exports.ShipImage = ShipImage;
   exports.StatusBarUI = StatusBarUI;
   exports.TokenPanel = TokenPanel;
   exports.UpgradeSlotUI = UpgradeSlotUI;
   exports.PlayAreaContainer = PlayAreaContainer;
   exports.StatusBarContainer = StatusBarContainer;
   exports.Endpoint = Endpoint;
   exports.Help = Help;
   exports.ReactUtilities = ReactUtilities;

   Object.defineProperty(exports, '__esModule', { value: true });

})));
