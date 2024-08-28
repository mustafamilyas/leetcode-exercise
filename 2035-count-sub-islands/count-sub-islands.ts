const movement = [[1, 0], [-1, 0], [0, 1], [0, -1]]
function countSubIslands(grid1: number[][], grid2: number[][]): number {
    function isSubIsland(x: number, y: number) {
        if(!grid2?.[x]?.[y]) return 1;
        let result = grid1[x][y]
        grid2[x][y] = 0
        for(const [dx, dy] of movement) {
            result &= isSubIsland(x + dx, y + dy);
        }
        return result;
    }
    let subIsland = 0
    for(let i = 0; i < grid2.length; i++) {
        for(let j = 0; j < grid2[i].length; j++) {
            if(grid2[i][j] === 1 && isSubIsland(i, j)) {
                subIsland++
            }
        }
    }
    return subIsland
};