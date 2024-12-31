function mincostTickets(days: number[], costs: number[]): number {
    const lastday = days[days.length - 1]
    const dp = new Array(lastday + 1).fill(0)
    let i = 0;
    for(let cur = 1; cur <= lastday; cur++) {
        if(cur < days[i]) dp[cur] = dp[cur - 1]
        else {
            i++
            dp[cur] = Math.min(
                dp[Math.max(cur - 1, 0)] + costs[0],
                dp[Math.max(cur - 7, 0)] + costs[1],
                dp[Math.max(cur - 30, 0)] + costs[2],
            )
        }
    }
    return dp[lastday]
};