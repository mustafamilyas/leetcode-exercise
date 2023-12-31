function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if(obstacleGrid[0][0]) return 0;
    
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(null).map(()=>new Array(n).fill(0))
    dp[0][0] = 1;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) continue;
            
            if(obstacleGrid[i][j] === 0) {
                dp[i][j] = (dp?.[i - 1]?.[j] ?? 0) + (dp?.[i]?.[j - 1] ?? 0)
            }            
        }
    }
    return dp[m - 1][n - 1]
};