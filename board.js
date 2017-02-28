(function () {
  window.game.board = {
    draw: function () {
      this.drawGrid();
      this.drawGrayVoid();
    },

    drawGrid: function () {
      var incrementX = 32;
      var incrementY = 32;
      var color = "#666" // \m/

      // draw vertical lines
      for (var x = -1; x < game.width; x += incrementX) {
        line(x, 0, x, game.height, color);
      }

      // draw horizontal lines
      for (var y = -1; y < game.height; y += incrementY) {
        line(0, y, game.width, y, color);
      }
    },

    drawGrayVoid: function () {

    }
  }
})();
