const Distance = {
  ONE: 'one',
  TWO: 'two',
  THREE: 'three',
  FOUR: 'four',
  FIVE: 'five',
};

Distance.properties = {
  one: {
    minDistance: 0, // Minimum distance. (mm)
    maxDistance: 76, // Maximum distance. (mm)
    name: '1',
    key: 'one',
  },
  two: {
    minDistance: 77, // Minimum distance. (mm)
    maxDistance: 125, // Maximum distance. (mm)
    name: '2',
    key: 'two',
  },
  three: {
    minDistance: 126, // Minimum distance. (mm)
    maxDistance: 185, // Maximum distance. (mm)
    name: '3',
    key: 'three',
  },
  four: {
    minDistance: 186, // Minimum distance. (mm)
    maxDistance: 245, // Maximum distance. (mm)
    name: '4',
    key: 'four',
  },
  five: {
    minDistance: 246, // Minimum distance. (mm)
    maxDistance: 305, // Maximum distance. (mm)
    name: '5',
    key: 'five',
  },
};

Object.freeze(Distance);

export default Distance;
