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

    
}


module.exports = Board;
