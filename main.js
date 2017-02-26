(function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width = 640 // window.innerWidth;
  var height = canvas.height = 480 // window.innerHeight;
  context.font = "30px Helvetica";

  var player = {
    xPos: 161,
    yPos: 190,
    direction: 0,
    draw: function () {
      context.fillText("\uD83D\uDE9A", this.xPos, this.yPos)
      context.fillText(this.arrow(), this.nextPos()[0], this.nextPos()[1])
    },
    turnCW: function () {
      this.direction += 90;
      if (this.direction >= 360) {
        this.direction = 0;
      }
    },
    turnCCW: function () {
      this.direction -= 90;
      if (this.direction < 0) {
        this.direction = 270;
      }
    },
    moveForward: function () {
      this.xPos = this.nextPos()[0];
      this.yPos = this.nextPos()[1];
    },
    nextPos: function () {
      switch(this.direction) {
        case 0:
          return [this.xPos + 32, this.yPos];
          break;
        case 90:
          return [this.xPos, this.yPos + 32];
          break;
        case 180:
          return [this.xPos - 32, this.yPos];
          break;
        case 270:
          return [this.xPos, this.yPos - 32];
          break;
        default:
          console.log("player has an invalid direction!");
      }
    },
    arrow: function () {
      switch(this.direction) {
        case 0:
          return "\u27A1\uFE0F";
          break;
        case 90:
          return "\u2B07\uFE0F";
          break;
        case 180:
          return "\u2B05\uFE0F";
          break;
        case 270:
          return "\u2B06\uFE0F";
          break;
        default:
          console.log("player has an invalid direction!");
      }
    }
  }

  // Mouse handling (is this necessary?)
  window.mouseX = 0;
  window.mouseY = 0;
  var getMouseCoordinates = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };
  $('#canvas').on('mousemove', getMouseCoordinates);

  // Handle key presses
  document.body.addEventListener("keydown", function(event) {
    context.clearRect(0, 0, width, height);
    context.fillText("\uD83D\uDC0D", 33, 30); // snake
    drawGrid()

    switch(event.keyCode) {
      case 38: //up
        player.moveForward();
        player.draw();
        break;
      case 40: //down
        player.draw();
        break;
      case 37: //left
        player.turnCCW();
        player.draw();
        break;
      case 39: //right
        player.turnCW();
        player.draw();
        break;
      default:
        player.draw();
     }
  });

  var drawGrid = function () {
    var incrementX = 32;
    var incrementY = 32;

    // draw vertical lines
    for (var x = 0; x < width; x += incrementX) {
      line(x, 0, x, height);
    }

    // draw vertical lines
    for (var y = 0; y < height; y += incrementY) {
      line(0, y, width, y);
    }
  }

  drawGrid();
  context.fillText("\uD83D\uDC0D", 33, 30); // snake
  player.draw();
})();
