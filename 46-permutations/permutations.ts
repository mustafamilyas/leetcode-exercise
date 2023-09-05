function permute(nums: number[]): number[][] {
    if(nums.length === 0) return [];
    if(nums.length  === 1) return [nums]
    const result = []
    for(let i = 0; i < nums.length; i++) {
        const nextSet = [...nums.slice(0, i), ...nums.slice(i + 1)]
        const localPermute = permute(nextSet).map((childSet) => [nums[i], ...childSet]);
        result.push(...localPermute)
    }
    return result;
};