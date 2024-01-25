function minDistance(word1: string, word2: string): number {
    const m = word1.length, n = word2.length;
    let prev = new Array(n).fill(0);

    for(let i = 0; i < m; i++) {
        const cur = new Array(n).fill(0);
        for(let k = 0; k < n; k++) {
            if(word1[i] === word2[k]) {
                cur[k] = (prev?.[k - 1] ?? 0) + 1;
            } else {
                cur[k] = Math.max(prev[k], cur?.[k - 1] ?? 0)
            }
        }
        prev = cur;
    }
    const similarWordLength = prev[n - 1]
    return m + n - 2 * similarWordLength
};