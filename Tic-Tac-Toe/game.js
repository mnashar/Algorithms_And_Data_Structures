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

    promptMove(reader, callback) {
        const game = this;

        this.board.print();
        console.log(`Current Turn: ${this.currentPlayer}`);

        reader.question('Enter rowIdx: ', rowIdxStr => {
            const rowIdx = parseInt(rowIdxStr);
            reader.question('Enter colIdx: ', colIdxStr => {
                const colIdx = parseInt(colIdxStr);
                callback([rowIdx, colIdx]);
            });
        });
    }

}

module.exports = Game;
