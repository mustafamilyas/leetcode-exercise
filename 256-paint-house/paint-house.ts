function minCost(costs: number[][]): number {
    const dp = [costs[0]];
    for(let i = 1; i < costs.length; i++) {
        const [redCost, blueCost, greenCost] = costs[i]
        const red = Math.min(dp[i - 1][1] + redCost, dp[i - 1][2] + redCost);
        const blue = Math.min(dp[i - 1][0] + blueCost, dp[i - 1][2] + blueCost);
        const green = Math.min(dp[i - 1][0] + greenCost, dp[i - 1][1] + greenCost);
        dp.push([red, blue, green])
    }
    return Math.min(...dp[dp.length - 1])
};