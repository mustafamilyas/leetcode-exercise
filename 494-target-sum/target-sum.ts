function findTargetSumWays(nums: number[], target: number): number {
    let ways = 0;
    pick(0, 0)
    return ways;
    
    function pick(index: number, curSum: number) {
        if(index === nums.length) {
            if(curSum === target) ways++
            return;
        }
        pick(index + 1, curSum + nums[index])
        pick(index + 1, curSum - nums[index])
    }
};