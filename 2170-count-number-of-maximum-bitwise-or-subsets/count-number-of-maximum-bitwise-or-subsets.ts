function countMaxOrSubsets(nums: number[]): number {
    const max = nums.reduce((acc, cur)=>acc | cur, 0)
    const dp = new Array(max + 1).fill(0)
    dp[0] = 1
    for(const n of nums) {
        const prev = [...dp]
        for(let i = 0; i <= max; i++) {
            dp[i | n] += prev[i]
        }
    }
    return dp[max]
};