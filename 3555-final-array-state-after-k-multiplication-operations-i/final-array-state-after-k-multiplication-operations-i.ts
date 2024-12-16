function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    for(let i = 0; i < k; i++) {
        const min = Math.min(...nums);
        const idx = nums.findIndex((v)=> v === min);
        nums[idx] *= multiplier
    }
    return nums;
};