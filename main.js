(function () {
  $(document).ready(function () {
    // window.game.init();
window.context = document.getElementById("canvas").getContext("2d");
    color = "#666"
    line(32, 0, 32, 500, color);
    line(0, 32, 500, 32, color);

    // top
    var drawTile = function (tileSize, topX, topY) {
      // top
      startY = 0
      endY = tileSize / 2 - 1

      for (var y = startY; y <= endY; y += 1) {
        startX = y
        endX = tileSize - startX - 2
        console.log(endX)

        for (var x = startX; x <= endX; x += 1) {
          pixel(topX + x, topY + y, "#090");
        }
      }


      // left
      startX = tileSize / 2
      endX = tileSize - 1

      for (var x = startX; x <= endX; x += 1) {
        startY = x - 1
        // endY = tileSize -
      }
    }

    drawTile(32, 0, 0)
    // drawTile(32, 34, 0)

  });
})();
