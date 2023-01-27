const _ = require('lodash');

class Game {

  constructor() {
    this.player = "player1";
    this.playerXPositions = [];
    this.playerOPositions = [];
    this.winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  }

  addTurn(boardPosition) {
    this.checkIfPositionIsFree(boardPosition);
    if(this.player === "player1") {
      this.playerXPositions.push(boardPosition);
      this.player = "player2";
    } else if(this.player === "player2") {
      this.playerOPositions.push(boardPosition);
      this.player = "player1";
    }
  }

  checkIfPositionIsFree(boardPosition) {
    if(this.returnAllPositionsTaken().includes(boardPosition)) {
      throw new Error('Position already taken!');
    }
  }

  returnAllPositionsTaken() {
    return this.playerXPositions.concat(this.playerOPositions);
  }

  gameStatus() {
    const playerX = this.playerXPositions.sort();
    const playerO = this.playerOPositions.sort();
    let winner = "";

    this.winningCombinations.forEach(combo => {
      const playerOStatus = this.checkPlayerStatus(playerO, combo, winner)
      if (playerOStatus === "Player 'O' wins!") {
        winner = playerOStatus;
      }
      const playerXStatus = this.checkPlayerStatus(playerX, combo, winner)
      if (playerXStatus === "Player 'X' wins!") {
        winner = playerXStatus;
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
        if(player === this.playerXPositions.sort()) {
          return "Player 'X' wins!";
        } else if (player === this.playerOPositions.sort()) {
          return "Player 'O' wins!";
        }
      }
    }
  }
}

module.exports = Game;