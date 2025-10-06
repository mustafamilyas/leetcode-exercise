const MOVEMENTS = [[0, 1], [0, -1], [-1, 0], [1, 0]]
function swimInWater(grid: number[][]): number {
    const posQueue = new MinPriorityQueue<number[]>((value) => value[2]); // [x, y, elevation]
    const posSet = new Set();
    const m = grid.length;
    const n = grid[0].length;
    let t = 0;
    posQueue.enqueue([0, 0, grid[0][0]]);
    let finalKey = getKey(m - 1, n - 1);
    while(!posSet.has(finalKey)) {
        const val = posQueue.dequeue();
        if(!val) return -1;
        const [x, y, elevation] = val;
        if(posSet.has(getKey(x, y))) continue;
        posSet.add(getKey(x, y))
        t = Math.max(t, elevation);
        for(const [dx, dy] of MOVEMENTS) {
            const nx = x + dx;
            const ny = y + dy;
            if(isValidNextPos(nx, ny)) {
                posQueue.enqueue([nx, ny, grid[nx][ny]]);
            }
        }
    }
    return t;

    function isValidNextPos(x: number, y: number): boolean {
        return x >= 0 && y >= 0 && x < m && y < m && !posSet.has(getKey(x, y))
    }

    function getKey(x: number, y: number): string {
        return `${x}:${y}`
    }
};