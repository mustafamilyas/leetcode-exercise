function minCostClimbingStairs(cost: number[]): number {
    // start from top
    let prev = 0;
    let cur = cost[cost.length - 1];

    for(let i = cost.length - 2; i >= 0; i--) {
        const next = cost[i] + Math.min(prev, cur);
        prev = cur;
        cur = next;
    }

    return Math.min(prev, cur)
};