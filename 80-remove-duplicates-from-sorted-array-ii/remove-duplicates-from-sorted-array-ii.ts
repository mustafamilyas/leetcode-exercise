function removeDuplicates(nums: number[]): number {
    let curChar = nums[0];
    let curCounter = 1;
    let index = 1;

    for(let i = 1; i < nums.length; i++) {
        if(curChar === nums[i]) {
            curCounter++
        } else {
            curChar = nums[i]
            curCounter = 1;
        }
        if(curCounter < 3) {
            nums[index] = nums[i]
            index++;
        }
    }
    return index;
};