function regionsBySlashes(grid: string[]): number {
    const map = createMap(grid);
    let region = 0;
    for(let i = 0; i < map.length; i++) {
        for(let k = 0; k < map.length; k++) {
            if(map[i][k] === 1) {
                region++;
                floodFill(i, k)
            }
        }
    }
    return region;

    function floodFill(row: number, col: number) {
        if(!map?.[row]?.[col]) return;
        map[row][col] = 0;
        floodFill(row + 1, col)
        floodFill(row - 1, col)
        floodFill(row, col + 1)
        floodFill(row, col - 1)
    }
};

function createMap(grid: string[]): number[][] {
    const n = grid.length;
    const map = new Array(3 * n).fill(null).map(()=>new Array(3 * n).fill(1));
    for(let i = 0; i < n; i++) {
        let c = 0;
        for(let k = 0; k < grid[i].length; k++) {
            if(grid[i][k] === '/') {
                for(let r = 0; r < 3; r++) {
                    map[i * 3 + r][k * 3 + 2 - r] = 0
                }
            } else if (grid[i][k] !== ' ') {
                for(let r = 0; r < 3; r++) {
                    map[i * 3 + r][k * 3 + r] = 0
                }
            }
            c++
        }
    }
    return map;
}