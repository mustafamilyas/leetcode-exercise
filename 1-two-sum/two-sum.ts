function twoSum(nums: number[], target: number): number[] {
    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const pair = target - nums[i]
        if(map[pair] !== undefined) return [map[pair],i]
        map[nums[i]] = i;
    }

    return []
};