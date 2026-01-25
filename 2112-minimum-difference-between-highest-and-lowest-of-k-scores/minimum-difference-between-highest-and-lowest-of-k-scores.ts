function minimumDifference(nums: number[], k: number): number {
    nums.sort((a, b)=> a - b);
    const end = nums.length - k + 1;
    let diff = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < end; i++) {
        diff = Math.min(diff, nums[i + k - 1] - nums[i]);
    }
    return diff;
};