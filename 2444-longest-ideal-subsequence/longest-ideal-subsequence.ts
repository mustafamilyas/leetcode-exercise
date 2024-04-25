function longestIdealString(s: string, k: number): number {
    const combineArray = new Array(26).fill(0)
    let max = 1;
    for(let i = 0; i < s.length; i++) {
        const cIdx = s.charCodeAt(i) - 97;
        const start = Math.max(0, cIdx - k);
        const end = Math.min(combineArray.length - 1, cIdx + k)
        let localMax = 0;
        for(let j = start; j <= end; j++) {
            localMax = Math.max(localMax, combineArray[j])
        }
        combineArray[cIdx] = localMax + 1
    }
    return Math.max(...combineArray)
};