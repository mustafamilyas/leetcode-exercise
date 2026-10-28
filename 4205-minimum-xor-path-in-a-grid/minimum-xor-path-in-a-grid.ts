function minCost(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    
    // dp[k] tracks all possible reachable XOR values (0 to 1023) for column k
    let dp: boolean[][] = Array.from({ length: n }, () => new Array(1024).fill(false));
    
    for (let i = 0; i < m; i++) {
        const newDp: boolean[][] = Array.from({ length: n }, () => new Array(1024).fill(false));
        for (let k = 0; k < n; k++) {
            const curVal = grid[i][k];
            
            if (i === 0 && k === 0) {
                newDp[k][curVal] = true;
                continue;
            }
            
            // Coming from the top cell
            if (i > 0) {
                for (let x = 0; x < 1024; x++) {
                    if (dp[k][x]) {
                        newDp[k][x ^ curVal] = true;
                    }
                }
            }
            
            // Coming from the left cell
            if (k > 0) {
                for (let x = 0; x < 1024; x++) {
                    if (newDp[k - 1][x]) {
                        newDp[k][x ^ curVal] = true;
                    }
                }
            }
        }
        dp = newDp;
    }
    
    // Find the minimum XOR value that is reachable at the bottom-right cell (n - 1)
    for (let x = 0; x < 1024; x++) {
        if (dp[n - 1][x]) {
            return x;
        }
    }
    
    return 0;
}