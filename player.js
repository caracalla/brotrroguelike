(function () {
  window.game.player = {
    cabXPos: 288,
    cabYPos: 253,
    trailerXPos: 256,
    trailerYPos: 253,
    direction: 0,

    draw: function () {
      game.context.fillText(this.cabIcon(), this.cabXPos, this.cabYPos);
      game.context.fillText(this.trailerIcon(), this.trailerXPos, this.trailerYPos);
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
      this.trailerXPos = this.cabXPos;
      this.trailerYPos = this.cabYPos;
      this.cabXPos = this.nextCabPos()[0];
      this.cabYPos = this.nextCabPos()[1];
    },

    nextCabPos: function () {
      switch(this.direction) {
        case 0:
          return [this.cabXPos + 32, this.cabYPos];
          break;
        case 90:
          return [this.cabXPos, this.cabYPos + 32];
          break;
        case 180:
          return [this.cabXPos - 32, this.cabYPos];
          break;
        case 270:
          return [this.cabXPos, this.cabYPos - 32];
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
