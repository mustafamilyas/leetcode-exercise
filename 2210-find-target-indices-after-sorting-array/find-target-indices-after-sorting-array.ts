function targetIndices(nums: number[], target: number): number[] {
    let starting = 0, count = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < target) starting++
        else if(nums[i] == target) count++
    }
    const result = [];
    for(let i = 0; i < count; i++) {
        result.push(starting + i)
    }
    return result;
};