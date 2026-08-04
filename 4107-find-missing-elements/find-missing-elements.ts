function findMissingElements(nums: number[]): number[] {
    const set = new Set();
    let max = -Infinity, min = Infinity;
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i]);
        set.add(nums[i])
    }
    for(let i = min; i <= max; i++) {
        if(!set.has(i)) res.push(i)
    }
    return res;
};