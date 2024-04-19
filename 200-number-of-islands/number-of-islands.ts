const MOVEMENTS = [[0,1],[0,-1],[1,0],[-1,0]]
function numIslands(grid: string[][]): number {
    function floodFill(x: number, y: number) {
        if(grid?.[x]?.[y] !== '1') return;
        grid[x][y] = '-1';
        MOVEMENTS.forEach(([dx, dy])=>floodFill(x + dx, y + dy))
    }
    let islands = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
                islands++
                floodFill(i, j)
            }
        }
    }
    return islands
};