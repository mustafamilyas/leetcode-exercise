function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        if (lower === nums[i]){
            lower++
        } else if (lower < nums[i]){
            result.push([lower, nums[i] - 1])
            lower = nums[i] + 1
        }
    }
    if(lower <= upper) {
        result.push([lower, upper])
    }
    return result;
};