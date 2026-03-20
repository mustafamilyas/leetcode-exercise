function minAbsDiff(grid: number[][], k: number): number[][] {
    const m = grid.length, n = grid[0].length;
    const result = Array.from({ length: m - k + 1 }, () => new Array(n - k + 1).fill(0));
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result[i].length; j++) {
            let min = Number.MAX_SAFE_INTEGER;
            const set = new Set<number>();
            for(let x = 0; x < k; x++) {
                for(let y = 0; y < k; y++) {
                    set.add(grid[i + x][j + y])
                }
            }
            const res: number[] = Array.from(set)
            res.sort((a, b)=> a - b);
            for(let i = 0; i < res.length - 1; i++) {
                min = Math.min(min, res[i + 1] - res[i])
            }
            result[i][j] = min == Number.MAX_SAFE_INTEGER ? 0 : min;
        }
    }
    return result;
};