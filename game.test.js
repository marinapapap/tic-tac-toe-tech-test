const Game = require('./game');
const GameStatus = require('./gameStatus');

describe("Game class", () => {
  describe("unit tests", () => {
    it("returns the board position that has been taken by a player", () => {
      const game = new Game;

      game.addTurn(1);

      expect(game.returnAllPositionsTaken()).toEqual([1]);
    })

    it("returns player X's board positions", () => {
      const game = new Game;

      game.addTurn(1);
      game.addTurn(3);
      game.addTurn(4);

      expect(game.playerXPositions).toEqual([1, 4]);
    })

    it("returns player O's board positions", () => {
      const game = new Game;

      game.addTurn(1);
      game.addTurn(3);
      game.addTurn(4);

      expect(game.playerOPositions).toEqual([3]);
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

    it("returns 'Player 'X' wins' if board positions are 1, 2 and 3. GameStatus class is mocked", () => {
      const gameStatusMock = {
        checkingForWinners(playerX, playerO) {
          return "Player 'X' wins!";
        } 
      };

      const game = new Game(gameStatusMock);
  
      game.addTurn(1);
      game.addTurn(6);
      game.addTurn(2);
      game.addTurn(8);
      game.addTurn(3);
  
      expect(game.gameStatus()).toEqual("Player 'X' wins!");
    })
  });

  it("returns 'Player 'X' wins' if board positions are 1, 2 and 3", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(1);
    game.addTurn(6);
    game.addTurn(2);
    game.addTurn(8);
    game.addTurn(3);

    expect(game.gameStatus()).toEqual("Player 'X' wins!");
  })

  it("returns 'Player 'O' wins' if board positions are 1, 2 and 3", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(4);
    game.addTurn(1);
    game.addTurn(8);
    game.addTurn(2);
    game.addTurn(9);
    game.addTurn(3);

    expect(game.gameStatus()).toEqual("Player 'O' wins!");

  })

  it("returns 'Player 'X' wins' if board positions are 4, 5 and 6", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(4);
    game.addTurn(1);
    game.addTurn(5);
    game.addTurn(2);
    game.addTurn(6);

    expect(game.gameStatus()).toEqual("Player 'X' wins!");

  })

  it("returns 'Player 'X' wins' if board positions are 4, 5 and 6", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(1);
    game.addTurn(4);
    game.addTurn(2);
    game.addTurn(5);
    game.addTurn(7);
    game.addTurn(6);

    expect(game.gameStatus()).toEqual("Player 'O' wins!");

  })

  it("Returns 'Player 'O' wins' if board positions are 3, 5 and 7", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(1);
    game.addTurn(3);
    game.addTurn(2);
    game.addTurn(5);
    game.addTurn(8);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 'O' wins!");

  })

  it("Returns 'Player 'X' wins' if board positions are 3, 5 and 7 after 4 turns", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(3);
    game.addTurn(9);
    game.addTurn(5);
    game.addTurn(4);
    game.addTurn(8);
    game.addTurn(2);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 'X' wins!");

  })

  it("Returns 'Player 'O' wins' if board positions are 3, 5 and 7 after 4 turns", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(2);
    game.addTurn(3);
    game.addTurn(4);
    game.addTurn(5);
    game.addTurn(9);
    game.addTurn(1);
    game.addTurn(8);
    game.addTurn(7);

    expect(game.gameStatus()).toEqual("Player 'O' wins!");

  })

  it("Returns 'Player 'O' wins' if board positions are 7, 8 and 9 after 4 turns.", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(1);
    game.addTurn(7);
    game.addTurn(3);
    game.addTurn(8);
    game.addTurn(5);
    game.addTurn(4);
    game.addTurn(2);
    game.addTurn(9);

    expect(game.gameStatus()).toEqual("Player 'O' wins!");

  })

  it("Returns 'No winners yet!'.", () => {
    const gameStatus = new GameStatus;
    const game = new Game(gameStatus);

    game.addTurn(3);
    game.addTurn(2);
    game.addTurn(5);
    game.addTurn(4);
    game.addTurn(1);
    game.addTurn(6);

    expect(game.gameStatus()).toEqual("No winner yet!");

  })

  it("Throws error if the boardposition is already taken.", () => {

    expect(() => {
      const gameStatusClass = new GameStatus;
      const game = new Game(gameStatusClass);

      game.addTurn(3);
      game.addTurn(3);
    }).toThrow('Position already taken!');
  })
})