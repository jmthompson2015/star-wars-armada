(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.AV = {})));
}(this, (function (exports) { 'use strict';

  const Endpoint = {};

  Endpoint.ARMADA_IMAGES =
    'https://raw.githubusercontent.com/jmthompson2015/star-wars-armada-data/master/image/';
  Endpoint.LOCAL_RESOURCE = '../../resource/';

  const computeHeight = (cardKey, widthIn) =>
    (widthIn * AA.Selector.heightByCard(cardKey)) / AA.Selector.widthByCard(cardKey);

  const createShipBackSrc = cardKey => {
    const faction = AA.Selector.factionValueByShip(cardKey);
    const factionName = faction.name.toLowerCase().replace(/ /g, '-');

    return `ship-card/${factionName}/${factionName}-back.png`;
  };

  const createSquadronBackSrc = cardKey => {
    const faction = AA.Selector.factionValueBySquadron(cardKey);
    const factionName = faction.name.toLowerCase().replace(/ /g, '-');

    return `squadron-card/${factionName}/${factionName}-back.png`;
  };

  const createUpgradeBackSrc = cardKey => {
    const slotKey = AA.Selector.upgradeSlotKeysByUpgrade(cardKey)[0];
    const slot = AA.Selector.upgradeSlot(slotKey);
    const slotName = slot.name.toLowerCase().replace(/ /g, '-');

    return `upgrade-card/${slotName}/${slotName}-back.png`;
  };

  const determineCardBack = card0 =>
    R.cond([
      [AA.Selector.isDamageCard, R.always('damage-card/damage-back.png')],
      [AA.Selector.isShipCard, card => createShipBackSrc(card.key)],
      [AA.Selector.isSquadronCard, card => createSquadronBackSrc(card.key)],
      [AA.Selector.isUpgradeCard, card => createUpgradeBackSrc(card.key)],
    ])(card0);

  const createSrc = (card, isFaceUp) =>
    R.ifElse(R.always(isFaceUp), R.prop('image'), determineCardBack)(card);

  const determineFaceUpCardTitle = card =>
    R.ifElse(AA.Selector.isDamageCard, R.prop('title'), R.prop('name'))(card);

  const determineFaceDownCardTitle = card =>
    R.cond([
      [AA.Selector.isDamageCard, R.always('Damage Card')],
      [AA.Selector.isShipCard, R.always('Ship Card')],
      [AA.Selector.isSquadronCard, R.always('Squadron Card')],
      [AA.Selector.isUpgradeCard, R.always('Upgrade Card')],
    ])(card);

  const determineCardTitle = (card, isFaceUp) =>
    R.ifElse(R.always(isFaceUp), determineFaceUpCardTitle, determineFaceDownCardTitle)(card);

  // /////////////////////////////////////////////////////////////////////////////////////////////////
  class CardImage extends React.PureComponent {
    componentDidMount() {
      this.paint(this.props);
    }

    componentDidUpdate() {
      this.paint(this.props);
    }

    paint() {
      const { card, isFaceUp, isReady, resourceBase, slicing, width } = this.props;

      const canvas = document.getElementById(this.canvasId());
      const context = canvas.getContext('2d');
      const dWidth = width;
      const height = computeHeight(card.key, dWidth);
      const src = resourceBase + createSrc(card, isFaceUp);
      const image = new Image();
      image.onload = () => {
        if (slicing === undefined) {
          if (isReady) {
            context.drawImage(image, 0, 0, dWidth, height);
          } else {
            context.save();
            context.translate(height / 2.0, dWidth / 2.0);
            context.rotate(Math.PI / 2.0);
            context.drawImage(image, -dWidth / 2.0, -height / 2.0, dWidth, height);
            context.restore();
          }
        } else {
          const sWidth = image.naturalWidth;
          const sy = image.naturalHeight * (1.0 - slicing);
          const sHeight = image.naturalHeight * slicing;
          const dHeight = height * slicing;

          if (isReady) {
            context.drawImage(image, 0, sy, sWidth, sHeight, 0, 0, dWidth, dHeight);
          } else {
            context.save();
            context.translate(dHeight / 2.0, dWidth / 2.0);
            context.rotate(Math.PI / 2.0);
            context.drawImage(
              image,
              0,
              sy,
              sWidth,
              sHeight,
              -dWidth / 2.0,
              -dHeight / 2.0,
              dWidth,
              dHeight,
            );
            context.restore();
          }
        }
      };
      image.onerror = this.logLoadFailure;
      image.src = src;
    }

    canvasId() {
      const { card, isFaceUp, isReady, myKey, slicing } = this.props;

      return `CardImageCanvas${card.key}${isFaceUp}${isReady}${myKey}${slicing}`;
    }

    render() {
      const { card, isFaceUp, isReady, slicing, width } = this.props;

      const myCanvasId = this.canvasId();
      const height = computeHeight(card.key, width);
      const title = determineCardTitle(card, isFaceUp);
      let className;
      let canvasHeight;
      let canvasWidth;

      if (slicing === undefined) {
        className = 'br3';
        canvasWidth = isReady ? width : height;
        canvasHeight = isReady ? height : width;
      } else {
        canvasWidth = isReady ? width : height * slicing;
        canvasHeight = isReady ? height * slicing : width;
      }

      return ReactDOMFactories.canvas({
        key: myCanvasId,
        className,
        height: canvasHeight,
        id: myCanvasId,
        title,
        width: canvasWidth,
      });
    }
  }

  CardImage.propTypes = {
    card: PropTypes.shape({ key: PropTypes.string.isRequired }).isRequired,

    isFaceUp: PropTypes.bool,
    isReady: PropTypes.bool,
    myKey: PropTypes.string, // default: undefined
    resourceBase: PropTypes.string,
    slicing: PropTypes.number, // default: undefined
    width: PropTypes.number,
  };

  CardImage.defaultProps = {
    isFaceUp: true,
    isReady: true,
    myKey: '',
    resourceBase: Endpoint.ARMADA_IMAGES,
    slicing: undefined,
    width: 200,
  };

  const ReactUtilities = {};

  ReactUtilities.createButton = (element, key, className, props = {}) => {
    const newProps = R.merge(props, {
      key,
      className,
    });

    return ReactDOMFactories.button(newProps, element);
  };

  ReactUtilities.createCell = (element, key, className, props = {}) => {
    const newProps = R.merge(props, {
      key,
      className: `dtc${className ? ` ${className}` : ''}`,
    });

    return ReactDOMFactories.div(newProps, element);
  };

  ReactUtilities.createFlexbox = (cells, key, className, props = {}) => {
    const newProps = R.merge(props, {
      key,
      className: `flex${className ? ` ${className}` : ''}`,
    });

    return ReactDOMFactories.div(newProps, cells);
  };

  ReactUtilities.createFlexboxWrap = (cells, key, className, props = {}) => {
    const newProps = R.merge(props, {
      key,
      className: `flex flex-wrap${className ? ` ${className}` : ''}`,
    });

    return ReactDOMFactories.div(newProps, cells);
  };

  ReactUtilities.createImg = (src, key, className, props = {}) => {
    const newProps = R.merge(props, {
      src,
      key,
      className,
    });

    return ReactDOMFactories.img(newProps);
  };

  ReactUtilities.createRow = (cells, key, className, props = {}) => {
    const newProps = R.merge(props, {
      key,
      className: `dt-row${className ? ` ${className}` : ''}`,
    });

    return ReactDOMFactories.div(newProps, cells);
  };

  ReactUtilities.createSpan = (element, key, className, props = {}) => {
    const newProps = R.merge(props, {
      key,
      className,
    });

    return ReactDOMFactories.span(newProps, element);
  };

  ReactUtilities.createTable = (rows, key, className, props = {}) => {
    const newProps = R.merge(props, {
      key,
      className: `dt${className ? ` ${className}` : ''}`,
    });

    return ReactDOMFactories.div(newProps, rows);
  };

  class CardInstancesArea extends React.Component {
    constructor(props) {
      super(props);

      const { isExpanded } = this.props;

      this.state = {
        isExpanded,
      };

      this.toggleExpand = this.toggleExpandFunction.bind(this);
    }

    createCardInstanceCells() {
      const { cardInstanceUIs } = this.props;
      const { isExpanded } = this.state;

      const cells = cardInstanceUIs.map((cardInstanceUI, i) => {
        let myClassName;

        if (isExpanded || i === cardInstanceUIs.length - 1) {
          myClassName = 'dtc pa1 v-mid';
        } else if (i < cardInstanceUIs.length - 1) {
          myClassName = 'dn';
        }

        return ReactDOMFactories.div(
          {
            key: `cardCell${i}`,
            className: myClassName,
          },
          cardInstanceUI,
        );
      });

      const cell = ReactUtilities.createCell(cells);

      return ReactUtilities.createRow(cell, 'mainRow');
    }

    createLabelUI() {
      const { cardInstanceUIs, label } = this.props;

      const labelUI = ReactUtilities.createCell(label, 'labelCell', 'b tc');

      const cardCount = cardInstanceUIs.length;
      const { isExpanded } = this.state;
      let expandLabel;

      if (cardCount > 1) {
        if (isExpanded) {
          expandLabel = '\u25B6';
        } else {
          expandLabel = '\u25BC';
        }
      } else {
        expandLabel = '';
      }

      const expandControl = ReactDOMFactories.div(
        {
          key: 'expandCell',
          onClick: this.toggleExpand,
        },
        expandLabel,
      );

      const row = ReactUtilities.createRow([labelUI, expandControl], 'labelExpandRow');
      const table = ReactUtilities.createTable(row, 'labelExpandTable', 'w-100');

      const tableCell = ReactUtilities.createCell(table, 'tableCell');
      return ReactUtilities.createRow(tableCell, 'labelRow');
    }

    toggleExpandFunction() {
      const { isExpanded: isExpandedOld } = this.state;

      this.setState({
        isExpanded: !isExpandedOld,
      });
    }

    render() {
      const rows = [];

      rows.push(this.createLabelUI());
      rows.push(this.createCardInstanceCells());

      return ReactUtilities.createTable(rows, undefined);
    }
  }

  CardInstancesArea.propTypes = {
    cardInstanceUIs: PropTypes.arrayOf().isRequired,

    isExpanded: PropTypes.bool,
    label: PropTypes.string,
  };

  CardInstancesArea.defaultProps = {
    isExpanded: true,
    label: undefined,
  };

  class CommandUI extends React.PureComponent {
    render() {
      const { command, isSmall, showLabel, title } = this.props;

      const fontKey = command.key === 'concentrateFire' ? 'concentrate' : command.key;
      const size = isSmall ? 'f3' : 'f2';
      const myTitle = title || command.name;

      const image = ReactDOMFactories.i({
        className: `${size} v-mid ffi ffi-swa-${fontKey}`,
        title: myTitle,
      });

      return showLabel
        ? ReactDOMFactories.span(
            {
              title: myTitle,
            },
            image,
            ' ',
            command.name,
          )
        : image;
    }
  }

  CommandUI.propTypes = {
    command: PropTypes.shape().isRequired,

    isSmall: PropTypes.bool,
    showLabel: PropTypes.bool,
    title: PropTypes.string,
  };

  CommandUI.defaultProps = {
    isSmall: false,
    showLabel: false,
    title: undefined,
  };

  class DefenseTokenUI extends React.PureComponent {
    render() {
      const { defenseInstance, isSmall, showLabel } = this.props;

      const defenseToken = AA.Selector.defenseToken(defenseInstance.defenseTokenKey);
      const fontKey = defenseInstance.defenseTokenKey;
      const size = isSmall ? 'f3' : 'f2';
      const title = defenseToken.name;
      const color = defenseInstance.isReady ? 'bg-green' : 'bg-orange';

      const image = ReactDOMFactories.i({
        className: `${color} ${size} v-mid w-100 ffi ffi-swa-${fontKey}`,
        title,
      });

      return showLabel
        ? ReactDOMFactories.span(
            {
              className: `${color} h-100 v-mid w-100`,
              title,
            },
            image,
            ' ',
            defenseToken.name,
          )
        : image;
    }
  }

  DefenseTokenUI.propTypes = {
    defenseInstance: PropTypes.shape().isRequired,

    isSmall: PropTypes.bool,
    showLabel: PropTypes.bool,
  };

  DefenseTokenUI.defaultProps = {
    isSmall: false,
    showLabel: false,
  };

  const addDefenseToken = (rows, defenseInstance) => {
    const icon = React.createElement(DefenseTokenUI, {
      defenseInstance,
    });

    const labeledImage = ReactDOMFactories.span(
      {
        className: 'center tc v-mid w-100',
      },
      icon,
    );

    rows.push(ReactUtilities.createFlexbox(labeledImage, `defenseRow${rows.length}`, 'tc v-mid'));
  };

  const comparator = (a, b) => a.sortOrder - b.sortOrder;

  const maybeAddCommandToken = (rows, command, count) => {
    if (count !== undefined && count !== 0) {
      const icon = React.createElement(CommandUI, {
        command,
      });

      const labeledImage = ReactDOMFactories.span(
        {
          className: 'center tc v-mid',
        },
        icon,
        count,
      );

      rows.push(ReactUtilities.createFlexbox(labeledImage, `tokenRow${rows.length}`, 'tc v-mid'));
    }
  };

  class TokenPanel extends React.PureComponent {
    render() {
      const { defenseInstances, tokenCounts } = this.props;

      const rows = [];
      const commands = AA.Selector.enumValues(AA.Command).sort(comparator);

      commands.forEach(command => {
        maybeAddCommandToken(rows, command, tokenCounts[command.key]);
      });

      defenseInstances.forEach(defenseInstance => {
        addDefenseToken(rows, defenseInstance);
      });

      return ReactUtilities.createFlexboxWrap(
        rows,
        'tokenPanel',
        'bg-white center content-center flex-column justify-center tc',
      );
    }
  }

  TokenPanel.propTypes = {
    defenseInstances: PropTypes.shape(),
    tokenCounts: PropTypes.shape(),
  };

  TokenPanel.defaultProps = {
    defenseInstances: [],
    tokenCounts: {},
  };

  const determineCard = cardInstance => {
    let answer;

    if (cardInstance.shipKey !== undefined) {
      answer = AA.Selector.shipCard(cardInstance.shipKey);
    } else if (cardInstance.squadronKey !== undefined) {
      answer = AA.Selector.squadronCard(cardInstance.squadronKey);
    } else if (cardInstance.upgradeKey !== undefined) {
      answer = AA.Selector.upgradeCard(cardInstance.upgradeKey);
    } else if (cardInstance.damageKey !== undefined) {
      answer = AA.Selector.damageCard(cardInstance.damageKey);
    }

    return answer;
  };

  class CardInstanceUI extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isSmall: true,
      };

      this.toggleSize = this.toggleSizeFunction.bind(this);
    }

    createAttachmentPanel(cells) {
      const { damageInstances, upgradeInstances } = this.props;

      const attachments = [];

      if (upgradeInstances.length > 0) {
        for (let i = 0; i < upgradeInstances.length; i += 1) {
          const upgradeInstance = upgradeInstances[i];
          const upgradeUI = this.createAttachmentUI(upgradeInstance);
          attachments.push(upgradeUI);
        }
      }

      if (damageInstances.length > 0) {
        for (let j = 0; j < damageInstances.length; j += 1) {
          const damageInstance = damageInstances[j];
          const damageUI = this.createAttachmentUI(damageInstance);
          attachments.push(damageUI);
        }
      }

      cells.push(
        React.createElement(CardInstancesArea, {
          key: 'attachmentPanel',
          cardInstanceUIs: attachments,
          isExpanded: false,
        }),
      );
    }

    createAttachmentUI(cardInstance) {
      const { width } = this.props;

      return React.createElement(CardInstanceUI, {
        key: `attachment${cardInstance.id}`,
        cardInstance,
        width: width / 1.4,
      });
    }

    createCardImage(cardInstance, myKey) {
      let { width } = this.props;
      const { isSmall } = this.state;

      if (isSmall) {
        width /= 2;
      }
      const card = determineCard(cardInstance);

      return React.createElement(CardImage, {
        card,
        myKey,
        width,
      });
    }

    createTokenPanel(cardId) {
      const { defenseInstances, tokenCounts } = this.props;

      const props = {
        key: `token${cardId}`,
        defenseInstances,
        tokenCounts,
      };

      return React.createElement(TokenPanel, props);
    }

    toggleSizeFunction() {
      const { isSmall: isSmallOld } = this.state;

      this.setState({
        isSmall: !isSmallOld,
      });
    }

    render() {
      const cells = [];
      const { cardInstance } = this.props;
      let myKey = 'cardInstanceUI';

      if (cardInstance) {
        const card = determineCard(cardInstance);
        myKey += cardInstance.id + card.key;
        const image = this.createCardImage(cardInstance, myKey);
        const tokenPanel = this.createTokenPanel(cardInstance.id);
        const cell = ReactDOMFactories.div(
          {
            key: `imagePanel${cells.length}`,
            className: 'v-mid',
            onClick: this.toggleSize,
          },
          image,
        );

        cells.push(cell);
        cells.push(tokenPanel);
        this.createAttachmentPanel(cells);
      }

      return ReactUtilities.createFlexboxWrap(
        cells,
        myKey,
        'bg-xw-medium items-center justify-center ma0 pa0',
      );
    }
  }

  CardInstanceUI.propTypes = {
    cardInstance: PropTypes.shape(),
    damageInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.DamageState)),
    defenseInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.DefenseTokenState)),
    tokenCounts: PropTypes.shape(),
    upgradeInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.UpgradeState)),
    width: PropTypes.number,
  };

  CardInstanceUI.defaultProps = {
    cardInstance: undefined,
    damageInstances: [],
    defenseInstances: [],
    tokenCounts: {},
    upgradeInstances: [],
    width: 250,
  };

  const labelFunction = command =>
    React.createElement(CommandUI, {
      command,
      isSmall: true,
      showLabel: true,
      title: command.text,
    });

  class CommandChooser extends React.Component {
    constructor(props) {
      super(props);

      const { initialCommand } = this.props;

      this.state = {
        selected: initialCommand,
      };

      this.handleChange = this.handleChangeFunction.bind(this);
    }

    handleChangeFunction(event) {
      const { commands, onChange } = this.props;

      const { id } = event.target;
      const selected = commands[id];

      this.setState(
        {
          selected,
        },
        onChange(selected),
      );
    }

    render() {
      const { clientProps, commands, panelClass } = this.props;

      const inputProps = R.merge(
        {
          name: 'chooseCommand', // needed for radio
          onChange: this.handleChange,
          type: 'radio',
        },
        clientProps,
      );

      let i = 0;
      const { selected } = this.state;
      const mapFunction = command => {
        const input = ReactDOMFactories.input(
          R.merge(inputProps, {
            id: i,
            defaultChecked: command === selected,
          }),
        );
        const label = labelFunction(command);
        const cells = [];
        cells.push(ReactUtilities.createCell(input, cells.length, 'pa1 v-mid'));
        cells.push(ReactUtilities.createCell(label, cells.length, 'pa1 v-mid'));
        i += 1;

        return ReactUtilities.createRow(cells, `row${command.sourceName}${command.sourceKey}${i}`);
      };
      const rows = R.map(mapFunction, commands);

      return ReactUtilities.createTable(rows, undefined, panelClass);
    }
  }

  CommandChooser.propTypes = {
    onChange: PropTypes.func.isRequired,
    commands: PropTypes.arrayOf(PropTypes.instanceOf(AA.Command)).isRequired,

    clientProps: PropTypes.shape(),
    initialCommand: PropTypes.shape(),
    panelClass: PropTypes.string,
  };

  CommandChooser.defaultProps = {
    clientProps: {},
    initialCommand: undefined,
    panelClass: 'bg-xw-light f6',
  };

  const comparator$1 = (a, b) => {
    let answer = a.sortOrder - b.sortOrder;
    answer = answer === 0 && a.color > b.color ? 1 : answer;
    answer = answer === 0 && a.color < b.color ? -1 : answer;

    return answer;
  };

  const createImage = die => {
    const src = Endpoint.ARMADA_IMAGES + die.image;

    return ReactUtilities.createImg(src, undefined, 'tc v-mid', {
      width: 48,
    });
  };

  class DicePanel extends React.PureComponent {
    render() {
      const { dice } = this.props;
      const sortedDice = R.sort(comparator$1, dice);
      let count = 0;
      const mapFunction = diceKey => {
        count += 1;
        return ReactUtilities.createCell(createImage(diceKey), count);
      };
      const cells = R.map(mapFunction, sortedDice);
      const row = ReactUtilities.createRow(cells);

      return ReactUtilities.createTable(row, undefined, 'bg-white center v-mid');
    }
  }

  DicePanel.propTypes = {
    dice: PropTypes.arrayOf(PropTypes.instanceOf(AA.DiceValue)),
  };

  DicePanel.defaultProps = {
    dice: [],
  };

  class ImageWithLabelUI extends React.PureComponent {
    render() {
      const { src, label, showLabel, width } = this.props;

      const image = ReactDOMFactories.img({
        className: 'v-mid',
        src,
        title: label,
        width,
      });

      let answer = image;

      if (showLabel) {
        answer = ReactDOMFactories.span({}, image, ' ', label);
      }

      return answer;
    }
  }

  ImageWithLabelUI.propTypes = {
    src: PropTypes.string.isRequired,

    label: PropTypes.string,
    showLabel: PropTypes.bool,
    width: PropTypes.number,
  };

  ImageWithLabelUI.defaultProps = {
    label: '',
    showLabel: false,
    width: 24,
  };

  class FactionUI extends React.PureComponent {
    render() {
      const { faction, isSmall, resourceBase, showLabel } = this.props;

      const src = resourceBase + faction.image;
      const size = isSmall ? 24 : 32;

      return React.createElement(ImageWithLabelUI, {
        src,
        label: faction.name,
        showLabel,
        width: size,
      });
    }
  }

  FactionUI.propTypes = {
    faction: PropTypes.shape().isRequired,

    isSmall: PropTypes.bool,
    resourceBase: PropTypes.string,
    showLabel: PropTypes.bool,
  };

  FactionUI.defaultProps = {
    isSmall: false,
    resourceBase: Endpoint.ARMADA_IMAGES,
    showLabel: false,
  };

  const ShipImage = {};

  const DEG_TO_RADIANS = Math.PI / 180.0;

  const drawFiringArcs = (context, halfWidth, halfHeight) => {
    // Draw the firing arcs.
    context.beginPath();
    context.moveTo(-halfWidth, -halfHeight);
    context.lineTo(halfWidth, halfHeight);
    context.moveTo(halfWidth, -halfHeight);
    context.lineTo(-halfWidth, halfHeight);
    context.stroke();
  };

  ShipImage.draw = (context0, scale, id, image, position, shipBase, factionColor) => {
    // Setup.
    const { height, width } = shipBase;
    const halfWidth = Math.ceil(width / 2);
    const halfHeight = Math.ceil(height / 2);

    const context = context0;
    context.save();
    context.scale(scale, scale);
    context.translate(position.x, position.y);
    context.rotate(position.heading * DEG_TO_RADIANS);

    // Draw background square.
    context.fillStyle = 'rgba(255,255,255,0.4)';
    context.fillRect(-halfWidth, -halfHeight, width, height);

    // Draw the firing arcs.
    context.strokeStyle = factionColor;
    drawFiringArcs(context, halfWidth, halfHeight);

    // Draw ship image.
    context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);

    if (id !== undefined) {
      // Draw the ship ID.
      context.rotate(90 * DEG_TO_RADIANS);
      context.fillStyle = factionColor;
      context.font = '14px sans-serif';
      context.fillText(id, -halfHeight, halfWidth);
      context.rotate(-90 * DEG_TO_RADIANS);
    }

    // Cleanup.
    context.restore();
  };

  class StatusBarUI extends React.PureComponent {
    render() {
      const { activeShipName, phaseName, round, userMessage, helpBase } = this.props;

      const helpLinkUI = ReactDOMFactories.a(
        {
          href: `${helpBase}Help.html`,
          target: '_blank',
        },
        'Help',
      );

      const cellClassName = 'ba';

      const roundCell = ReactUtilities.createCell(['Round: ', round], 0, cellClassName, {
        title: 'Round',
      });
      const phaseCell = ReactUtilities.createCell(['Phase: ', phaseName], 1, cellClassName, {
        title: 'Phase',
      });
      const activeShipCell = ReactUtilities.createCell(
        ['Active Ship: ', activeShipName],
        2,
        cellClassName,
        {
          title: 'Active Ship',
        },
      );
      const userMessageCell = ReactUtilities.createCell(userMessage, 3, cellClassName, {
        title: 'User Message',
      });
      const helpCell = ReactUtilities.createCell(helpLinkUI, 4, cellClassName);

      const cells = [roundCell, phaseCell, activeShipCell, userMessageCell, helpCell];
      const row = ReactUtilities.createRow(cells);

      return ReactUtilities.createTable(
        row,
        'statusBarUITable',
        'bg-xw-light collapse ma0 tc v-mid w-100',
      );
    }
  }

  StatusBarUI.propTypes = {
    activeShipName: PropTypes.string.isRequired,
    phaseName: PropTypes.string.isRequired,
    round: PropTypes.number.isRequired,
    userMessage: PropTypes.string.isRequired,

    helpBase: PropTypes.string,
  };

  StatusBarUI.defaultProps = {
    helpBase: './',
  };

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

  class FleetCardsUI extends React.PureComponent {
    render() {
      const {
        shipInstances,
        squadronInstances,
        shipToDamages,
        shipToDefenseInstances,
        shipToTokenCounts,
        shipToUpgrades,
      } = this.props;

      let i = 0;
      const mapFunction0 = shipInstance => {
        const element = React.createElement(CardInstanceUI, {
          cardInstance: shipInstance,
          damageInstances: shipToDamages[shipInstance.id],
          defenseInstances: shipToDefenseInstances[shipInstance.id],
          tokenCounts: shipToTokenCounts[shipInstance.id],
          upgradeInstances: shipToUpgrades[shipInstance.id],
        });

        i += 1;

        return ReactUtilities.createCell(element, `shipCell${i}`, 'alignTop v-top');
      };
      const shipCells = R.map(mapFunction0, shipInstances);

      let j = 0;
      const mapFunction1 = squadronInstance => {
        const element = React.createElement(CardInstanceUI, {
          cardInstance: squadronInstance,
        });

        j += 1;

        return ReactUtilities.createCell(element, `squadronCell${j}`, 'alignTop v-top');
      };
      const squadronCells = R.map(mapFunction1, squadronInstances);

      const cells = R.concat(shipCells, squadronCells);
      const row = ReactUtilities.createRow(cells, 'fleetCardsUIRow');

      return ReactUtilities.createTable(row, 'fleetCardsUITable', 'center');
    }
  }

  FleetCardsUI.propTypes = {
    shipInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.ShipState)).isRequired,
    squadronInstances: PropTypes.arrayOf(PropTypes.instanceOf(AS.SquadronState)).isRequired,

    shipToDamages: PropTypes.shape(),
    shipToDefenseInstances: PropTypes.shape(),
    shipToTokenCounts: PropTypes.shape(),
    shipToUpgrades: PropTypes.shape(),
  };

  FleetCardsUI.defaultProps = {
    shipToDamages: {},
    shipToDefenseInstances: {},
    shipToTokenCounts: {},
    shipToUpgrades: {},
  };

  const FleetCardsContainer = (gameState, ownProps = {}) => {
    const { fleetId } = ownProps;
    const shipInstances = AS.Selector.shipInstancesByFleet(fleetId, gameState);
    const shipIds = R.map(shipInstance => shipInstance.id, shipInstances);
    const reduceFunction0 = (accum, shipId) =>
      R.assoc(shipId, AS.Selector.upgradeInstancesByShip(shipId, gameState), accum);
    const shipToUpgrades = R.reduce(reduceFunction0, {}, shipIds);
    const reduceFunction1 = (accum, shipId) =>
      R.assoc(shipId, AS.Selector.criticalInstancesByShip(shipId, gameState), accum);
    const shipToDamages = R.reduce(reduceFunction1, {}, shipIds);
    const reduceFunction2 = (accum, shipInstance) =>
      R.assoc(
        shipInstance.id,
        AS.Selector.defenseTokenInstancesByShip(shipInstance.id, gameState),
        accum,
      );
    const shipToDefenseInstances = R.reduce(reduceFunction2, {}, shipInstances);
    const reduceFunction3 = (accum, shipInstance) =>
      R.assoc(shipInstance.id, shipInstance.tokenCounts, accum);
    const shipToTokenCounts = R.reduce(reduceFunction3, {}, shipInstances);
    const squadronInstances = AS.Selector.squadronInstancesByFleet(fleetId, gameState);

    return React.createElement(FleetCardsUI, {
      shipInstances,
      shipToDamages,
      shipToDefenseInstances,
      shipToTokenCounts,
      shipToUpgrades,
      squadronInstances,
    });
  };

  const SquadronImage = {};

  const DEG_TO_RADIANS$1 = Math.PI / 180.0;

  SquadronImage.draw = (context0, scale, id, image, position, factionColor) => {
    // Setup.
    const width = 35;
    const height = 35;
    const halfWidth = Math.ceil(width / 2);
    const halfHeight = Math.ceil(height / 2);

    const context = context0;
    context.save();
    context.scale(scale, scale);
    context.translate(position.x, position.y);
    context.rotate(position.heading * DEG_TO_RADIANS$1);

    // Draw background circle.
    context.fillStyle = 'rgba(255,255,255,0.4)';
    context.beginPath();
    context.arc(0, 0, halfWidth, 0, 2 * Math.PI);
    context.fill();

    // Draw ship image.
    context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);

    if (id !== undefined) {
      // Draw the ship ID.
      context.rotate(90 * DEG_TO_RADIANS$1);
      context.fillStyle = factionColor;
      context.font = '14px sans-serif';
      context.fillText(id, -halfHeight, halfWidth);
      context.rotate(-90 * DEG_TO_RADIANS$1);
    }

    // Cleanup.
    context.restore();
  };

  // const createExplosionImage = () => {
  //   const image = new Image();
  //   image.src = `${Endpoint.LOCAL_RESOURCE}ship/explosion.png`;
  //
  //   return image;
  // };

  const paintPathComponent = (path, context0, strokeStyle) => {
    if (path.length >= 2) {
      const context = context0;
      context.beginPath();
      context.moveTo(path[0], path[1]);

      for (let i = 2; i < path.length; i += 2) {
        context.lineTo(path[i], path[i + 1]);
      }

      context.strokeStyle = strokeStyle;
      context.stroke();
    }
  };

  class PlayAreaUI extends React.Component {
    constructor(props) {
      super(props);

      this.explosionImage = undefined;
      this.factionShipToImage = {};
      this.factionSquadronToImage = {};
    }

    componentDidMount() {
      this.loadImages();
      this.paint();
    }

    componentDidUpdate() {
      this.paint();
    }

    createShipIcon(faction, shipCard) {
      const image = new Image();
      image.onload = () => this.forceUpdate();

      const filename = shipCard['ship-image'];
      image.src = Endpoint.ARMADA_IMAGES + filename;

      return image;
    }

    createSquadronIcon(faction, squadronCard) {
      const image = new Image();
      image.onload = () => this.forceUpdate();

      const filename = squadronCard['squadron-image'];
      image.src = Endpoint.ARMADA_IMAGES + filename;

      return image;
    }

    drawExplosion(context) {
      const { explosion, scale } = this.props;

      if (explosion) {
        const { position, size } = explosion;
        const audioClip = document.getElementById('explosionAudio');

        const { x, y } = position;
        const width = size;
        const height = size;

        context.save();
        context.scale(scale, scale);
        context.translate(x, y);
        context.drawImage(this.explosionImage, -width / 2, -height / 2, width, height);

        audioClip.play();

        // Cleanup.
        context.restore();
      }
    }

    drawLaserBeam(context0) {
      const { laserBeam, scale } = this.props;

      if (laserBeam) {
        const { audioClip, color, fromPosition, isPrimary, toPosition } = laserBeam;

        const context = context0;
        context.save();
        context.scale(scale, scale);
        context.lineWidth = 3;
        context.strokeStyle = color;

        if (!isPrimary) {
          const lineDashSegments = [10, 5];
          context.setLineDash(lineDashSegments);
        }

        context.beginPath();
        context.moveTo(fromPosition.x, fromPosition.y);
        context.lineTo(toPosition.x, toPosition.y);
        context.stroke();

        if (audioClip) {
          audioClip.play();
        }

        // Cleanup.
        context.restore();
      }
    }

    drawManeuver(context0) {
      const { maneuver, scale } = this.props;

      if (maneuver) {
        const context = context0;
        context.save();
        context.scale(scale, scale);

        // Mark the center.
        context.fillStyle = PlayAreaUI.FOREGROUND_COLOR;
        const radius = 4;
        context.beginPath();
        context.arc(maneuver.fromPosition.x, maneuver.fromPosition.y, radius, 0, 2 * Math.PI);
        context.fill();

        // Draw from ship base.
        paintPathComponent(maneuver.fromPolygon, context, PlayAreaUI.FOREGROUND_COLOR);

        if (maneuver.toPolygon) {
          // Draw to ship base.
          paintPathComponent(maneuver.toPolygon, context, PlayAreaUI.FOREGROUND_COLOR);
        }

        // Draw maneuver path.
        paintPathComponent(maneuver.path, context, maneuver.color);

        // Cleanup.
        context.restore();
      }
    }

    drawShips(context) {
      const { scale, shipInstances } = this.props;

      Object.values(shipInstances).forEach(shipInstance => {
        const { id, position, shipKey } = shipInstance;
        const faction = AA.Selector.factionValueByShip(shipKey);
        const image = this.factionShipToImage[`${faction.key}|${shipKey}`];
        const shipBase = AA.Selector.shipBaseValueByShip(shipKey);
        const factionColor = faction.color;

        ShipImage.draw(context, scale, id, image, position, shipBase, factionColor);
      }, this);
    }

    drawSquadrons(context) {
      const { scale, squadronInstances } = this.props;

      Object.values(squadronInstances).forEach(squadronInstance => {
        const { id, position, squadronKey } = squadronInstance;
        const faction = AA.Selector.factionValueBySquadron(squadronKey);
        const image = this.factionSquadronToImage[`${faction.key}|${squadronKey}`];
        const factionColor = faction.color;

        SquadronImage.draw(context, scale, id, image, position, factionColor);
      }, this);
    }

    loadImages() {
      const { shipInstances, squadronInstances } = this.props;

      const factionShips = [];

      shipInstances.forEach(shipInstance => {
        const { shipKey } = shipInstance;
        const faction = AA.Selector.factionValueByShip(shipKey);
        const factionShip = `${faction.key}|${shipKey}`;
        if (!factionShips.includes(factionShip)) {
          factionShips.push(factionShip);
        }
      });

      for (let i = 0; i < factionShips.length; i += 1) {
        const factionShip = factionShips[i];
        const faction = AA.Selector.faction(factionShip.split('|')[0]);
        const shipCard = AA.Selector.shipCard(factionShip.split('|')[1]);
        this.factionShipToImage[factionShip] = this.createShipIcon(faction, shipCard);
      }

      const factionSquadrons = [];

      squadronInstances.forEach(squadronInstance => {
        const { squadronKey } = squadronInstance;
        const faction = AA.Selector.factionValueBySquadron(squadronKey);
        const factionSquadron = `${faction.key}|${squadronKey}`;
        if (!factionSquadrons.includes(factionSquadron)) {
          factionSquadrons.push(factionSquadron);
        }
      });

      for (let i = 0; i < factionSquadrons.length; i += 1) {
        const factionSquadron = factionSquadrons[i];
        const faction = AA.Selector.faction(factionSquadron.split('|')[0]);
        const squadronCard = AA.Selector.squadronCard(factionSquadron.split('|')[1]);
        this.factionSquadronToImage[factionSquadron] = this.createSquadronIcon(faction, squadronCard);
      }

      // this.explosionImage = this.createExplosionImage();
    }

    paint() {
      const { height, scale, width } = this.props;

      const canvas = document.getElementById('playAreaCanvas');
      const context = canvas.getContext('2d');

      context.clearRect(0, 0, scale * width, scale * height);

      this.drawShips(context);
      this.drawSquadrons(context);
      this.drawManeuver(context);
      this.drawLaserBeam(context);
      this.drawExplosion(context);
    }

    render() {
      const { height, image, resourceBase, scale, width } = this.props;

      const imageSrc = resourceBase + image;

      return ReactDOMFactories.canvas({
        id: 'playAreaCanvas',
        style: {
          backgroundImage: `url(${imageSrc})`,
          backgroundSize: '100%',
        },
        width: scale * width,
        height: scale * height,
      });
    }
  }

  PlayAreaUI.FOREGROUND_COLOR = 'white';
  PlayAreaUI.EASY_COLOR = 'lime';
  PlayAreaUI.HARD_COLOR = 'red';

  PlayAreaUI.propTypes = {
    shipInstances: PropTypes.shape().isRequired,
    squadronInstances: PropTypes.shape().isRequired,

    height: PropTypes.number,
    image: PropTypes.string,
    resourceBase: PropTypes.string,
    scale: PropTypes.number,
    width: PropTypes.number,

    explosion: PropTypes.shape(),
    laserBeam: PropTypes.shape(),
    maneuver: PropTypes.shape(),
  };

  PlayAreaUI.defaultProps = {
    height: 915,
    image: 'background/horsehead_nebula_02092008.jpg',
    resourceBase: Endpoint.LOCAL_RESOURCE,
    scale: 1.0,
    width: 1830,

    explosion: undefined,
    laserBeam: undefined,
    maneuver: undefined,
  };

  const PlayAreaContainer = (gameState, ownProps = {}) => {
    const playFormatKey = AS.Selector.playFormatKey(gameState);
    const playFormat = AA.Selector.playFormat(playFormatKey);
    const image = `background/${
    playFormat.key === AA.PlayFormat.STANDARD ? 'horsehead_nebula_02092008.jpg' : 'pia13845.jpg'
  }`;
    const scale = ownProps.scale !== undefined ? ownProps.scale : 1.0;

    // const displayExplosion = gameState.displayExplosion;
    // const displayLaserBeam = gameState.displayLaserBeam;
    // const displayManeuver = gameState.displayManeuver;

    return React.createElement(PlayAreaUI, {
      height: playFormat.height,
      image,
      resourceBase: ownProps.resourceBase,
      scale,
      shipInstances: Object.values(gameState.shipInstances),
      squadronInstances: Object.values(gameState.squadronInstances),
      width: playFormat.width,

      // explosion: displayExplosion,
      // laserBeam: laserBeam,
      // maneuver: displayManeuver
    });
  };

  const StatusBarContainer = (gameState, ownProps = {}) => {
    const { activeShipId } = gameState;
    const shipInstance =
      activeShipId !== undefined ? AS.Selector.shipInstance(activeShipId, gameState) : undefined;
    const shipCard =
      shipInstance !== undefined ? AA.Selector.shipCard(shipInstance.shipKey) : undefined;
    const activeShipName = shipCard !== undefined ? shipCard.name : '';
    const phaseName = AA.Selector.phase(gameState.phaseKey).name;
    const round = AS.Selector.round(gameState);
    const userMessage = AS.Selector.userMessage(gameState);

    return React.createElement(StatusBarUI, {
      activeShipName,
      phaseName,
      round,
      userMessage,
      helpBase: ownProps.helpBase,
    });
  };

  const StarWarsArmadaView = {};

  StarWarsArmadaView.drawView = ({ gameState, document, resourceBase = '../resource/' }) => {
    const statusBarContainer = StatusBarContainer(gameState);
    ReactDOM.render(statusBarContainer, document.getElementById('statusBarContainer'));

    const fleetArea1 = FleetCardsContainer(gameState, {
      fleetId: 1,
    });
    ReactDOM.render(fleetArea1, document.getElementById('fleetArea1'));

    // FIXME: display firstPilotInputArea

    const playAreaContainer = PlayAreaContainer(gameState, {
      resourceBase,
    });
    ReactDOM.render(playAreaContainer, document.getElementById('playAreaContainer'));

    // FIXME: display secondPilotInputArea

    const fleetArea2 = FleetCardsContainer(gameState, {
      fleetId: 2,
    });
    ReactDOM.render(fleetArea2, document.getElementById('fleetArea2'));
  };

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
  exports.FleetCardsContainer = FleetCardsContainer;
  exports.PlayAreaContainer = PlayAreaContainer;
  exports.StatusBarContainer = StatusBarContainer;
  exports.Endpoint = Endpoint;
  exports.ReactUtilities = ReactUtilities;
  exports.StarWarsArmadaView = StarWarsArmadaView;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
