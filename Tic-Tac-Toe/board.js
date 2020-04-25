const MoveError = require("./moveError");

class Board {
    constructor() {
        this.grid = Board.makeGrid();
    }

    isEmptyPos(pos) {
        if (!Board.isValidPos(pos)) {
            throw new MoveError('Is not valid position!');
        }

        return (this.grid[pos[0]][pos[1]] === null);
    }

    isOver() {
        if (this.winner() != null) {
            return true;
        }

        for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
            for (let colIdx = 0; colIdx < 3; colIdx++) {
                if (this.isEmptyPos([rowIdx, colIdx])) {
                    return false;
                }
            }
        }

        return true;
    }

}


module.exports = Board;
