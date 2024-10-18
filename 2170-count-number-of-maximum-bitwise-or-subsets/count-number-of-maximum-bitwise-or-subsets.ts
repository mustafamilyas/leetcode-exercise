function countMaxOrSubsets(nums: number[]): number {
    const max = nums.reduce((acc, cur)=>acc | cur, 0)
    const dp = new Array(max + 1).fill(0)
    dp[0] = 1
    for(const n of nums) {
        for(let i = max; i >= 0; i--) {
            dp[i | n] += dp[i]
        }
    }
    return dp[max]
};