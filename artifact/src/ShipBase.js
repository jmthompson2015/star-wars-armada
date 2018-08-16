const ShipBase = {

  LARGE: "large",
  MEDIUM: "medium",
  SMALL: "small",
};

ShipBase.properties = 
{
   "large": {
      "name": "large",
      "width": 79,
      "height": 131,
      "key": "large"
   },
   "medium": {
      "name": "medium",
      "width": 64,
      "height": 104,
      "key": "medium"
   },
   "small": {
      "name": "small",
      "width": 44,
      "height": 73,
      "key": "small"
   }
};

Object.freeze(ShipBase);

export default ShipBase;