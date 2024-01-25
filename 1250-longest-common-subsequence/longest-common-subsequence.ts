function longestCommonSubsequence(text1: string, text2: string): number {
    const m = text1.length, n = text2.length;
    let prev = new Array(n).fill(0);

    for(let i = 0; i < m; i++) {
        const cur = new Array(n).fill(0)
        for(let k = 0; k < n; k++) {
            if(text1[i] === text2[k]) {
                cur[k] = (prev?.[k - 1] ?? 0) + 1;
            } else {
                cur[k] = Math.max(cur?.[k - 1] ?? 0, prev[k])
            }
        }
        prev = cur
    }
    
    return prev[n - 1]
};

