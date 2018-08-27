const PlayFormat = {
  SMALL: 'small',
  STANDARD: 'standard',
};

PlayFormat.properties = {
  small: {
    name: 'Small',
    minPoints: 0,
    maxPoints: 299,
    width: 915, // mm
    height: 915, // mm
    key: 'small',
  },
  standard: {
    name: 'Standard',
    minPoints: 300,
    width: 1830, // mm
    height: 915, // mm
    key: 'standard',
  },
};

Object.freeze(PlayFormat);

export default PlayFormat;
