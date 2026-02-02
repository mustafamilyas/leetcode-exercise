function minimumCost(nums: number[]): number {
    const firstCost = nums[0];
    return nums.slice(1).sort((a, b)=>a - b).slice(0, 2).reduce((a, b)=> a + b) + firstCost;
};