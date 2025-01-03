function waysToSplitArray(nums: number[]): number {
    let sum = 0, lsum = 0, ways = 0;
    for(let i = nums.length - 1; i > 0; i--) {
        sum += nums[i]
    }
    for(let i = 0; i < nums.length - 1; i++) {
        lsum += nums[i]
        if(lsum >= sum) ways++
        sum -= nums[i + 1]
    }
    return ways;
};