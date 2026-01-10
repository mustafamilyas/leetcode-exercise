function minimumDeleteSum(s1: string, s2: string): number {
    const n = s1.length;
    const m = s2.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    for(let i = 0; i < n; i++) {
        dp[i + 1][0] = dp[i][0] + s1.charCodeAt(i);
    }
    for(let i = 0; i < m; i++) {
        dp[0][i + 1] = dp[0][i] + s2.charCodeAt(i);
    }
    for(let i = 0; i < n; i++) {
        const c1 = s1.charCodeAt(i);
        for(let k = 0; k < m; k++) {
            const c2 = s2.charCodeAt(k);
            const top = (dp?.[i]?.[k + 1] ?? Number.MAX_SAFE_INTEGER) + c1;
            const left = (dp?.[i+1]?.[k] ?? Number.MAX_SAFE_INTEGER) + c2;
            const diag = (dp?.[i]?.[k] ?? 0) + (c1 == c2 ? 0 : c1 + c2);
            dp[i + 1][k + 1] = Math.min(top, left, diag);
        }
    }
    return dp[n][m];
};

/**
   d  e  l  e  t  e
l

 */