function maximumScore(nums: number[], multipliers: number[]): number {
    const dp = new Array(multipliers.length + 1)
                .fill(0)

    for(let mIndex = multipliers.length - 1; mIndex >= 0; mIndex--) {
        for (let left = 0; left <= mIndex; left++) {
                dp[left] = Math.max(multipliers[mIndex] * nums[left] + dp[left + 1],
                                   multipliers[mIndex] * nums[nums.length - 1 - (mIndex - left)] + dp[left]);
        }
    }
    
    return dp[0]
};

function topDown(nums: number[], multipliers: number[]): number {
    const memo = new Array(multipliers.length).fill(0).map(()=> new Array(nums.length))
    function dp(i: number, left: number): number {
        if(i === multipliers.length) return 0;
        if(memo[i][left] !== undefined) return memo[i][left];
        const right = nums.length - (i - left) - 1
        const takeLeft = nums[left] * multipliers[i] + dp(i + 1, left + 1);
        const takeRight = nums[right] * multipliers[i] + dp(i + 1, left);
        memo[i][left] = Math.max(takeLeft, takeRight);
        return memo[i][left]
    }
    
    return dp(0, 0);
}