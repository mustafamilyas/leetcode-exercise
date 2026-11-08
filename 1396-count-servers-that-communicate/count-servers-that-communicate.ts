function countServers(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    let con_servers = 0;
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(grid[i][k]) {
                rows[i]++;
                cols[k]++;
            }
        }
    }
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(grid[i][k] && (rows[i] > 1 || cols[k] > 1)) con_servers++
        }
    }
    return con_servers;
};