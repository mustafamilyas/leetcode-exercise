function numberOfArithmeticSlices(nums: number[]): number {
    if(nums.length <= 2) return 0;
    let counter = 0;
    let localCounter = 1;

    for(let i = 2; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            counter += localCounter++
        } else {
            localCounter = 1;
        }
    }

    return counter;
};