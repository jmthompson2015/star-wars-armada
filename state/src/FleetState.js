const FleetState = {};

FleetState.create = ({ id, name, year, description, author, points, ships = [], squadrons = [] }) =>
  Immutable({
    id,
    name,
    year,
    description,
    author,
    points,
    ships: Immutable(ships),
    squadrons: Immutable(squadrons)
  });

Object.freeze(FleetState);

export default FleetState;
