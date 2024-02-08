function numSquares(n: number): number {
    const dp = new Array(n + 1);
    dp[0] = 0

    for(let i = 1; i <= n; i++) {
        const x = Math.floor(Math.sqrt(i));
        for(let k = x; k >= 1; k--) {
            const remainder =  i - k ** 2;
            dp[i] = Math.min(1 + dp[remainder], dp[i] ?? Number.MAX_SAFE_INTEGER);
        }
    }
    return dp[n];
};