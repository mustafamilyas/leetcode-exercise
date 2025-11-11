function findMaxForm(strs: string[], m: number, n: number): number {
    const dp = new Array(m + 1).fill(null).map(()=>new Array(n + 1).fill(0));
    for(const str of strs) {
        let zeros = 0, ones = 0;
        for(let i = 0; i < str.length; i++) str.charAt(i) == '0' ? zeros++ : ones++;
        for(let k = m; k >= zeros; k--) {
            for(let l = n; l >= ones; l--) {
                dp[k][l] = Math.max(dp[k][l] ?? 0, dp[k - zeros][l - ones] + 1);
            }
        }

    }
    return dp[m][n]
};