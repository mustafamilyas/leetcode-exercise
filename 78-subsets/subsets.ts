function subsets(nums: number[]): number[][] {
    const result = [[]]
    for(let i = 0; i < nums.length; i++) {
        const curCombine = [...result]
        for(const combine of curCombine) {
            result.push([...combine, nums[i]])
        }
    }
    return result;
};