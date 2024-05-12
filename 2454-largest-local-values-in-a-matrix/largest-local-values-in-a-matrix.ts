const MOVES = [[-1, 0], [0, -1], [-1, -1], [0, 0], [-2, -2], [-2, -1], [-2, 0], [0, -2], [-1, -2]]
function largestLocal(grid: number[][]): number[][] {
    const n = grid.length;
    const m = n - 2;
    const result = new Array(m);
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            for(const [dx, dy] of MOVES) {
                const px = i + dx;
                const py = j + dy;
                if(px < 0 || py < 0 || px >= m || py >= m) continue;
                if(result[px] === undefined) result[px] = new Array(m)
                result[px][py] = Math.max(result[px][py] ?? 0, grid[i][j])
            }
        }
    }
    return result;
};