const NEXT_MOVES = [[-1, -2], [-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2]]
function checkValidGrid(grid: number[][]): boolean {
    if(grid[0][0] !== 0) return false;
    let pos = [0, 0];
    let i = 1;
    const n = grid.length, total = n * n;
    while(i < total) {
        let found = false;
        for(const [dx, dy] of NEXT_MOVES) {
            if(grid?.[pos?.[0] + dx]?.[pos?.[1] + dy] === i) {
                found = true;
                pos = [pos?.[0] + dx, pos?.[1] + dy]
                break;
            }
        }
        if(!found) return false;
        i++
    }
    return true;
};