function longestSubarray(nums: number[]): number {
    let highest = 0;
    let count = 0, highestCount = 0;

    for(let i = 0; i < nums.length; i++) {
        if(highest === nums[i]) {
            count++
            highestCount = Math.max(highestCount, count)
        } else {
            if(nums[i] > highest) {
                highest = nums[i]
                count = 1;
                highestCount = count;
            } else {
                count = 0
            }
        }
    }
    return highestCount;
};