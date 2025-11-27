function maxSubarraySum(nums: number[], k: number): number {
    let max = Number.MIN_SAFE_INTEGER;
    const n = nums.length;
    const leftSum = Array.from({ length: n }, () => 0);
    const cache = Array.from({ length: n }, () => 0);
    for(let i = 0; i < n; i++) {
        leftSum[i] = (leftSum[i - 1] ?? 0) + nums[i];
        if(i >= k - 1) {
            let ls = leftSum[i] - (leftSum[i - k] ?? 0);
            cache[i] = Math.max(ls + (cache[i - k] ?? 0), ls);
            max = Math.max(max, cache[i])
        }
    }
    return max;
};