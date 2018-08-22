const SquadronImage = {};

const DEG_TO_RADIANS = Math.PI / 180.0;

SquadronImage.draw = function(context, scale, id, image, position, factionColor)
{
   // Setup.
   const width = 35;
   const height = 35;
   const halfWidth = Math.ceil(width / 2);
   const halfHeight = Math.ceil(height / 2);

   context.save();
   context.scale(scale, scale);
   context.translate(position.x, position.y);
   context.rotate(position.heading * DEG_TO_RADIANS);

   // Draw background circle.
   context.fillStyle = "rgba(255,255,255,0.4)";
   context.beginPath();
   context.arc(0, 0, halfWidth, 0, 2 * Math.PI);
   context.fill();

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

export default SquadronImage;