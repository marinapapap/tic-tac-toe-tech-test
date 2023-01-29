# Project: Tic Tac Toe

## The brief

The rules of tic tac toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.

## How To Install

To download the program and it's dependencies, assuming you already have Node.js installed, write the following commands:

```
git clone https://github.com/marinapapap/tic-tac-toe-tech-test.git

cd tic-tac-toe-tech-test

npm install
```

To run the tests, run the following command:

```
jest
```

## How to Use

To run the program, open the node REPL using the following command:

```
node
```

Then write the following in the node REPL:

```
> const Game = require('./game');
> const GameStatus = require('./gameStatus');
```

You should now be able to create instances of both classes within the REPL. Bare in mind that each position
on the board is represented by a value, as seen in an image you can find in the main directory.

If you want to take the top-left square, you need to input:

```
game.addTurn(1);
```

As with the traditions of the game, the program assumes player 'X' goes first. Once a turn has been added, 
it will automatically take the next turn to be player 'O'. After each turn, run the following command in the 
node REPL to see the status of the game:

```
> console.log(game.gameStatus());
```

This will tell you when the game is over and if there have been any winners.
