const _ = require('lodash');
const GameStatus = require('./gameStatus');

class Game {

  constructor(gameStatusClass) {
    this.player = "playerX";
    this.playerXPositions = [];
    this.playerOPositions = [];
    this.gameStatusClass = gameStatusClass;
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

    const gameStatus = this.gameStatusClass;
    const status = gameStatus.checkingForWinners(playerX, playerO);
    return status;
  }
}

module.exports = Game;