function maxTotalValue(nums: number[], k: number): number {
    let max = -Infinity, min = Infinity;
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[i])
    }
    return (max - min) * k
};