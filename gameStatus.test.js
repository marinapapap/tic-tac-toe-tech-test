const GameStatus = require('./gameStatus');

describe("GameStatus class", () => {
  it("returns 'Player 'X' wins' if player X has a winning combination after 3 turns", () => {
    const gameStatus = new GameStatus();

    expect(gameStatus.checkingForWinners([1, 2, 3], [4, 7, 9])).toEqual("Player 'X' wins!");
  })

  it("returns 'Player 'O' wins' if player O has a winning combination after 4 turns", () => {
    const gameStatus = new GameStatus();

    expect(gameStatus.checkingForWinners([1, 2, 5, 6], [4, 7, 8, 9])).toEqual("Player 'O' wins!");
  })

  it("returns 'No winner yet!' if the game isn't over as there are no winners", () => {
    const gameStatus = new GameStatus();

    expect(gameStatus.checkingForWinners([1, 2, 5], [3, 4, 7])).toEqual("No winner yet!");
  })

  it("returns 'No winner yet!' if neither player has winning combination with the board complete", () => {
    const gameStatus = new GameStatus();

    expect(gameStatus.checkingForWinners([1, 2, 5, 6, 9], [3, 4, 7, 8])).toEqual("Game Over - no winner!");
  })
})