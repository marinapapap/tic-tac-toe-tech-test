const _ = require('lodash');

class GameStatus {

  constructor(playerX, playerO) {
    this.playerX = playerX;
    this.playerO = playerO;
  }

  checkingForWinners(winningCombinations) {
    let winner = "";

    winningCombinations.forEach(combo => {
      const playerXStatus = this.checkPlayerStatus(this.playerX, combo)
      if (playerXStatus === "Player 'X' wins!") {
        winner = playerXStatus;
      }
      const playerOStatus = this.checkPlayerStatus(this.playerO, combo)
      if (playerOStatus === "Player 'O' wins!") {
        winner = playerOStatus;
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
        if(player === this.playerX) {
          return "Player 'X' wins!";
        } else if (player === this.playerO) {
          return "Player 'O' wins!";
        }
      }
    }
  }
}

module.exports = GameStatus;