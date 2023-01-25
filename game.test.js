const Game = require('./game');

describe("Game class", () => {
  it("returns the board position that has been taken by a player", () => {
    const game = new Game;

    game.addTurn(1);

    expect(game.returnAllPositionsTaken()).toEqual([1]);
  })

  it("returns player 1's board positions", () => {
    const game = new Game;

    game.addTurn(1);
    game.addTurn(3);
    game.addTurn(4);

    expect(game.player1Positions).toEqual([1, 4]);
  })

  it("returns player 2's board positions", () => {
    const game = new Game;

    game.addTurn(1);
    game.addTurn(3);
    game.addTurn(4);

    expect(game.player2Positions).toEqual([3]);
  })

  it("returns all board positions that have been taken by a player", () => {
    const game = new Game;

    game.addTurn(1);
    game.addTurn(5);
    game.addTurn(6);

    expect(game.returnAllPositionsTaken().includes(1)).toEqual(true);
    expect(game.returnAllPositionsTaken().includes(5)).toEqual(true);
    expect(game.returnAllPositionsTaken().includes(6)).toEqual(true);
  })
})