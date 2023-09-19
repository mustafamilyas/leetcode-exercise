function findDuplicate(nums: number[]): number {
    for(let i = 0; i < nums.length; ) {
        const cur = nums[i]
        if(cur === i + 1) {
            i++
        } else if(cur === nums[cur - 1]) {
            return cur
        } else {
            nums[i] = nums[cur - 1];
            nums[cur - 1] = cur;
        }
    }
    return 0;
};