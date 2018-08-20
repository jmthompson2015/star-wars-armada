const ShipImage = {};

const DEG_TO_RADIANS = Math.PI / 180.0;

ShipImage.draw = function(context, scale, id, image, position, shipBase, factionColor)
{
   // Setup.
   const width = shipBase.width;
   const height = shipBase.height;
   const halfWidth = Math.ceil(width / 2);
   const halfHeight = Math.ceil(height / 2);
   const x = position.x;
   const y = position.y;
   const angle = position.heading * DEG_TO_RADIANS;

   context.save();
   context.scale(scale, scale);
   context.translate(x, y);
   context.rotate(angle);

   // Draw background square.
   context.fillStyle = "rgba(255,255,255,0.4)";
   context.fillRect(-halfWidth, -halfHeight, width, height);

   // Draw the firing arcs.
   context.strokeStyle = factionColor;
   drawFiringArcs(context, halfWidth, halfHeight);

   // Draw ship image.
   context.drawImage(image, -image.width / 2, -image.height / 2, image.width, image.height);

   if (id !== undefined)
   {
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

const drawFiringArcs = (context, halfWidth, halfHeight) =>
{
   // Draw the firing arcs.
   context.beginPath();
   context.moveTo(-halfWidth, -halfHeight);
   context.lineTo(halfWidth, halfHeight);
   context.moveTo(halfWidth, -halfHeight);
   context.lineTo(-halfWidth, halfHeight);
   context.stroke();
};

export default ShipImage;