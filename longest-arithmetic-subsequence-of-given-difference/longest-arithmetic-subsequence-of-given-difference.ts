function longestSubsequence(arr: number[], difference: number): number {
    const prevHash = new Map();
    let maxCount = 0;

    for(const n of arr) {
        const prevKey = n - difference;
        const curCount = Math.max(prevHash.get(n) ?? 1, (prevHash.get(prevKey) ?? 0) + 1)
        prevHash.set(n, curCount)
        maxCount = Math.max(curCount, maxCount)
    }

    return maxCount;
};