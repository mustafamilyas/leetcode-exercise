function minCost(colors: string, neededTime: number[]): number {
    let validCost = 0, prevCostBeforeConsecutive = 0, totalCost = 0;
    for(let i = 0; i < colors.length; i++) {
        totalCost += neededTime[i]
        if(colors[i] === colors?.[i - 1]) {
            validCost = Math.max(
                validCost, 
                prevCostBeforeConsecutive + neededTime[i]
            )
        } else {
            validCost += neededTime[i]
            prevCostBeforeConsecutive = validCost - neededTime[i]
        }
    }

    return totalCost - validCost;
};