function maxRotateFunction(nums: number[]): number {
    const n = nums.length;
    let prev = 0, numSum = 0, max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < n; i++) {
        numSum += nums[i];
        prev += i * nums[i];
    }
    for(let i = n - 1; i >= 0; i--) {
        max = Math.max(max, prev);
        prev += numSum - n * nums[i];
    }
    return max;
};