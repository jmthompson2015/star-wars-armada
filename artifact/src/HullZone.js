const HullZone = {

  FRONT: "front",
  LEFT: "left",
  REAR: "rear",
  RIGHT: "right",
};

HullZone.properties = 
{
   "front": {
      "name": "front",
      "key": "front"
   },
   "left": {
      "name": "left",
      "key": "left"
   },
   "rear": {
      "name": "rear",
      "key": "rear"
   },
   "right": {
      "name": "right",
      "key": "right"
   }
};

Object.freeze(HullZone);

export default HullZone;