function combinationSum4(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for(let i = 1; i <= target; i++) {
    for(const n of nums) {
      if(i >= n) {
        dp[i] += dp[i - n]
      }
    }
  }
  return dp[target]
};