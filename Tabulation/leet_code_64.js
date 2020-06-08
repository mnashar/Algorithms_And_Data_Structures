function minPathSum(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let table = new Array(m).fill().map(() => new Array(n).fill(Infinity));
    table[0][0] = grid[0][0];

   
}