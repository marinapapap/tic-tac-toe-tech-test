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

  it("returns 'Player 1 wins' if board positions are 1, 2 and 3", () => {
    const game = new Game;

    game.addTurn(1);
    game.addTurn(6);
    game.addTurn(2);
    game.addTurn(8);
    game.addTurn(3);

    expect(game.gameStatus()).toEqual("Player 1 wins!");

  })

  it("returns 'Player 2 wins' if board positions are 1, 2 and 3", () => {
    const game = new Game;

    game.addTurn(4);
    game.addTurn(1);
    game.addTurn(8);
    game.addTurn(2);
    game.addTurn(9);
    game.addTurn(3);

    expect(game.gameStatus()).toEqual("Player 2 wins!");

  })

  it("returns 'Player 1 wins' if board positions are 4, 5 and 6", () => {
    const game = new Game;

    game.addTurn(4);
    game.addTurn(1);
    game.addTurn(5);
    game.addTurn(2);
    game.addTurn(6);

    expect(game.gameStatus()).toEqual("Player 1 wins!");

  })

  it("returns 'Player 2 wins' if board positions are 4, 5 and 6", () => {
    const game = new Game;

    game.addTurn(1);
    game.addTurn(4);
    game.addTurn(2);
    game.addTurn(5);
    game.addTurn(7);
    game.addTurn(6);

    expect(game.gameStatus()).toEqual("Player 2 wins!");

  })

  it("Returns 'Player 2 wins' if board positions are 3, 5 and 7", () => {
    const game = new Game;

    game.addTurn(1);
    game.addTurn(3);
    game.addTurn(2);
    game.addTurn(5);
    game.addTurn(8);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 2 wins!");

  })

  it("Returns 'Player 1 wins' if board positions are 3, 5 and 7 after 4 turns", () => {
    const game = new Game;

    game.addTurn(3);
    game.addTurn(9);
    game.addTurn(5);
    game.addTurn(4);
    game.addTurn(8);
    game.addTurn(2);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 1 wins!");

  })

  it("Returns 'Player 2 wins' if board positions are 3, 5 and 7 after 4 turns", () => {
    const game = new Game;

    game.addTurn(2);
    game.addTurn(3);
    game.addTurn(4);
    game.addTurn(5);
    game.addTurn(9);
    game.addTurn(2);
    game.addTurn(8);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 2 wins!");

  })

  it("Returns 'Player 2 wins' if board positions are 3, 5 and 7 after 4 turns. Player 1 has the combination [2, 4, 6] where the difference between values is equal but its not a row.", () => {
    const game = new Game;

    game.addTurn(2);
    game.addTurn(3);
    game.addTurn(4);
    game.addTurn(5);
    game.addTurn(9);
    game.addTurn(2);
    game.addTurn(6);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 2 wins!");

  })

  it("Returns 'Player 2 wins' is returned if board positions are 3, 5 and 7 after 4 turns. Player 1 has the combination [4, 6, 8] where the difference between values is equal but its not a row.", () => {
    const game = new Game;

    game.addTurn(4);
    game.addTurn(3);
    game.addTurn(6);
    game.addTurn(5);
    game.addTurn(9);
    game.addTurn(2);
    game.addTurn(8);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 2 wins!");

  })

  it("Returns 'Player 2 wins' if board positions are 7, 8 and 9 after 4 turns. Player 1 has the combination [1, 3, 5] where the difference between values is equal but its not a row.", () => {
    const game = new Game;

    game.addTurn(6);
    game.addTurn(7);
    game.addTurn(3);
    game.addTurn(8);
    game.addTurn(5);
    game.addTurn(4);
    game.addTurn(2);
    game.addTurn(9);

    expect(game.gameStatus()).toEqual("Player 2 wins!");

  })

  it("Returns 'No winners yet!'. Player 2 has the combination [2, 4, 6] where the difference between values is equal but its not a row.", () => {
    const game = new Game;

    game.addTurn(3);
    game.addTurn(2);
    game.addTurn(5);
    game.addTurn(4);
    game.addTurn(1);
    game.addTurn(6);

    expect(game.gameStatus()).toEqual("No winner yet!");

  })

  it("Returns 'No winners yet!'. Player 2 has the combination [4, 6, 8] where the difference between values is equal but its not a row.", () => {
    const game = new Game;

    game.addTurn(3);
    game.addTurn(8);
    game.addTurn(5);
    game.addTurn(4);
    game.addTurn(1);
    game.addTurn(6);

    expect(game.gameStatus()).toEqual("No winner yet!");

  })

  it("Returns 'No winners yet!'. Player 2 has the combination [1, 3, 5] where the difference between values is equal but its not a row.", () => {
    const game = new Game;

    game.addTurn(6);
    game.addTurn(3);
    game.addTurn(8);
    game.addTurn(1);
    game.addTurn(4);
    game.addTurn(5);

    expect(game.gameStatus()).toEqual("No winner yet!");

  })
})