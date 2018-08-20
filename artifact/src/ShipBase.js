const ShipBase = {

  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

ShipBase.properties = 
{
   "large": {
      "name": "large",
      "width": 131,
      "height": 79,
      "key": "large"
   },
   "medium": {
      "name": "medium",
      "width": 104,
      "height": 64,
      "key": "medium"
   },
   "small": {
      "name": "small",
      "width": 73,
      "height": 44,
      "key": "small"
   }
};

Object.freeze(ShipBase);

export default ShipBase;