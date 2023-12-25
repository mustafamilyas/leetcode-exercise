function numDecodings(s: string): number {
    let dp = new Array(s.length).fill(0)
    if(s[s.length - 1] != '0') {
        dp[s.length - 1] = 1;
    }
    for(let i = s.length - 2; i >= 0; i--) {
        const double = parseInt(s.slice(i, i + 2))
        if(dp[i + 1] === 0) {
            if(double > 26 || s[i] === '0') return 0;
            dp[i] = (dp?.[i + 2] ?? 1)
        } else if(s[i] !== '0') {
            dp[i] = dp[i + 1]
            if(double <= 26) {
                dp[i] += (dp[i + 2] ?? 1)
            }
        }
    }
    return dp[0];
};