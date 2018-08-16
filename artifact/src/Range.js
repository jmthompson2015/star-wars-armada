const Range = {
   ONE: "one",
   TWO: "two",
   THREE: "three"
};

Range.properties = {
   "one":
   {
      minDistance: 0, // Minimum distance. (mm)
      maxDistance: 116, // Maximum distance. (mm)
      name: "1",
      key: "one"
   },
   "two":
   {
      minDistance: 117, // Minimum distance. (mm)
      maxDistance: 180, // Maximum distance. (mm)
      name: "2",
      key: "two"
   },
   "three":
   {
      minDistance: 181, // Minimum distance. (mm)
      maxDistance: 303, // Maximum distance. (mm)
      name: "3",
      key: "three"
   }
};

Object.freeze(Range);

export default Range;