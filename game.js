(function () {
  window.game = {
    init: function () {
      document.body.addEventListener("keydown", this.onKeydown);

      var canvas = document.getElementById("canvas");
      var context = canvas.getContext("2d");
      this.display.init(canvas, context);
      this.display.render();
    },

    onKeydown: function (event) {
      switch(event.keyCode) {
        case 38: //up
          game.player.moveForward();
          game.display.render();
          break;
        case 40: //down
          // game.player.reverse
          game.display.render();
          break;
        case 37: //left
          game.player.turnCCW();
          game.display.render();
          break;
        case 39: //right
          game.player.turnCW();
          game.display.render();
          break;
        default:
      }
    }
  };
})();
