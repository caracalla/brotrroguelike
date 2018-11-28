(function () {
  window.game.display = {
    tileSize: 32,
    height: 15,
    width: 19,
    centralPixelX: 298,
    centralPixelY: 260,

    init: function (canvas, context) {
      this.canvas = canvas;
      this.context = context;

      // set canvas defaults
      this.canvas.width = (this.tileSize * this.width) + this.width - 1;
      this.canvas.height = (this.tileSize * this.height) + this.height - 1;
      this.context.font = "30px Helvetica";
    },

    render: function () {
      // draw gray void
      this.context.fillStyle = '#444'
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      // draw board
      this.drawBoard();
      // draw grid? maybe we don't want a grid once there's a board
      this.drawGrid();
      // draw enemies, NPCs, objects
      this.drawObject(game.snake);
      // draw player
      this.drawPlayer();
    },

    drawGrid: function () {
      var color = "#666" // \m/

      // draw vertical lines
      for (var x = -1; x < this.canvas.width; x += (this.tileSize + 1)) {
        this.line(x, 0, x, this.canvas.height, color);
      }

      // draw horizontal lines
      for (var y = -1; y < this.canvas.height; y += (this.tileSize + 1)) {
        this.line(0, y, this.canvas.width, y, color);
      }
    },

    drawBoard: function () {

    },

    drawPlayer: function () {
      var trailerRelativePosition = this.absoluteToRelative(game.player.trailerPos);
      var trailerPixelPosition = this.positionToPixels(trailerRelativePosition);

      this.context.fillText(game.player.cabIcon(), this.centralPixelX, this.centralPixelY);
      this.context.fillText(game.player.trailerIcon(), trailerPixelPosition[0], trailerPixelPosition[1]);
    },

    positionToPixels: function (relativePosition) {
      return [
        this.centralPixelX + (relativePosition[0] * (this.tileSize + 1)),
        this.centralPixelY + (relativePosition[1] * (this.tileSize + 1))
      ];
    },

    absoluteToRelative: function (absolutePosition) {
      // Everything is relative to the player
      return [
        absolutePosition[0] - game.player.cabPos[0],
        absolutePosition[1] - game.player.cabPos[1]
      ];
    },

    drawObject: function (object) {
      var relativePosition = this.absoluteToRelative(object.position);
      var pixelPosition = this.positionToPixels(relativePosition);

      if (this.visible(relativePosition)) {
        this.context.fillText(object.icon(), pixelPosition[0], pixelPosition[1])
      }
    },

    visible: function (pos) {
      var minX = (1 - this.width) / 2;
      var maxX = (this.width - 1) / 2;
      var minY = (1 - this.height) / 2;
      var maxY = (this.height - 1) / 2;

      if (pos[0] >= minX && pos[0] <= maxX && pos[1] >= minY && pos[1] <= maxY) {
        return true;
      } else {
        return false;
      }
    }
  };

  window.game.snake = {
    position: [24, 24],
    icon: function () {
      return "\uD83D\uDC0D";
    }
  }
})();
