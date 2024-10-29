function maxMoves(grid: number[][]): number {
    const m = grid.length, n = grid[0].length
    const memo = new Array(m).fill(null).map(()=>new Array(n))
    function recursive(x: number, y: number) {
        if(y === n - 1) return y;
        if(memo?.[x]?.[y] !== undefined) return memo[x][y]
        let max = y
        for(let i = -1; i < 2; i++) {
            const nextX = x + i
            if(nextX < 0 || nextX >= m || grid[nextX][y + 1] <= grid[x][y]) continue;
            max = Math.max(max, recursive(nextX, y + 1))
        }
        memo[x][y] = max
        return max;
    }
    let max = 0;
    for(let i = 0; i < m; i++) {
        max = Math.max(max, recursive(i, 0))
    }
    return max;
};