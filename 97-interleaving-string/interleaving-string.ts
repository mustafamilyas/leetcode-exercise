function isInterleave(s1: string, s2: string, s3: string): boolean {
    if (s3.length != s1.length + s2.length) return false;

    const dp = new Array(s1.length + 1).fill(false).map(()=> new Array(s2.length + 1))
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = true;
            } else if (i == 0) {
                dp[i][j] = dp[i][j - 1] && s2[j - 1] == s3[i + j - 1];
            } else if (j == 0) {
                dp[i][j] = dp[i - 1][j] && s1[i - 1] == s3[i + j- 1];
            } else {
                dp[i][j] = 
                (dp[i - 1][j] && s1[i - 1] == s3[i + j- 1]) || 
                (dp[i][j - 1] && s2[j - 1] == s3[i + j- 1]);
            }
        }
    }
    return dp[s1.length][s2.length];
};