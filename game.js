const _ = require('lodash');
const GameStatus = require('./gameStatus');

class Game {

  constructor() {
    this.player = "playerX";
    this.playerXPositions = [];
    this.playerOPositions = [];
    this.winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
  }

  addTurn(boardPosition) {
    this.checkIfPositionIsFree(boardPosition);
    if(this.player === "playerX") {
      this.playerXPositions.push(boardPosition);
      this.player = "playerO";
    } else if(this.player === "playerO") {
      this.playerOPositions.push(boardPosition);
      this.player = "playerX";
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
    const winningCombinations = this.winningCombinations;

    const gameStatus = new GameStatus(playerX, playerO);
    const status = gameStatus.checkingForWinners(winningCombinations);
    return status;
  }
}

module.exports = Game;