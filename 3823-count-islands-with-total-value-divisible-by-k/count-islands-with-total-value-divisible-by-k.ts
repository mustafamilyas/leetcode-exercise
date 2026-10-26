const dm = [[0, 1],[0, -1],[-1, 0],[1, 0]];
function countIslands(grid: number[][], k: number): number {
    let count = 0;
    const m = grid.length, n = grid[0].length;
    const visited = Array.from({ length: m }, () => new Array(n).fill(false))
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] > 0 && !visited[i][j]) {
                const value = getValue(i, j);
                if(value % k == 0) count++;
            }
        }
    }
    return count;
    function getValue(x: number, y: number) {
        if(!grid?.[x]?.[y] || visited[x][y]) return 0;
        visited[x][y] = true;
        let value = grid[x][y];
        for(const [dx, dy] of dm) {
            value += getValue(dx + x, dy + y);
        }
        return value;
    }
};