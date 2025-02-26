function maxAbsoluteSum(nums: number[]): number {
    let sum = 0, min = 0, max = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, sum)
        max = Math.max(max, sum)
    }
    return max - min
};

// 1, -3, 2, 3, -4
// 1, -2, 0, 3, -1
// -1, -2, 1, -1, -4