(function () {
  window.game.display.pixel = function (x, y, color) {
    this.context.fillStyle = color || '#000000';
    this.context.fillRect(x, y, 1, 1);
  }

  window.game.display.line = function (startX, startY, endX, endY, color) {
    var deltaX = endX - startX;
    var deltaY = endY - startY;
    var slope = deltaY/deltaX;

    if (startX <= endX) {
      if (startY <= endY) {
        if (slope <= 1) {
          var deltaErr = Math.abs(slope), error = deltaErr - 0.5
          for(var x = startX, y = startY; x <= endX; x += 1) {
            this.pixel(x, y, color);
            error += deltaErr;
            if (error >= 0.5) { y += 1; error -= 1; }
          }
        } else if (slope > 1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y <= endY; y += 1) {
            this.pixel(x, y, color);
            error += deltaErr;
            if (error >= 0.5) { x += 1; error -= 1; }
          }
        }
      } else {
        if (slope >= -1) {
          var deltaErr = Math.abs(slope), error = deltaErr - 0.5
          for(var x = startX, y = startY; x <= endX; x += 1) {
            this.pixel(x, y, color);
            error += deltaErr;
            if (error >= 0.5) { y -= 1; error -= 1; }
          }
        } else if (slope < -1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y >= endY; y -= 1) {
            this.pixel(x, y, color);
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
            this.pixel(x, y, color);
            error += deltaErr;
            if (error >= 0.5) { y += 1; error -= 1; }
          }
        } else if (slope < -1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y <= endY; y += 1) {
            this.pixel(x, y, color);
            error += deltaErr;
            if (error >= 0.5) { x -= 1; error -= 1; }
          }
        }
      } else {
        if (slope <= 1) {
          var deltaErr = Math.abs(slope), error = deltaErr - 0.5
          for(var x = startX, y = startY; x >= endX; x -= 1) {
            this.pixel(x, y, color);
            error += deltaErr;
            if (error >= 0.5) { y -= 1; error -= 1; }
          }
        } else if (slope > 1) {
          var deltaErr = 1 / Math.abs(slope), error = deltaErr - 0.5
          for (var y = startY, x = startX; y >= endY; y -= 1) {
            this.pixel(x, y, color);
            error += deltaErr;
            if (error >= 0.5) { x -= 1; error -= 1; }
          }
        }
      }
    }
  };
})();
