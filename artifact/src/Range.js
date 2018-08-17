const Range = {
   CLOSE: "close",
   MEDIUM: "medium",
   LONG: "long"
};

Range.properties = {
   "close":
   {
      minDistance: 0, // Minimum distance. (mm)
      maxDistance: 123, // Maximum distance. (mm)
      name: "Close",
      key: "close"
   },
   "medium":
   {
      // 2.5" = 63.5 mm
      minDistance: 124, // Minimum distance. (mm)
      maxDistance: 187, // Maximum distance. (mm)
      name: "Medium",
      key: "medium"
   },
   "long":
   {
      minDistance: 188, // Minimum distance. (mm)
      maxDistance: 305, // Maximum distance. (mm)
      name: "Long",
      key: "long"
   }
};

Object.freeze(Range);

export default Range;