function minimumCost(cost1: number, cost2: number, costBoth: number, need1: number, need2: number): number {
    const maxNeed = Math.max(need1, need2);
    const minNeed = Math.min(need1, need2);

    return Math.min(
        minNeed * costBoth + (need1 - minNeed) * cost1 + (need2 - minNeed) * cost2,
        cost1 * need1 + cost2 * need2, 
        costBoth * maxNeed
    )
};