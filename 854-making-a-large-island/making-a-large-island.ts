const movements = [[0, -1], [0, 1], [1, 0], [-1, 0]]
function largestIsland(grid: number[][]): number {
    const m = grid.length, n = grid[0].length;
    let landSize = [];
    let max = 1;
    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(grid[i][k] > 0) {
                const size = getSizeAndMark(i, k, landSize.length + 1);
                landSize.push(size)
                max = Math.max(max, size)
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let k = 0; k < n; k++) {
            if(grid[i][k] == 0) {
                max = Math.max(max, getMaxAreaWithBridge(i, k))
            }
        }
    }

    return max;

    function getSizeAndMark(x: number, y: number, mark: number) {
        if(x < 0 || x >= m || y < 0 || y >= n || grid[x][y] <= 0) return 0;
        let size = 1;
        grid[x][y] = -1 * mark;
        for(const [dx, dy] of movements) {
            size += getSizeAndMark(x + dx, y + dy, mark);
        }
        return size;
    }

    function getMaxAreaWithBridge(x: number, y: number) {
        let size = 1;
        const seenIdx = new Set();
        for(const [dx, dy] of movements) {
            const nx = x + dx, ny = y + dy;
            if(nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] == 0) continue;
            const idx = grid[nx][ny] * -1 - 1
            if(seenIdx.has(idx)) continue;
            size += landSize[idx];
            seenIdx.add(idx)
        }
        return size;
    }

};