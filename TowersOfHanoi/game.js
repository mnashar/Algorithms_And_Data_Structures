class Game {
    constructor() {
        this.towers = [[3, 2, 1], [], []];
    }

    isValidMove(startTowerIdx, endTowerIdx) {
        const startTower = this.towers[startTowerIdx];
        const endTower = this.towers[endTowerIdx];

        if (startTower.length === 0) {
            return false;
        } else if (endTower.length == 0) {
            return true;
        } else {
            const topStartDisc = startTower[startTower.length - 1];
            const topEndDisc = endTower[endTower.length - 1];
            return topStartDisc < topEndDisc;
        }
    }

}

module.exports = Game;
