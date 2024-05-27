function specialArray(nums: number[]): number {
    nums.sort((a,b)=>b-a);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= i + 1 && (i + 1 === nums.length || nums[i + 1] < i + 1)) return i + 1
    }
    return -1
};