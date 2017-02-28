(function () {
  window.game = {
    init: function () {
      this.canvas = document.getElementById("canvas");
      this.context = canvas.getContext("2d");
      this.width = canvas.width = 607 // window.innerWidth;
      this.height = canvas.height = 479 // window.innerHeight;

      this.context.font = "30px Helvetica";
      document.body.addEventListener("keydown", this.onKeydown);
      this.drawFrame();
    },

    drawFrame: function () {
      this.context.clearRect(0, 0, this.width, this.height);
      this.board.draw();
      this.context.fillText("\uD83D\uDC0D", 33, 30); // snake
      this.player.draw();
    },

    onKeydown: function () {
      switch(event.keyCode) {
        case 38: //up
          game.player.moveForward();
          game.drawFrame();
          break;
        case 40: //down
          // game.player.reverse
          game.drawFrame();
          break;
        case 37: //left
          game.player.turnCCW();
          game.drawFrame();
          break;
        case 39: //right
          game.player.turnCW();
          game.drawFrame();
          break;
        default:
      }
    }
  };
})();
