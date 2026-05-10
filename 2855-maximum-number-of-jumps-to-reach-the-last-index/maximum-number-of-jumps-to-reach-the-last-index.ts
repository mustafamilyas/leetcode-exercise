function maximumJumps(nums: number[], target: number): number {
    const n = nums.length;
    const res = Array.from({ length: n }, () => new Array(n).fill(-1));
    res[0][0] = 0;
    for(let i = 0; i < n; i++) {
        res[i][i] = res?.[i - 1]?.[i] ?? 0; 
        for(let k = i + 1; k < n; k++) {
            const inrange = Math.abs(nums[i] - nums[k]) <= target && res[i][i] > -1;
            res[i][k] = Math.max(inrange ? (res[i][i] + 1): -1, (res?.[i - 1]?.[k] ?? - 1));
        }
    }
    return res[n - 1][n - 1]
};


/**



 */