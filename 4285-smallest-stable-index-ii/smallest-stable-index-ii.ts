function firstStableIndex(nums: number[], k: number): number {
    const n = nums.length;
    const min = new Array(n).fill(nums[n - 1]);
    let max = -1;
    for(let i = nums.length - 2; i >= 0; i--) {
        min[i] = Math.min(nums[i], min[i + 1])
    }
    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);
        const diff = max - min[i];
        if(diff <= k) return i;
    }

    return -1;
};