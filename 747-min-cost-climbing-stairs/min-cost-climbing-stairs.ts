function minCostClimbingStairs(cost: number[]): number {
    let prev = 0;
    let cur = cost[0];

    for(let i = 1; i < cost.length; i++) {
        const next = cost[i] + Math.min(prev, cur);
        prev = cur;
        cur = next;
    }

    return Math.min(prev, cur)
};