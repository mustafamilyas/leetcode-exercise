function longestMonotonicSubarray(nums: number[]): number {
    let cur = 1, asc = nums[0] < nums[1], max = 1;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] == nums[i + 1]) {
            cur = 1;
        } else if(nums[i] < nums[i + 1]) {
            if(!asc) {
                cur = 1;
                asc = true;
            }
            cur++
        } else {
            if(asc) {
                cur = 1;
                asc = false;
            }
            cur++
        }
        max = Math.max(max, cur)
    }  
    return max;
};