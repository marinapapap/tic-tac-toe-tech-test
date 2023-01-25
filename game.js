class Game {

  constructor() {
    this.boardPositions = [];
    this.player = "player1";
    this.player1Positions = [];
    this.player2Positions = [];
  }

  addTurn(boardPosition) {
    if(this.player === "player1") {
      this.player1Positions.push(boardPosition);
      this.player = "player2";
    } else if(this.player === "player2") {
      this.player2Positions.push(boardPosition);
      this.player = "player1";
    }
  }

  returnAllPositionsTaken() {
    return this.player1Positions.concat(this.player2Positions);
  }
}

module.exports = Game;