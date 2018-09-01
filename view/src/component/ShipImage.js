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
  context.fillStyle = "rgba(255,255,255,0.4)";
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
    context.font = "14px sans-serif";
    context.fillText(id, -halfHeight, halfWidth);
    context.rotate(-90 * DEG_TO_RADIANS);
  }

  // Cleanup.
  context.restore();
};

export default ShipImage;
