function minimumDeleteSum(s1: string, s2: string): number {
    const n = s1.length;
    const m = s2.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    let total = 0;
    for(let i = 0; i < n; i++) {
        const c1 = s1.charCodeAt(i);
        total += c1;
        for(let k = 0; k < m; k++) {
            const c2 = s2.charCodeAt(k);
            if(i == 0) total += c2;
            if(c1 == c2) {
                dp[i + 1][k + 1] = dp[i][k] + c1;
            } else {
                dp[i + 1][k + 1] = Math.max(dp[i][k + 1], dp[i + 1][k]) 
            }
        }
    }
    return total - 2 * dp[n][m];
};

/**
   d  e  l  e  t  e
l

 */