function longestCommonSubsequence(text1: string, text2: string): number {
    const memo = new Array(text1.length)
        .fill(0)
        .map(()=> new Array(text2.length).fill(0));
    
    let prev = 0;
    for(let i = 0; i < text1.length; i++) {
        for(let j = 0; j < text2.length; j++) {
            if(text1[i] === text2[j]) {
                memo[i][j] = 1 + (memo?.[i - 1]?.[j - 1] ?? 0)
            } else {
                memo[i][j] = Math.max(memo?.[i - 1]?.[j] ?? 0, memo?.[i]?.[j - 1] ?? 0)
            }
        }
    }
    return memo[text1.length - 1][text2.length - 1]
};

