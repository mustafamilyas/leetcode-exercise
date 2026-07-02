const movements = [[0, 1], [0, -1], [1, 0], [-1, 0]];
function findSafeWalk(grid: number[][], health: number): boolean {
    const m = grid.length;
    const n = grid[0].length;
    const cost = Array.from({ length: m }, () => new Array(n).fill(Number.MAX_SAFE_INTEGER))
    const queue = [[0, 0]];
    cost[0][0] = grid[0][0];
    while(queue.length) {
        const [x, y] = queue.shift();
        if(x == m - 1 && y == n - 1) {
            return cost[m - 1][n - 1] < health;
        }

        for(const [dx, dy] of movements) {
            const nx = dx + x;
            const ny = dy + y;
            if(nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            const ncost = cost[x][y] + grid[nx][ny];
            if(ncost >= health || ncost >= cost[nx][ny]) continue;
            cost[nx][ny] = ncost;
            if(grid[nx][ny] == 0) {
                queue.unshift([nx, ny])
            } else {
                queue.push([nx, ny])
            }
        }
    }
    return cost[m - 1][n - 1] < health;
};