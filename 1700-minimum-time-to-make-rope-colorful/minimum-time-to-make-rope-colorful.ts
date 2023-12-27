function minCost(colors: string, neededTime: number[]): number {
    let totalCost = 0, prevCostBeforeConsecutive = 0, globalCost = 0;
    for(let i = 0; i < colors.length; i++) {
        globalCost += neededTime[i]
        if(colors[i] === colors?.[i - 1]) {
            totalCost = Math.max(
                totalCost, 
                prevCostBeforeConsecutive + neededTime[i]
            )
        } else {
            totalCost += neededTime[i]
            prevCostBeforeConsecutive = totalCost - neededTime[i]
        }
    }

    return globalCost - totalCost;
};