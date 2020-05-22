const Board = require("./board");
const MoveError = require("./moveError");

class Game {
    constructor() {
        this.board = new Board();
        this.currentPlayer = Board.marks[0];
    }

    
}

module.exports = Game;
