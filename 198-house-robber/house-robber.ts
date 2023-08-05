function rob(nums: number[]): number {
    let prev = 0;
    let cur = nums[0];

    for(let i = 1; i < nums.length; i++) {
        const next = Math.max(prev + nums[i], cur)
        prev = cur;
        cur = next;
    }
    
    return cur;
};