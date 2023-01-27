const _ = require('lodash');

class Game {

  constructor() {
    this.player = "player1";
    this.player1Positions = [];
    this.player2Positions = [];
    this.winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
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
    const player1 = this.player1Positions.sort();
    const player2 = this.player2Positions.sort();
    let winner = "";

    this.winningCombinations.forEach(combo => {
      const player2Status = this.checkPlayerStatus(player2, combo, winner)
      if (player2Status === "Player 2 wins!") {
        winner = player2Status;
      }
      const player1Status = this.checkPlayerStatus(player1, combo, winner)
      if (player1Status === "Player 1 wins!") {
        winner = player1Status;
      }
    });
    return this.winnerChecker(winner);
  }

  winnerChecker(winner) {
    if(winner === "") {
      return "No winner yet!";
    } else {
      return winner;
    }
  }

  checkPlayerStatus(player, combo) {
    for(let i = 1; i < (player.length-1); i++) {
      let thisHand = [player[i-1], player[i], player[i+1]];
      if(_.isEqual(combo, thisHand)) {
        if(player === this.player1Positions.sort()) {
          return "Player 1 wins!";
        } else if (player === this.player2Positions.sort()) {
          return "Player 2 wins!";
        }
      }
    }
  }
}

module.exports = Game;