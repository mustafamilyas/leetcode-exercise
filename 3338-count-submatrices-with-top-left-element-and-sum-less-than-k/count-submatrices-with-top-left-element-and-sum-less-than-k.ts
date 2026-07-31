function countSubmatrices(grid: number[][], k: number): number {
    const m = grid.length, n = grid[0].length;
    let total = 0;
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            const top = grid?.[i - 1]?.[j] ?? 0;
            const dia = grid?.[i - 1]?.[j - 1] ?? 0;
            const left = grid?.[i]?.[j - 1] ?? 0;
            grid[i][j] += top + left - dia;
            if(grid[i][j] <= k) total++
        }
    }
    return total;
};