(function () {
  window.game.player = {
    // cabXPos: 288,
    // cabYPos: 253,
    // trailerXPos: 256,
    // trailerYPos: 253,
    cabPos: [22, 25],
    trailerPos: [21, 25],
    direction: 0,

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
      this.trailerPos = this.cabPos;
      this.cabPos = this.nextCabPos();
    },

    nextCabPos: function () {
      switch(this.direction) {
        case 0:
          return [this.cabPos[0] + 1, this.cabPos[1]];
          break;
        case 90:
          return [this.cabPos[0], this.cabPos[1] + 1];
          break;
        case 180:
          return [this.cabPos[0] - 1, this.cabPos[1]];
          break;
        case 270:
          return [this.cabPos[0], this.cabPos[1] - 1];
          break;
        default:
          console.log("player has an invalid direction!");
      }
    },

    cabIcon: function () {
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
    },

    trailerIcon: function () {
      return "\u23F9\uFE0F";
    }
  };
})();
