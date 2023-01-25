const _ = require('lodash');

class Game {

  constructor() {
    this.player = "player1";
    this.player1Positions = [];
    this.player2Positions = [];
    this.winningCombination = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]]
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

  gameStatus() {
    const player1 = this.player1Positions.sort()
    const player2 = this.player2Positions.sort()
    let winner = "";

    this.winningCombination.forEach(combo => {
      if(_.isEqual(combo, player1)) {
        winner = "Player 1 wins!";
      } else if(_.isEqual(combo, player2)) {
        winner = "Player 2 wins!";
      }
    });
    return winner;
  }
}

module.exports = Game;