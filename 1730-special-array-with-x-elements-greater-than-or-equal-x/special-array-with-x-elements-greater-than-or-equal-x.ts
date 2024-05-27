function specialArray(nums: number[]): number {
    if(nums.length === 1) return nums[0] >= 1 ? 1 : -1
    nums.sort((a,b)=>b-a);
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] >= i + 1 && (i + 1 === nums.length || nums[i + 1] < i + 1)) return i + 1
    }
    return -1
};