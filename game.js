(function () {
  window.game = {
    init: function () {
      this.board.init();
      this.display.init();
      document.body.addEventListener("keydown", this.onKeydown);
      this.display.render();
    },

    onKeydown: function () {
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
