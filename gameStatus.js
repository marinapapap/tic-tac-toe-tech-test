const _ = require('lodash');

class GameStatus {

  constructor() {
    this.winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  }

  checkingForWinners(playerX, playerO) {
    let winner = "";

    this.winningCombinations.forEach(combo => {
      const playerXStatus = this.checkPlayerStatus(playerX, combo, playerX, playerO)
      if (playerXStatus === "Player 'X' wins!") {
        winner = playerXStatus;
      }
      const playerOStatus = this.checkPlayerStatus(playerO, combo, playerX, playerO)
      if (playerOStatus === "Player 'O' wins!") {
        winner = playerOStatus;
      }
    });
    return this.winnerChecker(winner, playerO);
  }

  winnerChecker(winner, playerO) {
    if(winner === "" && playerO.length < 4) {
      return "No winner yet!";
    } else if(winner === "") {
      return "Game Over - no winner!"
    } else {
      return winner;
    }
  }

  checkPlayerStatus(player, combo, playerX, playerO) {
    for(let i = 1; i < (player.length-1); i++) {
      let thisHand = [player[i-1], player[i], player[i+1]];
      if(_.isEqual(combo, thisHand)) {
        if(player === playerX) {
          return "Player 'X' wins!";
        } else if (player === playerO) {
          return "Player 'O' wins!";
        }
      }
    }
  }
}

module.exports = GameStatus;