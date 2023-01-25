const Game = require('./game');

describe("Game class", () => {
  it("returns the board position that has been taken by a player", () => {
    const game = new Game;

    game.addTurn(1);

    expect(game.returnPositionsTaken()).toEqual([1]);
  })
})