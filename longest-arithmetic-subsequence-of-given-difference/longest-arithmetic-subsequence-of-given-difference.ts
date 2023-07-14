function longestSubsequence(arr: number[], difference: number): number {
    const prevHash = {};
    let maxCount = 0;

    for(const n of arr) {
        const prevKey = n - difference;
        if(prevHash[prevKey]) {
            const curCount = prevHash?.[n] ?? 0
            prevHash[n] = Math.max(curCount, prevHash[prevKey] + 1)
        } else {
            prevHash[n] = 1;
        }
        if(maxCount < prevHash[n]) {
            maxCount = prevHash[n];
        }
    }

    return maxCount;
};