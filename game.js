const _ = require('lodash');

class Game {

  constructor() {
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

  // gameStatus() {
  //   const player1 = this.player1Positions.sort();
  //   const player2 = this.player2Positions.sort();
  //   let winner = "";

  //   this.winningCombination.forEach(combo => {
  //     if(_.isEqual(combo, player1)) {
  //       winner = "Player 1 wins!";
  //     } else if(_.isEqual(combo, player2)) {
  //       winner = "Player 2 wins!";
  //     }
  //   });
  //   return winner;
  // }

  gameStatus() {
    const player1 = this.player1Positions.sort();
    const player2 = this.player2Positions.sort();
 
    const player1Status = this.checkPlayerStatus(player1);
    if(player1Status === "Player 1 wins!") {
      return player1Status;
    }
  
    const player2Status = this.checkPlayerStatus(player2);
    if(player2Status === "Player 2 wins!") {
      return player2Status;
    }

    return "No winner yet!"
  }

  checkPlayerStatus(player) {
    for(let i = 1; i < (player.length-1); i++) {
      let combo1 = player[i+1] - player[i];
      let combo2 = player[i] - player[i-1];
      let thisHand = [player[i-1], player[i], player[i+1]];

      if(combo1 === combo2 && !_.isEqual(thisHand, [4, 6, 8]) && !_.isEqual(thisHand, [2, 4, 6]) && !_.isEqual(thisHand, [1, 3, 5])) {
        if(player === this.player1Positions.sort()) {
          return "Player 1 wins!";
        } else if (player === this.player2Positions.sort()) {
          return "Player 2 wins!";
        }
      } 
    };
  }
}

module.exports = Game;