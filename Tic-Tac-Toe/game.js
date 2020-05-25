const Board = require("./board");
const MoveError = require("./moveError");

class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = Board.marks[0];
    }

    isOver() {
        return this.board.isOver();
    }

    playMove(pos) {
        this.board.placeMark(pos, this.currentPlayer);
        this.swapTurn();
    }

}

module.exports = Game;
