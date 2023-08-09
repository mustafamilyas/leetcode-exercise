function minDifference(nums: number[]): number {
    if(nums.length <= 4) return 0;
    nums.sort((a,b)=>a-b);
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < 4; i++) {
        min = Math.min(min, nums[nums.length - 4 + i] - nums[i])
    }
    return min;
};