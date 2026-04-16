function solveQueries(nums: number[], queries: number[]): number[] {
    const startMap = new Map<number, number>();
    const prevMap = new Map<number, number>();
    const distanceMap = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    const n = nums.length;
    for(let i = 0; i < n; i++) {
        const cur = nums[i];
        if(prevMap.has(cur)) {
            const prevIdx = prevMap.get(cur);
            prevMap.set(cur, i);
            distanceMap[prevIdx] = Math.min(distanceMap[prevIdx] ?? Number.MAX_SAFE_INTEGER, i - prevIdx)
            distanceMap[i] = Math.min(distanceMap[i] ?? Number.MAX_SAFE_INTEGER, i - prevIdx)
        } else {
            startMap.set(cur, i);
            prevMap.set(cur, i);
        }
    }
    for(const [val, idx] of startMap.entries()) {
        const endIdx = prevMap.get(val);
        if(idx !== endIdx) {
            const newDistance = idx + n - endIdx;
            distanceMap[endIdx] = Math.min(distanceMap[endIdx] ?? Number.MAX_SAFE_INTEGER, newDistance)
            distanceMap[idx] = Math.min(distanceMap[idx] ?? Number.MAX_SAFE_INTEGER, newDistance)
        }
    }
    return queries.map((idx) => distanceMap[idx] === Number.MAX_SAFE_INTEGER ? -1 : distanceMap[idx])
};