const Command = {
   CONCENTRATE_FIRE: "concentrateFire",
   NAVIGATE: "navigate",
   REPAIR: "repair",
   SQUADRON: "squadron"
};

Command.properties = {
   "concentrateFire":
   {
      name: "Concentrate Fire",
      text: "Increase the power of one attack.",
      sortOrder: 4,
      key: "concentrateFire"
   },
   "navigate":
   {
      name: "Navigate",
      text: "Change speed and increase maneuverability.",
      sortOrder: 1,
      key: "navigate"
   },
   "repair":
   {
      name: "Repair",
      text: "Recover shields and hull damage.",
      sortOrder: 3,
      key: "repair"
   },
   "squadron":
   {
      name: "Squadron",
      text: "Order nearby squadrons to move and attack early.",
      sortOrder: 2,
      key: "squadron"
   }
};

Object.freeze(Command);

export default Command;