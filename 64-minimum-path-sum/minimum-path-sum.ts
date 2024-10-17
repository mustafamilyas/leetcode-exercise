function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let prev = new Array(n).fill(0);
    grid?.[0]?.forEach((item, i) => {
        prev[i] = item + (prev[i - 1] ?? 0)
    })
    let current = new Array(n).fill(0)
    for(let i = 1; i < m; i++) {
        for(let k = 0; k < n; k++) {
            current[k] = Math.min(current[k - 1] ?? Number.MAX_SAFE_INTEGER, prev[k]) + grid[i][k]
        }
        const temp = prev;
        prev = current;
        current = temp;
    }
    return prev[n - 1]
};