function divideArray(nums: number[], k: number): number[][] {
    nums.sort((a,b)=>a-b);
    const result = [[nums[0]]]
    for(let i = 1; i < nums.length; i++) {
        const curArray = result[result.length - 1];
        if(curArray.length === 3) result.push([nums[i]])
        else if(nums[i] - curArray[0] > k) return []
        else curArray.push(nums[i])
    }
    if(!result.length || result[result.length -1].length !== 3) return []
    return result
};