function resultsArray(nums: number[], k: number): number[] {
    let counter = 0;
    const result = new Array(nums.length - k + 1).fill(-1)
    for(let i = 0; i < nums.length; i++) {
        if(!counter || nums[i] - nums[i - 1] === 1) counter++
        else counter = 1
        if(counter >= k) result[i + 1 - k] = nums[i]
    }
    return result;
};