function longestCommonSubsequence(text1: string, text2: string): number {
    const memo = new Array(text1.length + 1).fill([]).map(()=> new Array(text2.length + 1).fill(0))
    
    for(let i = text1.length - 1; i >= 0; i--) {
        for(let j = text2.length - 1; j >= 0; j--) {
            if(text1[i] === text2[j]) {
                memo[i][j] = memo[i + 1][j + 1] + 1;
            } else {
                memo[i][j] = Math.max(memo[i][j+1], memo[i+1][j])
            }
        }
    }
    
    return memo[0][0]
};

