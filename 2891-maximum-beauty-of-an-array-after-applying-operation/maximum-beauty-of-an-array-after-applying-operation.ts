function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a, b)=>a - b);
    let l = 0, max = 0;
    for(let r = 0; r <= nums.length; r++) {
        max = Math.max(max, r - l);
        if(nums[r] == null || nums[l] + 2 * k >= nums[r]) continue;
        for(; l < r && nums[l] + 2 * k < nums[r]; l++){}
    }
    return max
};