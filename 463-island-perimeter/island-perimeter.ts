const MOVEMENTS = [[0,1],[1,0],[-1,0],[0,-1]]
function islandPerimeter(grid: number[][]): number {
    let perimeters = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === 1) {
                for(const [dx, dy] of MOVEMENTS) {
                    if(!grid?.[i + dx]?.[j + dy]) perimeters++
                }
            }
        }
    }
    return perimeters
};