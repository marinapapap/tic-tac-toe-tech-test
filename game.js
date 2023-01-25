class Game {

  constructor() {
    this.boardPositions = [];
  }

  addTurn(boardPosition) {
    this.boardPositions.push(boardPosition);
  }

  returnPositionsTaken() {
    return this.boardPositions
  }
}

module.exports = Game;