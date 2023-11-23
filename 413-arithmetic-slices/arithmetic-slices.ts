function numberOfArithmeticSlices(nums: number[]): number {
    if(nums.length <= 2) return 0;
    let currentDiff = nums[1] - nums[0];
    let counter = 0;
    let localCounter = 1;

    for(let i = 2; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] === currentDiff) {
            counter += localCounter++
        } else {
            currentDiff = nums[i] - nums[i - 1];
            localCounter = 1;
        }
    }

    return counter;
};