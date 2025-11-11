function findMaxForm(strs: string[], m: number, n: number): number {
    const dp = new Array(m + 1).fill(null).map(()=>new Array(n + 1));
    let max = 0;
    dp[0][0] = 0;
    for(const str of strs) {
        let zeros = 0, ones = 0;
        for(let i = 0; i < str.length; i++) str.charAt(i) == '0' ? zeros++ : ones++;
        for(let k = m; k >= zeros; k--) {
            for(let l = n; l >= ones; l--) {
                if(dp[k - zeros][l - ones] == null) continue
                dp[k][l] = Math.max(dp[k][l] ?? 0, dp[k - zeros][l - ones] + 1);
                max = Math.max(max, dp[k][l])
            }
        }

    }
    return max
};