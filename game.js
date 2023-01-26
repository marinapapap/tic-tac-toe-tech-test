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
 
    for(let i = 1; i < (player1.length-1); i++) {
      let combo1 = player1[i+1] - player1[i];
      let combo2 = player1[i] - player1[i-1];
      let thisHand = [player1[i-1], player1[i], player1[i+1]];

      if(combo1 === combo2 && !_.isEqual(thisHand, [4, 6, 8]) && !_.isEqual(thisHand, [2, 4, 6]) && !_.isEqual(thisHand, [1, 3, 5])) {
        return "Player 1 wins!";
      } 
    };

    for(let i = 1; i < (player2.length-1); i++) {
      let combo1 = player2[i+1] - player2[i];
      let combo2 = player2[i] - player2[i-1];
      let thisHand = [player2[i-1], player2[i], player2[i+1]];

      if (combo1 === combo2 && !_.isEqual(thisHand, [4, 6, 8]) && !_.isEqual(thisHand, [2, 4, 6]) && !_.isEqual(thisHand, [1, 3, 5])) {
        return "Player 2 wins!";
      }
    }
    return "No winner yet!"
  }
}

module.exports = Game;