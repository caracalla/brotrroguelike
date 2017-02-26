(function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");

  var bresenham = function (startX, startY, endX, endY, color) {
    var deltaX = endX - startX;
    var deltaY = endY - startY;
    var slope = deltaY/deltaX;

    context.fillStyle = color || '#000000';

    if (startX <= endX) {
      if (startY <= endY) {
        if (slope <= 1) {
          var deltaErr = Math.abs(slope), error = deltaErr - 0.5
          for(var x = startX, y = startY; x <= endX; x += 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { y += 1; error -= 1; }
          }
        } else if (slope > 1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y <= endY; y += 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { x += 1; error -= 1; }
          }
        }
      } else {
        if (slope >= -1) {
          var deltaErr = Math.abs(slope), error = deltaErr - 0.5
          for(var x = startX, y = startY; x <= endX; x += 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { y -= 1; error -= 1; }
          }
        } else if (slope < -1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y >= endY; y -= 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { x += 1; error -= 1; }
          }
        }
      }
    } else {
      if (startY <= endY) {
        if (slope >= -1) {
          var deltaErr = Math.abs(slope), error = deltaErr - 0.5
          for(var x = startX, y = startY; x >= endX; x -= 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { y += 1; error -= 1; }
          }
        } else if (slope < -1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y <= endY; y += 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { x -= 1; error -= 1; }
          }
        }
      } else {
        if (slope <= 1) {
          var deltaErr = Math.abs(slope), error = deltaErr - 0.5
          for(var x = startX, y = startY; x >= endX; x -= 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { y -= 1; error -= 1; }
          }
        } else if (slope > 1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y >= endY; y -= 1) {
            context.fillRect(x, y, 1, 1);
            error += deltaErr;
            if (error >= 0.5) { x -= 1; error -= 1; }
          }
        }
      }
    }
  };

  window.line = bresenham;
})();
